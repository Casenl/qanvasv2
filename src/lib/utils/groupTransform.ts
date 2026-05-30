import { CanvasItem } from '@/lib/types';

/** Default footprint for items without explicit dimensions (product/vendor/solution cards). */
export function getItemDims(item: CanvasItem): { width: number; height: number } {
  if (item.data && typeof item.data.width === 'number') {
    return {
      width: item.data.width,
      height: typeof item.data.height === 'number' ? item.data.height : item.data.width,
    };
  }
  return { width: 300, height: 172 };
}

/** Rotate point (px,py) around pivot (cx,cy) by `deg` degrees. */
export function rotatePoint(px: number, py: number, cx: number, cy: number, deg: number) {
  const a = (deg * Math.PI) / 180;
  const cos = Math.cos(a);
  const sin = Math.sin(a);
  const dx = px - cx;
  const dy = py - cy;
  return { x: cx + dx * cos - dy * sin, y: cy + dx * sin + dy * cos };
}

export type Corner = 'nw' | 'ne' | 'se' | 'sw';

export interface GroupFrame {
  /** Common rotation of the selection in degrees (0 when members differ). */
  rotation: number;
  /** Stable rotation pivot: centroid of member centers (canvas coords). */
  pivot: { x: number; y: number };
  /** Bounding box in the selection's *un-rotated* (local) frame. */
  local: { x: number; y: number; width: number; height: number };
  /** World-space (rotated) positions of the four box corners. */
  corners: Record<Corner, { x: number; y: number }>;
}

/**
 * Compute the transform frame for a multi-selection so the bounding box and the
 * rotate/resize math agree. When every selected item shares the same rotation the
 * box tilts with them (Figma/Miro behaviour); with mixed rotations it falls back
 * to an axis-aligned box (rotation 0).
 */
export function computeGroupFrame(items: CanvasItem[], selectedIds: string[]): GroupFrame | null {
  const sel = items.filter((i) => selectedIds.includes(i.id));
  if (sel.length < 2) return null;

  const rotations = sel.map((i) => i.rotation || 0);
  const allSame = rotations.every((r) => Math.abs(r - rotations[0]) < 0.01);
  const rotation = allSame ? rotations[0] : 0;

  const centers = sel.map((i) => {
    const { width, height } = getItemDims(i);
    return { x: i.x + width / 2, y: i.y + height / 2, width, height };
  });

  // Centroid of centers is invariant under rigid rotation of the group.
  const pivot = {
    x: centers.reduce((s, c) => s + c.x, 0) / centers.length,
    y: centers.reduce((s, c) => s + c.y, 0) / centers.length,
  };

  // Bounds in the local frame (un-rotate each center around the pivot by -rotation).
  let lminX = Infinity,
    lminY = Infinity,
    lmaxX = -Infinity,
    lmaxY = -Infinity;
  centers.forEach((c) => {
    const lc = rotatePoint(c.x, c.y, pivot.x, pivot.y, -rotation);
    lminX = Math.min(lminX, lc.x - c.width / 2);
    lmaxX = Math.max(lmaxX, lc.x + c.width / 2);
    lminY = Math.min(lminY, lc.y - c.height / 2);
    lmaxY = Math.max(lmaxY, lc.y + c.height / 2);
  });

  const local = { x: lminX, y: lminY, width: lmaxX - lminX, height: lmaxY - lminY };
  const localCorners: Record<Corner, { x: number; y: number }> = {
    nw: { x: lminX, y: lminY },
    ne: { x: lmaxX, y: lminY },
    se: { x: lmaxX, y: lmaxY },
    sw: { x: lminX, y: lmaxY },
  };
  const corners = {} as Record<Corner, { x: number; y: number }>;
  (Object.keys(localCorners) as Corner[]).forEach((k) => {
    corners[k] = rotatePoint(localCorners[k].x, localCorners[k].y, pivot.x, pivot.y, rotation);
  });

  return { rotation, pivot, local, corners };
}
