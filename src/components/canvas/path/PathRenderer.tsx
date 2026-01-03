'use client';

import React from 'react';
import { PathData } from '@/lib/types/shapeTypes';

interface PathRendererProps {
    data: PathData;
    isSelected?: boolean;
    onClick?: () => void;
}

/**
 * Component for rendering freehand paths (pen tool)
 * 
 * Features:
 * - Renders SVG path from points
 * - Supports stroke styling
 * - Selection state
 */
export function PathRenderer({ data, isSelected = false, onClick }: PathRendererProps) {
    const {
        pathString,
        strokeColor,
        strokeWidth,
        strokeStyle = 'solid',
        opacity
    } = data;

    // Convert stroke style to SVG dasharray
    const getStrokeDashArray = () => {
        switch (strokeStyle) {
            case 'dashed':
                return `${strokeWidth * 4},${strokeWidth * 2}`;
            case 'dotted':
                return `${strokeWidth},${strokeWidth}`;
            default:
                return 'none';
        }
    };

    // Calculate bounding box from path string for sizing
    // This is a simple approximation - for production you'd want proper path parsing
    const getBoundingBox = () => {
        if (!data.points || data.points.length === 0) {
            return { minX: 0, minY: 0, maxX: 100, maxY: 100 };
        }

        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        data.points.forEach(point => {
            minX = Math.min(minX, point.x);
            minY = Math.min(minY, point.y);
            maxX = Math.max(maxX, point.x);
            maxY = Math.max(maxY, point.y);
        });

        return { minX, minY, maxX, maxY };
    };

    const bbox = getBoundingBox();
    const width = Math.max(100, bbox.maxX - bbox.minX + 20); // Add padding
    const height = Math.max(100, bbox.maxY - bbox.minY + 20);

    return (
        <div
            data-canvas-item="path"
            onClick={onClick}
            style={{
                width,
                height,
                cursor: 'pointer',
                position: 'relative'
            }}
        >
            <svg
                width={width}
                height={height}
                style={{
                    display: 'block',
                    overflow: 'visible'
                }}
            >
                {/* Main path */}
                <path
                    d={pathString}
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    strokeDasharray={getStrokeDashArray()}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity={opacity}
                />

                {/* Selection outline */}
                {isSelected && (
                    <path
                        d={pathString}
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth={strokeWidth + 4}
                        strokeDasharray="5,5"
                        opacity={0.5}
                    />
                )}
            </svg>
        </div>
    );
}
