'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FrameData } from '@/lib/types/shapeTypes';

interface FrameRendererProps {
    data: FrameData;
    isSelected?: boolean;
    onClick?: () => void;
    onUpdate?: (newData: Partial<FrameData>) => void;
}

export function FrameRenderer({ data, isSelected = false, onClick, onUpdate }: FrameRendererProps) {
    const { width, height, title, color } = data;
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

    return (
        <div
            data-canvas-item="frame"
            onClick={onClick}
            style={{
                width: width || 300,
                height: height || 300,
                border: '2px dashed #9ca3af',
                backgroundColor: color || 'rgba(243, 244, 246, 0.2)',
                position: 'relative',
                transition: 'all 0.2s',
                pointerEvents: 'auto', // Ensure clicks are caught
                ...(isSelected ? { borderColor: '#3b82f6', borderStyle: 'solid' } : {})
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
                    whiteSpace: 'nowrap'
                }}
                onClick={(e) => {
                    // Allow selecting via title click
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
                    title || 'Frame'
                )}
            </div>
        </div>
    );
}
