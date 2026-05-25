/**
 * Hero dishes for the city × dish mesh route (`/[dish]-in-[city]/`).
 *
 * The 7 candidates below come from the 2026-05-18 brief and are PENDING
 * client confirmation on Tuesday 2026-05-19. Once confirmed:
 *   - Fill `intro` and `body` with copy from docs/content-source.md
 *   - Confirm `heroImage` paths against /public/Images/specialties/ or /public/Images/gallery/
 *   - Populate `keywords` per dish (mirror the NEIGHBORHOODS keyword shape, long-tail, city-agnostic)
 *
 * Do NOT use this list to add menu items, the bakery/breakfast menu in `menu.ts` is the
 * authoritative serving list. These entries are SEO/content surfaces only.
 */

export type Dish = {
  slug: string;
  name: string;
  /** Alternate spellings and English-equivalents, used in copy and JSON-LD `alternateName`. */
  aliases: string[];
  /** Path under /public/. TODO Tuesday: confirm or swap to /Images/specialties/<slug>.webp. */
  heroImage: string;
  /** Long-tail keywords, city-agnostic. Combined with the city-axis keyword at render time. */
  keywords: string[];
  /** Short paragraph used as the meta description seed and intro lede. */
  intro: string;
  /** Slug of the canonical `/specialties/[topic]/` page this dish maps to, if any. */
  relatedSpecialtySlug?: string;
  /** Names of menu items in `menu.ts` that should appear in the related-items section. */
  relatedMenuItemNames?: string[];
};

export const DISHES: Dish[] = [
  {
    slug: "baklava",
    name: "Baklava",
    aliases: ["Baqlawa", "Iraqi Baklava", "Arabic Baklava"],
    heroImage: "/Images/specialties/baklava.webp",
    keywords: ["baklava", "baklava near me", "pistachio baklava", "turkish baklava", "iraqi baklava", "baklava delivery", "baklava tray"],
    intro:
      "Baklava is the crown of the Iraqi sweets case, paper-thin phyllo layered with fresh pistachios and walnuts, baked golden and soaked in our family's honey syrup. We've made it the same way since 1919, sold by the piece or by the tray, in pistachio, walnut, and mixed.",
    relatedSpecialtySlug: "baklava",
    relatedMenuItemNames: ["Pistachio Baklava", "Mixed Baklava", "Walnut Baklava"],
  },
  {
    slug: "knafeh",
    name: "Knafeh",
    aliases: ["Kunafa", "Kanafa", "Kunafeh", "Kanafeh"],
    heroImage: "/Images/specialties/kunafa.webp",
    keywords: ["knafeh", "knafeh near me", "kunafa", "cheese knafeh", "hot knafeh", "iraqi knafeh", "knafeh delivery"],
    intro:
      "Knafeh (also spelled kunafa) is the Middle East's favorite warm dessert, shredded phyllo over melted cheese, soaked in rose-water syrup and crowned with crushed pistachios. We make ours fresh to order so it arrives hot: crisp on top, stretchy and gooey in the middle.",
    relatedSpecialtySlug: "kunafa",
    relatedMenuItemNames: ["Kanafa"],
  },
  {
    slug: "kahi-and-qeimar",
    name: "Kahi & Qeimar",
    aliases: ["Kahi w Qeimar", "Khagineh", "Iraqi Cream Pastry"],
    heroImage: "/Images/specialties/kahi-qeimar.webp",
    keywords: ["kahi and qeimar", "iraqi breakfast pastry", "qeimar dallas"],
    intro:
      "Kahi & Qeimar is Iraq's most-loved sweet breakfast, flaky, golden, syrup-brushed kahi pastry served with rich clotted cream (qeimar). We make it fresh every morning; for many regulars it's the first thing they order.",
    relatedSpecialtySlug: "breakfast",
    relatedMenuItemNames: ["Kahi & Qeimar (كاهي وقيمر)"],
  },
  {
    slug: "mabrouma",
    name: "Mabrouma",
    aliases: ["Mabroumeh", "Rolled Baklava", "Pistachio Mabrouma"],
    heroImage: "/Images/specialties/burma.webp",
    keywords: ["mabrouma", "rolled baklava", "pistachio mabrouma"],
    intro:
      "Mabrouma is the showpiece of the Iraqi sweets case, long strands of phyllo coiled tight around fresh pistachios, baked deep gold and finished with syrup. We make it plain, with cream, and in a premium pistachio-loaded version.",
    relatedSpecialtySlug: "baklava",
    relatedMenuItemNames: ["Mabrouma with Cream", "Pistachio Mabrouma"],
  },
  {
    slug: "samoon",
    name: "Samoon",
    aliases: ["Iraqi Bread", "Tandoor Bread", "Samoun"],
    heroImage: "/Images/specialties/bread.webp",
    keywords: ["samoon", "iraqi bread", "tandoor bread", "fresh bread"],
    intro:
      "Samoon is Iraq's traditional diamond-shaped bread, baked fresh throughout the day in our tandoor, crisp outside and pillowy soft inside. It's the everyday bread of an Iraqi table.",
    relatedSpecialtySlug: "bread",
    relatedMenuItemNames: ["Iraqi Samoon (4 pc)", "Tandoor Bread (6 pc)"],
  },
  {
    slug: "manakish",
    name: "Manakish",
    aliases: ["Manakeesh", "Manoushe", "Za'atar Bread", "Za'atar Flatbread"],
    heroImage: "/Images/specialties/manakish.webp",
    keywords: ["manakish", "manoushe", "zaatar bread", "zaatar flatbread", "cheese manakish", "manakish near me"],
    intro:
      "Manakish is hand-stretched flatbread baked fresh to order and topped with za'atar, cheese, or seasoned meat, the savory anchor of a Middle Eastern breakfast. Often searched as za'atar bread, it's a weekend staple in our Richardson bakery.",
    relatedSpecialtySlug: "manakish",
    relatedMenuItemNames: ["Manakish"],
  },
  {
    slug: "fatayer",
    name: "Fatayer",
    aliases: ["Fatayir", "Sfeeha", "Spinach Pie", "Iraqi Hand Pies"],
    heroImage: "/Images/specialties/fatayer.webp",
    keywords: ["fatayer", "sfeeha", "spinach pie", "meat pie", "cheese fatayer", "fatayer near me"],
    intro:
      "Fatayer are hand-folded savory pies baked fresh daily, spinach (sabanekh), cheese, or seasoned meat tucked into soft golden dough. Known elsewhere as sfeeha or simply spinach and meat pies, they're perfect by the box for an office breakfast or by the tray for a gathering.",
    relatedSpecialtySlug: "fatayer",
    relatedMenuItemNames: ["Fatayer (Spinach)", "Fatayer (Cheese)", "Fatayer (Meat)"],
  },
  {
    slug: "samosa",
    name: "Samosa",
    aliases: ["Samosas", "Sambousek", "Halal Samosa"],
    heroImage: "/Images/specialties/samosa.webp",
    keywords: ["samosa", "samosa near me", "halal samosa", "fried samosa", "vegetable samosa", "meat samosa", "samosa delivery"],
    intro:
      "Samosas are golden, crispy hand-folded pastries, filled with seasoned meat or spiced vegetables and pan-fried until shatteringly crisp. A perfect snack, appetizer, or party tray, made fresh at our Richardson bakery.",
    relatedSpecialtySlug: "samosa",
    relatedMenuItemNames: ["Samosa"],
  },
];

export const DISH_SLUGS = DISHES.map((d) => d.slug);
