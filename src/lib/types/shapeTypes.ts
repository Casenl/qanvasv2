/**
 * Shape types and configurations for canvas drawing tools
 */

export type ShapeType =
    | 'rectangle'
    | 'circle'
    | 'triangle'
    | 'diamond'
    | 'hexagon'
    | 'star'
    | 'heart';

export interface ShapeStyle {
    fillColor: string;
    strokeColor: string;
    strokeWidth: number;
    strokeStyle?: 'solid' | 'dashed' | 'dotted'; // Line style
    opacity: number;
    cornerRadius?: number; // For rectangles
}

export interface ShapeData {
    type: ShapeType;
    width: number;
    height: number;
    style: ShapeStyle;
    // Text inside shape (optional)
    text?: string;
    textColor?: string;
    fontSize?: number;
    fontFamily?: string;
    fontWeight?: 'normal' | 'bold';
    fontStyle?: 'normal' | 'italic';
    textAlign?: 'left' | 'center' | 'right';
    underline?: boolean;
    strikethrough?: boolean;
    lineHeight?: number;
    letterSpacing?: number;
}

export interface TextData {
    content: string;
    fontSize: number;
    fontFamily: string;
    color: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    align?: 'left' | 'center' | 'right';
    lineHeight?: number;
    letterSpacing?: number;
    width?: number;
    height?: number;
}

export interface StickyNoteData {
    content: string;
    color: string; // Background color
    width?: number;
    height?: number;
}

export interface ImageData {
    url: string;
    width: number;
    height: number;
    alt?: string;
}

export interface FrameData {
    width: number;
    height: number;
    title: string;
    color: string;
}

export interface CommentData {
    content: string;
    author?: string;
    timestamp?: number;
    resolved?: boolean;
}

// Default styles
export const DEFAULT_SHAPE_STYLE: ShapeStyle = {
    fillColor: '#3b82f6', // blue-500
    strokeColor: '#1e40af', // blue-800
    strokeWidth: 2,
    strokeStyle: 'solid',
    opacity: 1,
    cornerRadius: 8
};

export const DEFAULT_SHAPE_SIZE = {
    width: 150,
    height: 150
};

export const DEFAULT_TEXT_STYLE: Partial<TextData> = {
    fontSize: 16,
    fontFamily: 'Titillium Web, sans-serif',
    color: '#000000',
    align: 'left',
    lineHeight: 1.5,
    letterSpacing: 0
};

export const STICKY_NOTE_COLORS = [
    '#fef3c7', // yellow
    '#fecaca', // red
    '#bfdbfe', // blue
    '#bbf7d0', // green
    '#e9d5ff', // purple
    '#fed7aa', // orange
];
