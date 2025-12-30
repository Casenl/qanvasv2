# 🎨 Theme System - Light & Dark Mode

## Overview

A complete theme system with easy-to-customize colors for both light and dark modes. All colors are defined in a single configuration file and applied via CSS variables.

## Features Implemented

### 1. **Theme Toggle** 🌓
- **Location**: Bottom-right corner (next to grid toggle)
- **Icons**: Sun (light mode) / Moon (dark mode)
- **Persistence**: Theme choice saved to localStorage
- **Smooth Transitions**: All color changes are smooth

### 2. **Color System** 🎨
Organized into logical categories:

**Primary Colors**:
- `primary`: Main brand color (Blue)
- `primaryHover`: Hover state
- `primaryActive`: Active/pressed state

**Secondary Colors**:
- `secondary`: Accent color (Purple)
- `secondaryHover`: Hover state

**Supporting Colors**:
- `success`: Green for success states
- `warning`: Orange for warnings
- `danger`: Red for errors/delete

**Background Colors**:
- `background`: Main background
- `backgroundSecondary`: Secondary surfaces
- `backgroundTertiary`: Tertiary surfaces

**Surface Colors**:
- `surface`: Card/panel backgrounds
- `surfaceHover`: Hover states for surfaces

**Text Colors**:
- `text`: Primary text
- `textSecondary`: Secondary text
- `textMuted`: Muted/disabled text

**Border Colors**:
- `border`: Default borders
- `borderHover`: Hover state borders

### 3. **CSS Variables** 📐
All colors are exposed as CSS variables:
```css
var(--color-primary)
var(--color-background)
var(--color-text)
/* ... and so on */
```

## How to Customize Colors

### Quick Customization

Edit `src/lib/theme.ts`:

```typescript
export const darkTheme: Theme = {
    name: 'dark',
    colors: {
        // Change primary color (currently blue)
        primary: '#3b82f6',  // ← Change this!
        primaryHover: '#2563eb',
        primaryActive: '#1d4ed8',
        
        // Change secondary color (currently purple)
        secondary: '#8b5cf6',  // ← Change this!
        secondaryHover: '#7c3aed',
        
        // ... rest of colors
    }
};
```

### Example: Change to Green Theme

```typescript
// Dark mode with green primary
primary: '#10b981',      // Emerald green
primaryHover: '#059669',
primaryActive: '#047857',

// Light mode with green primary
primary: '#059669',
primaryHover: '#047857',
primaryActive: '#065f46',
```

### Example: Change to Orange Theme

```typescript
// Dark mode with orange primary
primary: '#f59e0b',      // Amber orange
primaryHover: '#d97706',
primaryActive: '#b45309',

// Light mode with orange primary
primary: '#d97706',
primaryHover: '#b45309',
primaryActive: '#92400e',
```

## Files Structure

```
src/
├── lib/
│   └── theme.ts                    # Color definitions (EDIT THIS!)
├── hooks/
│   └── useTheme.ts                 # Theme management hook
└── components/
    └── canvas/
        └── controls/
            └── ThemeToggle.tsx     # Toggle button component
```

## Usage in Components

### Using CSS Variables (Recommended)

```tsx
<div style={{ 
    backgroundColor: 'var(--color-surface)',
    color: 'var(--color-text)',
    borderColor: 'var(--color-border)'
}}>
    Content
</div>
```

### Using Theme Object

```tsx
import { useTheme } from '@/hooks/useTheme';

function MyComponent() {
    const { theme, isDark } = useTheme();
    
    return (
        <div style={{ color: theme.colors.primary }}>
            {isDark ? 'Dark Mode' : 'Light Mode'}
        </div>
    );
}
```

## Current Color Palettes

### Dark Mode
- **Primary**: Blue (#3b82f6)
- **Secondary**: Purple (#8b5cf6)
- **Background**: Near Black (#0a0a0a)
- **Text**: White (#ffffff)

### Light Mode
- **Primary**: Blue (#2563eb)
- **Secondary**: Purple (#7c3aed)
- **Background**: White (#ffffff)
- **Text**: Near Black (#0a0a0a)

## Advanced Customization

### Adding New Color Categories

1. Add to `ThemeColors` interface in `theme.ts`:
```typescript
export interface ThemeColors {
    // ... existing colors
    accent: string;
    accentHover: string;
}
```

2. Add values to both themes:
```typescript
export const darkTheme: Theme = {
    colors: {
        // ... existing colors
        accent: '#ec4899',
        accentHover: '#db2777',
    }
};
```

3. Apply in `useTheme.ts`:
```typescript
root.style.setProperty('--color-accent', colors.accent);
root.style.setProperty('--color-accent-hover', colors.accentHover);
```

4. Use in components:
```tsx
<div style={{ color: 'var(--color-accent)' }}>
    Accent text
</div>
```

## Migration Guide

### Updating Existing Components

**Before** (hardcoded colors):
```tsx
<div className="bg-gray-900 text-white border-gray-700">
    Content
</div>
```

**After** (theme-aware):
```tsx
<div style={{
    backgroundColor: 'var(--color-surface)',
    color: 'var(--color-text)',
    borderColor: 'var(--color-border)'
}}>
    Content
</div>
```

## Testing Themes

1. Click theme toggle button (bottom-right)
2. Verify all UI elements update correctly
3. Check both light and dark modes
4. Ensure localStorage persists choice on reload

## Best Practices

✅ **Use CSS Variables**: Prefer `var(--color-*)` over direct theme object access
✅ **Semantic Names**: Use color names that describe purpose, not appearance
✅ **Consistent Hierarchy**: Maintain primary > secondary > supporting color hierarchy
✅ **Accessibility**: Ensure sufficient contrast in both themes
✅ **Test Both Modes**: Always test changes in both light and dark modes

## Future Enhancements

- [ ] Add more theme presets (Ocean, Forest, Sunset)
- [ ] Color picker UI for live customization
- [ ] Export/import custom themes
- [ ] System theme detection (auto dark mode)
- [ ] Per-component theme overrides

---

**Status**: ✅ Theme system deployed and working!
**Customization**: Edit `src/lib/theme.ts` to change colors
