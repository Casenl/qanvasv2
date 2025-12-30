import React from 'react';

export function CanvasArea() {
    return (
        <div className="w-full h-full relative p-8">
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Drop Zone Placeholder */}
            <div className="w-full h-full border-2 border-dashed border-gray-800 rounded-3xl flex items-center justify-center text-gray-500">
                <p>Drag items here to build your architecture</p>
            </div>
        </div>
    );
}
