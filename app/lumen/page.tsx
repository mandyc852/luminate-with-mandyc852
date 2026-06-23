"use client"

import React, { useState } from "react"
import Image from "next/image"

type FormProps = {
  firstName: string
  setFirstName: (v: string) => void
  email: string
  setEmail: (v: string) => void
  struggle: string
  setStruggle: (v: string) => void
  onSubmit: (e: React.FormEvent) => void
  isSubmitting: boolean
  success: boolean
  error: string
}

const features = [
  {
    num: "1",
    title: "The 12-week season",
    description:
      "Brian Moran and Michael Lennington's system: compress your year into 12-week sprints, set clear goals, track weekly. That's the foundation.",
  },
  {
    num: "2",
    title: "Mandy's inner game layer",
    description:
      "A daily affirmation anchored to who you're becoming. A 90-day practice set: what you're wiring in, what you're releasing.",
  },
  {
    num: "3",
    title: "The DAWN weekly ritual",
    description:
      "Debrief, Anchor, Widen, Next — four moves that close one week and open the next. No guilt. Just clarity.",
  },
]

function LumenIcon() {
  return (
    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 flex-shrink-0">
      <defs>
        <radialGradient id="lh" cx="50%" cy="46%" r="50%">
          <stop offset="0%" stopColor="#FFF6DC" />
          <stop offset="30%" stopColor="#D8B84A" />
          <stop offset="100%" stopColor="#C9A227" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1024" height="1024" rx="232" fill="#1A2A3A" />
      <circle cx="512" cy="468" r="390" fill="url(#lh)" opacity="0.62" />
      <circle cx="512" cy="468" r="94" fill="#FFF6DC" />
    </svg>
  )
}

function FeatureList() {
  return (
    <ul className="list-none m-0 p-0">
      {features.map((f) => (
        <li key={f.num} className="flex items-start gap-4 mb-6 last:mb-0">
          <span
            className="w-9 h-9 rounded-lg flex items-center justify-center text-[#C9A227] flex-shrink-0 mt-0.5"
            style={{
              background: "#1A2A3A",
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "17px",
              fontWeight: 600,
            }}
          >
            {f.num}
          </span>
          <div>
            <p className="font-semibold text-[#1A2A3A] text-[15px] mb-1" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
              {f.title}
            </p>
            <p className="text-[#1A2A3A]/65 text-[17px] leading-relaxed" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              {f.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}

function SignupForm({ firstName, setFirstName, email, setEmail, struggle, setStruggle, onSubmit, isSubmitting, success, error }: FormProps) {
  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex gap-3 mb-3">
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="flex-1 px-4 py-3.5 border border-[#1A2A3A]/15 rounded-[10px] bg-white text-[#1A2A3A] placeholder-[#1A2A3A]/35 focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/15 transition-all text-base"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-4 py-3.5 border border-[#1A2A3A]/15 rounded-[10px] bg-white text-[#1A2A3A] placeholder-[#1A2A3A]/35 focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/15 transition-all text-base"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        />
      </div>
      <textarea
        placeholder="What's your biggest struggle with staying consistent? (optional)"
        value={struggle}
        onChange={(e) => setStruggle(e.target.value)}
        rows={2}
        className="w-full px-4 py-3.5 border border-[#1A2A3A]/15 rounded-[10px] bg-white text-[#1A2A3A] placeholder-[#1A2A3A]/35 focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/15 transition-all text-base resize-none mb-3"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
      />
      {error && (
        <p className="text-center text-red-600 text-sm mb-2" style={{ fontFamily: "Cormorant Garamond, serif" }}>
          {error}
        </p>
      )}
      {success && (
        <p className="text-center text-[#1A2A3A] font-medium text-base mb-2" style={{ fontFamily: "Cormorant Garamond, serif" }}>
          Check your email — install instructions are on their way.
        </p>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 rounded-[10px] bg-[#C9A227] text-white font-semibold text-base hover:bg-[#D8B84A] hover:shadow-[0_0_24px_rgba(201,162,39,0.3)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        style={{ fontFamily: "var(--font-poppins), sans-serif", letterSpacing: "0.04em" }}
      >
        {isSubmitting ? "Sending…" : "Get Free Access →"}
      </button>
    </form>
  )
}

function DesktopView(props: FormProps) {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 min-h-0">
        {/* Left — dark hero */}
        <div
          className="w-1/2 flex flex-col justify-center items-center px-14 py-10"
          style={{ background: "linear-gradient(135deg, #1A2A3A 0%, #0F1A24 55%, #1A2A3A 100%)" }}
        >
          <div className="max-w-[500px] w-full">
            {/* Brand */}
            <div className="flex items-center gap-3 mb-9">
              <LumenIcon />
              <span className="text-white" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 22, fontWeight: 600, letterSpacing: "0.04em" }}>Lumen</span>
              <span className="text-white/40 text-xs tracking-[0.18em] uppercase ml-1" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>by Mandy C.</span>
            </div>

            <h1
              className="text-white mb-5 leading-[1.15]"
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(30px, 3.5vw, 42px)", fontWeight: 600 }}
            >
              Mandy&apos;s workflow of the 12 Week Year.
            </h1>

            <p
              className="mb-9 leading-relaxed"
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 18, color: "rgba(255,255,255,0.72)" }}
            >
              The 12 Week Year by Brian Moran and Michael Lennington changed how I plan. So I built a free app around how I actually use it — with my own inner game layer added in: an affirmation, a 90-day practice set, and a weekly reflection ritual.
            </p>

            {/* App screenshots — scrollable row, fixed height so tall images crop to top */}
            <div className="flex gap-3 overflow-x-auto pb-2" style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}>
              {[
                { src: "/lumen/goals.png", alt: "Goals" },
                { src: "/lumen/today.png", alt: "Today" },
                { src: "/lumen/overview.png", alt: "Overview" },
                { src: "/lumen/week.png", alt: "Week" },
                { src: "/lumen/dawn.png", alt: "DAWN" },
              ].map((img) => (
                <div key={img.src} className="flex-shrink-0 relative" style={{ width: 110, height: 238, borderRadius: 20, overflow: "hidden", boxShadow: "0 6px 28px rgba(0,0,0,0.4)", background: "#111" }}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — cream features + form */}
        <div
          className="w-1/2 flex flex-col justify-center items-center px-14 py-10 overflow-y-auto"
          style={{ backgroundColor: "#FAF7F3" }}
        >
          <div className="max-w-[480px] w-full">
            <p
              className="mb-6"
              style={{ fontFamily: "var(--font-poppins), sans-serif", fontSize: 12, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C9A227" }}
            >
              What you get
            </p>

            <FeatureList />

            <div className="w-20 h-px my-8 mx-auto" style={{ background: "linear-gradient(to right, transparent, #C9A227, transparent)" }} />

            <h2
              className="text-center mb-2"
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(26px, 3vw, 34px)", fontWeight: 600, color: "#1A2A3A" }}
            >
              Get Lumen for free.
            </h2>
            <p
              className="text-center mb-6"
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 17, color: "rgba(26,42,58,0.55)" }}
            >
              Enter your details and I&apos;ll send it straight to your inbox.
            </p>

            <SignupForm {...props} />

            <p
              className="text-center mt-4"
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 14, color: "rgba(26,42,58,0.38)", lineHeight: 1.5 }}
            >
              Free. Beta. I use it myself. Feedback welcome — I read every message.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Bridge */}
      <div className="w-full py-6 px-6 border-t" style={{ background: "#0F1A24", borderColor: "rgba(201,162,39,0.2)" }}>
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4 flex-col md:flex-row">
          <p className="text-white text-xl md:text-2xl text-center md:text-left" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            Want help building your season?
          </p>
          <a
            href="https://tidycal.com/mandyc852/30-minute-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-[#C9A227] text-[#0F1A24] text-sm font-medium tracking-[0.12em] uppercase whitespace-nowrap hover:bg-[#D8B84A] transition-all"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Book a Free Strategy Call
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-4 px-6 text-center border-t" style={{ background: "#0a0a0a", borderColor: "rgba(201,162,39,0.2)" }}>
        <p className="text-white/50 text-xs" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
          © 2026 MandyC.{" "}
          <a href="/terms" className="hover:text-[#C9A227] transition-colors mx-1">Terms</a>
          {" · "}
          <a href="/privacy" className="hover:text-[#C9A227] transition-colors mx-1">Privacy</a>
        </p>
      </footer>
    </div>
  )
}

function MobileView(props: FormProps) {
  return (
    <div className="min-h-screen">
      {/* Dark hero */}
      <div className="px-6 pt-10 pb-10" style={{ background: "linear-gradient(135deg, #1A2A3A 0%, #0F1A24 100%)" }}>
        <div className="max-w-sm mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <LumenIcon />
            <span className="text-white" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 20, fontWeight: 600 }}>Lumen</span>
            <span className="text-white/40 text-xs tracking-[0.18em] uppercase ml-1" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>by Mandy C.</span>
          </div>

          <h1
            className="text-white mb-4 leading-[1.15]"
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(30px, 8vw, 38px)", fontWeight: 600 }}
          >
            Mandy&apos;s workflow of the 12 Week Year.
          </h1>

          <p
            className="mb-8 leading-relaxed"
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 17, color: "rgba(255,255,255,0.72)" }}
          >
            The 12 Week Year by Brian Moran and Michael Lennington changed how I plan. So I built a free app around how I actually use it — with my own inner game layer added in.
          </p>

          {/* Screenshots */}
          <div className="flex gap-3 overflow-x-auto pb-2 mb-8" style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}>
            {[
              { src: "/lumen/goals.png", alt: "Goals" },
              { src: "/lumen/today.png", alt: "Today" },
              { src: "/lumen/overview.png", alt: "Overview" },
              { src: "/lumen/week.png", alt: "Week" },
              { src: "/lumen/dawn.png", alt: "DAWN" },
            ].map((img) => (
              <div key={img.src} className="flex-shrink-0 relative" style={{ width: 90, height: 194, borderRadius: 16, overflow: "hidden", boxShadow: "0 6px 28px rgba(0,0,0,0.4)", background: "#111" }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-top"
                />
              </div>
            ))}
          </div>

          {/* Form inline on mobile */}
          <h2
            className="text-center text-white mb-1"
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 28, fontWeight: 600 }}
          >
            Get Lumen for free.
          </h2>
          <p
            className="text-center mb-5"
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 17, color: "rgba(255,255,255,0.6)" }}
          >
            I&apos;ll send install instructions to your inbox.
          </p>

          {/* Mobile form — inputs need light bg override */}
          <form onSubmit={props.onSubmit} className="w-full">
            <input
              type="text"
              placeholder="First name"
              value={props.firstName}
              onChange={(e) => props.setFirstName(e.target.value)}
              className="w-full px-4 py-3.5 border border-white/15 rounded-[10px] bg-white/10 text-white placeholder-white/35 focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/15 transition-all text-base mb-3"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            />
            <input
              type="email"
              placeholder="Email address"
              value={props.email}
              onChange={(e) => props.setEmail(e.target.value)}
              required
              className="w-full px-4 py-3.5 border border-white/15 rounded-[10px] bg-white/10 text-white placeholder-white/35 focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/15 transition-all text-base mb-3"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            />
            <textarea
              placeholder="What's your biggest struggle with staying consistent? (optional)"
              value={props.struggle}
              onChange={(e) => props.setStruggle(e.target.value)}
              rows={2}
              className="w-full px-4 py-3.5 border border-white/15 rounded-[10px] bg-white/10 text-white placeholder-white/35 focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/15 transition-all text-base resize-none mb-3"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            />
            {props.error && <p className="text-red-400 text-sm text-center mb-2">{props.error}</p>}
            {props.success && <p className="text-white font-medium text-base text-center mb-2" style={{ fontFamily: "Cormorant Garamond, serif" }}>Check your email — install instructions are on their way.</p>}
            <button
              type="submit"
              disabled={props.isSubmitting}
              className="w-full py-4 rounded-[10px] bg-[#C9A227] text-white font-semibold text-base hover:bg-[#D8B84A] transition-all duration-300 disabled:opacity-70"
              style={{ fontFamily: "var(--font-poppins), sans-serif", letterSpacing: "0.04em" }}
            >
              {props.isSubmitting ? "Sending…" : "Get Free Access →"}
            </button>
          </form>

          <p className="text-center mt-4 text-white/35 text-sm" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            Free. Beta. I use it myself. Feedback welcome.
          </p>
        </div>
      </div>

      {/* What you get — cream */}
      <div className="px-6 py-12" style={{ backgroundColor: "#FAF7F3" }}>
        <div className="max-w-sm mx-auto">
          <p
            className="mb-6"
            style={{ fontFamily: "var(--font-poppins), sans-serif", fontSize: 12, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C9A227" }}
          >
            What you get
          </p>
          <FeatureList />
        </div>
      </div>

      {/* CTA Bridge */}
      <div className="w-full py-10 px-6" style={{ background: "#0F1A24" }}>
        <div className="max-w-sm mx-auto text-center">
          <p className="text-white text-xl mb-5" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            Want help building your season?
          </p>
          <a
            href="https://tidycal.com/mandyc852/30-minute-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-[#C9A227] text-[#0F1A24] text-sm font-medium tracking-[0.12em] uppercase hover:bg-[#D8B84A] transition-all"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Book a Free Strategy Call
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-5 px-6 text-center border-t" style={{ background: "#0a0a0a", borderColor: "rgba(201,162,39,0.2)" }}>
        <p className="text-white/50 text-sm" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
          © 2026 MandyC.{" "}
          <a href="/terms" className="hover:text-[#C9A227] transition-colors">Terms</a>
          {" · "}
          <a href="/privacy" className="hover:text-[#C9A227] transition-colors">Privacy</a>
        </p>
      </footer>
    </div>
  )
}

export default function LumenPage() {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [struggle, setStruggle] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName: firstName || "",
          struggle: struggle || "",
          sourcePage: "lumen",
          sourcePlacement: "hero",
        }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || "Something went wrong. Please try again.")
      setSuccess(true)
      setFirstName("")
      setEmail("")
      setStruggle("")
      const redirectUrl = data.redirect || "/lumen/thank-you"
      setTimeout(() => { window.location.href = redirectUrl }, 1500)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const formProps = { firstName, setFirstName, email, setEmail, struggle, setStruggle, onSubmit: handleSubmit, isSubmitting, success, error }

  return (
    <div className="relative">
      <div className="hidden xl:block">
        <DesktopView {...formProps} />
      </div>
      <div className="block xl:hidden">
        <MobileView {...formProps} />
      </div>
    </div>
  )
}
