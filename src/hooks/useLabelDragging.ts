import { useState, useEffect, useCallback } from 'react';

export interface LabelDragState {
    isDragging: boolean;
    dragStart: { x: number; y: number } | null;
}

export interface LabelDragHandlers {
    handleLabelMouseDown: (e: React.MouseEvent) => void;
    isDragging: boolean;
}

/**
 * Hook for managing draggable label positioning
 * 
 * Handles:
 * - Drag state management
 * - Mouse event handling
 * - Position calculation along line
 * - Perpendicular offset calculation
 * 
 * @param labelPosition - Current position along line (0-1)
 * @param labelOffset - Current perpendicular offset (pixels)
 * @param lineLengthX - Line length in X direction
 * @param lineLengthY - Line length in Y direction
 * @param lineLength - Total line length
 * @param onUpdate - Callback to update label position
 * @param isEditingLabel - Whether label is in edit mode
 */
export function useLabelDragging(
    labelPosition: number,
    labelOffset: number,
    lineLengthX: number,
    lineLengthY: number,
    lineLength: number,
    onUpdate?: (updates: { labelPosition?: number; labelOffset?: number }) => void,
    isEditingLabel: boolean = false
) {
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null);

    /**
     * Start dragging label
     */
    const handleLabelMouseDown = useCallback((e: React.MouseEvent) => {
        if (isEditingLabel) return;
        e.stopPropagation();
        setIsDragging(true);
        setDragStart({ x: e.clientX, y: e.clientY });
    }, [isEditingLabel]);

    /**
     * Handle mouse movement during drag
     */
    useEffect(() => {
        if (!isDragging || !dragStart || !onUpdate) return;

        const handleMouseMove = (e: MouseEvent) => {
            const dx = e.clientX - dragStart.x;
            const dy = e.clientY - dragStart.y;

            // Calculate new position along line
            const lineAngle = Math.atan2(lineLengthY, lineLengthX);
            const dragAngle = Math.atan2(dy, dx);

            // Project drag onto line direction
            const dragDistance = Math.sqrt(dx * dx + dy * dy);
            const alongLine = dragDistance * Math.cos(dragAngle - lineAngle);
            const perpToLine = dragDistance * Math.sin(dragAngle - lineAngle);

            // Update position (clamped to 0-1)
            const newPosition = Math.max(0, Math.min(1, labelPosition + alongLine / lineLength));
            const newOffset = labelOffset + perpToLine;

            onUpdate({
                labelPosition: newPosition,
                labelOffset: newOffset
            });

            setDragStart({ x: e.clientX, y: e.clientY });
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            setDragStart(null);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, dragStart, labelPosition, labelOffset, lineLength, lineLengthX, lineLengthY, onUpdate]);

    return {
        isDragging,
        handleLabelMouseDown
    };
}

/**
 * Calculate label position along a line
 * 
 * @param startX - Line start X
 * @param startY - Line start Y
 * @param endX - Line end X
 * @param endY - Line end Y
 * @param position - Position along line (0-1)
 * @param offset - Perpendicular offset (pixels)
 */
export function calculateLabelPosition(
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    position: number,
    offset: number
): { x: number; y: number } {
    const lineLengthX = endX - startX;
    const lineLengthY = endY - startY;

    // Position along the line (0-1)
    const labelX = startX + lineLengthX * position;
    const labelY = startY + lineLengthY * position;

    // Calculate perpendicular offset
    const perpAngle = Math.atan2(lineLengthY, lineLengthX) + Math.PI / 2;
    const offsetX = Math.cos(perpAngle) * offset;
    const offsetY = Math.sin(perpAngle) * offset;

    return {
        x: labelX + offsetX,
        y: labelY + offsetY
    };
}
