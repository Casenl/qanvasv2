import { useState, useCallback } from 'react';
import { CanvasItem } from '@/lib/types';
import { CanvasConfiguration } from '@/lib/types/canvasConfig';
import { CanvasSnapshot, createSnapshot, compareSnapshots, SnapshotComparison } from '@/lib/types/snapshot';

interface UseSnapshotManagerProps {
    items: CanvasItem[];
    canvasConfig: CanvasConfiguration;
    setItems: (items: CanvasItem[]) => void;
    setCanvasConfig: (config: CanvasConfiguration) => void;
    setDebugInfo: (info: string) => void;
}

interface ComparisonData {
    comparison: SnapshotComparison;
    fromName: string;
    toName: string;
}

/**
 * useSnapshotManager - Manages canvas snapshots
 * 
 * Provides snapshot functionality including:
 * - Creating snapshots of current canvas state
 * - Loading snapshots to restore canvas state
 * - Deleting snapshots
 * - Comparing two snapshots to see differences
 * 
 * @param props - Configuration object
 * @returns Snapshot manager interface
 */
export function useSnapshotManager({
    items,
    canvasConfig,
    setItems,
    setCanvasConfig,
    setDebugInfo
}: UseSnapshotManagerProps) {
    const [snapshots, setSnapshots] = useState<CanvasSnapshot[]>([]);
    const [currentSnapshotId, setCurrentSnapshotId] = useState<string | undefined>();
    const [showComparison, setShowComparison] = useState(false);
    const [comparisonData, setComparisonData] = useState<ComparisonData | null>(null);
    const [showCreateDialog, setShowCreateDialog] = useState(false);

    const handleCreateSnapshot = useCallback((name: string, description?: string) => {
        const snapshot = createSnapshot(name, items, canvasConfig, description);
        setSnapshots(prev => [...prev, snapshot]);
        setCurrentSnapshotId(snapshot.id);
        setDebugInfo(`Created snapshot: ${name}`);
        console.log('📸 Snapshot created:', snapshot);
    }, [items, canvasConfig, setDebugInfo]);

    const handleLoadSnapshot = useCallback((snapshotId: string) => {
        const snapshot = snapshots.find(s => s.id === snapshotId);
        if (!snapshot) {
            console.error('Snapshot not found:', snapshotId);
            return;
        }

        setItems(snapshot.items);
        setCanvasConfig(snapshot.canvasConfig);
        setCurrentSnapshotId(snapshotId);
        setDebugInfo(`Loaded snapshot: ${snapshot.name}`);
        console.log('📂 Snapshot loaded:', snapshot);
    }, [snapshots, setItems, setCanvasConfig, setDebugInfo]);

    const handleDeleteSnapshot = useCallback((snapshotId: string) => {
        setSnapshots(prev => prev.filter(s => s.id !== snapshotId));
        if (currentSnapshotId === snapshotId) {
            setCurrentSnapshotId(undefined);
        }
        setDebugInfo(`Deleted snapshot`);
        console.log('🗑️ Snapshot deleted:', snapshotId);
    }, [currentSnapshotId, setDebugInfo]);

    const handleCompareSnapshots = useCallback((fromId: string, toId: string) => {
        const from = snapshots.find(s => s.id === fromId);
        const to = snapshots.find(s => s.id === toId);

        if (!from || !to) {
            console.error('Snapshots not found for comparison');
            return;
        }

        const comparison = compareSnapshots(from, to);
        setComparisonData({
            comparison,
            fromName: from.name,
            toName: to.name
        });
        setShowComparison(true);
        console.log('🔍 Comparing snapshots:', { from: from.name, to: to.name, comparison });
    }, [snapshots]);

    const handleQuickSnapshot = useCallback(() => {
        handleCreateSnapshot(`Snapshot ${new Date().toLocaleTimeString()}`);
    }, [handleCreateSnapshot]);

    const handleCompareWithCurrent = useCallback((targetId: string) => {
        if (currentSnapshotId) {
            handleCompareSnapshots(currentSnapshotId, targetId);
        }
    }, [currentSnapshotId, handleCompareSnapshots]);

    const closeComparison = useCallback(() => {
        setShowComparison(false);
    }, []);

    const openCreateDialog = useCallback(() => {
        setShowCreateDialog(true);
    }, []);

    const closeCreateDialog = useCallback(() => {
        setShowCreateDialog(false);
    }, []);

    return {
        snapshots,
        currentSnapshotId,
        showComparison,
        comparisonData,
        showCreateDialog,
        createSnapshot: handleCreateSnapshot,
        loadSnapshot: handleLoadSnapshot,
        deleteSnapshot: handleDeleteSnapshot,
        compareSnapshots: handleCompareSnapshots,
        quickSnapshot: handleQuickSnapshot,
        compareWithCurrent: handleCompareWithCurrent,
        closeComparison,
        openCreateDialog,
        closeCreateDialog
    };
}
