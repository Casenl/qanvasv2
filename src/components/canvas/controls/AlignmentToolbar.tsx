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
    Type
} from 'lucide-react';
import { ColorPicker } from './ColorPicker';
import { StrokeControls } from './StrokeControls';
import { TextStyleControls } from './TextStyleControls';
import { LabelStyleControls } from './LabelStyleControls';
import { AlignDistributeDropdown } from './AlignDistributeDropdown';

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
    const hasStylable = selectedItems.some(item => ['shape', 'text', 'sticky-note', 'frame', 'pen', 'line', 'arrow'].includes(item.entityType));

    // Get representative item for current values
    const firstItem = selectedItems.find(item => ['shape', 'text', 'sticky-note', 'frame', 'pen', 'line', 'arrow'].includes(item.entityType));

    let currentFillColor = '#3b82f6';
    let currentStrokeColor = '#1e40af';
    let currentStrokeWidth = 2;
    let currentStrokeStyle = 'solid';
    let currentTextColor = '#000000';
    let currentFontSize = 14;
    let currentFontFamily = 'Titillium Web, sans-serif';
    let currentFontWeight = 'normal';
    let currentFontStyle = 'normal';
    let currentTextAlign = 'center';
    let currentUnderline = false;
    let currentStrikethrough = false;

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
        } else if (firstItem.entityType === 'text') {
            currentTextColor = firstItem.data?.color || currentTextColor;
            currentFontSize = firstItem.data?.fontSize || currentFontSize;
            currentFontFamily = firstItem.data?.fontFamily || currentFontFamily;
            currentFontWeight = firstItem.data?.bold ? 'bold' : 'normal';
            currentFontStyle = firstItem.data?.italic ? 'italic' : 'normal';
            currentTextAlign = firstItem.data?.align || currentTextAlign;
            currentUnderline = firstItem.data?.underline || false;
            currentStrikethrough = firstItem.data?.strikethrough || false;
            currentFillColor = 'transparent';
        } else if (firstItem.entityType === 'sticky-note') {
            currentFillColor = firstItem.data?.color || currentFillColor;
        } else if (firstItem.entityType === 'frame') {
            currentFillColor = firstItem.data?.color || currentFillColor;
        } else if (firstItem.entityType === 'pen') {
            // Pen (path) items only have stroke properties
            currentStrokeColor = firstItem.data?.strokeColor || currentStrokeColor;
            currentStrokeWidth = firstItem.data?.strokeWidth || currentStrokeWidth;
            currentStrokeStyle = firstItem.data?.strokeStyle || currentStrokeStyle;
            currentFillColor = 'transparent';
            // Label properties
            if (firstItem.data?.label) {
                currentTextColor = firstItem.data?.labelColor || '#000000';
                currentFontSize = firstItem.data?.labelSize || 14;
                currentFillColor = firstItem.data?.labelBackgroundColor || 'rgba(255, 255, 255, 0.9)';
                currentFontFamily = firstItem.data?.labelFontFamily || 'Titillium Web, sans-serif';
                currentFontWeight = firstItem.data?.labelBold ? 'bold' : 'normal';
                currentFontStyle = firstItem.data?.labelItalic ? 'italic' : 'normal';
            }
        } else if (firstItem.entityType === 'line' || firstItem.entityType === 'arrow') {
            // Line/arrow items only have stroke properties
            currentStrokeColor = firstItem.data?.strokeColor || currentStrokeColor;
            currentStrokeWidth = firstItem.data?.strokeWidth || currentStrokeWidth;
            currentStrokeStyle = firstItem.data?.strokeStyle || currentStrokeStyle;
            currentFillColor = 'transparent';
            // Label properties
            if (firstItem.data?.label) {
                currentTextColor = firstItem.data?.labelColor || '#000000';
                currentFontSize = firstItem.data?.labelSize || 14;
                currentFillColor = firstItem.data?.labelBackgroundColor || 'rgba(255, 255, 255, 0.9)';
                currentFontFamily = firstItem.data?.labelFontFamily || 'Titillium Web, sans-serif';
                currentFontWeight = firstItem.data?.labelBold ? 'bold' : 'normal';
                currentFontStyle = firstItem.data?.labelItalic ? 'italic' : 'normal';
            }
        }
    }

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

                    <StrokeControls
                        strokeColor={currentStrokeColor}
                        strokeWidth={currentStrokeWidth}
                        strokeStyle={currentStrokeStyle as 'solid' | 'dashed' | 'dotted'}
                        onStrokeColorChange={(color) => onStyleChange('strokeColor', color)}
                        onStrokeWidthChange={(width) => onStyleChange('strokeWidth', width)}
                        onStrokeStyleChange={(style) => onStyleChange('strokeStyle', style)}
                    />

                    {/* Separator - only show if we have text/fill controls coming */}
                    {(selectedItems.some(item => ['shape', 'text', 'sticky-note', 'frame'].includes(item.entityType)) ||
                        selectedItems.some(item => ['pen', 'line', 'arrow'].includes(item.entityType) && item.data?.label)) && (
                            <div
                                className="w-px h-6 mx-1"
                                style={{ backgroundColor: 'var(--color-border)' }}
                            />
                        )}

                    {/* Text/Fill Color - only for shapes, text, or pen/line/arrow WITH label */}
                    {selectedItems.some(item => ['shape', 'text', 'sticky-note', 'frame'].includes(item.entityType)) && (
                        <>
                            <TextStyleControls
                                textColor={currentTextColor}
                                fontSize={currentFontSize}
                                fontFamily={currentFontFamily}
                                fontWeight={currentFontWeight}
                                fontStyle={currentFontStyle}
                                underline={currentUnderline}
                                strikethrough={currentStrikethrough}
                                onTextColorChange={(color) => onStyleChange('textColor', color)}
                                onFontSizeChange={(size) => onStyleChange('fontSize', size)}
                                onFontFamilyChange={(family) => onStyleChange('fontFamily', family)}
                                onBoldToggle={() => onStyleChange('fontWeight', currentFontWeight === 'bold' ? 'normal' : 'bold')}
                                onItalicToggle={() => onStyleChange('fontStyle', currentFontStyle === 'italic' ? 'normal' : 'italic')}
                                onUnderlineToggle={() => onStyleChange('underline', !currentUnderline)}
                                onStrikethroughToggle={() => onStyleChange('strikethrough', !currentStrikethrough)}
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
                </>
            )}

            {/* Add/Edit Label button for pen, line, arrow */}
            {selectedCount === 1 && selectedItems[0] && ['pen', 'line', 'arrow'].includes(selectedItems[0].entityType) && (
                <>
                    <button
                        onClick={() => {
                            const item = selectedItems[0];
                            // If no label exists, add one
                            if (!item.data?.label) {
                                onStyleChange('label', 'Label');
                            }
                            // Label editing is handled by double-click on the label itself
                        }}
                        className="px-3 py-1.5 rounded transition-all flex items-center gap-2"
                        style={{
                            backgroundColor: 'var(--color-surface)',
                            color: 'var(--color-text)',
                            border: '1px solid var(--color-border)'
                        }}
                        title={selectedItems[0].data?.label ? "Label exists (double-click to edit)" : "Add Label"}
                    >
                        <Type className="w-3.5 h-3.5" />
                        <span className="text-xs font-medium">
                            {selectedItems[0].data?.label ? 'Has Label' : 'Add Label'}
                        </span>
                    </button>

                    {/* Label styling controls - show only if label exists */}
                    {selectedItems[0].data?.label && (
                        <LabelStyleControls
                            labelColor={currentTextColor}
                            labelBackgroundColor={currentFillColor}
                            labelSize={currentFontSize}
                            labelFontFamily={currentFontFamily}
                            labelBold={currentFontWeight === 'bold'}
                            labelItalic={currentFontStyle === 'italic'}
                            onLabelColorChange={(color) => onStyleChange('labelColor', color)}
                            onLabelBackgroundChange={(color) => onStyleChange('labelBackgroundColor', color)}
                            onLabelSizeChange={(size) => onStyleChange('labelSize', size)}
                            onLabelFontFamilyChange={(font) => onStyleChange('labelFontFamily', font)}
                            onLabelBoldToggle={() => onStyleChange('labelBold', currentFontWeight !== 'bold')}
                            onLabelItalicToggle={() => onStyleChange('labelItalic', currentFontStyle !== 'italic')}
                        />
                    )}

                    {/* Separator */}
                    <div
                        className="w-px h-6 mx-1"
                        style={{ backgroundColor: 'var(--color-border)' }}
                    />
                </>
            )}


            {/* Align & Distribute Dropdown - Only show when 2+ items selected */}
            {selectedCount >= 2 && (
                <>
                    <AlignDistributeDropdown
                        onAlign={onAlign}
                        onDistribute={onDistribute}
                        needsMultiple={needsMultiple}
                        needsThree={needsThree}
                    />

                    {/* Separator */}
                    <div
                        className="w-px h-6 mx-1"
                        style={{ backgroundColor: 'var(--color-border)' }}
                    />
                </>
            )}

            {/* Group/Ungroup Button */}
            {selectedCount >= 2 && (
                <button
                    onClick={onGroup}
                    disabled={needsMultiple}
                    title={isGrouped ? 'Ungroup' : 'Group'}
                    className="p-2 rounded-lg transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{
                        color: needsMultiple ? 'var(--color-text-muted)' : 'var(--color-text)',
                        backgroundColor: 'transparent'
                    }}
                    onMouseEnter={(e) => {
                        if (!needsMultiple) {
                            e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                >
                    {isGrouped ? <Ungroup className="w-4 h-4" /> : <Users className="w-4 h-4" />}
                </button>
            )}

            {/* Lock/Unlock Button */}
            {hasSelection && (
                <>
                    {selectedCount >= 2 && (
                        <div
                            className="w-px h-6 mx-1"
                            style={{ backgroundColor: 'var(--color-border)' }}
                        />
                    )}
                    <button
                        onClick={onLock}
                        disabled={!hasSelection}
                        title={isLocked ? 'Unlock' : 'Lock'}
                        className="p-2 rounded-lg transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                        style={{
                            color: !hasSelection ? 'var(--color-text-muted)' : 'var(--color-text)',
                            backgroundColor: 'transparent'
                        }}
                        onMouseEnter={(e) => {
                            if (hasSelection) {
                                e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                    >
                        {isLocked ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                    </button>
                </>
            )}

            {/* Create Solution Button */}
            {selectedCount >= 2 && onCreateSolution && (
                <>
                    <div
                        className="w-px h-6 mx-1"
                        style={{ backgroundColor: 'var(--color-border)' }}
                    />
                    <button
                        onClick={onCreateSolution}
                        disabled={needsMultiple || !onCreateSolution}
                        title="Create Solution"
                        className="p-2 rounded-lg transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                        style={{
                            color: (needsMultiple || !onCreateSolution) ? 'var(--color-text-muted)' : 'var(--color-text)',
                            backgroundColor: 'transparent'
                        }}
                        onMouseEnter={(e) => {
                            if (!needsMultiple && onCreateSolution) {
                                e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                    >
                        <Package className="w-4 h-4" />
                    </button>
                </>
            )}
        </div>
    );
}
