import React from 'react';
import {
  FileImage,
  FileCode,
  FileText,
  ArrowUpToLine,
  ArrowUp,
  ArrowDown,
  ArrowDownToLine,
  LucideIcon,
} from 'lucide-react';
import { CanvasItem } from '@/lib/types';
import { ContextMenuAction, ContextMenuItem } from '@/components/canvas/controls/ContextMenu';

/** Render a lucide icon at menu size, tinted by the central icon color. */
function menuIcon(Icon: LucideIcon) {
  return <Icon className="w-4 h-4" style={{ color: 'var(--color-icon)' }} />;
}

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
    selectedIds.length === 1 && items.find((item) => item.id === selectedIds[0])?.entityType === 'frame';

  const frameExportActions: ContextMenuItem[] = isSingleFrame
    ? [
        {
          id: 'export-png',
          label: 'Export as PNG',
          icon: menuIcon(FileImage),
          action: () => frameExport.exportFrameAsPNG(selectedIds[0]),
        },
        {
          id: 'export-jpg',
          label: 'Export as JPG',
          icon: menuIcon(FileImage),
          action: () => frameExport.exportFrameAsJPG(selectedIds[0]),
        },
        {
          id: 'export-svg',
          label: 'Export as SVG',
          icon: menuIcon(FileCode),
          action: () => frameExport.exportFrameAsSVG(selectedIds[0]),
        },
        {
          id: 'export-pdf',
          label: 'Export as PDF',
          icon: menuIcon(FileText),
          action: () => frameExport.exportFrameAsPDF(selectedIds[0]),
        },
        { type: 'separator' as const },
      ]
    : [];

  return [
    ...baseActions.slice(0, 2), // Duplicate, Copy
    { type: 'separator' as const },
    ...frameExportActions,
    {
      id: 'bring-to-front',
      label: 'Bring to Front',
      icon: menuIcon(ArrowUpToLine),
      action: layerOps.bringToFront,
      shortcut: 'Ctrl+]',
    },
    {
      id: 'bring-forward',
      label: 'Bring Forward',
      icon: menuIcon(ArrowUp),
      action: layerOps.bringForward,
      shortcut: 'Ctrl+[',
    },
    {
      id: 'send-backward',
      label: 'Send Backward',
      icon: menuIcon(ArrowDown),
      action: layerOps.sendBackward,
      shortcut: 'Ctrl+Shift+[',
    },
    {
      id: 'send-to-back',
      label: 'Send to Back',
      icon: menuIcon(ArrowDownToLine),
      action: layerOps.sendToBack,
      shortcut: 'Ctrl+Shift+]',
    },
    { type: 'separator' as const },
    ...baseActions.slice(2), // Group, Lock, Delete
  ];
}
