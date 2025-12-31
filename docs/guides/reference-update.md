# CanvasBoard Reference Updates - Complete Guide

## Summary
We've successfully extracted logic into hooks. Now we need to update all references in CanvasBoard.tsx to use the new hooks.

## 🔧 Find & Replace Guide

### 1. Snapshot Manager References

| Old Reference | New Reference | Count |
|--------------|---------------|-------|
| `handleCreateSnapshot` | `snapshotManager.createSnapshot` | ~3 |
| `handleLoadSnapshot` | `snapshotManager.loadSnapshot` | ~2 |
| `handleDeleteSnapshot` | `snapshotManager.deleteSnapshot` | ~2 |
| `handleCompareSnapshots` | `snapshotManager.compareSnapshots` | ~2 |
| `snapshots` | `snapshotManager.snapshots` | ~4 |
| `currentSnapshotId` | `snapshotManager.currentSnapshotId` | ~4 |
| `showComparison` | `snapshotManager.showComparison` | ~2 |
| `comparisonData` | `snapshotManager.comparisonData` | ~4 |
| `setShowComparison(false)` | `snapshotManager.closeComparison()` | ~1 |

### 2. Solution Manager References

| Old Reference | New Reference | Count |
|--------------|---------------|-------|
| `handleCreateSolution` | `solutionManager.createSolution` | ~1 |
| `handleSaveSolution` | `solutionManager.saveSolution` | ~1 |
| `getSelectedProducts()` | `solutionManager.getSelectedProducts()` | ~1 |
| `solutions` | `solutionManager.solutions` | ~2 |
| `showSolutionDialog` | `solutionManager.showSolutionDialog` | ~2 |
| `setShowSolutionDialog(false)` | `solutionManager.closeSolutionDialog()` | ~1 |

### 3. Metric Manager References

| Old Reference | New Reference | Count |
|--------------|---------------|-------|
| `handleMetricChange` | `metricManager.handleMetricChange` | ~1 |
| `handleMetricReset` | `metricManager.handleMetricReset` | ~1 |

## 📍 Specific Locations to Update

### In CanvasWorkspace Component (around line 700-730):
```tsx
// OLD:
onCreateSnapshot={handleCreateSnapshot}
onLoadSnapshot={handleLoadSnapshot}
onDeleteSnapshot={handleDeleteSnapshot}
onCompareSnapshots={handleCompareSnapshots}

// NEW:
onCreateSnapshot={snapshotManager.createSnapshot}
onLoadSnapshot={snapshotManager.loadSnapshot}
onDeleteSnapshot={snapshotManager.deleteSnapshot}
onCompareSnapshots={snapshotManager.compareSnapshots}
```

### In SnapshotControls Component (around line 710-730):
```tsx
// OLD:
snapshots={snapshots}
currentSnapshotId={currentSnapshotId}

// NEW:
snapshots={snapshotManager.snapshots}
currentSnapshotId={snapshotManager.currentSnapshotId}
```

### In AlignmentToolbar Component (around line 775-780):
```tsx
// OLD:
onCreateSolution={handleCreateSolution}

// NEW:
onCreateSolution={solutionManager.createSolution}
```

### In PropertiesPanel Component (around line 795-800):
```tsx
// OLD:
onMetricChange={handleMetricChange}
onMetricReset={handleMetricReset}

// NEW:
onMetricChange={metricManager.handleMetricChange}
onMetricReset={metricManager.handleMetricReset}
```

### In SolutionDialog Component (around line 870-880):
```tsx
// OLD:
open={showSolutionDialog}
onSave={handleSaveSolution}
selectedProducts={getSelectedProducts()}
onClose={() => setShowSolutionDialog(false)}

// NEW:
open={solutionManager.showSolutionDialog}
onSave={solutionManager.saveSolution}
selectedProducts={solutionManager.getSelectedProducts()}
onClose={solutionManager.closeSolutionDialog}
```

### In ComparisonView Component (around line 990-1000):
```tsx
// OLD:
{showComparison && comparisonData && (
    <ComparisonView
        comparison={comparisonData.comparison}
        fromName={comparisonData.fromName}
        toName={comparisonData.toName}
        onClose={() => setShowComparison(false)}

// NEW:
{snapshotManager.showComparison && snapshotManager.comparisonData && (
    <ComparisonView
        comparison={snapshotManager.comparisonData.comparison}
        fromName={snapshotManager.comparisonData.fromName}
        toName={snapshotManager.comparisonData.toName}
        onClose={snapshotManager.closeComparison}
```

### In handleQuickSnapshot wrapper (around line 675-680):
```tsx
// OLD:
const handleQuickSnapshot = () => {
    handleCreateSnapshot(`Snapshot ${new Date().toLocaleTimeString()}`);
};

const handleCompareWithCurrent = (targetId: string) => {
    if (currentSnapshotId) {
        handleCompareSnapshots(currentSnapshotId, targetId);
    }
};

// NEW:
// These can be REMOVED entirely - they're now in the hook!
// Just use snapshotManager.quickSnapshot and snapshotManager.compareWithCurrent directly
```

### In drag handler for solutions (around line 530):
```tsx
// OLD:
const solution = solutions.find(s => s.id === sourceData.entityId);

// NEW:
const solution = solutionManager.solutions.find(s => s.id === sourceData.entityId);
```

## ✅ Verification Checklist

After making changes, verify:
- [ ] No lint errors for undefined variables
- [ ] Snapshot creation works
- [ ] Snapshot loading works
- [ ] Snapshot deletion works
- [ ] Snapshot comparison works
- [ ] Solution creation works
- [ ] Solution dialog opens/closes
- [ ] Metric changes work
- [ ] Metric reset works

## 🎯 Expected Result

After all updates:
- **0 lint errors** related to missing handlers
- **All functionality** works as before
- **CanvasBoard.tsx** is ~870 lines (down from 1,109)
- **Code is cleaner** and more maintainable
