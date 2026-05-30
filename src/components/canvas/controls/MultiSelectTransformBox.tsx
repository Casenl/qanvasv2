import React from 'react';
import { CanvasItem } from '@/lib/types';

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
 * Miro-style transform box for a multi-selection / group: a bounding box with four
 * corner resize handles (uniform scale) and a rotate handle. Rendered inside the
 * zoomed canvas container, so positions are in canvas coordinates; handle sizes are
 * divided by zoom to stay a constant visual size. The box border is click-through
 * (so dragging inside it moves the group); only the handles capture pointer events.
 */
export function MultiSelectTransformBox({ items, selectedIds, zoom, onStartTransform }: MultiSelectTransformBoxProps) {
  if (selectedIds.length < 2) return null;

  const selectedItems = items.filter((item) => selectedIds.includes(item.id));
  if (selectedItems.length < 2) return null;

  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  selectedItems.forEach((item) => {
    let width = 300;
    let height = 172;
    if (item.data && typeof item.data.width === 'number') {
      width = item.data.width;
      height = typeof item.data.height === 'number' ? item.data.height : width;
    }
    minX = Math.min(minX, item.x);
    minY = Math.min(minY, item.y);
    maxX = Math.max(maxX, item.x + width);
    maxY = Math.max(maxY, item.y + height);
  });

  const padding = 8 / zoom;
  minX -= padding;
  minY -= padding;
  maxX += padding;
  maxY += padding;

  const width = maxX - minX;
  const height = maxY - minY;

  const border = 2 / zoom;
  const handleSize = 12 / zoom;
  const half = handleSize / 2;
  const rotateOffset = 28 / zoom;

  const cornerPos: Record<string, { left: number; top: number }> = {
    nw: { left: 0, top: 0 },
    ne: { left: width, top: 0 },
    se: { left: width, top: height },
    sw: { left: 0, top: height },
  };

  return (
    <div style={{ position: 'absolute', left: minX, top: minY, width, height, zIndex: 6 }}>
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
