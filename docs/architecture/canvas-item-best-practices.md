# Canvas Item Development Best Practices

**Date**: January 3, 2026  
**Purpose**: Guidelines for adding new canvas item types

---

## Core Principle: Feature Parity

**CRITICAL**: When adding new canvas item types (shapes, tools, renderers), they MUST support ALL the same features as existing items.

### Required Features for ALL Canvas Items

Every new canvas item type must support:

✅ **Transformations**:
- Move (drag & drop)
- Resize (8 handles: 4 corners + 4 edges)
- Rotate (rotation handle with snap to 15°)
- Scale proportionally (Shift key)

✅ **Selection & Multi-Select**:
- Single selection (click)
- Multi-selection (Ctrl/Cmd + click)
- Box selection (drag rectangle)
- Selection visual feedback

✅ **Grouping**:
- Can be grouped with other items
- Group move/resize/rotate together
- Ungroup functionality

✅ **Locking**:
- Lock to prevent editing
- Visual locked indicator
- Unlock functionality

✅ **Alignment & Distribution**:
- Align left/center/right
- Align top/middle/bottom
- Distribute horizontally/vertically

✅ **Snap Guides**:
- Snap to other items
- Snap to grid (if enabled)
- Visual snap guide feedback

✅ **Layer Management**:
- Z-order (bring to front/back)
- Layer assignment
- Show/hide

✅ **Copy/Paste/Duplicate**:
- Copy (Ctrl+C)
- Paste (Ctrl+V)
- Duplicate (Ctrl+D)

✅ **Undo/Redo**:
- All changes tracked in history
- Undo (Ctrl+Z)
- Redo (Ctrl+Y)

---

## Implementation Checklist

When adding a new canvas item type, follow these steps:

### 1. Define Data Types

**File**: `src/lib/types/shapeTypes.ts`

```typescript
// Example: PathData for pen tool
export interface PathData {
    points: { x: number; y: number }[];
    pathString: string;
    strokeColor: string;
    strokeWidth: number;
    strokeStyle?: 'solid' | 'dashed' | 'dotted';
    opacity: number;
}

export const DEFAULT_PATH_STYLE: Partial<PathData> = {
    strokeColor: '#1e40af',
    strokeWidth: 2,
    opacity: 1
};
```

### 2. Create Renderer Component

**File**: `src/components/canvas/[type]/[Type]Renderer.tsx`

```typescript
interface PathRendererProps {
    data: PathData;
    isSelected?: boolean;
    onClick?: () => void;
    onUpdate?: (updates: Partial<PathData>) => void;
}

export function PathRenderer({ data, isSelected, onClick, onUpdate }: PathRendererProps) {
    // Render logic
    return (
        <div
            data-canvas-item="path"
            onClick={onClick}
            style={{
                cursor: 'pointer',
                // ... styling
            }}
        >
            {/* Render content */}
        </div>
    );
}
```

**Requirements**:
- ✅ Accept `isSelected` prop for selection state
- ✅ Accept `onClick` prop for selection handling
- ✅ Accept `onUpdate` prop for data changes
- ✅ Render selection visual feedback
- ✅ Support all styling options

### 3. Register in CanvasItemRenderer

**File**: `src/components/canvas/CanvasItemRenderer.tsx`

```typescript
// Add import
import { PathRenderer } from './path/PathRenderer';
import { PathData } from '@/lib/types/shapeTypes';

// Add case in switch statement
case 'pen':
    return (
        <PathRenderer
            data={item.data as PathData}
            isSelected={isSelected}
            onClick={onClick}
        />
    );
```

### 4. Add to EntityType

**File**: `src/lib/types.ts`

```typescript
export type EntityType =
    | 'vendor'
    | 'product'
    | 'solution'
    // Drawing tools
    | 'shape'
    | 'line'
    | 'arrow'
    | 'pen'  // ← Add your new type here
    // ...
```

### 5. Implement Drawing Logic

**File**: `src/hooks/useDrawingMode.ts`

Add logic for creating new items when the tool is active:

```typescript
case 'pen':
    // Handle pen drawing
    const newPath: CanvasItem = {
        id: `path-${Date.now()}`,
        entityId: `path-${Date.now()}`,
        entityType: 'pen',
        x: startX,
        y: startY,
        data: {
            ...DEFAULT_PATH_STYLE,
            points: [],
            pathString: ''
        }
    };
    onItemAdd(newPath);
    break;
```

### 6. Add Toolbar Integration

**File**: `src/components/canvas/toolbar/FloatingToolbar.tsx`

Ensure the tool button exists and is properly configured.

### 7. Test ALL Features

Before considering the item type complete, test:

- [ ] Can be created via toolbar
- [ ] Can be selected (single)
- [ ] Can be multi-selected
- [ ] Can be moved
- [ ] Can be resized (if applicable)
- [ ] Can be rotated
- [ ] Can be grouped
- [ ] Can be locked/unlocked
- [ ] Can be aligned
- [ ] Can be distributed
- [ ] Snaps to guides
- [ ] Can be copied/pasted
- [ ] Can be duplicated
- [ ] Undo/redo works
- [ ] Styling works (if applicable)

---

## Common Pitfalls

### ❌ DON'T: Create items without transformation support

```typescript
// BAD: No support for rotation, scale, etc.
<div style={{ position: 'absolute', left: x, top: y }}>
    <MyNewItem />
</div>
```

### ✅ DO: Use CanvasItemRenderer for consistent behavior

```typescript
// GOOD: All transformations handled automatically
<CanvasItemRenderer
    item={item}
    isSelected={isSelected}
    onClick={handleClick}
    onUpdate={handleUpdate}
/>
```

### ❌ DON'T: Implement custom selection logic

```typescript
// BAD: Custom selection breaks multi-select
const [isSelected, setIsSelected] = useState(false);
```

### ✅ DO: Use existing selection system

```typescript
// GOOD: Works with multi-select, grouping, etc.
const isSelected = selectedIds.includes(item.id);
```

### ❌ DON'T: Skip TransformLayer integration

```typescript
// BAD: No resize/rotate handles
<MyRenderer data={data} />
```

### ✅ DO: Ensure TransformLayer works

```typescript
// GOOD: Resize/rotate handles appear automatically
{isSelected && (
    <TransformLayer
        item={item}
        zoom={zoom}
        onTransformStart={handleTransformStart}
    />
)}
```

---

## Architecture Notes

### How Transformations Work

1. **CanvasItem** stores position (`x`, `y`) and `rotation`
2. **CanvasItemRenderer** applies these as CSS transforms
3. **TransformLayer** provides visual handles
4. **useTransform** hook handles the math
5. **All items** get these features automatically

### Why This Matters

- **Consistency**: Users expect all items to behave the same
- **Maintainability**: One system to maintain, not N systems
- **Features**: New features (e.g., snap to grid) work for all items automatically
- **Testing**: Test once, works everywhere

---

## Quick Reference

### Files to Modify

1. `src/lib/types/shapeTypes.ts` - Data types
2. `src/lib/types.ts` - EntityType
3. `src/components/canvas/[type]/[Type]Renderer.tsx` - Renderer
4. `src/components/canvas/CanvasItemRenderer.tsx` - Integration
5. `src/hooks/useDrawingMode.ts` - Creation logic
6. `src/components/canvas/toolbar/FloatingToolbar.tsx` - Toolbar button

### Key Interfaces

```typescript
interface CanvasItem {
    id: string;
    entityId: string;
    entityType: EntityType;
    x: number;
    y: number;
    rotation?: number;
    groupId?: string;
    locked?: boolean;
    data: any; // Type-specific data
}
```

---

## Summary

**Golden Rule**: If an existing canvas item can do it, your new item MUST be able to do it too.

Don't ask "Should this support rotation?" - the answer is always YES.
Don't ask "Should this support grouping?" - the answer is always YES.
Don't ask "Should this support locking?" - the answer is always YES.

**All canvas items are equal citizens with equal rights.**

---

**Last Updated**: January 3, 2026  
**Next Review**: When adding new item types
