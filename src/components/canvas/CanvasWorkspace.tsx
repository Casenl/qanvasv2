'use client';

import React, { useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Layout } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CanvasItem, Vendor, Proposition, Product } from '@/lib/types';
import { SnapshotComparison } from '@/lib/types/snapshot';
import { CanvasItemCard } from './CanvasItemCard';
import { CanvasItemRenderer } from './CanvasItemRenderer';
import { TransformLayer } from './controls/TransformLayer';
import { useTransform } from '@/hooks/useTransform';
import { useCanvasDrop } from '@/hooks/useCanvasDrop';
import { CanvasOverlays } from './CanvasOverlays';
import { MultiSelectBoundingBox } from './controls/MultiSelectBoundingBox';
import { SnapGuide } from './controls/SnapGuides';
import { DrawingPreview } from './controls/DrawingPreview';

interface CanvasWorkspaceProps {
    canvasRef: React.RefObject<HTMLDivElement>;
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
        toggleSelection: (ids: string[], isCtrlPressed: boolean) => void;
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
    // Drawing mode
    drawingMode?: {
        handleCanvasClick: (e: React.MouseEvent<HTMLDivElement>) => boolean;
        handleDrawStart: (e: React.MouseEvent<HTMLDivElement>) => boolean;
        handleDrawMove: (e: React.MouseEvent<HTMLDivElement>) => void;
        handleDrawEnd: () => void;
        getCursorStyle: () => string;
        screenToCanvas: (screenX: number, screenY: number) => { x: number; y: number };
        drawingState: any;
        activeTool?: string;
    };
    onItemUpdate?: (itemId: string, newData: any) => void;
    onItemAdd?: (item: CanvasItem) => void;
    onToolReset?: () => void; // Reset to select tool
    onTransformStart?: () => void;
    onTransformEnd?: () => void;
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
    comparisonResult,
    drawingMode,
    onItemUpdate,
    onItemAdd,
    onToolReset,
    onTransformStart,
    onTransformEnd
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
    const [shapeSnapGuides, setShapeSnapGuides] = useState<SnapGuide[]>([]);

    // Transform hook for resize/rotate
    const transform = useTransform({
        onUpdate: (id, updates) => onItemUpdate?.(id, updates),
        onItemAdd,
        onTransformStart,
        onTransformEnd,
        zoom: canvasTransform?.zoom || 1,
        pan: canvasTransform?.pan || { x: 0, y: 0 },
        canvasRef,
        items,
        selectedIds,
        snapEnabled: true,
        onSnap: setShapeSnapGuides
    });

    // Global event listeners for transform
    React.useEffect(() => {
        if (transform.transformState) {
            window.addEventListener('mousemove', transform.handleMouseMove);
            window.addEventListener('mouseup', transform.handleMouseUp);
            return () => {
                window.removeEventListener('mousemove', transform.handleMouseMove);
                window.removeEventListener('mouseup', transform.handleMouseUp);
            };
        }
    }, [transform.transformState, transform.handleMouseMove, transform.handleMouseUp]);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        // If transforming, don't do anything else
        if (transform.transformState) return;

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

        // Left mouse button - check if we're in drawing mode
        if (drawingMode && e.button === 0) {
            // Try interactive drawing tools first (pen, line, arrow)
            const drawStarted = drawingMode.handleDrawStart(e);
            if (drawStarted) {
                return; // Drawing started, don't continue to other handlers
            }

            // Fall back to click-to-place tools (shapes, text, sticky notes, image)
            const handled = drawingMode.handleCanvasClick(e);
            if (handled !== false) {
                return; // Item created, don't continue to selection logic
            }
        }

        // Default: selection logic
        // Since items stop propagation, getting here means we clicked the background
        if (!e.ctrlKey) {
            multiSelect.clearSelection();
        }
        const rect = canvasRef.current?.getBoundingClientRect();
        if (rect && canvasTransform) {
            // Convert screen coordinates to canvas coordinates
            const screenX = e.clientX - rect.left;
            const screenY = e.clientY - rect.top;
            const canvasX = (screenX - canvasTransform.pan.x) / canvasTransform.zoom;
            const canvasY = (screenY - canvasTransform.pan.y) / canvasTransform.zoom;
            multiSelect.startBoxSelection(canvasX, canvasY);
        }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        // Handle drawing (pen, line, arrow)
        if (drawingMode?.drawingState?.isDrawing) {
            drawingMode.handleDrawMove(e);
            return;
        }

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
            if (rect && canvasTransform) {
                // Convert screen coordinates to canvas coordinates
                const screenX = e.clientX - rect.left;
                const screenY = e.clientY - rect.top;
                const canvasX = (screenX - canvasTransform.pan.x) / canvasTransform.zoom;
                const canvasY = (screenY - canvasTransform.pan.y) / canvasTransform.zoom;
                multiSelect.updateBoxSelection(canvasX, canvasY);
            }
        }
    };

    const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
        // End drawing
        if (drawingMode?.drawingState?.isDrawing) {
            drawingMode.handleDrawEnd();
            return;
        }

        // End panning
        if (isPanning) {
            setIsPanning(false);
            return;
        }

        // Handle box selection
        if (multiSelect.isSelecting && multiSelect.selectionBox) {
            const box = multiSelect.selectionBox;

            // Box is now in canvas coordinates, items are also in canvas coordinates
            const itemsInBoxRaw = items.filter(item => {
                // Determine item dimensions
                let itemWidth = 300; // Default for cards
                let itemHeight = 172;

                if (item.data && typeof item.data.width === 'number' && typeof item.data.height === 'number') {
                    itemWidth = item.data.width;
                    itemHeight = item.data.height;
                }

                // Check if item is FULLY contained within the selection box
                const isFullyContained = (
                    item.x >= box.x &&
                    item.y >= box.y &&
                    item.x + itemWidth <= box.x + box.width &&
                    item.y + itemHeight <= box.y + box.height
                );

                return isFullyContained;
            }).map(i => i.id);

            // Expand selection to include all members of affected groups
            const extendedSelection = new Set(itemsInBoxRaw);

            // Find all group IDs involved in the selection
            const selectedGroupIds = new Set<string>();
            items.forEach(item => {
                if (itemsInBoxRaw.includes(item.id) && item.groupId) {
                    selectedGroupIds.add(item.groupId);
                }
            });

            // Add all items belonging to those groups
            if (selectedGroupIds.size > 0) {
                items.forEach(item => {
                    if (item.groupId && selectedGroupIds.has(item.groupId)) {
                        extendedSelection.add(item.id);
                    }
                });
            }

            multiSelect.endBoxSelection(Array.from(extendedSelection), e.ctrlKey);
        }
    };



    const { handleDragOver, handleDrop } = useCanvasDrop({
        onItemAdd,
        onToolReset,
        screenToCanvas: (x, y) => {
            if (drawingMode) return drawingMode.screenToCanvas(x, y);
            const rect = canvasRef.current?.getBoundingClientRect();
            if (rect && canvasTransform) {
                return {
                    x: (x - rect.left - canvasTransform.pan.x) / canvasTransform.zoom,
                    y: (y - rect.top - canvasTransform.pan.y) / canvasTransform.zoom
                };
            }
            return { x: 0, y: 0 };
        }
    });


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
                cursor: isPanning ? 'grabbing' : (drawingMode?.getCursorStyle() || 'default'),
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
            onDragOver={handleDragOver}
            onDrop={handleDrop}
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
                {/* Multi-Select Bounding Box */}
                <MultiSelectBoundingBox
                    items={items}
                    selectedIds={selectedIds}
                    zoom={canvasTransform?.zoom || 1}
                />

                {/* Drawing Preview (pen, line, arrow) */}
                {drawingMode?.drawingState && (
                    <DrawingPreview
                        drawingState={drawingMode.drawingState}
                        activeTool={drawingMode.activeTool || 'select'}
                    />
                )}

                {/* Canvas Items */}
                {items.map((item) => {
                    const isItemSelected = selectedIds.includes(item.id);
                    // Make item transparent if:
                    // 1. It's being dragged, OR
                    // 2. It's selected AND another selected item is being dragged (multi-select drag)
                    const shouldBeTransparent = !!(isItemSelected && activeDragItemId && selectedIds.includes(activeDragItemId));

                    // Check if this is a new item type (shape, text, sticky-note, etc.) with added 'frame'
                    const isNewItemType = ['shape', 'text', 'sticky-note', 'line', 'arrow', 'pen', 'image', 'frame', 'comment'].includes(item.entityType);

                    if (isNewItemType) {
                        const hasDimensions = typeof item.data?.width === 'number' && typeof item.data?.height === 'number';
                        const isTransforming = transform.transformState?.isTransforming && selectedIds.includes(item.id);

                        // Render new item types with CanvasItemRenderer
                        return (
                            <div
                                key={item.id}
                                data-canvas-item={item.entityType}
                                style={{
                                    position: 'absolute',
                                    left: item.x,
                                    top: item.y,
                                    width: hasDimensions ? item.data.width : undefined,
                                    height: hasDimensions ? item.data.height : undefined,
                                    transform: `rotate(${item.rotation || 0}deg)`,
                                    transformOrigin: 'center center',
                                    opacity: shouldBeTransparent ? 0 : (item.locked ? 0.75 : 1),
                                    transition: isTransforming ? 'none' : 'opacity 0.2s',
                                    zIndex: isItemSelected ? 10 : 1,
                                    cursor: item.locked ? 'not-allowed' : 'move'
                                }}
                                onMouseDown={(e) => {
                                    // Don't allow moving locked items
                                    if (item.locked) {
                                        e.stopPropagation();
                                        return;
                                    }

                                    // Check if this might be a double-click (within 300ms of last click)
                                    const now = Date.now();
                                    const lastClick = (e.currentTarget as any)._lastClickTime || 0;
                                    const timeSinceLastClick = now - lastClick;
                                    (e.currentTarget as any)._lastClickTime = now;

                                    // If it's a potential double-click, don't start transform
                                    if (timeSinceLastClick < 300) {
                                        e.stopPropagation();
                                        return;
                                    }

                                    e.stopPropagation();
                                    transform.startTransform(e, item, 'move', null);
                                }}
                                onDoubleClick={(e) => {
                                    // Don't prevent propagation - let it reach ShapeRenderer
                                }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    let ids = [item.id];
                                    if (item.groupId) {
                                        ids = items.filter(it => it.groupId === item.groupId).map(it => it.id);
                                    }
                                    multiSelect.toggleSelection(ids, e.ctrlKey);
                                }}
                            >
                                <CanvasItemRenderer
                                    item={item}
                                    // Disable internal selection if we're showing the TransformLayer
                                    isSelected={hasDimensions && selectedIds.length === 1 ? false : isItemSelected}
                                    onClick={() => {
                                        let ids = [item.id];
                                        if (item.groupId) {
                                            ids = items.filter(it => it.groupId === item.groupId).map(it => it.id);
                                        }
                                        multiSelect.toggleSelection(ids, false);
                                    }}
                                    onUpdate={onItemUpdate}
                                />
                                {isItemSelected && selectedIds.length === 1 && hasDimensions && !item.locked && (
                                    <TransformLayer
                                        item={item}
                                        zoom={canvasTransform?.zoom || 1}
                                        onTransformStart={(e, type, handle) => transform.startTransform(e, item, type, handle)}
                                    />
                                )}
                            </div>
                        );
                    }

                    // Render existing item types (product, vendor, solution) with CanvasItemCard
                    return (
                        <CanvasItemCard
                            key={item.id}
                            item={item}
                            isSelected={isItemSelected}
                            vendorName={getVendorName(item.entityId)}
                            propositionColor={getPropositionColor(item.entityId)}
                            onClick={(e) => {
                                let ids = [item.id];
                                if (item.groupId) {
                                    ids = items.filter(it => it.groupId === item.groupId).map(it => it.id);
                                }
                                multiSelect.toggleSelection(ids, e.ctrlKey);
                            }}
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

            {/* Refactored Overlays */}
            <CanvasOverlays
                canvasRef={canvasRef}
                canvasTransform={canvasTransform ?? null}
                snapGuides={transform.transformState ? shapeSnapGuides : snapGuides}
                activeDragRect={activeDragRect}
                selectionBox={multiSelect.selectionBox}
                selectedIds={selectedIds}
                lockedAxis={(lockedAxis || transform.lockedAxis) as any}
                isShiftPressed={isShiftPressed}
                items={items}
                debugInfo={debugInfo}
                isDark={isDark}
                onClearItems={onClearItems}
                onZoomIn={onZoomIn}
                onZoomOut={onZoomOut}
                onResetZoom={onResetZoom}
                onToggleTheme={onToggleTheme}
                onToggleColorScheme={onToggleColorScheme}
                colorSchemeEnabled={colorSchemeEnabled}
            />






        </main>
    );
}
