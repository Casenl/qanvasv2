import React from "react";
import { CanvasItem } from "@/lib/types";
import {
  ContextMenuAction,
  ContextMenuItem,
} from "@/components/canvas/controls/ContextMenu";

/** Inline outline icon used by context-menu entries. */
function MenuIcon({ d }: { d: string }) {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={d}
      />
    </svg>
  );
}

// Shared path data (PNG/JPG share the image glyph; SVG/PDF share the document glyph).
const IMAGE_ICON =
  "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z";
const DOC_ICON =
  "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z";

export interface ContextMenuActionsParams {
  /** The base actions from useContextMenu (Duplicate, Copy, ..., Group, Lock, Delete). */
  baseActions: ContextMenuAction[];
  selectedIds: string[];
  items: CanvasItem[];
  frameExport: {
    exportFrameAsPNG: (id: string) => void;
    exportFrameAsJPG: (id: string) => void;
    exportFrameAsSVG: (id: string) => void;
    exportFrameAsPDF: (id: string) => void;
  };
  layerOps: {
    bringToFront: () => void;
    bringForward: () => void;
    sendBackward: () => void;
    sendToBack: () => void;
  };
}

/**
 * Build the canvas context-menu entries: base actions, frame-export options (only
 * for a single selected frame), and z-order actions. Extracted from CanvasBoard to
 * keep that component focused; pure given its params.
 */
export function getContextMenuActions({
  baseActions,
  selectedIds,
  items,
  frameExport,
  layerOps,
}: ContextMenuActionsParams): ContextMenuItem[] {
  const isSingleFrame =
    selectedIds.length === 1 &&
    items.find((item) => item.id === selectedIds[0])?.entityType === "frame";

  const frameExportActions: ContextMenuItem[] = isSingleFrame
    ? [
        {
          id: "export-png",
          label: "Export as PNG",
          icon: <MenuIcon d={IMAGE_ICON} />,
          action: () => frameExport.exportFrameAsPNG(selectedIds[0]),
        },
        {
          id: "export-jpg",
          label: "Export as JPG",
          icon: <MenuIcon d={IMAGE_ICON} />,
          action: () => frameExport.exportFrameAsJPG(selectedIds[0]),
        },
        {
          id: "export-svg",
          label: "Export as SVG",
          icon: <MenuIcon d={DOC_ICON} />,
          action: () => frameExport.exportFrameAsSVG(selectedIds[0]),
        },
        {
          id: "export-pdf",
          label: "Export as PDF",
          icon: <MenuIcon d={DOC_ICON} />,
          action: () => frameExport.exportFrameAsPDF(selectedIds[0]),
        },
        { type: "separator" as const },
      ]
    : [];

  return [
    ...baseActions.slice(0, 2), // Duplicate, Copy
    { type: "separator" as const },
    ...frameExportActions,
    {
      id: "bring-to-front",
      label: "Bring to Front",
      icon: <MenuIcon d="M5 15l7-7 7 7" />,
      action: layerOps.bringToFront,
      shortcut: "Ctrl+]",
    },
    {
      id: "bring-forward",
      label: "Bring Forward",
      icon: <MenuIcon d="M7 11l5-5 5 5M7 17l5-5 5 5" />,
      action: layerOps.bringForward,
      shortcut: "Ctrl+[",
    },
    {
      id: "send-backward",
      label: "Send Backward",
      icon: <MenuIcon d="M17 13l-5 5-5-5M17 7l-5 5-5-5" />,
      action: layerOps.sendBackward,
      shortcut: "Ctrl+Shift+[",
    },
    {
      id: "send-to-back",
      label: "Send to Back",
      icon: <MenuIcon d="M19 9l-7 7-7-7" />,
      action: layerOps.sendToBack,
      shortcut: "Ctrl+Shift+]",
    },
    { type: "separator" as const },
    ...baseActions.slice(2), // Group, Lock, Delete
  ];
}
