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

const CONTACT_EMAIL = "hello@mandyc.me"

const ELIGIBILITY = [
  { criterion: "Revenue", threshold: "US$15M+ OR net profit US$1.5M+" },
  { criterion: "Financials", threshold: "Audited or auditable to Big-4 standard" },
  { criterion: "Liquidity event", threshold: "Identifiable pathway within 12–36 months" },
  { criterion: "Structure", threshold: "Clean or cleanable corporate structure" },
  { criterion: "Founder", threshold: "Committed to capital-event timeline" },
  { criterion: "Use of proceeds", threshold: "Defined, transparent, value-accretive" },
]

const INSTRUMENTS = [
  { name: "Convertible notes", detail: "Valuation cap · IPO discount · maturity redemption" },
  { name: "Preferred shares", detail: "Liquidation preference · anti-dilution · board / observer rights" },
  { name: "Secured bridges", detail: "Collateral · milestone drawdowns · mandatory redemption on event" },
  { name: "Pre-IPO equity", detail: "Discounted entry · visible filed-listing pathway only" },
]

const IPO_STATS = [
  { value: "HK$286.9B", label: "Hong Kong IPO 2025", sub: "+244% YoY · #1 globally" },
  { value: "US$44B", label: "US IPO 2025", sub: "+33% YoY · 202 listings · 4-year high" },
  { value: "US$36.7B", label: "HK in USD terms", sub: "More than NYSE and NASDAQ combined" },
]

const LPF_BENEFITS = [
  { v: "0%", label: "Hong Kong profits tax", sub: "On qualifying fund transactions" },
  { v: "0%", label: "Withholding tax", sub: "On distributions to LPs" },
  { v: "0%", label: "Carry tax", sub: "HK carried interest concession" },
  { v: "None", label: "Stamp duty", sub: "Contributions · transfers · secondary" },
]

const NAMED_TRANSACTIONS = [
  "Realord Group (00244)",
  "TL Natural Gas (08536)",
  "Vision International (08107)",
  "Sunlight (08451)",
]

const EXECUTION_NETWORK = [
  { name: "Loeb & Loeb LLP", detail: "US & HK securities counsel — one firm, both jurisdictions" },
  { name: "TAAD LLP", detail: "US PCAOB-registered auditor" },
  { name: "Big-4 reporting accountants", detail: "Relationships across PwC, Deloitte, EY, KPMG" },
  { name: "SFC Type 9 partner firm", detail: "Appointed Investment Manager of the LPF" },
]

const STRATEGIC_ACCESS = [
  {
    h: "Co-investment priority",
    d: "On any company sourced through the fund.",
  },
  {
    h: "Originating economics",
    d: "A defined share of GP carry attributable to the introduced position, paid from GP carry (not from other LPs), LPAC-approved.",
  },
  {
    h: "Enhanced information rights",
    d: "On introduced positions.",
  },
  {
    h: "Sector / geographic preference",
    d: "Noted in the fund's allocation policy.",
  },
]

const NEXT_STEPS = [
  { n: "01", h: "Execute NDA", d: "Confidential disclosure of pipeline, terms, and structure." },
  { n: "02", h: "Investor call", d: "Meet Mandy, walk through the approach and current pipeline." },
  { n: "03", h: "Data room access", d: "Full diligence materials, LPA terms, fund documents." },
  { n: "04", h: "Subscription at first close", d: "Anchor-LP rights are available to those committing at or before first close." },
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
        .stat-value {
          font-family: var(--font-cormorant-garamond), serif;
          font-weight: 500;
          letter-spacing: -0.02em;
        }
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

      {/* CREDENTIALS BAR */}
      <section className="bg-gradient-to-r from-[#c9a227] via-[#d4b84a] to-[#c9a227] py-3 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[#1a2a3a] text-sm font-medium tracking-wide">
            SFC Type 6 Licensed · 60+ Transactions · US$200M+ in Deal Value · HKEX &amp; NASDAQ
          </p>
        </div>
      </section>

      {/* THE FUND IN ONE SENTENCE */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.28em] uppercase mb-5">The fund in one sentence</p>
          <p className="text-xl md:text-2xl text-[#1a2a3a] font-normal italic leading-[1.5]" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
            Lumina invests in profitable private companies — typically US$15M+ revenue or US$1.5M+ net profit — with a clear 12–36 month liquidity pathway through US IPO, HKEX listing, or M&amp;A, using structured equity instruments that protect downside on every position.
          </p>
        </div>
      </section>

      {/* WHY THIS FUND EXISTS */}
      <section className="py-20 md:py-28 px-6 bg-[#f8f7f4]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.28em] uppercase text-center mb-3">Why this fund exists</p>
          <h2 className="text-3xl md:text-4xl mb-10 text-center font-normal">A gap, and a vintage, opening simultaneously</h2>

          <div className="space-y-5 text-slate-600 text-[15px] leading-[1.8] font-light mb-12 max-w-3xl mx-auto">
            <p>
              The largest pre-IPO funds — Sequoia, General Atlantic, Hillhouse — only write US$50M+ tickets. Below that threshold, profitable cross-border companies preparing for a capital event have no natural capital partner.
            </p>
            <p>
              At the same time, two IPO markets are simultaneously open after a multi-year drought:
            </p>
          </div>

          {/* IPO stats grid */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-10">
            {IPO_STATS.map((s) => (
              <div key={s.label} className="bg-white border border-slate-200 p-6 md:p-7 text-center">
                <p className="stat-value text-3xl md:text-4xl text-[#1a2a3a] mb-2">{s.value}</p>
                <p className="text-[#1a2a3a] font-medium text-sm mb-2">{s.label}</p>
                <p className="text-slate-500 text-xs font-light">{s.sub}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-[#1a2a3a] text-xl font-normal italic" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
            This is the vintage. Lumina is built to capture it.
          </p>
        </div>
      </section>

      {/* HOW THE STRUCTURE WORKS — Three-way alignment */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.28em] uppercase text-center mb-3">How the structure works</p>
          <h2 className="text-3xl md:text-4xl mb-6 text-center font-normal">Built around a three-way alignment</h2>
          <p className="text-center text-slate-600 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Every party holds the same equity outcome.
          </p>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {/* The company */}
            <div className="bg-[#f8f7f4] border-t-2 border-[#c9a227] p-7">
              <p className="text-[#a68a1f] text-[10px] font-semibold tracking-[0.25em] uppercase mb-3">The Company</p>
              <ul className="space-y-3 text-slate-600 text-sm font-light leading-relaxed">
                <li className="flex items-start gap-2"><span className="text-[#c9a227] mt-1">✦</span><span>Pays a standard cash advisory fee (~US$100K) — like any normal corporate finance engagement.</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c9a227] mt-1">✦</span><span>Receives US$3–5M of growth capital through structured instruments.</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c9a227] mt-1">✦</span><span>Uses part of proceeds to cover third-party IPO prep costs (audit, legal, sponsor) — solving the working-capital problem that stops most processes.</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c9a227] mt-1">✦</span><span>Preserves operating cash flow.</span></li>
              </ul>
            </div>

            {/* The investor */}
            <div className="bg-[#f8f7f4] border-t-2 border-[#c9a227] p-7">
              <p className="text-[#a68a1f] text-[10px] font-semibold tracking-[0.25em] uppercase mb-3">The Investor</p>
              <ul className="space-y-3 text-slate-600 text-sm font-light leading-relaxed">
                <li className="flex items-start gap-2"><span className="text-[#c9a227] mt-1">✦</span><span>Subscribes to LP units (US$500K minimum).</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c9a227] mt-1">✦</span><span>Gets structured equity exposure with downside protection on every position — convertible notes, preferred shares, secured bridges, or pre-IPO equity at protected entry.</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c9a227] mt-1">✦</span><span>Never holds plain common equity.</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c9a227] mt-1">✦</span><span>Anchor LPs (US$1M+) can earn originating economics on companies they introduce.</span></li>
              </ul>
            </div>

            {/* Lumina */}
            <div className="bg-[#f8f7f4] border-t-2 border-[#c9a227] p-7">
              <p className="text-[#a68a1f] text-[10px] font-semibold tracking-[0.25em] uppercase mb-3">Lumina</p>
              <ul className="space-y-3 text-slate-600 text-sm font-light leading-relaxed">
                <li className="flex items-start gap-2"><span className="text-[#c9a227] mt-1">✦</span><span>Earns through the same equity outcome the LPs hold.</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c9a227] mt-1">✦</span><span>Advisory fees received from portfolio companies are <span className="text-[#1a2a3a] font-medium">offset 100% against management fee</span> under LPAC oversight.</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c9a227] mt-1">✦</span><span>LPs never double-pay.</span></li>
              </ul>
            </div>
          </div>

          {/* Pullquote */}
          <div className="mt-14 pt-10 border-t border-slate-200 max-w-3xl mx-auto">
            <p className="text-center text-[#1a2a3a] text-lg md:text-xl italic leading-[1.6]" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
              The company pays a normal advisory fee and gets growth capital it could not otherwise access. The investor gets a sponsor-grade portfolio with offset fees. Lumina earns through the same exit Lumina structured.
            </p>
          </div>
        </div>
      </section>

      {/* INVESTMENT APPROACH */}
      <section className="py-20 md:py-28 px-6 bg-[#f8f7f4]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.28em] uppercase text-center mb-3">Investment approach</p>
          <h2 className="text-3xl md:text-4xl mb-12 text-center font-normal">Disciplined, structured, success-aligned</h2>

          {/* Eligibility */}
          <div className="mb-14">
            <h3 className="text-xl md:text-2xl text-[#1a2a3a] font-normal mb-5">Eligibility</h3>
            <div className="bg-white border border-slate-200">
              {ELIGIBILITY.map((row, i) => (
                <div
                  key={row.criterion}
                  className={`grid grid-cols-[140px_1fr] md:grid-cols-[200px_1fr] gap-4 md:gap-8 p-4 md:p-5 ${i !== ELIGIBILITY.length - 1 ? "border-b border-slate-100" : ""}`}
                >
                  <p className="text-[#1a2a3a] text-sm font-medium">{row.criterion}</p>
                  <p className="text-slate-600 text-sm font-light leading-relaxed">{row.threshold}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Instruments */}
          <div className="mb-14">
            <h3 className="text-xl md:text-2xl text-[#1a2a3a] font-normal mb-2">Instruments</h3>
            <p className="text-[#a68a1f] text-xs font-medium tracking-[0.2em] uppercase mb-5">Never plain common equity</p>
            <div className="grid md:grid-cols-2 gap-4">
              {INSTRUMENTS.map((inst) => (
                <div key={inst.name} className="bg-white border border-slate-200 p-5">
                  <p className="text-[#1a2a3a] font-medium text-base mb-1.5">{inst.name}</p>
                  <p className="text-slate-500 text-sm font-light">{inst.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio construction */}
          <div className="mb-14">
            <h3 className="text-xl md:text-2xl text-[#1a2a3a] font-normal mb-5">Portfolio construction</h3>
            <div className="bg-white border border-slate-200 p-6 md:p-7">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="stat-value text-2xl md:text-3xl text-[#1a2a3a] mb-1">4–6</p>
                  <p className="text-slate-500 text-xs font-light tracking-wide uppercase">Positions per fund</p>
                </div>
                <div>
                  <p className="stat-value text-2xl md:text-3xl text-[#1a2a3a] mb-1">US$3–5M</p>
                  <p className="text-slate-500 text-xs font-light tracking-wide uppercase">Average check</p>
                </div>
                <div>
                  <p className="stat-value text-2xl md:text-3xl text-[#1a2a3a] mb-1">~25%</p>
                  <p className="text-slate-500 text-xs font-light tracking-wide uppercase">Single-name cap</p>
                </div>
                <div>
                  <p className="stat-value text-2xl md:text-3xl text-[#1a2a3a] mb-1">~25%</p>
                  <p className="text-slate-500 text-xs font-light tracking-wide uppercase">Reserve ratio</p>
                </div>
              </div>
            </div>
          </div>

          {/* Exit pathways */}
          <div className="mb-14">
            <h3 className="text-xl md:text-2xl text-[#1a2a3a] font-normal mb-5">Exit pathways</h3>
            <div className="space-y-3">
              <div className="bg-white border border-slate-200 p-5 flex items-start gap-4">
                <span className="text-[#a68a1f] text-xs font-semibold tracking-[0.2em] uppercase whitespace-nowrap mt-0.5">Primary</span>
                <div>
                  <p className="text-[#1a2a3a] font-medium text-sm mb-1">US IPO — Nasdaq / NYSE</p>
                  <p className="text-slate-500 text-sm font-light">For multiple expansion.</p>
                </div>
              </div>
              <div className="bg-white border border-slate-200 p-5 flex items-start gap-4">
                <span className="text-[#a68a1f] text-xs font-semibold tracking-[0.2em] uppercase whitespace-nowrap mt-0.5">Secondary</span>
                <div>
                  <p className="text-[#1a2a3a] font-medium text-sm mb-1">HKEX listing</p>
                  <p className="text-slate-500 text-sm font-light">The route where Lumina&apos;s sponsor track record provides direct execution capability.</p>
                </div>
              </div>
              <div className="bg-white border border-slate-200 p-5 flex items-start gap-4">
                <span className="text-[#a68a1f] text-xs font-semibold tracking-[0.2em] uppercase whitespace-nowrap mt-0.5">Tertiary</span>
                <div>
                  <p className="text-[#1a2a3a] font-medium text-sm mb-1">M&amp;A</p>
                </div>
              </div>
              <div className="bg-white border border-slate-200 p-5 flex items-start gap-4">
                <span className="text-[#a68a1f] text-xs font-semibold tracking-[0.2em] uppercase whitespace-nowrap mt-0.5">Floor</span>
                <div>
                  <p className="text-[#1a2a3a] font-medium text-sm mb-1">Secondary sale or buyback</p>
                  <p className="text-slate-500 text-sm font-light">Protective floor on every position.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sector mix */}
          <div>
            <h3 className="text-xl md:text-2xl text-[#1a2a3a] font-normal mb-5">Target sector mix</h3>
            <p className="text-slate-600 text-[15px] leading-[1.8] font-light">
              AI / enterprise tech · healthcare and biotech · advanced manufacturing · consumer · new energy · fintech (selective).
            </p>
          </div>
        </div>
      </section>

      {/* WHY LUMINA — MANDY */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.28em] uppercase text-center mb-3">Why Lumina</p>
          <h2 className="text-3xl md:text-4xl mb-12 text-center font-normal">Mandy Cheung</h2>

          {/* Mandy stats + bio */}
          <div className="space-y-4 text-slate-600 text-[15px] leading-[1.8] font-light mb-10 max-w-3xl mx-auto">
            <ul className="space-y-2">
              <li className="flex items-start gap-3"><span className="text-[#c9a227] mt-1.5 text-[10px]">✦</span><span><span className="text-[#1a2a3a] font-medium">10+ years</span> in corporate finance, IPO, M&amp;A, restructuring, and capital markets.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#c9a227] mt-1.5 text-[10px]">✦</span><span><span className="text-[#1a2a3a] font-medium">60+ corporate transactions</span> advised on.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#c9a227] mt-1.5 text-[10px]">✦</span><span><span className="text-[#1a2a3a] font-medium">US$200M+</span> in completed deal value.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#c9a227] mt-1.5 text-[10px]">✦</span><span><span className="text-[#1a2a3a] font-medium">Cross-border footprint</span> across Hong Kong, mainland China, and the UAE.</span></li>
            </ul>
          </div>

          {/* Named transactions */}
          <div className="mb-12 pb-12 border-b border-slate-200">
            <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase mb-4">Named HKEX sponsor / advisory roles</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {NAMED_TRANSACTIONS.map((t) => (
                <p key={t} className="text-[#1a2a3a] text-sm font-medium flex items-start gap-2">
                  <span className="text-[#c9a227]">·</span>{t}
                </p>
              ))}
            </div>
          </div>

          {/* Execution network */}
          <div>
            <h3 className="text-xl md:text-2xl text-[#1a2a3a] font-normal mb-2">Execution network</h3>
            <p className="text-slate-600 text-sm font-light leading-relaxed mb-6 max-w-2xl">
              Lumina&apos;s transaction execution leverages a network of professional service firms with provable working history:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {EXECUTION_NETWORK.map((firm) => (
                <div key={firm.name} className="bg-[#f8f7f4] border-l-2 border-[#c9a227] p-5">
                  <p className="text-[#1a2a3a] font-medium text-base mb-1">{firm.name}</p>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">{firm.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-sm font-light italic mt-6">
              The current pipeline includes a US-listing candidate engaged with Loeb &amp; Loeb as US securities counsel.
            </p>
          </div>
        </div>
      </section>

      {/* WHY THE LPF WRAPPER */}
      <section className="py-20 md:py-28 px-6 bg-[#f8f7f4]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.28em] uppercase text-center mb-3">Why the LPF wrapper</p>
          <h2 className="text-3xl md:text-4xl mb-8 text-center font-normal">The credible onshore alternative</h2>

          <div className="space-y-4 text-slate-600 text-[15px] leading-[1.8] font-light mb-10 max-w-3xl mx-auto">
            <p>
              Hong Kong&apos;s Limited Partnership Fund regime, launched in 2020, has emerged as the credible onshore alternative to Cayman, Delaware, and Luxembourg structures.
            </p>
            <p>
              <span className="text-[#1a2a3a] font-medium">1,347 LPFs were registered by end-2025, up 35% YoY</span>
              <span className="text-slate-500"> (HK Companies Registry, January 2026).</span>
            </p>
          </div>

          {/* Tax benefits grid */}
          <p className="text-slate-500 text-xs font-medium tracking-[0.2em] uppercase mb-4 text-center">For UAE family offices and cross-border investors</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mb-8">
            {LPF_BENEFITS.map((b) => (
              <div key={b.label} className="bg-white border border-slate-200 p-5 md:p-6 text-center">
                <p className="stat-value text-3xl md:text-4xl text-[#c9a227] mb-2">{b.v}</p>
                <p className="text-[#1a2a3a] font-medium text-sm mb-1">{b.label}</p>
                <p className="text-slate-500 text-xs font-light leading-relaxed">{b.sub}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-slate-200 p-6 md:p-7 max-w-2xl mx-auto">
            <ul className="space-y-2.5 text-slate-600 text-sm font-light leading-relaxed">
              <li className="flex items-start gap-2"><span className="text-[#c9a227]">✦</span><span><span className="text-[#1a2a3a] font-medium">USD-denominated</span> — no RMB convertibility risk.</span></li>
              <li className="flex items-start gap-2"><span className="text-[#c9a227]">✦</span><span><span className="text-[#1a2a3a] font-medium">English-law-friendly</span> wrapper with full access to PRC and HK growth-company origination.</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* DISCIPLINE & GOVERNANCE */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.28em] uppercase mb-3">Discipline, alignment, governance</p>
          <h2 className="text-2xl md:text-3xl mb-6 font-normal">Structure that does the work</h2>
          <div className="space-y-4 text-slate-600 text-[15px] leading-[1.8] font-light">
            <p>
              Every position carries structured downside: valuation caps, liquidation preference, milestone-tied drawdowns, redemption rights. Every fund decision sits inside an LPAC-governed framework with conflict policy, valuation policy, independent oversight, and a key-person clause.
            </p>
            <p>
              Advisory fees received from portfolio companies are disclosed quarterly and offset against management fee. The LP never pays twice for the same work.
            </p>
          </div>
        </div>
      </section>

      {/* STRATEGIC ACCESS */}
      <section className="py-20 md:py-28 px-6 bg-[#1a2a3a]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#f5e6b3] text-xs font-medium tracking-[0.28em] uppercase text-center mb-3">Strategic Access</p>
          <h2 className="text-3xl md:text-4xl mb-6 text-center font-normal !text-white">For investors who bring more than capital</h2>
          <p className="text-center text-white/75 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Some investors know private companies through business, family, industry, or portfolio networks but have no structure to monetize that access.
          </p>

          <p className="text-white/80 font-light leading-relaxed max-w-2xl mx-auto mb-10 text-center">
            Anchor LPs may sign a <span className="text-[#f5e6b3] font-medium">Strategic Access Agreement</span> to introduce companies from their network for screening. Accepted introductions earn the introducing LP:
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {STRATEGIC_ACCESS.map((s) => (
              <div key={s.h} className="border border-[#c9a227]/30 p-6 bg-[#0f1a24]/50">
                <p className="text-[#f5e6b3] font-medium text-base mb-2">{s.h}</p>
                <p className="text-white/70 text-sm font-light leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-white/60 text-sm font-light italic mt-10 max-w-2xl mx-auto">
            This is a fund right, not a referral commission. It is the cleanest way to reward strategic LPs for proprietary deal access without creating regulatory or commercial conflict.
          </p>
        </div>
      </section>

      {/* NEXT STEPS */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.28em] uppercase text-center mb-3">Next steps</p>
          <h2 className="text-3xl md:text-4xl mb-12 text-center font-normal">For Professional Investors</h2>

          <div className="space-y-4">
            {NEXT_STEPS.map((step) => (
              <div key={step.n} className="bg-[#f8f7f4] border border-slate-200 p-6 md:p-7 flex items-start gap-5 md:gap-8">
                <p className="stat-value text-2xl md:text-3xl text-[#c9a227] flex-shrink-0">{step.n}</p>
                <div>
                  <p className="text-[#1a2a3a] font-medium text-base md:text-lg mb-1">{step.h}</p>
                  <p className="text-slate-600 text-sm font-light leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 bg-[#1a2a3a]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-normal mb-3 cta-title-gradient">Request the confidential materials</h2>
          <p className="text-slate-300 font-light mb-7 text-base">
            The full investor presentation is shared under NDA. Get in touch and I&apos;ll send the details.
          </p>
          <div className="flex flex-col gap-3 items-center">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Lumina%20Capital%20Event%20Access%20Fund%20I%20%E2%80%94%20Investor%20Materials%20Request`}
              className="w-full md:w-[520px] mx-auto flex items-center justify-center whitespace-nowrap px-10 py-4 rounded-none shadow-lg uppercase tracking-[0.15em] text-sm btn-gold-animated"
            >
              Request materials
            </a>
            <a
              href="https://tidycal.com/mandyc852/30-minute-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-[520px] mx-auto flex items-center justify-center whitespace-nowrap px-10 py-4 bg-transparent border-2 border-white/70 text-white text-sm font-medium tracking-[0.15em] transition-all duration-300 hover:bg-white/10 rounded-none uppercase"
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
            This document is for discussion purposes only and does not constitute an offer, solicitation, or investment advice. Investments in pre-IPO companies involve significant risks, including total loss of capital. Past performance is not indicative of future results. Any fund participation is subject to legal, regulatory, tax, and compliance review and to the executed Limited Partnership Agreement. For Professional Investors only.
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
