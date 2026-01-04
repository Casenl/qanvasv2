import { useCallback } from 'react';
import { CanvasItem } from '@/lib/types';
import { alignItems, distributeItems } from '@/lib/utils/alignment';

export interface CanvasActionsConfig {
    items: CanvasItem[];
    selectedIds: string[];
    setItems: React.Dispatch<React.SetStateAction<CanvasItem[]>>;
}

/**
 * Hook for managing canvas actions
 * 
 * Handles:
 * - Alignment (left, center, right, top, middle, bottom)
 * - Distribution (horizontal, vertical)
 * - Grouping/ungrouping
 * - Locking/unlocking
 * - Style changes
 * - Z-index ordering
 * 
 * @param config - Configuration object with items and selection
 */
export function useCanvasActions(config: CanvasActionsConfig) {
    const { items, selectedIds, setItems } = config;

    /**
     * Align selected items
     */
    const handleAlign = useCallback((type: 'left' | 'center' | 'right' | 'top' | 'middle' | 'bottom') => {
        if (selectedIds.length < 2) return;

        const selectedItems = items.filter(item => selectedIds.includes(item.id));
        const alignedItems = alignItems(selectedItems, type);

        setItems(prevItems =>
            prevItems.map(item => {
                const alignedItem = alignedItems.find(ai => ai.id === item.id);
                return alignedItem || item;
            })
        );
    }, [items, selectedIds, setItems]);

    /**
     * Distribute selected items
     */
    const handleDistribute = useCallback((direction: 'horizontal' | 'vertical') => {
        if (selectedIds.length < 3) return;

        const selectedItems = items.filter(item => selectedIds.includes(item.id));
        const distributedItems = distributeItems(selectedItems, direction);

        setItems(prevItems =>
            prevItems.map(item => {
                const distributedItem = distributedItems.find(di => di.id === item.id);
                return distributedItem || item;
            })
        );
    }, [items, selectedIds, setItems]);

    /**
     * Group selected items
     */
    const handleGroup = useCallback(() => {
        if (selectedIds.length < 2) return;

        const groupId = `group-${Date.now()}`;

        setItems(prevItems =>
            prevItems.map(item =>
                selectedIds.includes(item.id)
                    ? { ...item, groupId }
                    : item
            )
        );
    }, [selectedIds, setItems]);

    /**
     * Ungroup selected items
     */
    const handleUngroup = useCallback(() => {
        if (selectedIds.length === 0) return;

        setItems(prevItems =>
            prevItems.map(item =>
                selectedIds.includes(item.id)
                    ? { ...item, groupId: undefined }
                    : item
            )
        );
    }, [selectedIds, setItems]);

    /**
     * Lock/unlock selected items
     */
    const handleLock = useCallback((locked: boolean) => {
        if (selectedIds.length === 0) return;

        setItems(prevItems =>
            prevItems.map(item =>
                selectedIds.includes(item.id)
                    ? { ...item, locked }
                    : item
            )
        );
    }, [selectedIds, setItems]);

    /**
     * Change style of selected items
     */
    const handleStyleChange = useCallback((property: string, value: any) => {
        if (selectedIds.length === 0) return;

        setItems(prevItems =>
            prevItems.map(item => {
                if (!selectedIds.includes(item.id)) return item;

                // Handle different item types
                if (item.entityType === 'shape' || item.entityType === 'text') {
                    return {
                        ...item,
                        data: {
                            ...item.data,
                            style: {
                                ...item.data?.style,
                                [property]: value
                            }
                        }
                    };
                } else if (item.entityType === 'pen' || item.entityType === 'line' || item.entityType === 'arrow') {
                    return {
                        ...item,
                        data: {
                            ...item.data,
                            [property]: value
                        }
                    };
                }

                return item;
            })
        );
    }, [selectedIds, setItems]);

    /**
     * Bring selected items to front
     */
    const handleBringToFront = useCallback(() => {
        if (selectedIds.length === 0) return;

        setItems(prevItems => {
            const selected = prevItems.filter(item => selectedIds.includes(item.id));
            const others = prevItems.filter(item => !selectedIds.includes(item.id));
            return [...others, ...selected];
        });
    }, [selectedIds, setItems]);

    /**
     * Send selected items to back
     */
    const handleSendToBack = useCallback(() => {
        if (selectedIds.length === 0) return;

        setItems(prevItems => {
            const selected = prevItems.filter(item => selectedIds.includes(item.id));
            const others = prevItems.filter(item => !selectedIds.includes(item.id));
            return [...selected, ...others];
        });
    }, [selectedIds, setItems]);

    /**
     * Bring selected items forward one level
     */
    const handleBringForward = useCallback(() => {
        if (selectedIds.length === 0) return;

        setItems(prevItems => {
            const newItems = [...prevItems];
            for (let i = newItems.length - 2; i >= 0; i--) {
                if (selectedIds.includes(newItems[i].id) && !selectedIds.includes(newItems[i + 1].id)) {
                    [newItems[i], newItems[i + 1]] = [newItems[i + 1], newItems[i]];
                }
            }
            return newItems;
        });
    }, [selectedIds, setItems]);

    /**
     * Send selected items backward one level
     */
    const handleSendBackward = useCallback(() => {
        if (selectedIds.length === 0) return;

        setItems(prevItems => {
            const newItems = [...prevItems];
            for (let i = 1; i < newItems.length; i++) {
                if (selectedIds.includes(newItems[i].id) && !selectedIds.includes(newItems[i - 1].id)) {
                    [newItems[i], newItems[i - 1]] = [newItems[i - 1], newItems[i]];
                }
            }
            return newItems;
        });
    }, [selectedIds, setItems]);

    return {
        handleAlign,
        handleDistribute,
        handleGroup,
        handleUngroup,
        handleLock,
        handleStyleChange,
        handleBringToFront,
        handleSendToBack,
        handleBringForward,
        handleSendBackward
    };
}
