'use client';

import React from 'react';
import { ToolType } from '@/hooks/useToolbar';

interface ToolButtonProps {
    tool: ToolType;
    icon: React.ReactNode;
    label: string;
    shortcut?: string;
    isActive: boolean;
    showLabel?: boolean;
    onClick: () => void;
}

/**
 * Individual tool button component
 * 
 * Features:
 * - Visual feedback for active state
 * - Hover effects
 * - Tooltip with keyboard shortcut
 * - Accessible (keyboard navigation)
 * - Optional text label display
 */
export function ToolButton({
    tool,
    icon,
    label,
    shortcut,
    isActive,
    showLabel = false,
    onClick
}: ToolButtonProps) {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: isActive
                    ? 'hsl(var(--color-brand-primary) / 0.1)'
                    : 'transparent',
                border: isActive
                    ? '2px solid hsl(var(--color-brand-primary))'
                    : '2px solid transparent',
                color: isActive
                    ? 'hsl(var(--color-brand-primary))'
                    : 'var(--color-text)'
            }}
            className={`
                group relative
                rounded-lg
                flex items-center
                transition-all duration-200
                focus:outline-none
                hover:bg-black/5 dark:hover:bg-white/5
                ${showLabel ? 'w-full px-3 py-2 justify-start gap-3 h-10' : 'w-12 h-12 justify-center'}
            `}
            title={!showLabel ? `${label}${shortcut ? ` (${shortcut})` : ''}` : undefined}
            aria-label={label}
            aria-pressed={isActive}
        >
            {/* Icon */}
            <div className="w-5 h-5 flex-shrink-0">
                {icon}
            </div>

            {/* Label (if enabled) */}
            {showLabel && (
                <div className="flex items-center justify-between w-full text-sm font-medium">
                    <span>{label}</span>
                    {shortcut && (
                        <span className="text-xs opacity-50 ml-4 font-mono">
                            {shortcut}
                        </span>
                    )}
                </div>
            )}

            {/* Tooltip (only if label hidden) */}
            {!showLabel && (
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
            )}
        </button>
    );
}
