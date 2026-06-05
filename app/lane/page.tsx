import type { Metadata } from "next"
import Link from "next/link"
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
    <div className="min-h-screen bg-[#0F1A24] flex flex-col">
      <style>{`
        body { padding-top: 80px; color: #FAF9F7; background: #0F1A24; }
        h1, h2, h3 {
          font-family: var(--font-cormorant-garamond), serif;
          font-weight: 400;
          letter-spacing: -0.01em;
        }
        p, a, button, label, input { font-family: var(--font-poppins), sans-serif; }
      `}</style>

      <SiteHeader
        links={[
          { label: "Home", href: "/" },
          { label: "Diagnostic", href: "/executive-readiness" },
        ]}
      />

      {/* MAIN — fits viewport without scrolling on desktop */}
      <main className="flex-1 flex items-center px-6 md:px-12 py-8 md:py-0">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-16 items-center">

            {/* LEFT (desktop) / BOTTOM (mobile): copy + form */}
            <div className="order-2 md:order-1">
              <p className="text-[#C9A227] text-xs font-medium tracking-[0.3em] uppercase mb-3 text-center md:text-left">
                A weekly inquiry
              </p>

              <h1
                className="text-4xl md:text-6xl font-normal mb-4 text-[#C9A227] text-center md:text-left"
                style={{ letterSpacing: "0.18em", fontFamily: "var(--font-cormorant-garamond), serif" }}
              >
                LANE
              </h1>

              {/* Mobile only: mandala under title */}
              <div className="flex items-center justify-center my-6 md:hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/lead-magnet/lane-framework.png"
                  alt="LANE — Lookback, Anchor, Next, Envision"
                  className="w-full max-w-[280px] h-auto"
                />
              </div>

              <p
                className="text-base md:text-lg text-[#FAF9F7] font-light italic leading-relaxed mb-5 text-center md:text-left"
                style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
              >
                The loop runs whether you watch it or not. Most weeks look like last week.
                LANE makes the loop visible enough to choose what to repeat and what to change.
              </p>

              <p className="text-[#B8B5A8] font-light text-sm leading-relaxed mb-6 text-center md:text-left">
                Four sections. Twenty-five questions. Once a week. Forty-five minutes. Pen and paper.
              </p>

              {/* Form — flat, no box */}
              <div className="max-w-sm mx-auto md:mx-0">
                <LaneForm />
              </div>
            </div>

            {/* RIGHT (desktop): mandala — hidden on mobile (shown inline above) */}
            <div className="hidden md:flex items-center justify-center order-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/lead-magnet/lane-framework.png"
                alt="LANE — Lookback, Anchor, Next, Envision"
                className="w-full max-w-[440px] h-auto"
              />
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[#1a2a3a] py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <a href="https://www.youtube.com/@MandyC852" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#c9a227] transition-colors" aria-label="YouTube">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/mandyc852/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#c9a227] transition-colors" aria-label="LinkedIn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          <div className="text-slate-600 text-xs flex items-center gap-2">
            <span>© 2026 MandyC.</span>
            <span>|</span>
            <Link href="/terms" className="hover:text-[#c9a227] transition-colors">Terms</Link>
            <span>|</span>
            <Link href="/privacy" className="hover:text-[#c9a227] transition-colors">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
