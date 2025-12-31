'use client';

import { BoundingBox } from '@/hooks/useMultiSelect';

interface SelectionBoxProps {
    box: BoundingBox | null;
    canvasTransform?: {
        zoom: number;
        pan: { x: number; y: number };
    };
}

export function SelectionBox({ box, canvasTransform }: SelectionBoxProps) {
    if (!box || !canvasTransform) return null;

    // Convert canvas coordinates to screen coordinates
    const screenX = box.x * canvasTransform.zoom + canvasTransform.pan.x;
    const screenY = box.y * canvasTransform.zoom + canvasTransform.pan.y;
    const screenWidth = box.width * canvasTransform.zoom;
    const screenHeight = box.height * canvasTransform.zoom;

    return (
        <div
            className="absolute pointer-events-none z-50"
            style={{
                left: screenX,
                top: screenY,
                width: screenWidth,
                height: screenHeight,
                border: '2px solid #3B82F6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderRadius: '4px'
            }}
        />
    );
}
