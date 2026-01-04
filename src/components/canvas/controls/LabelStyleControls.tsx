import React from 'react';
import { Type, Bold, Italic } from 'lucide-react';
import { ColorPicker } from './ColorPicker';
import { FontFamilyPicker } from './FontFamilyPicker';

export interface LabelStyleControlsProps {
    labelColor: string;
    labelBackgroundColor: string;
    labelSize: number;
    labelFontFamily: string;
    labelBold: boolean;
    labelItalic: boolean;
    onLabelColorChange: (color: string) => void;
    onLabelBackgroundChange: (color: string) => void;
    onLabelSizeChange: (size: number) => void;
    onLabelFontFamilyChange: (family: string) => void;
    onLabelBoldToggle: () => void;
    onLabelItalicToggle: () => void;
}

/**
 * Label styling controls for pen, line, and arrow items
 * 
 * Features:
 * - Label text color
 * - Label background color
 * - Label font size
 * - Label font family
 * - Label bold toggle
 * - Label italic toggle
 */
export function LabelStyleControls({
    labelColor,
    labelBackgroundColor,
    labelSize,
    labelFontFamily,
    labelBold,
    labelItalic,
    onLabelColorChange,
    onLabelBackgroundChange,
    onLabelSizeChange,
    onLabelFontFamilyChange,
    onLabelBoldToggle,
    onLabelItalicToggle
}: LabelStyleControlsProps) {
    return (
        <>
            {/* Label Text Color */}
            <ColorPicker
                value={labelColor}
                onChange={onLabelColorChange}
                label="Label Color"
            />

            {/* Label Background Color */}
            <ColorPicker
                value={labelBackgroundColor}
                onChange={onLabelBackgroundChange}
                label="Label BG"
            />

            {/* Label Font Size */}
            <div className="flex items-center gap-1">
                <input
                    type="range"
                    min="8"
                    max="48"
                    value={labelSize}
                    onChange={(e) => onLabelSizeChange(parseInt(e.target.value))}
                    className="w-16"
                    title="Label Font Size"
                />
                <span className="text-xs" style={{ color: 'var(--color-text)', minWidth: '24px' }}>
                    {labelSize}
                </span>
            </div>

            {/* Label Font Family */}
            <FontFamilyPicker
                value={labelFontFamily}
                onChange={onLabelFontFamilyChange}
            />

            {/* Label Bold */}
            <button
                onClick={onLabelBoldToggle}
                className="p-1.5 rounded transition-all"
                style={{
                    backgroundColor: labelBold ? 'var(--color-surface)' : 'transparent',
                    color: 'var(--color-text)',
                    boxShadow: labelBold ? '0 1px 2px rgba(0,0,0,0.1)' : 'none'
                }}
                title="Bold"
            >
                <Bold className="w-3.5 h-3.5" />
            </button>

            {/* Label Italic */}
            <button
                onClick={onLabelItalicToggle}
                className="p-1.5 rounded transition-all"
                style={{
                    backgroundColor: labelItalic ? 'var(--color-surface)' : 'transparent',
                    color: 'var(--color-text)',
                    boxShadow: labelItalic ? '0 1px 2px rgba(0,0,0,0.1)' : 'none'
                }}
                title="Italic"
            >
                <Italic className="w-3.5 h-3.5" />
            </button>
        </>
    );
}
