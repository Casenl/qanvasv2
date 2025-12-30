'use client';

import { useState } from 'react';
import { Package, Search, Settings, Layers, Camera } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PropositionType, Proposition, Product, Vendor, Solution } from '@/lib/types';
import { CanvasConfiguration } from '@/lib/types/canvasConfig';
import { DraggableSidebarItem } from './DraggableSidebarItem';
import { SidebarSection } from './SidebarSection';
import { ConfigurationPanel } from './ConfigurationPanel';
import { SnapshotManager } from './SnapshotManager';
import { CanvasSnapshot } from '@/lib/types/snapshot';

interface CanvasSidebarProps {
    searchQuery: string;
    onSearchChange: (query: string) => void;
    selectedProposition: PropositionType | 'all';
    onPropositionChange: (prop: PropositionType | 'all') => void;
    propositions: Proposition[];
    filteredProducts: Product[];
    solutions: Solution[];
    vendors: Vendor[];
    getVendorName: (vendorId: string) => string | undefined;
    canvasConfig: CanvasConfiguration;
    onConfigChange: (config: CanvasConfiguration) => void;
    snapshots: CanvasSnapshot[];
    currentSnapshotId?: string;
    onCreateSnapshot: (name: string, description?: string) => void;
    onLoadSnapshot: (snapshotId: string) => void;
    onDeleteSnapshot: (snapshotId: string) => void;
    onCompareSnapshots: (fromId: string, toId: string) => void;
}

type TabType = 'products' | 'solutions' | 'snapshots' | 'configuration';

export function CanvasSidebar({
    searchQuery,
    onSearchChange,
    selectedProposition,
    onPropositionChange,
    propositions,
    filteredProducts,
    solutions,
    vendors,
    getVendorName,
    canvasConfig,
    onConfigChange,
    snapshots,
    currentSnapshotId,
    onCreateSnapshot,
    onLoadSnapshot,
    onDeleteSnapshot,
    onCompareSnapshots
}: CanvasSidebarProps) {
    const [activeTab, setActiveTab] = useState<TabType>('products');
    const [selectedVendor, setSelectedVendor] = useState<string | 'all'>('all');

    return (
        <aside
            className="w-80 flex flex-col z-20"
            style={{
                borderRight: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-surface)'
            }}
        >
            <div className="flex flex-col h-full">
                {/* Header */}
                <div
                    className="p-6"
                    style={{ borderBottom: '1px solid var(--color-border)' }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div
                            className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg"
                            style={{
                                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                                boxShadow: '0 10px 25px -5px var(--color-primary)'
                            }}
                        >
                            <Package className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h1
                                className="text-xl font-bold tracking-tight"
                                style={{ color: 'var(--color-text)' }}
                            >
                                Qanvas
                            </h1>
                            <p
                                className="text-[10px] uppercase tracking-[0.2em] font-medium"
                                style={{ color: 'var(--color-text-muted)' }}
                            >
                                Architecture Engine
                            </p>
                        </div>
                    </div>

                    {/* Tabs - Icon Only */}
                    <div className="flex gap-1 p-1 rounded-lg" style={{ backgroundColor: 'var(--color-background)' }}>
                        <button
                            onClick={() => setActiveTab('products')}
                            className="flex-1 flex items-center justify-center p-2 rounded-md transition-all"
                            style={{
                                backgroundColor: activeTab === 'products' ? 'var(--color-surface)' : 'transparent',
                                color: activeTab === 'products' ? 'var(--color-text)' : 'var(--color-text-muted)'
                            }}
                            title="Products"
                        >
                            <Layers className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setActiveTab('solutions')}
                            className="flex-1 flex items-center justify-center p-2 rounded-md transition-all"
                            style={{
                                backgroundColor: activeTab === 'solutions' ? 'var(--color-surface)' : 'transparent',
                                color: activeTab === 'solutions' ? 'var(--color-text)' : 'var(--color-text-muted)'
                            }}
                            title="Solutions"
                        >
                            <Package className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setActiveTab('snapshots')}
                            className="flex-1 flex items-center justify-center p-2 rounded-md transition-all"
                            style={{
                                backgroundColor: activeTab === 'snapshots' ? 'var(--color-surface)' : 'transparent',
                                color: activeTab === 'snapshots' ? 'var(--color-text)' : 'var(--color-text-muted)'
                            }}
                            title="Snapshots"
                        >
                            <Camera className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setActiveTab('configuration')}
                            className="flex-1 flex items-center justify-center p-2 rounded-md transition-all"
                            style={{
                                backgroundColor: activeTab === 'configuration' ? 'var(--color-surface)' : 'transparent',
                                color: activeTab === 'configuration' ? 'var(--color-text)' : 'var(--color-text-muted)'
                            }}
                            title="Configuration"
                        >
                            <Settings className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Tab Content */}
                {activeTab === 'products' && (
                    <>
                        {/* Search */}
                        <div className="px-6 pt-4">
                            <div className="relative group">
                                <Search
                                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors"
                                    style={{ color: 'var(--color-text-muted)' }}
                                />
                                <input
                                    type="text"
                                    placeholder="Search assets..."
                                    className="w-full rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none transition-all"
                                    style={{
                                        backgroundColor: 'var(--color-background-secondary)',
                                        border: '1px solid var(--color-border)',
                                        color: 'var(--color-text)'
                                    }}
                                    value={searchQuery}
                                    onChange={(e) => onSearchChange(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                            {/* Proposition Filters */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                <button
                                    onClick={() => onPropositionChange('all')}
                                    className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
                                    style={{
                                        backgroundColor: selectedProposition === 'all' ? 'var(--color-primary)' : 'var(--color-background-secondary)',
                                        color: selectedProposition === 'all' ? 'white' : 'var(--color-text-muted)'
                                    }}
                                >
                                    All
                                </button>
                                {propositions.map(prop => (
                                    <button
                                        key={prop.id}
                                        onClick={() => onPropositionChange(prop.id)}
                                        className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
                                        style={{
                                            backgroundColor: selectedProposition === prop.id ? 'var(--color-primary)' : 'var(--color-background-secondary)',
                                            color: selectedProposition === prop.id ? 'white' : 'var(--color-text-muted)'
                                        }}
                                    >
                                        {prop.label}
                                    </button>
                                ))}
                            </div>

                            {/* Vendors - Now First! */}
                            <SidebarSection title="Vendors" defaultOpen={true}>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <button
                                        onClick={() => setSelectedVendor('all')}
                                        className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
                                        style={{
                                            backgroundColor: selectedVendor === 'all' ? 'var(--color-secondary)' : 'var(--color-background-secondary)',
                                            color: selectedVendor === 'all' ? 'white' : 'var(--color-text-muted)'
                                        }}
                                    >
                                        All Vendors
                                    </button>
                                    {vendors.map(v => (
                                        <button
                                            key={v.id}
                                            onClick={() => setSelectedVendor(v.id)}
                                            className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
                                            style={{
                                                backgroundColor: selectedVendor === v.id ? 'var(--color-secondary)' : 'var(--color-background-secondary)',
                                                color: selectedVendor === v.id ? 'white' : 'var(--color-text-muted)'
                                            }}
                                        >
                                            {v.name}
                                        </button>
                                    ))}
                                </div>
                            </SidebarSection>

                            {/* Products - Filtered by Vendor */}
                            <SidebarSection title="Products">
                                {filteredProducts
                                    .filter(prod => selectedVendor === 'all' || prod.vendorId === selectedVendor)
                                    .map(prod => (
                                        <DraggableSidebarItem
                                            key={prod.id}
                                            id={prod.id}
                                            type="product"
                                            label={prod.name}
                                            data={prod}
                                            vendorName={getVendorName(prod.vendorId)}
                                        />
                                    ))}
                                {filteredProducts.filter(prod => selectedVendor === 'all' || prod.vendorId === selectedVendor).length === 0 && (
                                    <div
                                        className="p-8 text-center rounded-2xl"
                                        style={{
                                            borderColor: 'var(--color-border)',
                                            border: '2px dashed'
                                        }}
                                    >
                                        <p
                                            className="text-xs"
                                            style={{ color: 'var(--color-text-muted)' }}
                                        >
                                            No products found
                                        </p>
                                    </div>
                                )}
                            </SidebarSection>
                        </div>
                    </>
                )}

                {activeTab === 'solutions' && (
                    <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                        <SidebarSection title="Solutions" defaultOpen={true}>
                            {solutions.map(sol => (
                                <DraggableSidebarItem
                                    key={sol.id}
                                    id={sol.id}
                                    type="solution"
                                    label={sol.name}
                                    data={sol}
                                />
                            ))}
                            {solutions.length === 0 && (
                                <div className="p-8 text-center border-2 border-dashed rounded-2xl" style={{ borderColor: 'var(--color-border)' }}>
                                    <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                                        No solutions yet. Create one by selecting products on the canvas.
                                    </p>
                                </div>
                            )}
                        </SidebarSection>
                    </div>
                )}

                {activeTab === 'snapshots' && (
                    <SnapshotManager
                        snapshots={snapshots}
                        currentSnapshotId={currentSnapshotId}
                        onCreateSnapshot={onCreateSnapshot}
                        onLoadSnapshot={onLoadSnapshot}
                        onDeleteSnapshot={onDeleteSnapshot}
                        onCompareSnapshots={onCompareSnapshots}
                    />
                )}

                {activeTab === 'configuration' && (
                    <ConfigurationPanel
                        config={canvasConfig}
                        onConfigChange={onConfigChange}
                    />
                )}
            </div>
        </aside>
    );
}
