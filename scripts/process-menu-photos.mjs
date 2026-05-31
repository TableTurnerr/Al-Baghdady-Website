// One-shot: convert the dropped PNGs to WebP, rename to dish slugs, delete sources.
import sharp from "sharp";
import fs from "fs";
import path from "path";

const DIR = "public/Images/menu";

const MAP = {
  "ChatGPT Image May 30, 2026, 06_13_06 PM.png": "kubba.webp",
  "ChatGPT Image May 30, 2026, 06_13_22 PM.png": "awama.webp",
  "ChatGPT Image May 30, 2026, 06_26_33 PM.png": "birds-nest.webp",
  "ChatGPT Image May 30, 2026, 06_36_27 PM.png": "leblebi.webp",
  "ChatGPT Image May 30, 2026, 06_38_29 PM.png": "pistachio-mabrouma.webp",
  "ChatGPT Image May 30, 2026, 06_57_53 PM.png": "dehena.webp",
  "ChatGPT Image May 30, 2026, 07_03_19 PM.png": "iraqi-bread.webp",
  "ChatGPT Image May 30, 2026, 07_09_47 PM.png": "apricot-torshana.webp",
  "ChatGPT Image May 30, 2026, 07_12_02 PM.png": "samoon-single.webp",
  "ChatGPT Image May 30, 2026, 07_14_37 PM.png": "basturma.webp",
};

const SKIP = "ChatGPT Image May 30, 2026, 07_04_28 PM.png"; // AI-generated basturma, not authentic

let totalIn = 0, totalOut = 0;
for (const [src, dst] of Object.entries(MAP)) {
  const srcPath = path.join(DIR, src);
  const dstPath = path.join(DIR, dst);
  const inSize = fs.statSync(srcPath).size;
  totalIn += inSize;
  await sharp(srcPath)
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(dstPath);
  const outSize = fs.statSync(dstPath).size;
  totalOut += outSize;
  console.log(`  ${dst.padEnd(28)}  ${(inSize/1024).toFixed(0).padStart(5)} KB -> ${(outSize/1024).toFixed(0).padStart(4)} KB`);
  fs.unlinkSync(srcPath);
}

// Also delete the AI-generated basturma source so it doesn't ship in /public/.
const skipPath = path.join(DIR, SKIP);
if (fs.existsSync(skipPath)) {
  fs.unlinkSync(skipPath);
  console.log(`  (deleted unused AI-generated basturma source: ${SKIP})`);
}

console.log(`\ntotal: ${(totalIn/1024/1024).toFixed(1)} MB -> ${(totalOut/1024/1024).toFixed(2)} MB`);
