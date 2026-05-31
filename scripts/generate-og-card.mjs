// One-shot: generate /public/Images/og-card.webp (1200x630) from a real sweets photo.
// Re-run any time the base photo or brand text needs to change.
import sharp from "sharp";

const SRC = "public/Images/gallery/baklava-tiered-tray.webp";
const OUT = "public/Images/og-card.webp";
const W = 1200;
const H = 630;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="shade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0B1A12" stop-opacity="0"/>
      <stop offset="55%" stop-color="#0B1A12" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#0B1A12" stop-opacity="0.78"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#shade)"/>
  <g font-family="Georgia, 'Times New Roman', serif" fill="#FFFFFF">
    <text x="60" y="475" font-size="84" font-weight="700" letter-spacing="-2">Al-Baghdady</text>
    <text x="60" y="525" font-size="28" opacity="0.95">Authentic Iraqi Bakery &amp; Caf&#233; &#183; Richardson, TX</text>
    <text x="60" y="575" font-size="20" fill="#D9B36A" letter-spacing="4" font-weight="600">FAMILY RECIPES SINCE 1919</text>
  </g>
</svg>`;

await sharp(SRC)
  .resize(W, H, { fit: "cover", position: "centre" })
  .composite([{ input: Buffer.from(svg), top: 0, left: 0 }])
  .webp({ quality: 90 })
  .toFile(OUT);

const meta = await sharp(OUT).metadata();
console.log(`wrote ${OUT}  ${meta.width}x${meta.height}  ${meta.size ?? "?"} bytes`);
