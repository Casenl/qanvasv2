"use client";

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
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
} from "@dnd-kit/core";
import { createPortal } from "react-dom";
import { Package, Layout } from "lucide-react"; // Combined imports for lucide-react

import {
  PropositionType,
  Proposition,
  Vendor,
  Product,
  Solution,
  CanvasItem,
} from "@/lib/types";
import { CanvasSidebar } from "../CanvasSidebar";
import { CanvasWorkspace } from "../CanvasWorkspace";
import { CanvasCardVisual } from "../CanvasItemCard";
import { PropertiesPanel } from "../PropertiesPanel";
import { useMultiSelect } from "@/hooks/useMultiSelect";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";
import { useSnapGuides } from "@/hooks/useSnapGuides";
import { useModifierKeys } from "@/hooks/useModifierKeys";
import { useHistory } from "@/hooks/useHistory";
import { useDragHandlers } from "@/hooks/useDragHandlers";
import { FloatingToolbar } from "../toolbar/FloatingToolbar";
import { ContextMenu } from "../controls/ContextMenu";
import { AlignmentToolbar } from "../controls/AlignmentToolbar";
import { ThemeToggle } from "../controls/ThemeToggle";
import { AxisLockIndicator } from "../controls/AxisLockIndicator";
import { SnapshotControls } from "../controls/SnapshotControls";
import { alignItems, distributeItems } from "@/lib/utils/alignment";
import { updateItemStyle } from "@/lib/utils/itemStyle";
import { getContextMenuActions } from "@/lib/utils/contextMenuActions";
import { useTheme } from "@/hooks/useTheme";
import { Layers, AlignLeft, Grid } from "lucide-react"; // Remaining lucide-react imports
import { useCanvasDataSource } from "@/hooks/useCanvasDataSource";
import { useItemNudging } from "@/hooks/useItemNudging";
import { useItemLocking } from "@/hooks/useItemLocking";
import { useAlignment } from "@/hooks/useAlignment";
import { useClipboard } from "@/hooks/useClipboard";
import { useContextMenu } from "@/hooks/useContextMenu";
import { useCanvasTransform } from "@/hooks/useCanvasTransform";
import { useSnapshotManager } from "@/hooks/useSnapshotManager";
import { useSolutionManager } from "@/hooks/useSolutionManager";
import { useMetricManager } from "@/hooks/useMetricManager";
import { useToolbar } from "@/hooks/useToolbar";
import { useDrawingMode } from "@/hooks/useDrawingMode";
import { useFrameContainment } from "@/hooks/useFrameContainment";
import { useLayerOperations } from "@/hooks/useLayerOperations";
import { useFrameExport } from "@/hooks/useFrameExport";
import { ZoomControls } from "../controls/ZoomControls";
import { SolutionDialog } from "../dialogs/SolutionDialog";
import {
  CanvasConfiguration,
  DEFAULT_CANVAS_CONFIG,
} from "@/lib/types/canvasConfig";
import {
  initializeProductConfig,
  updateMetricManually,
  resetMetricToInherited,
  syncInheritedMetrics,
} from "@/lib/types/productConfig";
import {
  CanvasSnapshot,
  createSnapshot,
  compareSnapshots,
  SnapshotComparison,
} from "@/lib/types/snapshot";
import { ComparisonView } from "../ComparisonView";

// Custom collision strategy
const customCollisionStrategy: CollisionDetection = (args) => {
  const pointerCollisions = pointerWithin(args);
  if (pointerCollisions.length > 0) return pointerCollisions;
  const rectCollisions = rectIntersection(args);
  return rectCollisions.filter((c) => c.id === "canvas-droppable");
};

export function CanvasBoard() {
  // Catalog data source (mock today; Firebase-backed after monorepo absorption — see
  // useCanvasDataSource). Aliased to the existing uppercase names to avoid churn.
  const {
    propositions: PROPOSITIONS,
    vendors: VENDORS,
    products: PRODUCTS,
    solutions: SOLUTIONS,
  } = useCanvasDataSource();

  // State with history for undo/redo
  const history = useHistory<CanvasItem[]>([]);
  const items = history.state;
  const setItems = history.setState;
  const setItemsWithoutHistory = history.setStateWithoutHistory;
  const commitItemsToHistory = history.commitToHistory;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProposition, setSelectedProposition] = useState<
    PropositionType | "all"
  >("all");
  const [mounted, setMounted] = useState(false);
  const [debugInfo, setDebugInfo] = useState<string>("Ready");

  const canvasRef = useRef<HTMLDivElement>(null);

  // Track if we're currently transforming
  const isTransformingRef = useRef(false);

  // Theme hook
  const { theme, toggleTheme, isDark } = useTheme();

  // Color scheme toggle
  const [colorSchemeEnabled, setColorSchemeEnabled] = useState(true);

  // Canvas configuration state
  const [canvasConfig, setCanvasConfig] = useState<CanvasConfiguration>(
    DEFAULT_CANVAS_CONFIG,
  );

  // Track previous config to avoid unnecessary syncs
  const prevCanvasConfigRef = useRef<CanvasConfiguration>(
    DEFAULT_CANVAS_CONFIG,
  );

  // Multi-select hook
  const multiSelect = useMultiSelect();

  // Modifier keys
  const keys = useModifierKeys();

  // Calculate snap guides based on current drag state
  // We need a temporary drag state for initial calculation
  const [tempDragState, setTempDragState] = useState<{
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);

  // Only exclude items that are being dragged together (multi-select drag)
  const itemsBeingDragged = tempDragState?.id
    ? multiSelect.selectedIds.includes(tempDragState.id) &&
      multiSelect.selectedIds.length > 1
      ? multiSelect.selectedIds
      : [tempDragState.id]
    : [];

  const {
    x: snappedX,
    y: snappedY,
    guides: snapGuides,
  } = useSnapGuides(
    tempDragState?.id ?? null,
    tempDragState
      ? {
          x: tempDragState.x,
          y: tempDragState.y,
          width: tempDragState.width,
          height: tempDragState.height,
        }
      : null,
    items,
    true,
    itemsBeingDragged,
  );

  // Canvas transform hook (needed for drag handlers)
  const canvasTransform = useCanvasTransform({
    minZoom: 0.1,
    maxZoom: 4.0,
    zoomStep: 0.1,
    initialZoom: 1.0,
  });

  // Solution management hook (needed for drag handlers)
  const solutionManager = useSolutionManager({
    items,
    setItems,
    selectedIds: new Set(multiSelect.selectedIds),
    setDebugInfo,
    initialSolutions: SOLUTIONS,
  });

  // Drag handlers hook - handles all drag & drop logic with snap values
  const dragHandlers = useDragHandlers({
    items,
    setItems,
    canvasRef,
    canvasTransform,
    multiSelect: {
      selectedIds: new Set(multiSelect.selectedIds),
      selectMultiple: multiSelect.selectMultiple,
    },
    snappedX,
    snappedY,
    snapGuides,
    keys,
    canvasConfig,
    solutionManager,
    products: PRODUCTS,
    setDebugInfo,
  });

  // Sync temp drag state with actual drag state for snap calculations
  useEffect(() => {
    if (dragHandlers.dragState) {
      setTempDragState(dragHandlers.dragState);
    } else {
      setTempDragState(null);
    }
  }, [dragHandlers.dragState]);

  // Item nudging hook
  const nudging = useItemNudging({
    items,
    setItems,
    selectedIds: multiSelect.selectedIds,
  });

  // Item locking hook
  const locking = useItemLocking({
    items,
    setItems,
    selectedIds: multiSelect.selectedIds,
    setDebugInfo,
  });

  // Alignment hook
  const alignment = useAlignment({
    items,
    setItems,
    selectedIds: multiSelect.selectedIds,
    setDebugInfo,
  });

  // Clipboard hook
  const clipboardOps = useClipboard({
    items,
    setItems,
    selectedIds: multiSelect.selectedIds,
    selectMultiple: multiSelect.selectMultiple,
    clearSelection: multiSelect.clearSelection,
    setDebugInfo,
  });

  // Context menu hook
  const contextMenuOps = useContextMenu({
    items,
    setItems,
    selectedIds: new Set(multiSelect.selectedIds),
    clearSelection: multiSelect.clearSelection,
    setDebugInfo,
    clipboardCopy: clipboardOps.copy,
  });

  // Snapshot management hook
  const snapshotManager = useSnapshotManager({
    items,
    canvasConfig,
    setItems,
    setCanvasConfig,
    setDebugInfo,
  });

  // Metric management hook
  const metricManager = useMetricManager({
    items,
    setItems,
    canvasConfig,
    setDebugInfo,
  });

  // Toolbar hook (for drawing tools)
  const toolbar = useToolbar();

  // Drawing mode hook (for creating shapes, text, sticky notes)
  const drawingMode = useDrawingMode({
    items,
    setItems,
    activeTool: toolbar.activeTool,
    canvasRef,
    zoom: canvasTransform.zoom,
    pan: canvasTransform.pan,
    setDebugInfo,
    onToolReset: () => toolbar.resetToSelect(),
  });

  // Frame containment hook (for managing items within frames)
  const frameContainment = useFrameContainment(items);

  // Auto-update containedItemIds for all frames when items move
  useEffect(() => {
    // Skip the O(frames×items) recompute during an active drag/transform — items
    // mutate up to 60×/sec then. Containment settles on the gesture-end commit
    // (which re-runs this effect with no gesture in progress) and still updates
    // immediately for non-gesture mutations (paste/delete/nudge/undo).
    if (dragHandlers.dragState || isTransformingRef.current) return;

    const frames = items.filter((item) => item.entityType === "frame");

    if (frames.length === 0) return;

    let needsUpdate = false;
    const updates: { id: string; containedItemIds: string[] }[] = [];

    frames.forEach((frame) => {
      const currentContainedIds = frame.data?.containedItemIds || [];
      const actualContainedIds = frameContainment.getContainedItemIds(frame);

      // Check if the contained items have changed
      const hasChanged =
        currentContainedIds.length !== actualContainedIds.length ||
        !currentContainedIds.every((id: string) =>
          actualContainedIds.includes(id),
        );

      if (hasChanged) {
        needsUpdate = true;
        updates.push({
          id: frame.id,
          containedItemIds: actualContainedIds,
        });
      }
    });

    if (needsUpdate) {
      setItemsWithoutHistory((prevItems) =>
        prevItems.map((item) => {
          const update = updates.find((u) => u.id === item.id);
          if (update) {
            return {
              ...item,
              data: {
                ...item.data,
                containedItemIds: update.containedItemIds,
              },
            };
          }
          return item;
        }),
      );
    }
  }, [items, frameContainment, setItemsWithoutHistory, dragHandlers.dragState]);

  // Frame-aware lock handler
  const handleFrameLock = useCallback(() => {
    const selectedItems = items.filter((item) =>
      multiSelect.selectedIds.includes(item.id),
    );
    const hasFrame = selectedItems.some((item) => item.entityType === "frame");

    if (
      hasFrame &&
      selectedItems.length === 1 &&
      selectedItems[0].entityType === "frame"
    ) {
      // Single frame selected - lock/unlock frame and its contents
      const frame = selectedItems[0];
      const isCurrentlyLocked = frame.locked;

      setItems((prev) =>
        prev.map((item) => {
          // Lock/unlock the frame itself
          if (item.id === frame.id) {
            return { ...item, locked: !isCurrentlyLocked };
          }

          // Lock/unlock all contained items
          const containedIds = frame.data?.containedItemIds || [];
          if (containedIds.includes(item.id)) {
            return { ...item, locked: !isCurrentlyLocked };
          }

          return item;
        }),
      );

      setDebugInfo(
        `Frame and ${frame.data?.containedItemIds?.length || 0} items ${isCurrentlyLocked ? "unlocked" : "locked"}`,
      );
    } else {
      // Normal lock behavior for non-frame items
      locking.toggleLock();
    }
  }, [items, multiSelect.selectedIds, setItems, locking, setDebugInfo]);

  // Layer operations hook (z-order management)
  const layerOps = useLayerOperations({
    items,
    setItems,
    selectedIds: multiSelect.selectedIds,
    setDebugInfo,
  });

  // Frame export hook
  const frameExport = useFrameExport({
    items,
    setDebugInfo,
  });

  // Sync inherited metrics when canvas config changes
  // This also ADDS new metrics if they're set in canvas config after product was placed
  // Only runs when config VALUES actually change (not on every render)
  useEffect(() => {
    // Check if config actually changed
    const configChanged =
      JSON.stringify(prevCanvasConfigRef.current.coreMetrics) !==
      JSON.stringify(canvasConfig.coreMetrics);

    if (!configChanged) return;

    // Update ref
    prevCanvasConfigRef.current = canvasConfig;

    // Sync metrics
    setItems((prev) =>
      prev.map((item) => {
        if (!item.productConfig || item.entityType !== "product") return item;

        return {
          ...item,
          productConfig: syncInheritedMetrics(
            item.productConfig,
            canvasConfig,
            item.entityId,
          ),
        };
      }),
    );
  }, [canvasConfig]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Keyboard shortcuts
  useKeyboardShortcuts(
    {
      onSelectAll: () => multiSelect.selectAll(items.map((i) => i.id)),
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
      onLock: handleFrameLock,
      onBringToFront: layerOps.bringToFront,
      onSendToBack: layerOps.sendToBack,
      onBringForward: layerOps.bringForward,
      onSendBackward: layerOps.sendBackward,
      onZoomIn: canvasTransform.zoomIn,
      onZoomOut: canvasTransform.zoomOut,
      onZoomReset: canvasTransform.resetZoom,
      onUndo: () => {
        if (history.canUndo) {
          history.undo();
          setDebugInfo("Undo");
        }
      },
      onRedo: () => {
        if (history.canRedo) {
          history.redo();
          setDebugInfo("Redo");
        }
      },
    },
    mounted,
  );

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
      container.addEventListener("wheel", handleWheel, { passive: false });
      return () => container.removeEventListener("wheel", handleWheel);
    }
  }, [canvasTransform, canvasRef]);

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 250, tolerance: 5 },
    }),
  );

  // Calculate floating toolbar position
  const toolbarPosition = useMemo(() => {
    if (multiSelect.selectedIds.length === 0 || dragHandlers.dragState)
      return undefined;

    const selectedItems = items.filter((it) =>
      multiSelect.selectedIds.includes(it.id),
    );
    if (selectedItems.length === 0) return undefined;

    // Calculate bounding box in canvas coordinates
    let minX = Infinity,
      minY = Infinity,
      maxX = -Infinity,
      maxY = -Infinity;
    selectedItems.forEach((item) => {
      // Get actual item dimensions
      let width = 300; // Default for product/vendor/solution cards
      let height = 172;

      if (item.data && typeof item.data.width === "number") {
        width = item.data.width;
        height = item.data.height || width;
      }

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
      left,
    };
  }, [items, multiSelect.selectedIds, dragHandlers.dragState, canvasTransform]);

  // Prevent hydration mismatch
  if (!mounted)
    return (
      <div className="h-screen w-full bg-gray-950 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
      </div>
    );

  // Filters
  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesSearch = p.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesProp =
      selectedProposition === "all" || p.propositionId === selectedProposition;
    return matchesSearch && matchesProp;
  });

  const selectedItem =
    multiSelect.selectedIds.length === 1
      ? items.find((it) => it.id === multiSelect.selectedIds[0])
      : undefined;
  const getVendorName = (vendorId: string) =>
    VENDORS.find((v) => v.id === vendorId)?.name;

  return (
    <DndContext
      id="qanvas-dnd-root"
      sensors={sensors}
      onDragStart={dragHandlers.handleDragStart}
      onDragMove={dragHandlers.handleDragMove}
      onDragEnd={dragHandlers.handleDragEnd}
      collisionDetection={customCollisionStrategy}
    >
      <div
        className="flex h-screen w-full overflow-hidden"
        style={{
          backgroundColor: "var(--color-background)",
          color: "var(--color-text)",
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

        {/* Floating Canvas Toolbar */}
        <FloatingToolbar
          toolbar={toolbar}
          onToolChange={(tool) => {
            setDebugInfo(`Tool: ${tool}`);
          }}
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
          activeDragRect={dragHandlers.activeDragRect}
          activeDragItemId={dragHandlers.activeDragData?.id || null}
          lockedAxis={dragHandlers.lockedAxis}
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
          comparisonResult={
            snapshotManager.showComparison && snapshotManager.comparisonData
              ? snapshotManager.comparisonData.comparison
              : null
          }
          onClearItems={() => {
            setItems([]);
            multiSelect.clearSelection();
          }}
          drawingMode={drawingMode}
          onItemUpdate={(itemId, updates) => {
            if (isTransformingRef.current) {
              // During transform: silent update (no history)
              setItemsWithoutHistory((prev) =>
                prev.map((item) =>
                  item.id === itemId ? { ...item, ...updates } : item,
                ),
              );
            } else {
              // Normal update: add to history
              setItems((prev) =>
                prev.map((item) =>
                  item.id === itemId ? { ...item, ...updates } : item,
                ),
              );
            }
          }}
          onTransformStart={() => {
            isTransformingRef.current = true;
          }}
          onTransformEnd={() => {
            isTransformingRef.current = false;
            // Commit the transform to history
            commitItemsToHistory();
          }}
          onItemAdd={(newItem) => {
            setItems((prev) => [...prev, newItem]);
            setDebugInfo(`Added ${newItem.entityType} via drag & drop`);
          }}
          onToolReset={() => {
            toolbar.resetToSelect();
          }}
        />

        {contextMenuOps.contextMenu.visible && (
          <ContextMenu
            x={contextMenuOps.contextMenu.x}
            y={contextMenuOps.contextMenu.y}
            onClose={contextMenuOps.closeContextMenu}
            actions={getContextMenuActions({
              baseActions: contextMenuOps.contextMenuActions,
              selectedIds: multiSelect.selectedIds,
              items,
              frameExport,
              layerOps,
            })}
            selectedCount={multiSelect.selectedIds.length}
          />
        )}

        <AlignmentToolbar
          selectedCount={multiSelect.selectedIds.length}
          onAlign={alignment.align}
          onDistribute={alignment.distribute}
          onGroup={alignment.group}
          onLock={handleFrameLock}
          onCreateSolution={solutionManager.createSolution}
          isGrouped={
            multiSelect.selectedIds.length > 0 &&
            items
              .filter((it) => multiSelect.selectedIds.includes(it.id))
              .every((it) => it.groupId)
          }
          isLocked={
            multiSelect.selectedIds.length > 0 &&
            items
              .filter((it) => multiSelect.selectedIds.includes(it.id))
              .every((it) => it.locked)
          }
          selectedItems={items.filter((it) =>
            multiSelect.selectedIds.includes(it.id),
          )}
          onStyleChange={(property, value) => {
            // Update for all selected stylable items (mapping lives in updateItemStyle)
            setItems((prev) =>
              prev.map((item) =>
                multiSelect.selectedIds.includes(item.id)
                  ? updateItemStyle(item, property, value)
                  : item,
              ),
            );
            setDebugInfo(
              `Updated ${property} for ${multiSelect.selectedIds.length} items`,
            );
          }}
          position={toolbarPosition}
        />

        <AxisLockIndicator
          isActive={keys.shift && !!dragHandlers.dragState}
          axis={dragHandlers.lockedAxis}
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

      {mounted &&
        createPortal(
          <DragOverlay dropAnimation={null}>
            {dragHandlers.activeDragData ? (
              dragHandlers.activeDragData.source === "canvas" &&
              multiSelect.selectedIds.length > 1 &&
              multiSelect.selectedIds.includes(
                dragHandlers.activeDragData.id,
              ) ? (
                // Multi-select drag: show all selected items
                <div style={{ position: "relative" }}>
                  {multiSelect.selectedIds.map((selectedId, index) => {
                    const selectedItem = items.find((i) => i.id === selectedId);
                    if (!selectedItem) return null;

                    const draggedItem = items.find(
                      (i) => i.id === dragHandlers.activeDragData.id,
                    );
                    if (!draggedItem) return null;

                    // Calculate offset from dragged item
                    const offsetX = selectedItem.x - draggedItem.x;
                    const offsetY = selectedItem.y - draggedItem.y;

                    return (
                      <div
                        key={selectedId}
                        style={{
                          position: "absolute",
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
                            cursor: "grabbing",
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                            opacity:
                              selectedId === dragHandlers.activeDragData.id
                                ? 1
                                : 0.7,
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              ) : (
                // Single item drag
                <CanvasCardVisual
                  item={
                    dragHandlers.activeDragData.source === "canvas"
                      ? items.find(
                          (i) => i.id === dragHandlers.activeDragData.id,
                        ) || (dragHandlers.activeDragData as CanvasItem)
                      : ({
                          id: "temp-drag",
                          x: 0,
                          y: 0,
                          entityId: dragHandlers.activeDragData.entityId,
                          entityType: dragHandlers.activeDragData.type,
                          data: dragHandlers.activeDragData,
                          locked: false,
                        } as CanvasItem)
                  }
                  isSelected={true}
                  style={{
                    transform: `scale(${canvasTransform.zoom * 1.05})`,
                    zIndex: 100,
                    cursor: "grabbing",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", // Enhanced shadow for lift effect
                  }}
                />
              )
            ) : null}
          </DragOverlay>,
          document.body,
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
