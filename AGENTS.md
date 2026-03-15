# AGENTS.md - Betterlist

**IMPORTANT: Use `bun` for all commands, NOT npm.**

**NEVER run `bun run build` or `bun run deploy`. Never build the project.**

## Available Scripts

```bash
bun run dev          # Start dev server (port 3000)
bun run preview      # Preview production build
bun run cf-typegen   # Generate Cloudflare types
bun run fmt          # Format code with oxfmt
bun run fmt:check    # Check formatting
```

## Tools & Libraries

- **Runtime**: Bun
- **Framework**: TanStack Start (React 19)
- **Router**: TanStack Router (file-based)
- **Data**: TanStack Query
- **Build**: Vite
- **Deploy**: Cloudflare Workers (Wrangler)
- **Auth**: Better Auth (Spotify OAuth)
- **Database**: Drizzle ORM + Cloudflare D1
- **Styling**: Tailwind CSS v4
- **UI**: Base UI + shadcn/ui
- **Icons**: Phosphor Icons
- **State**: Zustand
- **Fetch**: better-fetch
- **Validation**: Zod
- **Format**: oxfmt
