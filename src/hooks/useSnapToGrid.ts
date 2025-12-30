import { useCallback } from 'react';

export interface SnapToGridOptions {
    enabled: boolean;
    gridSize?: number;
}

export interface SnapResult {
    x: number;
    y: number;
    snappedX: boolean;
    snappedY: boolean;
}

const DEFAULT_GRID_SIZE = 20;

export function useSnapToGrid(options: SnapToGridOptions = { enabled: true, gridSize: DEFAULT_GRID_SIZE }) {
    const { enabled, gridSize = DEFAULT_GRID_SIZE } = options;

    const snapPosition = useCallback((x: number, y: number): SnapResult => {
        if (!enabled) {
            return { x, y, snappedX: false, snappedY: false };
        }

        const snappedX = Math.round(x / gridSize) * gridSize;
        const snappedY = Math.round(y / gridSize) * gridSize;

        return {
            x: snappedX,
            y: snappedY,
            snappedX: snappedX !== x,
            snappedY: snappedY !== y
        };
    }, [enabled, gridSize]);

    const snapToGrid = useCallback((value: number): number => {
        if (!enabled) return value;
        return Math.round(value / gridSize) * gridSize;
    }, [enabled, gridSize]);

    const isOnGrid = useCallback((x: number, y: number): boolean => {
        if (!enabled) return true;
        return x % gridSize === 0 && y % gridSize === 0;
    }, [enabled, gridSize]);

    return {
        snapPosition,
        snapToGrid,
        isOnGrid,
        gridSize,
        enabled
    };
}
