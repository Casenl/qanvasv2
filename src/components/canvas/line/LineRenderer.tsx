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
export function LineRenderer({ data, isSelected = false, onClick, onUpdate }: LineRendererProps) {
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
        arrowSize = 10,
        label,
        labelColor = '#000000',
        labelSize = 14,
        labelPosition = 0.5,
        labelOffset = 0,
        labelBackgroundColor = 'rgba(255, 255, 255, 0.9)',
        labelFontFamily = 'Titillium Web, sans-serif',
        labelBold = false,
        labelItalic = false
    } = data;

    const [isEditingLabel, setIsEditingLabel] = React.useState(false);
    const [editedLabel, setEditedLabel] = React.useState(label || '');
    const [isDraggingLabel, setIsDraggingLabel] = React.useState(false);
    const [dragStart, setDragStart] = React.useState<{ x: number; y: number } | null>(null);
    const prevLabelRef = React.useRef(label);

    // Auto-enter edit mode when label is first created
    React.useEffect(() => {
        if (!prevLabelRef.current && label) {
            // Label was just created, enter edit mode
            setIsEditingLabel(true);
            setEditedLabel(label);
        }
        prevLabelRef.current = label;
    }, [label]);

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

    // Calculate label position along the line
    const lineLengthX = relEndX - relStartX;
    const lineLengthY = relEndY - relStartY;
    const lineLength = Math.sqrt(lineLengthX * lineLengthX + lineLengthY * lineLengthY);

    // Position along the line (0-1)
    const labelX = relStartX + lineLengthX * labelPosition;
    const labelY = relStartY + lineLengthY * labelPosition;

    // Calculate perpendicular offset
    const perpAngle = Math.atan2(lineLengthY, lineLengthX) + Math.PI / 2;
    const offsetX = Math.cos(perpAngle) * labelOffset;
    const offsetY = Math.sin(perpAngle) * labelOffset;

    const finalLabelX = labelX + offsetX;
    const finalLabelY = labelY + offsetY;

    const handleLabelMouseDown = (e: React.MouseEvent) => {
        if (isEditingLabel) return;
        e.stopPropagation();
        setIsDraggingLabel(true);
        setDragStart({ x: e.clientX, y: e.clientY });
    };

    React.useEffect(() => {
        if (!isDraggingLabel) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!dragStart || !onUpdate) return;

            const dx = e.clientX - dragStart.x;
            const dy = e.clientY - dragStart.y;

            // Calculate new position along line
            const lineAngle = Math.atan2(lineLengthY, lineLengthX);
            const dragAngle = Math.atan2(dy, dx);

            // Project drag onto line direction
            const dragDistance = Math.sqrt(dx * dx + dy * dy);
            const alongLine = dragDistance * Math.cos(dragAngle - lineAngle);
            const perpToLine = dragDistance * Math.sin(dragAngle - lineAngle);

            // Update position (clamped to 0-1)
            const newPosition = Math.max(0, Math.min(1, labelPosition + alongLine / lineLength));
            const newOffset = labelOffset + perpToLine;

            onUpdate({
                labelPosition: newPosition,
                labelOffset: newOffset
            });

            setDragStart({ x: e.clientX, y: e.clientY });
        };

        const handleMouseUp = () => {
            setIsDraggingLabel(false);
            setDragStart(null);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDraggingLabel, dragStart, labelPosition, labelOffset, lineLength, lineLengthX, lineLengthY, onUpdate]);

    const handleLabelDoubleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsEditingLabel(true);
    };

    const handleLabelBlur = () => {
        setIsEditingLabel(false);
        if (onUpdate && editedLabel !== label) {
            onUpdate({ label: editedLabel });
        }
    };

    const handleLabelKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleLabelBlur();
        } else if (e.key === 'Escape') {
            setEditedLabel(label || '');
            setIsEditingLabel(false);
        }
    };

    return (
        <div
            data-canvas-item="line"
            onClick={onClick}
            onDoubleClick={(e) => {
                // Don't create label if clicking on existing label
                if (isEditingLabel || label) return;

                e.stopPropagation();
                // Create a new label
                if (onUpdate) {
                    onUpdate({ label: 'Label' });
                }
            }}
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

            {/* Label */}
            {(label || isEditingLabel) && (
                <div
                    style={{
                        position: 'absolute',
                        left: finalLabelX,
                        top: finalLabelY,
                        transform: 'translate(-50%, -50%)',
                        pointerEvents: isEditingLabel ? 'auto' : 'all',
                        cursor: isDraggingLabel ? 'grabbing' : (isEditingLabel ? 'text' : 'grab')
                    }}
                    onDoubleClick={handleLabelDoubleClick}
                    onMouseDown={handleLabelMouseDown}
                >
                    {isEditingLabel ? (
                        <input
                            type="text"
                            value={editedLabel}
                            onChange={(e) => setEditedLabel(e.target.value)}
                            onBlur={handleLabelBlur}
                            onKeyDown={handleLabelKeyDown}
                            autoFocus
                            style={{
                                fontSize: `${labelSize}px`,
                                color: labelColor,
                                backgroundColor: labelBackgroundColor,
                                border: '1px solid #3b82f6',
                                borderRadius: '4px',
                                padding: '4px 8px',
                                outline: 'none',
                                fontFamily: labelFontFamily,
                                fontWeight: labelBold ? 'bold' : 'normal',
                                fontStyle: labelItalic ? 'italic' : 'normal',
                                minWidth: '60px'
                            }}
                        />
                    ) : (
                        <div
                            style={{
                                fontSize: `${labelSize}px`,
                                color: labelColor,
                                backgroundColor: labelBackgroundColor,
                                padding: '4px 8px',
                                borderRadius: '4px',
                                fontFamily: labelFontFamily,
                                fontWeight: labelBold ? 'bold' : 'normal',
                                fontStyle: labelItalic ? 'italic' : 'normal',
                                whiteSpace: 'nowrap',
                                border: isDraggingLabel ? '2px solid #3b82f6' : '1px solid rgba(0,0,0,0.1)',
                                boxShadow: isDraggingLabel ? '0 4px 12px rgba(59, 130, 246, 0.3)' : 'none'
                            }}
                        >
                            {label}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
