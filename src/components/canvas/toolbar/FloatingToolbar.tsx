import React, { useEffect, useRef } from 'react';
import {
    MousePointer,
    Pen,
    Minus,
    ArrowRight,
    Square,
    Circle,
    Diamond,
    Hexagon,
    Star,
    Heart,
    Triangle,
    Type,
    StickyNote,
    Image as ImageIcon,
    Frame,
    MessageSquare,
    Settings,
    Shapes
} from 'lucide-react';
import { useToolbar, ToolType } from '@/hooks/useToolbar';
import { ToolButton } from './ToolButton';
import { ToolGroup } from './ToolGroup';
import { ToolSeparator } from './ToolSeparator';

interface FloatingToolbarProps {
    toolbar: ReturnType<typeof useToolbar>;
    onToolChange?: (tool: ToolType) => void;
}

/**
 * Floating canvas toolbar component (Miro-style)
 * 
 * Features:
 * - Floats on canvas (not fixed to sidebar)
 * - Expandable tool groups
 * - Keyboard shortcuts
 * - Glassmorphism design
 */
export function FloatingToolbar({ toolbar, onToolChange }: FloatingToolbarProps) {
    const toolbarRef = useRef<HTMLDivElement>(null);

    // Notify parent of tool changes
    useEffect(() => {
        onToolChange?.(toolbar.activeTool);
    }, [toolbar.activeTool, onToolChange]);

    // Close expanded groups when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (toolbarRef.current && !toolbarRef.current.contains(e.target as Node)) {
                toolbar.closeGroup();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [toolbar]);

    // Keyboard shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Don't trigger if typing in input
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
                return;
            }

            switch (e.key.toLowerCase()) {
                case 'v':
                    toolbar.selectTool('select');
                    break;
                case 'p':
                    toolbar.selectTool('pen');
                    break;
                case 'l':
                    toolbar.selectTool('line');
                    break;
                case 's':
                    // Toggle shapes group
                    toolbar.toggleGroup('shape');
                    break;
                case 'r':
                    toolbar.selectTool('rectangle');
                    break;
                case 'o':
                    toolbar.selectTool('circle');
                    break;
                case 't':
                    toolbar.selectTool('text');
                    break;
                case 'n':
                    toolbar.selectTool('sticky-note');
                    break;
                case 'escape':
                    toolbar.resetToSelect();
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [toolbar]);

    return (
        <div
            ref={toolbarRef}
            style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)'
            }}
            className="
                fixed left-[336px] top-32
                w-14
                backdrop-blur-md
                border
                rounded-xl
                shadow-2xl
                z-[100]
                flex flex-col items-center
                py-2
                gap-1
            "
        >
            {/* Select Tool */}
            <ToolButton
                tool="select"
                icon={<MousePointer className="w-5 h-5" />}
                label="Select"
                shortcut="V"
                isActive={toolbar.activeTool === 'select'}
                onClick={() => toolbar.selectTool('select')}
            />

            <ToolSeparator />

            {/* Draw Tools Group */}
            <ToolGroup
                icon={<Pen className="w-5 h-5" />}
                label="Draw"
                shortcut="P"
                isActive={toolbar.isToolInGroup(toolbar.activeTool, 'draw')}
                isExpanded={toolbar.expandedGroup === 'draw'}
                onClick={() => toolbar.toggleGroup('draw')}
            >
                <div className="flex flex-col gap-1">
                    <ToolButton
                        tool="pen"
                        icon={<Pen className="w-4 h-4" />}
                        label="Pen"
                        shortcut="P"
                        isActive={toolbar.activeTool === 'pen'}
                        onClick={() => toolbar.selectTool('pen')}
                        showLabel
                    />
                    <ToolButton
                        tool="line"
                        icon={<Minus className="w-4 h-4" />}
                        label="Line"
                        shortcut="L"
                        isActive={toolbar.activeTool === 'line'}
                        onClick={() => toolbar.selectTool('line')}
                        showLabel
                    />
                    <ToolButton
                        tool="arrow"
                        icon={<ArrowRight className="w-4 h-4" />}
                        label="Arrow"
                        isActive={toolbar.activeTool === 'arrow'}
                        onClick={() => toolbar.selectTool('arrow')}
                        showLabel
                    />
                </div>
            </ToolGroup>

            <ToolSeparator />

            {/* Shapes Group */}
            <ToolGroup
                icon={<Shapes className="w-5 h-5" />}
                label="Shapes"
                shortcut="S"
                isActive={toolbar.isToolInGroup(toolbar.activeTool, 'shape')}
                isExpanded={toolbar.expandedGroup === 'shape'}
                onClick={() => toolbar.toggleGroup('shape')}
            >
                <div className="grid grid-cols-3 gap-1">
                    <ToolButton
                        tool="rectangle"
                        icon={<Square className="w-4 h-4" />}
                        label="Rectangle"
                        shortcut="R"
                        isActive={toolbar.activeTool === 'rectangle'}
                        onClick={() => toolbar.selectTool('rectangle')}
                        draggable={true}
                    />
                    <ToolButton
                        tool="circle"
                        icon={<Circle className="w-4 h-4" />}
                        label="Circle"
                        shortcut="O"
                        isActive={toolbar.activeTool === 'circle'}
                        onClick={() => toolbar.selectTool('circle')}
                        draggable={true}
                    />
                    <ToolButton
                        tool="triangle"
                        icon={<Triangle className="w-4 h-4" />}
                        label="Triangle"
                        isActive={toolbar.activeTool === 'triangle'}
                        onClick={() => toolbar.selectTool('triangle')}
                        draggable={true}
                    />
                    <ToolButton
                        tool="diamond"
                        icon={<Diamond className="w-4 h-4" />}
                        label="Diamond"
                        isActive={toolbar.activeTool === 'diamond'}
                        onClick={() => toolbar.selectTool('diamond')}
                        draggable={true}
                    />
                    <ToolButton
                        tool="hexagon"
                        icon={<Hexagon className="w-4 h-4" />}
                        label="Hexagon"
                        isActive={toolbar.activeTool === 'hexagon'}
                        onClick={() => toolbar.selectTool('hexagon')}
                        draggable={true}
                    />
                    <ToolButton
                        tool="star"
                        icon={<Star className="w-4 h-4" />}
                        label="Star"
                        isActive={toolbar.activeTool === 'star'}
                        onClick={() => toolbar.selectTool('star')}
                        draggable={true}
                    />
                    <ToolButton
                        tool="heart"
                        icon={<Heart className="w-4 h-4" />}
                        label="Heart"
                        isActive={toolbar.activeTool === 'heart'}
                        onClick={() => toolbar.selectTool('heart')}
                        draggable={true}
                    />
                </div>
            </ToolGroup>

            <ToolSeparator />

            {/* Text Tool */}
            <ToolButton
                tool="text"
                icon={<Type className="w-5 h-5" />}
                label="Text"
                shortcut="T"
                isActive={toolbar.activeTool === 'text'}
                onClick={() => toolbar.selectTool('text')}
                draggable={true}
            />

            <ToolSeparator />

            {/* Sticky Note */}
            <ToolButton
                tool="sticky-note"
                icon={<StickyNote className="w-5 h-5" />}
                label="Sticky Note"
                shortcut="N"
                isActive={toolbar.activeTool === 'sticky-note'}
                onClick={() => toolbar.selectTool('sticky-note')}
            />

            {/* Image */}
            <ToolButton
                tool="image"
                icon={<ImageIcon className="w-5 h-5" />}
                label="Image"
                isActive={toolbar.activeTool === 'image'}
                onClick={() => toolbar.selectTool('image')}
            />

            {/* Frame */}
            <ToolButton
                tool="frame"
                icon={<Frame className="w-5 h-5" />}
                label="Frame"
                isActive={toolbar.activeTool === 'frame'}
                onClick={() => toolbar.selectTool('frame')}
            />

            <ToolSeparator />

            {/* Comment */}
            <ToolButton
                tool="comment"
                icon={<MessageSquare className="w-5 h-5" />}
                label="Comment"
                isActive={toolbar.activeTool === 'comment'}
                onClick={() => toolbar.selectTool('comment')}
            />
        </div>
    );
}
