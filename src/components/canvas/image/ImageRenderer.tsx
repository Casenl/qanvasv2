'use client';

import React, { useState } from 'react';
import { ImageData } from '@/lib/types/shapeTypes';
import { Image as ImageIcon } from 'lucide-react';

interface ImageRendererProps {
    data: ImageData;
    isSelected?: boolean;
    onClick?: () => void;
}

/**
 * Component for rendering uploaded images
 * 
 * Features:
 * - Display images with proper sizing
 * - Loading states
 * - Error handling
 * - Selection states
 */
export function ImageRenderer({ data, isSelected = false, onClick }: ImageRendererProps) {
    const { url, width, height, alt = 'Uploaded image' } = data;
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    return (
        <div
            data-canvas-item="image"
            onClick={onClick}
            style={{
                width,
                height,
                cursor: 'pointer',
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                border: isSelected ? '3px solid #3b82f6' : '1px solid rgba(0,0,0,0.1)',
                boxShadow: isSelected
                    ? '0 4px 12px rgba(59, 130, 246, 0.3)'
                    : '0 2px 8px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.2s'
            }}
        >
            {/* Loading state */}
            {isLoading && !hasError && (
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'var(--color-background-secondary)'
                    }}
                >
                    <div
                        style={{
                            width: '32px',
                            height: '32px',
                            border: '3px solid var(--color-border)',
                            borderTopColor: 'var(--color-primary)',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite'
                        }}
                    />
                </div>
            )}

            {/* Error state */}
            {hasError && (
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'var(--color-background-secondary)',
                        color: 'var(--color-text-muted)',
                        gap: '8px'
                    }}
                >
                    <ImageIcon size={32} />
                    <span style={{ fontSize: '12px' }}>Failed to load image</span>
                </div>
            )}

            {/* Actual image */}
            <img
                src={url}
                alt={alt}
                onLoad={() => setIsLoading(false)}
                onError={() => {
                    setIsLoading(false);
                    setHasError(true);
                }}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: hasError ? 'none' : 'block'
                }}
            />

            {/* Selection overlay */}
            {isSelected && (
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        border: '2px solid #3b82f6',
                        borderRadius: '8px',
                        pointerEvents: 'none'
                    }}
                />
            )}

            {/* Add spin animation */}
            <style jsx>{`
                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </div>
    );
}
