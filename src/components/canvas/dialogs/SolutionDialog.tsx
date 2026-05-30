import React, { useState } from 'react';
import { X, Package, Users, Key } from 'lucide-react';
import { Product } from '@/lib/types';

interface SolutionDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (solution: {
        name: string;
        description: string;
        productIds: string[];
        metadata?: {
            licenses?: number;
            users?: number;
        };
    }) => void;
    selectedProducts: Product[];
}

/**
 * Dialog for creating a new solution from selected products
 */
export function SolutionDialog({ isOpen, onClose, onSave, selectedProducts }: SolutionDialogProps) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [licenses, setLicenses] = useState<number>(0);
    const [users, setUsers] = useState<number>(0);

    if (!isOpen) return null;

    const handleSave = () => {
        if (!name.trim()) {
            alert('Please enter a solution name');
            return;
        }

        onSave({
            name: name.trim(),
            description: description.trim(),
            productIds: selectedProducts.map(p => p.id),
            metadata: {
                licenses: licenses || undefined,
                users: users || undefined
            }
        });

        // Reset form
        setName('');
        setDescription('');
        setLicenses(0);
        setUsers(0);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Dialog */}
            <div
                className="relative w-full max-w-2xl mx-4 rounded-2xl shadow-2xl overflow-hidden"
                style={{
                    backgroundColor: 'var(--color-surface)',
                    borderColor: 'var(--color-border)',
                    border: '1px solid'
                }}
            >
                {/* Header */}
                <div
                    className="px-6 py-4 flex items-center justify-between"
                    style={{
                        borderBottom: '1px solid var(--color-border)'
                    }}
                >
                    <div className="flex items-center gap-3">
                        <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{
                                backgroundColor: 'var(--color-primary)',
                                opacity: 0.1
                            }}
                        >
                            <Package
                                className="w-5 h-5"
                                style={{ color: 'var(--color-primary)' }}
                            />
                        </div>
                        <div>
                            <h2
                                className="text-lg font-bold"
                                style={{ color: 'var(--color-text)' }}
                            >
                                Create Solution
                            </h2>
                            <p
                                className="text-sm"
                                style={{ color: 'var(--color-text-muted)' }}
                            >
                                Bundle {selectedProducts.length} products into a solution
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg transition-colors"
                        style={{ color: 'var(--color-text-muted)' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-background)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="px-6 py-6 space-y-6 max-h-[70vh] overflow-y-auto">
                    {/* Solution Name */}
                    <div>
                        <label
                            className="block text-sm font-semibold mb-2"
                            style={{ color: 'var(--color-text)' }}
                        >
                            Solution Name *
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g., Modern Hybrid Workspace"
                            className="w-full px-4 py-3 rounded-lg text-sm transition-colors"
                            style={{
                                backgroundColor: 'var(--color-background)',
                                borderColor: 'var(--color-border)',
                                border: '1px solid',
                                color: 'var(--color-text)'
                            }}
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label
                            className="block text-sm font-semibold mb-2"
                            style={{ color: 'var(--color-text)' }}
                        >
                            Description
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Describe this solution..."
                            rows={3}
                            className="w-full px-4 py-3 rounded-lg text-sm transition-colors resize-none"
                            style={{
                                backgroundColor: 'var(--color-background)',
                                borderColor: 'var(--color-border)',
                                border: '1px solid',
                                color: 'var(--color-text)'
                            }}
                        />
                    </div>

                    {/* Metadata */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label
                                className="block text-sm font-semibold mb-2 flex items-center gap-2"
                                style={{ color: 'var(--color-text)' }}
                            >
                                <Key className="w-4 h-4" />
                                Licenses
                            </label>
                            <input
                                type="number"
                                value={licenses || ''}
                                onChange={(e) => setLicenses(parseInt(e.target.value) || 0)}
                                placeholder="0"
                                min="0"
                                className="w-full px-4 py-3 rounded-lg text-sm transition-colors"
                                style={{
                                    backgroundColor: 'var(--color-background)',
                                    borderColor: 'var(--color-border)',
                                    border: '1px solid',
                                    color: 'var(--color-text)'
                                }}
                            />
                        </div>
                        <div>
                            <label
                                className="block text-sm font-semibold mb-2 flex items-center gap-2"
                                style={{ color: 'var(--color-text)' }}
                            >
                                <Users className="w-4 h-4" />
                                Users
                            </label>
                            <input
                                type="number"
                                value={users || ''}
                                onChange={(e) => setUsers(parseInt(e.target.value) || 0)}
                                placeholder="0"
                                min="0"
                                className="w-full px-4 py-3 rounded-lg text-sm transition-colors"
                                style={{
                                    backgroundColor: 'var(--color-background)',
                                    borderColor: 'var(--color-border)',
                                    border: '1px solid',
                                    color: 'var(--color-text)'
                                }}
                            />
                        </div>
                    </div>

                    {/* Selected Products */}
                    <div>
                        <label
                            className="block text-sm font-semibold mb-3"
                            style={{ color: 'var(--color-text)' }}
                        >
                            Included Products ({selectedProducts.length})
                        </label>
                        <div className="space-y-2">
                            {selectedProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="px-4 py-3 rounded-lg flex items-center gap-3"
                                    style={{
                                        backgroundColor: 'var(--color-background)',
                                        borderColor: 'var(--color-border)',
                                        border: '1px solid'
                                    }}
                                >
                                    <Package
                                        className="w-4 h-4"
                                        style={{ color: 'var(--color-primary)' }}
                                    />
                                    <div className="flex-1">
                                        <p
                                            className="text-sm font-medium"
                                            style={{ color: 'var(--color-text)' }}
                                        >
                                            {product.name}
                                        </p>
                                        {product.version && (
                                            <p
                                                className="text-xs"
                                                style={{ color: 'var(--color-text-muted)' }}
                                            >
                                                Version {product.version}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div
                    className="px-6 py-4 flex items-center justify-end gap-3"
                    style={{
                        borderTop: '1px solid var(--color-border)'
                    }}
                >
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        style={{
                            backgroundColor: 'var(--color-background)',
                            color: 'var(--color-text-secondary)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-background)'}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-all"
                        style={{
                            backgroundColor: 'var(--color-primary)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                    >
                        Create Solution
                    </button>
                </div>
            </div>
        </div>
    );
}
