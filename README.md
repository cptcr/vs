# VaultScope

> Enterprise-grade VPS and dedicated servers with customizable configurations and a docs-forward onboarding flow.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Core Concepts](#core-concepts)
- [Static Assets & Metadata](#static-assets--metadata)
- [Deployment](#deployment)
- [Testing & QA](#testing--qa)
- [Contributing](#contributing)
- [License](#license)

## Overview
VaultScope is a Next.js 15 App Router project that powers the public marketing site, documentation library, and legal pages for the VaultScope infrastructure platform. It ships a highly polished marketing experience backed by typed SEO helpers, multi-language support, interactive Radix UI components, and a hand-crafted docs hub for operations teams.

## Features
- Marketing homepage with hero, feature matrix, testimonials, pricing summaries, and hardware specs.
- Multi-language (English, German, French) UI with persistent language selection across sessions.
- Deep documentation library with guided playbooks under `/docs/**`.
- Structured data + Open Graph metadata generation for every route.
- Theming built with Tailwind CSS, Radix UI primitives, and animated backgrounds.
- Accessibility affordances including skip links, keyboard-friendly navigation, cookie consent banner, and back-to-top controls.

## Tech Stack
- Next.js 15 (App Router, TypeScript, server components).
- Tailwind CSS with custom configuration (`tailwind.config.js`) and PostCSS pipeline.
- Radix UI primitives and shadcn-inspired components in `components/ui`.
- Framer Motion for animation, Lucide icons, and React Three Fiber scaffolding for future 3D scenes.
- Intl layer driven by a typed translation map in `lib/i18n.ts`.
- SEO helpers (`lib/seo.ts`) and JSON-LD builders (`lib/structured-data.ts`).
- Deployed to Cloudflare Pages via `@cloudflare/next-on-pages`, with optional Vercel Analytics instrumentation.

## Getting Started

### Prerequisites
- Node.js 18.18+ (Next.js 15 requirement).
- npm 9.x or newer.

### Installation
```bash
npm install
```

### Local Development
```bash
npm run dev
```
- Runs the Next.js dev server with App Router hot reloading.
- Default port is `http://localhost:3000`.

### Code Quality
```bash
npm run lint
```
- Uses the Next.js ESLint preset with TypeScript and accessibility rules. Resolve any reported issues before pushing changes.

### Production Build
```bash
npm run build
npm run start
```
- `npm run build` validates the production bundle.
- `npm run start` serves the compiled bundle locally for smoke testing.

### Cloudflare Pages Workflow
```bash
npm run pages:build
npm run pages:deploy
```
- Builds with `@cloudflare/next-on-pages` into `.vercel/output`.
- Deploys the static output to Cloudflare Pages via Wrangler. Ensure `.vercel/output` remains gitignored.

### Environment Configuration
- Global site metadata lives in `config/site.ts`. Update this file when brand details or base URLs change.
- Secrets live in Wrangler/Cloudflare dashboards. Do **not** commit `.env` files.

## Project Structure
```
app/
  layout.tsx              # Root layout with providers and structured data
  layout-meta.tsx         # Default metadata hook-up
  page.tsx                # Marketing homepage
  docs/                   # Documentation hub routes
  about/, security/, ...  # Marketing & legal sub-pages
components/
  hero.tsx, features.tsx, solutions.tsx, ...  # Section components
  ui/                     # Reusable UI primitives (shadcn-inspired)
  language-provider.tsx   # Client-side i18n context
config/
  site.ts                 # Brand metadata
lib/
  i18n.ts                 # Translation catalog + helpers
  seo.ts                  # Metadata builder
  structured-data.ts      # JSON-LD generators
  utils.ts                # Shared utility functions
public/
  assets/                 # Static imagery, favicons, SEO image
types/
  i18n.ts                 # Typed translation contracts
```

## Core Concepts

**App Router Layouts**  
`app/layout.tsx` establishes the global HTML skeleton, registers JSON-LD schemas, wires up the language provider, and wraps the UI with header/footer scaffolding. Individual routes export metadata using the shared `buildMetadata` helper to keep titles, descriptions, and canonical URLs consistent.

**Internationalization**  
Translations live in `lib/i18n.ts`. `LanguageProvider` and `useI18n()` expose `t()` and `getValue()` helpers to components. The selected language is stored in both `localStorage` and a `vaultscope_lang` cookie so returning visitors keep their preference. Add new languages by extending `SUPPORTED_LANGUAGES`, updating the translation map, and surfacing the language in `components/language-switcher.tsx`.

**Documentation Hub**  
The docs landing page (`app/docs/page.tsx`) curates major topics with animated cards and quick links. Subsections under `app/docs/**` provide detailed guides (getting started, billing, monitoring, troubleshooting, etc.). Use this structure to add new operational runbooks without touching marketing routes.

**SEO & Structured Data**  
`lib/seo.ts` centralizes metadata generation, ensuring every page has Open Graph, Twitter Card, and robots directives aligned with the brand. `lib/structured-data.ts` outputs organization and website JSON-LD schemas, automatically injected via `<script type="application/ld+json">` in the root layout.

**UI System**  
The project combines Tailwind CSS utility classes with Radix UI components (see `components/ui`). Higher-level sections (hero, pricing, testimonials, solutions) live directly in `components/` for reuse across routes. Animated helpers such as `WaveWrapper` and `BackgroundWave` provide the branded visual treatment.

**Accessibility & UX Enhancements**  
`components/skip-link.tsx`, `back-to-top-link.tsx`, `cookie-consent.tsx`, and navigation patterns in `components/header.tsx` keep the interface keyboard-friendly and transparent about tracking.

## Static Assets & Metadata
- All public imagery and favicons should live under `public/`. The default social sharing image is referenced via `config/site.ts -> ogImage`.
- `app/assets/seo-image.jpg` mirrors the social preview used in marketing contexts.
- Update `next-sitemap.config.js` if routes change; run the sitemap generator as part of release workflows when needed.

## Deployment
1. Run `npm run lint` and address any findings.
2. Build locally with `npm run build`; smoke test using `npm run start`.
3. For Cloudflare Pages:
   - Execute `npm run pages:build`.
   - Deploy with `npm run pages:deploy`.
   - Confirm CDN cache invalidation and site health via `https://status.vaultscope.dev`.
4. Re-run `npm run lint` if configuration values shift to catch type or import issues introduced by the deployment prep.

## Testing & QA
- Automated tests are not yet in place. Add smoke tests under `tests/` or colocate them next to components (`*.test.tsx`) using Testing Library or Playwright when introducing new features.
- Provide manual QA notes (scenarios exercised, browsers/devices checked) when opening pull requests.
- Validate SEO outputs via browser devtools when modifying `lib/seo.ts` or structured data helpers.

## Contributing
- Follow the existing two-space indentation and TypeScript-first conventions.
- Prefer named exports and keep marketing sections in `components/` or `app/**` route folders.
- Keep generated artifacts like `out/` or `.vercel/output` out of version control.
- Use imperative commit messages (e.g., `Add pricing calculator`) and reference issues when applicable (`Refs #123`).

## License
Copyright © 2025 VaultScope. All rights reserved.
https://vaultscope.dev
License: https://github.com/cptcr/vs/tree/main/LICENSE (BUSL-1.1, see: https://mariadb.com/bsl11)