import React from 'react';
import { X, Plus, Minus, Move, TrendingUp, TrendingDown, Minus as MinusCircle } from 'lucide-react';
import { SnapshotComparison } from '@/lib/types/snapshot';
import { METRIC_DEFINITIONS } from '@/lib/types/canvasConfig';
import { PRODUCTS } from '@/lib/data/mockData';

interface ComparisonViewProps {
    comparison: SnapshotComparison;
    fromName: string;
    toName: string;
    onClose: () => void;
}

export function ComparisonView({
    comparison,
    fromName,
    toName,
    onClose
}: ComparisonViewProps) {
    const getProductName = (entityId: string) => {
        return PRODUCTS.find(p => p.id === entityId)?.name || entityId;
    };

    const getMetricLabel = (key: string) => {
        return METRIC_DEFINITIONS.find(m => m.key === key)?.label || key;
    };

    const getMetricIcon = (key: string) => {
        return METRIC_DEFINITIONS.find(m => m.key === key)?.icon || '📊';
    };

    const hasChanges =
        comparison.added.length > 0 ||
        comparison.removed.length > 0 ||
        comparison.modified.length > 0 ||
        Object.keys(comparison.configChanges).length > 0;

    return (
        <div
            className="absolute top-24 right-6 w-96 max-h-[calc(100vh-8rem)] flex flex-col rounded-xl shadow-2xl z-40 border animate-in slide-in-from-right-10 duration-200"
            style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
                pointerEvents: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
        >
            {/* Header */}
            <div
                className="px-6 py-4 flex items-center justify-between"
                style={{ borderBottom: '1px solid var(--color-border)' }}
            >
                <div>
                    <h2
                        className="text-xl font-bold mb-1"
                        style={{ color: 'var(--color-text)' }}
                    >
                        Snapshot Comparison
                    </h2>
                    <p
                        className="text-sm"
                        style={{ color: 'var(--color-text-muted)' }}
                    >
                        <span style={{ color: 'var(--color-primary)' }}>{fromName}</span>
                        {' → '}
                        <span style={{ color: 'var(--color-secondary)' }}>{toName}</span>
                    </p>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 rounded transition-colors"
                    style={{
                        backgroundColor: 'var(--color-background)',
                        color: 'var(--color-text-muted)'
                    }}
                >
                    <X className="w-5 h-5" />
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {!hasChanges ? (
                    <div
                        className="p-8 text-center rounded-lg"
                        style={{
                            backgroundColor: 'var(--color-background)',
                            borderColor: 'var(--color-border)',
                            border: '1px dashed'
                        }}
                    >
                        <MinusCircle
                            className="w-12 h-12 mx-auto mb-3"
                            style={{ color: 'var(--color-text-muted)' }}
                        />
                        <p
                            className="text-sm font-medium"
                            style={{ color: 'var(--color-text)' }}
                        >
                            No differences found
                        </p>
                        <p
                            className="text-xs mt-1"
                            style={{ color: 'var(--color-text-muted)' }}
                        >
                            These snapshots are identical
                        </p>
                    </div>
                ) : (
                    <>
                        {/* Canvas Config Changes */}
                        {Object.keys(comparison.configChanges).length > 0 && (
                            <div>
                                <h3
                                    className="text-sm font-bold mb-3 flex items-center gap-2"
                                    style={{ color: 'var(--color-text)' }}
                                >
                                    ⚙️ Canvas Configuration Changes
                                </h3>
                                <div className="space-y-2">
                                    {Object.entries(comparison.configChanges).map(([key, change]) => (
                                        <div
                                            key={key}
                                            className="p-3 rounded-lg flex items-center justify-between"
                                            style={{
                                                backgroundColor: 'var(--color-background)',
                                                borderColor: 'var(--color-border)',
                                                borderStyle: 'solid',
                                                borderWidth: '1px'
                                            }}
                                        >
                                            <div className="flex items-center gap-2">
                                                <span>{getMetricIcon(key)}</span>
                                                <span
                                                    className="text-sm font-medium"
                                                    style={{ color: 'var(--color-text)' }}
                                                >
                                                    {getMetricLabel(key)}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <span style={{ color: 'var(--color-text-muted)' }}>
                                                    {change.from ?? '—'}
                                                </span>
                                                <span style={{ color: 'var(--color-text-muted)' }}>→</span>
                                                <span
                                                    className="font-semibold"
                                                    style={{ color: 'var(--color-primary)' }}
                                                >
                                                    {change.to ?? '—'}
                                                </span>
                                                {change.from !== undefined && change.to !== undefined && (
                                                    <span
                                                        className="text-xs"
                                                        style={{
                                                            color: change.to > change.from ? '#10b981' : '#ef4444'
                                                        }}
                                                    >
                                                        {change.to > change.from ? (
                                                            <TrendingUp className="w-4 h-4" />
                                                        ) : (
                                                            <TrendingDown className="w-4 h-4" />
                                                        )}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Added Items */}
                        {comparison.added.length > 0 && (
                            <div>
                                <h3
                                    className="text-sm font-bold mb-3 flex items-center gap-2"
                                    style={{ color: '#10b981' }}
                                >
                                    <Plus className="w-4 h-4" />
                                    Added Products ({comparison.added.length})
                                </h3>
                                <div className="space-y-2">
                                    {comparison.added.map(item => (
                                        <div
                                            key={item.id}
                                            className="p-3 rounded-lg"
                                            style={{
                                                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                                                borderColor: '#10b981',
                                                borderStyle: 'solid',
                                                borderWidth: '1px',
                                                borderLeftWidth: '3px'
                                            }}
                                        >
                                            <span
                                                className="text-sm font-medium"
                                                style={{ color: 'var(--color-text)' }}
                                            >
                                                {getProductName(item.entityId)}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Removed Items */}
                        {comparison.removed.length > 0 && (
                            <div>
                                <h3
                                    className="text-sm font-bold mb-3 flex items-center gap-2"
                                    style={{ color: '#ef4444' }}
                                >
                                    <Minus className="w-4 h-4" />
                                    Removed Products ({comparison.removed.length})
                                </h3>
                                <div className="space-y-2">
                                    {comparison.removed.map(item => (
                                        <div
                                            key={item.id}
                                            className="p-3 rounded-lg"
                                            style={{
                                                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                                                borderColor: '#ef4444',
                                                borderStyle: 'solid',
                                                borderWidth: '1px',
                                                borderLeftWidth: '3px'
                                            }}
                                        >
                                            <span
                                                className="text-sm font-medium"
                                                style={{ color: 'var(--color-text)' }}
                                            >
                                                {getProductName(item.entityId)}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Modified Items */}
                        {comparison.modified.length > 0 && (
                            <div>
                                <h3
                                    className="text-sm font-bold mb-3 flex items-center gap-2"
                                    style={{ color: '#f59e0b' }}
                                >
                                    <Move className="w-4 h-4" />
                                    Modified Products ({comparison.modified.length})
                                </h3>
                                <div className="space-y-3">
                                    {comparison.modified.map(({ item, changes }) => (
                                        <div
                                            key={item.id}
                                            className="p-3 rounded-lg"
                                            style={{
                                                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                                                borderColor: '#f59e0b',
                                                borderStyle: 'solid',
                                                borderWidth: '1px',
                                                borderLeftWidth: '3px'
                                            }}
                                        >
                                            <div
                                                className="text-sm font-medium mb-2"
                                                style={{ color: 'var(--color-text)' }}
                                            >
                                                {getProductName(item.entityId)}
                                            </div>
                                            <div className="space-y-1 text-xs">
                                                {changes.position && (
                                                    <div style={{ color: 'var(--color-text-muted)' }}>
                                                        📍 Position: ({changes.position.from.x}, {changes.position.from.y}) → ({changes.position.to.x}, {changes.position.to.y})
                                                    </div>
                                                )}
                                                {changes.metrics && Object.entries(changes.metrics).map(([key, change]) => (
                                                    <div
                                                        key={key}
                                                        style={{ color: 'var(--color-text-muted)' }}
                                                    >
                                                        {getMetricIcon(key)} {getMetricLabel(key)}: {change.from ?? '—'} → {change.to ?? '—'}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Footer */}
            <div
                className="px-6 py-4 flex justify-end"
                style={{ borderTop: '1px solid var(--color-border)' }}
            >
                <button
                    onClick={onClose}
                    className="px-4 py-2 rounded-lg text-sm font-medium"
                    style={{
                        backgroundColor: 'var(--color-primary)',
                        color: 'white'
                    }}
                >
                    Close
                </button>
            </div>
        </div>
    );
}
