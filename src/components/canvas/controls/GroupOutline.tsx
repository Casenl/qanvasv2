import { CanvasItem } from '@/lib/types';

interface GroupOutlineProps {
    items: CanvasItem[];
    groupId: string;
}

export function GroupOutline({ items, groupId }: GroupOutlineProps) {
    const groupItems = items.filter(item => item.groupId === groupId);

    if (groupItems.length === 0) return null;

    // Calculate bounding box
    const minX = Math.min(...groupItems.map(item => item.x));
    const minY = Math.min(...groupItems.map(item => item.y));
    const maxX = Math.max(...groupItems.map(item => item.x + 240)); // 240 = item width
    const maxY = Math.max(...groupItems.map(item => item.y + 120)); // 120 = approximate item height

    const padding = 10;

    return (
        <div
            className="absolute pointer-events-none rounded-3xl border-2 border-dashed transition-all duration-200"
            style={{
                left: minX - padding,
                top: minY - padding,
                width: maxX - minX + padding * 2,
                height: maxY - minY + padding * 2,
                borderColor: 'var(--color-secondary)',
                backgroundColor: 'var(--color-secondary)',
                opacity: 0.1,
                zIndex: 1
            }}
        >
            {/* Group label */}
            <div
                className="absolute -top-6 left-2 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider"
                style={{
                    backgroundColor: 'var(--color-secondary)',
                    color: 'var(--color-background)',
                    opacity: 0.8
                }}
            >
                Group ({groupItems.length} items)
            </div>
        </div>
    );
}
