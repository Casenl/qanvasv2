import React, { useState, useRef, useEffect } from 'react';
import { FrameData } from '@/lib/types/shapeTypes';

interface FrameRendererProps {
    data: FrameData;
    isSelected?: boolean;
    onClick?: () => void;
    onUpdate?: (newData: Partial<FrameData>) => void;
    isDrawingMode?: boolean; // True when a drawing tool is active
}

/**
 * Frame renderer component
 * 
 * Features:
 * - Editable title (double-click)
 * - Customizable background color
 * - Shows count of contained items
 * - Visual selection state
 * - Acts as background when not selected or when drawing mode is active
 */
export function FrameRenderer({ data, isSelected = false, onClick, onUpdate, isDrawingMode = false }: FrameRendererProps) {
    const { width, height, title, color, containedItemIds = [], cornerRadius = 0 } = data;
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [titleValue, setTitleValue] = useState(title);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isEditingTitle && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [isEditingTitle]);

    const handleTitleBlur = () => {
        setIsEditingTitle(false);
        if (titleValue !== title && onUpdate) {
            onUpdate({ title: titleValue });
        }
    };

    const itemCount = containedItemIds.length;

    return (
        <div
            data-canvas-item="frame"
            onClick={(e) => {
                // Don't select frame when in drawing mode
                if (isDrawingMode) {
                    e.stopPropagation();
                    return;
                }
                onClick?.();
            }}
            style={{
                width: width || 300,
                height: height || 300,
                border: isSelected ? '2px solid #3b82f6' : '2px solid #000000',
                backgroundColor: color || '#ffffff',
                borderRadius: `${cornerRadius || 0}px`,
                position: 'relative',
                transition: 'all 0.2s',
                // Frame pointer-events logic:
                // 1. Drawing mode active → ALWAYS 'none' (highest priority)
                // 2. Frame selected → 'auto' (can be moved)
                // 3. Frame not selected → 'none' (acts as background)
                pointerEvents: isDrawingMode ? 'none' : (isSelected ? 'auto' : 'none')
            }}
        >
            {/* Title Bar */}
            <div
                style={{
                    position: 'absolute',
                    top: '-28px',
                    left: '-2px', // Align with border
                    padding: '2px 8px',
                    backgroundColor: isSelected ? '#3b82f6' : '#9ca3af',
                    color: 'white',
                    borderRadius: '4px 4px 0 0',
                    fontSize: '14px',
                    fontWeight: 500,
                    cursor: 'text',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    // Title bar is interactive when NOT in drawing mode
                    pointerEvents: isDrawingMode ? 'none' : 'auto'
                }}
                onClick={(e) => {
                    // Don't select frame when in drawing mode
                    if (isDrawingMode) {
                        e.stopPropagation();
                        return;
                    }
                    onClick?.();
                }}
                onDoubleClick={(e) => {
                    e.stopPropagation();
                    setIsEditingTitle(true);
                }}
            >
                {isEditingTitle ? (
                    <input
                        ref={inputRef}
                        value={titleValue}
                        onChange={(e) => setTitleValue(e.target.value)}
                        onBlur={handleTitleBlur}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') handleTitleBlur();
                            e.stopPropagation();
                        }}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'white',
                            outline: 'none',
                            width: `${Math.max(titleValue.length * 8 + 20, 50)}px`
                        }}
                    />
                ) : (
                    <>
                        <span>{title || 'Frame'}</span>
                        {itemCount > 0 && (
                            <span
                                style={{
                                    fontSize: '11px',
                                    opacity: 0.8,
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    padding: '1px 6px',
                                    borderRadius: '10px'
                                }}
                            >
                                {itemCount}
                            </span>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
