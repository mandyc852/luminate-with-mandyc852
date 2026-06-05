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

        <main className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-20">
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <p className="text-[#C9A227] text-xs font-medium tracking-[0.3em] uppercase mb-4">
                A weekly inquiry
              </p>

              <h1
                className="text-5xl md:text-7xl font-normal mb-5 text-[#C9A227]"
                style={{ letterSpacing: "0.18em", fontFamily: "var(--font-cormorant-garamond), serif" }}
              >
                LANE
              </h1>

              <div className="h-px w-16 bg-[#C9A227] mb-8" />

              <p
                className="text-lg md:text-2xl text-[#FAF9F7] font-light italic leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
              >
                The loop runs whether you watch it or not. Most weeks look like last week. LANE is
                the inquiry that makes the loop visible enough to choose, this week, what to repeat
                and what to change.
              </p>

              <div className="space-y-4 text-[#B8B5A8] font-light leading-relaxed mb-8">
                <p>
                  Four sections. Lookback, Anchor, Next, Envision. About twenty-five questions
                  across the four. You answer the ones that catch you, not every one every week.
                </p>
                <p>
                  Once a week. Forty-five minutes. Pen and paper. Sunday evening or Monday morning.
                </p>
                <p className="text-[#FAF9F7]/85">
                  The framework is the discipline. The questions are the prompts. The answers are
                  between you and the page.
                </p>
              </div>
            </div>

            {/* Right: Mandala */}
            <div className="flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/lead-magnet/lane-framework.png"
                alt="LANE — Lookback, Anchor, Next, Envision"
                className="w-full max-w-[420px] h-auto"
              />
            </div>
          </div>

          <p className="text-[#FAF9F7]/40 text-xs font-medium tracking-[0.18em] uppercase mb-8">
            Sent to your inbox · PDF + phone &amp; desktop wallpapers
          </p>

          {/* Email form */}
          <div className="bg-[#1A2A3A]/60 backdrop-blur-sm border border-[#C9A227]/20 p-6 md:p-8 max-w-xl">
            <LaneForm />
          </div>

          {/* Cross-link to diagnostic */}
          <p className="text-[#FAF9F7]/50 text-sm font-light mt-10 max-w-xl">
            Preparing for a capital event — raise, restructure, or list?{" "}
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
