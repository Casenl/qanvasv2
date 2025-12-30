'use client';

import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Package, Layout, Zap, Info, Settings, Lock, Users, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CanvasItem } from '@/lib/types';

interface CanvasItemCardProps {
    item: CanvasItem;
    isSelected: boolean;
    onClick: (e: React.MouseEvent) => void;
    vendorName?: string;
    propositionColor?: string;
    forceTransparent?: boolean; // Force transparency even if not dragging (for multi-select)
}

export interface CanvasCardVisualProps extends React.HTMLAttributes<HTMLDivElement> {
    item: CanvasItem;
    isSelected: boolean;
    vendorName?: string;
    propositionColor?: string;
    isDragging?: boolean;
    comparisonChanges?: any;
}

export const CanvasCardVisual = React.forwardRef<HTMLDivElement, CanvasCardVisualProps>(
    ({ item, isSelected, vendorName, propositionColor, isDragging, comparisonChanges, className, style, ...props }, ref) => {
        const getIcon = () => {
            switch (item.entityType) {
                case 'product': return <Package className="w-4 h-4" />;
                case 'vendor': return <Layout className="w-4 h-4" />;
                case 'solution': return <Zap className="w-4 h-4" />;
                default: return <Info className="w-4 h-4" />;
            }
        };

        const getIconClasses = () => {
            // Use Tailwind classes for proper color rendering
            switch (item.entityType) {
                case 'product': return 'bg-blue-500/20 text-blue-500';
                case 'vendor': return 'bg-purple-500/20 text-purple-500';
                case 'solution': return 'bg-emerald-500/20 text-emerald-500';
                default: return 'bg-gray-500/20 text-gray-500';
            }
        };

        return (
            <div
                ref={ref}
                style={{
                    backgroundColor: 'var(--color-surface)',
                    borderTopColor: isSelected ? 'var(--color-primary)' : 'rgba(128, 128, 128, 0.2)',
                    borderRightColor: isSelected ? 'var(--color-primary)' : 'rgba(128, 128, 128, 0.2)',
                    borderBottomColor: isSelected ? 'var(--color-primary)' : 'rgba(128, 128, 128, 0.2)',
                    borderLeftColor: propositionColor || (isSelected ? 'var(--color-primary)' : 'rgba(128, 128, 128, 0.2)'),
                    borderLeftWidth: propositionColor ? '4px' : '1px',
                    borderTopWidth: '1px',
                    borderRightWidth: '1px',
                    borderBottomWidth: '1px',
                    color: 'var(--color-text)',
                    cursor: item.locked ? 'not-allowed' : 'move',
                    opacity: isDragging ? 0 : 1,
                    ...style,
                }}
                className={cn(
                    "group p-4 w-75 rounded-2xl border backdrop-blur-xl shadow-2xl transition-all duration-300 select-none",
                    isSelected ? "ring-4 ring-blue-500 scale-105 z-30 shadow-blue-500/50" : "hover:scale-[1.02] z-20",
                    item.locked && "opacity-75",
                    className
                )}
                {...props}
            >
                {/* Status Indicators */}
                <div className="absolute top-2 right-2 flex gap-1">
                    {item.locked && (
                        <div
                            className="p-1 rounded-md bg-orange-500"
                            title="Locked"
                        >
                            <Lock className="w-3 h-3 text-white" />
                        </div>
                    )}
                    {item.groupId && (
                        <div
                            className="p-1 rounded-md bg-purple-500"
                            title="Grouped"
                        >
                            <Users className="w-3 h-3 text-white" />
                        </div>
                    )}
                </div>

                <div className="flex items-start justify-between mb-3">
                    <div
                        className={cn("w-10 h-10 rounded-xl flex items-center justify-center shadow-inner", getIconClasses())}
                    >
                        {getIcon()}
                    </div>
                    <div className="flex gap-1">
                        <div
                            className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-lg"
                            title="Active"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <h4
                        className="text-sm font-semibold truncate"
                        style={{ color: 'var(--color-text)' }}
                    >
                        {item.data.label}
                    </h4>
                    {vendorName && (
                        <p
                            className="text-[10px] uppercase font-bold tracking-widest"
                            style={{ color: 'var(--color-text-muted)' }}
                        >
                            {vendorName}
                        </p>
                    )}
                </div>

                {/* Comparison Changes View */}
                {comparisonChanges?.metrics && (
                    <div className="mt-4 pt-4 border-t border-dashed" style={{ borderColor: 'var(--color-border)' }}>
                        <h5 className="text-xs font-bold mb-2 flex items-center gap-2" style={{ color: 'var(--color-primary)' }}>
                            <TrendingUp className="w-3 h-3" /> Metric Changes
                        </h5>
                        <div className="space-y-1">
                            {Object.entries(comparisonChanges.metrics).map(([key, change]: [string, any]) => (
                                <div key={key} className="flex items-center justify-between text-[10px]">
                                    <span className="font-medium capitalize" style={{ color: 'var(--color-text-secondary)' }}>
                                        {key.replace(/_/g, ' ')}
                                    </span>
                                    <div className="flex items-center gap-1">
                                        <span className="line-through opacity-50">{change.from ?? '-'}</span>
                                        <span className="text-blue-500">→</span>
                                        <span className="font-bold" style={{ color: 'var(--color-text)' }}>{change.to ?? '-'}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {isSelected && !comparisonChanges && (
                    <div
                        className="mt-4 pt-4 flex items-center justify-between text-[11px]"
                        style={{
                            borderTop: '1px solid var(--color-border)',
                            color: 'var(--color-text-secondary)'
                        }}
                    >
                        <span className="flex items-center gap-1.5">
                            <Settings className="w-3 h-3" /> Configured
                        </span>
                        <span className="px-2 py-0.5 rounded-full font-medium bg-blue-500/20 text-blue-500">
                            Standard
                        </span>
                    </div>
                )}
            </div>
        );
    }
);

CanvasCardVisual.displayName = 'CanvasCardVisual';

export function CanvasItemCard({ item, isSelected, onClick, vendorName, propositionColor, forceTransparent = false, comparisonChanges }: CanvasItemCardProps & { comparisonChanges?: any }) {
    const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
        id: item.id,
        data: { ...item, source: 'canvas' },
        disabled: item.locked // Disable dragging if locked
    });

    const mouseDownPos = React.useRef<{ x: number; y: number } | null>(null);
    const dragOccurred = React.useRef(false);
    const wasDragging = React.useRef(false);

    // Track when dragging state changes
    React.useEffect(() => {
        if (isDragging) {
            dragOccurred.current = true;
            wasDragging.current = true;
        } else if (wasDragging.current) {
            // Drag just ended
            wasDragging.current = false;
            // Keep dragOccurred flag set until after click event
            setTimeout(() => {
                dragOccurred.current = false;
            }, 100);
        }
    }, [isDragging]);

    const style = {
        position: 'absolute' as const,
        top: item.y,
        left: item.x,
        // Visual opacity is handled by isDragging prop in visual component
    };

    // Merge our onMouseDown with dnd-kit's listeners
    // For locked items: Allow clicks but prevent dragging
    const mergedListeners = item.locked ? {
        // For locked items, only handle click (no drag listeners)
        onMouseDown: (e: React.MouseEvent) => {
            // CRITICAL: Stop propagation to prevent canvas background from clearing selection
            e.stopPropagation();

            // Track mouse down position for click detection
            mouseDownPos.current = { x: e.clientX, y: e.clientY };
            dragOccurred.current = false;

            // Don't call dnd-kit's listeners - this prevents dragging
        }
    } : {
        // For unlocked items: Full drag + click support
        ...listeners,
        onMouseDown: (e: React.MouseEvent) => {
            // CRITICAL: Stop propagation FIRST to prevent canvas background from clearing selection
            e.stopPropagation();

            // Track mouse down position to detect if this is a click or drag
            mouseDownPos.current = { x: e.clientX, y: e.clientY };
            dragOccurred.current = false;

            // Call dnd-kit's original onMouseDown handler
            if (listeners?.onMouseDown) {
                listeners.onMouseDown(e as any);
            }
        }
    };

    return (
        <CanvasCardVisual
            ref={setNodeRef}
            item={item}
            isSelected={isSelected}
            vendorName={vendorName}
            isDragging={isDragging || forceTransparent}
            style={style}
            onClick={(e) => {
                e.stopPropagation();

                // Don't trigger onClick if a drag occurred
                if (dragOccurred.current) {
                    return;
                }

                // Only trigger onClick if mouse hasn't moved much (it's a click, not a drag)
                if (mouseDownPos.current) {
                    const dx = Math.abs(e.clientX - mouseDownPos.current.x);
                    const dy = Math.abs(e.clientY - mouseDownPos.current.y);

                    // If mouse moved less than 5px, treat as click
                    if (dx < 5 && dy < 5) {
                        onClick(e);
                    }
                }
                mouseDownPos.current = null;
            }}
            {...attributes}
            {...mergedListeners}
            propositionColor={propositionColor}
            comparisonChanges={comparisonChanges}
        />
    );
}
