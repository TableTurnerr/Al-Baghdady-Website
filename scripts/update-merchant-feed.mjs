// One-shot: refresh merchant-feed.tsv with real per-product image URLs and em-dash cleanup.
// Items without a unique photo yet fall back to the closest category-appropriate real shot
// (NOT the storefront hero, which would be a Google Merchant Center policy issue).
import fs from "fs";

const FEED = "public/feeds/merchant-feed.tsv";
const BASE = "https://al-baghdady.com";

const IMAGE_BY_ID = {
  // Breakfast
  "breakfast-albaghdady-plate": "/Images/specialties/albaghdady-plate.webp",
  "breakfast-kahi-qeimar":      "/Images/specialties/kahi-qeimar.webp",
  "breakfast-baqila":           "/Images/specialties/breakfast.webp",
  "breakfast-kubba":            "/Images/menu/kubba.webp",
  "breakfast-qeimar-debes":     "/Images/specialties/breakfast.webp",
  "breakfast-chelfry":          "/Images/specialties/breakfast.webp",
  "breakfast-omlet":            "/Images/specialties/breakfast.webp",
  "breakfast-basturma":         "/Images/menu/basturma.webp",
  "breakfast-lamb-liver":       "/Images/specialties/breakfast.webp",
  "breakfast-beef-egg":         "/Images/specialties/breakfast.webp",
  "breakfast-potato-egg":       "/Images/specialties/breakfast.webp",
  "breakfast-tomato-egg":       "/Images/specialties/breakfast.webp",
  "breakfast-fried-kabab":      "/Images/specialties/breakfast.webp",
  // Sweets
  "sweets-pistachio-mabrouma":  "/Images/menu/pistachio-mabrouma.webp",
  "sweets-birds-nest":          "/Images/menu/birds-nest.webp",
  "sweets-burma":               "/Images/specialties/burma.webp",
  "sweets-mabrouma-cream":      "/Images/specialties/burma.webp", // shared until unique photo
  "sweets-pistachio-baklava":   "/Images/gallery/baklava-pistachio-plate.webp",
  "sweets-mixed-baklava":       "/Images/gallery/baklava-tiered-tray.webp",
  "sweets-walnut-baklava":      "/Images/assorted-baklava-tray.webp",
  "sweets-kanafa":              "/Images/specialties/kunafa.webp",
  "sweets-ladyfingers":         "/Images/specialties/lady-fingers.webp",
  "sweets-awama":               "/Images/menu/awama.webp",
  "sweets-dehena":              "/Images/menu/dehena.webp",
  // Bread
  "bread-samoon-4pc":           "/Images/specialties/bread.webp",
  "bread-tandoor-6pc":          "/Images/specialties/bread.webp",
  "bread-iraqi-3pc":            "/Images/menu/iraqi-bread.webp",
  "bread-1pc":                  "/Images/specialties/bread.webp",
  "bread-samoon-1pc":           "/Images/menu/samoon-single.webp",
  // Manakish / Fatayer
  "manakish-default":           "/Images/specialties/manakish.webp",
  "fatayer-spinach":            "/Images/specialties/fatayer.webp",
  "fatayer-cheese":             "/Images/specialties/fatayer.webp",
  "fatayer-meat":               "/Images/specialties/fatayer.webp",
  // Appetizers
  "app-sour-kibbeh":            "/Images/menu/leblebi.webp",
  "app-kibbeh":                 "/Images/menu/kubba.webp", // kibbeh ≈ small kubba
  "app-chickpea-soup":          "/Images/menu/leblebi.webp",
  "app-samosa":                 "/Images/specialties/samosa.webp",
  "app-egg-roll":               "/Images/specialties/samosa.webp", // closest fried savory pastry
  // Beverages
  "bev-karak-chai":             "/Images/specialties/chai.webp",
  "bev-yemeni-coffee":          "/Images/specialties/chai.webp",
  "bev-apricot-drink":          "/Images/menu/apricot-torshana.webp",
  "bev-raisin-juice":           "/Images/specialties/chai.webp",
  "bev-dried-lime-juice":       "/Images/specialties/chai.webp",
  // Ice cream
  "ice-small-cone":             "/Images/og-card.webp",
  "ice-large-cone":             "/Images/og-card.webp",
  "ice-cup":                    "/Images/og-card.webp",
};

const raw = fs.readFileSync(FEED, "utf8").trimEnd();
const lines = raw.split(/\r?\n/);
const header = lines[0].split("\t");
const colImage = header.indexOf("image_link");
const colDesc = header.indexOf("description");
const colId = header.indexOf("id");

let updated = 0, missing = [];
const out = [lines[0]];
for (let i = 1; i < lines.length; i++) {
  const cols = lines[i].split("\t");
  const id = cols[colId];
  const img = IMAGE_BY_ID[id];
  if (img) {
    cols[colImage] = `${BASE}${img}`;
    updated++;
  } else {
    missing.push(id);
  }
  // Em-dash sweep on the description column, matching the menu.ts cleanup pattern.
  if (colDesc >= 0) cols[colDesc] = cols[colDesc].replace(/\s*—\s*/g, ", ");
  out.push(cols.join("\t"));
}

fs.writeFileSync(FEED, out.join("\n") + "\n", "utf8");
console.log(`updated image_link on ${updated} of ${lines.length - 1} rows`);
if (missing.length) console.log("  missing mapping for:", missing.join(", "));
console.log(`em-dashes swept in descriptions`);
