import React from 'react';
import { cn } from '@/lib/utils';


export interface SnapGuide {
    type: 'vertical' | 'horizontal';
    position: number;
    items: string[]; // IDs of items that are aligned
    label?: string; // Optional label (e.g., "Center", "24px")
    guideType?: 'center' | 'edge' | 'spacing'; // Type of alignment
    // Bounds to show guide extent (for visual spanning)
    minY?: number; // For vertical guides
    maxY?: number; // For vertical guides
    minX?: number; // For horizontal guides
    maxX?: number; // For horizontal guides
}

export interface SnapGuidesProps {
    guides: SnapGuide[];
    canvasRect?: DOMRect | null;
    dragRect?: { x: number; y: number; width: number; height: number } | null;
    canvasTransform?: {
        zoom: number;
        pan: { x: number; y: number };
    };
}

export function SnapGuides({ guides, canvasRect, dragRect, canvasTransform }: SnapGuidesProps) {
    if (!canvasRect || guides.length === 0) return null;

    // Helper to convert canvas coordinates to screen coordinates
    const canvasToScreen = (canvasCoord: number) => {
        if (!canvasTransform) return canvasCoord;
        return (canvasCoord * canvasTransform.zoom) + (canvasTransform.zoom === 1 ? 0 : canvasTransform.pan.x);
    };

    const zoom = canvasTransform?.zoom ?? 1;
    const panX = canvasTransform?.pan.x ?? 0;
    const panY = canvasTransform?.pan.y ?? 0;

    // Transform dragRect to screen coordinates for correct label positioning
    const screenDragRect = dragRect ? {
        x: (dragRect.x * zoom) + panX,
        y: (dragRect.y * zoom) + panY,
        width: dragRect.width * zoom,
        height: dragRect.height * zoom
    } : null;

    // Verbose logging - uncomment for detailed debugging
    // console.log('📐 SnapGuides rendering:', {
    //     guidesCount: guides.length,
    //     canvasRect: { width: canvasRect.width, height: canvasRect.height },
    //     guides: guides.map(g => ({ type: g.type, position: g.position, label: g.label }))
    // });

    return (
        <div className="absolute inset-0 pointer-events-none z-40"
            style={{
                width: canvasRect.width,
                height: canvasRect.height,
                overflow: 'hidden'
            }}
        >
            {guides
                .filter(guide => {
                    // Only show guides within canvas bounds
                    if (guide.type === 'vertical') {
                        return guide.position >= 0 && guide.position <= canvasRect.width;
                    } else {
                        return guide.position >= 0 && guide.position <= canvasRect.height;
                    }
                })
                .map((guide, index) => {
                    const key = `${guide.type}-${guide.position}-${index}`;
                    const guideType = guide.guideType || 'edge';

                    // Calculate label position based on dragRect
                    const labelStyle: React.CSSProperties = {
                        backgroundColor: guideType === 'center' ? 'rgba(59, 130, 246, 0.9)' :
                            guideType === 'spacing' ? 'rgba(168, 85, 247, 0.9)' :
                                'rgba(239, 68, 68, 0.9)',
                        color: 'white',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
                    };

                    if (guide.type === 'vertical') {
                        // For vertical guides (X-axis), label follows Y position of dragged item
                        if (screenDragRect) {
                            labelStyle.top = `${screenDragRect.y - 25}px`; // Just above item
                            // Ensure it stays within canvas vertically
                            if (screenDragRect.y < 30) labelStyle.top = `${screenDragRect.y + screenDragRect.height + 10}px`;
                            labelStyle.left = '8px'; // Slight offset from line
                        } else {
                            labelStyle.top = '16px';
                            labelStyle.left = '8px';
                        }
                    } else {
                        // For horizontal guides (Y-axis), label follows X position of dragged item
                        if (screenDragRect) {
                            labelStyle.left = `${screenDragRect.x}px`; // At item start
                            // Ensure it stays within canvas horizontally
                            if (screenDragRect.x < 10) labelStyle.left = '10px';
                            if (canvasRect && screenDragRect.x > canvasRect.width - 100) labelStyle.left = `${canvasRect.width - 100}px`;
                            labelStyle.top = '-25px'; // Just above line
                        } else {
                            labelStyle.left = '16px';
                            labelStyle.top = '8px';
                        }
                    }

                    // Different colors for different guide types
                    const getGuideColor = () => {
                        switch (guideType) {
                            case 'center': return 'bg-blue-500';
                            case 'spacing': return 'bg-purple-500';
                            default: return 'bg-red-500';
                        }
                    };

                    const getShadowColor = () => {
                        switch (guideType) {
                            case 'center': return '0 0 8px rgba(59, 130, 246, 0.8)';
                            case 'spacing': return '0 0 8px rgba(168, 85, 247, 0.8)';
                            default: return '0 0 8px rgba(239, 68, 68, 0.8)';
                        }
                    };

                    if (guide.type === 'vertical') {
                        // Use bounds if available, otherwise span full height
                        const canvasTop = guide.minY ?? 0;
                        const canvasBottom = guide.maxY ?? canvasRect.height;

                        // Convert canvas coordinates to screen coordinates
                        const screenX = (guide.position * zoom) + panX;
                        const screenTop = (canvasTop * zoom) + panY;
                        const screenHeight = (canvasBottom - canvasTop) * zoom;

                        return (
                            <div
                                key={key}
                                className="absolute animate-in fade-in duration-150"
                                style={{
                                    left: `${screenX}px`,
                                    top: `${screenTop}px`,
                                    height: `${screenHeight}px`,
                                    width: '1px',
                                    boxShadow: getShadowColor()
                                }}
                            >
                                <div className={cn("absolute inset-0", getGuideColor())} />
                                {guide.label && (
                                    <div
                                        className="absolute px-2 py-1 rounded text-[10px] font-bold whitespace-nowrap pointer-events-none"
                                        style={labelStyle}
                                    >
                                        {guide.label}
                                    </div>
                                )}
                            </div>
                        );
                    } else {
                        // Horizontal guides - Use bounds if available, otherwise span full width
                        const canvasLeft = guide.minX ?? 0;
                        const canvasRight = guide.maxX ?? canvasRect.width;

                        // Convert canvas coordinates to screen coordinates
                        const screenY = (guide.position * zoom) + panY;
                        const screenLeft = (canvasLeft * zoom) + panX;
                        const screenWidth = (canvasRight - canvasLeft) * zoom;

                        return (
                            <div
                                key={key}
                                className="absolute animate-in fade-in duration-150"
                                style={{
                                    top: `${screenY}px`,
                                    left: `${screenLeft}px`,
                                    width: `${screenWidth}px`,
                                    height: '1px',
                                    boxShadow: getShadowColor()
                                }}
                            >
                                <div className={cn("absolute inset-0", getGuideColor())} />
                                {guide.label && (
                                    <div
                                        className="absolute px-2 py-1 rounded text-[10px] font-bold whitespace-nowrap pointer-events-none"
                                        style={labelStyle}
                                    >
                                        {guide.label}
                                    </div>
                                )}
                            </div>
                        );
                    }
                })}
        </div>
    );
}
