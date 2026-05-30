"use client";

import React, { useState } from "react";
import { ShapeData, DEFAULT_SHAPE_STYLE } from "@/lib/types/shapeTypes";

interface ShapeRendererProps {
  data: ShapeData;
  isSelected?: boolean;
  onClick?: () => void;
  onUpdate?: (newData: Partial<ShapeData>) => void;
}

/**
 * Component for rendering shapes on the canvas
 *
 * Renders different shape types using SVG paths
 * Supports styling and selection states
 */
export function ShapeRenderer({
  data,
  isSelected = false,
  onClick,
  onUpdate,
}: ShapeRendererProps) {
  const [isEditingText, setIsEditingText] = useState(false);
  const [editValue, setEditValue] = useState(data.text || "");
  const editRef = React.useRef<HTMLDivElement>(null);

  // Quick Edit: Start editing when typing on selected shape
  React.useEffect(() => {
    if (isSelected && !isEditingText && onUpdate) {
      const handleKeyDown = (e: KeyboardEvent) => {
        // Ignore if input/textarea is focused elsewhere
        if (
          document.activeElement?.tagName === "INPUT" ||
          document.activeElement?.tagName === "TEXTAREA"
        )
          return;

        // Check for character keys (length 1) and not modifiers
        // Also allow Backspace/Delete to clear text
        const isChar =
          e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey;
        const isDelete = e.key === "Backspace" || e.key === "Delete";

        if (isChar || isDelete) {
          setIsEditingText(true);
          if (isChar) {
            setEditValue(e.key);
          } else {
            setEditValue("");
          }
          e.preventDefault();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isSelected, isEditingText, onUpdate]);

  // Focus handling and initial content when entering edit mode
  React.useEffect(() => {
    if (isEditingText && editRef.current) {
      // Set initial content manually to avoid React fighting with contentEditable
      if (editRef.current.innerHTML !== editValue) {
        editRef.current.innerHTML = editValue;
      }

      editRef.current.focus();
      // Move cursor to end
      const range = document.createRange();
      const sel = window.getSelection();
      if (sel) {
        range.selectNodeContents(editRef.current);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }
  }, [isEditingText]); // Removed editValue dependency to prevent overwriting while typing

  const { type, width, height } = data;
  const {
    fillColor,
    strokeColor,
    strokeWidth,
    strokeStyle,
    opacity,
    cornerRadius = 8,
  } = { ...DEFAULT_SHAPE_STYLE, ...data.style };

  // Convert stroke style to SVG dasharray
  const getStrokeDashArray = () => {
    switch (strokeStyle) {
      case "dashed":
        return `${strokeWidth * 4},${strokeWidth * 2}`;
      case "dotted":
        return `${strokeWidth},${strokeWidth}`;
      default:
        return "none";
    }
  };

  // Selection outline
  const outlineStyle = isSelected
    ? {
        stroke: "#3b82f6",
        strokeWidth: 3,
        strokeDasharray: "5,5",
      }
    : {};

  /**
   * Get SVG path for different shape types
   */
  const getShapePath = (): string => {
    const w = width;
    const h = height;
    const cx = w / 2;
    const cy = h / 2;

    switch (type) {
      case "rectangle":
        // Rounded rectangle
        const r = Math.min(cornerRadius, w / 2, h / 2);
        return `
                    M ${r} 0
                    L ${w - r} 0
                    Q ${w} 0 ${w} ${r}
                    L ${w} ${h - r}
                    Q ${w} ${h} ${w - r} ${h}
                    L ${r} ${h}
                    Q 0 ${h} 0 ${h - r}
                    L 0 ${r}
                    Q 0 0 ${r} 0
                    Z
                `;

      case "circle":
        const rx = w / 2;
        const ry = h / 2;
        return `
                    M ${cx - rx} ${cy}
                    A ${rx} ${ry} 0 1 0 ${cx + rx} ${cy}
                    A ${rx} ${ry} 0 1 0 ${cx - rx} ${cy}
                    Z
                `;

      case "triangle":
        return `
                    M ${cx} 0
                    L ${w} ${h}
                    L 0 ${h}
                    Z
                `;

      case "diamond":
        return `
                    M ${cx} 0
                    L ${w} ${cy}
                    L ${cx} ${h}
                    L 0 ${cy}
                    Z
                `;

      case "hexagon":
        const hexW = w / 4;
        return `
                    M ${hexW} 0
                    L ${w - hexW} 0
                    L ${w} ${cy}
                    L ${w - hexW} ${h}
                    L ${hexW} ${h}
                    L 0 ${cy}
                    Z
                `;

      case "star":
        // 5-point star
        const outerR = Math.min(w, h) / 2;
        const innerR = outerR * 0.4;
        const points: string[] = [];

        for (let i = 0; i < 10; i++) {
          const angle = (i * Math.PI) / 5 - Math.PI / 2;
          const r = i % 2 === 0 ? outerR : innerR;
          const x = cx + r * Math.cos(angle);
          const y = cy + r * Math.sin(angle);
          points.push(`${i === 0 ? "M" : "L"} ${x} ${y}`);
        }
        points.push("Z");
        return points.join(" ");

      case "heart":
        // Heart shape
        const topCurveHeight = h * 0.3;
        return `
                    M ${cx} ${h}
                    C ${cx} ${h} ${0} ${topCurveHeight * 2} ${0} ${topCurveHeight}
                    C ${0} ${0} ${cx * 0.5} ${0} ${cx} ${topCurveHeight * 0.7}
                    C ${cx + cx * 0.5} ${0} ${w} ${0} ${w} ${topCurveHeight}
                    C ${w} ${topCurveHeight * 2} ${cx} ${h} ${cx} ${h}
                    Z
                `;

      default:
        return "";
    }
  };

  return (
    <div
      data-canvas-item="shape"
      onClick={onClick}
      style={{
        width,
        height,
        cursor: "pointer",
        position: "relative",
      }}
    >
      <svg
        width={width}
        height={height}
        style={{
          display: "block",
          overflow: "visible",
        }}
      >
        {/* Main shape */}
        <path
          d={getShapePath()}
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={getStrokeDashArray()}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={opacity}
        />

        {/* Selection outline */}
        {isSelected && (
          <path d={getShapePath()} fill="none" {...outlineStyle} />
        )}
      </svg>

      {/* Text inside shape - always show, editable on double-click */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width,
          height,
          display: "flex",
          alignItems: "center",
          justifyContent:
            data.textAlign === "left"
              ? "flex-start"
              : data.textAlign === "right"
                ? "flex-end"
                : "center",
          padding: "8px",
          pointerEvents: "auto",
          overflow: isEditingText ? "visible" : "hidden",
          zIndex: 10,
        }}
        onClick={(e) => {
          if (isEditingText) {
            e.stopPropagation();
          }
        }}
        onDoubleClick={(e) => {
          if (onUpdate) {
            e.stopPropagation();
            e.preventDefault();
            setIsEditingText(true);
            setEditValue(data.text || "");
          }
        }}
      >
        {isEditingText ? (
          <div
            ref={editRef}
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => {
              if (onUpdate) {
                onUpdate({ text: e.currentTarget.innerHTML });
              }
              setIsEditingText(false);
            }}
            onKeyDown={(e) => {
              // Stop propagation to prevent canvas hotkeys like delete/backspace from deleting the shape
              e.stopPropagation();

              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                if (editRef.current && onUpdate) {
                  onUpdate({ text: editRef.current.innerHTML });
                }
                setIsEditingText(false);
              } else if (e.key === "Escape") {
                setIsEditingText(false);
                setEditValue(data.text || "");
              }
            }}
            style={{
              width: "100%",
              minHeight: "1em",
              background: "transparent",
              border: "none",
              outline: "none",
              color: data.textColor || "#000000",
              fontSize: `${data.fontSize || 14}px`,
              fontFamily: data.fontFamily || "Titillium Web, sans-serif",
              fontWeight: data.fontWeight || "normal",
              fontStyle: data.fontStyle || "normal",
              textAlign: data.textAlign || "center",
              textDecoration:
                `${data.underline ? "underline" : ""} ${data.strikethrough ? "line-through" : ""}`.trim() ||
                "none",
              lineHeight: data.lineHeight || 1.5,
              letterSpacing: `${data.letterSpacing || 0}px`,
              cursor: "text",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          />
        ) : (
          <div
            style={{
              color: data.textColor || "#000000",
              fontSize: `${data.fontSize || 14}px`,
              fontFamily: data.fontFamily || "Titillium Web, sans-serif",
              fontWeight: data.fontWeight || "normal",
              fontStyle: data.fontStyle || "normal",
              textAlign: data.textAlign || "center",
              textDecoration:
                `${data.underline ? "underline" : ""} ${data.strikethrough ? "line-through" : ""}`.trim() ||
                "none",
              lineHeight: data.lineHeight || 1.5,
              letterSpacing: `${data.letterSpacing || 0}px`,
              width: "100%",
              wordWrap: "break-word",
              cursor: onUpdate ? "text" : "default",
              userSelect: "none",
            }}
            dangerouslySetInnerHTML={{
              __html:
                data.text ||
                (onUpdate && isSelected
                  ? '<span style="opacity:0.5; font-style:italic">Type to add text</span>'
                  : ""),
            }}
          />
        )}
      </div>
    </div>
  );
}
