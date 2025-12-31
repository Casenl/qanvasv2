'use client';

import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import {
    DndContext,
    DragOverlay,
    DragStartEvent,
    DragEndEvent,
    DragMoveEvent,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors,
    pointerWithin,
    CollisionDetection,
    rectIntersection,
} from '@dnd-kit/core';
import { createPortal } from 'react-dom';
import { Package, Layout } from 'lucide-react'; // Combined imports for lucide-react

import { PropositionType, Proposition, Vendor, Product, Solution, CanvasItem } from '@/lib/types';
import { CanvasSidebar } from '../CanvasSidebar';
import { CanvasWorkspace } from '../CanvasWorkspace';
import { CanvasCardVisual } from '../CanvasItemCard';
import { PropertiesPanel } from '../PropertiesPanel';
import { useMultiSelect } from '@/hooks/useMultiSelect';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';
import { useSnapGuides } from '@/hooks/useSnapGuides';
import { useModifierKeys } from '@/hooks/useModifierKeys';
import { useHistory } from '@/hooks/useHistory';
import { ContextMenu } from '../controls/ContextMenu';
import { AlignmentToolbar } from '../controls/AlignmentToolbar';
import { ThemeToggle } from '../controls/ThemeToggle';
import { AxisLockIndicator } from '../controls/AxisLockIndicator';
import { SnapshotControls } from '../controls/SnapshotControls';
import { alignItems, distributeItems } from '@/lib/utils/alignment';
import { useTheme } from '@/hooks/useTheme';
import { Layers, AlignLeft, Grid } from 'lucide-react'; // Remaining lucide-react imports
import { PROPOSITIONS, VENDORS, PRODUCTS, SOLUTIONS } from '@/lib/data/mockData';
import { useItemNudging } from '@/hooks/useItemNudging';
import { useItemLocking } from '@/hooks/useItemLocking';
import { useAlignment } from '@/hooks/useAlignment';
import { useClipboard } from '@/hooks/useClipboard';
import { useContextMenu } from '@/hooks/useContextMenu';
import { useCanvasTransform } from '@/hooks/useCanvasTransform';
import { useSnapshotManager } from '@/hooks/useSnapshotManager';
import { useSolutionManager } from '@/hooks/useSolutionManager';
import { useMetricManager } from '@/hooks/useMetricManager';
import { ZoomControls } from '../controls/ZoomControls';
import { SolutionDialog } from '../dialogs/SolutionDialog';
import { CanvasConfiguration, DEFAULT_CANVAS_CONFIG } from '@/lib/types/canvasConfig';
import { initializeProductConfig, updateMetricManually, resetMetricToInherited, syncInheritedMetrics } from '@/lib/types/productConfig';
import { CanvasSnapshot, createSnapshot, compareSnapshots, SnapshotComparison } from '@/lib/types/snapshot';
import { ComparisonView } from '../ComparisonView';

// Custom collision strategy
const customCollisionStrategy: CollisionDetection = (args) => {
    const pointerCollisions = pointerWithin(args);
    if (pointerCollisions.length > 0) return pointerCollisions;
    const rectCollisions = rectIntersection(args);
    return rectCollisions.filter(c => c.id === 'canvas-droppable');
};

export function CanvasBoard() {
    // State with history for undo/redo
    const history = useHistory<CanvasItem[]>([]);
    const items = history.state;
    const setItems = history.setState;
    const [activeDragData, setActiveDragData] = useState<any>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProposition, setSelectedProposition] = useState<PropositionType | 'all'>('all');
    const [mounted, setMounted] = useState(false);
    const [debugInfo, setDebugInfo] = useState<string>('Ready');



    // Drag state for visual guides
    const [dragState, setDragState] = useState<{ id: string; x: number; y: number; width: number; height: number } | null>(null);
    const lastDragUpdateRef = useRef<{ x: number; y: number; time: number } | null>(null);
    const [lockedAxis, setLockedAxis] = useState<'x' | 'y' | null>(null);

    const canvasRef = useRef<HTMLDivElement>(null);

    // Theme hook
    const { theme, toggleTheme, isDark } = useTheme();

    // Color scheme toggle
    const [colorSchemeEnabled, setColorSchemeEnabled] = useState(true);

    // Canvas configuration state
    const [canvasConfig, setCanvasConfig] = useState<CanvasConfiguration>(DEFAULT_CANVAS_CONFIG);

    // Track previous config to avoid unnecessary syncs
    const prevCanvasConfigRef = useRef<CanvasConfiguration>(DEFAULT_CANVAS_CONFIG);

    // Multi-select hook
    const multiSelect = useMultiSelect();

    // Modifier keys
    const keys = useModifierKeys();

    // Calculate snap guides based on current drag state (after multiSelect is defined)
    // Only exclude items that are being dragged together (multi-select drag)
    // If dragging a single item, it should snap to ALL other items (including selected ones)
    const itemsBeingDragged = dragState?.id
        ? (multiSelect.selectedIds.includes(dragState.id) && multiSelect.selectedIds.length > 1
            ? multiSelect.selectedIds // Multi-select: exclude all selected items
            : [dragState.id]) // Single item: only exclude the dragged item
        : [];

    const { x: snappedX, y: snappedY, guides: snapGuides } = useSnapGuides(
        dragState?.id ?? null,
        dragState ? { x: dragState.x, y: dragState.y, width: dragState.width, height: dragState.height } : null,
        items,
        true, // enabled
        itemsBeingDragged // exclude only items being dragged together
    );

    // Item nudging hook
    const nudging = useItemNudging({
        items,
        setItems,
        selectedIds: multiSelect.selectedIds
    });

    // Item locking hook
    const locking = useItemLocking({
        items,
        setItems,
        selectedIds: multiSelect.selectedIds,
        setDebugInfo
    });

    // Alignment hook
    const alignment = useAlignment({
        items,
        setItems,
        selectedIds: multiSelect.selectedIds,
        setDebugInfo
    });

    // Clipboard hook
    const clipboardOps = useClipboard({
        items,
        setItems,
        selectedIds: multiSelect.selectedIds,
        selectMultiple: multiSelect.selectMultiple,
        clearSelection: multiSelect.clearSelection,
        setDebugInfo
    });

    // Context menu hook
    const contextMenuOps = useContextMenu({
        items,
        setItems,
        selectedIds: new Set(multiSelect.selectedIds),
        clearSelection: multiSelect.clearSelection,
        setDebugInfo,
        clipboardCopy: clipboardOps.copy
    });

    // Snapshot management hook
    const snapshotManager = useSnapshotManager({
        items,
        canvasConfig,
        setItems,
        setCanvasConfig,
        setDebugInfo
    });

    // Solution management hook
    const solutionManager = useSolutionManager({
        items,
        setItems,
        selectedIds: new Set(multiSelect.selectedIds),
        setDebugInfo,
        initialSolutions: SOLUTIONS
    });

    // Metric management hook
    const metricManager = useMetricManager({
        items,
        setItems,
        canvasConfig,
        setDebugInfo
    });


    // Sync inherited metrics when canvas config changes
    // This also ADDS new metrics if they're set in canvas config after product was placed
    // Only runs when config VALUES actually change (not on every render)
    useEffect(() => {
        // Check if config actually changed
        const configChanged = JSON.stringify(prevCanvasConfigRef.current.coreMetrics) !==
            JSON.stringify(canvasConfig.coreMetrics);

        if (!configChanged) return;

        // Update ref
        prevCanvasConfigRef.current = canvasConfig;

        // Sync metrics
        setItems(prev => prev.map(item => {
            if (!item.productConfig || item.entityType !== 'product') return item;

            return {
                ...item,
                productConfig: syncInheritedMetrics(item.productConfig, canvasConfig, item.entityId)
            };
        }));
    }, [canvasConfig]);

    // Canvas transform (zoom & pan) hook
    const canvasTransform = useCanvasTransform({
        minZoom: 0.1,
        maxZoom: 4.0,
        zoomStep: 0.1,
        initialZoom: 1.0
    });


    useEffect(() => {
        setMounted(true);
    }, []);

    // Keyboard shortcuts
    useKeyboardShortcuts({
        onSelectAll: () => multiSelect.selectAll(items.map(i => i.id)),
        onCopy: clipboardOps.copy,
        onPaste: clipboardOps.paste,
        onDelete: clipboardOps.deleteSelected,
        onDuplicate: clipboardOps.duplicate,
        onEscape: () => multiSelect.clearSelection(),
        onNudgeUp: nudging.nudgeUp,
        onNudgeDown: nudging.nudgeDown,
        onNudgeLeft: nudging.nudgeLeft,
        onNudgeRight: nudging.nudgeRight,
        onGroup: alignment.group,
        onLock: locking.toggleLock,
        onZoomIn: canvasTransform.zoomIn,
        onZoomOut: canvasTransform.zoomOut,
        onZoomReset: canvasTransform.resetZoom,
        onUndo: () => {
            if (history.canUndo) {
                history.undo();
                setDebugInfo('Undo');
            }
        },
        onRedo: () => {
            if (history.canRedo) {
                history.redo();
                setDebugInfo('Redo');
            }
        },
    }, mounted);

    // Mouse wheel zoom listener
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            // Only zoom if Ctrl/Cmd is pressed
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();

                const container = canvasRef.current;
                if (!container) return;

                const rect = container.getBoundingClientRect();
                canvasTransform.zoomToPoint(e.clientX, e.clientY, -e.deltaY, rect);
            }
        };

        const container = canvasRef.current;
        if (container) {
            container.addEventListener('wheel', handleWheel, { passive: false });
            return () => container.removeEventListener('wheel', handleWheel);
        }
    }, [canvasTransform, canvasRef]);


    const sensors = useSensors(
        useSensor(MouseSensor, { activationConstraint: { distance: 5 } }),
        useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 5 } })
    );

    // Calculate floating toolbar position
    const toolbarPosition = useMemo(() => {
        if (multiSelect.selectedIds.length === 0 || dragState) return undefined;

        const selectedItems = items.filter(it => multiSelect.selectedIds.includes(it.id));
        if (selectedItems.length === 0) return undefined;

        // Calculate bounding box in canvas coordinates
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        selectedItems.forEach(item => {
            const width = 300; // Standard card width
            const height = 172; // Standard card height
            minX = Math.min(minX, item.x);
            minY = Math.min(minY, item.y);
            maxX = Math.max(maxX, item.x + width);
            maxY = Math.max(maxY, item.y + height);
        });

        // Calculate center of selection in canvas coordinates
        const centerX = (minX + maxX) / 2;
        const centerY = minY;

        // Convert to screen coordinates
        const { zoom, pan } = canvasTransform;
        const screenCenterX = centerX * zoom + pan.x;
        const screenCenterY = centerY * zoom + pan.y;

        // Add sidebar width offset (320px for sidebar)
        const sidebarWidth = 320;
        const left = screenCenterX + sidebarWidth;
        const top = screenCenterY - 80; // 80px above selection (reduced from 100 for better positioning)

        return {
            top: Math.max(80, top), // Clamp to prevent going off top screen
            left
        };
    }, [items, multiSelect.selectedIds, dragState, canvasTransform]);

    // Prevent hydration mismatch
    if (!mounted) return (
        <div className="h-screen w-full bg-gray-950 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
        </div>
    );

    // Handlers
    const handleDragStart = (event: DragStartEvent) => {
        setActiveDragData(event.active.data.current);
        setDebugInfo(`Dragging ${event.active.data.current?.label}...`);

        const sourceData = event.active.data.current;

        if (sourceData?.source === 'canvas') {
            // Existing canvas item
            const item = items.find(it => it.id === event.active.id);
            if (item) {
                setDragState({
                    id: item.id,
                    x: item.x,
                    y: item.y,
                    width: 300,
                    height: 172
                });
                // Store initial position for Shift-key axis locking
                lastDragUpdateRef.current = { x: item.x, y: item.y, time: Date.now() };
            }
        } else if (sourceData?.source === 'sidebar') {
            // New item from sidebar - initialize at cursor position
            // We'll update the position in handleDragMove
            setDragState({
                id: 'new-item-temp',
                x: 0,
                y: 0,
                width: 300,
                height: 172
            });
            lastDragUpdateRef.current = { x: 0, y: 0, time: Date.now() };
        }
    };

    const handleDragMove = (event: DragMoveEvent) => {
        const { active, delta } = event;
        const sourceData = active.data.current;
        const canvasRect = canvasRef.current?.getBoundingClientRect();
        if (!canvasRect) return;

        // Check if Shift key is pressed for axis locking
        const isShiftPressed = keys.shift;

        if (sourceData?.source === 'canvas') {
            // Moving existing canvas item
            const item = items.find(it => it.id === active.id);
            if (item) {
                // Delta is already in canvas coordinates (adjusted by zoom in dnd-kit)
                // But we need to account for zoom manually
                const { zoom } = canvasTransform;
                let newX = item.x + (delta.x / zoom);
                let newY = item.y + (delta.y / zoom);
                let currentLockedAxis: 'x' | 'y' | null = null;

                // Apply Shift-key axis locking
                if (isShiftPressed && lastDragUpdateRef.current) {
                    const initialX = lastDragUpdateRef.current.x;
                    const initialY = lastDragUpdateRef.current.y;
                    const deltaFromInitialX = Math.abs(newX - initialX);
                    const deltaFromInitialY = Math.abs(newY - initialY);

                    // Lock to the axis with larger movement
                    if (deltaFromInitialX > deltaFromInitialY) {
                        // Lock to X axis (horizontal movement only)
                        newY = initialY;
                        currentLockedAxis = 'x';
                    } else {
                        // Lock to Y axis (vertical movement only)
                        newX = initialX;
                        currentLockedAxis = 'y';
                    }
                }

                // Update locked axis state for visual indicator
                setLockedAxis(isShiftPressed ? currentLockedAxis : null);

                // Only update if position changed by at least 1px (prevent infinite loops)
                if (!dragState ||
                    dragState.id !== item.id ||
                    Math.abs(dragState.x - newX) >= 1 ||
                    Math.abs(dragState.y - newY) >= 1) {
                    setDragState({
                        id: item.id,
                        x: newX,
                        y: newY,
                        width: 300,
                        height: 172
                    });
                }
            }
        } else if (sourceData?.source === 'sidebar') {
            // Dragging new item from sidebar
            const droppedRect = active.rect.current.translated;
            if (droppedRect) {
                // Convert screen coordinates to canvas coordinates
                const { zoom, pan } = canvasTransform;
                const screenX = droppedRect.left - canvasRect.left;
                const screenY = droppedRect.top - canvasRect.top;

                // Convert to canvas coordinates by accounting for zoom and pan
                let newX = (screenX - pan.x) / zoom;
                let newY = (screenY - pan.y) / zoom;
                let currentLockedAxis: 'x' | 'y' | null = null;

                // Apply Shift-key axis locking
                if (isShiftPressed && lastDragUpdateRef.current) {
                    const initialX = lastDragUpdateRef.current.x;
                    const initialY = lastDragUpdateRef.current.y;
                    const deltaFromInitialX = Math.abs(newX - initialX);
                    const deltaFromInitialY = Math.abs(newY - initialY);

                    // Lock to the axis with larger movement
                    if (deltaFromInitialX > deltaFromInitialY) {
                        // Lock to X axis (horizontal movement only)
                        newY = initialY;
                        currentLockedAxis = 'x';
                    } else {
                        // Lock to Y axis (vertical movement only)
                        newX = initialX;
                        currentLockedAxis = 'y';
                    }
                }

                // Update locked axis state for visual indicator
                setLockedAxis(isShiftPressed ? currentLockedAxis : null);

                // Only update if position changed by at least 1px (prevent infinite loops)
                if (!dragState ||
                    dragState.id !== 'new-item-temp' ||
                    Math.abs(dragState.x - newX) >= 1 ||
                    Math.abs(dragState.y - newY) >= 1) {
                    setDragState({
                        id: 'new-item-temp',
                        x: newX,
                        y: newY,
                        width: 300,
                        height: 172
                    });
                }
            }
        }
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        setActiveDragData(null);
        setLockedAxis(null); // Clear axis lock indicator

        if (!over || over.id !== 'canvas-droppable') {
            setDebugInfo('Dropped outside canvas');
            setDragState(null); // Clear drag state on invalid drop
            return;
        }

        const canvasRect = canvasRef.current?.getBoundingClientRect();
        const sourceData = active.data.current;
        if (!sourceData) {
            setDragState(null); // Clear drag state
            return;
        }

        const droppedRect = active.rect.current.translated;

        // Convert screen coordinates to canvas coordinates
        const { zoom, pan } = canvasTransform;
        const screenX = droppedRect ? (droppedRect.left - (canvasRect?.left ?? 0)) : 100;
        const screenY = droppedRect ? (droppedRect.top - (canvasRect?.top ?? 0)) : 100;

        // Convert to canvas coordinates
        let rawX = (screenX - pan.x) / zoom;
        let rawY = (screenY - pan.y) / zoom;

        // Apply Shift-key axis locking if it was active
        if (keys.shift && lastDragUpdateRef.current) {
            const initialX = lastDragUpdateRef.current.x;
            const initialY = lastDragUpdateRef.current.y;
            const deltaFromInitialX = Math.abs(rawX - initialX);
            const deltaFromInitialY = Math.abs(rawY - initialY);

            // Lock to the axis with larger movement
            if (deltaFromInitialX > deltaFromInitialY) {
                // Lock to X axis (horizontal movement only)
                rawY = initialY;
            } else {
                // Lock to Y axis (vertical movement only)
                rawX = initialX;
            }
        }

        // Use snapped position from snap guides if available
        let finalX = rawX;
        let finalY = rawY;

        // Check if we have valid snapped positions
        const hasSnapX = typeof snappedX === 'number' && !isNaN(snappedX) && isFinite(snappedX);
        const hasSnapY = typeof snappedY === 'number' && !isNaN(snappedY) && isFinite(snappedY);

        if (snapGuides.length > 0 && hasSnapX && hasSnapY && !keys.shift) {
            // Snap guides have priority (but not when Shift is pressed for axis locking)
            finalX = snappedX;
            finalY = snappedY;
        }


        if (sourceData.source === 'sidebar') {
            // Check if it's a solution
            if (sourceData.type === 'solution') {
                const solution = solutionManager.solutions.find((s: Solution) => s.id === sourceData.entityId);
                if (!solution) return;

                // Create all products from the solution at their relative positions
                const newItems: CanvasItem[] = solution.products.map((productSnapshot: any, index: number) => ({
                    id: `item-${Date.now()}-${index}`,
                    entityId: productSnapshot.productId,
                    entityType: 'product' as const,
                    x: finalX + productSnapshot.relativeX,
                    y: finalY + productSnapshot.relativeY,
                    data: {
                        label: PRODUCTS.find(p => p.id === productSnapshot.productId)?.name || 'Product',
                        type: 'product',
                        entityId: productSnapshot.productId,
                        source: 'sidebar'
                    },
                    // Auto-initialize product config
                    productConfig: initializeProductConfig(productSnapshot.productId, canvasConfig)
                }));

                setItems(prev => [...prev, ...newItems]);
                multiSelect.selectMultiple(newItems.map(item => item.id));
                setDebugInfo(`Added solution "${solution.name}" with ${newItems.length} products`);
            } else {
                // Regular product/vendor/etc
                const newItem: CanvasItem = {
                    id: `item-${Date.now()}`,
                    entityId: sourceData.entityId,
                    entityType: sourceData.type,
                    x: finalX,
                    y: finalY,
                    data: sourceData,
                    // Auto-initialize product config for products
                    productConfig: sourceData.type === 'product'
                        ? initializeProductConfig(sourceData.entityId, canvasConfig)
                        : undefined
                };
                setItems(prev => [...prev, newItem]);
                multiSelect.selectMultiple([newItem.id]);
                setDebugInfo(`Added ${newItem.data.label}`);
            }
        } else if (sourceData.source === 'canvas') {
            const draggedItem = items.find(it => it.id === active.id);
            if (!draggedItem) return;

            // Don't allow moving locked items
            if (draggedItem.locked) {
                setDebugInfo('Item is locked');
                return;
            }

            // Check modifier keys from the actual drag event, not global state
            // This prevents false positives from stale key state
            const activatorEvent = event.activatorEvent as MouseEvent | KeyboardEvent | PointerEvent;
            // Only Ctrl key should trigger copy, not Alt
            const isCopying = ('ctrlKey' in activatorEvent && activatorEvent.ctrlKey);


            if (isCopying) {
                const newItemId = `item-${Date.now()}-${Math.random()}`;

                setItems(prev => {
                    const original = prev.find(it => it.id === active.id);
                    if (!original) return prev;

                    const newItem = {
                        ...original,
                        id: newItemId,
                        x: finalX,
                        y: finalY,
                        groupId: undefined // Remove from group when copying
                    };
                    return [...prev, newItem];
                });

                multiSelect.selectMultiple([newItemId]);
                setDebugInfo(`Copied item`);
            } else {
                // Calculate movement delta
                const deltaX = finalX - draggedItem.x;
                const deltaY = finalY - draggedItem.y;

                // Check if dragged item is part of multi-selection
                const isMultiSelected = multiSelect.selectedIds.includes(active.id as string) && multiSelect.selectedIds.length > 1;

                if (isMultiSelected) {
                    // Move all selected items together
                    setItems(prev => prev.map(it => {
                        if (multiSelect.selectedIds.includes(it.id) && !it.locked) {
                            return {
                                ...it,
                                x: it.x + deltaX,
                                y: it.y + deltaY
                            };
                        }
                        return it;
                    }));
                    setDebugInfo(`Moved ${multiSelect.selectedIds.length} selected items`);
                } else if (draggedItem.groupId) {
                    // Move all items in the same group
                    setItems(prev => prev.map(it => {
                        if (it.groupId === draggedItem.groupId && !it.locked) {
                            return {
                                ...it,
                                x: it.x + deltaX,
                                y: it.y + deltaY
                            };
                        }
                        return it;
                    }));
                    setDebugInfo(`Moved group`);
                } else {
                    // Move single item - USE FINAL POSITION (includes snapping)
                    setItems(prev => prev.map(it => {
                        if (it.id === active.id) {
                            return {
                                ...it,
                                x: finalX,  // ✅ FIXED - Use snapped position
                                y: finalY   // ✅ FIXED - Use snapped position
                            };
                        }
                        return it;
                    }));
                    setDebugInfo(`Moved item to X:${Math.round(finalX)} Y:${Math.round(finalY)}`);
                }
            }
        }

        // Clear drag state after all operations are complete
        setDragState(null);
    };


    // Filters
    const filteredProducts = PRODUCTS.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesProp = selectedProposition === 'all' || p.propositionId === selectedProposition;
        return matchesSearch && matchesProp;
    });

    const selectedItem = multiSelect.selectedIds.length === 1
        ? items.find(it => it.id === multiSelect.selectedIds[0])
        : undefined;
    const getVendorName = (vendorId: string) => VENDORS.find(v => v.id === vendorId)?.name;

    return (
        <DndContext
            id="qanvas-dnd-root"
            sensors={sensors}
            onDragStart={handleDragStart}
            onDragMove={handleDragMove}
            onDragEnd={handleDragEnd}
            collisionDetection={customCollisionStrategy}
        >
            <div
                className="flex h-screen w-full overflow-hidden"
                style={{
                    backgroundColor: 'var(--color-background)',
                    color: 'var(--color-text)'
                }}
                onContextMenu={contextMenuOps.handleContextMenu}
            >
                <CanvasSidebar
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    selectedProposition={selectedProposition}
                    onPropositionChange={setSelectedProposition}
                    propositions={PROPOSITIONS}
                    filteredProducts={filteredProducts}
                    solutions={solutionManager.solutions}
                    vendors={VENDORS}
                    getVendorName={getVendorName}
                    canvasConfig={canvasConfig}
                    onConfigChange={setCanvasConfig}
                />

                <SnapshotControls
                    snapshots={snapshotManager.snapshots}
                    currentSnapshotId={snapshotManager.currentSnapshotId || null}
                    showCreateDialog={snapshotManager.showCreateDialog}
                    onCreateSnapshot={snapshotManager.createSnapshot}
                    onLoad={snapshotManager.loadSnapshot}
                    onDelete={snapshotManager.deleteSnapshot}
                    onCompare={snapshotManager.compareWithCurrent}
                    onOpenCreateDialog={snapshotManager.openCreateDialog}
                    onCloseCreateDialog={snapshotManager.closeCreateDialog}
                />

                <CanvasWorkspace
                    canvasRef={canvasRef}
                    items={items}
                    selectedIds={multiSelect.selectedIds}
                    debugInfo={debugInfo}
                    vendors={VENDORS}
                    propositions={PROPOSITIONS}
                    products={PRODUCTS}
                    multiSelect={multiSelect}
                    snapGuides={snapGuides}
                    activeDragRect={dragState}
                    activeDragItemId={activeDragData?.id || null}
                    lockedAxis={lockedAxis}
                    isShiftPressed={keys.shift}
                    canvasTransform={canvasTransform}
                    zoom={canvasTransform.zoom}
                    onZoomIn={canvasTransform.zoomIn}
                    onZoomOut={canvasTransform.zoomOut}
                    onResetZoom={canvasTransform.resetZoom}
                    isDark={isDark}
                    onToggleTheme={toggleTheme}
                    onPan={canvasTransform.setPan}
                    colorSchemeEnabled={colorSchemeEnabled}
                    onToggleColorScheme={() => setColorSchemeEnabled(!colorSchemeEnabled)}
                    comparisonResult={snapshotManager.showComparison && snapshotManager.comparisonData ? snapshotManager.comparisonData.comparison : null}
                    onClearItems={() => {
                        setItems([]);
                        multiSelect.clearSelection();
                    }}
                />

                {contextMenuOps.contextMenu.visible && (
                    <ContextMenu
                        x={contextMenuOps.contextMenu.x}
                        y={contextMenuOps.contextMenu.y}
                        onClose={contextMenuOps.closeContextMenu}
                        actions={contextMenuOps.contextMenuActions}
                        selectedCount={multiSelect.selectedIds.length}
                    />
                )}

                <AlignmentToolbar
                    selectedCount={multiSelect.selectedIds.length}
                    onAlign={alignment.align}
                    onDistribute={alignment.distribute}
                    onGroup={alignment.group}
                    onLock={locking.toggleLock}
                    onCreateSolution={solutionManager.createSolution}
                    isGrouped={multiSelect.selectedIds.length > 0 && items.filter(it => multiSelect.selectedIds.includes(it.id)).every(it => it.groupId)}
                    isLocked={multiSelect.selectedIds.length > 0 && items.filter(it => multiSelect.selectedIds.includes(it.id)).every(it => it.locked)}
                    position={toolbarPosition}
                />

                <AxisLockIndicator
                    isActive={keys.shift && !!dragState}
                    axis={lockedAxis}
                />

                <PropertiesPanel
                    selectedItem={selectedItem}
                    selectedCount={multiSelect.selectedCount}
                    propositions={PROPOSITIONS}
                    vendors={VENDORS}
                    products={PRODUCTS}
                    colorSchemeEnabled={colorSchemeEnabled}
                    canvasConfig={canvasConfig}
                    onMetricChange={metricManager.handleMetricChange}
                    onMetricReset={metricManager.handleMetricReset}
                />
            </div>

            {mounted && createPortal(
                <DragOverlay dropAnimation={null}>
                    {activeDragData ? (
                        activeDragData.source === 'canvas' && multiSelect.selectedIds.length > 1 && multiSelect.selectedIds.includes(activeDragData.id) ? (
                            // Multi-select drag: show all selected items
                            <div style={{ position: 'relative' }}>
                                {multiSelect.selectedIds.map((selectedId, index) => {
                                    const selectedItem = items.find(i => i.id === selectedId);
                                    if (!selectedItem) return null;

                                    const draggedItem = items.find(i => i.id === activeDragData.id);
                                    if (!draggedItem) return null;

                                    // Calculate offset from dragged item
                                    const offsetX = selectedItem.x - draggedItem.x;
                                    const offsetY = selectedItem.y - draggedItem.y;

                                    return (
                                        <div
                                            key={selectedId}
                                            style={{
                                                position: 'absolute',
                                                left: offsetX,
                                                top: offsetY,
                                            }}
                                        >
                                            <CanvasCardVisual
                                                item={selectedItem}
                                                isSelected={true}
                                                style={{
                                                    transform: `scale(${canvasTransform.zoom * 1.05})`,
                                                    zIndex: 100 + index,
                                                    cursor: 'grabbing',
                                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                                                    opacity: selectedId === activeDragData.id ? 1 : 0.7
                                                }}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            // Single item drag
                            <CanvasCardVisual
                                item={activeDragData.source === 'canvas'
                                    ? (items.find(i => i.id === activeDragData.id) || activeDragData as CanvasItem)
                                    : {
                                        id: 'temp-drag',
                                        x: 0,
                                        y: 0,
                                        entityId: activeDragData.entityId,
                                        entityType: activeDragData.type,
                                        data: activeDragData,
                                        locked: false
                                    } as CanvasItem
                                }
                                isSelected={true}
                                style={{
                                    transform: `scale(${canvasTransform.zoom * 1.05})`,
                                    zIndex: 100,
                                    cursor: 'grabbing',
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' // Enhanced shadow for lift effect
                                }}
                            />
                        )
                    ) : null}
                </DragOverlay>,
                document.body
            )}

            {/* Solution Dialog */}
            <SolutionDialog
                isOpen={solutionManager.showSolutionDialog}
                onClose={solutionManager.closeSolutionDialog}
                onSave={solutionManager.saveSolution}
                selectedProducts={solutionManager.getSelectedProducts()}
            />

            {/* Comparison View */}
            {snapshotManager.showComparison && snapshotManager.comparisonData && (
                <ComparisonView
                    comparison={snapshotManager.comparisonData.comparison}
                    fromName={snapshotManager.comparisonData.fromName}
                    toName={snapshotManager.comparisonData.toName}
                    onClose={snapshotManager.closeComparison}
                />
            )}
        </DndContext>
    );
}
