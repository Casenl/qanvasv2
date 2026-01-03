# Shape Snapping

## Overview
Implementation of magnetic snapping for Shapes when moving them on the canvas. Shapes now align to other items (edges and centers) and show visual guide lines.

## Problem/Goal
Previously, only "Card" items (Product, Vendor) supported snapping via `useDragHandlers`. Shapes used a separate `useTransform` hook which lacked snapping logic, causing potential misalignment in diagrams.

## Solution/Implementation

### 1. Unified Snap Logic
Extracted the snapping calculation logic from `useSnapGuides.ts` hook into a standalone utility function `calculateSnapGuides`.

```typescript
// useSnapGuides.ts
export function calculateSnapGuides(...) : SnapResult {
    // ... logic for finding best snap candidates
}
```

### 2. Enhanced useTransform Hook
Updated `useTransform` to:
- Accept `items`, `snapEnabled`, and `onSnap` callback.
- Call `calculateSnapGuides` during `handleMouseMove` (type='move').
- Update the item position to the *snapped* coordinates.
- Reporting active guides back via `onSnap`.

### 3. Canvas Integration
`CanvasWorkspace` now manages a local `shapeSnapGuides` state and combines it with the global guides for rendering.

```typescript
// CanvasWorkspace.tsx
const transform = useTransform({
    items,
    snapEnabled: true,
    onSnap: setShapeSnapGuides, // Updates local state for visual lines
    // ...
});
```

## Usage/Examples
1. Select a shape (Rectangle, Circle, Text Box).
2. Drag it near another item.
3. Observe visual lines (Red) indicating alignment to edges or centers.
4. The shape will "snap" to the aligned position.

## Technical Details
- **Threshold**: Snapping occurs within 8px.
- **Priority**: Snaps to closest edge/center.
- **Visuals**: Dashed lines rendered by `SnapGuides` component.

## Related
- [Snap Guides Hook](../architecture/hooks/useSnapGuides.md) (if exists)
- [Canvas Interaction](../features/canvas-interaction.md)
