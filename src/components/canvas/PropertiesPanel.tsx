'use client';

import { Search, Settings, MoreVertical, Package, Layout, Tag, Info, ExternalLink, Plus } from 'lucide-react';
import { CanvasItem, Proposition, Vendor, Product } from '@/lib/types';
import { CanvasConfiguration } from '@/lib/types/canvasConfig';
import { ProductMetrics } from './ProductMetrics';

interface PropertiesPanelProps {
    selectedItem: CanvasItem | undefined;
    selectedCount: number;
    propositions: Proposition[];
    vendors: Vendor[];
    products: Product[];
    onAddToSolution?: () => void;
    colorSchemeEnabled?: boolean;
    canvasConfig: CanvasConfiguration;
    onMetricChange: (itemId: string, metricKey: string, value: number) => void;
    onMetricReset: (itemId: string, metricKey: string) => void;
}

// Proposition color mapping
const PROPOSITION_COLORS: Record<string, { bg: string; border: string; text: string; badge: string }> = {
    'digital-workspace': {
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/30',
        text: 'text-blue-500',
        badge: 'bg-blue-500/20 border-blue-500/30 text-blue-500'
    },
    'hybrid-cloud': {
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/30',
        text: 'text-purple-500',
        badge: 'bg-purple-500/20 border-purple-500/30 text-purple-500'
    },
    'artificial-intelligence': {
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/30',
        text: 'text-emerald-500',
        badge: 'bg-emerald-500/20 border-emerald-500/30 text-emerald-500'
    },
    'cloud-native': {
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/30',
        text: 'text-orange-500',
        badge: 'bg-orange-500/20 border-orange-500/30 text-orange-500'
    }
};

export function PropertiesPanel({
    selectedItem,
    selectedCount,
    propositions,
    vendors,
    products,
    onAddToSolution,
    colorSchemeEnabled = true,
    canvasConfig,
    onMetricChange,
    onMetricReset
}: PropertiesPanelProps) {
    // Get full product details if selected item is a product
    const getProductDetails = () => {
        if (!selectedItem || selectedItem.entityType !== 'product') return null;
        return products.find(p => p.id === selectedItem.entityId);
    };

    const getVendor = () => {
        const product = getProductDetails();
        if (!product) return null;
        return vendors.find(v => v.id === product.vendorId);
    };

    const getProposition = () => {
        const product = getProductDetails();
        if (!product) return null;
        return propositions.find(p => p.id === product.propositionId);
    };

    // Debug logging
    if (selectedItem) {
        console.log('PropertiesPanel - Selected Item:', {
            id: selectedItem.id,
            entityType: selectedItem.entityType,
            entityId: selectedItem.entityId,
            hasProductConfig: !!selectedItem.productConfig,
            productConfig: selectedItem.productConfig,
            metricsCount: selectedItem.productConfig ? Object.keys(selectedItem.productConfig.metrics).length : 0
        });
    }

    const productDetails = getProductDetails();
    const vendor = getVendor();
    const proposition = getProposition();
    const propositionColors = (colorSchemeEnabled && proposition) ? PROPOSITION_COLORS[proposition.id] : null;

    return (
        <aside
            className="w-96 flex flex-col z-20"
            style={{
                borderLeft: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-surface)'
            }}
        >
            <div className="flex flex-col h-full">
                <div
                    className="p-6 flex items-center justify-between"
                    style={{ borderBottom: '1px solid var(--color-border)' }}
                >
                    <h2
                        className="text-sm font-bold uppercase tracking-widest flex items-center gap-2"
                        style={{ color: 'var(--color-text)' }}
                    >
                        <Settings
                            className="w-4 h-4"
                            style={{ color: 'var(--color-primary)' }}
                        />
                        Inspector
                    </h2>
                    {selectedCount > 1 && (
                        <div className="px-2 py-1 rounded-lg border bg-blue-500/20 border-blue-500/30">
                            <span className="text-[10px] font-bold text-blue-500">
                                {selectedCount} Selected
                            </span>
                        </div>
                    )}
                    <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: 'var(--color-background-secondary)' }}
                    >
                        <MoreVertical
                            className="w-4 h-4"
                            style={{ color: 'var(--color-text-muted)' }}
                        />
                    </div>
                </div>

                {selectedItem ? (
                    <div className="p-6 space-y-6 animate-in fade-in slide-in-from-right-4 duration-300 overflow-y-auto">
                        {/* Header with Icon and Title */}
                        <div className="flex items-center gap-4">
                            <div
                                className={`w-16 h-16 rounded-2xl border-2 flex items-center justify-center ${propositionColors?.bg || ''} ${propositionColors?.border || 'border-gray-200 dark:border-gray-700'}`}
                            >
                                {selectedItem.entityType === 'product' ? (
                                    <Package
                                        className={`w-8 h-8 ${propositionColors?.text || 'text-blue-500'}`}
                                    />
                                ) : (
                                    <Layout
                                        className="w-8 h-8"
                                        style={{ color: 'var(--color-secondary)' }}
                                    />
                                )}
                            </div>
                            <div className="flex-1">
                                <h3
                                    className="text-lg font-bold"
                                    style={{ color: 'var(--color-text)' }}
                                >
                                    {productDetails?.name || selectedItem.data.label}
                                </h3>
                                <p
                                    className="text-xs uppercase tracking-wide"
                                    style={{ color: 'var(--color-text-muted)' }}
                                >
                                    {selectedItem.entityType}
                                </p>
                            </div>
                        </div>

                        {/* Proposition Badge */}
                        {proposition && propositionColors && (
                            <div className={`px-4 py-3 rounded-xl border ${propositionColors.badge} flex items-center gap-2`}>
                                <Tag className={`w-4 h-4 ${propositionColors.text}`} />
                                <span className={`text-sm font-bold ${propositionColors.text}`}>
                                    {proposition.label}
                                </span>
                            </div>
                        )}

                        {/* Vendor Information */}
                        {vendor && (
                            <div
                                className="p-4 rounded-2xl border"
                                style={{
                                    backgroundColor: 'var(--color-background-secondary)',
                                    borderColor: 'var(--color-border)'
                                }}
                            >
                                <label
                                    className="text-[10px] font-bold uppercase tracking-widest block mb-3 flex items-center gap-2"
                                    style={{ color: 'var(--color-text-muted)' }}
                                >
                                    <Info className="w-3 h-3" />
                                    Vendor Information
                                </label>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p
                                            className="text-sm font-semibold"
                                            style={{ color: 'var(--color-text)' }}
                                        >
                                            {vendor.name}
                                        </p>
                                        <p
                                            className="text-xs mt-1"
                                            style={{ color: 'var(--color-text-muted)' }}
                                        >
                                            Technology Provider
                                        </p>
                                    </div>
                                    {vendor.logo && (
                                        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">
                                            <span className="text-xs font-bold">{vendor.name[0]}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Product Details */}
                        {productDetails && (
                            <div
                                className="p-4 rounded-2xl border space-y-3"
                                style={{
                                    backgroundColor: 'var(--color-background-secondary)',
                                    borderColor: 'var(--color-border)'
                                }}
                            >
                                <label
                                    className="text-[10px] font-bold uppercase tracking-widest block"
                                    style={{ color: 'var(--color-text-muted)' }}
                                >
                                    Product Details
                                </label>

                                {productDetails.version && (
                                    <div className="flex items-center justify-between">
                                        <span
                                            className="text-xs"
                                            style={{ color: 'var(--color-text-secondary)' }}
                                        >
                                            Version
                                        </span>
                                        <span
                                            className="text-xs font-medium px-2 py-0.5 rounded bg-white/5"
                                            style={{ color: 'var(--color-text)' }}
                                        >
                                            {productDetails.version}
                                        </span>
                                    </div>
                                )}

                                {productDetails.description && (
                                    <div>
                                        <span
                                            className="text-xs block mb-2"
                                            style={{ color: 'var(--color-text-secondary)' }}
                                        >
                                            Description
                                        </span>
                                        <p
                                            className="text-xs leading-relaxed"
                                            style={{ color: 'var(--color-text-muted)' }}
                                        >
                                            {productDetails.description}
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Hierarchy */}
                        <div
                            className="p-4 rounded-2xl border"
                            style={{
                                backgroundColor: 'var(--color-background-secondary)',
                                borderColor: 'var(--color-border)'
                            }}
                        >
                            <label
                                className="text-[10px] font-bold uppercase tracking-widest block mb-3"
                                style={{ color: 'var(--color-text-muted)' }}
                            >
                                Hierarchy
                            </label>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span
                                        className="text-xs"
                                        style={{ color: 'var(--color-text-secondary)' }}
                                    >
                                        Vendor
                                    </span>
                                    <span
                                        className="text-xs font-medium"
                                        style={{ color: 'var(--color-text)' }}
                                    >
                                        {vendor?.name || 'N/A'}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span
                                        className="text-xs"
                                        style={{ color: 'var(--color-text-secondary)' }}
                                    >
                                        Proposition
                                    </span>
                                    {proposition && propositionColors ? (
                                        <span className={`px-2 py-0.5 rounded border text-[10px] font-bold uppercase ${propositionColors.badge}`}>
                                            {proposition.label}
                                        </span>
                                    ) : (
                                        <span className="text-xs">N/A</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Integration Points (Placeholder) */}
                        <div
                            className="p-4 rounded-2xl border"
                            style={{
                                backgroundColor: 'var(--color-background-secondary)',
                                borderColor: 'var(--color-border)'
                            }}
                        >
                            <label
                                className="text-[10px] font-bold uppercase tracking-widest block mb-2 flex items-center gap-2"
                                style={{ color: 'var(--color-text-muted)' }}
                            >
                                <ExternalLink className="w-3 h-3" />
                                Integration Points
                            </label>
                            <div
                                className="text-xs leading-relaxed italic"
                                style={{ color: 'var(--color-text-secondary)' }}
                            >
                                Integration capabilities and connection points will be displayed here.
                            </div>
                        </div>

                        {/* Product Metrics */}
                        {selectedItem.productConfig && (
                            <div>
                                <label
                                    className="text-[10px] font-bold uppercase tracking-widest block mb-3 flex items-center gap-2"
                                    style={{ color: 'var(--color-text-muted)' }}
                                >
                                    <Settings className="w-3 h-3" />
                                    Product Metrics
                                </label>
                                <ProductMetrics
                                    productId={selectedItem.entityId}
                                    productConfig={selectedItem.productConfig}
                                    canvasConfig={canvasConfig}
                                    onMetricChange={(metricKey, value) => onMetricChange(selectedItem.id, metricKey, value)}
                                    onMetricReset={(metricKey) => onMetricReset(selectedItem.id, metricKey)}
                                />
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="space-y-3 pt-2">
                            {onAddToSolution && (
                                <button
                                    onClick={onAddToSolution}
                                    className="w-full py-3 rounded-xl text-white text-sm font-semibold transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                                    style={{
                                        backgroundColor: 'var(--color-primary)',
                                        boxShadow: '0 10px 25px -5px var(--color-primary)'
                                    }}
                                >
                                    <Plus className="w-4 h-4" />
                                    Add to Solution
                                </button>
                            )}

                            <button
                                className="w-full py-3 rounded-xl border text-sm font-semibold transition-colors"
                                style={{
                                    borderColor: 'var(--color-border)',
                                    color: 'var(--color-text)',
                                    backgroundColor: 'var(--color-background-secondary)'
                                }}
                            >
                                Configure Details
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center p-10 text-center">
                        <div
                            className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                            style={{ backgroundColor: 'var(--color-background-secondary)' }}
                        >
                            <Search
                                className="w-8 h-8"
                                style={{ color: 'var(--color-text-muted)' }}
                            />
                        </div>
                        <h3
                            className="font-medium mb-2"
                            style={{ color: 'var(--color-text-secondary)' }}
                        >
                            No Asset Selected
                        </h3>
                        <p
                            className="text-xs leading-relaxed"
                            style={{ color: 'var(--color-text-muted)' }}
                        >
                            Select an asset on the canvas to view its configuration, hierarchy, and metrics.
                        </p>
                    </div>
                )}
            </div>
        </aside>
    );
}
