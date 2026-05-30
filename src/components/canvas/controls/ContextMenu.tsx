'use client';

import { useEffect, useRef } from 'react';
import {
    Copy,
    Trash2,
    Layers,
    AlignLeft,
    MoreVertical,
    Lock,
    Ungroup,
    Eye,
    Type
} from 'lucide-react';

export interface ContextMenuAction {
    id: string;
    label: string;
    icon: React.ReactNode;
    action: () => void;
    shortcut?: string;
    danger?: boolean;
    disabled?: boolean;
}

export interface ContextMenuSeparator {
    type: 'separator';
}

export type ContextMenuItem = ContextMenuAction | ContextMenuSeparator;

interface ContextMenuProps {
    x: number;
    y: number;
    onClose: () => void;
    actions: ContextMenuItem[];
    selectedCount: number;
}

export function ContextMenu({ x, y, onClose, actions, selectedCount }: ContextMenuProps) {
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    // Adjust position to keep within viewport
    const style = {
        top: Math.min(y, typeof window !== 'undefined' ? window.innerHeight - 200 : y),
        left: Math.min(x, typeof window !== 'undefined' ? window.innerWidth - 300 : x),
    };

    return (
        <div
            ref={menuRef}
            className="fixed z-50 flex flex-col items-start backdrop-blur-xl border rounded-xl shadow-2xl overflow-hidden min-w-[220px] animate-in fade-in zoom-in-95 duration-200"
            style={{
                ...style,
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)'
            }}
        >
            {/* Header / Info */}
            <div
                className="w-full px-3 py-2 flex items-center justify-between"
                style={{
                    borderBottom: '1px solid var(--color-border)',
                    backgroundColor: 'var(--color-background-secondary)'
                }}
            >
                <span
                    className="text-[10px] font-bold uppercase tracking-wider"
                    style={{ color: 'var(--color-text-muted)' }}
                >
                    {selectedCount} Selected
                </span>
                <div className="flex gap-1">
                    <button
                        className="p-1 rounded-md transition-colors"
                        style={{ color: 'var(--color-text-muted)' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        title="Lock"
                    >
                        <Lock className="w-3 h-3" />
                    </button>
                    <button
                        className="p-1 rounded-md transition-colors"
                        style={{ color: 'var(--color-text-muted)' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        title="Visible"
                    >
                        <Eye className="w-3 h-3" />
                    </button>
                </div>
            </div>

            {/* Actions Grid (Primary) */}
            <div
                className="p-1 w-full grid grid-cols-4 gap-1"
                style={{ borderBottom: '1px solid var(--color-border)' }}
            >
                <button
                    onClick={actions.find(a => a.id === 'duplicate')?.action}
                    className="p-2 rounded-lg flex flex-col items-center gap-1 transition-colors group"
                    style={{ color: 'var(--color-text-secondary)' }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                        e.currentTarget.style.opacity = '0.2';
                        e.currentTarget.style.color = 'var(--color-primary)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.opacity = '1';
                        e.currentTarget.style.color = 'var(--color-text-secondary)';
                    }}
                    title="Duplicate (Ctrl+D)"
                >
                    <Layers className="w-4 h-4" />
                </button>
                <button
                    className="p-2 rounded-lg flex flex-col items-center gap-1 transition-colors group"
                    style={{ color: 'var(--color-text-secondary)' }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                >
                    <AlignLeft className="w-4 h-4" />
                </button>
                <button
                    className="p-2 rounded-lg flex flex-col items-center gap-1 transition-colors group"
                    style={{ color: 'var(--color-text-secondary)' }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                >
                    <Type className="w-4 h-4" />
                </button>
                <button
                    className="p-2 rounded-lg flex flex-col items-center gap-1 transition-colors group"
                    style={{ color: 'var(--color-text-secondary)' }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                >
                    <Ungroup className="w-4 h-4" />
                </button>
            </div>

            {/* List Actions */}
            <div className="p-1 w-full flex flex-col">
                {actions
                    .filter((item): item is ContextMenuAction => 'id' in item && item.id !== 'duplicate')
                    .map((action, index) => {
                        // Check if previous item is a separator
                        const prevItem = actions[actions.indexOf(action) - 1];
                        const showSeparatorBefore = prevItem && 'type' in prevItem && prevItem.type === 'separator';

                        return (
                            <div key={action.id}>
                                {showSeparatorBefore && (
                                    <div
                                        className="my-1 h-px"
                                        style={{ backgroundColor: 'var(--color-border)' }}
                                    />
                                )}
                                <button
                                    onClick={() => {
                                        if (!action.disabled) {
                                            action.action();
                                            onClose();
                                        }
                                    }}
                                    disabled={action.disabled}
                                    className="w-full px-3 py-2 text-left text-sm rounded-lg flex items-center justify-between group transition-colors"
                                    style={{
                                        color: action.disabled
                                            ? 'var(--color-text-muted)'
                                            : action.danger
                                                ? 'var(--color-danger)'
                                                : 'var(--color-text)',
                                        opacity: action.disabled ? 0.4 : 1,
                                        cursor: action.disabled ? 'not-allowed' : 'pointer'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!action.disabled) {
                                            if (action.danger) {
                                                e.currentTarget.style.backgroundColor = 'var(--color-danger)';
                                                e.currentTarget.style.opacity = '0.2';
                                            } else {
                                                e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                                            }
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                        e.currentTarget.style.opacity = action.disabled ? '0.4' : '1';
                                    }}
                                >
                                    <div className="flex items-center gap-3">
                                        {action.icon}
                                        <span>{action.label}</span>
                                    </div>
                                    {action.shortcut && (
                                        <span
                                            className="text-[10px] font-mono"
                                            style={{
                                                color: 'var(--color-text-muted)',
                                                opacity: 0.6
                                            }}
                                        >
                                            {action.shortcut}
                                        </span>
                                    )}
                                </button>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
