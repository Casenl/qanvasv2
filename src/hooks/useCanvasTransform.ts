import { useState, useCallback, useRef, useEffect } from 'react';

interface CanvasTransform {
    zoom: number;
    panX: number;
    panY: number;
}

interface UseCanvasTransformProps {
    minZoom?: number;
    maxZoom?: number;
    zoomStep?: number;
    initialZoom?: number;
}

interface UseCanvasTransformReturn {
    zoom: number;
    pan: { x: number; y: number };
    transform: CanvasTransform;
    zoomIn: () => void;
    zoomOut: () => void;
    resetZoom: () => void;
    setZoom: (zoom: number) => void;
    zoomToPoint: (clientX: number, clientY: number, delta: number, containerRect: DOMRect) => void;
    setPan: (x: number, y: number) => void;
    screenToCanvas: (screenX: number, screenY: number) => { x: number; y: number };
    canvasToScreen: (canvasX: number, canvasY: number) => { x: number; y: number };
}

/**
 * Hook for managing canvas zoom and pan transformations
 * Provides zoom controls, coordinate conversion, and transform state
 */
export function useCanvasTransform({
    minZoom = 0.1,
    maxZoom = 4.0,
    zoomStep = 0.1,
    initialZoom = 1.0
}: UseCanvasTransformProps = {}): UseCanvasTransformReturn {

    const [zoom, setZoomState] = useState(initialZoom);
    const [pan, setPanState] = useState({ x: 0, y: 0 });

    // Clamp zoom to min/max bounds
    const clampZoom = useCallback((value: number) => {
        return Math.max(minZoom, Math.min(maxZoom, value));
    }, [minZoom, maxZoom]);

    // Set zoom with clamping
    const setZoom = useCallback((newZoom: number) => {
        setZoomState(clampZoom(newZoom));
    }, [clampZoom]);

    // Zoom in by step
    const zoomIn = useCallback(() => {
        setZoomState(prev => clampZoom(prev + zoomStep));
    }, [clampZoom, zoomStep]);

    // Zoom out by step
    const zoomOut = useCallback(() => {
        setZoomState(prev => clampZoom(prev - zoomStep));
    }, [clampZoom, zoomStep]);

    // Reset to 100%
    const resetZoom = useCallback(() => {
        setZoomState(1.0);
    }, []);

    // Zoom towards a specific point (for mouse wheel zoom)
    const zoomToPoint = useCallback((
        clientX: number,
        clientY: number,
        delta: number,
        containerRect: DOMRect
    ) => {
        const zoomChange = delta > 0 ? zoomStep : -zoomStep;
        const newZoom = clampZoom(zoom + zoomChange);

        if (newZoom === zoom) return; // No change if at min/max

        // Calculate mouse position relative to container
        const mouseX = clientX - containerRect.left;
        const mouseY = clientY - containerRect.top;

        // Calculate the point in canvas coordinates before zoom
        const canvasX = (mouseX - pan.x) / zoom;
        const canvasY = (mouseY - pan.y) / zoom;

        // Calculate new pan to keep the same point under the mouse
        const newPanX = mouseX - canvasX * newZoom;
        const newPanY = mouseY - canvasY * newZoom;

        setZoomState(newZoom);
        setPanState({ x: newPanX, y: newPanY });
    }, [zoom, pan, clampZoom, zoomStep]);

    // Set pan position
    const setPan = useCallback((x: number, y: number) => {
        setPanState({ x, y });
    }, []);

    // Convert screen coordinates to canvas coordinates
    const screenToCanvas = useCallback((screenX: number, screenY: number) => {
        return {
            x: (screenX - pan.x) / zoom,
            y: (screenY - pan.y) / zoom
        };
    }, [zoom, pan]);

    // Convert canvas coordinates to screen coordinates
    const canvasToScreen = useCallback((canvasX: number, canvasY: number) => {
        return {
            x: (canvasX * zoom) + pan.x,
            y: (canvasY * zoom) + pan.y
        };
    }, [zoom, pan]);

    return {
        zoom,
        pan,
        transform: { zoom, panX: pan.x, panY: pan.y },
        zoomIn,
        zoomOut,
        resetZoom,
        setZoom,
        zoomToPoint,
        setPan,
        screenToCanvas,
        canvasToScreen
    };
}
