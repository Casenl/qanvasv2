import React from 'react';
import { PathData } from '@/lib/types/shapeTypes';

interface PathRendererProps {
    data: PathData;
    isSelected?: boolean;
    onClick?: () => void;
    onUpdate?: (updates: Partial<PathData>) => void;
}

/**
 * Component for rendering freehand paths (pen tool)
 * 
 * Features:
 * - Renders SVG path from points
 * - Supports stroke styling
 * - Selection state
 */
export function PathRenderer({ data, isSelected = false, onClick, onUpdate }: PathRendererProps) {
    const {
        pathString,
        strokeColor,
        strokeWidth,
        strokeStyle = 'solid',
        opacity,
        label,
        labelColor = '#000000',
        labelSize = 14,
        labelBackgroundColor = 'rgba(255, 255, 255, 0.9)',
        labelFontFamily = 'Titillium Web, sans-serif',
        labelBold = false,
        labelItalic = false
    } = data;

    const [isEditingLabel, setIsEditingLabel] = React.useState(false);
    const [editedLabel, setEditedLabel] = React.useState(label || '');
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

    // Calculate midpoint of path for label placement
    const getMidpoint = () => {
        if (!data.points || data.points.length === 0) {
            return { x: 50, y: 50 };
        }

        const midIndex = Math.floor(data.points.length / 2);
        return data.points[midIndex];
    };

    const bbox = getBoundingBox();
    const width = Math.max(100, bbox.maxX - bbox.minX + 20); // Add padding
    const height = Math.max(100, bbox.maxY - bbox.minY + 20);
    const midpoint = getMidpoint();

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
            data-canvas-item="path"
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

            {/* Label */}
            {(label || isEditingLabel) && (
                <div
                    style={{
                        position: 'absolute',
                        left: midpoint.x,
                        top: midpoint.y,
                        transform: 'translate(-50%, -50%)',
                        pointerEvents: isEditingLabel ? 'auto' : 'none'
                    }}
                    onDoubleClick={handleLabelDoubleClick}
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
                                pointerEvents: 'auto',
                                cursor: 'text'
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
