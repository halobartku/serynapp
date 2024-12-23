# Development Setup Guide

## Prerequisites

- Node.js (v18+)
- Git
- VS Code (recommended)
- Supabase CLI

## Environment Setup

1. Clone the repository:
```bash
git clone https://github.com/halobartku/serynapp.git
cd serynapp
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

4. Start development server:
```bash
npm run dev
```

## Supabase Local Development

1. Start Supabase locally:
```bash
supabase start
```

2. Access local services:
- Studio: http://localhost:54323
- API: http://localhost:54321
- Database: localhost:54322

## VS Code Configuration

Recommended extensions:
- ESLint
- Prettier
- Prisma
- GitLens
- Tailwind CSS IntelliSense

## Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm test:watch
```

## Development Workflow

1. Create feature branch
2. Make changes
3. Run tests
4. Submit pull request

## Common Issues

1. Supabase connection issues
- Verify environment variables
- Check Supabase status

2. Next.js build errors
- Clear .next directory
- Verify dependencies

3. Type errors
- Run type checking: npm run type-check
- Update generated types
