# 🔧 Snap Guides Troubleshooting & Fixes

## Issues Identified & Fixed

### Problem 1: Incomplete Algorithm Replacement
**Issue**: My previous refactor didn't fully replace the old code. The old logic with `break` statements was still running, causing:
- Only checking the first matching item (missing better snaps)
- Only checking same-edge alignments (Left-Left, Right-Right, etc.)
- Missing cross-edge alignments (Left-Right, Right-Left, etc.)

**Fix**: ✅ Completely replaced the snap detection logic with the comprehensive algorithm.

### Problem 2: Only Seeing Top & Left Edges
**Root Cause**: The old code had `break` statements that stopped checking after finding the first match. If the first item in the array happened to align on top/left, it would never check for right/bottom/center alignments.

**Fix**: ✅ New algorithm scans ALL items and ALL 5 alignment points per axis, then picks the mathematically closest one.

## New Algorithm Details

### X-Axis (Vertical Guides) - Checks 5 Points:
1. **Left to Left**: `target.left - current.left`
2. **Right to Left**: `target.right - current.left` (abutting)
3. **Left to Right**: `target.left - current.right` (abutting)
4. **Right to Right**: `target.right - current.right`
5. **Center to Center**: `target.centerX - current.centerX`

### Y-Axis (Horizontal Guides) - Checks 5 Points:
1. **Top to Top**: `target.top - current.top`
2. **Bottom to Top**: `target.bottom - current.top` (abutting)
3. **Top to Bottom**: `target.top - current.bottom` (abutting)
4. **Bottom to Bottom**: `target.bottom - current.bottom`
5. **Middle to Middle**: `target.centerY - current.centerY`

### Selection Logic:
```typescript
// For each item, check all 5 combinations
for (const check of checks) {
    if (Math.abs(check.d) < minDistX) {
        minDistX = Math.abs(check.d);
        bestSnapX = check; // Keep the closest
    }
}
```

## Debug Logging Added

I've added console logging to help diagnose issues:

```typescript
console.log('🔍 Snap Debug - Current dragged item:', {...});
console.log('🔍 Snap Debug - Other items count:', otherItems.length);
console.log('✅ X Snap found:', bestSnapX);
console.log('✅ Y Snap found:', bestSnapY);
console.log('📊 Final guides:', finalGuides);
```

## How to Test

1. **Open Browser Console** (F12)
2. **Drag an item** on the canvas
3. **Watch the console** for snap debug logs
4. **Verify**:
   - You should see "🔍 Snap Debug" logs showing current position
   - You should see "✅ X Snap found" when aligning horizontally
   - You should see "✅ Y Snap found" when aligning vertically
   - The `position` should match where the visual guide appears

## Expected Behavior

### When dragging near another item:
- **Left edge near left edge** → Red vertical guide at left edge, label "Left Edge"
- **Left edge near right edge** → Red vertical guide at right edge, label "Right to Left"
- **Right edge near left edge** → Red vertical guide at left edge, label "Left to Right"
- **Right edge near right edge** → Red vertical guide at right edge, label "Right Edge"
- **Center near center** → Blue vertical guide at center, label "Center"

*(Same logic applies for horizontal guides with Top/Bottom/Middle)*

## What Changed in Code

### Files Modified:
1. **`src/hooks/useSnapGuides.ts`**
   - Replaced old `break`-based loop with comprehensive scan
   - Added `SnapCandidate` type for better tracking
   - Added debug console logs
   - Now checks all 5 combinations per axis per item

2. **`src/components/canvas/board/CanvasBoard.tsx`**
   - Already passing `dragState` with width/height ✅

3. **`src/components/canvas/CanvasWorkspace.tsx`**
   - Already passing `activeDragRect` to SnapGuides ✅

4. **`src/components/canvas/controls/SnapGuides.tsx`**
   - Already has dynamic label positioning ✅

## Next Steps

1. **Test in browser** - Open http://localhost:3000
2. **Check console** - Look for the debug logs
3. **Drag items** - Try aligning:
   - Left to left
   - Left to right (abutting)
   - Center to center
   - Top to top
   - Bottom to bottom
   - Middle to middle

4. **Report findings**:
   - Are guides appearing for all edges now?
   - Are the guide positions correct?
   - Do the labels match the alignment type?

## If Issues Persist

Check the console logs for:
- Is `otherItems.length` > 0? (Need other items to snap to)
- Are the `current` positions correct?
- Are the `target` positions being calculated?
- Is `bestSnapX` or `bestSnapY` being found?
- What is the `position` value in the found snap?

The logs will tell us exactly where the logic is failing.
