import { useState, useCallback } from 'react';
import { CanvasItem, Vendor, Proposition, Product } from '@/lib/types';

export interface CanvasState {
    items: CanvasItem[];
    selectedIds: string[];
    vendors: Vendor[];
    propositions: Proposition[];
    products: Product[];
}

export interface CanvasStateActions {
    setItems: React.Dispatch<React.SetStateAction<CanvasItem[]>>;
    setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
    addItem: (item: CanvasItem) => void;
    updateItem: (itemId: string, updates: any) => void;
    deleteItems: (itemIds: string[]) => void;
    clearItems: () => void;
}

/**
 * Hook for managing canvas state
 * 
 * Manages:
 * - Canvas items (shapes, text, lines, etc.)
 * - Selected item IDs
 * - Data entities (vendors, propositions, products)
 * 
 * @param initialVendors - Initial vendor data
 * @param initialPropositions - Initial proposition data
 * @param initialProducts - Initial product data
 */
export function useCanvasState(
    initialVendors: Vendor[] = [],
    initialPropositions: Proposition[] = [],
    initialProducts: Product[] = []
) {
    const [items, setItems] = useState<CanvasItem[]>([]);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [vendors] = useState<Vendor[]>(initialVendors);
    const [propositions] = useState<Proposition[]>(initialPropositions);
    const [products] = useState<Product[]>(initialProducts);

    /**
     * Add a new item to the canvas
     */
    const addItem = useCallback((item: CanvasItem) => {
        setItems(prev => [...prev, item]);
    }, []);

    /**
     * Update an existing item
     */
    const updateItem = useCallback((itemId: string, updates: any) => {
        setItems(prev => prev.map(item =>
            item.id === itemId
                ? { ...item, ...updates, data: { ...item.data, ...updates.data } }
                : item
        ));
    }, []);

    /**
     * Delete multiple items by ID
     */
    const deleteItems = useCallback((itemIds: string[]) => {
        setItems(prev => prev.filter(item => !itemIds.includes(item.id)));
        setSelectedIds(prev => prev.filter(id => !itemIds.includes(id)));
    }, []);

    /**
     * Clear all items from canvas
     */
    const clearItems = useCallback(() => {
        setItems([]);
        setSelectedIds([]);
    }, []);

    return {
        // State
        items,
        selectedIds,
        vendors,
        propositions,
        products,

        // Setters
        setItems,
        setSelectedIds,

        // Actions
        addItem,
        updateItem,
        deleteItems,
        clearItems
    };
}
