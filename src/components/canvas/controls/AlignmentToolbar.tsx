import React from 'react';
import {
    AlignLeft,
    AlignCenter,
    AlignRight,
    AlignVerticalJustifyStart,
    AlignVerticalJustifyCenter,
    AlignVerticalJustifyEnd,
    SeparatorHorizontal,
    SeparatorVertical,
    Lock,
    Unlock,
    Users,
    Ungroup,
    Package,
    Minus,
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Type
} from 'lucide-react';
import { ColorPicker } from './ColorPicker';
import { LineStylePicker } from './LineStylePicker';
import { FontFamilyPicker } from './FontFamilyPicker';
import { LineHeightPicker } from './LineHeightPicker';
import { LetterSpacingControl } from './LetterSpacingControl';

export interface AlignmentAction {
    id: string;
    label: string;
    icon: React.ReactNode;
    action: () => void;
    disabled?: boolean;
    separator?: boolean;
}

export interface AlignmentToolbarProps {
    selectedCount: number;
    onAlign: (type: 'left' | 'center' | 'right' | 'top' | 'middle' | 'bottom') => void;
    onDistribute: (direction: 'horizontal' | 'vertical') => void;
    onGroup: () => void;
    onLock: () => void;
    onCreateSolution?: () => void;
    isGrouped: boolean;
    isLocked: boolean;
    // Shape styling props
    selectedItems?: any[]; // Array of selected items to check if they're shapes
    onStyleChange?: (property: string, value: any) => void; // Callback for style changes
}

export function AlignmentToolbar({
    selectedCount,
    onAlign,
    onDistribute,
    onGroup,
    onLock,
    onCreateSolution,
    isGrouped,
    isLocked,
    selectedItems = [],
    onStyleChange,
    position
}: AlignmentToolbarProps & { position?: { top: number; left: number } }) {
    const needsMultiple = selectedCount < 2;
    const needsThree = selectedCount < 3;
    const hasSelection = selectedCount > 0;

    // Check if selected items are stylable (shape, text, sticky-note)
    const hasStylable = selectedItems.some(item => ['shape', 'text', 'sticky-note', 'frame'].includes(item.entityType));

    // Get representative item for current values
    const firstItem = selectedItems.find(item => ['shape', 'text', 'sticky-note', 'frame'].includes(item.entityType));

    let currentFillColor = '#3b82f6';
    let currentStrokeColor = '#1e40af';
    let currentStrokeWidth = 2;
    let currentStrokeStyle = 'solid';
    let currentTextColor = '#000000';
    let currentFontSize = 14;
    let currentFontFamily = 'Inter, sans-serif';
    let currentFontWeight = 'normal';
    let currentFontStyle = 'normal';
    let currentTextAlign = 'center';
    let currentUnderline = false;
    let currentStrikethrough = false;
    let currentLineHeight = 1.5;
    let currentLetterSpacing = 0;

    if (firstItem) {
        if (firstItem.entityType === 'shape') {
            currentFillColor = firstItem.data?.style?.fillColor || currentFillColor;
            currentStrokeColor = firstItem.data?.style?.strokeColor || currentStrokeColor;
            currentStrokeWidth = firstItem.data?.style?.strokeWidth || 2;
            currentStrokeStyle = firstItem.data?.style?.strokeStyle || 'solid';

            currentTextColor = firstItem.data?.textColor || currentTextColor;
            currentFontSize = firstItem.data?.fontSize || currentFontSize;
            currentFontFamily = firstItem.data?.fontFamily || currentFontFamily;
            currentFontWeight = firstItem.data?.fontWeight || currentFontWeight;
            currentFontStyle = firstItem.data?.fontStyle || currentFontStyle;
            currentTextAlign = firstItem.data?.textAlign || currentTextAlign;
            currentUnderline = firstItem.data?.underline || false;
            currentStrikethrough = firstItem.data?.strikethrough || false;
            currentLineHeight = firstItem.data?.lineHeight || currentLineHeight;
            currentLetterSpacing = firstItem.data?.letterSpacing || currentLetterSpacing;
        } else if (firstItem.entityType === 'text') {
            currentTextColor = firstItem.data?.color || currentTextColor;
            currentFontSize = firstItem.data?.fontSize || currentFontSize;
            currentFontFamily = firstItem.data?.fontFamily || currentFontFamily;
            currentFontWeight = firstItem.data?.bold ? 'bold' : 'normal';
            currentFontStyle = firstItem.data?.italic ? 'italic' : 'normal';
            currentTextAlign = firstItem.data?.align || currentTextAlign;
            currentUnderline = firstItem.data?.underline || false;
            currentStrikethrough = firstItem.data?.strikethrough || false;
            currentLineHeight = firstItem.data?.lineHeight || currentLineHeight;
            currentLetterSpacing = firstItem.data?.letterSpacing || currentLetterSpacing;
            currentFillColor = 'transparent';
        } else if (firstItem.entityType === 'sticky-note') {
            currentFillColor = firstItem.data?.color || currentFillColor;
        } else if (firstItem.entityType === 'frame') {
            currentFillColor = firstItem.data?.color || currentFillColor;
        }
    }

    const alignmentActions: AlignmentAction[] = [
        {
            id: 'align-left',
            label: 'Align Left',
            icon: <AlignLeft className="w-4 h-4" />,
            action: () => onAlign('left'),
            disabled: needsMultiple
        },
        {
            id: 'align-center',
            label: 'Align Center',
            icon: <AlignCenter className="w-4 h-4" />,
            action: () => onAlign('center'),
            disabled: needsMultiple
        },
        {
            id: 'align-right',
            label: 'Align Right',
            icon: <AlignRight className="w-4 h-4" />,
            action: () => onAlign('right'),
            disabled: needsMultiple
        },
        {
            id: 'align-top',
            label: 'Align Top',
            icon: <AlignVerticalJustifyStart className="w-4 h-4" />,
            action: () => onAlign('top'),
            disabled: needsMultiple
        },
        {
            id: 'align-middle',
            label: 'Align Middle',
            icon: <AlignVerticalJustifyCenter className="w-4 h-4" />,
            action: () => onAlign('middle'),
            disabled: needsMultiple
        },
        {
            id: 'align-bottom',
            label: 'Align Bottom',
            icon: <AlignVerticalJustifyEnd className="w-4 h-4" />,
            action: () => onAlign('bottom'),
            disabled: needsMultiple
        },
        {
            id: 'separator-1',
            label: '',
            icon: null,
            action: () => { },
            separator: true
        },
        {
            id: 'distribute-horizontal',
            label: 'Distribute Horizontally',
            icon: <SeparatorVertical className="w-4 h-4" />,
            action: () => onDistribute('horizontal'),
            disabled: needsThree
        },
        {
            id: 'distribute-vertical',
            label: 'Distribute Vertically',
            icon: <SeparatorHorizontal className="w-4 h-4" />,
            action: () => onDistribute('vertical'),
            disabled: needsThree
        },
        {
            id: 'separator-2',
            label: '',
            icon: null,
            action: () => { },
            separator: true
        },
        {
            id: 'group',
            label: isGrouped ? 'Ungroup' : 'Group',
            icon: isGrouped ? <Ungroup className="w-4 h-4" /> : <Users className="w-4 h-4" />,
            action: onGroup,
            disabled: needsMultiple
        },
        {
            id: 'lock',
            label: isLocked ? 'Unlock' : 'Lock',
            icon: isLocked ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />,
            action: onLock,
            disabled: !hasSelection
        },
        {
            id: 'separator-3',
            label: '',
            icon: null,
            action: () => { },
            separator: true
        },
        {
            id: 'create-solution',
            label: 'Create Solution',
            icon: <Package className="w-4 h-4" />,
            action: onCreateSolution || (() => { }),
            disabled: needsMultiple || !onCreateSolution
        }
    ];

    // Show toolbar if there is a selection (even single item for lock/unlock) if position is provided (floating mode)
    // Or stick to original behavior for bottom bar mode (needs multiple)
    // The user requirement implies this toolbar becomes the selection context menu.
    // So if position is provided, we show it as long as hasSelection is true.
    if (!position && selectedCount < 2) {
        return null;
    }

    if (position && !hasSelection) {
        return null;
    }

    return (
        <div
            className={position ? "absolute z-50 flex items-center gap-1 p-2 rounded-xl shadow-2xl border backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200" : "fixed bottom-20 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 p-2 rounded-xl shadow-2xl border backdrop-blur-xl"}
            style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
                top: position?.top,
                left: position?.left,
                transform: position ? 'translate(-50%, -100%)' : undefined // Center horizontally, place above
            }}
        >
            {/* Shape Styling Controls - Only show when shapes are selected */}
            {hasStylable && onStyleChange && (
                <>
                    <ColorPicker
                        value={currentFillColor}
                        onChange={(color) => onStyleChange('fillColor', color)}
                        label="Fill Color"
                    />
                    <ColorPicker
                        value={currentStrokeColor}
                        onChange={(color) => onStyleChange('strokeColor', color)}
                        label="Stroke Color"
                    />

                    {/* Stroke Width */}
                    <div className="flex items-center gap-1 px-2">
                        <Minus className="w-3 h-3" style={{ color: 'var(--color-text-muted)' }} />
                        <input
                            type="range"
                            min="0"
                            max="10"
                            step="1"
                            value={currentStrokeWidth}
                            onChange={(e) => onStyleChange('strokeWidth', parseInt(e.target.value))}
                            className="w-16 h-1 rounded-lg appearance-none cursor-pointer"
                            style={{
                                background: 'var(--color-border)',
                                accentColor: 'var(--color-primary)'
                            }}
                            title={`Stroke Width: ${currentStrokeWidth}px`}
                        />
                        <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                            {currentStrokeWidth}
                        </span>
                    </div>

                    {/* Line Style */}
                    <LineStylePicker
                        value={currentStrokeStyle}
                        onChange={(style) => onStyleChange('strokeStyle', style)}
                    />

                    {/* Separator */}
                    <div
                        className="w-px h-6 mx-1"
                        style={{ backgroundColor: 'var(--color-border)' }}
                    />

                    {/* Text Color */}
                    <ColorPicker
                        value={currentTextColor}
                        onChange={(color) => onStyleChange('textColor', color)}
                        label="Text Color"
                    />

                    {/* Font Size */}
                    <div className="flex items-center gap-1 px-2">
                        <Type className="w-3 h-3" style={{ color: 'var(--color-text-muted)' }} />
                        <input
                            type="number"
                            min="8"
                            max="72"
                            value={currentFontSize}
                            onChange={(e) => onStyleChange('fontSize', parseInt(e.target.value))}
                            className="w-12 px-1 text-xs text-center rounded border"
                            style={{
                                backgroundColor: 'var(--color-background)',
                                borderColor: 'var(--color-border)',
                                color: 'var(--color-text)'
                            }}
                        />
                    </div>

                    {/* Bold */}
                    <button
                        onClick={() => onStyleChange('fontWeight', currentFontWeight === 'bold' ? 'normal' : 'bold')}
                        className="p-2 rounded-lg transition-all duration-200"
                        style={{
                            backgroundColor: currentFontWeight === 'bold' ? 'var(--color-primary)' : 'transparent',
                            color: currentFontWeight === 'bold' ? 'white' : 'var(--color-text)'
                        }}
                        title="Bold"
                        onMouseEnter={(e) => {
                            if (currentFontWeight !== 'bold') {
                                e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (currentFontWeight !== 'bold') {
                                e.currentTarget.style.backgroundColor = 'transparent';
                            }
                        }}
                    >
                        <Bold className="w-4 h-4" />
                    </button>

                    {/* Italic */}
                    <button
                        onClick={() => onStyleChange('fontStyle', currentFontStyle === 'italic' ? 'normal' : 'italic')}
                        className="p-2 rounded-lg transition-all duration-200"
                        style={{
                            backgroundColor: currentFontStyle === 'italic' ? 'var(--color-primary)' : 'transparent',
                            color: currentFontStyle === 'italic' ? 'white' : 'var(--color-text)'
                        }}
                        title="Italic"
                    >
                        <Italic className="w-4 h-4" />
                    </button>

                    {/* Underline */}
                    <button
                        onClick={() => onStyleChange('underline', !currentUnderline)}
                        className="p-2 rounded-lg transition-all duration-200"
                        style={{
                            backgroundColor: currentUnderline ? 'var(--color-primary)' : 'transparent',
                            color: currentUnderline ? 'white' : 'var(--color-text)'
                        }}
                        title="Underline"
                        onMouseEnter={(e) => {
                            if (!currentUnderline) {
                                e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!currentUnderline) {
                                e.currentTarget.style.backgroundColor = 'transparent';
                            }
                        }}
                    >
                        <Underline className="w-4 h-4" />
                    </button>

                    {/* Strikethrough */}
                    <button
                        onClick={() => onStyleChange('strikethrough', !currentStrikethrough)}
                        className="p-2 rounded-lg transition-all duration-200"
                        style={{
                            backgroundColor: currentStrikethrough ? 'var(--color-primary)' : 'transparent',
                            color: currentStrikethrough ? 'white' : 'var(--color-text)'
                        }}
                        title="Strikethrough"
                        onMouseEnter={(e) => {
                            if (!currentStrikethrough) {
                                e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!currentStrikethrough) {
                                e.currentTarget.style.backgroundColor = 'transparent';
                            }
                        }}
                    >
                        <Strikethrough className="w-4 h-4" />
                    </button>

                    {/* Separator */}
                    <div
                        className="w-px h-6 mx-1"
                        style={{ backgroundColor: 'var(--color-border)' }}
                    />

                    {/* Font Family */}
                    <FontFamilyPicker
                        value={currentFontFamily}
                        onChange={(fontFamily) => onStyleChange('fontFamily', fontFamily)}
                    />

                    {/* Line Height */}
                    <LineHeightPicker
                        value={currentLineHeight}
                        onChange={(lineHeight) => onStyleChange('lineHeight', lineHeight)}
                    />

                    {/* Letter Spacing */}
                    <LetterSpacingControl
                        value={currentLetterSpacing}
                        onChange={(spacing) => onStyleChange('letterSpacing', spacing)}
                    />

                    {/* Separator */}
                    <div
                        className="w-px h-6 mx-1"
                        style={{ backgroundColor: 'var(--color-border)' }}
                    />

                    {/* Text Alignment */}
                    <div className="flex bg-gray-100 rounded-lg p-0.5 mx-1" style={{ backgroundColor: 'var(--color-background-secondary)' }}>
                        <button
                            onClick={() => onStyleChange('textAlign', 'left')}
                            className="p-1.5 rounded transition-all"
                            style={{
                                backgroundColor: currentTextAlign === 'left' ? 'var(--color-surface)' : 'transparent',
                                color: 'var(--color-text)',
                                boxShadow: currentTextAlign === 'left' ? '0 1px 2px rgba(0,0,0,0.1)' : 'none'
                            }}
                            title="Align Left"
                        >
                            <AlignLeft className="w-3.5 h-3.5" />
                        </button>
                        <button
                            onClick={() => onStyleChange('textAlign', 'center')}
                            className="p-1.5 rounded transition-all"
                            style={{
                                backgroundColor: currentTextAlign === 'center' ? 'var(--color-surface)' : 'transparent',
                                color: 'var(--color-text)',
                                boxShadow: currentTextAlign === 'center' ? '0 1px 2px rgba(0,0,0,0.1)' : 'none'
                            }}
                            title="Align Center"
                        >
                            <AlignCenter className="w-3.5 h-3.5" />
                        </button>
                        <button
                            onClick={() => onStyleChange('textAlign', 'right')}
                            className="p-1.5 rounded transition-all"
                            style={{
                                backgroundColor: currentTextAlign === 'right' ? 'var(--color-surface)' : 'transparent',
                                color: 'var(--color-text)',
                                boxShadow: currentTextAlign === 'right' ? '0 1px 2px rgba(0,0,0,0.1)' : 'none'
                            }}
                            title="Align Right"
                        >
                            <AlignRight className="w-3.5 h-3.5" />
                        </button>
                    </div>

                    {/* Separator */}
                    <div
                        className="w-px h-6 mx-1"
                        style={{ backgroundColor: 'var(--color-border)' }}
                    />
                </>
            )}

            {alignmentActions.map((action) => {
                // Hide align and distribute buttons when only 1 item is selected
                const isAlignOrDistribute = action.id.startsWith('align-') || action.id.startsWith('distribute-');
                if (isAlignOrDistribute && selectedCount < 2) {
                    return null;
                }

                // Hide separators before align/distribute section when only 1 item selected
                if (action.id === 'separator-1' && selectedCount < 2) {
                    return null;
                }

                if (action.separator) {
                    return (
                        <div
                            key={action.id}
                            className="w-px h-6 mx-1"
                            style={{ backgroundColor: 'var(--color-border)' }}
                        />
                    );
                }

                return (
                    <button
                        key={action.id}
                        onClick={action.action}
                        disabled={action.disabled}
                        title={action.label}
                        className="p-2 rounded-lg transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                        style={{
                            color: action.disabled ? 'var(--color-text-muted)' : 'var(--color-text)',
                            backgroundColor: action.disabled ? 'transparent' : 'transparent'
                        }}
                        onMouseEnter={(e) => {
                            if (!action.disabled) {
                                e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                    >
                        {action.icon}
                    </button>
                );
            })}
        </div>
    );
}
