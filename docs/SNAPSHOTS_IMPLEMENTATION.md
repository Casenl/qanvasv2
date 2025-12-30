# Canvas Snapshots System - Implementation Guide 🎯

## 🎉 Wat is er gebouwd

Een volledig **Snapshot/Fase Management System** voor het vergelijken van verschillende canvas states.

---

## ✅ Geïmplementeerde Components

### **1. Snapshot Data Structure**
**File**: `src/lib/types/snapshot.ts`

```typescript
interface CanvasSnapshot {
    id: string;
    name: string;
    description?: string;
    timestamp: Date;
    items: CanvasItem[];           // Alle canvas items
    canvasConfig: CanvasConfiguration;  // Kerngetallen
}
```

**Features:**
- ✅ `createSnapshot()` - Maak snapshot van huidige state
- ✅ `compareSnapshots()` - Vergelijk twee snapshots
- ✅ `getSnapshotSummary()` - Statistieken per snapshot

### **2. SnapshotManager Component**
**File**: `src/components/canvas/SnapshotManager.tsx`

**Features:**
- ✅ **Create Snapshot** - Save huidige canvas
- ✅ **Load Snapshot** - Herstel een fase
- ✅ **Delete Snapshot** - Verwijder snapshot
- ✅ **Compare Mode** - Selecteer 2 snapshots om te vergelijken
- ✅ **Timeline View** - Chronologische lijst
- ✅ **Current Indicator** - Toont actieve snapshot

**UI Elements:**
- 📸 Camera icon voor snapshots
- 🔄 Compare button voor vergelijken
- ➕ Plus button voor nieuwe snapshot
- 👁️ Eye button voor laden
- 🗑️ Trash button voor verwijderen

### **3. ComparisonView Component**
**File**: `src/components/canvas/ComparisonView.tsx`

**Toont Verschillen:**
- ✅ **Canvas Config Changes** - Kerngetallen wijzigingen
- ✅ **Added Products** - Nieuwe producten (groen)
- ✅ **Removed Products** - Verwijderde producten (rood)
- ✅ **Modified Products** - Gewijzigde producten (oranje)
  - Position changes
  - Metric changes

**Visual Indicators:**
- 🟢 Groen = Toegevoegd
- 🔴 Rood = Verwijderd
- 🟠 Oranje = Gewijzigd
- 📈 Trending up = Waarde gestegen
- 📉 Trending down = Waarde gedaald

---

## 🎯 Hoe te Gebruiken (Na Integratie)

### **Scenario 1: Snapshots Maken**

```
1. Bouw je canvas:
   - Plaats vSphere, Horizon, M365
   - Stel kerngetallen in: Named Users 500

2. Maak Snapshot:
   - Klik "Create Snapshot" button
   - Naam: "Fase 1 - Initial Design"
   - Beschrijving: "Basis infrastructuur"
   - Klik "Create"

3. Wijzig canvas:
   - Voeg Azure toe
   - Update Named Users naar 1000

4. Maak tweede snapshot:
   - Naam: "Fase 2 - Cloud Expansion"
   - Beschrijving: "Uitbreiding met cloud"
```

### **Scenario 2: Snapshots Vergelijken**

```
1. Klik Compare button (🔄)
2. Selecteer "Fase 1"
3. Selecteer "Fase 2"
4. Zie Comparison View:
   
   ⚙️ Canvas Configuration Changes:
   - Named Users: 500 → 1000 📈
   
   🟢 Added Products (1):
   - Azure
   
   🟠 Modified Products (0):
   (geen wijzigingen in bestaande producten)
```

### **Scenario 3: Snapshot Laden**

```
1. Klik Eye button (👁️) bij "Fase 1"
2. Canvas wordt hersteld naar Fase 1 state:
   - vSphere, Horizon, M365
   - Named Users: 500
   - Posities hersteld
```

---

## 📊 Comparison Details

### **Canvas Config Changes**
```
⚙️ Named Users
500 → 1000 📈

⚙️ Cores
128 → 256 📈

⚙️ Clusters
3 → — 📉 (verwijderd)
```

### **Added Products**
```
🟢 Azure
🟢 AWS EKS
```

### **Removed Products**
```
🔴 vSphere
🔴 NSX
```

### **Modified Products**
```
🟠 Horizon
  📍 Position: (100, 200) → (300, 400)
  👤 Named Users: 500 → 300
  🔄 Concurrent Users: 200 → 150
```

---

## 🔧 Volgende Stap: Integratie

### **Wat nog moet gebeuren:**

1. **Sidebar Tab Toevoegen**
   ```typescript
   type TabType = 'products' | 'solutions' | 'snapshots' | 'configuration';
   ```

2. **CanvasBoard State**
   ```typescript
   const [snapshots, setSnapshots] = useState<CanvasSnapshot[]>([]);
   const [currentSnapshotId, setCurrentSnapshotId] = useState<string>();
   const [showComparison, setShowComparison] = useState(false);
   const [comparisonData, setComparisonData] = useState<SnapshotComparison | null>(null);
   ```

3. **Handlers**
   ```typescript
   const handleCreateSnapshot = (name, description) => {
       const snapshot = createSnapshot(name, items, canvasConfig, description);
       setSnapshots(prev => [...prev, snapshot]);
       setCurrentSnapshotId(snapshot.id);
   };

   const handleLoadSnapshot = (snapshotId) => {
       const snapshot = snapshots.find(s => s.id === snapshotId);
       if (!snapshot) return;
       
       setItems(snapshot.items);
       setCanvasConfig(snapshot.canvasConfig);
       setCurrentSnapshotId(snapshotId);
   };

   const handleCompareSnapshots = (fromId, toId) => {
       const from = snapshots.find(s => s.id === fromId);
       const to = snapshots.find(s => s.id === toId);
       if (!from || !to) return;
       
       const comparison = compareSnapshots(from, to);
       setComparisonData(comparison);
       setShowComparison(true);
   };
   ```

4. **Render Components**
   ```tsx
   {activeTab === 'snapshots' && (
       <SnapshotManager
           snapshots={snapshots}
           currentSnapshotId={currentSnapshotId}
           onCreateSnapshot={handleCreateSnapshot}
           onLoadSnapshot={handleLoadSnapshot}
           onDeleteSnapshot={handleDeleteSnapshot}
           onCompareSnapshots={handleCompareSnapshots}
       />
   )}

   {showComparison && comparisonData && (
       <ComparisonView
           comparison={comparisonData}
           fromName={snapshots.find(s => s.id === ...)?.name}
           toName={snapshots.find(s => s.id === ...)?.name}
           onClose={() => setShowComparison(false)}
       />
   )}
   ```

---

## 🎨 UI Preview

### **SnapshotManager**
```
┌─────────────────────────────────┐
│ 📸 Snapshots                    │
│ 3 saved phases          🔄  ➕  │
├─────────────────────────────────┤
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Fase 1 - Initial Design     │ │
│ │ 🕐 29 Dec 2025, 14:30       │ │
│ │ 📦 3 products 📊 5 metrics  │ │
│ │                      👁️ 🗑️  │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Fase 2 - Cloud Expansion    │ │
│ │ 🕐 29 Dec 2025, 15:45       │ │
│ │ 📦 4 products 📊 7 metrics  │ │
│ │ [Current]            👁️ 🗑️  │ │
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
```

### **ComparisonView**
```
┌─────────────────────────────────────┐
│ Snapshot Comparison            ✕   │
│ Fase 1 → Fase 2                    │
├─────────────────────────────────────┤
│                                     │
│ ⚙️ Canvas Configuration Changes    │
│ ┌─────────────────────────────────┐ │
│ │ 👤 Named Users                  │ │
│ │ 500 → 1000 📈                   │ │
│ └─────────────────────────────────┘ │
│                                     │
│ 🟢 Added Products (1)              │
│ ┌─────────────────────────────────┐ │
│ │ Azure                           │ │
│ └─────────────────────────────────┘ │
│                                     │
│ 🟠 Modified Products (1)           │
│ ┌─────────────────────────────────┐ │
│ │ Horizon                         │ │
│ │ 📍 Position: (100,200)→(300,400)│ │
│ │ 👤 Named Users: 500 → 300       │ │
│ └─────────────────────────────────┘ │
│                                     │
│                          [Close]    │
└─────────────────────────────────────┘
```

---

## ✨ Benefits

### **Voor Gebruikers:**
- ✅ **Fases Beheren** - Verschillende project fases opslaan
- ✅ **Vergelijken** - Duidelijk zien wat er veranderd is
- ✅ **Terugkeren** - Eerdere fases herstellen
- ✅ **Documentatie** - Beschrijvingen per fase
- ✅ **Timeline** - Chronologisch overzicht

### **Voor ITQ:**
- ✅ **Scoping** - Verschillen tussen fases voor budgettering
- ✅ **Rapportage** - Wat is er toegevoegd/verwijderd
- ✅ **Versioning** - Verschillende versies van ontwerp
- ✅ **Audit Trail** - Wie heeft wat wanneer gewijzigd
- ✅ **Presentaties** - Toon evolutie van ontwerp

---

## 🚀 Volgende Stappen

**Zal ik nu:**
1. ✅ **Integreren in Sidebar** - Snapshots tab toevoegen
2. ✅ **Handlers in CanvasBoard** - State en functies implementeren
3. ✅ **Testen** - Complete flow doorlopen

**Of wil je eerst iets anders?**

---

**Status**: Components gebouwd, integratie pending
**Next**: Sidebar + CanvasBoard integratie
