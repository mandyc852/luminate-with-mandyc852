"use client"

import Image from "next/image"
import { Cormorant_Garamond, Poppins } from "next/font/google"
import { SiteHeader } from "../_components/site-header"

const SLOTS_REMAINING = 2 // update manually as slots fill

const TIDYCAL_URL = "https://tidycal.com/mandyc852/30-minute-meeting"

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

/* Native lazy-loaded TidyCal embed. Browser defers the load until the iframe
   is near the viewport, so it doesn't hurt initial page speed. */
function BookingEmbed() {
  return (
    <div className="w-full">
      <div className="relative w-full bg-white border border-slate-200" style={{ minHeight: 720 }}>
        <iframe
          src={TIDYCAL_URL}
          title="Book a confidential call — TidyCal"
          loading="lazy"
          className="w-full block"
          style={{ minHeight: 720, border: 0 }}
        />
      </div>
      <p className="text-center text-xs text-slate-500 mt-4 font-light">
        Booking calendar not loading?{" "}
        <a
          href={TIDYCAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#a68a1f] hover:text-[#1a2a3a] underline"
        >
          Book here →
        </a>
      </p>
    </div>
  )
}

/* Mobile-only sticky bottom CTA — links to #book, never off-site. */
function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[900] bg-white border-t border-slate-200 shadow-[0_-6px_20px_rgba(15,26,36,0.08)] px-4 py-3">
      <a
        href="#book"
        className="w-full flex items-center justify-center sm:whitespace-nowrap px-6 py-3.5 rounded-none uppercase tracking-[0.12em] text-[13px] font-semibold btn-gold-animated"
        style={{ minHeight: 48 }}
      >
        Book a Confidential Call
      </a>
    </div>
  )
}

const CTA_LABEL = "Book a Confidential Call"

export default function ConsultingPage() {
  return (
    <div className={`${cormorantGaramond.variable} ${poppins.variable} min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50/80`}>
      <style jsx global>{`
        :root {
          --navy-deep: #1a2a3a;
          --navy-medium: #2d4156;
          --gold-primary: #c9a227;
          --gold-light: #d4b84a;
          --gold-dark: #a68a1f;
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
        p, label, input, button { font-family: var(--font-poppins), sans-serif; }
        .gradient-text-hero {
          background: linear-gradient(135deg, #FFFFFF 0%, #f5e6b3 40%, #c9a227 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @keyframes urgencyPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(201,162,39,0.4); }
          70% { box-shadow: 0 0 0 8px rgba(201,162,39,0); }
        }
        /* Add bottom room so mobile sticky bar doesn't overlap the footer content */
        @media (max-width: 768px) { .mobile-cta-spacer { height: 84px; } }
      `}</style>

      {/* Full site header (matches homepage). bookHref="#book" makes the header
          Book a Call button anchor to the embedded booking on this page. */}
      <SiteHeader bookHref="#book" />

      {/* HERO — Mandy portrait on the right, timing thesis on the left. */}
      <section id="hero-section" className="relative w-full min-h-[540px] md:min-h-[620px] flex items-center overflow-hidden bg-[#1a2a3a]">
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-[55%] z-0 overflow-hidden">
          <Image
            src="/main banner 3.png"
            alt="Mandy Cheung"
            fill
            className="object-cover"
            style={{ objectPosition: "40% 20%" }}
            priority
            quality={100}
          />
          <div className="absolute left-0 top-0 bottom-0 w-[120px] md:w-[160px] bg-gradient-to-r from-[#1a2a3a] via-[#1a2a3a]/60 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[#1a2a3a]/60 md:hidden pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 w-full py-12">
          <div className="w-full min-w-0 max-w-xl mx-auto md:mx-0 text-center md:text-left">
            <p className="text-[#c9a227] text-xs font-medium tracking-[0.3em] uppercase mb-4">
              Strategic Consulting · Hong Kong
            </p>
            <h1 className="gradient-text-hero text-3xl sm:text-4xl md:text-5xl leading-[1.15] font-normal mb-5">
              You can only be too late.<br />Never too early.
            </h1>
            <p className="text-base md:text-lg text-white/90 font-light leading-relaxed mb-7 max-w-xl mx-auto md:mx-0">
              A great capital markets outcome — a raise, a restructuring, a listing — is a two-to-three-year decision. If your company has a big vision, the work starts now.
            </p>
            <a
              href="#book"
              className="w-full sm:w-auto inline-flex items-center justify-center sm:whitespace-nowrap px-8 py-4 rounded-none uppercase tracking-[0.12em] text-sm font-semibold shadow-[0_4px_24px_rgba(201,162,39,0.45)] btn-gold-animated hover:-translate-y-0.5 transition-transform"
            >
              {CTA_LABEL}
            </a>
          </div>
        </div>
      </section>

      {/* CREDENTIAL BAR */}
      <section className="bg-gradient-to-r from-[#c9a227] via-[#d4b84a] to-[#c9a227] py-3.5 px-6 md:px-12">
        <p className="text-center text-[#1a2a3a] text-[13px] font-semibold tracking-[0.06em]">
          SFC Type 6 Licensed · 60+ Transactions · US$500M+ in Deal Value · HKEX, NASDAQ &amp; Cross-Border ·{" "}
          <span className="underline">Accepting {SLOTS_REMAINING} new engagements this quarter</span>
        </p>
      </section>

      {/* THE PROBLEM — timing thesis */}
      <section id="the-problem" className="scroll-anchor py-20 md:py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-10 text-center font-normal" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
            Most founders come to me a year too late
          </h2>
          <div className="space-y-5 text-slate-600 text-[15px] leading-[1.8] font-light">
            <p>
              A great capital markets outcome — a listing, a strategic raise, a clean restructuring — is a two-to-three-year build. The structure has to be laid down. The numbers have to be shaped. The narrative has to be earned. The professional parties have to be chosen carefully, not reactively.
            </p>
            <p>
              By the time most founders reach out, the term sheet is on the table, the regulator is asking questions, or a deadline is closing in. The choices have already narrowed. You end up playing the hand you built two years ago — with no room to rebuild it.
            </p>
            <p className="text-[#1a2a3a] font-normal">
              With a big enough vision, you can only be too late. You cannot be too early.
            </p>
            <p>
              The founders who get the smoothest outcomes are the ones who started early — when there was still room to shape the structure, the numbers, and the story. They don&apos;t need more advisors. They need one person who sees the full picture and holds it steady for the two or three years it takes to build.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT THE ENGAGEMENT LOOKS LIKE */}
      <section id="engagement" className="scroll-anchor py-20 md:py-28 px-6 bg-[#f8f7f4]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase text-center mb-3">
            The engagement
          </p>
          <h2 className="text-3xl md:text-4xl mb-4 text-center font-normal" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
            What the engagement looks like
          </h2>
          <p className="text-center text-slate-600 text-[15px] font-light mb-12 max-w-3xl mx-auto leading-[1.8]">
            A 90-day strategic engagement, scoped to the capital markets challenge in front of you right now.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-none bg-white border border-slate-200 flex flex-col">
              <p className="text-[#a68a1f] text-[11px] font-medium tracking-[0.22em] uppercase mb-3">01 · Weekly</p>
              <h3 className="text-xl font-normal text-[#1a2a3a] mb-3" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                Weekly working session
              </h3>
              <p className="text-slate-600 font-light text-[14px] leading-[1.75] flex-grow">
                60 minutes, one-on-one with me. Not a check-in. A working session where we move the deal forward: restructuring decisions, regulatory strategy, investor positioning, professional party selection.
              </p>
            </div>

            <div className="p-8 rounded-none bg-white border border-slate-200 flex flex-col">
              <p className="text-[#a68a1f] text-[11px] font-medium tracking-[0.22em] uppercase mb-3">02 · Between sessions</p>
              <h3 className="text-xl font-normal text-[#1a2a3a] mb-3" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                Async access
              </h3>
              <p className="text-slate-600 font-light text-[14px] leading-[1.75] flex-grow">
                Email me when something comes up. 48-hour response, often faster. The work doesn&apos;t stop between calls.
              </p>
            </div>

            <div className="p-8 rounded-none bg-white border border-slate-200 flex flex-col">
              <p className="text-[#a68a1f] text-[11px] font-medium tracking-[0.22em] uppercase mb-3">03 · Monthly</p>
              <h3 className="text-xl font-normal text-[#1a2a3a] mb-3" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                Monthly strategic report
              </h3>
              <p className="text-slate-600 font-light text-[14px] leading-[1.75] flex-grow">
                A written document your board can read. Where things stand, what&apos;s been decided, what&apos;s next. Not a slide deck — a memo that moves the conversation forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section id="who-its-for" className="scroll-anchor py-20 md:py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-10 text-center font-normal" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
            Who this is for
          </h2>
          <div className="space-y-5 text-slate-600 text-[15px] leading-[1.8] font-light">
            <p>
              Companies with a big vision for the next five to ten years, and the founders and executives leading them.
            </p>
            <p>
              If a listing, a strategic raise, or a restructuring is 24 to 36 months out — and the groundwork on structure, governance, and narrative starts now — that&apos;s exactly the window this engagement is built for.
            </p>
            <p>
              This engagement is scoped to a company, not an individual. It&apos;s advisory work billed to and contracted with the entity, because that&apos;s what the work serves.
            </p>
            <p className="text-[#1a2a3a] font-normal">
              If you&apos;re earlier than that — still exploring whether listing is even right for you — start with a{" "}
              <a href={TIDYCAL_URL} target="_blank" rel="noopener noreferrer" className="underline decoration-[#c9a227] decoration-2 underline-offset-4 hover:text-[#a68a1f] transition-colors">
                free discovery call
              </a>
              . This engagement is for companies that have decided to move and need someone in the room while they do.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT I'VE DONE */}
      <section id="track-record" className="scroll-anchor py-20 md:py-28 px-6 bg-[#f8f7f4]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase text-center mb-3">
            Track record
          </p>
          <h2 className="text-3xl md:text-4xl mb-12 text-center font-normal" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
            What I&apos;ve done
          </h2>

          <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-14 items-start">
            <div className="mx-auto md:mx-0 w-full max-w-[280px]">
              <div className="relative aspect-[4/5] w-full bg-slate-200 overflow-hidden">
                <Image
                  src="/Profile pic 4.png"
                  alt="Mandy Cheung"
                  fill
                  quality={90}
                  className="object-cover"
                  sizes="(max-width: 768px) 280px, 280px"
                />
              </div>
            </div>

            <div className="space-y-6 text-slate-600 text-[15px] leading-[1.85] font-light">
              <div className="grid grid-cols-3 gap-4 pb-6 border-b border-slate-300/60">
                <div>
                  <p className="text-[#1a2a3a] text-2xl md:text-4xl font-normal" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>60+</p>
                  <p className="text-[11px] tracking-[0.15em] uppercase text-slate-500 mt-1">Transactions</p>
                </div>
                <div>
                  <p className="text-[#1a2a3a] text-2xl md:text-4xl font-normal" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>US$500M+</p>
                  <p className="text-[11px] tracking-[0.15em] uppercase text-slate-500 mt-1">Deal value advised</p>
                </div>
                <div>
                  <p className="text-[#1a2a3a] text-2xl md:text-4xl font-normal" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>SFC</p>
                  <p className="text-[11px] tracking-[0.15em] uppercase text-slate-500 mt-1">Type 6 Licensed</p>
                </div>
              </div>
              <p>
                <span className="text-[#1a2a3a] font-normal">60+ transactions, US$500M+ in deal value</span> — IPOs, general offers, convertible bonds, and restructurings across HKEX and NASDAQ. I&apos;ve seen how these processes end. That&apos;s why I know how they need to start.
              </p>
              <p>
                Whether you&apos;re two years out or six months from a milestone, the work is the same: getting the structure, the governance, and the story right — early enough that you still have room to shape them. That&apos;s what ten-plus years and an SFC Type 6 license are for.
              </p>
              <p>
                The companies I work with range from founder-led businesses preparing their first raise to established firms navigating cross-border regulatory complexity. No matter the stage, the common thread is the same: they want someone who&apos;s been through it and can see around corners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT STARTS */}
      <section id="how-it-starts" className="scroll-anchor py-20 md:py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase text-center mb-3">
            The path
          </p>
          <h2 className="text-3xl md:text-4xl mb-12 text-center font-normal" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
            How it starts
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#f8f7f4] p-8 border border-slate-200 flex flex-col">
              <p className="text-[#a68a1f] text-[11px] font-medium tracking-[0.22em] uppercase mb-3">Step 01</p>
              <h3 className="text-xl font-normal text-[#1a2a3a] mb-3" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                Confidential call
              </h3>
              <p className="text-slate-600 font-light text-[14px] leading-[1.75] flex-grow">
                30 minutes. No pitch. I&apos;ll ask about the transaction, the timeline, and where things stand. You&apos;ll know by the end of the call whether this engagement makes sense — and so will I.
              </p>
            </div>

            <div className="bg-[#f8f7f4] p-8 border border-slate-200 flex flex-col">
              <p className="text-[#a68a1f] text-[11px] font-medium tracking-[0.22em] uppercase mb-3">Step 02</p>
              <h3 className="text-xl font-normal text-[#1a2a3a] mb-3" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                Scoping
              </h3>
              <p className="text-slate-600 font-light text-[14px] leading-[1.75] flex-grow">
                If there&apos;s a fit, I&apos;ll send a one-page scope: what we&apos;ll work on, what the 90 days look like, and how the engagement is structured. You review it with your team and decide.
              </p>
            </div>

            <div className="bg-[#f8f7f4] p-8 border border-slate-200 flex flex-col">
              <p className="text-[#a68a1f] text-[11px] font-medium tracking-[0.22em] uppercase mb-3">Step 03</p>
              <h3 className="text-xl font-normal text-[#1a2a3a] mb-3" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                We start
              </h3>
              <p className="text-slate-600 font-light text-[14px] leading-[1.75] flex-grow">
                Weekly sessions begin. The work is live from day one.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="#book"
              className="w-full md:w-[520px] inline-flex items-center justify-center whitespace-nowrap px-6 md:px-10 py-4 rounded-none uppercase tracking-[0.12em] md:tracking-[0.15em] text-sm font-semibold shadow-[0_4px_24px_rgba(201,162,39,0.45)] btn-gold-animated hover:-translate-y-0.5 transition-transform"
            >
              {CTA_LABEL}
            </a>
          </div>
        </div>
      </section>

      {/* CLOSING LINE */}
      <section className="bg-[#1a2a3a] py-16 md:py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(201,162,39,0.05)] via-transparent to-[rgba(201,162,39,0.03)]" />
        <div className="relative z-10 max-w-[640px] mx-auto">
          <p className="text-white text-2xl md:text-3xl leading-[1.4]" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
            I take on a limited number of engagements at a time.
          </p>
          <p className="text-[#c9a227] text-2xl md:text-3xl leading-[1.4] mb-2" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
            If you have a big vision for this company, the time to start planning is now.
          </p>
        </div>
      </section>

      {/* BOOKING EMBED */}
      <section id="book" className="scroll-anchor py-20 md:py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase mb-3">
              Book a call
            </p>
            <h2 className="text-3xl md:text-4xl mb-5 font-normal" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
              Book a confidential call
            </h2>
            <p className="text-slate-600 text-[15px] font-light max-w-2xl mx-auto leading-[1.8] mb-4">
              30 minutes. No pitch, no deck. Here&apos;s what to expect:
            </p>
            <ul className="text-slate-600 text-[15px] font-light max-w-xl mx-auto text-left space-y-2.5 leading-[1.7]">
              <li className="relative pl-6">
                <span className="absolute left-0 text-[#c9a227]">→</span>
                I&apos;ll ask about the transaction, the timeline, and where things stand
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 text-[#c9a227]">→</span>
                You&apos;ll get my honest read on your readiness — even if the answer is &quot;not yet&quot;
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 text-[#c9a227]">→</span>
                If there&apos;s a fit, I&apos;ll send a one-page scope within 48 hours
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-center gap-2 mb-6">
            <span
              className="w-[7px] h-[7px] rounded-full bg-[#c9a227] flex-shrink-0"
              style={{ animation: "urgencyPulse 2s ease infinite" }}
            />
            <span className="text-slate-500 text-xs font-medium tracking-[0.15em] uppercase">
              Accepting {SLOTS_REMAINING} new engagements this quarter
            </span>
          </div>

          <BookingEmbed />
        </div>
      </section>

      <div className="mobile-cta-spacer" />
      <StickyMobileCTA />

      {/* Footer */}
      <footer className="w-full bg-[#0f1a24] border-t border-[#1a2a3a] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-5">
            <div className="flex items-center justify-center gap-6">
              <a href="https://www.youtube.com/@MandyC852" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#c9a227] transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/mandyc852/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#c9a227] transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
