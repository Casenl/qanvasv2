import React from 'react';
import { Pen } from 'lucide-react';
import { ColorPicker } from './ColorPicker';
import { LineStylePicker } from './LineStylePicker';

export interface StrokeControlsProps {
    strokeColor: string;
    strokeWidth: number;
    strokeStyle: 'solid' | 'dashed' | 'dotted';
    onStrokeColorChange: (color: string) => void;
    onStrokeWidthChange: (width: number) => void;
    onStrokeStyleChange: (style: 'solid' | 'dashed' | 'dotted') => void;
}

/**
 * Stroke styling controls for shapes, lines, and arrows
 * 
 * Features:
 * - Stroke color picker
 * - Stroke width slider (1-10px)
 * - Line style picker (solid/dashed/dotted)
 */
export function StrokeControls({
    strokeColor,
    strokeWidth,
    strokeStyle,
    onStrokeColorChange,
    onStrokeWidthChange,
    onStrokeStyleChange
}: StrokeControlsProps) {
    return (
        <>
            {/* Stroke Color */}
            <ColorPicker
                value={strokeColor}
                onChange={onStrokeColorChange}
                label="Stroke"
                icon={<Pen className="w-4 h-4" style={{ color: 'var(--color-text)' }} />}
            />

            {/* Stroke Width */}
            <div className="flex items-center gap-1 px-2">
                <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={strokeWidth}
                    onChange={(e) => onStrokeWidthChange(parseInt(e.target.value))}
                    className="w-16 h-1 rounded-lg appearance-none cursor-pointer"
                    style={{
                        background: 'var(--color-border)',
                        accentColor: 'var(--color-primary)'
                    }}
                    title={`Stroke Width: ${strokeWidth}px`}
                />
                <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    {strokeWidth}
                </span>
            </div>

            {/* Line Style */}
            <LineStylePicker
                value={strokeStyle}
                onChange={onStrokeStyleChange}
            />
        </>
    );
}
