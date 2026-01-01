import { useState, useCallback, useRef } from 'react';
import { DragStartEvent, DragMoveEvent, DragEndEvent } from '@dnd-kit/core';
import { CanvasItem, Solution, Product } from '@/lib/types';
import { CanvasConfiguration } from '@/lib/types/canvasConfig';
import { initializeProductConfig } from '@/lib/types/productConfig';

/**
 * Drag state for tracking the currently dragged item
 */
export interface DragState {
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
}

/**
 * Props for useDragHandlers hook
 */
export interface UseDragHandlersProps {
    items: CanvasItem[];
    setItems: React.Dispatch<React.SetStateAction<CanvasItem[]>>;
    canvasRef: React.RefObject<HTMLDivElement | null>;
    canvasTransform: {
        zoom: number;
        pan: { x: number; y: number };
    };
    multiSelect: {
        selectedIds: Set<string>;
        selectMultiple: (ids: string[]) => void;
    };
    snappedX: number;
    snappedY: number;
    snapGuides: any[];
    keys: {
        shift: boolean;
        ctrl: boolean;
        alt: boolean;
    };
    canvasConfig: CanvasConfiguration;
    solutionManager: {
        solutions: Solution[];
    };
    products: Product[];
    setDebugInfo: (info: string) => void;
}

/**
 * Custom hook to handle all drag & drop operations
 * 
 * Responsibilities:
 * - Track drag state
 * - Handle drag start (from sidebar or canvas)
 * - Handle drag move (with axis locking, zoom, pan)
 * - Handle drag end (drop, copy, move, snap)
 * 
 * @param props - Configuration for drag handlers
 * @returns Drag handlers and state
 */
export function useDragHandlers({
    items,
    setItems,
    canvasRef,
    canvasTransform,
    multiSelect,
    snappedX,
    snappedY,
    snapGuides,
    keys,
    canvasConfig,
    solutionManager,
    products,
    setDebugInfo
}: UseDragHandlersProps) {
    // Drag state
    const [dragState, setDragState] = useState<DragState | null>(null);
    const [activeDragData, setActiveDragData] = useState<any>(null);
    const [lockedAxis, setLockedAxis] = useState<'x' | 'y' | null>(null);

    // Ref to track last drag position for axis locking
    const lastDragUpdateRef = useRef<{ x: number; y: number; time: number } | null>(null);

    /**
     * Handle drag start event
     * Initializes drag state for both sidebar and canvas items
     */
    const handleDragStart = useCallback((event: DragStartEvent) => {
        setActiveDragData(event.active.data.current);
        setDebugInfo(`Dragging ${event.active.data.current?.label}...`);

        const sourceData = event.active.data.current;

        if (sourceData?.source === 'canvas') {
            // Existing canvas item
            const item = items.find(it => it.id === event.active.id);
            if (item) {
                setDragState({
                    id: item.id,
                    x: item.x,
                    y: item.y,
                    width: 300,
                    height: 172
                });
                // Store initial position for Shift-key axis locking
                lastDragUpdateRef.current = { x: item.x, y: item.y, time: Date.now() };
            }
        } else if (sourceData?.source === 'sidebar') {
            // New item from sidebar - initialize at cursor position
            setDragState({
                id: 'new-item-temp',
                x: 0,
                y: 0,
                width: 300,
                height: 172
            });
            lastDragUpdateRef.current = { x: 0, y: 0, time: Date.now() };
        }
    }, [items, setDebugInfo]);

    /**
     * Handle drag move event
     * Updates drag position with zoom, pan, and axis locking support
     */
    const handleDragMove = useCallback((event: DragMoveEvent) => {
        const { active, delta } = event;
        const sourceData = active.data.current;
        const canvasRect = canvasRef.current?.getBoundingClientRect();
        if (!canvasRect) return;

        // Check if Shift key is pressed for axis locking
        const isShiftPressed = keys.shift;

        if (sourceData?.source === 'canvas') {
            // Moving existing canvas item
            const item = items.find(it => it.id === active.id);
            if (item) {
                // Delta is already in canvas coordinates (adjusted by zoom in dnd-kit)
                // But we need to account for zoom manually
                const { zoom } = canvasTransform;
                let newX = item.x + (delta.x / zoom);
                let newY = item.y + (delta.y / zoom);
                let currentLockedAxis: 'x' | 'y' | null = null;

                // Apply Shift-key axis locking
                if (isShiftPressed && lastDragUpdateRef.current) {
                    const initialX = lastDragUpdateRef.current.x;
                    const initialY = lastDragUpdateRef.current.y;
                    const deltaFromInitialX = Math.abs(newX - initialX);
                    const deltaFromInitialY = Math.abs(newY - initialY);

                    // Lock to the axis with larger movement
                    if (deltaFromInitialX > deltaFromInitialY) {
                        // Lock to X axis (horizontal movement only)
                        newY = initialY;
                        currentLockedAxis = 'x';
                    } else {
                        // Lock to Y axis (vertical movement only)
                        newX = initialX;
                        currentLockedAxis = 'y';
                    }
                }

                // Update locked axis state for visual indicator
                setLockedAxis(isShiftPressed ? currentLockedAxis : null);

                // Only update if position changed by at least 1px (prevent infinite loops)
                if (!dragState ||
                    dragState.id !== item.id ||
                    Math.abs(dragState.x - newX) >= 1 ||
                    Math.abs(dragState.y - newY) >= 1) {
                    setDragState({
                        id: item.id,
                        x: newX,
                        y: newY,
                        width: 300,
                        height: 172
                    });
                }
            }
        } else if (sourceData?.source === 'sidebar') {
            // Dragging new item from sidebar
            const droppedRect = active.rect.current.translated;
            if (droppedRect) {
                // Convert screen coordinates to canvas coordinates
                const { zoom, pan } = canvasTransform;
                const screenX = droppedRect.left - canvasRect.left;
                const screenY = droppedRect.top - canvasRect.top;

                // Convert to canvas coordinates by accounting for zoom and pan
                let newX = (screenX - pan.x) / zoom;
                let newY = (screenY - pan.y) / zoom;
                let currentLockedAxis: 'x' | 'y' | null = null;

                // Apply Shift-key axis locking
                if (isShiftPressed && lastDragUpdateRef.current) {
                    const initialX = lastDragUpdateRef.current.x;
                    const initialY = lastDragUpdateRef.current.y;
                    const deltaFromInitialX = Math.abs(newX - initialX);
                    const deltaFromInitialY = Math.abs(newY - initialY);

                    // Lock to the axis with larger movement
                    if (deltaFromInitialX > deltaFromInitialY) {
                        // Lock to X axis (horizontal movement only)
                        newY = initialY;
                        currentLockedAxis = 'x';
                    } else {
                        // Lock to Y axis (vertical movement only)
                        newX = initialX;
                        currentLockedAxis = 'y';
                    }
                }

                // Update locked axis state for visual indicator
                setLockedAxis(isShiftPressed ? currentLockedAxis : null);

                // Only update if position changed by at least 1px (prevent infinite loops)
                if (!dragState ||
                    dragState.id !== 'new-item-temp' ||
                    Math.abs(dragState.x - newX) >= 1 ||
                    Math.abs(dragState.y - newY) >= 1) {
                    setDragState({
                        id: 'new-item-temp',
                        x: newX,
                        y: newY,
                        width: 300,
                        height: 172
                    });
                }
            }
        }
    }, [items, canvasRef, canvasTransform, keys.shift, dragState]);

    /**
     * Handle drag end event
     * Processes drop: creates new items, moves existing items, handles copying
     */
    const handleDragEnd = useCallback((event: DragEndEvent) => {
        const { active, over } = event;
        setActiveDragData(null);
        setLockedAxis(null); // Clear axis lock indicator

        if (!over || over.id !== 'canvas-droppable') {
            setDebugInfo('Dropped outside canvas');
            setDragState(null); // Clear drag state on invalid drop
            return;
        }

        const canvasRect = canvasRef.current?.getBoundingClientRect();
        const sourceData = active.data.current;
        if (!sourceData) {
            setDragState(null); // Clear drag state
            return;
        }

        const droppedRect = active.rect.current.translated;

        // Convert screen coordinates to canvas coordinates
        const { zoom, pan } = canvasTransform;
        const screenX = droppedRect ? (droppedRect.left - (canvasRect?.left ?? 0)) : 100;
        const screenY = droppedRect ? (droppedRect.top - (canvasRect?.top ?? 0)) : 100;

        // Convert to canvas coordinates
        let rawX = (screenX - pan.x) / zoom;
        let rawY = (screenY - pan.y) / zoom;

        // Apply Shift-key axis locking if it was active
        if (keys.shift && lastDragUpdateRef.current) {
            const initialX = lastDragUpdateRef.current.x;
            const initialY = lastDragUpdateRef.current.y;
            const deltaFromInitialX = Math.abs(rawX - initialX);
            const deltaFromInitialY = Math.abs(rawY - initialY);

            // Lock to the axis with larger movement
            if (deltaFromInitialX > deltaFromInitialY) {
                // Lock to X axis (horizontal movement only)
                rawY = initialY;
            } else {
                // Lock to Y axis (vertical movement only)
                rawX = initialX;
            }
        }

        // Use snapped position from snap guides if available
        let finalX = rawX;
        let finalY = rawY;

        // Check if we have valid snapped positions
        const hasSnapX = typeof snappedX === 'number' && !isNaN(snappedX) && isFinite(snappedX);
        const hasSnapY = typeof snappedY === 'number' && !isNaN(snappedY) && isFinite(snappedY);

        if (snapGuides.length > 0 && hasSnapX && hasSnapY && !keys.shift) {
            // Snap guides have priority (but not when Shift is pressed for axis locking)
            finalX = snappedX;
            finalY = snappedY;
        }

        if (sourceData.source === 'sidebar') {
            // Check if it's a solution
            if (sourceData.type === 'solution') {
                const solution = solutionManager.solutions.find((s: Solution) => s.id === sourceData.entityId);
                if (!solution) return;

                // Create all products from the solution at their relative positions
                const newItems: CanvasItem[] = solution.products.map((productSnapshot: any, index: number) => ({
                    id: `item-${Date.now()}-${index}`,
                    entityId: productSnapshot.productId,
                    entityType: 'product' as const,
                    x: finalX + productSnapshot.relativeX,
                    y: finalY + productSnapshot.relativeY,
                    data: {
                        label: products.find(p => p.id === productSnapshot.productId)?.name || 'Product',
                        type: 'product',
                        entityId: productSnapshot.productId,
                        source: 'sidebar'
                    },
                    // Auto-initialize product config
                    productConfig: initializeProductConfig(productSnapshot.productId, canvasConfig)
                }));

                setItems(prev => [...prev, ...newItems]);
                multiSelect.selectMultiple(newItems.map(item => item.id));
                setDebugInfo(`Added solution "${solution.name}" with ${newItems.length} products`);
            } else {
                // Regular product/vendor/etc
                const newItem: CanvasItem = {
                    id: `item-${Date.now()}`,
                    entityId: sourceData.entityId,
                    entityType: sourceData.type,
                    x: finalX,
                    y: finalY,
                    data: sourceData,
                    // Auto-initialize product config for products
                    productConfig: sourceData.type === 'product'
                        ? initializeProductConfig(sourceData.entityId, canvasConfig)
                        : undefined
                };
                setItems(prev => [...prev, newItem]);
                multiSelect.selectMultiple([newItem.id]);
                setDebugInfo(`Added ${newItem.data.label}`);
            }
        } else if (sourceData.source === 'canvas') {
            const draggedItem = items.find(it => it.id === active.id);
            if (!draggedItem) return;

            // Don't allow moving locked items
            if (draggedItem.locked) {
                setDebugInfo('Item is locked');
                return;
            }

            // Check modifier keys from the actual drag event, not global state
            const activatorEvent = event.activatorEvent as MouseEvent | KeyboardEvent | PointerEvent;
            // Only Ctrl key should trigger copy, not Alt
            const isCopying = ('ctrlKey' in activatorEvent && activatorEvent.ctrlKey);

            if (isCopying) {
                const newItemId = `item-${Date.now()}-${Math.random()}`;

                setItems(prev => {
                    const original = prev.find(it => it.id === active.id);
                    if (!original) return prev;

                    const newItem = {
                        ...original,
                        id: newItemId,
                        x: finalX,
                        y: finalY,
                        groupId: undefined // Remove from group when copying
                    };
                    return [...prev, newItem];
                });

                multiSelect.selectMultiple([newItemId]);
                setDebugInfo(`Copied item`);
            } else {
                // Calculate movement delta
                const deltaX = finalX - draggedItem.x;
                const deltaY = finalY - draggedItem.y;

                // Check if dragged item is part of multi-selection
                const isMultiSelected = multiSelect.selectedIds.has(active.id as string) && multiSelect.selectedIds.size > 1;

                if (isMultiSelected) {
                    // Move all selected items together
                    setItems(prev => prev.map(it => {
                        if (multiSelect.selectedIds.has(it.id) && !it.locked) {
                            return {
                                ...it,
                                x: it.x + deltaX,
                                y: it.y + deltaY
                            };
                        }
                        return it;
                    }));
                    setDebugInfo(`Moved ${multiSelect.selectedIds.size} selected items`);
                } else if (draggedItem.groupId) {
                    // Move all items in the same group
                    setItems(prev => prev.map(it => {
                        if (it.groupId === draggedItem.groupId && !it.locked) {
                            return {
                                ...it,
                                x: it.x + deltaX,
                                y: it.y + deltaY
                            };
                        }
                        return it;
                    }));
                    setDebugInfo(`Moved group`);
                } else {
                    // Move single item - USE FINAL POSITION (includes snapping)
                    setItems(prev => prev.map(it => {
                        if (it.id === active.id) {
                            return {
                                ...it,
                                x: finalX,
                                y: finalY
                            };
                        }
                        return it;
                    }));
                    setDebugInfo(`Moved item to X:${Math.round(finalX)} Y:${Math.round(finalY)}`);
                }
            }
        }

        // Clear drag state after all operations are complete
        setDragState(null);
    }, [
        canvasRef,
        canvasTransform,
        keys.shift,
        snappedX,
        snappedY,
        snapGuides,
        solutionManager.solutions,
        products,
        canvasConfig,
        items,
        multiSelect,
        setItems,
        setDebugInfo
    ]);

    // Computed drag rect for rendering
    const activeDragRect = dragState ? {
        x: dragState.x,
        y: dragState.y,
        width: dragState.width,
        height: dragState.height
    } : null;

    return {
        // Handlers
        handleDragStart,
        handleDragMove,
        handleDragEnd,

        // State
        dragState,
        activeDragData,
        activeDragRect,
        lockedAxis
    };
}
