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
            const itemsToCopy: CanvasItem[] = [];
            const copiedIds = new Set<string>();

            selectedIds.forEach(id => {
                const item = items.find(i => i.id === id);
                if (item) {
                    itemsToCopy.push(item);
                    copiedIds.add(id);

                    // If it's a frame, also copy its contained items
                    if (item.entityType === 'frame' && item.data?.containedItemIds) {
                        item.data.containedItemIds.forEach((containedId: string) => {
                            if (!copiedIds.has(containedId)) {
                                const containedItem = items.find(i => i.id === containedId);
                                if (containedItem) {
                                    itemsToCopy.push(containedItem);
                                    copiedIds.add(containedId);
                                }
                            }
                        });
                    }
                }
            });

            setClipboard(itemsToCopy);
            if (setDebugInfo) {
                setDebugInfo(`Copied ${itemsToCopy.length} item(s)`);
            }
        }
    }, [items, selectedIds, setDebugInfo]);

    const paste = useCallback(() => {
        if (clipboard.length > 0) {
            const idMap = new Map<string, string>(); // old ID -> new ID

            const newItems = clipboard.map(item => {
                const newId = `item-${Date.now()}-${Math.random()}`;
                idMap.set(item.id, newId);

                return {
                    ...item,
                    id: newId,
                    x: item.x + 20, // Offset by 20px
                    y: item.y + 20,
                    groupId: undefined, // Remove from group when pasting
                    locked: false // Unlock when pasting
                };
            });

            // Update containedItemIds in frames to use new IDs
            newItems.forEach(item => {
                if (item.entityType === 'frame' && item.data?.containedItemIds) {
                    item.data.containedItemIds = item.data.containedItemIds
                        .map((oldId: string) => idMap.get(oldId))
                        .filter((id: string | undefined): id is string => id !== undefined);
                }
            });

            setItems(prev => [...prev, ...newItems]);
            selectMultiple(newItems.map(it => it.id));
            if (setDebugInfo) {
                setDebugInfo(`Pasted ${clipboard.length} item(s)`);
            }
        }
    }, [clipboard, setItems, selectMultiple, setDebugInfo]);

    const duplicate = useCallback(() => {
        if (selectedIds.length > 0) {
            const idMap = new Map<string, string>(); // old ID -> new ID
            const itemsToDuplicate: CanvasItem[] = [];
            const duplicatedIds = new Set<string>();

            selectedIds.forEach(id => {
                const item = items.find(i => i.id === id);
                if (item) {
                    itemsToDuplicate.push(item);
                    duplicatedIds.add(id);

                    // If it's a frame, also duplicate its contained items
                    if (item.entityType === 'frame' && item.data?.containedItemIds) {
                        item.data.containedItemIds.forEach((containedId: string) => {
                            if (!duplicatedIds.has(containedId)) {
                                const containedItem = items.find(i => i.id === containedId);
                                if (containedItem) {
                                    itemsToDuplicate.push(containedItem);
                                    duplicatedIds.add(containedId);
                                }
                            }
                        });
                    }
                }
            });

            const newItems = itemsToDuplicate.map(item => {
                const newId = `item-${Date.now()}-${Math.random()}`;
                idMap.set(item.id, newId);

                return {
                    ...item,
                    id: newId,
                    x: item.x + 20,
                    y: item.y + 20
                };
            });

            // Update containedItemIds in frames to use new IDs
            newItems.forEach(item => {
                if (item.entityType === 'frame' && item.data?.containedItemIds) {
                    item.data.containedItemIds = item.data.containedItemIds
                        .map((oldId: string) => idMap.get(oldId))
                        .filter((id: string | undefined): id is string => id !== undefined);
                }
            });

            setItems(prev => [...prev, ...newItems]);
            if (setDebugInfo) {
                setDebugInfo(`Duplicated ${itemsToDuplicate.length} item(s)`);
            }
        }
    }, [items, selectedIds, setItems, setDebugInfo]);

    const deleteSelected = useCallback(() => {
        if (selectedIds.length > 0) {
            // Find all items to delete (selected + contained items in frames)
            const idsToDelete = new Set(selectedIds);

            selectedIds.forEach(id => {
                const item = items.find(i => i.id === id);
                // If it's a frame, also delete its contained items
                if (item?.entityType === 'frame' && item.data?.containedItemIds) {
                    item.data.containedItemIds.forEach((containedId: string) => {
                        idsToDelete.add(containedId);
                    });
                }
            });

            setItems(prev => prev.filter(item => !idsToDelete.has(item.id)));
            clearSelection();
            if (setDebugInfo) {
                setDebugInfo(`Deleted ${idsToDelete.size} item(s)`);
            }
        }
    }, [items, selectedIds, setItems, clearSelection, setDebugInfo]);

    return {
        clipboard,
        copy,
        paste,
        duplicate,
        deleteSelected
    };
}
