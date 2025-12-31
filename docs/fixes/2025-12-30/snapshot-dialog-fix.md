# Snapshot Create Dialog - Shared State Fix

## 🎯 **Probleem:**

De user kon geen naam instellen bij het maken van een snapshot via de floating ➕ button (rechtsboven).

**Root Cause:**
- Floating button (`SnapshotControls`) riep `quickSnapshot()` aan
- `quickSnapshot()` maakte snapshot met automatische naam (timestamp)
- Create dialog zat alleen in `SnapshotManager` (sidebar)
- Geen manier om dialog te openen vanuit floating button

---

## ✅ **Oplossing:**

### **Gedeelde Dialog State**

De create dialog state is nu gedeeld tussen:
1. **SnapshotManager** (sidebar) - ➕ button
2. **SnapshotControls** (floating) - ➕ button

**Flow:**
```
useSnapshotManager (hook)
    ↓ (provides state)
CanvasBoard
    ↓ (passes props)
├─ CanvasSidebar → SnapshotManager (dialog UI)
└─ SnapshotControls (floating button)
```

---

## 🔧 **Code Changes:**

### **1. useSnapshotManager.ts**

**Added:**
```typescript
const [showCreateDialog, setShowCreateDialog] = useState(false);

const openCreateDialog = useCallback(() => {
    setShowCreateDialog(true);
}, []);

const closeCreateDialog = useCallback(() => {
    setShowCreateDialog(false);
}, []);

return {
    // ... existing
    showCreateDialog,
    openCreateDialog,
    closeCreateDialog
};
```

---

### **2. SnapshotManager.tsx**

**Before:**
```typescript
// ❌ Local state - niet deelbaar
const [showCreateDialog, setShowCreateDialog] = useState(false);
```

**After:**
```typescript
// ✅ Props - deelbare state
interface SnapshotManagerProps {
    showCreateDialog: boolean;
    onOpenCreateDialog: () => void;
    onCloseCreateDialog: () => void;
    // ... other props
}

// Use props instead of local state
onClick={onOpenCreateDialog}   // Open dialog
onClick={onCloseCreateDialog}  // Close dialog
```

---

### **3. CanvasSidebar.tsx**

**Added props:**
```typescript
interface CanvasSidebarProps {
    showCreateDialog: boolean;
    onOpenCreateDialog: () => void;
    onCloseCreateDialog: () => void;
    // ... other props
}

// Pass to SnapshotManager
<SnapshotManager
    showCreateDialog={showCreateDialog}
    onOpenCreateDialog={onOpenCreateDialog}
    onCloseCreateDialog={onCloseCreateDialog}
    // ... other props
/>
```

---

### **4. CanvasBoard.tsx**

**Updated:**
```typescript
// Sidebar
<CanvasSidebar
    showCreateDialog={snapshotManager.showCreateDialog}
    onOpenCreateDialog={snapshotManager.openCreateDialog}
    onCloseCreateDialog={snapshotManager.closeCreateDialog}
    // ... other props
/>

// Floating controls
<SnapshotControls
    onCreate={snapshotManager.openCreateDialog}  // ← Changed!
    // Was: onCreate={snapshotManager.quickSnapshot}
    // ... other props
/>
```

---

## 🎯 **Hoe Het Nu Werkt:**

### **Vanuit Sidebar:**

```
1. User klikt Snapshots tab
2. User klikt ➕ button in sidebar
3. onOpenCreateDialog() called
4. Dialog opent
5. User vult naam + beschrijving in
6. User klikt "Create Snapshot"
7. onCreateSnapshot(name, description) called
8. onCloseCreateDialog() called
9. Snapshot verschijnt in lijst
```

### **Vanuit Floating Button:**

```
1. User klikt ➕ button rechtsboven
2. onCreate() → openCreateDialog() called
3. Dialog opent (SAME dialog!)
4. User vult naam + beschrijving in
5. User klikt "Create Snapshot"
6. onCreateSnapshot(name, description) called
7. onCloseCreateDialog() called
8. Snapshot verschijnt in lijst
```

---

## 📊 **Dialog UI:**

```
┌─────────────────────────────────────────┐
│ Create Snapshot                      ✕  │
├─────────────────────────────────────────┤
│                                         │
│ Snapshot Name *                         │
│ ┌─────────────────────────────────────┐ │
│ │ Phase 1 - Initial Design            │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ Description (Optional)                  │
│ ┌─────────────────────────────────────┐ │
│ │ Basic infrastructure with VMware    │ │
│ │ products and initial configuration  │ │
│ │                                     │ │
│ └─────────────────────────────────────┘ │
│                                         │
│  [Cancel]  [Create Snapshot]            │
└─────────────────────────────────────────┘
```

**Triggers:**
- ✅ Sidebar ➕ button
- ✅ Floating ➕ button (rechtsboven)

---

## ✅ **Test Scenarios:**

### **Test 1: Sidebar Button**
```
1. Klik Snapshots tab
2. Klik ➕ button
3. ✅ Dialog opent
4. Vul "Test 1" in
5. Klik Create
6. ✅ Snapshot "Test 1" verschijnt
```

### **Test 2: Floating Button**
```
1. Klik ➕ button rechtsboven
2. ✅ Dialog opent (SAME dialog!)
3. Vul "Test 2" in
4. Klik Create
5. ✅ Snapshot "Test 2" verschijnt
```

### **Test 3: Cancel**
```
1. Klik ➕ button (sidebar of floating)
2. Dialog opent
3. Vul naam in
4. Klik Cancel (of ✕ of backdrop)
5. ✅ Dialog sluit
6. ✅ Geen snapshot gemaakt
```

### **Test 4: Empty Name**
```
1. Klik ➕ button
2. Dialog opent
3. Leave name empty
4. ✅ Create button disabled
5. Can't create snapshot
```

---

## 🎨 **UI Locations:**

### **Sidebar ➕ Button:**
```
Snapshots Tab
┌─────────────────────────────────────────┐
│ 📸 Snapshots                            │
│ 3 saved phases              🔄  ➕      │ ← Here
├─────────────────────────────────────────┤
```

### **Floating ➕ Button:**
```
Canvas (top-right)
                              ┌─────────┐
                              │ 📸 ▼  ➕ │ ← Here
                              └─────────┘
```

---

## 📝 **Summary:**

**Before:**
- ❌ Floating button → Auto-named snapshot (timestamp)
- ❌ No way to set name from floating button
- ❌ Dialog only in sidebar

**After:**
- ✅ Floating button → Opens dialog
- ✅ Can set name + description
- ✅ Same dialog from both locations
- ✅ Shared state via hook

---

**Status:** Create dialog nu toegankelijk vanaf beide locaties! 🎉
**Test:** Klik ➕ (sidebar of floating) → Dialog opent → Naam instellen → Create! ✅
