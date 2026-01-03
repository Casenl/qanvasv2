'use client';

import React from 'react';
import { LineData } from '@/lib/types/shapeTypes';

interface LineRendererProps {
    data: LineData;
    isSelected?: boolean;
    onClick?: () => void;
    onUpdate?: (updates: Partial<LineData>) => void;
}

/**
 * Component for rendering lines and arrows
 * 
 * Features:
 * - Straight lines with optional arrow heads
 * - Configurable start/end arrows
 * - Stroke styling support
 */
export function LineRenderer({ data, isSelected = false, onClick }: LineRendererProps) {
    const {
        startX,
        startY,
        endX,
        endY,
        strokeColor,
        strokeWidth,
        strokeStyle = 'solid',
        opacity,
        startArrow = false,
        endArrow = false,
        arrowSize = 10
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

    // Calculate arrow head points
    const getArrowPoints = (x1: number, y1: number, x2: number, y2: number, size: number) => {
        const angle = Math.atan2(y2 - y1, x2 - x1);
        const arrowAngle = Math.PI / 6; // 30 degrees

        const point1 = {
            x: x2 - size * Math.cos(angle - arrowAngle),
            y: y2 - size * Math.sin(angle - arrowAngle)
        };

        const point2 = {
            x: x2 - size * Math.cos(angle + arrowAngle),
            y: y2 - size * Math.sin(angle + arrowAngle)
        };

        return `${point1.x},${point1.y} ${x2},${y2} ${point2.x},${point2.y}`;
    };

    // Calculate bounding box
    const minX = Math.min(startX, endX) - arrowSize;
    const minY = Math.min(startY, endY) - arrowSize;
    const maxX = Math.max(startX, endX) + arrowSize;
    const maxY = Math.max(startY, endY) + arrowSize;
    const width = maxX - minX;
    const height = maxY - minY;

    // Adjust coordinates relative to bounding box
    const relStartX = startX - minX;
    const relStartY = startY - minY;
    const relEndX = endX - minX;
    const relEndY = endY - minY;

    return (
        <div
            data-canvas-item="line"
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
                {/* Main line */}
                <line
                    x1={relStartX}
                    y1={relStartY}
                    x2={relEndX}
                    y2={relEndY}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    strokeDasharray={getStrokeDashArray()}
                    strokeLinecap="round"
                    opacity={opacity}
                />

                {/* Start arrow */}
                {startArrow && (
                    <polyline
                        points={getArrowPoints(relEndX, relEndY, relStartX, relStartY, arrowSize)}
                        fill="none"
                        stroke={strokeColor}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity={opacity}
                    />
                )}

                {/* End arrow */}
                {endArrow && (
                    <polyline
                        points={getArrowPoints(relStartX, relStartY, relEndX, relEndY, arrowSize)}
                        fill="none"
                        stroke={strokeColor}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity={opacity}
                    />
                )}

                {/* Selection outline */}
                {isSelected && (
                    <>
                        <line
                            x1={relStartX}
                            y1={relStartY}
                            x2={relEndX}
                            y2={relEndY}
                            stroke="#3b82f6"
                            strokeWidth={strokeWidth + 4}
                            strokeDasharray="5,5"
                            opacity={0.5}
                        />
                        {/* Selection handles */}
                        <circle cx={relStartX} cy={relStartY} r={4} fill="#3b82f6" />
                        <circle cx={relEndX} cy={relEndY} r={4} fill="#3b82f6" />
                    </>
                )}
            </svg>
        </div>
    );
}
