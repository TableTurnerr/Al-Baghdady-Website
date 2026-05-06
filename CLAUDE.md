# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # install dependencies (multiple lockfiles warning is expected — workspace root inferred from parent)
npm run dev          # local dev at http://localhost:3000
npm run build        # static export to ./out (runs lint + type-check + SSG)
npm run serve-out    # serve the built /out directory locally
npm run lint         # next lint
```

There is no test suite. Verification is done by running `npm run build` (lint + type-check + SSG of all 15 routes) and visually checking pages with `serve-out`.

## Architecture

This is a static-exported Next.js 15 (App Router) marketing site for a single restaurant. The dominant architectural decision is **static export with all content driven from `/src/data/`** — there is no CMS, no API routes, no server runtime.

### Data layer is the source of truth (`/src/data/`)

Edit data once and it propagates across pages, JSON-LD schema, sitemap and footer. The flow is:

1. **`restaurant.ts`** — NAP, hours, socials, geo, areas served, ratingValue/reviewCount. Imported by nearly every component.
2. **`menu.ts`** — Categories with items. Drives `/menu`, homepage `FeaturedDishes` (filters `popular: true`), and `Menu` JSON-LD.
3. **`faqs.ts`** — Single FAQ array. Homepage shows `FAQS.slice(0, 6)`; `/faq` shows all. Both inject `FAQPage` schema.
4. **`neighborhoods.ts`** — Configs for `/near/[city]` dynamic route. `generateStaticParams()` reads this array.
5. **`reviews.ts`** — Curated quotes (review submission is not implemented).
6. **`schema.ts`** — Pure functions returning JSON-LD objects (`organizationSchema`, `restaurantSchema`, `menuSchema`, `faqSchema`, `breadcrumbSchema`, etc.). All schema is generated from the data files above.
7. **`metadata.ts`** — `createMetadata()` factory that returns Next.js `Metadata`. Every page calls this — never hand-roll metadata.

### SEO is the primary product

The site exists to fix a 16/100 SEO grader score (see `we-need-to-replicate-jazzy-dragon.md` plan and the source SEO report at `../ParentSite-Tableturnerr/reports-archive/al-baghdady/al-baghdady-internal-report.json`). When making changes:

- Every page must inject relevant JSON-LD via `<SchemaInjector>` (`/src/components/shared/SchemaInjector.tsx`). Schema arrays render multiple `<script type="application/ld+json">` tags.
- Every page must use `createMetadata()` for `<title>`, description, canonical, OG, Twitter.
- Every page should render `<BreadcrumbNav>` which auto-injects `BreadcrumbList` schema.
- New routes must be added to `/public/sitemap.xml` manually (it is a static file, not generated).

### Routing

Static export means `output: 'export'` + `trailingSlash: true` in `next.config.ts`. All internal links must include the trailing slash (e.g. `/menu/`, not `/menu`) — this is consistent throughout the codebase.

`/near/[city]` is the only dynamic route. It uses `generateStaticParams()` from `NEIGHBORHOODS` to pre-render all 7 neighborhood pages at build time.

### Styling

Tailwind CSS 4 with custom theme tokens in `/src/styles/globals.css` (`@theme` block). The design system is a **light theme only** — cream/sand backgrounds, maroon (`--color-primary: #8B1A1A`) and gold (`--color-gold: #C9A84C`) accents. Reusable utility classes: `.btn-primary`, `.btn-secondary`, `.btn-gold`, `.card`, `.container-pad`, `.section-pad`, `.eyebrow`. Prefer these over inline Tailwind for spacing/buttons to keep visual consistency.

`Playfair Display` is loaded from Google Fonts and used for all headings (set inline via `style={{ fontFamily: 'var(--font-display)' }}` because Tailwind 4's `@theme` font tokens aren't picked up automatically by class names in this setup).

### Component structure

- `/src/components/layout/` — `Header`, `Footer`, `BreadcrumbNav` (used on every page)
- `/src/components/home/` — Homepage sections (also reused: `FAQSection` on `/faq`, `Reviews` on `/reviews`)
- `/src/components/shared/` — `ThemeBtn`, `SchemaInjector`
- `/src/components/catering/` — `CateringForm` (mailto-based, no backend)

`Header.tsx` and `FAQSection.tsx` are `"use client"` (state). Most pages and sections are server components.

### Image handling

Images are currently rendered as styled placeholder `<div>` blocks (gradient backgrounds with the dish/page initial). Real photos go in `/public/Images/` — see README for the full path list. When swapping in real images, replace the placeholder div with `<Image>` from `next/image` (note: `next.config.ts` has `images.unoptimized: true` because static export disables the Image optimization API).

### Brand consolidation context

The SEO report flagged 3 active domains, 4 brand-name variants, 3 phone numbers and one email typo for the client. This site is the canonical replacement: one domain (`al-baghdady.com`), one brand (`Al-Baghdady Restaurant & Bakery`), one phone, one correct email. The `Organization` schema in `/src/data/schema.ts` lists the legacy variants in `alternateName` so search engines can consolidate authority. Don't introduce new brand-name variations.
