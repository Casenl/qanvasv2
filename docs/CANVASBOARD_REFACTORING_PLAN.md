# CanvasBoard Refactoring Plan

## Current State
- **CanvasBoard.tsx**: 902 lines (should be ~100-150 lines)
- **Already Extracted**: CanvasSidebar, CanvasWorkspace, PropertiesPanel (✅)
- **Still in CanvasBoard**: State management, event handlers, keyboard shortcuts, context menu logic

## Goal
Reduce CanvasBoard to ~100-150 lines of orchestration code by extracting:
1. State management logic → Custom hooks
2. Event handlers → Dedicated handler modules or hooks
3. Mock data → Separate data file
4. Keyboard shortcuts → Already in useKeyboardShortcuts (verify usage)

## Refactoring Steps

### Step 1: Extract Mock Data (Quick Win)
**File**: `src/lib/data/mockData.ts`
**Lines to Move**: ~30 lines (lines 48-76)
**Content**:
- PROPOSITIONS array
- VENDORS array  
- PRODUCTS array
- SOLUTIONS array

**Impact**: -30 lines from CanvasBoard

---

### Step 2: Extract Clipboard Logic → Custom Hook
**File**: `src/hooks/useClipboard.ts`
**Lines to Move**: ~50 lines
**Content**:
- Clipboard state
- onCopy handler
- onPaste handler  
- onDuplicate handler

**Interface**:
```typescript
export function useClipboard(items, setItems, selectedIds) {
  return {
    clipboard,
    copy: () => {...},
    paste: () => {...},
    duplicate: () => {...}
  };
}
```

**Impact**: -50 lines from CanvasBoard

---

### Step 3: Extract Context Menu Logic → Custom Hook
**File**: `src/hooks/useContextMenu.ts`
**Lines to Move**: ~100 lines
**Content**:
- Context menu state
- handleContextMenu
- Context menu actions array
- Action handlers (delete, duplicate, lock, group, etc.)

**Interface**:
```typescript
export function useContextMenu(items, setItems, selectedIds, multiSelect) {
  return {
    contextMenu: { x, y, visible },
    handleContextMenu: (e) => {...},
    contextMenuActions: [...],
    closeContextMenu: () => {...}
  };
}
```

**Impact**: -100 lines from CanvasBoard

---

### Step 4: Extract Alignment Logic → Custom Hook
**File**: `src/hooks/useAlignment.ts`
**Lines to Move**: ~40 lines
**Content**:
- handleAlign function
- handleDistribute function
- Group/Ungroup logic

**Interface**:
```typescript
export function useAlignment(items, setItems, selectedIds) {
  return {
    align: (type) => {...},
    distribute: (direction) => {...},
    group: () => {...},
    ungroup: () => {...}
  };
}
```

**Impact**: -40 lines from CanvasBoard

---

### Step 5: Extract Item Nudging Logic → Custom Hook
**File**: `src/hooks/useItemNudging.ts`
**Lines to Move**: ~40 lines
**Content**:
- onNudgeUp, onNudgeDown, onNudgeLeft, onNudgeRight
- Nudge amount constant

**Interface**:
```typescript
export function useItemNudging(items, setItems, selectedIds) {
  return {
    nudgeUp: () => {...},
    nudgeDown: () => {...},
    nudgeLeft: () => {...},
    nudgeRight: () => {...}
  };
}
```

**Impact**: -40 lines from CanvasBoard

---

### Step 6: Consolidate Keyboard Shortcuts
**File**: Update `src/hooks/useKeyboardShortcuts.ts`
**Current**: Already exists, verify it's being used properly
**Action**: Ensure all keyboard callbacks are passed to this hook

**Impact**: Verify no duplicate logic

---

### Step 7: Extract Item Locking Logic
**File**: `src/hooks/useItemLocking.ts` OR add to existing hook
**Lines to Move**: ~15 lines
**Content**:
- onLock handler

**Interface**:
```typescript
export function useItemLocking(items, setItems, selectedIds) {
  return {
    toggleLock: () => {...}
  };
}
```

**Impact**: -15 lines from CanvasBoard

---

## Expected Result

### Before Refactoring
```
CanvasBoard.tsx: 902 lines
├── Mock Data: 30 lines
├── State: 50 lines
├── Hooks: 30 lines
├── Clipboard Logic: 50 lines
├── Context Menu: 100 lines
├── Alignment: 40 lines
├── Nudging: 40 lines
├── Locking: 15 lines
├── Drag Handlers: 200 lines
├── Keyboard Shortcuts: 100 lines
└── Render: 247 lines
```

### After Refactoring
```
CanvasBoard.tsx: ~150 lines
├── State initialization: 20 lines
├── Hook calls: 30 lines
├── Drag handlers: 200 lines (keep - core DnD logic)
├── Render: 100 lines (orchestration only)

New Files:
├── src/lib/data/mockData.ts: 30 lines
├── src/hooks/useClipboard.ts: 50 lines
├── src/hooks/useContextMenu.ts: 100 lines
├── src/hooks/useAlignment.ts: 40 lines
├── src/hooks/useItemNudging.ts: 40 lines
└── src/hooks/useItemLocking.ts: 15 lines
```

## Benefits
1. **Maintainability**: Each hook has single responsibility
2. **Testability**: Hooks can be tested independently
3. **Reusability**: Hooks can be used in other components
4. **Readability**: CanvasBoard becomes pure orchestration
5. **Follows Best Practices**: Adheres to COMPONENT_BEST_PRACTICES.md

## Implementation Order
1. ✅ Mock Data (easiest, no dependencies)
2. ✅ Item Nudging (simple, isolated)
3. ✅ Item Locking (simple, isolated)
4. ✅ Alignment (moderate, uses selectedIds)
5. ✅ Clipboard (moderate, uses selectedIds and items)
6. ✅ Context Menu (complex, uses many dependencies)
7. ✅ Verify Keyboard Shortcuts integration

## Estimated Time
- Mock Data: 5 minutes
- Item Nudging: 10 minutes
- Item Locking: 10 minutes
- Alignment: 15 minutes
- Clipboard: 20 minutes
- Context Menu: 30 minutes
- Testing & Integration: 20 minutes

**Total**: ~2 hours

## Success Criteria
- [ ] CanvasBoard.tsx under 200 lines
- [ ] All functionality still works
- [ ] No console errors
- [ ] All tests pass
- [ ] Follows COMPONENT_BEST_PRACTICES.md
- [ ] Each hook has clear, single responsibility
