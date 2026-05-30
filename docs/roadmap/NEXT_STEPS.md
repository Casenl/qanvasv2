# Next Steps - Recommended Priorities

**Date**: January 5, 2026  
**Status**: Roadmap Planning

---

## 🎯 **Immediate Priorities (This Week)**

### **1. Layer Panel UI** (P1 - 6-8 hours)
**Why**: Now that we have layer operations, a visual layer panel would be very useful.

**Features**:
- ⬜ Layer list sidebar (right side)
- ⬜ Show all items with thumbnails
- ⬜ Drag to reorder (changes z-index)
- ⬜ Show/hide toggle per item
- ⬜ Lock/unlock toggle per item
- ⬜ Layer naming/renaming
- ⬜ Visual hierarchy (show frames + contained items)

**Benefits**:
- Better visibility of canvas structure
- Easy z-order management
- Quick show/hide for complex canvases
- Professional UX (like Figma/Sketch)

**Files to Create**:
- `src/components/canvas/layers/LayerPanel.tsx`
- `src/components/canvas/layers/LayerItem.tsx`
- `src/hooks/useLayerPanel.ts`

---

### **2. Advanced Color Picker** (P1 - 3-4 hours)
**Why**: Current color picker is basic, users want more control.

**Features**:
- ⬜ HSL/RGB/HEX input fields
- ⬜ Color presets (common colors)
- ⬜ Recent colors history
- ⬜ Opacity/alpha slider
- ⬜ Eyedropper tool (pick from canvas)

**Benefits**:
- Precise color control
- Faster color selection
- Better UX for designers

**Files to Update**:
- `src/components/ui/ColorPicker.tsx` (enhance existing)
- Add `src/components/ui/AdvancedColorPicker.tsx`

---

### **3. Corner Radius Control** (P1 - 2-3 hours)
**Why**: Shapes have basic rounded corners, but no UI control.

**Features**:
- ⬜ Corner radius slider (0-50px)
- ⬜ Individual corner control (optional)
- ⬜ Preview while adjusting
- ⬜ Works for rectangles, frames

**Benefits**:
- More design flexibility
- Professional shape styling
- Easy to implement (data structure exists)

**Files to Update**:
- `src/components/canvas/controls/AlignmentToolbar.tsx`
- Add corner radius control to shape styling section

---

## 📋 **Short-term Goals (Next 2 Weeks)**

### **4. Enhanced Connectors** (P2 - 8-10 hours)
**Why**: Lines/arrows exist but need improvements.

**Features**:
- ⬜ Curved lines (bezier curves)
- ⬜ Elbow connectors (orthogonal routing)
- ⬜ Auto-attach to items (magnetic endpoints)
- ⬜ Smart routing (avoid obstacles)
- ⬜ Connection points on shapes

**Benefits**:
- Better diagrams and flowcharts
- Professional connector system
- Automatic layout updates

**Files to Create/Update**:
- `src/hooks/useConnectors.ts`
- `src/components/canvas/connectors/ConnectorRenderer.tsx`
- Update `LineRenderer.tsx`

---

### **5. Template System** (P2 - 6-8 hours)
**Why**: Users want to save and reuse common layouts.

**Features**:
- ⬜ Save canvas as template
- ⬜ Template library panel
- ⬜ Load template onto canvas
- ⬜ Template categories
- ⬜ Template preview thumbnails

**Benefits**:
- Faster canvas creation
- Consistent layouts
- Shareable templates

**Files to Create**:
- `src/components/canvas/templates/TemplatePanel.tsx`
- `src/hooks/useTemplates.ts`
- `src/lib/templates/` (template storage)

---

### **6. Performance Optimization** (P1 - 4-6 hours)
**Why**: Large canvases (500+ items) may become slow.

**Optimizations**:
- ⬜ Virtual rendering (only render visible items)
- ⬜ Debounce snap guide calculations
- ⬜ Memoize expensive computations
- ⬜ Optimize re-renders (React.memo)
- ⬜ Lazy load sidebar items

**Benefits**:
- Smooth performance with 1000+ items
- Better user experience
- Scalability

**Files to Update**:
- `src/components/canvas/CanvasWorkspace.tsx`
- `src/hooks/useSnapGuides.ts`
- Add `src/hooks/useVirtualCanvas.ts`

---

## 🚀 **Medium-term Goals (Next Month)**

### **7. Comments & Annotations** (P2 - 10-12 hours)
**Features**:
- ⬜ Add comment pins to canvas
- ⬜ Comment threads
- ⬜ Resolve/unresolve comments
- ⬜ @mentions (if multi-user)
- ⬜ Comment notifications

**Benefits**:
- Collaboration features
- Feedback system
- Design review workflow

---

### **8. Advanced Export Options** (P2 - 4-6 hours)
**Features**:
- ⬜ Export selection (not just frames)
- ⬜ Export entire canvas
- ⬜ Export with/without background
- ⬜ Export at custom scale (1x, 2x, 4x)
- ⬜ Batch export (all frames)

**Benefits**:
- More export flexibility
- Better for presentations
- Batch operations

---

### **9. Keyboard Shortcut Cheatsheet** (P1 - 2-3 hours)
**Features**:
- ⬜ Modal with all shortcuts
- ⬜ Searchable/filterable
- ⬜ Categorized by function
- ⬜ Show on first load
- ⬜ Accessible via "?" key

**Benefits**:
- Better discoverability
- Faster learning curve
- Professional UX

---

## 🎨 **Nice-to-Have Features**

### **10. Smart Alignment Suggestions** (P3 - 8-10 hours)
- ⬜ AI-powered layout suggestions
- ⬜ Auto-detect patterns
- ⬜ Suggest improvements
- ⬜ One-click apply

### **11. Mobile Support** (P3 - 15-20 hours)
- ⬜ Touch gestures (pinch to zoom)
- ⬜ Mobile-optimized UI
- ⬜ Responsive layout
- ⬜ Touch-friendly controls

### **12. Real-time Collaboration** (P3 - 20+ hours)
- ⬜ Live cursors
- ⬜ Real-time updates
- ⬜ User presence
- ⬜ Conflict resolution
- ⬜ Version history

---

## 📊 **Recommended Priority Order**

| Priority | Feature | Effort | Impact | ROI |
|----------|---------|--------|--------|-----|
| **1** | Layer Panel | 6-8h | High | ⭐⭐⭐⭐⭐ |
| **2** | Advanced Color Picker | 3-4h | Medium | ⭐⭐⭐⭐ |
| **3** | Corner Radius Control | 2-3h | Medium | ⭐⭐⭐⭐ |
| **4** | Performance Optimization | 4-6h | High | ⭐⭐⭐⭐⭐ |
| **5** | Enhanced Connectors | 8-10h | High | ⭐⭐⭐⭐ |
| **6** | Template System | 6-8h | Medium | ⭐⭐⭐ |
| **7** | Keyboard Cheatsheet | 2-3h | Low | ⭐⭐⭐ |
| **8** | Advanced Export | 4-6h | Medium | ⭐⭐⭐ |
| **9** | Comments | 10-12h | Medium | ⭐⭐⭐ |

---

## 🎯 **This Week's Focus**

**Recommended**: Start with **Layer Panel** + **Advanced Color Picker** + **Corner Radius**

**Total Effort**: ~11-15 hours  
**Impact**: High - All three are frequently requested features  
**Complexity**: Medium - Builds on existing systems

**Why This Order?**
1. **Layer Panel** - Complements the layer operations we just built
2. **Color Picker** - Quick win, improves UX significantly
3. **Corner Radius** - Easy to implement, high visual impact

---

## 📝 **Notes**

- All frame features are now complete ✅
- Focus on UX improvements and polish
- Performance optimization should be done before adding more features
- Consider user feedback for prioritization

---

**Next Review**: January 12, 2026
