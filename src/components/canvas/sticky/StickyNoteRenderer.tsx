import React, { useState, useRef, useEffect } from 'react';
import { StickyNoteData, STICKY_NOTE_COLORS } from '@/lib/types/shapeTypes';

interface StickyNoteRendererProps {
    data: StickyNoteData;
    isSelected?: boolean;
    onClick?: () => void;
    onUpdate?: (newData: Partial<StickyNoteData>) => void;
}

/**
 * Component for rendering sticky notes on the canvas
 * 
 * Features:
 * - Editable content
 * - Color picker
 * - Post-it note styling
 */
export function StickyNoteRenderer({ data, isSelected = false, onClick, onUpdate }: StickyNoteRendererProps) {
    const { content, color, width, height } = data;

    // Editing state
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(content);
    const [showColorPicker, setShowColorPicker] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Focus textarea when entering edit mode
    useEffect(() => {
        if (isEditing && textareaRef.current) {
            textareaRef.current.focus();
        }
    }, [isEditing]);

    // Handle click to edit
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onClick?.();
        setIsEditing(true);
    };

    // Handle blur to save
    const handleBlur = () => {
        setIsEditing(false);
        if (editValue !== content && onUpdate) {
            onUpdate({ content: editValue });
        }
    };

    // Handle color change
    const handleColorChange = (newColor: string) => {
        onUpdate?.({ color: newColor });
        setShowColorPicker(false);
    };

    return (
        <div
            data-canvas-item="sticky-note"
            onClick={handleClick}
            style={{
                width: width ? `${width}px` : '200px',
                height: height ? `${height}px` : '200px',
                backgroundColor: color,
                padding: '16px',
                borderRadius: '4px',
                boxShadow: isSelected
                    ? '0 4px 12px rgba(0, 0, 0, 0.2), 0 0 0 3px #3b82f6'
                    : '0 2px 8px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.2s',
                fontFamily: 'Comic Sans MS, cursive',
                fontSize: '14px'
            }}
        >
            {/* Color picker button */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    setShowColorPicker(!showColorPicker);
                }}
                style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: '2px solid rgba(0, 0, 0, 0.2)',
                    backgroundColor: color,
                    cursor: 'pointer',
                    opacity: isSelected ? 1 : 0.5,
                    transition: 'opacity 0.2s'
                }}
            />

            {/* Color picker dropdown */}
            {showColorPicker && (
                <div
                    style={{
                        position: 'absolute',
                        top: '36px',
                        right: '8px',
                        backgroundColor: 'white',
                        padding: '8px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '4px',
                        zIndex: 10
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {STICKY_NOTE_COLORS.map((c) => (
                        <button
                            key={c}
                            onClick={() => handleColorChange(c)}
                            style={{
                                width: '24px',
                                height: '24px',
                                borderRadius: '4px',
                                backgroundColor: c,
                                border: c === color ? '2px solid #3b82f6' : '1px solid rgba(0, 0, 0, 0.1)',
                                cursor: 'pointer'
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Content */}
            <textarea
                ref={textareaRef}
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onBlur={handleBlur}
                placeholder="Type a note..."
                style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    outline: 'none',
                    background: 'transparent',
                    resize: 'none',
                    fontFamily: 'inherit',
                    fontSize: 'inherit',
                    color: '#000',
                    padding: 0
                }}
            />
        </div>
    );
}
