import { useCallback } from 'react';
import { CanvasItem } from '@/lib/types';

interface LayerOperationsConfig {
    items: CanvasItem[];
    setItems: (items: CanvasItem[] | ((prev: CanvasItem[]) => CanvasItem[])) => void;
    selectedIds: string[];
    setDebugInfo?: (info: string) => void;
}

/**
 * Hook for managing layer operations (z-order)
 * 
 * Features:
 * - Bring to front / Send to back
 * - Bring forward / Send backward
 * - Maintains relative order of multi-selected items
 * 
 * @example
 * ```tsx
 * const { bringToFront, sendToBack, bringForward, sendBackward } = useLayerOperations({
 *     items,
 *     setItems,
 *     selectedIds,
 *     setDebugInfo
 * });
 * ```
 */
export function useLayerOperations({
    items,
    setItems,
    selectedIds,
    setDebugInfo
}: LayerOperationsConfig) {

    /**
     * Bring selected items to front (highest z-index)
     */
    const bringToFront = useCallback(() => {
        if (selectedIds.length === 0) return;

        setItems(prev => {
            const selected = prev.filter(item => selectedIds.includes(item.id));
            const notSelected = prev.filter(item => !selectedIds.includes(item.id));

            // Selected items go to end (front)
            const result = [...notSelected, ...selected];

            setDebugInfo?.(`Brought ${selectedIds.length} item(s) to front`);
            return result;
        });
    }, [selectedIds, setItems, setDebugInfo]);

    /**
     * Send selected items to back (lowest z-index)
     */
    const sendToBack = useCallback(() => {
        if (selectedIds.length === 0) return;

        setItems(prev => {
            const selected = prev.filter(item => selectedIds.includes(item.id));
            const notSelected = prev.filter(item => !selectedIds.includes(item.id));

            // Selected items go to start (back)
            const result = [...selected, ...notSelected];

            setDebugInfo?.(`Sent ${selectedIds.length} item(s) to back`);
            return result;
        });
    }, [selectedIds, setItems, setDebugInfo]);

    /**
     * Bring selected items forward one layer
     */
    const bringForward = useCallback(() => {
        if (selectedIds.length === 0) return;

        setItems(prev => {
            const result = [...prev];

            // Process from end to start to avoid conflicts
            for (let i = result.length - 2; i >= 0; i--) {
                if (selectedIds.includes(result[i].id) && !selectedIds.includes(result[i + 1].id)) {
                    // Swap with next item
                    [result[i], result[i + 1]] = [result[i + 1], result[i]];
                }
            }

            setDebugInfo?.(`Brought ${selectedIds.length} item(s) forward`);
            return result;
        });
    }, [selectedIds, setItems, setDebugInfo]);

    /**
     * Send selected items backward one layer
     */
    const sendBackward = useCallback(() => {
        if (selectedIds.length === 0) return;

        setItems(prev => {
            const result = [...prev];

            // Process from start to end to avoid conflicts
            for (let i = 1; i < result.length; i++) {
                if (selectedIds.includes(result[i].id) && !selectedIds.includes(result[i - 1].id)) {
                    // Swap with previous item
                    [result[i], result[i - 1]] = [result[i - 1], result[i]];
                }
            }

            setDebugInfo?.(`Sent ${selectedIds.length} item(s) backward`);
            return result;
        });
    }, [selectedIds, setItems, setDebugInfo]);

    /**
     * Get z-index position of an item (0 = back, length-1 = front)
     */
    const getItemZIndex = useCallback((itemId: string): number => {
        return items.findIndex(item => item.id === itemId);
    }, [items]);

    /**
     * Check if item can move forward
     */
    const canBringForward = useCallback((itemId: string): boolean => {
        const index = getItemZIndex(itemId);
        return index >= 0 && index < items.length - 1;
    }, [items, getItemZIndex]);

    /**
     * Check if item can move backward
     */
    const canSendBackward = useCallback((itemId: string): boolean => {
        const index = getItemZIndex(itemId);
        return index > 0;
    }, [getItemZIndex]);

    return {
        bringToFront,
        sendToBack,
        bringForward,
        sendBackward,
        getItemZIndex,
        canBringForward,
        canSendBackward
    };
}
