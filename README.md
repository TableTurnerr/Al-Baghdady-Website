# Al-Baghdady Restaurant Website

Production-ready static Next.js 15 website for Al-Baghdady Restaurant & Bakery (Richardson, TX). Built with maximum SEO in mind — comprehensive JSON-LD structured data, per-page metadata, sitemap, and content targeting 38+ keywords from the internal SEO report.

_For template usage and onboarding a new client, see [`docs/TEMPLATE.md`](docs/TEMPLATE.md)._

## Stack

- Next.js 15 (App Router) · static export
- TypeScript 5
- Tailwind CSS 4
- Framer Motion (animations)
- Lucide React (icons)

## Routes (15)

| Route | Purpose |
|-------|---------|
| `/` | Homepage — hero, action cards, featured dishes, bakery, reviews, FAQ, location |
| `/menu/` | Full menu with category filter and Menu JSON-LD |
| `/our-story/` | Family / brand story |
| `/iraqi-cuisine/` | Guide to Iraqi dishes (samoon, masgoof, tashreeb, quzi, kanafa…) |
| `/bakery/` | In-house Arabic bakery |
| `/catering/` | Catering inquiry form (mailto submission) |
| `/faq/` | 20 FAQs with FAQPage schema |
| `/reviews/` | Press quotes + customer reviews |
| `/near/plano-tx/` | Plano hub page |
| `/near/garland-tx/` | Garland hub page |
| `/near/addison-tx/` | Addison hub page |
| `/near/north-dallas-tx/` | North Dallas hub page |
| `/near/allen-tx/` | Allen hub page |
| `/near/mckinney-tx/` | McKinney hub page |
| `/near/far-north-dallas-tx/` | Far North Dallas hub page |

## SEO Features

- Per-page `<title>`, `<meta description>`, keywords, canonical URL
- Open Graph + Twitter card metadata
- JSON-LD: Organization, WebSite, Restaurant, LocalBusiness, Menu, FAQPage, BreadcrumbList
- `aggregateRating` (1,892 reviews × 4.4★) on Restaurant schema
- `robots.txt` + full `sitemap.xml`
- PWA `manifest.json`
- Semantic HTML throughout

## Setup

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # produces /out static export
npm run serve-out    # serve the built static site
```

## Replace Before Launch

**Present in the repo (placeholders):**

- `/public/Images/hero.webp`
- `/public/Images/bakery.webp`
- `/public/Images/logo.webp`
- `/public/apple-touch-icon.png`
- `/src/app/icon.png` (Next.js auto-favicon)

**Pending client delivery:**

- `/public/Images/og-default.jpg` (1200×630 dedicated social sharing card)
- `/public/favicon.ico` (full favicon set)
- `/public/Images/icon-192.png` and `/public/Images/icon-512.png` (PWA icons)
- Real food photography for individual menu items and specialties (currently using `hero.webp` and `bakery.webp` as universal fallbacks; the TODO swap-in points are flagged in `metadata.ts` and `schema.ts`)

Until those land, the code gracefully falls back to existing files (hero.webp for OG, Next's icon.png for favicon).

## Data — Single Source of Truth

All content lives in `/src/data/`:

- `restaurant.ts` — NAP, hours, socials, areas served
- `menu.ts` — All menu items with prices and descriptions
- `faqs.ts` — 20 FAQ entries
- `neighborhoods.ts` — 7 neighborhood hub configs
- `reviews.ts` — Curated customer review quotes
- `schema.ts` — JSON-LD generator functions
- `metadata.ts` — Per-page metadata factory

Edit data once and it propagates across the site, schema, sitemap and footer.

## Deploy

Static export — deploy `/out` to any static host (Cloudflare Pages, Netlify, Vercel, S3+CloudFront).
