# Box Selection Zoom Fix - 2025-12-30

## 🐛 **Probleem:**

Box selection (slepen van een vierkant om items te selecteren) werkte niet bij zoom levels anders dan 100%.

**Symptomen:**
- Bij 50% zoom: Selection box te groot, selecteert verkeerde items
- Bij 200% zoom: Selection box te klein, selecteert geen items
- Met pan: Selection box op verkeerde plek

---

## ✅ **Oplossing:**

### **Root Cause:**
Box selection gebruikte **screen coordinates** maar items staan in **canvas coordinates**.

**Formule:**
```
Canvas X = (Screen X - Pan X) / Zoom
Canvas Y = (Screen Y - Pan Y) / Zoom

Screen X = Canvas X * Zoom + Pan X
Screen Y = Canvas Y * Zoom + Pan Y
```

---

## 🔧 **Code Changes:**

### **1. CanvasWorkspace.tsx - Mouse Handlers**

#### **handleMouseDown (Start Selection)**

**Voor:**
```typescript
// ❌ Screen coordinates
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;
multiSelect.startBoxSelection(x, y);
```

**Na:**
```typescript
// ✅ Canvas coordinates
const screenX = e.clientX - rect.left;
const screenY = e.clientY - rect.top;
const canvasX = (screenX - canvasTransform.pan.x) / canvasTransform.zoom;
const canvasY = (screenY - canvasTransform.pan.y) / canvasTransform.zoom;
multiSelect.startBoxSelection(canvasX, canvasY);
```

#### **handleMouseMove (Update Selection)**

**Voor:**
```typescript
// ❌ Screen coordinates
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;
multiSelect.updateBoxSelection(x, y);
```

**Na:**
```typescript
// ✅ Canvas coordinates
const screenX = e.clientX - rect.left;
const screenY = e.clientY - rect.top;
const canvasX = (screenX - canvasTransform.pan.x) / canvasTransform.zoom;
const canvasY = (screenY - canvasTransform.pan.y) / canvasTransform.zoom;
multiSelect.updateBoxSelection(canvasX, canvasY);
```

#### **handleMouseUp (End Selection)**

**Voor:**
```typescript
// ❌ Box in screen coords, items in canvas coords - mismatch!
const itemsInBox = items.filter(item => {
    return item.x >= box.x && ...  // Wrong comparison!
});
```

**Na:**
```typescript
// ✅ Box in canvas coords, items in canvas coords - match!
// Box is now in canvas coordinates, items are also in canvas coordinates
const itemsInBox = items.filter(item => {
    return item.x >= box.x && ...  // Correct comparison!
});
```

---

### **2. SelectionBox.tsx - Visual Rendering**

**Voor:**
```typescript
// ❌ Renders box in canvas coordinates (wrong layer)
export function SelectionBox({ box }: SelectionBoxProps) {
    return (
        <div style={{
            left: box.x,      // Canvas coords
            top: box.y,       // Canvas coords
            width: box.width,
            height: box.height
        }} />
    );
}
```

**Na:**
```typescript
// ✅ Converts canvas coords to screen coords for rendering
export function SelectionBox({ box, canvasTransform }: SelectionBoxProps) {
    // Convert canvas coordinates to screen coordinates
    const screenX = box.x * canvasTransform.zoom + canvasTransform.pan.x;
    const screenY = box.y * canvasTransform.zoom + canvasTransform.pan.y;
    const screenWidth = box.width * canvasTransform.zoom;
    const screenHeight = box.height * canvasTransform.zoom;

    return (
        <div style={{
            left: screenX,      // Screen coords
            top: screenY,       // Screen coords
            width: screenWidth,
            height: screenHeight
        }} />
    );
}
```

---

## 📊 **Coordinate Flow:**

### **Selection Start:**
```
User clicks at screen position (500, 300)
    ↓
Convert to canvas coords:
    canvasX = (500 - pan.x) / zoom
    canvasY = (300 - pan.y) / zoom
    ↓
Store in selectionBox: { x: canvasX, y: canvasY, width: 0, height: 0 }
```

### **Selection Update:**
```
User drags to screen position (700, 500)
    ↓
Convert to canvas coords:
    canvasX = (700 - pan.x) / zoom
    canvasY = (500 - pan.y) / zoom
    ↓
Update selectionBox: { x, y, width: canvasX - x, height: canvasY - y }
```

### **Selection Render:**
```
SelectionBox receives canvas coords: { x: 100, y: 50, width: 200, height: 150 }
    ↓
Convert to screen coords:
    screenX = 100 * zoom + pan.x
    screenY = 50 * zoom + pan.y
    screenWidth = 200 * zoom
    screenHeight = 150 * zoom
    ↓
Render at screen position
```

### **Selection End:**
```
selectionBox in canvas coords: { x: 100, y: 50, width: 200, height: 150 }
Items in canvas coords: [{ x: 120, y: 70, ... }, ...]
    ↓
Compare directly (same coordinate system):
    item.x >= box.x && item.x + width <= box.x + box.width
    ↓
Select matching items
```

---

## 🎯 **Why This Works:**

### **Coordinate Systems:**

```
┌─────────────────────────────────────────────────┐
│ Screen Coordinates (Browser/Viewport)          │
│ ┌─────────────────────────────────────────────┐ │
│ │ Canvas Viewport (with zoom & pan)           │ │
│ │                                             │ │
│ │   Canvas Coordinates (Internal)             │ │
│ │   ┌─────────────────────────────┐           │ │
│ │   │                             │           │ │
│ │   │  Items (canvas coords)      │           │ │
│ │   │  SelectionBox (canvas coords)│          │ │
│ │   │                             │           │ │
│ │   └─────────────────────────────┘           │ │
│ │                                             │ │
│ └─────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────┘
```

**Key Insight:**
- **Storage**: Canvas coordinates (zoom-independent)
- **Comparison**: Canvas coordinates (items vs box)
- **Rendering**: Screen coordinates (for visual display)

---

## 🧪 **Test Scenarios:**

### **Test 1: Box Selection at 100% Zoom**
```
1. Zoom = 100% (1.0), Pan = (0, 0)
2. Drag box from (100, 100) to (400, 300)
3. ✅ Box appears at correct position
4. ✅ Items within box are selected
```

**Calculation:**
```
Start: screenX=100, screenY=100
  → canvasX = (100 - 0) / 1.0 = 100
  → canvasY = (100 - 0) / 1.0 = 100

End: screenX=400, screenY=300
  → canvasX = (400 - 0) / 1.0 = 400
  → canvasY = (300 - 0) / 1.0 = 300

Box: { x: 100, y: 100, width: 300, height: 200 }

Render:
  → screenX = 100 * 1.0 + 0 = 100
  → screenY = 100 * 1.0 + 0 = 100
  → width = 300 * 1.0 = 300
  → height = 200 * 1.0 = 200
```

### **Test 2: Box Selection at 50% Zoom**
```
1. Zoom = 50% (0.5), Pan = (0, 0)
2. Drag box from (100, 100) to (400, 300)
3. ✅ Box appears at correct position
4. ✅ Items within box are selected
```

**Calculation:**
```
Start: screenX=100, screenY=100
  → canvasX = (100 - 0) / 0.5 = 200
  → canvasY = (100 - 0) / 0.5 = 200

End: screenX=400, screenY=300
  → canvasX = (400 - 0) / 0.5 = 800
  → canvasY = (300 - 0) / 0.5 = 600

Box: { x: 200, y: 200, width: 600, height: 400 }

Render:
  → screenX = 200 * 0.5 + 0 = 100 ✅
  → screenY = 200 * 0.5 + 0 = 100 ✅
  → width = 600 * 0.5 = 300 ✅
  → height = 400 * 0.5 = 200 ✅
```

### **Test 3: Box Selection at 200% Zoom**
```
1. Zoom = 200% (2.0), Pan = (0, 0)
2. Drag box from (100, 100) to (400, 300)
3. ✅ Box appears at correct position
4. ✅ Items within box are selected
```

**Calculation:**
```
Start: screenX=100, screenY=100
  → canvasX = (100 - 0) / 2.0 = 50
  → canvasY = (100 - 0) / 2.0 = 50

End: screenX=400, screenY=300
  → canvasX = (400 - 0) / 2.0 = 200
  → canvasY = (300 - 0) / 2.0 = 150

Box: { x: 50, y: 50, width: 150, height: 100 }

Render:
  → screenX = 50 * 2.0 + 0 = 100 ✅
  → screenY = 50 * 2.0 + 0 = 100 ✅
  → width = 150 * 2.0 = 300 ✅
  → height = 100 * 2.0 = 200 ✅
```

### **Test 4: Box Selection with Pan**
```
1. Zoom = 100% (1.0), Pan = (50, 30)
2. Drag box from (100, 100) to (400, 300)
3. ✅ Box appears at correct position
4. ✅ Items within box are selected
```

**Calculation:**
```
Start: screenX=100, screenY=100
  → canvasX = (100 - 50) / 1.0 = 50
  → canvasY = (100 - 30) / 1.0 = 70

End: screenX=400, screenY=300
  → canvasX = (400 - 50) / 1.0 = 350
  → canvasY = (300 - 30) / 1.0 = 270

Box: { x: 50, y: 70, width: 300, height: 200 }

Render:
  → screenX = 50 * 1.0 + 50 = 100 ✅
  → screenY = 70 * 1.0 + 30 = 100 ✅
  → width = 300 * 1.0 = 300 ✅
  → height = 200 * 1.0 = 200 ✅
```

---

## 📝 **Files Modified:**

1. ✅ **CanvasWorkspace.tsx**
   - `handleMouseDown`: Convert screen → canvas coords
   - `handleMouseMove`: Convert screen → canvas coords
   - `handleMouseUp`: Compare in canvas coords

2. ✅ **SelectionBox.tsx**
   - Added `canvasTransform` prop
   - Convert canvas → screen coords for rendering

---

## ✅ **Verification:**

### **Checklist:**
- [x] Box selection works at 100% zoom
- [x] Box selection works at 50% zoom
- [x] Box selection works at 200% zoom
- [x] Box selection works with pan
- [x] Box selection works with zoom + pan
- [x] Selection box renders at correct position
- [x] Selection box has correct size
- [x] Items within box are correctly selected
- [x] Ctrl+drag adds to selection

---

## 🎨 **Visual Behavior:**

### **Expected:**
```
User drags from A to B:
┌─────────────────────────────────────────┐
│ Canvas                                  │
│                                         │
│    A ┌─────────────────┐                │
│      │ Selection Box   │                │
│      │                 │                │
│      │  [Item1] [Item2]│                │
│      │                 │                │
│      └─────────────────┘ B              │
│                                         │
└─────────────────────────────────────────┘

Result: Item1 and Item2 selected ✅
```

### **At 50% Zoom:**
```
User drags same screen distance:
┌─────────────────────────────────────────┐
│ Canvas (zoomed out)                     │
│                                         │
│  A ┌───────────────────────────┐       │
│    │ Selection Box (larger in  │       │
│    │ canvas coords)            │       │
│    │  [Item1] [Item2] [Item3]  │       │
│    │                           │       │
│    └───────────────────────────┘ B     │
│                                         │
└─────────────────────────────────────────┘

Result: More items selected (correct!) ✅
```

---

**Status:** Box selection nu volledig werkend bij alle zoom levels! 🎉
**Test:** Zoom in/out, pan, en sleep box → Items correct geselecteerd! ✅
