import { CanvasItem } from '../types';
import { CanvasConfiguration } from './canvasConfig';

// Canvas Snapshot - represents a phase/state of the canvas
export interface CanvasSnapshot {
    id: string;
    name: string;
    description?: string;
    timestamp: Date;
    items: CanvasItem[];
    canvasConfig: CanvasConfiguration;
}

// Snapshot comparison result
export interface SnapshotComparison {
    added: CanvasItem[];
    removed: CanvasItem[];
    modified: {
        item: CanvasItem;
        changes: {
            position?: { from: { x: number; y: number }; to: { x: number; y: number } };
            metrics?: {
                [key: string]: {
                    from: number | undefined;
                    to: number | undefined;
                };
            };
        };
    }[];
    configChanges: {
        [key: string]: {
            from: number | undefined;
            to: number | undefined;
        };
    };
}

// Helper function to create a snapshot from current state
export function createSnapshot(
    name: string,
    items: CanvasItem[],
    canvasConfig: CanvasConfiguration,
    description?: string
): CanvasSnapshot {
    return {
        id: `snapshot-${Date.now()}`,
        name,
        description,
        timestamp: new Date(),
        items: JSON.parse(JSON.stringify(items)), // Deep clone
        canvasConfig: JSON.parse(JSON.stringify(canvasConfig)) // Deep clone
    };
}

// Helper function to compare two snapshots
export function compareSnapshots(
    from: CanvasSnapshot,
    to: CanvasSnapshot
): SnapshotComparison {
    const result: SnapshotComparison = {
        added: [],
        removed: [],
        modified: [],
        configChanges: {}
    };

    // Find added and modified items
    to.items.forEach(toItem => {
        const fromItem = from.items.find(i => i.entityId === toItem.entityId);

        if (!fromItem) {
            // Item was added
            result.added.push(toItem);
        } else {
            // Check for modifications
            const changes: SnapshotComparison['modified'][0]['changes'] = {};
            let hasChanges = false;

            // Check position changes
            if (fromItem.x !== toItem.x || fromItem.y !== toItem.y) {
                changes.position = {
                    from: { x: fromItem.x, y: fromItem.y },
                    to: { x: toItem.x, y: toItem.y }
                };
                hasChanges = true;
            }

            // Check metric changes
            if (fromItem.productConfig && toItem.productConfig) {
                const metricChanges: SnapshotComparison['modified'][0]['changes']['metrics'] = {};

                // Get all unique metric keys
                const allMetricKeys = new Set([
                    ...Object.keys(fromItem.productConfig.metrics),
                    ...Object.keys(toItem.productConfig.metrics)
                ]);

                allMetricKeys.forEach(key => {
                    const fromValue = fromItem.productConfig?.metrics[key]?.value;
                    const toValue = toItem.productConfig?.metrics[key]?.value;

                    if (fromValue !== toValue) {
                        metricChanges[key] = {
                            from: fromValue,
                            to: toValue
                        };
                        hasChanges = true;
                    }
                });

                if (Object.keys(metricChanges).length > 0) {
                    changes.metrics = metricChanges;
                }
            }

            if (hasChanges) {
                result.modified.push({
                    item: toItem,
                    changes
                });
            }
        }
    });

    // Find removed items
    from.items.forEach(fromItem => {
        const toItem = to.items.find(i => i.entityId === fromItem.entityId);
        if (!toItem) {
            result.removed.push(fromItem);
        }
    });

    // Compare canvas config
    const allConfigKeys = new Set([
        ...Object.keys(from.canvasConfig.coreMetrics),
        ...Object.keys(to.canvasConfig.coreMetrics)
    ]) as Set<keyof CanvasConfiguration['coreMetrics']>;

    allConfigKeys.forEach(key => {
        const fromValue = from.canvasConfig.coreMetrics[key];
        const toValue = to.canvasConfig.coreMetrics[key];

        if (fromValue !== toValue) {
            result.configChanges[key] = {
                from: fromValue,
                to: toValue
            };
        }
    });

    return result;
}

// Helper function to get snapshot summary
export function getSnapshotSummary(snapshot: CanvasSnapshot): {
    productCount: number;
    metricsCount: number;
    configuredMetrics: number;
} {
    const productCount = snapshot.items.filter(i => i.entityType === 'product').length;

    let metricsCount = 0;
    snapshot.items.forEach(item => {
        if (item.productConfig) {
            metricsCount += Object.keys(item.productConfig.metrics).length;
        }
    });

    const configuredMetrics = Object.values(snapshot.canvasConfig.coreMetrics)
        .filter(v => v !== undefined).length;

    return {
        productCount,
        metricsCount,
        configuredMetrics
    };
}
