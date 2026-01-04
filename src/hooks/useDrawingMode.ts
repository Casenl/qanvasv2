import { useState, useCallback, useRef } from 'react';
import { ToolType } from './useToolbar';
import { CanvasItem } from '@/lib/types';
import {
    ShapeData, TextData, StickyNoteData, PathData, LineData, ImageData, FrameData,
    DEFAULT_SHAPE_STYLE, DEFAULT_SHAPE_SIZE, DEFAULT_TEXT_STYLE,
    STICKY_NOTE_COLORS, DEFAULT_PATH_STYLE, DEFAULT_LINE_STYLE
} from '@/lib/types/shapeTypes';

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
    // For pen tool (freehand drawing)
    points?: { x: number; y: number }[];
    // For line/arrow tool
    endX?: number;
    endY?: number;
    // Temporary item being drawn
    tempItemId?: string;
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
            align: DEFAULT_TEXT_STYLE.align,
            width: 200,  // Default width for text box
            height: 60   // Default height for text box
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
     * Create a path item (pen tool)
     */
    const createPathItem = useCallback((x: number, y: number, points: { x: number; y: number }[]): CanvasItem => {
        // Generate SVG path string from points
        const pathString = points.length > 0
            ? `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`
            : '';

        const pathData: PathData = {
            points,
            pathString,
            strokeColor: DEFAULT_PATH_STYLE.strokeColor!,
            strokeWidth: DEFAULT_PATH_STYLE.strokeWidth!,
            strokeStyle: DEFAULT_PATH_STYLE.strokeStyle,
            opacity: DEFAULT_PATH_STYLE.opacity!,
            smoothing: DEFAULT_PATH_STYLE.smoothing
        };

        return {
            id: generateId('pen'),
            entityId: generateId('pen-entity'),
            entityType: 'pen',
            x,
            y,
            data: pathData,
            locked: false
        };
    }, [generateId]);

    /**
     * Create a frame item
     */
    const createFrameItem = useCallback((x: number, y: number, width: number = 400, height: number = 400): CanvasItem => {
        const frameData: FrameData = {
            width,
            height,
            title: 'New Frame',
            color: 'rgba(243, 244, 246, 0.2)',
            containedItemIds: []
        };

        return {
            id: generateId('frame'),
            entityId: generateId('frame-entity'),
            entityType: 'frame',
            x,
            y,
            data: frameData,
            locked: false
        };
    }, [generateId]);

    /**
     * Create a line/arrow item
     */
    const createLineItem = useCallback((startX: number, startY: number, endX: number, endY: number, isArrow: boolean): CanvasItem => {
        const lineData: LineData = {
            startX: 0, // Relative to item position
            startY: 0,
            endX: endX - startX,
            endY: endY - startY,
            strokeColor: DEFAULT_LINE_STYLE.strokeColor!,
            strokeWidth: DEFAULT_LINE_STYLE.strokeWidth!,
            strokeStyle: DEFAULT_LINE_STYLE.strokeStyle,
            opacity: DEFAULT_LINE_STYLE.opacity!,
            startArrow: false,
            endArrow: isArrow,
            arrowSize: DEFAULT_LINE_STYLE.arrowSize
        };

        return {
            id: generateId(isArrow ? 'arrow' : 'line'),
            entityId: generateId(isArrow ? 'arrow-entity' : 'line-entity'),
            entityType: isArrow ? 'arrow' : 'line',
            x: startX,
            y: startY,
            data: lineData,
            locked: false
        };
    }, [generateId]);

    /**
     * Create an image item
     */
    const createImageItem = useCallback((x: number, y: number, url: string, width: number = 300, height: number = 200): CanvasItem => {
        const imageData: ImageData = {
            url,
            width,
            height,
            alt: 'Uploaded image'
        };

        return {
            id: generateId('image'),
            entityId: generateId('image-entity'),
            entityType: 'image',
            x,
            y,
            data: imageData,
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

            case 'image':
                // Trigger file upload dialog
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = 'image/*';
                input.onchange = (e) => {
                    const file = (e.target as HTMLInputElement).files?.[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                            const imageUrl = event.target?.result as string;
                            const img = new Image();
                            img.onload = () => {
                                // Create image item with actual dimensions
                                const maxWidth = 400;
                                const maxHeight = 400;
                                let width = img.width;
                                let height = img.height;

                                // Scale down if too large
                                if (width > maxWidth || height > maxHeight) {
                                    const ratio = Math.min(maxWidth / width, maxHeight / height);
                                    width *= ratio;
                                    height *= ratio;
                                }

                                const imageItem = createImageItem(x, y, imageUrl, width, height);
                                setItems(prev => [...prev, imageItem]);
                                setDebugInfo?.(`Created image at (${Math.round(x)}, ${Math.round(y)})`);
                                onToolReset?.();
                            };
                            img.src = imageUrl;
                        };
                        reader.readAsDataURL(file);
                    }
                };
                input.click();
                return true; // Handled, but async

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
    }, [activeTool, screenToCanvas, createShapeItem, createTextItem, createStickyNoteItem, createImageItem, setItems, setDebugInfo, onToolReset]);

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
            case 'frame':
                return 'crosshair';
            case 'sticky-note':
            case 'image':
            case 'comment':
                return 'pointer';
            default:
                return 'default';
        }
    }, [activeTool]);

    /**
     * Handle mouse down for drawing tools (pen, line, arrow)
     */
    const handleDrawStart = useCallback((e: React.MouseEvent<HTMLDivElement>): boolean => {
        // Only handle for drawing tools (including frame for click-and-drag)
        if (!['pen', 'line', 'arrow', 'frame'].includes(activeTool)) return false;

        // Don't start drawing on existing items
        const target = e.target as HTMLElement;
        if (target.closest('[data-canvas-item]')) return false;

        const { x, y } = screenToCanvas(e.clientX, e.clientY);

        setDrawingState({
            isDrawing: true,
            startX: x,
            startY: y,
            currentX: x,
            currentY: y,
            points: activeTool === 'pen' ? [{ x, y }] : undefined
        });

        setDebugInfo?.(`Started drawing ${activeTool}`);
        return true;
    }, [activeTool, screenToCanvas, setDebugInfo]);

    /**
     * Handle mouse move for drawing tools
     */
    const handleDrawMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!drawingState?.isDrawing) return;

        const { x, y } = screenToCanvas(e.clientX, e.clientY);

        if (activeTool === 'pen') {
            // Add point to path
            setDrawingState(prev => prev ? {
                ...prev,
                currentX: x,
                currentY: y,
                points: [...(prev.points || []), { x, y }]
            } : null);
        } else if (activeTool === 'line' || activeTool === 'arrow' || activeTool === 'frame') {
            // Update end point (for line, arrow, and frame)
            setDrawingState(prev => prev ? {
                ...prev,
                currentX: x,
                currentY: y,
                endX: x,
                endY: y
            } : null);
        }
    }, [drawingState, activeTool, screenToCanvas]);

    /**
     * Handle mouse up for drawing tools - finalize the drawing
     */
    const handleDrawEnd = useCallback(() => {
        if (!drawingState?.isDrawing) return;

        let newItem: CanvasItem | null = null;

        if (activeTool === 'pen' && drawingState.points && drawingState.points.length > 1) {
            // Create path item
            newItem = createPathItem(drawingState.startX, drawingState.startY, drawingState.points);
            setDebugInfo?.(`Created pen path with ${drawingState.points.length} points`);
        } else if ((activeTool === 'line' || activeTool === 'arrow') && drawingState.endX !== undefined && drawingState.endY !== undefined) {
            // Create line/arrow item
            newItem = createLineItem(
                drawingState.startX,
                drawingState.startY,
                drawingState.endX,
                drawingState.endY,
                activeTool === 'arrow'
            );
            setDebugInfo?.(`Created ${activeTool}`);
        } else if (activeTool === 'frame' && drawingState.endX !== undefined && drawingState.endY !== undefined) {
            // Create frame item with dragged dimensions
            const width = Math.abs(drawingState.endX - drawingState.startX);
            const height = Math.abs(drawingState.endY - drawingState.startY);
            const x = Math.min(drawingState.startX, drawingState.endX);
            const y = Math.min(drawingState.startY, drawingState.endY);

            // Only create if dragged area is large enough (min 50x50)
            if (width > 50 && height > 50) {
                newItem = createFrameItem(x, y, width, height);
                setDebugInfo?.(`Created frame ${width}x${height}`);
            }
        }

        if (newItem) {
            setItems(prev => [...prev, newItem!]);
            onToolReset?.();
        }

        setDrawingState(null);
    }, [drawingState, activeTool, createPathItem, createLineItem, setItems, setDebugInfo, onToolReset]);

    return {
        drawingState,
        handleCanvasClick,
        handleDrawStart,
        handleDrawMove,
        handleDrawEnd,
        getCursorStyle,
        screenToCanvas,
        activeTool
    };
}
