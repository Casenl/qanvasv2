# Qanvas Documentation

Welcome to the Qanvas documentation! This guide will help you navigate through all available documentation.

---

## 📚 Quick Links

### Architecture & Patterns
- [Component Best Practices](architecture/COMPONENT_BEST_PRACTICES.md) - Guidelines for component development
- [Latest Audit (2025-12-31)](architecture/audits/2025-12-31.md) - Comprehensive codebase audit
- [Previous Audit (2025-12-30)](architecture/audits/2025-12-30.md) - Architecture audit

### Features
- [Infinite Canvas](features/infinite-canvas.md) - Infinite panning and zooming
- [Product Metrics](features/product-metrics.md) - Metric configuration and display
- [Snapshots](features/snapshots-implementation.md) - Canvas state snapshots
- [Solution Builder](features/solution-builder.md) - Solution creation and management
- [Properties Panel](features/properties-panel.md) - Item properties editing
- [Canvas Configuration](features/canvas-config.md) - Canvas settings

### Recent Fixes (2025-12-30)
- [Snap Zoom Fix](fixes/2025-12-30/snap-zoom-fix.md) - Snap guides at all zoom levels
- [Box Selection Fix](fixes/2025-12-30/box-selection-fix.md) - Multi-select at all zoom levels
- [Locked Items Fix](fixes/2025-12-30/locked-items-fix.md) - Select locked items to unlock
- [Snapshot Consolidation](fixes/2025-12-30/snapshot-consolidation.md) - Single snapshot UI
- [Snapshot Dialog Fix](fixes/2025-12-30/snapshot-dialog-fix.md) - Create dialog accessibility
- [Snap to Selected Fix](fixes/2025-12-30/snap-to-selected-fix.md) - Snap to selected items

### Roadmap
- [Context Toolbar](roadmap/context-toolbar.md) - Upcoming context-sensitive toolbar

### Guides
- [Reference Update Guide](guides/reference-update.md) - How to update references
- [Documentation Standards](../DOCUMENTATION_STANDARDS_QUICK_REFERENCE.md) - How to document

---

## 📁 Documentation Structure

```
docs/
├── README.md                          # This file
├── architecture/                      # Architecture & patterns
│   ├── COMPONENT_BEST_PRACTICES.md
│   └── audits/
│       ├── 2025-12-30.md
│       └── 2025-12-31.md
├── features/                          # Feature documentation
│   ├── infinite-canvas.md
│   ├── product-metrics.md
│   ├── solution-builder.md
│   ├── solution-restore.md
│   ├── properties-panel.md
│   ├── canvas-config.md
│   ├── snapshots-implementation.md
│   ├── snapshots-integration.md
│   ├── snapshot-manager-guide.md
│   ├── infinite-canvas-plan.md
│   └── product-metrics-testing.md
├── fixes/                             # Bug fixes & improvements
│   └── 2025-12-30/
│       ├── snap-zoom-fix.md
│       ├── box-selection-fix.md
│       ├── locked-items-fix.md
│       ├── snapshot-consolidation.md
│       ├── snapshot-dialog-fix.md
│       └── snap-to-selected-fix.md
├── roadmap/                           # Future plans
│   └── context-toolbar.md
└── guides/                            # How-to guides
    └── reference-update.md
```

---

## 🎯 Documentation by Topic

### Canvas Features
- [Infinite Canvas](features/infinite-canvas.md) - Pan, zoom, infinite workspace
- [Snap Guides](fixes/2025-12-30/snap-zoom-fix.md) - Alignment guides
- [Box Selection](fixes/2025-12-30/box-selection-fix.md) - Multi-select by dragging
- [Grid & Alignment](features/infinite-canvas.md#grid-system) - Grid and alignment tools

### Product Management
- [Product Metrics](features/product-metrics.md) - Configure and display metrics
- [Properties Panel](features/properties-panel.md) - Edit item properties
- [Canvas Configuration](features/canvas-config.md) - Global settings

### Snapshots & Versioning
- [Snapshot Implementation](features/snapshots-implementation.md) - How snapshots work
- [Snapshot Manager Guide](features/snapshot-manager-guide.md) - User guide
- [Snapshot Integration](features/snapshots-integration.md) - Integration details
- [Recent Improvements](fixes/2025-12-30/snapshot-consolidation.md) - Latest changes

### Solutions
- [Solution Builder](features/solution-builder.md) - Create solutions
- [Solution Restore](features/solution-restore.md) - Load and restore solutions

---

## 🔍 Finding Documentation

### By Date
- **2025-12-31**: [Codebase Audit](architecture/audits/2025-12-31.md)
- **2025-12-30**: [Architecture Audit](architecture/audits/2025-12-30.md), [6 Bug Fixes](fixes/2025-12-30/)

### By Type
- **Architecture**: [architecture/](architecture/)
- **Features**: [features/](features/)
- **Fixes**: [fixes/](fixes/)
- **Roadmap**: [roadmap/](roadmap/)
- **Guides**: [guides/](guides/)

### By Status
- **Completed Features**: See [features/](features/)
- **Recent Fixes**: See [fixes/2025-12-30/](fixes/2025-12-30/)
- **Planned Features**: See [roadmap/](roadmap/)

---

## 📝 Contributing to Documentation

When adding new documentation, follow these guidelines:

1. **Location**:
   - Features → `features/feature-name.md`
   - Fixes → `fixes/YYYY-MM-DD/fix-name.md`
   - Architecture → `architecture/doc-name.md`
   - Guides → `guides/guide-name.md`

2. **Naming**:
   - Use kebab-case: `snap-zoom-fix.md`
   - Be descriptive: `infinite-canvas.md` not `canvas.md`

3. **Structure**:
   - Include Overview, Problem/Goal, Solution, Examples
   - Link to related documentation
   - Add code examples where relevant

4. **Update this README**:
   - Add link to new documentation
   - Update relevant sections

See [Documentation Standards](../DOCUMENTATION_STANDARDS_QUICK_REFERENCE.md) for full guidelines.

---

## 🎓 Getting Started

### New to Qanvas?
1. Start with [Infinite Canvas](features/infinite-canvas.md)
2. Learn about [Product Metrics](features/product-metrics.md)
3. Explore [Snapshots](features/snapshots-implementation.md)

### Developer?
1. Read [Component Best Practices](architecture/COMPONENT_BEST_PRACTICES.md)
2. Review [Latest Audit](architecture/audits/2025-12-31.md)
3. Check [Documentation Standards](../DOCUMENTATION_STANDARDS_QUICK_REFERENCE.md)

### Looking for Something Specific?
- Use your editor's search (Ctrl+Shift+F)
- Check the structure above
- Browse by topic or date

---

## 📊 Documentation Stats

- **Total Documents**: 24
- **Architecture Docs**: 3
- **Feature Docs**: 11
- **Fix Docs**: 6
- **Roadmap Docs**: 1
- **Guides**: 1
- **Audits**: 2

**Last Updated**: December 31, 2025

---

## 🔗 External Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Need help?** Check the relevant documentation above or create a new issue.
