module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/src/components/canvas/DraggableSidebarItem.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DraggableSidebarItem",
    ()=>DraggableSidebarItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/core/dist/core.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panels-top-left.js [app-ssr] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-ssr] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function DraggableSidebarItem({ id, type, label, data, vendorName }) {
    const { attributes, listeners, setNodeRef, isDragging } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDraggable"])({
        id: `sidebar-${id}`,
        data: {
            type,
            label,
            entityId: id,
            source: 'sidebar',
            payload: data
        }
    });
    const getIcon = ()=>{
        switch(type){
            case 'product':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/canvas/DraggableSidebarItem.tsx",
                    lineNumber: 24,
                    columnNumber: 36
                }, this);
            case 'vendor':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/canvas/DraggableSidebarItem.tsx",
                    lineNumber: 25,
                    columnNumber: 35
                }, this);
            case 'solution':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/canvas/DraggableSidebarItem.tsx",
                    lineNumber: 26,
                    columnNumber: 37
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/canvas/DraggableSidebarItem.tsx",
                    lineNumber: 27,
                    columnNumber: 29
                }, this);
        }
    };
    const getIconClasses = ()=>{
        // Use Tailwind classes for proper color rendering
        switch(type){
            case 'product':
                return 'bg-blue-500/20 text-blue-500';
            case 'vendor':
                return 'bg-purple-500/20 text-purple-500';
            case 'solution':
                return 'bg-emerald-500/20 text-emerald-500';
            default:
                return 'bg-gray-500/20 text-gray-500';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: setNodeRef,
        ...listeners,
        ...attributes,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group flex items-center justify-between p-3 rounded-xl border cursor-grab active:cursor-grabbing transition-all duration-200", isDragging && "opacity-40 grayscale scale-95"),
        style: {
            borderColor: 'var(--color-border)',
            backgroundColor: 'var(--color-background-secondary)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-8 h-8 rounded-lg flex items-center justify-center", getIconClasses()),
                        children: getIcon()
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/DraggableSidebarItem.tsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium",
                                style: {
                                    color: 'var(--color-text)'
                                },
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/DraggableSidebarItem.tsx",
                                lineNumber: 62,
                                columnNumber: 21
                            }, this),
                            vendorName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] uppercase tracking-wider",
                                style: {
                                    color: 'var(--color-text-muted)'
                                },
                                children: vendorName
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/DraggableSidebarItem.tsx",
                                lineNumber: 69,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/canvas/DraggableSidebarItem.tsx",
                        lineNumber: 61,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/DraggableSidebarItem.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                className: "w-4 h-4 transition-colors",
                style: {
                    color: 'var(--color-text-muted)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/DraggableSidebarItem.tsx",
                lineNumber: 78,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/DraggableSidebarItem.tsx",
        lineNumber: 42,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/canvas/SidebarSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SidebarSection",
    ()=>SidebarSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
'use client';
;
;
;
function SidebarSection({ title, children, defaultOpen = true }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultOpen);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "w-full flex items-center justify-between p-2 text-xs font-bold uppercase tracking-tighter transition-colors",
                style: {
                    color: 'var(--color-text-muted)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/SidebarSection.tsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, this),
                    isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "w-3 h-3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/SidebarSection.tsx",
                        lineNumber: 23,
                        columnNumber: 27
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: "w-3 h-3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/SidebarSection.tsx",
                        lineNumber: 23,
                        columnNumber: 65
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/SidebarSection.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 space-y-2 px-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/SidebarSection.tsx",
                lineNumber: 25,
                columnNumber: 24
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/SidebarSection.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/canvas/CanvasSidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CanvasSidebar",
    ()=>CanvasSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$DraggableSidebarItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/DraggableSidebarItem.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$SidebarSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/SidebarSection.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function CanvasSidebar({ searchQuery, onSearchChange, selectedProposition, onPropositionChange, propositions, filteredProducts, solutions, vendors, getVendorName }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-80 flex flex-col z-20",
        style: {
            borderRight: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-surface)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    style: {
                        borderBottom: '1px solid var(--color-border)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg",
                                    style: {
                                        background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                                        boxShadow: '0 10px 25px -5px var(--color-primary)'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                        className: "w-5 h-5 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                        lineNumber: 54,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                    lineNumber: 47,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-xl font-bold tracking-tight",
                                            style: {
                                                color: 'var(--color-text)'
                                            },
                                            children: "Qanvas"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                            lineNumber: 57,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] uppercase tracking-[0.2em] font-medium",
                                            style: {
                                                color: 'var(--color-text-muted)'
                                            },
                                            children: "Architecture Engine"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                            lineNumber: 63,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                    lineNumber: 56,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                            lineNumber: 46,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors",
                                    style: {
                                        color: 'var(--color-text-muted)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                    lineNumber: 74,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Search assets...",
                                    className: "w-full rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none transition-all",
                                    style: {
                                        backgroundColor: 'var(--color-background-secondary)',
                                        border: '1px solid var(--color-border)',
                                        color: 'var(--color-text)'
                                    },
                                    value: searchQuery,
                                    onChange: (e)=>onSearchChange(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                    lineNumber: 78,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                            lineNumber: 73,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                    lineNumber: 42,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto p-4 custom-scrollbar",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onPropositionChange('all'),
                                    className: "px-3 py-1.5 rounded-full text-xs font-medium transition-all",
                                    style: {
                                        backgroundColor: selectedProposition === 'all' ? 'var(--color-primary)' : 'var(--color-background-secondary)',
                                        color: selectedProposition === 'all' ? 'white' : 'var(--color-text-muted)'
                                    },
                                    children: "All"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                    lineNumber: 97,
                                    columnNumber: 25
                                }, this),
                                propositions.map((prop)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onPropositionChange(prop.id),
                                        className: "px-3 py-1.5 rounded-full text-xs font-medium transition-all",
                                        style: {
                                            backgroundColor: selectedProposition === prop.id ? 'var(--color-primary)' : 'var(--color-background-secondary)',
                                            color: selectedProposition === prop.id ? 'white' : 'var(--color-text-muted)'
                                        },
                                        children: prop.label
                                    }, prop.id, false, {
                                        fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                        lineNumber: 108,
                                        columnNumber: 29
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                            lineNumber: 96,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$SidebarSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarSection"], {
                            title: "Products Palette",
                            children: [
                                filteredProducts.map((prod)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$DraggableSidebarItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DraggableSidebarItem"], {
                                        id: prod.id,
                                        type: "product",
                                        label: prod.name,
                                        data: prod,
                                        vendorName: getVendorName(prod.vendorId)
                                    }, prod.id, false, {
                                        fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                        lineNumber: 125,
                                        columnNumber: 29
                                    }, this)),
                                filteredProducts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8 text-center border-2 border-dashed border-white/5 rounded-2xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-white/20",
                                        children: "No products found"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                        lineNumber: 136,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                    lineNumber: 135,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                            lineNumber: 123,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$SidebarSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarSection"], {
                            title: "Pre-defined Solutions",
                            defaultOpen: false,
                            children: solutions.map((sol)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$DraggableSidebarItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DraggableSidebarItem"], {
                                    id: sol.id,
                                    type: "solution",
                                    label: sol.name,
                                    data: sol
                                }, sol.id, false, {
                                    fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                    lineNumber: 144,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                            lineNumber: 142,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$SidebarSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarSection"], {
                            title: "Vendors",
                            defaultOpen: false,
                            children: vendors.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$DraggableSidebarItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DraggableSidebarItem"], {
                                    id: v.id,
                                    type: "vendor",
                                    label: v.name,
                                    data: v
                                }, v.id, false, {
                                    fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                    lineNumber: 157,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                            lineNumber: 155,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                    lineNumber: 94,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
            lineNumber: 40,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
        lineNumber: 33,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/canvas/CanvasItemCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CanvasCardVisual",
    ()=>CanvasCardVisual,
    "CanvasItemCard",
    ()=>CanvasItemCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/core/dist/core.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panels-top-left.js [app-ssr] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const CanvasCardVisual = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(({ item, isSelected, vendorName, isDragging, className, style, ...props }, ref)=>{
    const getIcon = ()=>{
        switch(item.entityType){
            case 'product':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                    lineNumber: 28,
                    columnNumber: 40
                }, ("TURBOPACK compile-time value", void 0));
            case 'vendor':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                    lineNumber: 29,
                    columnNumber: 39
                }, ("TURBOPACK compile-time value", void 0));
            case 'solution':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                    lineNumber: 30,
                    columnNumber: 41
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                    lineNumber: 31,
                    columnNumber: 33
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    const getIconClasses = ()=>{
        // Use Tailwind classes for proper color rendering
        switch(item.entityType){
            case 'product':
                return 'bg-blue-500/20 text-blue-500';
            case 'vendor':
                return 'bg-purple-500/20 text-purple-500';
            case 'solution':
                return 'bg-emerald-500/20 text-emerald-500';
            default:
                return 'bg-gray-500/20 text-gray-500';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            backgroundColor: 'var(--color-surface)',
            borderColor: isSelected ? 'var(--color-primary)' : 'var(--color-border)',
            color: 'var(--color-text)',
            cursor: item.locked ? 'not-allowed' : 'move',
            opacity: isDragging ? 0 : 1,
            ...style
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group p-4 w-75 rounded-2xl border backdrop-blur-xl shadow-2xl transition-all duration-300 select-none", isSelected ? "ring-4 ring-blue-500 scale-105 z-30 shadow-blue-500/50" : "hover:scale-[1.02] z-20", item.locked && "opacity-75", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-2 right-2 flex gap-1",
                children: [
                    item.locked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-1 rounded-md bg-orange-500",
                        title: "Locked",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                            className: "w-3 h-3 text-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                            lineNumber: 71,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                        lineNumber: 67,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    item.groupId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-1 rounded-md bg-purple-500",
                        title: "Grouped",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                            className: "w-3 h-3 text-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                            lineNumber: 79,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                        lineNumber: 75,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                lineNumber: 65,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-10 h-10 rounded-xl flex items-center justify-center shadow-inner", getIconClasses()),
                        children: getIcon()
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                        lineNumber: 85,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-lg",
                            title: "Active"
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                            lineNumber: 91,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                        lineNumber: 90,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                lineNumber: 84,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-sm font-semibold truncate",
                        style: {
                            color: 'var(--color-text)'
                        },
                        children: item.data.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                        lineNumber: 98,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    vendorName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] uppercase font-bold tracking-widest",
                        style: {
                            color: 'var(--color-text-muted)'
                        },
                        children: vendorName
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                        lineNumber: 105,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                lineNumber: 97,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 pt-4 flex items-center justify-between text-[11px]",
                style: {
                    borderTop: '1px solid var(--color-border)',
                    color: 'var(--color-text-secondary)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                                lineNumber: 123,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Configured"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                        lineNumber: 122,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-2 py-0.5 rounded-full font-medium bg-blue-500/20 text-blue-500",
                        children: "Standard"
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                        lineNumber: 125,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                lineNumber: 115,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
        lineNumber: 46,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0));
});
CanvasCardVisual.displayName = 'CanvasCardVisual';
function CanvasItemCard({ item, isSelected, onClick, vendorName, forceTransparent = false }) {
    const { attributes, listeners, setNodeRef, isDragging } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDraggable"])({
        id: item.id,
        data: {
            ...item,
            source: 'canvas'
        },
        disabled: item.locked // Disable dragging if locked
    });
    const mouseDownPos = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const dragOccurred = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(false);
    const wasDragging = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(false);
    // Track when dragging state changes
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (isDragging) {
            dragOccurred.current = true;
            wasDragging.current = true;
        } else if (wasDragging.current) {
            // Drag just ended
            wasDragging.current = false;
            // Keep dragOccurred flag set until after click event
            setTimeout(()=>{
                dragOccurred.current = false;
            }, 100);
        }
    }, [
        isDragging
    ]);
    const style = {
        position: 'absolute',
        top: item.y,
        left: item.x
    };
    // Merge our onMouseDown with dnd-kit's listeners to ensure stopPropagation
    const mergedListeners = item.locked ? {} : {
        ...listeners,
        onMouseDown: (e)=>{
            // CRITICAL: Stop propagation FIRST to prevent canvas background from clearing selection
            e.stopPropagation();
            // Track mouse down position to detect if this is a click or drag
            mouseDownPos.current = {
                x: e.clientX,
                y: e.clientY
            };
            dragOccurred.current = false;
            // Call dnd-kit's original onMouseDown handler
            if (listeners?.onMouseDown) {
                listeners.onMouseDown(e);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CanvasCardVisual, {
        ref: setNodeRef,
        item: item,
        isSelected: isSelected,
        vendorName: vendorName,
        isDragging: isDragging || forceTransparent,
        style: style,
        onClick: (e)=>{
            e.stopPropagation();
            // Don't trigger onClick if a drag occurred
            if (dragOccurred.current) {
                return;
            }
            // Only trigger onClick if mouse hasn't moved much (it's a click, not a drag)
            if (mouseDownPos.current) {
                const dx = Math.abs(e.clientX - mouseDownPos.current.x);
                const dy = Math.abs(e.clientY - mouseDownPos.current.y);
                // If mouse moved less than 5px, treat as click
                if (dx < 5 && dy < 5) {
                    onClick(e);
                }
            }
            mouseDownPos.current = null;
        },
        ...attributes,
        ...mergedListeners
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
        lineNumber: 189,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/canvas/controls/SelectionBox.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectionBox",
    ()=>SelectionBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function SelectionBox({ box }) {
    if (!box) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute pointer-events-none z-50",
        style: {
            left: box.x,
            top: box.y,
            width: box.width,
            height: box.height,
            border: '2px dashed #3B82F6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '4px'
        }
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/controls/SelectionBox.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/canvas/controls/GroupOutline.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupOutline",
    ()=>GroupOutline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function GroupOutline({ items, groupId }) {
    const groupItems = items.filter((item)=>item.groupId === groupId);
    if (groupItems.length === 0) return null;
    // Calculate bounding box
    const minX = Math.min(...groupItems.map((item)=>item.x));
    const minY = Math.min(...groupItems.map((item)=>item.y));
    const maxX = Math.max(...groupItems.map((item)=>item.x + 240)); // 240 = item width
    const maxY = Math.max(...groupItems.map((item)=>item.y + 120)); // 120 = approximate item height
    const padding = 10;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute pointer-events-none rounded-3xl border-2 border-dashed transition-all duration-200",
        style: {
            left: minX - padding,
            top: minY - padding,
            width: maxX - minX + padding * 2,
            height: maxY - minY + padding * 2,
            borderColor: 'var(--color-secondary)',
            backgroundColor: 'var(--color-secondary)',
            opacity: 0.1,
            zIndex: 1
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -top-6 left-2 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider",
            style: {
                backgroundColor: 'var(--color-secondary)',
                color: 'var(--color-background)',
                opacity: 0.8
            },
            children: [
                "Group (",
                groupItems.length,
                " items)"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/canvas/controls/GroupOutline.tsx",
            lineNumber: 38,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/controls/GroupOutline.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/canvas/controls/MultiSelectIndicator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MultiSelectIndicator",
    ()=>MultiSelectIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function MultiSelectIndicator({ count }) {
    if (count < 2) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl border backdrop-blur-xl shadow-lg animate-in fade-in slide-in-from-top-2 duration-200",
        style: {
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-primary)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-2 h-2 rounded-full animate-pulse",
                    style: {
                        backgroundColor: 'var(--color-primary)'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/canvas/controls/MultiSelectIndicator.tsx",
                    lineNumber: 19,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm font-bold",
                    style: {
                        color: 'var(--color-text)'
                    },
                    children: [
                        count,
                        " items selected"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/canvas/controls/MultiSelectIndicator.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/canvas/controls/MultiSelectIndicator.tsx",
            lineNumber: 18,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/controls/MultiSelectIndicator.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/canvas/controls/SnapGuides.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SnapGuides",
    ()=>SnapGuides
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function SnapGuides({ guides, canvasRect, dragRect }) {
    if (!canvasRect || guides.length === 0) return null;
    // Verbose logging - uncomment for detailed debugging
    // console.log('📐 SnapGuides rendering:', {
    //     guidesCount: guides.length,
    //     canvasRect: { width: canvasRect.width, height: canvasRect.height },
    //     guides: guides.map(g => ({ type: g.type, position: g.position, label: g.label }))
    // });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 pointer-events-none z-40",
        style: {
            width: canvasRect.width,
            height: canvasRect.height,
            overflow: 'hidden'
        },
        children: guides.filter((guide)=>{
            // Only show guides within canvas bounds
            if (guide.type === 'vertical') {
                return guide.position >= 0 && guide.position <= canvasRect.width;
            } else {
                return guide.position >= 0 && guide.position <= canvasRect.height;
            }
        }).map((guide, index)=>{
            const key = `${guide.type}-${guide.position}-${index}`;
            const guideType = guide.guideType || 'edge';
            // Calculate label position based on dragRect
            const labelStyle = {
                backgroundColor: guideType === 'center' ? 'rgba(59, 130, 246, 0.9)' : guideType === 'spacing' ? 'rgba(168, 85, 247, 0.9)' : 'rgba(239, 68, 68, 0.9)',
                color: 'white',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
            };
            if (guide.type === 'vertical') {
                // For vertical guides (X-axis), label follows Y position of dragged item
                if (dragRect) {
                    labelStyle.top = `${dragRect.y - 25}px`; // Just above item
                    // Ensure it stays within canvas vertically
                    if (dragRect.y < 30) labelStyle.top = `${dragRect.y + dragRect.height + 10}px`;
                    labelStyle.left = '8px'; // Slight offset from line
                } else {
                    labelStyle.top = '16px';
                    labelStyle.left = '8px';
                }
            } else {
                // For horizontal guides (Y-axis), label follows X position of dragged item
                if (dragRect) {
                    labelStyle.left = `${dragRect.x}px`; // At item start
                    // Ensure it stays within canvas horizontally
                    if (dragRect.x < 10) labelStyle.left = '10px';
                    if (canvasRect && dragRect.x > canvasRect.width - 100) labelStyle.left = `${canvasRect.width - 100}px`;
                    labelStyle.top = '-25px'; // Just above line
                } else {
                    labelStyle.left = '16px';
                    labelStyle.top = '8px';
                }
            }
            // Different colors for different guide types
            const getGuideColor = ()=>{
                switch(guideType){
                    case 'center':
                        return 'bg-blue-500';
                    case 'spacing':
                        return 'bg-purple-500';
                    default:
                        return 'bg-red-500';
                }
            };
            const getShadowColor = ()=>{
                switch(guideType){
                    case 'center':
                        return '0 0 8px rgba(59, 130, 246, 0.8)';
                    case 'spacing':
                        return '0 0 8px rgba(168, 85, 247, 0.8)';
                    default:
                        return '0 0 8px rgba(239, 68, 68, 0.8)';
                }
            };
            if (guide.type === 'vertical') {
                // Use bounds if available, otherwise span full height
                const top = guide.minY ?? 0;
                const bottom = guide.maxY ?? canvasRect.height;
                const height = bottom - top;
                // console.log('🎯 Rendering vertical guide:', {
                //     position: guide.position,
                //     label: guide.label,
                //     canvasWidth: canvasRect.width
                // });
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute animate-in fade-in duration-150",
                    style: {
                        left: `${guide.position}px`,
                        top: `${top}px`,
                        height: `${height}px`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute top-0 bottom-0 w-0.5 ${getGuideColor()}`,
                            style: {
                                boxShadow: getShadowColor(),
                                opacity: 0.9
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/controls/SnapGuides.tsx",
                            lineNumber: 126,
                            columnNumber: 33
                        }, this),
                        guide.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider whitespace-nowrap",
                            style: labelStyle,
                            children: guide.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/controls/SnapGuides.tsx",
                            lineNumber: 136,
                            columnNumber: 37
                        }, this)
                    ]
                }, key, true, {
                    fileName: "[project]/src/components/canvas/controls/SnapGuides.tsx",
                    lineNumber: 116,
                    columnNumber: 29
                }, this);
            } else {
                // Use bounds if available, otherwise span full width
                const left = guide.minX ?? 0;
                const right = guide.maxX ?? canvasRect.width;
                const width = right - left;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute animate-in fade-in duration-150",
                    style: {
                        top: `${guide.position}px`,
                        left: `${left}px`,
                        width: `${width}px`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute left-0 right-0 h-0.5 ${getGuideColor()}`,
                            style: {
                                boxShadow: getShadowColor(),
                                opacity: 0.9
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/controls/SnapGuides.tsx",
                            lineNumber: 162,
                            columnNumber: 33
                        }, this),
                        guide.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider whitespace-nowrap",
                            style: labelStyle,
                            children: guide.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/controls/SnapGuides.tsx",
                            lineNumber: 172,
                            columnNumber: 37
                        }, this)
                    ]
                }, key, true, {
                    fileName: "[project]/src/components/canvas/controls/SnapGuides.tsx",
                    lineNumber: 152,
                    columnNumber: 29
                }, this);
            }
        })
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/controls/SnapGuides.tsx",
        lineNumber: 33,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/canvas/controls/AxisLockGuide.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AxisLockGuide",
    ()=>AxisLockGuide
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function AxisLockGuide({ isActive, axis, position, canvasRect }) {
    if (!isActive || !axis || !position || !canvasRect) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 pointer-events-none z-45",
        children: axis === 'x' ? // Horizontal guide line (locked to X axis)
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-0 right-0 h-0.5 bg-blue-500 opacity-60",
            style: {
                top: `${position.y}px`,
                boxShadow: '0 0 12px rgba(59, 130, 246, 0.8)'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 right-0 h-px border-t-2 border-dashed border-blue-400",
                style: {
                    top: '0px',
                    opacity: 0.4
                }
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/controls/AxisLockGuide.tsx",
                lineNumber: 25,
                columnNumber: 21
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/canvas/controls/AxisLockGuide.tsx",
            lineNumber: 17,
            columnNumber: 17
        }, this) : // Vertical guide line (locked to Y axis)
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 bottom-0 w-0.5 bg-blue-500 opacity-60",
            style: {
                left: `${position.x}px`,
                boxShadow: '0 0 12px rgba(59, 130, 246, 0.8)'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 bottom-0 w-px border-l-2 border-dashed border-blue-400",
                style: {
                    left: '0px',
                    opacity: 0.4
                }
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/controls/AxisLockGuide.tsx",
                lineNumber: 40,
                columnNumber: 21
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/canvas/controls/AxisLockGuide.tsx",
            lineNumber: 32,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/controls/AxisLockGuide.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/canvas/CanvasWorkspace.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CanvasWorkspace",
    ()=>CanvasWorkspace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/core/dist/core.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panels-top-left.js [app-ssr] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$CanvasItemCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/CanvasItemCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$SelectionBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/controls/SelectionBox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$GroupOutline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/controls/GroupOutline.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$MultiSelectIndicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/controls/MultiSelectIndicator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$SnapGuides$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/controls/SnapGuides.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$AxisLockGuide$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/controls/AxisLockGuide.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
function CanvasWorkspace({ canvasRef, items, selectedIds, debugInfo, vendors, multiSelect, onClearItems, gridSnapEnabled = false, snapGuides = [], activeDragRect, activeDragItemId = null, lockedAxis = null, isShiftPressed = false }) {
    const { setNodeRef, isOver } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDroppable"])({
        id: 'canvas-droppable'
    });
    const getVendorName = (vendorId)=>{
        return vendors.find((v)=>v.id === vendorId)?.name;
    };
    const handleMouseDown = (e)=>{
        // Since items stop propagation, getting here means we clicked the background
        if (!e.ctrlKey) {
            multiSelect.clearSelection();
        }
        const rect = canvasRef.current?.getBoundingClientRect();
        if (rect) {
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            multiSelect.startBoxSelection(x, y);
        }
    };
    const handleMouseMove = (e)=>{
        if (multiSelect.isSelecting) {
            const rect = canvasRef.current?.getBoundingClientRect();
            if (rect) {
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                multiSelect.updateBoxSelection(x, y);
            }
        }
    };
    const handleMouseUp = (e)=>{
        if (multiSelect.isSelecting && multiSelect.selectionBox) {
            const box = multiSelect.selectionBox;
            console.log('📦 Box selection:', {
                box,
                totalItems: items.length
            });
            const itemsInBox = items.filter((item)=>{
                const itemWidth = 300; // Updated to match actual card width
                const itemHeight = 172; // Updated to match actual card height
                const isInBox = item.x < box.x + box.width && item.x + itemWidth > box.x && item.y < box.y + box.height && item.y + itemHeight > box.y;
                console.log(`  Item ${item.data.label}:`, {
                    itemPos: {
                        x: item.x,
                        y: item.y
                    },
                    itemBounds: {
                        x1: item.x,
                        y1: item.y,
                        x2: item.x + itemWidth,
                        y2: item.y + itemHeight
                    },
                    boxBounds: {
                        x1: box.x,
                        y1: box.y,
                        x2: box.x + box.width,
                        y2: box.y + box.height
                    },
                    isInBox
                });
                return isInBox;
            }).map((i)=>i.id);
            console.log('📦 Items in box:', itemsInBox);
            multiSelect.endBoxSelection(itemsInBox, e.ctrlKey);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        ref: (node)=>{
            setNodeRef(node);
            if (canvasRef && typeof canvasRef === 'object') {
                // @ts-ignore
                canvasRef.current = node;
            }
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex-1 relative overflow-hidden bg-[radial-gradient(#333333_1px,transparent_1px)] [background-size:16px_16px] z-0 transition-colors duration-200", isOver && "bg-green-500/20"),
        onMouseDown: handleMouseDown,
        onMouseMove: handleMouseMove,
        onMouseUp: handleMouseUp,
        onMouseLeave: handleMouseUp,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: canvasRef,
            className: "absolute inset-0 w-full h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:20px_20px] z-[1] transition-opacity duration-300", gridSnapEnabled ? "opacity-[0.08]" : "opacity-[0.02]")
                }, void 0, false, {
                    fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                    lineNumber: 138,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$SelectionBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectionBox"], {
                    box: multiSelect.selectionBox
                }, void 0, false, {
                    fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                    lineNumber: 146,
                    columnNumber: 17
                }, this),
                selectedIds.length === 1 && (()=>{
                    const item = items.find((i)=>i.id === selectedIds[0]);
                    if (!item) return null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-6 right-6 px-4 py-2 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 text-xs font-mono text-white/60 flex flex-col gap-1 z-50 pointer-events-none select-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "X: ",
                                            Math.round(item.x)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                        lineNumber: 155,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Y: ",
                                            Math.round(item.y)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                        lineNumber: 156,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                lineNumber: 154,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 justify-between opacity-70",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "W: 300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                        lineNumber: 159,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "H: 172"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                        lineNumber: 160,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                lineNumber: 158,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                        lineNumber: 153,
                        columnNumber: 25
                    }, this);
                })(),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 pointer-events-none overflow-hidden z-40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$SnapGuides$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SnapGuides"], {
                            guides: snapGuides,
                            canvasRect: canvasRef.current?.getBoundingClientRect(),
                            dragRect: activeDragRect
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                            lineNumber: 168,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$AxisLockGuide$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AxisLockGuide"], {
                            isActive: isShiftPressed && !!activeDragRect,
                            axis: lockedAxis,
                            position: activeDragRect ? {
                                x: activeDragRect.x,
                                y: activeDragRect.y
                            } : null,
                            canvasRect: canvasRef.current?.getBoundingClientRect() ?? null
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                            lineNumber: 173,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                    lineNumber: 167,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$MultiSelectIndicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MultiSelectIndicator"], {
                    count: selectedIds.length
                }, void 0, false, {
                    fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                    lineNumber: 182,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-4 left-6 right-6 flex items-center justify-between z-10 pointer-events-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-3 py-1.5 rounded-full backdrop-blur-md border flex items-center gap-2",
                                    style: {
                                        backgroundColor: 'var(--color-surface)',
                                        borderColor: 'var(--color-border)',
                                        opacity: 0.9
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                            lineNumber: 195,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-bold uppercase tracking-widest",
                                            style: {
                                                color: 'var(--color-text-secondary)'
                                            },
                                            children: "Workspace Online"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                            lineNumber: 196,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                    lineNumber: 187,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-3 py-1.5 rounded-full backdrop-blur-md border",
                                    style: {
                                        backgroundColor: 'var(--color-surface)',
                                        borderColor: 'var(--color-border)',
                                        opacity: 0.9
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold uppercase tracking-widest",
                                        style: {
                                            color: 'var(--color-text-secondary)'
                                        },
                                        children: [
                                            items.length,
                                            " Assets Mapped"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                        lineNumber: 211,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                    lineNumber: 203,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-3 py-1.5 rounded-full bg-blue-500/10 backdrop-blur-md border border-blue-500/20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold text-blue-400 uppercase tracking-widest",
                                        children: debugInfo
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                        lineNumber: 219,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                    lineNumber: 218,
                                    columnNumber: 25
                                }, this),
                                isOver && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-3 py-1.5 rounded-full bg-green-500/20 backdrop-blur-md border border-green-500/50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold text-green-400 uppercase tracking-widest",
                                        children: "DROP ZONE ACTIVE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                        lineNumber: 223,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                    lineNumber: 222,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                            lineNumber: 186,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                onClearItems();
                            },
                            className: "pointer-events-auto px-4 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold text-white/40 uppercase tracking-widest hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/50 transition-all",
                            children: "Clear Workspace"
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                            lineNumber: 228,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                    lineNumber: 185,
                    columnNumber: 17
                }, this),
                Array.from(new Set(items.filter((it)=>it.groupId).map((it)=>it.groupId))).map((groupId)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$GroupOutline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GroupOutline"], {
                        items: items,
                        groupId: groupId
                    }, groupId, false, {
                        fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                        lineNumber: 241,
                        columnNumber: 21
                    }, this)),
                items.map((item)=>{
                    const isItemSelected = selectedIds.includes(item.id);
                    // Make item transparent if:
                    // 1. It's being dragged, OR
                    // 2. It's selected AND another selected item is being dragged (multi-select drag)
                    const shouldBeTransparent = !!(isItemSelected && activeDragItemId && selectedIds.includes(activeDragItemId));
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$CanvasItemCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CanvasItemCard"], {
                        item: item,
                        isSelected: isItemSelected,
                        forceTransparent: shouldBeTransparent,
                        onClick: (e)=>{
                            const isAlreadySelected = selectedIds.includes(item.id);
                            if (e.ctrlKey) {
                                // Ctrl+Click: Always toggle
                                multiSelect.toggleSelect(item.id, true);
                            } else if (isAlreadySelected && selectedIds.length > 1) {
                            // Clicking an already-selected item in a multi-selection: preserve selection
                            // This allows dragging multiple items
                            // Don't call toggleSelect to avoid clearing the selection
                            } else {
                                // Normal click: select only this item
                                multiSelect.toggleSelect(item.id, false);
                            }
                        },
                        vendorName: item.entityType === 'product' ? getVendorName(item.data.payload?.vendorId) : undefined
                    }, item.id, false, {
                        fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                        lineNumber: 254,
                        columnNumber: 25
                    }, this);
                }),
                items.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex flex-col items-center justify-center pointer-events-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-32 h-32 mb-6 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
                                className: "w-10 h-10 text-white/10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                lineNumber: 284,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                            lineNumber: 283,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-medium text-white/40 mb-2",
                            children: "Initialize Canvas"
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                            lineNumber: 286,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-white/20",
                            children: "Drag components from the sidebar to begin designing"
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                            lineNumber: 287,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                    lineNumber: 282,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
            lineNumber: 133,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
        lineNumber: 116,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/canvas/PropertiesPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PropertiesPanel",
    ()=>PropertiesPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-ssr] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panels-top-left.js [app-ssr] (ecmascript) <export default as Layout>");
'use client';
;
;
function PropertiesPanel({ selectedItem, selectedCount, propositions, vendors }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-96 flex flex-col z-20",
        style: {
            borderLeft: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-surface)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 flex items-center justify-between",
                    style: {
                        borderBottom: '1px solid var(--color-border)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-sm font-bold uppercase tracking-widest flex items-center gap-2",
                            style: {
                                color: 'var(--color-text)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                    className: "w-4 h-4",
                                    style: {
                                        color: 'var(--color-primary)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                    lineNumber: 31,
                                    columnNumber: 25
                                }, this),
                                "Inspector"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                            lineNumber: 27,
                            columnNumber: 21
                        }, this),
                        selectedCount > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-2 py-1 rounded-lg border bg-blue-500/20 border-blue-500/30",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-bold text-blue-500",
                                children: [
                                    selectedCount,
                                    " Selected"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                lineNumber: 39,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                            lineNumber: 38,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 rounded-lg flex items-center justify-center",
                            style: {
                                backgroundColor: 'var(--color-background-secondary)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                className: "w-4 h-4",
                                style: {
                                    color: 'var(--color-text-muted)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                lineNumber: 48,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                            lineNumber: 44,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, this),
                selectedItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-8 animate-in fade-in slide-in-from-right-4 duration-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 rounded-2xl border flex items-center justify-center",
                                    style: {
                                        backgroundColor: 'var(--color-background-secondary)',
                                        borderColor: 'var(--color-border)'
                                    },
                                    children: selectedItem.entityType === 'product' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                        className: "w-8 h-8",
                                        style: {
                                            color: 'var(--color-primary)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                        lineNumber: 66,
                                        columnNumber: 37
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
                                        className: "w-8 h-8",
                                        style: {
                                            color: 'var(--color-secondary)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                        lineNumber: 71,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                    lineNumber: 58,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold",
                                            style: {
                                                color: 'var(--color-text)'
                                            },
                                            children: selectedItem.data.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                            lineNumber: 78,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs",
                                            style: {
                                                color: 'var(--color-text-muted)'
                                            },
                                            children: selectedItem.entityType.toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                            lineNumber: 84,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                    lineNumber: 77,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                            lineNumber: 57,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 rounded-2xl border",
                                    style: {
                                        backgroundColor: 'var(--color-background-secondary)',
                                        borderColor: 'var(--color-border)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[10px] font-bold uppercase tracking-widest block mb-2",
                                            style: {
                                                color: 'var(--color-text-muted)'
                                            },
                                            children: "Hierarchy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                            lineNumber: 101,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs",
                                                            style: {
                                                                color: 'var(--color-text-secondary)'
                                                            },
                                                            children: "Vendor"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                                            lineNumber: 109,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-medium",
                                                            style: {
                                                                color: 'var(--color-text)'
                                                            },
                                                            children: selectedItem.entityType === 'product' ? vendors.find((v)=>v.id === selectedItem.data.payload?.vendorId)?.name : 'N/A'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs",
                                                            style: {
                                                                color: 'var(--color-text-secondary)'
                                                            },
                                                            children: "Proposition"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-0.5 rounded bg-blue-500/20 text-blue-500 text-[10px] font-bold uppercase",
                                                            children: selectedItem.entityType === 'product' ? propositions.find((p)=>p.id === selectedItem.data.payload?.propositionId)?.label : 'Standard'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                            lineNumber: 107,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                    lineNumber: 94,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 rounded-2xl border",
                                    style: {
                                        backgroundColor: 'var(--color-background-secondary)',
                                        borderColor: 'var(--color-border)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[10px] font-bold uppercase tracking-widest block mb-2",
                                            style: {
                                                color: 'var(--color-text-muted)'
                                            },
                                            children: "Specifications"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                            lineNumber: 143,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs leading-relaxed italic",
                                            style: {
                                                color: 'var(--color-text-secondary)'
                                            },
                                            children: "Detailed technical specifications and metrics will appear here based on the selected entity profile."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                            lineNumber: 149,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                    lineNumber: 136,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                            lineNumber: 93,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-full py-3 rounded-xl text-white text-sm font-semibold transition-colors shadow-lg",
                            style: {
                                backgroundColor: 'var(--color-primary)',
                                boxShadow: '0 10px 25px -5px var(--color-primary)'
                            },
                            children: "Configure Detailed Design"
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                            lineNumber: 158,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                    lineNumber: 56,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col items-center justify-center p-10 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-20 h-20 rounded-full flex items-center justify-center mb-6",
                            style: {
                                backgroundColor: 'var(--color-background-secondary)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "w-8 h-8",
                                style: {
                                    color: 'var(--color-text-muted)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                lineNumber: 174,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                            lineNumber: 170,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-medium mb-2",
                            style: {
                                color: 'var(--color-text-secondary)'
                            },
                            children: "No Asset Selected"
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                            lineNumber: 179,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs leading-relaxed",
                            style: {
                                color: 'var(--color-text-muted)'
                            },
                            children: "Select an asset on the canvas to view its configuration, hierarchy, and metrics."
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                            lineNumber: 185,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                    lineNumber: 169,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
            lineNumber: 22,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/hooks/useMultiSelect.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMultiSelect",
    ()=>useMultiSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useMultiSelect() {
    const [selectedIds, setSelectedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [isSelecting, setIsSelecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectionBox, setSelectionBox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id, isCtrlPressed)=>{
        setSelectedIds((prev)=>{
            const newSet = new Set(prev);
            if (isCtrlPressed) {
                // Ctrl+Click: Toggle selection
                if (newSet.has(id)) {
                    console.log('➖ toggleSelect: Removing from selection (Ctrl)', {
                        id,
                        prevCount: prev.size
                    });
                    newSet.delete(id);
                } else {
                    console.log('➕ toggleSelect: Adding to selection (Ctrl)', {
                        id,
                        prevCount: prev.size
                    });
                    newSet.add(id);
                }
            } else {
                // Regular click: Select only this item
                if (prev.size > 1) {
                    console.log('⚠️ toggleSelect: Clearing multi-selection!', {
                        id,
                        prevCount: prev.size,
                        prevIds: Array.from(prev)
                    });
                    console.trace('toggleSelect stack trace');
                }
                newSet.clear();
                newSet.add(id);
            }
            console.log('✅ Selection after toggleSelect:', {
                count: newSet.size,
                ids: Array.from(newSet)
            });
            return newSet;
        });
    }, []);
    const selectMultiple = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ids)=>{
        console.log('📦 selectMultiple:', {
            ids,
            count: ids.length
        });
        setSelectedIds(new Set(ids));
    }, []);
    const addToSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setSelectedIds((prev)=>new Set([
                ...prev,
                id
            ]));
    }, []);
    const removeFromSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setSelectedIds((prev)=>{
            const newSet = new Set(prev);
            newSet.delete(id);
            return newSet;
        });
    }, []);
    const clearSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        console.log('🔄 clearSelection called');
        console.trace('clearSelection stack trace');
        setSelectedIds(new Set());
    }, []);
    const selectAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((allIds)=>{
        setSelectedIds(new Set(allIds));
    }, []);
    const isSelected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        return selectedIds.has(id);
    }, [
        selectedIds
    ]);
    const startBoxSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((startX, startY)=>{
        setIsSelecting(true);
        setSelectionBox({
            x: startX,
            y: startY,
            width: 0,
            height: 0
        });
    }, []);
    const updateBoxSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((currentX, currentY)=>{
        if (!selectionBox) return;
        const width = currentX - selectionBox.x;
        const height = currentY - selectionBox.y;
        setSelectionBox({
            x: width < 0 ? currentX : selectionBox.x,
            y: height < 0 ? currentY : selectionBox.y,
            width: Math.abs(width),
            height: Math.abs(height)
        });
    }, [
        selectionBox
    ]);
    const endBoxSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((itemsInBox, isCtrlPressed)=>{
        if (isCtrlPressed) {
            // Add to existing selection
            setSelectedIds((prev)=>new Set([
                    ...prev,
                    ...itemsInBox
                ]));
        } else {
            // Replace selection
            setSelectedIds(new Set(itemsInBox));
        }
        setIsSelecting(false);
        setSelectionBox(null);
    }, []);
    return {
        selectedIds: Array.from(selectedIds),
        selectedCount: selectedIds.size,
        isSelecting,
        selectionBox,
        toggleSelect,
        selectMultiple,
        addToSelection,
        removeFromSelection,
        clearSelection,
        selectAll,
        isSelected,
        startBoxSelection,
        updateBoxSelection,
        endBoxSelection
    };
}
}),
"[project]/src/hooks/useKeyboardShortcuts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useKeyboardShortcuts",
    ()=>useKeyboardShortcuts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useKeyboardShortcuts(shortcuts, enabled = true) {
    // Keep reference to latest shortcuts to avoid re-binding effect
    const shortcutsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(shortcuts);
    // Always update ref to latest passed shortcuts on every render
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        shortcutsRef.current = shortcuts;
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!enabled) return;
        const handleKeyDown = (event)=>{
            const { ctrlKey, metaKey, key, shiftKey } = event;
            const isModifier = ctrlKey || metaKey;
            // Get latest handlers
            const currentShortcuts = shortcutsRef.current;
            // Check input field
            const target = event.target;
            const isInputField = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable;
            // Debug helper (uncomment if needed)
            // console.log('Key:', key, 'Modifier:', isModifier, 'Input:', isInputField);
            // Ctrl + A
            if (isModifier && key.toLowerCase() === 'a' && currentShortcuts.onSelectAll && !isInputField) {
                event.preventDefault();
                currentShortcuts.onSelectAll();
                return;
            }
            // Ctrl + C
            if (isModifier && key.toLowerCase() === 'c' && currentShortcuts.onCopy && !isInputField) {
                event.preventDefault();
                currentShortcuts.onCopy();
                return;
            }
            // Ctrl + V
            if (isModifier && key.toLowerCase() === 'v' && currentShortcuts.onPaste && !isInputField) {
                // Paste often needs to work in inputs, so we check implementation details or let native handle inputs
                // typically we only intercept if NOT input
                event.preventDefault();
                currentShortcuts.onPaste();
                return;
            }
            // Ctrl + D
            if (isModifier && key.toLowerCase() === 'd' && currentShortcuts.onDuplicate && !isInputField) {
                event.preventDefault();
                currentShortcuts.onDuplicate();
                return;
            }
            // Ctrl + G (Group)
            if (isModifier && key.toLowerCase() === 'g' && currentShortcuts.onGroup && !isInputField) {
                event.preventDefault();
                currentShortcuts.onGroup();
                return;
            }
            // Ctrl + L (Lock)
            if (isModifier && key.toLowerCase() === 'l' && currentShortcuts.onLock && !isInputField) {
                event.preventDefault();
                currentShortcuts.onLock();
                return;
            }
            // Delete / Backspace
            if ((key === 'Delete' || key === 'Backspace') && currentShortcuts.onDelete && !isInputField) {
                event.preventDefault();
                currentShortcuts.onDelete();
                return;
            }
            // Undo (Ctrl+Z) / Redo (Ctrl+Y or Ctrl+Shift+Z)
            if (isModifier && key.toLowerCase() === 'z' && !isInputField) {
                if (shiftKey && currentShortcuts.onRedo) {
                    event.preventDefault();
                    currentShortcuts.onRedo();
                    return;
                }
                if (!shiftKey && currentShortcuts.onUndo) {
                    event.preventDefault();
                    currentShortcuts.onUndo();
                    return;
                }
            }
            if (isModifier && key.toLowerCase() === 'y' && currentShortcuts.onRedo && !isInputField) {
                event.preventDefault();
                currentShortcuts.onRedo();
                return;
            }
            // Escape
            if (key === 'Escape') {
                if (currentShortcuts.onEscape) {
                    event.preventDefault(); // Always prevent default to stop browser stop-loading etc
                    currentShortcuts.onEscape();
                }
                if (isInputField) {
                    target.blur();
                }
                return;
            }
            // Arrows
            if (!isInputField) {
                const nudgeAmount = shiftKey ? 10 : 1;
                if (key === 'ArrowUp' && currentShortcuts.onNudgeUp) {
                    event.preventDefault();
                    for(let i = 0; i < nudgeAmount; i++)currentShortcuts.onNudgeUp();
                    return;
                }
                if (key === 'ArrowDown' && currentShortcuts.onNudgeDown) {
                    event.preventDefault();
                    for(let i = 0; i < nudgeAmount; i++)currentShortcuts.onNudgeDown();
                    return;
                }
                if (key === 'ArrowLeft' && currentShortcuts.onNudgeLeft) {
                    event.preventDefault();
                    for(let i = 0; i < nudgeAmount; i++)currentShortcuts.onNudgeLeft();
                    return;
                }
                if (key === 'ArrowRight' && currentShortcuts.onNudgeRight) {
                    event.preventDefault();
                    for(let i = 0; i < nudgeAmount; i++)currentShortcuts.onNudgeRight();
                    return;
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, [
        enabled
    ]); // Only re-bind if enabled changes, NOT when shortcuts change
}
}),
"[project]/src/hooks/useModifierKeys.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useModifierKeys",
    ()=>useModifierKeys
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useModifierKeys() {
    const [keys, setKeys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        ctrl: false,
        shift: false,
        alt: false,
        meta: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            setKeys({
                ctrl: e.ctrlKey,
                shift: e.shiftKey,
                alt: e.altKey,
                meta: e.metaKey
            });
        };
        const handleKeyUp = (e)=>{
            setKeys({
                ctrl: e.ctrlKey,
                shift: e.shiftKey,
                alt: e.altKey,
                meta: e.metaKey
            });
        };
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        return ()=>{
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);
    return keys;
}
}),
"[project]/src/hooks/useSnapToGrid.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSnapToGrid",
    ()=>useSnapToGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const DEFAULT_GRID_SIZE = 20;
function useSnapToGrid(options = {
    enabled: true,
    gridSize: DEFAULT_GRID_SIZE
}) {
    const { enabled, gridSize = DEFAULT_GRID_SIZE } = options;
    const snapPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((x, y)=>{
        if (!enabled) {
            return {
                x,
                y,
                snappedX: false,
                snappedY: false
            };
        }
        const snappedX = Math.round(x / gridSize) * gridSize;
        const snappedY = Math.round(y / gridSize) * gridSize;
        return {
            x: snappedX,
            y: snappedY,
            snappedX: snappedX !== x,
            snappedY: snappedY !== y
        };
    }, [
        enabled,
        gridSize
    ]);
    const snapToGrid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>{
        if (!enabled) return value;
        return Math.round(value / gridSize) * gridSize;
    }, [
        enabled,
        gridSize
    ]);
    const isOnGrid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((x, y)=>{
        if (!enabled) return true;
        return x % gridSize === 0 && y % gridSize === 0;
    }, [
        enabled,
        gridSize
    ]);
    return {
        snapPosition,
        snapToGrid,
        isOnGrid,
        gridSize,
        enabled
    };
}
}),
"[project]/src/hooks/useHistory.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHistory",
    ()=>useHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const MAX_HISTORY_SIZE = 50;
function useHistory(initialState) {
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        past: [],
        present: initialState,
        future: []
    });
    const setState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newState)=>{
        setHistory((prev)=>{
            const resolvedState = typeof newState === 'function' ? newState(prev.present) : newState;
            // Don't add to history if state hasn't changed
            if (JSON.stringify(resolvedState) === JSON.stringify(prev.present)) {
                return prev;
            }
            const newPast = [
                ...prev.past,
                prev.present
            ];
            // Limit history size
            if (newPast.length > MAX_HISTORY_SIZE) {
                newPast.shift();
            }
            return {
                past: newPast,
                present: resolvedState,
                future: [] // Clear future when new action is taken
            };
        });
    }, []);
    const undo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setHistory((prev)=>{
            if (prev.past.length === 0) return prev;
            const newPast = [
                ...prev.past
            ];
            const newPresent = newPast.pop();
            return {
                past: newPast,
                present: newPresent,
                future: [
                    prev.present,
                    ...prev.future
                ]
            };
        });
    }, []);
    const redo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setHistory((prev)=>{
            if (prev.future.length === 0) return prev;
            const newFuture = [
                ...prev.future
            ];
            const newPresent = newFuture.shift();
            return {
                past: [
                    ...prev.past,
                    prev.present
                ],
                present: newPresent,
                future: newFuture
            };
        });
    }, []);
    const clear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setHistory((prev)=>({
                past: [],
                present: prev.present,
                future: []
            }));
    }, []);
    return {
        state: history.present,
        setState,
        undo,
        redo,
        canUndo: history.past.length > 0,
        canRedo: history.future.length > 0,
        clear
    };
}
}),
"[project]/src/components/canvas/controls/ContextMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContextMenu",
    ()=>ContextMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-ssr] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$start$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/text-align-start.js [app-ssr] (ecmascript) <export default as AlignLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ungroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ungroup$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ungroup.js [app-ssr] (ecmascript) <export default as Ungroup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/type.js [app-ssr] (ecmascript) <export default as Type>");
'use client';
;
;
;
function ContextMenu({ x, y, onClose, actions, selectedCount }) {
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>document.removeEventListener('mousedown', handleClickOutside);
    }, [
        onClose
    ]);
    // Adjust position to keep within viewport
    const style = {
        top: Math.min(y, ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : y),
        left: Math.min(x, ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : x)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: menuRef,
        className: "fixed z-50 flex flex-col items-start backdrop-blur-xl border rounded-xl shadow-2xl overflow-hidden min-w-[220px] animate-in fade-in zoom-in-95 duration-200",
        style: {
            ...style,
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full px-3 py-2 flex items-center justify-between",
                style: {
                    borderBottom: '1px solid var(--color-border)',
                    backgroundColor: 'var(--color-background-secondary)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-bold uppercase tracking-wider",
                        style: {
                            color: 'var(--color-text-muted)'
                        },
                        children: [
                            selectedCount,
                            " Selected"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/canvas/controls/ContextMenu.tsx",
                        lineNumber: 72,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-1 rounded-md transition-colors",
                                style: {
                                    color: 'var(--color-text-muted)'
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)',
                                onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = 'transparent',
                                title: "Lock",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/canvas/controls/ContextMenu.tsx",
                                    lineNumber: 86,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/controls/ContextMenu.tsx",
                                lineNumber: 79,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-1 rounded-md transition-colors",
                                style: {
                                    color: 'var(--color-text-muted)'
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)',
                                onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = 'transparent',
                                title: "Visible",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/canvas/controls/ContextMenu.tsx",
                                    lineNumber: 95,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/controls/ContextMenu.tsx",
                                lineNumber: 88,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/canvas/controls/ContextMenu.tsx",
                        lineNumber: 78,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/controls/ContextMenu.tsx",
                lineNumber: 65,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-1 w-full grid grid-cols-4 gap-1",
                style: {
                    borderBottom: '1px solid var(--color-border)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: actions.find((a)=>a.id === 'duplicate')?.action,
                        className: "p-2 rounded-lg flex flex-col items-center gap-1 transition-colors group",
                        style: {
                            color: 'var(--color-text-secondary)'
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                            e.currentTarget.style.opacity = '0.2';
                            e.currentTarget.style.color = 'var(--color-primary)';
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.opacity = '1';
                            e.currentTarget.style.color = 'var(--color-text-secondary)';
                        },
                        title: "Duplicate (Ctrl+D)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/controls/ContextMenu.tsx",
                            lineNumber: 121,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/controls/ContextMenu.tsx",
                        lineNumber: 105,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "p-2 rounded-lg flex flex-col items-center gap-1 transition-colors group",
                        style: {
                            color: 'var(--color-text-secondary)'
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.backgroundColor = 'transparent';
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$start$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__["AlignLeft"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/controls/ContextMenu.tsx",
                            lineNumber: 133,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/controls/ContextMenu.tsx",
                        lineNumber: 123,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "p-2 rounded-lg flex flex-col items-center gap-1 transition-colors group",
                        style: {
                            color: 'var(--color-text-secondary)'
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.backgroundColor = 'transparent';
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/controls/ContextMenu.tsx",
                            lineNumber: 145,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/controls/ContextMenu.tsx",
                        lineNumber: 135,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "p-2 rounded-lg flex flex-col items-center gap-1 transition-colors group",
                        style: {
                            color: 'var(--color-text-secondary)'
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.backgroundColor = 'transparent';
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ungroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ungroup$3e$__["Ungroup"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/controls/ContextMenu.tsx",
                            lineNumber: 157,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/controls/ContextMenu.tsx",
                        lineNumber: 147,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/controls/ContextMenu.tsx",
                lineNumber: 101,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-1 w-full flex flex-col",
                children: actions.filter((a)=>a.id !== 'duplicate').map((action)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            if (!action.disabled) {
                                action.action();
                                onClose();
                            }
                        },
                        disabled: action.disabled,
                        className: "w-full px-3 py-2 text-left text-sm rounded-lg flex items-center justify-between group transition-colors",
                        style: {
                            color: action.disabled ? 'var(--color-text-muted)' : action.danger ? 'var(--color-danger)' : 'var(--color-text)',
                            opacity: action.disabled ? 0.4 : 1,
                            cursor: action.disabled ? 'not-allowed' : 'pointer'
                        },
                        onMouseEnter: (e)=>{
                            if (!action.disabled) {
                                if (action.danger) {
                                    e.currentTarget.style.backgroundColor = 'var(--color-danger)';
                                    e.currentTarget.style.opacity = '0.2';
                                } else {
                                    e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                                }
                            }
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.opacity = action.disabled ? '0.4' : '1';
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    action.icon,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: action.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/canvas/controls/ContextMenu.tsx",
                                        lineNumber: 200,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/canvas/controls/ContextMenu.tsx",
                                lineNumber: 198,
                                columnNumber: 25
                            }, this),
                            action.shortcut && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-mono",
                                style: {
                                    color: 'var(--color-text-muted)',
                                    opacity: 0.6
                                },
                                children: action.shortcut
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/controls/ContextMenu.tsx",
                                lineNumber: 203,
                                columnNumber: 29
                            }, this)
                        ]
                    }, action.id, true, {
                        fileName: "[project]/src/components/canvas/controls/ContextMenu.tsx",
                        lineNumber: 164,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/controls/ContextMenu.tsx",
                lineNumber: 162,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/controls/ContextMenu.tsx",
        lineNumber: 55,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/canvas/controls/AlignmentToolbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlignmentToolbar",
    ()=>AlignmentToolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$start$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/text-align-start.js [app-ssr] (ecmascript) <export default as AlignLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$center$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignCenter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/text-align-center.js [app-ssr] (ecmascript) <export default as AlignCenter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$end$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/text-align-end.js [app-ssr] (ecmascript) <export default as AlignRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$align$2d$vertical$2d$justify$2d$start$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignVerticalJustifyStart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/align-vertical-justify-start.js [app-ssr] (ecmascript) <export default as AlignVerticalJustifyStart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$align$2d$vertical$2d$justify$2d$center$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignVerticalJustifyCenter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/align-vertical-justify-center.js [app-ssr] (ecmascript) <export default as AlignVerticalJustifyCenter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$align$2d$vertical$2d$justify$2d$end$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignVerticalJustifyEnd$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/align-vertical-justify-end.js [app-ssr] (ecmascript) <export default as AlignVerticalJustifyEnd>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$separator$2d$horizontal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SeparatorHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/separator-horizontal.js [app-ssr] (ecmascript) <export default as SeparatorHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$separator$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SeparatorVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/separator-vertical.js [app-ssr] (ecmascript) <export default as SeparatorVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Unlock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock-open.js [app-ssr] (ecmascript) <export default as Unlock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ungroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ungroup$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ungroup.js [app-ssr] (ecmascript) <export default as Ungroup>");
;
;
function AlignmentToolbar({ selectedCount, onAlign, onDistribute, onGroup, onLock, isGrouped, isLocked }) {
    const needsMultiple = selectedCount < 2;
    const needsThree = selectedCount < 3;
    const hasSelection = selectedCount > 0;
    const alignmentActions = [
        {
            id: 'align-left',
            label: 'Align Left',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$start$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__["AlignLeft"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/controls/AlignmentToolbar.tsx",
                lineNumber: 53,
                columnNumber: 19
            }, this),
            action: ()=>onAlign('left'),
            disabled: needsMultiple
        },
        {
            id: 'align-center',
            label: 'Align Center',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$center$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignCenter$3e$__["AlignCenter"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/controls/AlignmentToolbar.tsx",
                lineNumber: 60,
                columnNumber: 19
            }, this),
            action: ()=>onAlign('center'),
            disabled: needsMultiple
        },
        {
            id: 'align-right',
            label: 'Align Right',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$end$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignRight$3e$__["AlignRight"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/controls/AlignmentToolbar.tsx",
                lineNumber: 67,
                columnNumber: 19
            }, this),
            action: ()=>onAlign('right'),
            disabled: needsMultiple
        },
        {
            id: 'align-top',
            label: 'Align Top',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$align$2d$vertical$2d$justify$2d$start$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignVerticalJustifyStart$3e$__["AlignVerticalJustifyStart"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/controls/AlignmentToolbar.tsx",
                lineNumber: 74,
                columnNumber: 19
            }, this),
            action: ()=>onAlign('top'),
            disabled: needsMultiple
        },
        {
            id: 'align-middle',
            label: 'Align Middle',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$align$2d$vertical$2d$justify$2d$center$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignVerticalJustifyCenter$3e$__["AlignVerticalJustifyCenter"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/controls/AlignmentToolbar.tsx",
                lineNumber: 81,
                columnNumber: 19
            }, this),
            action: ()=>onAlign('middle'),
            disabled: needsMultiple
        },
        {
            id: 'align-bottom',
            label: 'Align Bottom',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$align$2d$vertical$2d$justify$2d$end$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignVerticalJustifyEnd$3e$__["AlignVerticalJustifyEnd"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/controls/AlignmentToolbar.tsx",
                lineNumber: 88,
                columnNumber: 19
            }, this),
            action: ()=>onAlign('bottom'),
            disabled: needsMultiple
        },
        {
            id: 'separator-1',
            label: '',
            icon: null,
            action: ()=>{},
            separator: true
        },
        {
            id: 'distribute-horizontal',
            label: 'Distribute Horizontally',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$separator$2d$horizontal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SeparatorHorizontal$3e$__["SeparatorHorizontal"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/controls/AlignmentToolbar.tsx",
                lineNumber: 102,
                columnNumber: 19
            }, this),
            action: ()=>onDistribute('horizontal'),
            disabled: needsThree
        },
        {
            id: 'distribute-vertical',
            label: 'Distribute Vertically',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$separator$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SeparatorVertical$3e$__["SeparatorVertical"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/controls/AlignmentToolbar.tsx",
                lineNumber: 109,
                columnNumber: 19
            }, this),
            action: ()=>onDistribute('vertical'),
            disabled: needsThree
        },
        {
            id: 'separator-2',
            label: '',
            icon: null,
            action: ()=>{},
            separator: true
        },
        {
            id: 'group',
            label: isGrouped ? 'Ungroup' : 'Group',
            icon: isGrouped ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ungroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ungroup$3e$__["Ungroup"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/controls/AlignmentToolbar.tsx",
                lineNumber: 123,
                columnNumber: 31
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/controls/AlignmentToolbar.tsx",
                lineNumber: 123,
                columnNumber: 65
            }, this),
            action: onGroup,
            disabled: needsMultiple
        },
        {
            id: 'lock',
            label: isLocked ? 'Unlock' : 'Lock',
            icon: isLocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Unlock$3e$__["Unlock"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/controls/AlignmentToolbar.tsx",
                lineNumber: 130,
                columnNumber: 30
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/controls/AlignmentToolbar.tsx",
                lineNumber: 130,
                columnNumber: 63
            }, this),
            action: onLock,
            disabled: !hasSelection
        }
    ];
    if (selectedCount < 2) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-20 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 p-2 rounded-xl shadow-2xl border backdrop-blur-xl",
        style: {
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)'
        },
        children: alignmentActions.map((action)=>{
            if (action.separator) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-px h-6 mx-1",
                    style: {
                        backgroundColor: 'var(--color-border)'
                    }
                }, action.id, false, {
                    fileName: "[project]/src/components/canvas/controls/AlignmentToolbar.tsx",
                    lineNumber: 151,
                    columnNumber: 25
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: action.action,
                disabled: action.disabled,
                title: action.label,
                className: "p-2 rounded-lg transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed",
                style: {
                    color: action.disabled ? 'var(--color-text-muted)' : 'var(--color-text)',
                    backgroundColor: action.disabled ? 'transparent' : 'transparent'
                },
                onMouseEnter: (e)=>{
                    if (!action.disabled) {
                        e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                    }
                },
                onMouseLeave: (e)=>{
                    e.currentTarget.style.backgroundColor = 'transparent';
                },
                children: action.icon
            }, action.id, false, {
                fileName: "[project]/src/components/canvas/controls/AlignmentToolbar.tsx",
                lineNumber: 160,
                columnNumber: 21
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/controls/AlignmentToolbar.tsx",
        lineNumber: 141,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/canvas/controls/GridToggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GridToggle",
    ()=>GridToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-ssr] (ecmascript) <export default as Grid>");
;
;
function GridToggle({ enabled, onToggle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onToggle,
        title: enabled ? 'Disable Grid Snap' : 'Enable Grid Snap',
        className: `
                fixed bottom-6 right-6 z-50
                p-3 rounded-xl shadow-2xl
                transition-all duration-200
                ${enabled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300'}
                border ${enabled ? 'border-blue-500' : 'border-gray-700'}
                active:scale-95
            `,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/src/components/canvas/controls/GridToggle.tsx",
            lineNumber: 26,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/controls/GridToggle.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/canvas/controls/ThemeToggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
;
;
function ThemeToggle({ isDark, onToggle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onToggle,
        title: isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode',
        className: `
                fixed bottom-6 right-20 z-50
                p-3 rounded-xl shadow-2xl
                transition-all duration-200
                ${isDark ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-white text-gray-900 hover:bg-gray-100'}
                border ${isDark ? 'border-gray-700' : 'border-gray-300'}
                active:scale-95
            `,
        children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/src/components/canvas/controls/ThemeToggle.tsx",
            lineNumber: 27,
            columnNumber: 17
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/src/components/canvas/controls/ThemeToggle.tsx",
            lineNumber: 29,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/controls/ThemeToggle.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/canvas/controls/AxisLockIndicator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AxisLockIndicator",
    ()=>AxisLockIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function AxisLockIndicator({ isActive, axis }) {
    if (!isActive || !axis) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-6 py-3 rounded-xl bg-blue-500/90 backdrop-blur-md border-2 border-blue-400 shadow-2xl shadow-blue-500/50 animate-in fade-in zoom-in duration-150",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center",
                        children: axis === 'x' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5 text-white",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 3,
                                d: "M8 12h8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/controls/AxisLockIndicator.tsx",
                                lineNumber: 18,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/controls/AxisLockIndicator.tsx",
                            lineNumber: 17,
                            columnNumber: 29
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5 text-white",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 3,
                                d: "M12 8v8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/controls/AxisLockIndicator.tsx",
                                lineNumber: 22,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/controls/AxisLockIndicator.tsx",
                            lineNumber: 21,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/controls/AxisLockIndicator.tsx",
                        lineNumber: 15,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-bold uppercase tracking-wider opacity-80",
                                children: "Axis Locked"
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/controls/AxisLockIndicator.tsx",
                                lineNumber: 27,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg font-bold",
                                children: axis === 'x' ? 'Horizontal Only' : 'Vertical Only'
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/controls/AxisLockIndicator.tsx",
                                lineNumber: 28,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/canvas/controls/AxisLockIndicator.tsx",
                        lineNumber: 26,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/controls/AxisLockIndicator.tsx",
                lineNumber: 14,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/canvas/controls/AxisLockIndicator.tsx",
            lineNumber: 13,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/controls/AxisLockIndicator.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/lib/utils/alignment.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alignItems",
    ()=>alignItems,
    "areItemsAligned",
    ()=>areItemsAligned,
    "distributeItems",
    ()=>distributeItems,
    "getItemBounds",
    ()=>getItemBounds,
    "getSelectionBounds",
    ()=>getSelectionBounds
]);
const ITEM_WIDTH = 300; // w-75 = 18.75rem = 300px
const ITEM_HEIGHT = 172; // Actual rendered card height
function getItemBounds(item) {
    return {
        x: item.x,
        y: item.y,
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT
    };
}
function getSelectionBounds(items) {
    if (items.length === 0) return null;
    const bounds = items.map(getItemBounds);
    const minX = Math.min(...bounds.map((b)=>b.x));
    const minY = Math.min(...bounds.map((b)=>b.y));
    const maxX = Math.max(...bounds.map((b)=>b.x + b.width));
    const maxY = Math.max(...bounds.map((b)=>b.y + b.height));
    return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
    };
}
function alignItems(options) {
    const { type, items } = options;
    if (items.length < 2) return items;
    const bounds = getSelectionBounds(items);
    if (!bounds) return items;
    return items.map((item)=>{
        const itemBounds = getItemBounds(item);
        let newX = item.x;
        let newY = item.y;
        switch(type){
            case 'left':
                newX = bounds.x;
                break;
            case 'center':
                newX = bounds.x + (bounds.width - itemBounds.width) / 2;
                break;
            case 'right':
                newX = bounds.x + bounds.width - itemBounds.width;
                break;
            case 'top':
                newY = bounds.y;
                break;
            case 'middle':
                newY = bounds.y + (bounds.height - itemBounds.height) / 2;
                break;
            case 'bottom':
                newY = bounds.y + bounds.height - itemBounds.height;
                break;
        }
        return {
            ...item,
            x: newX,
            y: newY
        };
    });
}
function distributeItems(options) {
    const { direction, items } = options;
    if (items.length < 3) return items;
    const sorted = [
        ...items
    ].sort((a, b)=>direction === 'horizontal' ? a.x - b.x : a.y - b.y);
    const bounds = getSelectionBounds(sorted);
    if (!bounds) return items;
    const first = sorted[0];
    const last = sorted[sorted.length - 1];
    if (direction === 'horizontal') {
        const totalSpace = last.x + ITEM_WIDTH - first.x;
        const spacing = (totalSpace - sorted.length * ITEM_WIDTH) / (sorted.length - 1);
        return sorted.map((item, index)=>({
                ...item,
                x: first.x + index * (ITEM_WIDTH + spacing)
            }));
    } else {
        const totalSpace = last.y + ITEM_HEIGHT - first.y;
        const spacing = (totalSpace - sorted.length * ITEM_HEIGHT) / (sorted.length - 1);
        return sorted.map((item, index)=>({
                ...item,
                y: first.y + index * (ITEM_HEIGHT + spacing)
            }));
    }
}
function areItemsAligned(item1, item2, axis, tolerance = 5) {
    const bounds1 = getItemBounds(item1);
    const bounds2 = getItemBounds(item2);
    if (axis === 'x') {
        // Check left, center, or right alignment
        return Math.abs(bounds1.x - bounds2.x) < tolerance || Math.abs(bounds1.x + bounds1.width / 2 - (bounds2.x + bounds2.width / 2)) < tolerance || Math.abs(bounds1.x + bounds1.width - (bounds2.x + bounds2.width)) < tolerance;
    } else {
        // Check top, middle, or bottom alignment
        return Math.abs(bounds1.y - bounds2.y) < tolerance || Math.abs(bounds1.y + bounds1.height / 2 - (bounds2.y + bounds2.height / 2)) < tolerance || Math.abs(bounds1.y + bounds1.height - (bounds2.y + bounds2.height)) < tolerance;
    }
}
}),
"[project]/src/lib/theme.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "darkTheme",
    ()=>darkTheme,
    "lightTheme",
    ()=>lightTheme,
    "themes",
    ()=>themes
]);
const darkTheme = {
    name: 'dark',
    colors: {
        // Primary: Blue
        primary: '#3b82f6',
        primaryHover: '#2563eb',
        primaryActive: '#1d4ed8',
        // Secondary: Purple
        secondary: '#8b5cf6',
        secondaryHover: '#7c3aed',
        // Supporting
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        // Backgrounds
        background: '#0a0a0a',
        backgroundSecondary: '#171717',
        backgroundTertiary: '#262626',
        // Surfaces
        surface: '#1f1f1f',
        surfaceHover: '#2a2a2a',
        // Text
        text: '#ffffff',
        textSecondary: '#d4d4d4',
        textMuted: '#737373',
        // Borders
        border: '#404040',
        borderHover: '#525252'
    }
};
const lightTheme = {
    name: 'light',
    colors: {
        // Primary: Blue
        primary: '#2563eb',
        primaryHover: '#1d4ed8',
        primaryActive: '#1e40af',
        // Secondary: Purple
        secondary: '#7c3aed',
        secondaryHover: '#6d28d9',
        // Supporting
        success: '#059669',
        warning: '#d97706',
        danger: '#dc2626',
        // Backgrounds
        background: '#ffffff',
        backgroundSecondary: '#f9fafb',
        backgroundTertiary: '#f3f4f6',
        // Surfaces
        surface: '#ffffff',
        surfaceHover: '#f9fafb',
        // Text
        text: '#0a0a0a',
        textSecondary: '#404040',
        textMuted: '#737373',
        // Borders
        border: '#e5e7eb',
        borderHover: '#d1d5db'
    }
};
const themes = {
    light: lightTheme,
    dark: darkTheme
};
}),
"[project]/src/hooks/useTheme.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/theme.ts [app-ssr] (ecmascript)");
;
;
const THEME_STORAGE_KEY = 'qanvas-theme';
function useTheme() {
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themes"].dark);
    // Load theme from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const stored = localStorage.getItem(THEME_STORAGE_KEY);
        if (stored === 'light') {
            setTheme(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themes"].light);
        } else {
            setTheme(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themes"].dark);
        }
    }, []);
    // Apply theme to CSS variables
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const root = document.documentElement;
        const colors = theme.colors;
        // Apply all color variables
        root.style.setProperty('--color-primary', colors.primary);
        root.style.setProperty('--color-primary-hover', colors.primaryHover);
        root.style.setProperty('--color-primary-active', colors.primaryActive);
        root.style.setProperty('--color-secondary', colors.secondary);
        root.style.setProperty('--color-secondary-hover', colors.secondaryHover);
        root.style.setProperty('--color-success', colors.success);
        root.style.setProperty('--color-warning', colors.warning);
        root.style.setProperty('--color-danger', colors.danger);
        root.style.setProperty('--color-background', colors.background);
        root.style.setProperty('--color-background-secondary', colors.backgroundSecondary);
        root.style.setProperty('--color-background-tertiary', colors.backgroundTertiary);
        root.style.setProperty('--color-surface', colors.surface);
        root.style.setProperty('--color-surface-hover', colors.surfaceHover);
        root.style.setProperty('--color-text', colors.text);
        root.style.setProperty('--color-text-secondary', colors.textSecondary);
        root.style.setProperty('--color-text-muted', colors.textMuted);
        root.style.setProperty('--color-border', colors.border);
        root.style.setProperty('--color-border-hover', colors.borderHover);
        // Set data attribute for theme-specific styles
        root.setAttribute('data-theme', theme.name);
    }, [
        theme
    ]);
    const toggleTheme = ()=>{
        const newTheme = theme.name === 'dark' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themes"].light : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themes"].dark;
        setTheme(newTheme);
        localStorage.setItem(THEME_STORAGE_KEY, newTheme.name);
    };
    const setLightTheme = ()=>{
        setTheme(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themes"].light);
        localStorage.setItem(THEME_STORAGE_KEY, 'light');
    };
    const setDarkTheme = ()=>{
        setTheme(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themes"].dark);
        localStorage.setItem(THEME_STORAGE_KEY, 'dark');
    };
    return {
        theme,
        toggleTheme,
        setLightTheme,
        setDarkTheme,
        isDark: theme.name === 'dark',
        isLight: theme.name === 'light'
    };
}
}),
"[project]/src/components/canvas/board/CanvasBoard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CanvasBoard",
    ()=>CanvasBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/core/dist/core.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>"); // Combined imports for lucide-react
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Unlock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock-open.js [app-ssr] (ecmascript) <export default as Unlock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ungroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ungroup$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ungroup.js [app-ssr] (ecmascript) <export default as Ungroup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$CanvasSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/CanvasSidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$CanvasWorkspace$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/CanvasWorkspace.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$CanvasItemCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/CanvasItemCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$PropertiesPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/PropertiesPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMultiSelect$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMultiSelect.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKeyboardShortcuts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useKeyboardShortcuts.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useModifierKeys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useModifierKeys.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSnapToGrid$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSnapToGrid.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useHistory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useHistory.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$ContextMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/controls/ContextMenu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$AlignmentToolbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/controls/AlignmentToolbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$GridToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/controls/GridToggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/controls/ThemeToggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$AxisLockIndicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/controls/AxisLockIndicator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$alignment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/alignment.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTheme.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Custom collision strategy
const customCollisionStrategy = (args)=>{
    const pointerCollisions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pointerWithin"])(args);
    if (pointerCollisions.length > 0) return pointerCollisions;
    const rectCollisions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rectIntersection"])(args);
    return rectCollisions.filter((c)=>c.id === 'canvas-droppable');
};
// Mock Data
const PROPOSITIONS = [
    {
        id: 'digital-workspace',
        label: 'Digital Workspace'
    },
    {
        id: 'hybrid-cloud',
        label: 'Hybrid Cloud'
    },
    {
        id: 'artificial-intelligence',
        label: 'AI'
    },
    {
        id: 'cloud-native',
        label: 'Cloud Native'
    }
];
const VENDORS = [
    {
        id: 'v-vmware',
        name: 'VMware'
    },
    {
        id: 'v-microsoft',
        name: 'Microsoft'
    },
    {
        id: 'v-aws',
        name: 'AWS'
    },
    {
        id: 'v-google',
        name: 'Google Cloud'
    }
];
const PRODUCTS = [
    {
        id: 'p-vsphere',
        vendorId: 'v-vmware',
        propositionId: 'hybrid-cloud',
        name: 'vSphere'
    },
    {
        id: 'p-horizon',
        vendorId: 'v-vmware',
        propositionId: 'digital-workspace',
        name: 'Horizon'
    },
    {
        id: 'p-azure-vd',
        vendorId: 'v-microsoft',
        propositionId: 'digital-workspace',
        name: 'Azure Virtual Desktop'
    },
    {
        id: 'p-m365',
        vendorId: 'v-microsoft',
        propositionId: 'digital-workspace',
        name: 'Microsoft 365'
    },
    {
        id: 'p-openai',
        vendorId: 'v-microsoft',
        propositionId: 'artificial-intelligence',
        name: 'Azure OpenAI'
    },
    {
        id: 'p-eks',
        vendorId: 'v-aws',
        propositionId: 'cloud-native',
        name: 'Amazon EKS'
    }
];
const SOLUTIONS = [
    {
        id: 's-hybrid-workspace',
        name: 'Modern Hybrid Workspace',
        productIds: [
            'p-horizon',
            'p-m365'
        ]
    }
];
function CanvasBoard() {
    // State with history for undo/redo
    const history = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useHistory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHistory"])([]);
    const items = history.state;
    const setItems = history.setState;
    const [activeDragData, setActiveDragData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedProposition, setSelectedProposition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [debugInfo, setDebugInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Ready');
    // Drag state for visual guides
    const [dragState, setDragState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const lastDragUpdateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [lockedAxis, setLockedAxis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [gridSnapEnabled, setGridSnapEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true); // Enable by default
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Context Menu State
    const [contextMenu, setContextMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0,
        visible: false
    });
    // Clipboard State
    const [clipboard, setClipboard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Grid snapping hook
    const gridSnap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSnapToGrid$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSnapToGrid"])({
        enabled: gridSnapEnabled,
        gridSize: 20
    });
    // Theme hook
    const { theme, toggleTheme, isDark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    // Alignment handlers
    const handleAlign = (type)=>{
        const selectedItems = items.filter((item)=>multiSelect.selectedIds.includes(item.id));
        if (selectedItems.length < 2) return;
        const aligned = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$alignment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alignItems"])({
            type,
            items: selectedItems
        });
        setItems((prev)=>prev.map((item)=>{
                const alignedItem = aligned.find((a)=>a.id === item.id);
                return alignedItem || item;
            }));
        setDebugInfo(`Aligned ${selectedItems.length} items ${type}`);
    };
    const handleDistribute = (direction)=>{
        const selectedItems = items.filter((item)=>multiSelect.selectedIds.includes(item.id));
        if (selectedItems.length < 3) return;
        const distributed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$alignment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["distributeItems"])({
            direction,
            items: selectedItems
        });
        setItems((prev)=>prev.map((item)=>{
                const distributedItem = distributed.find((d)=>d.id === item.id);
                return distributedItem || item;
            }));
        setDebugInfo(`Distributed ${selectedItems.length} items ${direction}`);
    };
    // Multi-select hook
    const multiSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMultiSelect$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMultiSelect"])();
    // Modifier keys
    const keys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useModifierKeys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useModifierKeys"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    // Keyboard shortcuts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKeyboardShortcuts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useKeyboardShortcuts"])({
        onSelectAll: ()=>multiSelect.selectAll(items.map((i)=>i.id)),
        onCopy: ()=>{
            const selected = multiSelect.selectedIds;
            if (selected.length > 0) {
                const itemsToCopy = items.filter((item)=>selected.includes(item.id));
                setClipboard(itemsToCopy);
                setDebugInfo(`Copied ${selected.length} item(s)`);
            }
        },
        onPaste: ()=>{
            if (clipboard.length > 0) {
                const newItems = clipboard.map((item)=>({
                        ...item,
                        id: `item-${Date.now()}-${Math.random()}`,
                        x: item.x + 20,
                        y: item.y + 20,
                        groupId: undefined,
                        locked: false // Unlock when pasting
                    }));
                setItems((prev)=>[
                        ...prev,
                        ...newItems
                    ]);
                multiSelect.selectMultiple(newItems.map((it)=>it.id));
                setDebugInfo(`Pasted ${clipboard.length} item(s)`);
            }
        },
        onDelete: ()=>{
            const selected = multiSelect.selectedIds;
            if (selected.length > 0) {
                setItems((prev)=>prev.filter((item)=>!selected.includes(item.id)));
                multiSelect.clearSelection();
                setDebugInfo(`Deleted ${selected.length} item(s)`);
            }
        },
        onDuplicate: ()=>{
            const selected = multiSelect.selectedIds;
            if (selected.length > 0) {
                const newItems = items.filter((item)=>selected.includes(item.id)).map((item)=>({
                        ...item,
                        id: `item-${Date.now()}-${Math.random()}`,
                        x: item.x + 20,
                        y: item.y + 20
                    }));
                setItems((prev)=>[
                        ...prev,
                        ...newItems
                    ]);
                setDebugInfo(`Duplicated ${selected.length} item(s)`);
            }
        },
        onEscape: ()=>multiSelect.clearSelection(),
        onNudgeUp: ()=>{
            const selected = multiSelect.selectedIds;
            if (selected.length > 0) {
                setItems((prev)=>prev.map((item)=>selected.includes(item.id) ? {
                            ...item,
                            y: item.y - 1
                        } : item));
            }
        },
        onNudgeDown: ()=>{
            const selected = multiSelect.selectedIds;
            if (selected.length > 0) {
                setItems((prev)=>prev.map((item)=>selected.includes(item.id) ? {
                            ...item,
                            y: item.y + 1
                        } : item));
            }
        },
        onNudgeLeft: ()=>{
            const selected = multiSelect.selectedIds;
            if (selected.length > 0) {
                setItems((prev)=>prev.map((item)=>selected.includes(item.id) ? {
                            ...item,
                            x: item.x - 1
                        } : item));
            }
        },
        onNudgeRight: ()=>{
            const selected = multiSelect.selectedIds;
            if (selected.length > 0) {
                setItems((prev)=>prev.map((item)=>selected.includes(item.id) ? {
                            ...item,
                            x: item.x + 1
                        } : item));
            }
        },
        onGroup: ()=>{
            const selected = multiSelect.selectedIds;
            if (selected.length < 2) return;
            const selectedItems = items.filter((item)=>selected.includes(item.id));
            const allGrouped = selectedItems.every((it)=>it.groupId);
            if (allGrouped) {
                // Ungroup
                setItems((prev)=>prev.map((item)=>selected.includes(item.id) ? {
                            ...item,
                            groupId: undefined
                        } : item));
                setDebugInfo(`Ungrouped ${selected.length} items`);
            } else {
                // Group
                const groupId = `group-${Date.now()}`;
                setItems((prev)=>prev.map((item)=>selected.includes(item.id) ? {
                            ...item,
                            groupId
                        } : item));
                setDebugInfo(`Grouped ${selected.length} items`);
            }
        },
        onLock: ()=>{
            const selected = multiSelect.selectedIds;
            if (selected.length === 0) return;
            const selectedItems = items.filter((item)=>selected.includes(item.id));
            const allLocked = selectedItems.every((it)=>it.locked);
            setItems((prev)=>prev.map((item)=>selected.includes(item.id) ? {
                        ...item,
                        locked: !allLocked
                    } : item));
            setDebugInfo(`${allLocked ? 'Unlocked' : 'Locked'} ${selected.length} item(s)`);
        },
        onUndo: ()=>{
            if (history.canUndo) {
                history.undo();
                setDebugInfo('Undo');
            }
        },
        onRedo: ()=>{
            if (history.canRedo) {
                history.redo();
                setDebugInfo('Redo');
            }
        }
    }, mounted);
    const sensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSensors"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MouseSensor"], {
        activationConstraint: {
            distance: 5
        }
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TouchSensor"], {
        activationConstraint: {
            delay: 250,
            tolerance: 5
        }
    }));
    // Prevent hydration mismatch
    if (!mounted) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen w-full bg-gray-950 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-8 rounded-full border-2 border-blue-500 border-t-transparent animate-spin"
        }, void 0, false, {
            fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
            lineNumber: 284,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
        lineNumber: 283,
        columnNumber: 9
    }, this);
    // Handlers
    const handleDragStart = (event)=>{
        setActiveDragData(event.active.data.current);
        setDebugInfo(`Dragging ${event.active.data.current?.label}...`);
        const sourceData = event.active.data.current;
        if (sourceData?.source === 'canvas') {
            // Existing canvas item
            const item = items.find((it)=>it.id === event.active.id);
            if (item) {
                setDragState({
                    id: item.id,
                    x: item.x,
                    y: item.y,
                    width: 300,
                    height: 172
                });
                // Store initial position for Shift-key axis locking
                lastDragUpdateRef.current = {
                    x: item.x,
                    y: item.y,
                    time: Date.now()
                };
            }
        } else if (sourceData?.source === 'sidebar') {
            // New item from sidebar - initialize at cursor position
            // We'll update the position in handleDragMove
            setDragState({
                id: 'new-item-temp',
                x: 0,
                y: 0,
                width: 300,
                height: 172
            });
            lastDragUpdateRef.current = {
                x: 0,
                y: 0,
                time: Date.now()
            };
        }
    };
    const handleDragMove = (event)=>{
        const { active, delta } = event;
        const sourceData = active.data.current;
        const canvasRect = canvasRef.current?.getBoundingClientRect();
        if (!canvasRect) return;
        // Check if Shift key is pressed for axis locking
        const isShiftPressed = keys.shift;
        if (sourceData?.source === 'canvas') {
            // Moving existing canvas item
            const item = items.find((it)=>it.id === active.id);
            if (item) {
                let newX = item.x + delta.x;
                let newY = item.y + delta.y;
                let currentLockedAxis = null;
                // Apply Shift-key axis locking
                if (isShiftPressed && lastDragUpdateRef.current) {
                    const initialX = lastDragUpdateRef.current.x;
                    const initialY = lastDragUpdateRef.current.y;
                    const deltaFromInitialX = Math.abs(newX - initialX);
                    const deltaFromInitialY = Math.abs(newY - initialY);
                    // Lock to the axis with larger movement
                    if (deltaFromInitialX > deltaFromInitialY) {
                        // Lock to X axis (horizontal movement only)
                        newY = initialY;
                        currentLockedAxis = 'x';
                    } else {
                        // Lock to Y axis (vertical movement only)
                        newX = initialX;
                        currentLockedAxis = 'y';
                    }
                }
                // Update locked axis state for visual indicator
                setLockedAxis(isShiftPressed ? currentLockedAxis : null);
                // Only update if position changed by at least 5px (prevent infinite loops)
                if (!dragState || dragState.id !== item.id || Math.abs(dragState.x - newX) >= 5 || Math.abs(dragState.y - newY) >= 5) {
                    setDragState({
                        id: item.id,
                        x: newX,
                        y: newY,
                        width: 300,
                        height: 172
                    });
                }
            }
        } else if (sourceData?.source === 'sidebar') {
            // Dragging new item from sidebar
            const droppedRect = active.rect.current.translated;
            if (droppedRect) {
                // Round to avoid floating point issues
                let newX = Math.round(droppedRect.left - canvasRect.left);
                let newY = Math.round(droppedRect.top - canvasRect.top);
                let currentLockedAxis = null;
                // Apply Shift-key axis locking
                if (isShiftPressed && lastDragUpdateRef.current) {
                    const initialX = lastDragUpdateRef.current.x;
                    const initialY = lastDragUpdateRef.current.y;
                    const deltaFromInitialX = Math.abs(newX - initialX);
                    const deltaFromInitialY = Math.abs(newY - initialY);
                    // Lock to the axis with larger movement
                    if (deltaFromInitialX > deltaFromInitialY) {
                        // Lock to X axis (horizontal movement only)
                        newY = initialY;
                        currentLockedAxis = 'x';
                    } else {
                        // Lock to Y axis (vertical movement only)
                        newX = initialX;
                        currentLockedAxis = 'y';
                    }
                }
                // Update locked axis state for visual indicator
                setLockedAxis(isShiftPressed ? currentLockedAxis : null);
                // Only update if position changed by at least 8px (prevent infinite loops)
                if (!dragState || dragState.id !== 'new-item-temp' || Math.abs(dragState.x - newX) >= 8 || Math.abs(dragState.y - newY) >= 8) {
                    setDragState({
                        id: 'new-item-temp',
                        x: newX,
                        y: newY,
                        width: 300,
                        height: 172
                    });
                }
            }
        }
    };
    const handleDragEnd = (event)=>{
        const { active, over } = event;
        setActiveDragData(null);
        setLockedAxis(null); // Clear axis lock indicator
        if (!over || over.id !== 'canvas-droppable') {
            setDebugInfo('Dropped outside canvas');
            setDragState(null); // Clear drag state on invalid drop
            return;
        }
        const canvasRect = canvasRef.current?.getBoundingClientRect();
        const sourceData = active.data.current;
        if (!sourceData) {
            setDragState(null); // Clear drag state
            return;
        }
        const droppedRect = active.rect.current.translated;
        let rawX = droppedRect ? droppedRect.left - (canvasRect?.left ?? 0) : 100;
        let rawY = droppedRect ? droppedRect.top - (canvasRect?.top ?? 0) : 100;
        // Apply Shift-key axis locking if it was active
        if (keys.shift && lastDragUpdateRef.current) {
            const initialX = lastDragUpdateRef.current.x;
            const initialY = lastDragUpdateRef.current.y;
            const deltaFromInitialX = Math.abs(rawX - initialX);
            const deltaFromInitialY = Math.abs(rawY - initialY);
            // Lock to the axis with larger movement
            if (deltaFromInitialX > deltaFromInitialY) {
                // Lock to X axis (horizontal movement only)
                rawY = initialY;
            } else {
                // Lock to Y axis (vertical movement only)
                rawX = initialX;
            }
        }
        // Use snapped position from snap guides if available
        let finalX = rawX;
        let finalY = rawY;
        // Check if we have valid snapped positions
        const hasSnapX = typeof snappedX === 'number' && !isNaN(snappedX) && isFinite(snappedX);
        const hasSnapY = typeof snappedY === 'number' && !isNaN(snappedY) && isFinite(snappedY);
        if (snapGuides.length > 0 && hasSnapX && hasSnapY && !keys.shift) {
            // Snap guides have priority (but not when Shift is pressed for axis locking)
            finalX = snappedX;
            finalY = snappedY;
            console.log('✅ Using snap guides:', {
                snappedX,
                snappedY
            });
        } else if (gridSnapEnabled && !keys.shift) {
            // Grid snapping as fallback
            const snapped = gridSnap.snapPosition(rawX, rawY);
            finalX = snapped.x;
            finalY = snapped.y;
            console.log('📐 Using grid snap:', {
                x: snapped.x,
                y: snapped.y
            });
        } else {
            console.log('🎯 Using raw position:', {
                rawX,
                rawY
            });
        }
        if (sourceData.source === 'sidebar') {
            const newItem = {
                id: `item-${Date.now()}`,
                entityId: sourceData.entityId,
                entityType: sourceData.type,
                x: finalX,
                y: finalY,
                data: sourceData
            };
            setItems((prev)=>[
                    ...prev,
                    newItem
                ]);
            multiSelect.selectMultiple([
                newItem.id
            ]);
            setDebugInfo(`Added ${newItem.data.label}`);
        } else if (sourceData.source === 'canvas') {
            const draggedItem = items.find((it)=>it.id === active.id);
            if (!draggedItem) return;
            // Don't allow moving locked items
            if (draggedItem.locked) {
                setDebugInfo('Item is locked');
                return;
            }
            // Check modifier keys from the actual drag event, not global state
            // This prevents false positives from stale key state
            const activatorEvent = event.activatorEvent;
            // Only Ctrl key should trigger copy, not Alt
            const isCopying = 'ctrlKey' in activatorEvent && activatorEvent.ctrlKey;
            // Comprehensive debug log - only fires on drop
            const draggedItemForLog = items.find((it)=>it.id === active.id);
            console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
            console.log('🎯 SNAP ALIGNMENT DEBUG');
            console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
            console.log('📦 Dragged Item:', draggedItemForLog?.data?.label);
            console.log('   Original Position:', draggedItemForLog ? `X: ${Math.round(draggedItemForLog.x)}, Y: ${Math.round(draggedItemForLog.y)}` : 'N/A');
            console.log('');
            console.log('📍 Drop Calculation:');
            console.log('   Raw Position:     X:', Math.round(rawX), 'Y:', Math.round(rawY));
            console.log('   Snapped Position: X:', Math.round(snappedX), 'Y:', Math.round(snappedY));
            console.log('   Final Position:   X:', Math.round(finalX), 'Y:', Math.round(finalY));
            console.log('');
            console.log('📏 Snap Guides:', snapGuides.length > 0 ? 'ACTIVE' : 'NONE');
            if (snapGuides.length > 0) {
                snapGuides.forEach((g)=>{
                    console.log(`   ${g.type === 'vertical' ? '│' : '─'} ${g.label} at ${g.type === 'vertical' ? 'X' : 'Y'}: ${Math.round(g.position)}`);
                });
            }
            console.log('');
            console.log('🗺️  All Items on Canvas:');
            items.forEach((it)=>{
                const isCurrent = it.id === active.id;
                console.log(`   ${isCurrent ? '→' : ' '} ${it.data?.label}: X: ${Math.round(it.x)}, Y: ${Math.round(it.y)}`);
            });
            console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
            if (isCopying) {
                const newItemId = `item-${Date.now()}-${Math.random()}`;
                setItems((prev)=>{
                    const original = prev.find((it)=>it.id === active.id);
                    if (!original) return prev;
                    const newItem = {
                        ...original,
                        id: newItemId,
                        x: finalX,
                        y: finalY,
                        groupId: undefined // Remove from group when copying
                    };
                    return [
                        ...prev,
                        newItem
                    ];
                });
                multiSelect.selectMultiple([
                    newItemId
                ]);
                setDebugInfo(`Copied item`);
            } else {
                // Calculate movement delta
                const deltaX = finalX - draggedItem.x;
                const deltaY = finalY - draggedItem.y;
                // Check if dragged item is part of multi-selection
                const isMultiSelected = multiSelect.selectedIds.includes(active.id) && multiSelect.selectedIds.length > 1;
                // Debug logging for multi-select
                console.log('🔍 Multi-select debug:', {
                    draggedItemId: active.id,
                    selectedIds: multiSelect.selectedIds,
                    selectedCount: multiSelect.selectedIds.length,
                    isMultiSelected,
                    isDraggedItemSelected: multiSelect.selectedIds.includes(active.id)
                });
                if (isMultiSelected) {
                    // Move all selected items together
                    console.log('✅ Moving multiple items together');
                    setItems((prev)=>prev.map((it)=>{
                            if (multiSelect.selectedIds.includes(it.id) && !it.locked) {
                                return {
                                    ...it,
                                    x: it.x + deltaX,
                                    y: it.y + deltaY
                                };
                            }
                            return it;
                        }));
                    setDebugInfo(`Moved ${multiSelect.selectedIds.length} selected items`);
                } else if (draggedItem.groupId) {
                    // Move all items in the same group
                    setItems((prev)=>prev.map((it)=>{
                            if (it.groupId === draggedItem.groupId && !it.locked) {
                                return {
                                    ...it,
                                    x: it.x + deltaX,
                                    y: it.y + deltaY
                                };
                            }
                            return it;
                        }));
                    setDebugInfo(`Moved group`);
                } else {
                    // Move single item - USE FINAL POSITION (includes snapping)
                    setItems((prev)=>prev.map((it)=>{
                            if (it.id === active.id) {
                                return {
                                    ...it,
                                    x: finalX,
                                    y: finalY // ✅ FIXED - Use snapped position
                                };
                            }
                            return it;
                        }));
                    setDebugInfo(`Moved item to X:${Math.round(finalX)} Y:${Math.round(finalY)}`);
                }
            }
        }
        // Clear drag state after all operations are complete
        setDragState(null);
    };
    // Context Menu Actions
    const handleContextMenu = (e)=>{
        e.preventDefault();
        setContextMenu({
            x: e.clientX,
            y: e.clientY,
            visible: true
        });
    };
    const contextMenuActions = [
        {
            id: 'duplicate',
            label: 'Duplicate',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                lineNumber: 635,
                columnNumber: 19
            }, this),
            action: ()=>{
                const selected = multiSelect.selectedIds;
                if (selected.length > 0) {
                    const newItems = items.filter((item)=>selected.includes(item.id)).map((item)=>({
                            ...item,
                            id: `item-${Date.now()}-${Math.random()}`,
                            x: item.x + 20,
                            y: item.y + 20
                        }));
                    setItems((prev)=>[
                            ...prev,
                            ...newItems
                        ]);
                    setDebugInfo(`Duplicated ${selected.length} item(s)`);
                }
            },
            shortcut: 'Ctrl+D'
        },
        {
            id: 'copy',
            label: 'Copy',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                lineNumber: 656,
                columnNumber: 19
            }, this),
            action: ()=>{
                const selected = multiSelect.selectedIds;
                if (selected.length > 0) {
                    const itemsToCopy = items.filter((item)=>selected.includes(item.id));
                    setClipboard(itemsToCopy);
                    setDebugInfo(`Copied ${selected.length} item(s)`);
                }
            },
            shortcut: 'Ctrl+C'
        },
        {
            id: 'group',
            label: multiSelect.selectedIds.length > 1 && items.filter((it)=>multiSelect.selectedIds.includes(it.id)).every((it)=>it.groupId) ? 'Ungroup' : 'Group',
            icon: multiSelect.selectedIds.length > 1 && items.filter((it)=>multiSelect.selectedIds.includes(it.id)).every((it)=>it.groupId) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ungroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ungroup$3e$__["Ungroup"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                lineNumber: 670,
                columnNumber: 143
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                lineNumber: 670,
                columnNumber: 177
            }, this),
            action: ()=>{
                const selected = multiSelect.selectedIds;
                if (selected.length < 2) return;
                const selectedItems = items.filter((item)=>selected.includes(item.id));
                const allGrouped = selectedItems.every((it)=>it.groupId);
                if (allGrouped) {
                    // Ungroup
                    setItems((prev)=>prev.map((item)=>selected.includes(item.id) ? {
                                ...item,
                                groupId: undefined
                            } : item));
                    setDebugInfo(`Ungrouped ${selected.length} items`);
                } else {
                    // Group
                    const groupId = `group-${Date.now()}`;
                    setItems((prev)=>prev.map((item)=>selected.includes(item.id) ? {
                                ...item,
                                groupId
                            } : item));
                    setDebugInfo(`Grouped ${selected.length} items`);
                }
            },
            disabled: multiSelect.selectedIds.length < 2
        },
        {
            id: 'lock',
            label: multiSelect.selectedIds.length > 0 && items.filter((it)=>multiSelect.selectedIds.includes(it.id)).every((it)=>it.locked) ? 'Unlock' : 'Lock',
            icon: multiSelect.selectedIds.length > 0 && items.filter((it)=>multiSelect.selectedIds.includes(it.id)).every((it)=>it.locked) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Unlock$3e$__["Unlock"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                lineNumber: 698,
                columnNumber: 142
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                lineNumber: 698,
                columnNumber: 175
            }, this),
            action: ()=>{
                const selected = multiSelect.selectedIds;
                if (selected.length === 0) return;
                const selectedItems = items.filter((item)=>selected.includes(item.id));
                const allLocked = selectedItems.every((it)=>it.locked);
                setItems((prev)=>prev.map((item)=>selected.includes(item.id) ? {
                            ...item,
                            locked: !allLocked
                        } : item));
                setDebugInfo(`${allLocked ? 'Unlocked' : 'Locked'} ${selected.length} item(s)`);
            }
        },
        {
            id: 'delete',
            label: 'Delete',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                lineNumber: 715,
                columnNumber: 19
            }, this),
            action: ()=>{
                const selected = multiSelect.selectedIds;
                if (selected.length > 0) {
                    setItems((prev)=>prev.filter((item)=>!selected.includes(item.id)));
                    multiSelect.clearSelection();
                }
            },
            shortcut: 'Del',
            danger: true
        }
    ];
    // Filters
    const filteredProducts = PRODUCTS.filter((p)=>{
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesProp = selectedProposition === 'all' || p.propositionId === selectedProposition;
        return matchesSearch && matchesProp;
    });
    const selectedItem = multiSelect.selectedIds.length === 1 ? items.find((it)=>it.id === multiSelect.selectedIds[0]) : undefined;
    const getVendorName = (vendorId)=>VENDORS.find((v)=>v.id === vendorId)?.name;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DndContext"], {
        id: "qanvas-dnd-root",
        sensors: sensors,
        onDragStart: handleDragStart,
        onDragMove: handleDragMove,
        onDragEnd: handleDragEnd,
        collisionDetection: customCollisionStrategy,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-screen w-full overflow-hidden",
                style: {
                    backgroundColor: 'var(--color-background)',
                    color: 'var(--color-text)'
                },
                onContextMenu: handleContextMenu,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$CanvasSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CanvasSidebar"], {
                        searchQuery: searchQuery,
                        onSearchChange: setSearchQuery,
                        selectedProposition: selectedProposition,
                        onPropositionChange: setSelectedProposition,
                        propositions: PROPOSITIONS,
                        filteredProducts: filteredProducts,
                        solutions: SOLUTIONS,
                        vendors: VENDORS,
                        getVendorName: getVendorName
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                        lineNumber: 757,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$CanvasWorkspace$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CanvasWorkspace"], {
                        canvasRef: canvasRef,
                        items: items,
                        selectedIds: multiSelect.selectedIds,
                        debugInfo: debugInfo,
                        vendors: VENDORS,
                        multiSelect: multiSelect,
                        gridSnapEnabled: gridSnapEnabled,
                        snapGuides: snapGuides,
                        activeDragRect: dragState,
                        activeDragItemId: activeDragData?.id || null,
                        lockedAxis: lockedAxis,
                        isShiftPressed: keys.shift,
                        onClearItems: ()=>{
                            setItems([]);
                            multiSelect.clearSelection();
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                        lineNumber: 769,
                        columnNumber: 17
                    }, this),
                    contextMenu.visible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$ContextMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenu"], {
                        x: contextMenu.x,
                        y: contextMenu.y,
                        onClose: ()=>setContextMenu({
                                ...contextMenu,
                                visible: false
                            }),
                        actions: contextMenuActions,
                        selectedCount: multiSelect.selectedIds.length
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                        lineNumber: 789,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$AlignmentToolbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlignmentToolbar"], {
                        selectedCount: multiSelect.selectedIds.length,
                        onAlign: handleAlign,
                        onDistribute: handleDistribute,
                        onGroup: ()=>{
                            const selected = multiSelect.selectedIds;
                            if (selected.length < 2) return;
                            const selectedItems = items.filter((item)=>selected.includes(item.id));
                            const allGrouped = selectedItems.every((it)=>it.groupId);
                            if (allGrouped) {
                                setItems((prev)=>prev.map((item)=>selected.includes(item.id) ? {
                                            ...item,
                                            groupId: undefined
                                        } : item));
                                setDebugInfo(`Ungrouped ${selected.length} items`);
                            } else {
                                const groupId = `group-${Date.now()}`;
                                setItems((prev)=>prev.map((item)=>selected.includes(item.id) ? {
                                            ...item,
                                            groupId
                                        } : item));
                                setDebugInfo(`Grouped ${selected.length} items`);
                            }
                        },
                        onLock: ()=>{
                            const selected = multiSelect.selectedIds;
                            if (selected.length === 0) return;
                            const selectedItems = items.filter((item)=>selected.includes(item.id));
                            const allLocked = selectedItems.every((it)=>it.locked);
                            setItems((prev)=>prev.map((item)=>selected.includes(item.id) ? {
                                        ...item,
                                        locked: !allLocked
                                    } : item));
                            setDebugInfo(`${allLocked ? 'Unlocked' : 'Locked'} ${selected.length} item(s)`);
                        },
                        isGrouped: multiSelect.selectedIds.length > 0 && items.filter((it)=>multiSelect.selectedIds.includes(it.id)).every((it)=>it.groupId),
                        isLocked: multiSelect.selectedIds.length > 0 && items.filter((it)=>multiSelect.selectedIds.includes(it.id)).every((it)=>it.locked)
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                        lineNumber: 798,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$GridToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GridToggle"], {
                        enabled: gridSnapEnabled,
                        onToggle: ()=>setGridSnapEnabled(!gridSnapEnabled)
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                        lineNumber: 838,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeToggle"], {
                        isDark: isDark,
                        onToggle: toggleTheme
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                        lineNumber: 843,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$AxisLockIndicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AxisLockIndicator"], {
                        isActive: keys.shift && !!dragState,
                        axis: lockedAxis
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                        lineNumber: 848,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$PropertiesPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PropertiesPanel"], {
                        selectedItem: selectedItem,
                        selectedCount: multiSelect.selectedCount,
                        propositions: PROPOSITIONS,
                        vendors: VENDORS
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                        lineNumber: 853,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                lineNumber: 749,
                columnNumber: 13
            }, this),
            mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DragOverlay"], {
                dropAnimation: null,
                children: activeDragData ? activeDragData.source === 'canvas' && multiSelect.selectedIds.length > 1 && multiSelect.selectedIds.includes(activeDragData.id) ? // Multi-select drag: show all selected items
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'relative'
                    },
                    children: multiSelect.selectedIds.map((selectedId, index)=>{
                        const selectedItem = items.find((i)=>i.id === selectedId);
                        if (!selectedItem) return null;
                        const draggedItem = items.find((i)=>i.id === activeDragData.id);
                        if (!draggedItem) return null;
                        // Calculate offset from dragged item
                        const offsetX = selectedItem.x - draggedItem.x;
                        const offsetY = selectedItem.y - draggedItem.y;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'absolute',
                                left: offsetX,
                                top: offsetY
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$CanvasItemCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CanvasCardVisual"], {
                                item: selectedItem,
                                isSelected: true,
                                style: {
                                    transform: 'scale(1.05)',
                                    zIndex: 100 + index,
                                    cursor: 'grabbing',
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                                    opacity: selectedId === activeDragData.id ? 1 : 0.7
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                                lineNumber: 887,
                                columnNumber: 45
                            }, this)
                        }, selectedId, false, {
                            fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                            lineNumber: 879,
                            columnNumber: 41
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                    lineNumber: 866,
                    columnNumber: 29
                }, this) : // Single item drag
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$CanvasItemCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CanvasCardVisual"], {
                    item: activeDragData.source === 'canvas' ? items.find((i)=>i.id === activeDragData.id) || activeDragData : {
                        id: 'temp-drag',
                        x: 0,
                        y: 0,
                        entityId: activeDragData.entityId,
                        entityType: activeDragData.type,
                        data: activeDragData,
                        locked: false
                    },
                    isSelected: true,
                    style: {
                        transform: 'scale(1.05)',
                        zIndex: 100,
                        cursor: 'grabbing',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' // Enhanced shadow for lift effect
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                    lineNumber: 904,
                    columnNumber: 29
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                lineNumber: 862,
                columnNumber: 17
            }, this), document.body)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
        lineNumber: 741,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9a9ece49._.js.map