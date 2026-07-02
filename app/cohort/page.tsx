"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { SiteHeader } from "../_components/site-header"

const TIDYCAL_URL = "https://tidycal.com/mandyc852/15-minute-meeting"

const INCLUDED = [
  { headline: "6", label: "Live Sessions", sub: "90 min each, weekly" },
  { headline: "12", label: "Seats Max", sub: "A small room of women" },
  { headline: "Daily", label: "AI Companion", sub: "Between sessions" },
  { headline: "∞", label: "Recordings", sub: "Keep for reference" },
]

const JOURNEY_STEPS = [
  { num: "1", label: "Awareness", sub: "Reading your system" },
  { num: "2", label: "Identity", sub: "Closing the lag" },
  { num: "3", label: "Standards", sub: "Internal calibration" },
  { num: "4", label: "Action", sub: "Executing from clarity" },
  { num: "5", label: "Outcomes", sub: "A life built from there" },
]

const CURRICULUM = [
  { week: "1", title: "Reading Your System", body: "Where you intend to show up vs. where you actually do." },
  { week: "2", title: "Identity Lag", body: "Why you keep reverting under pressure." },
  { week: "3", title: "Internal Standards", body: "Internal calibration over external validation." },
  { week: "4", title: "Regulating Under Pressure", body: "Before the room. In it. After." },
  { week: "5", title: "Execution from the Right State", body: "Decisions from clarity, not reaction." },
  { week: "6", title: "The Long Game", body: "What the practice looks like after the cohort ends." },
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
    q: "Is this meditation? Mindset? Spiritual?",
    a: "The practice draws on contemplative training and neuroscience — but it's built for women who carry real consequence, not retreat schedules. No guru language, no woo. State regulation, identity work, and repetition that still holds on the Tuesday everything lands on you at once.",
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
    lead: "You’re the one making the calls",
    body: "— in the business, the office, the family. Often all three. Everyone reads the room off you, and nobody asks how you’re holding it.",
  },
  {
    lead: "You know what to do",
    body: "— but in the 10 minutes before it matters, an older pattern takes over.",
  },
  {
    lead: "You’ve done the external work",
    body: "— the strategy, the routines, the training. You already know the next level is internal. You’re done circling it.",
  },
]

const SHIFTS = [
  { before: "Overthinking before decisions", after: "Clear in the room" },
  { before: "Reacting to pressure", after: "Regulating under it" },
  { before: "Managing how you're perceived", after: "Your own standard" },
  { before: "Deferring your own happiness", after: "A life designed from it" },
]

const ig = {
  headline: { fontFamily: "var(--font-playfair-display), Georgia, serif", fontStyle: "italic" as const, fontWeight: 400 },
  body: { fontFamily: "var(--font-poppins), sans-serif" },
}

function WaitlistForm({ placement, maxWidth = "max-w-[520px]", variant = "dark" }: { placement: string; maxWidth?: string; variant?: "dark" | "light" }) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")
  const [msg, setMsg] = useState("")

  const inputClass =
    variant === "light"
      ? "w-full px-5 py-3.5 text-sm font-light outline-none bg-white border border-[#3D3530]/15 text-[#3D3530] placeholder:text-[#A8A29E] focus:border-[#C4982A]/60 transition-colors"
      : "w-full px-5 py-3.5 text-sm font-light outline-none bg-white/[0.05] border border-white/[0.09] text-[#FAF5EF] placeholder:text-[#78716C] focus:border-[#C4982A]/50 transition-colors"

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
    return <p className="text-sm font-medium tracking-wide text-[#D4A832] py-3" style={{ animation: "fadeSlideUp 0.4s ease" }}>{msg}</p>
  }

  return (
    <form onSubmit={handleSubmit} className={`w-full flex flex-col gap-2.5 ${maxWidth}`}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className={inputClass}
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

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-[#C4982A]/[0.12]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-6 py-[18px] text-left cursor-pointer bg-transparent border-none"
        aria-expanded={open}
      >
        <span className="text-[15px] md:text-[17px] text-[#FAF5EF] font-normal leading-[1.4]" style={ig.headline}>{q}</span>
        <svg
          className={`flex-shrink-0 w-4 h-4 mt-1 text-[#C4982A] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="pb-[18px] pr-10" style={{ animation: "fadeSlideUp 0.25s ease" }}>
          <p className="text-[#A8A29E] font-light leading-[1.8] text-sm" style={ig.body}>{a}</p>
        </div>
      )}
    </div>
  )
}

/* Scroll-reveal wrapper: fades + slides sections in on first view */
function Reveal({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = "1"
            el.style.transform = "translateY(0)"
            observer.disconnect()
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id={id}
      className={`scroll-anchor ${className}`}
      style={{
        opacity: 0,
        transform: "translateY(32px)",
        transition: "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {children}
    </section>
  )
}

export default function CohortPage() {
  const [showFloatingButton, setShowFloatingButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowFloatingButton(window.scrollY > 500)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToCta = () => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })

  return (
    <div className="min-h-screen bg-[#1A1714]">
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        body { background: #1A1714; padding-top: 80px; }
        .scroll-anchor { scroll-margin-top: 96px; }
        ::selection { background: rgba(196,152,42,0.25); color: #FAF5EF; }

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
        header.fixed nav a[aria-label] { color: #C4982A !important; }
        header.fixed nav a[aria-label]:hover { color: #a68a1f !important; }
        header.fixed nav .btn-gold-animated {
          color: #1A1714 !important;
          font-weight: 500 !important;
        }
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
          font-size: 14px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          padding: 16px 32px;
          border: none;
          font-weight: 400;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(26,23,20,0.3), 0 2px 8px rgba(196,152,42,0.2);
        }
        .ig-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(26,23,20,0.4), 0 4px 16px rgba(196,152,42,0.3);
          animation: shimmerGold 1.5s ease infinite;
        }
        @keyframes shimmerGold {
          0% { background-position: 200% 0%; }
          100% { background-position: -200% 0%; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 16px rgba(196,152,42,0.3), 0 0 32px rgba(196,152,42,0.12); }
          50% { box-shadow: 0 0 28px rgba(196,152,42,0.5), 0 0 56px rgba(196,152,42,0.2); }
        }

        .floating-cta {
          position: fixed; bottom: 24px; right: 24px; z-index: 1000;
          animation: pulseGlow 3s ease-in-out infinite;
        }
        @media (max-width: 768px) { .floating-cta { bottom: 16px; right: 16px; } }
      `}</style>

      <SiteHeader
        links={[
          { label: "Who This Is For", href: "#who-its-for" },
          { label: "What You Get", href: "#what-you-get" },
          { label: "About", href: "#about" },
          { label: "Pricing", href: "#pricing" },
          { label: "FAQ", href: "#faq" },
        ]}
        bookHref={TIDYCAL_URL}
        hideGlobalLinks
      />

      {/* ── 1. HERO — full-width photo on top, copy centered below ── */}
      <section className="bg-[#1A1714]">
        <div className="relative w-full aspect-[4/3] md:aspect-[2.2/1] overflow-hidden">
          <Image
            src="/cohort hero_2.png"
            alt="Mandy Cheung — Inner work. Real outcomes."
            fill
            priority
            quality={95}
            className="object-cover object-[40%_25%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714] via-[#1A1714]/60 to-transparent" style={{ top: '40%' }} />
        </div>
        <div className="px-6 -mt-[60px] md:-mt-[80px] relative z-10 pb-12 md:pb-16 text-center flex flex-col items-center">
          <p className="text-[#C4982A] text-[11px] font-medium tracking-[0.22em] uppercase mb-[14px]" style={ig.body}>
            Inner Work. Real Outcomes.
          </p>
          <h1
            className="text-[#FAF5EF] text-[clamp(32px,4.8vw,54px)] leading-[1.12] tracking-[-0.01em] mb-[18px]"
            style={ig.headline}
          >
            Stronger. Calmer. Clearer.<br />Six weeks to become her.
          </h1>
          <p className="text-[#A8A29E] font-light text-[clamp(15px,1.6vw,17px)] leading-[1.65] mb-8 max-w-[560px]" style={ig.body}>
            A 6-week live cohort for women who make the calls &mdash; in the business, the team, the household &mdash; and need their inner state to hold at the level their life demands.
          </p>

          <WaitlistForm placement="hero" maxWidth="max-w-[460px]" />
          <a
            href={TIDYCAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3.5 text-[#78716C] hover:text-[#D4A832] text-[13px] font-light underline decoration-[#78716C]/30 hover:decoration-[#D4A832] underline-offset-4 transition-colors"
            style={ig.body}
          >
            Or book a call to ask me anything &rarr;
          </a>
          <p className="text-[#C4982A]/70 text-[11px] font-medium tracking-[0.2em] uppercase mt-[22px]" style={ig.body}>
            Cohort 1 &middot; September 2026 &middot; Limited to 12 Seats
          </p>
        </div>
      </section>

      {/* ── 2. PROBLEM + WHO THIS IS FOR ── */}
      <Reveal id="who-its-for" className="bg-[#F5F0EB] py-[clamp(48px,6vw,80px)] px-6">
        <div className="max-w-[1080px] mx-auto">
          <div className="max-w-[640px] mx-auto mb-11 text-center">
            <h2 className="text-[#3D3530] text-[clamp(26px,3.6vw,38px)] leading-[1.14] mb-5" style={ig.headline}>
              You already know what to do.<br />That&apos;s not the problem.
            </h2>
            <p className="text-[#57534E] font-light text-[15px] leading-[1.85]" style={ig.body}>
              In the 10 minutes before the conversation, the decision, the moment everyone looks to you &mdash; an older pattern runs. This program starts with identity and state, not productivity, because your nervous system makes the call before you do.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-3.5">
            {WHO_THIS_IS_FOR.map((card) => (
              <div key={card.lead} className="bg-white border border-[#3D3530]/[0.08] px-7 py-[26px] hover:border-[#C4982A]/30 transition-colors">
                <p className="text-[#3D3530] text-[clamp(16px,1.5vw,19px)] leading-[1.35] mb-1.5" style={ig.headline}>
                  {card.lead}
                </p>
                <p className="text-[#78716C] font-light text-sm leading-[1.65]" style={ig.body}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
          <p className="max-w-[640px] mx-auto mt-9 text-center text-[#57534E]/80 font-light text-[14px] leading-[1.8]" style={{ ...ig.body, fontStyle: "italic" }}>
            The pattern doesn&apos;t wait for a quieter season. Every month it runs, it prices itself into your decisions, your sleep, your body &mdash; and everyone who reads their calm off yours.
          </p>
        </div>
      </Reveal>

      {/* ── 3. WHAT YOU GET + THE PRACTICE — gradient section ── */}
      <Reveal
        id="what-you-get"
        className="py-[clamp(48px,6vw,88px)] px-6 relative overflow-hidden bg-[linear-gradient(180deg,#3A3530_0%,#2E2A24_20%,#24211D_45%,#1E1B18_70%,#1A1714_100%)]"
      >
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse,rgba(196,152,42,0.04)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[1080px] mx-auto relative">
          <div className="text-center mb-[52px]">
            <p className="text-[#C4982A]/80 text-[11px] font-medium tracking-[0.24em] uppercase mb-4" style={ig.body}>
              What You Get
            </p>
            <h2 className="text-[#FAF5EF] text-[clamp(28px,4vw,46px)] leading-[1.08]" style={ig.headline}>
              A live cohort. Six weeks.
            </h2>
          </div>

          {/* Included stats */}
          <div className="max-w-[900px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
              {INCLUDED.map((item) => (
                <div
                  key={item.label}
                  className="text-center border border-[#C4982A]/15 px-[18px] py-7"
                >
                  <p className="text-[#D4A832] text-[clamp(26px,2.8vw,36px)] leading-none mb-1.5" style={ig.headline}>{item.headline}</p>
                  <p className="text-[#FAF5EF] text-[11px] font-medium tracking-[0.1em] uppercase mb-[3px]" style={ig.body}>{item.label}</p>
                  <p className="text-[#A8A29E]/70 text-xs font-light leading-[1.5]" style={ig.body}>{item.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* The Practice — five stages */}
          <div className="text-center mt-16 mb-12 pt-10 border-t border-[#C4982A]/[0.12]">
            <p className="text-[#C4982A]/80 text-[11px] font-medium tracking-[0.24em] uppercase mb-4" style={ig.body}>
              The Practice
            </p>
            <h2 className="text-[#FAF5EF] text-[clamp(26px,3.6vw,40px)]" style={ig.headline}>
              Five stages to your own standard
            </h2>
          </div>
          <div className="relative mb-[52px]">
            {/* Tablet/Desktop: horizontal flow */}
            <div className="hidden sm:block relative">
              <div className="absolute top-9 left-[8%] right-[8%] h-px bg-[linear-gradient(to_right,rgba(196,152,42,0.02),rgba(196,152,42,0.5)_50%,rgba(196,152,42,0.02))]" />
              <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-y-7 gap-x-3.5 relative z-10">
                {JOURNEY_STEPS.map((step) => (
                  <div key={step.label} className="flex flex-col items-center text-center">
                    <div className="w-[72px] h-[72px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#2a2621,#1A1714)] border border-[#C4982A]/35 flex items-center justify-center mb-4 shadow-[0_0_32px_rgba(196,152,42,0.1),inset_0_1px_0_rgba(255,255,255,0.03)]">
                      <span className="text-[#D4A832] text-[26px]" style={ig.headline}>{step.num}</span>
                    </div>
                    <span className="text-[#FAF5EF] text-xs font-medium tracking-[0.16em] uppercase mb-1.5" style={ig.body}>{step.label}</span>
                    <span className="text-[#A8A29E]/75 text-[13px] leading-[1.4]" style={ig.headline}>{step.sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: vertical flow with connecting line */}
            <div className="sm:hidden flex flex-col max-w-xs mx-auto">
              {JOURNEY_STEPS.map((step, i) => (
                <div key={step.label} className="flex items-start gap-5">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-[radial-gradient(circle_at_30%_30%,#2a2621,#1A1714)] border border-[#C4982A]/35 flex items-center justify-center shadow-[0_0_24px_rgba(196,152,42,0.1),inset_0_1px_0_rgba(255,255,255,0.03)]">
                      <span className="text-[#D4A832] text-xl" style={ig.headline}>{step.num}</span>
                    </div>
                    {i < JOURNEY_STEPS.length - 1 && (
                      <div className="w-px flex-1 min-h-[28px] bg-gradient-to-b from-[#C4982A]/40 to-[#C4982A]/10 my-1" />
                    )}
                  </div>
                  <div className="pt-3 pb-7 text-left">
                    <span className="block text-[#FAF5EF] text-xs font-medium tracking-[0.16em] uppercase mb-1" style={ig.body}>{step.label}</span>
                    <span className="text-[#A8A29E]/75 text-[13px] leading-[1.4]" style={ig.headline}>{step.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <button onClick={scrollToCta} className="ig-cta w-full md:w-[520px]">
              Join Waitlist
            </button>
          </div>
        </div>
      </Reveal>

      {/* ── 4. CURRICULUM — 6-week grid + shift strip ── */}
      <Reveal className="bg-[#F5F0EB] py-[clamp(48px,6vw,80px)] px-6">
        <div className="max-w-[1080px] mx-auto">
          <p className="text-[#C4982A]/80 text-[11px] font-medium tracking-[0.22em] uppercase text-center mb-3.5" style={ig.body}>
            The Curriculum
          </p>
          <h2 className="text-[#3D3530] text-[clamp(26px,3.6vw,38px)] text-center mb-10" style={ig.headline}>
            Six weeks, one practice
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-12">
            {CURRICULUM.map((w) => (
              <div key={w.week} className="bg-white border border-[#3D3530]/[0.08] hover:border-[#C4982A]/30 px-[26px] py-6 flex gap-[18px] items-start transition-colors">
                <span className="text-[#C4982A] text-[30px] leading-none flex-shrink-0 min-w-[34px]" style={ig.headline}>{w.week}</span>
                <div>
                  <p className="text-[#3D3530] text-sm font-medium mb-1" style={ig.body}>{w.title}</p>
                  <p className="text-[#78716C] font-light text-[13px] leading-[1.6]" style={ig.body}>{w.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* The Shift — compact strip */}
          <div className="border-t border-[#C4982A]/25 pt-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-10">
              {SHIFTS.map((shift) => (
                <div key={shift.before} className="text-center">
                  <p className="text-[#57534E]/50 font-light text-[13px] mb-1.5 line-through decoration-[#57534E]/25" style={ig.body}>{shift.before}</p>
                  <p className="text-[#3D3530] text-[17px]" style={ig.headline}>
                    <span className="text-[#C4982A] not-italic text-sm" style={{ fontStyle: "normal" }}>&rarr; </span>
                    {shift.after}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* ── 5. ABOUT — compact horizontal band ── */}
      <Reveal id="about" className="bg-[#1A1714] py-[clamp(48px,6vw,80px)] px-6">
        <div className="max-w-[900px] mx-auto flex flex-col md:flex-row items-center gap-9 text-center md:text-left">
          <div className="flex-shrink-0 w-[150px] aspect-[4/5] overflow-hidden relative">
            <Image src="/Profile pic 4.png" alt="Mandy Cheung" fill loading="eager" className="object-cover object-top" sizes="150px" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[#C4982A]/80 text-[11px] font-medium tracking-[0.22em] uppercase mb-2.5" style={ig.body}>
              Who&apos;s Running This
            </p>
            <h2 className="text-[#FAF5EF] text-[clamp(24px,3vw,34px)] mb-3.5" style={ig.headline}>
              Mandy Cheung
            </h2>
            <p className="text-[#A8A29E] font-light text-[15px] leading-[1.8] mb-4" style={ig.body}>
              SFC Type 6 licensed capital markets advisor. 10+ years, 60+ transactions across HKEX and NASDAQ. The inner game comes from her own practice &mdash; built under deal pressure, refined at 4:30am most mornings, as a woman operating in rooms that weren&apos;t built for her. That&apos;s her standard, not the assignment. This cohort is where you set yours.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-5 gap-y-2">
              <span className="text-[#C4982A]/70 text-[10px] tracking-[0.16em] uppercase" style={ig.body}>SFC Type 6</span>
              <span className="text-[#C4982A]/70 text-[10px] tracking-[0.16em] uppercase" style={ig.body}>60+ Transactions</span>
              <span className="text-[#C4982A]/70 text-[10px] tracking-[0.16em] uppercase" style={ig.body}>HKEX &amp; NASDAQ</span>
              <a
                href="https://mandyc.me/#about"
                className="text-[#78716C] hover:text-[#C4982A] text-xs underline decoration-[#78716C]/30 underline-offset-4 transition-colors"
                style={ig.body}
              >
                More about Mandy &rarr;
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ── 6. PRICING ── */}
      <Reveal id="pricing" className="bg-[#EDE7E0] py-[clamp(48px,6vw,80px)] px-6">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-[#3D3530] text-[clamp(26px,3.6vw,38px)] text-center mb-9" style={ig.headline}>
            Pricing
          </h2>
          <div className="grid md:grid-cols-2 gap-3.5 mb-7">
            <div className="bg-white border border-[#E7E5E4] hover:border-[#C4982A]/25 p-[34px] flex flex-col transition-colors">
              <p className="text-[#C4982A] text-[10px] font-medium tracking-[0.25em] uppercase mb-4" style={ig.body}>Cohort Pass</p>
              <p className="text-[#3D3530] text-[clamp(34px,4vw,46px)] leading-none mb-3.5" style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}>
                US$1,500
              </p>
              <p className="text-[#57534E] font-light text-sm leading-[1.7] mb-6 flex-grow" style={ig.body}>
                6 weeks of live calls + AI practice companion. One cohort.
              </p>
              <button
                onClick={scrollToCta}
                className="w-full py-4 px-8 bg-transparent border border-[#C4982A]/35 text-[#C4982A] text-sm font-normal tracking-[0.14em] uppercase cursor-pointer hover:bg-[#C4982A]/[0.06] transition-colors"
                style={ig.body}
              >
                Join Waitlist
              </button>
            </div>

            <div className="relative bg-[#1A1714] border border-[#C4982A]/20 p-[34px] flex flex-col overflow-hidden">
              <span className="absolute top-0 left-6 bg-gradient-to-r from-[#B8891F] to-[#D4A832] text-[#1A1714] text-[10px] font-semibold tracking-[0.2em] uppercase px-3.5 py-[5px]" style={ig.body}>
                Best Value
              </span>
              <p className="text-[#C4982A] text-[10px] font-medium tracking-[0.25em] uppercase mb-4 mt-[18px]" style={ig.body}>Lifetime Access</p>
              <p className="text-[#FAF5EF] text-[clamp(34px,4vw,46px)] leading-none mb-3.5" style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}>
                US$2,200
              </p>
              <p className="text-[#A8A29E] font-light text-sm leading-[1.7] mb-6 flex-grow" style={ig.body}>
                Lifetime re-access to future cohorts + 12 months community access, included when the community opens after Cohort 1.
              </p>
              <button onClick={scrollToCta} className="ig-cta w-full">
                Join Waitlist
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center gap-4 pt-5 border-t border-[#3D3530]/10">
            <p className="text-[#57534E] font-light text-[13.5px] leading-[1.65] flex-1 basis-[320px]" style={{ ...ig.body, fontStyle: "italic" }}>
              Complete the work, or your next cohort seat is free. Founding-cohort pricing &mdash; Cohort 1 only; waitlist members are offered seats first, in list order.
            </p>
            <a
              href={TIDYCAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C4982A] text-[13px] underline decoration-[#C4982A]/30 hover:decoration-[#C4982A] underline-offset-4 whitespace-nowrap transition-colors"
              style={ig.body}
            >
              Private coaching? Book a call &rarr;
            </a>
          </div>
        </div>
      </Reveal>

      {/* ── 7. FAQ ── */}
      <Reveal id="faq" className="bg-[#1A1714] py-[clamp(48px,6vw,80px)] px-6">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-[#FAF5EF] text-[clamp(26px,3.6vw,38px)] text-center mb-9" style={ig.headline}>
            Common questions
          </h2>
          <div>
            {FAQ.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </Reveal>

      {/* ── 8. FINAL CTA ── */}
      <section
        id="final-cta"
        className="scroll-anchor py-[clamp(56px,7vw,96px)] px-6 relative overflow-hidden bg-[#F5F0EB]"
      >
        <div className="absolute -bottom-[30%] left-1/2 -translate-x-1/2 w-[760px] h-[760px] bg-[radial-gradient(circle,rgba(196,152,42,0.1)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-[640px] mx-auto text-center relative">
          <h2 className="text-[#3D3530] text-[clamp(28px,4.5vw,46px)] leading-[1.1] mb-3.5" style={ig.headline}>
            Cohort 1 opens September 2026.
          </h2>
          <p className="text-[#57534E] font-light text-[clamp(15px,1.6vw,17px)] leading-[1.6] mb-9" style={ig.body}>
            12 seats, offered to the waitlist first &mdash; with founding pricing that won&apos;t repeat. The weight isn&apos;t going anywhere. How you carry it can change in one season.
          </p>

          <div className="flex flex-col items-center gap-4">
            <WaitlistForm placement="final-cta" maxWidth="max-w-[520px] mx-auto" variant="light" />
            <a
              href={TIDYCAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#78716C] hover:text-[#C4982A] text-[13px] font-light underline decoration-[#78716C]/30 hover:decoration-[#C4982A] underline-offset-4 transition-colors"
              style={ig.body}
            >
              Questions? Book a 15-minute call &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      {showFloatingButton && (
        <button
          onClick={scrollToCta}
          className="floating-cta px-5 py-[13px] bg-gradient-to-br from-[#C4982A] to-[#B8891F] hover:-translate-y-0.5 text-[#1A1714] text-xs font-normal tracking-[0.1em] uppercase cursor-pointer border-none transition-transform"
          style={ig.body}
        >
          Join Waitlist
        </button>
      )}

      {/* Footer */}
      <footer className="w-full bg-[#15120F] border-t border-white/[0.04] py-7">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <div className="flex items-center gap-[18px]">
            <a href="https://www.youtube.com/@MandyC852" target="_blank" rel="noopener noreferrer" className="text-[#78716C] hover:text-[#C4982A] transition-colors flex" aria-label="YouTube">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/mandyc852/" target="_blank" rel="noopener noreferrer" className="text-[#78716C] hover:text-[#C4982A] transition-colors flex" aria-label="LinkedIn">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1" style={ig.body}>
            <span className="text-[#78716C]/50 text-[11px]">&copy; 2026 Lumina Consulting Limited</span>
            <span className="text-[#78716C]/30 text-[11px]">|</span>
            <a href="/terms" className="text-[#78716C]/50 hover:text-[#C4982A] text-[11px] transition-colors">Terms &amp; Conditions</a>
            <span className="text-[#78716C]/30 text-[11px]">|</span>
            <a href="/privacy" className="text-[#78716C]/50 hover:text-[#C4982A] text-[11px] transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
