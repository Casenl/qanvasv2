import React from 'react';
import { Grid } from 'lucide-react';

export interface GridToggleProps {
    enabled: boolean;
    onToggle: () => void;
}

export function GridToggle({ enabled, onToggle }: GridToggleProps) {
    return (
        <button
            onClick={onToggle}
            title={enabled ? 'Disable Grid Snap' : 'Enable Grid Snap'}
            className={`
                fixed bottom-6 right-6 z-50
                p-3 rounded-xl shadow-2xl
                transition-all duration-200
                ${enabled
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300'
                }
                border ${enabled ? 'border-blue-500' : 'border-gray-700'}
                active:scale-95
            `}
        >
            <Grid className="w-5 h-5" />
        </button>
    );
}
