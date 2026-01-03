# Shape Text Editing & Formatting

## Overview
Enhanced text editing capabilities for Canvas Shapes, including "Quick Edit" mode, text alignment controls, and rich text support via `contentEditable`. Shapes (including Text tools) now support HTML content for formatting.

## Problem/Goal
Users needed a more intuitive way to edit text within shapes (without double-clicking specifically on a small area), better alignment control, and the ability to drag-and-drop text boxes that behave like other shapes.

## Solution/Implementation

### 1. ShapeRenderer Refactor
The `ShapeRenderer` component now uses a `contentEditable` div instead of a plain input or textarea. This enables:
- **Rich Text**: Support for HTML tags (bold, italic) via `dangerouslySetInnerHTML`.
- **Text Alignment**: Visual alignment (left, center, right) via flexbox `justify-content`.
- **Quick Edit**: Typing on a selected shape immediately triggers edit mode.

### 2. Text Tool as Shape
The "Text" tool in the toolbar now creates a transparent `rectangle` shape ('shape' entity type) with text properties. This leverages the full power of `ShapeRenderer` (snapping, resizing, styling) for text boxes, unifying the logic.

### 3. Quick Edit Logic
Using `useEffect` and `keydown` listeners, we detect typing on a selected shape to focus and enter edit mode automatically.

```typescript
// ShapeRenderer.tsx
React.useEffect(() => {
    // ...
    // Focus handling and initial content when entering edit mode
    if (isEditingText && editRef.current) {
        editRef.current.innerHTML = editValue;
        // ... cursor placement
    }
}, [isEditingText]);
```

## Usage/Examples

### Quick Edit
1. Select a shape.
2. Start typing. The shape enters edit mode automatically.

### Text Alignment
1. Select a shape.
2. Use the alignment icons in the toolbar (Left, Center, Right) to align text.

### Creating Text Boxes
1. Drag the "Text" icon from the toolbar.
2. Drop it on the canvas. It behaves like a transparent shape with text.

## Technical Details
- **State Management**: Text content is stored in `data.text` (HTML string).
- **Alignment**: Stored in `data.textAlign` ('left' | 'center' | 'right').
- **Rendering**: Updates are flushed to `onUpdate` on blur or Enter. We use `dangerouslySetInnerHTML` for rendering.

## Related
- [Shape Renderer](../architecture/components/ShapeRenderer.md) (if exists)
- [Floating Toolbar](../features/floating-toolbar.md)
