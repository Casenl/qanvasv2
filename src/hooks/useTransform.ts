import { useState, useCallback, useRef } from "react";
import { CanvasItem } from "@/lib/types";
import { calculateSnapGuides, SnapGuide } from "./useSnapGuides";

interface TransformState {
  isTransforming: boolean;
  type: "resize" | "rotate" | "move";
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
  const [transformState, setTransformState] = useState<TransformState | null>(
    null,
  );
  const [lockedAxis, setLockedAxis] = useState<"x" | "y" | null>(null);
  const activeItemRef = useRef<CanvasItem | null>(null);

  const startTransform = useCallback(
    (
      e: React.MouseEvent,
      item: CanvasItem,
      type: "resize" | "rotate" | "move",
      handle: string | null,
    ) => {
      // Don't allow transforming locked items
      if (item.locked) return;

      e.stopPropagation();
      // Don't prevent default for move, so click events can still fire if no drag occurs
      if (type !== "move") {
        e.preventDefault();
      }

      if (
        type === "resize" &&
        (!item.data || typeof item.data.width !== "number")
      )
        return;

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
        if (
          frameItem?.entityType === "frame" &&
          frameItem.data?.containedItemIds
        ) {
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
    [zoom, pan, canvasRef, items, selectedIds, onTransformStart],
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!transformState || !activeItemRef.current) return;

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

      if (type === "move") {
        let dx = deltaX;
        let dy = deltaY;

        // Check if we should duplicate (Ctrl+Shift held and not already duplicating)
        const shouldDuplicate =
          e.ctrlKey && e.shiftKey && !transformState.isDuplicating && onItemAdd;

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
                      const originalId = Object.keys(initialSelections || {})[
                        index
                      ];
                      const originalPos = initialSelections?.[originalId];
                      if (originalPos) {
                        acc[item.id] = originalPos;
                      }
                      return acc;
                    },
                    {} as Record<string, { x: number; y: number }>,
                  ),
                }
              : prev,
          );

          return; // Skip this frame, let duplicates be created first
        }

        // Axis locking with Shift (only if not also holding Ctrl for duplication)
        if (e.shiftKey && !e.ctrlKey) {
          if (Math.abs(dx) >= Math.abs(dy)) {
            dy = 0;
            setLockedAxis("x");
          } else {
            dx = 0;
            setLockedAxis("y");
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
            items,
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
      } else if (type === "rotate") {
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
      } else if (type === "resize") {
        let newX = startItemX;
        let newY = startItemY;
        let newWidth = startWidth;
        let newHeight = startHeight;

        // Calculate aspect ratio
        const aspectRatio = startWidth / startHeight;
        const preserveAspectRatio = e.shiftKey;

        // Handle logic
        if (handle?.includes("e")) {
          newWidth = Math.max(10, startWidth + deltaX);
          if (preserveAspectRatio) {
            newHeight = newWidth / aspectRatio;
          }
        }
        if (handle?.includes("w")) {
          const maxDelta = startWidth - 10;
          const appliedDelta = Math.min(deltaX, maxDelta);
          newWidth = startWidth - appliedDelta;
          newX = startItemX + appliedDelta;
          if (preserveAspectRatio) {
            newHeight = newWidth / aspectRatio;
          }
        }
        if (handle?.includes("s")) {
          newHeight = Math.max(10, startHeight + deltaY);
          if (preserveAspectRatio) {
            newWidth = newHeight * aspectRatio;
          }
        }
        if (handle?.includes("n")) {
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
          (handle.includes("n") || handle.includes("s")) &&
          (handle.includes("e") || handle.includes("w"))
        ) {
          // Use whichever dimension changed more
          if (Math.abs(deltaX) > Math.abs(deltaY)) {
            newHeight = newWidth / aspectRatio;
            // Adjust Y position for north handles
            if (handle.includes("n")) {
              newY = startItemY + (startHeight - newHeight);
            }
          } else {
            newWidth = newHeight * aspectRatio;
            // Adjust X position for west handles
            if (handle.includes("w")) {
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
    [transformState, zoom, onUpdate, onItemAdd, items, snapEnabled, onSnap],
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
    handleMouseMove,
    handleMouseUp,
    lockedAxis,
  };
}
