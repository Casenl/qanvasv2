import { useState, useEffect } from 'react';
import { Theme, themes } from '@/lib/theme';

const THEME_STORAGE_KEY = 'qanvas-theme';

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(themes.dark);

    // Load theme from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem(THEME_STORAGE_KEY);
        if (stored === 'light') {
            setTheme(themes.light);
        } else {
            setTheme(themes.dark);
        }
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

        // Set data attribute for theme-specific styles
        root.setAttribute('data-theme', theme.name);
    }, [theme]);

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

    return {
        theme,
        toggleTheme,
        setLightTheme,
        setDarkTheme,
        isDark: theme.name === 'dark',
        isLight: theme.name === 'light'
    };
}
