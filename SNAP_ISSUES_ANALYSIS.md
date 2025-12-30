# 🔧 Snap Alignment Issues - Analysis & Fix Plan

## Issues Identified

### 1. **Asymmetric Snap Behavior** 🔴 CRITICAL
**Symptom**: 
- Horizon → Azure Virtual Desktop: Aligns correctly ✅
- Azure Virtual Desktop → Horizon: Doesn't align ❌

**Likely Cause**:
The dragged item might not be properly excluded from snap calculations, or the item IDs aren't matching correctly during the filter operation.

**Console Evidence**:
```
snappedPosition: {x: 344, y: 418}
```
The Y position `418` doesn't match what we'd expect for top alignment. If items should align at top, they should have the same Y coordinate.

### 2. **Grid Snap Not Working** 🟡 MEDIUM
**Symptom**: Grid is visible but items don't snap to 20px increments

**Likely Cause**:
The snap guides are taking priority, and when snap guides return a position, grid snap is bypassed. The logic should be:
- If snap guides detect alignment → Use snap guides
- Else if grid enabled → Use grid snap
- Else → Use raw position

But currently, snap guides might be returning the raw position even when no snap is detected, preventing grid snap from activating.

### 3. **Infinite Loop** 🔴 CRITICAL
Still occurring during drag operations.

**Root Cause**:
`handleDragMove` updates `dragState` → triggers `useSnapGuides` recalculation → might trigger another render → infinite loop

**Solution**:
Need better throttling with both time-based and distance-based checks.

### 4. **Missing Coordinate Display** 🟢 FEATURE REQUEST
Need to show X, Y, Width, Height for selected items.

## Fix Strategy

### Priority 1: Fix Snap Alignment
1. **Debug `useSnapGuides`**: Add logging to see which items are being checked
2. **Verify exclusion logic**: Ensure dragged item is properly excluded
3. **Check return values**: Ensure snap guides return original position when no snap detected

### Priority 2: Fix Infinite Loop
1. Add time-based throttling (16ms minimum between updates)
2. Increase distance threshold (3-5px instead of 1-2px)
3. Use `useRef` to track last update time

### Priority 3: Fix Grid Snap
1. Ensure `useSnapGuides` returns original position when no snap detected
2. Verify grid snap logic activates when snap guides don't apply

### Priority 4: Add Coordinate Display
1. Show X, Y in a subtle overlay (top-left or bottom-left of canvas)
2. Show Width, Height
3. Only show when item is selected
4. Update in real-time during drag

## Expected Behavior

### Snap Guides:
- **During drag**: Show red/blue guides when within 8px of alignment
- **On drop**: Item snaps to exact aligned position
- **Symmetric**: Works the same regardless of which item is being dragged

### Grid Snap:
- **When enabled**: Items snap to 20px grid (0, 20, 40, 60, ...)
- **Priority**: Only applies when snap guides don't detect alignment
- **Visual**: Grid dots visible when enabled

### Coordinates:
- **Display**: `X: 344, Y: 418, W: 300, H: 172`
- **Location**: Subtle, non-intrusive
- **Updates**: Real-time during drag

## Next Steps

1. Fix the failed `replace_file_content` operation
2. Add proper throttling to `handleDragMove`
3. Debug `useSnapGuides` to find asymmetry cause
4. Implement coordinate display
5. Test all scenarios
