'use client';

import React from 'react';
import { CanvasItem } from '@/lib/types';
import { RotateCw } from 'lucide-react';

interface TransformLayerProps {
    item: CanvasItem;
    zoom: number;
    onTransformStart: (e: React.MouseEvent, type: 'resize' | 'rotate', handle: string | null) => void;
}

export function TransformLayer({ item, zoom, onTransformStart }: TransformLayerProps) {
    if (!item.data || typeof item.data.width !== 'number') return null;

    const { width, height } = item.data;
    const rotation = item.rotation || 0;

    // Scale handles inversely to zoom so they stay constant visual size
    const handleSize = 10 / zoom; // Standard handle size 10px
    const borderSize = 2 / zoom; // Border thickness

    const handleStyle = {
        width: handleSize,
        height: handleSize,
        backgroundColor: 'white',
        border: `${borderSize}px solid #3b82f6`,
        borderRadius: '50%', // Circle handles like Miro
        position: 'absolute' as const,
        zIndex: 50,
        pointerEvents: 'auto' as const,
    };

    // Calculate handle positions offset by handle size/2 to center them
    const offset = -handleSize / 2;

    return (
        <div
            style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: width,
                height: height,
                pointerEvents: 'none', // Allow clicking through to the item itself
            }}
        >
            {/* Selection Border */}
            <div
                style={{
                    position: 'absolute',
                    left: -borderSize,
                    top: -borderSize,
                    width: `calc(100% + ${borderSize * 2}px)`,
                    height: `calc(100% + ${borderSize * 2}px)`,
                    border: `${borderSize}px solid #3b82f6`,
                    borderRadius: '4px',
                    pointerEvents: 'none',
                    boxSizing: 'border-box'
                }}
            />

            {/* Resize Handles */}
            {/* Corners */}
            <div
                style={{ ...handleStyle, left: offset, top: offset, cursor: 'nw-resize' }}
                onMouseDown={(e) => onTransformStart(e, 'resize', 'nw')}
            />
            <div
                style={{ ...handleStyle, right: offset, top: offset, cursor: 'ne-resize' }}
                onMouseDown={(e) => onTransformStart(e, 'resize', 'ne')}
            />
            <div
                style={{ ...handleStyle, right: offset, bottom: offset, cursor: 'se-resize' }}
                onMouseDown={(e) => onTransformStart(e, 'resize', 'se')}
            />
            <div
                style={{ ...handleStyle, left: offset, bottom: offset, cursor: 'sw-resize' }}
                onMouseDown={(e) => onTransformStart(e, 'resize', 'sw')}
            />

            {/* Edges - Only show if large enough */}
            {width > 20 && (
                <>
                    <div
                        style={{ ...handleStyle, left: '50%', top: offset, marginLeft: offset, cursor: 'n-resize' }}
                        onMouseDown={(e) => onTransformStart(e, 'resize', 'n')}
                    />
                    <div
                        style={{ ...handleStyle, left: '50%', bottom: offset, marginLeft: offset, cursor: 's-resize' }}
                        onMouseDown={(e) => onTransformStart(e, 'resize', 's')}
                    />
                </>
            )}
            {height > 20 && (
                <>
                    <div
                        style={{ ...handleStyle, right: offset, top: '50%', marginTop: offset, cursor: 'e-resize' }}
                        onMouseDown={(e) => onTransformStart(e, 'resize', 'e')}
                    />
                    <div
                        style={{ ...handleStyle, left: offset, top: '50%', marginTop: offset, cursor: 'w-resize' }}
                        onMouseDown={(e) => onTransformStart(e, 'resize', 'w')}
                    />
                </>
            )}

            {/* Rotation Handle */}
            <div
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: -40 / zoom, // Position above the item
                    transform: 'translateX(-50%)',
                    cursor: 'grab',
                    pointerEvents: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
                onMouseDown={(e) => onTransformStart(e, 'rotate', 'rotate')}
            >
                {/* Connector line */}
                <div style={{ width: borderSize, height: 20 / zoom, backgroundColor: '#3b82f6' }} />

                {/* Handle icon */}
                <div
                    style={{
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        padding: 4 / zoom,
                        border: `${borderSize}px solid #3b82f6`,
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                >
                    <RotateCw size={12 / zoom} color="#3b82f6" />
                </div>
            </div>
        </div>
    );
}
