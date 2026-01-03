export type PropositionType = 'digital-workspace' | 'hybrid-cloud' | 'artificial-intelligence' | 'cloud-native';

export interface Proposition {
    id: PropositionType;
    label: string;
    icon?: string;
    color?: string;
}

export interface Vendor {
    id: string;
    name: string;
    logo?: string;
}

export interface Product {
    id: string;
    vendorId: string;
    propositionId: PropositionType;
    name: string;
    description?: string;
    version?: string;
    logo?: string;
}

export interface Solution {
    id: string;
    name: string;
    description?: string;
    productIds: string[]; // For backward compatibility
    products: {
        productId: string;
        relativeX: number; // Position relative to solution anchor
        relativeY: number;
        config?: {
            licenses?: number;
            users?: number;
        };
    }[];
    metadata?: {
        licenses?: number; // Total for solution
        users?: number; // Total for solution
    };
}

export type EntityType =
    | 'vendor'
    | 'product'
    | 'solution'
    | 'layer'
    // Drawing tools
    | 'shape'
    | 'line'
    | 'arrow'
    | 'pen'
    // Content tools
    | 'text'
    | 'sticky-note'
    | 'image'
    | 'frame'
    | 'comment';

// Architecture Layers (for organizing components)
export type ArchitectureLayer = 'presentation' | 'application' | 'data' | 'infrastructure' | 'security' | 'network';

export interface LayerDefinition {
    id: ArchitectureLayer;
    label: string;
    color: string;
    order: number; // Visual stacking order
}

export interface CanvasItem {
    id: string;
    entityId: string;
    entityType: EntityType;
    x: number;
    y: number;
    layer?: ArchitectureLayer; // Which architectural layer this belongs to
    groupId?: string; // ID of the group this item belongs to
    locked?: boolean; // Whether this item is locked (can't be moved/edited)
    rotation?: number; // Rotation in degrees
    productConfig?: import('./types/productConfig').ProductInstanceConfig; // Product-specific metrics
    data: any; // Context-specific data
}

// Connection between components (for showing data flow)
export interface Connection {
    id: string;
    sourceId: string; // Canvas item ID
    targetId: string; // Canvas item ID
    label?: string;
    type?: 'data-flow' | 'dependency' | 'integration';
}
