# Floating Context Toolbar - Implementation Guide

## 🎯 **Current Implementation**

### **Toolbar Position**
- **Floating Mode**: Appears above selected items (like Miro)
- **Position**: Centered horizontally, 100px above selection
- **Behavior**: Follows selection, auto-positions

### **Current Actions**

```
┌─────────────────────────────────────────────────────────────────┐
│  ◀  ▬  ▶  │  ▲  ▬  ▼  │  ⬌  ⬍  │  👥  🔓  │  📦                │
└─────────────────────────────────────────────────────────────────┘
   Align      Align V     Distribute  Group  Create
   H                                  Lock   Solution
```

#### **1. Alignment (Horizontal)**
- **Align Left** ◀ - Align all items to leftmost edge
- **Align Center** ▬ - Align all items to horizontal center
- **Align Right** ▶ - Align all items to rightmost edge
- **Requires**: 2+ items selected

#### **2. Alignment (Vertical)**
- **Align Top** ▲ - Align all items to topmost edge
- **Align Middle** ▬ - Align all items to vertical center
- **Align Bottom** ▼ - Align all items to bottommost edge
- **Requires**: 2+ items selected

#### **3. Distribution**
- **Distribute Horizontally** ⬌ - Equal spacing horizontally
- **Distribute Vertically** ⬍ - Equal spacing vertically
- **Requires**: 3+ items selected

#### **4. Grouping**
- **Group** 👥 - Combine items into group
- **Ungroup** 👥 (icon changes) - Separate grouped items
- **Requires**: 2+ items selected

#### **5. Locking**
- **Lock** 🔓 - Prevent item movement
- **Unlock** 🔒 (icon changes) - Allow item movement
- **Requires**: 1+ items selected

#### **6. Solution**
- **Create Solution** 📦 - Save selection as reusable solution
- **Requires**: 2+ items selected

---

## 🚀 **Planned Extensions (Miro-style)**

### **Phase 1: Text Formatting** (High Priority)

```
┌─────────────────────────────────────────────────────────────────┐
│  [Font ▼]  [14 ▼]  B  I  U  │  🎨  │  ◀  ▬  ▶                  │
└─────────────────────────────────────────────────────────────────┘
   Font      Size   Style    Color   Alignment
```

**Actions**:
- **Font Family** dropdown (Inter, Roboto, Arial, etc.)
- **Font Size** dropdown (10, 12, 14, 16, 18, 24, 32, 48)
- **Bold** (B) - Toggle bold text
- **Italic** (I) - Toggle italic text
- **Underline** (U) - Toggle underline
- **Text Color** 🎨 - Color picker
- **Text Align** ◀ ▬ ▶ - Left, Center, Right

**Visibility**: Only when text/label item selected

---

### **Phase 2: Shape Styling** (Medium Priority)

```
┌─────────────────────────────────────────────────────────────────┐
│  🎨  │  ▭  [2px ▼]  [─ ▼]  │  ◯  [4px ▼]                       │
└─────────────────────────────────────────────────────────────────┘
   Fill   Border  Width Style   Corner Radius
```

**Actions**:
- **Fill Color** 🎨 - Background color picker
- **Border Color** ▭ - Border color picker
- **Border Width** dropdown (0, 1, 2, 4, 8px)
- **Border Style** dropdown (Solid ─, Dashed - -, Dotted ···)
- **Corner Radius** dropdown (0, 4, 8, 16, 32px, Full)

**Visibility**: Only when shape/card selected

---

### **Phase 3: Line/Connector Styling** (Medium Priority)

```
┌─────────────────────────────────────────────────────────────────┐
│  🎨  │  [2px ▼]  [─ ▼]  │  ◀  ▶  │  [Straight ▼]               │
└─────────────────────────────────────────────────────────────────┘
   Color   Width   Style    Arrows    Type
```

**Actions**:
- **Line Color** 🎨 - Color picker
- **Line Width** dropdown (1, 2, 4, 8px)
- **Line Style** dropdown (Solid, Dashed, Dotted)
- **Start Arrow** ◀ - Arrow at start
- **End Arrow** ▶ - Arrow at end
- **Line Type** dropdown (Straight, Curved, Elbow)

**Visibility**: Only when connector/line selected

---

### **Phase 4: Layer Operations** (Low Priority)

```
┌─────────────────────────────────────────────────────────────────┐
│  ⬆  ⬇  │  ⤒  ⤓  │  📋  ✂  📄  🗑                                │
└─────────────────────────────────────────────────────────────────┘
   Order    Front/Back  Clipboard
```

**Actions**:
- **Bring Forward** ⬆ - Move one layer up
- **Send Backward** ⬇ - Move one layer down
- **Bring to Front** ⤒ - Move to topmost layer
- **Send to Back** ⤓ - Move to bottommost layer
- **Copy** 📋 - Copy to clipboard
- **Cut** ✂ - Cut to clipboard
- **Duplicate** 📄 - Duplicate in place
- **Delete** 🗑 - Remove from canvas

**Visibility**: Always (when items selected)

---

### **Phase 5: Smart Actions** (Future)

```
┌─────────────────────────────────────────────────────────────────┐
│  🔗  │  📐  │  🎯  │  ✨                                         │
└─────────────────────────────────────────────────────────────────┘
   Link  Measure  Snap  AI
```

**Actions**:
- **Create Link** 🔗 - Connect items with line
- **Measure** 📐 - Show dimensions/distances
- **Snap to Grid** 🎯 - Toggle grid snapping
- **AI Suggest** ✨ - AI-powered layout suggestions

---

## 🎨 **Context-Aware Toolbar**

### **Selection Types**

| Selection | Toolbar Sections |
|-----------|-----------------|
| **Single Product** | Lock, Delete, Duplicate |
| **Multiple Products** | Align, Distribute, Group, Lock, Solution |
| **Text Item** | Font, Size, Style, Color, Align |
| **Shape** | Fill, Border, Corner, Align |
| **Line/Connector** | Color, Width, Style, Arrows |
| **Mixed Selection** | Common actions only (Align, Lock) |

---

## 🏗️ **Implementation Structure**

### **Current Structure**
```typescript
AlignmentToolbar.tsx
├── alignmentActions[]
│   ├── Align (6 actions)
│   ├── Distribute (2 actions)
│   ├── Group (1 action)
│   ├── Lock (1 action)
│   └── Solution (1 action)
└── Render logic
```

### **Proposed Refactoring**
```
controls/
├── ContextToolbar.tsx           # Main container
├── toolbars/
│   ├── AlignmentToolbar.tsx     # Align, distribute
│   ├── TextToolbar.tsx          # Font, size, style
│   ├── ShapeToolbar.tsx         # Fill, border, corners
│   ├── LineToolbar.tsx          # Line styling
│   └── LayerToolbar.tsx         # Z-order, clipboard
├── components/
│   ├── ToolbarButton.tsx        # Reusable button
│   ├── ToolbarDropdown.tsx      # Reusable dropdown
│   ├── ToolbarSeparator.tsx     # Visual separator
│   └── ColorPicker.tsx          # Color selection
└── hooks/
    └── useToolbarActions.ts     # Action handlers
```

---

## 📐 **Layout Patterns**

### **Compact Mode** (Default)
```
┌────────────────────────────────────┐
│  Icon  Icon  │  Icon  Icon  │  Icon │
└────────────────────────────────────┘
```
- Icon-only buttons
- Tooltips on hover
- Separators between groups

### **Expanded Mode** (Optional)
```
┌──────────────────────────────────────────┐
│  [Font: Inter ▼]  [Size: 14 ▼]  B  I  U  │
└──────────────────────────────────────────┘
```
- Labels for dropdowns
- More spacing
- Better for beginners

---

## 🎯 **Action Priority Matrix**

| Priority | Actions | Reason |
|----------|---------|--------|
| **P0** | Align, Distribute, Group, Lock | Core functionality, already implemented |
| **P1** | Text formatting | Essential for labels/annotations |
| **P2** | Shape styling | Visual customization |
| **P3** | Line styling | Connector customization |
| **P4** | Layer operations | Advanced users |
| **P5** | Smart actions | Future enhancements |

---

## 🔧 **Technical Implementation**

### **1. Context Detection**
```typescript
function getToolbarSections(selectedItems: CanvasItem[]): ToolbarSection[] {
    if (selectedItems.length === 0) return [];
    
    const types = new Set(selectedItems.map(item => item.entityType));
    
    // Single text item
    if (types.size === 1 && types.has('text')) {
        return ['text', 'alignment', 'layer'];
    }
    
    // Multiple products
    if (types.size === 1 && types.has('product')) {
        return ['alignment', 'distribution', 'group', 'layer'];
    }
    
    // Mixed selection
    return ['alignment', 'layer'];
}
```

### **2. Dynamic Toolbar**
```typescript
<ContextToolbar position={toolbarPosition}>
    {sections.includes('text') && <TextToolbar {...textProps} />}
    {sections.includes('alignment') && <AlignmentToolbar {...alignProps} />}
    {sections.includes('shape') && <ShapeToolbar {...shapeProps} />}
    {sections.includes('layer') && <LayerToolbar {...layerProps} />}
</ContextToolbar>
```

### **3. Responsive Sizing**
```typescript
const toolbarWidth = useMemo(() => {
    const baseWidth = 40; // Per button
    const separatorWidth = 10;
    const padding = 16;
    
    return (
        actions.length * baseWidth +
        separators.length * separatorWidth +
        padding
    );
}, [actions, separators]);
```

---

## 📝 **Next Steps**

### **Immediate (This Session)**
1. ✅ Restore current toolbar (DONE)
2. ⬜ Test all actions work
3. ⬜ Verify positioning

### **Phase 1 (Next Session)**
1. ⬜ Add TextToolbar component
2. ⬜ Implement font/size dropdowns
3. ⬜ Add text styling (B, I, U)
4. ⬜ Add color picker

### **Phase 2 (Future)**
1. ⬜ Add ShapeToolbar
2. ⬜ Add LineToolbar
3. ⬜ Add LayerToolbar
4. ⬜ Refactor to ContextToolbar pattern

---

## 🎨 **Visual Reference (Miro-style)**

```
Selection: Single Text
┌─────────────────────────────────────────────────────────────────┐
│  [Inter ▼]  [14 ▼]  B  I  U  │  🎨  │  ◀  ▬  ▶  │  🗑           │
└─────────────────────────────────────────────────────────────────┘

Selection: Multiple Products
┌─────────────────────────────────────────────────────────────────┐
│  ◀  ▬  ▶  │  ▲  ▬  ▼  │  ⬌  ⬍  │  👥  🔓  │  📦  │  🗑         │
└─────────────────────────────────────────────────────────────────┘

Selection: Shape
┌─────────────────────────────────────────────────────────────────┐
│  🎨  │  ▭  [2px ▼]  [─ ▼]  │  ◯  [4px ▼]  │  ◀  ▬  ▶  │  🗑    │
└─────────────────────────────────────────────────────────────────┘

Selection: Line/Connector
┌─────────────────────────────────────────────────────────────────┐
│  🎨  │  [2px ▼]  [─ ▼]  │  ◀  ▶  │  [Straight ▼]  │  🗑        │
└─────────────────────────────────────────────────────────────────┘
```

---

**Status**: Toolbar restored and ready for extension! 🚀
