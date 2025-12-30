import { CanvasConfiguration } from './canvasConfig';

// Product-specific configuration on canvas
export interface ProductInstanceConfig {
    metrics: {
        [key: string]: {
            value: number;
            source: 'inherited' | 'manual'; // Where the value comes from
        };
    };
}

// Product template - defines which metrics are relevant for a product
export interface ProductTemplate {
    productId: string;
    relevantMetrics: Array<keyof CanvasConfiguration['coreMetrics']>;
}

// Product templates for common products
export const PRODUCT_TEMPLATES: ProductTemplate[] = [
    // VMware Products
    {
        productId: 'p-vsphere',
        relevantMetrics: ['cores', 'clusters', 'physicalHosts', 'virtualHosts']
    },
    {
        productId: 'p-horizon',
        relevantMetrics: ['namedUsers', 'concurrentUsers', 'virtualHosts']
    },
    {
        productId: 'p-nsx',
        relevantMetrics: ['virtualHosts', 'clusters']
    },
    {
        productId: 'p-vsan',
        relevantMetrics: ['physicalHosts', 'clusters', 'cores']
    },

    // Microsoft Products
    {
        productId: 'p-m365',
        relevantMetrics: ['namedUsers']
    },
    {
        productId: 'p-azure',
        relevantMetrics: ['virtualHosts', 'cores', 'applications']
    },
    {
        productId: 'p-azureopenai',
        relevantMetrics: ['namedUsers', 'applications']
    },

    // AWS Products
    {
        productId: 'p-eks',
        relevantMetrics: ['virtualHosts', 'cores', 'clusters']
    },

    // Citrix Products
    {
        productId: 'p-xenapp',
        relevantMetrics: ['namedUsers', 'concurrentUsers', 'virtualHosts']
    },
    {
        productId: 'p-xendesktop',
        relevantMetrics: ['namedUsers', 'concurrentUsers', 'virtualHosts']
    }
];

// Helper function to get template for a product
export function getProductTemplate(productId: string): ProductTemplate | undefined {
    return PRODUCT_TEMPLATES.find(t => t.productId === productId);
}

// Helper function to check if a metric is relevant for a product
export function isMetricRelevant(
    productId: string,
    metricKey: keyof CanvasConfiguration['coreMetrics']
): boolean {
    const template = getProductTemplate(productId);
    return template?.relevantMetrics.includes(metricKey) ?? false;
}

// Helper function to initialize product config from canvas config
export function initializeProductConfig(
    productId: string,
    canvasConfig: CanvasConfiguration
): ProductInstanceConfig {
    const template = getProductTemplate(productId);
    if (!template) {
        return { metrics: {} };
    }

    const metrics: ProductInstanceConfig['metrics'] = {};

    // Initialize all relevant metrics with inherited values (if available)
    template.relevantMetrics.forEach(metricKey => {
        const value = canvasConfig.coreMetrics[metricKey];
        if (value !== undefined) {
            metrics[metricKey] = {
                value,
                source: 'inherited'
            };
        }
    });

    return { metrics };
}

// Helper function to add a metric manually (NEW - for metrics not in canvas config)
export function addMetricManually(
    config: ProductInstanceConfig,
    metricKey: string,
    value: number
): ProductInstanceConfig {
    return {
        ...config,
        metrics: {
            ...config.metrics,
            [metricKey]: {
                value,
                source: 'manual'
            }
        }
    };
}

// Helper function to update a metric value manually
export function updateMetricManually(
    config: ProductInstanceConfig,
    metricKey: string,
    value: number
): ProductInstanceConfig {
    return {
        ...config,
        metrics: {
            ...config.metrics,
            [metricKey]: {
                value,
                source: 'manual'
            }
        }
    };
}

// Helper function to remove a metric (NEW)
export function removeMetric(
    config: ProductInstanceConfig,
    metricKey: string
): ProductInstanceConfig {
    const { [metricKey]: _, ...remainingMetrics } = config.metrics;
    return { metrics: remainingMetrics };
}

// Helper function to reset a metric to inherited value
export function resetMetricToInherited(
    config: ProductInstanceConfig,
    metricKey: string,
    canvasConfig: CanvasConfiguration
): ProductInstanceConfig {
    const inheritedValue = canvasConfig.coreMetrics[metricKey as keyof CanvasConfiguration['coreMetrics']];

    if (inheritedValue === undefined) {
        // Remove metric if no inherited value exists
        const { [metricKey]: _, ...remainingMetrics } = config.metrics;
        return { metrics: remainingMetrics };
    }

    return {
        ...config,
        metrics: {
            ...config.metrics,
            [metricKey]: {
                value: inheritedValue,
                source: 'inherited'
            }
        }
    };
}

// Helper function to sync inherited metrics when canvas config changes
// UPDATED: Now also adds new metrics that weren't there before
export function syncInheritedMetrics(
    config: ProductInstanceConfig,
    canvasConfig: CanvasConfiguration,
    productId: string
): ProductInstanceConfig {
    const template = getProductTemplate(productId);
    if (!template) return config;

    const updatedMetrics = { ...config.metrics };

    // For each relevant metric in the template
    template.relevantMetrics.forEach(metricKey => {
        const canvasValue = canvasConfig.coreMetrics[metricKey];
        const existingMetric = updatedMetrics[metricKey];

        if (canvasValue !== undefined) {
            if (!existingMetric) {
                // NEW: Add metric if it doesn't exist yet (as inherited)
                updatedMetrics[metricKey] = {
                    value: canvasValue,
                    source: 'inherited'
                };
            } else if (existingMetric.source === 'inherited') {
                // Update existing inherited metric
                updatedMetrics[metricKey] = {
                    value: canvasValue,
                    source: 'inherited'
                };
            }
            // If source is 'manual', don't update (preserve manual override)
        }
    });

    return { metrics: updatedMetrics };
}
