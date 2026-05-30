import { useCallback } from 'react';
import { toPng, toSvg, toJpeg } from 'html-to-image';
import jsPDF from 'jspdf';
import { CanvasItem } from '@/lib/types';

interface FrameExportConfig {
    items: CanvasItem[];
    setDebugInfo?: (info: string) => void;
}

/**
 * Hook for exporting frames and their contents
 * 
 * Features:
 * - Export frame + contained items as PNG
 * - Export frame + contained items as SVG
 * - Export frame + contained items as PDF
 * 
 * @example
 * ```tsx
 * const { exportFrameAsPNG, exportFrameAsSVG, exportFrameAsPDF } = useFrameExport({
 *     items,
 *     setDebugInfo
 * });
 * ```
 */
export function useFrameExport({ items, setDebugInfo }: FrameExportConfig) {

    /**
     * Filter function to exclude UI elements from export
     */
    const exportFilter = useCallback((node: Node): boolean => {
        // Exclude if it's an HTMLElement with certain attributes/classes
        if (node instanceof HTMLElement) {
            // Exclude selection handles, resize handles, rotation handles
            if (node.hasAttribute('data-selection-handle')) return false;
            if (node.hasAttribute('data-resize-handle')) return false;
            if (node.hasAttribute('data-rotation-handle')) return false;
            if (node.hasAttribute('data-transform-handle')) return false;

            // Exclude overlays (multi-select box, drawing preview, etc.)
            if (node.hasAttribute('data-overlay')) return false;
            if (node.classList?.contains('selection-box')) return false;
            if (node.classList?.contains('bounding-box')) return false;

            // Exclude any element with pointer-events: none (usually overlays)
            const style = window.getComputedStyle(node);
            if (style.pointerEvents === 'none' && !node.hasAttribute('data-canvas-item')) {
                return false;
            }
        }

        // Include everything else
        return true;
    }, []);

    /**
     * Find the DOM element for a frame by its ID
     */
    const getFrameElement = useCallback((frameId: string): HTMLElement | null => {
        // Find the frame element in the DOM
        const frameElement = document.querySelector(`[data-item-id="${frameId}"]`) as HTMLElement;
        return frameElement;
    }, []);

    /**
     * Export frame as PNG
     */
    const exportFrameAsPNG = useCallback(async (frameId: string) => {
        try {
            const frame = items.find(item => item.id === frameId && item.entityType === 'frame');
            if (!frame) {
                setDebugInfo?.('Frame not found');
                return;
            }

            setDebugInfo?.('Generating PNG...');

            // Get the canvas container (parent of all items)
            const canvasContainer = document.querySelector('[data-canvas-container]') as HTMLElement;
            if (!canvasContainer) {
                setDebugInfo?.('Canvas container not found');
                return;
            }

            // Get frame dimensions and position
            const frameX = frame.x;
            const frameY = frame.y;
            const frameWidth = frame.data?.width || 400;
            const frameHeight = frame.data?.height || 400;

            // Generate PNG of entire canvas
            const dataUrl = await toPng(canvasContainer, {
                cacheBust: true,
                backgroundColor: '#ffffff',
                pixelRatio: 2,
                // Filter out UI elements (selection handles, transform controls, etc.)
                filter: exportFilter,
                width: frameWidth,
                height: frameHeight,
                style: {
                    transform: `translate(-${frameX}px, -${frameY}px)`,
                    transformOrigin: 'top left'
                }
            });

            // Download
            const link = document.createElement('a');
            link.download = `${frame.data?.title || 'frame'}.png`;
            link.href = dataUrl;
            link.click();

            setDebugInfo?.(`Exported frame as PNG: ${frame.data?.title || 'frame'}.png`);
        } catch (error) {
            console.error('Error exporting frame as PNG:', error);
            setDebugInfo?.('Error exporting PNG');
        }
    }, [items, setDebugInfo]);

    /**
     * Export frame as SVG
     */
    const exportFrameAsSVG = useCallback(async (frameId: string) => {
        try {
            const frame = items.find(item => item.id === frameId && item.entityType === 'frame');
            if (!frame) {
                setDebugInfo?.('Frame not found');
                return;
            }

            setDebugInfo?.('Generating SVG...');

            const canvasContainer = document.querySelector('[data-canvas-container]') as HTMLElement;
            if (!canvasContainer) {
                setDebugInfo?.('Canvas container not found');
                return;
            }

            const frameX = frame.x;
            const frameY = frame.y;
            const frameWidth = frame.data?.width || 400;
            const frameHeight = frame.data?.height || 400;

            const dataUrl = await toSvg(canvasContainer, {
                cacheBust: true,
                backgroundColor: '#ffffff',
                filter: exportFilter,
                width: frameWidth,
                height: frameHeight,
                style: {
                    transform: `translate(-${frameX}px, -${frameY}px)`,
                    transformOrigin: 'top left'
                }
            });

            const link = document.createElement('a');
            link.download = `${frame.data?.title || 'frame'}.svg`;
            link.href = dataUrl;
            link.click();

            setDebugInfo?.(`Exported frame as SVG: ${frame.data?.title || 'frame'}.svg`);
        } catch (error) {
            console.error('Error exporting frame as SVG:', error);
            setDebugInfo?.('Error exporting SVG');
        }
    }, [items, setDebugInfo]);

    /**
     * Export frame as JPG
     */
    const exportFrameAsJPG = useCallback(async (frameId: string, quality: number = 0.95) => {
        try {
            const frame = items.find(item => item.id === frameId && item.entityType === 'frame');
            if (!frame) {
                setDebugInfo?.('Frame not found');
                return;
            }

            setDebugInfo?.('Generating JPG...');

            const canvasContainer = document.querySelector('[data-canvas-container]') as HTMLElement;
            if (!canvasContainer) {
                setDebugInfo?.('Canvas container not found');
                return;
            }

            const frameX = frame.x;
            const frameY = frame.y;
            const frameWidth = frame.data?.width || 400;
            const frameHeight = frame.data?.height || 400;

            const dataUrl = await toJpeg(canvasContainer, {
                cacheBust: true,
                backgroundColor: '#ffffff',
                pixelRatio: 2,
                quality,
                filter: exportFilter,
                width: frameWidth,
                height: frameHeight,
                style: {
                    transform: `translate(-${frameX}px, -${frameY}px)`,
                    transformOrigin: 'top left'
                }
            });

            const link = document.createElement('a');
            link.download = `${frame.data?.title || 'frame'}.jpg`;
            link.href = dataUrl;
            link.click();

            setDebugInfo?.(`Exported frame as JPG: ${frame.data?.title || 'frame'}.jpg`);
        } catch (error) {
            console.error('Error exporting frame as JPG:', error);
            setDebugInfo?.('Error exporting JPG');
        }
    }, [items, setDebugInfo]);

    /**
     * Export frame as PDF
     */
    const exportFrameAsPDF = useCallback(async (frameId: string) => {
        try {
            const frame = items.find(item => item.id === frameId && item.entityType === 'frame');
            if (!frame) {
                setDebugInfo?.('Frame not found');
                return;
            }

            setDebugInfo?.('Generating PDF...');

            const canvasContainer = document.querySelector('[data-canvas-container]') as HTMLElement;
            if (!canvasContainer) {
                setDebugInfo?.('Canvas container not found');
                return;
            }

            const frameX = frame.x;
            const frameY = frame.y;
            const frameWidth = frame.data?.width || 400;
            const frameHeight = frame.data?.height || 400;

            // First generate PNG
            const dataUrl = await toPng(canvasContainer, {
                cacheBust: true,
                backgroundColor: '#ffffff',
                pixelRatio: 2,
                filter: exportFilter,
                width: frameWidth,
                height: frameHeight,
                style: {
                    transform: `translate(-${frameX}px, -${frameY}px)`,
                    transformOrigin: 'top left'
                }
            });

            // Create PDF with frame dimensions (convert px to mm, roughly 96 DPI)
            const pdfWidth = frameWidth * 0.264583; // px to mm
            const pdfHeight = frameHeight * 0.264583;

            const pdf = new jsPDF({
                orientation: frameWidth > frameHeight ? 'landscape' : 'portrait',
                unit: 'mm',
                format: [pdfWidth, pdfHeight]
            });

            // Add image to PDF
            pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);

            // Download
            pdf.save(`${frame.data?.title || 'frame'}.pdf`);

            setDebugInfo?.(`Exported frame as PDF: ${frame.data?.title || 'frame'}.pdf`);
        } catch (error) {
            console.error('Error exporting frame as PDF:', error);
            setDebugInfo?.('Error exporting PDF');
        }
    }, [items, setDebugInfo]);

    /**
     * Check if a frame can be exported (has valid dimensions)
     */
    const canExportFrame = useCallback((frameId: string): boolean => {
        const frame = items.find(item => item.id === frameId && item.entityType === 'frame');
        if (!frame) return false;

        const width = frame.data?.width || 0;
        const height = frame.data?.height || 0;

        return width > 0 && height > 0;
    }, [items]);

    return {
        exportFrameAsPNG,
        exportFrameAsSVG,
        exportFrameAsJPG,
        exportFrameAsPDF,
        canExportFrame
    };
}
