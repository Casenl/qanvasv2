'use client';

interface MultiSelectIndicatorProps {
    count: number;
}

export function MultiSelectIndicator({ count }: MultiSelectIndicatorProps) {
    if (count < 2) return null;

    return (
        <div
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl border backdrop-blur-xl shadow-lg animate-in fade-in slide-in-from-top-2 duration-200"
            style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-primary)'
            }}
        >
            <div className="flex items-center gap-2">
                <div
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                />
                <span
                    className="text-sm font-bold"
                    style={{ color: 'var(--color-text)' }}
                >
                    {count} items selected
                </span>
            </div>
        </div>
    );
}
