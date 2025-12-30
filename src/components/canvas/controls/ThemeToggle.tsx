import React from 'react';
import { Sun, Moon } from 'lucide-react';

export interface ThemeToggleProps {
    isDark: boolean;
    onToggle: () => void;
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
    return (
        <button
            onClick={onToggle}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className={`
                fixed bottom-6 right-20 z-50
                p-3 rounded-xl shadow-2xl
                transition-all duration-200
                ${isDark
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }
                border ${isDark ? 'border-gray-700' : 'border-gray-300'}
                active:scale-95
            `}
        >
            {isDark ? (
                <Sun className="w-5 h-5" />
            ) : (
                <Moon className="w-5 h-5" />
            )}
        </button>
    );
}
