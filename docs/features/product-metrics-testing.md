# Product Metrics - Testing Guide 🧪

## 🎯 Waar zie je de kengetallen?

### **Locatie: Properties Panel (Rechts)**

```
Canvas Layout:
┌────────────┬──────────────────┬────────────┐
│  Sidebar   │   Canvas Area    │ Properties │
│  (Links)   │                  │  (Rechts)  │
│            │                  │            │
│ Products   │  [Product Card]  │ ← HIER!    │
│ Solutions  │                  │            │
│ Config     │                  │            │
└────────────┴──────────────────┴────────────┘
```

---

## 📋 Stap-voor-Stap Test

### **Test 1: Basis Flow**

1. **Open Config Tab**
   - Sidebar → Klik "Config" tab (rechts van Solutions)
   
2. **Stel Kerngetallen In**
   - Users sectie → Named Users: `500`
   - Infrastructure sectie → Cores: `128`
   - Klik buiten de inputs (auto-save)

3. **Plaats Product**
   - Sidebar → Klik "Products" tab
   - Sleep **vSphere** naar canvas
   
4. **Selecteer Product**
   - Klik op vSphere card op canvas
   - Properties panel (rechts) opent

5. **Scroll naar Product Metrics**
   - Scroll in Properties Panel
   - Na "Integration Points" sectie
   - Zie "PRODUCT METRICS" header
   - Zie metrics met 🔗 Inherited badges

**Verwacht Resultaat:**
```
PRODUCT METRICS
┌─────────────────────────────────┐
│ ⚙️ Cores              🔗 Inherited│
│ [128                        ]   │
│ 💡 Using canvas config value    │
└─────────────────────────────────┘
```

---

### **Test 2: Als je NIETS ziet**

**Mogelijke Oorzaken:**

#### **A. Geen Canvas Config ingesteld**
```
Symptoom: Sectie toont "No metrics configured"

Oplossing:
1. Ga naar Config tab
2. Vul minimaal 1 waarde in
3. Plaats product opnieuw
```

#### **B. Product heeft geen relevante metrics**
```
Symptoom: Sectie verschijnt niet

Check: Welk product heb je geplaatst?
- vSphere: ✅ Heeft metrics (cores, clusters, hosts)
- M365: ✅ Heeft metrics (namedUsers)
- Vendor: ❌ Geen metrics (is geen product)
```

#### **C. ProductConfig niet geïnitialiseerd**
```
Symptoom: Console errors

Check Browser Console (F12):
- Zie je "PropertiesPanel - Selected Item"?
- Zie je "hasProductConfig: true"?
- Zie je "metricsCount: X"?
```

---

## 🔍 Debug Checklist

### **1. Check Console Logs**

Open Browser Console (F12) en kijk naar:

```javascript
// Bij selecteren van product:
PropertiesPanel - Selected Item: {
  id: "item-123",
  entityType: "product",
  entityId: "p-vsphere",
  hasProductConfig: true,  // ← Moet TRUE zijn
  productConfig: { metrics: {...} },
  metricsCount: 2  // ← Moet > 0 zijn
}

// Bij renderen van metrics:
ProductMetrics render: {
  productId: "p-vsphere",
  productConfig: {...},
  metricsCount: 2
}
```

### **2. Check Canvas Config**

```
Sidebar → Config Tab
- Zie je de input velden?
- Zijn er waarden ingevuld?
- Zie je "X of 9 metrics set"?
```

### **3. Check Product Selection**

```
Canvas → Klik product
- Wordt de card highlighted?
- Opent Properties Panel rechts?
- Zie je product naam bovenaan?
```

---

## 🎨 Wat je MOET zien

### **Met Kerngetallen Ingesteld:**

```
Properties Panel (Rechts):
┌─────────────────────────────────┐
│ VMware vSphere                  │
│ Version 8.0                     │
├─────────────────────────────────┤
│ PRODUCT DETAILS                 │
│ ...                             │
├─────────────────────────────────┤
│ INTEGRATION POINTS              │
│ ...                             │
├─────────────────────────────────┤
│ PRODUCT METRICS ← HIER!         │
│                                 │
│ ⚙️ Cores          🔗 Inherited  │
│ [128                        ]   │
│ 💡 Using canvas config value    │
│                                 │
│ 🏢 Clusters       🔗 Inherited  │
│ [3                          ]   │
│ 💡 Using canvas config value    │
└─────────────────────────────────┘
```

### **Zonder Kerngetallen:**

```
Properties Panel (Rechts):
┌─────────────────────────────────┐
│ PRODUCT METRICS                 │
│                                 │
│     ⚠️                          │
│  No metrics configured          │
│                                 │
│  Set values in Canvas           │
│  Configuration (Config tab)     │
│  to see inherited metrics here. │
└─────────────────────────────────┘
```

---

## 🚀 Quick Test Commands

### **Test Scenario A: vSphere met Cores**
```
1. Config → Cores: 128
2. Products → Sleep vSphere
3. Klik vSphere
4. Verwacht: Zie "Cores: 128 🔗"
```

### **Test Scenario B: M365 met Users**
```
1. Config → Named Users: 500
2. Products → Sleep Microsoft 365
3. Klik M365
4. Verwacht: Zie "Named Users: 500 🔗"
```

### **Test Scenario C: Manual Override**
```
1. Selecteer M365 (Named Users: 500 🔗)
2. Wijzig naar 300
3. Verwacht: Badge → ✏️ Manual
4. Verwacht: Reset button (🔄) verschijnt
```

---

## ❓ Troubleshooting

### **"Ik zie de sectie niet"**

1. ✅ Is het een **product** (niet vendor)?
2. ✅ Is **productConfig** geïnitialiseerd? (check console)
3. ✅ Staat de sectie **onder** Integration Points?
4. ✅ Heb je **gescrolld** in Properties Panel?

### **"Ik zie 'No metrics configured'"**

1. ✅ Ga naar **Config tab**
2. ✅ Vul **minimaal 1 waarde** in
3. ✅ **Verwijder** het product van canvas
4. ✅ **Plaats opnieuw** (nieuwe producten krijgen config)

### **"Console errors"**

Stuur screenshot van console errors!

---

## 📸 Screenshots Locaties

### **1. Config Tab**
```
Sidebar → Config (3e tab)
Screenshot: Input velden met waarden
```

### **2. Product op Canvas**
```
Canvas → vSphere card
Screenshot: Geselecteerde product (highlighted)
```

### **3. Properties Panel**
```
Rechts → Scroll naar beneden
Screenshot: "PRODUCT METRICS" sectie
```

---

**Test dit en laat me weten wat je ziet!** 🎯

Als je console logs ziet, deel die dan ook - dat helpt me om te debuggen!
