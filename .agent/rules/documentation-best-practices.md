---
trigger: always_on
---

# Documentation Best Practices

## When to Create Documentation

### ✅ **Always Document:**
- New features (create `docs/features/feature-name.md`)
- Major bug fixes with learnings (create `docs/fixes/YYYY-MM-DD/fix-name.md`)
- Architecture changes (update `docs/architecture/`)
- Breaking changes (add to `docs/CHANGELOG.md`)

### ❌ **Don't Document:**
- Minor bug fixes (just update CHANGELOG)
- Code refactoring (update existing docs if needed)
- Trivial changes

---

## Documentation Structure

```
docs/
├── README.md                          # Documentation index
├── architecture/                      # Architecture & patterns
│   ├── TECH_STACK.md
│   ├── COMPONENT_BEST_PRACTICES.md
│   └── audits/YYYY-MM-DD.md
├── features/                          # Feature documentation
│   └── feature-name.md
├── fixes/                             # Bug fixes & improvements
│   └── YYYY-MM-DD/
│       └── fix-name.md
├── roadmap/                           # Future plans
│   └── feature-roadmap.md
└── guides/                            # How-to guides
    ├── deployment.md
    └── contributing.md
```

---

## Naming Conventions

### Files
- Use **kebab-case**: `snap-zoom-fix.md`, `infinite-canvas.md`
- Be **descriptive**: `infinite-canvas.md` not `canvas.md`
- Include **dates** for fixes: `fixes/2025-12-30/snap-fix.md`
- Use `.md` extension

### Folders
- Use **lowercase**: `features/`, `fixes/`, `architecture/`
- Use **dates** for fixes: `fixes/2025-12-30/`
- Be **specific**: `architecture/` not `arch/`

---

## Document Template

```markdown
# Title

## Overview
Brief description of what this is about (1-2 paragraphs)

## Problem/Goal
What problem does this solve? OR What is the goal?

## Solution/Implementation
How was it solved? OR How is it implemented?

## Usage/Examples
Code examples, usage patterns, or user guide

## Technical Details
Implementation details, architecture, algorithms

## Testing
How to test this feature/fix

## Related
- [Related Doc 1](../path/to/doc.md)
- [Related Doc 2](../path/to/doc.md)
```

---

## Documentation Rules

### 1. **Location Rules**

| Type | Location | Example |
|------|----------|---------|
| Feature | `features/` | `features/snapshots.md` |
| Bug Fix | `fixes/YYYY-MM-DD/` | `fixes/2025-12-30/snap-fix.md` |
| Architecture | `architecture/` | `architecture/TECH_STACK.md` |
| Audit | `architecture/audits/` | `audits/2025-12-31.md` |
| Roadmap | `roadmap/` | `roadmap/context-toolbar.md` |
| Guide | `guides/` | `guides/deployment.md` |

### 2. **Content Rules**

**DO:**
- ✅ Write clear, concise explanations
- ✅ Include code examples
- ✅ Add diagrams for complex concepts
- ✅ Link to related documentation
- ✅ Keep docs up-to-date with code
- ✅ Use proper markdown formatting

**DON'T:**
- ❌ Duplicate information (link instead)
- ❌ Write implementation details in multiple places
- ❌ Leave outdated docs (update or delete)
- ❌ Use vague language ("might", "probably")
- ❌ Skip examples

### 3. **Maintenance Rules**

**When code changes:**
1. Update relevant feature docs
2. Add entry to CHANGELOG.md
3. Update architecture docs if patterns changed
4. Delete outdated docs (don't leave orphans)

**Monthly:**
1. Review all docs for accuracy
2. Consolidate duplicate information
3. Archive outdated progress reports
4. Update README.md index

---

## Quick Reference

### Creating a New Feature Doc
```bash
# 1. Create file
touch docs/features/my-feature.md

# 2. Use template (see above)

# 3. Add to README.md index
echo "- [My Feature](features/my-feature.md)" >> docs/README.md
```

### Documenting a Bug Fix
```bash
# 1. Create dated folder if needed
mkdir -p docs/fixes/$(date +%Y-%m-%d)

# 2. Create fix doc
touch docs/fixes/$(date +%Y-%m-%d)/my-fix.md

# 3. Use template

# 4. Add to CHANGELOG.md
```

### Updating Architecture Docs
```bash
# 1. Update relevant doc
vim docs/architecture/COMPONENT_BEST_PRACTICES.md

# 2. Create audit if major change
touch docs/architecture/audits/$(date +%Y-%m-%d).md
```

---

## Examples

### Good Documentation

**File**: `docs/features/snapshots.md`
```markdown
# Snapshots Feature

## Overview
Snapshots allow users to save and restore canvas states, enabling
version control and comparison of different design phases.

## Usage
```tsx
// Create snapshot
const { createSnapshot } = useSnapshotManager();
createSnapshot('Phase 1', 'Initial design');

// Load snapshot
loadSnapshot('snapshot-123');
```

## Implementation
Uses `useSnapshotManager` hook with local state storage.
See `src/hooks/useSnapshotManager.ts` for details.

## Related
- [Snapshot Manager Hook](../architecture/hooks.md#useSnapshotManager)
- [Canvas State Management](../architecture/state-management.md)
```

### Bad Documentation

**File**: `docs/stuff.md` ❌
```markdown
# Some stuff

This is about snapshots and maybe some other things.

It works by doing things with the canvas.

See code for details.
```

**Problems:**
- ❌ Vague title
- ❌ No clear structure
- ❌ No examples
- ❌ No technical details
- ❌ Wrong location (should be in features/)

---

## Checklist

Before committing documentation:

- [ ] File in correct location (`features/`, `fixes/`, etc.)
- [ ] Follows naming convention (kebab-case)
- [ ] Uses document template structure
- [ ] Includes code examples
- [ ] Links to related docs
- [ ] Added to README.md index (if new feature)
- [ ] Updated CHANGELOG.md (if user-facing change)
- [ ] No duplicate information
- [ ] Clear and concise language
- [ ] Proper markdown formatting

---

## Anti-Patterns to Avoid

### ❌ Progress Reports as Permanent Docs
```
docs/
├── REFACTORING_PROGRESS_REPORT.md    # DELETE after completion
├── PHASE2_PROGRESS.md                # DELETE after completion
└── NEXT_STEPS.md                     # DELETE after completion
```

**Instead:** Create audit reports in `architecture/audits/` for historical record.

### ❌ Duplicate Information
```
docs/
├── SNAPSHOTS_IMPLEMENTATION.md       # Same info
├── SNAPSHOTS_INTEGRATION.md          # Same info
└── SNAPSHOT_GUIDE.md                 # Same info
```

**Instead:** Consolidate into single `features/snapshots.md`

### ❌ Unclear File Names
```
docs/
├── stuff.md                          # What stuff?
├── notes.md                          # What notes?
└── temp.md                           # Delete this!
```

**Instead:** Use descriptive names: `infinite-canvas.md`, `deployment.md`

### ❌ No Organization
```
docs/
├── doc1.md
├── doc2.md
├── doc3.md
... (50 more files)
```

**Instead:** Use folder structure: `features/`, `fixes/`, `guides/`

---

## Summary

**Golden Rules:**
1. 📁 **Organize by type** (features, fixes, architecture, guides)
2. 📅 **Date bug fixes** (fixes/YYYY-MM-DD/)
3. 🔗 **Link, don't duplicate** (single source of truth)
4. 🧹 **Delete outdated docs** (no orphans)
5. 📝 **Use templates** (consistent structure)
6. 🎯 **Be specific** (clear, concise, examples)

**When in doubt:**
- Is it a feature? → `features/`
- Is it a fix? → `fixes/YYYY-MM-DD/`
- Is it architecture? → `architecture/`
- Is it a guide? → `guides/`
- Is it outdated? → **DELETE IT**

---

**Last Updated**: December 31, 2025  
**Next Review**: Monthly
