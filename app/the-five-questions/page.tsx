import type { Metadata } from "next"
import { SiteHeader } from "../_components/site-header"
import { FiveQuestionsForm } from "./_components/five-questions-form"

export const metadata: Metadata = {
  title: "The 5 Questions | MandyC.",
  description:
    "Five questions executives should be able to answer before a capital event. Print-friendly reflection sheet from MandyC. — Hong Kong capital markets advisor.",
  robots: { index: false, follow: false },
}

export default function FiveQuestionsPage() {
  return (
    <div className="min-h-screen bg-[#1a2a3a] relative overflow-hidden">
      <style>{`
        body { padding-top: 80px; color: #ffffff; }
        h1, h2, h3 {
          font-family: var(--font-cormorant-garamond), serif;
          font-weight: 400;
          letter-spacing: -0.02em;
        }
        p, a, button, label, input { font-family: var(--font-poppins), sans-serif; }
      `}</style>

      {/* Background skyline */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Hong%20Kong%202.jpg"
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a3a]/95 via-[#1a2a3a]/85 to-[#1a2a3a]/80" />
      </div>

      <div className="relative z-10">
        <SiteHeader
          links={[
            { label: "Home", href: "/" },
            { label: "Diagnostic", href: "/executive-readiness" },
          ]}
        />

        <main className="max-w-3xl mx-auto px-6 md:px-12 py-12 md:py-20">
          <p className="text-[#c9a227] text-xs font-medium tracking-[0.25em] uppercase mb-4">
            Free reflection sheet
          </p>
          <h1 className="gradient-text-hero text-4xl md:text-6xl font-normal leading-[1.05] mb-5">
            The 5 Questions
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed mb-8 max-w-2xl">
            Five questions executives should be able to answer before a capital event — raise,
            restructure, or list.
          </p>

          <div className="space-y-4 text-white/80 font-light leading-relaxed mb-8 max-w-2xl">
            <p>
              Lawyers catch structural gaps. Auditors catch financial ones. The gaps that actually
              kill a raise or a listing live somewhere else: in the leader.
            </p>
            <p>
              These are the five questions I&apos;d ask any executive sitting in front of me, six
              months out from a capital event. The PDF includes the questions, the scoring
              framework, and what each readiness band means for the work ahead — whether you
              choose to self-score or just sit with the prompts.
            </p>
            <p className="text-white/90">Print it. Annotate it. Bring it to your next board meeting.</p>
          </div>

          <p className="text-white/50 text-xs font-medium tracking-[0.15em] uppercase mb-8">
            Built from patterns across IPOs, M&amp;As &amp; restructurings · HKEX &amp; NASDAQ
          </p>

          {/* Email form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 max-w-xl">
            <FiveQuestionsForm />
          </div>

          {/* Cross-link to diagnostic */}
          <p className="text-white/50 text-sm font-light mt-10 max-w-xl">
            Want the scored version with band placement and dimension insights?{" "}
            <a
              href="/executive-readiness"
              className="text-[#c9a227] hover:text-[#d4b84a] underline decoration-[#c9a227]/40 hover:decoration-[#d4b84a] transition-colors"
            >
              Take the full Executive Readiness Diagnostic →
            </a>
          </p>
        </main>
      </div>
    </div>
  )
}
