import { useState, useEffect } from 'react';
import { Theme, themes } from '@/lib/theme';

const THEME_STORAGE_KEY = 'qanvas-theme';
const ICON_COLOR_STORAGE_KEY = 'qanvas-icon-color';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(themes.dark);
  // User override for icon color (null = follow the theme default).
  const [iconColorOverride, setIconColorOverride] = useState<string | null>(null);

  // Load theme + icon-color override from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'light') {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
    const storedIcon = localStorage.getItem(ICON_COLOR_STORAGE_KEY);
    if (storedIcon) setIconColorOverride(storedIcon);
  }, []);

  // Apply theme to CSS variables
  useEffect(() => {
    const root = document.documentElement;
    const colors = theme.colors;

    // Apply all color variables
    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-primary-hover', colors.primaryHover);
    root.style.setProperty('--color-primary-active', colors.primaryActive);

    root.style.setProperty('--color-secondary', colors.secondary);
    root.style.setProperty('--color-secondary-hover', colors.secondaryHover);

    root.style.setProperty('--color-success', colors.success);
    root.style.setProperty('--color-warning', colors.warning);
    root.style.setProperty('--color-danger', colors.danger);

    root.style.setProperty('--color-background', colors.background);
    root.style.setProperty('--color-background-secondary', colors.backgroundSecondary);
    root.style.setProperty('--color-background-tertiary', colors.backgroundTertiary);

    root.style.setProperty('--color-surface', colors.surface);
    root.style.setProperty('--color-surface-hover', colors.surfaceHover);

    root.style.setProperty('--color-text', colors.text);
    root.style.setProperty('--color-text-secondary', colors.textSecondary);
    root.style.setProperty('--color-text-muted', colors.textMuted);

    root.style.setProperty('--color-border', colors.border);
    root.style.setProperty('--color-border-hover', colors.borderHover);

    // Icon color: user override wins, else the theme default
    root.style.setProperty('--color-icon', iconColorOverride ?? colors.icon);

    // Set data attribute for theme-specific styles
    root.setAttribute('data-theme', theme.name);
  }, [theme, iconColorOverride]);

  const toggleTheme = () => {
    const newTheme = theme.name === 'dark' ? themes.light : themes.dark;
    setTheme(newTheme);
    localStorage.setItem(THEME_STORAGE_KEY, newTheme.name);
  };

  const setLightTheme = () => {
    setTheme(themes.light);
    localStorage.setItem(THEME_STORAGE_KEY, 'light');
  };

  const setDarkTheme = () => {
    setTheme(themes.dark);
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');
  };

  const setIconColor = (color: string) => {
    setIconColorOverride(color);
    localStorage.setItem(ICON_COLOR_STORAGE_KEY, color);
  };

  const resetIconColor = () => {
    setIconColorOverride(null);
    localStorage.removeItem(ICON_COLOR_STORAGE_KEY);
  };

  return {
    theme,
    toggleTheme,
    setLightTheme,
    setDarkTheme,
    isDark: theme.name === 'dark',
    isLight: theme.name === 'light',
    // Effective icon color (override or theme default) + central controls
    iconColor: iconColorOverride ?? theme.colors.icon,
    isIconColorOverridden: iconColorOverride !== null,
    setIconColor,
    resetIconColor,
  };
}
