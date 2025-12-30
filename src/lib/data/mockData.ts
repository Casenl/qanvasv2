import { Proposition, Vendor, Product, Solution } from '@/lib/types';

/**
 * Mock data for the canvas application
 * This data represents the ITQ product catalog structure
 */

export const PROPOSITIONS: Proposition[] = [
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
    },
];

export const VENDORS: Vendor[] = [
    { id: 'v-vmware', name: 'VMware' },
    { id: 'v-microsoft', name: 'Microsoft' },
    { id: 'v-aws', name: 'AWS' },
    { id: 'v-google', name: 'Google Cloud' },
];

export const PRODUCTS: Product[] = [
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
    },
];

export const SOLUTIONS: Solution[] = [
    {
        id: 's-hybrid-workspace',
        name: 'Modern Hybrid Workspace',
        productIds: ['p-horizon', 'p-m365'],
        products: [
            {
                productId: 'p-horizon',
                relativeX: 0,
                relativeY: 0,
                config: { licenses: 100, users: 500 }
            },
            {
                productId: 'p-m365',
                relativeX: 350,
                relativeY: 0,
                config: { licenses: 500, users: 500 }
            }
        ],
        metadata: {
            licenses: 600,
            users: 500
        }
    },
];
