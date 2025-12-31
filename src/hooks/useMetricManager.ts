import { useCallback } from 'react';
import { CanvasItem } from '@/lib/types';
import { CanvasConfiguration } from '@/lib/types/canvasConfig';
import { updateMetricManually, resetMetricToInherited } from '@/lib/types/productConfig';

interface UseMetricManagerProps {
    items: CanvasItem[];
    setItems: (updater: (prev: CanvasItem[]) => CanvasItem[]) => void;
    canvasConfig: CanvasConfiguration;
    setDebugInfo: (info: string) => void;
}

/**
 * useMetricManager - Manages product metric updates
 * 
 * Provides metric management functionality including:
 * - Manually updating metric values for products
 * - Resetting metrics to inherited values from canvas config
 * 
 * @param props - Configuration object
 * @returns Metric manager interface
 */
export function useMetricManager({
    items,
    setItems,
    canvasConfig,
    setDebugInfo
}: UseMetricManagerProps) {
    const handleMetricChange = useCallback((itemId: string, metricKey: string, value: number) => {
        setItems(prev => prev.map(item => {
            if (item.id !== itemId || !item.productConfig) return item;

            return {
                ...item,
                productConfig: updateMetricManually(item.productConfig, metricKey, value)
            };
        }));
        setDebugInfo(`Updated ${metricKey} to ${value}`);
    }, [setItems, setDebugInfo]);

    const handleMetricReset = useCallback((itemId: string, metricKey: string) => {
        setItems(prev => prev.map(item => {
            if (item.id !== itemId || !item.productConfig) return item;

            return {
                ...item,
                productConfig: resetMetricToInherited(item.productConfig, metricKey, canvasConfig)
            };
        }));
        setDebugInfo(`Reset ${metricKey} to inherited value`);
    }, [setItems, canvasConfig, setDebugInfo]);

    return {
        handleMetricChange,
        handleMetricReset
    };
}
