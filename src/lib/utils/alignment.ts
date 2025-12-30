import { CanvasItem } from '@/lib/types';

export interface AlignmentOptions {
    type: 'left' | 'center' | 'right' | 'top' | 'middle' | 'bottom';
    items: CanvasItem[];
}

export interface DistributeOptions {
    direction: 'horizontal' | 'vertical';
    items: CanvasItem[];
}

export interface BoundingBox {
    x: number;
    y: number;
    width: number;
    height: number;
}

const ITEM_WIDTH = 300; // w-75 = 18.75rem = 300px
const ITEM_HEIGHT = 172; // Actual rendered card height

/**
 * Get bounding box for an item
 */
export function getItemBounds(item: CanvasItem): BoundingBox {
    return {
        x: item.x,
        y: item.y,
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT
    };
}

/**
 * Get bounding box that contains all items
 */
export function getSelectionBounds(items: CanvasItem[]): BoundingBox | null {
    if (items.length === 0) return null;

    const bounds = items.map(getItemBounds);
    const minX = Math.min(...bounds.map(b => b.x));
    const minY = Math.min(...bounds.map(b => b.y));
    const maxX = Math.max(...bounds.map(b => b.x + b.width));
    const maxY = Math.max(...bounds.map(b => b.y + b.height));

    return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
    };
}

/**
 * Align items based on alignment type
 */
export function alignItems(options: AlignmentOptions): CanvasItem[] {
    const { type, items } = options;

    if (items.length < 2) return items;

    const bounds = getSelectionBounds(items);
    if (!bounds) return items;

    return items.map(item => {
        const itemBounds = getItemBounds(item);
        let newX = item.x;
        let newY = item.y;

        switch (type) {
            case 'left':
                newX = bounds.x;
                break;
            case 'center':
                newX = bounds.x + (bounds.width - itemBounds.width) / 2;
                break;
            case 'right':
                newX = bounds.x + bounds.width - itemBounds.width;
                break;
            case 'top':
                newY = bounds.y;
                break;
            case 'middle':
                newY = bounds.y + (bounds.height - itemBounds.height) / 2;
                break;
            case 'bottom':
                newY = bounds.y + bounds.height - itemBounds.height;
                break;
        }

        return { ...item, x: newX, y: newY };
    });
}

/**
 * Distribute items evenly
 */
export function distributeItems(options: DistributeOptions): CanvasItem[] {
    const { direction, items } = options;

    if (items.length < 3) return items;

    const sorted = [...items].sort((a, b) =>
        direction === 'horizontal' ? a.x - b.x : a.y - b.y
    );

    const bounds = getSelectionBounds(sorted);
    if (!bounds) return items;

    const first = sorted[0];
    const last = sorted[sorted.length - 1];

    if (direction === 'horizontal') {
        const totalSpace = (last.x + ITEM_WIDTH) - first.x;
        const spacing = (totalSpace - (sorted.length * ITEM_WIDTH)) / (sorted.length - 1);

        return sorted.map((item, index) => ({
            ...item,
            x: first.x + index * (ITEM_WIDTH + spacing)
        }));
    } else {
        const totalSpace = (last.y + ITEM_HEIGHT) - first.y;
        const spacing = (totalSpace - (sorted.length * ITEM_HEIGHT)) / (sorted.length - 1);

        return sorted.map((item, index) => ({
            ...item,
            y: first.y + index * (ITEM_HEIGHT + spacing)
        }));
    }
}

/**
 * Check if two items are aligned on a specific axis
 */
export function areItemsAligned(item1: CanvasItem, item2: CanvasItem, axis: 'x' | 'y', tolerance: number = 5): boolean {
    const bounds1 = getItemBounds(item1);
    const bounds2 = getItemBounds(item2);

    if (axis === 'x') {
        // Check left, center, or right alignment
        return Math.abs(bounds1.x - bounds2.x) < tolerance ||
            Math.abs((bounds1.x + bounds1.width / 2) - (bounds2.x + bounds2.width / 2)) < tolerance ||
            Math.abs((bounds1.x + bounds1.width) - (bounds2.x + bounds2.width)) < tolerance;
    } else {
        // Check top, middle, or bottom alignment
        return Math.abs(bounds1.y - bounds2.y) < tolerance ||
            Math.abs((bounds1.y + bounds1.height / 2) - (bounds2.y + bounds2.height / 2)) < tolerance ||
            Math.abs((bounds1.y + bounds1.height) - (bounds2.y + bounds2.height)) < tolerance;
    }
}
