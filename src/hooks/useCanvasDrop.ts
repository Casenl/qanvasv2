import { useCallback } from 'react';
import { CanvasItem } from '@/lib/types';

interface UseCanvasDropProps {
    onItemAdd?: (item: CanvasItem) => void;
    onToolReset?: () => void;
    screenToCanvas: (screenX: number, screenY: number) => { x: number; y: number };
}

export function useCanvasDrop({ onItemAdd, onToolReset, screenToCanvas }: UseCanvasDropProps) {
    const handleDragOver = useCallback((e: React.DragEvent) => {
        // Check if this is a tool drag from toolbar
        if (e.dataTransfer.types.includes('application/qanvas-tool')) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
        }
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();

        // Get the tool type from drag data
        const toolType = e.dataTransfer.getData('application/qanvas-tool');
        if (!toolType || !onItemAdd) return;

        // Convert drop coordinates to canvas coordinates
        const { x, y } = screenToCanvas(e.clientX, e.clientY);

        // Create the appropriate item based on tool type
        const shapeTools = ['rectangle', 'circle', 'triangle', 'diamond', 'hexagon', 'star', 'heart'];

        if (shapeTools.includes(toolType)) {
            // Create a new shape item
            const newItem: CanvasItem = {
                id: `shape-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                entityId: `shape-entity-${Date.now()}`,
                entityType: 'shape',
                x,
                y,
                data: {
                    type: toolType,
                    width: 120,
                    height: 120,
                    style: {
                        fillColor: '#3b82f6',
                        strokeColor: '#1e40af',
                        strokeWidth: 2,
                        opacity: 1,
                        cornerRadius: 0
                    }
                },
                locked: false
            };

            onItemAdd(newItem);
        } else if (toolType === 'text') {
            const newItem: CanvasItem = {
                id: `text-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                entityId: `text-entity-${Date.now()}`,
                entityType: 'text',
                x,
                y,
                data: {
                    content: 'Double-click to edit',
                    fontSize: 16,
                    fontFamily: 'Titillium Web, sans-serif',
                    color: '#000000',
                    align: 'left',
                    width: 200,
                    height: 60
                },
                locked: false
            };
            onItemAdd(newItem);
        } else if (toolType === 'note') {
            // Basic sticky note implementation
            const newItem: CanvasItem = {
                id: `note-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                entityId: `note-entity-${Date.now()}`,
                entityType: 'sticky-note',
                x,
                y,
                data: {
                    content: '',
                    color: '#fef3c7',
                    width: 200,
                    height: 200
                },
                locked: false
            };
            onItemAdd(newItem);
        } else if (toolType === 'frame') {
            // Frame implementation
            const newItem: CanvasItem = {
                id: `frame-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                entityId: `frame-entity-${Date.now()}`,
                entityType: 'frame',
                x,
                y,
                data: {
                    title: 'New Frame',
                    width: 400,
                    height: 400,
                    color: 'rgba(243, 244, 246, 0.2)'
                },
                locked: false
            };
            onItemAdd(newItem);
        }

        // Reset to select tool after drag & drop to prevent accidental multiple placements
        onToolReset?.();

    }, [onItemAdd, onToolReset, screenToCanvas]);

    return { handleDragOver, handleDrop };
}
