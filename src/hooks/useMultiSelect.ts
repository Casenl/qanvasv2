import { useState, useCallback, useRef } from 'react';

export interface BoundingBox {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface MultiSelectState {
    selectedIds: Set<string>;
    isSelecting: boolean;
    selectionBox: BoundingBox | null;
}

export function useMultiSelect() {
    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
    const [isSelecting, setIsSelecting] = useState(false);
    const [selectionBox, setSelectionBox] = useState<BoundingBox | null>(null);

    // Use ref to track start position to avoid callback recreation
    const selectionStartRef = useRef<{ x: number; y: number } | null>(null);


    const toggleSelect = useCallback((id: string, isCtrlPressed: boolean) => {
        setSelectedIds(prev => {
            const newSet = new Set(prev);

            if (isCtrlPressed) {
                // Ctrl+Click: Toggle selection
                if (newSet.has(id)) {
                    newSet.delete(id);
                } else {
                    newSet.add(id);
                }
            } else {
                // Regular click: Select only this item
                newSet.clear();
                newSet.add(id);
            }

            return newSet;
        });
    }, []);

    const selectMultiple = useCallback((ids: string[]) => {
        setSelectedIds(new Set(ids));
    }, []);

    const addToSelection = useCallback((id: string) => {
        setSelectedIds(prev => new Set([...prev, id]));
    }, []);

    const removeFromSelection = useCallback((id: string) => {
        setSelectedIds(prev => {
            const newSet = new Set(prev);
            newSet.delete(id);
            return newSet;
        });
    }, []);

    const clearSelection = useCallback(() => {
        setSelectedIds(new Set());
    }, []);

    const selectAll = useCallback((allIds: string[]) => {
        setSelectedIds(new Set(allIds));
    }, []);

    const isSelected = useCallback((id: string) => {
        return selectedIds.has(id);
    }, [selectedIds]);

    const startBoxSelection = useCallback((startX: number, startY: number) => {
        console.log('🎯 Start box selection:', { startX, startY });
        selectionStartRef.current = { x: startX, y: startY };
        setIsSelecting(true);
        setSelectionBox({ x: startX, y: startY, width: 0, height: 0 });
    }, []);

    const updateBoxSelection = useCallback((currentX: number, currentY: number) => {
        if (!selectionStartRef.current) {
            console.warn('⚠️ No selection start ref');
            return;
        }

        const startX = selectionStartRef.current.x;
        const startY = selectionStartRef.current.y;
        const width = currentX - startX;
        const height = currentY - startY;

        const newBox = {
            x: width < 0 ? currentX : startX,
            y: height < 0 ? currentY : startY,
            width: Math.abs(width),
            height: Math.abs(height)
        };

        console.log('📦 Update box:', {
            start: { x: startX, y: startY },
            current: { x: currentX, y: currentY },
            box: newBox
        });

        setSelectionBox(newBox);
    }, []); // No dependencies! Uses ref instead

    const endBoxSelection = useCallback((itemsInBox: string[], isCtrlPressed: boolean) => {
        console.log('✅ End box selection:', { itemsInBox, isCtrlPressed });

        if (isCtrlPressed) {
            // Add to existing selection
            setSelectedIds(prev => new Set([...prev, ...itemsInBox]));
        } else {
            // Replace selection
            setSelectedIds(new Set(itemsInBox));
        }

        setIsSelecting(false);
        setSelectionBox(null);
        selectionStartRef.current = null;
    }, []);

    return {
        selectedIds: Array.from(selectedIds),
        selectedCount: selectedIds.size,
        isSelecting,
        selectionBox,
        toggleSelect,
        selectMultiple,
        addToSelection,
        removeFromSelection,
        clearSelection,
        selectAll,
        isSelected,
        startBoxSelection,
        updateBoxSelection,
        endBoxSelection
    };
}
