export interface ThemeColors {
    // Primary brand color
    primary: string;
    primaryHover: string;
    primaryActive: string;

    // Secondary accent color
    secondary: string;
    secondaryHover: string;

    // Supporting colors
    success: string;
    warning: string;
    danger: string;

    // Background colors
    background: string;
    backgroundSecondary: string;
    backgroundTertiary: string;

    // Surface colors (cards, panels)
    surface: string;
    surfaceHover: string;

    // Text colors
    text: string;
    textSecondary: string;
    textMuted: string;

    // Border colors
    border: string;
    borderHover: string;
}

export interface Theme {
    name: 'light' | 'dark';
    colors: ThemeColors;
}

export const darkTheme: Theme = {
    name: 'dark',
    colors: {
        // Primary: Blue
        primary: '#3b82f6',
        primaryHover: '#2563eb',
        primaryActive: '#1d4ed8',

        // Secondary: Purple
        secondary: '#8b5cf6',
        secondaryHover: '#7c3aed',

        // Supporting
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',

        // Backgrounds
        background: '#0a0a0a',
        backgroundSecondary: '#171717',
        backgroundTertiary: '#262626',

        // Surfaces
        surface: '#1f1f1f',
        surfaceHover: '#2a2a2a',

        // Text
        text: '#ffffff',
        textSecondary: '#d4d4d4',
        textMuted: '#737373',

        // Borders
        border: '#404040',
        borderHover: '#525252',
    }
};

export const lightTheme: Theme = {
    name: 'light',
    colors: {
        // Primary: Blue
        primary: '#2563eb',
        primaryHover: '#1d4ed8',
        primaryActive: '#1e40af',

        // Secondary: Purple
        secondary: '#7c3aed',
        secondaryHover: '#6d28d9',

        // Supporting
        success: '#059669',
        warning: '#d97706',
        danger: '#dc2626',

        // Backgrounds
        background: '#ffffff',
        backgroundSecondary: '#f9fafb',
        backgroundTertiary: '#f3f4f6',

        // Surfaces
        surface: '#ffffff',
        surfaceHover: '#f9fafb',

        // Text
        text: '#0a0a0a',
        textSecondary: '#404040',
        textMuted: '#737373',

        // Borders
        border: '#e5e7eb',
        borderHover: '#d1d5db',
    }
};

export const themes = {
    light: lightTheme,
    dark: darkTheme
};
