# Qanvas Application - Functionality Summary for UX Designer

**Created**: January 12, 2025  
**Purpose**: Comprehensive overview of implemented functionalities and entity dependencies for UX design reference

---

## Table of Contents

1. [Application Overview](#application-overview)
2. [Core Entities and Their Relationships](#core-entities-and-their-relationships)
3. [Implemented Functionalities](#implemented-functionalities)
4. [Entity Dependencies](#entity-dependencies)
5. [Data Flow Patterns](#data-flow-patterns)
6. [Planned/In Progress Features](#plannedin-progress-features)

---

## Application Overview

Qanvas is a business architecture canvas application designed for ITQ (IT Quality) to help visualize and manage technology stacks, services, and business value propositions for customer engagements. The application provides an interactive, drag-and-drop interface for configuring vendor products, services, and solutions within a canvas-based visualization system.

### Key Capabilities

- **Canvas-based visualization** of technology stacks and business value
- **Multi-tenant support** with customer and project associations
- **Collaborative features** with role-based access control
- **State management** through snapshots for scenario planning
- **Template system** for reusability and standardization
- **Hierarchical organization** of propositions, services, and solution designs

---

## Core Entities and Their Relationships

### Primary Entities

#### 1. Users
- **Purpose**: Authentication and authorization
- **Key Fields**: id, email, displayName, role, customerId
- **Roles**: admin, itq, customer, partner
- **Relationships**:
  - Owns/creates: Canvases, Projects, Snapshots, ViewTemplates
  - Linked to: Customer (for customer role users)

#### 2. Customers
- **Purpose**: Organization/company entities
- **Key Fields**: id, name, logo, contactPersons, status, industry
- **Relationships**:
  - Linked from: Users (customerId), Canvases (customerId), Snapshots (customerId)
  - Contains: Projects

#### 3. Canvases
- **Purpose**: Main workspace for configuring technology stacks
- **Key Fields**: id, name, ownerId, collaborators, editors, blockData, customerId, projectId, viewTemplateId
- **Relationships**:
  - Owned by: User (ownerId)
  - Linked to: Customer, Project, ViewTemplate
  - Contains: BlockData (vendor/product configurations)

#### 4. Vendors
- **Purpose**: Technology vendor information
- **Key Fields**: id, name, logo/logos, website, contactPerson, contactEmail
- **Relationships**:
  - Contains: Products (vendorId reference)
  - Linked to: Solutions, SolutionDesigns
  - Used in: BlockData via VendorProductConfig

#### 5. Products
- **Purpose**: Vendor product catalog items
- **Key Fields**: id, vendorId, name, description, domains, characteristics, metrics, defaultMetrics, version, technicalSpecs
- **Relationships**:
  - Belongs to: Vendor (vendorId)
  - Used in: BlockData via VendorProductConfig
  - Referenced by: SolutionDesigns (productId)

#### 6. Blocks (BlockData)
- **Purpose**: Canvas elements containing vendor/product configurations
- **Structure**: BlockData[blockId] = { vendors: VendorProductConfig[] }
- **Key Configuration**: metrics, characteristics, technicalSpecs, solutionDesignId
- **Relationships**:
  - Contains: VendorProductConfig entries
  - Belongs to: Section (via sectionsConfig)
  - Stored in: Canvases, Snapshots

#### 7. Sections
- **Purpose**: Canvas organizational units (e.g., "Tech Towers", "ITQ Services")
- **Key Fields**: id, name, blocks, color, icon, order
- **Relationships**:
  - Contains: Blocks (BlockItem[])
  - Can belong to: SectionGroup
  - Configured in: SectionsConfig array

#### 8. Section Groups
- **Purpose**: Group multiple sections together
- **Key Fields**: id, name, sectionIds, order, collapsed, hidden, styling (colors, icon)
- **Relationships**:
  - Contains: Sections (sectionIds array)
  - Can be shared as: GroupTemplate (when scope="public")
  - Stored in: SectionGroups collection

#### 9. Services
- **Purpose**: ITQ service offerings organized by proposition and phase
- **Key Fields**: id, name, description, propositions[], servicePhase, icon, color, order
- **Relationships**:
  - Contains: SolutionDesigns (serviceId reference)
  - Filtered by: Propositions (digital-workspace, hybrid-cloud, artificial-intelligence, cloud-native)
  - Organized by: EngagementPhase (consult-envision, build-implement, manage-improve)

#### 10. Solution Designs
- **Purpose**: Pre-configured solution templates for services
- **Key Fields**: id, name, serviceId, vendorId?, productId?, domains[], blockMappings, isDefault
- **Relationships**:
  - Belongs to: Service (serviceId)
  - Optionally linked to: Vendor, Product
  - Applied to: Blocks via solutionDesignId in VendorProductConfig
  - Maps to: BlockIds via blockMappings

#### 11. Snapshots
- **Purpose**: Save canvas states for scenario planning and roadmap visualization
- **Key Fields**: id, name, phase, blockData, visibleSections, expandedSections, customerId, projectId, state, stateOrder
- **Relationships**:
  - Created by: User (userId)
  - Linked to: Customer, Project, ViewTemplate
  - Contains: BlockData (complete canvas state)

#### 12. View Templates
- **Purpose**: Preset view configurations for canvas visibility
- **Key Fields**: id, name, visibleSections[], visibleBlocks[], visibleGroups[], collapsedSections[], collapsedGroups[]
- **Relationships**:
  - Created by: User (createdBy)
  - Applied to: Canvases, Snapshots

#### 13. Projects
- **Purpose**: Customer engagement projects
- **Key Fields**: id, name, description, ownerId, collaborators, phases, associatedDomains, status, budget
- **Relationships**:
  - Owned by: User (ownerId)
  - Linked to: Canvases, Snapshots
  - Associated with: Customer (implicitly)

#### 14. Propositions
- **Purpose**: Business value categories (not a separate entity, but a type filter)
- **Types**: digital-workspace, hybrid-cloud, artificial-intelligence, cloud-native
- **Relationships**:
  - Used to filter: Services (propositions array)
  - Linked to: PropositionMetrics

#### 15. Proposition Metrics
- **Purpose**: Standard metrics defined at proposition level
- **Key Fields**: id, proposition, key, label, type, icon, color, unit, order
- **Relationships**:
  - Belongs to: Proposition
  - Can be copied to: Product Metrics (via propositionMetricId reference)

#### 16. Product Metrics
- **Purpose**: Metrics specific to a product
- **Key Fields**: id, key, label, type (number/text/boolean/menu), required, unit, icon, color, order, propositionMetricId
- **Relationships**:
  - Belongs to: Product
  - Can reference: PropositionMetric (propositionMetricId)
  - Used in: BlockData (metrics array in VendorProductConfig)

---

## Implemented Functionalities

### 1. Canvas Management

#### Canvas Creation and Configuration
- Create canvas with customer and project association
- Configure canvas name and description
- Set owner and manage collaborators/editors
- Link to view templates for preset visibility

#### Canvas Structure Management
- **Sections**: Create, edit, delete sections
  - Customize colors, icons, backgrounds
  - Drag-and-drop reordering (edit mode)
  - Collapse/expand sections
  - Hide/show sections
- **Section Groups**: Group multiple sections
  - Create groups with custom styling
  - Add/remove sections from groups
  - Collapse/expand entire groups
  - Hide/show groups
  - Drag-and-drop group reordering
  - Set scope (private/public) for template sharing
- **Blocks**: Add and configure blocks within sections
  - Add blocks via modal interface
  - Drag-and-drop blocks between sections
  - Quick configuration modal for rapid product assignment
  - Block editor for detailed configuration

#### Block Configuration
- Assign vendor/products to blocks
- Configure product metrics (key-value pairs)
- Set product characteristics
- Configure technical specifications (version, model, etc.)
- Link to solution designs
- View mode settings (compact/default/full)
- Logo display options (vendor/product logos)

### 2. Vendor and Product Management (Admin)

#### Vendor Management
- **CRUD Operations**: Create, read, update, delete vendors
- **Logo Management**: 
  - Upload multiple logos per vendor
  - Set active logo
  - Logo history tracking
- **Contact Information**: Website, contact person, email
- **Search and Filter**: By name, products
- **Vendor Detail Page**: View vendor with associated products list

#### Product Management
- **CRUD Operations**: Create, read, update, delete products
- **Product Properties**:
  - Basic info (name, version, description)
  - Logo (product-specific or vendor logo)
  - Domains (compute, storage, network, etc.)
  - Product link/URL
- **Metrics Configuration**:
  - Add/edit/delete product metrics
  - Copy metrics from proposition metrics
  - Configure metric types (number, text, boolean, menu)
  - Set metric icons, colors, units
  - Define default metric values
- **Characteristics**: Define product characteristics with mandatory flags
- **Technical Specifications**: Configure default specs (version, model, etc.)
- **Product Filtering**: By vendor, search by name/description

### 3. Services and Solution Designs (Admin)

#### Services Management
- **CRUD Operations**: Create, read, update, delete services
- **Service Configuration**:
  - Name, description
  - Multiple propositions assignment (array)
  - Engagement phase assignment
  - Icon and color customization
  - Order/position setting
  - Link and image URLs
- **Service Filtering**: By proposition, by phase
- **Tree View**: Hierarchical display of services and their solution designs

#### Solution Designs Management
- **CRUD Operations**: Create, read, update, delete solution designs
- **Solution Design Configuration**:
  - Name, description
  - Service assignment (required)
  - Optional vendor/product linking
  - Domain assignments
  - Block mappings (domain → blockId mappings)
  - Default flag setting
- **Application to Canvas**: Apply solution design to blocks via selector

### 4. Propositions System

#### Proposition Filtering
- **Propositions Sidebar**: Filter services by proposition
  - Digital Workspace
  - Hybrid Cloud
  - Artificial Intelligence
  - Cloud Native
- **Multi-Select**: Select multiple propositions simultaneously
- **Service Tree View**: Display services filtered by selected propositions
- **Solution Design Selection**: Select and apply solution designs from filtered services

### 5. Snapshots System

#### Snapshot Management
- **Create Snapshots**: Save current canvas state
  - Name and phase assignment
  - State type (current, intermediate, future)
  - State order for timeline visualization
- **Snapshot Operations**:
  - Load snapshot (restore canvas state)
  - Rename snapshot
  - Delete snapshot
  - Clone snapshot (create copy for scenario planning)
  - Compare snapshots (side-by-side comparison)
- **Snapshot Data Includes**:
  - Complete blockData
  - Section visibility states
  - Section expansion states
  - Group visibility/expansion states
  - Customer and project associations
  - View template reference

#### Timeline Navigation
- Navigate through snapshots in chronological order
- Filter by phase
- Visual timeline display
- State-based organization (current → future)

### 6. View Templates

#### Template Management
- **Create Templates**: Save current view configuration
  - Name and description
  - Visible sections/groups/blocks
  - Collapsed sections/groups
- **Template Operations**:
  - Apply template to canvas
  - Edit template
  - Delete template
  - Set default template
- **Template Data**:
  - Visibility settings for all canvas elements
  - Collapse states
  - Created by tracking

### 7. Group Templates

#### Group Template System
- **Public Group Templates**: Share section group structures
  - Groups with scope="public" become shareable templates
  - Structure only (no blockData/content)
- **Template Operations**:
  - Browse public templates
  - Import template to create new group
  - Usage count tracking
  - Tags for categorization

### 8. Drag and Drop System

#### Drag Functionality
- **Grip-Based Dragging**: Only drag from grip handle (prevents accidental drags)
- **Draggable Items**:
  - Sections (within canvas)
  - Section Groups (within canvas)
  - Blocks (within/between sections)
- **Drag States**: Visual feedback during drag operations
- **Drop Targets**: Visual indication of valid drop zones

#### Edit Mode Requirement
- Drag-and-drop only enabled in edit mode
- Admin-only edit mode toggle
- All structural changes require edit mode

### 9. Customer Management (Admin)

#### Customer Operations
- **CRUD Operations**: Create, read, update, delete customers
- **Customer Properties**:
  - Name, logo
  - Industry, description
  - Contact persons (name, email, role)
  - Status (active/inactive)
  - Creation date
- **Customer Canvases**: View all canvases associated with customer

### 10. User Management (Admin)

#### User Operations
- **View Users**: List all users
- **User Properties**: Email, display name, role, customer association
- **Role Assignment**: admin, itq, customer, partner
- **Customer Linking**: Link customer role users to customer accounts

### 11. Styling Configuration (Admin)

#### Styling Management
- **Color Palette**: Manage application color palette
- **Icon Categories**: Organize icons into categories
- **Configured Icons**: 
  - Custom icons (upload SVG)
  - Icon metadata (name, category, order, color)
  - Custom icon URL storage

### 12. Proposition Metrics Management (Admin)

#### Metrics Management
- **CRUD Operations**: Create, read, update, delete proposition metrics
- **Metric Configuration**:
  - Proposition assignment
  - Key, label, description
  - Type (number, text, boolean)
  - Icon, color, unit
  - Order/position
- **Copy to Products**: Copy proposition metrics to products as product metrics

### 13. Product Characteristic Menu (Admin)

#### Menu Management
- **CRUD Operations**: Create, read, update, delete menu items
- **Menu Item Configuration**:
  - Label, action type (link/custom)
  - URL (for link actions)
  - Icon, order
  - Enabled/disabled state
- **Purpose**: Global menu actions available for products

### 14. Authentication and Authorization

#### Authentication
- Firebase Authentication integration
- Email/password authentication
- User session management
- Protected routes

#### Authorization
- **Role-Based Access Control**:
  - Admin: Full access to all features
  - ITQ: Access to canvas, limited admin features
  - Customer: Access to assigned customer data
  - Partner: Limited access
- **Canvas Permissions**:
  - Owner: Full control
  - Editor: Can modify canvas
  - Collaborator: Read-only access
  - Guest: Temporary limited access

### 15. Real-Time Data Synchronization

#### Firestore Integration
- Real-time listeners for collections
- Automatic UI updates on data changes
- Optimistic updates with error handling
- Snapshot-based data fetching

### 16. File Upload System

#### File Upload Features
- Logo uploads (vendors, products, customers)
- Custom icon uploads (SVG format)
- File validation (type, size)
- Firebase Storage integration
- Image optimization and storage

---

## Entity Dependencies

### Hierarchical Relationships

```
Users
├── Owns Canvases
│   ├── Contains BlockData
│   │   └── References VendorProductConfig
│   │       ├── References Vendor
│   │       │   └── Contains Products
│   │       ├── References Product
│   │       └── References SolutionDesign
│   │           └── Belongs to Service
│   │               └── Filtered by Propositions
│   ├── Linked to Customer
│   ├── Linked to Project
│   └── Linked to ViewTemplate
├── Creates Snapshots
│   ├── Contains BlockData (snapshot state)
│   ├── Linked to Customer
│   ├── Linked to Project
│   └── Linked to ViewTemplate
└── Creates ViewTemplates
    └── Controls visibility of Sections/Groups/Blocks
```

### Data Dependency Flow

#### Canvas Configuration Flow
1. **Customer** created → Required for canvas
2. **Vendors** created → Required for products
3. **Products** created → Linked to vendor, used in blocks
4. **Services** created → Organized by propositions and phases
5. **Solution Designs** created → Linked to services, optionally to vendors/products
6. **Canvas** created → Links to customer/project
7. **Blocks** configured → Assign vendor/products, link solution designs
8. **Snapshots** created → Save canvas state

#### Block Configuration Dependencies
- Block requires: Vendor (via VendorProductConfig)
- Block optionally requires: Product, SolutionDesign
- Product requires: Vendor, Metrics (optional), Characteristics (optional)
- SolutionDesign requires: Service
- SolutionDesign optionally requires: Vendor, Product

#### Service Hierarchy Dependencies
- SolutionDesign → Service (required)
- Service → Propositions (array, required)
- Service → EngagementPhase (required)
- SolutionDesign → Domains (array, required)
- SolutionDesign → BlockMappings (optional, maps domains to blockIds)

### Critical Dependencies

#### Cannot Delete If Referenced
- **Vendor**: Cannot delete if products exist (products reference vendorId)
- **Product**: Cannot delete if used in BlockData
- **Service**: Cannot delete if solution designs exist
- **SolutionDesign**: Can delete (blocks can reference non-existent solutionDesignId, but should be handled gracefully)
- **Customer**: Cannot delete if canvases/snapshots reference it
- **User**: Cannot delete if owns canvases/projects/snapshots

#### Optional But Recommended
- **Product Metrics**: Recommended for meaningful block configuration
- **SolutionDesign**: Recommended for standardized solution application
- **ViewTemplate**: Optional but improves UX for common views
- **Project**: Optional but recommended for engagement tracking

---

## Data Flow Patterns

### Canvas Loading Flow
1. User authenticates
2. Load user's canvases (filtered by owner/collaborator/editor)
3. Load canvas data:
   - Sections configuration
   - Section groups
   - BlockData
   - Customer, Project, ViewTemplate references
4. Load referenced entities:
   - Vendors (from BlockData vendorIds)
   - Products (from BlockData productIds)
   - SolutionDesigns (from BlockData solutionDesignIds)
5. Apply ViewTemplate visibility settings
6. Render canvas

### Snapshot Loading Flow
1. User selects snapshot
2. Load snapshot data (blockData, visibility states)
3. Replace current canvas state with snapshot data
4. Load referenced vendors/products/solutionDesigns
5. Apply snapshot's ViewTemplate (if any)
6. Render canvas in snapshot state

### Block Configuration Flow
1. User opens block configuration modal
2. Load vendors (filtered by domain if applicable)
3. User selects vendor
4. Load products for selected vendor
5. User selects product (optional)
6. Load product metrics, characteristics, technicalSpecs
7. User configures:
   - Metrics (key-value pairs)
   - Characteristics (key-value pairs)
   - Technical specs (version, model, etc.)
   - Solution design (optional)
8. Save to BlockData

### Solution Design Application Flow
1. User selects propositions (filters services)
2. Load services matching selected propositions
3. User selects service
4. Load solution designs for selected service
5. User selects solution design
6. Apply solution design:
   - Map solution design's blockMappings to canvas blocks
   - Assign vendor/product (if solution design has vendorId/productId)
   - Set solutionDesignId in BlockData
   - Apply domain-specific configurations

### Real-Time Update Flow
1. Firestore collection change detected
2. Update local state (via useFirestoreCollection hook)
3. Re-render affected components
4. Update dependent data (if necessary)
5. Preserve user's current context (selected items, open modals)

---

## Planned/In Progress Features

### 1. Pricing System
- **Status**: Planned (not yet implemented)
- **Purpose**: Add pricing information to blocks, products, services
- **Planned Features**:
  - Product pricing
  - Service pricing
  - Block-level cost calculations
  - Project budget tracking

### 2. Enhanced Snapshot Comparison
- **Status**: Partially implemented
- **Current**: Basic snapshot comparison modal
- **Planned**: 
  - Side-by-side block comparison
  - Diff visualization
  - Change tracking between snapshots

### 3. Collaboration Features
- **Status**: Partially implemented
- **Current**: Basic collaborator management
- **Planned**:
  - Real-time collaborative editing
  - Comment system
  - Activity feed
  - Invitation system improvements

### 4. Reporting and Export
- **Status**: Planned
- **Planned Features**:
  - PDF export of canvas
  - Excel export of block data
  - Custom report generation
  - Print-friendly views

### 5. Advanced Filtering
- **Status**: Partially implemented
- **Current**: Basic filtering by proposition, phase
- **Planned**:
  - Multi-criteria filtering
  - Saved filter presets
  - Advanced search

### 6. Service Bundles and Add-Ons
- **Status**: Data model exists, UI pending
- **Current**: ServiceBundleConfig and AddOnConfig types defined
- **Planned**: UI for managing service bundles and add-ons

---

## Key Implementation Notes for UX Design

### Edit Mode vs View Mode
- **Edit Mode**: Required for structural changes (drag-drop, create/edit/delete sections/groups/blocks)
- **View Mode**: Standard mode for viewing and configuring block content
- **Toggle**: Edit mode toggle in header (admin-only)
- **Save**: Explicit "Save All Changes" button in edit mode

### Modal Workflows
- **Quick Config Modal**: Rapid vendor/product assignment to blocks
- **Block Editor Modal**: Detailed block configuration
- **Section/Group Editor Modal**: Section/group property editing
- **Snapshot Manager Modal**: Snapshot CRUD operations
- **Solution Design Selector**: Service/solution design selection and application
- **Template Browser**: Browse and import group templates

### Data Consistency
- **Real-time Updates**: UI updates automatically when data changes
- **Optimistic Updates**: UI updates immediately, reverts on error
- **Loading States**: Loading indicators during data fetching
- **Error Handling**: Toast notifications for errors

### Permission Considerations
- **Admin Features**: Clearly marked, only accessible to admin role
- **Owner vs Editor**: Owner can delete, editor can modify
- **Customer Access**: Limited to assigned customer data
- **Public vs Private**: Group templates can be public (shareable) or private

### Responsive Design Considerations
- Canvas supports responsive layout
- Modals adapt to screen size
- Drag-and-drop works on touch devices (grip handle approach)
- Mobile-friendly navigation and menus

---

## Summary

This application provides a comprehensive platform for managing and visualizing technology stacks, services, and business value propositions. The core functionality revolves around the canvas-based visualization system, with extensive support for vendor/product management, service organization, snapshot-based scenario planning, and collaborative features.

The entity relationships are hierarchical and well-defined, with clear dependencies that must be considered when designing user workflows. The application emphasizes flexibility through templates, snapshots, and customizable configurations while maintaining data integrity through proper relationship management.

For UX design, key considerations include:
- Clear separation between edit and view modes
- Modal-based workflows for configuration
- Real-time data synchronization feedback
- Permission-aware UI elements
- Responsive design for various screen sizes
- Intuitive drag-and-drop interactions

