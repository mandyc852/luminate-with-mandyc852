import type { Metadata } from "next"
import Image from "next/image"
import { Cormorant_Garamond, Poppins } from "next/font/google"
import { SiteHeader } from "../_components/site-header"

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

// Intentionally kept out of search. For Professional Investors only.
export const metadata: Metadata = {
  title: "Lumina Capital Event Access Fund I LPF | By Invitation",
  robots: { index: false, follow: false },
}

const CONTACT_EMAIL = "mandy@lumina-consults.com"

const ELIGIBILITY = [
  { criterion: "Revenue", threshold: "US$15M+ OR net profit US$1.5M+" },
  { criterion: "Financials", threshold: "Audited or auditable to Big-4 standard" },
  { criterion: "Liquidity event", threshold: "Identifiable pathway within 12–36 months" },
  { criterion: "Structure", threshold: "Clean or cleanable corporate structure" },
  { criterion: "Founder", threshold: "Committed to capital-event timeline" },
]

const INSTRUMENTS = [
  "Convertible notes",
  "Preferred shares",
  "Secured bridges",
  "Pre-IPO equity at protected entry",
]

const IPO_2025 = [
  {
    market: "Hong Kong IPO Proceeds",
    value: "HK$286.9B",
    usdEquivalent: "US$36.7B",
    growth: "+244% YoY",
    note: "Ranked #1 globally",
  },
  {
    market: "US IPO Proceeds",
    value: "US$44B",
    usdEquivalent: null,
    growth: "+33% YoY",
    note: "202 listings · 4-year high",
  },
]

const EXITS = [
  { tier: "Primary", route: "US IPO — Nasdaq / NYSE" },
  { tier: "Secondary", route: "HKEX listing" },
  { tier: "Tertiary", route: "M&A" },
  { tier: "Floor", route: "Secondary sale or buyback" },
]

export default function FundPage() {
  return (
    <div className={`${cormorantGaramond.variable} ${poppins.variable} min-h-screen bg-white`}>
      <style>{`
        body {
          background: #ffffff;
          color: #3d4f5f;
          padding-top: 80px;
        }
        h1, h2, h3 {
          font-family: var(--font-cormorant-garamond), serif;
          font-weight: 400;
          color: #1a2a3a;
          letter-spacing: -0.02em;
        }
        p, a, button, span, li, td, th { font-family: var(--font-poppins), sans-serif; }
      `}</style>

      {/* Header */}
      <SiteHeader
        links={[
          { label: "Talk to Me", href: "/#work" },
          { label: "About", href: "/#about" },
          { label: "Track Record", href: "/#track-record" },
        ]}
        bookHref="https://tidycal.com/mandyc852/30-minute-meeting"
      />

      {/* HERO */}
      <section className="relative w-full bg-[#1a2a3a] py-20 md:py-28 px-6 overflow-hidden">
        <Image
          src="/Hong Kong 1.jpg"
          alt="Hong Kong skyline"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2a3a]/72 via-[#1a2a3a]/68 to-[#1a2a3a]/88 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-[#f5e6b3] text-xs font-medium tracking-[0.3em] uppercase mb-5" style={{ textShadow: "0 1px 12px rgba(0,0,0,0.6)" }}>
            Lumina Capital · Hong Kong
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl leading-[1.12] font-normal mb-6 !text-white" style={{ textShadow: "0 2px 24px rgba(0,0,0,0.7)" }}>
            Lumina Capital Event Access Fund I LPF
          </h1>
          <p className="text-lg md:text-2xl text-white font-light italic leading-[1.45] mb-7 max-w-3xl mx-auto" style={{ fontFamily: "var(--font-cormorant-garamond), serif", textShadow: "0 1px 16px rgba(0,0,0,0.6)" }}>
            A success-aligned Hong Kong LPF for investors who back profitable companies preparing for IPO, M&amp;A, or strategic liquidity events.
          </p>
          <p className="text-white/70 text-xs tracking-[0.25em] uppercase font-medium" style={{ textShadow: "0 1px 12px rgba(0,0,0,0.6)" }}>
            By Invitation · Confidential · Professional Investors only
          </p>
        </div>
      </section>

      {/* THE OPPORTUNITY */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.28em] uppercase text-center mb-3">The opportunity</p>
          <h2 className="text-3xl md:text-4xl mb-10 text-center font-normal">Below the ticket size of the largest funds, above the reach of conventional capital</h2>
          <div className="space-y-5 text-slate-600 text-[15px] leading-[1.8] font-light">
            <p>
              The largest pre-IPO funds write US$50M+ tickets. Below that threshold, profitable cross-border companies preparing for a capital event have no natural capital partner. They have audited financials, a liquidity pathway, and a working business — and no one structured to write the cheque.
            </p>
            <p>
              At the same time, two IPO markets are simultaneously open after a multi-year drought. The HKEX and the US listings windows have both reopened with significant momentum.
            </p>
            <p className="text-[#1a2a3a] font-normal">
              Lumina is built to sit precisely in that gap.
            </p>
          </div>
        </div>
      </section>

      {/* THE MARKET MOMENT — 2025 IPO data */}
      <section className="py-20 md:py-28 px-6 bg-[#0f1a24] relative overflow-hidden">
        {/* Subtle skyline texture */}
        <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none">
          <Image
            src="/Hong Kong 1.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-[#f5e6b3] text-xs font-medium tracking-[0.28em] uppercase text-center mb-3">The market moment</p>
          <h2 className="text-3xl md:text-4xl mb-5 text-center font-normal !text-white">Two IPO windows, open simultaneously</h2>
          <p className="text-center text-white/70 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            After a multi-year drought, both HKEX and US IPO markets reopened in 2025 with significant momentum. The Hong Kong and US listing windows are now aligned for the first time in years.
          </p>

          {/* Two equal-content cards — same fields, same height naturally */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-5 max-w-3xl mx-auto">
            {IPO_2025.map((s) => (
              <div key={s.market} className="bg-[#1a2a3a]/60 border border-[#c9a227]/25 px-6 py-5 md:px-7 md:py-6 backdrop-blur-sm">
                <p className="text-[#f5e6b3] text-[10px] font-medium tracking-[0.25em] uppercase mb-3">{s.market}</p>
                {/* HK row shows USD equivalent inline; US row shows just the headline value */}
                <div className="flex items-baseline gap-2.5 mb-2 flex-wrap">
                  <p
                    className="text-3xl md:text-4xl text-white font-normal leading-none"
                    style={{ fontFamily: "var(--font-cormorant-garamond), serif", letterSpacing: "-0.02em" }}
                  >
                    {s.value}
                  </p>
                  {s.usdEquivalent && (
                    <>
                      <span className="text-[#f5e6b3]/40 text-xl md:text-2xl leading-none">—</span>
                      <p
                        className="text-xl md:text-2xl text-[#f5e6b3]/75 font-normal leading-none"
                        style={{ fontFamily: "var(--font-cormorant-garamond), serif", letterSpacing: "-0.01em" }}
                      >
                        {s.usdEquivalent}
                      </p>
                    </>
                  )}
                </div>
                <p className="text-[#c9a227] text-sm font-medium leading-tight">{s.growth}</p>
                <p className="text-white/60 text-xs font-light leading-relaxed mt-1">{s.note}</p>
              </div>
            ))}
          </div>

          {/* Punchline below — non-italic, forced line break before "exceeding" */}
          <p className="text-center text-white/85 text-lg md:text-xl font-normal mt-8 max-w-3xl mx-auto leading-[1.5]" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
            Hong Kong&apos;s IPO proceeds, in USD terms, exceeding NYSE and NASDAQ combined.
          </p>

          <p className="text-center text-white/45 text-xs font-light italic mt-10 max-w-2xl mx-auto">
            2025 full-year proceeds. Sources: HKEX market statistics, NYSE / NASDAQ IPO data.
          </p>
        </div>
      </section>

      {/* HOW THE STRUCTURE WORKS */}
      <section className="py-20 md:py-28 px-6 bg-[#f8f7f4]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.28em] uppercase text-center mb-3">How the structure works</p>
          <h2 className="text-3xl md:text-4xl mb-6 text-center font-normal">A three-way alignment</h2>
          <p className="text-center text-slate-600 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Every party holds the same equity outcome. The company gets growth capital it could not otherwise access. The investor gets a sponsor-grade portfolio with offset fees. Lumina earns through the same exit Lumina structured.
          </p>

          {/* No boxes — left gold accent line + generous whitespace */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            <div className="border-l-2 border-[#c9a227] pl-6 md:pl-7">
              <p className="text-[#a68a1f] text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-4">The Company</p>
              <p className="text-slate-600 text-[15px] font-light leading-[1.7]">
                Pays a standard advisory fee. Receives structured growth capital that covers IPO preparation without breaking operating cash flow.
              </p>
            </div>

            <div className="border-l-2 border-[#c9a227] pl-6 md:pl-7">
              <p className="text-[#a68a1f] text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-4">The Investor</p>
              <p className="text-slate-600 text-[15px] font-light leading-[1.7]">
                Holds structured equity with downside protection on every position. Never plain common equity. Anchor LPs can earn originating economics on companies they introduce.
              </p>
            </div>

            <div className="border-l-2 border-[#c9a227] pl-6 md:pl-7">
              <p className="text-[#a68a1f] text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-4">Lumina</p>
              <p className="text-slate-600 text-[15px] font-light leading-[1.7]">
                Earns through the same exit the LPs do. Advisory fees offset against management fee. LPs never double-pay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTMENT APPROACH */}
      {/*
        Mobile: 3 collapsible <details> blocks stacked (saves screen space).
        Desktop: 3 always-open columns side-by-side (eligibility | instruments | exits).
        The duplication is intentional — clean tree per breakpoint beats CSS gymnastics.
      */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.28em] uppercase text-center mb-3">Investment approach</p>
          <h2 className="text-3xl md:text-4xl mb-14 text-center font-normal">Disciplined, structured, success-aligned</h2>

          {/* MOBILE — collapsible accordion. Gold ▼ triangle indicates dropdown. */}
          <div className="md:hidden space-y-3">
            <details className="bg-[#f8f7f4] border border-slate-200 group">
              <summary className="cursor-pointer list-none p-5 flex items-center justify-between text-[#1a2a3a] font-normal text-base" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                <span>Portfolio company eligibility</span>
                <span className="text-[#c9a227] text-xs transition-transform duration-200 group-open:rotate-180 ml-3">▼</span>
              </summary>
              <ul className="px-5 pb-5 space-y-3">
                {ELIGIBILITY.map((row) => (
                  <li key={row.criterion} className="flex items-start gap-3 text-sm">
                    <span className="text-[#c9a227] mt-1 text-xs">✦</span>
                    <div>
                      <span className="text-[#1a2a3a] font-medium">{row.criterion}:</span>{" "}
                      <span className="text-slate-600 font-light">{row.threshold}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </details>

            <details className="bg-[#f8f7f4] border border-slate-200 group">
              <summary className="cursor-pointer list-none p-5 flex items-center justify-between text-[#1a2a3a] font-normal text-base" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                <div>
                  <span>Instruments</span>
                  <span className="block text-[#a68a1f] text-[10px] font-medium tracking-[0.2em] uppercase mt-0.5">Never plain common equity</span>
                </div>
                <span className="text-[#c9a227] text-xs transition-transform duration-200 group-open:rotate-180 ml-3">▼</span>
              </summary>
              <ul className="px-5 pb-5 space-y-3">
                {INSTRUMENTS.map((inst) => (
                  <li key={inst} className="flex items-start gap-3 text-sm">
                    <span className="text-[#c9a227] mt-1 text-xs">✦</span>
                    <span className="text-[#1a2a3a] font-medium">{inst}</span>
                  </li>
                ))}
              </ul>
            </details>

            <details className="bg-[#f8f7f4] border border-slate-200 group">
              <summary className="cursor-pointer list-none p-5 flex items-center justify-between text-[#1a2a3a] font-normal text-base" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                <div>
                  <span>Exit pathways</span>
                  <span className="block text-[#a68a1f] text-[10px] font-medium tracking-[0.2em] uppercase mt-0.5">Tiered, with a protective floor</span>
                </div>
                <span className="text-[#c9a227] text-xs transition-transform duration-200 group-open:rotate-180 ml-3">▼</span>
              </summary>
              <ul className="px-5 pb-5 space-y-3">
                {EXITS.map((e) => (
                  <li key={e.tier} className="flex items-start gap-3 text-sm">
                    <span className="text-[#c9a227] mt-1 text-xs">✦</span>
                    <div>
                      <span className="text-[#a68a1f] text-[10px] font-semibold tracking-[0.2em] uppercase">{e.tier}:</span>{" "}
                      <span className="text-[#1a2a3a] font-medium">{e.route}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </details>
          </div>

          {/* DESKTOP — 3 editorial columns, no boxes. Gold rule under each heading. */}
          <div className="hidden md:grid md:grid-cols-3 gap-10 lg:gap-14">
            {/* Eligibility */}
            <div>
              <h3 className="text-2xl text-[#1a2a3a] font-normal mb-1">Portfolio company eligibility</h3>
              <p className="text-[#a68a1f] text-[11px] font-medium tracking-[0.2em] uppercase mb-4">Qualifying criteria</p>
              <div className="h-px w-12 bg-[#c9a227] mb-6" />
              <ul className="space-y-4">
                {ELIGIBILITY.map((row) => (
                  <li key={row.criterion} className="text-sm">
                    <p className="text-[#1a2a3a] font-medium mb-0.5">{row.criterion}</p>
                    <p className="text-slate-600 font-light leading-relaxed">{row.threshold}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instruments */}
            <div>
              <h3 className="text-2xl text-[#1a2a3a] font-normal mb-1">Instruments</h3>
              <p className="text-[#a68a1f] text-[11px] font-medium tracking-[0.2em] uppercase mb-4">Never plain common equity</p>
              <div className="h-px w-12 bg-[#c9a227] mb-6" />
              <ul className="space-y-3.5">
                {INSTRUMENTS.map((inst) => (
                  <li key={inst} className="text-[#1a2a3a] font-medium text-sm leading-relaxed">
                    {inst}
                  </li>
                ))}
              </ul>
            </div>

            {/* Exit pathways */}
            <div>
              <h3 className="text-2xl text-[#1a2a3a] font-normal mb-1">Exit pathways</h3>
              <p className="text-[#a68a1f] text-[11px] font-medium tracking-[0.2em] uppercase mb-4">Tiered, with a protective floor</p>
              <div className="h-px w-12 bg-[#c9a227] mb-6" />
              <ul className="space-y-4">
                {EXITS.map((e) => (
                  <li key={e.tier} className="text-sm">
                    <p className="text-[#a68a1f] text-[10px] font-semibold tracking-[0.2em] uppercase mb-0.5">{e.tier}</p>
                    <p className="text-[#1a2a3a] font-medium">{e.route}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-20 md:py-28 px-6 bg-[#f8f7f4]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase text-center mb-3">Leadership</p>
          <h2 className="text-3xl md:text-4xl mb-12 text-center font-normal">Who runs the fund</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-none border border-slate-200 p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#a68a1f] mb-2">General Partner</p>
              <h3 className="text-2xl font-normal text-[#1a2a3a] mb-1">Mandy Cheung</h3>
              <p className="text-slate-500 text-sm font-light mb-4">Founder &amp; Director, Lumina Consulting Limited</p>
              <p className="text-slate-600 text-sm font-light leading-relaxed mb-4">
                Hong Kong SFC Type 6 (corporate finance) Responsible Officer with 10+ years and 60+ capital markets transactions across HKEX and NASDAQ. As financial adviser to listed-company boards and shareholders, she has completed general offers, whitewash waivers, convertible-bond subscriptions and restructurings — the structuring and downside-protection mechanics this fund is built on.
              </p>
              <ul className="space-y-1.5 text-slate-600 text-sm font-light">
                <li className="flex items-start gap-2"><span className="text-[#c9a227] mt-0.5">✦</span> SFC Type 6 Responsible Officer</li>
                <li className="flex items-start gap-2"><span className="text-[#c9a227] mt-0.5">✦</span> 60+ transactions: IPOs, general offers, convertible bonds, restructurings</li>
                <li className="flex items-start gap-2"><span className="text-[#c9a227] mt-0.5">✦</span> Active cross-border pipeline: Hong Kong · PRC · UAE</li>
              </ul>
            </div>

            <div className="bg-white rounded-none border border-slate-200 p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#a68a1f] mb-2">Investment Manager</p>
              <h3 className="text-2xl font-normal text-[#1a2a3a] mb-1">SFC Type 9 Asset Manager</h3>
              <p className="text-slate-500 text-sm font-light mb-4">Confirmed on engagement</p>
              <p className="text-slate-600 text-sm font-light leading-relaxed mb-4">
                The Fund is managed by an SFC Type 9 (Asset Management) licensed firm acting as Investment Manager — responsible for portfolio management, trade execution, and AML oversight under Hong Kong&apos;s regulated framework. The appointed manager is confirmed with investors during the materials discussion.
              </p>
              <ul className="space-y-1.5 text-slate-600 text-sm font-light">
                <li className="flex items-start gap-2"><span className="text-[#c9a227] mt-0.5">✦</span> SFC Type 9 (Asset Management)</li>
                <li className="flex items-start gap-2"><span className="text-[#c9a227] mt-0.5">✦</span> Investment Manager of the LPF</li>
                <li className="flex items-start gap-2"><span className="text-[#c9a227] mt-0.5">✦</span> Portfolio management &amp; trade execution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 bg-[#1a2a3a]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-normal mb-4 cta-title-gradient">Begin the conversation</h2>
          <p className="text-slate-300 font-light mb-8 text-base max-w-2xl mx-auto leading-relaxed">
            The complete investor presentation — pipeline, terms, and structure — is shared with Professional Investors under NDA. Either path below opens that door.
          </p>
          {/* Buttons: stacked on mobile, side-by-side on desktop (paired CTA convention) */}
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-center">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Lumina%20Capital%20Event%20Access%20Fund%20I%20%E2%80%94%20Investor%20Materials%20Request`}
              className="w-full sm:w-auto sm:min-w-[260px] md:min-w-[280px] inline-flex items-center justify-center whitespace-nowrap px-8 py-3.5 rounded-none shadow-lg uppercase tracking-wide text-sm btn-gold-animated"
            >
              Request materials
            </a>
            <a
              href="https://tidycal.com/mandyc852/30-minute-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto sm:min-w-[260px] md:min-w-[280px] inline-flex items-center justify-center whitespace-nowrap px-8 py-3.5 bg-transparent border-2 border-white/80 text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-white/10 rounded-none uppercase"
            >
              Book an investor call
            </a>
          </div>
          <p className="text-slate-400 text-xs mt-6 font-light tracking-[0.15em] uppercase">
            By Invitation · Confidential · Lumina Consulting Limited
          </p>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="py-12 px-6 bg-[#0f1a24]">
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-500 text-xs font-light leading-relaxed text-center italic">
            This page is provided for information purposes only and does not constitute an offer, solicitation, or investment advice. Investments in pre-IPO companies involve significant risks, including total loss of capital. Past performance is not indicative of future results. Any fund participation is subject to legal, regulatory, tax, and compliance review and to the executed Limited Partnership Agreement. For Professional Investors only.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#0f1a24] border-t border-[#1a2a3a] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-slate-500 text-xs leading-relaxed">
              Lumina Consulting Limited · Hong Kong · PRC · UAE
            </p>
            <div className="text-slate-500 text-xs flex items-center justify-center gap-2">
              <a href="/" className="hover:text-[#c9a227] transition-colors">MandyC.</a>
              <span className="text-slate-600">|</span>
              <a href="/terms" className="hover:text-[#c9a227] transition-colors">Terms</a>
              <span className="text-slate-600">|</span>
              <a href="/privacy" className="hover:text-[#c9a227] transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
