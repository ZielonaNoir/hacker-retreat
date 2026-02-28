# AGENTS.md

## Cursor Cloud specific instructions

**Product**: Hacker Retreat — a React SPA marketing website for WebPsy Labs. No backend, no database, no tests configured.

**Stack**: React 19 + Vite 6 + TypeScript + Tailwind CSS 4 + Three.js (WebGL shaders) + Framer Motion + React Router DOM

**Dev commands** (see `package.json`):
- `pnpm dev` — starts Vite dev server on `http://localhost:3000` (binds `0.0.0.0`)
- `pnpm build` — production build to `dist/`
- `pnpm preview` — preview production build

**Notes**:
- No ESLint or test framework is configured; there are no `lint` or `test` scripts.
- `GEMINI_API_KEY` is referenced in `vite.config.ts` but unused in source code — not required.
- pnpm may warn about ignored build scripts for `esbuild` and `msw`; this does not affect dev server or builds.
- The `bun.lock` file also exists but pnpm is the canonical package manager (per `pnpm-lock.yaml` and `vercel.json`).
