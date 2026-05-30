/**
 * Shape types and configurations for canvas drawing tools
 */

export type ShapeType =
  | "rectangle"
  | "circle"
  | "triangle"
  | "diamond"
  | "hexagon"
  | "star"
  | "heart";

export interface ShapeStyle {
  fillColor: string;
  strokeColor: string;
  strokeWidth: number;
  strokeStyle?: "solid" | "dashed" | "dotted"; // Line style
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
  fontWeight?: "normal" | "bold";
  fontStyle?: "normal" | "italic";
  textAlign?: "left" | "center" | "right";
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
  align?: "left" | "center" | "right";
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
  cornerRadius?: number; // Corner rounding in pixels
  containedItemIds?: string[]; // IDs of items within this frame
}

export interface CommentData {
  content: string;
  author?: string;
  timestamp?: number;
  resolved?: boolean;
}

// Path data for freehand drawing (pen tool)
export interface PathData {
  points: { x: number; y: number }[]; // Array of points
  pathString: string; // SVG path string
  strokeColor: string;
  strokeWidth: number;
  strokeStyle?: "solid" | "dashed" | "dotted";
  opacity: number;
  smoothing?: number; // 0-1, how smooth the curve is
  // Bounding box (calculated from points)
  width: number;
  height: number;
  // Label
  label?: string;
  labelColor?: string;
  labelSize?: number;
  labelPosition?: number; // 0-1, position along the path (0.5 = middle)
  labelOffset?: number; // Perpendicular offset from path in pixels
  labelBackgroundColor?: string;
  labelFontFamily?: string;
  labelBold?: boolean;
  labelItalic?: boolean;
}

// Line/Arrow data
export interface LineData {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  strokeColor: string;
  strokeWidth: number;
  strokeStyle?: "solid" | "dashed" | "dotted";
  opacity: number;
  // Arrow configuration
  startArrow?: boolean; // Arrow at start point
  endArrow?: boolean; // Arrow at end point
  arrowSize?: number; // Size of arrow head
  // Label
  label?: string;
  labelColor?: string;
  labelSize?: number;
  labelPosition?: number; // 0-1, position along the line (0.5 = middle)
  labelOffset?: number; // Perpendicular offset from line in pixels
  labelBackgroundColor?: string;
  labelFontFamily?: string;
  labelBold?: boolean;
  labelItalic?: boolean;
}

// Default styles
export const DEFAULT_SHAPE_STYLE: ShapeStyle = {
  fillColor: "#3b82f6", // blue-500
  strokeColor: "#1e40af", // blue-800
  strokeWidth: 2,
  strokeStyle: "solid",
  opacity: 1,
  cornerRadius: 8,
};

export const DEFAULT_SHAPE_SIZE = {
  width: 150,
  height: 150,
};

export const DEFAULT_TEXT_STYLE: Partial<TextData> = {
  fontSize: 16,
  fontFamily: "Titillium Web, sans-serif",
  color: "#000000",
  align: "left",
  lineHeight: 1.5,
  letterSpacing: 0,
};

export const DEFAULT_PATH_STYLE: Partial<PathData> = {
  strokeColor: "#1e40af",
  strokeWidth: 2,
  strokeStyle: "solid",
  opacity: 1,
  smoothing: 0.5,
  points: [],
  pathString: "",
};

export const DEFAULT_LINE_STYLE: Partial<LineData> = {
  strokeColor: "#1e40af",
  strokeWidth: 2,
  strokeStyle: "solid",
  opacity: 1,
  startArrow: false,
  endArrow: true,
  arrowSize: 10,
};

export const STICKY_NOTE_COLORS = [
  "#fef3c7", // yellow
  "#fecaca", // red
  "#bfdbfe", // blue
  "#bbf7d0", // green
  "#e9d5ff", // purple
  "#fed7aa", // orange
];
