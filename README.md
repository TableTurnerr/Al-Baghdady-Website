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

Photography is currently rendered as styled placeholder blocks. Drop real images at:

- `/public/Images/hero-mixed-grill.webp` (hero, 1200×1500+)
- `/public/Images/og-default.jpg` (1200×630, default OG)
- `/public/Images/bakery-spread.webp` (square, bakery spotlight)
- `/public/Images/our-story.webp` (16:9, our story)
- `/public/Images/menu/*.webp` (per category — kabob-platters, shawarma, traditional, appetizers, bakery, beverages)
- `/public/Images/icon-192.png`, `/public/Images/icon-512.png` (PWA icons)
- `/public/Images/logo.png` (used in Organization schema)

Then replace the placeholder `<div>` blocks in HeroBanner, BakerySpotlight, FeaturedDishes, etc. with `<Image>` components.

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
