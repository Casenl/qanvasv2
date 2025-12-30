import React from 'react';
import { Layers, Package, Database } from 'lucide-react';

export function Sidebar() {
    return (
        <div className="flex flex-col h-full">
            <div className="p-4 border-b border-gray-800">
                <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                    Qanvas
                </h2>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6">
                <div>
                    <h3 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                        <Package className="w-4 h-4" /> Vendors
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                        {/* Placeholders for Draggable Items */}
                        <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 cursor-grab hover:border-blue-500 transition-colors">
                            vmware
                        </div>
                        <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 cursor-grab hover:border-blue-500 transition-colors">
                            Microsoft
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                        <Layers className="w-4 h-4" /> Products
                    </h3>
                    <div className="space-y-2">
                        <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 cursor-grab hover:border-blue-500 transition-colors">
                            vSphere
                        </div>
                        <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 cursor-grab hover:border-blue-500 transition-colors">
                            Azure Virtual Desktop
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
