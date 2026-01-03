# Qanvas - Feature Roadmap & To-Do List

**Last Updated**: December 31, 2025  
**Status**: Active Development

---

## ✅ **Completed Features**

### **Core Canvas Functionality**
- ✅ Infinite canvas with pan & zoom
- ✅ Drag & drop from sidebar
- ✅ Drag & drop on canvas
- ✅ Multi-select (box selection + click)
- ✅ Snap guides (alignment helpers)
- ✅ Axis locking (Shift key)
- ✅ Grid system
- ✅ Zoom controls (buttons + wheel)
- ✅ Canvas transform (pan, zoom, reset)

### **Item Management**
- ✅ Add products from sidebar
- ✅ Add vendors from sidebar
- ✅ Add propositions from sidebar
- ✅ Copy items (Ctrl+drag)
- ✅ Delete items (Delete key)
- ✅ Lock/unlock items
- ✅ Group/ungroup items
- ✅ Nudge items (arrow keys)
- ✅ Properties panel

### **Product Metrics**
- ✅ Metric configuration per product
- ✅ Inherited metrics from canvas config
- ✅ Manual metric override
- ✅ Reset to inherited values
- ✅ Metric sync across products
- ✅ Visual metric display on cards

### **Snapshots & Versioning**
- ✅ Create snapshots
- ✅ Load snapshots
- ✅ Delete snapshots
- ✅ Compare snapshots
- ✅ Snapshot metadata (name, description, timestamp)
- ✅ Visual comparison view

### **Solutions**
- ✅ Create solution from selection
- ✅ Save solution with relative positions
- ✅ Load solution onto canvas
- ✅ Solution library
- ✅ Solution metadata

### **Alignment & Distribution**
- ✅ Align left/center/right
- ✅ Align top/middle/bottom
- ✅ Distribute horizontally
- ✅ Distribute vertically
- ✅ Floating alignment toolbar

### **Keyboard Shortcuts**
- ✅ Ctrl+A (Select all)
- ✅ Ctrl+C (Copy)
- ✅ Ctrl+V (Paste)
- ✅ Ctrl+D (Duplicate)
- ✅ Delete (Delete selected)
- ✅ Escape (Clear selection)
- ✅ Arrow keys (Nudge)
- ✅ Ctrl+G (Group)
- ✅ Ctrl+L (Lock)
- ✅ Ctrl+Z (Undo)
- ✅ Ctrl+Y (Redo)
- ✅ Ctrl+Plus/Minus (Zoom)
- ✅ Ctrl+0 (Reset zoom)

### **UI/UX**
- ✅ Dark/light theme toggle
- ✅ Color scheme toggle
- ✅ Responsive sidebar
- ✅ Context menu (right-click)
- ✅ Tooltips
- ✅ Loading states
- ✅ Debug info panel
- ✅ Axis lock indicator

### **Code Quality**
- ✅ TypeScript strict mode
- ✅ Component refactoring (CanvasBoard)
- ✅ Custom hooks architecture
- ✅ Documentation structure
- ✅ Best practices compliance

---


## ✅ **Recently Completed**

### **🎨 Floating Canvas Toolbar** (P0 - COMPLETED)
**Status**: ✅ Complete  
**Completed**: December 2025  
**Reference**: Miro-style left sidebar toolbar  

**Features**:
- ✅ **Floating toolbar** on left side of canvas (like Miro)
- ✅ **Tool selection** mode (select, draw, shape, text, etc.)
- ✅ **Quick access** to canvas tools
- ✅ **Collapsible** sections for shapes/lines
- ✅ **Sticky notes** tool
- ✅ **Image upload** tool
- ✅ **Frame** tool
- ✅ **Comment** tool

### **📐 Basic Shapes & Drawing** (P0 - COMPLETED)
**Status**: ✅ Complete  
**Completed**: December 2025  

**Core Shapes**:
- ✅ **Rectangle** - Basic rectangle with rounded corners option
- ✅ **Circle/Ellipse** - Perfect circles and ovals
- ✅ **Triangle** - Equilateral triangle
- ✅ **Diamond** - 45° rotated square
- ✅ **Hexagon** - Regular hexagon
- ✅ **Star** - 5-point star
- ✅ **Heart** - Heart shape

**Drawing Features**:
- ✅ Click-and-drag to create
- ✅ Shift to constrain proportions
- ✅ Snap to grid/guides
- ✅ Preview while drawing

### **🔄 Resize & Rotate** (P0 - COMPLETED)
**Status**: ✅ Complete  
**Completed**: December 2025  

**Resize Features**:
- ✅ **Corner handles** - Resize from corners (4 handles)
- ✅ **Edge handles** - Resize from edges (4 handles)
- ✅ **Proportional resize** - Shift key to maintain aspect ratio
- ✅ **Min/max size** constraints
- ✅ **Visual feedback** - Show dimensions while resizing
- ✅ **Snap while resizing** - Snap to other items

**Rotate Features**:
- ✅ **Rotation handle** - Circular handle above item
- ✅ **Free rotation** - Any angle
- ✅ **Snap rotation** - Shift for 15° increments
- ✅ **Rotation indicator** - Show angle while rotating
- ✅ **Rotate around center** - Default pivot point

**Multi-select Resize/Rotate**:
- ✅ Resize all selected items together
- ✅ Rotate all selected items together
- ✅ Maintain relative positions

### **✍️ Enhanced Text Features** (P0/P1 - COMPLETED)
**Status**: ✅ Complete  
**Completed**: January 3, 2026  
**Documentation**: `docs/features/enhanced-text-formatting.md`

**Text Creation**:
- ✅ **Text tool** in floating toolbar
- ✅ **Click to add** text box
- ✅ **Double-click item** to edit text
- ✅ **Auto-resize** text box to content
- ✅ **Multi-line** support

**Text Formatting**:
- ✅ **Font family** dropdown (Inter, Noto Sans, Roboto, Arial, etc.)
- ✅ **Font size** input (8-72pt)
- ✅ **Bold** (B) - Toggle
- ✅ **Italic** (I) - Toggle
- ✅ **Underline** (U) - Toggle
- ✅ **Strikethrough** - Toggle
- ✅ **Text color** picker
- ✅ **Text alignment** (left/center/right)
- ✅ **Line height** control (Tight, Normal, Relaxed, Loose)
- ✅ **Letter spacing** control (-2px to +10px)

---

## 🚧 **In Progress / High Priority**

### **Context Toolbar Extensions** (P1)
**Status**: Partially implemented  
**Docs**: `docs/roadmap/context-toolbar.md`

**Current**:
- ✅ Alignment tools
- ✅ Distribution tools
- ✅ Group/ungroup
- ✅ Lock/unlock
- ✅ Create solution

**To Add** (now covered by floating toolbar):
- ⬜ Shape-specific styling
- ⬜ Line-specific styling
- ⬜ Layer operations (z-order)

---

## 📋 **Planned Features**

### **Phase 1: Core Drawing Tools** (High Priority - After P0)

#### **1.1 Text Formatting**
- ⬜ Font family dropdown
- ⬜ Font size dropdown
- ⬜ Bold/Italic/Underline toggles
- ⬜ Text color picker
- ⬜ Text alignment (left/center/right)
- ⬜ Line height control

**Estimated Time**: 4-6 hours  
**Complexity**: Medium  
**Dependencies**: None

#### **1.2 Shape Styling**
- ⬜ Fill color picker
- ⬜ Border color picker
- ⬜ Border width dropdown
- ⬜ Border style (solid/dashed/dotted)
- ⬜ Corner radius control
- ⬜ Shadow/glow effects

**Estimated Time**: 4-6 hours  
**Complexity**: Medium  
**Dependencies**: Color picker component

#### **1.3 Advanced Color Picker**
- ⬜ HSL/RGB/HEX input
- ⬜ Color presets
- ⬜ Recent colors
- ⬜ Eyedropper tool
- ⬜ Opacity/alpha control

**Estimated Time**: 3-4 hours  
**Complexity**: Medium  
**Dependencies**: None

---

### **Phase 2: Connectors & Lines** (Medium Priority)

#### **2.1 Line/Connector Tool**
- ⬜ Draw straight lines
- ⬜ Draw curved lines
- ⬜ Draw elbow connectors
- ⬜ Auto-attach to items
- ⬜ Arrow heads (start/end)
- ⬜ Line labels

**Estimated Time**: 8-10 hours  
**Complexity**: High  
**Dependencies**: New item type

#### **2.2 Line Styling**
- ⬜ Line color
- ⬜ Line width
- ⬜ Line style (solid/dashed/dotted)
- ⬜ Arrow customization
- ⬜ Line routing (smart paths)

**Estimated Time**: 4-6 hours  
**Complexity**: Medium  
**Dependencies**: Line tool

---

### **Phase 3: Layer Management** (Medium Priority)

#### **3.1 Z-Order Operations**
- ⬜ Bring to front
- ⬜ Send to back
- ⬜ Bring forward
- ⬜ Send backward
- ⬜ Visual layer indicator

**Estimated Time**: 3-4 hours  
**Complexity**: Low  
**Dependencies**: None

#### **3.2 Layer Panel**
- ⬜ Layer list view
- ⬜ Drag to reorder
- ⬜ Show/hide layers
- ⬜ Lock layers
- ⬜ Layer naming

**Estimated Time**: 6-8 hours  
**Complexity**: Medium  
**Dependencies**: None

---

### **Phase 4: Advanced Features** (Low Priority)

#### **4.1 Comments & Annotations**
- ⬜ Add comment pins
- ⬜ Comment threads
- ⬜ Resolve comments
- ⬜ @mentions
- ⬜ Comment notifications

**Estimated Time**: 10-12 hours  
**Complexity**: High  
**Dependencies**: User system

#### **4.2 Collaboration** (Future)
- ⬜ Real-time cursors
- ⬜ Live updates
- ⬜ User presence
- ⬜ Conflict resolution
- ⬜ Version history

**Estimated Time**: 20+ hours  
**Complexity**: Very High  
**Dependencies**: Backend, WebSockets

#### **4.3 Export & Import**
- ⬜ Export to PNG/SVG
- ⬜ Export to PDF
- ⬜ Import from JSON
- ⬜ Export to JSON
- ⬜ Template library

**Estimated Time**: 6-8 hours  
**Complexity**: Medium  
**Dependencies**: None

#### **4.4 Smart Features**
- ⬜ Auto-layout suggestions
- ⬜ Smart alignment
- ⬜ Duplicate detection
- ⬜ AI-powered insights
- ⬜ Template generation

**Estimated Time**: 15-20 hours  
**Complexity**: Very High  
**Dependencies**: AI integration

---

## 🐛 **Known Issues & Improvements**

### **Bug Fixes**
- ⬜ None currently reported

### **Performance Optimizations**
- ⬜ Virtual rendering for large canvases (1000+ items)
- ⬜ Debounce snap guide calculations
- ⬜ Optimize re-renders
- ⬜ Lazy load sidebar items

### **UX Improvements**
- ⬜ Better mobile support
- ⬜ Touch gestures (pinch to zoom)
- ⬜ Keyboard shortcut cheatsheet
- ⬜ Onboarding tutorial
- ⬜ Contextual help tooltips

### **Code Quality**
- ⬜ Add unit tests (hooks)
- ⬜ Add integration tests (features)
- ⬜ Add E2E tests (user flows)
- ⬜ Improve error handling
- ⬜ Add logging/analytics

---

## 📊 **Priority Matrix**

| Priority | Features | Timeline | Effort |
|----------|----------|----------|--------|
| **P0** | 🎨 Floating Toolbar, 📐 Shapes, 🔄 Resize/Rotate, ✍️ Text | 2-4 weeks | 38-47h |
| **P1** | Context toolbar, Color picker, Shape styling | 1-2 weeks | 12-16h |
| **P2** | Connectors, Layer management | 2-4 weeks | 20-24h |
| **P3** | Export/Import, Advanced features | 1-2 months | 30-40h |
| **P4** | Collaboration, AI features | 3+ months | 40+ h |

---

## 🎯 **Recommended Next Steps**

### **Immediate (This Week)**
1. ✅ Complete CanvasBoard refactoring (DONE)
2. ⬜ Design floating toolbar UI
3. ⬜ Create shape type system
4. ⬜ Plan resize/rotate architecture

### **Short Term (Next 2-4 Weeks) - P0 FEATURES**

**Week 1-2: Floating Toolbar + Basic Shapes**
1. ⬜ Implement floating toolbar component
2. ⬜ Add tool selection state management
3. ⬜ Create basic shape types (rectangle, circle, triangle)
4. ⬜ Implement shape drawing (click & drag)
5. ⬜ Add shape to canvas system

**Week 3-4: Resize/Rotate + Text**
1. ⬜ Implement resize handles
2. ⬜ Implement rotation handle
3. ⬜ Add text tool to toolbar
4. ⬜ Create text formatting toolbar
5. ⬜ Implement font/size/style controls

**Estimated Total**: 38-47 hours

### **Medium Term (Next Month) - P1 FEATURES**
1. ⬜ Advanced shape styling
2. ⬜ Line/connector tools
3. ⬜ Layer management
4. ⬜ Color picker component

### **Long Term (Next Quarter) - P2-P4**
1. ⬜ Export functionality
2. ⬜ Performance optimizations
3. ⬜ Collaboration features
4. ⬜ AI-powered features

---

## 📝 **Feature Requests**

### **From Users** (None yet)
- Waiting for user feedback

### **Nice to Have**
- ⬜ Minimap/overview panel
- ⬜ Ruler guides
- ⬜ Grid snap toggle
- ⬜ Custom keyboard shortcuts
- ⬜ Workspace presets
- ⬜ Auto-save
- ⬜ Version history
- ⬜ Search/filter items
- ⬜ Bulk operations
- ⬜ Custom themes

---

## 🔗 **Related Documentation**

- [Context Toolbar Roadmap](context-toolbar.md)
- [Component Best Practices](../architecture/COMPONENT_BEST_PRACTICES.md)
- [Codebase Audit](../architecture/audits/2025-12-31.md)
- [Documentation Standards](../DOCUMENTATION_STANDARDS_QUICK_REFERENCE.md)

---

## 📈 **Progress Tracking**

### **Overall Completion**
- **Core Features**: 95% ✅
- **Advanced Features**: 30% 🚧
- **Polish & UX**: 70% 🚧
- **Testing**: 0% ❌
- **Documentation**: 85% ✅

### **Feature Categories**
- **Canvas**: 100% ✅
- **Items**: 90% ✅
- **Styling**: 20% 🚧
- **Collaboration**: 0% ❌
- **Export**: 0% ❌
- **AI**: 0% ❌

---

## 💡 **Ideas for Future**

### **Innovative Features**
- **AI Layout Assistant**: Suggest optimal layouts
- **Smart Templates**: Auto-generate based on content
- **Voice Commands**: "Add product X"
- **Gesture Controls**: Swipe, pinch, rotate
- **AR Preview**: View canvas in AR
- **3D Mode**: Isometric/3D view option

### **Integration Ideas**
- **Figma Import**: Import designs
- **Miro Sync**: Two-way sync
- **Slack Integration**: Share canvases
- **API**: Programmatic canvas creation
- **Webhooks**: Event notifications

---

**Status**: Roadmap complete and ready for execution! 🚀  
**Next**: Choose a feature from P1 and start implementation

---

**Maintained By**: Development Team  
**Review Frequency**: Weekly  
**Last Review**: December 31, 2025
