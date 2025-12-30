# Qanvas - Tech Stack and Architecture Best Practices

**Created**: January 12, 2025  
**Purpose**: Comprehensive guide to technology stack, architecture patterns, and best practices for designing and implementing solutions

---

## Table of Contents

1. [Technology Stack](#technology-stack)
2. [Architecture Overview](#architecture-overview)
3. [Design Principles](#design-principles)
4. [Code Organization Patterns](#code-organization-patterns)
5. [Data Layer Architecture](#data-layer-architecture)
6. [API Design Patterns](#api-design-patterns)
7. [Component Architecture](#component-architecture)
8. [State Management Patterns](#state-management-patterns)
9. [Security Architecture](#security-architecture)
10. [Performance Best Practices](#performance-best-practices)
11. [Testing Strategy](#testing-strategy)
12. [Deployment and DevOps](#deployment-and-devops)

---

## Technology Stack

### Frontend Framework & Core

#### Next.js 16.0 (App Router)
- **Version**: 16.0.0
- **Router**: App Router (not Pages Router)
- **Key Features Used**:
  - Server Components (default)
  - Client Components (with "use client" directive)
  - API Routes (app/api directory)
  - Route Handlers
  - Dynamic Routes with async params
  - Server Actions (planned)
- **Benefits**:
  - Server-side rendering and static generation
  - Built-in API routes
  - Automatic code splitting
  - Image optimization
  - SEO optimization

#### React 19.2
- **Version**: 19.2.0
- **Key Features**:
  - Server Components support
  - Enhanced hooks (useActionState, useFormStatus)
  - Concurrent rendering
  - Automatic batching
- **Pattern**: Functional components with hooks

#### TypeScript 5.3
- **Configuration**: Strict mode enabled
- **Target**: ES6
- **Module Resolution**: bundler
- **Key Principles**:
  - No `any` types
  - Strict type checking
  - Proper interface definitions
  - Type inference where appropriate

### Styling & UI

#### Tailwind CSS 4.1
- **Version**: 4.1.9
- **Approach**: Utility-first CSS framework
- **Configuration**: Custom design tokens
- **Patterns**:
  - Mobile-first responsive design
  - Consistent spacing scale
  - Custom color palette
  - Component-based class composition
- **PostCSS**: Tailwind PostCSS plugin

#### Radix UI
- **Components Used**: 25+ Radix UI primitives
- **Pattern**: Headless, accessible component primitives
- **Key Components**:
  - Dialog, Dropdown Menu, Select
  - Accordion, Collapsible, Tabs
  - Toast, Tooltip, Popover
  - Form controls (Checkbox, Radio, Switch)
- **Benefits**:
  - Accessibility built-in
  - Unstyled, fully customizable
  - Keyboard navigation
  - Focus management

#### Lucide React
- **Purpose**: Icon library
- **Version**: 0.454.0
- **Usage**: Primary icon system
- **Pattern**: Icon map for centralized icon management

### Forms & Validation

#### React Hook Form 7.60
- **Purpose**: Form state management
- **Pattern**: Uncontrolled components with validation
- **Integration**: Zod schema validation

#### Zod 3.25
- **Purpose**: Schema validation and type inference
- **Usage**: API validation, form validation, type-safe schemas
- **Pattern**: Define schemas once, use for validation and TypeScript types

### Data & State

#### Firebase 11.0
- **Services Used**:
  - **Firestore**: NoSQL database
  - **Authentication**: User auth
  - **Storage**: File storage
  - **Analytics**: Usage tracking
- **Client SDK**: Browser/client components
- **Admin SDK**: Server-side operations

#### Firebase Admin 13.0
- **Purpose**: Server-side Firebase operations
- **Usage**: API routes, server components
- **Security**: Service account authentication

### Utilities & Helpers

#### date-fns 4.1
- **Purpose**: Date manipulation and formatting
- **Pattern**: Functional, immutable date operations

#### clsx & tailwind-merge
- **Purpose**: Conditional class name composition
- **Pattern**: Merge Tailwind classes safely

#### class-variance-authority
- **Purpose**: Component variant management
- **Pattern**: Type-safe component variants

### Development Tools

#### Package Manager: pnpm
- **Benefits**: Faster, disk-efficient
- **Lock File**: pnpm-lock.yaml

#### Linting: ESLint
- **Configuration**: Next.js recommended rules
- **Usage**: Code quality and consistency

#### Type Checking: TypeScript Compiler
- **Command**: `npm run type-check`
- **Configuration**: Strict mode

### Hosting & Deployment

#### Vercel
- **Platform**: Primary hosting platform
- **Integration**: Native Next.js support
- **Features**:
  - Automatic deployments
  - Edge functions
  - Analytics integration
  - Environment variable management

---

## Architecture Overview

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         Client Layer                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │   Next.js    │  │    React     │  │  Components  │     │
│  │   App Router │  │     19.2     │  │   (Radix UI) │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │          Client-Side State Management               │    │
│  │  (React State, Custom Hooks, Context API)          │    │
│  └────────────────────────────────────────────────────┘    │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       │ HTTP/REST
                       │
┌──────────────────────▼──────────────────────────────────────┐
│                      API Layer                               │
│  ┌────────────────────────────────────────────────────┐    │
│  │           Next.js API Routes                        │    │
│  │  (/api/*) - Authentication, Validation, Rate Limit │    │
│  └────────────────────┬───────────────────────────────┘    │
│                       │                                      │
│  ┌────────────────────▼───────────────────────────────┐    │
│  │              Service Layer                          │    │
│  │  (Business Logic, Data Transformation)             │    │
│  └────────────────────┬───────────────────────────────┘    │
└───────────────────────┼─────────────────────────────────────┘
                        │
                        │
┌───────────────────────▼─────────────────────────────────────┐
│                    Data Layer                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │  Firestore   │  │  Firebase    │  │  Firebase    │     │
│  │   Database   │  │   Storage    │  │    Auth      │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└─────────────────────────────────────────────────────────────┘
```

### Architecture Patterns

#### 1. Layered Architecture
- **Client Layer**: UI components, client-side state
- **API Layer**: Route handlers, authentication, validation
- **Service Layer**: Business logic, data transformation
- **Data Layer**: Firebase services (Firestore, Storage, Auth)

#### 2. Component-Based Architecture
- **Atomic Design**: Components organized by complexity
- **Composition**: Small, reusable components
- **Separation of Concerns**: Logic separated from presentation

#### 3. Service-Oriented Architecture
- **Service Classes**: Business logic encapsulation
- **Dependency Injection**: Services injected where needed
- **Single Responsibility**: Each service handles one domain

#### 4. Repository Pattern (Implicit)
- **Firestore Collections**: Direct access via Firebase SDK
- **Service Layer**: Abstracts data access complexity
- **Custom Hooks**: Reusable data fetching patterns

---

## Design Principles

### 1. Type Safety First
- **Principle**: TypeScript strict mode, no `any` types
- **Implementation**:
  - All interfaces defined in `lib/types.ts` or `lib/canvas-types.ts`
  - Type inference where appropriate
  - Type guards for runtime validation
  - Zod schemas for validation and type inference

### 2. Security by Default
- **Principle**: Security built into every layer
- **Implementation**:
  - Authentication required for all protected routes
  - Authorization checks after authentication
  - Input sanitization and validation
  - CSRF protection on state-changing operations
  - Rate limiting on API routes
  - Firestore security rules

### 3. Code Reusability
- **Principle**: DRY (Don't Repeat Yourself)
- **Implementation**:
  - Shared utility functions in `lib/`
  - Custom hooks for repeated patterns
  - Reusable UI components
  - Service layer for business logic

### 4. Separation of Concerns
- **Principle**: Clear boundaries between layers
- **Implementation**:
  - Client components handle UI only
  - API routes handle HTTP/authentication
  - Services handle business logic
  - Firebase handles data persistence

### 5. Progressive Enhancement
- **Principle**: Core functionality works, enhanced features improve UX
- **Implementation**:
  - Server Components by default
  - Client Components only when needed
  - Graceful degradation for unsupported features

### 6. Accessibility First
- **Principle**: Accessible by default
- **Implementation**:
  - Radix UI primitives (built-in accessibility)
  - ARIA attributes where needed
  - Keyboard navigation support
  - Screen reader compatibility

### 7. Performance Optimization
- **Principle**: Fast initial load and interactions
- **Implementation**:
  - Server-side rendering
  - Code splitting
  - Image optimization
  - Lazy loading
  - Memoization where appropriate

---

## Code Organization Patterns

### Directory Structure

```
Qanvas/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   ├── canvas/
│   │   ├── group-templates/
│   │   ├── upload/
│   │   └── users/
│   ├── admin/                    # Admin pages
│   ├── vendors/                  # Vendor pages
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home/canvas page
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── admin/                    # Admin-specific components
│   ├── canvas/                   # Canvas-specific components
│   └── ui/                       # Reusable UI components
├── lib/                          # Utilities and config
│   ├── firebase.ts               # Firebase client SDK
│   ├── firebase-admin.ts         # Firebase Admin SDK
│   ├── types.ts                  # TypeScript types
│   ├── canvas-types.ts           # Canvas-specific types
│   ├── api-auth.ts               # API authentication
│   ├── validation.ts             # Validation utilities
│   └── utils.ts                  # General utilities
├── hooks/                        # Custom React hooks
│   ├── use-firestore-collection.ts
│   ├── use-canvas-state.ts
│   ├── use-drag-and-drop.ts
│   └── use-toast.ts
├── services/                     # Business logic services
│   ├── canvas.service.ts
│   └── group-templates.service.ts
├── public/                       # Static assets
├── docs/                         # Documentation
└── scripts/                      # Utility scripts
```

### File Naming Conventions

#### Components
- **Format**: PascalCase
- **Examples**: `BlockCard.tsx`, `SnapshotManagerModal.tsx`
- **Pattern**: Descriptive, component-focused names

#### Utilities and Hooks
- **Format**: kebab-case
- **Examples**: `use-firestore-collection.ts`, `canvas-utils.ts`
- **Pattern**: Descriptive, action-focused names

#### API Routes
- **Format**: kebab-case folders, `route.ts` file
- **Examples**: `app/api/group-templates/route.ts`
- **Pattern**: RESTful resource names

#### Types
- **Format**: camelCase for types, PascalCase for interfaces
- **Examples**: `UserRole`, `VendorProductConfig`
- **Pattern**: Singular, descriptive names

### Import Organization

```typescript
// 1. React and Next.js imports
import React from 'react'
import { NextRequest, NextResponse } from 'next/server'

// 2. Third-party library imports
import { collection, doc, getDoc } from 'firebase/firestore'

// 3. Internal utility imports
import { db } from '@/lib/firebase'
import { requireAuth } from '@/lib/api-auth'

// 4. Type imports
import type { User, Vendor } from '@/lib/types'

// 5. Component imports
import { Card } from '@/components/admin/Card'
```

### Component Structure Pattern

```typescript
// 1. Imports
import React from 'react'
import type { ComponentProps } from '@/lib/types'

// 2. Interface/Type definitions
interface ComponentNameProps {
  // Props definition
}

// 3. Component implementation
export function ComponentName({ prop1, prop2 }: ComponentNameProps) {
  // Hooks
  // State
  // Effects
  // Handlers
  // Render
  return (
    // JSX
  )
}
```

---

## Data Layer Architecture

### Firebase Client SDK (Browser)

#### Usage Pattern
```typescript
// lib/firebase.ts - Client SDK initialization
import { getFirestore } from 'firebase/firestore'
export const db = getFirestore(app)

// Component usage
import { db } from '@/lib/firebase'
import { collection, getDocs } from 'firebase/firestore'
```

#### When to Use
- Client-side components
- Real-time listeners (onSnapshot)
- User-initiated data operations
- Direct Firestore queries from client

### Firebase Admin SDK (Server)

#### Usage Pattern
```typescript
// lib/firebase-admin.ts - Admin SDK initialization
import { getFirestore } from 'firebase-admin/firestore'
export const adminDb = getFirestore()

// API route usage
import { adminDb } from '@/lib/firebase-admin'
```

#### When to Use
- API routes (app/api/**)
- Server Components
- Server Actions
- Operations requiring elevated permissions

### Data Fetching Patterns

#### 1. Real-Time Subscriptions (Client)
```typescript
// Custom hook pattern
const { data, loading, error } = useFirestoreCollection<Vendor>(
  'vendors',
  {
    filters: [{ field: 'status', operator: '==', value: 'active' }],
    orderByField: { field: 'name', direction: 'asc' },
    enabled: true,
  }
)
```

#### 2. API Route Pattern (Server)
```typescript
// app/api/resource/route.ts
export async function GET(request: NextRequest) {
  const user = await requireAuth(request)
  const { adminDb } = await import('@/lib/firebase-admin')
  
  const snapshot = await adminDb.collection('resource').get()
  const data = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
  
  return NextResponse.json(createSuccessResponse(data))
}
```

#### 3. Service Layer Pattern
```typescript
// services/resource.service.ts
export class ResourceService {
  static async getResource(id: string) {
    const { adminDb } = await import('@/lib/firebase-admin')
    const doc = await adminDb.collection('resources').doc(id).get()
    return doc.exists ? { id: doc.id, ...doc.data() } : null
  }
}

// API route usage
import { ResourceService } from '@/services/resource.service'
const resource = await ResourceService.getResource(id)
```

### Firestore Data Patterns

#### Document Structure
```typescript
// Standard document structure
interface Document {
  id: string                    // Document ID
  // Domain fields
  createdAt: Timestamp          // Server timestamp
  updatedAt: Timestamp          // Server timestamp
}

// Usage
await addDoc(collection(db, 'collection'), {
  ...data,
  createdAt: serverTimestamp(),
  updatedAt: serverTimestamp(),
})
```

#### Query Patterns
- **Indexed Queries**: All queries must use indexed fields
- **Composite Indexes**: Defined in `firestore.indexes.json`
- **Query Constraints**: Use where(), orderBy(), limit()
- **Real-time Updates**: Use onSnapshot() for live data

---

## API Design Patterns

### Route Handler Structure

```typescript
// Standard API route pattern
import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/api-auth'
import { withRateLimit } from '@/lib/api-rate-limit'
import { validateInput } from '@/lib/validation'
import { createSuccessResponse, createErrorResponse } from '@/lib/api-types'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // 1. Rate limiting
  return withRateLimit(request, async () => {
    try {
      // 2. Authentication
      const user = await requireAuth(request)
      
      // 3. Await params (Next.js 15 requirement)
      const { id } = await params
      
      // 4. Input validation
      if (!id) {
        return NextResponse.json(
          createErrorResponse('ID required'),
          { status: 400 }
        )
      }
      
      // 5. Authorization check
      // ... check user permissions
      
      // 6. Business logic
      const result = await performOperation(id)
      
      // 7. Response
      return NextResponse.json(createSuccessResponse(result))
    } catch (error) {
      return handleApiError(error)
    }
  })
}
```

### Request Handling Order

1. **Rate Limiting** - Prevent abuse
2. **Authentication** - Verify user identity
3. **Parameter Resolution** - Await dynamic route params
4. **Input Validation** - Validate and sanitize input
5. **Authorization** - Check user permissions
6. **Business Logic** - Perform operation
7. **Response** - Return standardized response

### Response Format

#### Success Response
```typescript
{
  success: true,
  data: {
    // Response data
  },
  metadata: {
    timestamp: "2025-01-12T10:00:00Z"
  }
}
```

#### Error Response
```typescript
{
  success: false,
  error: {
    message: "User-friendly error message",
    code: "ERROR_CODE",
    details: {
      // Additional error details (optional)
    }
  },
  metadata: {
    timestamp: "2025-01-12T10:00:00Z"
  }
}
```

### Status Codes

- **200**: Success
- **201**: Created (POST success)
- **400**: Bad Request (validation error)
- **401**: Unauthorized (not authenticated)
- **403**: Forbidden (authenticated but no permission)
- **404**: Not Found
- **429**: Too Many Requests (rate limit exceeded)
- **500**: Internal Server Error

### Authentication Pattern

```typescript
// lib/api-auth.ts
export async function requireAuth(
  request: NextRequest,
  options?: { allowedRoles?: UserRole[] }
) {
  const token = extractToken(request)
  if (!token) {
    throw new ApiError(401, 'Authentication required')
  }
  
  const { adminAuth } = await import('@/lib/firebase-admin')
  const decodedToken = await adminAuth.verifyIdToken(token)
  
  // Role check if specified
  if (options?.allowedRoles) {
    const userDoc = await adminDb.collection('users').doc(decodedToken.uid).get()
    const userRole = userDoc.data()?.role
    if (!options.allowedRoles.includes(userRole)) {
      throw new ApiError(403, 'Insufficient permissions')
    }
  }
  
  return decodedToken
}
```

### Rate Limiting Pattern

```typescript
// lib/api-rate-limit.ts
export function withRateLimit(
  request: NextRequest,
  handler: () => Promise<NextResponse>
) {
  // Check rate limit
  // Return 429 if exceeded
  // Otherwise call handler
}
```

---

## Component Architecture

### Component Types

#### 1. Server Components (Default)
- **Pattern**: No "use client" directive
- **Use Cases**:
  - Data fetching
  - Static content
  - Server-side rendering
  - Access to server-only APIs

#### 2. Client Components
- **Pattern**: "use client" directive at top
- **Use Cases**:
  - Interactivity (onClick, onChange)
  - Browser APIs (localStorage, window)
  - State management (useState, useEffect)
  - Real-time subscriptions

### Component Composition

```typescript
// Container Component (Client)
"use client"
export function ContainerComponent() {
  const [state, setState] = useState()
  
  // Data fetching via hook
  const { data } = useFirestoreCollection<Type>('collection')
  
  return (
    <ServerRenderedContent data={data} />
  )
}

// Presentational Component
export function PresentationalComponent({ data }: Props) {
  return (
    <div>
      {data.map(item => <Item key={item.id} item={item} />)}
    </div>
  )
}
```

### Custom Hooks Pattern

```typescript
// hooks/use-resource.ts
export function useResource(id: string) {
  const [data, setData] = useState<Resource | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  
  useEffect(() => {
    // Fetch data
    // Handle loading/error states
  }, [id])
  
  return { data, loading, error, refetch }
}
```

### Component Props Pattern

```typescript
// Interface definition above component
interface ComponentProps {
  // Required props
  id: string
  name: string
  
  // Optional props
  description?: string
  onAction?: (id: string) => void
  
  // Children
  children?: React.ReactNode
}

// Component implementation
export function Component({
  id,
  name,
  description,
  onAction,
  children
}: ComponentProps) {
  // Implementation
}
```

---

## State Management Patterns

### 1. Local Component State
- **Tool**: useState hook
- **Use Case**: Component-specific state
- **Pattern**: Keep state as close to usage as possible

### 2. Context API
- **Tool**: createContext, useContext
- **Use Case**: Global state shared across components
- **Examples**: Authentication context, theme context

### 3. Custom Hooks
- **Pattern**: Encapsulate stateful logic
- **Use Case**: Reusable stateful logic
- **Examples**: useFirestoreCollection, useCanvasState

### 4. URL State
- **Tool**: Next.js searchParams, router
- **Use Case**: Shareable, bookmarkable state
- **Pattern**: Use URL for navigation state

### 5. Server State
- **Tool**: Firestore real-time listeners
- **Use Case**: Data that needs to stay in sync
- **Pattern**: useFirestoreCollection hook

---

## Security Architecture

### Authentication Flow

```
Client Request
    ↓
API Route
    ↓
requireAuth() → Verify Firebase ID Token
    ↓
Check User Role/Permissions
    ↓
Proceed with Operation
```

### Authorization Layers

1. **Route-Level**: ProtectedRoute component
2. **API-Level**: requireAuth() in API routes
3. **Data-Level**: Firestore security rules
4. **Component-Level**: Conditional rendering based on role

### Input Validation

```typescript
// Validation pattern
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email(),
})

// Usage
const validated = schema.parse(input)
```

### Security Best Practices

1. **Never trust client input** - Always validate server-side
2. **Sanitize user content** - Escape HTML, validate URLs
3. **Use parameterized queries** - Prevent injection attacks
4. **Implement rate limiting** - Prevent abuse
5. **Use HTTPS only** - Encrypt data in transit
6. **Firestore security rules** - Enforce data access rules
7. **CSRF protection** - Validate CSRF tokens on mutations

---

## Performance Best Practices

### 1. Code Splitting
- **Automatic**: Next.js handles route-based splitting
- **Manual**: Dynamic imports for large components
- **Pattern**: `const Component = dynamic(() => import('./Component'))`

### 2. Image Optimization
- **Tool**: Next.js Image component
- **Pattern**: Use `next/image` for all images
- **Configuration**: Configured in `next.config.mjs`

### 3. Data Fetching Optimization
- **Server Components**: Fetch data on server when possible
- **Caching**: Use appropriate cache strategies
- **Pagination**: Limit query results
- **Indexes**: Ensure Firestore indexes for queries

### 4. Component Optimization
- **Memoization**: Use React.memo() for expensive components
- **useMemo/useCallback**: Memoize computed values and callbacks
- **Lazy Loading**: Load components on demand

### 5. Bundle Optimization
- **Tree Shaking**: Remove unused code
- **Minification**: Compress JavaScript/CSS
- **Compression**: Enable gzip/brotli compression

---

## Testing Strategy

### Unit Testing
- **Framework**: Browser-based test runner (planned)
- **Scope**: Utility functions, hooks, components
- **Pattern**: Test behavior, not implementation

### Integration Testing
- **Scope**: API routes, service layer
- **Pattern**: Test with Firebase emulator
- **Tools**: Firebase emulator suite

### E2E Testing
- **Status**: Planned
- **Scope**: Critical user flows
- **Tools**: Playwright or Cypress (to be determined)

### Manual Testing Checklist
- Authentication flows
- Authorization checks
- Input validation
- Error handling
- Security testing (XSS, injection, etc.)

---

## Deployment and DevOps

### Environment Variables

#### Client (NEXT_PUBLIC_*)
- Firebase client SDK configuration
- Public API endpoints
- Analytics IDs

#### Server (No prefix)
- Firebase Admin SDK credentials
- Secret keys
- Database connection strings

### Build Process

```bash
# Development
pnpm dev

# Production build
pnpm build

# Production start
pnpm start

# Type checking
pnpm type-check

# Linting
pnpm lint
```

### Deployment Pipeline

1. **Code Push** → Git repository
2. **CI/CD** → Vercel (automatic)
3. **Build** → Next.js build process
4. **Deploy** → Vercel edge network
5. **Health Check** → Verify deployment

### Firebase Deployment

```bash
# Deploy Firestore rules
pnpm firebase:deploy:rules

# Deploy Firestore indexes
pnpm firebase:deploy:indexes

# Deploy all
pnpm firebase:deploy:all
```

---

## Best Practices Summary

### When Designing Solutions

1. **Start with Types** - Define interfaces first
2. **Plan Security** - Consider auth/authz from the start
3. **Think Reusability** - Extract common patterns
4. **Consider Performance** - Optimize data fetching
5. **Test Early** - Write tests alongside code
6. **Document Decisions** - Explain why, not just what

### Code Quality Checklist

- [ ] TypeScript strict mode compliance
- [ ] No `any` types
- [ ] Proper error handling
- [ ] Input validation
- [ ] Authentication/authorization
- [ ] Rate limiting (API routes)
- [ ] Consistent naming conventions
- [ ] Comments for complex logic
- [ ] Unit tests for critical functions

### Architecture Decision Records

When making significant architectural decisions:

1. **Context**: What is the situation?
2. **Decision**: What did you decide?
3. **Consequences**: What are the implications?
4. **Alternatives**: What else was considered?

---

## Resources and References

### Official Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Firebase Documentation](https://firebase.google.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs)

### Project-Specific Documentation
- `docs/firestore-collections.md` - Database schema
- `docs/20250112-Functionality_Summary_for_UX_Designer.md` - Feature overview
- `docs/20251110-1038 - Project Setup and Architecture.md` - Setup guide

### Internal Patterns
- `lib/api-auth.ts` - Authentication patterns
- `services/*.service.ts` - Service layer examples
- `hooks/use-*.ts` - Custom hook examples
- `app/api/*/route.ts` - API route examples

---

## Version History

### 2025-01-12
- Initial comprehensive tech stack and architecture documentation
- Added design principles and best practices
- Documented code organization patterns
- Included security and performance guidelines

