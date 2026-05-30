import { useState, useCallback, useRef } from 'react';
import { CanvasItem } from '@/lib/types';
import { calculateSnapGuides, SnapGuide } from './useSnapGuides';

// Default footprint for items without explicit dimensions (product/vendor/solution cards).
function getItemDims(item: CanvasItem): { width: number; height: number } {
  if (item.data && typeof item.data.width === 'number') {
    return {
      width: item.data.width,
      height: typeof item.data.height === 'number' ? item.data.height : item.data.width,
    };
  }
  return { width: 300, height: 172 };
}

interface TransformState {
  isTransforming: boolean;
  type: 'resize' | 'rotate' | 'move';
  handle: string | null; // 'nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w', 'rotate'
  startX: number;
  startY: number;
  startItemX: number;
  startItemY: number;
  startWidth: number;
  startHeight: number;
  startRotation: number;
  centerX: number;
  centerY: number;
  initialSelections: Record<string, { x: number; y: number }>;
  duplicatedItems?: CanvasItem[]; // Items created during Ctrl+Shift+drag
  isDuplicating?: boolean; // Flag to track if we're in duplication mode
  // --- Group (multi-select) transform state ---
  isGroup?: boolean;
  groupCenterCanvasX?: number; // group center in canvas coords (rotation pivot)
  groupCenterCanvasY?: number;
  anchorX?: number; // resize anchor (opposite corner) in canvas coords
  anchorY?: number;
  startCornerX?: number; // dragged corner start position in canvas coords
  startCornerY?: number;
  // Initial full state of every member of the group transform
  initialFull?: Record<string, { x: number; y: number; width: number; height: number; rotation: number }>;
}

interface UseTransformProps {
  items: CanvasItem[];
  selectedIds: string[];
  snapEnabled?: boolean;
  onSnap?: (guides: SnapGuide[]) => void;
  onUpdate: (id: string, updates: Partial<CanvasItem> & { data?: any }) => void;
  onItemAdd?: (item: CanvasItem) => void; // For duplicating items
  onTransformStart?: () => void;
  onTransformEnd?: () => void;
  zoom: number;
  pan: { x: number; y: number };
  canvasRef: React.RefObject<HTMLDivElement | null>;
}

export function useTransform({
  items,
  selectedIds,
  snapEnabled = true,
  onSnap,
  onUpdate,
  onItemAdd,
  onTransformStart,
  onTransformEnd,
  zoom,
  pan,
  canvasRef,
}: UseTransformProps) {
  const [transformState, setTransformState] = useState<TransformState | null>(null);
  const [lockedAxis, setLockedAxis] = useState<'x' | 'y' | null>(null);
  const activeItemRef = useRef<CanvasItem | null>(null);

  const startTransform = useCallback(
    (e: React.MouseEvent, item: CanvasItem, type: 'resize' | 'rotate' | 'move', handle: string | null) => {
      // Don't allow transforming locked items
      if (item.locked) return;

      e.stopPropagation();
      // Don't prevent default for move, so click events can still fire if no drag occurs
      if (type !== 'move') {
        e.preventDefault();
      }

      if (type === 'resize' && (!item.data || typeof item.data.width !== 'number')) return;

      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;

      // Calculate center point in screen coordinates for rotation
      // Item x/y are top-left in canvas coordinates
      const itemScreenX = item.x * zoom + pan.x + rect.left;
      const itemScreenY = item.y * zoom + pan.y + rect.top;
      const width = (item.data?.width || 0) * zoom;
      const height = (item.data?.height || 0) * zoom;
      const centerX = itemScreenX + width / 2;
      const centerY = itemScreenY + height / 2;

      const initialSelections: Record<string, { x: number; y: number }> = {};

      // Determine all items involved in this transformation
      const movingIds = new Set<string>();

      // 1. Include verified selection
      if (selectedIds) {
        selectedIds.forEach((id) => movingIds.add(id));
      }

      // 2. Always include the item being interacted with
      movingIds.add(item.id);

      // 3. Find all groups involved
      const involvedGroups = new Set<string>();
      items.forEach((it) => {
        if (movingIds.has(it.id) && it.groupId) {
          involvedGroups.add(it.groupId);
        }
      });

      // 4. Add all members of those groups
      if (involvedGroups.size > 0) {
        items.forEach((it) => {
          if (it.groupId && involvedGroups.has(it.groupId)) {
            movingIds.add(it.id);
          }
        });
      }

      // 5. Add contained items of frames to moving set
      const containedItemsToMove = new Set<string>();
      movingIds.forEach((id) => {
        const frameItem = items.find((i) => i.id === id);
        if (frameItem?.entityType === 'frame' && frameItem.data?.containedItemIds) {
          frameItem.data.containedItemIds.forEach((containedId: string) => {
            containedItemsToMove.add(containedId);
          });
        }
      });

      // 6. Capture initial positions (including contained items)
      items.forEach((it) => {
        if (movingIds.has(it.id) || containedItemsToMove.has(it.id)) {
          initialSelections[it.id] = { x: it.x, y: it.y };
        }
      });

      setTransformState({
        isTransforming: true,
        type,
        handle,
        startX: e.clientX,
        startY: e.clientY,
        startItemX: item.x,
        startItemY: item.y,
        startWidth: item.data?.width || 0,
        startHeight: item.data?.height || 0,
        startRotation: item.rotation || 0,
        centerX,
        centerY,
        initialSelections,
      });

      activeItemRef.current = item;
      onTransformStart?.();
    },
    [zoom, pan, canvasRef, items, selectedIds, onTransformStart]
  );

  // Start a rigid-body transform (rotate / proportional resize) of the whole
  // multi-selection from the group bounding-box handles.
  const startGroupTransform = useCallback(
    (e: React.MouseEvent, type: 'resize' | 'rotate', handle: string) => {
      e.stopPropagation();
      e.preventDefault();

      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;

      // Expand selection to whole groups + frame-contained items.
      const movingIds = new Set<string>(selectedIds);
      const involvedGroups = new Set<string>();
      items.forEach((it) => {
        if (movingIds.has(it.id) && it.groupId) involvedGroups.add(it.groupId);
      });
      if (involvedGroups.size > 0) {
        items.forEach((it) => {
          if (it.groupId && involvedGroups.has(it.groupId)) movingIds.add(it.id);
        });
      }
      movingIds.forEach((id) => {
        const fr = items.find((i) => i.id === id);
        if (fr?.entityType === 'frame' && fr.data?.containedItemIds) {
          fr.data.containedItemIds.forEach((c: string) => movingIds.add(c));
        }
      });

      const movers = items.filter((it) => movingIds.has(it.id) && !it.locked);
      if (movers.length === 0) return;

      // Axis-aligned bounding box of the movers (canvas coords).
      let minX = Infinity,
        minY = Infinity,
        maxX = -Infinity,
        maxY = -Infinity;
      const initialFull: TransformState['initialFull'] = {};
      movers.forEach((it) => {
        const { width, height } = getItemDims(it);
        initialFull![it.id] = { x: it.x, y: it.y, width, height, rotation: it.rotation || 0 };
        minX = Math.min(minX, it.x);
        minY = Math.min(minY, it.y);
        maxX = Math.max(maxX, it.x + width);
        maxY = Math.max(maxY, it.y + height);
      });

      const gcx = (minX + maxX) / 2;
      const gcy = (minY + maxY) / 2;

      // Resize anchor = corner opposite the dragged handle.
      const corners: Record<string, { x: number; y: number }> = {
        nw: { x: minX, y: minY },
        ne: { x: maxX, y: minY },
        se: { x: maxX, y: maxY },
        sw: { x: minX, y: maxY },
      };
      const opposite: Record<string, string> = { nw: 'se', ne: 'sw', se: 'nw', sw: 'ne' };
      const anchor = type === 'resize' ? corners[opposite[handle]] : { x: gcx, y: gcy };
      const startCorner = type === 'resize' ? corners[handle] : { x: maxX, y: maxY };

      setTransformState({
        isTransforming: true,
        type,
        handle,
        startX: e.clientX,
        startY: e.clientY,
        startItemX: 0,
        startItemY: 0,
        startWidth: 0,
        startHeight: 0,
        startRotation: 0,
        // group center in SCREEN coords (for rotate atan2)
        centerX: gcx * zoom + pan.x + rect.left,
        centerY: gcy * zoom + pan.y + rect.top,
        initialSelections: {},
        isGroup: true,
        groupCenterCanvasX: gcx,
        groupCenterCanvasY: gcy,
        anchorX: anchor.x,
        anchorY: anchor.y,
        startCornerX: startCorner.x,
        startCornerY: startCorner.y,
        initialFull,
      });

      activeItemRef.current = null;
      onTransformStart?.();
    },
    [items, selectedIds, zoom, pan, canvasRef, onTransformStart]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!transformState) return;

      // --- Group (multi-select) rigid-body transform ---
      if (transformState.isGroup) {
        const {
          type,
          startX,
          startY,
          centerX,
          centerY,
          groupCenterCanvasX = 0,
          groupCenterCanvasY = 0,
          anchorX = 0,
          anchorY = 0,
          startCornerX = 0,
          startCornerY = 0,
          initialFull,
        } = transformState;
        if (!initialFull) return;

        if (type === 'rotate') {
          const startAngle = Math.atan2(startY - centerY, startX - centerX);
          const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
          let deltaAngle = angle - startAngle;
          let deltaDegrees = deltaAngle * (180 / Math.PI);
          if (e.shiftKey) {
            deltaDegrees = Math.round(deltaDegrees / 15) * 15;
            deltaAngle = (deltaDegrees * Math.PI) / 180;
          }
          const cos = Math.cos(deltaAngle);
          const sin = Math.sin(deltaAngle);
          Object.entries(initialFull).forEach(([id, init]) => {
            const cx0 = init.x + init.width / 2;
            const cy0 = init.y + init.height / 2;
            const dx = cx0 - groupCenterCanvasX;
            const dy = cy0 - groupCenterCanvasY;
            const ncx = groupCenterCanvasX + dx * cos - dy * sin;
            const ncy = groupCenterCanvasY + dx * sin + dy * cos;
            onUpdate(id, {
              x: ncx - init.width / 2,
              y: ncy - init.height / 2,
              rotation: init.rotation + deltaDegrees,
            });
          });
        } else if (type === 'resize') {
          const dX = (e.clientX - startX) / zoom;
          const dY = (e.clientY - startY) / zoom;
          const oldVecX = startCornerX - anchorX;
          const oldVecY = startCornerY - anchorY;
          const oldDist = Math.hypot(oldVecX, oldVecY) || 1;
          const newDist = Math.hypot(oldVecX + dX, oldVecY + dY);
          const scale = Math.max(0.05, newDist / oldDist);
          Object.entries(initialFull).forEach(([id, init]) => {
            const nx = anchorX + (init.x - anchorX) * scale;
            const ny = anchorY + (init.y - anchorY) * scale;
            const item = items.find((i) => i.id === id);
            if (item?.data && typeof item.data.width === 'number') {
              onUpdate(id, {
                x: nx,
                y: ny,
                data: { ...item.data, width: init.width * scale, height: init.height * scale },
              });
            } else {
              onUpdate(id, { x: nx, y: ny });
            }
          });
        }
        return;
      }

      if (!activeItemRef.current) return;

      const {
        type,
        handle,
        startX,
        startY,
        startItemX,
        startItemY,
        startWidth,
        startHeight,
        startRotation,
        centerX,
        centerY,
        initialSelections,
      } = transformState;

      const deltaX = (e.clientX - startX) / zoom;
      const deltaY = (e.clientY - startY) / zoom;

      if (type === 'move') {
        let dx = deltaX;
        let dy = deltaY;

        // Check if we should duplicate (Ctrl+Shift held and not already duplicating)
        const shouldDuplicate = e.ctrlKey && e.shiftKey && !transformState.isDuplicating && onItemAdd;

        // If we should duplicate and haven't yet, create duplicates
        if (shouldDuplicate) {
          const duplicatedItems: CanvasItem[] = [];
          const itemsToDuplicate = Object.keys(initialSelections || {})
            .map((id) => items.find((item) => item.id === id))
            .filter((item): item is CanvasItem => item !== undefined);

          itemsToDuplicate.forEach((item) => {
            const duplicateId = `${item.entityType}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
            const duplicate: CanvasItem = {
              ...item,
              id: duplicateId,
              x: item.x,
              y: item.y,
              groupId: undefined, // Don't copy group membership
            };
            duplicatedItems.push(duplicate);
            onItemAdd!(duplicate);
          });

          // Update transform state to track duplicates
          setTransformState((prev) =>
            prev
              ? {
                  ...prev,
                  isDuplicating: true,
                  duplicatedItems,
                  // Update initialSelections to point to duplicates
                  initialSelections: duplicatedItems.reduce(
                    (acc, item, index) => {
                      const originalId = Object.keys(initialSelections || {})[index];
                      const originalPos = initialSelections?.[originalId];
                      if (originalPos) {
                        acc[item.id] = originalPos;
                      }
                      return acc;
                    },
                    {} as Record<string, { x: number; y: number }>
                  ),
                }
              : prev
          );

          return; // Skip this frame, let duplicates be created first
        }

        // Axis locking with Shift (only if not also holding Ctrl for duplication)
        if (e.shiftKey && !e.ctrlKey) {
          if (Math.abs(dx) >= Math.abs(dy)) {
            dy = 0;
            setLockedAxis('x');
          } else {
            dx = 0;
            setLockedAxis('y');
          }
        } else {
          setLockedAxis(null);
        }

        const newX = startItemX + dx;
        const newY = startItemY + dy;

        let finalActiveX = newX;
        let finalActiveY = newY;

        if (snapEnabled) {
          const snapResult = calculateSnapGuides(
            activeItemRef.current.id,
            { x: newX, y: newY, width: startWidth, height: startHeight },
            items
          );
          finalActiveX = snapResult.x;
          finalActiveY = snapResult.y;
          onSnap?.(snapResult.guides);
        } else {
          onSnap?.([]);
        }

        // Calculate the actual movement applied to the active item (including snap)
        const moveDeltaX = finalActiveX - startItemX;
        const moveDeltaY = finalActiveY - startItemY;

        // Apply to all items in initialSelections (includes selected items + contained items)
        const selectionsToMove =
          transformState.isDuplicating && transformState.duplicatedItems
            ? transformState.initialSelections // These now point to duplicates
            : initialSelections;

        if (selectionsToMove) {
          Object.entries(selectionsToMove).forEach(([id, startPos]) => {
            // Update the item position using stored start position
            onUpdate(id, {
              x: startPos.x + moveDeltaX,
              y: startPos.y + moveDeltaY,
            });
          });
        } else {
          onUpdate(activeItemRef.current.id, {
            x: finalActiveX,
            y: finalActiveY,
          });
        }
      } else if (type === 'rotate') {
        // Calculate new angle based on mouse position relative to center
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
        // Let's simplified approach: Calculate delta angle

        const startAngle = Math.atan2(startY - centerY, startX - centerX);
        const deltaAngle = angle - startAngle;
        const deltaDegrees = deltaAngle * (180 / Math.PI);

        let newRotation = startRotation + deltaDegrees;

        // Snap to 15 degrees if Shift is pressed
        if (e.shiftKey) {
          newRotation = Math.round(newRotation / 15) * 15;
        }

        onUpdate(activeItemRef.current.id, {
          rotation: newRotation,
        });
      } else if (type === 'resize') {
        let newX = startItemX;
        let newY = startItemY;
        let newWidth = startWidth;
        let newHeight = startHeight;

        // Calculate aspect ratio
        const aspectRatio = startWidth / startHeight;
        const preserveAspectRatio = e.shiftKey;

        // Handle logic
        if (handle?.includes('e')) {
          newWidth = Math.max(10, startWidth + deltaX);
          if (preserveAspectRatio) {
            newHeight = newWidth / aspectRatio;
          }
        }
        if (handle?.includes('w')) {
          const maxDelta = startWidth - 10;
          const appliedDelta = Math.min(deltaX, maxDelta);
          newWidth = startWidth - appliedDelta;
          newX = startItemX + appliedDelta;
          if (preserveAspectRatio) {
            newHeight = newWidth / aspectRatio;
          }
        }
        if (handle?.includes('s')) {
          newHeight = Math.max(10, startHeight + deltaY);
          if (preserveAspectRatio) {
            newWidth = newHeight * aspectRatio;
          }
        }
        if (handle?.includes('n')) {
          const maxDelta = startHeight - 10;
          const appliedDelta = Math.min(deltaY, maxDelta);
          newHeight = startHeight - appliedDelta;
          newY = startItemY + appliedDelta;
          if (preserveAspectRatio) {
            newWidth = newHeight * aspectRatio;
          }
        }

        // For corner handles with aspect ratio, use the dominant direction
        if (
          preserveAspectRatio &&
          handle &&
          (handle.includes('n') || handle.includes('s')) &&
          (handle.includes('e') || handle.includes('w'))
        ) {
          // Use whichever dimension changed more
          if (Math.abs(deltaX) > Math.abs(deltaY)) {
            newHeight = newWidth / aspectRatio;
            // Adjust Y position for north handles
            if (handle.includes('n')) {
              newY = startItemY + (startHeight - newHeight);
            }
          } else {
            newWidth = newHeight * aspectRatio;
            // Adjust X position for west handles
            if (handle.includes('w')) {
              newX = startItemX + (startWidth - newWidth);
            }
          }
        }

        const activeItem = activeItemRef.current;

        // Preserve all existing data properties (especially style for shapes)
        const updatedData = {
          ...activeItem.data,
          width: newWidth,
          height: newHeight,
        };

        onUpdate(activeItem.id, {
          x: newX,
          y: newY,
          data: updatedData,
        });
      }
    },
    [transformState, zoom, onUpdate, onItemAdd, items, snapEnabled, onSnap]
  );

  const handleMouseUp = useCallback(() => {
    setTransformState(null);
    activeItemRef.current = null;
    setLockedAxis(null);
    onSnap?.([]); // Clear guides
    onTransformEnd?.();
  }, [onSnap, onTransformEnd]);

  // Global event listeners for drag
  // We attach these to window to catching drags outside canvas
  // This hook consumer should attach these in useEffect

  return {
    transformState,
    startTransform,
    startGroupTransform,
    handleMouseMove,
    handleMouseUp,
    lockedAxis,
  };
}
