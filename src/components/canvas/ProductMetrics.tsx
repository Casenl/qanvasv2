'use client';

import React from 'react';
import { Link2, Edit3, RotateCcw, AlertCircle } from 'lucide-react';
import { CanvasConfiguration, METRIC_DEFINITIONS } from '@/lib/types/canvasConfig';
import { ProductInstanceConfig } from '@/lib/types/productConfig';

interface ProductMetricsProps {
    productId: string;
    productConfig: ProductInstanceConfig;
    canvasConfig: CanvasConfiguration;
    onMetricChange: (metricKey: string, value: number) => void;
    onMetricReset: (metricKey: string) => void;
}

/**
 * Product Metrics Section
 * Shows relevant metrics for a product with inheritance indicators
 */
export function ProductMetrics({
    productId,
    productConfig,
    canvasConfig,
    onMetricChange,
    onMetricReset
}: ProductMetricsProps) {
    // Debug logging
    console.log('ProductMetrics render:', {
        productId,
        productConfig,
        metricsCount: Object.keys(productConfig.metrics).length
    });

    const metrics = productConfig.metrics;
    const metricKeys = Object.keys(metrics);

    if (metricKeys.length === 0) {
        return (
            <div
                className="px-4 py-6 rounded-lg text-center space-y-2"
                style={{
                    backgroundColor: 'var(--color-background)',
                    borderColor: 'var(--color-border)',
                    border: '1px dashed'
                }}
            >
                <AlertCircle
                    className="w-8 h-8 mx-auto"
                    style={{ color: 'var(--color-text-muted)' }}
                />
                <p
                    className="text-xs font-medium"
                    style={{ color: 'var(--color-text)' }}
                >
                    No metrics configured
                </p>
                <p
                    className="text-xs"
                    style={{ color: 'var(--color-text-muted)' }}
                >
                    Set values in Canvas Configuration (Config tab) to see inherited metrics here.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-3">
            {metricKeys.map(metricKey => {
                const metric = metrics[metricKey];
                const metricDef = METRIC_DEFINITIONS.find(m => m.key === metricKey);
                const isInherited = metric.source === 'inherited';
                const canvasValue = canvasConfig.coreMetrics[metricKey as keyof CanvasConfiguration['coreMetrics']];

                return (
                    <div
                        key={metricKey}
                        className="p-3 rounded-lg"
                        style={{
                            backgroundColor: 'var(--color-background)',
                            borderStyle: 'solid',
                            borderWidth: '1px',
                            borderLeftWidth: '3px',
                            borderColor: isInherited ? 'var(--color-primary)' : 'var(--color-secondary)'
                        }}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <span className="text-sm">{metricDef?.icon || '📊'}</span>
                                <span
                                    className="text-sm font-semibold"
                                    style={{ color: 'var(--color-text)' }}
                                >
                                    {metricDef?.label || metricKey}
                                </span>
                            </div>

                            {/* Source Indicator */}
                            <div className="flex items-center gap-1">
                                {isInherited ? (
                                    <div
                                        className="flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium"
                                        style={{
                                            backgroundColor: 'var(--color-primary)',
                                            color: 'white'
                                        }}
                                    >
                                        <Link2 className="w-3 h-3" />
                                        <span>Inherited</span>
                                    </div>
                                ) : (
                                    <div
                                        className="flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium"
                                        style={{
                                            backgroundColor: 'var(--color-secondary)',
                                            color: 'white'
                                        }}
                                    >
                                        <Edit3 className="w-3 h-3" />
                                        <span>Manual</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Value Input */}
                        <div className="flex items-center gap-2">
                            <input
                                type="number"
                                value={metric.value}
                                onChange={(e) => {
                                    const value = parseInt(e.target.value);
                                    if (!isNaN(value)) {
                                        onMetricChange(metricKey, value);
                                    }
                                }}
                                className="flex-1 px-3 py-2 rounded text-sm"
                                style={{
                                    backgroundColor: 'var(--color-surface)',
                                    borderColor: 'var(--color-border)',
                                    border: '1px solid',
                                    color: 'var(--color-text)'
                                }}
                            />

                            {/* Reset Button (only show if manual and canvas value exists) */}
                            {!isInherited && canvasValue !== undefined && (
                                <button
                                    onClick={() => onMetricReset(metricKey)}
                                    className="p-2 rounded transition-colors"
                                    style={{
                                        backgroundColor: 'var(--color-background-secondary)',
                                        color: 'var(--color-text-muted)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                                        e.currentTarget.style.color = 'white';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                                        e.currentTarget.style.color = 'var(--color-text-muted)';
                                    }}
                                    title={`Reset to canvas value (${canvasValue})`}
                                >
                                    <RotateCcw className="w-4 h-4" />
                                </button>
                            )}
                        </div>

                        {/* Helper Text */}
                        {isInherited && canvasValue !== undefined && (
                            <p
                                className="mt-2 text-xs"
                                style={{ color: 'var(--color-text-muted)' }}
                            >
                                💡 Using canvas configuration value. Edit to override manually.
                            </p>
                        )}
                        {!isInherited && canvasValue !== undefined && (
                            <p
                                className="mt-2 text-xs"
                                style={{ color: 'var(--color-text-muted)' }}
                            >
                                ✏️ Manually overridden. Canvas value: {canvasValue}. Click reset to restore.
                            </p>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
