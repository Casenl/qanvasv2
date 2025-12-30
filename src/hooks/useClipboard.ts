import { useState, useCallback } from 'react';
import { CanvasItem } from '@/lib/types';

interface UseClipboardProps {
    items: CanvasItem[];
    setItems: (updater: (prev: CanvasItem[]) => CanvasItem[]) => void;
    selectedIds: string[];
    selectMultiple: (ids: string[]) => void;
    clearSelection: () => void;
    setDebugInfo?: (info: string) => void;
}

interface UseClipboardReturn {
    clipboard: CanvasItem[];
    copy: () => void;
    paste: () => void;
    duplicate: () => void;
    deleteSelected: () => void;
}

/**
 * Hook for clipboard operations (copy, paste, duplicate, delete)
 * Manages clipboard state and provides methods for item manipulation
 */
export function useClipboard({
    items,
    setItems,
    selectedIds,
    selectMultiple,
    clearSelection,
    setDebugInfo
}: UseClipboardProps): UseClipboardReturn {

    const [clipboard, setClipboard] = useState<CanvasItem[]>([]);

    const copy = useCallback(() => {
        if (selectedIds.length > 0) {
            const itemsToCopy = items.filter(item => selectedIds.includes(item.id));
            setClipboard(itemsToCopy);
            if (setDebugInfo) {
                setDebugInfo(`Copied ${selectedIds.length} item(s)`);
            }
        }
    }, [items, selectedIds, setDebugInfo]);

    const paste = useCallback(() => {
        if (clipboard.length > 0) {
            const newItems = clipboard.map(item => ({
                ...item,
                id: `item-${Date.now()}-${Math.random()}`,
                x: item.x + 20, // Offset by 20px
                y: item.y + 20,
                groupId: undefined, // Remove from group when pasting
                locked: false // Unlock when pasting
            }));
            setItems(prev => [...prev, ...newItems]);
            selectMultiple(newItems.map(it => it.id));
            if (setDebugInfo) {
                setDebugInfo(`Pasted ${clipboard.length} item(s)`);
            }
        }
    }, [clipboard, setItems, selectMultiple, setDebugInfo]);

    const duplicate = useCallback(() => {
        if (selectedIds.length > 0) {
            const newItems = items
                .filter(item => selectedIds.includes(item.id))
                .map(item => ({
                    ...item,
                    id: `item-${Date.now()}-${Math.random()}`,
                    x: item.x + 20,
                    y: item.y + 20
                }));
            setItems(prev => [...prev, ...newItems]);
            if (setDebugInfo) {
                setDebugInfo(`Duplicated ${selectedIds.length} item(s)`);
            }
        }
    }, [items, selectedIds, setItems, setDebugInfo]);

    const deleteSelected = useCallback(() => {
        if (selectedIds.length > 0) {
            setItems(prev => prev.filter(item => !selectedIds.includes(item.id)));
            clearSelection();
            if (setDebugInfo) {
                setDebugInfo(`Deleted ${selectedIds.length} item(s)`);
            }
        }
    }, [selectedIds, setItems, clearSelection, setDebugInfo]);

    return {
        clipboard,
        copy,
        paste,
        duplicate,
        deleteSelected
    };
}
