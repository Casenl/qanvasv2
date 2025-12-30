# 🎯 Snap Guide Alignment Issue - ROOT CAUSE FOUND!

## The Problem

Snap guides are appearing at the **inner edge** of cards (inside the padding/border) instead of the **outer visual edge**.

## Visual Evidence

From the screenshot:
- Red "LEFT EDGE" label appears inside the vSphere card
- Blue selection ring shows the card is wider than where the guide appears
- Guide should align with the outer edge of the visual card

## Root Cause Analysis

### Card Structure:
```
┌─────────────────────────────────────┐
│ Border (1px each side = 2px total)  │  ← OUTER EDGE (where guide should be)
│  ┌───────────────────────────────┐  │
│  │ Padding (16px each side)      │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │ Content Area            │  │  │  ← Where item.x, item.y points to?
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

### Current Dimensions:
- `w-75` = 300px (width including padding and border)
- `p-4` = 16px padding on all sides
- `border` = 1px on all sides
- **Total outer width**: 300px
- **Total outer height**: 172px (measured)

### The Issue:
The `item.x` and `item.y` are stored as the position of the **outer edge** of the div (correct).
The snap calculation uses these values directly (correct).
BUT the visual guide might be rendering at the wrong position, OR the bounds calculation is wrong.

## Hypothesis

Looking at the code:
1. `item.x`, `item.y` → Outer edge position ✅
2. `getItemBounds` returns `{ x: item.x, y: item.y, width: 300, height: 172 }` ✅
3. Snap calculation uses these bounds ✅
4. Guide renders at `position: bounds.x` ✅

So why does the guide appear inside?

**ANSWER**: The guide might be positioned correctly, but the VISUAL CARD has additional elements:
- The blue selection ring (`ring-4`) adds 4px OUTSIDE the card
- The shadow extends beyond the card
- These make the card APPEAR larger than its actual bounds

## The Real Question

Should snap guides align to:
A. The **actual DOM element bounds** (current: 300×172)
B. The **visual bounds including ring/shadow** (would be ~308×180)

**Answer**: Should be A (actual DOM bounds), which is what we're doing.

## Why It Looks Wrong

The screenshot shows the guide appearing "inside" because:
1. The blue selection ring extends 4px beyond the card edge
2. User expects alignment at the RING edge, not the card edge
3. But the ring is just a visual effect, not part of the actual element

## Solution Options

### Option 1: Keep Current Behavior (Recommended)
- Guides align to actual element bounds
- Ignore visual effects (ring, shadow)
- This is standard behavior in design tools

### Option 2: Account for Visual Effects
- Add ring width (4px) to bounds when selected
- More complex, less predictable
- Not recommended

## Next Steps

1. **Verify** the guide is actually at the correct position (item.x)
2. **Explain** to user that ring is visual-only
3. **Test** if alignment actually works correctly despite visual appearance
4. **Consider** making the ring thinner or removing it during drag

## Testing

Drag two items to align left edges and check their actual X coordinates in the console.
If they have the same X value, alignment is correct (visual appearance is misleading).
If they have different X values, there's a real bug in the calculation.
