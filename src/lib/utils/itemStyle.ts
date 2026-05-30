import { CanvasItem } from "@/lib/types";

/**
 * Properties that, for shapes, live directly on `data` (not under `data.style`).
 */
const TEXT_PROPERTIES = [
  "textColor",
  "fontSize",
  "fontFamily",
  "fontWeight",
  "fontStyle",
  "textAlign",
  "underline",
  "strikethrough",
  "lineHeight",
  "letterSpacing",
];

/**
 * Apply a single style/text property to a canvas item, returning a new item
 * (or the same item unchanged if its entityType isn't stylable).
 *
 * Single source of truth for the per-entityType property mapping that the
 * AlignmentToolbar emits via `onStyleChange(property, value)`. Pure and
 * serializable-friendly: when persistence lands, this is the natural place to
 * also derive a Firestore field patch (see MONOREPO_MIGRATION_PLAN.md Phase 0).
 */
export function updateItemStyle(
  item: CanvasItem,
  property: string,
  value: unknown,
): CanvasItem {
  switch (item.entityType) {
    case "shape": {
      if (TEXT_PROPERTIES.includes(property)) {
        // Text properties go directly in data
        return { ...item, data: { ...item.data, [property]: value } };
      }
      // Style properties go in data.style
      return {
        ...item,
        data: {
          ...item.data,
          style: { ...item.data.style, [property]: value },
        },
      };
    }

    case "text": {
      const newItem = { ...item, data: { ...item.data } };
      if (property === "textColor") newItem.data.color = value;
      else if (property === "fontSize") newItem.data.fontSize = value;
      else if (property === "fontFamily") newItem.data.fontFamily = value;
      else if (property === "fontWeight") newItem.data.bold = value === "bold";
      else if (property === "fontStyle")
        newItem.data.italic = value === "italic";
      else if (property === "textAlign") newItem.data.align = value;
      else if (property === "underline") newItem.data.underline = value;
      else if (property === "strikethrough") newItem.data.strikethrough = value;
      else if (property === "lineHeight") newItem.data.lineHeight = value;
      else if (property === "letterSpacing") newItem.data.letterSpacing = value;
      return newItem;
    }

    case "sticky-note": {
      const newItem = { ...item, data: { ...item.data } };
      if (property === "fillColor") newItem.data.color = value;
      return newItem;
    }

    case "frame": {
      const newItem = { ...item, data: { ...item.data } };
      if (property === "fillColor") newItem.data.color = value;
      else if (property === "cornerRadius") newItem.data.cornerRadius = value;
      return newItem;
    }

    case "pen":
    case "line":
    case "arrow": {
      // Stroke + label properties (identical mapping for pen/line/arrow)
      const newItem = { ...item, data: { ...item.data } };
      if (property === "strokeColor") newItem.data.strokeColor = value;
      else if (property === "strokeWidth") newItem.data.strokeWidth = value;
      else if (property === "strokeStyle") newItem.data.strokeStyle = value;
      else if (property === "label") newItem.data.label = value;
      else if (property === "labelColor") newItem.data.labelColor = value;
      else if (property === "labelSize") newItem.data.labelSize = value;
      else if (property === "labelBackgroundColor")
        newItem.data.labelBackgroundColor = value;
      else if (property === "labelFontFamily")
        newItem.data.labelFontFamily = value;
      else if (property === "labelBold") newItem.data.labelBold = value;
      else if (property === "labelItalic") newItem.data.labelItalic = value;
      return newItem;
    }

    default:
      return item;
  }
}
