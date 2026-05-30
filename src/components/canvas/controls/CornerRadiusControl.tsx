import React, { useState } from 'react';
import { RectangleHorizontal } from 'lucide-react';

interface CornerRadiusControlProps {
    cornerRadius: number;
    onCornerRadiusChange: (radius: number) => void;
}

/**
 * Compact Corner Radius Control Component
 * 
 * Single button that opens a popup with slider for adjusting corner radius
 */
export function CornerRadiusControl({ cornerRadius, onCornerRadiusChange }: CornerRadiusControlProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                title={`Corner Radius: ${cornerRadius}px`}
                className="p-2 rounded-lg transition-all duration-200 flex items-center gap-1"
                style={{
                    backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                }}
            >
                <RectangleHorizontal className="w-4 h-4" style={{ color: 'var(--color-text)' }} />
                <span className="text-xs font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                    {cornerRadius}
                </span>
            </button>

            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Popup */}
                    <div
                        className="absolute top-full left-0 mt-2 p-3 rounded-lg shadow-xl border z-50 min-w-[200px]"
                        style={{
                            backgroundColor: 'var(--color-surface)',
                            borderColor: 'var(--color-border)'
                        }}
                    >
                        <div className="flex flex-col gap-3">
                            <label
                                className="text-xs font-medium"
                                style={{ color: 'var(--color-text)' }}
                            >
                                Corner Radius
                            </label>

                            <div className="flex items-center gap-2">
                                <input
                                    type="range"
                                    min="0"
                                    max="50"
                                    value={cornerRadius}
                                    onChange={(e) => onCornerRadiusChange(Number(e.target.value))}
                                    className="flex-1 h-1 rounded-lg appearance-none cursor-pointer"
                                    style={{
                                        background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${(cornerRadius / 50) * 100}%, var(--color-border) ${(cornerRadius / 50) * 100}%, var(--color-border) 100%)`
                                    }}
                                />
                                <input
                                    type="number"
                                    min="0"
                                    max="50"
                                    value={cornerRadius}
                                    onChange={(e) => onCornerRadiusChange(Number(e.target.value))}
                                    className="w-14 px-2 py-1 text-xs text-center rounded border"
                                    style={{
                                        backgroundColor: 'var(--color-background)',
                                        borderColor: 'var(--color-border)',
                                        color: 'var(--color-text)'
                                    }}
                                />
                                <span
                                    className="text-xs"
                                    style={{ color: 'var(--color-text-muted)' }}
                                >
                                    px
                                </span>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
