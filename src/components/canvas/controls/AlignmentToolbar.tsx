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
    Package
} from 'lucide-react';

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
    position
}: AlignmentToolbarProps & { position?: { top: number; left: number } }) {
    const needsMultiple = selectedCount < 2;
    const needsThree = selectedCount < 3;
    const hasSelection = selectedCount > 0;

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
            {alignmentActions.map((action) => {
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
