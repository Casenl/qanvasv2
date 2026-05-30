import React from 'react';
import { CanvasItem } from '@/lib/types';
import { computeGroupFrame } from '@/lib/utils/groupTransform';

interface MultiSelectTransformBoxProps {
  items: CanvasItem[];
  selectedIds: string[];
  zoom: number;
  onStartTransform: (e: React.MouseEvent, type: 'resize' | 'rotate', handle: string) => void;
}

const CORNERS: { id: string; cursor: string }[] = [
  { id: 'nw', cursor: 'nwse-resize' },
  { id: 'ne', cursor: 'nesw-resize' },
  { id: 'se', cursor: 'nwse-resize' },
  { id: 'sw', cursor: 'nesw-resize' },
];

/**
 * Figma/Miro-style transform box for a multi-selection / group: a bounding box with
 * four corner resize handles (uniform scale) and a rotate handle. When the selection
 * shares a common rotation the box tilts with it (via computeGroupFrame). Rendered
 * inside the zoomed canvas container, so positions are canvas coordinates and handle
 * sizes are divided by zoom to stay constant on screen. The border is click-through
 * (dragging inside moves the group); only the handles capture pointer events.
 */
export function MultiSelectTransformBox({ items, selectedIds, zoom, onStartTransform }: MultiSelectTransformBoxProps) {
  const frame = computeGroupFrame(items, selectedIds);
  if (!frame) return null;

  const pad = 8 / zoom;
  const x = frame.local.x - pad;
  const y = frame.local.y - pad;
  const width = frame.local.width + pad * 2;
  const height = frame.local.height + pad * 2;

  const border = 2 / zoom;
  const handleSize = 12 / zoom;
  const half = handleSize / 2;
  const rotateOffset = 28 / zoom;

  // Local-frame corner positions relative to the box top-left.
  const cornerPos: Record<string, { left: number; top: number }> = {
    nw: { left: 0, top: 0 },
    ne: { left: width, top: 0 },
    se: { left: width, top: height },
    sw: { left: 0, top: height },
  };

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width,
        height,
        zIndex: 6,
        // Tilt the whole box (and its handles) with the group, pivoting on the
        // shared rotation pivot.
        transform: `rotate(${frame.rotation}deg)`,
        transformOrigin: `${frame.pivot.x - x}px ${frame.pivot.y - y}px`,
      }}
    >
      {/* Bounding border (click-through so the group can be dragged from inside) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          border: `${border}px solid #3b82f6`,
          borderRadius: `${4 / zoom}px`,
          pointerEvents: 'none',
          boxSizing: 'border-box',
        }}
      />

      {/* Rotate handle + connector */}
      <div
        style={{
          position: 'absolute',
          left: width / 2,
          top: -rotateOffset,
          width: 0,
          height: rotateOffset,
          borderLeft: `${border}px solid #3b82f6`,
          pointerEvents: 'none',
        }}
      />
      <div
        onMouseDown={(e) => onStartTransform(e, 'rotate', 'rotate')}
        title="Rotate group"
        style={{
          position: 'absolute',
          left: width / 2 - half,
          top: -rotateOffset - half,
          width: handleSize,
          height: handleSize,
          borderRadius: '50%',
          background: '#fff',
          border: `${border}px solid #3b82f6`,
          cursor: 'grab',
          pointerEvents: 'auto',
          boxSizing: 'border-box',
        }}
      />

      {/* Corner resize handles */}
      {CORNERS.map(({ id, cursor }) => (
        <div
          key={id}
          onMouseDown={(e) => onStartTransform(e, 'resize', id)}
          title="Resize group"
          style={{
            position: 'absolute',
            left: cornerPos[id].left - half,
            top: cornerPos[id].top - half,
            width: handleSize,
            height: handleSize,
            borderRadius: `${2 / zoom}px`,
            background: '#fff',
            border: `${border}px solid #3b82f6`,
            cursor,
            pointerEvents: 'auto',
            boxSizing: 'border-box',
          }}
        />
      ))}
    </div>
  );
}
