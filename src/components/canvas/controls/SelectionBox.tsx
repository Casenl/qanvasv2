'use client';

import { BoundingBox } from '@/hooks/useMultiSelect';

interface SelectionBoxProps {
    box: BoundingBox | null;
}

export function SelectionBox({ box }: SelectionBoxProps) {
    if (!box) return null;

    return (
        <div
            className="absolute pointer-events-none z-50"
            style={{
                left: box.x,
                top: box.y,
                width: box.width,
                height: box.height,
                border: '2px solid #3B82F6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderRadius: '4px'
            }}
        />
    );
}
