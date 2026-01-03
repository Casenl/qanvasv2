'use client';

import React from 'react';
import { CanvasItem } from '@/lib/types';
import { ShapeRenderer } from './shapes/ShapeRenderer';
import { TextRenderer } from './text/TextRenderer';
import { StickyNoteRenderer } from './sticky/StickyNoteRenderer';
import { FrameRenderer } from './frames/FrameRenderer';
import { PathRenderer } from './path/PathRenderer';
import { LineRenderer } from './line/LineRenderer';
import { ImageRenderer } from './image/ImageRenderer';
import { ShapeData, TextData, StickyNoteData, FrameData, PathData, LineData, ImageData } from '@/lib/types/shapeTypes';

interface CanvasItemRendererProps {
    item: CanvasItem;
    isSelected: boolean;
    onClick?: () => void;
    onUpdate?: (itemId: string, newData: any) => void;
}

/**
 * Component that renders the appropriate visual for a canvas item
 * based on its entity type
 * 
 * Responsibilities:
 * - Route to correct renderer component
 * - Handle item updates
 * - Provide consistent interface for all item types
 */
export function CanvasItemRenderer({ item, isSelected, onClick, onUpdate }: CanvasItemRendererProps) {
    const handleUpdate = (newData: any) => {
        if (onUpdate) {
            // Wrap the data update in a data property
            onUpdate(item.id, { data: { ...item.data, ...newData } });
        }
    };

    switch (item.entityType) {
        case 'shape':
            return (
                <ShapeRenderer
                    data={item.data as ShapeData}
                    isSelected={isSelected}
                    onClick={onClick}
                    onUpdate={handleUpdate}
                />
            );

        case 'text':
            return (
                <TextRenderer
                    data={item.data as TextData}
                    isSelected={isSelected}
                    onClick={onClick}
                    onUpdate={handleUpdate}
                />
            );

        case 'sticky-note':
            return (
                <StickyNoteRenderer
                    data={item.data as StickyNoteData}
                    isSelected={isSelected}
                    onClick={onClick}
                    onUpdate={handleUpdate}
                />
            );

        case 'frame':
            return (
                <FrameRenderer
                    data={item.data as FrameData}
                    isSelected={isSelected}
                    onClick={onClick}
                    onUpdate={handleUpdate}
                />
            );

        case 'pen':
            return (
                <PathRenderer
                    data={item.data as PathData}
                    isSelected={isSelected}
                    onClick={onClick}
                />
            );

        case 'line':
        case 'arrow':
            return (
                <LineRenderer
                    data={item.data as LineData}
                    isSelected={isSelected}
                    onClick={onClick}
                />
            );

        case 'image':
            return (
                <ImageRenderer
                    data={item.data as ImageData}
                    isSelected={isSelected}
                    onClick={onClick}
                />
            );

        case 'comment':
            return (
                <div
                    data-canvas-item={item.entityType}
                    onClick={onClick}
                    style={{
                        padding: '16px',
                        backgroundColor: '#f3f4f6',
                        border: isSelected ? '2px solid #3b82f6' : '1px solid #d1d5db',
                        borderRadius: '8px',
                        cursor: 'pointer'
                    }}
                >
                    <p style={{ fontSize: '14px', color: '#6b7280' }}>
                        {item.entityType} (not yet implemented)
                    </p>
                </div>
            );

        // Default: return null for product/vendor/solution (handled by CanvasItemCard)
        default:
            return null;
    }
}
