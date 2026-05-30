# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Qanvas v2 is a single-page **business/solution architecture canvas** — an infinite, pan/zoom whiteboard where users drag ITQ products, vendors, and solutions onto a board alongside freeform drawing tools (shapes, text, sticky notes, frames, lines/arrows, pen). It is an ITQ portfolio tool.

**Current state:** standalone **Next.js 16** app (App Router, Turbopack), **client-only**. All data is hardcoded mock data in `src/lib/data/mockData.ts` (`PROPOSITIONS`, `VENDORS`, `PRODUCTS`, `SOLUTIONS`); state lives in memory only — no backend, no persistence, no auth, no deploy config.

**Intended direction:** become one of the apps in the `D:\Syncthing\development\itq-app-portal` monorepo — Firebase-backed, using the logo from that monorepo's Asset Hub. See "Conventions adopted from itq-app-portal" below. None of that exists yet; treat Firebase/monorepo notes as forward-looking.

## Commands

```bash
npm run dev      # Next dev server (Turbopack), http://localhost:3000
npm run build    # Production build — runs TypeScript; MUST pass before shipping
npm run start    # Serve the production build
npx tsc --noEmit # Typecheck only (faster than build); tsconfig is strict
```

- **No test framework is configured** — do not invent `npm test`. Verify changes by running the app and (for UI) browser-testing (see testing rule below).
- `npm run lint` is **broken under Next 16** (`package.json` still has `next lint`, removed in Next 16). Use `npx tsc --noEmit` and `npm run build` instead, or run ESLint directly.
- **Turbopack cache + `@eaDir`:** this folder has historically lived under Synology/Syncthing, which injects `@eaDir` metadata dirs. If the dev server refuses to start with `Unexpected file in persistence directory: ...\.next\...\@eaDir`, run `rm -rf .next` and restart. `@eaDir/` and `*@SynoEAStream` are gitignored.

## Architecture

### The single orchestrator: `CanvasBoard`

`src/app/page.tsx` renders one component: `src/components/canvas/board/CanvasBoard.tsx` (~900 lines). It is the god-component that owns all state and composes ~30 hooks (drag, history, multi-select, snapping, clipboard, layers, drawing, frames, snapshots, metrics, transform). Most features are added by wiring a new hook into `CanvasBoard` and passing its output down to `CanvasSidebar`, `CanvasWorkspace`, `FloatingToolbar`, `AlignmentToolbar`, `PropertiesPanel`, or `ContextMenu`. Read this file first to understand any feature.

### Universal item model + entityType dispatch

Everything on the canvas is a `CanvasItem` (`src/lib/types.ts`):

```ts
interface CanvasItem {
  id;
  entityId;
  entityType: EntityType;
  x;
  y;
  data: any;
  locked?;
  groupId?;
  rotation?;
  productConfig?;
}
```

- `data` is intentionally `any`. Each `entityType` (`shape | text | sticky-note | frame | line | arrow | pen | image | product | vendor | solution | ...`) has a corresponding typed shape in `src/lib/types/shapeTypes.ts` (`ShapeData`, `TextData`, `FrameData`, `LineData`, `PathData`, etc.).
- `src/components/canvas/CanvasItemRenderer.tsx` is the **dispatch switch**: it `switch(entityType)`es and casts `item.data as XData` to the matching renderer in `shapes/`, `text/`, `sticky/`, `frames/`, `line/`, `path/`, `image/`. Adding a new item type = add an `EntityType`, a `*Data` interface, a renderer folder, and a `case` here.
- Default styles/sizes for drawing tools live as `DEFAULT_*` consts in `shapeTypes.ts` — merge them when reading style (`{ ...DEFAULT_SHAPE_STYLE, ...data.style }`) since `data` is untyped.

### Undo/redo: history-aware setState (critical pattern)

`src/hooks/useHistory.ts` wraps the items array and exposes three setters — using the wrong one corrupts undo:

- `setState` (`setItems`) — normal mutation, **pushes a history entry**. Use for discrete actions (add, delete, align).
- `setStateWithoutHistory` (`setItemsWithoutHistory`) — silent mutation, **no history entry**. Use during continuous gestures (live drag/resize/rotate, auto-recompute of frame containment) so you don't flood the undo stack.
- `commitToHistory` — snapshots current state as one entry. Call **once** when a gesture ends.

The transform flow models this: `onTransformStart` flips `isTransformingRef`, updates route through `setItemsWithoutHistory`, and `onTransformEnd` calls `commitItemsToHistory`. Follow this for any new drag/continuous interaction.

### Theme system is JS-driven (not just CSS)

`src/hooks/useTheme.ts` injects **all** `--color-*` CSS custom properties onto `document.documentElement` at runtime from the theme objects in `src/lib/theme.ts` (`themes.dark` / `themes.light`), persists choice to `localStorage['qanvas-theme']`, defaults to **dark**, and sets `data-theme`. `globals.css` only declares a couple of `@theme` brand vars; the rest exist only after `useTheme` runs. This is why `CanvasBoard` shows a spinner until `mounted` — it avoids a hydration mismatch from client-applied theme vars.

**REQUIRED styling rule** (`docs/architecture/THEME_STYLING_BEST_PRACTICES.md`): components must style via `var(--color-surface)`, `var(--color-border)`, `var(--color-text)`, `var(--color-text-muted)`, `var(--color-brand-primary)`, etc. **Never** hardcode hex/rgb, never use Tailwind `dark:` classes, never invent custom HSL-opacity variants. Match existing components (`CanvasSidebar`, `PropertiesPanel`, `AlignmentToolbar`).

### Other structural facts

- **Drag & drop** is `@dnd-kit/core` with a custom collision strategy in `CanvasBoard` (pointer-within, falling back to the canvas droppable). Sidebar→canvas drops and on-canvas moves are both handled in `useDragHandlers` / `useCanvasDrop`.
- **Stack order = array order.** Layer ops (`useLayerOperations`) reorder the `items` array; later index = on top.
- **Frames** auto-track contained items via `useFrameContainment` (recomputed in a `setItemsWithoutHistory` effect); locking a frame cascades to its contents.
- **Exports** (`useFrameExport`) render a frame to PNG/JPG/SVG/PDF via `html-to-image` + `jspdf`.
- **Architecture layers** (presentation/application/data/…) and their colors are defined in `src/lib/constants.ts`.
- Path alias: `@/*` → `src/*`. Components use **named exports** and `'use client'`.
- Extensive design/feature docs live in `docs/` (start at `docs/README.md`); `THEME_STYLING_BEST_PRACTICES.md` is marked MUST-FOLLOW.

## Conventions adopted from the itq-app-portal monorepo

This app is slated to join `itq-app-portal`. Apply these now where they cost nothing; treat Firebase/Vite items as forward-looking until the integration happens.

**Applies now:**

- **ITQ portfolio context:** Proxmox, Nutanix, and OpenStack are **competitors, not ITQ portfolio vendors** — never list them as offerings. Ask before documenting any vendor as a partner.
- **Browser-test UI before claiming done.** For any UI change, a passing `npm run build` / typecheck proves compilation, not behavior. Run the app and verify the feature renders and interacts correctly (Playwright) before reporting it done — this is the monorepo's #1 source of rework.
- **React 19 / React-compiler rules:** never define a component inside another component's render — extract to module level. For dynamic icons use `React.createElement(getIcon(name), { className })` rather than `const Icon = getIcon(name); <Icon />`.
- **Imports:** prefer `import type` for type-only imports; favor named exports for components (already the norm here).
- **Design decisions:** use the `ui-ux-pro-max` skill for component styling, color systems, and UX patterns.
- **Code is auto-formatted** to 2-space indent / double quotes (a Prettier-style hook reformats on save). Match it; expect edits near your target lines to be reflowed.
- **Cost discipline / subagents:** delegate token-heavy QA (Playwright flows, CI watch loops, log scrapes) to cheaper models via the Agent tool (`model: "sonnet"`/`"haiku"`). Any verify/QA/exploration subagent prompt must be scoped read-only and told to STOP and report on blockers rather than self-granting access, editing source, or deploying.

**Forward-looking (when wired into the monorepo / Firebase):**

- The monorepo apps are **React 19 + Vite 6 + TypeScript + Firebase**, not Next.js. Integrating likely means aligning the build (Vite) and pulling shared code from `@itq/shared`.
- Import Firebase from a centralized `./firebase` / `@itq/shared`, never directly from `firebase/*`.
- Firestore: write `createdAt`/`updatedAt` as `serverTimestamp()`; read timestamps via `timestampToNumber()`; use enums for role/type unions.
- Cross-app auth uses server-side SSO token exchange — call `handleSSOToken()` in the auth hook before `onAuthStateChanged`.
- Per-app `VITE_FIREBASE_*` env vars live in the app's own `.env.local`.
- The **logo** comes from Asset Hub (`apps/assethub`), served as public `storage.googleapis.com/...` render URLs (REST API at `functions/src/api/assethubApi.ts`, docs at `/developers`) — reference it, don't vendor a local copy.

```

```
