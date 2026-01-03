'use client';

import React from 'react';

interface LetterSpacingControlProps {
    value: number;
    onChange: (spacing: number) => void;
}

/**
 * Letter spacing control component
 * 
 * Features:
 * - Slider for adjusting letter spacing
 * - Range from -2px to 10px
 * - Visual feedback of current value
 */
export function LetterSpacingControl({ value, onChange }: LetterSpacingControlProps) {
    return (
        <div className="flex items-center gap-1 px-2" title={`Letter Spacing: ${value}px`}>
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-text-muted)' }}>
                <path d="M3 7V17M21 7V17M8 12H16" />
                <path d="M5 7L8 12L5 17M19 7L16 12L19 17" />
            </svg>
            <input
                type="range"
                min="-2"
                max="10"
                step="0.5"
                value={value}
                onChange={(e) => onChange(parseFloat(e.target.value))}
                className="w-16 h-1 rounded-lg appearance-none cursor-pointer"
                style={{
                    background: 'var(--color-border)',
                    accentColor: 'var(--color-primary)'
                }}
            />
            <span className="text-xs min-w-[28px] text-right" style={{ color: 'var(--color-text-muted)' }}>
                {value > 0 ? '+' : ''}{value}
            </span>
        </div>
    );
}
