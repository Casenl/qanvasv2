import { useState, useCallback } from 'react';
import { Copy, Trash2, Users, Lock, Unlock, Ungroup } from 'lucide-react';
import { CanvasItem } from '@/lib/types';
import { ContextMenuAction } from '@/components/canvas/controls/ContextMenu';

interface UseContextMenuProps {
    items: CanvasItem[];
    setItems: (updater: (prev: CanvasItem[]) => CanvasItem[]) => void;
    selectedIds: Set<string>;
    clearSelection: () => void;
    setDebugInfo: (info: string) => void;
    clipboardCopy: () => void;
}

interface ContextMenuState {
    x: number;
    y: number;
    visible: boolean;
}

/**
 * useContextMenu - Manages context menu state and actions
 * 
 * Provides context menu functionality including:
 * - Context menu positioning and visibility
 * - Actions: duplicate, copy, group/ungroup, lock/unlock, delete
 * 
 * @param props - Configuration object
 * @returns Context menu state and handlers
 */
export function useContextMenu({
    items,
    setItems,
    selectedIds,
    clearSelection,
    setDebugInfo,
    clipboardCopy
}: UseContextMenuProps) {
    const [contextMenu, setContextMenu] = useState<ContextMenuState>({
        x: 0,
        y: 0,
        visible: false
    });

    const handleContextMenu = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        setContextMenu({ x: e.clientX, y: e.clientY, visible: true });
    }, []);

    const closeContextMenu = useCallback(() => {
        setContextMenu(prev => ({ ...prev, visible: false }));
    }, []);

    // Duplicate action
    const handleDuplicate = useCallback(() => {
        const selected = Array.from(selectedIds);
        if (selected.length > 0) {
            const newItems = items
                .filter(item => selected.includes(item.id))
                .map(item => ({
                    ...item,
                    id: `item-${Date.now()}-${Math.random()}`,
                    x: item.x + 20,
                    y: item.y + 20
                }));
            setItems(prev => [...prev, ...newItems]);
            setDebugInfo(`Duplicated ${selected.length} item(s)`);
        }
    }, [items, selectedIds, setItems, setDebugInfo]);

    // Group/Ungroup action
    const handleGroupToggle = useCallback(() => {
        const selected = Array.from(selectedIds);
        if (selected.length < 2) return;

        const selectedItems = items.filter(item => selected.includes(item.id));
        const allGrouped = selectedItems.every(it => it.groupId);

        if (allGrouped) {
            // Ungroup
            setItems(prev => prev.map(item =>
                selected.includes(item.id) ? { ...item, groupId: undefined } : item
            ));
            setDebugInfo(`Ungrouped ${selected.length} items`);
        } else {
            // Group
            const groupId = `group-${Date.now()}`;
            setItems(prev => prev.map(item =>
                selected.includes(item.id) ? { ...item, groupId } : item
            ));
            setDebugInfo(`Grouped ${selected.length} items`);
        }
    }, [items, selectedIds, setItems, setDebugInfo]);

    // Lock/Unlock action
    const handleLockToggle = useCallback(() => {
        const selected = Array.from(selectedIds);
        if (selected.length === 0) return;

        const selectedItems = items.filter(item => selected.includes(item.id));
        const allLocked = selectedItems.every(it => it.locked);

        setItems(prev => prev.map(item =>
            selected.includes(item.id) ? { ...item, locked: !allLocked } : item
        ));
        setDebugInfo(`${allLocked ? 'Unlocked' : 'Locked'} ${selected.length} item(s)`);
    }, [items, selectedIds, setItems, setDebugInfo]);

    // Delete action
    const handleDelete = useCallback(() => {
        const selected = Array.from(selectedIds);
        if (selected.length > 0) {
            setItems(prev => prev.filter(item => !selected.includes(item.id)));
            clearSelection();
        }
    }, [selectedIds, setItems, clearSelection]);

    // Build context menu actions array
    const contextMenuActions: ContextMenuAction[] = [
        {
            id: 'duplicate',
            label: 'Duplicate',
            icon: <Copy className="w-4 h-4" />,
            action: handleDuplicate,
            shortcut: 'Ctrl+D'
        },
        {
            id: 'copy',
            label: 'Copy',
            icon: <Copy className="w-4 h-4" />,
            action: clipboardCopy,
            shortcut: 'Ctrl+C'
        },
        {
            id: 'group',
            label: selectedIds.size > 1 && items.filter(it => selectedIds.has(it.id)).every(it => it.groupId) ? 'Ungroup' : 'Group',
            icon: selectedIds.size > 1 && items.filter(it => selectedIds.has(it.id)).every(it => it.groupId) ? <Ungroup className="w-4 h-4" /> : <Users className="w-4 h-4" />,
            action: handleGroupToggle,
            disabled: selectedIds.size < 2
        },
        {
            id: 'lock',
            label: selectedIds.size > 0 && items.filter(it => selectedIds.has(it.id)).every(it => it.locked) ? 'Unlock' : 'Lock',
            icon: selectedIds.size > 0 && items.filter(it => selectedIds.has(it.id)).every(it => it.locked) ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />,
            action: handleLockToggle
        },
        {
            id: 'delete',
            label: 'Delete',
            icon: <Trash2 className="w-4 h-4" />,
            action: handleDelete,
            shortcut: 'Del',
            danger: true
        }
    ];

    return {
        contextMenu,
        handleContextMenu,
        closeContextMenu,
        contextMenuActions
    };
}
