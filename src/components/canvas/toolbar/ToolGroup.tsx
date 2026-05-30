import React from 'react';
import { ToolType } from '@/hooks/useToolbar';

interface ToolGroupProps {
    icon: React.ReactNode;
    label: string;
    shortcut?: string;
    isActive: boolean;
    isExpanded: boolean;
    onClick: () => void;
    children?: React.ReactNode;
}

/**
 * Expandable tool group component
 * 
 * Features:
 * - Shows main tool icon
 * - Expands to show sub-tools
 * - Positioned to the right of toolbar
 * - Closes when tool selected
 */
export function ToolGroup({
    icon,
    label,
    shortcut,
    isActive,
    isExpanded,
    onClick,
    children
}: ToolGroupProps) {
    return (
        <div className="relative">
            {/* Main Button */}
            <button
                onClick={onClick}
                style={{
                    backgroundColor: (isActive || isExpanded)
                        ? 'hsl(var(--color-brand-primary) / 0.1)'
                        : 'transparent',
                    border: (isActive || isExpanded)
                        ? '2px solid hsl(var(--color-brand-primary))'
                        : '2px solid transparent',
                    color: (isActive || isExpanded)
                        ? 'hsl(var(--color-brand-primary))'
                        : 'var(--color-text)'
                }}
                className="
                    group relative
                    w-12 h-12 
                    rounded-lg
                    flex items-center justify-center
                    transition-all duration-200
                    focus:outline-none
                    hover:bg-black/5 dark:hover:bg-white/5
                "
                title={`${label}${shortcut ? ` (${shortcut})` : ''}`}
                aria-label={label}
                aria-expanded={isExpanded}
            >
                {/* Icon */}
                <div className="w-5 h-5">
                    {icon}
                </div>

                {/* Expansion indicator */}
                {children && (
                    <div className="absolute bottom-0 right-0 w-2 h-2">
                        <div className="w-1 h-1 bg-current rounded-full" />
                    </div>
                )}

                {/* Tooltip */}
                <div
                    className="
                        absolute left-full ml-2
                        px-2 py-1
                        bg-gray-900 text-white
                        dark:bg-gray-100 dark:text-gray-900
                        text-xs rounded
                        whitespace-nowrap
                        opacity-0 group-hover:opacity-100
                        pointer-events-none
                        transition-opacity duration-200
                        z-[110]
                        shadow-md
                    "
                >
                    {label}
                    {shortcut && (
                        <span className="ml-2 opacity-60">
                            {shortcut}
                        </span>
                    )}
                </div>
            </button>

            {/* Expanded Menu */}
            {isExpanded && children && (
                <div
                    style={{
                        backgroundColor: 'var(--color-surface)',
                        borderColor: 'var(--color-border)'
                    }}
                    className="
                        absolute left-full ml-2 top-0
                        border
                        rounded-lg
                        shadow-xl
                        p-2
                        z-[110]
                        min-w-[160px]
                        animate-in fade-in slide-in-from-left-2 duration-200
                    "
                >
                    {children}
                </div>
            )}
        </div>
    );
}
