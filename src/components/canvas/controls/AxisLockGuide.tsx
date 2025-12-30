import React from 'react';

interface AxisLockGuideProps {
    isActive: boolean;
    axis: 'x' | 'y' | null;
    position: { x: number; y: number } | null;
    canvasRect: DOMRect | null;
}

export function AxisLockGuide({ isActive, axis, position, canvasRect }: AxisLockGuideProps) {
    if (!isActive || !axis || !position || !canvasRect) return null;

    return (
        <div className="absolute inset-0 pointer-events-none z-45">
            {axis === 'x' ? (
                // Horizontal guide line (locked to X axis)
                <div
                    className="absolute left-0 right-0 h-0.5 bg-blue-500 opacity-60"
                    style={{
                        top: `${position.y}px`,
                        boxShadow: '0 0 12px rgba(59, 130, 246, 0.8)'
                    }}
                >
                    {/* Dashed line for full width */}
                    <div
                        className="absolute left-0 right-0 h-px border-t-2 border-dashed border-blue-400"
                        style={{ top: '0px', opacity: 0.4 }}
                    />
                </div>
            ) : (
                // Vertical guide line (locked to Y axis)
                <div
                    className="absolute top-0 bottom-0 w-0.5 bg-blue-500 opacity-60"
                    style={{
                        left: `${position.x}px`,
                        boxShadow: '0 0 12px rgba(59, 130, 246, 0.8)'
                    }}
                >
                    {/* Dashed line for full height */}
                    <div
                        className="absolute top-0 bottom-0 w-px border-l-2 border-dashed border-blue-400"
                        style={{ left: '0px', opacity: 0.4 }}
                    />
                </div>
            )}
        </div>
    );
}
