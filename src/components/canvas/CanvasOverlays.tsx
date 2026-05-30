import React from "react";
import { Layout } from "lucide-react";
import { SnapGuides, SnapGuide } from "./controls/SnapGuides";
import { SelectionBox } from "./controls/SelectionBox";
import { MultiSelectIndicator } from "./controls/MultiSelectIndicator";
import { AxisLockGuide } from "./controls/AxisLockGuide";
import { ColorSchemeToggle } from "./controls/ColorSchemeToggle";
import { ThemeToggle } from "./controls/ThemeToggle";
import { ZoomControls } from "./controls/ZoomControls";
import { CanvasItem } from "@/lib/types";

interface CanvasOverlaysProps {
  canvasRef: React.RefObject<HTMLDivElement | null>;
  canvasTransform: { zoom: number; pan: { x: number; y: number } } | null;
  snapGuides: SnapGuide[];
  activeDragRect?: {
    x: number;
    y: number;
    width: number;
    height: number;
  } | null;
  selectionBox: any;
  selectedIds: string[];
  lockedAxis?: "x" | "y" | null;
  isShiftPressed: boolean;
  // Data props
  items: CanvasItem[];
  debugInfo: string | null;
  isDark: boolean;
  colorSchemeEnabled?: boolean;
  // Callbacks
  onZoomIn?: () => void;
  onZoomOut?: () => void;
  onResetZoom?: () => void;
  onToggleTheme?: () => void;
  onToggleColorScheme?: () => void;
  onClearItems: () => void;
}

export function CanvasOverlays({
  canvasRef,
  canvasTransform,
  snapGuides,
  activeDragRect,
  selectionBox,
  selectedIds,
  lockedAxis,
  isShiftPressed,
  items,
  debugInfo,
  isDark,
  isDark: _isDark, // Handle duplicate if needed, but props interface dictates usage
  colorSchemeEnabled = false,
  onZoomIn,
  onZoomOut,
  onResetZoom,
  onToggleTheme,
  onToggleColorScheme,
  onClearItems,
}: CanvasOverlaysProps) {
  const zoom = canvasTransform?.zoom || 1;

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Selection Box */}
      <SelectionBox
        box={selectionBox}
        canvasTransform={canvasTransform ?? undefined}
      />

      {/* Snap Guides */}
      <div className="absolute inset-0 overflow-hidden z-40">
        <SnapGuides
          guides={snapGuides}
          canvasRect={canvasRef.current?.getBoundingClientRect()}
          dragRect={activeDragRect}
          canvasTransform={canvasTransform ?? undefined}
        />
        <AxisLockGuide
          isActive={isShiftPressed && !!activeDragRect}
          axis={lockedAxis ?? null}
          position={
            activeDragRect ? { x: activeDragRect.x, y: activeDragRect.y } : null
          }
          canvasRect={canvasRef.current?.getBoundingClientRect() ?? null}
        />
      </div>

      {/* MultiSelect Indicator */}
      <MultiSelectIndicator count={selectedIds.length} />

      {/* Status Bar - Top Left */}
      <div className="absolute top-6 left-6 flex flex-col gap-3 z-10 pointer-events-none">
        {/* Status Chips Row */}
        <div className="flex items-center gap-3">
          <div
            className="px-3 py-1.5 rounded-lg backdrop-blur-xl shadow-sm border transaction-colors duration-200"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)] animate-pulse" />
              <span
                className="text-[10px] font-bold uppercase tracking-widest"
                style={{ color: "var(--color-text)" }}
              >
                Online
              </span>
            </div>
          </div>

          <div
            className="px-3 py-1.5 rounded-lg backdrop-blur-xl shadow-sm border transaction-colors duration-200"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <div className="flex items-center gap-2">
              <Layout
                className="w-3 h-3"
                style={{ color: "var(--color-primary)" }}
              />
              <span
                className="text-[10px] font-bold uppercase tracking-widest"
                style={{ color: "var(--color-text)" }}
              >
                {items.length} Assets
              </span>
            </div>
          </div>
        </div>

        {/* Last Action Row */}
        <div
          className="px-3 py-1.5 rounded-lg backdrop-blur-xl shadow-sm border self-start transaction-colors duration-200"
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="flex items-center gap-2">
            <span
              className="text-[10px] font-medium"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Last:
            </span>
            <span
              className="text-[10px] font-bold"
              style={{ color: "var(--color-text)" }}
            >
              {debugInfo}
            </span>
          </div>
        </div>
      </div>

      {/* Coordinate Display - Bottom Right (only when item selected) */}
      {selectedIds.length === 1 &&
        (() => {
          const item = items.find((i) => i.id === selectedIds[0]);
          if (!item) return null;
          return (
            <div
              className="absolute bottom-20 right-6 px-4 py-2 rounded-lg backdrop-blur-md text-xs font-mono flex flex-col gap-1 z-50 pointer-events-auto"
              style={{
                backgroundColor: "var(--color-background-secondary)",
              }}
            >
              <div className="flex gap-4 justify-between">
                <span>X: {Math.round(item.x)}</span>
                <span>Y: {Math.round(item.y)}</span>
              </div>
              {/* Width/Height would be nicer if dynamic, but placeholder for now */}
              <div className="flex gap-4 justify-between opacity-70">
                <span>W: {Math.round(item.data?.width || 300)}</span>
                <span>H: {Math.round(item.data?.height || 172)}</span>
              </div>
            </div>
          );
        })()}

      {/* Clear Workspace Button - Bottom Left */}
      <div className="absolute bottom-6 left-6 z-10">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClearItems();
          }}
          className="pointer-events-auto px-4 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all hover:bg-red-500/20 hover:text-red-400"
          style={{
            backgroundColor: "var(--color-background-secondary)",
            color: "var(--color-text-muted)",
          }}
        >
          Clear Workspace
        </button>
      </div>

      {/* Bottom Right Controls - Zoom and Theme */}
      <div className="absolute bottom-6 right-6 flex items-center gap-3 z-10">
        {/* Zoom Controls */}
        {onZoomIn && onZoomOut && onResetZoom && (
          <ZoomControls
            zoom={zoom}
            onZoomIn={onZoomIn}
            onZoomOut={onZoomOut}
            onResetZoom={onResetZoom}
            className="relative bottom-auto right-auto pointer-events-auto shadow-lg"
          />
        )}

        {/* Color Scheme Toggle */}
        {onToggleColorScheme && (
          <ColorSchemeToggle
            enabled={colorSchemeEnabled}
            onToggle={onToggleColorScheme}
          />
        )}

        {/* Theme Toggle */}
        {onToggleTheme && (
          <div className="pointer-events-auto">
            <ThemeToggle
              isDark={isDark}
              onToggle={onToggleTheme}
              className="relative bottom-auto right-auto shadow-lg pointer-events-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
}
