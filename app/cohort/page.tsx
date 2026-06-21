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

const TIDYCAL_URL = "https://tidycal.com/mandyc852/15-minute-meeting"

const WHAT_IT_IS = [
  {
    n: "01",
    title: "One 90-minute live group call per week",
    body: "Small group. No lectures. Real situations from your week, worked in real time.",
  },
  {
    n: "02",
    title: "AI-powered daily practice between sessions",
    body: "A personalized AI companion (built on Claude) that runs your daily inner-game practice: state regulation, loop interruption, identity-lag tracking, DAWN reflections. Not a chatbot — a practice partner.",
  },
  {
    n: "03",
    title: "6 weeks, not 6 months",
    body: "One season. Enough time to build the practice. Short enough to stay accountable.",
  },
]

const FAQ: Array<{ q: string; a: string }> = [
  {
    q: "Is this coaching?",
    a: "No. There’s no 1:1 coaching, no therapy framework, no life-coaching methodology. It’s a structured practice with a live group and an AI companion. Mandy runs the calls and built the system — but you do the work.",
  },
  {
    q: "What’s the AI companion?",
    a: "A personalized Claude project configured for your inner-game practice. It runs your daily DAWN reflections, tracks identity-lag patterns, and helps you interrupt loops in real time between calls. Think practice partner, not chatbot.",
  },
  {
    q: "I’m not into meditation or spiritual stuff.",
    a: "Neither is this. The practice is built for professionals who would never describe themselves that way. No jargon, no woo. Just a system for performing under pressure.",
  },
  {
    q: "What if I can’t make a live call?",
    a: "Calls are recorded. But the cohort is small enough that attendance matters — it’s not a course you consume, it’s a practice you show up for.",
  },
  {
    q: "What’s the commitment guarantee?",
    a: "Complete the work — attend calls, use the AI companion, do the practice — and if you don’t get value, your seat in the next cohort is free. No questions asked.",
  },
]

function WaitlistForm({ placement, dark = false }: { placement: string; dark?: boolean }) {
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
      setMsg("You're on the list. We'll be in touch.")
    } catch {
      setStatus("error")
      setMsg("Something went wrong. Please try again.")
    }
  }

  if (status === "done") {
    return (
      <p className={`text-center text-sm font-medium tracking-wide ${dark ? "text-[#f5e6b3]" : "text-[#a68a1f]"}`}>
        {msg}
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-3 max-w-[520px]">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className={`flex-1 px-4 py-4 text-sm font-light outline-none border ${
          dark
            ? "bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#c9a227]"
            : "bg-white border-slate-200 text-[#1a2a3a] placeholder:text-slate-400 focus:border-[#c9a227]"
        }`}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-8 py-4 rounded-none shadow-lg uppercase tracking-wide text-sm btn-gold-animated whitespace-nowrap disabled:opacity-50"
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
      {open && <div className="pb-6 pr-8 text-slate-600 font-light leading-[1.8] text-[15px]"><p>{a}</p></div>}
    </div>
  )
}

export default function CohortPage() {
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
          { label: "What It Is", href: "#what-it-is" },
          { label: "Pricing", href: "#pricing" },
          { label: "FAQ", href: "#faq" },
        ]}
        bookHref={TIDYCAL_URL}
      />

      {/* HERO */}
      <section className="relative w-full py-14 md:py-20 px-6 overflow-hidden bg-[#1a2a3a]">
        <Image
          src="/Wallstreet.jpg"
          alt="Wall Street"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2a3a]/88 via-[#1a2a3a]/80 to-[#1a2a3a]/92 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-5">
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-2 ring-[#c9a227]/70 ring-offset-4 ring-offset-[#1a2a3a]/80">
              <Image
                src="/IMG_2269.JPG"
                alt="Mandy Cheung"
                fill
                priority
                className="object-cover"
                sizes="96px"
              />
            </div>
          </div>

          <p className="text-[#f5e6b3] text-[11px] font-medium tracking-[0.32em] uppercase mb-5" style={{ textShadow: "0 1px 12px rgba(0,0,0,0.6)" }}>
            <span className="inline-block w-8 h-px bg-[#f5e6b3]/60 align-middle mr-3" />
            MandyC. &middot; Inner Game
            <span className="inline-block w-8 h-px bg-[#f5e6b3]/60 align-middle ml-3" />
          </p>

          <h1 className="gradient-text-hero text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.05] font-normal mb-6 tracking-tight" style={{ filter: "drop-shadow(0 2px 18px rgba(0,0,0,0.5))" }}>
            The Inner Game Cohort.
          </h1>

          <p className="text-lg md:text-xl text-white/95 font-light leading-[1.55] mb-10 max-w-2xl mx-auto" style={{ textShadow: "0 1px 16px rgba(0,0,0,0.6)" }}>
            6 weeks. 8&ndash;12 seats. For the person making the call, not reading about it.
          </p>

          <div className="flex flex-col items-center gap-4">
            <WaitlistForm placement="hero" dark />
            <a
              href={TIDYCAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-[#f5e6b3] text-sm font-light underline decoration-white/30 hover:decoration-[#f5e6b3] underline-offset-4 transition-colors"
            >
              Or book a call to ask me anything &rarr;
            </a>
            <p className="text-[#f5e6b3]/90 text-[11px] font-medium tracking-[0.22em] uppercase mt-3" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
              Cohort 1 &middot; September 2026 &middot; Limited to 12 Seats
            </p>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-12 md:py-16 px-6 bg-slate-50/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-7 text-center font-normal leading-[1.2]" style={{ textWrap: "balance" as never }}>
            You already know what to do. That&apos;s not the problem.
          </h2>

          <div className="space-y-5 text-slate-600 text-[15px] leading-[1.85] font-light">
            <p>
              The strategy is clear. The playbook exists. But in the 10 minutes before the meeting, the deal, the decision &mdash; something else runs. An older pattern. A version of you that hasn&apos;t caught up to where you actually are.
            </p>
            <p>
              Most performance systems start with productivity. This one starts with identity &mdash; because the gap between who you are and who you&apos;re operating as is where execution breaks down.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section id="what-it-is" className="scroll-anchor py-12 md:py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase text-center mb-3">
            The Structure
          </p>
          <h2 className="text-3xl md:text-4xl mb-7 text-center font-normal">
            What the cohort looks like
          </h2>

          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {WHAT_IT_IS.map((c) => (
              <div key={c.n} className="bg-white border border-slate-200 p-7 md:p-8 flex flex-col h-full hover:border-[#c9a227]/40 transition-colors">
                <div className="flex items-start gap-4 mb-5">
                  <span
                    className="flex-shrink-0 w-11 h-11 rounded-full border-2 border-[#c9a227] flex items-center justify-center text-[#a68a1f] text-base font-medium"
                    style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
                  >
                    {c.n}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-normal text-[#1a2a3a] mb-3 leading-snug">{c.title}</h3>
                <p className="text-slate-600 font-light leading-[1.75] text-[14.5px] flex-grow">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-12 md:py-16 px-6 bg-[#f8f7f4]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-3 text-center font-normal">
            Built for operators, not audiences
          </h2>
          <p className="text-slate-500 font-light text-base text-center mb-10">Not a course. Not content. A practice.</p>

          <div className="space-y-5 text-slate-600 text-[15px] leading-[1.85] font-light">
            <p>
              Founders, executives, and professionals who perform at a level where the stakes are real &mdash; and who&apos;ve noticed that the constraint isn&apos;t knowledge or strategy. It&apos;s internal.
            </p>
            <p>
              You don&apos;t need more frameworks. You need a practice for the 10 minutes before it matters.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="scroll-anchor py-12 md:py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase text-center mb-3">
            Investment
          </p>
          <h2 className="text-3xl md:text-4xl mb-7 text-center font-normal">
            Pricing
          </h2>

          <div className="grid md:grid-cols-2 gap-4 md:gap-5 mb-6">
            {/* Tier 1 */}
            <div className="bg-white border border-slate-200 p-7 md:p-8 flex flex-col hover:border-[#c9a227]/40 transition-colors">
              <p className="text-[#a68a1f] text-[10px] font-medium tracking-[0.25em] uppercase mb-4">Cohort Pass</p>
              <p className="text-4xl md:text-5xl font-normal text-[#1a2a3a] mb-4" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                US$1,500
              </p>
              <p className="text-slate-600 font-light leading-[1.75] text-[14.5px] flex-grow">
                One cohort pass. 6 weeks of live calls + AI practice companion.
              </p>
            </div>

            {/* Tier 2 */}
            <div className="relative bg-[#1a2a3a] text-white p-7 md:p-8 flex flex-col overflow-hidden">
              <span className="absolute top-0 left-6 bg-[#c9a227] text-[#1a2a3a] text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1.5">
                Best Value
              </span>
              <p className="text-[#f5e6b3] text-[10px] font-medium tracking-[0.25em] uppercase mb-4 mt-4">Lifetime Access</p>
              <p className="text-4xl md:text-5xl font-normal text-white mb-4" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                US$2,200
              </p>
              <p className="text-slate-300 font-light leading-[1.75] text-[14.5px] flex-grow">
                Lifetime re-access to future cohorts + 12 months community access (when live).
              </p>
            </div>
          </div>

          <div className="border-l-2 border-[#c9a227] pl-6 py-2 text-slate-500 font-light italic text-[15px] leading-[1.8] max-w-3xl mx-auto">
            No outcome guarantees. Structural commitment instead: complete the work, or your next cohort seat is free.
          </div>
        </div>
      </section>

      {/* ABOUT MANDY */}
      <section className="py-12 md:py-16 px-6 bg-slate-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-8 md:hidden">
            <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-[#c9a227]/60 ring-offset-2 mb-5">
              <Image src="/IMG_2269.JPG" alt="Mandy Cheung" fill loading="eager" className="object-cover" sizes="96px" />
            </div>
          </div>
          <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-8 md:gap-12 items-center">
            <div className="hidden md:block">
              <div className="relative aspect-[4/5] rounded-none overflow-hidden shadow-lg">
                <Image src="/IMG_2269.JPG" alt="Mandy Cheung" fill loading="eager" className="object-cover" sizes="50vw" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-normal text-[#1a2a3a] mb-8 text-center md:text-left">Who&apos;s running this</h2>
              <div className="space-y-5 text-slate-600 text-base leading-relaxed font-light">
                <p>
                  Mandy Cheung. SFC Type 6 licensed capital markets advisor. 10+ years, 60+ transactions across HKEX and NASDAQ. The inner game work comes from her own practice &mdash; Dispenza-trained, built under deal pressure, refined at 4:30am most mornings.
                </p>
                <p>
                  She built this cohort because the system she uses changed how she operates, and no one was teaching it the way operators actually need it.
                </p>
              </div>
              <div className="mt-8">
                <a href="https://mandyc.me/#about" className="text-[#1a2a3a] hover:text-[#c9a227] font-medium text-sm underline decoration-slate-300 hover:decoration-[#c9a227] transition-colors">
                  More about Mandy &rarr;
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
      <section id="final-cta" className="py-10 md:py-14 px-6 bg-[#1a2a3a]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-normal mb-4 cta-title-gradient leading-[1.15]" style={{ textWrap: "balance" as never }}>
            Cohort 1 opens September 2026.
          </h2>
          <p className="text-slate-300 font-light mb-10 text-base md:text-lg">
            12 seats. Waitlist gets first access and early pricing.
          </p>

          <div className="flex flex-col items-center gap-4 max-w-2xl mx-auto">
            <WaitlistForm placement="final-cta" dark />
            <a
              href={TIDYCAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-[#f5e6b3] text-sm font-light underline decoration-slate-500 hover:decoration-[#f5e6b3] underline-offset-4 transition-colors"
            >
              Questions? Book a 15-minute call &rarr;
            </a>
          </div>
          <p className="text-slate-400 text-[10px] mt-8 font-medium tracking-[0.2em] uppercase">
            September 2026 &middot; 12 Seats &middot; Waitlist Open
          </p>
        </div>
      </section>

      {/* Floating CTA */}
      {showFloatingButton && (
        <button
          onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}
          className="floating-cta px-5 py-3.5 bg-gradient-to-br from-[#c9a227] to-[#a68a1f] text-[#1a2a3a] text-sm font-semibold tracking-wide rounded-none flex items-center gap-2 uppercase cursor-pointer border-none"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="hidden sm:inline">Join Waitlist</span>
        </button>
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
                &copy; 2026 MandyC. | All Rights Reserved
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
