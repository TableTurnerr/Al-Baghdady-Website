# Performance — Lighthouse capture (2026-05-21)

Real Lighthouse run (not estimated). Captured against the static `/out` build served
locally via `npx serve out -l 4321`, headless Chrome, Lighthouse default **mobile**
profile (simulated slow-4G + 4× CPU throttle).

## Homepage (`/`)

| Metric | Value | Verdict |
|--------|-------|---------|
| **Performance score** | **64 / 100** | below target |
| First Contentful Paint | 3.4 s | okay (throttled) |
| Largest Contentful Paint | **12.7 s** | ⚠️ poor — investigate |
| Total Blocking Time | 230 ms | good |
| Cumulative Layout Shift | **0** | excellent |
| Speed Index | 3.4 s | okay |

## Update 2026-05-22 — hero LCP fix applied & re-measured

**Fix:** the homepage hero is now a plain, immediately-visible prioritized `<img>` in the server HTML
(`HeroBanner.tsx`) — `fetchPriority="high"`, `loading="eager"`, explicit 1200×1500 dims — instead of the
client-swapped `SmartImage` (whose `opacity-0`-until-`onLoad` gating deferred the paint). `SmartImage`
is kept for all below-the-fold images.

**Re-measured** (same method: `npx serve out -l 4321`, headless Chrome, Lighthouse mobile profile):

| Metric | 05-21 | 05-22 | Note |
|--------|-------|-------|------|
| LCP — **observed** | (not recorded) | **1.2 s** | actual paint; hero image now loads at **32 ms** and is the discoverable LCP element |
| LCP — simulated (Lantern) | 12.7 s | 12.2 s | barely moved — see below |
| `lcp-discovery-insight` | flagged | **passes** | Lighthouse no longer flags the LCP element as undiscoverable — fix validated |
| Perf score (simulated) | 64 | 61 | within run-to-run noise |

**Why the simulated LCP didn't move but the fix is real:** the network trace shows the hero loads at
**32 ms** and *every* request finishes by **~1.3 s**, and the **observed** LCP is **1.2 s**. The 12.2 s
figure is Lighthouse's *Lantern simulation* (slow-4G + 4× CPU throttle) against localhost, diverging
~10× from observed — a known Lantern over-estimation artifact on localhost, amplified by the GA/GTM
scripts in the dependency graph. The meaningful signals — **observed LCP 1.2 s** and the now-passing
**`lcp-discovery-insight`** — both confirm the hero paints early. Per the caveat below, the trustworthy
number is the **deployed build**; re-capture there to confirm the simulated LCP also drops under a CDN.

## Reading the result

- **CLS 0 and TBT 230ms are genuinely good** — the static export + no layout jank is working.
- **LCP 12.7s is the problem and it's inconsistent with Speed Index 3.4s.** When the page
  *looks* visually complete at 3.4s but LCP fires at 12.7s, the largest element is painting
  (or being detected) late. Prime suspect: **`SmartImage`** renders a shimmer skeleton first
  and swaps in the real `<img>` client-side after hydration. For the hero (the LCP element),
  that defers the largest paint — a true prioritized `<img>` in the server HTML would let the
  browser fetch it immediately. The `priority`/`fetchPriority` props don't fully help if the
  element only mounts after JS.

## Caveats (why this isn't the final number)

- **Localhost, not a CDN.** `npx serve` sends no compression/caching tuning; a real host
  (Cloudflare/Vercel) with Brotli + cache headers will improve transfer time materially.
- **Default mobile throttle** is aggressive (slow-4G, 4× CPU). Desktop scores will be much higher.
- **Single run.** Lighthouse varies ±a few points run-to-run; a 3–5 run median is more reliable.
- Only the homepage was captured here. `/menu/`, `/bakery/`, a `/specialties/[topic]/`, and a
  `/near/[city]/` page should each be captured too.

## Recommended next steps (perf)

1. **Re-run on the deployed build** once Hasham deploys — that's the trustworthy number.
2. **Fix hero LCP**: render the above-the-fold hero image as a real prioritized `<img>`
   (or `next/image` with `priority`) in the server HTML instead of the client-swapped
   `SmartImage`, so the LCP element is discoverable in the initial response. Keep `SmartImage`
   for below-the-fold/lazy images.
3. Re-capture and confirm LCP drops under ~2.5s before claiming the §5 audit win.

_Method: `npx lighthouse http://localhost:4321/ --only-categories=performance` against the
committed `/out` build, Chrome stable, 2026-05-21._
