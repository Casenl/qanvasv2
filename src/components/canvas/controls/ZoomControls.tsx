import React from 'react';
import { Plus, Minus } from 'lucide-react';

import { cn } from '@/lib/utils';

interface ZoomControlsProps {
    zoom: number;
    onZoomIn: () => void;
    onZoomOut: () => void;
    onResetZoom: () => void;
    minZoom?: number;
    maxZoom?: number;
    className?: string;
}

/**
 * Miro-like zoom controls displayed in bottom-right corner
 * Shows current zoom level with +/- buttons
 */
export function ZoomControls({
    zoom,
    onZoomIn,
    onZoomOut,
    onResetZoom,
    minZoom = 0.1,
    maxZoom = 4.0,
    className
}: ZoomControlsProps) {
    const zoomPercentage = Math.round(zoom * 100);
    const isAtMin = zoom <= minZoom;
    const isAtMax = zoom >= maxZoom;

    return (
        <div className={cn(
            "fixed bottom-6 right-6 flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 px-3 py-2 z-50",
            className
        )}>
            {/* Zoom Out Button */}
            <button
                onClick={onZoomOut}
                disabled={isAtMin}
                className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                title="Zoom out (Ctrl + -)"
                aria-label="Zoom out"
            >
                <Minus className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            </button>

            {/* Zoom Level Display */}
            <button
                onClick={onResetZoom}
                className="min-w-[60px] px-2 py-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                title="Reset to 100% (Ctrl + 0)"
                aria-label={`Current zoom: ${zoomPercentage}%. Click to reset.`}
            >
                {zoomPercentage}%
            </button>

            {/* Zoom In Button */}
            <button
                onClick={onZoomIn}
                disabled={isAtMax}
                className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                title="Zoom in (Ctrl + +)"
                aria-label="Zoom in"
            >
                <Plus className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            </button>
        </div>
    );
}
