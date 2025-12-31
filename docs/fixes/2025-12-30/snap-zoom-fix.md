# Snap & Alignment Fixes - 2025-12-30

## 🐛 **Problemen Opgelost:**

### **1. Snap werkt niet bij andere zoom levels** ✅

**Probleem:**
- Snap guides werkten alleen bij 100% zoom
- Bij in/uitzoomen waren de snap posities incorrect
- Items snapten naar verkeerde posities

**Root Cause:**
De snap berekening gebruikte **screen coordinates** maar had **canvas coordinates** nodig.

**Voor:**
```typescript
// ❌ Screen coordinates (verkeerd bij zoom != 100%)
let newX = Math.round(droppedRect.left - canvasRect.left);
let newY = Math.round(droppedRect.top - canvasRect.top);
```

**Na:**
```typescript
// ✅ Canvas coordinates (correct bij alle zoom levels)
const { zoom, pan } = canvasTransform;
const screenX = droppedRect.left - canvasRect.left;
const screenY = droppedRect.top - canvasRect.top;

// Convert to canvas coordinates
let newX = (screenX - pan.x) / zoom;
let newY = (screenY - pan.y) / zoom;
```

**Formule:**
```
Canvas X = (Screen X - Pan X) / Zoom
Canvas Y = (Screen Y - Pan Y) / Zoom
```

---

### **2. Delta berekening bij canvas items** ✅

**Probleem:**
- Bij slepen van bestaande items was de delta niet correct bij zoom

**Voor:**
```typescript
// ❌ Delta zonder zoom correctie
let newX = item.x + delta.x;
let newY = item.y + delta.y;
```

**Na:**
```typescript
// ✅ Delta met zoom correctie
const { zoom } = canvasTransform;
let newX = item.x + (delta.x / zoom);
let newY = item.y + (delta.y / zoom);
```

---

### **3. Threshold verlaagd voor betere responsiviteit** ✅

**Voor:**
```typescript
// ❌ Te hoge threshold - traag
Math.abs(dragState.x - newX) >= 5  // 5px voor canvas items
Math.abs(dragState.x - newX) >= 8  // 8px voor nieuwe items
```

**Na:**
```typescript
// ✅ Lagere threshold - responsief
Math.abs(dragState.x - newX) >= 1  // 1px voor alle items
```

---

## 🎯 **Hoe Het Nu Werkt:**

### **Coordinate Systems:**

```
┌─────────────────────────────────────────────────┐
│ Screen Coordinates (Browser)                    │
│ ┌─────────────────────────────────────────────┐ │
│ │ Canvas Viewport (with zoom & pan)           │ │
│ │                                             │ │
│ │   Canvas Coordinates (Internal)             │ │
│ │   ┌─────────────────────────────┐           │ │
│ │   │                             │           │ │
│ │   │  Items positioned here      │           │ │
│ │   │  (zoom-independent)         │           │ │
│ │   │                             │           │ │
│ │   └─────────────────────────────┘           │ │
│ │                                             │ │
│ └─────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────┘
```

### **Conversie Flow:**

```
1. User drags item
   ↓
2. Browser gives Screen Coordinates
   ↓
3. Convert to Canvas Coordinates:
   - Subtract pan offset
   - Divide by zoom
   ↓
4. Snap calculation (in canvas coords)
   ↓
5. Store in items array (canvas coords)
   ↓
6. Render: Convert back to screen coords
   - Multiply by zoom
   - Add pan offset
```

---

## 🧪 **Test Scenarios:**

### **Test 1: Snap bij 100% Zoom** ✅
```
1. Zoom = 100% (1.0)
2. Sleep product naar ander product
3. ✅ Snap guides verschijnen
4. ✅ Product snapt correct
```

### **Test 2: Snap bij 50% Zoom** ✅
```
1. Zoom out naar 50% (0.5)
2. Sleep product naar ander product
3. ✅ Snap guides verschijnen op juiste plek
4. ✅ Product snapt correct (niet 2x te ver)
```

### **Test 3: Snap bij 200% Zoom** ✅
```
1. Zoom in naar 200% (2.0)
2. Sleep product naar ander product
3. ✅ Snap guides verschijnen op juiste plek
4. ✅ Product snapt correct (niet halverwege)
```

### **Test 4: Snap met Pan** ✅
```
1. Pan canvas naar rechts/onder
2. Sleep product naar ander product
3. ✅ Snap guides volgen pan
4. ✅ Product snapt correct
```

### **Test 5: Nieuwe Producten** ✅
```
1. Sleep nieuw product van sidebar
2. ✅ Snap guides verschijnen tijdens slepen
3. ✅ Product snapt bij drop
4. ✅ Product wordt direct geselecteerd
```

---

## 📊 **Code Changes:**

### **Bestanden Aangepast:**

1. **`src/components/canvas/board/CanvasBoard.tsx`**
   - `handleDragMove()` - Canvas coord conversie
   - `handleDragEnd()` - Canvas coord conversie
   - Threshold verlaagd van 5/8px naar 1px

### **Functies:**

#### **handleDragMove (Canvas Items)**
```typescript
// Voor bestaande canvas items
const { zoom } = canvasTransform;
let newX = item.x + (delta.x / zoom);  // Delta correctie
let newY = item.y + (delta.y / zoom);
```

#### **handleDragMove (Sidebar Items)**
```typescript
// Voor nieuwe items van sidebar
const { zoom, pan } = canvasTransform;
const screenX = droppedRect.left - canvasRect.left;
const screenY = droppedRect.top - canvasRect.top;

let newX = (screenX - pan.x) / zoom;  // Screen → Canvas
let newY = (screenY - pan.y) / zoom;
```

#### **handleDragEnd**
```typescript
// Bij drop (voor alle items)
const { zoom, pan } = canvasTransform;
const screenX = droppedRect.left - canvasRect.left;
const screenY = droppedRect.top - canvasRect.top;

let rawX = (screenX - pan.x) / zoom;  // Screen → Canvas
let rawY = (screenY - pan.y) / zoom;
```

---

## 🔍 **Debug Tips:**

### **Als Snap Niet Werkt:**

1. **Check Console:**
   ```javascript
   console.log('Drag State:', dragState);
   console.log('Snap Guides:', snapGuides);
   console.log('Snapped Position:', { snappedX, snappedY });
   ```

2. **Check Transform:**
   ```javascript
   console.log('Canvas Transform:', {
       zoom: canvasTransform.zoom,
       pan: canvasTransform.pan
   });
   ```

3. **Check Coordinates:**
   ```javascript
   console.log('Screen Coords:', { screenX, screenY });
   console.log('Canvas Coords:', { canvasX, canvasY });
   ```

### **Uncomment Debug Logs:**

In `useSnapGuides.ts`:
```typescript
// Regel 66-70: Current dragged item
// Regel 77: Other items count
// Regel 104-107: Per-item checks
// Regel 160: X snap found
// Regel 233: Y snap found
// Regel 259-265: Final snap result
```

---

## 📝 **Nieuwe Items Direct Alignen:**

**Status:** ✅ **Werkt al!**

De code selecteert nieuwe items al direct:
```typescript
// Regel 667-668 (single product)
setItems(prev => [...prev, newItem]);
multiSelect.selectMultiple([newItem.id]);

// Regel 650-651 (solution)
setItems(prev => [...prev, ...newItems]);
multiSelect.selectMultiple(newItems.map(item => item.id));
```

**Hoe Te Gebruiken:**
1. Sleep product van sidebar
2. Drop op canvas
3. ✅ Product wordt direct geselecteerd
4. ✅ Alignment toolbar verschijnt
5. ✅ Kan direct alignen met andere producten

**Note:** Als je meerdere producten wilt alignen:
1. Sleep eerste product
2. Ctrl+Click op andere producten
3. Alignment toolbar toont alle opties

---

## 🎯 **Volgende Stappen:**

### **Optioneel: Smart Snap Improvements**

1. **Snap Prioriteit:**
   - Center snaps hebben voorrang
   - Edge snaps als fallback
   - Spacing snaps voor distributie

2. **Visual Feedback:**
   - Snap guide kleuren (center = blauw, edge = grijs)
   - Snap distance indicator
   - Snap preview ghost

3. **Snap Settings:**
   - Toggle snap on/off (Ctrl+U)
   - Adjust snap threshold
   - Snap to grid option

---

**Status:** Alle snap issues opgelost! 🎉
**Tested:** 100%, 50%, 200% zoom + pan ✅
**Performance:** Threshold 1px = responsive ✅
