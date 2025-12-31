# Documentation Reorganization Plan

## 🎯 Goal
Reorganize documentation for better discoverability, maintainability, and clarity.

---

## 📋 Phase 1: Immediate Cleanup (Today)

### Delete Outdated Files
```bash
# Refactoring progress reports (completed, no longer needed)
rm docs/REFACTORING_COMPLETE_SUMMARY.md
rm docs/REFACTORING_FINAL_COMPLETE.md
rm docs/REFACTORING_NEXT_STEPS.md
rm docs/REFACTORING_PHASE2_PROGRESS.md
rm docs/REFACTORING_PROGRESS_REPORT.md
rm docs/CANVASBOARD_REFACTORING_PLAN.md
```

### Delete Orphaned Code
```bash
# SnapshotManager functionality moved to SnapshotControls
rm src/components/canvas/SnapshotManager.tsx
```

**Reason**: These documents were progress reports during refactoring. The work is complete and the information is now in the audit reports.

---

## 📁 Phase 2: Create New Structure (This Week)

### New Folder Structure
```
docs/
├── README.md                          # NEW: Documentation index
│
├── architecture/                      # NEW: Architecture documentation
│   ├── TECH_STACK.md
│   ├── COMPONENT_BEST_PRACTICES.md
│   ├── ARCHITECTURE_PATTERNS.md
│   └── audits/
│       ├── 2025-12-30.md
│       └── 2025-12-31.md
│
├── features/                          # NEW: Feature documentation
│   ├── infinite-canvas.md
│   ├── product-metrics.md
│   ├── solution-builder.md
│   ├── snapshots.md
│   ├── alignment-tools.md
│   └── properties-panel.md
│
├── fixes/                             # NEW: Bug fixes and improvements
│   └── 2025-12-30/
│       ├── snap-zoom-fix.md
│       ├── locked-items-fix.md
│       ├── box-selection-fix.md
│       ├── snapshot-consolidation.md
│       ├── snapshot-dialog-fix.md
│       └── snap-to-selected-fix.md
│
├── roadmap/                           # NEW: Future plans
│   ├── context-toolbar.md
│   └── next-features.md
│
└── guides/                            # NEW: How-to guides
    ├── reference-update.md
    ├── deployment.md                  # TODO
    └── contributing.md                # TODO
```

### Commands
```bash
# Create new folders
mkdir -p docs/architecture/audits
mkdir -p docs/features
mkdir -p docs/fixes/2025-12-30
mkdir -p docs/roadmap
mkdir -p docs/guides
```

---

## 📦 Phase 3: Move Files (This Week)

### Architecture Docs
```bash
# Move to architecture/
mv docs/COMPONENT_BEST_PRACTICES.md docs/architecture/
mv docs/ARCHITECTURE_AUDIT_2025-12-30.md docs/architecture/audits/2025-12-30.md
mv docs/CODEBASE_AUDIT_2025-12-31.md docs/architecture/audits/2025-12-31.md

# Copy tech stack from backup
cp _pre_init_backup/docs/20250112-Tech_Stack_and_Architecture_Best_Practices.md docs/architecture/TECH_STACK.md
```

### Feature Docs
```bash
# Move to features/
mv docs/INFINITE_CANVAS_COMPLETE.md docs/features/infinite-canvas.md
mv docs/PRODUCT_METRICS_COMPLETE.md docs/features/product-metrics.md
mv docs/SOLUTION_BUILDER_COMPLETE.md docs/features/solution-builder.md
mv docs/ENHANCED_PROPERTIES_COMPLETE.md docs/features/properties-panel.md

# Snapshots will be consolidated (see Phase 4)
```

### Fix Docs
```bash
# Move to fixes/2025-12-30/
mv docs/SNAP_ZOOM_FIX_2025-12-30.md docs/fixes/2025-12-30/snap-zoom-fix.md
mv docs/LOCKED_ITEMS_FIX_2025-12-30.md docs/fixes/2025-12-30/locked-items-fix.md
mv docs/BOX_SELECTION_ZOOM_FIX.md docs/fixes/2025-12-30/box-selection-fix.md
mv docs/SNAPSHOT_CONSOLIDATION.md docs/fixes/2025-12-30/snapshot-consolidation.md
mv docs/SNAPSHOT_DIALOG_FIX.md docs/fixes/2025-12-30/snapshot-dialog-fix.md
mv docs/SNAP_TO_SELECTED_FIX.md docs/fixes/2025-12-30/snap-to-selected-fix.md
```

### Roadmap Docs
```bash
# Move to roadmap/
mv docs/CONTEXT_TOOLBAR_ROADMAP.md docs/roadmap/context-toolbar.md
```

### Guide Docs
```bash
# Move to guides/
mv docs/REFERENCE_UPDATE_GUIDE.md docs/guides/reference-update.md
```

---

## 🔄 Phase 4: Consolidate Duplicate Docs (Next Week)

### Snapshots Documentation
**Merge into**: `docs/features/snapshots.md`

**Source files**:
- SNAPSHOTS_IMPLEMENTATION.md
- SNAPSHOTS_INTEGRATION_FINAL.md
- SNAPSHOT_CONSOLIDATION.md (from fixes/)
- SNAPSHOT_MANAGER_GUIDE.md

**Structure**:
```markdown
# Snapshots Feature

## Overview
[From SNAPSHOTS_IMPLEMENTATION.md]

## Architecture
[From SNAPSHOTS_IMPLEMENTATION.md]

## User Guide
[From SNAPSHOT_MANAGER_GUIDE.md]

## Implementation Details
[From SNAPSHOTS_INTEGRATION_FINAL.md]

## Recent Changes
[From SNAPSHOT_CONSOLIDATION.md]
```

### Infinite Canvas Documentation
**Merge into**: `docs/features/infinite-canvas.md`

**Source files**:
- INFINITE_CANVAS_COMPLETE.md
- INFINITE_CANVAS_PLAN.md

**Structure**:
```markdown
# Infinite Canvas Feature

## Overview
[From INFINITE_CANVAS_COMPLETE.md]

## Implementation
[From INFINITE_CANVAS_COMPLETE.md]

## Original Plan
[From INFINITE_CANVAS_PLAN.md - as appendix]
```

---

## 📝 Phase 5: Create Missing Docs (Ongoing)

### 1. Documentation Index (Priority: HIGH)
**File**: `docs/README.md`

```markdown
# Qanvas Documentation

## Quick Links
- [Tech Stack](architecture/TECH_STACK.md)
- [Component Best Practices](architecture/COMPONENT_BEST_PRACTICES.md)
- [Latest Audit](architecture/audits/2025-12-31.md)

## Features
- [Infinite Canvas](features/infinite-canvas.md)
- [Product Metrics](features/product-metrics.md)
- [Snapshots](features/snapshots.md)
- [Solution Builder](features/solution-builder.md)
- [Alignment Tools](features/alignment-tools.md)

## Recent Fixes
- [2025-12-30 Fixes](fixes/2025-12-30/)

## Roadmap
- [Context Toolbar](roadmap/context-toolbar.md)

## Guides
- [Reference Update Guide](guides/reference-update.md)
- [Deployment Guide](guides/deployment.md)
- [Contributing Guide](guides/contributing.md)
```

### 2. Deployment Guide (Priority: MEDIUM)
**File**: `docs/guides/deployment.md`

```markdown
# Deployment Guide

## Prerequisites
- Vercel account
- Firebase project
- Environment variables

## Steps
1. Configure Firebase
2. Set environment variables
3. Deploy to Vercel
4. Verify deployment

## Troubleshooting
[Common issues and solutions]
```

### 3. Contributing Guide (Priority: MEDIUM)
**File**: `docs/guides/contributing.md`

```markdown
# Contributing Guide

## Code Style
- Follow Component Best Practices
- TypeScript strict mode
- No `any` types

## Pull Request Process
1. Create feature branch
2. Make changes
3. Add tests
4. Submit PR

## Component Guidelines
[Link to COMPONENT_BEST_PRACTICES.md]
```

### 4. Changelog (Priority: LOW)
**File**: `docs/CHANGELOG.md`

```markdown
# Changelog

## [Unreleased]

## [0.2.0] - 2025-12-30
### Added
- Snap guides at all zoom levels
- Box selection at all zoom levels
- Snap to selected items
- Snapshot controls consolidation

### Fixed
- Locked items can now be selected
- Distribute icons swapped for clarity

## [0.1.0] - 2025-12-01
### Added
- Initial canvas implementation
- Product metrics
- Solution builder
- Infinite canvas
```

---

## 🎯 Phase 6: Maintenance (Ongoing)

### Documentation Standards

#### **When to Create a New Doc**
- ✅ New feature implementation
- ✅ Major bug fix with learnings
- ✅ Architecture change
- ❌ Minor bug fixes (add to CHANGELOG only)
- ❌ Code refactoring (update existing docs)

#### **Where to Put Docs**

| Type | Location | Example |
|------|----------|---------|
| Feature | `features/` | `features/snapshots.md` |
| Fix | `fixes/YYYY-MM-DD/` | `fixes/2025-12-30/snap-fix.md` |
| Architecture | `architecture/` | `architecture/TECH_STACK.md` |
| Audit | `architecture/audits/` | `audits/2025-12-31.md` |
| Roadmap | `roadmap/` | `roadmap/context-toolbar.md` |
| Guide | `guides/` | `guides/deployment.md` |

#### **Naming Conventions**
- Use kebab-case: `snap-zoom-fix.md`
- Be descriptive: `infinite-canvas.md` not `canvas.md`
- Include dates for fixes: `2025-12-30/`
- Use `.md` extension

#### **Document Structure**
```markdown
# Title

## Overview
[What this is about]

## Problem/Goal
[What problem does this solve?]

## Solution/Implementation
[How was it solved?]

## Usage/Examples
[How to use it?]

## Technical Details
[Implementation details]

## Testing
[How to test?]

## Related
[Links to related docs]
```

---

## 📊 Progress Tracking

### Phase 1: Cleanup ✅
- [x] Identify outdated docs
- [x] Create deletion plan
- [ ] Execute deletion (pending user approval)

### Phase 2: Structure
- [x] Design new structure
- [ ] Create folders
- [ ] Create README.md

### Phase 3: Migration
- [ ] Move architecture docs
- [ ] Move feature docs
- [ ] Move fix docs
- [ ] Move roadmap docs
- [ ] Move guide docs

### Phase 4: Consolidation
- [ ] Merge snapshot docs
- [ ] Merge infinite canvas docs
- [ ] Delete source files

### Phase 5: New Docs
- [ ] Create README.md
- [ ] Create DEPLOYMENT.md
- [ ] Create CONTRIBUTING.md
- [ ] Create CHANGELOG.md

### Phase 6: Maintenance
- [ ] Establish documentation standards
- [ ] Update existing docs
- [ ] Keep CHANGELOG current

---

## 🎯 Success Criteria

### Documentation is successful when:
- ✅ Easy to find relevant information
- ✅ No duplicate or outdated docs
- ✅ Clear organization by type
- ✅ Comprehensive coverage of features
- ✅ Up-to-date with codebase

### Metrics:
- **Discoverability**: Can find doc in <30 seconds
- **Accuracy**: Docs match current code
- **Completeness**: All features documented
- **Maintainability**: Easy to update

---

## 📝 Notes

### Why This Structure?

**By Type (architecture/, features/, fixes/)**
- Easy to find what you're looking for
- Clear separation of concerns
- Scalable as project grows

**By Date (fixes/2025-12-30/)**
- Historical context preserved
- Easy to see what changed when
- Audit trail for debugging

**Consolidated Features**
- Single source of truth
- No duplicate information
- Easier to maintain

### Alternative Considered

**By Component** (rejected)
```
docs/
├── canvas-board/
├── canvas-workspace/
└── snapshot-manager/
```
**Reason**: Too granular, hard to find cross-cutting concerns

**Flat Structure** (rejected)
```
docs/
├── doc1.md
├── doc2.md
└── doc3.md
```
**Reason**: Doesn't scale, hard to navigate

---

**Plan Created**: December 31, 2025  
**Estimated Completion**: January 7, 2026 (1 week)  
**Priority**: MEDIUM (after CanvasBoard refactoring)
