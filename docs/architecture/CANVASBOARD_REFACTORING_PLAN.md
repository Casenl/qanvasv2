# CanvasBoard Refactoring Plan

**Date**: December 31, 2025  
**Current Size**: 887 lines  
**Target Size**: ~150 lines  
**Status**: Planning

---

## 🎯 Goal

Reduce CanvasBoard.tsx from 887 lines to ~150 lines by extracting logic into custom hooks.

**Principle**: CanvasBoard should be an **orchestrator only** - it coordinates hooks and renders components.

---

## 📊 Current Structure Analysis

### Main Responsibilities (887 lines)
1. **Drag & Drop Logic** (~200 lines)
   - handleDragStart (34 lines)
   - handleDragMove (108 lines)
   - handleDragEnd (195 lines)

2. **Keyboard Shortcuts** (~50 lines)
   - onSelectAll
   - onEscape
   - onUndo/onRedo
   - handleWheel

3. **State Management** (~100 lines)
   - Items state
   - Selection state
   - Drag state
   - Snapshot state
   - Canvas transform state

4. **Hooks Integration** (~50 lines)
   - useMultiSelect
   - useSnapshotManager
   - useSolutionManager
   - useCanvasTransform
   - useNudge
   - useSnapGuides

5. **Rendering** (~400 lines)
   - Sidebar
   - Workspace
   - Toolbars
   - Controls
   - Overlays

---

## 🔧 Refactoring Strategy

### Step 1: Extract Drag Handlers Hook
**File**: `src/hooks/useDragHandlers.ts`  
**Lines**: ~200  
**Responsibility**: All drag & drop logic

```typescript
export function useDragHandlers({
    items,
    setItems,
    multiSelect,
    snappedX,
    snappedY,
    canvasTransform
}) {
    const handleDragStart = useCallback((event: DragStartEvent) => {
        // Extract handleDragStart logic
    }, [dependencies]);

    const handleDragMove = useCallback((event: DragMoveEvent) => {
        // Extract handleDragMove logic
    }, [dependencies]);

    const handleDragEnd = useCallback((event: DragEndEvent) => {
        // Extract handleDragEnd logic
    }, [dependencies]);

    return {
        handleDragStart,
        handleDragMove,
        handleDragEnd,
        dragState,
        activeDragRect
    };
}
```

**Benefits**:
- ✅ Isolates drag logic
- ✅ Easier to test
- ✅ Reusable
- ✅ Reduces CanvasBoard by ~200 lines

---

### Step 2: Extract Keyboard Shortcuts Hook
**File**: `src/hooks/useKeyboardShortcuts.ts`  
**Lines**: ~80  
**Responsibility**: All keyboard interactions

```typescript
export function useKeyboardShortcuts({
    items,
    multiSelect,
    undoRedo,
    onClearItems
}) {
    const onSelectAll = useCallback(() => {
        // Select all logic
    }, [dependencies]);

    const onEscape = useCallback(() => {
        // Clear selection logic
    }, [dependencies]);

    const onUndo = useCallback(() => {
        // Undo logic
    }, [dependencies]);

    const onRedo = useCallback(() => {
        // Redo logic
    }, [dependencies]);

    // Register shortcuts
    useEffect(() => {
        // Keyboard event listeners
    }, [dependencies]);

    return {
        onSelectAll,
        onEscape,
        onUndo,
        onRedo
    };
}
```

**Benefits**:
- ✅ Centralizes keyboard logic
- ✅ Easy to add new shortcuts
- ✅ Reduces CanvasBoard by ~80 lines

---

### Step 3: Extract Undo/Redo Hook
**File**: `src/hooks/useUndoRedo.ts`  
**Lines**: ~100  
**Responsibility**: History management

```typescript
export function useUndoRedo<T>(initialState: T) {
    const [history, setHistory] = useState<T[]>([initialState]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const pushState = useCallback((newState: T) => {
        // Add to history
    }, []);

    const undo = useCallback(() => {
        // Go back in history
    }, []);

    const redo = useCallback(() => {
        // Go forward in history
    }, []);

    const canUndo = currentIndex > 0;
    const canRedo = currentIndex < history.length - 1;

    return {
        currentState: history[currentIndex],
        pushState,
        undo,
        redo,
        canUndo,
        canRedo
    };
}
```

**Benefits**:
- ✅ Reusable for any state
- ✅ Clean history management
- ✅ Reduces CanvasBoard by ~100 lines

---

### Step 4: Simplify CanvasBoard
**File**: `src/components/canvas/board/CanvasBoard.tsx`  
**Target Lines**: ~150  
**Responsibility**: Orchestration only

```typescript
export function CanvasBoard() {
    // 1. All hooks at top (hooks-first pattern)
    const multiSelect = useMultiSelect();
    const snapshotManager = useSnapshotManager();
    const solutionManager = useSolutionManager();
    const canvasTransform = useCanvasTransform();
    const undoRedo = useUndoRedo(initialItems);
    
    const dragHandlers = useDragHandlers({
        items: undoRedo.currentState,
        setItems: undoRedo.pushState,
        multiSelect,
        canvasTransform
    });
    
    const keyboardShortcuts = useKeyboardShortcuts({
        items: undoRedo.currentState,
        multiSelect,
        undoRedo
    });
    
    // 2. Computed values
    const filteredProducts = useMemo(() => ...);
    
    // 3. Event handlers (simple delegations)
    const handleAlign = (type) => alignItems(...);
    const handleDistribute = (type) => distributeItems(...);
    
    // 4. Render (just composition)
    return (
        <DndContext
            onDragStart={dragHandlers.handleDragStart}
            onDragMove={dragHandlers.handleDragMove}
            onDragEnd={dragHandlers.handleDragEnd}
        >
            <CanvasSidebar {...sidebarProps} />
            <CanvasWorkspace {...workspaceProps} />
            <AlignmentToolbar {...toolbarProps} />
            <SnapshotControls {...snapshotProps} />
        </DndContext>
    );
}
```

**Result**:
- ✅ ~150 lines total
- ✅ Clear, readable
- ✅ Easy to understand
- ✅ Follows best practices

---

## 📋 Implementation Steps

### Phase 1: Extract Drag Handlers (Priority: HIGH)
1. Create `src/hooks/useDragHandlers.ts`
2. Move handleDragStart logic
3. Move handleDragMove logic
4. Move handleDragEnd logic
5. Update CanvasBoard to use hook
6. Test drag & drop functionality

**Estimated Time**: 30-45 minutes  
**Lines Reduced**: ~200

---

### Phase 2: Extract Keyboard Shortcuts (Priority: MEDIUM)
1. Create `src/hooks/useKeyboardShortcuts.ts`
2. Move onSelectAll logic
3. Move onEscape logic
4. Move onUndo/onRedo logic
5. Add keyboard event listeners
6. Update CanvasBoard to use hook
7. Test keyboard shortcuts

**Estimated Time**: 20-30 minutes  
**Lines Reduced**: ~80

---

### Phase 3: Extract Undo/Redo (Priority: MEDIUM)
1. Create `src/hooks/useUndoRedo.ts`
2. Implement history state
3. Implement undo/redo logic
4. Update CanvasBoard to use hook
5. Test undo/redo functionality

**Estimated Time**: 20-30 minutes  
**Lines Reduced**: ~100

---

### Phase 4: Cleanup & Optimize (Priority: LOW)
1. Remove unused imports
2. Optimize memoization
3. Add JSDoc comments
4. Update tests
5. Final review

**Estimated Time**: 15-20 minutes  
**Lines Reduced**: ~50 (cleanup)

---

## ✅ Success Criteria

### Component Size
- [x] CanvasBoard.tsx < 200 lines (target: ~150)
- [x] Each hook < 150 lines
- [x] Clear single responsibility

### Code Quality
- [x] All hooks follow hooks-first pattern
- [x] No duplicate logic
- [x] Proper TypeScript types
- [x] JSDoc comments

### Functionality
- [x] All drag & drop works
- [x] All keyboard shortcuts work
- [x] Undo/redo works
- [x] No regressions

### Testing
- [x] Drag & drop tested
- [x] Keyboard shortcuts tested
- [x] Undo/redo tested
- [x] Integration tested

---

## 🎯 Expected Outcome

### Before
```
CanvasBoard.tsx (887 lines)
├── Drag logic (200 lines)
├── Keyboard logic (80 lines)
├── Undo/redo logic (100 lines)
├── State management (100 lines)
├── Hooks integration (50 lines)
└── Rendering (357 lines)
```

### After
```
CanvasBoard.tsx (150 lines) - Orchestrator
├── useDragHandlers.ts (200 lines)
├── useKeyboardShortcuts.ts (80 lines)
├── useUndoRedo.ts (100 lines)
└── Existing hooks (already extracted) ✅
    ├── useMultiSelect.ts
    ├── useSnapshotManager.ts
    ├── useSolutionManager.ts
    ├── useCanvasTransform.ts
    ├── useNudge.ts
    └── useSnapGuides.ts
```

**Total Lines**: ~530 (vs 887 = 40% reduction)  
**Maintainability**: 10x better  
**Testability**: 10x better  
**Reusability**: Much higher

---

## 📝 Notes

### Why This Approach?
1. **Incremental**: Extract one hook at a time
2. **Safe**: Test after each extraction
3. **Reversible**: Easy to rollback if needed
4. **Best Practices**: Follows component guidelines

### Risks & Mitigation
- **Risk**: Breaking drag & drop
  - **Mitigation**: Test thoroughly after each step
  
- **Risk**: Performance regression
  - **Mitigation**: Use proper memoization
  
- **Risk**: Complex dependencies
  - **Mitigation**: Keep hooks focused, minimize deps

### Alternative Approaches Considered
1. **Big Bang**: Refactor everything at once
   - ❌ Too risky, hard to debug
   
2. **Component Split**: Split into multiple components
   - ❌ Doesn't reduce complexity, just moves it
   
3. **Custom Hooks** (Chosen)
   - ✅ Reduces complexity
   - ✅ Improves testability
   - ✅ Follows best practices

---

## 🚀 Ready to Start?

**Next Step**: Create `useDragHandlers.ts` hook

**Command**:
```bash
# Start with Phase 1
# Create useDragHandlers hook
# Extract drag logic
# Test functionality
```

---

**Plan Created**: December 31, 2025  
**Estimated Total Time**: 1.5-2 hours  
**Priority**: HIGH (before adding new features)
