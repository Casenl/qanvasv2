import { useCallback } from 'react';
import { CanvasItem } from '@/lib/types';

interface UseItemNudgingProps {
    items: CanvasItem[];
    setItems: (updater: (prev: CanvasItem[]) => CanvasItem[]) => void;
    selectedIds: string[];
}

interface UseItemNudgingReturn {
    nudgeUp: () => void;
    nudgeDown: () => void;
    nudgeLeft: () => void;
    nudgeRight: () => void;
}

/**
 * Hook for nudging (moving) selected items by 1 pixel using arrow keys
 * Used for fine-tuning item positions on the canvas
 */
export function useItemNudging({
    items,
    setItems,
    selectedIds
}: UseItemNudgingProps): UseItemNudgingReturn {

    const nudgeUp = useCallback(() => {
        if (selectedIds.length > 0) {
            setItems(prev => prev.map(item =>
                selectedIds.includes(item.id) ? { ...item, y: item.y - 1 } : item
            ));
        }
    }, [selectedIds, setItems]);

    const nudgeDown = useCallback(() => {
        if (selectedIds.length > 0) {
            setItems(prev => prev.map(item =>
                selectedIds.includes(item.id) ? { ...item, y: item.y + 1 } : item
            ));
        }
    }, [selectedIds, setItems]);

    const nudgeLeft = useCallback(() => {
        if (selectedIds.length > 0) {
            setItems(prev => prev.map(item =>
                selectedIds.includes(item.id) ? { ...item, x: item.x - 1 } : item
            ));
        }
    }, [selectedIds, setItems]);

    const nudgeRight = useCallback(() => {
        if (selectedIds.length > 0) {
            setItems(prev => prev.map(item =>
                selectedIds.includes(item.id) ? { ...item, x: item.x + 1 } : item
            ));
        }
    }, [selectedIds, setItems]);

    return {
        nudgeUp,
        nudgeDown,
        nudgeLeft,
        nudgeRight
    };
}
