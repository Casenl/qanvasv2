import { useCallback } from 'react';
import { CanvasItem } from '@/lib/types';

interface UseItemLockingProps {
    items: CanvasItem[];
    setItems: (updater: (prev: CanvasItem[]) => CanvasItem[]) => void;
    selectedIds: string[];
    setDebugInfo?: (info: string) => void;
}

interface UseItemLockingReturn {
    toggleLock: () => void;
}

/**
 * Hook for locking/unlocking selected items on the canvas
 * Locked items cannot be moved or edited
 */
export function useItemLocking({
    items,
    setItems,
    selectedIds,
    setDebugInfo
}: UseItemLockingProps): UseItemLockingReturn {

    const toggleLock = useCallback(() => {
        if (selectedIds.length === 0) return;

        const selectedItems = items.filter(item => selectedIds.includes(item.id));
        const allLocked = selectedItems.every(it => it.locked);

        setItems(prev => prev.map(item =>
            selectedIds.includes(item.id) ? { ...item, locked: !allLocked } : item
        ));

        if (setDebugInfo) {
            setDebugInfo(allLocked ? `Unlocked ${selectedIds.length} items` : `Locked ${selectedIds.length} items`);
        }
    }, [items, selectedIds, setItems, setDebugInfo]);

    return {
        toggleLock
    };
}
