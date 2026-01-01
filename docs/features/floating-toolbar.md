# Floating Canvas Toolbar - Implementation Guide

**Date**: December 31, 2025  
**Status**: In Progress  
**Priority**: P0 - Highest  
**Estimated Time**: 8-10 hours

---

## 🎯 **Goal**

Create a Miro-style floating toolbar on the left side of the canvas that provides quick access to all canvas tools (select, draw, shapes, text, etc.).

---

## 📐 **Design Specification**

### **Visual Layout**

```
Canvas Layout:
┌─────────────────────────────────────────────────────┐
│ [Sidebar] │ [Toolbar] │ [Canvas Area]              │
│           │           │                             │
│ Products  │    ↖      │                             │
│ Vendors   │    ✏      │     Canvas content          │
│ Props     │    ▭      │                             │
│           │    T      │                             │
│           │    →      │                             │
│           │    📝     │                             │
│           │    🖼      │                             │
│           │    ⊞      │                             │
│           │    💬     │                             │
│           │    ⚙      │                             │
└─────────────────────────────────────────────────────┘
```

### **Toolbar Position**
- **Location**: Fixed left side, between sidebar and canvas
- **Width**: 60px
- **Height**: Full viewport height
- **Z-index**: Above canvas, below modals
- **Background**: Semi-transparent with blur (glassmorphism)

### **Tool Layout**
```
┌──────────┐
│    ↖     │  ← Select (default, always visible)
├──────────┤
│    ✏     │  ← Pen/Draw
│    /     │     └─ Line
│    ↗     │     └─ Arrow  
│    ⤴     │     └─ Elbow connector
├──────────┤
│    ▭     │  ← Shapes
│    ○     │     └─ Rectangle
│    ◇     │     └─ Circle
│    ⬟     │     └─ Diamond
│    ⭐    │     └─ Hexagon
│    ♥     │     └─ Star
│          │     └─ More...
├──────────┤
│    T     │  ← Text
├──────────┤
│    📝    │  ← Sticky Note
├──────────┤
│    🖼     │  ← Image Upload
├──────────┤
│    ⊞     │  ← Frame/Section
├──────────┤
│    💬    │  ← Comment
├──────────┤
│    ⚙     │  ← Settings
└──────────┘
```

---

## 🏗️ **Architecture**

### **Component Structure**

```
src/components/canvas/toolbar/
├── FloatingToolbar.tsx          # Main container
├── ToolButton.tsx               # Individual tool button
├── ToolGroup.tsx                # Expandable tool group
├── ToolSeparator.tsx            # Visual separator
└── tools/
    ├── SelectTool.tsx           # Select tool config
    ├── DrawTool.tsx             # Draw tools config
    ├── ShapeTool.tsx            # Shape tools config
    ├── TextTool.tsx             # Text tool config
    ├── StickyNoteTool.tsx       # Sticky note config
    ├── ImageTool.tsx            # Image upload config
    ├── FrameTool.tsx            # Frame tool config
    ├── CommentTool.tsx          # Comment tool config
    └── SettingsTool.tsx         # Settings config
```

### **State Management**

```typescript
// Tool selection state
type ToolType = 
    | 'select'
    | 'pen' | 'line' | 'arrow' | 'connector'
    | 'rectangle' | 'circle' | 'diamond' | 'hexagon' | 'star' | 'heart'
    | 'text'
    | 'sticky-note'
    | 'image'
    | 'frame'
    | 'comment';

interface ToolbarState {
    activeTool: ToolType;
    expandedGroup: string | null;
    isCollapsed: boolean;
}

// Custom hook
function useToolbar() {
    const [activeTool, setActiveTool] = useState<ToolType>('select');
    const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
    
    const selectTool = (tool: ToolType) => {
        setActiveTool(tool);
        // Close expanded group after selection
        setExpandedGroup(null);
    };
    
    const toggleGroup = (groupId: string) => {
        setExpandedGroup(prev => prev === groupId ? null : groupId);
    };
    
    return { activeTool, expandedGroup, selectTool, toggleGroup };
}
```

---

## 🎨 **Styling**

### **Glassmorphism Design**

```css
.floating-toolbar {
    /* Position */
    position: fixed;
    left: 240px; /* After sidebar */
    top: 0;
    height: 100vh;
    width: 60px;
    z-index: 40;
    
    /* Glassmorphism */
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    
    /* Shadow */
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
}

/* Dark mode */
.dark .floating-toolbar {
    background: rgba(0, 0, 0, 0.3);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
}
```

### **Tool Button Styling**

```css
.tool-button {
    width: 48px;
    height: 48px;
    margin: 4px auto;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    
    /* Hover */
    &:hover {
        background: rgba(59, 130, 246, 0.1);
        transform: scale(1.05);
    }
    
    /* Active */
    &.active {
        background: rgba(59, 130, 246, 0.2);
        border: 2px solid rgb(59, 130, 246);
    }
}
```

### **Expandable Group**

```css
.tool-group-expanded {
    position: absolute;
    left: 64px; /* Next to toolbar */
    background: white;
    border-radius: 12px;
    padding: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    
    /* Grid layout for shapes */
    display: grid;
    grid-template-columns: repeat(3, 48px);
    gap: 4px;
}
```

---

## 📝 **Implementation Steps**

### **Phase 1: Basic Structure** (2-3 hours)

**Step 1.1: Create Base Components**
- ✅ Create `FloatingToolbar.tsx` container
- ✅ Create `ToolButton.tsx` component
- ✅ Create `ToolSeparator.tsx` component
- ✅ Add to CanvasBoard layout

**Step 1.2: Add Basic Styling**
- ✅ Implement glassmorphism design
- ✅ Add hover/active states
- ✅ Add dark mode support
- ✅ Make responsive

**Step 1.3: Create State Management**
- ✅ Create `useToolbar` hook
- ✅ Implement tool selection
- ✅ Add keyboard shortcuts (1-9 for tools)

---

### **Phase 2: Tool Implementation** (3-4 hours)

**Step 2.1: Select Tool**
- ✅ Add select tool button
- ✅ Make it default active
- ✅ Add cursor change on canvas

**Step 2.2: Draw Tools Group**
- ✅ Create expandable draw group
- ✅ Add pen, line, arrow, connector tools
- ✅ Implement expansion/collapse
- ✅ Add tool icons

**Step 2.3: Shape Tools Group**
- ✅ Create expandable shape group
- ✅ Add rectangle, circle, diamond, etc.
- ✅ Grid layout for shapes
- ✅ Add shape icons

**Step 2.4: Other Tools**
- ✅ Add text tool
- ✅ Add sticky note tool
- ✅ Add image upload tool
- ✅ Add frame tool
- ✅ Add comment tool
- ✅ Add settings tool

---

### **Phase 3: Interactions** (2-3 hours)

**Step 3.1: Tool Selection**
- ✅ Click to select tool
- ✅ Visual feedback (active state)
- ✅ Cursor changes based on tool
- ✅ Escape to return to select

**Step 3.2: Expandable Groups**
- ✅ Click to expand/collapse
- ✅ Click outside to close
- ✅ Select tool from group
- ✅ Smooth animations

**Step 3.3: Keyboard Shortcuts**
- ✅ V - Select tool
- ✅ P - Pen tool
- ✅ L - Line tool
- ✅ R - Rectangle
- ✅ O - Circle
- ✅ T - Text
- ✅ N - Sticky note
- ✅ ESC - Return to select

**Step 3.4: Tooltips**
- ✅ Add tooltips on hover
- ✅ Show keyboard shortcut
- ✅ Position correctly

---

### **Phase 4: Integration** (1-2 hours)

**Step 4.1: Canvas Integration**
- ✅ Pass active tool to canvas
- ✅ Update cursor based on tool
- ✅ Disable drag when drawing tool active
- ✅ Handle tool-specific clicks

**Step 4.2: Layout Adjustment**
- ✅ Adjust canvas area for toolbar
- ✅ Update sidebar position
- ✅ Ensure responsive layout
- ✅ Test on different screen sizes

---

## 🎯 **Tool Definitions**

### **Tool Configuration**

```typescript
interface Tool {
    id: ToolType;
    name: string;
    icon: React.ReactNode;
    shortcut?: string;
    cursor?: string;
    group?: string;
}

const TOOLS: Tool[] = [
    {
        id: 'select',
        name: 'Select',
        icon: <MousePointer />,
        shortcut: 'V',
        cursor: 'default'
    },
    {
        id: 'pen',
        name: 'Pen',
        icon: <Pen />,
        shortcut: 'P',
        cursor: 'crosshair',
        group: 'draw'
    },
    {
        id: 'line',
        name: 'Line',
        icon: <Minus />,
        shortcut: 'L',
        cursor: 'crosshair',
        group: 'draw'
    },
    {
        id: 'rectangle',
        name: 'Rectangle',
        icon: <Square />,
        shortcut: 'R',
        cursor: 'crosshair',
        group: 'shape'
    },
    {
        id: 'circle',
        name: 'Circle',
        icon: <Circle />,
        shortcut: 'O',
        cursor: 'crosshair',
        group: 'shape'
    },
    {
        id: 'text',
        name: 'Text',
        icon: <Type />,
        shortcut: 'T',
        cursor: 'text'
    },
    // ... more tools
];
```

---

## 🧪 **Testing Checklist**

### **Visual Tests**
- [ ] Toolbar appears on left side
- [ ] Glassmorphism effect works
- [ ] Dark mode styling correct
- [ ] Hover states work
- [ ] Active states work
- [ ] Tooltips appear correctly

### **Interaction Tests**
- [ ] Click to select tool
- [ ] Keyboard shortcuts work
- [ ] Expandable groups work
- [ ] Click outside closes groups
- [ ] ESC returns to select
- [ ] Cursor changes correctly

### **Integration Tests**
- [ ] Canvas responds to tool selection
- [ ] Layout adjusts correctly
- [ ] No conflicts with existing features
- [ ] Works on different screen sizes
- [ ] Works in dark mode

---

## 📊 **Success Metrics**

- ✅ Toolbar visible and functional
- ✅ All tools accessible
- ✅ Smooth animations
- ✅ Keyboard shortcuts work
- ✅ No layout issues
- ✅ Performance: <16ms render time

---

## 🔗 **Related Files**

- `src/components/canvas/board/CanvasBoard.tsx` - Main integration
- `src/hooks/useToolbar.ts` - State management
- `src/types/canvas.ts` - Tool type definitions

---

## 📝 **Next Steps After Completion**

1. ✅ Floating toolbar complete
2. → Implement shape drawing (use selected tool)
3. → Implement text tool (use selected tool)
4. → Add resize/rotate handles
5. → Add shape styling

---

**Status**: Ready to implement  
**Start Date**: December 31, 2025  
**Target Completion**: January 2, 2026 (2-3 days)
