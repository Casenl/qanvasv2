# 🔍 Snap Guides - Detailed Debug Session

## Issues Addressed

### Issue 1: Red Line Extending Beyond Canvas ✅ FIXED
**Problem**: The red guide line was visible in the sidebar area.

**Root Cause**: The guide container wasn't properly clipped to canvas bounds.

**Fix Applied**:
1. Added explicit `width`, `height`, and `overflow: 'hidden'` to SnapGuides container
2. Added filtering to skip guides outside canvas bounds:
```typescript
.filter(guide => {
    if (guide.type === 'vertical') {
        return guide.position >= 0 && guide.position <= canvasRect.width;
    } else {
        return guide.position >= 0 && guide.position <= canvasRect.height;
    }
})
```

### Issue 2: Only Showing Top Edge Alignment
**Status**: INVESTIGATING

The algorithm SHOULD be checking all edges. Let's verify with console logs.

## Enhanced Debug Logging

I've added comprehensive logging at multiple levels:

### Level 1: Drag State
```
🔍 Snap Debug - Current dragged item: {
    id: "item-xxx",
    position: { x, y, width, height },
    current: { left, right, centerX, top, bottom, centerY }
}
```

### Level 2: Per-Item Checks
```
  Item item-yyy: {
    target: { left, right, centerX },
    checks: [
        { label: 'Left Edge', distance: '5.0', withinThreshold: true },
        { label: 'Right to Left', distance: '245.0', withinThreshold: false },
        ...
    ]
}
```

### Level 3: Best Snap Found
```
✅ X Snap found: {
    distance: 5.2,
    position: 150,
    guideType: 'edge',
    label: 'Left Edge',
    itemId: 'item-yyy'
}
```

### Level 4: Guide Rendering
```
📐 SnapGuides rendering: {
    guidesCount: 2,
    canvasRect: { width: 1200, height: 800 },
    guides: [
        { type: 'vertical', position: 150, label: 'Left Edge' },
        { type: 'horizontal', position: 220, label: 'Top Edge' }
    ]
}
```

## What to Look For in Console

### Scenario: Dragging item near another item

**Expected Console Output**:

```
🔍 Snap Debug - Current dragged item: {...}
🔍 Snap Debug - Other items count: 2

  Item item-123: {
    target: { left: 100, right: 340, centerX: 220 },
    checks: [
        { label: 'Left Edge', distance: '50.0', withinThreshold: false },
        { label: 'Right to Left', distance: '290.0', withinThreshold: false },
        { label: 'Left to Right', distance: '-140.0', withinThreshold: false },
        { label: 'Right Edge', distance: '100.0', withinThreshold: false },
        { label: 'Center', distance: '70.0', withinThreshold: false }
    ]
  }

  Item item-456: {
    target: { left: 200, right: 440, centerX: 320 },
    checks: [
        { label: 'Left Edge', distance: '5.0', withinThreshold: true },  ← THIS ONE!
        { label: 'Right to Left', distance: '245.0', withinThreshold: false },
        ...
    ]
  }

✅ X Snap found: {
    distance: 5,
    position: 200,
    label: 'Left Edge'
}

📐 SnapGuides rendering: {
    guidesCount: 1,
    guides: [{ type: 'vertical', position: 200, label: 'Left Edge' }]
}
```

## Test Cases

### Test 1: Left Edge to Left Edge
1. Drag item slowly toward another item's left edge
2. **Expected**: Red vertical guide appears when within 8px
3. **Console**: Should show `Left Edge` with small distance

### Test 2: Right Edge to Right Edge
1. Align the right edges of two items
2. **Expected**: Red vertical guide at the right edge position
3. **Console**: Should show `Right Edge` with small distance

### Test 3: Left Edge to Right Edge (Abutting)
1. Drag item so its left edge approaches another item's right edge
2. **Expected**: Red vertical guide at the target's right edge
3. **Console**: Should show `Right to Left` with small distance

### Test 4: Center to Center
1. Drag item to center-align with another
2. **Expected**: Blue vertical guide at center position
3. **Console**: Should show `Center` with small distance

### Test 5: Top Edge to Top Edge
1. Align top edges
2. **Expected**: Red horizontal guide
3. **Console**: Should show `Top Edge`

### Test 6: Bottom Edge to Bottom Edge
1. Align bottom edges
2. **Expected**: Red horizontal guide
3. **Console**: Should show `Bottom Edge`

### Test 7: Middle to Middle
1. Vertically center two items
2. **Expected**: Blue horizontal guide
3. **Console**: Should show `Middle`

### Test 8: Canvas Edge Behavior
1. Drag item to left edge of canvas (x ≈ 0)
2. **Expected**: Guide should NOT extend into sidebar
3. **Console**: Guide position should be filtered if < 0

## Diagnostic Questions

If guides still aren't showing correctly, check:

### Q1: Are guides being detected?
Look for `✅ X Snap found` or `✅ Y Snap found` in console.
- **YES**: Detection works, rendering might be the issue
- **NO**: Detection logic needs fixing

### Q2: What's the `withinThreshold` value?
Look at the `checks` array for each item.
- **All false**: Items are too far apart (> 8px)
- **Some true**: Should be detecting those

### Q3: What's the guide position?
Look at `📐 SnapGuides rendering`.
- **Position < 0**: Should be filtered out
- **Position > canvas width/height**: Should be filtered out
- **Position within bounds**: Should render

### Q4: Is the distance calculation correct?
Example: If dragged left = 100, target left = 105:
- Distance = 105 - 100 = 5
- Abs(5) < 8 = true ✅
- Should snap!

## Known Edge Cases

### Canvas Boundary
- Guides at x=0 or y=0 should render
- Guides at x<0 or y<0 should be filtered
- Guides beyond canvas should be filtered

### Multiple Items
- Should pick the CLOSEST snap (minimum distance)
- Not the first one found

### Overlapping Items
- All 5 checks might be within threshold
- Should pick the one with smallest absolute distance

## Next Steps

1. **Open browser console** (F12)
2. **Drag an item** near another item
3. **Copy the console output** and share it
4. We can diagnose exactly what's happening

The detailed logs will show us:
- Which edges are being checked ✓
- Which distances are within threshold ✓
- Which snap is being selected ✓
- Whether the guide is being rendered ✓
