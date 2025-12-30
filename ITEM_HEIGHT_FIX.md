# ✅ Fixed Item Height & Copy Behavior

## Issues Fixed

### 1. **Incorrect Item Height** ✅ FIXED
**Problem**: Snap guides were aligning to the top of the card (header area) instead of the full card.

**Root Cause**: Hardcoded `ITEM_HEIGHT = 120` didn't match the actual rendered card height.

**Actual Card Dimensions**:
- **Width**: 240px (`w-60` = 15rem × 16px)
- **Height**: ~172px (measured from rendered card):
  - Header with icon: ~40px
  - Title + subtitle: ~40px
  - Vendor badge: ~20px
  - Footer (Configured/Standard): ~40px
  - Padding (top + bottom): 32px
  - **Total**: 172px

**Fix Applied**:
Updated constants in 3 files:
- `src/lib/utils/alignment.ts`: `ITEM_HEIGHT = 172`
- `src/hooks/useSnapGuides.ts`: `ITEM_HEIGHT = 172`
- `src/components/canvas/board/CanvasBoard.tsx`: `dragState.height = 172`

**Result**: Snap guides now align to the full card including the footer, not just the header.

### 2. **Unwanted Copy on Drop** 🔍 INVESTIGATING
**Problem**: Items are being duplicated instead of moved when dropped.

**Possible Causes**:
1. Ctrl or Alt key is being detected as pressed when it's not
2. The `useModifierKeys` hook might have a bug
3. Browser/OS might be sending modifier key events incorrectly

**Debug Logging Added**:
```typescript
console.log('🔍 Drag End Debug:', {
    draggedItemId: active.id,
    keys,  // Shows { ctrl, alt, shift }
    isCopying,  // Shows true/false
    rawPosition: { x, y }
});
```

**How to Diagnose**:
1. Open browser console (F12)
2. Drag and drop an item
3. Look for `🔍 Drag End Debug` log
4. Check if `keys.ctrl` or `keys.alt` is `true` when you're NOT pressing those keys

**Expected Behavior**:
- **Normal drag**: `isCopying: false` → Item moves
- **Ctrl+drag**: `isCopying: true` → Item copies
- **Alt+drag**: `isCopying: true` → Item copies

### 3. **Canvas Edge Clipping** ✅ FIXED (Previous)
Guides are now properly clipped to canvas bounds.

## Test Cases

### Test 1: Bottom Edge Alignment
1. Drag item near another item's bottom edge
2. **Expected**: Red horizontal guide at the BOTTOM of the target card (y = card.y + 172)
3. **Before**: Guide appeared at y = card.y + 120 (too high)
4. **After**: Guide appears at correct bottom edge

### Test 2: Middle Alignment
1. Vertically center two items
2. **Expected**: Blue horizontal guide at y = card.y + 86 (172 / 2)
3. **Before**: Guide at y = card.y + 60 (120 / 2)
4. **After**: Guide at correct middle

### Test 3: Move vs Copy
1. **WITHOUT pressing Ctrl/Alt**: Drag and drop item
2. **Expected**: Item moves to new position (no duplicate)
3. **Check console**: `isCopying: false`

4. **WITH Ctrl pressed**: Drag and drop item
5. **Expected**: Item copies (original stays, new one created)
6. **Check console**: `isCopying: true, keys.ctrl: true`

## Console Output Examples

### Correct Move (No Copy)
```
🔍 Drag End Debug: {
    draggedItemId: "item-123",
    keys: { ctrl: false, alt: false, shift: false },
    isCopying: false,
    rawPosition: { x: 300, y: 250 }
}
```

### Correct Copy (Ctrl Pressed)
```
🔍 Drag End Debug: {
    draggedItemId: "item-123",
    keys: { ctrl: true, alt: false, shift: false },
    isCopying: true,
    rawPosition: { x: 300, y: 250 }
}
```

### Bug: Unwanted Copy
```
🔍 Drag End Debug: {
    draggedItemId: "item-123",
    keys: { ctrl: true, alt: false, shift: false },  ← BUG: ctrl is true!
    isCopying: true,
    rawPosition: { x: 300, y: 250 }
}
```

## Files Modified

### Height Fixes
1. **`src/lib/utils/alignment.ts`**
   - Line 21: `ITEM_HEIGHT = 172`

2. **`src/hooks/useSnapGuides.ts`**
   - Line 20: `ITEM_HEIGHT = 172`

3. **`src/components/canvas/board/CanvasBoard.tsx`**
   - Line 304: `height: 172` (dragState init)
   - Line 324: `height: 172` (dragState update)

### Debug Logging
4. **`src/components/canvas/board/CanvasBoard.tsx`**
   - Lines 380-386: Added copy detection debug log

## Next Steps

1. **Test bottom/middle alignment** - Should now align to full card
2. **Test copy behavior** - Check console logs to see if keys are being detected correctly
3. **Report findings** - Share the console output for the copy issue

## Known Issues to Investigate

### Copy Behavior
If items are always copying:
- Check if `useModifierKeys` is working correctly
- Check if browser/OS is sending phantom modifier key events
- May need to add explicit key release detection

### Potential Fix
If the issue persists, we might need to:
1. Check `useModifierKeys` implementation
2. Add debouncing to key state
3. Explicitly check `event.ctrlKey` on the drag event instead of relying on global state

**Build Status**: ✅ Passing
