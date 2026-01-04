import React from 'react';
import { Type, Bold, Italic, Underline, Strikethrough } from 'lucide-react';
import { ColorPicker } from './ColorPicker';
import { FontFamilyPicker } from './FontFamilyPicker';
import { LineHeightPicker } from './LineHeightPicker';
import { LetterSpacingControl } from './LetterSpacingControl';

export interface TextStyleControlsProps {
    textColor: string;
    fontSize: number;
    fontFamily: string;
    fontWeight: string;
    fontStyle: string;
    underline: boolean;
    strikethrough: boolean;
    lineHeight: number;
    letterSpacing: number;
    onTextColorChange: (color: string) => void;
    onFontSizeChange: (size: number) => void;
    onFontFamilyChange: (family: string) => void;
    onBoldToggle: () => void;
    onItalicToggle: () => void;
    onUnderlineToggle: () => void;
    onStrikethroughToggle: () => void;
    onLineHeightChange: (height: number) => void;
    onLetterSpacingChange: (spacing: number) => void;
}

/**
 * Text styling controls for text and shape items
 * 
 * Features:
 * - Text color picker
 * - Font size input
 * - Font family picker
 * - Bold, italic, underline, strikethrough toggles
 * - Line height picker
 * - Letter spacing control
 */
export function TextStyleControls({
    textColor,
    fontSize,
    fontFamily,
    fontWeight,
    fontStyle,
    underline,
    strikethrough,
    lineHeight,
    letterSpacing,
    onTextColorChange,
    onFontSizeChange,
    onFontFamilyChange,
    onBoldToggle,
    onItalicToggle,
    onUnderlineToggle,
    onStrikethroughToggle,
    onLineHeightChange,
    onLetterSpacingChange
}: TextStyleControlsProps) {
    return (
        <>
            {/* Text Color */}
            <ColorPicker
                value={textColor}
                onChange={onTextColorChange}
                label="Text Color"
            />

            {/* Font Size */}
            <div className="flex items-center gap-1 px-2">
                <Type className="w-3 h-3" style={{ color: 'var(--color-text-muted)' }} />
                <input
                    type="number"
                    min="8"
                    max="72"
                    value={fontSize}
                    onChange={(e) => onFontSizeChange(parseInt(e.target.value) || 14)}
                    className="w-12 px-1 py-0.5 text-xs rounded border"
                    style={{
                        borderColor: 'var(--color-border)',
                        backgroundColor: 'var(--color-background)',
                        color: 'var(--color-text)'
                    }}
                    title="Font Size"
                />
            </div>

            {/* Font Family */}
            <FontFamilyPicker
                value={fontFamily}
                onChange={onFontFamilyChange}
            />

            {/* Bold */}
            <button
                onClick={onBoldToggle}
                className="p-2 rounded-lg transition-all duration-200"
                style={{
                    backgroundColor: fontWeight === 'bold' ? 'var(--color-primary)' : 'transparent',
                    color: fontWeight === 'bold' ? 'white' : 'var(--color-text)'
                }}
                title="Bold"
            >
                <Bold className="w-4 h-4" />
            </button>

            {/* Italic */}
            <button
                onClick={onItalicToggle}
                className="p-2 rounded-lg transition-all duration-200"
                style={{
                    backgroundColor: fontStyle === 'italic' ? 'var(--color-primary)' : 'transparent',
                    color: fontStyle === 'italic' ? 'white' : 'var(--color-text)'
                }}
                title="Italic"
            >
                <Italic className="w-4 h-4" />
            </button>

            {/* Underline */}
            <button
                onClick={onUnderlineToggle}
                className="p-2 rounded-lg transition-all duration-200"
                style={{
                    backgroundColor: underline ? 'var(--color-primary)' : 'transparent',
                    color: underline ? 'white' : 'var(--color-text)'
                }}
                title="Underline"
            >
                <Underline className="w-4 h-4" />
            </button>

            {/* Strikethrough */}
            <button
                onClick={onStrikethroughToggle}
                className="p-2 rounded-lg transition-all duration-200"
                style={{
                    backgroundColor: strikethrough ? 'var(--color-primary)' : 'transparent',
                    color: strikethrough ? 'white' : 'var(--color-text)'
                }}
                title="Strikethrough"
            >
                <Strikethrough className="w-4 h-4" />
            </button>

            {/* Line Height */}
            <LineHeightPicker
                value={lineHeight}
                onChange={onLineHeightChange}
            />

            {/* Letter Spacing */}
            <LetterSpacingControl
                value={letterSpacing}
                onChange={onLetterSpacingChange}
            />
        </>
    );
}
