/**
 * Gating layer for the city × dish mesh.
 *
 * `MATRIX_ALLOWLIST` is the single source of truth for which (dish, city) leaf pages get
 * pre-rendered by `/(matrix)/[meshSlug]/`. Start empty. Add entries as copy + photography
 * land per leaf, not before.
 *
 * URL format: `/baklava-in-plano-tx/`, single dynamic segment, dish slug first, city slug
 * (with `-tx` suffix preserved for disambiguation) second, joined by `-in-`.
 *
 * If the URL format changes Tuesday, update `meshSlug` / `parseMeshSlug` together with
 * the diagram at docs/mesh-diagram-2026-05-18.md.
 */

import { DISHES, type Dish } from "./dishes";
import { NEIGHBORHOODS, type Neighborhood } from "./neighborhoods";

export type MatrixEntry = {
  dishSlug: string;
  citySlug: string;
  /** Unique per-(dish, city) paragraph, the localized copy that keeps each leaf non-duplicative. */
  local: string;
};

/**
 * Pre-rendered (dish, city) leaf pages. Each entry renders one HTML file via
 * `src/app/(matrix)/[meshSlug]/page.tsx` (`generateStaticParams` reads this list).
 *
 * To add a leaf: append `{ dishSlug, citySlug, local }` with a UNIQUE `local`
 * paragraph (keeps each page non-duplicative — no doorway pages). The route and
 * sitemap pick it up automatically. dishSlug must exist in DISHES; citySlug in
 * NEIGHBORHOODS. Only dishes with real search volume are matrixed — see
 * docs/density-research-2026-05-18.md and project memory.
 */
export const MATRIX_ALLOWLIST: MatrixEntry[] = [
  // Tier 1, highest-search dishes (baklava, knafeh) × highest-density cities.
  // Manakish + fatayer across the same cities are the next batch.
  {
    dishSlug: "baklava", citySlug: "plano-tx",
    local: "Plano families have made our baklava a fixture of their celebrations, Eid trays, office gifts, and weekend treats. Order fresh pistachio, walnut or mixed baklava for delivery across Plano, or have a tray boxed and ready for pickup minutes down Greenville Avenue.",
  },
  {
    dishSlug: "baklava", citySlug: "irving-tx",
    local: "From Las Colinas to south Irving, our baklava travels well, order a tray for an office function, a wedding, or a family gathering, delivered across Irving or ready for a quick pickup at our Richardson bakery.",
  },
  {
    dishSlug: "baklava", citySlug: "carrollton-tx",
    local: "Carrollton's sweet-lovers order our baklava by the tray for weddings, Eid and everyday treats. Fresh pistachio, walnut and mixed, delivered across Carrollton or boxed for pickup the same day.",
  },
  {
    dishSlug: "baklava", citySlug: "allen-tx",
    local: "Allen residents drive in for baklava made the 1919 way, and when they can't, we deliver fresh trays across Allen. Perfect for a dinner party, a gift, or a midweek craving.",
  },
  {
    dishSlug: "baklava", citySlug: "frisco-tx",
    local: "Frisco's growing Middle-Eastern community has made our baklava a go-to for celebrations and gifts. Order pistachio or mixed baklava for delivery across Frisco, or pick up a fresh tray on your way through Richardson.",
  },
  {
    dishSlug: "knafeh", citySlug: "plano-tx",
    local: "Craving hot knafeh in Plano? We make ours fresh to order, stretchy cheese, crisp phyllo, warm rose-water syrup, and deliver across Plano, though pickup is best for that straight-from-the-oven pull.",
  },
  {
    dishSlug: "knafeh", citySlug: "irving-tx",
    local: "Knafeh lovers across Irving order ours fresh to order, hot and gooey. Available for delivery throughout Irving or pickup at our Richardson bakery, eat it warm for the full effect.",
  },
  {
    dishSlug: "knafeh", citySlug: "carrollton-tx",
    local: "Our knafeh is a Carrollton favorite, melted cheese under shredded phyllo, soaked in rose-water syrup and topped with pistachio. Delivered hot across Carrollton or ready for pickup the same day.",
  },
  {
    dishSlug: "knafeh", citySlug: "allen-tx",
    local: "Allen residents searching for real knafeh near them find ours made fresh to order. Delivery across Allen is available, but pickup gets you that crisp-top, gooey-center bite at its best.",
  },
  {
    dishSlug: "knafeh", citySlug: "frisco-tx",
    local: "Frisco's knafeh fans order ours hot and fresh, cheese-filled, syrup-soaked, pistachio-crowned. Delivered across Frisco or picked up minutes away in Richardson, best eaten warm.",
  },
  {
    dishSlug: "manakish", citySlug: "plano-tx",
    local: "Plano's weekend manakish run ends here, za'atar, cheese or seasoned meat on hand-stretched flatbread, baked to order. Delivered fresh across Plano or picked up hot off the oven in Richardson.",
  },
  {
    dishSlug: "manakish", citySlug: "irving-tx",
    local: "Irving residents order our manakish (manoushe) for breakfast and gatherings, za'atar, cheese or meat, baked fresh to order. Delivery across Irving or a quick pickup nearby.",
  },
  {
    dishSlug: "manakish", citySlug: "carrollton-tx",
    local: "Our za'atar manakish is a Carrollton morning staple, hand-stretched and baked to order, delivered across Carrollton or boxed by the dozen for the office.",
  },
  {
    dishSlug: "manakish", citySlug: "allen-tx",
    local: "Allen families order manakish by the batch for weekend breakfast, za'atar, cheese and meat, fresh from the oven, with delivery across Allen.",
  },
  {
    dishSlug: "manakish", citySlug: "frisco-tx",
    local: "Frisco's manakish lovers get ours hand-stretched and baked to order, the classic za'atar bread plus cheese and meat. Delivered across Frisco or picked up in Richardson.",
  },
  {
    dishSlug: "fatayer", citySlug: "plano-tx",
    local: "Order fatayer for delivery across Plano, spinach, cheese or meat hand pies baked fresh daily. Perfect by the box for a Plano office breakfast or by the tray for a gathering.",
  },
  {
    dishSlug: "fatayer", citySlug: "irving-tx",
    local: "Irving's go-to for fatayer (sfeeha), spinach, cheese and meat pies baked fresh. Delivered across Irving or picked up hot at our Richardson bakery.",
  },
  {
    dishSlug: "fatayer", citySlug: "carrollton-tx",
    local: "Carrollton orders our fatayer by the tray, soft golden hand pies in spinach, cheese and meat. Delivery across Carrollton or same-day pickup.",
  },
  {
    dishSlug: "fatayer", citySlug: "allen-tx",
    local: "Allen residents order fatayer for breakfast and events, spinach, cheese or seasoned meat, baked fresh daily, with delivery across Allen.",
  },
  {
    dishSlug: "fatayer", citySlug: "frisco-tx",
    local: "Frisco's spinach- and meat-pie fans order our fatayer fresh, by the piece or the tray, delivered across Frisco or picked up in Richardson.",
  },

  // Tier 2, same 4 dishes × the remaining 5 cities.
  {
    dishSlug: "baklava", citySlug: "garland-tx",
    local: "Garland families order our baklava for Eid, weddings and everyday treats, fresh pistachio, walnut and mixed, delivered across Garland or boxed for same-day pickup in nearby Richardson.",
  },
  {
    dishSlug: "baklava", citySlug: "addison-tx",
    local: "Addison's business crowd orders our baklava for office gatherings and gifts, pistachio, walnut and mixed trays delivered across Addison or ready for a quick pickup.",
  },
  {
    dishSlug: "baklava", citySlug: "north-dallas-tx",
    local: "North Dallas orders our baklava by the tray for celebrations and corporate gifting, the 1919 recipe in fresh pistachio, walnut and mixed, delivered across North Dallas.",
  },
  {
    dishSlug: "baklava", citySlug: "far-north-dallas-tx",
    local: "Far North Dallas residents get our baklava delivered fresh, pistachio, walnut and mixed by the piece or the tray, made the way our family has since 1919.",
  },
  {
    dishSlug: "baklava", citySlug: "mckinney-tx",
    local: "McKinney's a drive, but our baklava is worth it, and we deliver fresh trays across McKinney for Eid, weddings and weekend treats.",
  },
  {
    dishSlug: "knafeh", citySlug: "garland-tx",
    local: "Garland's knafeh lovers order ours fresh to order, melted cheese, crisp phyllo, warm syrup and pistachio on top. Delivered hot across Garland or picked up nearby in Richardson.",
  },
  {
    dishSlug: "knafeh", citySlug: "addison-tx",
    local: "Craving hot knafeh near Addison? Ours is made fresh to order, stretchy cheese under shredded phyllo. Delivery across Addison, though pickup is best for that out-of-the-oven pull.",
  },
  {
    dishSlug: "knafeh", citySlug: "north-dallas-tx",
    local: "North Dallas orders our knafeh hot and fresh, cheese-filled, syrup-soaked and pistachio-crowned. Delivered across North Dallas or picked up minutes away.",
  },
  {
    dishSlug: "knafeh", citySlug: "far-north-dallas-tx",
    local: "Far North Dallas knafeh fans get ours made to order, crisp top, gooey cheese center, warm rose-water syrup. Delivery across Far North Dallas available.",
  },
  {
    dishSlug: "knafeh", citySlug: "mckinney-tx",
    local: "We deliver hot knafeh across McKinney, fresh to order, cheese-filled and pistachio-topped. Best eaten warm, so order ahead and we'll time it.",
  },
  {
    dishSlug: "manakish", citySlug: "garland-tx",
    local: "Garland's weekend manakish, za'atar, cheese or meat on hand-stretched flatbread, baked to order. Delivered fresh across Garland or boxed by the dozen.",
  },
  {
    dishSlug: "manakish", citySlug: "addison-tx",
    local: "Addison offices order our manakish by the box for breakfast meetings, za'atar, cheese and meat, baked to order and delivered across Addison.",
  },
  {
    dishSlug: "manakish", citySlug: "north-dallas-tx",
    local: "North Dallas orders manakish (manoushe) for weekend breakfast, za'atar bread, cheese and meat, fresh from the oven and delivered across North Dallas.",
  },
  {
    dishSlug: "manakish", citySlug: "far-north-dallas-tx",
    local: "Far North Dallas gets our hand-stretched manakish baked to order, the classic za'atar plus cheese and meat, delivered fresh.",
  },
  {
    dishSlug: "manakish", citySlug: "mckinney-tx",
    local: "McKinney families order manakish by the batch, za'atar, cheese and meat on fresh flatbread, with delivery across McKinney.",
  },
  {
    dishSlug: "fatayer", citySlug: "garland-tx",
    local: "Garland orders our fatayer by the tray, spinach, cheese and meat hand pies (sfeeha) baked fresh daily, delivered across Garland or picked up same-day.",
  },
  {
    dishSlug: "fatayer", citySlug: "addison-tx",
    local: "Addison's go-to for fatayer, spinach, cheese and meat pies baked fresh, perfect by the box for an office breakfast and delivered across Addison.",
  },
  {
    dishSlug: "fatayer", citySlug: "north-dallas-tx",
    local: "North Dallas orders fatayer for breakfast and events, soft golden hand pies in spinach, cheese and meat, delivered across North Dallas.",
  },
  {
    dishSlug: "fatayer", citySlug: "far-north-dallas-tx",
    local: "Far North Dallas gets our fatayer fresh, spinach (sabanekh), cheese and meat pies by the piece or the tray, delivered across Far North Dallas.",
  },
  {
    dishSlug: "fatayer", citySlug: "mckinney-tx",
    local: "McKinney orders our fatayer by the tray for gatherings, spinach, cheese and seasoned meat, baked fresh daily, with delivery across McKinney.",
  },

  // Samosa, the one remaining real-search-volume dish, across all 10 cities.
  {
    dishSlug: "samosa", citySlug: "plano-tx",
    local: "Plano orders our samosas by the tray for parties and quick snacks, crispy, hand-folded, meat or vegetable. Delivered across Plano or picked up hot in Richardson.",
  },
  {
    dishSlug: "samosa", citySlug: "irving-tx",
    local: "Irving's samosa fans order ours fresh and golden, meat or vegetable, fried crisp. Delivery across Irving or pickup at our Richardson bakery.",
  },
  {
    dishSlug: "samosa", citySlug: "carrollton-tx",
    local: "Carrollton orders our samosas by the dozen for gatherings, crispy outside, savory inside, meat or veg. Delivered across Carrollton or boxed for pickup.",
  },
  {
    dishSlug: "samosa", citySlug: "allen-tx",
    local: "Allen families grab our samosas for snacks and events, hand-folded and pan-fried golden, meat or vegetable, delivered across Allen.",
  },
  {
    dishSlug: "samosa", citySlug: "frisco-tx",
    local: "Frisco orders our samosas fresh by the tray, crispy meat or vegetable hand pies, delivered across Frisco or picked up in Richardson.",
  },
  {
    dishSlug: "samosa", citySlug: "garland-tx",
    local: "Garland's go-to for samosas, golden and crispy, meat or vegetable, made fresh and delivered across Garland.",
  },
  {
    dishSlug: "samosa", citySlug: "addison-tx",
    local: "Addison offices order our samosas by the box for meetings and events, crispy, hand-folded, meat or veg, delivered across Addison.",
  },
  {
    dishSlug: "samosa", citySlug: "north-dallas-tx",
    local: "North Dallas orders our samosas for parties and snacks, fried golden and crisp, meat or vegetable, delivered across North Dallas.",
  },
  {
    dishSlug: "samosa", citySlug: "far-north-dallas-tx",
    local: "Far North Dallas gets our samosas fresh, crispy hand-folded pastries, meat or vegetable, by the piece or the tray.",
  },
  {
    dishSlug: "samosa", citySlug: "mckinney-tx",
    local: "McKinney orders our samosas by the tray for gatherings, golden, crispy, meat or vegetable, with delivery across McKinney.",
  },

  // Expansion cities — Coppell, Euless, Dallas × all 5 dishes.
  {
    dishSlug: "baklava", citySlug: "coppell-tx",
    local: "Coppell orders our baklava for celebrations and gifting, fresh pistachio, walnut and mixed, made the 1919 way and delivered across Coppell.",
  },
  {
    dishSlug: "knafeh", citySlug: "coppell-tx",
    local: "Craving knafeh in Coppell? We make ours fresh to order, cheese-filled and pistachio-topped, delivered across Coppell. Best eaten warm, so order ahead and we'll time it.",
  },
  {
    dishSlug: "manakish", citySlug: "coppell-tx",
    local: "Coppell families order our za'atar manakish for weekend breakfast, hand-stretched and baked to order, delivered across Coppell.",
  },
  {
    dishSlug: "fatayer", citySlug: "coppell-tx",
    local: "Coppell orders our fatayer by the tray, spinach, cheese and meat hand pies baked fresh daily, delivered across Coppell.",
  },
  {
    dishSlug: "samosa", citySlug: "coppell-tx",
    local: "Coppell grabs our samosas for parties and snacks, crispy, hand-folded, meat or vegetable, delivered across Coppell.",
  },
  {
    dishSlug: "baklava", citySlug: "euless-tx",
    local: "Euless and the Mid-Cities order our baklava for Eid, weddings and everyday treats, fresh pistachio, walnut and mixed, delivered across the Euless area.",
  },
  {
    dishSlug: "knafeh", citySlug: "euless-tx",
    local: "Euless's halal community orders our knafeh fresh to order, cheese-filled and syrup-soaked, delivered hot across the Mid-Cities.",
  },
  {
    dishSlug: "manakish", citySlug: "euless-tx",
    local: "Euless orders our za'atar manakish for weekend mornings, hand-stretched and baked to order, with delivery across the Mid-Cities.",
  },
  {
    dishSlug: "fatayer", citySlug: "euless-tx",
    local: "Euless orders our fatayer (sfeeha) by the tray, spinach, cheese and meat pies baked fresh, delivered across the Mid-Cities.",
  },
  {
    dishSlug: "samosa", citySlug: "euless-tx",
    local: "Euless grabs our samosas for gatherings, golden and crispy, meat or vegetable, with delivery across the Euless area.",
  },
  {
    dishSlug: "baklava", citySlug: "dallas-tx",
    local: "Dallas orders our baklava by the tray for celebrations and gifts, the 1919 recipe in fresh pistachio, walnut and mixed, delivered across Dallas.",
  },
  {
    dishSlug: "knafeh", citySlug: "dallas-tx",
    local: "Dallas's knafeh lovers order ours hot and fresh, cheese-filled, syrup-soaked and pistachio-crowned, delivered across Dallas or picked up just north in Richardson.",
  },
  {
    dishSlug: "manakish", citySlug: "dallas-tx",
    local: "Dallas orders our manakish (manoushe) for weekend breakfast, za'atar, cheese and meat on hand-stretched flatbread, delivered across Dallas.",
  },
  {
    dishSlug: "fatayer", citySlug: "dallas-tx",
    local: "Dallas orders our fatayer for breakfast and events, spinach, cheese and meat hand pies baked fresh daily, delivered across Dallas.",
  },
  {
    dishSlug: "samosa", citySlug: "dallas-tx",
    local: "Dallas grabs our samosas for parties and snacks, crispy, hand-folded, meat or vegetable, delivered across Dallas.",
  },
];

/** Join a (dish, city) pair into the URL segment used by `/(matrix)/[meshSlug]/`. */
export function meshSlug(dishSlug: string, citySlug: string): string {
  return `${dishSlug}-in-${citySlug}`;
}

/** Inverse of `meshSlug`. Returns the parsed (dish, city) slugs, or null if it doesn't parse. */
export function parseMeshSlug(slug: string): { dishSlug: string; citySlug: string } | null {
  const marker = "-in-";
  const idx = slug.indexOf(marker);
  if (idx <= 0) return null;
  const dishSlug = slug.slice(0, idx);
  const citySlug = slug.slice(idx + marker.length);
  if (!dishSlug || !citySlug) return null;
  return { dishSlug, citySlug };
}

export type ResolvedMeshEntry = {
  dish: Dish;
  neighborhood: Neighborhood;
};

/** Look up the underlying data records for a mesh slug. Returns null if either side is unknown. */
export function resolveMeshEntry(slug: string): ResolvedMeshEntry | null {
  const parsed = parseMeshSlug(slug);
  if (!parsed) return null;
  const dish = DISHES.find((d) => d.slug === parsed.dishSlug);
  const neighborhood = NEIGHBORHOODS.find((n) => n.slug === parsed.citySlug);
  if (!dish || !neighborhood) return null;
  return { dish, neighborhood };
}
