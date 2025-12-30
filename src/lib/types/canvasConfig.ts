// Canvas-level configuration for core metrics
export interface CanvasConfiguration {
    coreMetrics: {
        // Users
        namedUsers?: number;
        concurrentUsers?: number;

        // Infrastructure
        virtualHosts?: number;
        physicalHosts?: number;
        cpus?: number;
        cores?: number;
        clusters?: number;

        // Applications
        applications?: number;

        // Other
        other?: number;
    };
}

// Default configuration
export const DEFAULT_CANVAS_CONFIG: CanvasConfiguration = {
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

// Metric metadata for UI
export interface MetricMetadata {
    key: keyof CanvasConfiguration['coreMetrics'];
    label: string;
    icon: string;
    description: string;
    category: 'users' | 'infrastructure' | 'applications' | 'other';
}

export const METRIC_DEFINITIONS: MetricMetadata[] = [
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
