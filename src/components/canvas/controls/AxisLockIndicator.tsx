import React from 'react';

interface AxisLockIndicatorProps {
    isActive: boolean;
    axis: 'x' | 'y' | null;
}

export function AxisLockIndicator({ isActive, axis }: AxisLockIndicatorProps) {
    if (!isActive || !axis) return null;

    return (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50">
            <div className="px-6 py-3 rounded-xl bg-blue-500/90 backdrop-blur-md border-2 border-blue-400 shadow-2xl shadow-blue-500/50 animate-in fade-in zoom-in duration-150">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                        {axis === 'x' ? (
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 12h8" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 8v8" />
                            </svg>
                        )}
                    </div>
                    <div className="text-white">
                        <div className="text-xs font-bold uppercase tracking-wider opacity-80">Axis Locked</div>
                        <div className="text-lg font-bold">
                            {axis === 'x' ? 'Horizontal Only' : 'Vertical Only'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
