# 🔧 Snap Guide Positioning Investigation

## Issues Identified

### 1. **Console Spam (Again)** ✅ FIXED
The `✅ X Snap found` and `✅ Y Snap found` logs were firing on every mouse movement during drag, creating massive console spam.

**Fix**: Commented out both snap found logs in `useSnapGuides.ts`.

### 2. **Guide Placement Wrong** 🔍 INVESTIGATING

Looking at the console logs and screenshot:
- Guide position: `760px`
- Guide label: "Left Edge" then "Left to Right"
- Visual position: Appears too far left

**Possible Causes**:

#### A. Coordinate System Mismatch
The guide `position` is calculated from `item.x` which is relative to canvas (0,0 = canvas top-left).
The guide is rendered inside `CanvasWorkspace` which should also be canvas-relative.
But if there's a transform or offset, the position could be wrong.

#### B. Canvas Rect Issue
The `canvasRect` from `getBoundingClientRect()` gives viewport coordinates.
If we're using canvas-relative positions but rendering in viewport coordinates, there's a mismatch.

#### C. Item Position Storage
If items are stored with viewport coordinates instead of canvas coordinates, the calculations would be off.

## Debug Logging Added

### In SnapGuides.tsx (line 100):
```typescript
console.log('🎯 Rendering vertical guide:', {
    position: guide.position,
    label: guide.label,
    canvasWidth: canvasRect.width
});
```

This will show:
- Where the guide is being positioned
- What label it has
- The canvas width for reference

## Expected vs Actual

### Expected Behavior:
If item is at canvas position x=760:
- Guide should render at `left: 760px` relative to canvas container
- Should appear at the item's left edge

### What to Check:
1. **Item positions**: Are they canvas-relative or viewport-relative?
2. **Guide container**: Is it positioned correctly?
3. **Transform/offset**: Is there any CSS transform affecting position?

## Next Steps

1. **Check console** for `🎯 Rendering vertical guide` log
2. **Verify** the position value matches what you expect
3. **Inspect** the guide element in browser DevTools:
   - Check computed `left` value
   - Check parent container position
   - Check for any transforms

## Temporary Workaround

If the issue is a consistent offset, we could adjust the position:
```typescript
// If guides are consistently off by X pixels:
style={{ left: `${guide.position - OFFSET}px` }}
```

But we need to identify the root cause first.

## Files Modified

1. **`src/hooks/useSnapGuides.ts`**
   - Commented out snap found logs (lines 124, 172)

2. **`src/components/canvas/controls/SnapGuides.tsx`**
   - Added debug log for vertical guide rendering (line 100)

## Testing Instructions

1. Reload the page
2. Drag an item to trigger snap guides
3. Check console for `🎯 Rendering vertical guide` log
4. Note the `position` value
5. Inspect the red vertical line in DevTools
6. Check its computed `left` style
7. Compare with the logged position

This will tell us if the position calculation is correct or if there's a rendering offset.
