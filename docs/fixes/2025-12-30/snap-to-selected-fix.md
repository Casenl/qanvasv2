# Snap to Selected Items Fix - 2025-12-30

## 🐛 **Probleem:**

Items konden niet snappen naar geselecteerde items.

**Scenario:**
```
1. Selecteer Item A (wordt blauw)
2. Sleep Item B naar Item A
3. ❌ Geen snap guides verschijnen
4. ❌ Item B snapt niet naar Item A
```

---

## ✅ **Oplossing:**

### **Root Cause:**
De snap guide logica excludeerde **alle geselecteerde items**, niet alleen de items die samen worden gesleept.

**Oude logica:**
```typescript
// ❌ Te streng - excludeert alle geselecteerde items
const { x: snappedX, y: snappedY, guides: snapGuides } = useSnapGuides(
    dragState?.id ?? null,
    dragPosition,
    items,
    true,
    Array.from(multiSelect.selectedIds) // ❌ Excludeert ALLE geselecteerde items
);
```

**Probleem:**
- Item A is geselecteerd
- Item B wordt gesleept
- Item A wordt uitgesloten van snap calculations
- Item B kan niet snappen naar Item A ❌

---

### **Nieuwe Logica:**

**Intelligente exclusion:**
```typescript
// ✅ Slim - alleen items die SAMEN worden gesleept excluden
const itemsBeingDragged = dragState?.id 
    ? (multiSelect.selectedIds.includes(dragState.id) && multiSelect.selectedIds.length > 1
        ? multiSelect.selectedIds // Multi-select: exclude all selected items
        : [dragState.id]) // Single item: only exclude the dragged item
    : [];

const { x: snappedX, y: snappedY, guides: snapGuides } = useSnapGuides(
    dragState?.id ?? null,
    dragPosition,
    items,
    true,
    itemsBeingDragged // ✅ Excludeert alleen items die samen worden gesleept
);
```

---

## 🎯 **Scenarios:**

### **Scenario 1: Single Item Drag (Not Selected)**
```
Items: [A (selected), B, C]
Action: Drag B

itemsBeingDragged = [B]  // Only B excluded
Snap targets: [A, C]     // ✅ Can snap to selected item A!
```

### **Scenario 2: Single Item Drag (Selected)**
```
Items: [A (selected), B, C]
Action: Drag A

itemsBeingDragged = [A]  // Only A excluded
Snap targets: [B, C]     // ✅ Can snap to all others
```

### **Scenario 3: Multi-Select Drag**
```
Items: [A (selected), B (selected), C]
Action: Drag A (drags A + B together)

itemsBeingDragged = [A, B]  // Both excluded
Snap targets: [C]           // ✅ Can't snap to items being dragged together
```

### **Scenario 4: Multi-Select Drag to Selected**
```
Items: [A (selected), B (selected), C (selected), D]
Action: Drag D

itemsBeingDragged = [D]     // Only D excluded
Snap targets: [A, B, C]     // ✅ Can snap to all selected items!
```

---

## 🔧 **Code Changes:**

### **File: CanvasBoard.tsx**

**Before:**
```typescript
const { x: snappedX, y: snappedY, guides: snapGuides } = useSnapGuides(
    dragState?.id ?? null,
    dragState ? { x: dragState.x, y: dragState.y, width: dragState.width, height: dragState.height } : null,
    items,
    true,
    Array.from(multiSelect.selectedIds) // ❌ Too strict
);
```

**After:**
```typescript
// Only exclude items that are being dragged together (multi-select drag)
// If dragging a single item, it should snap to ALL other items (including selected ones)
const itemsBeingDragged = dragState?.id 
    ? (multiSelect.selectedIds.includes(dragState.id) && multiSelect.selectedIds.length > 1
        ? multiSelect.selectedIds // Multi-select: exclude all selected items
        : [dragState.id]) // Single item: only exclude the dragged item
    : [];

const { x: snappedX, y: snappedY, guides: snapGuides } = useSnapGuides(
    dragState?.id ?? null,
    dragState ? { x: dragState.x, y: dragState.y, width: dragState.width, height: dragState.height } : null,
    items,
    true,
    itemsBeingDragged // ✅ Smart exclusion
);
```

---

## 🧪 **Test Cases:**

### **Test 1: Snap to Selected Item**
```
1. Selecteer Item A (klik op A)
2. Sleep Item B naar Item A
3. ✅ Snap guides verschijnen
4. ✅ Item B snapt naar Item A edges/center
```

### **Test 2: Snap Selected to Unselected**
```
1. Selecteer Item A (klik op A)
2. Sleep Item A naar Item B
3. ✅ Snap guides verschijnen
4. ✅ Item A snapt naar Item B
```

### **Test 3: Multi-Select Drag**
```
1. Selecteer Item A en B (Ctrl+click)
2. Sleep A (sleept A+B samen)
3. ✅ Snap guides naar Item C
4. ❌ Geen snap guides tussen A en B (correct!)
```

### **Test 4: Drag to Multiple Selected**
```
1. Selecteer Item A, B, C
2. Sleep Item D
3. ✅ Snap guides naar A, B, en C
4. ✅ Item D kan snappen naar alle geselecteerde items
```

---

## 📊 **Logic Flow:**

```
Is item being dragged?
    ↓ No
    itemsBeingDragged = []
    
    ↓ Yes
    Is dragged item selected?
        ↓ No
        itemsBeingDragged = [draggedItem]
        
        ↓ Yes
        Are multiple items selected?
            ↓ No (only 1 selected)
            itemsBeingDragged = [draggedItem]
            
            ↓ Yes (multi-select)
            itemsBeingDragged = [all selected items]
```

---

## ✅ **Benefits:**

### **Before:**
- ❌ Can't snap to selected items
- ❌ Confusing behavior
- ❌ Reduces snap utility

### **After:**
- ✅ Can snap to selected items
- ✅ Intuitive behavior
- ✅ Multi-select still works correctly
- ✅ Maximum snap utility

---

## 🎨 **Visual Examples:**

### **Example 1: Align to Selected**
```
Before:
┌─────────────────────────────────────────┐
│ [A] (selected, blue)                    │
│                                         │
│         [B] (dragging)                  │
│         ↓ No snap guides ❌             │
└─────────────────────────────────────────┘

After:
┌─────────────────────────────────────────┐
│ [A] (selected, blue)                    │
│  │ ← Snap guide!                        │
│ [B] (dragging, snapped)                 │
│  ✅ Aligned!                             │
└─────────────────────────────────────────┘
```

### **Example 2: Multi-Select Drag**
```
┌─────────────────────────────────────────┐
│ [A] [B] (both selected)                 │
│  ↓   ↓ (dragging together)              │
│ [A] [B]                                 │
│  │   │                                  │
│  └───┴─ No snap between A-B ✅          │
│                                         │
│ [C] ← Snap to C ✅                      │
└─────────────────────────────────────────┘
```

---

## 📝 **Summary:**

**Change:** Smart exclusion logic for snap targets
**Impact:** Items can now snap to selected items
**Compatibility:** Multi-select drag still works correctly

**Files Modified:**
- ✅ `CanvasBoard.tsx` - Updated snap guide exclusion logic

---

**Status:** Snap to selected items nu volledig werkend! 🎉
**Test:** Selecteer item → Sleep ander item → Snap guides verschijnen! ✅
