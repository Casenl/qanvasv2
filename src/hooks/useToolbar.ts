import { useState, useCallback } from 'react';

/**
 * Available canvas tools
 */
export type ToolType =
    | 'select'
    | 'pen'
    | 'line'
    | 'arrow'
    | 'connector'
    | 'rectangle'
    | 'circle'
    | 'diamond'
    | 'hexagon'
    | 'star'
    | 'heart'
    | 'triangle'
    | 'text'
    | 'sticky-note'
    | 'image'
    | 'frame'
    | 'comment';

/**
 * Tool group identifiers
 */
export type ToolGroup = 'draw' | 'shape' | null;

/**
 * Custom hook to manage canvas toolbar state
 * 
 * Responsibilities:
 * - Track active tool
 * - Manage expanded tool groups
 * - Provide tool selection methods
 * - Handle keyboard shortcuts
 * 
 * @returns Toolbar state and methods
 */
export function useToolbar() {
    const [activeTool, setActiveTool] = useState<ToolType>('select');
    const [expandedGroup, setExpandedGroup] = useState<ToolGroup>(null);

    /**
     * Select a tool and close any expanded groups
     */
    const selectTool = useCallback((tool: ToolType) => {
        setActiveTool(tool);
        setExpandedGroup(null);
    }, []);

    /**
     * Toggle expansion of a tool group
     */
    const toggleGroup = useCallback((group: ToolGroup) => {
        setExpandedGroup(prev => prev === group ? null : group);
    }, []);

    /**
     * Close expanded group
     */
    const closeGroup = useCallback(() => {
        setExpandedGroup(null);
    }, []);

    /**
     * Reset to select tool
     */
    const resetToSelect = useCallback(() => {
        setActiveTool('select');
        setExpandedGroup(null);
    }, []);

    /**
     * Get cursor style for active tool
     */
    const getCursor = useCallback((): string => {
        switch (activeTool) {
            case 'select':
                return 'default';
            case 'text':
                return 'text';
            case 'pen':
            case 'line':
            case 'arrow':
            case 'connector':
            case 'rectangle':
            case 'circle':
            case 'diamond':
            case 'hexagon':
            case 'star':
            case 'heart':
            case 'triangle':
                return 'crosshair';
            case 'sticky-note':
            case 'image':
            case 'frame':
            case 'comment':
                return 'pointer';
            default:
                return 'default';
        }
    }, [activeTool]);

    /**
     * Check if a tool is in a group
     */
    const isToolInGroup = useCallback((tool: ToolType, group: ToolGroup): boolean => {
        if (group === 'draw') {
            return ['pen', 'line', 'arrow', 'connector'].includes(tool);
        }
        if (group === 'shape') {
            return ['rectangle', 'circle', 'diamond', 'hexagon', 'star', 'heart', 'triangle'].includes(tool);
        }
        return false;
    }, []);

    return {
        activeTool,
        expandedGroup,
        selectTool,
        toggleGroup,
        closeGroup,
        resetToSelect,
        getCursor,
        isToolInGroup
    };
}
