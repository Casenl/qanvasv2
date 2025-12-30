import { useCallback } from 'react';
import { CanvasItem } from '@/lib/types';
import { alignItems, distributeItems } from '@/lib/utils/alignment';

interface UseAlignmentProps {
    items: CanvasItem[];
    setItems: (updater: (prev: CanvasItem[]) => CanvasItem[]) => void;
    selectedIds: string[];
    setDebugInfo?: (info: string) => void;
}

interface UseAlignmentReturn {
    align: (type: 'left' | 'center' | 'right' | 'top' | 'middle' | 'bottom') => void;
    distribute: (direction: 'horizontal' | 'vertical') => void;
    group: () => void;
    ungroup: () => void;
}

/**
 * Hook for aligning, distributing, and grouping items on the canvas
 * Provides functionality for organizing multiple selected items
 */
export function useAlignment({
    items,
    setItems,
    selectedIds,
    setDebugInfo
}: UseAlignmentProps): UseAlignmentReturn {

    const align = useCallback((type: 'left' | 'center' | 'right' | 'top' | 'middle' | 'bottom') => {
        const selectedItems = items.filter(item => selectedIds.includes(item.id));
        if (selectedItems.length < 2) return;

        const aligned = alignItems({ type, items: selectedItems });
        setItems(prev => prev.map(item => {
            const alignedItem = aligned.find(a => a.id === item.id);
            return alignedItem || item;
        }));

        if (setDebugInfo) {
            setDebugInfo(`Aligned ${selectedItems.length} items ${type}`);
        }
    }, [items, selectedIds, setItems, setDebugInfo]);

    const distribute = useCallback((direction: 'horizontal' | 'vertical') => {
        const selectedItems = items.filter(item => selectedIds.includes(item.id));
        if (selectedItems.length < 3) return;

        const distributed = distributeItems({ direction, items: selectedItems });
        setItems(prev => prev.map(item => {
            const distributedItem = distributed.find(d => d.id === item.id);
            return distributedItem || item;
        }));

        if (setDebugInfo) {
            setDebugInfo(`Distributed ${selectedItems.length} items ${direction}`);
        }
    }, [items, selectedIds, setItems, setDebugInfo]);

    const group = useCallback(() => {
        if (selectedIds.length < 2) return;

        const selectedItems = items.filter(item => selectedIds.includes(item.id));
        const allGrouped = selectedItems.every(it => it.groupId);

        if (allGrouped) {
            // Ungroup
            setItems(prev => prev.map(item =>
                selectedIds.includes(item.id) ? { ...item, groupId: undefined } : item
            ));
            if (setDebugInfo) {
                setDebugInfo(`Ungrouped ${selectedIds.length} items`);
            }
        } else {
            // Group
            const groupId = `group-${Date.now()}`;
            setItems(prev => prev.map(item =>
                selectedIds.includes(item.id) ? { ...item, groupId } : item
            ));
            if (setDebugInfo) {
                setDebugInfo(`Grouped ${selectedIds.length} items`);
            }
        }
    }, [items, selectedIds, setItems, setDebugInfo]);

    const ungroup = useCallback(() => {
        if (selectedIds.length === 0) return;

        setItems(prev => prev.map(item =>
            selectedIds.includes(item.id) ? { ...item, groupId: undefined } : item
        ));

        if (setDebugInfo) {
            setDebugInfo(`Ungrouped ${selectedIds.length} items`);
        }
    }, [selectedIds, setItems, setDebugInfo]);

    return {
        align,
        distribute,
        group,
        ungroup
    };
}
