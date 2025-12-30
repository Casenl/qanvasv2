'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
    DndContext,
    DragOverlay,
    useDraggable,
    useDroppable,
    DragStartEvent,
    DragEndEvent,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors,
    pointerWithin,
    CollisionDetection,
    rectIntersection,
    closestCenter
} from '@dnd-kit/core';

// Custom collision strategy that prioritizes the canvas
const customCollisionStrategy: CollisionDetection = (args) => {
    const pointerCollisions = pointerWithin(args);
    if (pointerCollisions.length > 0) {
        return pointerCollisions;
    }
    const rectCollisions = rectIntersection(args);
    return rectCollisions.filter(c => c.id === 'canvas-droppable');
};
import { createPortal } from 'react-dom';
import {
    ChevronRight,
    ChevronDown,
    Search,
    Layout,
    Package,
    Zap,
    Cloud,
    Monitor,
    Bot,
    Info,
    Settings,
    MoreVertical
} from 'lucide-react';

import { MainLayout } from '@/components/layout/MainLayout';
import { cn } from '@/lib/utils';
import {
    PropositionType,
    Proposition,
    Vendor,
    Product,
    Solution,
    CanvasItem,
    EntityType
} from '@/lib/types';

// --- MOCK DATA ---
const PROPOSITIONS: Proposition[] = [
    { id: 'digital-workspace', label: 'Digital Workspace', color: 'blue', icon: 'Monitor' },
    { id: 'hybrid-cloud', label: 'Hybrid Cloud', color: 'purple', icon: 'Cloud' },
    { id: 'artificial-intelligence', label: 'Artificial Intelligence', color: 'teal', icon: 'Bot' },
    { id: 'cloud-native', label: 'Cloud Native', color: 'orange', icon: 'Zap' },
];

const VENDORS: Vendor[] = [
    { id: 'v-vmware', name: 'VMware' },
    { id: 'v-microsoft', name: 'Microsoft' },
    { id: 'v-aws', name: 'AWS' },
    { id: 'v-google', name: 'Google Cloud' },
];

const PRODUCTS: Product[] = [
    { id: 'p-vsphere', vendorId: 'v-vmware', propositionId: 'hybrid-cloud', name: 'vSphere' },
    { id: 'p-vcloud', vendorId: 'v-vmware', propositionId: 'hybrid-cloud', name: 'vCloud Foundation' },
    { id: 'p-horizon', vendorId: 'v-vmware', propositionId: 'digital-workspace', name: 'Horizon' },
    { id: 'p-azure-vd', vendorId: 'v-microsoft', propositionId: 'digital-workspace', name: 'Azure Virtual Desktop' },
    { id: 'p-m365', vendorId: 'v-microsoft', propositionId: 'digital-workspace', name: 'Microsoft 365' },
    { id: 'p-openai', vendorId: 'v-microsoft', propositionId: 'artificial-intelligence', name: 'Azure OpenAI' },
    { id: 'p-eks', vendorId: 'v-aws', propositionId: 'cloud-native', name: 'Amazon EKS' },
];

const SOLUTIONS: Solution[] = [
    { id: 's-modern-hybrid', name: 'Modern Hybrid Cloud', description: 'Complete hybrid cloud stack based on VMware and Azure', productIds: ['p-vsphere', 'p-azure-vd'] },
];

// --- COMPONENTS ---

function DraggableSidebarItem({ id, type, label, data }: { id: string, type: EntityType, label: string, data: any }) {
    const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
        id: `sidebar-${id}`,
        data: { type, label, entityId: id, source: 'sidebar', payload: data }
    });

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            className={cn(
                "group flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm cursor-grab active:cursor-grabbing hover:bg-white/10 hover:border-white/20 transition-all duration-200",
                isDragging && "opacity-40 grayscale scale-95"
            )}
        >
            <div className="flex items-center gap-3">
                <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center",
                    type === 'product' ? "bg-blue-500/20 text-blue-400" :
                        type === 'vendor' ? "bg-purple-500/20 text-purple-400" :
                            "bg-teal-500/20 text-teal-400"
                )}>
                    {type === 'product' ? <Package className="w-4 h-4" /> :
                        type === 'vendor' ? <Layout className="w-4 h-4" /> :
                            <Zap className="w-4 h-4" />}
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-medium text-white/90">{label}</span>
                    {type === 'product' && (
                        <span className="text-[10px] text-white/40 uppercase tracking-wider">{VENDORS.find(v => v.id === data.vendorId)?.name}</span>
                    )}
                </div>
            </div>
            <MoreVertical className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors" />
        </div>
    );
}

function CanvasItemCard({ item, isSelected, onClick }: { item: CanvasItem, isSelected: boolean, onClick: () => void }) {
    const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
        id: item.id,
        data: { ...item, source: 'canvas' }
    });

    const style = {
        position: 'absolute' as const,
        top: item.y,
        left: item.x,
        opacity: isDragging ? 0 : 1,
    };

    const getIcon = () => {
        switch (item.entityType) {
            case 'product': return <Package className="w-4 h-4" />;
            case 'vendor': return <Layout className="w-4 h-4" />;
            case 'solution': return <Zap className="w-4 h-4" />;
            default: return <Info className="w-4 h-4" />;
        }
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            onClick={(e) => {
                e.stopPropagation();
                onClick();
            }}
            className={cn(
                "group p-4 w-60 rounded-2xl border bg-gray-900/80 backdrop-blur-xl shadow-2xl cursor-move transition-all duration-300 select-none",
                isSelected ? "border-blue-500 ring-2 ring-blue-500/20 scale-105 z-30" : "border-white/10 hover:border-white/30 hover:scale-[1.02] z-20"
            )}
        >
            <div className="flex items-start justify-between mb-3">
                <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center shadow-inner",
                    item.entityType === 'product' ? "bg-blue-500/20 text-blue-400" : "bg-purple-500/20 text-purple-400"
                )}>
                    {getIcon()}
                </div>
                <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" title="Active" />
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <h4 className="text-sm font-semibold text-white truncate">{item.data.label}</h4>
                <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">
                    {item.entityType === 'product' ? VENDORS.find(v => v.id === item.data.payload?.vendorId)?.name : 'Vendor Entity'}
                </p>
            </div>

            {isSelected && (
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-white/60">
                    <span className="flex items-center gap-1.5"><Settings className="w-3 h-3" /> Configured</span>
                    <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-medium">Standard</span>
                </div>
            )}
        </div>
    );
}

function SidebarSection({ title, children, defaultOpen = true }: { title: string, children: React.ReactNode, defaultOpen?: boolean }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="mb-2">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-2 text-xs font-bold text-white/40 uppercase tracking-tighter hover:text-white/70 transition-colors"
            >
                <span>{title}</span>
                {isOpen ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            </button>
            {isOpen && <div className="mt-2 space-y-2 px-1">{children}</div>}
        </div>
    );
}

// --- DROPPABLE CANVAS COMPONENT ---
// This MUST be a separate component inside DndContext for proper registration

interface DroppableCanvasProps {
    canvasRef: React.RefObject<HTMLDivElement | null>;
    items: CanvasItem[];
    selectedItemId: string | null;
    debugInfo: string;
    onSelectItem: (id: string | null) => void;
    onClearItems: () => void;
}

function DroppableCanvas({ canvasRef, items, selectedItemId, debugInfo, onSelectItem, onClearItems }: DroppableCanvasProps) {
    const { setNodeRef, isOver } = useDroppable({
        id: 'canvas-droppable',
    });



    return (
        <main
            ref={setNodeRef}
            className={cn(
                "flex-1 relative overflow-hidden bg-[radial-gradient(#333333_1px,transparent_1px)] [background-size:16px_16px] z-0 transition-colors duration-200",
                isOver && "bg-green-500/20"
            )}
        >
            <div
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            >
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] z-[1]"></div>

                {/* Status Bar */}
                <div className="absolute top-4 left-6 right-6 flex items-center justify-between z-10 pointer-events-none">
                    <div className="flex items-center gap-4">
                        <div className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Workspace Online</span>
                        </div>
                        <div className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                            <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">{items.length} Assets Mapped</span>
                        </div>
                        <div className="px-3 py-1.5 rounded-full bg-blue-500/10 backdrop-blur-md border border-blue-500/20">
                            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">{debugInfo}</span>
                        </div>
                        {isOver && (
                            <div className="px-3 py-1.5 rounded-full bg-green-500/20 backdrop-blur-md border border-green-500/50">
                                <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">DROP ZONE ACTIVE</span>
                            </div>
                        )}
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onClearItems();
                        }}
                        className="pointer-events-auto px-4 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold text-white/40 uppercase tracking-widest hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/50 transition-all"
                    >
                        Clear Workspace
                    </button>
                </div>

                {items.map((item) => (
                    <CanvasItemCard
                        key={item.id}
                        item={item}
                        isSelected={selectedItemId === item.id}
                        onClick={() => onSelectItem(item.id)}
                    />
                ))}

                {items.length === 0 && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <div className="w-32 h-32 mb-6 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center">
                            <Layout className="w-10 h-10 text-white/10" />
                        </div>
                        <h3 className="text-lg font-medium text-white/40 mb-2">Initialize Canvas</h3>
                        <p className="text-sm text-white/20">Drag components from the sidebar to begin designing</p>
                    </div>
                )}


            </div>
        </main>
    );
}

// --- MAIN BOARD ---

export function CanvasBoard() {
    const [items, setItems] = useState<CanvasItem[]>([]);
    const [activeDragData, setActiveDragData] = useState<any>(null);
    const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProposition, setSelectedProposition] = useState<PropositionType | 'all'>('all');
    const [mounted, setMounted] = useState(false);
    const [debugInfo, setDebugInfo] = useState<string>('Ready');

    const canvasRef = useRef<HTMLDivElement>(null);



    useEffect(() => {
        setMounted(true);
    }, []);

    const sensors = useSensors(
        useSensor(MouseSensor, { activationConstraint: { distance: 5 } }),
        useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 5 } })
    );

    // Prevent hydration mismatch by only rendering DndContext on the client
    if (!mounted) return (
        <div className="h-screen w-full bg-gray-950 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
        </div>
    );

    const handleDragStart = (event: DragStartEvent) => {
        setActiveDragData(event.active.data.current);
        setDebugInfo(`Dragging ${event.active.data.current?.label}...`);
    };

    const handleDragMove = (event: any) => {
        // Monitor drag moves if needed
        if (event.over) {
            console.log(`Dragging over: ${event.over.id}`);
        }
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        setActiveDragData(null);

        console.log('%c[DragEnd] Processing...', 'color: yellow; font-weight: bold;');
        console.log('  Active:', active.id, active.data.current);
        console.log('  Over:', over?.id, over?.data.current);
        console.log('  Rect:', active.rect.current.translated);

        const canvasRect = canvasRef.current?.getBoundingClientRect();
        console.log('  Canvas Rect:', canvasRect);

        if (!over) {
            console.error('❌ Dropped outside (over is null)');
            setDebugInfo('Dropped outside (over is null)');
            return;
        }

        if (over.id !== 'canvas-droppable') {
            console.error(`❌ Dropped on item '${over.id}', but expected 'canvas-droppable'`);
            setDebugInfo(`Dropped on wrong target: ${over.id}`);
            return;
        }

        const sourceData = active.data.current;
        if (!sourceData) {
            setDebugInfo('Error: No source data');
            return;
        }

        const droppedRect = active.rect.current.translated;

        if (sourceData.source === 'sidebar') {
            // Calculation logic
            const rawX = droppedRect ? (droppedRect.left - (canvasRect?.left ?? 0)) : 100;
            const rawY = droppedRect ? (droppedRect.top - (canvasRect?.top ?? 0)) : 100;

            const newItem: CanvasItem = {
                id: `item-${Date.now()}`,
                entityId: sourceData.entityId,
                entityType: sourceData.type,
                x: rawX,
                y: rawY,
                data: sourceData
            };
            setItems(prev => [...prev, newItem]);
            setSelectedItemId(newItem.id);
            setDebugInfo(`Added ${newItem.data.label}`);
        } else if (sourceData.source === 'canvas') {
            setItems(prev => prev.map(it => {
                if (it.id === active.id) {
                    const updated = {
                        ...it,
                        x: droppedRect ? (droppedRect.left - (canvasRect?.left ?? 0)) : it.x,
                        y: droppedRect ? (droppedRect.top - (canvasRect?.top ?? 0)) : it.y
                    };
                    setDebugInfo(`Moved ${it.data.label}`);
                    return updated;
                }
                return it;
            }));
        }
    };

    const filteredProducts = PRODUCTS.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesProp = selectedProposition === 'all' || p.propositionId === selectedProposition;
        return matchesSearch && matchesProp;
    });

    const selectedItem = items.find(it => it.id === selectedItemId);

    return (
        <DndContext
            id="qanvas-dnd-root"
            sensors={sensors}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            collisionDetection={closestCenter}
        >
            <div className="flex h-screen w-full overflow-hidden bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
                {/* Sidebar */}
                <aside className="w-80 border-r border-gray-800 bg-gray-950/50 backdrop-blur-xl flex flex-col z-20">
                    {/* Sidebar Content Inlined */}
                    <div className="flex flex-col h-full bg-gray-950/80 backdrop-blur-3xl">
                        <div className="p-6 border-b border-white/5">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                                    <Package className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-white tracking-tight">Qanvas</h1>
                                    <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium">Architecture Engine</p>
                                </div>
                            </div>

                            <div className="relative group">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-blue-500 transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Search assets..."
                                    className="w-full bg-white/5 border border-white/5 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:bg-white/[0.08] transition-all"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                            <div className="flex flex-wrap gap-2 mb-6">
                                <button
                                    onClick={() => setSelectedProposition('all')}
                                    className={cn(
                                        "px-3 py-1.5 rounded-full text-xs font-medium transition-all",
                                        selectedProposition === 'all' ? "bg-white text-black" : "bg-white/5 text-white/40 hover:bg-white/10"
                                    )}
                                >
                                    All
                                </button>
                                {PROPOSITIONS.map(prop => (
                                    <button
                                        key={prop.id}
                                        onClick={() => setSelectedProposition(prop.id)}
                                        className={cn(
                                            "px-3 py-1.5 rounded-full text-xs font-medium transition-all",
                                            selectedProposition === prop.id ? "bg-blue-500 text-white" : "bg-white/5 text-white/40 hover:bg-white/10"
                                        )}
                                    >
                                        {prop.label}
                                    </button>
                                ))}
                            </div>

                            <SidebarSection title="Products Palette">
                                {filteredProducts.map(prod => (
                                    <DraggableSidebarItem
                                        key={prod.id}
                                        id={prod.id}
                                        type="product"
                                        label={prod.name}
                                        data={prod}
                                    />
                                ))}
                                {filteredProducts.length === 0 && (
                                    <div className="p-8 text-center border-2 border-dashed border-white/5 rounded-2xl">
                                        <p className="text-xs text-white/20">No products found</p>
                                    </div>
                                )}
                            </SidebarSection>

                            <SidebarSection title="Pre-defined Solutions" defaultOpen={false}>
                                {SOLUTIONS.map(sol => (
                                    <DraggableSidebarItem
                                        key={sol.id}
                                        id={sol.id}
                                        type="solution"
                                        label={sol.name}
                                        data={sol}
                                    />
                                ))}
                            </SidebarSection>

                            <SidebarSection title="Vendors" defaultOpen={false}>
                                {VENDORS.map(v => (
                                    <DraggableSidebarItem
                                        key={v.id}
                                        id={v.id}
                                        type="vendor"
                                        label={v.name}
                                        data={v}
                                    />
                                ))}
                            </SidebarSection>
                        </div>
                    </div>
                </aside>

                {/* Main Canvas Area - DROPPABLE TARGET IS HERE */}
                <DroppableCanvas
                    canvasRef={canvasRef}
                    items={items}
                    selectedItemId={selectedItemId}
                    debugInfo={debugInfo}
                    onSelectItem={setSelectedItemId}
                    onClearItems={() => {
                        setItems([]);
                        setSelectedItemId(null);
                    }}
                />

                {/* Properties Panel */}
                <aside className="w-96 border-l border-gray-800 bg-gray-950/50 backdrop-blur-xl flex flex-col z-20">
                    <div className="flex flex-col h-full bg-gray-950/80 backdrop-blur-3xl">
                        <div className="p-6 border-b border-white/5 flex items-center justify-between">
                            <h2 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                                <Settings className="w-4 h-4 text-blue-500" /> Inspector
                            </h2>
                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                <MoreVertical className="w-4 h-4 text-white/30" />
                            </div>
                        </div>

                        {selectedItem ? (
                            <div className="p-6 space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                        {selectedItem.entityType === 'product' ? <Package className="w-8 h-8 text-blue-500" /> : <Layout className="w-8 h-8 text-purple-500" />}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">{selectedItem.data.label}</h3>
                                        <p className="text-xs text-white/40">{selectedItem.entityType.toUpperCase()}</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                        <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest block mb-2">Hierarchy</label>
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs text-white/60">Vendor</span>
                                                <span className="text-xs font-medium text-white">
                                                    {selectedItem.entityType === 'product' ? VENDORS.find(v => v.id === selectedItem.data.payload?.vendorId)?.name : 'N/A'}
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs text-white/60">Proposition</span>
                                                <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 text-[10px] font-bold uppercase">
                                                    {selectedItem.entityType === 'product' ? PROPOSITIONS.find(p => p.id === selectedItem.data.payload?.propositionId)?.label : 'Standard'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                        <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest block mb-2">Specifications</label>
                                        <div className="text-xs text-white/60 leading-relaxed italic">
                                            Detailed technical specifications and metrics will appear here based on the selected entity profile.
                                        </div>
                                    </div>
                                </div>

                                <button className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors shadow-lg shadow-blue-600/20">
                                    Configure Detailed Design
                                </button>
                            </div>
                        ) : (
                            <div className="flex-1 flex flex-col items-center justify-center p-10 text-center">
                                <div className="w-20 h-20 rounded-full bg-white/[0.02] flex items-center justify-center mb-6">
                                    <Search className="w-8 h-8 text-white/10" />
                                </div>
                                <h3 className="text-white/60 font-medium mb-2">No Asset Selected</h3>
                                <p className="text-xs text-white/20 leading-relaxed">
                                    Select an asset on the canvas to view its configuration, hierarchy, and metrics.
                                </p>
                            </div>
                        )}
                    </div>
                </aside>
            </div>

            {mounted && createPortal(
                <DragOverlay dropAnimation={null}>
                    {activeDragData ? (
                        <div className="p-4 w-60 rounded-2xl border border-blue-500 bg-gray-900 shadow-2xl scale-105 opacity-90 z-[100] cursor-grabbing pointer-events-none">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                                    {activeDragData.type === 'product' ? <Package className="w-5 h-5" /> : <Layout className="w-5 h-5" />}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold text-white">{activeDragData.label}</span>
                                    <span className="text-[10px] text-white/40 uppercase tracking-widest">Dropping...</span>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </DragOverlay>,
                document.body
            )}
        </DndContext>
    );
}

