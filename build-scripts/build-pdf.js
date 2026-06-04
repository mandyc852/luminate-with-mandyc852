/**
 * Build the LANE PDFs.
 *
 * Renders:
 *   build-scripts/lane-pdf.html        -> public/lead-magnet/lane.pdf
 *   build-scripts/lane-fillable.html   -> public/lead-magnet/lane-fillable.pdf
 *
 * Uses Puppeteer driving the system Chrome (no Chromium download).
 * Chrome (~100+) preserves HTML form elements as AcroForm widgets in
 * generated PDFs, so the fillable version stays interactive in any
 * AcroForm-compatible viewer (Preview, Acrobat, Adobe Reader).
 *
 * Run: npm run build:pdf
 */
const path = require("path")
const fs = require("fs")
const puppeteer = require("puppeteer")

const PROJECT_ROOT = path.resolve(__dirname, "..")

const TASKS = [
  {
    htmlPath: path.join(PROJECT_ROOT, "build-scripts", "lane-pdf.html"),
    outPath: path.join(PROJECT_ROOT, "public", "lead-magnet", "lane.pdf"),
    label: "lane.pdf (print)",
  },
  {
    htmlPath: path.join(PROJECT_ROOT, "build-scripts", "lane-fillable.html"),
    outPath: path.join(PROJECT_ROOT, "public", "lead-magnet", "lane-fillable.pdf"),
    label: "lane-fillable.pdf (interactive)",
  },
]

const SYSTEM_CHROME =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

async function renderOne(browser, { htmlPath, outPath, label }) {
  if (!fs.existsSync(htmlPath)) {
    throw new Error(`HTML template not found: ${htmlPath}`)
  }

  // Copy the mandala image next to the HTML so relative <img src> resolves.
  const imgSrc = path.join(PROJECT_ROOT, "public", "lead-magnet", "Lead magnet.png")
  const imgDest = path.join(path.dirname(htmlPath), "Lead magnet.png")
  if (fs.existsSync(imgSrc) && !fs.existsSync(imgDest)) {
    fs.copyFileSync(imgSrc, imgDest)
  }

  const page = await browser.newPage()
  const fileUrl = `file://${htmlPath}`
  await page.goto(fileUrl, { waitUntil: "networkidle0", timeout: 60000 })
  await page.evaluateHandle("document.fonts.ready")

  fs.mkdirSync(path.dirname(outPath), { recursive: true })

  await page.pdf({
    path: outPath,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  })

  const stat = fs.statSync(outPath)
  console.log(`✓ ${label}: ${outPath} (${(stat.size / 1024).toFixed(1)} KB)`)
  await page.close()
}

async function main() {
  const executablePath = fs.existsSync(SYSTEM_CHROME) ? SYSTEM_CHROME : undefined

  const browser = await puppeteer.launch({
    headless: true,
    executablePath,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  })

  try {
    for (const task of TASKS) {
      await renderOne(browser, task)
    }
  } finally {
    await browser.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
