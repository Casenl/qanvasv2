import { useDraggable } from '@dnd-kit/core';
import { Package, Layout, Zap, MoreVertical } from 'lucide-react';
import { cn } from '@/lib/utils';
import { EntityType } from '@/lib/types';

interface DraggableSidebarItemProps {
    id: string;
    type: EntityType;
    label: string;
    data: any;
    vendorName?: string;
}

export function DraggableSidebarItem({ id, type, label, data, vendorName }: DraggableSidebarItemProps) {
    const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
        id: `sidebar-${id}`,
        data: { type, label, entityId: id, source: 'sidebar', payload: data }
    });

    const getIcon = () => {
        switch (type) {
            case 'product': return <Package className="w-4 h-4" />;
            case 'vendor': return <Layout className="w-4 h-4" />;
            case 'solution': return <Zap className="w-4 h-4" />;
            default: return <Package className="w-4 h-4" />;
        }
    };

    const getIconClasses = () => {
        // Use Tailwind classes for proper color rendering
        switch (type) {
            case 'product': return 'bg-blue-500/20 text-blue-500';
            case 'vendor': return 'bg-purple-500/20 text-purple-500';
            case 'solution': return 'bg-emerald-500/20 text-emerald-500';
            default: return 'bg-gray-500/20 text-gray-500';
        }
    };

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            className={cn(
                "group flex items-center justify-between p-3 rounded-xl border cursor-grab active:cursor-grabbing transition-all duration-200",
                isDragging && "opacity-40 grayscale scale-95"
            )}
            style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-background-secondary)'
            }}
        >
            <div className="flex items-center gap-3">
                <div
                    className={cn("w-8 h-8 rounded-lg flex items-center justify-center", getIconClasses())}
                >
                    {getIcon()}
                </div>
                <div className="flex flex-col">
                    <span
                        className="text-sm font-medium"
                        style={{ color: 'var(--color-text)' }}
                    >
                        {label}
                    </span>
                    {vendorName && (
                        <span
                            className="text-[10px] uppercase tracking-wider"
                            style={{ color: 'var(--color-text-muted)' }}
                        >
                            {vendorName}
                        </span>
                    )}
                </div>
            </div>
            <MoreVertical
                className="w-4 h-4 transition-colors"
                style={{ color: 'var(--color-text-muted)' }}
            />
        </div>
    );
}
