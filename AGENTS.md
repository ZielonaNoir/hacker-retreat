# AGENTS.md

## Cursor Cloud specific instructions

This is a **static React SPA** (Hacker Retreat / WebPsy Labs marketing site) with no backend, no database, and no external API dependencies.

### Key commands

| Task | Command |
|------|---------|
| Install deps | `pnpm install` |
| Dev server | `pnpm dev` (port 3000, host 0.0.0.0) |
| Production build | `pnpm build` |
| Type check | `npx tsc --noEmit` |
| Preview build | `pnpm preview` |

### Notes

- There is no ESLint config or lint script in `package.json`. Use `npx tsc --noEmit` for static analysis.
- There are no automated test scripts. Manual browser testing is the primary verification method.
- `pnpm install` may warn about ignored build scripts for `esbuild` and `msw`. This does not affect dev server operation since Vite bundles its own esbuild.
- The `GEMINI_API_KEY` env var is referenced in `vite.config.ts` but not consumed by any component; it is safe to omit.
- Routes: `/` (Home), `/about` (About), `/contact` (Contact).
