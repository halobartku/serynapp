# Deployment Guide

## Prerequisites

1. Vercel account
2. Supabase account
3. GitHub repository connected to Vercel
4. Development environment set up

## Initial Setup

### 1. Supabase Setup

1. Create new Supabase project
```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Initialize Supabase
supabase init
```

2. Set up database schema
```bash
# Push database changes
supabase db push
```

3. Configure authentication
- Enable email authentication
- Set up OAuth providers if needed
- Configure email templates

### 2. Vercel Setup

1. Connect repository to Vercel
- Import project from GitHub
- Configure build settings

2. Set environment variables
```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## Deployment Process

### 1. Development Workflow

```bash
# Local development
npm run dev

# Preview deployment (automatic with PRs)
git push origin feature/branch

# Production deployment
git push origin main
```

### 2. Database Migrations

```bash
# Generate new migration
supabase migration new feature-name

# Apply migrations
supabase db push
```

### 3. Edge Functions

```bash
# Create new Edge Function
supabase functions new function-name

# Deploy Edge Function
supabase functions deploy function-name
```

## Monitoring & Logs

1. **Vercel Dashboard**
- Deployment status
- Function execution
- Error tracking
- Analytics

2. **Supabase Dashboard**
- Database metrics
- Auth logs
- API usage
- Storage stats

## Rollback Procedure

1. **Vercel**
- Use dashboard to rollback to previous deployment
- Instant revert capability

2. **Supabase**
- Database backups available
- Migration reversions

## Performance Optimization

1. **Vercel**
- Edge Functions
- Image Optimization
- ISR/SSG when possible

2. **Supabase**
- Database indexing
- Query optimization
- RLS policy optimization
