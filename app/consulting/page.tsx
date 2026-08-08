"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Cormorant_Garamond, Poppins } from "next/font/google"
import { SiteHeader } from "../_components/site-header"
import { DetailsDrawer } from "./details-drawer"

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

/* Same booking URL the page has always used. */
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
          Three milestones · pay on delivery
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

const CONFLICTS = [
  "Your bankers want the mandate, so everything sounds feasible.",
  "Your auditor answers the question you asked, not the one you should have asked.",
  "Your securities counsel will tell you whether it is legal, never whether it is a good idea.",
  "Everyone who has actually done this before is on the sell side.",
]

const WORKS_IF = [
  "You are 6 to 36 months from a listing decision, or deciding whether to make one",
  "The business generates real profit — roughly US$750K+ net",
  "Someone senior can hold an hour a week and act between calls",
  "You want a second opinion from someone not trying to win a mandate",
]

const DOES_NOT_WORK_IF = [
  "You need capital in the next ninety days",
  "You want documents built rather than directed",
  "Nobody on your side can decide between calls",
  "You are looking for assurance that you will list",
]

const NEXT_STEPS: Array<{ lead: string; rest: string }> = [
  {
    lead: "Book a confidential call.",
    rest: " Thirty minutes, no charge, no deck. You describe the business and the timeline.",
  },
  {
    lead: "I tell you which of my offers fits",
    rest: " — or that none of them do. That happens, and it is fine.",
  },
  {
    lead: "If it is this one:",
    rest: " contract and NDA, intake pack, first call within ten working days.",
  },
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
        h1, h2, h3, h4 {
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
          { label: "Is This You?", href: "#is-this-you" },
          { label: "Details", href: "#the-details" },
        ]}
        bookHref={TIDYCAL_URL}
      />

      {/* ─────────────────────────── HERO ─────────────────────────── */}
      <section
        id="hero-section"
        className="relative w-full bg-[#1a2a3a] px-6 py-20 md:py-32 overflow-hidden"
      >
        <Image
          src="/Nasdaq.webp"
          alt="Nasdaq MarketSite, Times Square, New York"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "50% 38%" }}
        />
        {/* Navy scrim — same treatment as the /ipo-path hero. The LED tower is very
            bright, so this carries the text contrast; do not lighten it. */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#1a2a3a]/88 via-[#1a2a3a]/82 to-[#1a2a3a]/92 pointer-events-none"
          aria-hidden="true"
        />
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
            A working relationship with a licensed capital markets advisor, for founder-led companies going public for the first time — mostly on Nasdaq. Long enough to close the venue question, name what is actually blocking you, and get the order of operations right.
          </p>

          <p className="text-[#f5e6b3] text-[12px] md:text-[13px] font-medium tracking-[0.22em] uppercase mb-10">
            Paid in three milestones, each on delivery · typically 90 days · contracted with the company
          </p>

          <div className="flex flex-col items-center gap-4">
            <PrimaryCTA className="w-full sm:w-[420px]" />
            <p className="text-white/70 font-light text-sm">30 minutes, no charge</p>
          </div>
        </div>
      </section>

      {/* ───────────────── 1 · The position you are probably in ───────────────── */}
      <section className="py-14 md:py-20 px-6 bg-white">
        <div className="max-w-[65ch] mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal mb-8 leading-[1.2]" style={{ textWrap: "balance" }}>
            The position you are probably in
          </h2>

          <div className="space-y-5 text-slate-600 text-[15px] leading-[1.85] font-light">
            <p>
              You are somewhere between &quot;we should think about going public&quot; and &quot;we have a banker.&quot; That gap is where companies lose eighteen months.
            </p>
            <p>Not for lack of information — for lack of anyone unconflicted:</p>
          </div>

          <ul className="my-7 space-y-3.5">
            {CONFLICTS.map((item) => (
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

      {/* ══════════ 2 · The centrepiece — tinted full-bleed band ══════════ */}
      <section className="py-16 md:py-24 px-6 bg-[#1a2a3a]">
        <div className="max-w-[68ch] mx-auto">
          <h2
            className="text-3xl md:text-[42px] font-normal mb-4 leading-[1.15]"
            style={{ color: "#ffffff", textWrap: "balance" }}
          >
            Three things first-time listers get wrong
          </h2>

          <p className="text-slate-400 italic font-light text-[13px] md:text-[13.5px] leading-[1.7] mb-12">
            Stated as at 8 August 2026.
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-[21px] md:text-[25px] font-normal leading-[1.35] mb-4" style={{ color: "#f5e6b3" }}>
                They pick the exchange by prestige. It is an investor-access decision.
              </h3>
              <p className="text-slate-200 text-[17px] md:text-[18px] leading-[1.85] font-light">
                The venue question is not &quot;Nasdaq or Hong Kong&quot; as brands. It is who actually buys your story, and at what multiple. US sector-specialist capital lives on Nasdaq; Greater China and pan-Asian money trades in Hong Kong. Pick the wrong room and you get the worst outcome in this business: listed, and ignored.
              </p>
            </div>

            <div>
              <h3 className="text-[21px] md:text-[25px] font-normal leading-[1.35] mb-4" style={{ color: "#f5e6b3" }}>
                They overestimate the burden of a US listing.
              </h3>
              <p className="text-slate-200 text-[17px] md:text-[18px] leading-[1.85] font-light">
                Boards routinely rule out Nasdaq on compliance fear. A foreign private issuer files an annual report and material-event updates — not the quarterly cycle US domestic companies run — and can keep many home-country governance practices. The US route is often lighter than the board assumed. That decision deserves real numbers, not folklore.
              </p>
            </div>

            <div>
              <h3 className="text-[21px] md:text-[25px] font-normal leading-[1.35] mb-4" style={{ color: "#f5e6b3" }}>
                They treat the listing as the finish line.
              </h3>
              <p className="text-slate-200 text-[17px] md:text-[18px] leading-[1.85] font-light">
                It is the start. A smaller company that lists without an aftermarket plan — research coverage, investor access, a story institutions can keep buying — ends up public and orphaned, trading at a fraction of where it opened. Venue, structure and timing decide that outcome long before the bell-ringing photo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────── 3 · What you get ─────────────────────── */}
      <section id="what-you-get" className="scroll-anchor py-14 md:py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal mb-8 text-center">What you get</h2>

          <p className="text-[#1a2a3a] text-[18px] md:text-[20px] font-medium leading-[1.6] mb-10 text-center">
            Ninety days. One standing conversation. Two documents.
          </p>

          <div className="space-y-8">
            <div>
              <p className="text-[#1a2a3a] text-[16px] md:text-[17px] font-medium leading-[1.65] mb-2">
                A weekly working call, direct with me.
              </p>
              <p className="text-slate-600 text-[15px] leading-[1.85] font-light">
                Sixty minutes, same slot, thirteen weeks. No associate, no handoff. Email between calls, answered within 48 hours.
              </p>
            </div>

            {/* The two named documents — hairline accent, deliberately not cards. */}
            <div className="pt-7 border-t-2 border-[#c9a227]">
              <p className="text-[#1a2a3a] text-[17px] md:text-[19px] font-medium leading-[1.6] mb-2">
                The Venue Decision
              </p>
              <p className="text-slate-600 text-[15px] md:text-[15.5px] leading-[1.85] font-light">
                — typically week four or five. Written, board-ready: which route your numbers actually support, the reasoning, and what specifically rules out the routes you are not taking.
              </p>
            </div>

            <div className="pt-7 border-t-2 border-[#c9a227]">
              <p className="text-[#1a2a3a] text-[17px] md:text-[19px] font-medium leading-[1.6] mb-2">
                The Remediation Plan
              </p>
              <p className="text-slate-600 text-[15px] md:text-[15.5px] leading-[1.85] font-light">
                — typically week twelve. The three or four things standing between you and a viable filing — cap table, structure, related-party exposure, the state of your audit trail — in the order they must be fixed, with who fixes each and roughly how long it takes. Those things are set years before an IPO and decide which routes are open. Fixed early they are housekeeping; fixed under a filing deadline they are seven figures and a delay.
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <PrimaryCTA className="w-full sm:w-[420px]" />
          </div>
        </div>
      </section>

      {/* ─────────────────────── 4 · Is this you? ─────────────────────── */}
      <section id="is-this-you" className="scroll-anchor py-14 md:py-20 px-6 bg-[#f8f7f4]">
        <div className="max-w-5xl mx-auto">
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

      {/* ─────────────────────── 5 · About Mandy ─────────────────────── */}
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
              <h2 className="text-3xl md:text-4xl font-normal mb-7 text-center md:text-left">
                About Mandy
              </h2>
              <div className="space-y-5 text-slate-600 text-[15px] leading-[1.85] font-light">
                <p>
                  Ten-plus years across Nasdaq, HKEX and global markets. Sixty-plus transactions in IPOs, M&amp;A and cross-border deals. SFC Type 6 licensed — advising on corporate finance.
                </p>
                <p>
                  Most of the listings I work on are US ones, Nasdaq and NYSE American, for founder-led companies listing for the first time. Hong Kong enters the conversation when the investor base genuinely fits, not as a default.
                </p>
                <p>
                  I have sat on the sell side. I know what your bankers are optimising for, what your auditor will and will not sign, and which of the things you are currently worried about actually matter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── 6 · What happens next ─────────────────── */}
      <section className="py-16 md:py-24 px-6 bg-[#1a2a3a]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal mb-10 text-center" style={{ color: "#ffffff" }}>
            What happens next
          </h2>

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
        </div>
      </section>

      {/* ─────────────────────── THE DETAILS DRAWER ─────────────────────── */}
      <section id="the-details" className="scroll-anchor py-14 md:py-20 px-6 bg-[#f8f7f4]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal mb-4 text-center">The details</h2>
          <p className="text-slate-600 text-[15px] leading-[1.85] font-light italic text-center mb-10">
            Everything below matters before you sign. None of it matters before we talk.
          </p>

          <DetailsDrawer />
        </div>
      </section>

      <div className="mobile-cta-spacer" />
      <StickyMobileBar />
    </div>
  )
}
