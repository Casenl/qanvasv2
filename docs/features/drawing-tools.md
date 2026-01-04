# Drawing Tools - Pen, Line, Arrow

## Overview

The drawing tools feature enables users to create freehand paths (pen tool), straight lines, and arrows on the canvas. These tools provide intuitive drawing interactions with full styling support and text labels.

## Features

### 1. Pen Tool (Freehand Drawing)
- Click and drag to draw freehand paths
- Smooth SVG path generation
- Real-time preview while drawing
- Supports stroke styling (color, width, style)

### 2. Line Tool
- Click and drag to create straight lines
- Snap-to-grid support
- Configurable stroke properties
- Optional text labels

### 3. Arrow Tool
- Same as line tool with arrow heads
- Configurable arrow at start/end
- Customizable arrow size
- Professional arrow head rendering

## Implementation

### Data Types

```typescript
// Pen/Path Data
interface PathData {
    points: { x: number; y: number }[];
    pathString: string;  // SVG path
    strokeColor: string;
    strokeWidth: number;
    strokeStyle?: 'solid' | 'dashed' | 'dotted';
    opacity: number;
    // Label properties
    label?: string;
    labelColor?: string;
    labelSize?: number;
    labelPosition?: number;  // 0-1
    labelOffset?: number;    // pixels
    labelBackgroundColor?: string;
    labelFontFamily?: string;
    labelBold?: boolean;
    labelItalic?: boolean;
}

// Line/Arrow Data
interface LineData {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    strokeColor: string;
    strokeWidth: number;
    strokeStyle?: 'solid' | 'dashed' | 'dotted';
    opacity: number;
    // Arrow configuration
    startArrow?: boolean;
    endArrow?: boolean;
    arrowSize?: number;
    // Label properties (same as PathData)
    label?: string;
    // ... (same label properties as PathData)
}
```

### Components

#### PathRenderer
**Location:** `src/components/canvas/path/PathRenderer.tsx`

Renders freehand pen drawings using SVG paths.

**Features:**
- SVG path rendering from points array
- Stroke styling support
- Selection states
- Label support with editing
- Automatic bounding box calculation

**Usage:**
```tsx
<PathRenderer
    data={pathData}
    isSelected={true}
    onClick={() => handleSelect(id)}
    onUpdate={(updates) => handleUpdate(id, updates)}
/>
```

#### LineRenderer
**Location:** `src/components/canvas/line/LineRenderer.tsx`

Renders straight lines and arrows with optional labels.

**Features:**
- Line rendering with configurable stroke
- Arrow head rendering (start/end)
- Draggable labels along line
- Label offset perpendicular to line
- Selection handles

**Usage:**
```tsx
<LineRenderer
    data={lineData}
    isSelected={true}
    onClick={() => handleSelect(id)}
    onUpdate={(updates) => handleUpdate(id, updates)}
/>
```

### Drawing Interaction

#### useDrawingMode Hook
**Location:** `src/hooks/useDrawingMode.ts`

Manages drawing state and interactions.

**Handlers:**
- `handleDrawStart` - Initiates drawing on mouse down
- `handleDrawMove` - Tracks mouse movement
- `handleDrawEnd` - Finalizes drawing on mouse up
- `handleCanvasClick` - Click-to-place for other tools

**Drawing Flow:**

```
Pen Tool:
1. Mouse down → Start tracking points
2. Mouse move → Add points to array
3. Mouse up → Generate SVG path, create PathItem

Line/Arrow Tool:
1. Mouse down → Set start point
2. Mouse move → Update end point (preview)
3. Mouse up → Create LineItem with final coordinates
```

### Styling Support

All drawing tools support:
- **Stroke Color** - Any hex/rgb color
- **Stroke Width** - 1-10px
- **Stroke Style** - Solid, dashed, dotted
- **Opacity** - 0-1

Configured via AlignmentToolbar when item is selected.

## Label System

### Adding Labels

**Method 1: Double-click**
```
1. Double-click on line/arrow/path
2. Label appears with default text "Label"
3. Automatically enters edit mode
4. Start typing immediately
```

**Method 2: Toolbar Button**
```
1. Select line/arrow/path
2. Click "Add Label" button in AlignmentToolbar
3. Label appears
4. Double-click label to edit
```

### Label Positioning (Lines & Arrows)

Labels can be positioned:
- **Along the line:** `labelPosition` (0-1)
  - 0 = start point
  - 0.5 = middle (default)
  - 1 = end point
- **Perpendicular offset:** `labelOffset` (pixels)
  - Negative = above/left of line
  - Positive = below/right of line

**Dragging Labels:**
```
1. Click and drag label
2. Horizontal drag → moves along line
3. Vertical drag → moves perpendicular to line
4. Release → position saved
```

### Label Styling

Full styling support:
- **Text Color** - `labelColor`
- **Background Color** - `labelBackgroundColor`
- **Font Size** - `labelSize` (8-48px)
- **Font Family** - `labelFontFamily`
- **Bold** - `labelBold`
- **Italic** - `labelItalic`

Configured via AlignmentToolbar when item with label is selected.

## User Experience

### Drawing Workflow

**Pen Tool:**
```
1. Select pen tool from toolbar
2. Cursor changes to crosshair
3. Click and drag on canvas
4. See real-time blue preview
5. Release to finalize
6. Path is created and selected
```

**Line/Arrow Tool:**
```
1. Select line/arrow tool
2. Cursor changes to crosshair
3. Click start point
4. Drag to end point (see preview)
5. Release to finalize
6. Line/arrow is created and selected
```

### Editing Workflow

**Styling:**
```
1. Select line/arrow/path
2. AlignmentToolbar appears
3. Adjust stroke color, width, style
4. Changes apply immediately
```

**Adding Label:**
```
1. Double-click on line/arrow/path
2. Label appears in edit mode
3. Type text
4. Press Enter or click away to save
```

**Positioning Label:**
```
1. Click and drag label
2. Move along line or perpendicular
3. Release to save position
```

**Styling Label:**
```
1. Select item with label
2. Label styling controls appear in toolbar
3. Adjust color, size, font, etc.
4. Changes apply immediately
```

## Feature Parity

All drawing tools support the same canvas features as other items:

✅ **Transformations:**
- Move (drag)
- Resize (transform handles)
- Rotate (rotation handle)
- Snap guides

✅ **Selection:**
- Single select (click)
- Multi-select (Ctrl+click)
- Box select (drag)

✅ **Organization:**
- Group (Ctrl+G)
- Lock (prevents editing)
- Align & distribute
- Z-index ordering

✅ **Clipboard:**
- Copy (Ctrl+C)
- Paste (Ctrl+V)
- Duplicate (Ctrl+D)
- Delete (Delete key)

✅ **History:**
- Undo (Ctrl+Z)
- Redo (Ctrl+Y)

## Technical Details

### SVG Path Generation

Pen tool converts points to SVG path:

```typescript
function generatePathString(points: Point[]): string {
    if (points.length === 0) return '';
    
    const commands = [`M ${points[0].x},${points[0].y}`];
    
    for (let i = 1; i < points.length; i++) {
        commands.push(`L ${points[i].x},${points[i].y}`);
    }
    
    return commands.join(' ');
}
```

### Arrow Head Calculation

```typescript
function calculateArrowHead(
    fromX: number, 
    fromY: number, 
    toX: number, 
    toY: number, 
    size: number
) {
    const angle = Math.atan2(toY - fromY, toX - fromX);
    const arrowAngle = Math.PI / 6; // 30 degrees
    
    const point1 = {
        x: toX - size * Math.cos(angle - arrowAngle),
        y: toY - size * Math.sin(angle - arrowAngle)
    };
    
    const point2 = {
        x: toX - size * Math.cos(angle + arrowAngle),
        y: toY - size * Math.sin(angle + arrowAngle)
    };
    
    return [point1, toX, toY, point2];
}
```

### Label Position Calculation

```typescript
function calculateLabelPosition(
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    position: number,  // 0-1
    offset: number     // pixels
) {
    // Position along line
    const x = startX + (endX - startX) * position;
    const y = startY + (endY - startY) * position;
    
    // Perpendicular offset
    const angle = Math.atan2(endY - startY, endX - startX);
    const perpAngle = angle + Math.PI / 2;
    
    return {
        x: x + Math.cos(perpAngle) * offset,
        y: y + Math.sin(perpAngle) * offset
    };
}
```

## Performance Considerations

- **Path Smoothing:** Consider implementing Catmull-Rom spline for smoother paths
- **Point Reduction:** Reduce points for very long paths to improve performance
- **Render Optimization:** Use React.memo for renderers
- **Canvas Limits:** Consider limiting maximum path length

## Future Enhancements

### Planned Features
- [ ] Path smoothing algorithm
- [ ] Curved lines (Bezier curves)
- [ ] Multi-segment lines
- [ ] Line connectors (snap to shapes)
- [ ] Custom arrow head styles
- [ ] Dashed line patterns
- [ ] Path editing (add/remove points)

### Nice to Have
- [ ] Pressure sensitivity (for tablets)
- [ ] Brush styles
- [ ] Path simplification
- [ ] Auto-routing for connectors
- [ ] Magnetic snap to objects

## Related Documentation

- [Canvas Item Best Practices](../architecture/canvas-item-best-practices.md)
- [Label System](./label-system.md)
- [Enhanced Text Formatting](./enhanced-text-formatting.md)

---

**Created:** January 3, 2026  
**Last Updated:** January 3, 2026  
**Status:** ✅ Implemented
