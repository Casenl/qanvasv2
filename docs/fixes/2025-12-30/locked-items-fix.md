# Locked Items Selection Fix - 2025-12-30

## 🐛 **Probleem:**

**Symptoom:**
- Locked items kunnen niet worden geselecteerd
- Locked items kunnen niet worden unlocked
- User zit vast met permanent locked items

**Root Cause:**
Locked items hadden **geen event listeners**, dus:
- ❌ Geen click events
- ❌ Geen selectie mogelijk
- ❌ Geen unlock mogelijk

**Code Voor:**
```typescript
// ❌ PROBLEEM: Lege listeners voor locked items
const mergedListeners = item.locked ? {} : {
    ...listeners,
    onMouseDown: (e) => { ... }
};
```

---

## ✅ **Oplossing:**

### **Principe:**
- **Locked items = Selecteerbaar, NIET verplaatsbaar**
- Click events WEL toestaan
- Drag events NIET toestaan

### **Code Na:**
```typescript
// ✅ OPLOSSING: Click events voor locked items, geen drag
const mergedListeners = item.locked ? {
    // For locked items, only handle click (no drag listeners)
    onMouseDown: (e: React.MouseEvent) => {
        e.stopPropagation();
        mouseDownPos.current = { x: e.clientX, y: e.clientY };
        dragOccurred.current = false;
        // Don't call dnd-kit's listeners - this prevents dragging
    }
} : {
    // For unlocked items: Full drag + click support
    ...listeners,
    onMouseDown: (e: React.MouseEvent) => {
        e.stopPropagation();
        mouseDownPos.current = { x: e.clientX, y: e.clientY };
        dragOccurred.current = false;
        if (listeners?.onMouseDown) {
            listeners.onMouseDown(e as any);
        }
    }
};
```

---

## 🎯 **Hoe Het Nu Werkt:**

### **Locked Items:**

```
User clicks locked item
    ↓
onMouseDown fires (custom handler)
    ↓
e.stopPropagation() (prevent canvas deselect)
    ↓
Track mouse position
    ↓
DON'T call dnd-kit listeners (no drag)
    ↓
onClick fires (if < 5px movement)
    ↓
Item wordt geselecteerd ✅
    ↓
Toolbar verschijnt met Unlock button ✅
```

### **Unlocked Items:**

```
User clicks unlocked item
    ↓
onMouseDown fires (custom handler)
    ↓
e.stopPropagation()
    ↓
Track mouse position
    ↓
Call dnd-kit listeners (enable drag) ✅
    ↓
If drag: Item moves ✅
If click: Item selected ✅
```

---

## 🔒 **Lock/Unlock Flow:**

### **Lock Item:**
```
1. Selecteer item(s)
2. Toolbar → 🔓 Lock button
3. Item.locked = true
4. ✅ Item kan niet meer slepen
5. ✅ Item KAN nog steeds selecteren
6. ✅ Toolbar toont nu 🔒 Unlock button
```

### **Unlock Item:**
```
1. Click locked item (🔒 icon visible)
2. ✅ Item wordt geselecteerd (FIX!)
3. Toolbar verschijnt met 🔒 Unlock button
4. Click Unlock
5. Item.locked = false
6. ✅ Item kan weer slepen
7. ✅ Toolbar toont nu 🔓 Lock button
```

---

## 🛡️ **Dubbele Beveiliging:**

### **Layer 1: useDraggable disabled**
```typescript
const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: item.id,
    data: { ...item, source: 'canvas' },
    disabled: item.locked  // ✅ Prevents drag initialization
});
```

### **Layer 2: handleDragEnd check**
```typescript
// In CanvasBoard.tsx
const draggedItem = items.find(it => it.id === active.id);
if (draggedItem.locked) {
    setDebugInfo('Item is locked');
    return;  // ✅ Prevents position update
}
```

**Waarom beide?**
- Layer 1: Voorkomt dat drag start (primary)
- Layer 2: Fallback als Layer 1 faalt (safety)

---

## 🧪 **Test Scenarios:**

### **Test 1: Lock & Unlock Single Item** ✅
```
1. Selecteer vSphere
2. Toolbar → 🔓 Lock
3. ✅ vSphere locked (🔒 icon verschijnt)
4. Try to drag vSphere
5. ✅ Kan niet slepen
6. Click vSphere
7. ✅ Wordt geselecteerd (FIX!)
8. Toolbar → 🔒 Unlock
9. ✅ vSphere unlocked
10. Try to drag vSphere
11. ✅ Kan weer slepen
```

### **Test 2: Lock Multiple Items** ✅
```
1. Selecteer Azure + Horizon
2. Toolbar → 🔓 Lock
3. ✅ Beide locked
4. Click Azure
5. ✅ Azure geselecteerd
6. Shift+Click Horizon
7. ✅ Beide geselecteerd
8. Toolbar → 🔒 Unlock
9. ✅ Beide unlocked
```

### **Test 3: Mixed Selection (Locked + Unlocked)** ✅
```
1. Lock vSphere
2. Selecteer vSphere (locked)
3. Shift+Click Azure (unlocked)
4. ✅ Beide geselecteerd
5. Toolbar toont:
   - Align, Distribute (enabled)
   - Lock/Unlock (shows Unlock - some locked)
6. Try to drag
7. ✅ Alleen Azure beweegt
8. ✅ vSphere blijft staan
```

### **Test 4: Locked Item Visual Feedback** ✅
```
1. Lock item
2. ✅ 🔒 icon verschijnt in card
3. Hover over locked item
4. ✅ Cursor blijft normal (geen grab cursor)
5. Click locked item
6. ✅ Item selecteert
7. ✅ Blue border verschijnt
8. ✅ Toolbar verschijnt met Unlock
```

---

## 📊 **Code Changes:**

### **Bestand:**
- `src/components/canvas/CanvasItemCard.tsx`

### **Functie:**
- `CanvasItemCard` component

### **Wijziging:**
```diff
- const mergedListeners = item.locked ? {} : {
+ const mergedListeners = item.locked ? {
+     onMouseDown: (e: React.MouseEvent) => {
+         e.stopPropagation();
+         mouseDownPos.current = { x: e.clientX, y: e.clientY };
+         dragOccurred.current = false;
+     }
+ } : {
      ...listeners,
      onMouseDown: (e: React.MouseEvent) => {
          e.stopPropagation();
          mouseDownPos.current = { x: e.clientX, y: e.clientY };
          dragOccurred.current = false;
          if (listeners?.onMouseDown) {
              listeners.onMouseDown(e as any);
          }
      }
  };
```

---

## 🎨 **Visual States:**

### **Unlocked Item:**
```
┌─────────────────────────────┐
│ vSphere                     │
│ ⚙️ Configured               │
│                             │
│ 👤 Named Users: 500         │
│ 💾 Storage: 10 TB           │
└─────────────────────────────┘
  Cursor: grab (can drag)
  Click: Select
  Drag: Move
```

### **Locked Item:**
```
┌─────────────────────────────┐
│ vSphere              🔒     │  ← Lock icon
│ ⚙️ Configured               │
│                             │
│ 👤 Named Users: 500         │
│ 💾 Storage: 10 TB           │
└─────────────────────────────┘
  Cursor: default (can't drag)
  Click: Select ✅ (FIXED!)
  Drag: No effect
```

### **Locked Item Selected:**
```
┌─────────────────────────────┐
│ vSphere              🔒     │
│ ⚙️ Configured               │  ← Blue border
│                             │
│ 👤 Named Users: 500         │
│ 💾 Storage: 10 TB           │
└─────────────────────────────┘
  Toolbar: Shows 🔒 Unlock button
```

---

## 🔧 **Implementation Details:**

### **Event Flow:**

```typescript
// Locked Item Click:
onMouseDown (custom)
  ↓
stopPropagation()  // Prevent canvas deselect
  ↓
Track mouse position
  ↓
[NO dnd-kit listeners called]  // This prevents drag
  ↓
onMouseUp
  ↓
onClick (if < 5px movement)
  ↓
toggleSelect(item.id)  // Selection works!
```

### **Why This Works:**

1. **stopPropagation()** prevents canvas from clearing selection
2. **No dnd-kit listeners** means no drag initialization
3. **onClick still fires** because it's on the component itself
4. **Mouse tracking** ensures clicks vs drags are distinguished

---

## 💡 **UX Best Practices:**

### **Lock Behavior:**
- ✅ **DO**: Allow selection of locked items
- ✅ **DO**: Show visual indicator (🔒 icon)
- ✅ **DO**: Prevent dragging
- ✅ **DO**: Allow unlock via toolbar
- ❌ **DON'T**: Make locked items unselectable
- ❌ **DON'T**: Hide lock status

### **Similar Apps:**
- **Figma**: Locked items selectable, not movable ✅
- **Miro**: Locked items selectable, not movable ✅
- **Sketch**: Locked items selectable, not movable ✅
- **Adobe XD**: Locked items selectable, not movable ✅

**Our implementation now matches industry standard!** 🎉

---

## 🚀 **Future Enhancements:**

### **Optional: Lock Levels**
```typescript
interface LockOptions {
    position: boolean;  // Can't move
    resize: boolean;    // Can't resize
    edit: boolean;      // Can't edit properties
    delete: boolean;    // Can't delete
}
```

### **Optional: Lock Groups**
```typescript
// Lock entire group
lockGroup(groupId);

// Unlock group
unlockGroup(groupId);
```

### **Optional: Keyboard Shortcut**
```typescript
// Ctrl+L to toggle lock
useKeyboardShortcut('ctrl+l', () => {
    toggleLock(selectedIds);
});
```

---

**Status:** Locked items nu volledig functioneel! 🔒✅
**Test:** Lock item → Click → Unlock → Success! 🎉
