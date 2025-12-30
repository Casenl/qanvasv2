# ✅ Card Width + Snap Guides for New Items

## Changes Implemented

### 1. **Card Width Changed to 300px** ✅
Changed all cards from 240px (w-60) to 300px (w-75) for better readability.

**Files Updated**:
- `CanvasItemCard.tsx`: Changed `w-60` → `w-75`
- `useSnapGuides.ts`: `ITEM_WIDTH = 300`
- `alignment.ts`: `ITEM_WIDTH = 300`
- `CanvasBoard.tsx`: All dragState width values = 300

**Visual Impact**:
- Cards are now 25% wider (240px → 300px)
- More space for content
- Better proportions

### 2. **Snap Guides for Sidebar Items** ✅
Snap guides now work when dragging NEW items from the sidebar, not just existing canvas items.

**How It Works**:

#### handleDragStart:
```typescript
if (sourceData?.source === 'sidebar') {
    // Initialize dragState for new item
    setDragState({
        id: 'new-item-temp',
        x: 0,
        y: 0,
        width: 300,
        height: 172
    });
}
```

#### handleDragMove:
```typescript
if (sourceData?.source === 'sidebar') {
    // Track position of new item being dragged
    const droppedRect = active.rect.current.translated;
    const newX = droppedRect.left - canvasRect.left;
    const newY = droppedRect.top - canvasRect.top;
    
    setDragState({
        id: 'new-item-temp',
        x: newX,
        y: newY,
        width: 300,
        height: 172
    });
}
```

**Result**: 
- Snap guides appear when dragging from sidebar
- Helps align new items with existing ones
- Same visual feedback as moving existing items

## Future Enhancement Noted

### Collapsible Card Footer
User requested: "I want the below part to be able to fold/unfold with more details if needed"

**Plan**:
- Add expand/collapse button to card footer
- Show/hide additional details section
- Animate the height transition
- Store expanded state per item

**Not implemented yet** - noted for future iteration.

## Testing

### Card Width:
1. Reload page
2. Check that all cards are wider (300px instead of 240px)
3. Verify snap guides still align correctly

### Snap Guides for New Items:
1. Drag an item from the sidebar (e.g., "vSphere")
2. Move it near an existing canvas item
3. **Expected**: Red/blue snap guides appear
4. **Expected**: Item snaps to alignment points
5. Drop the item
6. **Expected**: Item placed at snapped position

## Files Modified

1. **`src/components/canvas/CanvasItemCard.tsx`**
   - Line 65: `w-60` → `w-75`

2. **`src/hooks/useSnapGuides.ts`**
   - Line 20: `ITEM_WIDTH = 300`

3. **`src/lib/utils/alignment.ts`**
   - Line 20: `ITEM_WIDTH = 300`

4. **`src/components/canvas/board/CanvasBoard.tsx`**
   - Lines 293-337: Added sidebar item support in handleDragStart and handleDragMove
   - All width values changed to 300

## Build Status
✅ **Build passing**
✅ **Ready to test**

## Next Steps

1. **Test the changes** (reload page)
2. **Verify card width** is now 300px
3. **Test snap guides** with sidebar items
4. **Future**: Implement collapsible card footer
