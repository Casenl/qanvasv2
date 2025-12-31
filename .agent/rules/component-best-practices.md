---
trigger: always_on
---

# Component Refactoring Best Practices

## When to Break Up Components

### 🚨 Red Flags - Refactor Immediately When:

1. **File Length > 300 lines**
   - Hard limit: Any component over 300 lines should be split
   - Ideal: Keep components under 200 lines

2. **Multiple Responsibilities**
   - Component handles both UI rendering AND business logic
   - Component manages multiple unrelated pieces of state
   - Component has more than 3-4 distinct sections

3. **Difficult to Name**
   - If you can't describe the component in 2-3 words, it's doing too much
   - Example: ❌ `UserProfileEditFormWithValidationAndSubmission`
   - Example: ✅ `UserProfileForm`

4. **Reusability Opportunities**
   - Same UI pattern appears 2+ times
   - Component has clear, isolated functionality
   - Component could be useful in other contexts

5. **Testing Complexity**
   - Hard to write unit tests
   - Tests require mocking many dependencies
   - Tests are over 100 lines

### ✅ Good Reasons to Extract Components

#### 1. **Visual Sections**
If your component has distinct visual sections, extract them:

```tsx
// ❌ Before: One large component
function Dashboard() {
  return (
    <div>
      <header>{/* 50 lines of header code */}</header>
      <sidebar>{/* 100 lines of sidebar code */}</sidebar>
      <main>{/* 150 lines of main content */}</main>
      <footer>{/* 30 lines of footer code */}</footer>
    </div>
  );
}

// ✅ After: Extracted components
function Dashboard() {
  return (
    <div>
      <DashboardHeader />
      <DashboardSidebar />
      <DashboardContent />
      <DashboardFooter />
    </div>
  );
}
```

#### 2. **Repeated Patterns**
Extract when you copy-paste similar JSX:

```tsx
// ❌ Before: Repeated code
<div className="card">
  <h3>{title1}</h3>
  <p>{description1}</p>
</div>
<div className="card">
  <h3>{title2}</h3>
  <p>{description2}</p>
</div>

// ✅ After: Reusable component
<Card title={title1} description={description1} />
<Card title={title2} description={description2} />
```

#### 3. **Complex Logic**
Extract when logic becomes hard to follow:

```tsx
// ❌ Before: Inline complexity
function Form() {
  const [value, setValue] = useState('');
  const [errors, setErrors] = useState([]);
  
  const validate = () => {
    // 30 lines of validation logic
  };
  
  const handleSubmit = () => {
    // 20 lines of submission logic
  };
  
  return (/* JSX */);
}

// ✅ After: Custom hooks
function Form() {
  const { value, setValue, errors } = useFormValidation();
  const { handleSubmit, isSubmitting } = useFormSubmission();
  
  return (/* JSX */);
}
```

#### 4. **State Management**
Extract when managing related state:

```tsx
// ❌ Before: Scattered state
const [searchQuery, setSearchQuery] = useState('');
const [selectedFilter, setSelectedFilter] = useState('all');
const [sortOrder, setSortOrder] = useState('asc');

// ✅ After: Custom hook
const { searchQuery, selectedFilter, sortOrder, updateSearch, updateFilter, updateSort } = useSearchFilters();
```

---

## Component Size Guidelines

### Ideal Component Sizes

| Component Type | Lines of Code | Responsibilities |
|---------------|---------------|------------------|
| **Leaf Components** | 20-50 | Single UI element (Button, Input, Card) |
| **Feature Components** | 50-150 | Single feature (LoginForm, ProductCard) |
| **Layout Components** | 100-200 | Page structure (Sidebar, Header, Layout) |
| **Page Components** | 50-100 | Orchestration only, delegates to children |
| **Container Components** | 100-200 | Data fetching + rendering |

### Example: Qanvas Refactoring

#### Before (❌ 648 lines)
```
CanvasBoard.tsx (648 lines)
├── Sidebar logic (150 lines)
├── Canvas logic (200 lines)
├── Properties panel (150 lines)
├── Drag & drop handlers (100 lines)
└── Data management (48 lines)
```

#### After (✅ ~500 lines total, split across 6 files)
```
CanvasBoard.tsx (120 lines) - Orchestrator
├── CanvasSidebar.tsx (140 lines)
├── CanvasWorkspace.tsx (120 lines)
├── PropertiesPanel.tsx (85 lines)
├── CanvasItemCard.tsx (90 lines)
├── DraggableSidebarItem.tsx (65 lines)
└── SidebarSection.tsx (28 lines)
```

---

## Custom Hooks Best Practices

### When to Extract a Hook

Extract logic into a custom hook when:

1. **Complex State Logic** (>30 lines)
   ```tsx
   // ❌ Before: Inline state logic
   function Component() {
       const [items, setItems] = useState([]);
       const [selected, setSelected] = useState([]);
       
       const toggleSelect = (id) => { /* 20 lines */ };
       const selectMultiple = (ids) => { /* 15 lines */ };
       const clearSelection = () => { /* 10 lines */ };
       
       return <div>...</div>;
   }
   
   // ✅ After: Custom hook
   function Component() {
       const selection = useMultiSelect();
       return <div>...</div>;
   }
   ```

2. **Reusable Logic Across Components**
   ```tsx
   // ✅ Good: Shared hook
   function useSnapshotManager() {
       const [snapshots, setSnapshots] = useState([]);
       
       const createSnapshot = useCallback((name, data) => {
           // Logic
       }, []);
       
       const loadSnapshot = useCallback((id) => {
           // Logic
       }, []);
       
       return { snapshots, createSnapshot, loadSnapshot };
   }
   ```

3. **Side Effects Management**
   ```tsx
   // ✅ Good: Encapsulated effects
   function useCanvasTransform() {
       const [zoom, setZoom] = useState(1);
       const [pan, setPan] = useState({ x: 0, y: 0 });
       
       useEffect(() => {
           // Wheel event listener
       }, []);
       
       return { zoom, pan, setZoom, setPan };
   }
   ```

### Hook Naming Conventions

- **Always start with `use`**
- **Describe what it manages**: `useSnapshotManager`, `useMetricsSync`
- **Be specific**: `useFormValidation` not `useForm`

### Hook Size Guidelines

| Hook Type | Lines of Code | Purpose |
|-----------|---------------|---------|
| **Simple Hooks** | 20-50 | Single piece of state/logic |
| **Feature Hooks** | 50-100 | Complete feature logic |
| **Complex Hooks** | 100-150 | Multiple related features |
| **Too Large** | >150 | Split into multiple hooks |

---

## React Hooks Order Rules

### ⚠️ CRITICAL: All Hooks Must Come First

React requires hooks to be called in the **same order** on every render. This means:

```typescript
function Component() {
    // ✅ CORRECT ORDER:
    
    // 1. All hooks first (in consistent order)
    const [state, setState] = useState();
    const value = useMemo(() => ...);
    const callback = useCallback(() => ...);
    useEffect(() => ...);
    const customHook = useCustomHook();
    
    // 2. Then computed values
    const filteredData = data.filter(...);
    const sortedData = filteredData.sort(...);
    
    // 3. Then event handlers (regular functions)
    const handleClick = () => { ... };
    const handleSubmit = () => { ... };
    
    // 4. Finally return
    return <div>...</div>;
}
```

### ❌ Common Mistakes

```typescript
// ❌ WRONG: Hook after function
function Component() {
    const handleClick = () => { ... };  // Function
    const value = useMemo(() => ...);   // Hook! ← ERROR
}

// ❌ WRONG: Conditional hook
function Component() {
    if (condition) {
        const value = useMemo(() => ...);  // ← ERROR
    }
}

// ❌ WRONG: Hook in loop
function Component() {
    items.forEach(item => {
        const value = useMemo(() => ...);  // ← ERROR
    });
}
```

### ✅ Correct Patterns

```typescript
// ✅ CORRECT: Conditional logic inside hook
function Component() {
    const value = useMemo(() => {
        if (!condition) return undefined;
        return expensiveComputation();
    }, [condition]);
}

// ✅ CORRECT: All hooks at top
function Component() {
    // All hooks together
    const [a, setA] = useState();
    const [b, setB] = useState();
    const c = useMemo(() => ...);
    
    // Then everything else
    const handleClick = () => { ... };
    return <div>...</div>;
}
```

---

## Snapshot/Phase Management Pattern

When implementing snapshot or versioning systems:

### 1. Separate Concerns

```
snapshots/
├── SnapshotManager.tsx      # UI for managing snapshots
├── ComparisonView.tsx        # UI for comparing snapshots
├── lib/
│   └── types/
│       └── snapshot.ts       # Data structures & helpers
└── hooks/
    └── useSnapshotManager.ts # Business logic
```

### 2. Data Structure

```typescript
interface Snapshot<T = any> {
    id: string;
    name: string;
    description?: string;
    timestamp: number;
    data: T;  // Generic - can be any data
    metadata?: Record<string, any>;
}

interface SnapshotComparison<T = any> {
    added: T[];
    removed: T[];
    modified: Array<{
        item: T;
        changes: Record<string, { from: any; to: any }>;
    }>;
    configChanges: Record<string, { from: any; to: any }>;
}
```

### 3. Comparison Logic

```typescript
// ✅ Pure function in separate file
export function compareSnapshots<T extends { id: string }>(
    from: Snapshot<T[]>,
    to: Snapshot<T[]>
): SnapshotComparison<T> {
    const fromIds = new Set(from.data.map(item => item.id));
    const toIds = new Set(to.data.map(item => item.id));
    
    const added = to.data.filter(item => !fromIds.has(item.id));
    const removed = from.data.filter(item => !toIds.has(item.id));
    
    // ... comparison logic
    
    return { added, removed, modified, configChanges };
}
```

### 4. Manager Hook

```typescript
// ✅ Encapsulate business logic
export function useSnapshotManager<T>() {
    const [snapshots, setSnapshots] = useState<Snapshot<T>[]>([]);
    const [currentId, setCurrentId] = useState<string>();
    
    const createSnapshot = useCallback((name: string, data: T) => {
        const snapshot: Snapshot<T> = {
            id: `snapshot-${Date.now()}`,
            name,
            timestamp: Date.now(),
            data
        };
        setSnapshots(prev => [...prev, snapshot]);
        setCurrentId(snapshot.id);
    }, []);
    
    const loadSnapshot = useCallback((id: string) => {
        const snapshot = snapshots.find(s => s.id === id);
        if (snapshot) {
            setCurrentId(id);
            return snapshot.data;
        }
    }, [snapshots]);
    
    return { snapshots, currentId, createSnapshot, loadSnapshot };
}
```

---

## Refactoring Process

### Step 1: Identify Boundaries
Look for natural divisions in your component:
- Visual sections (header, sidebar, content, footer)
- Functional areas (search, filters, results)
- Repeated patterns (cards, list items, buttons)

### Step 2: Extract One at a Time
Don't refactor everything at once:
1. Extract the simplest component first
2. Test that it works
3. Move to the next component
4. Repeat

### Step 3: Define Clear Interfaces
Each extracted component should have:
- **Clear props** - What data does it need?
- **Single responsibility** - What is its one job?
- **No side effects** - Doesn't modify external state unexpectedly

```tsx
// ✅ Good: Clear interface
interface SidebarProps {
  items: Product[];
  onItemSelect: (id: string) => void;
  selectedId: string | null;
}

// ❌ Bad: Unclear interface
interface SidebarProps {
  data: any;
  callbacks: any;
  config: any;
}
```

### Step 4: Avoid Prop Drilling
If passing props through 3+ levels, consider:
- **Context API** for global state
- **Composition** instead of prop drilling
- **State management library** (Zustand, Redux)

```tsx
// ❌ Bad: Prop drilling
<Parent>
  <Child1 user={user}>
    <Child2 user={user}>
      <Child3 user={user}>
        <Child4 user={user} />
      </Child3>
    </Child2>
  </Child1>
</Parent>

// ✅ Good: Context
const UserContext = createContext();

<UserProvider value={user}>
  <Parent>
    <Child1>
      <Child2>
        <Child3>
          <Child4 />  {/* Uses useContext(UserContext) */}
        </Child3>
      </Child2>
    </Child1>
  </Parent>
</UserProvider>
```

---

## Testing Guidelines

### Unit Testing Components

```tsx
// ✅ Good: Test isolated component
describe('ProductCard', () => {
  i