import sharp from "sharp";
import { readdir } from "node:fs/promises";
import { statSync } from "node:fs";
import path from "node:path";

const DIR = "public/images/projects";
const MAX_WIDTH = 1600;
const WEBP_QUALITY = 80;

const files = await readdir(DIR);

for (const file of files) {
  if (!/\.png$/i.test(file)) continue;

  const input = path.join(DIR, file);
  const output = path.join(DIR, file.replace(/\.png$/i, ".webp"));

  try {
    const meta = await sharp(input).metadata();
    const width = Math.min(meta.width, MAX_WIDTH);
    const info = await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY })
      .toFile(output);

    const inputKB = statSync(input).size / 1024;
    console.log(
      `${file.padEnd(22)} ${Math.round(inputKB).toLocaleString("en")} KB -> ${Math.round(info.size / 1024).toLocaleString("en")} KB (${width}px, ${info.format})`
    );
  } catch (err) {
    console.error(`Failed: ${file}`, err.message);
  }
}