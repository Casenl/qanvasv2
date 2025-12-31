# Snapshot Manager - Complete Feature Guide

## 📸 **Snapshot Functionaliteit - Volledig Geïmplementeerd!**

De snapshot functionaliteit is volledig aanwezig met:
- ✅ Create dialog met naam + beschrijving
- ✅ Summary display met metrics
- ✅ Load, delete, compare functies

---

## 🎯 **Hoe Te Gebruiken:**

### **1. Snapshot Maken**

#### **Stap 1: Open Snapshots Tab**
```
Sidebar → 📸 Snapshots tab (4e icon)
```

#### **Stap 2: Klik Create Button**
```
Rechtsboven → ➕ Plus button
```

#### **Stap 3: Vul Dialog In**
```
┌─────────────────────────────────────────┐
│ Create Snapshot                      ✕  │
├─────────────────────────────────────────┤
│                                         │
│ Snapshot Name *                         │
│ ┌─────────────────────────────────────┐ │
│ │ Phase 1 - Initial Design            │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ Description (Optional)                  │
│ ┌─────────────────────────────────────┐ │
│ │ Basic infrastructure with VMware    │ │
│ │ products and initial configuration  │ │
│ │                                     │ │
│ └─────────────────────────────────────┘ │
│                                         │
│  [Cancel]  [Create Snapshot]            │
└─────────────────────────────────────────┘
```

**Velden:**
- **Snapshot Name** (verplicht) - Korte naam voor de fase
- **Description** (optioneel) - Uitgebreide beschrijving

**Voorbeelden:**
```
Naam: "Phase 1 - Initial Design"
Beschrijving: "Basic infrastructure with VMware products"

Naam: "Phase 2 - Cloud Expansion"
Beschrijving: "Added Azure and AWS, increased capacity"

Naam: "Final Architecture"
Beschrijving: "Production-ready design with all optimizations"
```

---

### **2. Snapshot Overzicht**

Na het maken verschijnt de snapshot in de lijst:

```
┌─────────────────────────────────────────────────────┐
│ Phase 1 - Initial Design              [Current]     │
│ 🕐 30 dec 2025, 21:30                                │
│                                                      │
│ Basic infrastructure with VMware products           │
│                                                      │
│ 📦 3 products  📊 15 metrics  ⚙️ 5 config           │
│                                              👁️ 🗑️  │
└─────────────────────────────────────────────────────┘
```

**Summary Details:**
- **📦 Products** - Aantal producten in snapshot
- **📊 Metrics** - Totaal aantal metrics over alle producten
- **⚙️ Config** - Aantal geconfigureerde canvas metrics

**Berekening:**
```typescript
// Products
productCount = items.filter(i => i.entityType === 'product').length;

// Metrics (per product)
metricsCount = sum of all product metrics

// Config (canvas level)
configuredMetrics = aantal ingestelde canvas metrics
```

---

### **3. Snapshot Details Voorbeeld**

#### **Scenario: 3 Producten**
```
Canvas heeft:
- vSphere (5 metrics: Named Users, Cores, RAM, Storage, Network)
- Horizon (4 metrics: Named Users, Cores, RAM, Storage)
- M365 (6 metrics: Named Users, Mailbox, OneDrive, Teams, SharePoint, Exchange)

Canvas Config:
- Named Users: 500
- Cores: 128
- RAM: 512 GB
- Storage: 10 TB
- Network: 10 Gbps

Summary toont:
📦 3 products       (vSphere + Horizon + M365)
📊 15 metrics       (5 + 4 + 6 = 15 total)
⚙️ 5 config         (5 canvas-level metrics)
```

---

## 🎨 **UI Components:**

### **Snapshots List (Empty State)**
```
┌─────────────────────────────────────────┐
│ 📸 Snapshots                            │
│ 0 saved phases              🔄  ➕      │
├─────────────────────────────────────────┤
│                                         │
│         ┌─────────────────┐             │
│         │                 │             │
│         │       📸        │             │
│         │                 │             │
│         │ No snapshots    │             │
│         │     yet         │             │
│         │                 │             │
│         │ Create a snap-  │             │
│         │ shot to save    │             │
│         │ the current     │             │
│         │ canvas state    │             │
│         │                 │             │
│         └─────────────────┘             │
│                                         │
└─────────────────────────────────────────┘
```

### **Snapshots List (With Data)**
```
┌─────────────────────────────────────────┐
│ 📸 Snapshots                            │
│ 3 saved phases              🔄  ➕      │
├─────────────────────────────────────────┤
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ Phase 1 - Initial    [Current]      │ │
│ │ 🕐 30 dec 2025, 21:30               │ │
│ │ Basic infrastructure                │ │
│ │ 📦 3  📊 15  ⚙️ 5          👁️ 🗑️   │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ Phase 2 - Cloud Expansion           │ │
│ │ 🕐 30 dec 2025, 22:15               │ │
│ │ Added Azure and AWS                 │ │
│ │ 📦 5  📊 25  ⚙️ 7          👁️ 🗑️   │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ Final Architecture                  │ │
│ │ 🕐 30 dec 2025, 23:00               │ │
│ │ Production-ready design             │ │
│ │ 📦 7  📊 42  ⚙️ 10         👁️ 🗑️   │ │
│ └─────────────────────────────────────┘ │
│                                         │
└─────────────────────────────────────────┘
```

---

## 🔧 **Functionaliteit:**

### **Create Snapshot**
```typescript
// Button: ➕ (rechtsboven)
onClick={() => setShowCreateDialog(true)}

// Dialog opens with:
- Name input (required)
- Description textarea (optional)
- Cancel button
- Create button (disabled if name empty)

// On create:
onCreateSnapshot(name, description)
```

### **Load Snapshot**
```typescript
// Button: 👁️ (per snapshot)
onClick={() => onLoadSnapshot(snapshot.id)}

// Restores:
- All canvas items
- All canvas config
- Sets as current snapshot
```

### **Delete Snapshot**
```typescript
// Button: 🗑️ (per snapshot)
onClick={() => onDeleteSnapshot(snapshot.id)}

// Removes snapshot from list
// If current, clears current marker
```

### **Compare Snapshots**
```typescript
// Button: 🔄 (rechtsboven)
onClick={() => setCompareMode(!compareMode)}

// Activates compare mode:
1. Click first snapshot (becomes blue)
2. Click second snapshot
3. ComparisonView opens with diff
```

---

## 📊 **Summary Calculation:**

### **Code Implementation:**
```typescript
export function getSnapshotSummary(snapshot: CanvasSnapshot) {
    // Count products
    const productCount = snapshot.items
        .filter(i => i.entityType === 'product')
        .length;

    // Count all metrics across all products
    let metricsCount = 0;
    snapshot.items.forEach(item => {
        if (item.productConfig) {
            metricsCount += Object.keys(item.productConfig.metrics).length;
        }
    });

    // Count configured canvas metrics
    const configuredMetrics = Object.values(snapshot.canvasConfig.coreMetrics)
        .filter(v => v !== undefined)
        .length;

    return {
        productCount,      // e.g., 3
        metricsCount,      // e.g., 15
        configuredMetrics  // e.g., 5
    };
}
```

### **Display:**
```tsx
<div className="flex gap-3 text-xs">
    <span>📦 {summary.productCount} products</span>
    <span>📊 {summary.metricsCount} metrics</span>
    <span>⚙️ {summary.configuredMetrics} config</span>
</div>
```

---

## 🎯 **Use Cases:**

### **Use Case 1: Design Phases**
```
Phase 1: Initial Design
- 3 products (vSphere, Horizon, M365)
- Basic config (500 users, 128 cores)

Phase 2: Expansion
- 5 products (added Azure, AWS)
- Increased config (1000 users, 256 cores)

Phase 3: Final
- 7 products (added OpenAI, Amazon EKS)
- Production config (2000 users, 512 cores)
```

### **Use Case 2: What-If Scenarios**
```
Scenario A: VMware Only
- vSphere, Horizon, vSAN
- 500 users

Scenario B: Hybrid Cloud
- vSphere, Azure, AWS
- 1000 users

Scenario C: Full Cloud
- Azure, AWS, GCP
- 2000 users
```

### **Use Case 3: Client Presentations**
```
Option 1: Basic
- 3 products, €50k budget

Option 2: Standard
- 5 products, €100k budget

Option 3: Premium
- 7 products, €200k budget
```

---

## ✅ **Checklist:**

### **Snapshot Creation:**
- [x] ➕ Button opens dialog
- [x] Name field (required)
- [x] Description field (optional)
- [x] Create button (disabled if empty)
- [x] Cancel button closes dialog
- [x] Snapshot appears in list

### **Snapshot Display:**
- [x] Name shown
- [x] Timestamp shown
- [x] Description shown (if provided)
- [x] Summary shown (products, metrics, config)
- [x] Current badge (if active)
- [x] Action buttons (load, delete)

### **Summary Accuracy:**
- [x] Product count correct
- [x] Metrics count correct
- [x] Config count correct

---

## 🐛 **Troubleshooting:**

### **Dialog Niet Zichtbaar?**
```
Check:
1. Is showCreateDialog state true?
2. Is z-index 50 hoog genoeg?
3. Is backdrop visible (rgba(0,0,0,0.5))?
```

### **Summary Toont 0?**
```
Check:
1. Zijn er items in snapshot.items?
2. Hebben items productConfig?
3. Zijn canvas metrics ingesteld?
```

### **Create Button Disabled?**
```
Check:
1. Is newSnapshotName.trim() niet leeg?
2. Is input field accessible?
```

---

## 🎨 **Styling:**

### **Dialog:**
```css
Position: fixed inset-0 (fullscreen overlay)
Background: rgba(0,0,0,0.5) (dark backdrop)
Content: max-w-md, rounded-xl, shadow-2xl
Z-index: 50 (above everything)
```

### **Snapshot Card:**
```css
Background: 
  - Current: var(--color-background-secondary)
  - Compare selected: var(--color-primary)
  - Normal: var(--color-background)

Border:
  - Current: 3px left border (primary color)
  - Normal: 1px all around
```

---

## 📝 **Code Locations:**

### **Component:**
```
src/components/canvas/SnapshotManager.tsx
- Lines 24-26: State (dialog, name, description)
- Lines 30-37: handleCreate function
- Lines 303-406: Create Dialog JSX
- Lines 177-298: Snapshot List JSX
- Lines 287-295: Summary Display
```

### **Helper Functions:**
```
src/lib/types/snapshot.ts
- Lines 39-53: createSnapshot()
- Lines 155-177: getSnapshotSummary()
```

---

**Status:** Alle functionaliteit is volledig geïmplementeerd! ✅

**Test:**
1. Klik ➕ button → Dialog opent
2. Vul naam in → Create enabled
3. Vul beschrijving in → Optional
4. Klik Create → Snapshot verschijnt
5. Check summary → 📦 📊 ⚙️ correct

**Alles werkt!** 🎉
