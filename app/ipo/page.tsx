"use client"

import { useState, useEffect, Fragment } from "react"
import Image from "next/image"
import { Cormorant_Garamond, Poppins } from "next/font/google"
import { SiteHeader } from "../_components/site-header"
import { BookCallButton } from "../_components/home-interactions"
import { DetailsDrawer } from "../_components/details-drawer"

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

/* Same booking URL the site has always used. */
const TIDYCAL_URL = "https://tidycal.com/mandyc852/30-minute-meeting"
const CTA_LABEL = "Book a Confidential Call"

const PRODUCT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "The 90-Day Readiness Engagement",
  serviceType: "IPO & Capital Markets Advisory",
  provider: { "@type": "Organization", name: "MandyC." },
  url: "https://mandyc.me/ipo",
  offers: {
    "@type": "Offer",
    price: "15000",
    priceCurrency: "USD",
    url: "https://mandyc.me/ipo",
  },
}

function PrimaryCTA({ className = "" }: { className?: string }) {
  return (
    <a
      href={TIDYCAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center whitespace-nowrap px-8 py-4 rounded-none uppercase tracking-[0.12em] text-sm font-semibold shadow-[0_4px_24px_rgba(201,162,39,0.45)] btn-gold-animated ${className}`}
      style={{ minHeight: 48 }}
    >
      {CTA_LABEL}
    </a>
  )
}

/* Mobile-only sticky bottom bar (<768px). Appears once the hero has scrolled away. */
function StickyMobileBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById("hero-section")
    const update = () => {
      const past = hero
        ? window.scrollY >= hero.offsetTop + hero.offsetHeight
        : window.scrollY > 400
      setVisible(past)
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-[900] bg-white border-t border-slate-200 shadow-[0_-6px_20px_rgba(15,26,36,0.08)] px-4 py-3 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-[#1a2a3a] text-[14px] font-semibold tracking-[0.02em] leading-tight">
          Ninety days to filing-ready
        </p>
        <a
          href={TIDYCAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? undefined : -1}
          className="flex-shrink-0 inline-flex items-center justify-center whitespace-nowrap px-5 py-3 rounded-none uppercase tracking-[0.1em] text-[12px] font-semibold btn-gold-animated"
          style={{ minHeight: 44 }}
        >
          Book a call
        </a>
      </div>
    </div>
  )
}

const WORKS_IF = [
  "You have decided to list, most likely on Nasdaq",
  "The business is genuinely profitable — roughly US$750K+ net",
  "You can give me straight answers about how the group is owned",
  "Someone senior can act on the plan between calls",
]

const DOES_NOT_WORK_IF = [
  "You need capital in the next ninety days",
  "Nobody on your side can make structural decisions",
  "You want to be told listing is a good idea when it is not",
  "You are looking for a guarantee that you will list",
]

const NEXT_STEPS: Array<{ lead: string; rest: string }> = [
  {
    lead: "Book a confidential call.",
    rest: " Thirty minutes, no charge, no deck. You describe the business; I tell you what I would want to look at first.",
  },
  {
    lead: "I tell you whether I can help",
    rest: " — or that I cannot. That happens, and it is fine.",
  },
  {
    lead: "If we proceed:",
    rest: " NDA, intake pack, and week one starts.",
  },
]

const SERVICES = [
  {
    title: "Listing strategy",
    body: "Full listing, carve-out, or roll-up — identifying the right path based on your business structure, financials, and goals.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Corporate restructuring",
    body: "Building the shareholding structure, deciding what stays in the parent vs. the listing vehicle, and ensuring regulatory compliance across jurisdictions.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Financial engineering",
    body: "Ensuring the carved-out or consolidated entity meets target exchange financial thresholds — audit-ready, compliant, and positioned for approval.",
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "Investable narrative",
    body: "Making the business story compelling to public market investors. The factor that goes beyond meeting minimum requirements.",
    icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
  },
  {
    title: "Investor sourcing",
    body: "For founders who need it: sourcing pre-IPO and listing investors through relationships built over a decade of cross-border deal work.",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    title: "Professional party coordination",
    body: "Sourcing and managing the full team: lawyers, auditors, sponsors, underwriters. One point of coordination through to listing.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
  },
]

export default function IPOAdvisoryPage() {
  return (
    <div
      className={`${cormorantGaramond.variable} ${poppins.variable} min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50/80`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_JSONLD) }}
      />

      <style jsx global>{`
        :root {
          --navy-deep: #1a2a3a;
          --navy-medium: #2d4156;
          --gold-primary: #c9a227;
          --gold-light: #d4b84a;
          --gold-dark: #a68a1f;
          /* Darker step of the same gold, for small-caps labels that must clear 4.5:1 */
          --gold-deep: #7d6715;
          --text-primary: #3d4f5f;
          --text-secondary: #5a6d7d;
        }
        html { scroll-behavior: smooth; }
        body {
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, rgba(248,250,252,0.8) 100%);
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
        p, li, label, input, button, summary { font-family: var(--font-poppins), sans-serif; }
        .gradient-text-hero {
          background: linear-gradient(135deg, #FFFFFF 0%, #f5e6b3 40%, #c9a227 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        /* Bottom room so the mobile sticky bar never covers footer content */
        @media (max-width: 767px) { .mobile-cta-spacer { height: 84px; } }
      `}</style>

      <SiteHeader
        links={[
          { label: "The Problem", href: "#the-problem" },
          { label: "How It Runs", href: "#how-it-runs" },
          { label: "Is This You?", href: "#is-this-you" },
          { label: "Questions", href: "#common-questions" },
        ]}
        bookHref={TIDYCAL_URL}
        hideGlobalLinks
      />

      {/* ── 1 · HERO — navy with Wall Street backdrop ───────────────────── */}
      <section
        id="hero-section"
        className="relative w-full overflow-hidden bg-[#1a2a3a]"
        style={{ minHeight: 560 }}
      >
        {/* Desktop: image on the right, dissolving into the navy */}
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[55%]">
          <Image
            src="/Wallstreet.jpg"
            alt="New York Stock Exchange, Wall Street"
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="55vw"
          />
          <div className="absolute left-0 top-0 bottom-0 w-[240px] bg-gradient-to-r from-[#1a2a3a] via-[#1a2a3a]/70 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[#1a2a3a]/20 pointer-events-none" />
        </div>
        {/* Mobile: full-bleed image under a navy overlay */}
        <div className="md:hidden absolute inset-0">
          <Image
            src="/Wallstreet.jpg"
            alt="New York Stock Exchange, Wall Street"
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#1a2a3a]/80 pointer-events-none" />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-br from-[rgba(201,162,39,0.07)] via-transparent to-[rgba(201,162,39,0.04)] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 flex items-center" style={{ minHeight: 560 }}>
          <div className="max-w-[560px] mx-auto md:mx-0 text-center md:text-left py-20 md:py-24">
            <p className="text-[#f5e6b3] text-[11px] font-medium tracking-[0.32em] uppercase mb-6">
              IPO Advisory · 90-Day Engagement
            </p>

            <h1 className="gradient-text-hero text-4xl sm:text-5xl md:text-6xl leading-[1.08] font-normal mb-8 tracking-tight">
              Ninety days from where you are to filing-ready.
            </h1>

            <p className="text-base md:text-lg text-white/90 font-light leading-[1.75] mb-8">
              You have decided to list. What stands between you and a filing is rarely the decision — it is how your group is owned and what your financial records will survive. I spend ninety days fixing both.
            </p>

            <p className="text-[#f5e6b3] text-[12px] md:text-[13px] font-medium tracking-[0.22em] uppercase mb-10">
              Fixed fee US$15,000 · typically 90 days · contracted with the company
            </p>

            <div className="flex flex-col items-center md:items-start gap-4">
              <PrimaryCTA className="w-full sm:w-[420px]" />
              <p className="text-white/70 font-light text-sm">30 minutes, no charge</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2 · THE PROBLEM + THREE THINGS — one flowing white section ───── */}
      <section id="the-problem" className="scroll-anchor py-14 md:py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase text-center mb-3">
            The Problem
          </p>
          <h2 className="text-3xl md:text-4xl mb-10 text-center font-normal" style={{ textWrap: "balance" }}>
            Most founders who dismiss going public are making that decision on assumptions that aren&apos;t accurate
          </h2>

          <div className="space-y-5 text-slate-600 text-[15px] leading-[1.8] font-light">
            <p>
              They assume their company is too small. They assume it costs more than it does. They assume the whole company has to be listed. Most of the time, they&apos;re wrong on all three counts.
            </p>
            <p>
              And you don&apos;t have to list your entire company. A carve-out takes one business unit and structures it as a standalone listing vehicle. A roll-up consolidates multiple smaller businesses into one. Both strategies change who qualifies — and how.
            </p>
            <p className="text-[#1a2a3a] font-normal">
              The question isn&apos;t whether listing is good or bad. It&apos;s whether it&apos;s right for where your business is now and where you want it to go. That&apos;s what the first call is for.
            </p>
          </div>

          {/* Stat strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 md:gap-8 mt-12 pt-10 border-t border-slate-200 max-w-md sm:max-w-none mx-auto">
            <div className="text-center">
              <p className="text-3xl md:text-4xl text-[#1a2a3a]" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                US$750K
              </p>
              <p className="text-slate-500 text-xs md:text-[13px] font-light mt-2 leading-snug">
                Approximate net income for Nasdaq&apos;s Capital Market tier — one profitable unit, not a billion-dollar group
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl text-[#1a2a3a]" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                3 ways in
              </p>
              <p className="text-slate-500 text-xs md:text-[13px] font-light mt-2 leading-snug">
                Full listing, carve-out, or roll-up — the structure changes who qualifies
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl text-[#1a2a3a]" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                90 days
              </p>
              <p className="text-slate-500 text-xs md:text-[13px] font-light mt-2 leading-snug">
                From first call to filing-ready, typically — at a fixed fee
              </p>
            </div>
          </div>
        </div>

        {/* What goes wrong — three blockers, side by side */}
        <div className="max-w-6xl mx-auto mt-14 md:mt-20">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase mb-3 text-center">
            What Goes Wrong
          </p>
          <h2
            className="text-2xl md:text-4xl font-normal mb-10 leading-[1.15] text-[#1a2a3a] text-center"
            style={{ textWrap: "balance" }}
          >
            Three things that actually stop a first listing
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 md:p-8 bg-[#f8f7f4] border border-slate-200 flex flex-col">
              <span className="text-4xl leading-none text-[#c9a227]/50 font-normal mb-5" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }} aria-hidden="true">01</span>
              <h3 className="text-[19px] md:text-[21px] font-normal leading-[1.35] mb-4 text-[#a68a1f]">
                The blocker is almost never the decision. It is the structure.
              </h3>
              <p className="text-slate-600 text-[15px] leading-[1.8] font-light">
                By the time we speak, you have usually settled on Nasdaq. What delays the listing sits underneath that decision: how the group is owned. Most first-time issuers need a holding company built above their operating entities before they can list at all — with tax, regulatory and shareholder consequences worked through in the right order, before anyone drafts a document.
              </p>
            </div>

            <div className="p-6 md:p-8 bg-[#f8f7f4] border border-slate-200 flex flex-col">
              <span className="text-4xl leading-none text-[#c9a227]/50 font-normal mb-5" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }} aria-hidden="true">02</span>
              <h3 className="text-[19px] md:text-[21px] font-normal leading-[1.35] mb-4 text-[#a68a1f]">
                Profitable is not the same as auditable.
              </h3>
              <p className="text-slate-600 text-[15px] leading-[1.8] font-light">
                Dealings with connected companies never at arm&apos;s length. Money moving between entities on handshake terms. Revenue recognised the way your market does it, not the way a US audit requires. Books that don&apos;t reach back far enough to cover the audit period. None of it looks like a problem until an auditor asks — and then it is on your timeline, not theirs.
              </p>
            </div>

            <div className="p-6 md:p-8 bg-[#f8f7f4] border border-slate-200 flex flex-col">
              <span className="text-4xl leading-none text-[#c9a227]/50 font-normal mb-5" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }} aria-hidden="true">03</span>
              <h3 className="text-[19px] md:text-[21px] font-normal leading-[1.35] mb-4 text-[#a68a1f]">
                Left late, this costs multiples.
              </h3>
              <p className="text-slate-600 text-[15px] leading-[1.8] font-light">
                Restructuring a group and repairing historical financials takes months, and it does not compress. Done early, it is planning. Done under a filing deadline, it is emergency work at emergency prices — with a delay attached.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 · HOW THE NINETY DAYS RUN — white, horizontal roadmap ─────── */}
      <section id="how-it-runs" className="scroll-anchor py-14 md:py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase text-center mb-3">
            The Process
          </p>
          <h2 className="text-3xl md:text-4xl font-normal mb-12 md:mb-16 text-center">How the ninety days run</h2>

          {/* Desktop: horizontal roadmap */}
          <div className="hidden md:flex items-start">
            {[
              {
                n: "1",
                label: "Week one",
                title: "I take everything in.",
                body: "Financials, cap table, group structure, and the arrangements nobody wrote down.",
              },
              {
                n: "2",
                label: "Week two",
                title: "You get the plan.",
                body: "What has to change, in what order, who does each piece, and how long each takes.",
              },
              {
                n: "3",
                label: "Weeks 3–13",
                title: "We do it.",
                body: "A standing call every week, and me directing the lawyers and accountants you appoint so the sequence holds.",
              },
              {
                n: "4",
                label: "Day 90",
                title: "Filing-ready.",
                body: "Your company in a shape that can carry a filing.",
              },
            ].map((s, i) => (
              <Fragment key={s.n}>
                {i > 0 && <div className="flex-1 h-px bg-[#c9a227]/40 mt-6" aria-hidden="true" />}
                <div className="flex flex-col items-center text-center w-56 flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-full border-2 border-[#c9a227] bg-white flex items-center justify-center text-[#a68a1f] text-lg"
                    style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
                    aria-hidden="true"
                  >
                    {s.n}
                  </div>
                  <p className="text-[#a68a1f] text-[11px] font-medium tracking-[0.22em] uppercase mt-5 mb-1.5">
                    {s.label}
                  </p>
                  <p className="text-[#1a2a3a] text-[16px] font-medium mb-1.5">{s.title}</p>
                  <p className="text-slate-600 text-[13.5px] leading-[1.7] font-light">{s.body}</p>
                </div>
              </Fragment>
            ))}
          </div>

          {/* Mobile: vertical steps */}
          <div className="md:hidden space-y-8">
            <div className="flex gap-5">
              <span className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#c9a227] flex items-center justify-center text-[#a68a1f] text-base" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }} aria-hidden="true">1</span>
              <div>
              <p className="text-[#1a2a3a] text-[17px] font-medium leading-[1.6] mb-2">
                Week one — I take everything in.
              </p>
              <p className="text-slate-600 text-[15px] leading-[1.85] font-light">
                Financials, cap table, group structure, and the arrangements nobody wrote down. My job in week one is to understand your company more precisely than you have ever had to explain it.
              </p>
              </div>
            </div>

            <div className="flex gap-5">
              <span className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#c9a227] flex items-center justify-center text-[#a68a1f] text-base" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }} aria-hidden="true">2</span>
              <div>
              <p className="text-[#1a2a3a] text-[17px] font-medium leading-[1.6] mb-2">
                Week two — you get the plan.
              </p>
              <p className="text-slate-600 text-[15px] leading-[1.85] font-light">
                A written proposal: what has to change in your structure and your financials, in what order, who does each piece, and how long each takes. You will know the shape of the entire ninety days before we are two weeks in.
              </p>
              </div>
            </div>

            <div className="flex gap-5">
              <span className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#c9a227] flex items-center justify-center text-[#a68a1f] text-base" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }} aria-hidden="true">3</span>
              <div>
              <p className="text-[#1a2a3a] text-[17px] font-medium leading-[1.6] mb-2">
                Weeks three to thirteen — we do it.
              </p>
              <p className="text-slate-600 text-[15px] leading-[1.85] font-light">
                The restructuring itself, worked week by week. A standing call every week, email in between, and me directing the lawyers and accountants you appoint so the sequence holds. At the end, your company is in a shape that can carry a filing.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 · WHAT I DO — cream ───────────────────────────────────────── */}
      <section className="py-14 md:py-20 px-6 bg-[#f8f7f4]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase text-center mb-3">
            Advisory Services
          </p>
          <h2 className="text-3xl md:text-4xl mb-4 text-center font-normal">
            End-to-end IPO advisory
          </h2>
          <p className="text-center text-slate-600 text-sm font-light mb-12 max-w-3xl mx-auto">
            From restructuring to listing day. One advisor, covering the ground a deal team would.
          </p>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="p-6 md:p-7 rounded-none bg-white border-2 border-slate-200 flex flex-col">
                <div className="w-11 h-11 mx-auto rounded-full bg-gradient-to-br from-[#2d4156] to-[#1a2a3a] flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-normal text-[#1a2a3a] mb-3 text-center">{s.title}</h3>
                <p className="text-slate-600 font-light text-sm text-center flex-grow">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6 · IS THIS YOU — white ─────────────────────────────────────── */}
      <section id="is-this-you" className="scroll-anchor py-14 md:py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase text-center mb-3">
            The Fit
          </p>
          <h2 className="text-3xl md:text-4xl font-normal mb-10 text-center">Is this you?</h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <div className="border-l-2 border-[#c9a227] pl-6 md:pl-7">
              <h3 className="text-[#1a2a3a] text-lg md:text-xl font-normal mb-5">This works if</h3>
              <ul className="space-y-4">
                {WORKS_IF.map((item) => (
                  <li key={item} className="text-slate-600 text-[15px] leading-[1.8] font-light">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-l-2 border-slate-300 pl-6 md:pl-7">
              <h3 className="text-[#1a2a3a] text-lg md:text-xl font-normal mb-5">
                This does not work if
              </h3>
              <ul className="space-y-4">
                {DOES_NOT_WORK_IF.map((item) => (
                  <li key={item} className="text-slate-600 text-[15px] leading-[1.8] font-light">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7 · ABOUT — cream ───────────────────────────────────────────── */}
      <section className="py-12 md:py-16 px-6 bg-[#f8f7f4]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-14 items-start">
            <div className="mx-auto md:mx-0 w-full max-w-[240px] md:max-w-[280px]">
              <div className="relative aspect-[4/5] w-full bg-slate-200 overflow-hidden">
                <Image
                  src="/Profile pic 4.png"
                  alt="Mandy Cheung"
                  fill
                  quality={90}
                  className="object-cover"
                  sizes="(max-width: 768px) 240px, 280px"
                />
              </div>
            </div>

            <div>
              <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase mb-3 md:hidden text-center">
                The Advisor
              </p>
              <h2 className="text-3xl md:text-4xl font-normal mb-7 text-center md:text-left">
                About Mandy
              </h2>
              <div className="space-y-5 text-slate-600 text-[15px] leading-[1.85] font-light">
                <p>
                  Ten-plus years across Nasdaq, HKEX and global markets. Sixty-plus transactions in IPOs, M&amp;A and cross-border deals. SFC Type 6 licensed — advising on corporate finance.
                </p>
                <p>
                  Most listings I work on are US ones, for founder-led companies going public for the first time. I have sat on the sell side — I can tell you what your auditor will and will not sign before you find out the expensive way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8 · THE ENGAGEMENT — navy, Hong Kong skyline behind the CTA ─── */}
      <section className="relative py-14 md:py-20 px-6 bg-[#1a2a3a] overflow-hidden">
        {/* Hong Kong skyline backdrop, heavily veiled in navy */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/Hong Kong 1.jpg"
            alt=""
            fill
            quality={70}
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#1a2a3a]/85" />
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(201,162,39,0.07)] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal mb-3 text-center" style={{ color: "#ffffff" }}>
            The 90-Day Readiness Engagement
          </h2>
          <p className="text-center text-white/60 font-light mb-12 max-w-2xl mx-auto">
            Fixed fee US$15,000 · typically 90 days · contracted with the company
          </p>

          <h3 className="text-xl md:text-2xl font-normal mb-10 text-center" style={{ color: "#f5e6b3" }}>
            What happens next
          </h3>

          <ol className="space-y-7 mb-12">
            {NEXT_STEPS.map((s, i) => (
              <li key={s.lead} className="flex gap-5">
                <span
                  className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#c9a227] flex items-center justify-center text-[#f5e6b3] text-base"
                  style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <p className="pt-1.5 text-slate-200 text-[15px] md:text-[16px] leading-[1.8] font-light">
                  <strong className="font-medium text-white">{s.lead}</strong>
                  {s.rest}
                </p>
              </li>
            ))}
          </ol>

          <div className="flex justify-center">
            <PrimaryCTA className="w-full sm:w-[420px]" />
          </div>
          <p className="text-white/45 text-xs font-medium tracking-[0.22em] uppercase mt-6 text-center flex items-center justify-center gap-2">
            <span className="w-[7px] h-[7px] rounded-full bg-[#c9a227] flex-shrink-0 pulse-dot" />
            Accepting 4 new founders this quarter
          </p>
        </div>
      </section>

      {/* ── 9 · COMMON QUESTIONS — white ────────────────────────────────── */}
      <section id="common-questions" className="scroll-anchor py-12 md:py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase text-center mb-3">
            Questions
          </p>
          <h2 className="text-3xl md:text-4xl font-normal mb-10 text-center">Common questions</h2>
          <DetailsDrawer />
        </div>
      </section>

      <div className="mobile-cta-spacer" />
      <StickyMobileBar />

      {/* Footer */}
      <footer className="w-full bg-[#0f1a24] border-t border-[#1a2a3a] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-5">
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
