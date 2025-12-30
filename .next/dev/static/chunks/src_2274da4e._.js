(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/canvas/DraggableSidebarItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DraggableSidebarItem",
    ()=>DraggableSidebarItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/core/dist/core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panels-top-left.js [app-client] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function DraggableSidebarItem({ id, type, label, data, vendorName }) {
    _s();
    const { attributes, listeners, setNodeRef, isDragging } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDraggable"])({
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/canvas/DraggableSidebarItem.tsx",
                    lineNumber: 24,
                    columnNumber: 36
                }, this);
            case 'vendor':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/canvas/DraggableSidebarItem.tsx",
                    lineNumber: 25,
                    columnNumber: 35
                }, this);
            case 'solution':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/canvas/DraggableSidebarItem.tsx",
                    lineNumber: 26,
                    columnNumber: 37
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: setNodeRef,
        ...listeners,
        ...attributes,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group flex items-center justify-between p-3 rounded-xl border cursor-grab active:cursor-grabbing transition-all duration-200", isDragging && "opacity-40 grayscale scale-95"),
        style: {
            borderColor: 'var(--color-border)',
            backgroundColor: 'var(--color-background-secondary)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-8 h-8 rounded-lg flex items-center justify-center", getIconClasses()),
                        children: getIcon()
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/DraggableSidebarItem.tsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            vendorName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
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
_s(DraggableSidebarItem, "qVa/SUqh328E+ViKUYzN8k5jOTU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDraggable"]
    ];
});
_c = DraggableSidebarItem;
var _c;
__turbopack_context__.k.register(_c, "DraggableSidebarItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/canvas/SidebarSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SidebarSection",
    ()=>SidebarSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function SidebarSection({ title, children, defaultOpen = true }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultOpen);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "w-full flex items-center justify-between p-2 text-xs font-bold uppercase tracking-tighter transition-colors",
                style: {
                    color: 'var(--color-text-muted)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/SidebarSection.tsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, this),
                    isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "w-3 h-3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/SidebarSection.tsx",
                        lineNumber: 23,
                        columnNumber: 27
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
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
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(SidebarSection, "QSEG/+wAbCqYSsrjeAEeSTwR0QA=");
_c = SidebarSection;
var _c;
__turbopack_context__.k.register(_c, "SidebarSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/types/canvasConfig.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Canvas-level configuration for core metrics
__turbopack_context__.s([
    "DEFAULT_CANVAS_CONFIG",
    ()=>DEFAULT_CANVAS_CONFIG,
    "METRIC_DEFINITIONS",
    ()=>METRIC_DEFINITIONS
]);
const DEFAULT_CANVAS_CONFIG = {
    coreMetrics: {
        namedUsers: undefined,
        concurrentUsers: undefined,
        virtualHosts: undefined,
        physicalHosts: undefined,
        cpus: undefined,
        cores: undefined,
        clusters: undefined,
        applications: undefined,
        other: undefined
    }
};
const METRIC_DEFINITIONS = [
    // Users
    {
        key: 'namedUsers',
        label: 'Named Users',
        icon: '👤',
        description: 'Total number of named user licenses',
        category: 'users'
    },
    {
        key: 'concurrentUsers',
        label: 'Concurrent Users',
        icon: '🔄',
        description: 'Maximum concurrent user sessions',
        category: 'users'
    },
    // Infrastructure
    {
        key: 'virtualHosts',
        label: 'Virtual Hosts',
        icon: '☁️',
        description: 'Number of virtual host machines',
        category: 'infrastructure'
    },
    {
        key: 'physicalHosts',
        label: 'Physical Hosts',
        icon: '🖥️',
        description: 'Number of physical host servers',
        category: 'infrastructure'
    },
    {
        key: 'cpus',
        label: 'CPUs',
        icon: '💻',
        description: 'Total number of CPU sockets',
        category: 'infrastructure'
    },
    {
        key: 'cores',
        label: 'Cores',
        icon: '⚙️',
        description: 'Total number of CPU cores',
        category: 'infrastructure'
    },
    {
        key: 'clusters',
        label: 'Clusters',
        icon: '🏢',
        description: 'Number of compute clusters',
        category: 'infrastructure'
    },
    // Applications
    {
        key: 'applications',
        label: 'Applications',
        icon: '📦',
        description: 'Number of applications',
        category: 'applications'
    },
    // Other
    {
        key: 'other',
        label: 'Other',
        icon: '📊',
        description: 'Other metric value',
        category: 'other'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/canvas/ConfigurationPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfigurationPanel",
    ()=>ConfigurationPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$canvasConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types/canvasConfig.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
/**
 * Collapsible section component for organizing metrics
 */ function CollapsibleSection({ title, icon, defaultOpen = true, children }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultOpen);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors",
                style: {
                    backgroundColor: 'var(--color-background)',
                    color: 'var(--color-text)'
                },
                onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)',
                onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = 'var(--color-background)',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            icon,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                                lineNumber: 39,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                        lineNumber: 37,
                        columnNumber: 17
                    }, this),
                    isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "w-4 h-4",
                        style: {
                            color: 'var(--color-text-muted)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                        lineNumber: 42,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: "w-4 h-4",
                        style: {
                            color: 'var(--color-text-muted)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                        lineNumber: 44,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 space-y-2 px-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                lineNumber: 49,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}
_s(CollapsibleSection, "QSEG/+wAbCqYSsrjeAEeSTwR0QA=");
_c = CollapsibleSection;
/**
 * Metric input field component
 */ function MetricInput({ metric, value, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "flex items-center gap-2 text-xs font-medium",
                style: {
                    color: 'var(--color-text)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: metric.icon
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                        lineNumber: 75,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: metric.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                        lineNumber: 76,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                lineNumber: 71,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "number",
                value: value ?? '',
                onChange: (e)=>{
                    const val = e.target.value === '' ? undefined : parseInt(e.target.value);
                    onChange(val);
                },
                placeholder: "Not set",
                min: "0",
                className: "w-full px-3 py-2 rounded-lg text-sm transition-colors",
                style: {
                    backgroundColor: 'var(--color-background)',
                    borderColor: 'var(--color-border)',
                    border: '1px solid',
                    color: 'var(--color-text)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                lineNumber: 78,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs",
                style: {
                    color: 'var(--color-text-muted)'
                },
                children: metric.description
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                lineNumber: 95,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
        lineNumber: 70,
        columnNumber: 9
    }, this);
}
_c1 = MetricInput;
function ConfigurationPanel({ config, onConfigChange }) {
    const handleMetricChange = (key, value)=>{
        onConfigChange({
            ...config,
            coreMetrics: {
                ...config.coreMetrics,
                [key]: value
            }
        });
    };
    // Group metrics by category
    const userMetrics = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$canvasConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["METRIC_DEFINITIONS"].filter((m)=>m.category === 'users');
    const infrastructureMetrics = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$canvasConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["METRIC_DEFINITIONS"].filter((m)=>m.category === 'infrastructure');
    const applicationMetrics = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$canvasConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["METRIC_DEFINITIONS"].filter((m)=>m.category === 'applications');
    const otherMetrics = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$canvasConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["METRIC_DEFINITIONS"].filter((m)=>m.category === 'other');
    // Count how many metrics are set
    const setMetricsCount = Object.values(config.coreMetrics).filter((v)=>v !== undefined).length;
    const totalMetricsCount = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$canvasConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["METRIC_DEFINITIONS"].length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 flex items-center gap-3",
                style: {
                    borderBottom: '1px solid var(--color-border)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 rounded-lg flex items-center justify-center",
                        style: {
                            backgroundColor: 'var(--color-primary)',
                            opacity: 0.1
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                            className: "w-4 h-4",
                            style: {
                                color: 'var(--color-primary)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                            lineNumber: 146,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                        lineNumber: 139,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold",
                                style: {
                                    color: 'var(--color-text)'
                                },
                                children: "Canvas Configuration"
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                                lineNumber: 152,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs",
                                style: {
                                    color: 'var(--color-text-muted)'
                                },
                                children: [
                                    setMetricsCount,
                                    " of ",
                                    totalMetricsCount,
                                    " metrics set"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                                lineNumber: 158,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                        lineNumber: 151,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                lineNumber: 133,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-4 space-y-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CollapsibleSection, {
                        title: "Users",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-base",
                            children: "👥"
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                            lineNumber: 172,
                            columnNumber: 27
                        }, void 0),
                        defaultOpen: true,
                        children: userMetrics.map((metric)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricInput, {
                                metric: metric,
                                value: config.coreMetrics[metric.key],
                                onChange: (value)=>handleMetricChange(metric.key, value)
                            }, metric.key, false, {
                                fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                                lineNumber: 176,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                        lineNumber: 170,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CollapsibleSection, {
                        title: "Infrastructure",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-base",
                            children: "🏗️"
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                            lineNumber: 188,
                            columnNumber: 27
                        }, void 0),
                        defaultOpen: true,
                        children: infrastructureMetrics.map((metric)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricInput, {
                                metric: metric,
                                value: config.coreMetrics[metric.key],
                                onChange: (value)=>handleMetricChange(metric.key, value)
                            }, metric.key, false, {
                                fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                                lineNumber: 192,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                        lineNumber: 186,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CollapsibleSection, {
                        title: "Applications",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-base",
                            children: "📦"
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                            lineNumber: 204,
                            columnNumber: 27
                        }, void 0),
                        defaultOpen: false,
                        children: applicationMetrics.map((metric)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricInput, {
                                metric: metric,
                                value: config.coreMetrics[metric.key],
                                onChange: (value)=>handleMetricChange(metric.key, value)
                            }, metric.key, false, {
                                fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                                lineNumber: 208,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                        lineNumber: 202,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CollapsibleSection, {
                        title: "Other",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-base",
                            children: "📊"
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                            lineNumber: 220,
                            columnNumber: 27
                        }, void 0),
                        defaultOpen: false,
                        children: otherMetrics.map((metric)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricInput, {
                                metric: metric,
                                value: config.coreMetrics[metric.key],
                                onChange: (value)=>handleMetricChange(metric.key, value)
                            }, metric.key, false, {
                                fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                                lineNumber: 224,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                        lineNumber: 218,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                lineNumber: 168,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 text-xs",
                style: {
                    borderTop: '1px solid var(--color-border)',
                    backgroundColor: 'var(--color-background)',
                    color: 'var(--color-text-muted)'
                },
                children: "💡 These values will be inherited by products unless manually overridden"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
                lineNumber: 235,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/ConfigurationPanel.tsx",
        lineNumber: 131,
        columnNumber: 9
    }, this);
}
_c2 = ConfigurationPanel;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "CollapsibleSection");
__turbopack_context__.k.register(_c1, "MetricInput");
__turbopack_context__.k.register(_c2, "ConfigurationPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/canvas/CanvasSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CanvasSidebar",
    ()=>CanvasSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$DraggableSidebarItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/DraggableSidebarItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$SidebarSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/SidebarSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$ConfigurationPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/ConfigurationPanel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function CanvasSidebar({ searchQuery, onSearchChange, selectedProposition, onPropositionChange, propositions, filteredProducts, solutions, vendors, getVendorName, canvasConfig, onConfigChange }) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('products');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-80 flex flex-col z-20",
        style: {
            borderRight: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-surface)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    style: {
                        borderBottom: '1px solid var(--color-border)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg",
                                    style: {
                                        background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                                        boxShadow: '0 10px 25px -5px var(--color-primary)'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                        className: "w-5 h-5 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                        lineNumber: 65,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                    lineNumber: 58,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-xl font-bold tracking-tight",
                                            style: {
                                                color: 'var(--color-text)'
                                            },
                                            children: "Qanvas"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                            lineNumber: 68,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] uppercase tracking-[0.2em] font-medium",
                                            style: {
                                                color: 'var(--color-text-muted)'
                                            },
                                            children: "Architecture Engine"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                            lineNumber: 74,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                    lineNumber: 67,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                            lineNumber: 57,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-1 p-1 rounded-lg",
                            style: {
                                backgroundColor: 'var(--color-background)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab('products'),
                                    className: "flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-xs font-medium transition-all",
                                    style: {
                                        backgroundColor: activeTab === 'products' ? 'var(--color-surface)' : 'transparent',
                                        color: activeTab === 'products' ? 'var(--color-text)' : 'var(--color-text-muted)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                            lineNumber: 93,
                                            columnNumber: 29
                                        }, this),
                                        "Products"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                    lineNumber: 85,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab('solutions'),
                                    className: "flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-xs font-medium transition-all",
                                    style: {
                                        backgroundColor: activeTab === 'solutions' ? 'var(--color-surface)' : 'transparent',
                                        color: activeTab === 'solutions' ? 'var(--color-text)' : 'var(--color-text-muted)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                            lineNumber: 104,
                                            columnNumber: 29
                                        }, this),
                                        "Solutions"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                    lineNumber: 96,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab('configuration'),
                                    className: "flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-xs font-medium transition-all",
                                    style: {
                                        backgroundColor: activeTab === 'configuration' ? 'var(--color-surface)' : 'transparent',
                                        color: activeTab === 'configuration' ? 'var(--color-text)' : 'var(--color-text-muted)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                            lineNumber: 115,
                                            columnNumber: 29
                                        }, this),
                                        "Config"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                    lineNumber: 107,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                            lineNumber: 84,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                    lineNumber: 53,
                    columnNumber: 17
                }, this),
                activeTab === 'products' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 pt-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors",
                                        style: {
                                            color: 'var(--color-text-muted)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                        lineNumber: 127,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                        lineNumber: 131,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                lineNumber: 126,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                            lineNumber: 125,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-4 custom-scrollbar",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onPropositionChange('all'),
                                            className: "px-3 py-1.5 rounded-full text-xs font-medium transition-all",
                                            style: {
                                                backgroundColor: selectedProposition === 'all' ? 'var(--color-primary)' : 'var(--color-background-secondary)',
                                                color: selectedProposition === 'all' ? 'white' : 'var(--color-text-muted)'
                                            },
                                            children: "All"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                            lineNumber: 150,
                                            columnNumber: 33
                                        }, this),
                                        propositions.map((prop)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onPropositionChange(prop.id),
                                                className: "px-3 py-1.5 rounded-full text-xs font-medium transition-all",
                                                style: {
                                                    backgroundColor: selectedProposition === prop.id ? 'var(--color-primary)' : 'var(--color-background-secondary)',
                                                    color: selectedProposition === prop.id ? 'white' : 'var(--color-text-muted)'
                                                },
                                                children: prop.label
                                            }, prop.id, false, {
                                                fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                                lineNumber: 161,
                                                columnNumber: 37
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                    lineNumber: 149,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$SidebarSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarSection"], {
                                    title: "Products Palette",
                                    children: [
                                        filteredProducts.map((prod)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$DraggableSidebarItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DraggableSidebarItem"], {
                                                id: prod.id,
                                                type: "product",
                                                label: prod.name,
                                                data: prod,
                                                vendorName: getVendorName(prod.vendorId)
                                            }, prod.id, false, {
                                                fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                                lineNumber: 178,
                                                columnNumber: 37
                                            }, this)),
                                        filteredProducts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-8 text-center border-2 border-dashed border-white/5 rounded-2xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-white/20",
                                                children: "No products found"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                                lineNumber: 189,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                            lineNumber: 188,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                    lineNumber: 176,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$SidebarSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarSection"], {
                                    title: "Vendors",
                                    defaultOpen: false,
                                    children: vendors.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$DraggableSidebarItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DraggableSidebarItem"], {
                                            id: v.id,
                                            type: "vendor",
                                            label: v.name,
                                            data: v
                                        }, v.id, false, {
                                            fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                            lineNumber: 197,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                    lineNumber: 195,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                            lineNumber: 147,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true),
                activeTab === 'solutions' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto p-4 custom-scrollbar",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$SidebarSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarSection"], {
                        title: "Solutions",
                        defaultOpen: true,
                        children: [
                            solutions.map((sol)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$DraggableSidebarItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DraggableSidebarItem"], {
                                    id: sol.id,
                                    type: "solution",
                                    label: sol.name,
                                    data: sol
                                }, sol.id, false, {
                                    fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                    lineNumber: 214,
                                    columnNumber: 33
                                }, this)),
                            solutions.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8 text-center border-2 border-dashed rounded-2xl",
                                style: {
                                    borderColor: 'var(--color-border)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs",
                                    style: {
                                        color: 'var(--color-text-muted)'
                                    },
                                    children: "No solutions yet. Create one by selecting products on the canvas."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                    lineNumber: 224,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                                lineNumber: 223,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                        lineNumber: 212,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                    lineNumber: 211,
                    columnNumber: 21
                }, this),
                activeTab === 'configuration' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$ConfigurationPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigurationPanel"], {
                    config: canvasConfig,
                    onConfigChange: onConfigChange
                }, void 0, false, {
                    fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
                    lineNumber: 234,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
            lineNumber: 51,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/CanvasSidebar.tsx",
        lineNumber: 44,
        columnNumber: 9
    }, this);
}
_s(CanvasSidebar, "OQxrFhtTzk3KzZYPWc5785Nq+p4=");
_c = CanvasSidebar;
var _c;
__turbopack_context__.k.register(_c, "CanvasSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/canvas/CanvasItemCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CanvasCardVisual",
    ()=>CanvasCardVisual,
    "CanvasItemCard",
    ()=>CanvasItemCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/core/dist/core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panels-top-left.js [app-client] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const CanvasCardVisual = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(({ item, isSelected, vendorName, propositionColor, isDragging, className, style, ...props }, ref)=>{
    const getIcon = ()=>{
        switch(item.entityType){
            case 'product':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                    lineNumber: 30,
                    columnNumber: 40
                }, ("TURBOPACK compile-time value", void 0));
            case 'vendor':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                    lineNumber: 31,
                    columnNumber: 39
                }, ("TURBOPACK compile-time value", void 0));
            case 'solution':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                    lineNumber: 32,
                    columnNumber: 41
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                    lineNumber: 33,
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            backgroundColor: 'var(--color-surface)',
            borderTopColor: isSelected ? 'var(--color-primary)' : 'rgba(128, 128, 128, 0.2)',
            borderRightColor: isSelected ? 'var(--color-primary)' : 'rgba(128, 128, 128, 0.2)',
            borderBottomColor: isSelected ? 'var(--color-primary)' : 'rgba(128, 128, 128, 0.2)',
            borderLeftColor: propositionColor || (isSelected ? 'var(--color-primary)' : 'rgba(128, 128, 128, 0.2)'),
            borderLeftWidth: propositionColor ? '4px' : '1px',
            borderTopWidth: '1px',
            borderRightWidth: '1px',
            borderBottomWidth: '1px',
            color: 'var(--color-text)',
            cursor: item.locked ? 'not-allowed' : 'move',
            opacity: isDragging ? 0 : 1,
            ...style
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group p-4 w-75 rounded-2xl border backdrop-blur-xl shadow-2xl transition-all duration-300 select-none", isSelected ? "ring-4 ring-blue-500 scale-105 z-30 shadow-blue-500/50" : "hover:scale-[1.02] z-20", item.locked && "opacity-75", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-2 right-2 flex gap-1",
                children: [
                    item.locked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-1 rounded-md bg-orange-500",
                        title: "Locked",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                            className: "w-3 h-3 text-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                            lineNumber: 80,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                        lineNumber: 76,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    item.groupId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-1 rounded-md bg-purple-500",
                        title: "Grouped",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                            className: "w-3 h-3 text-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                            lineNumber: 88,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                        lineNumber: 84,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                lineNumber: 74,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-10 h-10 rounded-xl flex items-center justify-center shadow-inner", getIconClasses()),
                        children: getIcon()
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                        lineNumber: 94,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-lg",
                            title: "Active"
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                            lineNumber: 100,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                        lineNumber: 99,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                lineNumber: 93,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-sm font-semibold truncate",
                        style: {
                            color: 'var(--color-text)'
                        },
                        children: item.data.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                        lineNumber: 107,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    vendorName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] uppercase font-bold tracking-widest",
                        style: {
                            color: 'var(--color-text-muted)'
                        },
                        children: vendorName
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                        lineNumber: 114,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                lineNumber: 106,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 pt-4 flex items-center justify-between text-[11px]",
                style: {
                    borderTop: '1px solid var(--color-border)',
                    color: 'var(--color-text-secondary)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                                lineNumber: 132,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Configured"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                        lineNumber: 131,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-2 py-0.5 rounded-full font-medium bg-blue-500/20 text-blue-500",
                        children: "Standard"
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                        lineNumber: 134,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
                lineNumber: 124,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
        lineNumber: 48,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0));
});
_c = CanvasCardVisual;
CanvasCardVisual.displayName = 'CanvasCardVisual';
function CanvasItemCard({ item, isSelected, onClick, vendorName, propositionColor, forceTransparent = false }) {
    _s();
    const { attributes, listeners, setNodeRef, isDragging } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDraggable"])({
        id: item.id,
        data: {
            ...item,
            source: 'canvas'
        },
        disabled: item.locked // Disable dragging if locked
    });
    const mouseDownPos = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const dragOccurred = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(false);
    const wasDragging = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(false);
    // Track when dragging state changes
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "CanvasItemCard.useEffect": ()=>{
            if (isDragging) {
                dragOccurred.current = true;
                wasDragging.current = true;
            } else if (wasDragging.current) {
                // Drag just ended
                wasDragging.current = false;
                // Keep dragOccurred flag set until after click event
                setTimeout({
                    "CanvasItemCard.useEffect": ()=>{
                        dragOccurred.current = false;
                    }
                }["CanvasItemCard.useEffect"], 100);
            }
        }
    }["CanvasItemCard.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CanvasCardVisual, {
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
        ...mergedListeners,
        propositionColor: propositionColor
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/CanvasItemCard.tsx",
        lineNumber: 198,
        columnNumber: 9
    }, this);
}
_s(CanvasItemCard, "Z1DoSYauLPjOLxgg5/Q1jWZeA0I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDraggable"]
    ];
});
_c1 = CanvasItemCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "CanvasCardVisual");
__turbopack_context__.k.register(_c1, "CanvasItemCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/canvas/controls/SelectionBox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectionBox",
    ()=>SelectionBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function SelectionBox({ box }) {
    if (!box) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = SelectionBox;
var _c;
__turbopack_context__.k.register(_c, "SelectionBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/canvas/controls/GroupOutline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupOutline",
    ()=>GroupOutline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = GroupOutline;
var _c;
__turbopack_context__.k.register(_c, "GroupOutline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/canvas/controls/MultiSelectIndicator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MultiSelectIndicator",
    ()=>MultiSelectIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function MultiSelectIndicator({ count }) {
    if (count < 2) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl border backdrop-blur-xl shadow-lg animate-in fade-in slide-in-from-top-2 duration-200",
        style: {
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-primary)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-2 h-2 rounded-full animate-pulse",
                    style: {
                        backgroundColor: 'var(--color-primary)'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/canvas/controls/MultiSelectIndicator.tsx",
                    lineNumber: 19,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c = MultiSelectIndicator;
var _c;
__turbopack_context__.k.register(_c, "MultiSelectIndicator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/canvas/controls/SnapGuides.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SnapGuides",
    ()=>SnapGuides
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function SnapGuides({ guides, canvasRect, dragRect, canvasTransform }) {
    if (!canvasRect || guides.length === 0) return null;
    // Helper to convert canvas coordinates to screen coordinates
    const canvasToScreen = (canvasCoord)=>{
        if (!canvasTransform) return canvasCoord;
        return canvasCoord * canvasTransform.zoom + (canvasTransform.zoom === 1 ? 0 : canvasTransform.pan.x);
    };
    const zoom = canvasTransform?.zoom ?? 1;
    const panX = canvasTransform?.pan.x ?? 0;
    const panY = canvasTransform?.pan.y ?? 0;
    // Verbose logging - uncomment for detailed debugging
    // console.log('📐 SnapGuides rendering:', {
    //     guidesCount: guides.length,
    //     canvasRect: { width: canvasRect.width, height: canvasRect.height },
    //     guides: guides.map(g => ({ type: g.type, position: g.position, label: g.label }))
    // });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                const canvasTop = guide.minY ?? 0;
                const canvasBottom = guide.maxY ?? canvasRect.height;
                // Convert canvas coordinates to screen coordinates
                const screenX = guide.position * zoom + panX;
                const screenTop = canvasTop * zoom + panY;
                const screenHeight = (canvasBottom - canvasTop) * zoom;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute animate-in fade-in duration-150",
                    style: {
                        left: `${screenX}px`,
                        top: `${screenTop}px`,
                        height: `${screenHeight}px`,
                        width: '1px',
                        boxShadow: getShadowColor()
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0", getGuideColor())
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/controls/SnapGuides.tsx",
                            lineNumber: 142,
                            columnNumber: 33
                        }, this),
                        guide.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute px-2 py-1 rounded text-[10px] font-bold whitespace-nowrap pointer-events-none",
                            style: labelStyle,
                            children: guide.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/controls/SnapGuides.tsx",
                            lineNumber: 144,
                            columnNumber: 37
                        }, this)
                    ]
                }, key, true, {
                    fileName: "[project]/src/components/canvas/controls/SnapGuides.tsx",
                    lineNumber: 131,
                    columnNumber: 29
                }, this);
            } else {
                // Horizontal guides - Use bounds if available, otherwise span full width
                const canvasLeft = guide.minX ?? 0;
                const canvasRight = guide.maxX ?? canvasRect.width;
                // Convert canvas coordinates to screen coordinates
                const screenY = guide.position * zoom + panY;
                const screenLeft = canvasLeft * zoom + panX;
                const screenWidth = (canvasRight - canvasLeft) * zoom;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute animate-in fade-in duration-150",
                    style: {
                        top: `${screenY}px`,
                        left: `${screenLeft}px`,
                        width: `${screenWidth}px`,
                        height: '1px',
                        boxShadow: getShadowColor()
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0", getGuideColor())
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/controls/SnapGuides.tsx",
                            lineNumber: 175,
                            columnNumber: 33
                        }, this),
                        guide.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute px-2 py-1 rounded text-[10px] font-bold whitespace-nowrap pointer-events-none",
                            style: labelStyle,
                            children: guide.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/controls/SnapGuides.tsx",
                            lineNumber: 177,
                            columnNumber: 37
                        }, this)
                    ]
                }, key, true, {
                    fileName: "[project]/src/components/canvas/controls/SnapGuides.tsx",
                    lineNumber: 164,
                    columnNumber: 29
                }, this);
            }
        })
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/controls/SnapGuides.tsx",
        lineNumber: 49,
        columnNumber: 9
    }, this);
}
_c = SnapGuides;
var _c;
__turbopack_context__.k.register(_c, "SnapGuides");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/canvas/controls/AxisLockGuide.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AxisLockGuide",
    ()=>AxisLockGuide
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function AxisLockGuide({ isActive, axis, position, canvasRect }) {
    if (!isActive || !axis || !position || !canvasRect) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 pointer-events-none z-45",
        children: axis === 'x' ? // Horizontal guide line (locked to X axis)
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-0 right-0 h-0.5 bg-blue-500 opacity-60",
            style: {
                top: `${position.y}px`,
                boxShadow: '0 0 12px rgba(59, 130, 246, 0.8)'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 bottom-0 w-0.5 bg-blue-500 opacity-60",
            style: {
                left: `${position.x}px`,
                boxShadow: '0 0 12px rgba(59, 130, 246, 0.8)'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = AxisLockGuide;
var _c;
__turbopack_context__.k.register(_c, "AxisLockGuide");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/canvas/controls/ColorSchemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColorSchemeToggle",
    ()=>ColorSchemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
;
;
function ColorSchemeToggle({ enabled, onToggle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onToggle,
        className: "p-2.5 rounded-lg backdrop-blur-xl transition-colors pointer-events-auto",
        style: {
            backgroundColor: 'var(--color-background-secondary)'
        },
        onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = 'var(--color-background)',
        onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)',
        title: enabled ? "Disable color scheme" : "Enable color scheme",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
            className: "w-5 h-5 transition-colors",
            style: {
                color: enabled ? 'var(--color-primary)' : 'var(--color-text-muted)'
            }
        }, void 0, false, {
            fileName: "[project]/src/components/canvas/controls/ColorSchemeToggle.tsx",
            lineNumber: 25,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/controls/ColorSchemeToggle.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
_c = ColorSchemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ColorSchemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/canvas/CanvasWorkspace.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CanvasWorkspace",
    ()=>CanvasWorkspace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/core/dist/core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panels-top-left.js [app-client] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$CanvasItemCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/CanvasItemCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$SelectionBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/controls/SelectionBox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$GroupOutline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/controls/GroupOutline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$MultiSelectIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/controls/MultiSelectIndicator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$SnapGuides$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/controls/SnapGuides.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$AxisLockGuide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/controls/AxisLockGuide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$ColorSchemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/controls/ColorSchemeToggle.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function CanvasWorkspace({ canvasRef, items, selectedIds, debugInfo, vendors, propositions, products, multiSelect, onClearItems, snapGuides = [], activeDragRect, activeDragItemId = null, lockedAxis = null, isShiftPressed = false, canvasTransform, zoom = 1.0, onZoomIn, onZoomOut, onResetZoom, isDark = false, onToggleTheme, onPan, colorSchemeEnabled = true, onToggleColorScheme }) {
    _s();
    const { setNodeRef, isOver } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDroppable"])({
        id: 'canvas-droppable'
    });
    const getVendorName = (vendorId)=>{
        return vendors.find((v)=>v.id === vendorId)?.name;
    };
    const getPropositionColor = (entityId)=>{
        if (!colorSchemeEnabled) return undefined;
        const product = products.find((p)=>p.id === entityId);
        if (!product) return undefined;
        const proposition = propositions.find((p)=>p.id === product.propositionId);
        return proposition?.color;
    };
    // Pan state for middle mouse button
    const [isPanning, setIsPanning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [panStart, setPanStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [initialPan, setInitialPan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const handleMouseDown = (e)=>{
        // Middle mouse button (button 1) for panning
        if (e.button === 1) {
            e.preventDefault();
            setIsPanning(true);
            setPanStart({
                x: e.clientX,
                y: e.clientY
            });
            setInitialPan({
                x: canvasTransform?.pan.x ?? 0,
                y: canvasTransform?.pan.y ?? 0
            });
            return;
        }
        // Left mouse button - existing selection logic
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
        // Handle panning
        if (isPanning && canvasTransform) {
            const deltaX = e.clientX - panStart.x;
            const deltaY = e.clientY - panStart.y;
            // Update pan through the canvas transform (passed from parent)
            // We need to pass this back to the parent component
            const newPanX = initialPan.x + deltaX;
            const newPanY = initialPan.y + deltaY;
            // Call parent's pan update function
            if (onPan) {
                onPan(newPanX, newPanY);
            }
            return;
        }
        // Handle box selection
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
        // End panning
        if (isPanning) {
            setIsPanning(false);
            return;
        }
        // Handle box selection
        if (multiSelect.isSelecting && multiSelect.selectionBox) {
            const box = multiSelect.selectionBox;
            const itemsInBox = items.filter((item)=>{
                const itemWidth = 300; // Updated to match actual card width
                const itemHeight = 172; // Updated to match actual card height
                const isInBox = item.x < box.x + box.width && item.x + itemWidth > box.x && item.y < box.y + box.height && item.y + itemHeight > box.y;
                return isInBox;
            }).map((i)=>i.id);
            multiSelect.endBoxSelection(itemsInBox, e.ctrlKey);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        ref: (node)=>{
            setNodeRef(node);
            if (canvasRef && typeof canvasRef === 'object') {
                // @ts-ignore
                canvasRef.current = node;
            }
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 relative overflow-hidden z-0 transition-colors duration-200", isOver && "bg-green-500/20", isPanning && "cursor-grabbing"),
        style: {
            cursor: isPanning ? 'grabbing' : 'default',
            backgroundImage: isDark ? 'radial-gradient(#333333 1px, transparent 1px)' : 'radial-gradient(#999999 1px, transparent 1px)',
            backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
            backgroundSize: '16px 16px'
        },
        onMouseDown: handleMouseDown,
        onMouseMove: handleMouseMove,
        onMouseUp: handleMouseUp,
        onMouseLeave: handleMouseUp,
        onContextMenu: (e)=>{
            // Prevent context menu on middle mouse button
            if (isPanning) {
                e.preventDefault();
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: (node)=>{
                    if (canvasRef && typeof canvasRef === 'object') {
                        // @ts-ignore
                        canvasRef.current = node;
                    }
                },
                className: "absolute inset-0 w-full h-full",
                style: {
                    transform: canvasTransform ? `translate(${canvasTransform.pan.x}px, ${canvasTransform.pan.y}px) scale(${canvasTransform.zoom})` : undefined,
                    transformOrigin: '0 0',
                    transition: 'none'
                },
                children: [
                    Array.from(new Set(items.filter((it)=>it.groupId).map((it)=>it.groupId))).map((groupId)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$GroupOutline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupOutline"], {
                            items: items,
                            groupId: groupId
                        }, groupId, false, {
                            fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                            lineNumber: 239,
                            columnNumber: 21
                        }, this)),
                    items.map((item)=>{
                        const isItemSelected = selectedIds.includes(item.id);
                        // Make item transparent if:
                        // 1. It's being dragged, OR
                        // 2. It's selected AND another selected item is being dragged (multi-select drag)
                        const shouldBeTransparent = !!(isItemSelected && activeDragItemId && selectedIds.includes(activeDragItemId));
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$CanvasItemCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasItemCard"], {
                            item: item,
                            isSelected: isItemSelected,
                            vendorName: getVendorName(item.entityId),
                            propositionColor: getPropositionColor(item.entityId),
                            onClick: (e)=>multiSelect.toggleSelect(item.id, e.ctrlKey),
                            forceTransparent: shouldBeTransparent
                        }, item.id, false, {
                            fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                            lineNumber: 251,
                            columnNumber: 25
                        }, this);
                    }),
                    items.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex flex-col items-center justify-center pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-32 h-32 mb-6 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
                                    className: "w-10 h-10 text-white/10"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                    lineNumber: 268,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                lineNumber: 267,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-medium text-white/40 mb-2",
                                children: "Initialize Canvas"
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                lineNumber: 270,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-white/20",
                                children: "Drag components from the sidebar to begin designing"
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                lineNumber: 271,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                        lineNumber: 266,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                lineNumber: 221,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$SelectionBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectionBox"], {
                        box: multiSelect.selectionBox
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                        lineNumber: 279,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 overflow-hidden z-40",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$SnapGuides$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnapGuides"], {
                                guides: snapGuides,
                                canvasRect: canvasRef.current?.getBoundingClientRect(),
                                dragRect: activeDragRect,
                                canvasTransform: canvasTransform
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                lineNumber: 283,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$AxisLockGuide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxisLockGuide"], {
                                isActive: isShiftPressed && !!activeDragRect,
                                axis: lockedAxis,
                                position: activeDragRect ? {
                                    x: activeDragRect.x,
                                    y: activeDragRect.y
                                } : null,
                                canvasRect: canvasRef.current?.getBoundingClientRect() ?? null
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                lineNumber: 289,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                        lineNumber: 282,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$MultiSelectIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiSelectIndicator"], {
                        count: selectedIds.length
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                        lineNumber: 298,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 left-6 right-6 flex items-center justify-between z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-2 rounded-xl backdrop-blur-xl shadow-2xl",
                                        style: {
                                            background: 'linear-gradient(to bottom right, var(--color-background-secondary), var(--color-background))'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)] animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-bold uppercase tracking-widest",
                                                    style: {
                                                        color: 'var(--color-text)'
                                                    },
                                                    children: "Workspace Online"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                            lineNumber: 309,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                        lineNumber: 303,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-2 rounded-xl backdrop-blur-xl shadow-2xl",
                                        style: {
                                            background: 'linear-gradient(to bottom right, var(--color-background-secondary), var(--color-background))'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
                                                    className: "w-3.5 h-3.5",
                                                    style: {
                                                        color: 'var(--color-primary)'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-bold uppercase tracking-widest",
                                                    style: {
                                                        color: 'var(--color-text)'
                                                    },
                                                    children: [
                                                        items.length,
                                                        " Assets Mapped"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                                    lineNumber: 331,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                            lineNumber: 326,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                        lineNumber: 320,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                lineNumber: 302,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-2 rounded-xl backdrop-blur-xl shadow-2xl",
                                style: {
                                    background: 'linear-gradient(to bottom right, var(--color-background-secondary), var(--color-background))'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
                                            className: "w-3.5 h-3.5",
                                            style: {
                                                color: 'var(--color-secondary)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                            lineNumber: 348,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-medium",
                                            style: {
                                                color: 'var(--color-text-secondary)'
                                            },
                                            children: "Last Action:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                            lineNumber: 352,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-bold",
                                            style: {
                                                color: 'var(--color-text)'
                                            },
                                            children: debugInfo
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                            lineNumber: 358,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                    lineNumber: 347,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                lineNumber: 341,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                        lineNumber: 301,
                        columnNumber: 17
                    }, this),
                    selectedIds.length === 1 && (()=>{
                        const item = items.find((i)=>i.id === selectedIds[0]);
                        if (!item) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-20 right-6 px-4 py-2 rounded-lg backdrop-blur-md text-xs font-mono flex flex-col gap-1 z-50",
                            style: {
                                backgroundColor: 'var(--color-background-secondary)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "X: ",
                                                Math.round(item.x)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                            lineNumber: 380,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Y: ",
                                                Math.round(item.y)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                            lineNumber: 381,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                    lineNumber: 379,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 justify-between opacity-70",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "W: 300"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                            lineNumber: 384,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "H: 172"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                            lineNumber: 385,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                    lineNumber: 383,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                            lineNumber: 373,
                            columnNumber: 25
                        }, this);
                    })(),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-6 left-6 z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                onClearItems();
                            },
                            className: "pointer-events-auto px-4 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all hover:bg-red-500/20 hover:text-red-400",
                            style: {
                                backgroundColor: 'var(--color-background-secondary)',
                                color: 'var(--color-text-muted)'
                            },
                            children: "Clear Workspace"
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                            lineNumber: 393,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                        lineNumber: 392,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-6 right-6 flex items-center gap-3 z-10",
                        children: [
                            onZoomIn && onZoomOut && onResetZoom && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 backdrop-blur-xl rounded-lg shadow-lg px-3 py-2 pointer-events-auto",
                                style: {
                                    backgroundColor: 'var(--color-background-secondary)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onZoomOut,
                                        disabled: zoom <= 0.1,
                                        className: "p-1.5 rounded transition-colors disabled:opacity-40 disabled:cursor-not-allowed",
                                        style: {
                                            color: 'var(--color-text)'
                                        },
                                        onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = 'var(--color-background)',
                                        onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = 'transparent',
                                        title: "Zoom out (Ctrl + -)",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M20 12H4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                                lineNumber: 430,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                            lineNumber: 429,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                        lineNumber: 418,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onResetZoom,
                                        className: "min-w-[60px] px-2 py-1 text-sm font-medium rounded transition-colors",
                                        style: {
                                            color: 'var(--color-text)'
                                        },
                                        onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = 'var(--color-background)',
                                        onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = 'transparent',
                                        title: "Reset to 100% (Ctrl + 0)",
                                        children: [
                                            Math.round(zoom * 100),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                        lineNumber: 434,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onZoomIn,
                                        disabled: zoom >= 4.0,
                                        className: "p-1.5 rounded transition-colors disabled:opacity-40 disabled:cursor-not-allowed",
                                        style: {
                                            color: 'var(--color-text)'
                                        },
                                        onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = 'var(--color-background)',
                                        onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = 'transparent',
                                        title: "Zoom in (Ctrl + +)",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M12 4v16m8-8H4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                                lineNumber: 459,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                            lineNumber: 458,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                        lineNumber: 447,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                lineNumber: 412,
                                columnNumber: 25
                            }, this),
                            onToggleColorScheme && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$ColorSchemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorSchemeToggle"], {
                                enabled: colorSchemeEnabled,
                                onToggle: onToggleColorScheme
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                lineNumber: 467,
                                columnNumber: 25
                            }, this),
                            onToggleTheme && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onToggleTheme,
                                className: "p-2.5 rounded-lg backdrop-blur-xl transition-colors pointer-events-auto",
                                style: {
                                    backgroundColor: 'var(--color-background-secondary)'
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = 'var(--color-background)',
                                onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)',
                                title: isDark ? "Switch to light mode" : "Switch to dark mode",
                                children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5 text-yellow-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                        lineNumber: 488,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                    lineNumber: 487,
                                    columnNumber: 33
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5 text-blue-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                        lineNumber: 492,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                    lineNumber: 491,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                                lineNumber: 476,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                        lineNumber: 409,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
                lineNumber: 277,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/CanvasWorkspace.tsx",
        lineNumber: 188,
        columnNumber: 9
    }, this);
}
_s(CanvasWorkspace, "QPu9w2rKabhutrz9b8EYnwjE3y4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDroppable"]
    ];
});
_c = CanvasWorkspace;
var _c;
__turbopack_context__.k.register(_c, "CanvasWorkspace");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/canvas/ProductMetrics.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductMetrics",
    ()=>ProductMetrics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link-2.js [app-client] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as Edit3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$canvasConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types/canvasConfig.ts [app-client] (ecmascript)");
'use client';
;
;
;
function ProductMetrics({ productId, productConfig, canvasConfig, onMetricChange, onMetricReset }) {
    const metrics = productConfig.metrics;
    const metricKeys = Object.keys(metrics);
    if (metricKeys.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-4 py-3 rounded-lg text-xs text-center",
            style: {
                backgroundColor: 'var(--color-background)',
                color: 'var(--color-text-muted)'
            },
            children: "No metrics configured for this product"
        }, void 0, false, {
            fileName: "[project]/src/components/canvas/ProductMetrics.tsx",
            lineNumber: 32,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: metricKeys.map((metricKey)=>{
            const metric = metrics[metricKey];
            const metricDef = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$canvasConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["METRIC_DEFINITIONS"].find((m)=>m.key === metricKey);
            const isInherited = metric.source === 'inherited';
            const canvasValue = canvasConfig.coreMetrics[metricKey];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 rounded-lg",
                style: {
                    backgroundColor: 'var(--color-background)',
                    borderColor: isInherited ? 'var(--color-primary)' : 'var(--color-border)',
                    border: '1px solid',
                    borderLeftWidth: '3px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: metricDef?.icon || '📊'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/canvas/ProductMetrics.tsx",
                                        lineNumber: 66,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold",
                                        style: {
                                            color: 'var(--color-text)'
                                        },
                                        children: metricDef?.label || metricKey
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/canvas/ProductMetrics.tsx",
                                        lineNumber: 67,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/canvas/ProductMetrics.tsx",
                                lineNumber: 65,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: isInherited ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1 px-2 py-0.5 rounded text-xs",
                                    style: {
                                        backgroundColor: 'var(--color-primary)',
                                        color: 'white',
                                        opacity: 0.8
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/ProductMetrics.tsx",
                                            lineNumber: 86,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Inherited"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/ProductMetrics.tsx",
                                            lineNumber: 87,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/canvas/ProductMetrics.tsx",
                                    lineNumber: 78,
                                    columnNumber: 37
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1 px-2 py-0.5 rounded text-xs",
                                    style: {
                                        backgroundColor: 'var(--color-secondary)',
                                        color: 'white',
                                        opacity: 0.8
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/ProductMetrics.tsx",
                                            lineNumber: 98,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Manual"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/ProductMetrics.tsx",
                                            lineNumber: 99,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/canvas/ProductMetrics.tsx",
                                    lineNumber: 90,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/ProductMetrics.tsx",
                                lineNumber: 76,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/canvas/ProductMetrics.tsx",
                        lineNumber: 64,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                value: metric.value,
                                onChange: (e)=>{
                                    const value = parseInt(e.target.value);
                                    if (!isNaN(value)) {
                                        onMetricChange(metricKey, value);
                                    }
                                },
                                className: "flex-1 px-3 py-2 rounded text-sm",
                                style: {
                                    backgroundColor: 'var(--color-surface)',
                                    borderColor: 'var(--color-border)',
                                    border: '1px solid',
                                    color: 'var(--color-text)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/ProductMetrics.tsx",
                                lineNumber: 107,
                                columnNumber: 29
                            }, this),
                            !isInherited && canvasValue !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onMetricReset(metricKey),
                                className: "p-2 rounded transition-colors",
                                style: {
                                    backgroundColor: 'var(--color-background-secondary)',
                                    color: 'var(--color-text-muted)'
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                                    e.currentTarget.style.color = 'white';
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                                    e.currentTarget.style.color = 'var(--color-text-muted)';
                                },
                                title: `Reset to canvas value (${canvasValue})`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/canvas/ProductMetrics.tsx",
                                    lineNumber: 144,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/ProductMetrics.tsx",
                                lineNumber: 127,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/canvas/ProductMetrics.tsx",
                        lineNumber: 106,
                        columnNumber: 25
                    }, this),
                    isInherited && canvasValue !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-xs",
                        style: {
                            color: 'var(--color-text-muted)'
                        },
                        children: "💡 Using canvas configuration value. Click to edit manually."
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/ProductMetrics.tsx",
                        lineNumber: 151,
                        columnNumber: 29
                    }, this),
                    !isInherited && canvasValue !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-xs",
                        style: {
                            color: 'var(--color-text-muted)'
                        },
                        children: [
                            "✏️ Manually overridden. Canvas value: ",
                            canvasValue
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/canvas/ProductMetrics.tsx",
                        lineNumber: 159,
                        columnNumber: 29
                    }, this)
                ]
            }, metricKey, true, {
                fileName: "[project]/src/components/canvas/ProductMetrics.tsx",
                lineNumber: 53,
                columnNumber: 21
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/ProductMetrics.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, this);
}
_c = ProductMetrics;
var _c;
__turbopack_context__.k.register(_c, "ProductMetrics");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/canvas/PropertiesPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PropertiesPanel",
    ()=>PropertiesPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panels-top-left.js [app-client] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$ProductMetrics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/ProductMetrics.tsx [app-client] (ecmascript)");
'use client';
;
;
;
// Proposition color mapping
const PROPOSITION_COLORS = {
    'digital-workspace': {
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/30',
        text: 'text-blue-500',
        badge: 'bg-blue-500/20 border-blue-500/30 text-blue-500'
    },
    'hybrid-cloud': {
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/30',
        text: 'text-purple-500',
        badge: 'bg-purple-500/20 border-purple-500/30 text-purple-500'
    },
    'artificial-intelligence': {
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/30',
        text: 'text-emerald-500',
        badge: 'bg-emerald-500/20 border-emerald-500/30 text-emerald-500'
    },
    'cloud-native': {
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/30',
        text: 'text-orange-500',
        badge: 'bg-orange-500/20 border-orange-500/30 text-orange-500'
    }
};
function PropertiesPanel({ selectedItem, selectedCount, propositions, vendors, products, onAddToSolution, colorSchemeEnabled = true, canvasConfig, onMetricChange, onMetricReset }) {
    // Get full product details if selected item is a product
    const getProductDetails = ()=>{
        if (!selectedItem || selectedItem.entityType !== 'product') return null;
        return products.find((p)=>p.id === selectedItem.entityId);
    };
    const getVendor = ()=>{
        const product = getProductDetails();
        if (!product) return null;
        return vendors.find((v)=>v.id === product.vendorId);
    };
    const getProposition = ()=>{
        const product = getProductDetails();
        if (!product) return null;
        return propositions.find((p)=>p.id === product.propositionId);
    };
    const productDetails = getProductDetails();
    const vendor = getVendor();
    const proposition = getProposition();
    const propositionColors = colorSchemeEnabled && proposition ? PROPOSITION_COLORS[proposition.id] : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-96 flex flex-col z-20",
        style: {
            borderLeft: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-surface)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 flex items-center justify-between",
                    style: {
                        borderBottom: '1px solid var(--color-border)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-sm font-bold uppercase tracking-widest flex items-center gap-2",
                            style: {
                                color: 'var(--color-text)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                    className: "w-4 h-4",
                                    style: {
                                        color: 'var(--color-primary)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                    lineNumber: 101,
                                    columnNumber: 25
                                }, this),
                                "Inspector"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                            lineNumber: 97,
                            columnNumber: 21
                        }, this),
                        selectedCount > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-2 py-1 rounded-lg border bg-blue-500/20 border-blue-500/30",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-bold text-blue-500",
                                children: [
                                    selectedCount,
                                    " Selected"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                lineNumber: 109,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                            lineNumber: 108,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 rounded-lg flex items-center justify-center",
                            style: {
                                backgroundColor: 'var(--color-background-secondary)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                className: "w-4 h-4",
                                style: {
                                    color: 'var(--color-text-muted)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                lineNumber: 118,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                            lineNumber: 114,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                    lineNumber: 93,
                    columnNumber: 17
                }, this),
                selectedItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-6 animate-in fade-in slide-in-from-right-4 duration-300 overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-16 h-16 rounded-2xl border-2 flex items-center justify-center ${propositionColors?.bg || ''} ${propositionColors?.border || 'border-gray-200 dark:border-gray-700'}`,
                                    children: selectedItem.entityType === 'product' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                        className: `w-8 h-8 ${propositionColors?.text || 'text-blue-500'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                        lineNumber: 133,
                                        columnNumber: 37
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
                                        className: "w-8 h-8",
                                        style: {
                                            color: 'var(--color-secondary)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                        lineNumber: 137,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                    lineNumber: 129,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold",
                                            style: {
                                                color: 'var(--color-text)'
                                            },
                                            children: productDetails?.name || selectedItem.data.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                            lineNumber: 144,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs uppercase tracking-wide",
                                            style: {
                                                color: 'var(--color-text-muted)'
                                            },
                                            children: selectedItem.entityType
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                            lineNumber: 150,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                    lineNumber: 143,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                            lineNumber: 128,
                            columnNumber: 25
                        }, this),
                        proposition && propositionColors && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `px-4 py-3 rounded-xl border ${propositionColors.badge} flex items-center gap-2`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                    className: `w-4 h-4 ${propositionColors.text}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                    lineNumber: 162,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-sm font-bold ${propositionColors.text}`,
                                    children: proposition.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                    lineNumber: 163,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                            lineNumber: 161,
                            columnNumber: 29
                        }, this),
                        vendor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 rounded-2xl border",
                            style: {
                                backgroundColor: 'var(--color-background-secondary)',
                                borderColor: 'var(--color-border)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[10px] font-bold uppercase tracking-widest block mb-3 flex items-center gap-2",
                                    style: {
                                        color: 'var(--color-text-muted)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                            lineNumber: 182,
                                            columnNumber: 37
                                        }, this),
                                        "Vendor Information"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                    lineNumber: 178,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold",
                                                    style: {
                                                        color: 'var(--color-text)'
                                                    },
                                                    children: vendor.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs mt-1",
                                                    style: {
                                                        color: 'var(--color-text-muted)'
                                                    },
                                                    children: "Technology Provider"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                            lineNumber: 186,
                                            columnNumber: 37
                                        }, this),
                                        vendor.logo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold",
                                                children: vendor.name[0]
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                                lineNumber: 202,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                            lineNumber: 201,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                    lineNumber: 185,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                            lineNumber: 171,
                            columnNumber: 29
                        }, this),
                        productDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 rounded-2xl border space-y-3",
                            style: {
                                backgroundColor: 'var(--color-background-secondary)',
                                borderColor: 'var(--color-border)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[10px] font-bold uppercase tracking-widest block",
                                    style: {
                                        color: 'var(--color-text-muted)'
                                    },
                                    children: "Product Details"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                    lineNumber: 218,
                                    columnNumber: 33
                                }, this),
                                productDetails.version && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs",
                                            style: {
                                                color: 'var(--color-text-secondary)'
                                            },
                                            children: "Version"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                            lineNumber: 227,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-medium px-2 py-0.5 rounded bg-white/5",
                                            style: {
                                                color: 'var(--color-text)'
                                            },
                                            children: productDetails.version
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                            lineNumber: 233,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                    lineNumber: 226,
                                    columnNumber: 37
                                }, this),
                                productDetails.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs block mb-2",
                                            style: {
                                                color: 'var(--color-text-secondary)'
                                            },
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                            lineNumber: 244,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs leading-relaxed",
                                            style: {
                                                color: 'var(--color-text-muted)'
                                            },
                                            children: productDetails.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                            lineNumber: 250,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                    lineNumber: 243,
                                    columnNumber: 37
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                            lineNumber: 211,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 rounded-2xl border",
                            style: {
                                backgroundColor: 'var(--color-background-secondary)',
                                borderColor: 'var(--color-border)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[10px] font-bold uppercase tracking-widest block mb-3",
                                    style: {
                                        color: 'var(--color-text-muted)'
                                    },
                                    children: "Hierarchy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                    lineNumber: 269,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs",
                                                    style: {
                                                        color: 'var(--color-text-secondary)'
                                                    },
                                                    children: "Vendor"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-medium",
                                                    style: {
                                                        color: 'var(--color-text)'
                                                    },
                                                    children: vendor?.name || 'N/A'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                            lineNumber: 276,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs",
                                                    style: {
                                                        color: 'var(--color-text-secondary)'
                                                    },
                                                    children: "Proposition"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 37
                                                }, this),
                                                proposition && propositionColors ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `px-2 py-0.5 rounded border text-[10px] font-bold uppercase ${propositionColors.badge}`,
                                                    children: proposition.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 41
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs",
                                                    children: "N/A"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                            lineNumber: 290,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                    lineNumber: 275,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                            lineNumber: 262,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 rounded-2xl border",
                            style: {
                                backgroundColor: 'var(--color-background-secondary)',
                                borderColor: 'var(--color-border)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[10px] font-bold uppercase tracking-widest block mb-2 flex items-center gap-2",
                                    style: {
                                        color: 'var(--color-text-muted)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                            lineNumber: 320,
                                            columnNumber: 33
                                        }, this),
                                        "Integration Points"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                    lineNumber: 316,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs leading-relaxed italic",
                                    style: {
                                        color: 'var(--color-text-secondary)'
                                    },
                                    children: "Integration capabilities and connection points will be displayed here."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                    lineNumber: 323,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                            lineNumber: 309,
                            columnNumber: 25
                        }, this),
                        selectedItem.productConfig && Object.keys(selectedItem.productConfig.metrics).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[10px] font-bold uppercase tracking-widest block mb-3 flex items-center gap-2",
                                    style: {
                                        color: 'var(--color-text-muted)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                            lineNumber: 338,
                                            columnNumber: 37
                                        }, this),
                                        "Product Metrics"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                    lineNumber: 334,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$ProductMetrics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductMetrics"], {
                                    productId: selectedItem.entityId,
                                    productConfig: selectedItem.productConfig,
                                    canvasConfig: canvasConfig,
                                    onMetricChange: (metricKey, value)=>onMetricChange(selectedItem.id, metricKey, value),
                                    onMetricReset: (metricKey)=>onMetricReset(selectedItem.id, metricKey)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                    lineNumber: 341,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                            lineNumber: 333,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 pt-2",
                            children: [
                                onAddToSolution && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onAddToSolution,
                                    className: "w-full py-3 rounded-xl text-white text-sm font-semibold transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2",
                                    style: {
                                        backgroundColor: 'var(--color-primary)',
                                        boxShadow: '0 10px 25px -5px var(--color-primary)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                            lineNumber: 362,
                                            columnNumber: 37
                                        }, this),
                                        "Add to Solution"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                    lineNumber: 354,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full py-3 rounded-xl border text-sm font-semibold transition-colors",
                                    style: {
                                        borderColor: 'var(--color-border)',
                                        color: 'var(--color-text)',
                                        backgroundColor: 'var(--color-background-secondary)'
                                    },
                                    children: "Configure Details"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                    lineNumber: 367,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                            lineNumber: 352,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                    lineNumber: 126,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col items-center justify-center p-10 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-20 h-20 rounded-full flex items-center justify-center mb-6",
                            style: {
                                backgroundColor: 'var(--color-background-secondary)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "w-8 h-8",
                                style: {
                                    color: 'var(--color-text-muted)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                                lineNumber: 385,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                            lineNumber: 381,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-medium mb-2",
                            style: {
                                color: 'var(--color-text-secondary)'
                            },
                            children: "No Asset Selected"
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                            lineNumber: 390,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs leading-relaxed",
                            style: {
                                color: 'var(--color-text-muted)'
                            },
                            children: "Select an asset on the canvas to view its configuration, hierarchy, and metrics."
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                            lineNumber: 396,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
                    lineNumber: 380,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
            lineNumber: 92,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/PropertiesPanel.tsx",
        lineNumber: 85,
        columnNumber: 9
    }, this);
}
_c = PropertiesPanel;
var _c;
__turbopack_context__.k.register(_c, "PropertiesPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useMultiSelect.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMultiSelect",
    ()=>useMultiSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useMultiSelect() {
    _s();
    const [selectedIds, setSelectedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [isSelecting, setIsSelecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectionBox, setSelectionBox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMultiSelect.useCallback[toggleSelect]": (id, isCtrlPressed)=>{
            setSelectedIds({
                "useMultiSelect.useCallback[toggleSelect]": (prev)=>{
                    const newSet = new Set(prev);
                    if (isCtrlPressed) {
                        // Ctrl+Click: Toggle selection
                        if (newSet.has(id)) {
                            newSet.delete(id);
                        } else {
                            newSet.add(id);
                        }
                    } else {
                        // Regular click: Select only this item
                        newSet.clear();
                        newSet.add(id);
                    }
                    return newSet;
                }
            }["useMultiSelect.useCallback[toggleSelect]"]);
        }
    }["useMultiSelect.useCallback[toggleSelect]"], []);
    const selectMultiple = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMultiSelect.useCallback[selectMultiple]": (ids)=>{
            setSelectedIds(new Set(ids));
        }
    }["useMultiSelect.useCallback[selectMultiple]"], []);
    const addToSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMultiSelect.useCallback[addToSelection]": (id)=>{
            setSelectedIds({
                "useMultiSelect.useCallback[addToSelection]": (prev)=>new Set([
                        ...prev,
                        id
                    ])
            }["useMultiSelect.useCallback[addToSelection]"]);
        }
    }["useMultiSelect.useCallback[addToSelection]"], []);
    const removeFromSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMultiSelect.useCallback[removeFromSelection]": (id)=>{
            setSelectedIds({
                "useMultiSelect.useCallback[removeFromSelection]": (prev)=>{
                    const newSet = new Set(prev);
                    newSet.delete(id);
                    return newSet;
                }
            }["useMultiSelect.useCallback[removeFromSelection]"]);
        }
    }["useMultiSelect.useCallback[removeFromSelection]"], []);
    const clearSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMultiSelect.useCallback[clearSelection]": ()=>{
            setSelectedIds(new Set());
        }
    }["useMultiSelect.useCallback[clearSelection]"], []);
    const selectAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMultiSelect.useCallback[selectAll]": (allIds)=>{
            setSelectedIds(new Set(allIds));
        }
    }["useMultiSelect.useCallback[selectAll]"], []);
    const isSelected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMultiSelect.useCallback[isSelected]": (id)=>{
            return selectedIds.has(id);
        }
    }["useMultiSelect.useCallback[isSelected]"], [
        selectedIds
    ]);
    const startBoxSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMultiSelect.useCallback[startBoxSelection]": (startX, startY)=>{
            setIsSelecting(true);
            setSelectionBox({
                x: startX,
                y: startY,
                width: 0,
                height: 0
            });
        }
    }["useMultiSelect.useCallback[startBoxSelection]"], []);
    const updateBoxSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMultiSelect.useCallback[updateBoxSelection]": (currentX, currentY)=>{
            if (!selectionBox) return;
            const width = currentX - selectionBox.x;
            const height = currentY - selectionBox.y;
            setSelectionBox({
                x: width < 0 ? currentX : selectionBox.x,
                y: height < 0 ? currentY : selectionBox.y,
                width: Math.abs(width),
                height: Math.abs(height)
            });
        }
    }["useMultiSelect.useCallback[updateBoxSelection]"], [
        selectionBox
    ]);
    const endBoxSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMultiSelect.useCallback[endBoxSelection]": (itemsInBox, isCtrlPressed)=>{
            if (isCtrlPressed) {
                // Add to existing selection
                setSelectedIds({
                    "useMultiSelect.useCallback[endBoxSelection]": (prev)=>new Set([
                            ...prev,
                            ...itemsInBox
                        ])
                }["useMultiSelect.useCallback[endBoxSelection]"]);
            } else {
                // Replace selection
                setSelectedIds(new Set(itemsInBox));
            }
            setIsSelecting(false);
            setSelectionBox(null);
        }
    }["useMultiSelect.useCallback[endBoxSelection]"], []);
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
_s(useMultiSelect, "9iR5izI3au3OPUQQFypx3lQD16c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useKeyboardShortcuts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useKeyboardShortcuts",
    ()=>useKeyboardShortcuts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useKeyboardShortcuts(shortcuts, enabled = true) {
    _s();
    // Keep reference to latest shortcuts to avoid re-binding effect
    const shortcutsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(shortcuts);
    // Always update ref to latest passed shortcuts on every render
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useKeyboardShortcuts.useEffect": ()=>{
            shortcutsRef.current = shortcuts;
        }
    }["useKeyboardShortcuts.useEffect"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useKeyboardShortcuts.useEffect": ()=>{
            if (!enabled) return;
            const handleKeyDown = {
                "useKeyboardShortcuts.useEffect.handleKeyDown": (event)=>{
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
                    // Zoom shortcuts
                    // Ctrl/Cmd + Plus/Equals (zoom in)
                    if (isModifier && (key === '+' || key === '=') && currentShortcuts.onZoomIn && !isInputField) {
                        event.preventDefault();
                        currentShortcuts.onZoomIn();
                        return;
                    }
                    // Ctrl/Cmd + Minus (zoom out)
                    if (isModifier && key === '-' && currentShortcuts.onZoomOut && !isInputField) {
                        event.preventDefault();
                        currentShortcuts.onZoomOut();
                        return;
                    }
                    // Ctrl/Cmd + 0 (reset zoom)
                    if (isModifier && key === '0' && currentShortcuts.onZoomReset && !isInputField) {
                        event.preventDefault();
                        currentShortcuts.onZoomReset();
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
                }
            }["useKeyboardShortcuts.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "useKeyboardShortcuts.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["useKeyboardShortcuts.useEffect"];
        }
    }["useKeyboardShortcuts.useEffect"], [
        enabled
    ]); // Only re-bind if enabled changes, NOT when shortcuts change
}
_s(useKeyboardShortcuts, "ykTj5P4PnIGDTc0uchEGmNalfls=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils/alignment.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useSnapGuides.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSnapGuides",
    ()=>useSnapGuides
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$alignment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/alignment.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const SNAP_THRESHOLD = 8; // pixels
const ITEM_WIDTH = 300; // w-75 = 18.75rem = 300px
const ITEM_HEIGHT = 172; // Actual rendered card height
function useSnapGuides(draggedItemId, dragPosition, allItems, enabled = true, selectedItemIds = [] // Items to exclude from snap calculations (for multi-select)
) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSnapGuides.useMemo": ()=>{
            if (!enabled || !draggedItemId || !dragPosition) {
                return {
                    x: dragPosition?.x ?? 0,
                    y: dragPosition?.y ?? 0,
                    guides: []
                };
            }
            const width = dragPosition.width ?? ITEM_WIDTH;
            const height = dragPosition.height ?? ITEM_HEIGHT;
            // Current dragged edges
            const current = {
                left: dragPosition.x,
                right: dragPosition.x + width,
                centerX: dragPosition.x + width / 2,
                top: dragPosition.y,
                bottom: dragPosition.y + height,
                centerY: dragPosition.y + height / 2
            };
            // Verbose logging - uncomment for detailed debugging
            // console.log('🔍 Snap Debug - Current dragged item:', {
            //     id: draggedItemId,
            //     position: dragPosition,
            //     current
            // });
            // Filter out the dragged item AND all selected items (for multi-select drag)
            const otherItems = allItems.filter({
                "useSnapGuides.useMemo.otherItems": (item)=>item.id !== draggedItemId && !selectedItemIds.includes(item.id)
            }["useSnapGuides.useMemo.otherItems"]);
            // console.log('🔍 Snap Debug - Other items count:', otherItems.length);
            let snappedX = dragPosition.x;
            let snappedY = dragPosition.y;
            // Find best X snap
            let bestSnapX = null;
            let minDistX = SNAP_THRESHOLD;
            for (const item of otherItems){
                const bounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$alignment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItemBounds"])(item);
                const target = {
                    left: bounds.x,
                    right: bounds.x + bounds.width,
                    centerX: bounds.x + bounds.width / 2
                };
                // Check all X combinations
                const checks = [
                    {
                        d: target.left - current.left,
                        pos: target.left,
                        label: 'Left Edge',
                        type: 'edge'
                    },
                    {
                        d: target.right - current.left,
                        pos: target.right,
                        label: 'Right to Left',
                        type: 'edge'
                    },
                    {
                        d: target.left - current.right,
                        pos: target.left,
                        label: 'Left to Right',
                        type: 'edge'
                    },
                    {
                        d: target.right - current.right,
                        pos: target.right,
                        label: 'Right Edge',
                        type: 'edge'
                    },
                    {
                        d: target.centerX - current.centerX,
                        pos: target.centerX,
                        label: 'Center',
                        type: 'center'
                    }
                ];
                // Verbose logging - uncomment for detailed debugging
                // console.log(`  Item ${item.id}:`, {
                //     target,
                //     checks: checks.map(c => ({ label: c.label, distance: c.d.toFixed(1), withinThreshold: Math.abs(c.d) < SNAP_THRESHOLD }))
                // });
                for (const check of checks){
                    if (Math.abs(check.d) < minDistX) {
                        minDistX = Math.abs(check.d);
                        bestSnapX = {
                            distance: check.d,
                            position: check.pos,
                            guideType: check.type,
                            label: check.label,
                            itemId: item.id
                        };
                    }
                }
            }
            // Apply X Snap
            const finalGuides = [];
            if (bestSnapX) {
                // Calculate the new X position based on which edge/center is snapping
                // The guide position tells us where the alignment should be
                // We need to adjust the item's X based on which part of it is aligning
                // Determine which edge/center of the dragged item is snapping
                if (bestSnapX.label.includes('Left Edge') || bestSnapX.label.includes('Right to Left')) {
                    // Left edge of dragged item aligns to guide position
                    snappedX = bestSnapX.position;
                } else if (bestSnapX.label.includes('Right Edge') || bestSnapX.label.includes('Left to Right')) {
                    // Right edge of dragged item aligns to guide position
                    snappedX = bestSnapX.position - width;
                } else if (bestSnapX.label.includes('Center')) {
                    // Center of dragged item aligns to guide position
                    snappedX = bestSnapX.position - width / 2;
                }
                // Calculate bounds for the guide to span across aligned items
                const targetItem = otherItems.find({
                    "useSnapGuides.useMemo.targetItem": (it)=>it.id === bestSnapX.itemId
                }["useSnapGuides.useMemo.targetItem"]);
                const targetBounds = targetItem ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$alignment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItemBounds"])(targetItem) : null;
                // For vertical guides, calculate minY and maxY to span both items
                const minY = targetBounds ? Math.min(current.top, targetBounds.y) : current.top;
                const maxY = targetBounds ? Math.max(current.bottom, targetBounds.y + targetBounds.height) : current.bottom;
                finalGuides.push({
                    type: 'vertical',
                    position: bestSnapX.position,
                    items: [
                        bestSnapX.itemId
                    ],
                    label: bestSnapX.label,
                    guideType: bestSnapX.guideType,
                    minY,
                    maxY
                });
            // Only log once, not during every drag move
            // console.log('✅ X Snap found:', { ...bestSnapX, calculatedX: snappedX });
            }
            // Find best Y snap
            let bestSnapY = null;
            let minDistY = SNAP_THRESHOLD;
            for (const item of otherItems){
                const bounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$alignment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItemBounds"])(item);
                const target = {
                    top: bounds.y,
                    bottom: bounds.y + bounds.height,
                    centerY: bounds.y + bounds.height / 2
                };
                // Check all Y combinations
                const checks = [
                    {
                        d: target.top - current.top,
                        pos: target.top,
                        label: 'Top Edge',
                        type: 'edge'
                    },
                    {
                        d: target.bottom - current.top,
                        pos: target.bottom,
                        label: 'Bottom to Top',
                        type: 'edge'
                    },
                    {
                        d: target.top - current.bottom,
                        pos: target.top,
                        label: 'Top to Bottom',
                        type: 'edge'
                    },
                    {
                        d: target.bottom - current.bottom,
                        pos: target.bottom,
                        label: 'Bottom Edge',
                        type: 'edge'
                    },
                    {
                        d: target.centerY - current.centerY,
                        pos: target.centerY,
                        label: 'Middle',
                        type: 'center'
                    }
                ];
                for (const check of checks){
                    if (Math.abs(check.d) < minDistY) {
                        minDistY = Math.abs(check.d);
                        bestSnapY = {
                            distance: check.d,
                            position: check.pos,
                            guideType: check.type,
                            label: check.label,
                            itemId: item.id
                        };
                    }
                }
            }
            // Apply Y Snap
            if (bestSnapY) {
                // Calculate the new Y position based on which edge/center is snapping
                // The guide position tells us where the alignment should be
                // We need to adjust the item's Y based on which part of it is aligning
                // Determine which edge/center of the dragged item is snapping
                if (bestSnapY.label.includes('Top Edge') || bestSnapY.label.includes('Bottom to Top')) {
                    // Top edge of dragged item aligns to guide position
                    snappedY = bestSnapY.position;
                } else if (bestSnapY.label.includes('Bottom Edge') || bestSnapY.label.includes('Top to Bottom')) {
                    // Bottom edge of dragged item aligns to guide position
                    snappedY = bestSnapY.position - height;
                } else if (bestSnapY.label.includes('Middle')) {
                    // Middle of dragged item aligns to guide position
                    snappedY = bestSnapY.position - height / 2;
                }
                // Calculate bounds for the guide to span across aligned items
                const targetItem = otherItems.find({
                    "useSnapGuides.useMemo.targetItem": (it)=>it.id === bestSnapY.itemId
                }["useSnapGuides.useMemo.targetItem"]);
                const targetBounds = targetItem ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$alignment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItemBounds"])(targetItem) : null;
                // For horizontal guides, calculate minX and maxX to span both items
                const minX = targetBounds ? Math.min(current.left, targetBounds.x) : current.left;
                const maxX = targetBounds ? Math.max(current.right, targetBounds.x + targetBounds.width) : current.right;
                finalGuides.push({
                    type: 'horizontal',
                    position: bestSnapY.position,
                    items: [
                        bestSnapY.itemId
                    ],
                    label: bestSnapY.label,
                    guideType: bestSnapY.guideType,
                    minX,
                    maxX
                });
            // console.log('✅ Y Snap found:', { ...bestSnapY, calculatedY: snappedY });
            }
            // Consolidate guides at the same position to avoid duplicates
            // When multiple items align to the same position, show only one guide
            const consolidatedGuides = [];
            for (const guide of finalGuides){
                const existing = consolidatedGuides.find({
                    "useSnapGuides.useMemo.existing": (g)=>g.type === guide.type && Math.abs(g.position - guide.position) < 1
                }["useSnapGuides.useMemo.existing"]);
                if (existing) {
                    // Merge items array and extend bounds
                    existing.items = [
                        ...new Set([
                            ...existing.items,
                            ...guide.items
                        ])
                    ];
                    // Extend bounds to cover all aligned items
                    if (guide.type === 'vertical') {
                        existing.minY = Math.min(existing.minY ?? Infinity, guide.minY ?? Infinity);
                        existing.maxY = Math.max(existing.maxY ?? -Infinity, guide.maxY ?? -Infinity);
                    } else {
                        existing.minX = Math.min(existing.minX ?? Infinity, guide.minX ?? Infinity);
                        existing.maxX = Math.max(existing.maxX ?? -Infinity, guide.maxX ?? -Infinity);
                    }
                } else {
                    consolidatedGuides.push(guide);
                }
            }
            // console.log('📊 Final snap result:', {
            //     originalX: dragPosition.x,
            //     originalY: dragPosition.y,
            //     snappedX,
            //     snappedY,
            //     guides: consolidatedGuides.length
            // });
            // Round to whole pixels for clean alignment
            return {
                x: Math.round(snappedX),
                y: Math.round(snappedY),
                guides: consolidatedGuides
            };
        }
    }["useSnapGuides.useMemo"], [
        draggedItemId,
        dragPosition,
        allItems,
        enabled,
        selectedItemIds
    ]);
}
_s(useSnapGuides, "nwk+m61qLgjDVUp4IGV/072DDN4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useModifierKeys.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useModifierKeys",
    ()=>useModifierKeys
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useModifierKeys() {
    _s();
    const [keys, setKeys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        ctrl: false,
        shift: false,
        alt: false,
        meta: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useModifierKeys.useEffect": ()=>{
            const handleKeyDown = {
                "useModifierKeys.useEffect.handleKeyDown": (e)=>{
                    setKeys({
                        ctrl: e.ctrlKey,
                        shift: e.shiftKey,
                        alt: e.altKey,
                        meta: e.metaKey
                    });
                }
            }["useModifierKeys.useEffect.handleKeyDown"];
            const handleKeyUp = {
                "useModifierKeys.useEffect.handleKeyUp": (e)=>{
                    setKeys({
                        ctrl: e.ctrlKey,
                        shift: e.shiftKey,
                        alt: e.altKey,
                        meta: e.metaKey
                    });
                }
            }["useModifierKeys.useEffect.handleKeyUp"];
            window.addEventListener('keydown', handleKeyDown);
            window.addEventListener('keyup', handleKeyUp);
            return ({
                "useModifierKeys.useEffect": ()=>{
                    window.removeEventListener('keydown', handleKeyDown);
                    window.removeEventListener('keyup', handleKeyUp);
                }
            })["useModifierKeys.useEffect"];
        }
    }["useModifierKeys.useEffect"], []);
    return keys;
}
_s(useModifierKeys, "ejDiaolIN6CwiUpUttMixPaaCew=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useHistory.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHistory",
    ()=>useHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const MAX_HISTORY_SIZE = 50;
function useHistory(initialState) {
    _s();
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        past: [],
        present: initialState,
        future: []
    });
    const setState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHistory.useCallback[setState]": (newState)=>{
            setHistory({
                "useHistory.useCallback[setState]": (prev)=>{
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
                }
            }["useHistory.useCallback[setState]"]);
        }
    }["useHistory.useCallback[setState]"], []);
    const undo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHistory.useCallback[undo]": ()=>{
            setHistory({
                "useHistory.useCallback[undo]": (prev)=>{
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
                }
            }["useHistory.useCallback[undo]"]);
        }
    }["useHistory.useCallback[undo]"], []);
    const redo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHistory.useCallback[redo]": ()=>{
            setHistory({
                "useHistory.useCallback[redo]": (prev)=>{
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
                }
            }["useHistory.useCallback[redo]"]);
        }
    }["useHistory.useCallback[redo]"], []);
    const clear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHistory.useCallback[clear]": ()=>{
            setHistory({
                "useHistory.useCallback[clear]": (prev)=>({
                        past: [],
                        present: prev.present,
                        future: []
                    })
            }["useHistory.useCallback[clear]"]);
        }
    }["useHistory.useCallback[clear]"], []);
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
_s(useHistory, "FR49EScwXYOheyrDn5csNO/S+VE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/canvas/controls/ContextMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContextMenu",
    ()=>ContextMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$start$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/text-align-start.js [app-client] (ecmascript) <export default as AlignLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ungroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ungroup$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ungroup.js [app-client] (ecmascript) <export default as Ungroup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/type.js [app-client] (ecmascript) <export default as Type>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ContextMenu({ x, y, onClose, actions, selectedCount }) {
    _s();
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContextMenu.useEffect": ()=>{
            const handleClickOutside = {
                "ContextMenu.useEffect.handleClickOutside": (event)=>{
                    if (menuRef.current && !menuRef.current.contains(event.target)) {
                        onClose();
                    }
                }
            }["ContextMenu.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "ContextMenu.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["ContextMenu.useEffect"];
        }
    }["ContextMenu.useEffect"], [
        onClose
    ]);
    // Adjust position to keep within viewport
    const style = {
        top: Math.min(y, ("TURBOPACK compile-time truthy", 1) ? window.innerHeight - 200 : "TURBOPACK unreachable"),
        left: Math.min(x, ("TURBOPACK compile-time truthy", 1) ? window.innerWidth - 300 : "TURBOPACK unreachable")
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: menuRef,
        className: "fixed z-50 flex flex-col items-start backdrop-blur-xl border rounded-xl shadow-2xl overflow-hidden min-w-[220px] animate-in fade-in zoom-in-95 duration-200",
        style: {
            ...style,
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full px-3 py-2 flex items-center justify-between",
                style: {
                    borderBottom: '1px solid var(--color-border)',
                    backgroundColor: 'var(--color-background-secondary)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-1 rounded-md transition-colors",
                                style: {
                                    color: 'var(--color-text-muted)'
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)',
                                onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = 'transparent',
                                title: "Lock",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-1 rounded-md transition-colors",
                                style: {
                                    color: 'var(--color-text-muted)'
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)',
                                onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = 'transparent',
                                title: "Visible",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-1 w-full grid grid-cols-4 gap-1",
                style: {
                    borderBottom: '1px solid var(--color-border)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$start$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__["AlignLeft"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ungroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ungroup$3e$__["Ungroup"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-1 w-full flex flex-col",
                children: actions.filter((a)=>a.id !== 'duplicate').map((action)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    action.icon,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            action.shortcut && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(ContextMenu, "lbfKxozlpk19p2tUpYavRIkbEU0=");
_c = ContextMenu;
var _c;
__turbopack_context__.k.register(_c, "ContextMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/canvas/controls/AlignmentToolbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlignmentToolbar",
    ()=>AlignmentToolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$start$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/text-align-start.js [app-client] (ecmascript) <export default as AlignLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$center$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignCenter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/text-align-center.js [app-client] (ecmascript) <export default as AlignCenter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$end$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/text-align-end.js [app-client] (ecmascript) <export default as AlignRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$align$2d$vertical$2d$justify$2d$start$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignVerticalJustifyStart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/align-vertical-justify-start.js [app-client] (ecmascript) <export default as AlignVerticalJustifyStart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$align$2d$vertical$2d$justify$2d$center$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignVerticalJustifyCenter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/align-vertical-justify-center.js [app-client] (ecmascript) <export default as AlignVerticalJustifyCenter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$align$2d$vertical$2d$justify$2d$end$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignVerticalJustifyEnd$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/align-vertical-justify-end.js [app-client] (ecmascript) <export default as AlignVerticalJustifyEnd>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$separator$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SeparatorHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/separator-horizontal.js [app-client] (ecmascript) <export default as SeparatorHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$separator$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SeparatorVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/separator-vertical.js [app-client] (ecmascript) <export default as SeparatorVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Unlock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock-open.js [app-client] (ecmascript) <export default as Unlock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ungroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ungroup$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ungroup.js [app-client] (ecmascript) <export default as Ungroup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
;
;
function AlignmentToolbar({ selectedCount, onAlign, onDistribute, onGroup, onLock, onCreateSolution, isGrouped, isLocked }) {
    const needsMultiple = selectedCount < 2;
    const needsThree = selectedCount < 3;
    const hasSelection = selectedCount > 0;
    const alignmentActions = [
        {
            id: 'align-left',
            label: 'Align Left',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$start$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__["AlignLeft"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/controls/AlignmentToolbar.tsx",
                lineNumber: 56,
                columnNumber: 19
            }, this),
            action: ()=>onAlign('left'),
            disabled: needsMultiple
        },
        {
            id: 'align-center',
            label: 'Align Center',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$center$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignCenter$3e$__["AlignCenter"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/controls/AlignmentToolbar.tsx",
                lineNumber: 63,
                columnNumber: 19
            }, this),
            action: ()=>onAlign('center'),
            disabled: needsMultiple
        },
        {
            id: 'align-right',
            label: 'Align Right',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$end$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignRight$3e$__["AlignRight"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/controls/AlignmentToolbar.tsx",
                lineNumber: 70,
                columnNumber: 19
            }, this),
            action: ()=>onAlign('right'),
            disabled: needsMultiple
        },
        {
            id: 'align-top',
            label: 'Align Top',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$align$2d$vertical$2d$justify$2d$start$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignVerticalJustifyStart$3e$__["AlignVerticalJustifyStart"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/controls/AlignmentToolbar.tsx",
                lineNumber: 77,
                columnNumber: 19
            }, this),
            action: ()=>onAlign('top'),
            disabled: needsMultiple
        },
        {
            id: 'align-middle',
            label: 'Align Middle',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$align$2d$vertical$2d$justify$2d$center$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignVerticalJustifyCenter$3e$__["AlignVerticalJustifyCenter"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/controls/AlignmentToolbar.tsx",
                lineNumber: 84,
                columnNumber: 19
            }, this),
            action: ()=>onAlign('middle'),
            disabled: needsMultiple
        },
        {
            id: 'align-bottom',
            label: 'Align Bottom',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$align$2d$vertical$2d$justify$2d$end$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignVerticalJustifyEnd$3e$__["AlignVerticalJustifyEnd"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/controls/AlignmentToolbar.tsx",
                lineNumber: 91,
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
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$separator$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SeparatorHorizontal$3e$__["SeparatorHorizontal"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/controls/AlignmentToolbar.tsx",
                lineNumber: 105,
                columnNumber: 19
            }, this),
            action: ()=>onDistribute('horizontal'),
            disabled: needsThree
        },
        {
            id: 'distribute-vertical',
            label: 'Distribute Vertically',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$separator$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SeparatorVertical$3e$__["SeparatorVertical"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/controls/AlignmentToolbar.tsx",
                lineNumber: 112,
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
            icon: isGrouped ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ungroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ungroup$3e$__["Ungroup"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/controls/AlignmentToolbar.tsx",
                lineNumber: 126,
                columnNumber: 31
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/controls/AlignmentToolbar.tsx",
                lineNumber: 126,
                columnNumber: 65
            }, this),
            action: onGroup,
            disabled: needsMultiple
        },
        {
            id: 'lock',
            label: isLocked ? 'Unlock' : 'Lock',
            icon: isLocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Unlock$3e$__["Unlock"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/controls/AlignmentToolbar.tsx",
                lineNumber: 133,
                columnNumber: 30
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/controls/AlignmentToolbar.tsx",
                lineNumber: 133,
                columnNumber: 63
            }, this),
            action: onLock,
            disabled: !hasSelection
        },
        {
            id: 'separator-3',
            label: '',
            icon: null,
            action: ()=>{},
            separator: true
        },
        {
            id: 'create-solution',
            label: 'Create Solution',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/controls/AlignmentToolbar.tsx",
                lineNumber: 147,
                columnNumber: 19
            }, this),
            action: onCreateSolution || (()=>{}),
            disabled: needsMultiple || !onCreateSolution
        }
    ];
    if (selectedCount < 2) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-20 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 p-2 rounded-xl shadow-2xl border backdrop-blur-xl",
        style: {
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)'
        },
        children: alignmentActions.map((action)=>{
            if (action.separator) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-px h-6 mx-1",
                    style: {
                        backgroundColor: 'var(--color-border)'
                    }
                }, action.id, false, {
                    fileName: "[project]/src/components/canvas/controls/AlignmentToolbar.tsx",
                    lineNumber: 168,
                    columnNumber: 25
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                lineNumber: 177,
                columnNumber: 21
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/controls/AlignmentToolbar.tsx",
        lineNumber: 158,
        columnNumber: 9
    }, this);
}
_c = AlignmentToolbar;
var _c;
__turbopack_context__.k.register(_c, "AlignmentToolbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/canvas/controls/AxisLockIndicator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AxisLockIndicator",
    ()=>AxisLockIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function AxisLockIndicator({ isActive, axis }) {
    if (!isActive || !axis) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-6 py-3 rounded-xl bg-blue-500/90 backdrop-blur-md border-2 border-blue-400 shadow-2xl shadow-blue-500/50 animate-in fade-in zoom-in duration-150",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center",
                        children: axis === 'x' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5 text-white",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5 text-white",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-bold uppercase tracking-wider opacity-80",
                                children: "Axis Locked"
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/controls/AxisLockIndicator.tsx",
                                lineNumber: 27,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = AxisLockIndicator;
var _c;
__turbopack_context__.k.register(_c, "AxisLockIndicator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/theme.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useTheme.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/theme.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const THEME_STORAGE_KEY = 'qanvas-theme';
function useTheme() {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themes"].dark);
    // Load theme from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTheme.useEffect": ()=>{
            const stored = localStorage.getItem(THEME_STORAGE_KEY);
            if (stored === 'light') {
                setTheme(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themes"].light);
            } else {
                setTheme(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themes"].dark);
            }
        }
    }["useTheme.useEffect"], []);
    // Apply theme to CSS variables
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTheme.useEffect": ()=>{
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
        }
    }["useTheme.useEffect"], [
        theme
    ]);
    const toggleTheme = ()=>{
        const newTheme = theme.name === 'dark' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themes"].light : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themes"].dark;
        setTheme(newTheme);
        localStorage.setItem(THEME_STORAGE_KEY, newTheme.name);
    };
    const setLightTheme = ()=>{
        setTheme(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themes"].light);
        localStorage.setItem(THEME_STORAGE_KEY, 'light');
    };
    const setDarkTheme = ()=>{
        setTheme(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themes"].dark);
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
_s(useTheme, "ggN5zd8mnWs+Hl0P8fYme6ZIyyM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data/mockData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PRODUCTS",
    ()=>PRODUCTS,
    "PROPOSITIONS",
    ()=>PROPOSITIONS,
    "SOLUTIONS",
    ()=>SOLUTIONS,
    "VENDORS",
    ()=>VENDORS
]);
const PROPOSITIONS = [
    {
        id: 'digital-workspace',
        label: 'Digital Workspace',
        color: '#3b82f6' // Blue
    },
    {
        id: 'hybrid-cloud',
        label: 'Hybrid Cloud',
        color: '#a855f7' // Purple
    },
    {
        id: 'artificial-intelligence',
        label: 'AI',
        color: '#10b981' // Emerald
    },
    {
        id: 'cloud-native',
        label: 'Cloud Native',
        color: '#f97316' // Orange
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
        name: 'vSphere',
        version: '8.0',
        description: 'Enterprise-grade virtualization platform for building cloud infrastructures'
    },
    {
        id: 'p-horizon',
        vendorId: 'v-vmware',
        propositionId: 'digital-workspace',
        name: 'Horizon',
        version: '2023',
        description: 'Virtual desktop infrastructure (VDI) and application delivery platform'
    },
    {
        id: 'p-azure-vd',
        vendorId: 'v-microsoft',
        propositionId: 'digital-workspace',
        name: 'Azure Virtual Desktop',
        version: 'Current',
        description: 'Cloud-based desktop and app virtualization service on Azure'
    },
    {
        id: 'p-m365',
        vendorId: 'v-microsoft',
        propositionId: 'digital-workspace',
        name: 'Microsoft 365',
        version: 'E5',
        description: 'Complete productivity suite with Office apps, Teams, and security features'
    },
    {
        id: 'p-openai',
        vendorId: 'v-microsoft',
        propositionId: 'artificial-intelligence',
        name: 'Azure OpenAI',
        version: 'GPT-4',
        description: 'Enterprise AI service with advanced language models and cognitive capabilities'
    },
    {
        id: 'p-eks',
        vendorId: 'v-aws',
        propositionId: 'cloud-native',
        name: 'Amazon EKS',
        version: '1.28',
        description: 'Managed Kubernetes service for running containerized applications'
    }
];
const SOLUTIONS = [
    {
        id: 's-hybrid-workspace',
        name: 'Modern Hybrid Workspace',
        productIds: [
            'p-horizon',
            'p-m365'
        ],
        products: [
            {
                productId: 'p-horizon',
                relativeX: 0,
                relativeY: 0,
                config: {
                    licenses: 100,
                    users: 500
                }
            },
            {
                productId: 'p-m365',
                relativeX: 350,
                relativeY: 0,
                config: {
                    licenses: 500,
                    users: 500
                }
            }
        ],
        metadata: {
            licenses: 600,
            users: 500
        }
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useItemNudging.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useItemNudging",
    ()=>useItemNudging
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useItemNudging({ items, setItems, selectedIds }) {
    _s();
    const nudgeUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useItemNudging.useCallback[nudgeUp]": ()=>{
            if (selectedIds.length > 0) {
                setItems({
                    "useItemNudging.useCallback[nudgeUp]": (prev)=>prev.map({
                            "useItemNudging.useCallback[nudgeUp]": (item)=>selectedIds.includes(item.id) ? {
                                    ...item,
                                    y: item.y - 1
                                } : item
                        }["useItemNudging.useCallback[nudgeUp]"])
                }["useItemNudging.useCallback[nudgeUp]"]);
            }
        }
    }["useItemNudging.useCallback[nudgeUp]"], [
        selectedIds,
        setItems
    ]);
    const nudgeDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useItemNudging.useCallback[nudgeDown]": ()=>{
            if (selectedIds.length > 0) {
                setItems({
                    "useItemNudging.useCallback[nudgeDown]": (prev)=>prev.map({
                            "useItemNudging.useCallback[nudgeDown]": (item)=>selectedIds.includes(item.id) ? {
                                    ...item,
                                    y: item.y + 1
                                } : item
                        }["useItemNudging.useCallback[nudgeDown]"])
                }["useItemNudging.useCallback[nudgeDown]"]);
            }
        }
    }["useItemNudging.useCallback[nudgeDown]"], [
        selectedIds,
        setItems
    ]);
    const nudgeLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useItemNudging.useCallback[nudgeLeft]": ()=>{
            if (selectedIds.length > 0) {
                setItems({
                    "useItemNudging.useCallback[nudgeLeft]": (prev)=>prev.map({
                            "useItemNudging.useCallback[nudgeLeft]": (item)=>selectedIds.includes(item.id) ? {
                                    ...item,
                                    x: item.x - 1
                                } : item
                        }["useItemNudging.useCallback[nudgeLeft]"])
                }["useItemNudging.useCallback[nudgeLeft]"]);
            }
        }
    }["useItemNudging.useCallback[nudgeLeft]"], [
        selectedIds,
        setItems
    ]);
    const nudgeRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useItemNudging.useCallback[nudgeRight]": ()=>{
            if (selectedIds.length > 0) {
                setItems({
                    "useItemNudging.useCallback[nudgeRight]": (prev)=>prev.map({
                            "useItemNudging.useCallback[nudgeRight]": (item)=>selectedIds.includes(item.id) ? {
                                    ...item,
                                    x: item.x + 1
                                } : item
                        }["useItemNudging.useCallback[nudgeRight]"])
                }["useItemNudging.useCallback[nudgeRight]"]);
            }
        }
    }["useItemNudging.useCallback[nudgeRight]"], [
        selectedIds,
        setItems
    ]);
    return {
        nudgeUp,
        nudgeDown,
        nudgeLeft,
        nudgeRight
    };
}
_s(useItemNudging, "8uwU3YtVB8O1u0exk6jiv2L/iLQ=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useItemLocking.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useItemLocking",
    ()=>useItemLocking
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useItemLocking({ items, setItems, selectedIds, setDebugInfo }) {
    _s();
    const toggleLock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useItemLocking.useCallback[toggleLock]": ()=>{
            if (selectedIds.length === 0) return;
            const selectedItems = items.filter({
                "useItemLocking.useCallback[toggleLock].selectedItems": (item)=>selectedIds.includes(item.id)
            }["useItemLocking.useCallback[toggleLock].selectedItems"]);
            const allLocked = selectedItems.every({
                "useItemLocking.useCallback[toggleLock].allLocked": (it)=>it.locked
            }["useItemLocking.useCallback[toggleLock].allLocked"]);
            setItems({
                "useItemLocking.useCallback[toggleLock]": (prev)=>prev.map({
                        "useItemLocking.useCallback[toggleLock]": (item)=>selectedIds.includes(item.id) ? {
                                ...item,
                                locked: !allLocked
                            } : item
                    }["useItemLocking.useCallback[toggleLock]"])
            }["useItemLocking.useCallback[toggleLock]"]);
            if (setDebugInfo) {
                setDebugInfo(allLocked ? `Unlocked ${selectedIds.length} items` : `Locked ${selectedIds.length} items`);
            }
        }
    }["useItemLocking.useCallback[toggleLock]"], [
        items,
        selectedIds,
        setItems,
        setDebugInfo
    ]);
    return {
        toggleLock
    };
}
_s(useItemLocking, "alsFfjOSP2u84qbWEn7rPSUU6YM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useAlignment.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAlignment",
    ()=>useAlignment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$alignment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/alignment.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useAlignment({ items, setItems, selectedIds, setDebugInfo }) {
    _s();
    const align = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAlignment.useCallback[align]": (type)=>{
            const selectedItems = items.filter({
                "useAlignment.useCallback[align].selectedItems": (item)=>selectedIds.includes(item.id)
            }["useAlignment.useCallback[align].selectedItems"]);
            if (selectedItems.length < 2) return;
            const aligned = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$alignment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alignItems"])({
                type,
                items: selectedItems
            });
            setItems({
                "useAlignment.useCallback[align]": (prev)=>prev.map({
                        "useAlignment.useCallback[align]": (item)=>{
                            const alignedItem = aligned.find({
                                "useAlignment.useCallback[align].alignedItem": (a)=>a.id === item.id
                            }["useAlignment.useCallback[align].alignedItem"]);
                            return alignedItem || item;
                        }
                    }["useAlignment.useCallback[align]"])
            }["useAlignment.useCallback[align]"]);
            if (setDebugInfo) {
                setDebugInfo(`Aligned ${selectedItems.length} items ${type}`);
            }
        }
    }["useAlignment.useCallback[align]"], [
        items,
        selectedIds,
        setItems,
        setDebugInfo
    ]);
    const distribute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAlignment.useCallback[distribute]": (direction)=>{
            const selectedItems = items.filter({
                "useAlignment.useCallback[distribute].selectedItems": (item)=>selectedIds.includes(item.id)
            }["useAlignment.useCallback[distribute].selectedItems"]);
            if (selectedItems.length < 3) return;
            const distributed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$alignment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distributeItems"])({
                direction,
                items: selectedItems
            });
            setItems({
                "useAlignment.useCallback[distribute]": (prev)=>prev.map({
                        "useAlignment.useCallback[distribute]": (item)=>{
                            const distributedItem = distributed.find({
                                "useAlignment.useCallback[distribute].distributedItem": (d)=>d.id === item.id
                            }["useAlignment.useCallback[distribute].distributedItem"]);
                            return distributedItem || item;
                        }
                    }["useAlignment.useCallback[distribute]"])
            }["useAlignment.useCallback[distribute]"]);
            if (setDebugInfo) {
                setDebugInfo(`Distributed ${selectedItems.length} items ${direction}`);
            }
        }
    }["useAlignment.useCallback[distribute]"], [
        items,
        selectedIds,
        setItems,
        setDebugInfo
    ]);
    const group = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAlignment.useCallback[group]": ()=>{
            if (selectedIds.length < 2) return;
            const selectedItems = items.filter({
                "useAlignment.useCallback[group].selectedItems": (item)=>selectedIds.includes(item.id)
            }["useAlignment.useCallback[group].selectedItems"]);
            const allGrouped = selectedItems.every({
                "useAlignment.useCallback[group].allGrouped": (it)=>it.groupId
            }["useAlignment.useCallback[group].allGrouped"]);
            if (allGrouped) {
                // Ungroup
                setItems({
                    "useAlignment.useCallback[group]": (prev)=>prev.map({
                            "useAlignment.useCallback[group]": (item)=>selectedIds.includes(item.id) ? {
                                    ...item,
                                    groupId: undefined
                                } : item
                        }["useAlignment.useCallback[group]"])
                }["useAlignment.useCallback[group]"]);
                if (setDebugInfo) {
                    setDebugInfo(`Ungrouped ${selectedIds.length} items`);
                }
            } else {
                // Group
                const groupId = `group-${Date.now()}`;
                setItems({
                    "useAlignment.useCallback[group]": (prev)=>prev.map({
                            "useAlignment.useCallback[group]": (item)=>selectedIds.includes(item.id) ? {
                                    ...item,
                                    groupId
                                } : item
                        }["useAlignment.useCallback[group]"])
                }["useAlignment.useCallback[group]"]);
                if (setDebugInfo) {
                    setDebugInfo(`Grouped ${selectedIds.length} items`);
                }
            }
        }
    }["useAlignment.useCallback[group]"], [
        items,
        selectedIds,
        setItems,
        setDebugInfo
    ]);
    const ungroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAlignment.useCallback[ungroup]": ()=>{
            if (selectedIds.length === 0) return;
            setItems({
                "useAlignment.useCallback[ungroup]": (prev)=>prev.map({
                        "useAlignment.useCallback[ungroup]": (item)=>selectedIds.includes(item.id) ? {
                                ...item,
                                groupId: undefined
                            } : item
                    }["useAlignment.useCallback[ungroup]"])
            }["useAlignment.useCallback[ungroup]"]);
            if (setDebugInfo) {
                setDebugInfo(`Ungrouped ${selectedIds.length} items`);
            }
        }
    }["useAlignment.useCallback[ungroup]"], [
        selectedIds,
        setItems,
        setDebugInfo
    ]);
    return {
        align,
        distribute,
        group,
        ungroup
    };
}
_s(useAlignment, "SFSBqJ1F97aikl3s8jAF43igO7k=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useClipboard.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useClipboard",
    ()=>useClipboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useClipboard({ items, setItems, selectedIds, selectMultiple, clearSelection, setDebugInfo }) {
    _s();
    const [clipboard, setClipboard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const copy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useClipboard.useCallback[copy]": ()=>{
            if (selectedIds.length > 0) {
                const itemsToCopy = items.filter({
                    "useClipboard.useCallback[copy].itemsToCopy": (item)=>selectedIds.includes(item.id)
                }["useClipboard.useCallback[copy].itemsToCopy"]);
                setClipboard(itemsToCopy);
                if (setDebugInfo) {
                    setDebugInfo(`Copied ${selectedIds.length} item(s)`);
                }
            }
        }
    }["useClipboard.useCallback[copy]"], [
        items,
        selectedIds,
        setDebugInfo
    ]);
    const paste = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useClipboard.useCallback[paste]": ()=>{
            if (clipboard.length > 0) {
                const newItems = clipboard.map({
                    "useClipboard.useCallback[paste].newItems": (item)=>({
                            ...item,
                            id: `item-${Date.now()}-${Math.random()}`,
                            x: item.x + 20,
                            y: item.y + 20,
                            groupId: undefined,
                            locked: false // Unlock when pasting
                        })
                }["useClipboard.useCallback[paste].newItems"]);
                setItems({
                    "useClipboard.useCallback[paste]": (prev)=>[
                            ...prev,
                            ...newItems
                        ]
                }["useClipboard.useCallback[paste]"]);
                selectMultiple(newItems.map({
                    "useClipboard.useCallback[paste]": (it)=>it.id
                }["useClipboard.useCallback[paste]"]));
                if (setDebugInfo) {
                    setDebugInfo(`Pasted ${clipboard.length} item(s)`);
                }
            }
        }
    }["useClipboard.useCallback[paste]"], [
        clipboard,
        setItems,
        selectMultiple,
        setDebugInfo
    ]);
    const duplicate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useClipboard.useCallback[duplicate]": ()=>{
            if (selectedIds.length > 0) {
                const newItems = items.filter({
                    "useClipboard.useCallback[duplicate].newItems": (item)=>selectedIds.includes(item.id)
                }["useClipboard.useCallback[duplicate].newItems"]).map({
                    "useClipboard.useCallback[duplicate].newItems": (item)=>({
                            ...item,
                            id: `item-${Date.now()}-${Math.random()}`,
                            x: item.x + 20,
                            y: item.y + 20
                        })
                }["useClipboard.useCallback[duplicate].newItems"]);
                setItems({
                    "useClipboard.useCallback[duplicate]": (prev)=>[
                            ...prev,
                            ...newItems
                        ]
                }["useClipboard.useCallback[duplicate]"]);
                if (setDebugInfo) {
                    setDebugInfo(`Duplicated ${selectedIds.length} item(s)`);
                }
            }
        }
    }["useClipboard.useCallback[duplicate]"], [
        items,
        selectedIds,
        setItems,
        setDebugInfo
    ]);
    const deleteSelected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useClipboard.useCallback[deleteSelected]": ()=>{
            if (selectedIds.length > 0) {
                setItems({
                    "useClipboard.useCallback[deleteSelected]": (prev)=>prev.filter({
                            "useClipboard.useCallback[deleteSelected]": (item)=>!selectedIds.includes(item.id)
                        }["useClipboard.useCallback[deleteSelected]"])
                }["useClipboard.useCallback[deleteSelected]"]);
                clearSelection();
                if (setDebugInfo) {
                    setDebugInfo(`Deleted ${selectedIds.length} item(s)`);
                }
            }
        }
    }["useClipboard.useCallback[deleteSelected]"], [
        selectedIds,
        setItems,
        clearSelection,
        setDebugInfo
    ]);
    return {
        clipboard,
        copy,
        paste,
        duplicate,
        deleteSelected
    };
}
_s(useClipboard, "RgegoMU2ndWUC7JST73lzAOAX/8=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useCanvasTransform.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCanvasTransform",
    ()=>useCanvasTransform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useCanvasTransform({ minZoom = 0.1, maxZoom = 4.0, zoomStep = 0.1, initialZoom = 1.0 } = {}) {
    _s();
    const [zoom, setZoomState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialZoom);
    const [pan, setPanState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    // Clamp zoom to min/max bounds
    const clampZoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCanvasTransform.useCallback[clampZoom]": (value)=>{
            return Math.max(minZoom, Math.min(maxZoom, value));
        }
    }["useCanvasTransform.useCallback[clampZoom]"], [
        minZoom,
        maxZoom
    ]);
    // Set zoom with clamping
    const setZoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCanvasTransform.useCallback[setZoom]": (newZoom)=>{
            setZoomState(clampZoom(newZoom));
        }
    }["useCanvasTransform.useCallback[setZoom]"], [
        clampZoom
    ]);
    // Zoom in by step
    const zoomIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCanvasTransform.useCallback[zoomIn]": ()=>{
            setZoomState({
                "useCanvasTransform.useCallback[zoomIn]": (prev)=>clampZoom(prev + zoomStep)
            }["useCanvasTransform.useCallback[zoomIn]"]);
        }
    }["useCanvasTransform.useCallback[zoomIn]"], [
        clampZoom,
        zoomStep
    ]);
    // Zoom out by step
    const zoomOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCanvasTransform.useCallback[zoomOut]": ()=>{
            setZoomState({
                "useCanvasTransform.useCallback[zoomOut]": (prev)=>clampZoom(prev - zoomStep)
            }["useCanvasTransform.useCallback[zoomOut]"]);
        }
    }["useCanvasTransform.useCallback[zoomOut]"], [
        clampZoom,
        zoomStep
    ]);
    // Reset to 100%
    const resetZoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCanvasTransform.useCallback[resetZoom]": ()=>{
            setZoomState(1.0);
        }
    }["useCanvasTransform.useCallback[resetZoom]"], []);
    // Zoom towards a specific point (for mouse wheel zoom)
    const zoomToPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCanvasTransform.useCallback[zoomToPoint]": (clientX, clientY, delta, containerRect)=>{
            const zoomChange = delta > 0 ? zoomStep : -zoomStep;
            const newZoom = clampZoom(zoom + zoomChange);
            if (newZoom === zoom) return; // No change if at min/max
            // Calculate mouse position relative to container
            const mouseX = clientX - containerRect.left;
            const mouseY = clientY - containerRect.top;
            // Calculate the point in canvas coordinates before zoom
            const canvasX = (mouseX - pan.x) / zoom;
            const canvasY = (mouseY - pan.y) / zoom;
            // Calculate new pan to keep the same point under the mouse
            const newPanX = mouseX - canvasX * newZoom;
            const newPanY = mouseY - canvasY * newZoom;
            setZoomState(newZoom);
            setPanState({
                x: newPanX,
                y: newPanY
            });
        }
    }["useCanvasTransform.useCallback[zoomToPoint]"], [
        zoom,
        pan,
        clampZoom,
        zoomStep
    ]);
    // Set pan position
    const setPan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCanvasTransform.useCallback[setPan]": (x, y)=>{
            setPanState({
                x,
                y
            });
        }
    }["useCanvasTransform.useCallback[setPan]"], []);
    // Convert screen coordinates to canvas coordinates
    const screenToCanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCanvasTransform.useCallback[screenToCanvas]": (screenX, screenY)=>{
            return {
                x: (screenX - pan.x) / zoom,
                y: (screenY - pan.y) / zoom
            };
        }
    }["useCanvasTransform.useCallback[screenToCanvas]"], [
        zoom,
        pan
    ]);
    // Convert canvas coordinates to screen coordinates
    const canvasToScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCanvasTransform.useCallback[canvasToScreen]": (canvasX, canvasY)=>{
            return {
                x: canvasX * zoom + pan.x,
                y: canvasY * zoom + pan.y
            };
        }
    }["useCanvasTransform.useCallback[canvasToScreen]"], [
        zoom,
        pan
    ]);
    return {
        zoom,
        pan,
        transform: {
            zoom,
            panX: pan.x,
            panY: pan.y
        },
        zoomIn,
        zoomOut,
        resetZoom,
        setZoom,
        zoomToPoint,
        setPan,
        screenToCanvas,
        canvasToScreen
    };
}
_s(useCanvasTransform, "k0BI9g7cYd6yXwUC7hU6D+BGwOo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/canvas/dialogs/SolutionDialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SolutionDialog",
    ()=>SolutionDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Key$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/key.js [app-client] (ecmascript) <export default as Key>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function SolutionDialog({ isOpen, onClose, onSave, selectedProducts }) {
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [licenses, setLicenses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    if (!isOpen) return null;
    const handleSave = ()=>{
        if (!name.trim()) {
            alert('Please enter a solution name');
            return;
        }
        onSave({
            name: name.trim(),
            description: description.trim(),
            productIds: selectedProducts.map((p)=>p.id),
            metadata: {
                licenses: licenses || undefined,
                users: users || undefined
            }
        });
        // Reset form
        setName('');
        setDescription('');
        setLicenses(0);
        setUsers(0);
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center pointer-events-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-2xl mx-4 rounded-2xl shadow-2xl overflow-hidden",
                style: {
                    backgroundColor: 'var(--color-surface)',
                    borderColor: 'var(--color-border)',
                    border: '1px solid'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-4 flex items-center justify-between",
                        style: {
                            borderBottom: '1px solid var(--color-border)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-lg flex items-center justify-center",
                                        style: {
                                            backgroundColor: 'var(--color-primary)',
                                            opacity: 0.1
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                            className: "w-5 h-5",
                                            style: {
                                                color: 'var(--color-primary)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                            lineNumber: 89,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                        lineNumber: 82,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-bold",
                                                style: {
                                                    color: 'var(--color-text)'
                                                },
                                                children: "Create Solution"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                                lineNumber: 95,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm",
                                                style: {
                                                    color: 'var(--color-text-muted)'
                                                },
                                                children: [
                                                    "Bundle ",
                                                    selectedProducts.length,
                                                    " products into a solution"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                                lineNumber: 101,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                        lineNumber: 94,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                lineNumber: 81,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 rounded-lg transition-colors",
                                style: {
                                    color: 'var(--color-text-muted)'
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = 'var(--color-background)',
                                onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = 'transparent',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                    lineNumber: 116,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                lineNumber: 109,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                        lineNumber: 75,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-6 space-y-6 max-h-[70vh] overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-semibold mb-2",
                                        style: {
                                            color: 'var(--color-text)'
                                        },
                                        children: "Solution Name *"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                        lineNumber: 124,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: name,
                                        onChange: (e)=>setName(e.target.value),
                                        placeholder: "e.g., Modern Hybrid Workspace",
                                        className: "w-full px-4 py-3 rounded-lg text-sm transition-colors",
                                        style: {
                                            backgroundColor: 'var(--color-background)',
                                            borderColor: 'var(--color-border)',
                                            border: '1px solid',
                                            color: 'var(--color-text)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                        lineNumber: 130,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                lineNumber: 123,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-semibold mb-2",
                                        style: {
                                            color: 'var(--color-text)'
                                        },
                                        children: "Description"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                        lineNumber: 147,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: description,
                                        onChange: (e)=>setDescription(e.target.value),
                                        placeholder: "Describe this solution...",
                                        rows: 3,
                                        className: "w-full px-4 py-3 rounded-lg text-sm transition-colors resize-none",
                                        style: {
                                            backgroundColor: 'var(--color-background)',
                                            borderColor: 'var(--color-border)',
                                            border: '1px solid',
                                            color: 'var(--color-text)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                        lineNumber: 153,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                lineNumber: 146,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-semibold mb-2 flex items-center gap-2",
                                                style: {
                                                    color: 'var(--color-text)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Key$3e$__["Key"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 33
                                                    }, this),
                                                    "Licenses"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                                lineNumber: 171,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: licenses || '',
                                                onChange: (e)=>setLicenses(parseInt(e.target.value) || 0),
                                                placeholder: "0",
                                                min: "0",
                                                className: "w-full px-4 py-3 rounded-lg text-sm transition-colors",
                                                style: {
                                                    backgroundColor: 'var(--color-background)',
                                                    borderColor: 'var(--color-border)',
                                                    border: '1px solid',
                                                    color: 'var(--color-text)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                                lineNumber: 178,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                        lineNumber: 170,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-semibold mb-2 flex items-center gap-2",
                                                style: {
                                                    color: 'var(--color-text)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 33
                                                    }, this),
                                                    "Users"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                                lineNumber: 194,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: users || '',
                                                onChange: (e)=>setUsers(parseInt(e.target.value) || 0),
                                                placeholder: "0",
                                                min: "0",
                                                className: "w-full px-4 py-3 rounded-lg text-sm transition-colors",
                                                style: {
                                                    backgroundColor: 'var(--color-background)',
                                                    borderColor: 'var(--color-border)',
                                                    border: '1px solid',
                                                    color: 'var(--color-text)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                                lineNumber: 201,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                        lineNumber: 193,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                lineNumber: 169,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-semibold mb-3",
                                        style: {
                                            color: 'var(--color-text)'
                                        },
                                        children: [
                                            "Included Products (",
                                            selectedProducts.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                        lineNumber: 220,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: selectedProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 py-3 rounded-lg flex items-center gap-3",
                                                style: {
                                                    backgroundColor: 'var(--color-background)',
                                                    borderColor: 'var(--color-border)',
                                                    border: '1px solid'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                        className: "w-4 h-4",
                                                        style: {
                                                            color: 'var(--color-primary)'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-medium",
                                                                style: {
                                                                    color: 'var(--color-text)'
                                                                },
                                                                children: product.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                                                lineNumber: 242,
                                                                columnNumber: 41
                                                            }, this),
                                                            product.version && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs",
                                                                style: {
                                                                    color: 'var(--color-text-muted)'
                                                                },
                                                                children: [
                                                                    "Version ",
                                                                    product.version
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                                                lineNumber: 249,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, product.id, true, {
                                                fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                                lineNumber: 228,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                        lineNumber: 226,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                lineNumber: 219,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                        lineNumber: 121,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-4 flex items-center justify-end gap-3",
                        style: {
                            borderTop: '1px solid var(--color-border)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                                style: {
                                    backgroundColor: 'var(--color-background)',
                                    color: 'var(--color-text-secondary)'
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)',
                                onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = 'var(--color-background)',
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                lineNumber: 270,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSave,
                                className: "px-4 py-2 rounded-lg text-sm font-medium text-white transition-all",
                                style: {
                                    backgroundColor: 'var(--color-primary)'
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.opacity = '0.9',
                                onMouseLeave: (e)=>e.currentTarget.style.opacity = '1',
                                children: "Create Solution"
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                                lineNumber: 282,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                        lineNumber: 264,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/dialogs/SolutionDialog.tsx",
        lineNumber: 58,
        columnNumber: 9
    }, this);
}
_s(SolutionDialog, "AQtaZf3imct0+rKQTrPDJ6VVWEg=");
_c = SolutionDialog;
var _c;
__turbopack_context__.k.register(_c, "SolutionDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/canvas/board/CanvasBoard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CanvasBoard",
    ()=>CanvasBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/core/dist/core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>"); // Combined imports for lucide-react
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Unlock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock-open.js [app-client] (ecmascript) <export default as Unlock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ungroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ungroup$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ungroup.js [app-client] (ecmascript) <export default as Ungroup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$CanvasSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/CanvasSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$CanvasWorkspace$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/CanvasWorkspace.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$CanvasItemCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/CanvasItemCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$PropertiesPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/PropertiesPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMultiSelect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMultiSelect.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKeyboardShortcuts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useKeyboardShortcuts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSnapGuides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSnapGuides.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useModifierKeys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useModifierKeys.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useHistory.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$ContextMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/controls/ContextMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$AlignmentToolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/controls/AlignmentToolbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$AxisLockIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/controls/AxisLockIndicator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTheme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useItemNudging$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useItemNudging.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useItemLocking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useItemLocking.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAlignment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAlignment.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useClipboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useClipboard.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCanvasTransform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCanvasTransform.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$dialogs$2f$SolutionDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/dialogs/SolutionDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$canvasConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types/canvasConfig.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
;
;
;
;
// Custom collision strategy
const customCollisionStrategy = (args)=>{
    const pointerCollisions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointerWithin"])(args);
    if (pointerCollisions.length > 0) return pointerCollisions;
    const rectCollisions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectIntersection"])(args);
    return rectCollisions.filter((c)=>c.id === 'canvas-droppable');
};
function CanvasBoard() {
    _s();
    // State with history for undo/redo
    const history = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistory"])([]);
    const items = history.state;
    const setItems = history.setState;
    const [activeDragData, setActiveDragData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedProposition, setSelectedProposition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [debugInfo, setDebugInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Ready');
    // Drag state for visual guides
    const [dragState, setDragState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const lastDragUpdateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [lockedAxis, setLockedAxis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Context Menu State
    const [contextMenu, setContextMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0,
        visible: false
    });
    // Clipboard State
    // Theme hook
    const { theme, toggleTheme, isDark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    // Color scheme toggle
    const [colorSchemeEnabled, setColorSchemeEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Solutions state
    const [solutions, setSolutions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLUTIONS"]);
    const [showSolutionDialog, setShowSolutionDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Canvas configuration state
    const [canvasConfig, setCanvasConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$canvasConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_CANVAS_CONFIG"]);
    // Multi-select hook
    const multiSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMultiSelect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMultiSelect"])();
    // Modifier keys
    const keys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useModifierKeys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModifierKeys"])();
    // Calculate snap guides based on current drag state (after multiSelect is defined)
    const { x: snappedX, y: snappedY, guides: snapGuides } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSnapGuides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSnapGuides"])(dragState?.id ?? null, dragState ? {
        x: dragState.x,
        y: dragState.y,
        width: dragState.width,
        height: dragState.height
    } : null, items, true, Array.from(multiSelect.selectedIds) // exclude selected items from snap calculations
    );
    // Item nudging hook
    const nudging = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useItemNudging$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useItemNudging"])({
        items,
        setItems,
        selectedIds: multiSelect.selectedIds
    });
    // Item locking hook
    const locking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useItemLocking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useItemLocking"])({
        items,
        setItems,
        selectedIds: multiSelect.selectedIds,
        setDebugInfo
    });
    // Alignment hook
    const alignment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAlignment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAlignment"])({
        items,
        setItems,
        selectedIds: multiSelect.selectedIds,
        setDebugInfo
    });
    // Clipboard hook
    const clipboardOps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useClipboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClipboard"])({
        items,
        setItems,
        selectedIds: multiSelect.selectedIds,
        selectMultiple: multiSelect.selectMultiple,
        clearSelection: multiSelect.clearSelection,
        setDebugInfo
    });
    // Solution handlers
    const handleCreateSolution = ()=>{
        if (multiSelect.selectedIds.length < 2) return;
        setShowSolutionDialog(true);
    };
    const handleSaveSolution = (solutionData)=>{
        // Get selected canvas items with their positions
        const selectedItems = items.filter((item)=>multiSelect.selectedIds.includes(item.id) && item.entityType === 'product');
        if (selectedItems.length === 0) return;
        // Calculate anchor point (top-left of bounding box)
        const minX = Math.min(...selectedItems.map((item)=>item.x));
        const minY = Math.min(...selectedItems.map((item)=>item.y));
        // Create product snapshots with relative positions
        const productSnapshots = selectedItems.map((item)=>({
                productId: item.entityId,
                relativeX: item.x - minX,
                relativeY: item.y - minY,
                config: {
                    // Per-product config can be added here later
                    licenses: undefined,
                    users: undefined
                }
            }));
        const newSolution = {
            id: `s-${Date.now()}`,
            name: solutionData.name,
            description: solutionData.description,
            productIds: solutionData.productIds,
            products: productSnapshots,
            metadata: solutionData.metadata
        };
        setSolutions((prev)=>[
                ...prev,
                newSolution
            ]);
        setDebugInfo(`Solution "${newSolution.name}" created with ${productSnapshots.length} products`);
        setShowSolutionDialog(false);
    };
    // Get selected products for solution dialog
    const getSelectedProducts = ()=>{
        return multiSelect.selectedIds.map((id)=>{
            const item = items.find((i)=>i.id === id);
            if (!item || item.entityType !== 'product') return null;
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"].find((p)=>p.id === item.entityId);
        }).filter((p)=>p !== null);
    };
    // Canvas transform (zoom & pan) hook
    const canvasTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCanvasTransform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasTransform"])({
        minZoom: 0.1,
        maxZoom: 4.0,
        zoomStep: 0.1,
        initialZoom: 1.0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasBoard.useEffect": ()=>{
            setMounted(true);
        }
    }["CanvasBoard.useEffect"], []);
    // Keyboard shortcuts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKeyboardShortcuts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeyboardShortcuts"])({
        onSelectAll: {
            "CanvasBoard.useKeyboardShortcuts": ()=>multiSelect.selectAll(items.map({
                    "CanvasBoard.useKeyboardShortcuts": (i)=>i.id
                }["CanvasBoard.useKeyboardShortcuts"]))
        }["CanvasBoard.useKeyboardShortcuts"],
        onCopy: clipboardOps.copy,
        onPaste: clipboardOps.paste,
        onDelete: clipboardOps.deleteSelected,
        onDuplicate: clipboardOps.duplicate,
        onEscape: {
            "CanvasBoard.useKeyboardShortcuts": ()=>multiSelect.clearSelection()
        }["CanvasBoard.useKeyboardShortcuts"],
        onNudgeUp: nudging.nudgeUp,
        onNudgeDown: nudging.nudgeDown,
        onNudgeLeft: nudging.nudgeLeft,
        onNudgeRight: nudging.nudgeRight,
        onGroup: alignment.group,
        onLock: locking.toggleLock,
        onZoomIn: canvasTransform.zoomIn,
        onZoomOut: canvasTransform.zoomOut,
        onZoomReset: canvasTransform.resetZoom,
        onUndo: {
            "CanvasBoard.useKeyboardShortcuts": ()=>{
                if (history.canUndo) {
                    history.undo();
                    setDebugInfo('Undo');
                }
            }
        }["CanvasBoard.useKeyboardShortcuts"],
        onRedo: {
            "CanvasBoard.useKeyboardShortcuts": ()=>{
                if (history.canRedo) {
                    history.redo();
                    setDebugInfo('Redo');
                }
            }
        }["CanvasBoard.useKeyboardShortcuts"]
    }, mounted);
    // Mouse wheel zoom listener
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasBoard.useEffect": ()=>{
            const handleWheel = {
                "CanvasBoard.useEffect.handleWheel": (e)=>{
                    // Only zoom if Ctrl/Cmd is pressed
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        const container = canvasRef.current;
                        if (!container) return;
                        const rect = container.getBoundingClientRect();
                        canvasTransform.zoomToPoint(e.clientX, e.clientY, -e.deltaY, rect);
                    }
                }
            }["CanvasBoard.useEffect.handleWheel"];
            const container = canvasRef.current;
            if (container) {
                container.addEventListener('wheel', handleWheel, {
                    passive: false
                });
                return ({
                    "CanvasBoard.useEffect": ()=>container.removeEventListener('wheel', handleWheel)
                })["CanvasBoard.useEffect"];
            }
        }
    }["CanvasBoard.useEffect"], [
        canvasTransform,
        canvasRef
    ]);
    const sensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSensors"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MouseSensor"], {
        activationConstraint: {
            distance: 5
        }
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TouchSensor"], {
        activationConstraint: {
            delay: 250,
            tolerance: 5
        }
    }));
    // Prevent hydration mismatch
    if (!mounted) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen w-full bg-gray-950 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-8 rounded-full border-2 border-blue-500 border-t-transparent animate-spin"
        }, void 0, false, {
            fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
            lineNumber: 279,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
        lineNumber: 278,
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
        }
        if (sourceData.source === 'sidebar') {
            // Check if it's a solution
            if (sourceData.type === 'solution') {
                const solution = solutions.find((s)=>s.id === sourceData.entityId);
                if (!solution) return;
                // Create all products from the solution at their relative positions
                const newItems = solution.products.map((productSnapshot, index)=>({
                        id: `item-${Date.now()}-${index}`,
                        entityId: productSnapshot.productId,
                        entityType: 'product',
                        x: finalX + productSnapshot.relativeX,
                        y: finalY + productSnapshot.relativeY,
                        data: {
                            label: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"].find((p)=>p.id === productSnapshot.productId)?.name || 'Product',
                            type: 'product',
                            entityId: productSnapshot.productId,
                            source: 'sidebar'
                        }
                    }));
                setItems((prev)=>[
                        ...prev,
                        ...newItems
                    ]);
                multiSelect.selectMultiple(newItems.map((item)=>item.id));
                setDebugInfo(`Added solution "${solution.name}" with ${newItems.length} products`);
            } else {
                // Regular product/vendor/etc
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
            }
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
                if (isMultiSelected) {
                    // Move all selected items together
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
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                lineNumber: 612,
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
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                lineNumber: 633,
                columnNumber: 19
            }, this),
            action: clipboardOps.copy,
            shortcut: 'Ctrl+C'
        },
        {
            id: 'group',
            label: multiSelect.selectedIds.length > 1 && items.filter((it)=>multiSelect.selectedIds.includes(it.id)).every((it)=>it.groupId) ? 'Ungroup' : 'Group',
            icon: multiSelect.selectedIds.length > 1 && items.filter((it)=>multiSelect.selectedIds.includes(it.id)).every((it)=>it.groupId) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ungroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ungroup$3e$__["Ungroup"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                lineNumber: 640,
                columnNumber: 143
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                lineNumber: 640,
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
            icon: multiSelect.selectedIds.length > 0 && items.filter((it)=>multiSelect.selectedIds.includes(it.id)).every((it)=>it.locked) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Unlock$3e$__["Unlock"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                lineNumber: 668,
                columnNumber: 142
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                lineNumber: 668,
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
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                lineNumber: 685,
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
    const filteredProducts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"].filter((p)=>{
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesProp = selectedProposition === 'all' || p.propositionId === selectedProposition;
        return matchesSearch && matchesProp;
    });
    const selectedItem = multiSelect.selectedIds.length === 1 ? items.find((it)=>it.id === multiSelect.selectedIds[0]) : undefined;
    const getVendorName = (vendorId)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VENDORS"].find((v)=>v.id === vendorId)?.name;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DndContext"], {
        id: "qanvas-dnd-root",
        sensors: sensors,
        onDragStart: handleDragStart,
        onDragMove: handleDragMove,
        onDragEnd: handleDragEnd,
        collisionDetection: customCollisionStrategy,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-screen w-full overflow-hidden",
                style: {
                    backgroundColor: 'var(--color-background)',
                    color: 'var(--color-text)'
                },
                onContextMenu: handleContextMenu,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$CanvasSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasSidebar"], {
                        searchQuery: searchQuery,
                        onSearchChange: setSearchQuery,
                        selectedProposition: selectedProposition,
                        onPropositionChange: setSelectedProposition,
                        propositions: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROPOSITIONS"],
                        filteredProducts: filteredProducts,
                        solutions: solutions,
                        vendors: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VENDORS"],
                        getVendorName: getVendorName,
                        canvasConfig: canvasConfig,
                        onConfigChange: setCanvasConfig
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                        lineNumber: 727,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$CanvasWorkspace$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasWorkspace"], {
                        canvasRef: canvasRef,
                        items: items,
                        selectedIds: multiSelect.selectedIds,
                        debugInfo: debugInfo,
                        vendors: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VENDORS"],
                        propositions: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROPOSITIONS"],
                        products: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"],
                        multiSelect: multiSelect,
                        snapGuides: snapGuides,
                        activeDragRect: dragState,
                        activeDragItemId: activeDragData?.id || null,
                        lockedAxis: lockedAxis,
                        isShiftPressed: keys.shift,
                        canvasTransform: canvasTransform,
                        zoom: canvasTransform.zoom,
                        onZoomIn: canvasTransform.zoomIn,
                        onZoomOut: canvasTransform.zoomOut,
                        onResetZoom: canvasTransform.resetZoom,
                        isDark: isDark,
                        onToggleTheme: toggleTheme,
                        onPan: canvasTransform.setPan,
                        colorSchemeEnabled: colorSchemeEnabled,
                        onToggleColorScheme: ()=>setColorSchemeEnabled(!colorSchemeEnabled),
                        onClearItems: ()=>{
                            setItems([]);
                            multiSelect.clearSelection();
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                        lineNumber: 741,
                        columnNumber: 17
                    }, this),
                    contextMenu.visible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$ContextMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextMenu"], {
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
                        lineNumber: 772,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$AlignmentToolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlignmentToolbar"], {
                        selectedCount: multiSelect.selectedIds.length,
                        onAlign: alignment.align,
                        onDistribute: alignment.distribute,
                        onGroup: alignment.group,
                        onLock: locking.toggleLock,
                        onCreateSolution: handleCreateSolution,
                        isGrouped: multiSelect.selectedIds.length > 0 && items.filter((it)=>multiSelect.selectedIds.includes(it.id)).every((it)=>it.groupId),
                        isLocked: multiSelect.selectedIds.length > 0 && items.filter((it)=>multiSelect.selectedIds.includes(it.id)).every((it)=>it.locked)
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                        lineNumber: 781,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$controls$2f$AxisLockIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxisLockIndicator"], {
                        isActive: keys.shift && !!dragState,
                        axis: lockedAxis
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                        lineNumber: 792,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$PropertiesPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertiesPanel"], {
                        selectedItem: selectedItem,
                        selectedCount: multiSelect.selectedCount,
                        propositions: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROPOSITIONS"],
                        vendors: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VENDORS"],
                        products: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"],
                        colorSchemeEnabled: colorSchemeEnabled
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                        lineNumber: 797,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                lineNumber: 719,
                columnNumber: 13
            }, this),
            mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DragOverlay"], {
                dropAnimation: null,
                children: activeDragData ? activeDragData.source === 'canvas' && multiSelect.selectedIds.length > 1 && multiSelect.selectedIds.includes(activeDragData.id) ? // Multi-select drag: show all selected items
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'absolute',
                                left: offsetX,
                                top: offsetY
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$CanvasItemCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasCardVisual"], {
                                item: selectedItem,
                                isSelected: true,
                                style: {
                                    transform: `scale(${canvasTransform.zoom * 1.05})`,
                                    zIndex: 100 + index,
                                    cursor: 'grabbing',
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                                    opacity: selectedId === activeDragData.id ? 1 : 0.7
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                                lineNumber: 833,
                                columnNumber: 45
                            }, this)
                        }, selectedId, false, {
                            fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                            lineNumber: 825,
                            columnNumber: 41
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                    lineNumber: 812,
                    columnNumber: 29
                }, this) : // Single item drag
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$CanvasItemCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasCardVisual"], {
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
                        transform: `scale(${canvasTransform.zoom * 1.05})`,
                        zIndex: 100,
                        cursor: 'grabbing',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' // Enhanced shadow for lift effect
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                    lineNumber: 850,
                    columnNumber: 29
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                lineNumber: 808,
                columnNumber: 17
            }, this), document.body),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$dialogs$2f$SolutionDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolutionDialog"], {
                isOpen: showSolutionDialog,
                onClose: ()=>setShowSolutionDialog(false),
                onSave: handleSaveSolution,
                selectedProducts: getSelectedProducts()
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
                lineNumber: 878,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/board/CanvasBoard.tsx",
        lineNumber: 711,
        columnNumber: 9
    }, this);
}
_s(CanvasBoard, "ymbs1XeuvxUOJMs4Btw5bLkNyLg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistory"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMultiSelect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMultiSelect"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useModifierKeys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModifierKeys"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSnapGuides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSnapGuides"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useItemNudging$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useItemNudging"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useItemLocking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useItemLocking"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAlignment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAlignment"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useClipboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClipboard"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCanvasTransform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKeyboardShortcuts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeyboardShortcuts"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSensors"]
    ];
});
_c = CanvasBoard;
var _c;
__turbopack_context__.k.register(_c, "CanvasBoard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_2274da4e._.js.map