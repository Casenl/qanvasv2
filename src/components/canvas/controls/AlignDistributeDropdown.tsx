import React, { useState, useRef, useEffect } from 'react';
import {
    AlignLeft,
    AlignCenter,
    AlignRight,
    AlignVerticalJustifyStart,
    AlignVerticalJustifyCenter,
    AlignVerticalJustifyEnd,
    SeparatorHorizontal,
    SeparatorVertical,
    ChevronDown
} from 'lucide-react';

export interface AlignDistributeOption {
    id: string;
    label: string;
    icon: React.ReactNode;
    action: () => void;
    disabled?: boolean;
    separator?: boolean;
}

export interface AlignDistributeDropdownProps {
    onAlign: (type: 'left' | 'center' | 'right' | 'top' | 'middle' | 'bottom') => void;
    onDistribute: (direction: 'horizontal' | 'vertical') => void;
    needsMultiple: boolean;
    needsThree: boolean;
}

/**
 * Dropdown menu for align and distribute options
 * 
 * Features:
 * - Compact single button that opens a menu
 * - All alignment options (left, center, right, top, middle, bottom)
 * - Distribution options (horizontal, vertical)
 * - Disabled states for insufficient selection
 */
export function AlignDistributeDropdown({
    onAlign,
    onDistribute,
    needsMultiple,
    needsThree
}: AlignDistributeDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const options: AlignDistributeOption[] = [
        {
            id: 'align-left',
            label: 'Align Left',
            icon: <AlignLeft className="w-4 h-4" />,
            action: () => {
                onAlign('left');
                setIsOpen(false);
            },
            disabled: needsMultiple
        },
        {
            id: 'align-center',
            label: 'Align Center',
            icon: <AlignCenter className="w-4 h-4" />,
            action: () => {
                onAlign('center');
                setIsOpen(false);
            },
            disabled: needsMultiple
        },
        {
            id: 'align-right',
            label: 'Align Right',
            icon: <AlignRight className="w-4 h-4" />,
            action: () => {
                onAlign('right');
                setIsOpen(false);
            },
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
            id: 'align-top',
            label: 'Align Top',
            icon: <AlignVerticalJustifyStart className="w-4 h-4" />,
            action: () => {
                onAlign('top');
                setIsOpen(false);
            },
            disabled: needsMultiple
        },
        {
            id: 'align-middle',
            label: 'Align Middle',
            icon: <AlignVerticalJustifyCenter className="w-4 h-4" />,
            action: () => {
                onAlign('middle');
                setIsOpen(false);
            },
            disabled: needsMultiple
        },
        {
            id: 'align-bottom',
            label: 'Align Bottom',
            icon: <AlignVerticalJustifyEnd className="w-4 h-4" />,
            action: () => {
                onAlign('bottom');
                setIsOpen(false);
            },
            disabled: needsMultiple
        },
        {
            id: 'separator-2',
            label: '',
            icon: null,
            action: () => { },
            separator: true
        },
        {
            id: 'distribute-horizontal',
            label: 'Distribute Horizontally',
            icon: <SeparatorVertical className="w-4 h-4" />,
            action: () => {
                onDistribute('horizontal');
                setIsOpen(false);
            },
            disabled: needsThree
        },
        {
            id: 'distribute-vertical',
            label: 'Distribute Vertically',
            icon: <SeparatorHorizontal className="w-4 h-4" />,
            action: () => {
                onDistribute('vertical');
                setIsOpen(false);
            },
            disabled: needsThree
        }
    ];

    return (
        <div ref={dropdownRef} style={{ position: 'relative' }}>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg transition-all duration-200 flex items-center gap-1"
                style={{
                    backgroundColor: isOpen ? 'var(--color-surface)' : 'transparent',
                    color: 'var(--color-text)',
                    border: '1px solid var(--color-border)'
                }}
                title="Align & Distribute"
            >
                <AlignCenter className="w-4 h-4" />
                <ChevronDown className="w-3 h-3" />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        marginTop: '4px',
                        backgroundColor: 'var(--color-surface)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        padding: '4px',
                        minWidth: '200px',
                        zIndex: 1000
                    }}
                >
                    {options.map((option) => {
                        if (option.separator) {
                            return (
                                <div
                                    key={option.id}
                                    style={{
                                        height: '1px',
                                        backgroundColor: 'var(--color-border)',
                                        margin: '4px 0'
                                    }}
                                />
                            );
                        }

                        return (
                            <button
                                key={option.id}
                                onClick={option.action}
                                disabled={option.disabled}
                                className="w-full flex items-center gap-3 px-3 py-2 rounded transition-all"
                                style={{
                                    backgroundColor: 'transparent',
                                    color: option.disabled ? 'var(--color-text-muted)' : 'var(--color-text)',
                                    cursor: option.disabled ? 'not-allowed' : 'pointer',
                                    opacity: option.disabled ? 0.5 : 1,
                                    textAlign: 'left',
                                    border: 'none'
                                }}
                                onMouseEnter={(e) => {
                                    if (!option.disabled) {
                                        e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                }}
                            >
                                {option.icon}
                                <span className="text-sm">{option.label}</span>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
