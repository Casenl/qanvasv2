# Qanvas v2 - Feature Implementation Plan

## User Requirements

### 1. Product Management
- ✅ Create products with full details
- ✅ Make products public/shareable
- ✅ Prevent inconsistent data entry (capitalization, spelling)

### 2. Canvas Controls (Like Miro)
- ✅ Multi-select (Ctrl+Click)
- ✅ Box selection (drag to select multiple)
- ✅ Alignment tools (align left, center, right, top, middle, bottom)
- ✅ Snap to grid
- ✅ Distribute evenly

### 3. Modern UX
- ✅ Keyboard shortcuts
- ✅ Context menu (right-click)
- ✅ Undo/Redo
- ✅ Copy/Paste

## Architecture

### Component Structure (Following Best Practices)

```
src/
├── components/
│   ├── canvas/
│   │   ├── CanvasBoard.tsx (Orchestrator - 220 lines)
│   │   ├── CanvasSidebar.tsx (140 lines)
│   │   ├── CanvasWorkspace.tsx (120 lines)
│   │   ├── PropertiesPanel.tsx (85 lines)
│   │   ├── CanvasItemCard.tsx (90 lines)
│   │   ├── DraggableSidebarItem.tsx (65 lines)
│   │   ├── SidebarSection.tsx (28 lines)
│   │   │
│   │   ├── controls/                    # NEW: Canvas controls
│   │   │   ├── SelectionBox.tsx         (~80 lines)
│   │   │   ├── AlignmentToolbar.tsx     (~100 lines)
│   │   │   └── ContextMenu.tsx          (~120 lines)
│   │   │
│   │   └── forms/                       # NEW: Product management
│   │       ├── ProductForm.tsx          (~150 lines)
│   │       ├── VendorAutocomplete.tsx   (~80 lines)
│   │       └── ProductValidator.tsx     (~60 lines)
│   │
│   └── common/                          # Reusable UI components
│       ├── Button.tsx
│       ├── Input.tsx
│       └── Modal.tsx
│
├── hooks/                               # Custom hooks
│   ├── useMultiSelect.ts                (~100 lines)
│   ├── useKeyboardShortcuts.ts          (~80 lines)
│   ├── useSnapToGrid.ts                 (~60 lines)
│   └── useAlignment.ts                  (~80 lines)
│
├── lib/
│   ├── validation/                      # Data validation
│   │   ├── productValidator.ts          (~100 lines)
│   │   └── vendorNormalizer.ts          (~80 lines)
│   │
│   └── utils/
│       ├── alignment.ts                 (~120 lines)
│       └── geometry.ts                  (~80 lines)
│
└── services/                            # Firebase integration
    ├── productService.ts                (~150 lines)
    └── sharingService.ts                (~120 lines)
```

## Feature 1: Product Management with Validation

### Problem: Inconsistent Data Entry
**Examples**:
- "VMware" vs "vmware" vs "VMWare" vs "Vm Ware"
- "Microsoft 365" vs "Microsoft365" vs "M365"

### Solution: Smart Autocomplete + Normalization

#### A. Vendor Autocomplete Component
```tsx
// VendorAutocomplete.tsx (~80 lines)
- Fuzzy search existing vendors
- Suggest closest match
- Show "Create new vendor" only if no close match
- Auto-capitalize properly (e.g., "vmware" → "VMware")
```

#### B. Product Validator
```tsx
// ProductValidator.tsx (~60 lines)
- Check for duplicate names (case-insensitive)
- Suggest existing products if similar
- Enforce naming conventions
- Validate required fields
```

#### C. Normalization Rules
```typescript
// vendorNormalizer.ts
Rules:
1. Trim whitespace
2. Proper case for known vendors (VMware, Microsoft, AWS)
3. Detect common abbreviations (M365 → Microsoft 365)
4. Flag potential duplicates before saving
```

### Implementation Strategy

**Phase 1: Validation Layer**
```typescript
// lib/validation/productValidator.ts
export function validateProduct(product: Product): ValidationResult {
  // Check for duplicates
  // Normalize vendor name
  // Suggest corrections
  // Return errors/warnings
}
```

**Phase 2: Smart Form**
```tsx
// ProductForm.tsx
- Real-time validation as user types
- Show suggestions: "Did you mean 'VMware'?"
- Highlight potential duplicates
- Require admin approval for new vendors (optional)
```

**Phase 3: Sharing & Permissions**
```typescript
// Product visibility levels:
- PRIVATE: Only creator can see
- TEAM: Shared with specific users/teams
- PUBLIC: Everyone can see (read-only)
- TEMPLATE: Can be cloned by others
```

## Feature 2: Multi-Select & Canvas Controls

### A. Multi-Select Hook
```typescript
// hooks/useMultiSelect.ts (~100 lines)
export function useMultiSelect() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  
  const toggleSelect = (id: string, isCtrlPressed: boolean) => {
    // Ctrl+Click: Add/remove from selection
    // Regular click: Select only this item
  };
  
  const boxSelect = (box: BoundingBox) => {
    // Select all items within box
  };
  
  return { selectedIds, toggleSelect, boxSelect, clearSelection };
}
```

### B. Selection Box Component
```tsx
// SelectionBox.tsx (~80 lines)
- Mouse down: Start selection
- Mouse move: Draw selection box
- Mouse up: Select items in box
- Visual: Dashed blue border
```

### C. Alignment Toolbar
```tsx
// AlignmentToolbar.tsx (~100 lines)
Buttons:
- Align Left
- Align Center
- Align Right
- Align Top
- Align Middle
- Align Bottom
- Distribute Horizontally
- Distribute Vertically
```

## Feature 3: Snap to Grid

### Implementation
```typescript
// hooks/useSnapToGrid.ts (~60 lines)
const GRID_SIZE = 20; // pixels

export function useSnapToGrid(enabled: boolean) {
  const snapPosition = (x: number, y: number) => {
    if (!enabled) return { x, y };
    return {
      x: Math.round(x / GRID_SIZE) * GRID_SIZE,
      y: Math.round(y / GRID_SIZE) * GRID_SIZE
    };
  };
  
  return { snapPosition };
}
```

### Visual Feedback
```tsx
// Show snap guides when dragging
- Vertical line when aligning with other items
- Horizontal line when aligning with other items
- Distance indicators
```

## Feature 4: Keyboard Shortcuts

```typescript
// hooks/useKeyboardShortcuts.ts (~80 lines)
Shortcuts:
- Ctrl+A: Select all
- Ctrl+C: Copy selected
- Ctrl+V: Paste
- Ctrl+Z: Undo
- Ctrl+Y: Redo
- Delete: Delete selected
- Escape: Clear selection
- Ctrl+D: Duplicate
- Arrow keys: Nudge selected items
```

## Data Consistency Strategy

### Option 1: Centralized Vendor Registry (Recommended)
```typescript
// Admins maintain official vendor list
// Users can only select from approved vendors
// Request new vendor → Admin approval flow

Pros:
- Guaranteed consistency
- High data quality
- Easy to manage

Cons:
- Requires admin intervention
- Slower for users
```

### Option 2: Smart Suggestions with Auto-Merge
```typescript
// Users can create vendors freely
// System suggests matches: "Did you mean 'VMware'?"
// Auto-merge similar entries (admin review)

Pros:
- Fast for users
- Flexible

Cons:
- Requires good fuzzy matching
- Potential duplicates
```

### Option 3: Hybrid Approach (Best for ITQ)
```typescript
// Official vendors: Pre-approved list (VMware, Microsoft, etc.)
// Custom vendors: User can add, but marked as "Unverified"
// Verification flow: Admin can promote custom → official

Pros:
- Best of both worlds
- Scalable
- Maintains quality

Cons:
- More complex to implement
```

## Recommended Implementation Order

### Week 1: Multi-Select & Canvas Controls
1. ✅ Multi-select hook (useMultiSelect.ts)
2. ✅ Selection box component
3. ✅ Keyboard shortcuts
4. ✅ Alignment toolbar

**Why first?**: Core UX improvement, no backend needed

### Week 2: Snap & Alignment
1. ✅ Snap to grid hook
2. ✅ Alignment utilities
3. ✅ Visual guides
4. ✅ Distribute evenly

**Why second?**: Builds on multi-select, enhances UX

### Week 3: Product Management
1. ✅ Product form component
2. ✅ Vendor autocomplete
3. ✅ Validation layer
4. ✅ Normalization rules

**Why third?**: Requires backend integration

### Week 4: Sharing & Permissions
1. ✅ Firebase integration
2. ✅ Sharing UI
3. ✅ Permission levels
4. ✅ Public product gallery

**Why last?**: Depends on product management being solid

## Component Size Adherence

All new components follow best practices:
- ✅ Each component < 150 lines
- ✅ Single responsibility
- ✅ Reusable where possible
- ✅ Clear prop interfaces
- ✅ Separated concerns (UI vs logic)

## Next Steps

1. **Approve architecture** - Review this plan
2. **Start with multi-select** - Immediate UX win
3. **Iterate on validation** - Decide on vendor management strategy
4. **Add Firebase** - When ready for backend

Would you like me to start implementing:
1. Multi-select & canvas controls (Week 1)?
2. Product validation strategy (discuss options)?
3. Something else?
