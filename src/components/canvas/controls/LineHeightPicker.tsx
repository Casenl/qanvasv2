import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface LineHeightPickerProps {
    value: number;
    onChange: (lineHeight: number) => void;
}

const LINE_HEIGHT_PRESETS = [
    { label: 'Tight', value: 1.2 },
    { label: 'Normal', value: 1.5 },
    { label: 'Relaxed', value: 1.75 },
    { label: 'Loose', value: 2.0 }
];

/**
 * Line height picker component
 * 
 * Features:
 * - Dropdown with preset line heights
 * - Visual preview of spacing
 * - Compact design for toolbar
 */
export function LineHeightPicker({ value, onChange }: LineHeightPickerProps) {
    const [isOpen, setIsOpen] = useState(false);

    // Find current preset or show custom value
    const currentPreset = LINE_HEIGHT_PRESETS.find(p => p.value === value);
    const displayValue = currentPreset ? currentPreset.label : value.toFixed(1);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                title="Line Height"
                className="px-2 py-2 rounded-lg transition-all duration-200 flex items-center gap-1"
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
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
                <span className="text-xs min-w-[45px] text-left">{displayValue}</span>
                <ChevronDown className="w-3 h-3" />
            </button>

            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Preset list */}
                    <div
                        className="absolute top-full mt-2 left-0 rounded-lg shadow-2xl border backdrop-blur-xl z-50 overflow-hidden"
                        style={{
                            backgroundColor: 'var(--color-surface)',
                            borderColor: 'var(--color-border)',
                            minWidth: '140px'
                        }}
                    >
                        {LINE_HEIGHT_PRESETS.map((preset) => (
                            <button
                                key={preset.value}
                                onClick={() => {
                                    onChange(preset.value);
                                    setIsOpen(false);
                                }}
                                className="w-full px-3 py-2 text-left text-sm transition-all flex items-center justify-between"
                                style={{
                                    backgroundColor: value === preset.value ? 'var(--color-primary)' : 'transparent',
                                    color: value === preset.value ? 'white' : 'var(--color-text)'
                                }}
                                onMouseEnter={(e) => {
                                    if (value !== preset.value) {
                                        e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (value !== preset.value) {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                    }
                                }}
                            >
                                <span>{preset.label}</span>
                                <span className="text-xs opacity-60">{preset.value}</span>
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
