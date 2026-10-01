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
  name: "The 90-Day Readiness Engagement",
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
          { label: "How It Runs", href: "#how-it-runs" },
          { label: "Is This You?", href: "#is-this-you" },
          { label: "Questions", href: "#common-questions" },
        ]}
        bookHref={TIDYCAL_URL}
      />

      {/* ───────────────────── HERO — typographic, no image ───────────────────── */}
      <section
        id="hero-section"
        className="relative w-full bg-[#1a2a3a] px-6 py-24 md:py-36 overflow-hidden"
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
            Ninety days from where you are to filing-ready.
          </h1>

          <p className="text-base md:text-lg text-white/90 font-light leading-[1.75] mb-8 max-w-2xl mx-auto">
            You have decided to list. What stands between you and a filing is rarely the decision — it is how your group is owned and what your financial records will survive. I spend ninety days fixing both.
          </p>

          <p className="text-[#f5e6b3] text-[12px] md:text-[13px] font-medium tracking-[0.22em] uppercase mb-10">
            Fixed fee US$15,000 · typically 90 days · contracted with the company
          </p>

          <div className="flex flex-col items-center gap-4">
            <PrimaryCTA className="w-full sm:w-[420px]" />
            <p className="text-white/70 font-light text-sm">30 minutes, no charge</p>
          </div>
        </div>
      </section>

      {/* ══════════ 1 · Centrepiece — tinted full-bleed band ══════════ */}
      <section className="py-16 md:py-24 px-6 bg-[#1a2a3a]">
        <div className="max-w-[68ch] mx-auto">
          <h2
            className="text-3xl md:text-[42px] font-normal mb-12 leading-[1.15]"
            style={{ color: "#ffffff", textWrap: "balance" }}
          >
            Three things that actually stop a first listing
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-[21px] md:text-[25px] font-normal leading-[1.35] mb-4" style={{ color: "#f5e6b3" }}>
                The blocker is almost never the decision. It is the structure.
              </h3>
              <p className="text-slate-200 text-[17px] md:text-[18px] leading-[1.85] font-light">
                By the time we speak you have usually settled on Nasdaq, and for a company at your size it is often the only route whose thresholds you clear. What delays a first listing is what sits underneath the decision: how the group is owned. Most first-time issuers need a holding company established above their operating entities before they can list at all — and that reorganisation carries tax, regulatory and shareholder consequences that have to be worked through in the right order. Rebuilding the structure is the work, and it has to happen before anyone drafts a document.
              </p>
            </div>

            <div>
              <h3 className="text-[21px] md:text-[25px] font-normal leading-[1.35] mb-4" style={{ color: "#f5e6b3" }}>
                Profitable is not the same as auditable.
              </h3>
              <p className="text-slate-200 text-[17px] md:text-[18px] leading-[1.85] font-light">
                Founders who know their numbers are usually right about the business and wrong about the records. Dealings with family and connected companies that were never at arm&apos;s length. Money moving between group entities on handshake terms. Revenue recognised the way your market does it rather than the way a US audit requires. Books that simply do not reach back far enough to cover the audit period. None of it looks like a problem until an auditor asks — and by then it is on your timeline, not theirs.
              </p>
            </div>

            <div>
              <h3 className="text-[21px] md:text-[25px] font-normal leading-[1.35] mb-4" style={{ color: "#f5e6b3" }}>
                Left late, this costs multiples.
              </h3>
              <p className="text-slate-200 text-[17px] md:text-[18px] leading-[1.85] font-light">
                Restructuring a group and repairing historical financials takes months, and it does not compress. Done early it is planning. Done under a filing deadline it becomes emergency work at emergency prices, with a delay attached — and often a structure you would not have chosen if you had been given time to choose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── 2 · How the ninety days run ─────────────────── */}
      <section id="how-it-runs" className="scroll-anchor py-14 md:py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal mb-10 text-center">How the ninety days run</h2>

          <div className="space-y-8">
            <div>
              <p className="text-[#1a2a3a] text-[17px] md:text-[18px] font-medium leading-[1.6] mb-2">
                Week one — I take everything in.
              </p>
              <p className="text-slate-600 text-[15px] leading-[1.85] font-light">
                Financials, cap table, group structure, and the arrangements nobody wrote down. My job in week one is to understand your company more precisely than you have ever had to explain it.
              </p>
            </div>

            <div>
              <p className="text-[#1a2a3a] text-[17px] md:text-[18px] font-medium leading-[1.6] mb-2">
                Week two — you get the plan.
              </p>
              <p className="text-slate-600 text-[15px] leading-[1.85] font-light">
                A written proposal: what has to change in your structure and your financials, in what order, who does each piece, and how long each takes. You will know the shape of the entire ninety days before we are two weeks in.
              </p>
            </div>

            <div>
              <p className="text-[#1a2a3a] text-[17px] md:text-[18px] font-medium leading-[1.6] mb-2">
                Weeks three to thirteen — we do it.
              </p>
              <p className="text-slate-600 text-[15px] leading-[1.85] font-light">
                The restructuring itself, worked week by week. A standing call every week, email in between, and me directing the lawyers and accountants you appoint so the sequence holds. At the end, your company is in a shape that can carry a filing.
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <PrimaryCTA className="w-full sm:w-[420px]" />
          </div>
        </div>
      </section>

      {/* ─────────────────────── 3 · Is this you? ─────────────────────── */}
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

      {/* ─────────────────────── 4 · About Mandy ─────────────────────── */}
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
                  Most of the listings I work on are US ones, for founder-led companies listing for the first time. I have sat on the sell side, which is why I can tell you what your auditor will and will not sign before you find out the expensive way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── 5 · What happens next ─────────────────── */}
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

      {/* ─────────────────────── COMMON QUESTIONS ─────────────────────── */}
      <section id="common-questions" className="scroll-anchor py-14 md:py-20 px-6 bg-[#f8f7f4]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal mb-10 text-center">Common questions</h2>
          <DetailsDrawer />
        </div>
      </section>

      <div className="mobile-cta-spacer" />
      <StickyMobileBar />
    </div>
  )
}
