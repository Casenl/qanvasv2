import React, { useState } from 'react';
import { Camera, ChevronDown, Plus, GitCompare, Trash2, X, Clock } from 'lucide-react';
import { CanvasSnapshot, getSnapshotSummary } from '@/lib/types/snapshot';

interface SnapshotControlsProps {
    snapshots: CanvasSnapshot[];
    currentSnapshotId: string | null;
    showCreateDialog: boolean;
    onCreateSnapshot: (name: string, description?: string) => void;
    onLoad: (id: string) => void;
    onDelete: (id: string) => void;
    onCompare: (id: string) => void;
    onOpenCreateDialog: () => void;
    onCloseCreateDialog: () => void;
}

export function SnapshotControls({
    snapshots,
    currentSnapshotId,
    showCreateDialog,
    onCreateSnapshot,
    onLoad,
    onDelete,
    onCompare,
    onOpenCreateDialog,
    onCloseCreateDialog
}: SnapshotControlsProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [newSnapshotName, setNewSnapshotName] = useState('');
    const [newSnapshotDescription, setNewSnapshotDescription] = useState('');

    const currentSnapshot = snapshots.find(s => s.id === currentSnapshotId);

    const handleCreate = () => {
        if (!newSnapshotName.trim()) return;

        onCreateSnapshot(newSnapshotName, newSnapshotDescription || undefined);
        setNewSnapshotName('');
        setNewSnapshotDescription('');
        onCloseCreateDialog();
    };

    const formatDate = (date: Date) => {
        return new Date(date).toLocaleString('nl-NL', {
            day: '2-digit',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <>
            <div className="absolute top-6 right-6 z-50 flex items-center gap-2 pointer-events-auto">
                {/* Main Control Group */}
                <div
                    className="flex items-center p-1 rounded-xl border shadow-lg backdrop-blur-xl transition-all"
                    style={{
                        backgroundColor: 'var(--color-surface)',
                        borderColor: 'var(--color-border)',
                    }}
                >
                    {/* Snapshot Selector / Display */}
                    <div className="relative">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                        >
                            <Camera className="w-4 h-4 text-purple-500" />
                            <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                                {currentSnapshot ? currentSnapshot.name : 'No Snapshot'}
                            </span>
                            <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} style={{ color: 'var(--color-text-secondary)' }} />
                        </button>

                        {/* Dropdown Menu */}
                        {isOpen && (
                            <div
                                className="absolute top-full right-0 mt-2 w-80 rounded-xl border shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
                                style={{
                                    backgroundColor: 'var(--color-surface)',
                                    borderColor: 'var(--color-border)',
                                }}
                            >
                                <div className="p-2 border-b" style={{ borderColor: 'var(--color-border)' }}>
                                    <span className="text-xs font-medium px-2 py-1 block" style={{ color: 'var(--color-text-secondary)' }}>
                                        Saved Snapshots
                                    </span>
                                </div>

                                <div className="max-h-96 overflow-y-auto py-1">
                                    {snapshots.length === 0 ? (
                                        <div className="px-4 py-8 text-center">
                                            <Camera className="w-12 h-12 mx-auto mb-3" style={{ color: 'var(--color-text-muted)' }} />
                                            <p className="text-sm font-medium mb-1" style={{ color: 'var(--color-text)' }}>
                                                No snapshots yet
                                            </p>
                                            <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                                                Create a snapshot to save the current canvas state
                                            </p>
                                        </div>
                                    ) : (
                                        snapshots.map((snapshot) => {
                                            const summary = getSnapshotSummary(snapshot);
                                            const isCurrent = snapshot.id === currentSnapshotId;

                                            return (
                                                <div
                                                    key={snapshot.id}
                                                    className={`
                                                        group px-3 py-2 cursor-pointer transition-colors
                                                        ${isCurrent ? 'bg-purple-50 dark:bg-purple-900/20' : 'hover:bg-black/5 dark:hover:bg-white/5'}
                                                    `}
                                                >
                                                    <div
                                                        className="flex flex-col flex-1 min-w-0 mb-2"
                                                        onClick={() => {
                                                            onLoad(snapshot.id);
                                                            setIsOpen(false);
                                                        }}
                                                    >
                                                        <div className="flex items-center justify-between mb-1">
                                                            <span className="text-sm font-semibold truncate" style={{ color: 'var(--color-text)' }}>
                                                                {snapshot.name}
                                                            </span>
                                                            {isCurrent && (
                                                                <span
                                                                    className="px-2 py-0.5 rounded text-[10px] font-medium ml-2"
                                                                    style={{
                                                                        backgroundColor: 'var(--color-primary)',
                                                                        color: 'white'
                                                                    }}
                                                                >
                                                                    Current
                                                                </span>
                                                            )}
                                                        </div>
                                                        <div className="flex items-center gap-1 text-[10px] mb-1" style={{ color: 'var(--color-text-muted)' }}>
                                                            <Clock className="w-3 h-3" />
                                                            <span>{formatDate(snapshot.timestamp)}</span>
                                                        </div>
                                                        {snapshot.description && (
                                                            <p className="text-xs mb-1" style={{ color: 'var(--color-text-secondary)' }}>
                                                                {snapshot.description}
                                                            </p>
                                                        )}
                                                        <div className="flex gap-3 text-[10px]" style={{ color: 'var(--color-text-muted)' }}>
                                                            <span>📦 {summary.productCount}</span>
                                                            <span>📊 {summary.metricsCount}</span>
                                                            <span>⚙️ {summary.configuredMetrics}</span>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                onCompare(snapshot.id);
                                                                setIsOpen(false);
                                                            }}
                                                            title="Compare with current"
                                                            className="p-1.5 rounded-md hover:bg-black/10 dark:hover:bg-white/10"
                                                        >
                                                            <GitCompare className="w-3.5 h-3.5 text-blue-500" />
                                                        </button>
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                onDelete(snapshot.id);
                                                            }}
                                                            title="Delete"
                                                            className="p-1.5 rounded-md hover:bg-black/10 dark:hover:bg-white/10"
                                                        >
                                                            <Trash2 className="w-3.5 h-3.5 text-red-500" />
                                                        </button>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="w-px h-6 mx-1" style={{ backgroundColor: 'var(--color-border)' }} />

                    {/* Create Button */}
                    <button
                        onClick={onOpenCreateDialog}
                        title="Create New Snapshot"
                        className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                    >
                        <Plus className="w-4 h-4" style={{ color: 'var(--color-text)' }} />
                    </button>
                </div>
            </div>

            {/* Create Dialog */}
            {showCreateDialog && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-[100]"
                    style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                    onClick={onCloseCreateDialog}
                >
                    <div
                        className="w-full max-w-md p-6 rounded-xl shadow-2xl"
                        style={{ backgroundColor: 'var(--color-surface)' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3
                                className="text-lg font-bold"
                                style={{ color: 'var(--color-text)' }}
                            >
                                Create Snapshot
                            </h3>
                            <button
                                onClick={onCloseCreateDialog}
                                className="p-1 rounded"
                                style={{ color: 'var(--color-text-muted)' }}
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label
                                    className="block text-sm font-medium mb-2"
                                    style={{ color: 'var(--color-text)' }}
                                >
                                    Snapshot Name *
                                </label>
                                <input
                                    type="text"
                                    value={newSnapshotName}
                                    onChange={(e) => setNewSnapshotName(e.target.value)}
                                    placeholder="e.g., Phase 1 - Initial Design"
                                    className="w-full px-3 py-2 rounded-lg"
                                    style={{
                                        backgroundColor: 'var(--color-background)',
                                        borderColor: 'var(--color-border)',
                                        border: '1px solid',
                                        color: 'var(--color-text)'
                                    }}
                                    autoFocus
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && newSnapshotName.trim()) {
                                            handleCreate();
                                        }
                                    }}
                                />
                            </div>

                            <div>
                                <label
                                    className="block text-sm font-medium mb-2"
                                    style={{ color: 'var(--color-text)' }}
                                >
                                    Description (Optional)
                                </label>
                                <textarea
                                    value={newSnapshotDescription}
                                    onChange={(e) => setNewSnapshotDescription(e.target.value)}
                                    placeholder="Describe this phase..."
                                    rows={3}
                                    className="w-full px-3 py-2 rounded-lg resize-none"
                                    style={{
                                        backgroundColor: 'var(--color-background)',
                                        borderColor: 'var(--color-border)',
                                        border: '1px solid',
                                        color: 'var(--color-text)'
                                    }}
                                />
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={onCloseCreateDialog}
                                    className="flex-1 py-2 rounded-lg text-sm font-medium"
                                    style={{
                                        backgroundColor: 'var(--color-background)',
                                        borderColor: 'var(--color-border)',
                                        border: '1px solid',
                                        color: 'var(--color-text)'
                                    }}
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleCreate}
                                    disabled={!newSnapshotName.trim()}
                                    className="flex-1 py-2 rounded-lg text-sm font-medium"
                                    style={{
                                        backgroundColor: newSnapshotName.trim() ? 'var(--color-primary)' : 'var(--color-background-secondary)',
                                        color: 'white',
                                        opacity: newSnapshotName.trim() ? 1 : 0.5,
                                        cursor: newSnapshotName.trim() ? 'pointer' : 'not-allowed'
                                    }}
                                >
                                    Create Snapshot
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
