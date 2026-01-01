# Theme & Styling Best Practices

**Last Updated**: January 1, 2026  
**Status**: Active - MUST FOLLOW

---

## ⚠️ CRITICAL: Always Use Theme CSS Variables

**ALL components MUST use the application's CSS theme variables for consistent styling across light/dark modes.**

---

## Required CSS Variables

Use these variables for ALL component styling:

### ✅ CORRECT Usage

```tsx
<div style={{
    backgroundColor: 'var(--color-surface)',
    borderColor: 'var(--color-border)',
    color: 'var(--color-text)'
}}>
```

### ❌ WRONG Usage

```tsx
// ❌ Hardcoded colors
<div style={{
    backgroundColor: '#ffffff',
    borderColor: '#e5e7eb',
    color: '#000000'
}}>

// ❌ Custom HSL with opacity
<div style={{
    backgroundColor: 'hsl(var(--background) / 0.8)',
    borderColor: 'hsl(var(--foreground) / 0.1)'
}}>

// ❌ Tailwind dark mode classes
<div className="bg-white dark:bg-gray-900">
```

---

## Available Theme Variables

| Variable | Usage | Example Components |
|----------|-------|-------------------|
| `--color-surface` | Background for panels, sidebars, cards | Sidebar, PropertiesPanel, Toolbar, Cards |
| `--color-background` | Main background color | Canvas, Page background |
| `--color-border` | Border color for all elements | Borders, dividers, separators |
| `--color-text` | Primary text color | Headings, body text, labels |
| `--color-text-muted` | Secondary/muted text | Hints, placeholders, secondary labels |
| `--color-brand-primary` | Primary brand color (blue) | Active states, buttons, links |
| `--color-brand-secondary` | Secondary brand color | Accents, highlights |

---

## Styling Patterns

### 1. Component Background

```tsx
// ✅ CORRECT
export function MyComponent() {
    return (
        <div style={{ backgroundColor: 'var(--color-surface)' }}>
            {/* Content */}
        </div>
    );
}
```

### 2. Borders

```tsx
// ✅ CORRECT
<div style={{ 
    border: '1px solid var(--color-border)',
    borderBottom: '1px solid var(--color-border)',
    borderRight: '1px solid var(--color-border)'
}}>
```

### 3. Active/Selected States

```tsx
// ✅ CORRECT
<button style={{
    backgroundColor: isActive 
        ? 'hsl(var(--color-brand-primary) / 0.2)' 
        : undefined,
    borderColor: isActive 
        ? 'hsl(var(--color-brand-primary))' 
        : 'transparent',
    color: isActive 
        ? 'hsl(var(--color-brand-primary))' 
        : 'var(--color-text)'
}}>
    {label}
</button>
```

### 4. Text Colors

```tsx
// ✅ CORRECT
<div>
    <h1 style={{ color: 'var(--color-text)' }}>Primary Heading</h1>
    <p style={{ color: 'var(--color-text)' }}>Body text</p>
    <span style={{ color: 'var(--color-text-muted)' }}>Secondary info</span>
</div>
```

### 5. Hover States

```tsx
// ✅ CORRECT - Use opacity for hover
<button 
    className="hover:opacity-80 transition-opacity"
    style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)'
    }}
>
```

---

## Real-World Examples

### ✅ FloatingToolbar

```tsx
export function FloatingToolbar() {
    return (
        <div 
            style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)'
            }}
            className="fixed left-[336px] top-32 w-14 border rounded-xl"
        >
            {/* Toolbar content */}
        </div>
    );
}
```

### ✅ CanvasSidebar

```tsx
export function CanvasSidebar() {
    return (
        <aside 
            style={{
                backgroundColor: 'var(--color-surface)',
                borderRight: '1px solid var(--color-border)'
            }}
            className="w-80 flex flex-col"
        >
            {/* Sidebar content */}
        </aside>
    );
}
```

### ✅ PropertiesPanel

```tsx
export function PropertiesPanel() {
    return (
        <div 
            style={{
                backgroundColor: 'var(--color-surface)',
                borderLeft: '1px solid var(--color-border)'
            }}
            className="w-80 h-full"
        >
            {/* Panel content */}
        </div>
    );
}
```

### ✅ ToolButton (Active State)

```tsx
export function ToolButton({ isActive, label }: Props) {
    return (
        <button
            style={{
                backgroundColor: isActive 
                    ? 'hsl(var(--color-brand-primary) / 0.2)' 
                    : undefined,
                borderColor: isActive 
                    ? 'hsl(var(--color-brand-primary))' 
                    : 'transparent',
                color: isActive 
                    ? 'hsl(var(--color-brand-primary))' 
                    : 'var(--color-text)'
            }}
            className="w-12 h-12 rounded-lg border-2 hover:opacity-80"
        >
            {label}
        </button>
    );
}
```

---

## Why This Matters

### 1. **Automatic Light/Dark Mode**
CSS variables update automatically when theme changes. No manual dark mode logic needed!

```tsx
// ✅ Works in both modes automatically
<div style={{ backgroundColor: 'var(--color-surface)' }}>
```

### 2. **Consistency**
All components look cohesive because they use the same color palette.

### 3. **Maintainability**
Change theme colors in ONE place (`globals.css`) and all components update.

### 4. **Accessibility**
Proper contrast ratios are maintained automatically by the theme system.

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Tailwind Dark Mode Classes

```tsx
// ❌ WRONG
<div className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">

// ✅ CORRECT
<div style={{ 
    backgroundColor: 'var(--color-surface)',
    borderColor: 'var(--color-border)'
}}>
```

### ❌ Mistake 2: Hardcoded Hex Colors

```tsx
// ❌ WRONG
<div style={{ backgroundColor: '#ffffff', color: '#000000' }}>

// ✅ CORRECT
<div style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-text)' }}>
```

### ❌ Mistake 3: Custom Opacity on Theme Vars

```tsx
// ❌ WRONG - Don't create custom opacity variants
<div style={{ backgroundColor: 'hsl(var(--background) / 0.8)' }}>

// ✅ CORRECT - Use the right variable
<div style={{ backgroundColor: 'var(--color-surface)' }}>
```

### ❌ Mistake 4: Mixing Approaches

```tsx
// ❌ WRONG - Inconsistent
<div 
    className="bg-white dark:bg-gray-900"  // Tailwind
    style={{ borderColor: 'var(--color-border)' }}  // CSS var
>

// ✅ CORRECT - Consistent
<div style={{ 
    backgroundColor: 'var(--color-surface)',
    borderColor: 'var(--color-border)'
}}>
```

---

## Component Checklist

Before committing a new component, verify:

- [ ] ✅ Uses `var(--color-surface)` for background
- [ ] ✅ Uses `var(--color-border)` for borders
- [ ] ✅ Uses `var(--color-text)` for text
- [ ] ✅ Uses `var(--color-text-muted)` for secondary text
- [ ] ✅ Uses `var(--color-brand-primary)` for active states
- [ ] ✅ No hardcoded colors (#fff, #000, rgb(), etc.)
- [ ] ✅ No Tailwind dark mode classes (dark:)
- [ ] ✅ No custom HSL opacity variants
- [ ] ✅ Tested in BOTH light AND dark mode
- [ ] ✅ Looks consistent with other components

---

## Quick Reference

### Most Common Patterns

```tsx
// Background
backgroundColor: 'var(--color-surface)'

// Border
borderColor: 'var(--color-border)'
border: '1px solid var(--color-border)'

// Text
color: 'var(--color-text)'
color: 'var(--color-text-muted)'  // for secondary text

// Active state
backgroundColor: 'hsl(var(--color-brand-primary) / 0.2)'
borderColor: 'hsl(var(--color-brand-primary))'
color: 'hsl(var(--color-brand-primary))'

// Hover
className="hover:opacity-80"
```

---

## Examples by Component Type

### Panels & Sidebars
```tsx
style={{
    backgroundColor: 'var(--color-surface)',
    borderRight: '1px solid var(--color-border)'  // or borderLeft
}}
```

### Cards
```tsx
style={{
    backgroundColor: 'var(--color-surface)',
    border: '1px solid var(--color-border)'
}}
```

### Buttons (Active)
```tsx
style={{
    backgroundColor: isActive ? 'hsl(var(--color-brand-primary) / 0.2)' : undefined,
    borderColor: isActive ? 'hsl(var(--color-brand-primary))' : 'transparent',
    color: isActive ? 'hsl(var(--color-brand-primary))' : 'var(--color-text)'
}}
```

### Tooltips
```tsx
style={{
    backgroundColor: 'hsl(var(--foreground))',  // Inverted
    color: 'hsl(var(--background))'             // Inverted
}}
```

### Separators
```tsx
style={{
    backgroundColor: 'var(--color-border)'
}}
```

---

**Remember**: When in doubt, check how existing components (CanvasSidebar, PropertiesPanel, AlignmentToolbar) handle styling and follow the same pattern!

---

**Last Updated**: January 1, 2026  
**Maintained By**: Development Team  
**Review Frequency**: When adding new components
