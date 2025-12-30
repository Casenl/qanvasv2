'use client';

import React, { useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Layout } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CanvasItem, Vendor, Proposition, Product } from '@/lib/types';
import { SnapshotComparison } from '@/lib/types/snapshot';
import { CanvasItemCard } from './CanvasItemCard';
import { SelectionBox } from './controls/SelectionBox';
import { GroupOutline } from './controls/GroupOutline';
import { MultiSelectIndicator } from './controls/MultiSelectIndicator';
import { SnapGuides, SnapGuide } from './controls/SnapGuides';
import { AxisLockGuide } from './controls/AxisLockGuide';
import { ZoomControls } from './controls/ZoomControls';
import { ThemeToggle } from './controls/ThemeToggle';
import { ColorSchemeToggle } from './controls/ColorSchemeToggle';
import { Package } from 'lucide-react';

interface CanvasWorkspaceProps {
    canvasRef: React.RefObject<HTMLDivElement | null>;
    items: CanvasItem[];
    snapGuides?: SnapGuide[];
    activeDragRect?: { x: number; y: number; width: number; height: number } | null;
    activeDragItemId?: string | null;
    selectedIds: string[];
    debugInfo: string;
    vendors: Vendor[];
    propositions: Proposition[];
    products: Product[];
    multiSelect: {
        toggleSelect: (id: string, isCtrlPressed: boolean) => void;
        startBoxSelection: (x: number, y: number) => void;
        updateBoxSelection: (x: number, y: number) => void;
        endBoxSelection: (ids: string[], isCtrlPressed: boolean) => void;
        selectionBox: any;
        isSelecting: boolean;
        clearSelection: () => void;
    };
    onClearItems: () => void;
    lockedAxis?: 'x' | 'y' | null;
    isShiftPressed?: boolean;
    canvasTransform?: {
        zoom: number;
        pan: { x: number; y: number };
    };
    zoom?: number;
    onZoomIn?: () => void;
    onZoomOut?: () => void;
    onResetZoom?: () => void;
    isDark?: boolean;
    onToggleTheme?: () => void;
    onPan?: (x: number, y: number) => void;
    colorSchemeEnabled?: boolean;
    onToggleColorScheme?: () => void;
    comparisonResult?: SnapshotComparison | null;
}

export function CanvasWorkspace({
    canvasRef,
    items,
    selectedIds,
    debugInfo,
    vendors,
    propositions,
    products,
    multiSelect,
    onClearItems,
    snapGuides = [],
    activeDragRect,
    activeDragItemId = null,
    lockedAxis = null,
    isShiftPressed = false,
    canvasTransform,
    zoom = 1.0,
    onZoomIn,
    onZoomOut,
    onResetZoom,
    isDark = false,
    onToggleTheme,
    onPan,
    colorSchemeEnabled = true,
    onToggleColorScheme,
    comparisonResult
}: CanvasWorkspaceProps) {
    const { setNodeRef, isOver } = useDroppable({
        id: 'canvas-droppable',
    });

    const getVendorName = (vendorId: string) => {
        return vendors.find(v => v.id === vendorId)?.name;
    };

    const getPropositionColor = (entityId: string) => {
        if (!colorSchemeEnabled) return undefined;
        const product = products.find(p => p.id === entityId);
        if (!product) return undefined;
        const proposition = propositions.find(p => p.id === product.propositionId);
        return proposition?.color;
    };

    // Pan state for middle mouse button
    const [isPanning, setIsPanning] = useState(false);
    const [panStart, setPanStart] = useState({ x: 0, y: 0 });
    const [initialPan, setInitialPan] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e: React.MouseEvent) => {
        // Middle mouse button (button 1) for panning
        if (e.button === 1) {
            e.preventDefault();
            setIsPanning(true);
            setPanStart({ x: e.clientX, y: e.clientY });
            setInitialPan({
                x: canvasTransform?.pan.x ?? 0,
                y: canvasTransform?.pan.y ?? 0
            });
            return;
        }

        // Left mouse button - existing selection logic
        // Since items stop propagation, getting here means we clicked the background
        if (!e.ctrlKey) {
            multiSelect.clearSelection();
        }
        const rect = canvasRef.current?.getBoundingClientRect();
        if (rect) {
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            multiSelect.startBoxSelection(x, y);
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        // Handle panning
        if (isPanning && canvasTransform) {
            const deltaX = e.clientX - panStart.x;
            const deltaY = e.clientY - panStart.y;

            // Update pan through the canvas transform (passed from parent)
            // We need to pass this back to the parent component
            const newPanX = initialPan.x + deltaX;
            const newPanY = initialPan.y + deltaY;

            // Call parent's pan update function
            if (onPan) {
                onPan(newPanX, newPanY);
            }
            return;
        }

        // Handle box selection
        if (multiSelect.isSelecting) {
            const rect = canvasRef.current?.getBoundingClientRect();
            if (rect) {
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                multiSelect.updateBoxSelection(x, y);
            }
        }
    };

    const handleMouseUp = (e: React.MouseEvent) => {
        // End panning
        if (isPanning) {
            setIsPanning(false);
            return;
        }

        // Handle box selection
        if (multiSelect.isSelecting && multiSelect.selectionBox) {
            const box = multiSelect.selectionBox;

            const itemsInBox = items.filter(item => {
                const itemWidth = 300; // Updated to match actual card width
                const itemHeight = 172; // Updated to match actual card height

                // Check if item is FULLY contained within the selection box
                const isFullyContained = (
                    item.x >= box.x &&
                    item.y >= box.y &&
                    item.x + itemWidth <= box.x + box.width &&
                    item.y + itemHeight <= box.y + box.height
                );

                return isFullyContained;
            }).map(i => i.id);

            multiSelect.endBoxSelection(itemsInBox, e.ctrlKey);
        }
    };

    return (
        <main
            ref={(node) => {
                setNodeRef(node);
                if (canvasRef && typeof canvasRef === 'object') {
                    // @ts-ignore
                    canvasRef.current = node;
                }
            }}
            className={cn(
                "flex-1 relative overflow-hidden z-0 transition-colors duration-200",
                isOver && "bg-green-500/20",
                isPanning && "cursor-grabbing"
            )}
            style={{
                cursor: isPanning ? 'grabbing' : 'default',
                backgroundImage: isDark
                    ? 'radial-gradient(#333333 1px, transparent 1px)'
                    : 'radial-gradient(#999999 1px, transparent 1px)',
                backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
                backgroundSize: '16px 16px'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onContextMenu={(e) => {
                // Prevent context menu on middle mouse button
                if (isPanning) {
                    e.preventDefault();
                }
            }}
        >
            {/* Layer 1: Transformed Canvas Content (zooms and pans) */}
            <div
                ref={(node) => {
                    if (canvasRef && typeof canvasRef === 'object') {
                        // @ts-ignore
                        canvasRef.current = node;
                    }
                }}
                className="absolute inset-0 w-full h-full"
                style={{
                    transform: canvasTransform
                        ? `translate(${canvasTransform.pan.x}px, ${canvasTransform.pan.y}px) scale(${canvasTransform.zoom})`
                        : undefined,
                    transformOrigin: '0 0',
                    transition: 'none'
                }}
            >
                {/* Group Outlines */}
                {Array.from(new Set(items.filter(it => it.groupId).map(it => it.groupId))).map(groupId => (
                    <GroupOutline key={groupId} items={items} groupId={groupId!} />
                ))}

                {/* Canvas Items */}
                {items.map((item) => {
                    const isItemSelected = selectedIds.includes(item.id);
                    // Make item transparent if:
                    // 1. It's being dragged, OR
                    // 2. It's selected AND another selected item is being dragged (multi-select drag)
                    const shouldBeTransparent = !!(isItemSelected && activeDragItemId && selectedIds.includes(activeDragItemId));

                    return (
                        <CanvasItemCard
                            key={item.id}
                            item={item}
                            isSelected={isItemSelected}
                            vendorName={getVendorName(item.entityId)}
                            propositionColor={getPropositionColor(item.entityId)}
                            onClick={(e) => multiSelect.toggleSelect(item.id, e.ctrlKey)}
                            forceTransparent={shouldBeTransparent}
                            comparisonChanges={comparisonResult?.modified.find(m => m.item.id === item.id)?.changes}
                        />
                    );
                })}


                {/* Empty State */}
                {items.length === 0 && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <div className="w-32 h-32 mb-6 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center">
                            <Layout className="w-10 h-10 text-white/10" />
                        </div>
                        <h3 className="text-lg font-medium text-white/40 mb-2">Initialize Canvas</h3>
                        <p className="text-sm text-white/20">Drag components from the sidebar to begin designing</p>
                    </div>
                )}
            </div>

            {/* Layer 2: Fixed UI Overlays (NOT affected by zoom/pan) */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Selection Box */}
                <SelectionBox box={multiSelect.selectionBox} />

                {/* Snap Guides */}
                <div className="absolute inset-0 overflow-hidden z-40">
                    <SnapGuides
                        guides={snapGuides}
                        canvasRect={canvasRef.current?.getBoundingClientRect()}
                        dragRect={activeDragRect}
                        canvasTransform={canvasTransform}
                    />
                    <AxisLockGuide
                        isActive={isShiftPressed && !!activeDragRect}
                        axis={lockedAxis}
                        position={activeDragRect ? { x: activeDragRect.x, y: activeDragRect.y } : null}
                        canvasRect={canvasRef.current?.getBoundingClientRect() ?? null}
                    />
                </div>

                {/* Multi-Select Indicator */}
                <MultiSelectIndicator count={selectedIds.length} />

                {/* Status Bar - Top Left */}
                <div className="absolute top-6 left-6 flex flex-col gap-3 z-10 pointer-events-none">
                    {/* Status Chips Row */}
                    <div className="flex items-center gap-3">
                        <div
                            className="px-3 py-1.5 rounded-lg backdrop-blur-xl shadow-sm border transaction-colors duration-200"
                            style={{
                                backgroundColor: 'var(--color-surface)',
                                borderColor: 'var(--color-border)',
                            }}
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)] animate-pulse" />
                                <span
                                    className="text-[10px] font-bold uppercase tracking-widest"
                                    style={{ color: 'var(--color-text)' }}
                                >
                                    Online
                                </span>
                            </div>
                        </div>

                        <div
                            className="px-3 py-1.5 rounded-lg backdrop-blur-xl shadow-sm border transaction-colors duration-200"
                            style={{
                                backgroundColor: 'var(--color-surface)',
                                borderColor: 'var(--color-border)',
                            }}
                        >
                            <div className="flex items-center gap-2">
                                <Layout
                                    className="w-3 h-3"
                                    style={{ color: 'var(--color-primary)' }}
                                />
                                <span
                                    className="text-[10px] font-bold uppercase tracking-widest"
                                    style={{ color: 'var(--color-text)' }}
                                >
                                    {items.length} Assets
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Last Action Row */}
                    <div
                        className="px-3 py-1.5 rounded-lg backdrop-blur-xl shadow-sm border self-start transaction-colors duration-200"
                        style={{
                            backgroundColor: 'var(--color-surface)',
                            borderColor: 'var(--color-border)',
                        }}
                    >
                        <div className="flex items-center gap-2">
                            <span
                                className="text-[10px] font-medium"
                                style={{ color: 'var(--color-text-secondary)' }}
                            >
                                Last:
                            </span>
                            <span
                                className="text-[10px] font-bold"
                                style={{ color: 'var(--color-text)' }}
                            >
                                {debugInfo}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Coordinate Display - Bottom Right (only when item selected) */}
                {selectedIds.length === 1 && (() => {
                    const item = items.find(i => i.id === selectedIds[0]);
                    if (!item) return null;
                    return (
                        <div
                            className="absolute bottom-20 right-6 px-4 py-2 rounded-lg backdrop-blur-md text-xs font-mono flex flex-col gap-1 z-50"
                            style={{
                                backgroundColor: 'var(--color-background-secondary)'
                            }}
                        >
                            <div className="flex gap-4 justify-between">
                                <span>X: {Math.round(item.x)}</span>
                                <span>Y: {Math.round(item.y)}</span>
                            </div>
                            <div className="flex gap-4 justify-between opacity-70">
                                <span>W: 300</span>
                                <span>H: 172</span>
                            </div>
                        </div>
                    );
                })()}

                {/* Clear Workspace Button - Bottom Left */}
                <div className="absolute bottom-6 left-6 z-10">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onClearItems();
                        }}
                        className="pointer-events-auto px-4 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all hover:bg-red-500/20 hover:text-red-400"
                        style={{
                            backgroundColor: 'var(--color-background-secondary)',
                            color: 'var(--color-text-muted)'
                        }}
                    >
                        Clear Workspace
                    </button>
                </div>

                {/* Bottom Right Controls - Zoom and Theme */}
                <div className="absolute bottom-6 right-6 flex items-center gap-3 z-10">
                    {/* Zoom Controls */}
                    {onZoomIn && onZoomOut && onResetZoom && (
                        <div
                            className="flex items-center gap-2 backdrop-blur-xl rounded-lg shadow-lg px-3 py-2 pointer-events-auto"
                            style={{
                                backgroundColor: 'var(--color-background-secondary)'
                            }}
                        >
                            <button
                                onClick={onZoomOut}
                                disabled={zoom <= 0.1}
                                className="p-1.5 rounded transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                                style={{
                                    color: 'var(--color-text)'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-background)'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                title="Zoom out (Ctrl + -)"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                </svg>
                            </button>

                            <button
                                onClick={onResetZoom}
                                className="min-w-[60px] px-2 py-1 text-sm font-medium rounded transition-colors"
                                style={{
                                    color: 'var(--color-text)'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-background)'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                title="Reset to 100% (Ctrl + 0)"
                            >
                                {Math.round(zoom * 100)}%
                            </button>

                            <button
                                onClick={onZoomIn}
                                disabled={zoom >= 4.0}
                                className="p-1.5 rounded transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                                style={{
                                    color: 'var(--color-text)'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-background)'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                title="Zoom in (Ctrl + +)"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                        </div>
                    )}

                    {/* Color Scheme Toggle */}
                    {onToggleColorScheme && (
                        <ColorSchemeToggle
                            enabled={colorSchemeEnabled}
                            onToggle={onToggleColorScheme}
                        />
                    )}


                    {/* Theme Toggle */}
                    {onToggleTheme && (
                        <button
                            onClick={onToggleTheme}
                            className="p-2.5 rounded-lg backdrop-blur-xl transition-colors pointer-events-auto"
                            style={{
                                backgroundColor: 'var(--color-background-secondary)'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-background)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)'}
                            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
                        >
                            {isDark ? (
                                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>
                    )}
                </div>
            </div>
        </main>
    );
}
