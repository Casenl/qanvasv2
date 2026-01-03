'use client';

import React, { useState, useRef, useEffect } from 'react';
import { TextData } from '@/lib/types/shapeTypes';

interface TextRendererProps {
    data: TextData;
    isSelected?: boolean;
    onClick?: () => void;
    onUpdate?: (newData: Partial<TextData>) => void;
}

/**
 * Component for rendering editable text on the canvas
 * 
 * Features:
 * - Double-click to edit
 * - Auto-resize to content
 * - Text styling support
 */
export function TextRenderer({ data, isSelected = false, onClick, onUpdate }: TextRendererProps) {
    const { content, fontSize, fontFamily, color, bold, italic, underline, align, width, height } = data;

    // Editing state
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(content);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Focus textarea when entering edit mode
    useEffect(() => {
        if (isEditing && textareaRef.current) {
            textareaRef.current.focus();
            textareaRef.current.select();
        }
    }, [isEditing]);

    // Handle double-click to edit
    const handleDoubleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsEditing(true);
    };

    // Handle blur to save
    const handleBlur = () => {
        setIsEditing(false);
        if (editValue !== content && onUpdate) {
            onUpdate({ content: editValue });
        }
    };

    // Handle Enter key
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleBlur();
        }
        if (e.key === 'Escape') {
            setEditValue(content);
            setIsEditing(false);
        }
    };

    // Text style
    const textStyle: React.CSSProperties = {
        fontSize: `${fontSize}px`,
        fontFamily,
        color,
        fontWeight: bold ? 'bold' : 'normal',
        fontStyle: italic ? 'italic' : 'normal',
        textDecoration: underline ? 'underline' : 'none',
        textAlign: align || 'left',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        width: width ? `${width}px` : undefined,
        height: height ? `${height}px` : undefined,
        minWidth: '100px',
        minHeight: `${fontSize * 1.5}px`
    };

    return (
        <div
            data-canvas-item="text"
            onClick={onClick}
            onDoubleClick={handleDoubleClick}
            style={{
                cursor: isEditing ? 'text' : 'pointer',
                padding: '8px',
                border: isSelected ? '2px solid #3b82f6' : '2px solid transparent',
                borderRadius: '4px',
                backgroundColor: isSelected ? 'rgba(59, 130, 246, 0.05)' : 'transparent',
                transition: 'all 0.2s'
            }}
        >
            {isEditing ? (
                <textarea
                    ref={textareaRef}
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    style={{
                        ...textStyle,
                        border: 'none',
                        outline: 'none',
                        background: 'transparent',
                        resize: 'none',
                        width: '100%',
                        padding: 0
                    }}
                    rows={editValue.split('\n').length}
                />
            ) : (
                <div style={textStyle}>
                    {content || 'Double-click to edit'}
                </div>
            )}
        </div>
    );
}
