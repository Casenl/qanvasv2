import { useState, useCallback } from 'react';
import { CanvasItem, Solution, Product } from '@/lib/types';
import { PRODUCTS } from '@/lib/data/mockData';

interface UseSolutionManagerProps {
    items: CanvasItem[];
    setItems: (updater: (prev: CanvasItem[]) => CanvasItem[]) => void;
    selectedIds: Set<string>;
    setDebugInfo: (info: string) => void;
    initialSolutions?: Solution[];
}

interface SolutionData {
    name: string;
    description: string;
    productIds: string[];
    metadata?: { licenses?: number; users?: number };
}

/**
 * useSolutionManager - Manages solution creation and management
 * 
 * Provides solution functionality including:
 * - Creating solutions from selected products
 * - Managing solution dialog state
 * - Getting selected products for solution creation
 * 
 * @param props - Configuration object
 * @returns Solution manager interface
 */
export function useSolutionManager({
    items,
    selectedIds,
    setDebugInfo,
    initialSolutions = []
}: UseSolutionManagerProps) {
    const [solutions, setSolutions] = useState<Solution[]>(initialSolutions);
    const [showSolutionDialog, setShowSolutionDialog] = useState(false);

    const handleCreateSolution = useCallback(() => {
        if (selectedIds.size < 2) return;
        setShowSolutionDialog(true);
    }, [selectedIds]);

    const handleSaveSolution = useCallback((solutionData: SolutionData) => {
        // Get selected canvas items with their positions
        const selectedItems = items.filter(item =>
            selectedIds.has(item.id) && item.entityType === 'product'
        );

        if (selectedItems.length === 0) return;

        // Calculate anchor point (top-left of bounding box)
        const minX = Math.min(...selectedItems.map(item => item.x));
        const minY = Math.min(...selectedItems.map(item => item.y));

        // Create product snapshots with relative positions
        const productSnapshots = selectedItems.map(item => ({
            productId: item.entityId,
            relativeX: item.x - minX,
            relativeY: item.y - minY,
            config: {
                // Per-product config can be added here later
                licenses: undefined,
                users: undefined
            }
        }));

        const newSolution: Solution = {
            id: `s-${Date.now()}`,
            name: solutionData.name,
            description: solutionData.description,
            productIds: solutionData.productIds, // For backward compatibility
            products: productSnapshots,
            metadata: solutionData.metadata
        };

        setSolutions(prev => [...prev, newSolution]);
        setDebugInfo(`Solution "${newSolution.name}" created with ${productSnapshots.length} products`);
        setShowSolutionDialog(false);
    }, [items, selectedIds, setDebugInfo]);

    const getSelectedProducts = useCallback((): Product[] => {
        return Array.from(selectedIds)
            .map(id => {
                const item = items.find(i => i.id === id);
                if (!item || item.entityType !== 'product') return null;
                return PRODUCTS.find(p => p.id === item.entityId);
            })
            .filter((p): p is Product => p !== null);
    }, [items, selectedIds]);

    const closeSolutionDialog = useCallback(() => {
        setShowSolutionDialog(false);
    }, []);

    return {
        solutions,
        showSolutionDialog,
        createSolution: handleCreateSolution,
        saveSolution: handleSaveSolution,
        getSelectedProducts,
        closeSolutionDialog
    };
}
