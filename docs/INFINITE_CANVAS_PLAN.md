# Infinite Canvas & Zoom/Pan Implementation Plan

## Overview
Transform the canvas into an infinite, zoomable, pannable workspace similar to Miro/Figma.

## Features to Implement

### 1. ✅ Remove Grid Snap & Grid Lines
**What to Remove**:
- Grid snap toggle button
- Grid snap logic from useSnapToGrid
- Background grid lines rendering
- Keep only object snap guides

**Files to Modify**:
- `src/components/canvas/board/CanvasBoard.tsx` - Remove grid snap state and toggle
- `src/components/canvas/CanvasWorkspace.tsx` - Remove grid background rendering
- `src/components/canvas/controls/GridToggle.tsx` - Delete this component

---

### 2. ✅ Infinite Canvas
**Implementation**:
- Remove fixed canvas dimensions
- Canvas should expand infinitely in all directions
- Items can be placed anywhere (negative coordinates allowed)
- Viewport shows a window into the infinite canvas

**Approach**:
- Use CSS transforms for positioning instead of absolute positioning
- Track viewport offset (pan position)
- Calculate visible area based on viewport + zoom

**Files to Modify**:
- `src/components/canvas/CanvasWorkspace.tsx` - Remove size constraints
- `src/components/canvas/board/CanvasBoard.tsx` - Update positioning logic

---

### 3. ✅ Zoom with Ctrl + Mouse Wheel & Keyboard
**Zoom Controls**:
- **Ctrl + Mouse Wheel**: Zoom in/out at mouse position
- **Ctrl/Cmd + Plus (+)**: Zoom in
- **Ctrl/Cmd + Minus (-)**: Zoom out
- **Ctrl/Cmd + 0**: Reset to 100%

**Zoom Levels**:
- Min: 10% (0.1)
- Max: 400% (4.0)
- Default: 100% (1.0)
- Step: 10% increments

**Implementation**:
- Create `useCanvasZoom` hook
- Track zoom level state
- Apply CSS transform: scale() to canvas container
- Zoom towards mouse cursor position (transform-origin)

**Files to Create**:
- `src/hooks/useCanvasZoom.ts` - Zoom logic hook

**Files to Modify**:
- `src/components/canvas/CanvasWorkspace.tsx` - Apply zoom transform
- `src/hooks/useKeyboardShortcuts.ts` - Add zoom shortcuts

---

### 4. ✅ Pan with Middle Mouse Button (Mouse 3)
**Pan Controls**:
- **Middle Mouse Button (Mouse 3) + Drag**: Pan the canvas
- **Space + Drag**: Alternative pan method (common in design tools)

**Implementation**:
- Create `useCanvasPan` hook
- Track pan offset (x, y)
- Listen for mousedown on button 1 (middle mouse)
- Apply CSS transform: translate() to canvas container
- Cursor changes to grab/grabbing during pan

**Files to Create**:
- `src/hooks/useCanvasPan.ts` - Pan logic hook

**Files to Modify**:
- `src/components/canvas/CanvasWorkspace.tsx` - Apply pan transform

---

### 5. ✅ Miro-like Zoom Controls (Bottom Right)
**UI Components**:
```
┌─────────────────┐
│  [-]  100%  [+] │
└─────────────────┘
```

**Features**:
- **[-]** button: Zoom out
- **[+]** button: Zoom in
- **100%** display: Current zoom level, click to reset to 100%
- Position: Fixed bottom-right corner
- Style: Floating, rounded, with shadow

**Files to Create**:
- `src/components/canvas/controls/ZoomControls.tsx` - Zoom UI component

---

## Combined Transform System

### Transform Architecture
All transformations (zoom + pan) will be combined:

```typescript
// Combined transform state
interface CanvasTransform {
    zoom: number;      // 0.1 to 4.0
    panX: number;      // Offset in pixels
    panY: number;      // Offset in pixels
}

// Applied as CSS transform
transform: translate(${panX}px, ${panY}px) scale(${zoom})
```

### Hook Structure
Create a unified `useCanvasTransform` hook that manages both zoom and pan:

```typescript
export function useCanvasTransform() {
    const [zoom, setZoom] = useState(1.0);
    const [pan, setPan] = useState({ x: 0, y: 0 });
    
    return {
        zoom,
        pan,
        zoomIn: () => {...},
        zoomOut: () => {...},
        resetZoom: () => {...},
        zoomToPoint: (x, y, delta) => {...},
        startPan: () => {...},
        updatePan: (dx, dy) => {...},
        endPan: () => {...}
    };
}
```

---

## Implementation Order

### Phase 1: Remove Grid (15 min)
1. Remove GridToggle component
2. Remove grid snap state from CanvasBoard
3. Remove grid background from CanvasWorkspace
4. Test that object snap still works

### Phase 2: Zoom Implementation (45 min)
1. Create `useCanvasTransform` hook with zoom logic
2. Add zoom event listeners (wheel, keyboard)
3. Apply zoom transform to canvas
4. Create ZoomControls UI component
5. Test zoom at different levels

### Phase 3: Pan Implementation (30 min)
1. Add pan logic to `useCanvasTransform` hook
2. Add middle mouse button listener
3. Add Space + drag listener
4. Apply pan transform to canvas
5. Test panning in all directions

### Phase 4: Infinite Canvas (20 min)
1. Remove canvas size constraints
2. Allow negative coordinates
3. Update item positioning logic
4. Test items at various positions

### Phase 5: Integration & Polish (30 min)
1. Combine all transforms
2. Ensure drag & drop works with zoom/pan
3. Update snap guides to work with zoom/pan
4. Test all interactions together
5. Add smooth transitions

---

## Technical Considerations

### Coordinate Systems
With zoom/pan, we need to handle two coordinate systems:

1. **Screen Coordinates**: Mouse position on screen
2. **Canvas Coordinates**: Actual item positions

**Conversion Formula**:
```typescript
// Screen to Canvas
canvasX = (screenX - panX) / zoom
canvasY = (screenY - panY) / zoom

// Canvas to Screen
screenX = (canvasX * zoom) + panX
screenY = (canvasY * zoom) + panY
```

### Performance Optimizations
- Use CSS transforms (GPU accelerated)
- Debounce zoom events
- Use `will-change` CSS property
- Virtualize items outside viewport (future optimization)

### Drag & Drop Adjustments
- Update dnd-kit collision detection for zoom/pan
- Adjust snap guide calculations for zoom
- Update drag overlay positioning

---

## Files Summary

### New Files (3):
- `src/hooks/useCanvasTransform.ts` - Unified zoom/pan hook
- `src/components/canvas/controls/ZoomControls.tsx` - Zoom UI

### Files to Delete (1):
- `src/components/canvas/controls/GridToggle.tsx`

### Files to Modify (4):
- `src/components/canvas/board/CanvasBoard.tsx` - Remove grid, add zoom/pan
- `src/components/canvas/CanvasWorkspace.tsx` - Apply transforms, remove grid
- `src/hooks/useKeyboardShortcuts.ts` - Add zoom shortcuts
- `src/hooks/useSnapGuides.ts` - Adjust for zoom/pan (if needed)

---

## Testing Checklist

- [ ] Grid snap removed, object snap still works
- [ ] Zoom in/out with Ctrl + Mouse Wheel
- [ ] Zoom in with Ctrl/Cmd + Plus
- [ ] Zoom out with Ctrl/Cmd + Minus
- [ ] Reset zoom with Ctrl/Cmd + 0
- [ ] Pan with middle mouse button
- [ ] Pan with Space + drag
- [ ] Zoom controls UI visible and functional
- [ ] Items can be placed at negative coordinates
- [ ] Drag & drop works at all zoom levels
- [ ] Snap guides work with zoom/pan
- [ ] Multi-select works with zoom/pan
- [ ] Performance is smooth at all zoom levels

---

## Estimated Time: ~2.5 hours

Ready to start implementation! 🚀
