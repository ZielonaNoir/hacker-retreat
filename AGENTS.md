# AGENTS.md

## Cursor Cloud specific instructions

This is a **static React SPA** (Hacker Retreat / WebPsy Labs marketing site) with no backend, no database, and no external API dependencies. Package manager is **bun**.

### Key commands

| Task | Command |
|------|---------|
| Install deps | `bun install` |
| Dev server | `bun run dev` (port 3000, host 0.0.0.0) |
| Production build | `bun run build` |
| Type check | `bunx tsc --noEmit` |
| Preview build | `bun run preview` |

### Notes

- There is no ESLint config or lint script in `package.json`. Use `bunx tsc --noEmit` for static analysis.
- There are no automated test scripts. Manual browser testing is the primary verification method.
- The `GEMINI_API_KEY` env var is referenced in `vite.config.ts` but not consumed by any component; it is safe to omit.
- Routes: `/` (Home), `/about` (About), `/contact` (Contact).
- bun is installed at `~/.bun/bin/bun`; the PATH entry is in `~/.bashrc`.
