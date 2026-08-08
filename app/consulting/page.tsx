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

/* Same booking URL the previous /consulting page used. */
const TIDYCAL_URL = "https://tidycal.com/mandyc852/30-minute-meeting"
const CTA_LABEL = "Book a Confidential Call"

const PRODUCT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "The 90-Day Listing Decision",
  serviceType: "Capital Markets Advisory",
  provider: { "@type": "Organization", name: "MandyC." },
  url: "https://mandyc.me/consulting",
  offers: {
    "@type": "Offer",
    price: "15000",
    priceCurrency: "USD",
    url: "https://mandyc.me/consulting",
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
          US$15,000 · in thirds
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

function FAQItem({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="group border-b border-slate-200 last:border-b-0">
      <summary className="flex items-start justify-between gap-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <span
          className="text-base md:text-lg text-[#1a2a3a] font-normal"
          style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
        >
          {q}
        </span>
        <svg
          className="flex-shrink-0 w-4 h-4 mt-1.5 text-[#a68a1f] transition-transform group-open:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="pb-6 pr-2 md:pr-8 text-slate-600 font-light leading-[1.8] text-[15px]">
        {children}
      </div>
    </details>
  )
}

const OUTCOMES = [
  {
    n: "01",
    title: "A venue decision, closed",
    body:
      "HKEX Main Board, GEM, Chapter 18C, a secondary listing under 19C, Nasdaq, NYSE American, or not yet. Not a list of options — a decision, with the reasoning written down, and a clear statement of what specifically disqualifies you from the routes you did not take.",
  },
  {
    n: "02",
    title: "Your blockers, named and sequenced",
    body:
      "Not everything that could ever matter. The three or four things that will actually stop your deal — structure, cap table, related-party exposure, track record, jurisdictional centre of gravity — in the order they must be fixed, with a realistic view of who fixes them and how long it takes.",
  },
  {
    n: "03",
    title: "An instruction sequence",
    body:
      "Who you appoint, in what order, and what you should be paying them for. The largest avoidable cost in a pre-IPO process is professional fees burned educating advisors about a decision you had not made yet.",
  },
]

const TIMELINE = [
  {
    title: "Before we start — Intake",
    body:
      "Financials, cap table, structure chart, and a short note on what you think the deal is. I read it before call one. Call one is not spent on background.",
  },
  {
    title: "Weeks 1–4 · Route",
    body:
      "Where you can list, where you cannot, and what the gap is. Ends with the Venue Decision in your hands — the venue question closed, in writing. The second milestone falls due here.",
  },
  {
    title: "Weeks 5–9 · Blockers",
    body:
      "The specific things standing between you and a viable filing, in priority order. This is where the value lands and it is usually less comfortable than weeks one to four.",
  },
  {
    title: "Weeks 10–13 · Sequence",
    body:
      "Who you instruct, in what order, and what you should be paying them for. Ends with the Remediation Plan and a clear next twelve months.",
  },
]

const EXCLUDED_FEES = [
  "Legal counsel — HK, US, PRC or offshore, depending on structure",
  "Reporting accountants and auditors",
  "Sponsor and underwriter fees",
  "Valuers, tax advisers, IP counsel",
  "Company secretarial, share registrar, printing, translation",
  "Exchange listing fees and regulatory filing fees",
  "Roadshow and travel",
]

export default function ConsultingPage() {
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
          { label: "What You Get", href: "#what-you-get" },
          { label: "How It Works", href: "#how-it-works" },
          { label: "FAQ", href: "#faq" },
          { label: "Terms", href: "#terms" },
        ]}
        bookHref={TIDYCAL_URL}
      />

      {/* ─────────────────────────── HERO ─────────────────────────── */}
      <section
        id="hero-section"
        className="relative w-full bg-[#1a2a3a] px-6 py-20 md:py-32 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-[rgba(201,162,39,0.07)] via-transparent to-[rgba(201,162,39,0.04)] pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-[#f5e6b3] text-[11px] font-medium tracking-[0.32em] uppercase mb-6">
            <span className="inline-block w-8 h-px bg-[#f5e6b3]/60 align-middle mr-3" aria-hidden="true" />
            90-Day Engagement
            <span className="inline-block w-8 h-px bg-[#f5e6b3]/60 align-middle ml-3" aria-hidden="true" />
          </p>

          <h1 className="gradient-text-hero text-4xl sm:text-5xl md:text-6xl leading-[1.08] font-normal mb-8 tracking-tight">
            Ninety days to a listing decision you can defend to your board.
          </h1>

          <p className="text-base md:text-lg text-white/90 font-light leading-[1.75] mb-8 max-w-2xl mx-auto">
            Not a readiness report. Not a mandate. A standing working relationship with a licensed capital markets advisor who has no economic interest in you doing the deal — long enough to get the venue question closed, the blockers named, and the sequence right.
          </p>

          <p className="text-[#f5e6b3] text-[12px] md:text-[13px] font-medium tracking-[0.22em] uppercase mb-10">
            US$15,000, paid across three milestones · typically 90 days · contracted with the company
          </p>

          <div className="flex flex-col items-center gap-4">
            <PrimaryCTA className="w-full sm:w-[420px]" />
            <p className="text-white/70 font-light text-sm">30 minutes, no charge</p>
          </div>
        </div>
      </section>

      {/* ───────────────────── SECTION 1 — Position ───────────────────── */}
      <section className="py-14 md:py-20 px-6 bg-white">
        <div className="max-w-[65ch] mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal mb-8 leading-[1.2]" style={{ textWrap: "balance" }}>
            The position you&apos;re probably in
          </h2>

          <div className="space-y-5 text-slate-600 text-[15px] leading-[1.85] font-light">
            <p>
              You are somewhere between &quot;we should think about listing&quot; and &quot;we have a banker.&quot; That gap is where companies lose eighteen months.
            </p>
            <p>The problem is not that you lack information. It is that every source of it is conflicted:</p>
          </div>

          <ul className="my-7 space-y-3.5">
            {[
              "Your sponsor wants the mandate, so everything is feasible.",
              "Your auditor answers the question you asked, not the one you should have asked.",
              "Your lawyers will tell you whether it is legal, never whether it is a good idea.",
              "Your board has opinions but not reps.",
              "Everyone who has actually done this is on the sell side and is not spending an hour a week with you for free.",
            ].map((item) => (
              <li key={item} className="relative pl-6 text-slate-600 text-[15px] leading-[1.8] font-light">
                <span className="absolute left-0 top-0 text-[#c9a227]" aria-hidden="true">
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p className="text-slate-600 text-[15px] leading-[1.85] font-light">
            What is missing is not a document. It is someone who has sat on the other side of the table sixty-plus times and is not trying to win anything from you.
          </p>
        </div>
      </section>

      {/* ─────────────── SECTION 2 — What you have at the end ─────────────── */}
      <section id="what-you-get" className="scroll-anchor py-14 md:py-20 px-6 bg-[#f8f7f4]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal mb-4 text-center">What you have at the end</h2>
          <p className="text-center text-slate-600 text-[15px] font-light mb-12">
            Three things. Nothing else is promised.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {OUTCOMES.map((o) => (
              <div key={o.n} className="bg-white border border-slate-200 p-7 md:p-8 flex flex-col">
                <span
                  className="block text-5xl md:text-6xl leading-none text-slate-300 mb-5"
                  style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
                  aria-hidden="true"
                >
                  {o.n}
                </span>
                <h3 className="text-xl font-normal text-[#1a2a3a] mb-3 leading-snug">{o.title}</h3>
                <p className="text-slate-600 font-light leading-[1.8] text-[14.5px]">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── SECTION 3 — How it works ─────────────────── */}
      <section id="how-it-works" className="scroll-anchor py-14 md:py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal mb-10 text-center">How it works</h2>

          <div className="space-y-8">
            <div>
              <p className="text-[#1a2a3a] text-[16px] md:text-[17px] font-medium leading-[1.65] mb-2">
                One 60-minute working call each week, direct with me.
              </p>
              <p className="text-slate-600 text-[15px] leading-[1.85] font-light">
                Same slot, thirteen weeks. No associate, no team, no handoff. You set the agenda — you bring what is live that week.
              </p>
            </div>

            <div>
              <p className="text-[#1a2a3a] text-[16px] md:text-[17px] font-medium leading-[1.65] mb-2">
                Email between calls.
              </p>
              <p className="text-slate-600 text-[15px] leading-[1.85] font-light">
                Send the document, the term sheet, the question at 11pm. Response within 48 hours, Monday to Friday. No volume cap, no ticketing system.
              </p>
            </div>

            <div>
              <p className="text-[#1a2a3a] text-[16px] md:text-[17px] font-medium leading-[1.65] mb-2">
                A short written recap after each call.
              </p>
              <p className="text-slate-600 text-[15px] leading-[1.85] font-light">
                Sent by email — what was decided, what you are doing before next week, what I am checking. Forwardable to your board without translation.
              </p>
            </div>

            {/* The two named deliverables. Each triggers a milestone payment, so both
                carry the accent rule — deliberately not cards. */}
            <div className="pt-7 border-t-2 border-[#c9a227]">
              <p className="text-[#7d6715] text-[10px] font-medium tracking-[0.28em] uppercase mb-3">
                Named deliverable · triggers a milestone
              </p>
              <p className="text-[#1a2a3a] text-[17px] md:text-[19px] font-medium leading-[1.6] mb-2">
                The Venue Decision.
              </p>
              <p className="text-slate-600 text-[15px] md:text-[15.5px] leading-[1.85] font-light">
                Typically week four or five. Written, board-ready: which route your numbers actually support, the reasoning behind it, and exactly what disqualifies you from the routes you are not taking. This is the document that closes the venue question.
              </p>
            </div>

            <div className="pt-7 border-t-2 border-[#c9a227]">
              <p className="text-[#7d6715] text-[10px] font-medium tracking-[0.28em] uppercase mb-3">
                Named deliverable · triggers a milestone
              </p>
              <p className="text-[#1a2a3a] text-[17px] md:text-[19px] font-medium leading-[1.6] mb-2">
                The Remediation Plan.
              </p>
              <p className="text-slate-600 text-[15px] md:text-[15.5px] leading-[1.85] font-light">
                Typically week twelve. The three or four things standing between you and a viable filing, in the order they must be fixed, with who fixes each one and roughly how long it takes — followed by your instruction sequence for the next twelve months.
              </p>
            </div>
          </div>

          <p className="mt-10 text-slate-600 text-[15px] leading-[1.85] font-light">
            That is the engagement. There is deliberately nothing else in it.
          </p>
        </div>
      </section>

      {/* ══════════ SECTION 4 — The credibility engine (centerpiece band) ══════════ */}
      <section className="py-16 md:py-24 px-6 bg-[#1a2a3a]">
        <div className="max-w-[68ch] mx-auto">
          <h2
            className="text-3xl md:text-[42px] font-normal mb-4 leading-[1.15]"
            style={{ color: "#ffffff", textWrap: "balance" }}
          >
            Three things companies are getting wrong right now
          </h2>

          <p className="text-slate-400 italic font-light text-[13px] md:text-[13.5px] leading-[1.7] mb-8">
            Rules stated as at [DATE]. Hong Kong listing rules changed materially in July 2026 and this section will be updated as they move.
          </p>

          <p className="text-slate-200 text-[17px] md:text-[18px] leading-[1.8] font-light mb-12">
            Not a teaser. If you already knew all three, you probably do not need me.
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-[21px] md:text-[25px] font-normal leading-[1.35] mb-4" style={{ color: "#f5e6b3" }}>
                A Gulf-listed issuer&apos;s route into Hong Kong is not the one most advisors are quoting.
              </h3>
              <p className="text-slate-200 text-[17px] md:text-[18px] leading-[1.85] font-light">
                The July 2026 conclusions cut the Criteria B secondary-listing threshold to HK$6bn with two years of compliance history — and that is the number being repeated around the region. It does not apply to ADX or DFM issuers. Criteria B is restricted to companies listed on a Qualifying Exchange: NYSE, Nasdaq, LSE premium. ADX and DFM are Recognised Stock Exchanges, which is a different list. A one-share-one-vote Gulf issuer goes via Criteria A instead — HK$3bn, but{" "}
                <strong className="font-semibold text-white">five</strong> full financial years of compliance, and only if its business is not centred on Greater China. Companies are building timelines off the wrong threshold in both directions.
              </p>
            </div>

            <div>
              <h3 className="text-[21px] md:text-[25px] font-normal leading-[1.35] mb-4" style={{ color: "#f5e6b3" }}>
                Under Chapter 18C, your Series B investor selection already decided your eligibility.
              </h3>
              <p className="text-slate-200 text-[17px] md:text-[18px] leading-[1.85] font-light">
                The sophisticated independent investor requirement is a history test, not a cheque written at IPO. Named investors must have been on your register for the twelve months before application, at defined aggregate thresholds. A cap table of angels, seed funds and small regional VCs is structurally ineligible regardless of valuation, and it cannot be repaired in your listing year. This is the single most common reason a deep-tech 18C conversation ends, and it ends late, after real money has been spent.
              </p>
            </div>

            <div>
              <h3 className="text-[21px] md:text-[25px] font-normal leading-[1.35] mb-4" style={{ color: "#f5e6b3" }}>
                The easy route does not reach the prize.
              </h3>
              <p className="text-slate-200 text-[17px] md:text-[18px] leading-[1.85] font-light">
                A secondary listing is the lighter path. It is also excluded from Southbound Stock Connect — the mainland liquidity that is usually the actual reason a company wants Hong Kong. Only primary and dual-primary foreign issuers in the HSCI qualify. Alibaba converted for exactly this reason. If Southbound access is your thesis, the cheap route is not a cheaper version of the right one; it is a different outcome.
              </p>
            </div>
          </div>

          {/* Coda — shorter closing point, set apart by a rule, not a fourth card. */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-slate-300 text-[15px] md:text-[15.5px] leading-[1.85] font-light">
              <strong className="font-medium text-white">
                And one that changes the cost of getting it wrong:
              </strong>{" "}
              filing is now non-public for all new applicants, which sounds like pure downside protection. The counterweight is that when an application is returned, HKEX publishes the names and roles of the professional parties involved and the reason for the return. A badly prepared filing now carries a public cost it did not carry twelve months ago — for you and for everyone you appointed.
            </p>
          </div>

          <div className="mt-14 flex justify-center">
            <PrimaryCTA className="w-full sm:w-[420px]" />
          </div>
        </div>
      </section>

      {/* ────────────────── SECTION 5 — What this is not ────────────────── */}
      <section className="py-14 md:py-18 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-normal mb-8 text-center">What this is not</h2>

          <div className="space-y-6">
            <p className="text-slate-600 text-[15px] leading-[1.85] font-light">
              <strong className="text-[#1a2a3a] font-medium">Not a document service.</strong> Beyond the two deliverables above, nothing is produced for you — no prospectus drafting, no model build, no board deck production, no data room. Those belong to a mandate.
            </p>
            <p className="text-slate-600 text-[15px] leading-[1.85] font-light">
              <strong className="text-[#1a2a3a] font-medium">Not a sponsor engagement.</strong> I am not your sponsor and this is not sponsor work under the Listing Rules.
            </p>
            <p className="text-slate-600 text-[15px] leading-[1.85] font-light">
              <strong className="text-[#1a2a3a] font-medium">Not on-demand.</strong> One hour a week is one hour a week. If your deal needs someone on it daily, this is the wrong product and I will say so on the call rather than sell it to you.
            </p>
            <p className="text-slate-600 text-[15px] leading-[1.85] font-light">
              <strong className="text-[#1a2a3a] font-medium">Not inclusive of anyone else&apos;s fees.</strong> See Section 9.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────── SECTION 6 — Who this is for ────────────────── */}
      <section className="py-14 md:py-20 px-6 bg-[#f8f7f4]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal mb-10 text-center">Who this is for</h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <div className="border-l-2 border-[#c9a227] pl-6 md:pl-7">
              <h3 className="text-[#1a2a3a] text-lg md:text-xl font-normal mb-5">This works if:</h3>
              <ul className="space-y-4">
                {[
                  "You are 6 to 36 months from a listing decision, or deciding whether to make one",
                  "The business generates real profit — roughly US$750K+ net, though shape matters more than the number",
                  "Someone senior can hold an hour a week and act between calls",
                  "You want a second opinion from someone not trying to win a mandate from you",
                ].map((item) => (
                  <li key={item} className="text-slate-600 text-[15px] leading-[1.8] font-light">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-l-2 border-slate-300 pl-6 md:pl-7">
              <h3 className="text-[#1a2a3a] text-lg md:text-xl font-normal mb-5">This does not work if:</h3>
              <ul className="space-y-4">
                {[
                  "You need capital in the next ninety days — different problem, this will not solve it",
                  "You want documents built rather than directed",
                  "Nobody on your side can decide between calls",
                  "You are looking for assurance that you will list",
                ].map((item) => (
                  <li key={item} className="text-slate-600 text-[15px] leading-[1.8] font-light">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────── SECTION 7 — Questions ──────────────────── */}
      <section id="faq" className="scroll-anchor py-14 md:py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal mb-10 text-center">Questions</h2>

          <div className="bg-white border border-slate-200 px-6 md:px-10">
            <FAQItem q="Why is this US$15,000?">
              <p>
                Because it is thirteen weeks of direct access plus two board-ready documents, delivered by the person you actually hired rather than an associate. A full advisory mandate costs many times this, because a mandate means I am running your process. This is the narrow version, priced for the narrow version — and you pay it in thirds, on delivery.
              </p>
            </FAQItem>

            <FAQItem q="Do we pay all of it upfront?">
              <p>
                No. You pay US$5,000 to start, US$5,000 when the Venue Decision is in your hands, and US$5,000 when the Remediation Plan is. If the first document does not tell you something you did not know, you have spent US$10,000 and you stop. The structure exists so the risk of this being worth it sits with me, not with you.
              </p>
            </FAQItem>

            <FAQItem q="Who am I actually working with?">
              <p>
                Me. Every call, every email. No associate, no handoff. It is also why I take a small number of these at once.
              </p>
            </FAQItem>

            <FAQItem q="Is this a sponsor engagement?">
              <p>
                No. I am not acting as your sponsor and this is not sponsor work under the Listing Rules. If you need a sponsor I can tell you what to look for and how to structure the appointment.
              </p>
            </FAQItem>

            <FAQItem q="Does the fee include lawyers, auditors or sponsor fees?">
              <p>
                No. It covers my time only. Third parties bill you directly and those fees are substantially larger than this one. Section 9 sets out what to budget for.
              </p>
            </FAQItem>

            <FAQItem q="Can this be billed to the company?">
              <p>
                It has to be. The engagement is contracted with the company entity, not an individual. This is corporate advisory work and belongs on the company&apos;s books.
              </p>
            </FAQItem>

            <FAQItem q="How is this different from the IPO Path Assessment?">
              <p>
                The Assessment is a single document — thirty days, one deep call, an 8-12 page Listing Path Memo for your board. This is a working relationship — thirteen weeks through a live decision, with the Venue Decision and the Remediation Plan produced along the way. Buy the Assessment if you want an answer. Buy this if you want someone alongside you while you reach one and then act on it. Plenty of people do the Assessment first, and US$1,000 of it comes off the first milestone here.
              </p>
            </FAQItem>

            <FAQItem q="What if we decide not to list?">
              <p>
                Then it worked. Roughly a third of these end in &quot;not yet, and here is precisely what changes that&quot; — which is worth considerably more than the fee, because the alternative is finding out in month nine with a professional fee bill already run up.
              </p>
            </FAQItem>

            <FAQItem q="What if we miss a week?">
              <p>
                Calls can move within the same fortnight. They do not bank indefinitely — the value is in the rhythm. If your side goes quiet for a month, the engagement still ends on day ninety.
              </p>
            </FAQItem>

            <FAQItem q="What happens if we want to go further?">
              <p>
                We talk about a mandate. Everything you have paid credits against one booked within sixty days of the engagement ending. No obligation either way — if I do not think your deal is one I should be on, I will tell you.
              </p>
            </FAQItem>

            <FAQItem q="Do you sign an NDA?">
              <p>Yes, mutual, before intake. Nothing about your business, numbers or intentions appears anywhere.</p>
            </FAQItem>

            <FAQItem q="Do you work outside Hong Kong?">
              <p>
                Yes, and most of what is interesting right now is cross-border — mainland China, the Gulf, Southeast Asia. Calls run on your time zone within reason.
              </p>
            </FAQItem>

            <FAQItem q="What if we need someone on this daily?">
              <p>
                Then this is the wrong product and I will say so on the discovery call rather than sell you ninety days you will resent. That is what the free call is for.
              </p>
            </FAQItem>
          </div>
        </div>
      </section>

      {/* ─────────────── SECTION 8 — How the ninety days run ─────────────── */}
      <section className="py-14 md:py-20 px-6 bg-[#f8f7f4]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal mb-12 text-center">How the ninety days run</h2>

          <ol className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#c9a227]" aria-hidden="true" />
            {TIMELINE.map((s, i) => (
              <li key={s.title} className={`relative pl-10 ${i === TIMELINE.length - 1 ? "" : "pb-10"}`}>
                <span
                  className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-white border-2 border-[#c9a227]"
                  aria-hidden="true"
                />
                <h3 className="text-xl md:text-2xl font-normal text-[#1a2a3a] mb-2.5 leading-snug">{s.title}</h3>
                <p className="text-slate-600 text-[15px] leading-[1.85] font-light">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─────────────────── SECTION 9 — What the fee covers ─────────────────── */}
      <section className="py-14 md:py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal mb-10 text-center" style={{ textWrap: "balance" }}>
            What the fee covers, and what it does not
          </h2>

          <div className="bg-[#f8f7f4] border border-slate-300 p-7 md:p-10">
            <p className="text-[#1a2a3a] text-[18px] md:text-[20px] font-medium leading-[1.6] mb-5">
              The US$15,000 covers my time. It covers nothing else.
            </p>

            <p className="text-slate-600 text-[15px] leading-[1.85] font-light mb-6">
              A listing is a multi-party process and every other party bills you directly. Budget separately for:
            </p>

            {/* Excluded fees — deliberately the most prominent element in the callout. */}
            <ul className="bg-white border-l-4 border-[#c9a227] shadow-sm p-6 md:p-7 space-y-3.5 mb-7">
              {EXCLUDED_FEES.map((f) => (
                <li
                  key={f}
                  className="relative pl-6 text-[#1a2a3a] text-[15px] md:text-[16px] leading-[1.7] font-normal"
                >
                  <span className="absolute left-0 top-0 text-[#c9a227] font-semibold" aria-hidden="true">
                    •
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="space-y-5 text-slate-600 text-[15px] leading-[1.85] font-light">
              <p>
                You engage and pay those parties directly. I do not sit between you and them, and I do not take a position in their fees.
              </p>
              <p>
                Knowing that structure before you commit is part of the point. Most companies underestimate the total by an order of magnitude, and they discover it after they have already instructed someone.
              </p>
            </div>
          </div>

          {/* UNRESOLVED — must be visible so it cannot ship by accident. */}
          <div
            role="note"
            className="mt-8 border-2 border-[#c9a227] bg-[#c9a227]/10 p-6 md:p-7"
          >
            <p className="text-[#7d6715] text-[11px] font-semibold tracking-[0.22em] uppercase mb-3">
              Unresolved — do not publish as-is
            </p>
            <p className="text-[#1a2a3a] text-[15px] leading-[1.85] font-light">
              <strong className="font-semibold">[CONFIRM BEFORE PUBLISHING — Mandy]</strong> Recommended addition if unconditionally true: <em>&quot;I do not receive referral fees from, and do not mark up the fees of, any professional I introduce you to.&quot;</em> Strong signal to a CFO and a clean position to hold. Publish only if it holds across every introduction you make, without exception.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────────── SECTION 10 — Terms ────────────────────── */}
      <section id="terms" className="scroll-anchor py-14 md:py-20 px-6 bg-[#f8f7f4]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal mb-10 text-center">Terms</h2>

          <div className="bg-white border border-slate-300">
            <div className="p-7 md:p-10">
              <p
                className="text-[#1a2a3a] text-3xl md:text-[40px] font-normal leading-[1.2] mb-7"
                style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
              >
                US$15,000, paid across three milestones.
              </p>

              <ul className="space-y-4 mb-7">
                {[
                  <>US$5,000 on engagement — contract signed, intake received, first working call held</>,
                  <>US$5,000 on delivery of the Venue Decision — typically week four or five</>,
                  <>US$5,000 on delivery of the Remediation Plan — typically week twelve, or day 120, whichever comes first</>,
                ].map((node, i) => (
                  <li
                    key={i}
                    className="relative pl-6 text-slate-600 text-[15px] leading-[1.8] font-light"
                  >
                    <span className="absolute left-0 top-0 text-[#c9a227]" aria-hidden="true">
                      •
                    </span>
                    {node}
                  </li>
                ))}
              </ul>

              <p className="text-[#1a2a3a] text-[15px] md:text-[16px] leading-[1.8] font-medium mb-7">
                You do not pay a milestone until the document that triggers it is in your hands. If the first stage does not earn the second, you do not buy the second.
              </p>

              <ul className="space-y-4">
                {[
                  <>
                    <strong className="text-[#1a2a3a] font-medium">
                      Contracted with and billed to the company. Not to individuals.
                    </strong>
                  </>,
                  <>Typically ninety days. The milestones govern, not the calendar — if the work runs faster you pay sooner; if it runs longer the final milestone still falls due at day 120</>,
                  <>Mutual NDA signed before intake, as standard</>,
                  <>US$1,000 comes off the first milestone if you booked an IPO Path Assessment in the last 60 days</>,
                  <>Everything you have paid credits toward an advisory mandate booked within 60 days of the engagement ending</>,
                  <>Third-party professional fees are not included. See below — they are substantially larger than this engagement and you pay them directly</>,
                ].map((node, i) => (
                  <li
                    key={i}
                    className="relative pl-6 text-slate-600 text-[15px] leading-[1.8] font-light"
                  >
                    <span className="absolute left-0 top-0 text-[#c9a227]" aria-hidden="true">
                      •
                    </span>
                    {node}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-200 p-7 md:p-10">
              <p className="text-slate-600 text-[15px] leading-[1.85] font-light">
                <strong className="text-[#1a2a3a] font-medium">On availability:</strong> I run a small number of these at once, because every call and every email is mine. I will tell you on the discovery call exactly where that stands and give you a real start date rather than a waitlist.
              </p>
            </div>

            <div className="border-t border-slate-200 p-7 md:p-10">
              <p className="text-slate-600 text-[15px] leading-[1.85] font-light">
                <strong className="text-[#1a2a3a] font-medium">What is guaranteed, and what is not:</strong> the milestone structure is the guarantee — you pay on delivery, not in advance. If I miss a scheduled call and cannot offer a replacement slot within seven days, that week is credited and the engagement extends by a week. There is no guarantee about your outcome, and you should be wary of anyone in this market who offers one.
              </p>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <PrimaryCTA className="w-full sm:w-[420px]" />
          </div>
        </div>
      </section>

      {/* ─────────────────── SECTION 11 — About Mandy ─────────────────── */}
      <section className="py-14 md:py-20 px-6 bg-white">
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
              <h2 className="text-3xl md:text-4xl font-normal mb-7 text-center md:text-left">About Mandy</h2>
              <div className="space-y-5 text-slate-600 text-[15px] leading-[1.85] font-light">
                <p>
                  SFC Type 6 licensed. Ten-plus years across HKEX, Nasdaq and global markets. Sixty-plus transactions in IPOs, M&amp;A and cross-border deals across Hong Kong, mainland China and the UAE.
                </p>
                <p>
                  I have sat on the sell side. I know what your sponsor is optimising for, what your auditor will and will not sign, and which of the things you are currently worried about actually matter. Section 4 is a fair sample of how I think.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── SECTION 12 — What happens next ─────────────── */}
      <section className="py-16 md:py-24 px-6 bg-[#1a2a3a]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal mb-10 text-center" style={{ color: "#ffffff" }}>
            What happens next
          </h2>

          <ol className="space-y-7 mb-12">
            {[
              {
                lead: "Book a confidential call.",
                rest: " Thirty minutes, no charge, no deck. You describe the business and the timeline.",
              },
              {
                lead: "I tell you which of my offers fits",
                rest: " — or that none of them do. That happens and it is fine.",
              },
              {
                lead: "If it is this one:",
                rest: " contract and NDA, intake pack, first call within ten working days.",
              },
            ].map((s, i) => (
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
        </div>
      </section>

      <div className="mobile-cta-spacer" />
      <StickyMobileBar />
    </div>
  )
}
