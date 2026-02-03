#!/usr/bin/env node
/**
 * Generates public/circular-text.png from public/circular-text.svg
 * Output: 600x600px PNG for retina, transparent background, matches desktop SVG text.
 */

import sharp from "sharp"
import { readFileSync } from "fs"
import { fileURLToPath } from "url"
import { dirname, join } from "path"

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, "..")
const svgPath = join(root, "public", "circular-text.svg")
const pngPath = join(root, "public", "circular-text.png")

const svg = readFileSync(svgPath, "utf8")

sharp(Buffer.from(svg))
  .resize(600, 600)
  .png({ compressionLevel: 9 })
  .toFile(pngPath)
  .then((info) => {
    console.log("Generated:", pngPath, info)
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
