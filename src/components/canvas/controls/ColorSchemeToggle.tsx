import React from 'react';
import { Palette } from 'lucide-react';

interface ColorSchemeToggleProps {
    enabled: boolean;
    onToggle: () => void;
}

/**
 * Toggle button for proposition color scheme
 * Allows switching between minimal and color-coded views
 */
export function ColorSchemeToggle({ enabled, onToggle }: ColorSchemeToggleProps) {
    return (
        <button
            onClick={onToggle}
            className="p-2.5 rounded-lg backdrop-blur-xl transition-colors pointer-events-auto"
            style={{
                backgroundColor: 'var(--color-background-secondary)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-background)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)'}
            title={enabled ? "Disable color scheme" : "Enable color scheme"}
        >
            <Palette
                className="w-5 h-5 transition-colors"
                style={{
                    color: enabled ? 'var(--color-primary)' : 'var(--color-text-muted)'
                }}
            />
        </button>
    );
}
