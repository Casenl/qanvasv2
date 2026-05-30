import React, { useState, useEffect } from 'react';
import { Paintbrush, Plus } from 'lucide-react';

interface ColorPickerProps {
    value: string;
    onChange: (color: string) => void;
    label: string;
    icon?: React.ReactNode; // Optional custom icon
}

const PRESET_COLORS = [
    '#3b82f6', // blue
    '#ef4444', // red
    '#10b981', // green
    '#f59e0b', // yellow
    '#8b5cf6', // purple
    '#ec4899', // pink
    '#06b6d4', // cyan
    '#f97316', // orange
    '#6b7280', // gray
    '#000000', // black
    '#ffffff', // white
    'transparent'
];

const CUSTOM_COLORS_KEY = 'qanvas-custom-colors';

export function ColorPicker({ value, onChange, label, icon }: ColorPickerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [customColors, setCustomColors] = useState<string[]>([]);
    const [showColorInput, setShowColorInput] = useState(false);
    const [newColor, setNewColor] = useState('#000000');

    // Load custom colors from localStorage
    useEffect(() => {
        const saved = localStorage.getItem(CUSTOM_COLORS_KEY);
        if (saved) {
            try {
                setCustomColors(JSON.parse(saved));
            } catch (e) {
                console.error('Failed to load custom colors', e);
            }
        }
    }, []);

    const addCustomColor = () => {
        if (newColor && !customColors.includes(newColor)) {
            const updated = [...customColors, newColor];
            setCustomColors(updated);
            localStorage.setItem(CUSTOM_COLORS_KEY, JSON.stringify(updated));
            onChange(newColor);
            setShowColorInput(false);
            setNewColor('#000000');
        }
    };

    const allColors = [...PRESET_COLORS, ...customColors];

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                title={label}
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
                {icon || <Paintbrush className="w-4 h-4" style={{ color: 'var(--color-text)' }} />}
                <div
                    className="w-4 h-4 rounded border"
                    style={{
                        backgroundColor: value === 'transparent' ? 'transparent' : value,
                        borderColor: 'var(--color-border)',
                        backgroundImage: value === 'transparent'
                            ? 'linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc), linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc)'
                            : undefined,
                        backgroundSize: value === 'transparent' ? '8px 8px' : undefined,
                        backgroundPosition: value === 'transparent' ? '0 0, 4px 4px' : undefined
                    }}
                />
            </button>

            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Color palette */}
                    <div
                        className="absolute top-full mt-2 p-2 rounded-lg shadow-2xl border backdrop-blur-xl z-50"
                        style={{
                            backgroundColor: 'var(--color-surface)',
                            borderColor: 'var(--color-border)',
                            minWidth: '140px'
                        }}
                    >
                        {/* Preset + Custom Colors */}
                        <div className="grid grid-cols-4 gap-1 mb-2">
                            {allColors.map((color) => (
                                <button
                                    key={color}
                                    onClick={() => {
                                        onChange(color);
                                        setIsOpen(false);
                                    }}
                                    className="w-7 h-7 rounded border-2 transition-all hover:scale-110"
                                    style={{
                                        backgroundColor: color === 'transparent' ? 'white' : color,
                                        borderColor: value === color ? 'var(--color-primary)' : 'var(--color-border)',
                                        backgroundImage: color === 'transparent'
                                            ? 'linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc), linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc)'
                                            : undefined,
                                        backgroundSize: color === 'transparent' ? '8px 8px' : undefined,
                                        backgroundPosition: color === 'transparent' ? '0 0, 4px 4px' : undefined
                                    }}
                                    title={color}
                                />
                            ))}
                        </div>

                        {/* Add Custom Color */}
                        {!showColorInput ? (
                            <button
                                onClick={() => setShowColorInput(true)}
                                className="w-full px-2 py-1 rounded flex items-center justify-center gap-1 text-xs transition-all"
                                style={{
                                    backgroundColor: 'var(--color-background-secondary)',
                                    color: 'var(--color-text)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.opacity = '0.8';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.opacity = '1';
                                }}
                            >
                                <Plus className="w-3 h-3" />
                                Add Custom
                            </button>
                        ) : (
                            <div className="flex gap-1">
                                <input
                                    type="color"
                                    value={newColor}
                                    onChange={(e) => setNewColor(e.target.value)}
                                    className="w-8 h-8 rounded cursor-pointer"
                                />
                                <button
                                    onClick={addCustomColor}
                                    className="flex-1 px-2 py-1 rounded text-xs"
                                    style={{
                                        backgroundColor: 'var(--color-primary)',
                                        color: 'white'
                                    }}
                                >
                                    Add
                                </button>
                                <button
                                    onClick={() => setShowColorInput(false)}
                                    className="px-2 py-1 rounded text-xs"
                                    style={{
                                        backgroundColor: 'var(--color-background-secondary)',
                                        color: 'var(--color-text)'
                                    }}
                                >
                                    Cancel
                                </button>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
