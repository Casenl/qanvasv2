import { LayerDefinition, ArchitectureLayer } from './types';

export const ARCHITECTURE_LAYERS: LayerDefinition[] = [
    { id: 'presentation', label: 'Presentation Layer', color: '#3B82F6', order: 1 },
    { id: 'application', label: 'Application Layer', color: '#8B5CF6', order: 2 },
    { id: 'data', label: 'Data Layer', color: '#10B981', order: 3 },
    { id: 'infrastructure', label: 'Infrastructure Layer', color: '#F59E0B', order: 4 },
    { id: 'security', label: 'Security Layer', color: '#EF4444', order: 5 },
    { id: 'network', label: 'Network Layer', color: '#6366F1', order: 6 },
];

export function getLayerColor(layerId: ArchitectureLayer): string {
    return ARCHITECTURE_LAYERS.find(l => l.id === layerId)?.color || '#6B7280';
}

export function getLayerLabel(layerId: ArchitectureLayer): string {
    return ARCHITECTURE_LAYERS.find(l => l.id === layerId)?.label || 'Unknown Layer';
}
