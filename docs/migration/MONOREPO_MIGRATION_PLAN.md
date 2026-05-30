# Qanvas v2 → ITQ Monorepo Migration Plan (with Firebase backend)

> Consolidated from four review reports (Architecture, Monorepo Fit, Backend & Data Model, Tooling & CI), reconciled against the live codebase at `D:\Syncthing\development\qanvasv2`.
>
> _Generated 2026-05-30 by a multi-agent review workflow (`qanvas-monorepo-migration-review`)._

---

## 1. Executive Summary & Current State

**Goal:** absorb the standalone `qanvasv2` app into the ITQ monorepo (`itq-app-portal`) as `apps/qanvas`, swap its build system from Next.js to Vite 6, wire ITQ SSO + Firebase Auth, and add a Firestore-backed persistence layer for canvas boards — while keeping the product catalog and per-user board state cleanly separated.

**What qanvas is today (verified):**

- **Framework:** Next.js 16 App Router + Turbopack, React 19.2 (`package.json` confirms `next ^16.1.1`, `react ^19.2.3`). Entry is `src/app/layout.tsx` + `src/app/page.tsx`. `next.config.ts` is an empty stub.
- **Rendering:** entirely client-side. Every interactive file carries `'use client'` (~32 files). A `mounted`-spinner guard in `CanvasBoard.tsx` exists solely to dodge SSR hydration mismatch from the JS-driven theme.
- **State:** all canvas state (items, history, selection, theme, config, snapshots) lives inside one **1184-line** `src/components/canvas/board/CanvasBoard.tsx` god-component that calls ~22 hooks. Confirmed line counts: `CanvasBoard.tsx` 1184, `useHistory.ts` 159, `useSnapshotManager.ts` 133.
- **Data:** in-memory mock data only — `src/lib/data/mockData.ts` (113 lines) exports `PROPOSITIONS`, `VENDORS`, `PRODUCTS`, `SOLUTIONS`, imported statically into `CanvasBoard.tsx`. No persistence, no auth, no backend.
- **Type model:** `CanvasItem.data` is `any` (`src/lib/types.ts:84`); typed variants exist in `src/lib/types/shapeTypes.ts` but are only applied as unsafe casts at render time.
- **Fonts:** `next/font/google` loads `Titillium_Web` in `src/app/layout.tsx`.
- **Tooling:** broken `next lint` script, no ESLint flat config, no Prettier config, no typecheck script, no Vitest. Tailwind v4 via `@tailwindcss/postcss` (PostCSS CJS).
- **Dead code:** `Sidebar.tsx`, `CanvasArea.tsx`, `useCanvasState.ts`, `useCanvasHandlers.ts`, `useSnapToGrid.ts` are defined but never imported.
- **Environment hazard:** Synology/Syncthing injects `@eaDir/` directories everywhere (already gitignored locally; must be honored in the monorepo too).

**The single fact that gates everything:** the monorepo is exclusively Vite 6 + npm workspaces. There is no Next.js anywhere in it — no `next` dep, no Next hosting rewrite, no shared Next config. So absorption is not "drop it in"; it is a build-system transplant.

---

## 2. Target-State Architecture

`apps/qanvas` as a first-class monorepo Vite SPA:

```
itq-app-portal/
  apps/qanvas/
    index.html              # Vite SPA entry; Titillium Web <link>; <div id="root">
    index.tsx               # createRoot(...).render(<ErrorBoundary><App/></ErrorBoundary>)
    App.tsx                 # AuthGate → LoginScreen / access-denied / <CanvasBoard/>
    vite.config.ts          # cacheDir /tmp/.vite-qanvas, port 3006, aliases, dedupe
    vite-env.d.ts           # /// <reference types="vite/client" />
    tsconfig.json           # ES2022, @itq/shared paths, no next plugin
    postcss.config.mjs      # ESM; @tailwindcss/postcss (or @tailwindcss/vite plugin)
    vitest.config.ts        # jsdom + react
    .env.local              # VITE_FIREBASE_* (gitignored)
    components/ hooks/ lib/  # migrated source (flat under app root)
```

- **Build:** Vite 6 + `@vitejs/plugin-react`, modelled on `apps/animation-studio/vite.config.ts`. `cacheDir` → `/tmp/.vite-qanvas` on win32/WSL (Syncthing file-lock workaround). Port **3006** (next free per CLAUDE.md table; verify before claiming). Aliases `@` and `@itq/shared`; `resolve.dedupe` for `react`, `react-dom`, `firebase`, `@dnd-kit/core`.
- **Shared package:** `@itq/shared` provides `app`, `auth`, `db`, `functions`, `storage`, `onAuthStateChanged`, `hasAppAccess`, `handleSSOToken`, `ErrorBoundary`, etc. A local `src/lib/firebase.ts` re-export barrel keeps internal imports at `@/lib/firebase`.
- **Auth/SSO:** `useAuth` hook mirroring `apps/animation-studio/hooks/useAuth.ts` with `APP_ID = 'qanvas'`. `handleSSOToken()` runs in the **first** `useEffect`, before `onAuthStateChanged`. Access gated by `hasAppAccess(uid, 'qanvas')`.
- **Firebase data:** Firestore with two data categories — global **catalog** (read-once reference data) and per-user **boards** (read/write working state with debounced autosave). Snapshots as a board subcollection.
- **Branding:** ITQ logo via `ITQLogo.tsx` copied from `apps/animation-studio/components/shared/ITQLogo.tsx` (inline SVG short-term; Asset Hub URL as follow-up). Theme CSS vars scoped to avoid collision with animation-studio.
- **Hosting:** new `qanvas` target in `firebase.json` + `.firebaserc`, `apps/qanvas/dist`, SPA rewrite + standard security headers. CD path filter `apps/qanvas/**` added to `.github/workflows/cd.yml`.

---

## 3. Prioritized, Phased Plan

> Phase 0 is framework-agnostic and can start now. Phase 1 is gated on the **Next-vs-Vite decision** (Section 5). Phases 2–4 depend on Phase 1.

### Phase 0 — Safe cleanups & decoupling (NO framework change)

**Goal:** shrink the surface area and create clean seams so the later framework swap and Firebase injection touch as few call sites as possible. Everything here is reversible and works on the current Next.js build.

**Ordered steps:**

1. **Delete dead code:** `src/components/canvas/Sidebar.tsx`, `src/components/canvas/CanvasArea.tsx`, `src/hooks/useCanvasState.ts`, `src/hooks/useCanvasHandlers.ts`, `src/hooks/useSnapToGrid.ts`. Run `npx tsc --noEmit` to confirm zero import breaks.
2. **Introduce the persistence seam (no behavior change):** create `src/hooks/useCanvasDataSource.ts` returning `{ propositions, vendors, products, solutions, items: [], isLoading: false, error: null }` from the existing mock. Replace the static `mockData` imports in `CanvasBoard.tsx` (lines 56–59) with this hook. This is the future Firebase injection point and isolates the data source from the component.
3. **Add a typed style util:** create `src/lib/utils/itemStyle.ts` with a pure `updateItemStyle(item, updates)`. Replace the duplicated per-`entityType` dispatch switches in `CanvasBoard.tsx` (~926–1053) and `AlignmentToolbar.tsx` (~80–200). Single source of truth, future Firestore patch generator.
4. **Extract context-menu actions:** move the inline ContextMenu JSX/SVG tree (`CanvasBoard.tsx` ~711–898) into `src/lib/utils/contextMenuActions.ts` as `getContextMenuActions(params)`. Deduplicate the byte-identical PNG/JPG export SVG into one shared icon.
5. **Fix `useHistory` equality cost:** replace the two `JSON.stringify(...)===JSON.stringify(...)` guards (`useHistory.ts:41` and `:88`) with a revision counter / shallow length+last-id fast path.
6. **Fix frame-containment churn:** move the `setItemsWithoutHistory` containment sync out of the `items`-dependency `useEffect` (`CanvasBoard.tsx` ~304–350) into `onTransformEnd`/`onDragEnd` only. Stop O(frames×items) recomputation per pointer move.
7. **Type the drawing-mode prop:** export a `DrawingModeReturn` interface from `src/hooks/useDrawingMode.ts`; replace `drawingState: any` in `CanvasWorkspace.tsx`.

**Key files:** `CanvasBoard.tsx`, `AlignmentToolbar.tsx`, `useHistory.ts`, `useFrameContainment.ts`, `useDrawingMode.ts`, `CanvasWorkspace.tsx`, new `useCanvasDataSource.ts`, `itemStyle.ts`, `contextMenuActions.ts`.

**Exit criteria:** dead files gone; `tsc --noEmit` clean; mock data reached only through `useCanvasDataSource`; style dispatch and context-menu logic each live in one place; no `JSON.stringify` in `useHistory`; app still runs identically under `next dev`.

> **Deliberately deferred:** the full `CanvasContext` extraction and the discriminated-union `CanvasItem` retype are **wide-reaching** (every one of 22 hooks touches `CanvasItem`). Do these as a **staged Phase 4 follow-up** with a feature-flag or parallel type alias — NOT during the framework swap, to keep diffs reviewable.

---

### Phase 1 — Build/tooling migration (Next.js → Vite, into the monorepo)

**Goal:** the app builds and runs as `apps/qanvas` under Vite with green lint/format/typecheck — no Firebase yet.

**Ordered steps:**

1. **Scaffold** `apps/qanvas/`. Move `src/` contents to the app root (flat layout matching animation-studio: `components/`, `hooks/`, `lib/` directly under `apps/qanvas/`). Decide and lock the `@` alias target accordingly (see open decision).
2. **Rewrite `package.json`:** name `@itq/qanvas`, `type: module`, `private: true`. Remove `next`, `eslint-config-next`. Add `vite ^6`, `@vitejs/plugin-react ^4`, `vitest`, `@itq/shared: "*"`, `firebase ^12`. Scripts: `dev: vite --port 3006`, `build: vite build`, `preview`, `typecheck: tsc --noEmit`, `test`, `test:run`. **No** `lint` script (root handles `apps/**`).
3. **Delete Next artifacts:** `next.config.ts`, `next-env.d.ts`, the `plugins:[{name:"next"}]` block and `.next/**` includes in `tsconfig.json`.
4. **`vite.config.ts`** (template: `apps/animation-studio/vite.config.ts`): `cacheDir` `/tmp/.vite-qanvas` on win32/WSL; `port 3006`; `host 0.0.0.0`; `plugins:[react()]`; aliases `@`→app root/src and `@itq/shared`→`../../packages/shared/src`; `resolve.dedupe ['react','react-dom','firebase','@dnd-kit/core']`; `build.rollupOptions.onwarn` suppressing `MODULE_LEVEL_DIRECTIVE`.
5. **`vite-env.d.ts`** with `/// <reference types="vite/client" />` — required **before** the typecheck CI gate engages, or `import.meta.env` throws TS2339.
6. **`tsconfig.json`:** target `ES2022`, `moduleDetection: force`, drop `incremental`, drop next includes, add `vite-env.d.ts`, add `@itq/shared` + `@itq/shared/*` paths.
7. **Entry conversion:** create `index.html` (`<div id="root">`, `<title>Qanvas | ITQ</title>`, Google Fonts `Titillium+Web:wght@200;300;400;600;700;900`). Create `index.tsx` rendering `<React.StrictMode><ErrorBoundary appName="Qanvas"><App/></ErrorBoundary></React.StrictMode>`. Create `App.tsx` (Phase 1: just renders `<CanvasBoard/>`; AuthGate wired in Phase 2). Delete `src/app/` (`layout.tsx`, `page.tsx`, `globals.css` → move content into `index.css`, imported from `index.tsx`).
8. **Remove `next/font`:** delete the `Titillium_Web` import in `layout.tsx`; set `font-family: 'Titillium Web', sans-serif` on `body` in CSS. _(Optionally self-host the TTF in `public/fonts/` to avoid a render-blocking external request and match Next's zero-latency font behavior.)_
9. **Strip all `'use client'` directives** from the ~32 `.tsx` files (global find/replace). The `onwarn` handler is the safety net for any missed ones.
10. **Delete the SSR `mounted`-spinner guard** in `CanvasBoard.tsx` (state, its `useEffect`, and the early-return spinner ~562–567). Theme applies synchronously in a pure SPA.
11. **PostCSS → ESM:** rename `postcss.config.js`→`postcss.config.mjs` (`export default { plugins: { '@tailwindcss/postcss': {} } }`). _(Or adopt `@tailwindcss/vite` plugin to match animation-studio and drop PostCSS entirely.)_ `globals.css` `@import "tailwindcss";` and `@theme` block survive unchanged; just import from the Vite entry.
12. **Monorepo wiring:** root `package.json` gets `dev:qanvas`/`build:qanvas`/`firebase:deploy:qanvas`; add `apps/qanvas` to `build:all` and `test:all`. Confirm root `.gitignore` has `@eaDir/` and `*@SynoEAStream`. Add minimal `vitest.config.ts` (jsdom + react, empty suite) so `test:run` exists.
13. **Dependency reconciliation:** align `@dnd-kit/sortable` (qanvas `^10` vs assethub `^8` — bump assethub to `^10`, regression-test assethub drag) and `@dnd-kit/core` (`^6.3` vs `^6.1`). Pin `lucide-react` (qanvas `^0.562` vs animation-studio `^0.460`) via root `overrides`. `html-to-image` + `jspdf ^4` already match the monorepo — no change.
14. **Format & verify:** run `npx prettier --write 'apps/qanvas/**/*.{ts,tsx,css,html}'` as a **standalone commit** (singleQuote, semi, trailingComma es5, printWidth 120, tabWidth 2) to pass `format:check` and keep blame clean. Then `npm run build:qanvas`, `npm run lint`, `npx tsc --noEmit`. Fix all `error`-level lint; log (do not fix) `warn`-level react-compiler noise from CanvasBoard.

**Key files:** all of `apps/qanvas/` config files; `src/app/*`; `CanvasBoard.tsx`; root `package.json`, `firebase.json`, `.firebaserc`, `.gitignore`, `eslint.config.js`, `.prettierrc`.

**Exit criteria:** `npm run build:qanvas` succeeds; `format:check`, root ESLint (zero errors), and `tsc --noEmit` all green; app loads in `vite --port 3006` with no SSR spinner and Titillium Web rendering; assethub still builds after dnd-kit bump.

---

### Phase 2 — Auth/SSO + shared package

**Goal:** users reach qanvas only via valid ITQ SSO + app access; all board data ops gate on resolved auth.

**Ordered steps:**

1. Create `apps/qanvas/.env.local` with the six `VITE_FIREBASE_*` values (itq-app-portal project). Gitignore it. Optionally `VITE_USE_EMULATORS=true` for local dev. **No `process.env`, no NEXT*PUBLIC*, no root-level `.env.local`.**
2. Create `src/lib/firebase.ts` as a one-line re-export barrel from `@itq/shared`.
3. Create `src/hooks/useAuth.ts` mirroring `apps/animation-studio/hooks/useAuth.ts` with `APP_ID = 'qanvas'`: `handleSSOToken()` in first `useEffect`, then `onAuthStateChanged`, then `hasAppAccess(uid,'qanvas')`. Expose `{ currentUser, isLoading, hasAccess }`.
4. Build `App.tsx` AuthGate: spinner while loading → LoginScreen if no user → access-denied if `!hasAccess` → `<CanvasBoard/>`. Add `ITQLogo.tsx` (copied from animation-studio) to login/loading screens.
5. Register `qanvas` in the **admin portal**: add app card + `app_access` provisioning so SSO token generation works. **Do this atomically with the first deploy** — otherwise direct navigators hit a login screen with no token path.

**Key files:** `.env.local`, `src/lib/firebase.ts`, `src/hooks/useAuth.ts`, `App.tsx`, `components/shared/ITQLogo.tsx`; admin portal app registry.

**Exit criteria:** logging in through the portal lands in qanvas; a user without access sees access-denied; direct URL navigation initiates SSO correctly; no Firestore call fires before auth resolves.

---

### Phase 3 — Firebase data layer & persistence

**Goal:** catalog comes from Firestore; per-user boards persist with debounced autosave; first-board bootstrap works.

**Ordered steps:**

1. Add app id `qanvas` to the `apps/{appId}` registry (seed script). Add `qanvas` sections to `firestore.rules` (every path gated by `hasAppAccess('qanvas')`, mirroring `animation-studio/data`). Deploy rules. **Without the `app_access/{uid}_qanvas` doc + rule, every read silently denies.**
2. Write `scripts/seed-qanvas-catalog.cjs`: read `mockData.ts` values, write `propositions`/`vendors`/`products` to `qanvas/data/catalog/*` with `serverTimestamp`. Validate on emulator, then prod. Keep `PRODUCT_TEMPLATES` in `productConfig.ts` as code (metric config, not user data).
3. Replace `useCanvasDataSource` (built in Phase 0) internals with a `useCatalog` Firestore fetch — parallel `getDocs`, cached in state, `{ loading }` exposed. The rest of the app is untouched because it already reads through the hook.
4. Define schema types `src/lib/types/boardTypes.ts`: `BoardDocument = { id, title, userId, createdAt, updatedAt, items: CanvasItem[], canvasConfig, lastSnapshotId? }`.
5. Implement `useBoardPersistence(boardId, items, canvasConfig)`: loads board via `withConverter` (Timestamp→number, rehydrate missing `coreMetrics` keys from `DEFAULT_CANVAS_CONFIG`, since Firestore drops `undefined`); debounced save (~2000ms after last change); skip save while `isLoading`; **800KB soft size guard** (log + skip, never throw) against the 1MB doc limit.
6. First-board bootstrap: on auth resolved, read `qanvas/data/userPreferences/{uid}.lastOpenedBoardId`; if absent, create a board (`serverTimestamp`, empty `items`, `DEFAULT_CANVAS_CONFIG`) and store its id. Boards are first-class from day one even with single-board UI.
7. Add composite/field indexes to `firestore.indexes.json` (board list `userId == uid orderBy updatedAt desc`; snapshots `orderBy createdAt desc`). Deploy before "done".
8. Emulator round-trip test `scripts/test-qanvas-persistence.cjs` via `firebase emulators:exec`.

**Key files:** `firestore.rules`, `firestore.indexes.json`, `scripts/seed-qanvas-catalog.cjs`, `useCanvasDataSource.ts`/`useCatalog.ts`, `useBoardPersistence.ts`, `boardTypes.ts`, `CanvasBoard.tsx`, `canvasConfig.ts`.

**Persistence boundaries (explicit):** PERSIST `items[]`, `canvasConfig`, board metadata. DO NOT persist `history.past/future` (undo is session-local), zoom/pan, `selectedIds`, active tool. `colorSchemeEnabled`/theme stay in `localStorage`.

**Exit criteria:** catalog loads from Firestore; a new user auto-gets a default board; edits autosave and survive refresh; emulator test passes round-trip fidelity; size guard verified; rules deny cross-user access.

---

### Phase 4 — Snapshots/versioning + polish

**Goal:** named snapshots persist; branding/theme cleaned up; CD wired; staged type-safety upgrade.

**Ordered steps:**

1. Migrate `useSnapshotManager` to a subcollection `qanvas/data/boards/{boardId}/snapshots/{id}`: `boardId` param; create→`setDoc` w/ `serverTimestamp`; load→`getDocs` ordered `createdAt desc` (state = cache); delete→`deleteDoc`. Pure `compareSnapshots` unchanged. **Cap at ~20 snapshots/board** in the write path (read-cost + cumulative size).
2. Scope theme CSS vars under `[data-app='qanvas']` (or adopt animation-studio's `--bg/--surface/--text/--orange` names) so qanvas's palette can't bleed into shared components. Align primary to ITQ Royal Blue `#04055A` / accent Orange `#FF4F41` (current `#3b82f6`/`#8b5cf6` are off-brand).
3. Add `apps/qanvas` hosting target to `firebase.json` (public `apps/qanvas/dist`, SPA rewrite, standard headers: `Cache-Control: no-cache`, `X-Content-Type-Options`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy`, HSTS, `Permissions-Policy`) + `.firebaserc` site mapping. Create the Firebase Hosting site in console.
4. Wire CD: add `apps/qanvas/**` to the `dorny/paths-filter` config and a deploy step in `.github/workflows/cd.yml`.
5. If image uploads (`entityType='image'`) use Firebase Storage, verify the `roles/firebaserules.firestoreServiceAgent` cross-service IAM grant before deploying storage rules (documented monorepo incident).
6. **Staged type-safety upgrade (follow-up):** convert `CanvasItem` to a discriminated union keyed on `entityType`, add per-variant guards (`isFrameItem`, etc.), and extract the full `CanvasContext`/store. Do behind a parallel type alias to keep the 22-hook blast radius reviewable.

**Key files:** `useSnapshotManager.ts`, `useTheme.ts`, `theme.ts`, `firebase.json`, `.firebaserc`, `.github/workflows/cd.yml`, `firestore.indexes.json`.

**Exit criteria:** snapshots survive refresh and cap correctly; theme vars cannot leak; `firebase deploy` publishes to the qanvas site; CD auto-deploys on `apps/qanvas/**` changes; production canary clean.

---

## 4. Firebase Data Model & Security-Rules Sketch

**Collections (app-namespaced under `qanvas/`):**

```
qanvas/data/catalog/propositions/{id}      # global reference, read-once, admin-seeded
qanvas/data/catalog/vendors/{id}
qanvas/data/catalog/products/{id}
qanvas/data/catalog/solutionTemplates/{id} # optional; or keep SOLUTIONS in code as starter set
qanvas/data/userPreferences/{userId}        # { lastOpenedBoardId }
qanvas/data/boards/{boardId}                # BoardDocument (items[] as JSON array)
qanvas/data/boards/{boardId}/snapshots/{id} # SnapshotDocument (full items[]+config copy)
```

**Documents:**

```ts
BoardDocument = {
  id; title; userId;
  createdAt; updatedAt;        // serverTimestamp → number via converter
  items: CanvasItem[];         // serialized array (NOT a subcollection)
  canvasConfig: CanvasConfiguration;
  lastSnapshotId?;
}
SnapshotDocument = {
  id; name; description?;
  createdAt;                   // serverTimestamp → number
  items: CanvasItem[]; canvasConfig: CanvasConfiguration;
}
```

**Why document-per-board (not items-as-subcollection):** the items array is the unit of undo (`useHistory` stores whole-array snapshots), and `setItemsWithoutHistory` fires up to 60×/sec during gestures — per-item Firestore writes would be ruinous. One document keeps writes on the debounced autosave path only. Risk is the 1MB doc limit; mitigated by the 800KB soft guard. Chunking/subcollection is a future option, not a now-optimization.

**Rules sketch:**

```
match /qanvas/data/catalog/{coll}/{doc} {
  allow read:  if hasAppAccess(request.auth.uid, 'qanvas');
  allow write: if isAppAdmin(request.auth.uid, 'qanvas');   // seed/admin only
}
match /qanvas/data/userPreferences/{userId} {
  allow read, write: if request.auth.uid == userId
                     && hasAppAccess(request.auth.uid, 'qanvas');
}
match /qanvas/data/boards/{boardId} {
  allow read, write: if hasAppAccess(request.auth.uid, 'qanvas')
                     && resource.data.userId == request.auth.uid;   // owner-only (single-user today)
  match /snapshots/{snapId} {
    allow read, write: if hasAppAccess(request.auth.uid, 'qanvas')
                       && get(/databases/$(database)/documents/qanvas/data/boards/$(boardId)).data.userId == request.auth.uid;
  }
}
```

**Converter must:** map Firestore `Timestamp`→`number` (monorepo `timestampToNumber()` convention); rehydrate missing optional `coreMetrics` keys from `DEFAULT_CANVAS_CONFIG` (Firestore drops `undefined`); leave `data: any` alone (no union retype here). Single-user/last-write-wins is explicit; schema does not preclude future CRDT/OT.

---

## 5. Risks & Open Decisions

### THE GATING DECISION (decide first — blocks Phase 1 onward)

**Next.js → Vite framework swap.** The monorepo has zero Next.js support; every app is Vite 6. Staying on Next would mean teaching the monorepo a second build system, a second hosting model, and breaking the uniform CI/CD — effectively impossible to absorb cleanly. The reports unanimously recommend the Vite swap, and the app is already 100% client-rendered (no SSR/RSC value at risk), so it's a tooling swap, not a rendering-model change. **Recommendation: commit to Vite.** Everything from Phase 1 is wasted/divergent until this is confirmed.

### Other open decisions

- **`@` alias target:** `./src/*` (qanvas current, conventional) vs `./*` (monorepo flat convention). Whichever — `vite.config.ts` and `tsconfig.json` must agree.
- **Font delivery:** Google Fonts `<link>` (render-blocking external) vs self-hosted Titillium Web TTF in `public/` (matches Next's zero-latency, more setup).
- **Tailwind:** keep `@tailwindcss/postcss` (`.mjs`) vs adopt `@tailwindcss/vite` plugin (matches other apps, faster HMR).
- **Theme var strategy:** scope under `[data-app='qanvas']` vs rename to animation-studio's `--bg/--surface/--text` set for cross-app sharing.
- **Solution templates:** keep `SOLUTIONS` in code as a starter set vs move to `qanvas/data/catalog/solutionTemplates` (note: templates reference product IDs that must stay valid in the catalog).
- **Port 3006:** confirm unclaimed before assigning.
- **ITQ logo:** inline `ITQLogo.tsx` now (recommended) vs Asset Hub public URL (follow-up).

### Carry-forward risks

- **Discriminated-union `CanvasItem` retype** touches all 22 hooks — stage it (Phase 4 follow-up) behind a parallel alias; do NOT bundle with the framework swap.
- **Firestore `undefined` drop** silently loses optional `coreMetrics` → subtle bugs unless the converter rehydrates. Hard requirement.
- **1MB doc limit** for dense pen-path / large boards — 800KB guard is mitigation, not a fix.
- **`@dnd-kit/sortable` 8→10** hoist conflict — bump assethub together and regression-test, don't skip.
- **Admin app-card + `app_access` must ship atomically** with first deploy or users get a dead login screen.
- **CI first-PR traps:** missing `vite-env.d.ts` (TS2339), un-run Prettier (`format:check` fail), leftover `eslint-config-next` (module-not-found). All handled in Phase 1 ordering.
- **Single-user/last-write-wins:** concurrent multi-device editing silently overwrites; debounced autosave worsens it. Out of scope but acknowledged.
- **Cross-service IAM grant** for storage rules calling `hasAppAccess()` — verify if image uploads use Storage.

---

## 6. Immediately Actionable Safe Cleanups

These are doable **right now on the current Next.js build**, commit cleanly, and commit you to nothing about the framework decision.

1. **Delete dead files** (never imported): `src/components/canvas/Sidebar.tsx`, `src/components/canvas/CanvasArea.tsx`, `src/hooks/useCanvasState.ts`, `src/hooks/useCanvasHandlers.ts`, `src/hooks/useSnapToGrid.ts`. Then run `npx tsc --noEmit` to confirm no import breaks.
2. **Introduce `src/hooks/useCanvasDataSource.ts`** returning the mock catalog synchronously (`{propositions,vendors,products,solutions,items:[],isLoading:false,error:null}`) and replace the static `mockData` imports in `CanvasBoard.tsx` (lines 56–59). This is the future Firebase seam with zero behavior change.
3. **Extract the per-`entityType` style-dispatch** into a pure `updateItemStyle()` in `src/lib/utils/itemStyle.ts`; replace the duplicated switches in `CanvasBoard.tsx` (~926–1053) and `AlignmentToolbar.tsx` (~80–200).
4. **Extract `getContextMenuActions()`** to `src/lib/utils/contextMenuActions.ts` from the inline JSX/SVG tree in `CanvasBoard.tsx` (~711–898); deduplicate the identical PNG/JPG export SVG into one shared icon.
5. **Replace the `JSON.stringify` equality guards** in `useHistory.ts:41` and `:88` with a revision counter or shallow length+last-id fast path.
6. **Move frame-containment sync** out of the `items`-dependency `useEffect` (`CanvasBoard.tsx` ~304–350) into `onTransformEnd`/`onDragEnd` handlers only, eliminating per-pointer-event O(frames\*items) recomputation.
7. **Export a `DrawingModeReturn` interface** from `useDrawingMode.ts` and use it for the `drawingMode` prop in `CanvasWorkspace.tsx` instead of `drawingState: any`.
8. **Run Prettier** (singleQuote, semi, trailingComma es5, printWidth 120, tabWidth 2) over the source as a standalone formatting-only commit so the eventual monorepo `format:check` passes without polluting blame.
9. **Verify `.gitignore`** covers `@eaDir/` and `*@SynoEAStream` (Synology/Syncthing pollution) so they are never accidentally committed via `git add .`.
