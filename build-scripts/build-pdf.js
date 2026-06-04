/**
 * Build the LANE PDF.
 *
 * Renders build-scripts/lane-pdf.html to public/lead-magnet/lane.pdf
 * using Puppeteer driving the system Chrome (no Chromium download).
 *
 * Run: npm run build:pdf
 */
const path = require("path")
const fs = require("fs")
const puppeteer = require("puppeteer")

const PROJECT_ROOT = path.resolve(__dirname, "..")
const HTML_PATH = path.join(PROJECT_ROOT, "build-scripts", "lane-pdf.html")
const OUT_PATH = path.join(PROJECT_ROOT, "public", "lead-magnet", "lane.pdf")

// Use the user's system Chrome (avoids the ~150MB Chromium download).
const SYSTEM_CHROME =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

async function main() {
  if (!fs.existsSync(HTML_PATH)) {
    throw new Error(`HTML template not found: ${HTML_PATH}`)
  }

  const executablePath = fs.existsSync(SYSTEM_CHROME) ? SYSTEM_CHROME : undefined

  const browser = await puppeteer.launch({
    headless: true,
    executablePath,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  })

  try {
    const page = await browser.newPage()
    const fileUrl = `file://${HTML_PATH}`
    await page.goto(fileUrl, { waitUntil: "networkidle0", timeout: 60000 })

    // Give web fonts a beat to settle before rasterizing.
    await page.evaluateHandle("document.fonts.ready")

    fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true })

    await page.pdf({
      path: OUT_PATH,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    })

    const stat = fs.statSync(OUT_PATH)
    console.log(`✓ Wrote ${OUT_PATH} (${(stat.size / 1024).toFixed(1)} KB)`)
  } finally {
    await browser.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
