'use client';

import React, { useState } from 'react';
import { Type, ChevronDown } from 'lucide-react';

interface FontFamilyPickerProps {
    value: string;
    onChange: (fontFamily: string) => void;
}

const FONT_FAMILIES = [
    { name: 'Inter', value: 'Inter, sans-serif' },
    { name: 'Noto Sans', value: 'Noto Sans, sans-serif' },
    { name: 'Roboto', value: 'Roboto, sans-serif' },
    { name: 'Arial', value: 'Arial, sans-serif' },
    { name: 'Helvetica', value: 'Helvetica, sans-serif' },
    { name: 'Times New Roman', value: 'Times New Roman, serif' },
    { name: 'Georgia', value: 'Georgia, serif' },
    { name: 'Courier New', value: 'Courier New, monospace' },
    { name: 'Verdana', value: 'Verdana, sans-serif' },
    { name: 'Comic Sans MS', value: 'Comic Sans MS, cursive' }
];

/**
 * Font family picker component
 * 
 * Features:
 * - Dropdown with common fonts
 * - Font preview in dropdown
 * - Compact button design for toolbar
 */
export function FontFamilyPicker({ value, onChange }: FontFamilyPickerProps) {
    const [isOpen, setIsOpen] = useState(false);

    // Get display name from value
    const currentFont = FONT_FAMILIES.find(f => f.value === value) || FONT_FAMILIES[0];

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                title="Font Family"
                className="px-2 py-2 rounded-lg transition-all duration-200 flex items-center gap-1 min-w-[100px]"
                style={{
                    backgroundColor: 'transparent',
                    color: 'var(--color-text)'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                }}
            >
                <Type className="w-3.5 h-3.5" />
                <span className="text-xs truncate flex-1 text-left">{currentFont.name}</span>
                <ChevronDown className="w-3 h-3" />
            </button>

            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Font list */}
                    <div
                        className="absolute top-full mt-2 left-0 rounded-lg shadow-2xl border backdrop-blur-xl z-50 overflow-hidden"
                        style={{
                            backgroundColor: 'var(--color-surface)',
                            borderColor: 'var(--color-border)',
                            minWidth: '180px',
                            maxHeight: '300px',
                            overflowY: 'auto'
                        }}
                    >
                        {FONT_FAMILIES.map((font) => (
                            <button
                                key={font.value}
                                onClick={() => {
                                    onChange(font.value);
                                    setIsOpen(false);
                                }}
                                className="w-full px-3 py-2 text-left text-sm transition-all"
                                style={{
                                    fontFamily: font.value,
                                    backgroundColor: value === font.value ? 'var(--color-primary)' : 'transparent',
                                    color: value === font.value ? 'white' : 'var(--color-text)'
                                }}
                                onMouseEnter={(e) => {
                                    if (value !== font.value) {
                                        e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (value !== font.value) {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                    }
                                }}
                            >
                                {font.name}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
