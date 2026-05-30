import { useCallback, useMemo } from 'react';
import { CanvasItem } from '@/lib/types';

/**
 * Hook for managing frame containment logic
 * 
 * Features:
 * - Detect items within frame boundaries
 * - Track contained items
 * - Bulk operations on contained items
 * 
 * @example
 * ```tsx
 * const { getContainedItems, isItemInFrame } = useFrameContainment(items);
 * const containedItems = getContainedItems(frameItem);
 * ```
 */
export function useFrameContainment(items: CanvasItem[]) {
    /**
     * Check if an item is completely within a frame's boundaries
     */
    const isItemInFrame = useCallback((item: CanvasItem, frame: CanvasItem): boolean => {
        // Skip if item is the frame itself
        if (item.id === frame.id) return false;

        // Skip if item doesn't have position
        if (typeof item.x !== 'number' || typeof item.y !== 'number') return false;

        // Skip if frame doesn't have dimensions
        if (!frame.data?.width || !frame.data?.height) return false;

        // Get item dimensions (all items now have width/height in data)
        const itemWidth = item.data?.width || 0;
        const itemHeight = item.data?.height || 0;

        // Calculate item bounds
        const itemLeft = item.x;
        const itemRight = item.x + itemWidth;
        const itemTop = item.y;
        const itemBottom = item.y + itemHeight;

        // Calculate frame bounds
        const frameLeft = frame.x;
        const frameRight = frame.x + frame.data.width;
        const frameTop = frame.y;
        const frameBottom = frame.y + frame.data.height;

        // Check if item is completely within frame
        // Item must be fully contained (not just overlapping)
        return (
            itemLeft >= frameLeft &&
            itemRight <= frameRight &&
            itemTop >= frameTop &&
            itemBottom <= frameBottom
        );
    }, []);

    /**
     * Get all items contained within a frame
     */
    const getContainedItems = useCallback((frame: CanvasItem): CanvasItem[] => {
        if (frame.entityType !== 'frame') return [];

        return items.filter(item => isItemInFrame(item, frame));
    }, [items, isItemInFrame]);

    /**
     * Get IDs of all items contained within a frame
     */
    const getContainedItemIds = useCallback((frame: CanvasItem): string[] => {
        return getContainedItems(frame).map(item => item.id);
    }, [getContainedItems]);

    /**
     * Get all frames that contain a specific item
     */
    const getFramesContainingItem = useCallback((item: CanvasItem): CanvasItem[] => {
        const frames = items.filter(i => i.entityType === 'frame');
        return frames.filter(frame => isItemInFrame(item, frame));
    }, [items, isItemInFrame]);

    /**
     * Check if an item is contained in any frame
     */
    const isItemContained = useCallback((item: CanvasItem): boolean => {
        return getFramesContainingItem(item).length > 0;
    }, [getFramesContainingItem]);

    /**
     * Get frame that contains an item (if any)
     * Returns the first frame if item is in multiple frames
     */
    const getContainingFrame = useCallback((item: CanvasItem): CanvasItem | null => {
        const frames = getFramesContainingItem(item);
        return frames.length > 0 ? frames[0] : null;
    }, [getFramesContainingItem]);

    /**
     * Bulk lock all items in a frame
     */
    const lockFrameContents = useCallback((frame: CanvasItem, onUpdate: (itemId: string, updates: Partial<CanvasItem>) => void) => {
        const containedItems = getContainedItems(frame);
        containedItems.forEach(item => {
            onUpdate(item.id, { locked: true });
        });
    }, [getContainedItems]);

    /**
     * Bulk unlock all items in a frame
     */
    const unlockFrameContents = useCallback((frame: CanvasItem, onUpdate: (itemId: string, updates: Partial<CanvasItem>) => void) => {
        const containedItems = getContainedItems(frame);
        containedItems.forEach(item => {
            onUpdate(item.id, { locked: false });
        });
    }, [getContainedItems]);

    /**
     * Get statistics about frame contents
     */
    const getFrameStats = useCallback((frame: CanvasItem) => {
        const containedItems = getContainedItems(frame);
        const locked = containedItems.filter(item => item.locked).length;
        const unlocked = containedItems.length - locked;

        return {
            total: containedItems.length,
            locked,
            unlocked,
            isEmpty: containedItems.length === 0
        };
    }, [getContainedItems]);

    return {
        isItemInFrame,
        getContainedItems,
        getContainedItemIds,
        getFramesContainingItem,
        isItemContained,
        getContainingFrame,
        lockFrameContents,
        unlockFrameContents,
        getFrameStats
    };
}
