"use client"

import { useState, useEffect, Fragment } from "react"
import Image from "next/image"
import { SiteHeader } from "../_components/site-header"

const TIDYCAL_URL = "https://tidycal.com/mandyc852/15-minute-meeting"

const WHAT_YOU_GET = [
  {
    n: "01",
    title: "One 90-minute live group call per week",
    body: "Small group. Real situations from your week, worked in real time. Direct access to Mandy and the cohort.",
  },
  {
    n: "02",
    title: "AI-powered daily practice between sessions",
    body: "A set of practice files you load into whichever AI you already use — Claude, ChatGPT, or anything else. It runs your daily inner-game protocols: state regulation, loop interruption, identity-lag tracking, DAWN reflections. Personalised to you. Works anywhere.",
  },
  {
    n: "03",
    title: "6 weeks, not 6 months",
    body: "One season. Enough time to build the practice. Short enough to stay accountable.",
  },
  {
    n: "04",
    title: "A cohort of operators working the same problem",
    body: "8–12 seats. No audience, no lurkers. Everyone in the room is doing the real work.",
  },
]

const CURRICULUM = [
  { week: 1, title: "Reading Your System", body: "The gap between where you intend to operate and where you actually do. Awareness tools. Building your baseline." },
  { week: 2, title: "Identity Lag", body: "Why you keep reverting under pressure. How identity forms, and how it lags. Identifying the version of you that’s two levels behind." },
  { week: 3, title: "Internal Standards", body: "The difference between performing for external validation and operating from internal calibration. Recalibrating your floor." },
  { week: 4, title: "Regulating Under Pressure", body: "State regulation for the moments that matter. Before the meeting. In the room. After the outcome." },
  { week: 5, title: "Execution from the Right State", body: "Decisions from clarity, not reaction. The practice applied to real situations from your week." },
  { week: 6, title: "The Long Game", body: "Making it yours. What the practice looks like after the cohort ends — and how to keep building from here." },
]

const FAQ: Array<{ q: string; a: string }> = [
  {
    q: "Is this coaching?",
    a: "The cohort is a live group program — weekly calls, structured curriculum, and a daily practice companion. It is not 1:1 coaching. If you want direct one-on-one access, private coaching is available separately for a limited number of cohort members.",
  },
  {
    q: "What's the AI companion?",
    a: "A set of practice files you load into whichever AI you already use — Claude, ChatGPT, or anything else. Pre-built with the inner game protocols (state regulation, loop interruption, identity-lag tracking, DAWN reflections) and personalised to your context during onboarding week. Think of it as the daily practice layer the live calls sit on top of.",
  },
  {
    q: "I'm not into meditation or spiritual stuff.",
    a: "Neither is this. The practice is built for professionals who would never describe themselves that way. No jargon, no woo. Just a system for performing under pressure.",
  },
  {
    q: "What if I can't make a live call?",
    a: "Calls are recorded. But the cohort is small enough that attendance matters — it's not a course you consume, it's a practice you show up for.",
  },
  {
    q: "What's the commitment guarantee?",
    a: "Complete the work — attend calls, use the AI companion, do the practice — and if you don't get value, your seat in the next cohort is free. No questions asked.",
  },
  {
    q: "Will courses be added?",
    a: "Standalone courses on specific modules are planned for future release. Cohort participants get early access.",
  },
]

const WHO_THIS_IS_FOR = [
  {
    lead: "You’ve built the external success",
    body: "— but something still runs underneath it.",
  },
  {
    lead: "You know what to do",
    body: "— but in the 10 minutes before it matters, something else takes over.",
  },
  {
    lead: "You’re growing",
    body: "— and you’re tired of how much composure it takes to hold the standard while everyone reads the room off you.",
  },
]

const JOURNEY_STEPS = [
  { label: "Awareness", sub: "Reading your system" },
  { label: "Identity", sub: "Closing the lag" },
  { label: "Standards", sub: "Internal calibration" },
  { label: "Action", sub: "Executing from clarity" },
  { label: "Outcomes", sub: "Sustainable results" },
]

const SHIFTS = [
  { before: "Overthinking before decisions", after: "Clear in the room" },
  { before: "Reacting to pressure", after: "Regulating under it" },
  { before: "Managing how you're perceived", after: "Operating from your own standard" },
]

const ig = {
  headline: { fontFamily: "var(--font-playfair-display), Georgia, serif", fontStyle: "italic" as const, fontWeight: 400 },
  body: { fontFamily: "var(--font-poppins), sans-serif" },
}

function WaitlistForm({ placement }: { placement: string }) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")
  const [msg, setMsg] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.includes("@")) return
    setStatus("loading")
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, sourcePage: "cohort", sourcePlacement: placement }),
      })
      const data = await res.json()
      if (!res.ok) { setStatus("error"); setMsg(data.error || "Something went wrong."); return }
      setStatus("done")
      setMsg("You’re on the list. We’ll be in touch.")
    } catch {
      setStatus("error")
      setMsg("Something went wrong. Please try again.")
    }
  }

  if (status === "done") {
    return <p className="text-center text-sm font-medium tracking-wide text-[#D4A832]">{msg}</p>
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3 max-w-[520px] mx-auto">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className="w-full px-5 py-3.5 text-sm font-light outline-none bg-white/[0.05] border border-white/[0.08] text-[#FAF5EF] placeholder:text-[#78716C] focus:border-[#C4982A]/50 transition-colors"
        style={ig.body}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="ig-cta whitespace-nowrap disabled:opacity-50 w-full"
      >
        {status === "loading" ? "Joining..." : "Join Waitlist"}
      </button>
      {status === "error" && <p className="text-red-400 text-xs mt-1">{msg}</p>}
    </form>
  )
}

function FAQItem({ q, a, variant = "light" }: { q: string; a: string; variant?: "light" | "dark" }) {
  const [open, setOpen] = useState(false)
  const qColor = variant === "dark" ? "text-[#FAF5EF]" : "text-[#3D3530]"
  const aColor = variant === "dark" ? "text-[#A8A29E]" : "text-[#57534E]"
  const borderColor = variant === "dark" ? "border-[#C4982A]/15" : "border-[#3D3530]/10"
  return (
    <div className={`border-b ${borderColor} last:border-b-0`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left"
        aria-expanded={open}
      >
        <span className={`text-base md:text-lg ${qColor} font-normal`} style={ig.headline}>{q}</span>
        <svg
          className={`flex-shrink-0 w-4 h-4 mt-2 text-[#C4982A] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className={`pb-6 pr-8 ${aColor} font-light leading-[1.85] text-[15px]`} style={ig.body}><p>{a}</p></div>
      )}
    </div>
  )
}

export default function CohortPage() {
  const [showFloatingButton, setShowFloatingButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowFloatingButton(window.scrollY > 600)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#1A1714]">
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        body { background: #1A1714; padding-top: 80px; }
        .scroll-anchor { scroll-margin-top: 96px; }

        /* ── Dark nav override ─────────────────────────── */
        header.fixed {
          background: rgba(26, 23, 20, 0.97) !important;
          border-bottom-color: rgba(196, 152, 42, 0.18) !important;
          box-shadow: none !important;
        }
        header.fixed nav a:not([aria-label]):not(.btn-gold-animated) { color: #A8A29E !important; }
        header.fixed nav a:not([aria-label]):not(.btn-gold-animated):hover { color: #FAF5EF !important; }
        header.fixed nav > div > button { color: #A8A29E !important; }
        header.fixed nav > div > button:hover { color: #FAF5EF !important; }
        /* Social icons — gold */
        header.fixed nav a[aria-label] { color: #C4982A !important; }
        header.fixed nav a[aria-label]:hover { color: #a68a1f !important; }
        /* Book a Call — black bold on gold */
        header.fixed nav .btn-gold-animated {
          color: #1A1714 !important;
          font-weight: 700 !important;
        }
        /* Dropdown panel */
        header.fixed .absolute .bg-white,
        header.fixed .absolute > div {
          background: #1A1714 !important;
          border-color: rgba(196, 152, 42, 0.2) !important;
        }
        header.fixed .absolute a { color: #A8A29E !important; }
        header.fixed .absolute a:hover {
          background: rgba(196, 152, 42, 0.06) !important;
          color: #FAF5EF !important;
        }
        /* Mobile menu */
        header.fixed .md\\:hidden.bg-white,
        header.fixed .md\\:hidden.border-t {
          background: #1A1714 !important;
          border-color: rgba(196, 152, 42, 0.15) !important;
        }
        header.fixed .md\\:hidden nav a:not([aria-label]):not(.btn-gold-animated),
        header.fixed .md\\:hidden nav p { color: #A8A29E !important; }
        header.fixed button[aria-label="Menu"] svg { color: #C4982A !important; }
        header.fixed a[aria-label="MandyC. home"] span { color: #FAF5EF !important; }

        .ig-cta {
          background: linear-gradient(135deg, #a68a1f 0%, #c9a227 25%, #d4b84a 50%, #c9a227 75%, #a68a1f 100%);
          background-size: 200% 200%;
          color: #1A1714;
          font-family: var(--font-poppins), sans-serif;
          font-size: 0.85rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 14px 32px;
          border: none;
          font-weight: 500;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(26,23,20,0.25), 0 2px 8px rgba(196,152,42,0.2);
        }
        .ig-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(26,23,20,0.35), 0 4px 15px rgba(196,152,42,0.3);
          animation: shimmerGold 1.5s ease infinite;
        }
        @keyframes shimmerGold {
          0% { background-position: 200% 0%; }
          100% { background-position: -200% 0%; }
        }

        .ig-card {
          background: rgba(255, 248, 240, 0.03);
          border: 1px solid rgba(250, 245, 239, 0.06);
          padding: 36px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .ig-card:hover {
          border-color: rgba(196, 152, 42, 0.15);
          box-shadow: 0 0 40px rgba(196, 152, 42, 0.04);
        }

        .floating-cta {
          position: fixed; bottom: 24px; right: 24px; z-index: 1000;
          animation: pulseGlow 3s ease-in-out infinite;
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 16px rgba(196,152,42,0.3), 0 0 32px rgba(196,152,42,0.15); }
          50% { box-shadow: 0 0 24px rgba(196,152,42,0.5), 0 0 48px rgba(196,152,42,0.2); }
        }
        @media (max-width: 768px) { .floating-cta { bottom: 16px; right: 16px; } }
      `}</style>

      <SiteHeader
        links={[
          { label: "What It Is", href: "#what-it-is" },
          { label: "Pricing", href: "#pricing" },
          { label: "FAQ", href: "#faq" },
        ]}
        bookHref={TIDYCAL_URL}
      />

      {/* ── 1. HERO — Full-bleed banner + CTA ── */}
      <section className="bg-[#1A1714]">
        <div className="relative w-full aspect-[3/2] max-h-[55vh]">
          <Image
            src="/hero_2.png"
            alt="Mandy Cheung — Inner work. Real outcomes."
            fill
            priority
            quality={95}
            className="object-cover object-[50%_30%]"
            sizes="100vw"
          />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#1A1714] to-transparent" />
        </div>

        <div className="relative -mt-8 pb-14 md:pb-28 px-6">
          <div className="max-w-[720px] mx-auto text-center">
            <p className="text-[#C4982A]/80 text-[11px] font-medium tracking-[0.2em] uppercase mb-5" style={ig.body}>
              Inner Work. Real Outcomes.
            </p>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.1] text-[#FAF5EF] mb-6 tracking-tight"
              style={ig.headline}
            >
              Your next level is not<br />a strategy problem.
            </h1>
            <p className="text-base md:text-lg text-[#A8A29E] font-light leading-[1.6] mb-10 max-w-lg mx-auto" style={ig.body}>
              A 6-week live cohort for operators who already know the strategy &mdash;<br />and keep hitting the same internal wall.
            </p>

            <div className="flex flex-col items-center gap-4">
              <WaitlistForm placement="hero" />
              <a
                href={TIDYCAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A8A29E] hover:text-[#D4A832] text-sm font-light underline decoration-[#A8A29E]/30 hover:decoration-[#D4A832] underline-offset-4 transition-colors"
                style={ig.body}
              >
                Or book a call to ask me anything &rarr;
              </a>
              <p className="text-[#C4982A]/80 text-[11px] font-medium tracking-[0.2em] uppercase mt-4" style={ig.body}>
                Cohort 1 &middot; September 2026 &middot; Limited to 12 Seats
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHO'S RUNNING THIS ── */}
      <section className="py-14 md:py-28 px-6 bg-[#282320]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-[#FAF5EF] mb-12 text-center md:text-left" style={ig.headline}>
            Who&apos;s running this
          </h2>
          <div className="flex flex-col items-center md:flex-row md:items-start gap-10 md:gap-14">
            <div className="flex-shrink-0">
              <div className="relative w-40 md:w-48 aspect-[4/5] overflow-hidden">
                <Image src="/Profile pic 4.png" alt="Mandy Cheung" fill loading="eager" className="object-cover" sizes="(max-width: 768px) 160px, 192px" />
              </div>
            </div>
            <div className="space-y-5 text-[#A8A29E] text-base leading-[1.85] font-light text-center md:text-left" style={ig.body}>
              <p>
                Mandy Cheung. SFC Type 6 licensed capital markets advisor. 10+ years, 60+ transactions across HKEX and NASDAQ. The inner game work comes from her own practice &mdash; built under deal pressure, refined at 4:30am most mornings. I built it as a woman operating in rooms that weren&apos;t built for me &mdash; but it works for anyone who carries that kind of pressure.
              </p>
              <p>
                She built this cohort because the practice she developed changed how she operates under pressure — and creates opportunities from challenges.
              </p>
              <div className="pt-4">
                <a href="https://mandyc.me/#about" className="text-[#A8A29E] hover:text-[#D4A832] text-sm underline decoration-[#A8A29E]/30 hover:decoration-[#D4A832] underline-offset-4 transition-colors">
                  More about Mandy &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PROBLEM STATEMENT ── */}
      <section className="py-14 md:py-28 px-6 bg-[#F5F0EB]">
        <div className="max-w-[680px] mx-auto">
          <h2 className="text-3xl md:text-[40px] mb-8 text-center text-[#3D3530] leading-[1.15]" style={ig.headline}>
            You already know what to do.<br />That&apos;s not the problem.
          </h2>
          <div className="space-y-5 text-[#57534E] text-[15px] leading-[1.9] font-light text-center md:text-left" style={ig.body}>
            <p>
              The strategy is clear. The playbook exists. But in the 10 minutes before the meeting, the deal, the decision &mdash; something else runs. An older pattern. A version of you that hasn&apos;t caught up to where you actually are.
            </p>
            <p>
              Most performance systems start with productivity. This one starts with identity &mdash; because the gap between who you are and who you&apos;re operating as is where execution breaks down.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. WHO THIS IS FOR ── */}
      <section className="py-14 md:py-28 px-6 bg-[#1A1714]">
        <div className="max-w-[1080px] mx-auto">
          <p className="text-[#C4982A]/80 text-[11px] font-medium tracking-[0.2em] uppercase text-center mb-4" style={ig.body}>
            Who This Is For
          </p>
          <h2 className="text-3xl md:text-4xl text-[#FAF5EF] text-center mb-12" style={ig.headline}>
            For the operator who already knows.
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {WHO_THIS_IS_FOR.map((card) => (
              <div key={card.lead} className="ig-card">
                <p className="text-[#FAF5EF] text-lg md:text-xl mb-3 leading-snug" style={ig.headline}>
                  {card.lead}
                </p>
                <p className="text-[#A8A29E] font-light leading-[1.75] text-[15px]" style={ig.body}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <button
              onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}
              className="ig-cta w-full md:w-[520px]"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </section>

      {/* ── 5. WHAT YOU GET ── */}
      <section id="what-it-is" className="scroll-anchor py-14 md:py-28 px-6 bg-[#282320]">
        <div className="max-w-[1080px] mx-auto">
          <p className="text-[#C4982A]/80 text-xs font-medium tracking-[0.2em] uppercase text-center mb-4" style={ig.body}>
            What You Get
          </p>
          <h2 className="text-3xl md:text-4xl mb-12 text-center text-[#FAF5EF]" style={ig.headline}>
            A live cohort. Six weeks.
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {WHAT_YOU_GET.map((c) => (
              <div key={c.n} className="ig-card flex flex-col">
                <span
                  className="flex-shrink-0 w-11 h-11 rounded-full border border-[#C4982A]/40 flex items-center justify-center text-[#C4982A] text-base font-medium mb-6"
                  style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
                >
                  {c.n}
                </span>
                <h3 className="text-lg md:text-xl text-[#FAF5EF] mb-3 leading-snug" style={ig.headline}>{c.title}</h3>
                <p className="text-[#A8A29E] font-light leading-[1.75] text-[14.5px] flex-grow" style={ig.body}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. THE CURRICULUM ── */}
      <section className="py-14 md:py-28 px-6 bg-[#F5F0EB]">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[#C4982A]/80 text-[11px] font-medium tracking-[0.2em] uppercase text-center mb-4" style={ig.body}>
            The Curriculum
          </p>
          <h2 className="text-3xl md:text-4xl mb-14 text-center text-[#3D3530]" style={ig.headline}>
            What we cover
          </h2>
          <div className="space-y-0">
            {CURRICULUM.map((w) => (
              <div key={w.week} className="border-t border-[#3D3530]/10 py-7 first:border-t-0">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-[#C4982A] text-sm font-medium tracking-wide flex-shrink-0" style={ig.body}>Week {w.week}</span>
                  <span className="text-[#3D3530] text-base font-medium" style={ig.body}>{w.title}</span>
                </div>
                <p className="text-[#57534E] font-light leading-[1.8] text-[14.5px] pl-[68px]" style={ig.body}>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. VISUAL JOURNEY BAR ── */}
      <section className="py-16 md:py-32 px-6 bg-[#1A1714]">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C4982A]/80 text-[11px] font-medium tracking-[0.2em] uppercase text-center mb-4" style={ig.body}>
            Five Stages
          </p>
          <h2 className="text-3xl md:text-5xl text-[#FAF5EF] text-center mb-20" style={ig.headline}>
            The Practice
          </h2>

          {/* Desktop: horizontal */}
          <div className="hidden md:grid grid-cols-5 gap-6 relative">
            <div className="absolute top-[32px] left-[10%] right-[10%] h-px bg-gradient-to-r from-[#C4982A]/5 via-[#C4982A]/30 to-[#C4982A]/5" />
            {JOURNEY_STEPS.map((step, i) => (
              <div key={step.label} className="relative flex flex-col items-center text-center z-10">
                <div className="w-16 h-16 rounded-full border border-[#C4982A]/40 bg-[#1A1714] flex items-center justify-center mb-5 shadow-[0_0_24px_rgba(196,152,42,0.08)]">
                  <span className="text-[#C4982A] text-lg" style={{ fontFamily: "var(--font-playfair-display), Georgia, serif", fontStyle: "italic" }}>{i + 1}</span>
                </div>
                <span className="text-[#FAF5EF] text-sm tracking-[0.14em] uppercase mb-2" style={ig.body}>{step.label}</span>
                <span className="text-[#A8A29E]/70 text-xs font-light leading-snug" style={ig.body}>{step.sub}</span>
              </div>
            ))}
          </div>

          {/* Mobile: vertical — flex column avoids absolute-positioning overlap */}
          <div className="md:hidden flex flex-col max-w-xs mx-auto">
            {JOURNEY_STEPS.map((step, i) => (
              <div key={step.label} className="flex items-start gap-5">
                {/* Circle + connector */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border border-[#C4982A]/40 bg-[#1A1714] flex items-center justify-center shadow-[0_0_20px_rgba(196,152,42,0.08)]">
                    <span className="text-[#C4982A] text-base" style={{ fontFamily: "var(--font-playfair-display), Georgia, serif", fontStyle: "italic" }}>{i + 1}</span>
                  </div>
                  {i < JOURNEY_STEPS.length - 1 && (
                    <div className="w-px flex-1 min-h-[28px] bg-gradient-to-b from-[#C4982A]/30 to-[#C4982A]/10 my-1" />
                  )}
                </div>
                {/* Text */}
                <div className="pt-3 pb-6">
                  <span className="text-[#FAF5EF] text-sm tracking-[0.14em] uppercase block mb-1" style={ig.body}>{step.label}</span>
                  <span className="text-[#A8A29E]/70 text-xs font-light" style={ig.body}>{step.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. THE SHIFT — Before / After ── */}
      <section className="py-14 md:py-28 px-6 bg-[#F5F0EB]">
        <div className="max-w-[680px] mx-auto">
          <p className="text-[#C4982A]/80 text-[11px] font-medium tracking-[0.2em] uppercase text-center mb-4" style={ig.body}>
            Before &amp; After
          </p>
          <h2 className="text-3xl md:text-4xl text-[#3D3530] text-center mb-14" style={ig.headline}>
            The Shift
          </h2>
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-[#C4982A]/20" />
            <div className="grid grid-cols-2 gap-x-8 md:gap-x-14 gap-y-8">
              <p className="text-[#A8A29E] text-[11px] tracking-[0.15em] uppercase text-right pb-1" style={ig.body}>Before</p>
              <p className="text-[#A8A29E] text-[11px] tracking-[0.15em] uppercase pb-1" style={ig.body}>After</p>
              {SHIFTS.map((row) => (
                <Fragment key={row.before}>
                  <p className="text-[#57534E]/60 text-[15px] font-light leading-[1.6] text-right" style={ig.body}>{row.before}</p>
                  <p className="text-[#3D3530] text-[15px] font-medium leading-[1.6]" style={ig.body}>{row.after}</p>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. BUILT FOR OPERATORS ── */}
      <section className="py-14 md:py-28 px-6 bg-[#1A1714]">
        <div className="max-w-[680px] mx-auto">
          <h2 className="text-3xl md:text-[40px] mb-10 text-center text-[#FAF5EF] leading-[1.15]" style={ig.headline}>
            Built for operators,{" "}<br className="md:hidden" />not audiences
          </h2>
          <div className="space-y-5 text-[#A8A29E] text-[15px] leading-[1.9] font-light text-center md:text-left" style={ig.body}>
            <p>
              This is not a program for people who collect frameworks. The operators who get the most from it are the ones who&apos;ve already tried everything external &mdash; and know the work is now internal.
            </p>
            <p>
              The practice is sourced from Mandy&apos;s own work: what she actually runs in the 10 minutes before a deal closes, a board speaks, a decision has to be made. It&apos;s been pressure-tested, not theorised.
            </p>
          </div>
        </div>
      </section>

      {/* ── 10. COACHING UPGRADE ── */}
      <section className="py-14 md:py-28 px-6 bg-[#282320]">
        <div className="max-w-[680px] mx-auto text-center">
          <p className="text-[#C4982A]/80 text-xs font-medium tracking-[0.2em] uppercase mb-4" style={ig.body}>
            Want Direct Access
          </p>
          <h2 className="text-3xl md:text-4xl mb-8 text-[#FAF5EF]" style={ig.headline}>
            Private coaching
          </h2>
          <div className="space-y-5 text-[#A8A29E] text-[15px] leading-[1.9] font-light max-w-lg mx-auto" style={ig.body}>
            <p>
              One-on-one work alongside the cohort. Applied directly to your deals, decisions, and situations. Available for a limited number of cohort members.
            </p>
          </div>
          <div className="mt-10">
            <a
              href={TIDYCAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 text-sm font-medium tracking-[0.12em] uppercase border border-[#C4982A]/40 text-[#C4982A] hover:bg-[#C4982A]/10 transition-colors w-full sm:w-auto sm:min-w-[260px]"
              style={ig.body}
            >
              Apply for private coaching &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ── 11. PRICING ── */}
      <section id="pricing" className="scroll-anchor py-14 md:py-28 px-6 bg-[#F5F0EB]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#C4982A]/80 text-xs font-medium tracking-[0.2em] uppercase text-center mb-4" style={ig.body}>
            Investment
          </p>
          <h2 className="text-3xl md:text-4xl mb-12 text-center text-[#3D3530]" style={ig.headline}>
            Pricing
          </h2>

          <div className="grid md:grid-cols-2 gap-5 mb-10">
            <div className="bg-white border border-[#E7E5E4] p-9 flex flex-col hover:border-[#C4982A]/25 transition-colors">
              <p className="text-[#C4982A] text-[10px] font-medium tracking-[0.25em] uppercase mb-5" style={ig.body}>Cohort Pass</p>
              <p className="text-4xl md:text-5xl font-normal text-[#3D3530] mb-5" style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}>
                US$1,500
              </p>
              <p className="text-[#57534E] font-light leading-[1.75] text-[14.5px] flex-grow" style={ig.body}>
                One cohort pass. 6 weeks of live calls + AI practice companion.
              </p>
            </div>

            <div className="relative bg-[#1A1714] text-[#FAF5EF] p-9 flex flex-col overflow-hidden border border-[#C4982A]/20">
              <span className="absolute top-0 left-7 bg-gradient-to-r from-[#B8891F] to-[#D4A832] text-[#1A1714] text-[10px] font-semibold tracking-[0.2em] uppercase px-4 py-1.5" style={ig.body}>
                Best Value
              </span>
              <p className="text-[#C4982A] text-[10px] font-medium tracking-[0.25em] uppercase mb-5 mt-5" style={ig.body}>Lifetime Access</p>
              <p className="text-4xl md:text-5xl font-normal text-[#FAF5EF] mb-5" style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}>
                US$2,200
              </p>
              <p className="text-[#A8A29E] font-light leading-[1.75] text-[14.5px] flex-grow" style={ig.body}>
                Lifetime re-access to future cohorts + 12 months community access, included when the community opens after Cohort 1.
              </p>
            </div>
          </div>

          <div className="border-l-2 border-[#C4982A]/40 pl-6 py-2 text-[#57534E] font-light text-[15px] leading-[1.85] max-w-3xl mx-auto" style={{ ...ig.body, fontStyle: "italic" }}>
            No outcome guarantees. Structural commitment instead: complete the work, or your next cohort seat is free.
          </div>
        </div>
      </section>

      {/* ── 12. FAQ ── */}
      <section id="faq" className="scroll-anchor py-14 md:py-28 px-6 bg-[#282320]">
        <div className="max-w-[680px] mx-auto">
          <p className="text-[#C4982A]/80 text-[11px] font-medium tracking-[0.2em] uppercase text-center mb-4" style={ig.body}>FAQ</p>
          <h2 className="text-3xl md:text-4xl mb-12 text-center text-[#FAF5EF]" style={ig.headline}>
            Common questions
          </h2>
          <div className="bg-white/[0.03] border border-white/[0.06] px-8 md:px-10">
            {FAQ.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} variant="dark" />
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. BOTTOM CTA ── */}
      <section id="final-cta" className="py-14 md:py-28 px-6 bg-[#1A1714]">
        <div className="max-w-[680px] mx-auto text-center">
          <h2 className="text-3xl md:text-5xl mb-6 text-[#FAF5EF] leading-[1.12]" style={ig.headline}>
            Cohort 1 opens{" "}<br className="md:hidden" />September 2026.
          </h2>
          <p className="text-[#A8A29E] font-light mb-12 text-base md:text-lg" style={ig.body}>
            12 seats.{" "}<br className="md:hidden" />Waitlist gets first access and early pricing.
          </p>

          <div className="flex flex-col items-center gap-4 max-w-2xl mx-auto">
            <WaitlistForm placement="final-cta" />
            <a
              href={TIDYCAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A8A29E] hover:text-[#D4A832] text-sm font-light underline decoration-[#A8A29E]/30 hover:decoration-[#D4A832] underline-offset-4 transition-colors"
              style={ig.body}
            >
              Questions? Book a 15-minute call &rarr;
            </a>
          </div>
          <p className="text-[#78716C]/60 text-[10px] mt-10 font-medium tracking-[0.2em] uppercase" style={ig.body}>
            September 2026 &middot; 12 Seats &middot; Waitlist Open
          </p>
        </div>
      </section>

      {/* Floating CTA */}
      {showFloatingButton && (
        <button
          onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}
          className="floating-cta px-5 py-3.5 bg-gradient-to-br from-[#C4982A] to-[#B8891F] hover:from-[#D4A832] hover:to-[#C4982A] text-[#1A1714] text-sm font-light tracking-wide flex items-center gap-2 uppercase cursor-pointer border-none transition-all"
          style={ig.body}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="hidden sm:inline">Join Waitlist</span>
        </button>
      )}

      {/* Footer */}
      <footer className="w-full bg-[#15120F] border-t border-white/[0.04] py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center justify-center gap-6">
              <a href="https://www.youtube.com/@MandyC852" target="_blank" rel="noopener noreferrer" className="text-[#78716C] hover:text-[#C4982A] transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/mandyc852/" target="_blank" rel="noopener noreferrer" className="text-[#78716C] hover:text-[#C4982A] transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-1 text-center" style={ig.body}>
              <p className="text-[#78716C]/50 text-xs leading-relaxed mb-2 md:mb-0">&copy; 2026 Lumina Consulting Limited</p>
              <span className="hidden md:inline text-[#78716C]/30 text-xs"> | </span>
              <div className="text-[#78716C]/50 text-xs flex items-center justify-center gap-2 md:gap-1">
                <a href="/terms" className="hover:text-[#C4982A] transition-colors">Terms &amp; Conditions</a>
                <span className="text-[#78716C]/30">|</span>
                <a href="/privacy" className="hover:text-[#C4982A] transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
