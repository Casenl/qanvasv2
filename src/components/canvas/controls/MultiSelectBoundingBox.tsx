import React from 'react';
import { CanvasItem } from '@/lib/types';

interface MultiSelectBoundingBoxProps {
    items: CanvasItem[];
    selectedIds: string[];
    zoom: number;
}

/**
 * Renders a bounding box around multiple selected items (Miro-style)
 * 
 * Features:
 * - Blue border around all selected items
 * - Scales with zoom level
 * - Only shows when 2+ items are selected
 */
export function MultiSelectBoundingBox({ items, selectedIds, zoom }: MultiSelectBoundingBoxProps) {
    // Only show for multi-select (2+ items)
    if (selectedIds.length < 2) return null;

    const selectedItems = items.filter(item => selectedIds.includes(item.id));
    if (selectedItems.length < 2) return null;

    // Calculate bounding box in canvas coordinates
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    selectedItems.forEach(item => {
        // Get item dimensions
        let width = 300; // Default for product/vendor/solution cards
        let height = 172;

        // For new item types with explicit dimensions
        if (item.data && typeof item.data.width === 'number') {
            width = item.data.width;
            height = item.data.height || width;
        }

        minX = Math.min(minX, item.x);
        minY = Math.min(minY, item.y);
        maxX = Math.max(maxX, item.x + width);
        maxY = Math.max(maxY, item.y + height);
    });

    // Add padding around the bounding box (in canvas coordinates)
    const padding = 8 / zoom; // 8px padding that scales with zoom
    minX -= padding;
    minY -= padding;
    maxX += padding;
    maxY += padding;

    const width = maxX - minX;
    const height = maxY - minY;

    // Border thickness that stays constant visual size
    const borderWidth = 2 / zoom;

    return (
        <div
            style={{
                position: 'absolute',
                left: minX,
                top: minY,
                width,
                height,
                border: `${borderWidth}px solid #3b82f6`,
                borderRadius: `${4 / zoom}px`,
                pointerEvents: 'none',
                zIndex: 5,
                boxSizing: 'border-box'
            }}
        />
    );
}
