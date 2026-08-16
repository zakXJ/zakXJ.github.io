import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";

const FILE = "public/images/projects/synmed-logo.svg";

const svg = await readFile(FILE, "utf8");
const match = svg.match(/xlink:href="data:image\/png;base64,([A-Za-z0-9+/=]+)"/);
if (!match) {
  console.error("No embedded PNG found");
  process.exit(1);
}

const buffer = Buffer.from(match[1], "base64");
const meta = await sharp(buffer).metadata();
console.log(`Embedded PNG: ${meta.width}x${meta.height}, ${Math.round(buffer.length / 1024)} KB`);

const optimized = await sharp(buffer)
  .resize({ width: 710, withoutEnlargement: true })
  .png({ compressionLevel: 9 })
  .toBuffer();
console.log(`Optimized PNG: ${Math.round(optimized.length / 1024)} KB`);

const base64 = optimized.toString("base64");
const newSvg = svg.replace(match[0], `xlink:href="data:image/png;base64,${base64}"`);
await writeFile(FILE, newSvg);

console.log(`SVG: ${Math.round(svg.length / 1024)} KB -> ${Math.round(newSvg.length / 1024)} KB`);