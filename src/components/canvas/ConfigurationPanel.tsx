import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Settings } from 'lucide-react';
import { CanvasConfiguration, METRIC_DEFINITIONS, MetricMetadata } from '@/lib/types/canvasConfig';

interface ConfigurationPanelProps {
    config: CanvasConfiguration;
    onConfigChange: (config: CanvasConfiguration) => void;
}

interface CollapsibleSectionProps {
    title: string;
    icon: React.ReactNode;
    defaultOpen?: boolean;
    children: React.ReactNode;
}

/**
 * Collapsible section component for organizing metrics
 */
function CollapsibleSection({ title, icon, defaultOpen = true, children }: CollapsibleSectionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="mb-3">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors"
                style={{
                    backgroundColor: 'var(--color-background)',
                    color: 'var(--color-text)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-background)'}
            >
                <div className="flex items-center gap-2">
                    {icon}
                    <span className="text-sm font-semibold">{title}</span>
                </div>
                {isOpen ? (
                    <ChevronDown className="w-4 h-4" style={{ color: 'var(--color-text-muted)' }} />
                ) : (
                    <ChevronRight className="w-4 h-4" style={{ color: 'var(--color-text-muted)' }} />
                )}
            </button>

            {isOpen && (
                <div className="mt-2 space-y-2 px-1">
                    {children}
                </div>
            )}
        </div>
    );
}

/**
 * Metric input field component
 */
function MetricInput({
    metric,
    value,
    onChange
}: {
    metric: MetricMetadata;
    value: number | undefined;
    onChange: (value: number | undefined) => void;
}) {
    return (
        <div className="space-y-1">
            <label
                className="flex items-center gap-2 text-xs font-medium"
                style={{ color: 'var(--color-text)' }}
            >
                <span>{metric.icon}</span>
                <span>{metric.label}</span>
            </label>
            <input
                type="number"
                value={value ?? ''}
                onChange={(e) => {
                    const val = e.target.value === '' ? undefined : parseInt(e.target.value);
                    onChange(val);
                }}
                placeholder="Not set"
                min="0"
                className="w-full px-3 py-2 rounded-lg text-sm transition-colors"
                style={{
                    backgroundColor: 'var(--color-background)',
                    borderColor: 'var(--color-border)',
                    border: '1px solid',
                    color: 'var(--color-text)'
                }}
            />
            <p
                className="text-xs"
                style={{ color: 'var(--color-text-muted)' }}
            >
                {metric.description}
            </p>
        </div>
    );
}

/**
 * Canvas Configuration Panel
 * Allows setting core metrics that can be inherited by products
 */
export function ConfigurationPanel({ config, onConfigChange }: ConfigurationPanelProps) {
    const handleMetricChange = (key: keyof CanvasConfiguration['coreMetrics'], value: number | undefined) => {
        onConfigChange({
            ...config,
            coreMetrics: {
                ...config.coreMetrics,
                [key]: value
            }
        });
    };

    // Group metrics by category
    const userMetrics = METRIC_DEFINITIONS.filter(m => m.category === 'users');
    const infrastructureMetrics = METRIC_DEFINITIONS.filter(m => m.category === 'infrastructure');
    const applicationMetrics = METRIC_DEFINITIONS.filter(m => m.category === 'applications');
    const otherMetrics = METRIC_DEFINITIONS.filter(m => m.category === 'other');

    // Count how many metrics are set
    const setMetricsCount = Object.values(config.coreMetrics).filter(v => v !== undefined).length;
    const totalMetricsCount = METRIC_DEFINITIONS.length;

    return (
        <div className="h-full flex flex-col">
            {/* Header */}
            <div
                className="px-4 py-3 flex items-center gap-3"
                style={{
                    borderBottom: '1px solid var(--color-border)'
                }}
            >
                <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                        backgroundColor: 'var(--color-primary)',
                        opacity: 0.1
                    }}
                >
                    <Settings
                        className="w-4 h-4"
                        style={{ color: 'var(--color-primary)' }}
                    />
                </div>
                <div className="flex-1">
                    <h3
                        className="text-sm font-bold"
                        style={{ color: 'var(--color-text)' }}
                    >
                        Canvas Configuration
                    </h3>
                    <p
                        className="text-xs"
                        style={{ color: 'var(--color-text-muted)' }}
                    >
                        {setMetricsCount} of {totalMetricsCount} metrics set
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
                {/* Users Section */}
                <CollapsibleSection
                    title="Users"
                    icon={<span className="text-base">👥</span>}
                    defaultOpen={true}
                >
                    {userMetrics.map(metric => (
                        <MetricInput
                            key={metric.key}
                            metric={metric}
                            value={config.coreMetrics[metric.key]}
                            onChange={(value) => handleMetricChange(metric.key, value)}
                        />
                    ))}
                </CollapsibleSection>

                {/* Infrastructure Section */}
                <CollapsibleSection
                    title="Infrastructure"
                    icon={<span className="text-base">🏗️</span>}
                    defaultOpen={true}
                >
                    {infrastructureMetrics.map(metric => (
                        <MetricInput
                            key={metric.key}
                            metric={metric}
                            value={config.coreMetrics[metric.key]}
                            onChange={(value) => handleMetricChange(metric.key, value)}
                        />
                    ))}
                </CollapsibleSection>

                {/* Applications Section */}
                <CollapsibleSection
                    title="Applications"
                    icon={<span className="text-base">📦</span>}
                    defaultOpen={false}
                >
                    {applicationMetrics.map(metric => (
                        <MetricInput
                            key={metric.key}
                            metric={metric}
                            value={config.coreMetrics[metric.key]}
                            onChange={(value) => handleMetricChange(metric.key, value)}
                        />
                    ))}
                </CollapsibleSection>

                {/* Other Section */}
                <CollapsibleSection
                    title="Other"
                    icon={<span className="text-base">📊</span>}
                    defaultOpen={false}
                >
                    {otherMetrics.map(metric => (
                        <MetricInput
                            key={metric.key}
                            metric={metric}
                            value={config.coreMetrics[metric.key]}
                            onChange={(value) => handleMetricChange(metric.key, value)}
                        />
                    ))}
                </CollapsibleSection>
            </div>

            {/* Footer Info */}
            <div
                className="px-4 py-3 text-xs"
                style={{
                    borderTop: '1px solid var(--color-border)',
                    backgroundColor: 'var(--color-background)',
                    color: 'var(--color-text-muted)'
                }}
            >
                💡 These values will be inherited by products unless manually overridden
            </div>
        </div>
    );
}
