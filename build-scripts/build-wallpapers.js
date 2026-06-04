/**
 * Build the LANE wallpapers (phone + desktop).
 *
 * Spec called for sharp + SVG. We use Puppeteer + HTML screenshots instead:
 * sharp's SVG renderer (librsvg) does not reliably honor Google Fonts,
 * and the whole impact of these wallpapers is Cormorant Garamond italic.
 * End artifact is identical to spec; path is just less brittle.
 *
 * Run: npm run build:wallpapers
 */
const path = require("path")
const fs = require("fs")
const puppeteer = require("puppeteer")

const PROJECT_ROOT = path.resolve(__dirname, "..")
const OUT_DIR = path.join(PROJECT_ROOT, "public", "lead-magnet")

const SYSTEM_CHROME =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

const QUESTION = "Am I working on the lever or the noise?"
const ATTRIBUTION = "— MANDYC."

function wallpaperHtml({ width, height, questionPx, questionTopPct }) {
  // questionTopPct: vertical center of the question block, as % of height
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,400;1,500&family=Poppins:wght@500&display=swap" rel="stylesheet" />
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    width: ${width}px;
    height: ${height}px;
    background: #0F1A24;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .stage {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .block {
    position: absolute;
    top: ${questionTopPct}%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 92%;
    text-align: center;
  }
  .question {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-weight: 400;
    font-style: italic;
    font-size: ${questionPx}px;
    color: #FAF9F7;
    line-height: 1.25;
    letter-spacing: 0.005em;
    text-align: center;
    max-width: 90%;
    margin: 0 auto;
  }
  .rule {
    width: 80px;
    height: 1px;
    background: #C9A227;
    margin: ${Math.round(questionPx * 0.9)}px auto ${Math.round(questionPx * 0.35)}px auto;
    border: 0;
  }
  .attribution {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: ${Math.round(questionPx * 0.22)}px;
    color: #C9A227;
    letter-spacing: 0.3em;
    text-transform: uppercase;
  }
</style>
</head>
<body>
  <div class="stage">
    <div class="block">
      <p class="question">${QUESTION}</p>
      <hr class="rule" />
      <p class="attribution">${ATTRIBUTION}</p>
    </div>
  </div>
</body>
</html>`
}

async function renderWallpaper(browser, { width, height, questionPx, questionTopPct, outName }) {
  const page = await browser.newPage()
  await page.setViewport({ width, height, deviceScaleFactor: 1 })
  const html = wallpaperHtml({ width, height, questionPx, questionTopPct })
  await page.setContent(html, { waitUntil: "networkidle0", timeout: 60000 })
  await page.evaluateHandle("document.fonts.ready")

  const outPath = path.join(OUT_DIR, outName)
  fs.mkdirSync(OUT_DIR, { recursive: true })
  await page.screenshot({ path: outPath, type: "png", omitBackground: false })
  const stat = fs.statSync(outPath)
  console.log(`✓ Wrote ${outPath} (${width}×${height}, ${(stat.size / 1024).toFixed(1)} KB)`)
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
    // Phone: iPhone 14/15 Pro — question above center to clear lock-screen clock
    await renderWallpaper(browser, {
      width: 1170,
      height: 2532,
      questionPx: 88,
      questionTopPct: 55,
      outName: "wallpaper-phone.png",
    })

    // Desktop: 2560×1440 — centered both axes
    await renderWallpaper(browser, {
      width: 2560,
      height: 1440,
      questionPx: 96,
      questionTopPct: 50,
      outName: "wallpaper-desktop.png",
    })
  } finally {
    await browser.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
