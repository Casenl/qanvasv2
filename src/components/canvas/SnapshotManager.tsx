'use client';

import React, { useState } from 'react';
import { Camera, Clock, GitCompare, Trash2, Eye, Plus, X } from 'lucide-react';
import { CanvasSnapshot, getSnapshotSummary } from '@/lib/types/snapshot';

interface SnapshotManagerProps {
    snapshots: CanvasSnapshot[];
    currentSnapshotId?: string;
    onCreateSnapshot: (name: string, description?: string) => void;
    onLoadSnapshot: (snapshotId: string) => void;
    onDeleteSnapshot: (snapshotId: string) => void;
    onCompareSnapshots: (fromId: string, toId: string) => void;
}

export function SnapshotManager({
    snapshots,
    currentSnapshotId,
    onCreateSnapshot,
    onLoadSnapshot,
    onDeleteSnapshot,
    onCompareSnapshots
}: SnapshotManagerProps) {
    const [showCreateDialog, setShowCreateDialog] = useState(false);
    const [newSnapshotName, setNewSnapshotName] = useState('');
    const [newSnapshotDescription, setNewSnapshotDescription] = useState('');
    const [compareMode, setCompareMode] = useState(false);
    const [compareFromId, setCompareFromId] = useState<string | null>(null);

    const handleCreate = () => {
        if (!newSnapshotName.trim()) return;

        onCreateSnapshot(newSnapshotName, newSnapshotDescription || undefined);
        setNewSnapshotName('');
        setNewSnapshotDescription('');
        setShowCreateDialog(false);
    };

    const handleCompareSelect = (snapshotId: string) => {
        if (!compareFromId) {
            setCompareFromId(snapshotId);
        } else {
            onCompareSnapshots(compareFromId, snapshotId);
            setCompareMode(false);
            setCompareFromId(null);
        }
    };

    const formatDate = (date: Date) => {
        return new Date(date).toLocaleString('nl-NL', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="h-full flex flex-col">
            {/* Header */}
            <div
                className="px-4 py-3 flex items-center justify-between"
                style={{ borderBottom: '1px solid var(--color-border)' }}
            >
                <div className="flex items-center gap-3">
                    <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{
                            backgroundColor: 'var(--color-primary)',
                            opacity: 0.1
                        }}
                    >
                        <Camera
                            className="w-4 h-4"
                            style={{ color: 'var(--color-primary)' }}
                        />
                    </div>
                    <div>
                        <h3
                            className="text-sm font-bold"
                            style={{ color: 'var(--color-text)' }}
                        >
                            Snapshots
                        </h3>
                        <p
                            className="text-xs"
                            style={{ color: 'var(--color-text-muted)' }}
                        >
                            {snapshots.length} saved phases
                        </p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                    <button
                        onClick={() => setCompareMode(!compareMode)}
                        className="p-2 rounded transition-colors"
                        style={{
                            backgroundColor: compareMode ? 'var(--color-primary)' : 'var(--color-background)',
                            color: compareMode ? 'white' : 'var(--color-text-muted)'
                        }}
                        title="Compare snapshots"
                    >
                        <GitCompare className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => setShowCreateDialog(true)}
                        className="p-2 rounded transition-colors"
                        style={{
                            backgroundColor: 'var(--color-primary)',
                            color: 'white'
                        }}
                        title="Create snapshot"
                    >
                        <Plus className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Compare Mode Banner */}
            {compareMode && (
                <div
                    className="px-4 py-2 text-xs"
                    style={{
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        opacity: 0.9
                    }}
                >
                    {compareFromId
                        ? '📊 Select second snapshot to compare'
                        : '📊 Select first snapshot to compare'
                    }
                    <button
                        onClick={() => {
                            setCompareMode(false);
                            setCompareFromId(null);
                        }}
                        className="ml-2 underline"
                    >
                        Cancel
                    </button>
                </div>
            )}

            {/* Snapshots List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {snapshots.length === 0 ? (
                    <div
                        className="p-8 text-center rounded-lg"
                        style={{
                            backgroundColor: 'var(--color-background)',
                            borderColor: 'var(--color-border)',
                            border: '1px dashed'
                        }}
                    >
                        <Camera
                            className="w-12 h-12 mx-auto mb-3"
                            style={{ color: 'var(--color-text-muted)' }}
                        />
                        <p
                            className="text-sm font-medium mb-1"
                            style={{ color: 'var(--color-text)' }}
                        >
                            No snapshots yet
                        </p>
                        <p
                            className="text-xs"
                            style={{ color: 'var(--color-text-muted)' }}
                        >
                            Create a snapshot to save the current canvas state
                        </p>
                    </div>
                ) : (
                    snapshots.map(snapshot => {
                        const summary = getSnapshotSummary(snapshot);
                        const isCurrent = snapshot.id === currentSnapshotId;
                        const isCompareSelected = compareFromId === snapshot.id;

                        return (
                            <div
                                key={snapshot.id}
                                className="p-3 rounded-lg transition-all"
                                style={{
                                    backgroundColor: isCompareSelected
                                        ? 'var(--color-primary)'
                                        : isCurrent
                                            ? 'var(--color-background-secondary)'
                                            : 'var(--color-background)',
                                    borderColor: isCurrent ? 'var(--color-primary)' : 'var(--color-border)',
                                    borderStyle: 'solid',
                                    borderWidth: '1px',
                                    borderLeftWidth: isCurrent ? '3px' : '1px',
                                    color: isCompareSelected ? 'white' : 'inherit',
                                    cursor: compareMode ? 'pointer' : 'default'
                                }}
                                onClick={() => compareMode && handleCompareSelect(snapshot.id)}
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4
                                                className="text-sm font-semibold"
                                                style={{ color: isCompareSelected ? 'white' : 'var(--color-text)' }}
                                            >
                                                {snapshot.name}
                                            </h4>
                                            {isCurrent && (
                                                <span
                                                    className="px-2 py-0.5 rounded text-xs font-medium"
                                                    style={{
                                                        backgroundColor: 'var(--color-primary)',
                                                        color: 'white'
                                                    }}
                                                >
                                                    Current
                                                </span>
                                            )}
                                        </div>
                                        <div
                                            className="flex items-center gap-1 text-xs"
                                            style={{ color: isCompareSelected ? 'rgba(255,255,255,0.8)' : 'var(--color-text-muted)' }}
                                        >
                                            <Clock className="w-3 h-3" />
                                            <span>{formatDate(snapshot.timestamp)}</span>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    {!compareMode && (
                                        <div className="flex gap-1">
                                            <button
                                                onClick={() => onLoadSnapshot(snapshot.id)}
                                                className="p-1.5 rounded transition-colors"
                                                style={{
                                                    backgroundColor: 'var(--color-background-secondary)',
                                                    color: 'var(--color-text-muted)'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                                                    e.currentTarget.style.color = 'white';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                                                    e.currentTarget.style.color = 'var(--color-text-muted)';
                                                }}
                                                title="Load snapshot"
                                            >
                                                <Eye className="w-3.5 h-3.5" />
                                            </button>
                                            <button
                                                onClick={() => onDeleteSnapshot(snapshot.id)}
                                                className="p-1.5 rounded transition-colors"
                                                style={{
                                                    backgroundColor: 'var(--color-background-secondary)',
                                                    color: 'var(--color-text-muted)'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.backgroundColor = '#ef4444';
                                                    e.currentTarget.style.color = 'white';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                                                    e.currentTarget.style.color = 'var(--color-text-muted)';
                                                }}
                                                title="Delete snapshot"
                                            >
                                                <Trash2 className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {/* Description */}
                                {snapshot.description && (
                                    <p
                                        className="text-xs mb-2"
                                        style={{ color: isCompareSelected ? 'rgba(255,255,255,0.9)' : 'var(--color-text-secondary)' }}
                                    >
                                        {snapshot.description}
                                    </p>
                                )}

                                {/* Summary */}
                                <div
                                    className="flex gap-3 text-xs"
                                    style={{ color: isCompareSelected ? 'rgba(255,255,255,0.8)' : 'var(--color-text-muted)' }}
                                >
                                    <span>📦 {summary.productCount} products</span>
                                    <span>📊 {summary.metricsCount} metrics</span>
                                    <span>⚙️ {summary.configuredMetrics} config</span>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>

            {/* Create Dialog */}
            {showCreateDialog && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50"
                    style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                    onClick={() => setShowCreateDialog(false)}
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
                                onClick={() => setShowCreateDialog(false)}
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
                                    onClick={() => setShowCreateDialog(false)}
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
        </div>
    );
}
