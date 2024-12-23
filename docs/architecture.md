# Architecture Overview

## System Architecture

### Backend
- **Database & Auth**: Supabase (PostgreSQL)
- **Realtime**: Supabase Realtime
- **Storage**: Supabase Storage
- **Functions**: Edge Functions (Supabase)

### Frontend
- **Framework**: React 18+ with Next.js 14
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **State Management**: Zustand
- **Data Fetching**: React Query + Supabase Client

### Infrastructure
- **Frontend Hosting**: Vercel
- **Database & Backend**: Supabase
- **Asset Storage**: Supabase Storage
- **Authentication**: Supabase Auth

## Project Structure

```
/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Auth-required routes
│   ├── api/               # API routes
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── auth/              # Auth components
│   ├── common/            # Common UI components
│   └── features/          # Feature components
├── lib/                   # Shared utilities
│   ├── supabase/          # Supabase client
│   └── utils/             # Helper functions
├── types/                 # TypeScript types
└── public/                # Static assets
```

## Data Flow

1. Client makes request via Supabase Client or API route
2. Authentication handled by Supabase Auth
3. Data accessed through Supabase client (with RLS)
4. Real-time updates via Supabase Realtime
5. Edge Functions for complex operations

## Security Architecture

- Supabase Row Level Security (RLS)
- JWT-based authentication
- Edge middleware for route protection
- Client-side data validation
- Server-side security policies
