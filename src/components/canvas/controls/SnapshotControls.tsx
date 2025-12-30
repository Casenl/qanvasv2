import React, { useState } from 'react';
import { Camera, ChevronDown, Plus, GitCompare, History, Trash2, X } from 'lucide-react';
import { CanvasSnapshot } from '@/lib/types/snapshot';

interface SnapshotControlsProps {
    snapshots: CanvasSnapshot[];
    currentSnapshotId: string | null;
    onCreate: () => void;
    onLoad: (id: string) => void;
    onDelete: (id: string) => void;
    onCompare: (id: string) => void;
}

export function SnapshotControls({
    snapshots,
    currentSnapshotId,
    onCreate,
    onLoad,
    onDelete,
    onCompare
}: SnapshotControlsProps) {
    const [isOpen, setIsOpen] = useState(false);

    const currentSnapshot = snapshots.find(s => s.id === currentSnapshotId);

    return (
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
                            className="absolute top-full right-0 mt-2 w-64 rounded-xl border shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
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

                            <div className="max-h-64 overflow-y-auto py-1">
                                {snapshots.length === 0 ? (
                                    <div className="px-4 py-3 text-sm text-center italic" style={{ color: 'var(--color-text-secondary)' }}>
                                        No snapshots yet
                                    </div>
                                ) : (
                                    snapshots.map((snapshot) => (
                                        <div
                                            key={snapshot.id}
                                            className={`
                                                group flex items-center justify-between px-3 py-2 cursor-pointer
                                                ${currentSnapshotId === snapshot.id ? 'bg-purple-50 dark:bg-purple-900/20' : 'hover:bg-black/5 dark:hover:bg-white/5'}
                                            `}
                                        >
                                            <div
                                                className="flex flex-col flex-1 min-w-0"
                                                onClick={() => {
                                                    onLoad(snapshot.id);
                                                    setIsOpen(false);
                                                }}
                                            >
                                                <span className="text-sm font-medium truncate" style={{ color: 'var(--color-text)' }}>
                                                    {snapshot.name}
                                                </span>
                                                <span className="text-[10px] truncate" style={{ color: 'var(--color-text-secondary)' }}>
                                                    {new Date(snapshot.timestamp).toLocaleString()}
                                                </span>
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
                                    ))
                                )}
                            </div>
                        </div>
                    )}
                </div>

                <div className="w-px h-6 mx-1" style={{ backgroundColor: 'var(--color-border)' }} />

                {/* Create Button */}
                <button
                    onClick={onCreate}
                    title="Create New Snapshot"
                    className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                    <Plus className="w-4 h-4" style={{ color: 'var(--color-text)' }} />
                </button>
            </div>
        </div>
    );
}
