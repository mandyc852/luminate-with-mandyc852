"use client"

import { useState, useEffect } from "react"
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

const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/4gM7sMcTx1Qv9bZ1VrgnK00"
const TIDYCAL_URL = "https://tidycal.com/mandyc852/30-minute-meeting"
const GUIDE_URL = "/lead-magnet/Should-you-go-public-guide.pdf"

// TODO(analytics): wire these helpers to the analytics provider when one is added
// (e.g. gtag, Plausible, PostHog). For now they push to window.dataLayer and
// window.plausible if either is present — both no-op otherwise so they never
// block a click.
function fireAnalytics(event: string, props: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return
  const w = window as unknown as {
    dataLayer?: Array<Record<string, unknown>>
    plausible?: (event: string, opts?: Record<string, unknown>) => void
  }
  try {
    w.dataLayer?.push({ event, ...props })
    w.plausible?.(event, { props })
  } catch {
    // analytics must never break the user click
  }
}

function trackBookClick() {
  fireAnalytics("ipo_path_book_click", { value: 2500, currency: "USD" })
}
function trackCallClick() {
  fireAnalytics("ipo_path_call_click")
}

// TODO(fulfillment): after the Stripe Payment Link is live, wire a Stripe
// webhook → email automation so paid customers receive (1) ExitPro access at
// https://exitproai.vercel.app/, (2) the intake link, and (3) the bonus PDFs.
// Suggested stack: Stripe webhook → Vercel serverless route → Resend/Postmark
// email + ExitPro account-provisioning API call.

const VALUE_STACK_TOP = [
  {
    n: "01",
    title: "ExitPro access — intake & comp research",
    value: "US$1,500",
    body:
      "Private access to ExitPro, Mandy’s IPO-readiness platform. Upload your financials and cap table; within 24 hours you receive a first-cut readiness scan against NASDAQ, NYSE American, and HKEX thresholds — plus P/E and P/S comps for your sector.",
  },
  {
    n: "02",
    title: "Two-week deep review by Mandy",
    value: "US$5,000",
    body:
      "Mandy goes deeper than ExitPro. Pressure-tests the equity story. Maps the listing routes that actually fit. Surfaces what will come up in due diligence — before it does.",
  },
  {
    n: "03",
    title: "90-minute strategic working call",
    value: "US$1,500",
    body:
      "One session, video. Together we walk through every finding. CFO, co-founder, or board chair welcome in the room.",
  },
]

const VALUE_STACK_BOTTOM = [
  {
    n: "05",
    title: "Two 30-minute follow-up calls in the 30 days after delivery",
    value: "US$1,000",
    body:
      "For clarifying questions and tactical decisions as you start moving on the memo. Booked at your pace, on your schedule.",
  },
  {
    n: "06",
    title: "Direct email access for 30 days",
    value: "US$500",
    body:
      "48-hour response window. For the questions that come up between calls.",
  },
]

const MEMO_BULLETS: Array<[string, string]> = [
  ["Readiness verdict", "score, reasoning, evidence"],
  ["Listing route recommendation", "NASDAQ, NYSE American, HKEX, dual-track, or “not yet”"],
  ["Top 5 fixes", "ranked by deal impact, with sequencing"],
  ["Indicative timeline", "best, realistic, worst case"],
  ["Indicative all-in cost range", "for the listing process"],
  ["Comparable deals from Mandy’s book", "with similar profiles (anonymised)"],
  ["Honest red flags", "plus remediation steps"],
]

const TIMELINE = [
  { num: "01", tag: "Day 0", title: "Book & receive ExitPro access", body: "You book and pay. ExitPro access and intake link arrive within 24 hours." },
  { num: "02", tag: "Days 1 – 7", title: "Intake & uploads", body: "You complete ExitPro intake; upload financials and cap table. We schedule the 90-minute call." },
  { num: "03", tag: "Days 7 – 14", title: "Call & memo drafted", body: "The working call. Then Mandy writes your Listing Path Memo." },
  { num: "04", tag: "Day 14", title: "Memo delivered", body: "Yours regardless of whether we continue together." },
  { num: "05", tag: "Days 15 – 30", title: "Follow-up support", body: "Two 30-minute follow-up calls and direct email access as you start moving." },
]

const RISK_REVERSAL = [
  {
    title: "100% creditable toward continuation",
    body:
      "If the memo identifies a continuation path — a 90-Day Strategic Engagement (US$15,000) or a full advisory mandate — the entire US$2,500 is credited toward it, provided you book within 60 days of memo delivery. For a continuing client, the Assessment is effectively free.",
  },
  {
    title: "14-day delivery guarantee",
    body:
      "Memo delivered within 14 days of the working call, or 50% of your fee is refunded.",
  },
  {
    title: "If you’re not ready, I tell you exactly what to do",
    body:
      "No upsell, no extra charge. The “not yet” verdict comes with a clear plan for what 12 to 24 months of focused work should look like before you re-approach the market. That’s the assessment doing its job — not failing.",
  },
]

const FAQ: Array<{ q: string; a: React.ReactNode }> = [
  {
    q: "How is this different from the free IPO Guide?",
    a: (
      <p>
        The guide educates — listing requirements, costs, structuring strategies. The IPO Path Assessment delivers a verdict on your specific company: whether it qualifies, which route fits, and what needs to change before you spend on advisors. One is general knowledge; the other is a company-level answer.
      </p>
    ),
  },
  {
    q: "How is this different from the 90-Day Strategic Engagement?",
    a: (
      <p>
        The Assessment answers “should we list, and if so how.” The 90-Day Engagement structures the company so the listing can actually happen — sequenced fixes, weekly working sessions, monthly strategic reports. The Assessment is the input; the Engagement is the execution. The US$2,500 Assessment fee credits in full toward the Engagement if you continue.
      </p>
    ),
  },
  {
    q: "Is this a sales call dressed as an assessment?",
    a: (
      <p>
        No. The memo is the product. You receive it whether or not we work together after. The credit-back structure means there is no upsell pressure during the call — if you continue, the Assessment is free; if you don&apos;t, you&apos;ve already received what you paid for.
      </p>
    ),
  },
  {
    q: "Can my CFO or co-founder join the 90-minute call?",
    a: <p>Yes. The call works better with the operator and one financial decision-maker in the room.</p>,
  },
  {
    q: "What is ExitPro and why is it included?",
    a: (
      <p>
        ExitPro is an IPO-readiness research platform Mandy built. For this Assessment it serves two roles: structured intake (you upload financials and cap table; it surfaces structural gaps against listing thresholds), and comp research (P/E and P/S benchmarking for comparable listed companies in your sector). It does some of the first-pass analysis that would otherwise eat the working call.
      </p>
    ),
  },
  {
    q: "Refund policy and confidentiality?",
    a: (
      <p>
        Full refund any time before the 90-minute working call. After the call, no refund — the memo is being produced. NDA on request before intake; standard practice regardless.
      </p>
    ),
  },
]

function ValueBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center border border-[#c9a227] text-[#a68a1f] px-2.5 py-1 text-[11px] font-medium tracking-[0.18em] uppercase whitespace-nowrap">
      Value · {children}
    </span>
  )
}

function StackCard({ n, title, body, value }: { n: string; title: string; body: string; value: string }) {
  return (
    <div className="bg-white border border-slate-200 p-7 md:p-8 flex flex-col h-full hover:border-[#c9a227]/40 transition-colors">
      <div className="flex items-start justify-between gap-4 mb-5">
        <span
          className="flex-shrink-0 w-11 h-11 rounded-full border-2 border-[#c9a227] flex items-center justify-center text-[#a68a1f] text-base font-medium"
          style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
        >
          {n}
        </span>
        <ValueBadge>{value}</ValueBadge>
      </div>
      <h3 className="text-lg md:text-xl font-normal text-[#1a2a3a] mb-3 leading-snug">{title}</h3>
      <p className="text-slate-600 font-light leading-[1.75] text-[14.5px] flex-grow">{body}</p>
    </div>
  )
}

function GuaranteeAccordion({ icon, label, title, body }: { icon: React.ReactNode; label: string; title: string; body: string }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      {/* Mobile: accordion */}
      <div className="md:hidden bg-white border border-slate-200">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center gap-4 px-5 py-4 text-left"
          aria-expanded={open}
        >
          <div className="flex-shrink-0 w-9 h-9 rounded-full border-2 border-[#c9a227] flex items-center justify-center">
            <span className="scale-75">{icon}</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[#a68a1f] text-[9px] font-medium tracking-[0.25em] uppercase mb-0.5">{label}</p>
            <h3 className="text-base font-normal text-[#1a2a3a] leading-snug">{title}</h3>
          </div>
          <svg className={`flex-shrink-0 w-4 h-4 text-[#a68a1f] transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {open && (
          <div className="px-5 pb-4 text-slate-600 font-light text-[14px] leading-[1.75] border-t border-slate-100">
            <p className="pt-3">{body}</p>
          </div>
        )}
      </div>
      {/* Desktop: full card */}
      <div className="hidden md:flex bg-white border border-slate-200 p-8 flex-col">
        <div className="w-14 h-14 rounded-full border-2 border-[#c9a227] flex items-center justify-center mb-5">
          {icon}
        </div>
        <p className="text-[#a68a1f] text-[10px] font-medium tracking-[0.25em] uppercase mb-3">{label}</p>
        <h3 className="text-xl font-normal text-[#1a2a3a] mb-3 leading-snug">{title}</h3>
        <p className="text-slate-600 font-light leading-[1.75] text-[14.5px]">{body}</p>
      </div>
    </>
  )
}

function FAQItem({ q, a }: { q: string; a: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base md:text-lg text-[#1a2a3a] font-normal" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
          {q}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 mt-2 text-[#a68a1f] transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="pb-6 pr-8 text-slate-600 font-light leading-[1.8] text-[15px]">{a}</div>}
    </div>
  )
}

const PRODUCT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "The IPO Path Assessment",
  description:
    "A 30-day assessment that delivers a written verdict on whether your company is ready to list — with the next move spelled out. Fully creditable toward continuation engagements within 60 days.",
  brand: { "@type": "Brand", name: "MandyC." },
  category: "Capital Markets Advisory",
  offers: {
    "@type": "Offer",
    price: "2500",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://mandyc.me/ipo-path",
  },
}

export default function IPOPathPage() {
  const [showFloatingButton, setShowFloatingButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingButton(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`${cormorantGaramond.variable} ${poppins.variable} min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50/80`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_JSONLD) }}
      />

      <style jsx global>{`
        :root {
          --navy-deep: #1a2a3a;
          --navy-medium: #2d4156;
          --navy-light: #3d5a73;
          --gold-primary: #c9a227;
          --gold-light: #d4b84a;
          --gold-dark: #a68a1f;
          --cream: #fafaf9;
          --charcoal: #1c1917;
          --text-primary: #3d4f5f;
          --text-secondary: #5a6d7d;
        }
        html { scroll-behavior: smooth; }
        body {
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, rgba(248, 250, 252, 0.8) 100%);
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
        p, label, input, button { font-family: var(--font-poppins), sans-serif; }

        .gradient-text-hero {
          background: linear-gradient(135deg, #FFFFFF 0%, #f5e6b3 40%, #c9a227 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cta-title-gradient {
          background: linear-gradient(135deg, #d4b84a 0%, #c9a227 50%, #f5e6b3 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .btn-gold-animated {
          position: relative;
          background: linear-gradient(135deg, #a68a1f 0%, #c9a227 25%, #d4b84a 50%, #c9a227 75%, #a68a1f 100%);
          background-size: 200% 200%;
          color: #1a2a3a;
          box-shadow: 0 4px 14px rgba(26, 42, 58, 0.25), 0 2px 8px rgba(201, 162, 39, 0.2);
          font-weight: 500;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
        }
        .btn-gold-animated:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(26, 42, 58, 0.35), 0 4px 15px rgba(201, 162, 39, 0.3);
          animation: shimmerGold 1.5s ease infinite;
        }
        @keyframes shimmerGold {
          0% { background-position: 200% 0%; }
          100% { background-position: -200% 0%; }
        }
        .floating-cta {
          position: fixed; bottom: 24px; right: 24px; z-index: 1000;
          animation: pulseGlow 2.5s ease-in-out infinite;
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(201, 162, 39, 0.4), 0 0 40px rgba(201, 162, 39, 0.2); }
          50% { box-shadow: 0 0 30px rgba(201, 162, 39, 0.6), 0 0 60px rgba(201, 162, 39, 0.3); }
        }
        @media (max-width: 768px) { .floating-cta { bottom: 16px; right: 16px; } }
      `}</style>

      <SiteHeader
        links={[
          { label: "What You Get", href: "#what-you-get" },
          { label: "Process", href: "#process" },
          { label: "Guarantees", href: "#guarantees" },
          { label: "FAQ", href: "#faq" },
        ]}
        bookHref={TIDYCAL_URL}
      />

      {/* HERO */}
      <section className="relative w-full py-10 md:py-20 px-6 overflow-hidden bg-[#1a2a3a]">
        <Image
          src="/Wallstreet.jpg"
          alt="New York Stock Exchange, Wall Street"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2a3a]/88 via-[#1a2a3a]/80 to-[#1a2a3a]/92 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* Mandy photo — small, circular, anchors the offer to a person */}
          <div className="flex justify-center mb-5">
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-2 ring-[#c9a227]/70 ring-offset-4 ring-offset-[#1a2a3a]/80">
              <Image
                src="/Profile pic 4.png"
                alt="Mandy Cheung"
                fill
                priority
                className="object-cover object-[50%_15%] scale-[1.3]"
                sizes="96px"
              />
            </div>
          </div>

          <p className="text-[#f5e6b3] text-[11px] font-medium tracking-[0.32em] uppercase mb-5" style={{ textShadow: "0 1px 12px rgba(0,0,0,0.6)" }}>
            <span className="inline-block w-8 h-px bg-[#f5e6b3]/60 align-middle mr-3" />
            MandyC. · Capital Markets Advisory
            <span className="inline-block w-8 h-px bg-[#f5e6b3]/60 align-middle ml-3" />
          </p>

          <h1 className="gradient-text-hero text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.05] font-normal mb-6 tracking-tight" style={{ filter: "drop-shadow(0 2px 18px rgba(0,0,0,0.5))" }}>
            The IPO Path Assessment.
          </h1>

          <p className="text-lg md:text-xl text-white/95 font-light leading-[1.55] mb-10 max-w-2xl mx-auto" style={{ textShadow: "0 1px 16px rgba(0,0,0,0.6)" }}>
            Know if your company is ready to list — before you spend US$1.5M finding out the hard way.
          </p>

          <div className="flex flex-col items-center gap-4">
            <a
              href={STRIPE_PAYMENT_LINK}
              onClick={trackBookClick}
              className="w-full sm:w-[520px] inline-flex items-center justify-center whitespace-nowrap px-8 py-4 rounded-none shadow-lg uppercase tracking-wide text-sm btn-gold-animated"
            >
              Book the Assessment — US$2,500
            </a>
            <a
              href={TIDYCAL_URL}
              onClick={trackCallClick}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-[#f5e6b3] text-sm font-light underline decoration-white/30 hover:decoration-[#f5e6b3] underline-offset-4 transition-colors"
            >
              Or talk first — book a free 30-minute call →
            </a>
            <p className="text-[#f5e6b3]/90 text-[11px] font-medium tracking-[0.22em] uppercase mt-3" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
              US$2,500 · 30-Day Assessment · Fully Creditable · 4 Spots Per Month
            </p>
          </div>
        </div>
      </section>

      {/* AUTHORITY STRIP — early social proof */}
      <section className="bg-white border-y border-slate-200 py-5 md:py-7 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#a68a1f] text-[10px] font-medium tracking-[0.32em] uppercase text-center mb-5">
            The Advisor Behind The Memo
          </p>
          <div className="grid grid-cols-4 gap-x-2 md:gap-x-8">
            {[
              ["60+", "Transactions"],
              ["US$500M+", "Deal Value"],
              ["10+ Yrs", "Cross-Border"],
              ["SFC Type 6", "Licensed"],
            ].map(([num, label]) => (
              <div key={label} className="text-center">
                <p className="text-base md:text-3xl font-normal text-[#1a2a3a] mb-1 leading-tight" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                  {num}
                </p>
                <p className="text-[8px] md:text-[11px] font-medium tracking-[0.15em] md:tracking-[0.2em] uppercase text-slate-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THIS EXISTS */}
      <section className="py-12 md:py-16 px-6 bg-slate-50/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-7 text-center font-normal leading-[1.2]" style={{ textWrap: "balance" }}>
            Most companies don&apos;t fail at the listing. They fail in the 18 months before it.
          </h2>

          <div className="space-y-5 text-slate-600 text-[15px] leading-[1.85] font-light">
            <p>
              Founders preparing for a public listing typically spend US$1.5M to US$3M+ getting there. Most start the readiness conversation six to eighteen months too late. By the time the lawyers, auditors, and sponsors are in the room, the gaps that delayed the deal — cap-table issues, financial restatements, an unclean narrative, missing structural pieces — were knowable a year earlier. They&apos;re just expensive to fix at that point.
            </p>
            <p>
              The IPO Path Assessment surfaces those gaps now. Before the spend. Before the timeline pressure. Before the deal team is committed.
            </p>
          </div>

          {/* Comparison: The Hard Way vs. Now */}
          <div className="mt-8 grid grid-cols-2 overflow-hidden">
            <div className="bg-[#1a2a3a] p-4 md:p-8">
              <p className="text-[9px] md:text-[10px] font-medium tracking-[0.15em] md:tracking-[0.22em] uppercase text-[#a68a1f] mb-3 md:mb-4">Finding out during due diligence</p>
              <p className="text-xl md:text-4xl font-normal text-white line-through decoration-1 mb-1" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>~US$1M+</p>
              <p className="text-slate-400 font-light text-xs md:text-sm mb-4 md:mb-5">in sunk costs</p>
              <p className="text-lg md:text-3xl font-normal text-white line-through decoration-1 mb-1" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>18+ months</p>
              <p className="text-slate-400 font-light text-xs md:text-sm">lost, deal team committed</p>
            </div>
            <div className="bg-white p-4 md:p-8 border-l-2 border-[#c9a227]">
              <p className="text-[9px] md:text-[10px] font-medium tracking-[0.15em] md:tracking-[0.22em] uppercase text-[#a68a1f] mb-3 md:mb-4">Finding out now</p>
              <p className="text-xl md:text-4xl font-normal text-[#1a2a3a] mb-1" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>US$2,500</p>
              <p className="text-slate-500 font-light text-xs md:text-sm mb-4 md:mb-5">fully creditable</p>
              <p className="text-lg md:text-3xl font-normal text-[#1a2a3a] mb-1" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>30 days</p>
              <p className="text-slate-500 font-light text-xs md:text-sm">written verdict, no commitment</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-12 md:py-16 px-6 bg-[#f8f7f4]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-3 text-center font-normal">
            Who this is for
          </h2>
          <p className="text-slate-500 font-light text-base text-center mb-10">Built for founders who are past the idea stage</p>
          <ul className="space-y-5">
            {[
              <>Founders or executives whose company generates <strong className="text-[#1a2a3a] font-medium">US$750K+ in net profit</strong> — or has a business unit that does.</>,
              <>Companies thinking about a public listing in the <strong className="text-[#1a2a3a] font-medium">next 6 to 36 months</strong> — NASDAQ, NYSE American, HKEX, or weighing between them.</>,
              <>Operators who already understand that <strong className="text-[#1a2a3a] font-medium">an IPO is a structural project</strong>, not a one-line decision.</>,
            ].map((node, i) => (
              <li key={i} className="flex items-start gap-4 text-base leading-[1.8] text-slate-600 font-light">
                <span className="flex-shrink-0 mt-1 w-6 h-6 rounded-full border border-[#c9a227] flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#a68a1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>{node}</span>
              </li>
            ))}
          </ul>

          <p className="text-slate-500 italic font-light text-sm mt-6 leading-[1.8] max-w-2xl mx-auto text-center">
            This is not for companies that need capital next quarter, founders shopping purely on price, or businesses where the financials would not survive due diligence.
          </p>
        </div>
      </section>

      {/* WHAT YOU GET — THE STACK */}
      <section id="what-you-get" className="scroll-anchor py-12 md:py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase text-center mb-3">
            The Stack
          </p>
          <h2 className="text-3xl md:text-4xl mb-7 text-center font-normal">
            What you get over the 30 days
          </h2>

          {/* Top row: cards 1, 2, 3 */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-5 mb-4 md:mb-5">
            {VALUE_STACK_TOP.map((c) => (
              <StackCard key={c.n} {...c} />
            ))}
          </div>

          {/* Card 4 — Listing Path Memo (centerpiece, full-width navy) */}
          <div className="relative bg-[#1a2a3a] text-white p-7 md:p-10 mb-5 md:mb-6 overflow-hidden">
            <span className="absolute top-0 left-8 bg-[#c9a227] text-[#1a2a3a] text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1.5">
              The Centerpiece
            </span>
            <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-12 mt-6 md:mt-4">
              <div>
                <div className="flex items-start justify-between gap-4 mb-5">
                  <span
                    className="flex-shrink-0 w-11 h-11 rounded-full border-2 border-[#f5e6b3] flex items-center justify-center text-[#f5e6b3] text-base font-medium"
                    style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
                  >
                    04
                  </span>
                  <span className="inline-flex items-center border border-[#f5e6b3]/60 text-[#f5e6b3] px-2.5 py-1 text-[11px] font-medium tracking-[0.18em] uppercase whitespace-nowrap">
                    Value · US$5,000
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-normal mb-3 leading-snug" style={{ fontFamily: "var(--font-cormorant-garamond), serif", color: "#ffffff" }}>
                  The Listing Path Memo
                </h3>
                <p className="text-[#f5e6b3]/80 text-sm font-light">8 to 12 pages, delivered within 14 days</p>
              </div>
              <ul className="space-y-3 md:border-l md:border-white/15 md:pl-10">
                {MEMO_BULLETS.map(([title, body]) => (
                  <li key={title} className="flex gap-3 text-slate-200 font-light leading-[1.7] text-[15px]">
                    <span className="text-[#c9a227] mt-0.5 flex-shrink-0">•</span>
                    <span>
                      <span className="text-white font-medium">{title}</span> — {body}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom row: cards 5, 6 */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-5 mb-5 md:mb-6">
            {VALUE_STACK_BOTTOM.map((c) => (
              <StackCard key={c.n} {...c} />
            ))}
          </div>

          {/* Value-math summary — clean navy gradient, gold accents only in text */}
          <div
            className="relative overflow-hidden p-8 md:p-12"
            style={{
              background:
                "linear-gradient(135deg, #1a2a3a 0%, #2d4156 50%, #1a2a3a 100%)",
            }}
          >
            <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-center">
              <div className="text-center md:text-right">
                <p className="text-[#f5e6b3]/75 font-medium text-[11px] tracking-[0.22em] uppercase mb-2">
                  Total Stacked Value
                </p>
                <p
                  className="text-3xl md:text-4xl font-normal text-white/45 line-through decoration-1"
                  style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
                >
                  ~US$14,500
                </p>
              </div>

              <div className="hidden md:flex items-center justify-center">
                <svg className="w-8 h-8 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              <div className="text-center md:text-left">
                <p className="text-[#f5e6b3] font-medium text-[11px] tracking-[0.22em] uppercase mb-2">
                  Your Investment
                </p>
                <p
                  className="text-5xl md:text-6xl font-normal"
                  style={{
                    fontFamily: "var(--font-cormorant-garamond), serif",
                    background:
                      "linear-gradient(135deg, #f5e6b3 0%, #d4b84a 50%, #c9a227 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  US$2,500
                </p>
              </div>
            </div>

            <p className="text-white/80 font-light leading-[1.7] max-w-2xl mx-auto text-[14.5px] text-center mt-6 mb-5 pt-5 border-t border-white/15">
              Credited in full if you continue with a 90-Day Strategic Engagement or full advisory mandate within 60 days. For a continuing client, the assessment is effectively free.
            </p>

            <div className="flex flex-col items-center gap-3">
              <a
                href={STRIPE_PAYMENT_LINK}
                onClick={trackBookClick}
                className="w-full md:w-[520px] inline-flex items-center justify-center whitespace-nowrap px-10 py-4 rounded-none shadow-lg uppercase tracking-[0.15em] text-sm btn-gold-animated"
              >
                Secure Your Spot — US$2,500
              </a>
              <p className="text-[#f5e6b3]/70 text-[10px] font-medium tracking-[0.25em] uppercase">
                Only 4 Companies Accepted Per Month
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BONUSES INCLUDED */}
      <section className="py-12 md:py-16 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase text-center mb-3">
            Bonuses
          </p>
          <h2 className="text-3xl md:text-4xl mb-7 text-center font-normal">
            Plus, included free
          </h2>

          <div className="max-w-xl mx-auto">
            <div className="relative bg-white border border-slate-200 p-7 md:p-8 flex flex-col">
              <span className="absolute -top-3 left-6 bg-[#c9a227] text-[#1a2a3a] text-[10px] font-semibold tracking-[0.2em] uppercase px-2.5 py-1">
                Included free
              </span>
              <p className="text-[#a68a1f] text-xs font-medium tracking-[0.2em] uppercase mb-3 mt-2">Bonus</p>
              <h3 className="text-xl md:text-2xl font-normal text-[#1a2a3a] mb-3 leading-snug">Should You Take Your Company Public? — The Founder&apos;s Guide</h3>
              <p className="text-slate-600 font-light leading-[1.8] text-[14.5px]">A 10-page founder&apos;s guide covering listing thresholds for NASDAQ and HKEX, carve-out and roll-up strategies most founders haven&apos;t heard of, real cost ranges, and an honest red-flag list. Yours on booking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE 30-DAY PROCESS */}
      <section id="process" className="scroll-anchor py-12 md:py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase text-center mb-3">
            Timeline
          </p>
          <h2 className="text-3xl md:text-4xl mb-7 text-center font-normal">
            The 30-day process
          </h2>

          {/* Desktop: horizontal timeline */}
          <div className="hidden md:block relative">
            <div
              className="absolute left-0 right-0 top-7 h-px"
              style={{ background: "linear-gradient(90deg, transparent 0%, #c9a227 10%, #c9a227 90%, transparent 100%)" }}
              aria-hidden="true"
            />
            <div className="grid grid-cols-5 gap-4 relative">
              {TIMELINE.map((s) => (
                <div key={s.num} className="flex flex-col items-center text-center">
                  <div className="relative z-10 w-14 h-14 rounded-full bg-white border-2 border-[#c9a227] flex items-center justify-center shadow-sm">
                    <span className="text-[#a68a1f] text-lg font-normal" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                      {s.num}
                    </span>
                  </div>
                  <p className="text-[#a68a1f] text-[11px] font-medium tracking-[0.22em] uppercase mt-5 mb-2">{s.tag}</p>
                  <h3 className="text-base lg:text-lg font-normal text-[#1a2a3a] mb-2 leading-snug" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                    {s.title}
                  </h3>
                  <p className="text-slate-600 font-light text-[13.5px] leading-relaxed max-w-[200px]">{s.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden relative">
            <div className="absolute left-7 top-7 bottom-7 w-px bg-[#c9a227]" aria-hidden="true" />
            <div className="space-y-8">
              {TIMELINE.map((s) => (
                <div key={s.num} className="flex gap-5 relative">
                  <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-white border-2 border-[#c9a227] flex items-center justify-center shadow-sm">
                    <span className="text-[#a68a1f] text-lg font-normal" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                      {s.num}
                    </span>
                  </div>
                  <div className="pt-1.5">
                    <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase mb-1.5">{s.tag}</p>
                    <h3 className="text-xl font-normal text-[#1a2a3a] mb-2" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                      {s.title}
                    </h3>
                    <p className="text-slate-600 font-light text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RISK REVERSAL */}
      <section id="guarantees" className="scroll-anchor py-12 md:py-16 px-6 bg-[#f8f7f4]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase text-center mb-3">
            Three guarantees
          </p>
          <h2 className="text-2xl md:text-4xl mb-7 text-center font-normal">
            Why the math actually favors you
          </h2>

          <div className="flex flex-col md:grid md:grid-cols-3 gap-2 md:gap-5">
            {RISK_REVERSAL.map((r, i) => {
              const icons = [
                <svg key="i0" className="w-7 h-7 text-[#a68a1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>,
                <svg key="i1" className="w-7 h-7 text-[#a68a1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>,
                <svg key="i2" className="w-7 h-7 text-[#a68a1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>,
              ]
              return (
                <GuaranteeAccordion
                  key={i}
                  icon={icons[i]}
                  label={`Guarantee ${String(i + 1).padStart(2, "0")}`}
                  title={r.title}
                  body={r.body}
                />
              )
            })}
          </div>

          <div className="mt-6 max-w-3xl mx-auto">
            <div className="border-l-2 border-[#c9a227] pl-6 py-2 text-slate-500 font-light italic text-[15px] leading-[1.8]">
              I take a maximum of 4 companies per month — not 4 sessions per company, 4 companies total. The deep review and memo are 4 – 6 hours of senior advisory time each, and diluting that defeats the point. When the current month is full, you book the next.
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-anchor py-12 md:py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Mobile: circular photo + centered text */}
          <div className="flex flex-col items-center mb-8 md:hidden">
            <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-[#c9a227]/60 ring-offset-2 mb-5">
              <Image src="/Profile pic 4.png" alt="Mandy Cheung" fill loading="eager" className="object-cover" sizes="96px" />
            </div>
          </div>
          <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-8 md:gap-12 items-center">
            <div className="hidden md:block">
              <div className="relative aspect-[4/5] rounded-none overflow-hidden shadow-lg">
                <Image src="/Profile pic 4.png" alt="Mandy Cheung" fill loading="eager" className="object-cover" sizes="50vw" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-normal text-[#1a2a3a] mb-8 text-center md:text-left">About Mandy</h2>
              <div className="space-y-5 text-slate-600 text-base leading-relaxed font-light">
                <p>
                  Mandy Cheung is a Hong Kong SFC Type 6 licensed corporate finance advisor with 10+ years and 60+ transactions across HKEX and NASDAQ. IPOs, sponsor work, general offers under the Takeovers Code, convertible bonds, and privatisations. Cross-border work where regulatory complexity is the norm.
                </p>
                <p>
                  Most capital markets advisors serve businesses that have already arrived. Mandy works with the builders and operators still in the climb — because she is one of them.
                </p>
                <p className="text-[#1a2a3a] font-normal">
                  SFC Type 6 Licensed · 60+ Transactions · US$500M+ in Deal Value · HKEX &amp; NASDAQ.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mt-8">
                <a href="/#track-record" className="text-[#1a2a3a] hover:text-[#c9a227] font-medium text-sm underline decoration-slate-300 hover:decoration-[#c9a227] transition-colors">
                  See the full track record →
                </a>
                <span className="hidden sm:inline text-slate-300">·</span>
                <a href={GUIDE_URL} target="_blank" rel="noopener noreferrer" className="text-[#1a2a3a] hover:text-[#c9a227] font-medium text-sm underline decoration-slate-300 hover:decoration-[#c9a227] transition-colors">
                  Read the free guide first →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-anchor py-12 md:py-16 px-6 bg-[#f8f7f4]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase text-center mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl mb-7 text-center font-normal">
            Common questions
          </h2>

          <div className="bg-white border border-slate-200 px-7 md:px-10">
            {FAQ.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-10 md:py-14 px-6 bg-[#1a2a3a]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-normal mb-4 cta-title-gradient leading-[1.15]" style={{ textWrap: "balance" }}>
            Thirty days. One memo. The next move spelled out.
          </h2>
          <p className="text-slate-300 font-light mb-10 text-base md:text-lg">
            Whatever the verdict, you leave with a defensible answer and a plan.
          </p>

          {/* Value math repeated for the close */}
          <div className="inline-flex items-baseline gap-4 md:gap-5 mb-10">
            <span className="text-lg md:text-xl text-slate-400 line-through decoration-1 font-light" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
              ~US$14,500
            </span>
            <svg className="w-5 h-5 text-[#c9a227] self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <span className="text-4xl md:text-5xl font-normal" style={{
              fontFamily: "var(--font-cormorant-garamond), serif",
              background: "linear-gradient(135deg, #d4b84a 0%, #c9a227 50%, #f5e6b3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              US$2,500
            </span>
          </div>

          <div className="flex flex-col items-center gap-4 max-w-2xl mx-auto">
            <a
              href={STRIPE_PAYMENT_LINK}
              onClick={trackBookClick}
              className="w-full flex items-center justify-center whitespace-nowrap px-10 py-5 rounded-none shadow-lg uppercase tracking-[0.15em] text-sm btn-gold-animated"
            >
              Start the 30-Day Assessment
            </a>
            <a
              href={TIDYCAL_URL}
              onClick={trackCallClick}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-[#f5e6b3] text-sm font-light underline decoration-slate-500 hover:decoration-[#f5e6b3] underline-offset-4 transition-colors"
            >
              Or book a free 30-minute call first →
            </a>
          </div>
          <p className="text-slate-400 text-[10px] mt-8 font-medium tracking-[0.2em] uppercase">
            Fully creditable toward continuation · Only 4 companies per month
          </p>
        </div>
      </section>

      {/* Floating CTA */}
      {showFloatingButton && (
        <a
          href={STRIPE_PAYMENT_LINK}
          onClick={trackBookClick}
          className="floating-cta px-5 py-3.5 bg-gradient-to-br from-[#c9a227] to-[#a68a1f] text-[#1a2a3a] text-sm font-semibold tracking-wide rounded-none flex items-center gap-2 uppercase"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="hidden sm:inline">Book the Assessment</span>
        </a>
      )}

      {/* Footer */}
      <footer className="w-full bg-[#0f1a24] border-t border-[#1a2a3a] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-5">
            <div className="flex items-center justify-center gap-6">
              <a href="https://www.youtube.com/@MandyC852" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#c9a227] transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/mandyc852/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#c9a227] transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-1 text-center" style={{ fontFamily: "var(--font-poppins)" }}>
              <p className="text-slate-500 text-xs leading-relaxed mb-2 md:mb-0">
                © 2026 Lumina Consulting Limited
              </p>
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
    </div>
  )
}
