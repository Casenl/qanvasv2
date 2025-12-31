# Snapshots Integration - Final Steps 🎯

## ✅ **Wat is Al Klaar:**

1. ✅ **Snapshot Types** - `src/lib/types/snapshot.ts`
2. ✅ **SnapshotManager Component** - `src/components/canvas/SnapshotManager.tsx`
3. ✅ **ComparisonView Component** - `src/components/canvas/ComparisonView.tsx`
4. ✅ **Sidebar Tab** - Snapshots tab toegevoegd
5. ✅ **Sidebar Props** - Alle props toegevoegd

## 🔧 **Nog Te Doen: CanvasBoard Integration**

### **Stap 1: Imports Toevoegen**

Voeg toe aan `src/components/canvas/board/CanvasBoard.tsx`:

```typescript
import { CanvasSnapshot, createSnapshot, compareSnapshots } from '@/lib/types/snapshot';
import { ComparisonView } from '../ComparisonView';
import type { SnapshotComparison } from '@/lib/types/snapshot';
```

### **Stap 2: State Toevoegen**

Na `canvasConfig` state (rond regel 93):

```typescript
// Snapshots state
const [snapshots, setSnapshots] = useState<CanvasSnapshot[]>([]);
const [currentSnapshotId, setCurrentSnapshotId] = useState<string | undefined>();
const [showComparison, setShowComparison] = useState(false);
const [comparisonData, setComparisonData] = useState<{
    comparison: SnapshotComparison;
    fromName: string;
    toName: string;
} | null>(null);
```

### **Stap 3: Handlers Implementeren**

Na de metric handlers (rond regel 230):

```typescript
// Snapshot handlers
const handleCreateSnapshot = useCallback((name: string, description?: string) => {
    const snapshot = createSnapshot(name, items, canvasConfig, description);
    setSnapshots(prev => [...prev, snapshot]);
    setCurrentSnapshotId(snapshot.id);
    setDebugInfo(`Created snapshot: ${name}`);
    console.log('📸 Snapshot created:', snapshot);
}, [items, canvasConfig]);

const handleLoadSnapshot = useCallback((snapshotId: string) => {
    const snapshot = snapshots.find(s => s.id === snapshotId);
    if (!snapshot) {
        console.error('Snapshot not found:', snapshotId);
        return;
    }
    
    setItems(snapshot.items);
    setCanvasConfig(snapshot.canvasConfig);
    setCurrentSnapshotId(snapshotId);
    setDebugInfo(`Loaded snapshot: ${snapshot.name}`);
    console.log('📂 Snapshot loaded:', snapshot);
}, [snapshots]);

const handleDeleteSnapshot = useCallback((snapshotId: string) => {
    setSnapshots(prev => prev.filter(s => s.id !== snapshotId));
    if (currentSnapshotId === snapshotId) {
        setCurrentSnapshotId(undefined);
    }
    setDebugInfo(`Deleted snapshot`);
    console.log('🗑️ Snapshot deleted:', snapshotId);
}, [currentSnapshotId]);

const handleCompareSnapshots = useCallback((fromId: string, toId: string) => {
    const from = snapshots.find(s => s.id === fromId);
    const to = snapshots.find(s => s.id === toId);
    
    if (!from || !to) {
        console.error('Snapshots not found for comparison');
        return;
    }
    
    const comparison = compareSnapshots(from, to);
    setComparisonData({
        comparison,
        fromName: from.name,
        toName: to.name
    });
    setShowComparison(true);
    console.log('🔍 Comparing snapshots:', { from: from.name, to: to.name, comparison });
}, [snapshots]);
```

### **Stap 4: Props Doorgeven aan Sidebar**

Update de `<CanvasSidebar>` call (rond regel 785):

```typescript
<CanvasSidebar
    searchQuery={searchQuery}
    onSearchChange={setSearchQuery}
    selectedProposition={selectedProposition}
    onPropositionChange={setSelectedProposition}
    propositions={PROPOSITIONS}
    filteredProducts={filteredProducts}
    solutions={solutions}
    vendors={VENDORS}
    getVendorName={getVendorName}
    canvasConfig={canvasConfig}
    onConfigChange={setCanvasConfig}
    snapshots={snapshots}
    currentSnapshotId={currentSnapshotId}
    onCreateSnapshot={handleCreateSnapshot}
    onLoadSnapshot={handleLoadSnapshot}
    onDeleteSnapshot={handleDeleteSnapshot}
    onCompareSnapshots={handleCompareSnapshots}
/>
```

### **Stap 5: ComparisonView Renderen**

Voor de closing `</DndContext>` tag (rond regel 900):

```typescript
{/* Comparison View */}
{showComparison && comparisonData && (
    <ComparisonView
        comparison={comparisonData.comparison}
        fromName={comparisonData.fromName}
        toName={comparisonData.toName}
        onClose={() => setShowComparison(false)}
    />
)}
```

---

## 🎯 **Hoe Te Gebruiken (Na Implementatie):**

### **1. Snapshot Maken:**
```
1. Bouw je canvas (plaats producten, stel config in)
2. Sidebar → Snapshots tab (📸 icon)
3. Klik ➕ button
4. Naam: "Fase 1 - Initial Design"
5. Beschrijving: "Basis infrastructuur"
6. Klik "Create Snapshot"
```

### **2. Snapshot Laden:**
```
1. Snapshots tab
2. Zie lijst van snapshots
3. Klik 👁️ (Eye) button bij snapshot
4. Canvas wordt hersteld naar die staat
```

### **3. Snapshots Vergelijken:**
```
1. Snapshots tab
2. Klik 🔄 (Compare) button
3. Klik eerste snapshot
4. Klik tweede snapshot
5. Comparison View opent met verschillen:
   - ⚙️ Config changes
   - 🟢 Added products
   - 🔴 Removed products
   - 🟠 Modified products
```

### **4. Snapshot Verwijderen:**
```
1. Snapshots tab
2. Klik 🗑️ (Trash) button bij snapshot
3. Snapshot wordt verwijderd
```

---

## 📊 **Comparison View Details:**

### **Canvas Config Changes:**
```
⚙️ Named Users
500 → 1000 📈

⚙️ Cores
128 → 256 📈
```

### **Added Products:**
```
🟢 Azure
🟢 AWS EKS
```

### **Removed Products:**
```
🔴 vSphere
```

### **Modified Products:**
```
🟠 Horizon
  📍 Position: (100, 200) → (300, 400)
  👤 Named Users: 500 → 300
```

---

## 🐛 **Debug Logging:**

Console output bij gebruik:

```
📸 Snapshot created: {
  id: "snapshot-1735505400000",
  name: "Fase 1",
  items: [...],
  canvasConfig: {...}
}

📂 Snapshot loaded: {
  name: "Fase 1",
  items: 3 products
}

🔍 Comparing snapshots: {
  from: "Fase 1",
  to: "Fase 2",
  comparison: {
    added: 1,
    removed: 0,
    modified: 2
  }
}

🗑️ Snapshot deleted: snapshot-1735505400000
```

---

## ✅ **Checklist:**

- [ ] Imports toegevoegd
- [ ] State toegevoegd
- [ ] Handlers geïmplementeerd
- [ ] Props doorgegeven aan Sidebar
- [ ] ComparisonView gerenderd
- [ ] Getest: Create snapshot
- [ ] Getest: Load snapshot
- [ ] Getest: Compare snapshots
- [ ] Getest: Delete snapshot

---

**Status**: Sidebar klaar, CanvasBoard handlers nog te implementeren
**Next**: Implementeer de 5 stappen hierboven in CanvasBoard.tsx
