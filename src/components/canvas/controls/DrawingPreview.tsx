import React from 'react';

interface DrawingPreviewProps {
    drawingState: {
        isDrawing: boolean;
        startX: number;
        startY: number;
        currentX: number;
        currentY: number;
        points?: { x: number; y: number }[];
        endX?: number;
        endY?: number;
    } | null;
    activeTool: string;
}

/**
 * Component to show preview while drawing (pen, line, arrow, frame)
 * 
 * Shows the path/line/frame being drawn in real-time before it's finalized
 */
export function DrawingPreview({ drawingState, activeTool }: DrawingPreviewProps) {
    if (!drawingState?.isDrawing) return null;

    const renderPreview = () => {
        if (activeTool === 'pen' && drawingState.points && drawingState.points.length > 1) {
            // Render pen path preview
            const pathString = `M ${drawingState.points.map(p => `${p.x},${p.y}`).join(' L ')}`;

            return (
                <svg
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        pointerEvents: 'none',
                        overflow: 'visible'
                    }}
                >
                    <path
                        d={pathString}
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity={0.7}
                    />
                </svg>
            );
        }

        if ((activeTool === 'line' || activeTool === 'arrow') && drawingState.endX !== undefined && drawingState.endY !== undefined) {
            // Render line/arrow preview
            const { startX, startY, endX, endY } = drawingState;

            // Calculate arrow head points if needed
            const getArrowPoints = () => {
                if (activeTool !== 'arrow') return null;

                const angle = Math.atan2(endY - startY, endX - startX);
                const arrowSize = 10;
                const arrowAngle = Math.PI / 6; // 30 degrees

                const point1 = {
                    x: endX - arrowSize * Math.cos(angle - arrowAngle),
                    y: endY - arrowSize * Math.sin(angle - arrowAngle)
                };

                const point2 = {
                    x: endX - arrowSize * Math.cos(angle + arrowAngle),
                    y: endY - arrowSize * Math.sin(angle + arrowAngle)
                };

                return `${point1.x},${point1.y} ${endX},${endY} ${point2.x},${point2.y}`;
            };

            return (
                <svg
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        pointerEvents: 'none',
                        overflow: 'visible'
                    }}
                >
                    {/* Main line */}
                    <line
                        x1={startX}
                        y1={startY}
                        x2={endX}
                        y2={endY}
                        stroke="#3b82f6"
                        strokeWidth={2}
                        strokeLinecap="round"
                        opacity={0.7}
                    />

                    {/* Arrow head */}
                    {activeTool === 'arrow' && (
                        <polyline
                            points={getArrowPoints() || ''}
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            opacity={0.7}
                        />
                    )}
                </svg>
            );
        }

        if (activeTool === 'frame' && drawingState.endX !== undefined && drawingState.endY !== undefined) {
            // Render frame preview
            const { startX, startY, endX, endY } = drawingState;
            const width = Math.abs(endX - startX);
            const height = Math.abs(endY - startY);
            const x = Math.min(startX, endX);
            const y = Math.min(startY, endY);

            return (
                <div
                    style={{
                        position: 'absolute',
                        left: x,
                        top: y,
                        width,
                        height,
                        border: '2px dashed #3b82f6',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        borderRadius: '4px',
                        pointerEvents: 'none',
                        opacity: 0.7
                    }}
                >
                    {/* Show dimensions */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '-24px',
                            left: '0',
                            padding: '2px 8px',
                            backgroundColor: '#3b82f6',
                            color: 'white',
                            borderRadius: '4px',
                            fontSize: '12px',
                            fontWeight: 500,
                            whiteSpace: 'nowrap'
                        }}
                    >
                        {Math.round(width)} × {Math.round(height)}
                    </div>
                </div>
            );
        }

        return null;
    };

    return (
        <div
            style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                zIndex: 1000
            }}
        >
            {renderPreview()}
        </div>
    );
}
