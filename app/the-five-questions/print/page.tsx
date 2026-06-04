import { DIMENSIONS } from "../../executive-readiness/lib/content"

// Print-ready page intended to be converted into a static PDF via
// Chrome headless (`chrome --headless --print-to-pdf`). Letter size,
// generous margins, designed page-by-page for executive readers.
//
// To regenerate the PDF after edits:
//   1. dev server running on :3001
//   2. /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
//        --headless --disable-gpu --no-pdf-header-footer \
//        --print-to-pdf="public/downloads/the-five-questions.pdf" \
//        http://localhost:3001/the-five-questions/print
//   3. commit the new PDF binary.

export const metadata = {
  title: "The 5 Questions — MandyC.",
  robots: { index: false, follow: false },
}

export default function FiveQuestionsPrintPage() {
  return (
    <div className="print-doc">
      <style>{`
        @page {
          size: Letter;
          margin: 0;
        }
        html, body { margin: 0; padding: 0; background: #ffffff; }
        body { font-family: Georgia, 'Times New Roman', serif; color: #1a2a3a; }

        .print-doc { color: #1a2a3a; }

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
        }
        h1.cover-title {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 42pt;
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: -0.01em;
          color: #1a2a3a;
          margin: 0 0 18pt 0;
        }
        .cover-sub {
          font-family: Georgia, serif;
          font-style: italic;
          font-size: 14pt;
          line-height: 1.4;
          color: #3d4f5f;
          margin: 0 0 36pt 0;
          max-width: 5in;
        }
        .cover-meta {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 9pt;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #5a6a7a;
          line-height: 1.7;
        }

        .gold-rule {
          height: 2px;
          background: linear-gradient(90deg, #a68a1f 0%, #c9a227 50%, #d4b84a 100%);
          width: 60pt;
          margin: 0 0 24pt 0;
          border: 0;
        }

        .dim-number {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 10pt;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #a68a1f;
          margin-bottom: 8pt;
        }
        h2.dim-title {
          font-family: Georgia, serif;
          font-size: 24pt;
          font-weight: 400;
          line-height: 1.15;
          color: #1a2a3a;
          margin: 0 0 16pt 0;
        }
        .dim-intro {
          font-size: 11pt;
          line-height: 1.55;
          color: #3d4f5f;
          margin: 0 0 24pt 0;
        }
        .question-label {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 8pt;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #a68a1f;
          margin-bottom: 6pt;
        }
        .question {
          font-family: Georgia, serif;
          font-size: 14pt;
          font-weight: 400;
          font-style: italic;
          line-height: 1.4;
          color: #1a2a3a;
          margin: 0 0 18pt 0;
          padding-left: 14pt;
          border-left: 2px solid #c9a227;
        }
        .reflect-label {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 8pt;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #a68a1f;
          margin-bottom: 6pt;
        }
        .reflect {
          font-size: 10.5pt;
          font-style: italic;
          line-height: 1.55;
          color: #5a6a7a;
          margin: 0 0 18pt 0;
          max-width: 5.5in;
        }
        .notes-label {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 8pt;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #8a96a3;
          margin-bottom: 10pt;
        }
        .notes-lines {
          background-image: repeating-linear-gradient(
            to bottom,
            transparent 0,
            transparent 22pt,
            #d8dde3 22pt,
            #d8dde3 23pt
          );
          min-height: 2.2in;
        }

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

        /* Cover page styling */
        .cover {
          background: #1a2a3a;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .cover h1.cover-title { color: #ffffff; }
        .cover .cover-sub { color: rgba(255,255,255,0.85); }
        .cover .eyebrow { color: #d4b84a; }
        .cover .gold-rule { width: 80pt; margin-bottom: 30pt; }
        .cover .cover-meta { color: rgba(255,255,255,0.6); }
        .cover .footer { color: rgba(255,255,255,0.5); }

        /* Closing page styling */
        .closing {
          background: #1a2a3a;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .closing h2 { color: #ffffff; font-family: Georgia, serif; font-size: 28pt; font-weight: 400; margin: 0 0 20pt 0; line-height: 1.15; }
        .closing p { color: rgba(255,255,255,0.85); font-size: 12pt; line-height: 1.55; margin: 0 0 14pt 0; max-width: 5.5in; }
        .closing .gold-rule { width: 80pt; }
        .closing .url {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 11pt;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #d4b84a;
          margin-top: 28pt;
        }
        .closing .credentials {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 8.5pt;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          margin-top: 60pt;
          line-height: 1.7;
        }

        /* Intro page (page 2) styling */
        .intro p {
          font-size: 11pt;
          line-height: 1.6;
          color: #3d4f5f;
          margin: 0 0 14pt 0;
          max-width: 5.5in;
        }
        .intro h2 {
          font-family: Georgia, serif;
          font-size: 22pt;
          font-weight: 400;
          margin: 0 0 22pt 0;
          color: #1a2a3a;
          line-height: 1.15;
        }
      `}</style>

      {/* ============ PAGE 1 — COVER ============ */}
      <section className="page cover">
        <p className="eyebrow">A Reflection Sheet from MandyC.</p>
        <hr className="gold-rule" />
        <h1 className="cover-title">The 5 Questions</h1>
        <p className="cover-sub">
          Five questions executives should be able to answer before a capital event —
          raise, restructure, or list.
        </p>
        <div className="cover-meta">
          Mandy Cheung · SFC Type 6 Licensed<br />
          60+ Transactions · US$200M+ in Deal Value<br />
          HKEX &amp; NASDAQ
        </div>
        <div className="footer">
          <span>mandyc.me</span>
          <span>The 5 Questions</span>
        </div>
      </section>

      {/* ============ PAGE 2 — WHY ============ */}
      <section className="page intro">
        <p className="eyebrow">Why these questions</p>
        <hr className="gold-rule" />
        <h2>The gaps that matter live somewhere else.</h2>
        <p>
          Lawyers catch structural gaps. Auditors catch financial ones. The gaps that
          actually kill the raise or the listing live somewhere else: in the leader.
        </p>
        <p>
          The CEO who can&apos;t hold the line when a board member pushes hard. The
          founder who freezes when due diligence surfaces something ugly. The executive
          whose decision quality degrades as pressure compresses. The leader running on
          adrenaline by month 14.
        </p>
        <p>
          These are the five questions I&apos;d ask any executive sitting in front of me,
          six months out from a capital event. No scoring. No software. Just questions
          worth sitting with.
        </p>
        <p style={{ fontStyle: "italic", marginTop: "24pt" }}>
          Print this. Annotate it. Write what comes up. The honest answers are the entry
          point — to a conversation with your co-founder, your board chair, your coach,
          or yourself.
        </p>
        <div className="footer">
          <span>mandyc.me</span>
          <span>2</span>
        </div>
      </section>

      {/* ============ PAGES 3–7 — THE FIVE QUESTIONS ============ */}
      {DIMENSIONS.map((dim, i) => (
        <section key={dim.id} className="page">
          <p className="dim-number">Question {dim.id} of 5</p>
          <hr className="gold-rule" />
          <h2 className="dim-title">{dim.name}</h2>
          <p className="dim-intro">{dim.intro}</p>

          <p className="question-label">The question</p>
          <p className="question">{dim.question}</p>

          <p className="reflect-label">A prompt to sit with</p>
          <p className="reflect">{dim.reflection}</p>

          <p className="notes-label">Your notes</p>
          <div className="notes-lines" />

          <div className="footer">
            <span>mandyc.me</span>
            <span>{i + 3}</span>
          </div>
        </section>
      ))}

      {/* ============ PAGE 8 — CLOSING ============ */}
      <section className="page closing">
        <p className="eyebrow" style={{ color: "#d4b84a" }}>What next</p>
        <hr className="gold-rule" />
        <h2>The honest answers are the entry point.</h2>
        <p>
          If one of these questions exposed something — a hesitation, an avoidance, a
          gap you hadn&apos;t named — that&apos;s the data. Not what you wrote on the
          line. What you noticed before you wrote anything at all.
        </p>
        <p>
          When you&apos;re ready to see where you actually stand against all five
          dimensions, take the scored version: ten minutes, your band placement,
          dimension-by-dimension insight on where the work is.
        </p>
        <p className="url">mandyc.me/executive-readiness</p>

        <p className="credentials">
          Mandy Cheung · Hong Kong<br />
          SFC Type 6 Licensed Corporate Finance Advisor<br />
          60+ Transactions · US$200M+ · HKEX &amp; NASDAQ
        </p>

        <div className="footer">
          <span>mandyc.me</span>
          <span>The 5 Questions</span>
        </div>
      </section>
    </div>
  )
}
