"use client"

import Link from "next/link"
import Image from "next/image"
import { Cormorant_Garamond, Poppins } from "next/font/google"
import { SiteHeader } from "../_components/site-header"
import { FloatingCTA } from "../_components/home-interactions"

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant-garamond",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
})

const articles = [
  {
    slug: "nasdaq-ipo-preparation-checklist",
    title: "The Ultimate Nasdaq IPO Preparation Checklist",
    description:
      "A step-by-step checklist covering Nasdaq Capital Market requirements — including the 2026 MVUPHS increase and IPO proceeds-only rule — corporate governance, due diligence, and timeline planning.",
    category: "ipo",
  },
  {
    slug: "nasdaq-ipo-cost-breakdown",
    title: "How Much Does A Nasdaq IPO Cost? A Breakdown Of Expenses",
    description:
      "Detailed breakdown of IPO costs from adviser fees to D&O insurance to post-listing compliance — what to budget for a Nasdaq Capital Market listing in 2026.",
    category: "ipo",
  },
  {
    slug: "pre-ipo-tax-financial-strategies",
    title: "Pre-IPO Tax and Financial Strategies for Founders",
    description:
      "Estate planning, QSBS exclusion (expanded under OBBBA 2025), capital gains strategies, and cross-jurisdiction tax considerations for founders preparing to go public.",
    category: "ipo",
  },
  {
    slug: "should-your-business-scale-now",
    title: "Should Your Business Scale Now?",
    description:
      "A framework for evaluating whether your business is ready to scale — financial health, market opportunity, team capacity, and common pitfalls.",
    category: "strategy",
  },
]

function CategoryTag({ category }: { category: string }) {
  const label = category === "ipo" ? "IPO" : "Strategy"
  return (
    <span className="inline-block text-[10px] font-medium tracking-[0.2em] uppercase px-2.5 py-1 bg-[#f5e6b3]/40 text-[#a68a1f] border border-[#c9a227]/20">
      {label}
    </span>
  )
}

export default function ResourcesPage() {
  return (
    <div
      className={`${cormorantGaramond.variable} ${poppins.variable} min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50/80`}
    >
      <style jsx global>{`
        :root {
          --navy-deep: #1a2a3a;
          --navy-medium: #2d4156;
          --gold-primary: #c9a227;
          --gold-light: #d4b84a;
          --gold-dark: #a68a1f;
          --text-primary: #3d4f5f;
        }
        html { scroll-behavior: smooth; }
        body {
          color: var(--text-primary);
          padding-top: 80px;
        }
        .scroll-anchor { scroll-margin-top: 96px; }
        h1, h2, h3 {
          font-family: var(--font-cormorant-garamond), serif;
          font-weight: 400;
          color: var(--navy-deep);
          letter-spacing: -0.02em;
        }
        p, label, input, button, span {
          font-family: var(--font-poppins), sans-serif;
        }
      `}</style>

      <SiteHeader
        bookHref="https://tidycal.com/mandyc852/30-minute-meeting"
      />

      {/* Hero with background image — title lives here */}
      <section className="relative w-full py-20 md:py-32 px-6 overflow-hidden bg-[#1a2a3a]">
        <Image
          src="/Wallstreet.jpg"
          alt="New York Stock Exchange, Wall Street"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2a3a]/80 via-[#1a2a3a]/72 to-[#1a2a3a]/90 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-[#c9a227] text-xs font-medium tracking-[0.3em] uppercase mb-5"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
            IPO Insights &amp; Strategy
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl leading-[1.1] font-normal mb-6"
            style={{
              filter: "drop-shadow(0 2px 18px rgba(0,0,0,0.5))",
              fontFamily: "var(--font-cormorant-garamond), serif",
              background: "linear-gradient(135deg, #FFFFFF 0%, #f5e6b3 40%, #c9a227 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Articles
          </h1>
          <p
            className="text-base md:text-lg text-white/80 font-light leading-relaxed max-w-2xl mx-auto"
            style={{ textShadow: "0 1px 16px rgba(0,0,0,0.6)" }}
          >
            Practical guidance on Nasdaq listing requirements, IPO costs, tax
            strategies, and scaling — updated for 2026 regulations.
          </p>
        </div>
      </section>

      {/* Articles grid — no duplicate header */}
      <section id="articles" className="scroll-anchor py-16 md:py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/resources/${article.slug}`}
                className="group block p-8 bg-[#f8f7f4] border-2 border-slate-200 hover:border-[#c9a227]/40 transition-colors"
              >
                <CategoryTag category={article.category} />
                <h3
                  className="text-xl md:text-2xl font-normal text-[#1a2a3a] mt-4 mb-3 group-hover:text-[#2d4156] transition-colors"
                  style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
                >
                  {article.title}
                </h3>
                <p className="text-slate-600 font-light text-sm leading-relaxed mb-4">
                  {article.description}
                </p>
                <span className="text-[#a68a1f] text-sm font-medium tracking-wide group-hover:text-[#1a2a3a] transition-colors">
                  Read →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Three steps — navy CTA section */}
      <section className="py-20 md:py-28 px-6 bg-[#1a2a3a]">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl md:text-4xl mb-3 text-center font-normal"
            style={{
              fontFamily: "var(--font-cormorant-garamond), serif",
              background: "linear-gradient(135deg, #d4b84a 0%, #c9a227 50%, #f5e6b3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Ready to explore listing?
          </h2>
          <p className="text-center text-slate-400 font-light mb-12 max-w-2xl mx-auto">
            A free conversation, a written verdict, then the work. No elaborate funnel.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 01 — highlighted as the entry point */}
            <div className="bg-[#243447] rounded-none p-8 border-2 border-[#c9a227] flex flex-col relative">
              <span className="absolute -top-3 left-8 bg-[#c9a227] text-[#1a2a3a] text-[10px] font-semibold tracking-[0.2em] uppercase px-2.5 py-1">
                Start Here
              </span>
              <p className="text-[#c9a227] text-xs font-medium tracking-[0.2em] uppercase mb-3">Step 01 · Free</p>
              <h3 className="text-2xl font-normal text-white mb-4" style={{ fontFamily: "var(--font-cormorant-garamond), serif", color: "white" }}>
                Discovery call
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light mb-6 flex-grow">
                Thirty minutes, video. You talk about the business. I give you an honest initial read on whether listing is worth exploring — and which structuring approach might fit. Free.
              </p>
              <p className="text-slate-400 text-xs font-light italic mb-5">
                Outcome: Clarity on whether it&apos;s worth the next step.
              </p>
              <a
                href="https://tidycal.com/mandyc852/30-minute-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 text-xs uppercase tracking-[0.18em] btn-gold-animated"
              >
                Book Your Free Call
              </a>
            </div>

            {/* Step 02 */}
            <div className="bg-[#243447] rounded-none p-8 border border-white/15 flex flex-col">
              <p className="text-[#c9a227] text-xs font-medium tracking-[0.2em] uppercase mb-3">Step 02 · US$2,500</p>
              <h3 className="text-2xl font-normal text-white mb-4" style={{ fontFamily: "var(--font-cormorant-garamond), serif", color: "white" }}>
                The IPO Path Assessment
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light mb-6 flex-grow">
                A 30-day paid sprint. ExitPro access, a two-week deep review, a 90-minute working call, then your Listing Path Memo — 8 to 12 pages within 14 days. Fully creditable.
              </p>
              <p className="text-slate-400 text-xs font-light italic mb-4">
                Outcome: A written verdict on whether you should list, and the next move spelled out.
              </p>
              <a href="/ipo-path" className="text-[#c9a227] hover:text-[#f5e6b3] text-sm font-medium tracking-wide transition-colors">
                Start the assessment →
              </a>
            </div>

            {/* Step 03 */}
            <div className="bg-[#243447] rounded-none p-8 border border-white/15 flex flex-col">
              <p className="text-[#c9a227] text-xs font-medium tracking-[0.2em] uppercase mb-3">Step 03 · Continuation</p>
              <h3 className="text-2xl font-normal text-white mb-4" style={{ fontFamily: "var(--font-cormorant-garamond), serif", color: "white" }}>
                Advisory mandate
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light mb-6 flex-grow">
                If the memo points to a path, we structure the work — a 90-Day Engagement or a full mandate. Milestone-based fees. Your US$2,500 credits in full toward either, within 60 days.
              </p>
              <p className="text-slate-400 text-xs font-light italic">
                Outcome: Your company on the path to public markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#0f1a24] border-t border-[#1a2a3a] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-5">
            <div className="flex items-center justify-center gap-6">
              <a href="https://www.youtube.com/@MandyC852" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#c9a227] transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/mandyc852/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#c9a227] transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-1 text-center" style={{ fontFamily: "var(--font-poppins)" }}>
              <p className="text-slate-500 text-xs leading-relaxed mb-2 md:mb-0">© 2026 Lumina Consulting Limited</p>
              <span className="hidden md:inline text-slate-600 text-xs"> | </span>
              <div className="text-slate-500 text-xs flex items-center justify-center gap-2 md:gap-1">
                <a href="/terms" className="hover:text-[#c9a227] transition-colors">Terms &amp; Conditions</a>
                <span className="text-slate-600">|</span>
                <a href="/privacy" className="hover:text-[#c9a227] transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <FloatingCTA />
    </div>
  )
}
