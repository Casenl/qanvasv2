import { useState, useCallback, useRef } from 'react';
import { ToolType } from './useToolbar';
import { CanvasItem } from '@/lib/types';
import { ShapeData, TextData, StickyNoteData, DEFAULT_SHAPE_STYLE, DEFAULT_SHAPE_SIZE, DEFAULT_TEXT_STYLE, STICKY_NOTE_COLORS } from '@/lib/types/shapeTypes';

interface DrawingModeConfig {
    items: CanvasItem[];
    setItems: (items: CanvasItem[] | ((prev: CanvasItem[]) => CanvasItem[])) => void;
    activeTool: ToolType;
    canvasRef: React.RefObject<HTMLDivElement>;
    zoom: number;
    pan: { x: number; y: number };
    setDebugInfo?: (info: string) => void;
    onToolReset?: () => void; // Callback to reset tool to 'select'
}

interface DrawingState {
    isDrawing: boolean;
    startX: number;
    startY: number;
    currentX: number;
    currentY: number;
}

/**
 * Custom hook for managing drawing mode on the canvas
 * 
 * Responsibilities:
 * - Handle click-to-place for shapes, text, sticky notes
 * - Handle drag-to-draw for shapes (future)
 * - Convert screen coordinates to canvas coordinates
 * - Create new canvas items based on active tool
 * 
 * @param config - Drawing mode configuration
 * @returns Drawing mode state and handlers
 */
export function useDrawingMode(config: DrawingModeConfig) {
    const { items, setItems, activeTool, canvasRef, zoom, pan, setDebugInfo, onToolReset } = config;

    // Drawing state
    const [drawingState, setDrawingState] = useState<DrawingState | null>(null);

    /**
     * Convert screen coordinates to canvas coordinates
     */
    const screenToCanvas = useCallback((screenX: number, screenY: number): { x: number; y: number } => {
        if (!canvasRef.current) return { x: 0, y: 0 };

        const rect = canvasRef.current.getBoundingClientRect();
        const x = (screenX - rect.left - pan.x) / zoom;
        const y = (screenY - rect.top - pan.y) / zoom;

        return { x, y };
    }, [canvasRef, zoom, pan]);

    /**
     * Generate unique ID for new items
     */
    const generateId = useCallback((type: string): string => {
        return `${type}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }, []);

    /**
     * Create a shape item
     */
    const createShapeItem = useCallback((x: number, y: number, shapeType: string): CanvasItem => {
        const shapeData: ShapeData = {
            type: shapeType as any,
            width: DEFAULT_SHAPE_SIZE.width,
            height: DEFAULT_SHAPE_SIZE.height,
            style: { ...DEFAULT_SHAPE_STYLE }
        };

        return {
            id: generateId('shape'),
            entityId: generateId('shape-entity'),
            entityType: 'shape',
            x,
            y,
            data: shapeData,
            locked: false
        };
    }, [generateId]);

    /**
     * Create a text item
     */
    const createTextItem = useCallback((x: number, y: number): CanvasItem => {
        const textData: TextData = {
            content: 'Double-click to edit',
            fontSize: DEFAULT_TEXT_STYLE.fontSize!,
            fontFamily: DEFAULT_TEXT_STYLE.fontFamily!,
            color: DEFAULT_TEXT_STYLE.color!,
            align: DEFAULT_TEXT_STYLE.align
        };

        return {
            id: generateId('text'),
            entityId: generateId('text-entity'),
            entityType: 'text',
            x,
            y,
            data: textData,
            locked: false
        };
    }, [generateId]);

    /**
     * Create a sticky note item
     */
    const createStickyNoteItem = useCallback((x: number, y: number): CanvasItem => {
        const stickyData: StickyNoteData = {
            content: 'New note',
            color: STICKY_NOTE_COLORS[0]
        };

        return {
            id: generateId('sticky-note'),
            entityId: generateId('sticky-note-entity'),
            entityType: 'sticky-note',
            x,
            y,
            data: stickyData,
            locked: false
        };
    }, [generateId]);

    /**
     * Handle canvas click to place items
     * @returns true if the click was handled (item created), false otherwise
     */
    const handleCanvasClick = useCallback((e: React.MouseEvent<HTMLDivElement>): boolean => {
        // Only handle if we're in a drawing tool mode
        if (activeTool === 'select') return false;

        // Don't create items if clicking on existing items
        const target = e.target as HTMLElement;
        if (target.closest('[data-canvas-item]')) return false;

        const { x, y } = screenToCanvas(e.clientX, e.clientY);

        let newItem: CanvasItem | null = null;

        switch (activeTool) {
            case 'rectangle':
            case 'circle':
            case 'triangle':
            case 'diamond':
            case 'hexagon':
            case 'star':
            case 'heart':
                newItem = createShapeItem(x, y, activeTool);
                setDebugInfo?.(`Created ${activeTool} at (${Math.round(x)}, ${Math.round(y)})`);
                break;

            case 'text':
                newItem = createTextItem(x, y);
                setDebugInfo?.(`Created text at (${Math.round(x)}, ${Math.round(y)})`);
                break;

            case 'sticky-note':
                newItem = createStickyNoteItem(x, y);
                setDebugInfo?.(`Created sticky note at (${Math.round(x)}, ${Math.round(y)})`);
                break;

            default:
                // Other tools not yet implemented
                setDebugInfo?.(`Tool ${activeTool} not yet implemented`);
                return false;
        }

        if (newItem) {
            setItems(prev => [...prev, newItem!]);
            // Reset to select tool after placing an item to prevent accidental multiple placements
            onToolReset?.();
            return true;
        }

        return false;
    }, [activeTool, screenToCanvas, createShapeItem, createTextItem, createStickyNoteItem, setItems, setDebugInfo, onToolReset]);

    /**
     * Get cursor style based on active tool
     */
    const getCursorStyle = useCallback((): string => {
        switch (activeTool) {
            case 'select':
                return 'default';
            case 'text':
                return 'text';
            case 'rectangle':
            case 'circle':
            case 'triangle':
            case 'diamond':
            case 'hexagon':
            case 'star':
            case 'heart':
            case 'pen':
            case 'line':
            case 'arrow':
                return 'crosshair';
            case 'sticky-note':
            case 'image':
            case 'frame':
            case 'comment':
                return 'pointer';
            default:
                return 'default';
        }
    }, [activeTool]);

    return {
        drawingState,
        handleCanvasClick,
        getCursorStyle,
        screenToCanvas
    };
}
