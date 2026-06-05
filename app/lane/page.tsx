import type { Metadata } from "next"
import { SiteHeader } from "../_components/site-header"
import { LaneForm } from "./_components/lane-form"

export const metadata: Metadata = {
  title: "LANE — a weekly inquiry | MandyC.",
  description:
    "LANE is a weekly self-inquiry practice. Once a week, forty-five minutes, pen and paper. The framework that makes the loop visible enough to choose what to repeat and what to change.",
  robots: { index: false, follow: false },
}

export default function LanePage() {
  return (
    <div className="min-h-screen bg-[#0F1A24] relative overflow-hidden">
      <style>{`
        body { padding-top: 80px; color: #FAF9F7; background: #0F1A24; }
        h1, h2, h3 {
          font-family: var(--font-cormorant-garamond), serif;
          font-weight: 400;
          letter-spacing: -0.01em;
        }
        p, a, button, label, input { font-family: var(--font-poppins), sans-serif; }
      `}</style>

      <div className="relative z-10">
        <SiteHeader
          links={[
            { label: "Home", href: "/" },
            { label: "Diagnostic", href: "/executive-readiness" },
          ]}
        />

        <main className="max-w-2xl mx-auto px-6 md:px-12 py-16 md:py-24">
          {/* Eyebrow */}
          <p className="text-[#C9A227] text-xs font-medium tracking-[0.3em] uppercase mb-4 text-center">
            A weekly inquiry
          </p>

          {/* Title */}
          <h1
            className="text-5xl md:text-7xl font-normal mb-8 text-[#C9A227] text-center"
            style={{ letterSpacing: "0.18em", fontFamily: "var(--font-cormorant-garamond), serif" }}
          >
            LANE
          </h1>

          {/* Mandala — transparent bg */}
          <div className="flex items-center justify-center mb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/lead-magnet/lane-framework.png"
              alt="LANE — Lookback, Anchor, Next, Envision"
              className="w-full max-w-[360px] md:max-w-[420px] h-auto"
            />
          </div>

          {/* Lede */}
          <p
            className="text-lg md:text-xl text-[#FAF9F7] font-light italic leading-relaxed mb-8 text-center"
            style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
          >
            The loop runs whether you watch it or not. Most weeks look like last week.
            LANE is the inquiry that makes the loop visible enough to choose, this week,
            what to repeat and what to change.
          </p>

          {/* Body copy */}
          <div className="space-y-4 text-[#B8B5A8] font-light leading-relaxed mb-10 text-center">
            <p>
              Four sections. Lookback, Anchor, Next, Envision. About twenty-five questions
              across the four. You answer the ones that catch you, not every one every week.
            </p>
            <p>
              Once a week. Forty-five minutes. Pen and paper. Sunday evening or Monday morning.
            </p>
            <p className="text-[#FAF9F7]/85">
              The framework is the discipline. The questions are the prompts.
              The answers are between you and the page.
            </p>
          </div>

          {/* Email form — no box, flat in the page */}
          <div className="max-w-md mx-auto">
            <LaneForm />
          </div>

          {/* Cross-link to diagnostic */}
          <p className="text-[#FAF9F7]/50 text-sm font-light mt-12 text-center">
            Preparing for a capital event?{" "}
            <a
              href="/executive-readiness"
              className="text-[#C9A227] hover:text-[#D4B84A] underline decoration-[#C9A227]/40 hover:decoration-[#D4B84A] transition-colors"
            >
              Take the Executive Readiness Diagnostic →
            </a>
          </p>
        </main>
      </div>
    </div>
  )
}
