import React from 'react';

interface MainLayoutProps {
    sidebar?: React.ReactNode;
    canvas: React.ReactNode;
    propertiesPanel?: React.ReactNode;
}

export function MainLayout({ sidebar, canvas, propertiesPanel }: MainLayoutProps) {
    return (
        <div className="flex h-screen w-full overflow-hidden bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
            {/* Sidebar */}
            <aside className="w-80 border-r border-gray-800 bg-gray-950/50 backdrop-blur-xl flex flex-col">
                {sidebar}
            </aside>

            {/* Main Canvas Area */}
            <main className="flex-1 relative overflow-hidden bg-[radial-gradient(#333333_1px,transparent_1px)] [background-size:16px_16px]">
                {canvas}
            </main>

            {/* Properties Panel */}
            <aside className="w-96 border-l border-gray-800 bg-gray-950/50 backdrop-blur-xl flex flex-col">
                {propertiesPanel}
            </aside>
        </div>
    );
}
