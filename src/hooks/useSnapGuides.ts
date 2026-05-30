import { useMemo } from 'react';
import { CanvasItem } from '@/lib/types';
import { getItemBounds } from '@/lib/utils/alignment';

export interface SnapGuide {
    type: 'vertical' | 'horizontal';
    position: number;
    items: string[];
    label?: string;
    guideType?: 'center' | 'edge' | 'spacing';
    // Bounds to show guide extent (for visual spanning)
    minY?: number; // For vertical guides
    maxY?: number; // For vertical guides
    minX?: number; // For horizontal guides
    maxX?: number; // For horizontal guides
}

export interface SnapResult {
    x: number;
    y: number;
    guides: SnapGuide[];
}

const SNAP_THRESHOLD = 8; // pixels
const ITEM_WIDTH = 300; // w-75 = 18.75rem = 300px
const ITEM_HEIGHT = 172; // Actual rendered card height

type SnapCandidate = {
    distance: number;
    position: number; // Where the guide visual line should be
    guideType: 'center' | 'edge' | 'spacing';
    label: string;
    itemId: string;
};

/**
 * Hook to detect snap guides when dragging an item
 * Checks for: Left-Left, Right-Right, Center-Center, Left-Right, Right-Left (and similarly for Y axis)
 */
/**
 * Calculate snap guides for a dragged item
 * Standalone function that can be used outside of hooks (e.g. in event handlers)
 */
export function calculateSnapGuides(
    draggedItemId: string | null,
    dragPosition: { x: number; y: number; width?: number; height?: number } | null,
    allItems: CanvasItem[],
    selectedItemIds: string[] = []
): SnapResult {
    if (!draggedItemId || !dragPosition) {
        return { x: dragPosition?.x ?? 0, y: dragPosition?.y ?? 0, guides: [] };
    }

    const width = dragPosition.width ?? ITEM_WIDTH;
    const height = dragPosition.height ?? ITEM_HEIGHT;

    // Current dragged edges
    const current = {
        left: dragPosition.x,
        right: dragPosition.x + width,
        centerX: dragPosition.x + width / 2,
        top: dragPosition.y,
        bottom: dragPosition.y + height,
        centerY: dragPosition.y + height / 2
    };

    // Filter out the dragged item AND all selected items (for multi-select drag)
    // Also filter out items contained in selected frames
    const itemsToExclude = new Set<string>([draggedItemId, ...selectedItemIds]);

    // Add contained items of any selected frames
    selectedItemIds.forEach(id => {
        const item = allItems.find(i => i.id === id);
        if (item?.entityType === 'frame' && item.data?.containedItemIds) {
            item.data.containedItemIds.forEach((containedId: string) => {
                itemsToExclude.add(containedId);
            });
        }
    });

    const otherItems = allItems.filter(item => !itemsToExclude.has(item.id));

    let snappedX = dragPosition.x;
    let snappedY = dragPosition.y;

    // Find best X snap
    let bestSnapX: SnapCandidate | null = null;
    let minDistX = SNAP_THRESHOLD;

    for (const item of otherItems) {
        const bounds = getItemBounds(item);
        const target = {
            left: bounds.x,
            right: bounds.x + bounds.width,
            centerX: bounds.x + bounds.width / 2
        };

        // Check all X combinations
        const checks = [
            { d: target.left - current.left, pos: target.left, label: 'Left Edge', type: 'edge' },
            { d: target.right - current.left, pos: target.right, label: 'Right to Left', type: 'edge' },
            { d: target.left - current.right, pos: target.left, label: 'Left to Right', type: 'edge' },
            { d: target.right - current.right, pos: target.right, label: 'Right Edge', type: 'edge' },
            { d: target.centerX - current.centerX, pos: target.centerX, label: 'Center', type: 'center' }
        ];

        for (const check of checks) {
            if (Math.abs(check.d) < minDistX) {
                minDistX = Math.abs(check.d);
                bestSnapX = {
                    distance: check.d,
                    position: check.pos,
                    guideType: check.type as any,
                    label: check.label,
                    itemId: item.id
                };
            }
        }
    }

    // Apply X Snap
    const finalGuides: SnapGuide[] = [];
    if (bestSnapX) {
        if (bestSnapX.label.includes('Left Edge') || bestSnapX.label.includes('Right to Left')) {
            snappedX = bestSnapX.position;
        } else if (bestSnapX.label.includes('Right Edge') || bestSnapX.label.includes('Left to Right')) {
            snappedX = bestSnapX.position - width;
        } else if (bestSnapX.label.includes('Center')) {
            snappedX = bestSnapX.position - width / 2;
        }

        const targetItem = otherItems.find(it => it.id === bestSnapX!.itemId);
        const targetBounds = targetItem ? getItemBounds(targetItem) : null;

        const minY = targetBounds ? Math.min(current.top, targetBounds.y) : current.top;
        const maxY = targetBounds ? Math.max(current.bottom, targetBounds.y + targetBounds.height) : current.bottom;

        finalGuides.push({
            type: 'vertical',
            position: bestSnapX.position,
            items: [bestSnapX.itemId],
            label: bestSnapX.label,
            guideType: bestSnapX.guideType,
            minY,
            maxY
        });
    }

    // Find best Y snap
    let bestSnapY: SnapCandidate | null = null;
    let minDistY = SNAP_THRESHOLD;

    for (const item of otherItems) {
        const bounds = getItemBounds(item);
        const target = {
            top: bounds.y,
            bottom: bounds.y + bounds.height,
            centerY: bounds.y + bounds.height / 2
        };

        const checks = [
            { d: target.top - current.top, pos: target.top, label: 'Top Edge', type: 'edge' },
            { d: target.bottom - current.top, pos: target.bottom, label: 'Bottom to Top', type: 'edge' },
            { d: target.top - current.bottom, pos: target.top, label: 'Top to Bottom', type: 'edge' },
            { d: target.bottom - current.bottom, pos: target.bottom, label: 'Bottom Edge', type: 'edge' },
            { d: target.centerY - current.centerY, pos: target.centerY, label: 'Middle', type: 'center' }
        ];

        for (const check of checks) {
            if (Math.abs(check.d) < minDistY) {
                minDistY = Math.abs(check.d);
                bestSnapY = {
                    distance: check.d,
                    position: check.pos,
                    guideType: check.type as any,
                    label: check.label,
                    itemId: item.id
                };
            }
        }
    }

    // Apply Y Snap
    if (bestSnapY) {
        if (bestSnapY.label.includes('Top Edge') || bestSnapY.label.includes('Bottom to Top')) {
            snappedY = bestSnapY.position;
        } else if (bestSnapY.label.includes('Bottom Edge') || bestSnapY.label.includes('Top to Bottom')) {
            snappedY = bestSnapY.position - height;
        } else if (bestSnapY.label.includes('Middle')) {
            snappedY = bestSnapY.position - height / 2;
        }

        const targetItem = otherItems.find(it => it.id === bestSnapY!.itemId);
        const targetBounds = targetItem ? getItemBounds(targetItem) : null;

        const minX = targetBounds ? Math.min(current.left, targetBounds.x) : current.left;
        const maxX = targetBounds ? Math.max(current.right, targetBounds.x + targetBounds.width) : current.right;

        finalGuides.push({
            type: 'horizontal',
            position: bestSnapY.position,
            items: [bestSnapY.itemId],
            label: bestSnapY.label,
            guideType: bestSnapY.guideType,
            minX,
            maxX
        });
    }

    // Consolidate guides
    const consolidatedGuides: SnapGuide[] = [];
    for (const guide of finalGuides) {
        const existing = consolidatedGuides.find(
            g => g.type === guide.type && Math.abs(g.position - guide.position) < 1
        );
        if (existing) {
            existing.items = [...new Set([...existing.items, ...guide.items])];
            if (guide.type === 'vertical') {
                existing.minY = Math.min(existing.minY ?? Infinity, guide.minY ?? Infinity);
                existing.maxY = Math.max(existing.maxY ?? -Infinity, guide.maxY ?? -Infinity);
            } else {
                existing.minX = Math.min(existing.minX ?? Infinity, guide.minX ?? Infinity);
                existing.maxX = Math.max(existing.maxX ?? -Infinity, guide.maxX ?? -Infinity);
            }
        } else {
            consolidatedGuides.push(guide);
        }
    }

    return {
        x: Math.round(snappedX),
        y: Math.round(snappedY),
        guides: consolidatedGuides
    };
}

/**
 * Hook to detect snap guides when dragging an item
 */
export function useSnapGuides(
    draggedItemId: string | null,
    dragPosition: { x: number; y: number; width?: number; height?: number } | null,
    allItems: CanvasItem[],
    enabled: boolean = true,
    selectedItemIds: string[] = []
): SnapResult {
    return useMemo(() => {
        if (!enabled) {
            return { x: dragPosition?.x ?? 0, y: dragPosition?.y ?? 0, guides: [] };
        }
        return calculateSnapGuides(draggedItemId, dragPosition, allItems, selectedItemIds);
    }, [draggedItemId, dragPosition, allItems, enabled, selectedItemIds]);
}
