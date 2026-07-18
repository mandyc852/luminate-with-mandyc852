import { DIMENSIONS } from "../lib/content"
import { BANDS } from "../lib/scoring"
import { INSIGHTS } from "../lib/insights"

// Print-ready 8-page version of The Executive Readiness Diagnostic,
// matching the v2 content brief. Generated into a static PDF via
// Chrome headless. Delivered as the email-capture artifact on the
// /executive-readiness results screen.
//
// To regenerate the PDF after edits:
//   1. dev server running on :3001
//   2. /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
//        --headless --disable-gpu --no-pdf-header-footer \
//        --print-to-pdf="public/lead-magnet/executive-readiness-diagnostic.pdf" \
//        http://localhost:3001/executive-readiness/print
//   3. commit the new PDF binary.

export const metadata = {
  title: "The Executive Readiness Diagnostic — MandyC.",
  robots: { index: false, follow: false },
}

export default function ExecutiveReadinessPrintPage() {
  return (
    <div className="print-doc">
      <style>{`
        @page { size: Letter; margin: 0; }
        html, body { margin: 0; padding: 0; background: #ffffff; }
        body { font-family: Georgia, 'Times New Roman', serif; color: #1a2a3a; }

        .page {
          width: 8.5in;
          height: 11in;
          padding: 0.85in 0.95in;
          box-sizing: border-box;
          position: relative;
          page-break-after: always;
          page-break-inside: avoid;
        }
        .page:last-child { page-break-after: auto; }

        .eyebrow {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 9pt;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #a68a1f;
          margin: 0 0 14pt 0;
        }
        .gold-rule {
          height: 2px;
          background: linear-gradient(90deg, #a68a1f 0%, #c9a227 50%, #d4b84a 100%);
          width: 60pt;
          margin: 0 0 22pt 0;
          border: 0;
        }

        h1.cover-title {
          font-family: Georgia, serif;
          font-size: 38pt;
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: -0.01em;
          color: #ffffff;
          margin: 0 0 18pt 0;
        }
        .cover-sub {
          font-family: Georgia, serif;
          font-style: italic;
          font-size: 13pt;
          line-height: 1.4;
          color: rgba(255,255,255,0.85);
          margin: 0 0 36pt 0;
          max-width: 5in;
        }
        .cover-byline {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 8.5pt;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
          line-height: 1.7;
        }

        /* Dark pages */
        .dark {
          background: #1a2a3a;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .dark .eyebrow { color: #d4b84a; }
        .dark .gold-rule { width: 80pt; margin-bottom: 28pt; }
        .dark .footer { color: rgba(255,255,255,0.45); }
        .dark h2 { color: #ffffff; }
        .dark p { color: rgba(255,255,255,0.85); }

        /* Standard pages */
        h2.section-title {
          font-family: Georgia, serif;
          font-size: 24pt;
          font-weight: 400;
          line-height: 1.15;
          color: #1a2a3a;
          margin: 0 0 18pt 0;
        }
        .body-p {
          font-size: 11pt;
          line-height: 1.6;
          color: #3d4f5f;
          margin: 0 0 12pt 0;
          max-width: 5.6in;
        }
        .pull-quote {
          font-family: Georgia, serif;
          font-style: italic;
          font-size: 13pt;
          line-height: 1.4;
          color: #1a2a3a;
          padding-left: 14pt;
          border-left: 2px solid #c9a227;
          margin: 18pt 0;
          max-width: 5.6in;
        }

        /* Dimension pages */
        .dim-eyebrow {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 9pt;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #a68a1f;
          margin: 0 0 8pt 0;
        }
        h2.dim-title {
          font-family: Georgia, serif;
          font-size: 22pt;
          font-weight: 400;
          line-height: 1.15;
          color: #1a2a3a;
          margin: 0 0 14pt 0;
        }
        .dim-intro {
          font-size: 10.5pt;
          line-height: 1.55;
          color: #3d4f5f;
          margin: 0 0 18pt 0;
          max-width: 5.6in;
        }
        .qa-label {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 8pt;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #a68a1f;
          margin: 0 0 5pt 0;
        }
        .question {
          font-family: Georgia, serif;
          font-size: 12pt;
          font-weight: 400;
          font-style: italic;
          line-height: 1.4;
          color: #1a2a3a;
          margin: 0 0 14pt 0;
          padding-left: 12pt;
          border-left: 2px solid #c9a227;
          max-width: 5.6in;
        }
        .options {
          margin: 0 0 16pt 0;
        }
        .option {
          font-size: 10pt;
          line-height: 1.45;
          color: #3d4f5f;
          margin: 0 0 8pt 0;
          padding-left: 22pt;
          position: relative;
          max-width: 5.6in;
        }
        .option .num {
          position: absolute;
          left: 0;
          top: 0;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 9pt;
          font-weight: 700;
          color: #a68a1f;
          letter-spacing: 0.1em;
        }
        .reflect {
          font-size: 10pt;
          font-style: italic;
          line-height: 1.5;
          color: #5a6a7a;
          margin: 0 0 14pt 0;
          max-width: 5.6in;
        }
        .insight {
          background: #f8f7f4;
          padding: 12pt 14pt;
          border-left: 2px solid #c9a227;
          font-size: 10pt;
          line-height: 1.55;
          color: #3d4f5f;
          max-width: 5.6in;
        }

        /* Bands */
        .band {
          margin: 0 0 14pt 0;
          padding: 12pt 14pt;
          border-left: 3px solid #c9a227;
          background: #f8f7f4;
          max-width: 5.6in;
        }
        .band-head {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 9pt;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #a68a1f;
          margin: 0 0 6pt 0;
        }
        .band-name {
          font-family: Georgia, serif;
          font-size: 14pt;
          color: #1a2a3a;
          margin: 0 0 7pt 0;
        }
        .band-text {
          font-size: 10pt;
          line-height: 1.55;
          color: #3d4f5f;
          margin: 0;
        }

        /* Closing */
        .closing-cta {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 11pt;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #d4b84a;
          margin-top: 30pt;
        }
        .credentials {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 8.5pt;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          margin-top: 50pt;
          line-height: 1.8;
        }
        .disclaimer {
          font-size: 8pt;
          font-style: italic;
          color: rgba(255,255,255,0.4);
          margin-top: 40pt;
          max-width: 5in;
        }

        /* Footer */
        .footer {
          position: absolute;
          left: 0.95in;
          right: 0.95in;
          bottom: 0.5in;
          display: flex;
          justify-content: space-between;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 8pt;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #8a96a3;
        }
      `}</style>

      {/* ============ PAGE 1 — COVER ============ */}
      <section className="page dark">
        <p className="eyebrow">MandyC. · Capital Markets Advisory</p>
        <hr className="gold-rule" />
        <h1 className="cover-title">The Executive Readiness Diagnostic</h1>
        <p className="cover-sub">
          A 10-minute self-assessment for executives whose companies are preparing to
          raise, restructure, or list.
        </p>
        <div className="cover-byline">
          Mandy Cheung · SFC Type 6 Licensed<br />
          IPOs, M&amp;As &amp; Restructurings · US$500M+ in Deal Value<br />
          HKEX &amp; NASDAQ
        </div>
        <div className="footer">
          <span>mandyc.me</span>
          <span>Executive Readiness Diagnostic</span>
        </div>
      </section>

      {/* ============ PAGE 2 — WHY THIS EXISTS ============ */}
      <section className="page">
        <p className="eyebrow">Why this exists</p>
        <hr className="gold-rule" />
        <h2 className="section-title">Most companies don&apos;t fail at the capital event itself.</h2>
        <p className="body-p">They fail in the 6 to 18 months leading up to it.</p>
        <p className="body-p">
          Lawyers catch structural gaps. Auditors catch financial ones. The gaps that
          actually kill the raise or the listing live somewhere else: in the leader.
        </p>
        <p className="body-p">
          The CEO who can&apos;t hold the line when a board member pushes hard. The
          founder who freezes when due diligence surfaces something ugly. The executive
          whose decision quality degrades as pressure compresses. The leader running on
          adrenaline by month 14.
        </p>
        <p className="pull-quote">
          This diagnostic surfaces those gaps. Not in your cap table. In you.
        </p>
        <p className="body-p">
          It won&apos;t tell you what your auditor should tell you. It will show you
          where your leadership will be tested when the deal gets hard, and whether
          your current operating system can hold it.
        </p>
        <div className="footer">
          <span>mandyc.me</span>
          <span>2</span>
        </div>
      </section>

      {/* ============ PAGE 3 — HOW TO USE THIS ============ */}
      <section className="page">
        <p className="eyebrow">How to use this</p>
        <hr className="gold-rule" />
        <h2 className="section-title">5 dimensions. 5 scored questions.<br />5 reflection prompts.</h2>
        <p className="body-p">Each dimension has three layers:</p>

        <p className="body-p" style={{ marginTop: "14pt" }}>
          <strong style={{ color: "#1a2a3a" }}>Score.</strong> One question, scored 0 to 3.
          Be honest. There&apos;s no prize for inflating.
        </p>
        <p className="body-p">
          <strong style={{ color: "#1a2a3a" }}>Reflect.</strong> A prompt that points
          you at your own experience. Not scored. No right answer. What you notice is
          data.
        </p>
        <p className="body-p">
          <strong style={{ color: "#1a2a3a" }}>Learn.</strong> An insight based on
          patterns across 60+ capital-market transactions. This is what typically shows
          up in a deal room when a leader carries this gap.
        </p>

        <p className="body-p" style={{ marginTop: "24pt" }}>
          <strong>Total time:</strong> 10 minutes.
          <br />
          <strong>Total possible score:</strong> 15 points.
        </p>
        <p className="body-p">
          Your score determines your readiness band, and what kind of work sits between
          you and the capital event.
        </p>

        <div className="footer">
          <span>mandyc.me</span>
          <span>3</span>
        </div>
      </section>

      {/* ============ PAGES 4–8 — THE 5 DIMENSIONS ============ */}
      {DIMENSIONS.map((dim, i) => {
        const insight = INSIGHTS[dim.id]?.low || ""
        return (
          <section key={dim.id} className="page">
            <p className="dim-eyebrow">Dimension {dim.id} of 5</p>
            <hr className="gold-rule" />
            <h2 className="dim-title">{dim.name}</h2>
            <p className="dim-intro">{dim.intro}</p>

            <p className="qa-label">Score</p>
            <p className="question">{dim.question}</p>
            <div className="options">
              {dim.options.map((opt) => (
                <p key={opt.score} className="option">
                  <span className="num">{opt.score}</span>
                  {opt.label}
                </p>
              ))}
            </div>

            <p className="qa-label">Reflect</p>
            <p className="reflect">{dim.reflection}</p>

            <p className="qa-label">What this dimension reveals</p>
            <div className="insight">{insight}</div>

            <div className="footer">
              <span>mandyc.me</span>
              <span>{i + 4}</span>
            </div>
          </section>
        )
      })}

      {/* ============ PAGE 9 — YOUR SCORE / BANDS ============ */}
      <section className="page">
        <p className="eyebrow">Your score</p>
        <hr className="gold-rule" />
        <h2 className="section-title">Total possible: 15 points.</h2>
        <p className="body-p" style={{ marginBottom: "20pt" }}>
          5 questions × 3 max. Your readiness band, and what sits between you and the
          capital event:
        </p>

        {BANDS.map((band) => (
          <div key={band.key} className="band">
            <p className="band-head">{band.range} · {band.name}</p>
            <p className="band-text">{band.paragraph}</p>
          </div>
        ))}

        <div className="footer">
          <span>mandyc.me</span>
          <span>9</span>
        </div>
      </section>

      {/* ============ PAGE 10 — WHAT YOUR PATTERN REVEALS ============ */}
      <section className="page">
        <p className="eyebrow">What your pattern reveals</p>
        <hr className="gold-rule" />
        <h2 className="section-title">Your total tells you how far out you are.</h2>
        <p className="body-p">
          Your lowest dimension tells you what will be tested first.
        </p>
        <p className="body-p">
          Look at where you scored lowest. That&apos;s the gap that surfaces under real
          deal pressure. Not because the other dimensions don&apos;t matter. Because
          this is the one your current system doesn&apos;t cover.
        </p>
        <p className="pull-quote">
          If you want to talk through what you found, book a call at mandyc.me. The
          call is for fit exploration, not a pitch.
        </p>
        <div className="footer">
          <span>mandyc.me</span>
          <span>10</span>
        </div>
      </section>

      {/* ============ PAGE 11 — BACK COVER ============ */}
      <section className="page dark">
        <p className="eyebrow" style={{ color: "#d4b84a" }}>About</p>
        <hr className="gold-rule" />
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "22pt",
            fontWeight: 400,
            margin: "0 0 18pt 0",
            color: "#ffffff",
            lineHeight: 1.2,
          }}
        >
          Mandy Cheung
        </h2>
        <p
          style={{
            fontSize: "11pt",
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.85)",
            margin: "0 0 14pt 0",
            maxWidth: "5.5in",
          }}
        >
          Mandy Cheung is a capital markets advisor based in Hong Kong. SFC Type 6
          licensed, 10+ years across HKEX and NASDAQ — IPOs, M&amp;As, and restructurings,
          US$500M+ in deal value. She works with executives running companies that are preparing
          to raise, restructure, or list. Her work sits at the intersection of capital
          strategy and the leader&apos;s operating system.
        </p>
        <p className="closing-cta">mandyc.me</p>
        <p className="credentials">
          SFC Type 6 Licensed · HKEX &amp; NASDAQ<br />
          IPOs, M&amp;As &amp; Restructurings · US$500M+ in Deal Value
        </p>
        <p className="disclaimer">
          This diagnostic is for informational purposes. It is not legal, tax, or
          investment advice.
        </p>
        <div className="footer">
          <span>mandyc.me</span>
          <span>Executive Readiness Diagnostic</span>
        </div>
      </section>
    </div>
  )
}
