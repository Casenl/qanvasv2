# Product Metrics System - Steps 2 & 3 Complete ✅

## 🎉 Feature Overzicht

Een volledig **Product Metrics System** met:
- **Product Templates** - Definieer relevante metrics per product
- **Auto-Inheritance** - Automatisch overnemen van canvas kerngetallen
- **Manual Override** - Handmatig aanpassen per product
- **Visual Indicators** - Duidelijke 🔗 Inherited vs ✏️ Manual badges
- **Sync on Config Change** - Inherited waarden updaten automatisch

---

## ✅ Wat is Geïmplementeerd

### **1. Product Template System**

**File**: `src/lib/types/productConfig.ts`

**Product Templates** definiëren welke metrics relevant zijn per product:

```typescript
{
    productId: 'p-vsphere',
    relevantMetrics: ['cores', 'clusters', 'physicalHosts', 'virtualHosts']
}
```

**Voorbeelden:**
- **VMware vSphere**: cores, clusters, physicalHosts, virtualHosts
- **VMware Horizon**: namedUsers, concurrentUsers, virtualHosts
- **Microsoft 365**: namedUsers
- **Azure**: virtualHosts, cores, applications
- **AWS EKS**: virtualHosts, cores, clusters

### **2. Product Instance Config**

Elk product op canvas heeft een `productConfig`:

```typescript
{
    metrics: {
        'namedUsers': {
            value: 500,
            source: 'inherited'  // or 'manual'
        },
        'cores': {
            value: 256,
            source: 'manual'
        }
    }
}
```

### **3. Auto-Initialization**

**Wanneer een product op canvas wordt geplaatst:**
1. Template wordt opgezocht
2. Relevante metrics worden geïdentificeerd
3. Waarden worden overgenomen van canvas config
4. Source wordt gezet op `'inherited'`

**Code:**
```typescript
// In handleDragEnd
productConfig: sourceData.type === 'product' 
    ? initializeProductConfig(sourceData.entityId, canvasConfig)
    : undefined
```

### **4. ProductMetrics Component**

**File**: `src/components/canvas/ProductMetrics.tsx`

**Features:**
- ✅ **Visual Indicators**:
  - 🔗 Inherited (blue badge)
  - ✏️ Manual (orange badge)
- ✅ **Editable Inputs**: Number fields voor elke metric
- ✅ **Reset Button**: Terug naar canvas waarde (alleen bij manual)
- ✅ **Helper Text**: Context over bron van waarde
- ✅ **Theme-Aware**: Werkt in light & dark mode

**UI Layout:**
```
┌─────────────────────────────────┐
│ ⚙️ Cores              🔗 Inherited│
│ [128                        ]   │
│ 💡 Using canvas config value    │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│ 👤 Named Users        ✏️ Manual  │
│ [300                    ] 🔄    │
│ ✏️ Manually overridden.         │
│ Canvas value: 500               │
└─────────────────────────────────┘
```

### **5. Metric Handlers**

**handleMetricChange:**
```typescript
const handleMetricChange = (itemId, metricKey, value) => {
    // Updates metric to manual override
    setItems(prev => prev.map(item => {
        if (item.id !== itemId) return item;
        return {
            ...item,
            productConfig: updateMetricManually(
                item.productConfig, 
                metricKey, 
                value
            )
        };
    }));
};
```

**handleMetricReset:**
```typescript
const handleMetricReset = (itemId, metricKey) => {
    // Resets metric to inherited canvas value
    setItems(prev => prev.map(item => {
        if (item.id !== itemId) return item;
        return {
            ...item,
            productConfig: resetMetricToInherited(
                item.productConfig, 
                metricKey, 
                canvasConfig
            )
        };
    }));
};
```

### **6. Auto-Sync on Config Change**

**useEffect Hook:**
```typescript
useEffect(() => {
    // When canvas config changes, update all inherited metrics
    setItems(prev => prev.map(item => {
        if (!item.productConfig) return item;
        return {
            ...item,
            productConfig: syncInheritedMetrics(
                item.productConfig, 
                canvasConfig
            )
        };
    }));
}, [canvasConfig]);
```

**Behavior:**
- Canvas config wijzigt: Named Users 500 → 600
- Alle producten met inherited Named Users updaten naar 600
- Producten met manual override blijven onveranderd

---

## 🎯 User Flow

### **Scenario 1: Auto-Inheritance**

```
1. Stel canvas config in:
   - Named Users: 500
   - Cores: 128

2. Sleep vSphere op canvas
   → Auto-initialized met:
   - Cores: 128 (🔗 inherited)
   - Clusters: undefined (not set in canvas)

3. Sleep M365 op canvas
   → Auto-initialized met:
   - Named Users: 500 (🔗 inherited)

4. Selecteer vSphere
   → Properties panel toont:
   - Cores: 128 🔗 Inherited
```

### **Scenario 2: Manual Override**

```
1. Selecteer M365 (Named Users: 500 🔗)

2. Wijzig naar 300
   → Badge verandert naar ✏️ Manual
   → Helper text: "Canvas value: 500"
   → Reset button (🔄) verschijnt

3. Klik reset button
   → Terug naar 500 🔗 Inherited
```

### **Scenario 3: Canvas Config Update**

```
1. M365 heeft Named Users: 500 🔗 Inherited
2. Horizon heeft Named Users: 300 ✏️ Manual

3. Update canvas config: Named Users → 600

4. Resultaat:
   - M365: 600 🔗 (auto-updated)
   - Horizon: 300 ✏️ (unchanged, manual override)
```

---

## 📊 Helper Functions

### **initializeProductConfig**
```typescript
// Creates initial config from canvas config
initializeProductConfig(productId, canvasConfig)
→ { metrics: { namedUsers: { value: 500, source: 'inherited' } } }
```

### **updateMetricManually**
```typescript
// Changes metric to manual override
updateMetricManually(config, 'namedUsers', 300)
→ { metrics: { namedUsers: { value: 300, source: 'manual' } } }
```

### **resetMetricToInherited**
```typescript
// Resets metric to canvas value
resetMetricToInherited(config, 'namedUsers', canvasConfig)
→ { metrics: { namedUsers: { value: 500, source: 'inherited' } } }
```

### **syncInheritedMetrics**
```typescript
// Updates all inherited metrics with new canvas values
syncInheritedMetrics(config, canvasConfig)
→ Updates only metrics with source: 'inherited'
```

---

## 🔧 Technical Implementation

### **Files Created:**
1. `src/lib/types/productConfig.ts` - Templates & helpers
2. `src/components/canvas/ProductMetrics.tsx` - UI component

### **Files Modified:**
1. `src/lib/types.ts` - Added `productConfig` to CanvasItem
2. `src/components/canvas/PropertiesPanel.tsx` - Integrated ProductMetrics
3. `src/components/canvas/board/CanvasBoard.tsx` - Handlers & auto-init

### **Key Integrations:**

**CanvasBoard:**
- ✅ Import product config helpers
- ✅ handleMetricChange handler
- ✅ handleMetricReset handler
- ✅ useEffect for auto-sync
- ✅ Auto-init on drag from sidebar
- ✅ Auto-init on drag from solutions
- ✅ Props to PropertiesPanel

**PropertiesPanel:**
- ✅ Import ProductMetrics component
- ✅ Accept canvasConfig prop
- ✅ Accept metric handlers
- ✅ Conditional rendering (only if metrics exist)
- ✅ Pass props to ProductMetrics

---

## 📐 Data Flow

```
Canvas Config (Sidebar → Config Tab)
    ↓
    ├─→ Auto-Initialize (on product drop)
    │   └─→ ProductInstanceConfig (inherited)
    │
    ├─→ Auto-Sync (on config change)
    │   └─→ Update inherited metrics
    │
    └─→ PropertiesPanel
        └─→ ProductMetrics Component
            ├─→ Display metrics
            ├─→ Edit → Manual Override
            └─→ Reset → Back to Inherited
```

---

## 🎨 Visual Design

### **Inherited Metric:**
```
┌─────────────────────────────────┐
│ 👤 Named Users      🔗 Inherited│
│ [500                        ]   │
│ 💡 Using canvas configuration   │
│ value. Click to edit manually.  │
└─────────────────────────────────┘
```

### **Manual Metric:**
```
┌─────────────────────────────────┐
│ 👤 Named Users        ✏️ Manual  │
│ [300                    ] 🔄    │
│ ✏️ Manually overridden.         │
│ Canvas value: 500               │
└─────────────────────────────────┘
```

**Colors:**
- Inherited: Blue border (primary color)
- Manual: Orange border (secondary color)
- Reset button: Hover → primary color

---

## 💡 Important Notes

### **Canvas Config per Snapshot/Fase**

**Architectuur:**
- Canvas config is **onderdeel van canvas state**
- Elke snapshot/fase kan **eigen kerngetallen** hebben
- Product configs zijn **relatief t.o.v. hun fase**

**Implicaties:**
```
Fase 1:
- Canvas Config: Named Users = 500
- M365: 500 (inherited)

Fase 2:
- Canvas Config: Named Users = 1000
- M365: 1000 (inherited)
- Nieuwe producten krijgen 1000
```

**Toekomstige Snapshot Feature:**
- Snapshot slaat op: items + canvasConfig
- Restore snapshot: herstelt beide
- Vergelijk snapshots: toont config verschillen

---

## ✨ Benefits

### **Voor Gebruikers:**
- ✅ **Consistentie**: Centrale kerngetallen
- ✅ **Flexibiliteit**: Override waar nodig
- ✅ **Transparantie**: Duidelijke bron van waarden
- ✅ **Efficiency**: Auto-sync bij wijzigingen
- ✅ **Controle**: Reset naar defaults

### **Voor ITQ:**
- ✅ **Scoping**: Duidelijke licentie aantallen
- ✅ **Budgettering**: Basis voor kosten berekening
- ✅ **Fases**: Verschillende configs per fase
- ✅ **Rapportage**: Exporteerbare metrics
- ✅ **Professionaliteit**: Gestructureerde aanpak

---

## 🚀 Next Steps

### **Immediate Enhancements:**
1. ✅ **Solution Details View** - Toon welke producten in solution
2. ✅ **Edit Solutions** - Wijzig bestaande solutions
3. ✅ **Cost Calculation** - Bereken kosten per product (later)

### **Future Features (Genoteerd):**
1. **Canvas Snapshots/Fases**
   - Save current state as snapshot
   - Multiple snapshots per project
   - Compare snapshots (diff view)
   - Timeline visualization

2. **Advanced Metrics**
   - Custom metrics per product
   - Formulas (e.g., cores * price)
   - Validation rules
   - Min/max constraints

3. **Export Features**
   - Excel export met metrics
   - PDF report met costs
   - JSON export/import
   - Templates library

---

## 📸 Complete Example

### **Setup:**
```
Canvas Config:
- Named Users: 500
- Concurrent Users: 200
- Cores: 128
```

### **Add Products:**
```
1. vSphere → Auto-initialized:
   - Cores: 128 🔗
   - Clusters: - (not set)

2. M365 → Auto-initialized:
   - Named Users: 500 🔗

3. Horizon → Auto-initialized:
   - Named Users: 500 🔗
   - Concurrent Users: 200 🔗
```

### **Override:**
```
Horizon Named Users: 500 → 300 ✏️
```

### **Update Canvas:**
```
Canvas Named Users: 500 → 600

Results:
- vSphere: (no change, doesn't use Named Users)
- M365: 600 🔗 (auto-updated)
- Horizon: 300 ✏️ (unchanged, manual override)
```

---

**Implementation Date**: December 29, 2025
**Status**: STEPS 2 & 3 COMPLETE ✅
**Next**: Canvas Snapshots / Phase Management
