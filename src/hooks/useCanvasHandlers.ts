import { useCallback } from 'react';
import { CanvasItem } from '@/lib/types';
import { DragEndEvent, DragStartEvent, DragMoveEvent } from '@dnd-kit/core';

export interface CanvasHandlersConfig {
    items: CanvasItem[];
    selectedIds: string[];
    setItems: React.Dispatch<React.SetStateAction<CanvasItem[]>>;
    setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
    canvasTransform: { scale: number; x: number; y: number };
    gridSize?: number;
    snapToGrid?: boolean;
}

/**
 * Hook for managing canvas drag and drop handlers
 * 
 * Handles:
 * - Drag start (initiate dragging)
 * - Drag move (update positions during drag)
 * - Drag end (finalize positions)
 * - Grid snapping
 * - Multi-item dragging
 * 
 * @param config - Configuration object with items, selection, and transform
 */
export function useCanvasHandlers(config: CanvasHandlersConfig) {
    const {
        items,
        selectedIds,
        setItems,
        setSelectedIds,
        canvasTransform,
        gridSize = 20,
        snapToGrid = false
    } = config;

    /**
     * Snap value to grid
     */
    const snapToGridValue = useCallback((value: number): number => {
        if (!snapToGrid) return value;
        return Math.round(value / gridSize) * gridSize;
    }, [snapToGrid, gridSize]);

    /**
     * Handle drag start
     */
    const handleDragStart = useCallback((event: DragStartEvent) => {
        const { active } = event;
        const itemId = active.id as string;

        // If dragging an unselected item, select only that item
        if (!selectedIds.includes(itemId)) {
            setSelectedIds([itemId]);
        }
    }, [selectedIds, setSelectedIds]);

    /**
     * Handle drag move
     */
    const handleDragMove = useCallback((event: DragMoveEvent) => {
        const { delta } = event;

        // Apply canvas scale to delta
        const scaledDelta = {
            x: delta.x / canvasTransform.scale,
            y: delta.y / canvasTransform.scale
        };

        setItems(prevItems =>
            prevItems.map(item => {
                if (selectedIds.includes(item.id)) {
                    return {
                        ...item,
                        x: item.x + scaledDelta.x,
                        y: item.y + scaledDelta.y
                    };
                }
                return item;
            })
        );
    }, [selectedIds, canvasTransform.scale, setItems]);

    /**
     * Handle drag end
     */
    const handleDragEnd = useCallback((event: DragEndEvent) => {
        const { delta } = event;

        // Apply canvas scale to delta
        const scaledDelta = {
            x: delta.x / canvasTransform.scale,
            y: delta.y / canvasTransform.scale
        };

        setItems(prevItems =>
            prevItems.map(item => {
                if (selectedIds.includes(item.id)) {
                    const newX = snapToGridValue(item.x + scaledDelta.x);
                    const newY = snapToGridValue(item.y + scaledDelta.y);

                    return {
                        ...item,
                        x: newX,
                        y: newY
                    };
                }
                return item;
            })
        );
    }, [selectedIds, canvasTransform.scale, snapToGridValue, setItems]);

    /**
     * Handle keyboard shortcuts
     */
    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        // Delete selected items
        if (event.key === 'Delete' || event.key === 'Backspace') {
            if (selectedIds.length > 0) {
                setItems(prev => prev.filter(item => !selectedIds.includes(item.id)));
                setSelectedIds([]);
                event.preventDefault();
            }
        }

        // Select all
        if ((event.ctrlKey || event.metaKey) && event.key === 'a') {
            setSelectedIds(items.map(item => item.id));
            event.preventDefault();
        }

        // Deselect all (Escape)
        if (event.key === 'Escape') {
            setSelectedIds([]);
        }

        // Copy (Ctrl+C)
        if ((event.ctrlKey || event.metaKey) && event.key === 'c') {
            if (selectedIds.length > 0) {
                const selectedItems = items.filter(item => selectedIds.includes(item.id));
                localStorage.setItem('qanvas-clipboard', JSON.stringify(selectedItems));
                event.preventDefault();
            }
        }

        // Paste (Ctrl+V)
        if ((event.ctrlKey || event.metaKey) && event.key === 'v') {
            const clipboardData = localStorage.getItem('qanvas-clipboard');
            if (clipboardData) {
                try {
                    const copiedItems = JSON.parse(clipboardData) as CanvasItem[];
                    const newItems = copiedItems.map(item => ({
                        ...item,
                        id: `${item.entityType}-${Date.now()}-${Math.random()}`,
                        x: item.x + 20,
                        y: item.y + 20
                    }));
                    setItems(prev => [...prev, ...newItems]);
                    setSelectedIds(newItems.map(item => item.id));
                    event.preventDefault();
                } catch (e) {
                    console.error('Failed to paste items:', e);
                }
            }
        }

        // Duplicate (Ctrl+D)
        if ((event.ctrlKey || event.metaKey) && event.key === 'd') {
            if (selectedIds.length > 0) {
                const selectedItems = items.filter(item => selectedIds.includes(item.id));
                const newItems = selectedItems.map(item => ({
                    ...item,
                    id: `${item.entityType}-${Date.now()}-${Math.random()}`,
                    x: item.x + 20,
                    y: item.y + 20
                }));
                setItems(prev => [...prev, ...newItems]);
                setSelectedIds(newItems.map(item => item.id));
                event.preventDefault();
            }
        }
    }, [items, selectedIds, setItems, setSelectedIds]);

    return {
        handleDragStart,
        handleDragMove,
        handleDragEnd,
        handleKeyDown
    };
}
