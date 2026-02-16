"use client"

import React, { useState } from "react"
import Image from "next/image"

type FormProps = {
  firstName: string
  setFirstName: (v: string) => void
  email: string
  setEmail: (v: string) => void
  onSubmit: (e: React.FormEvent) => void
  isSubmitting: boolean
  success: boolean
  error: string
}

const whatsInsideItems = [
  {
    title: "REAL REQUIREMENTS",
    description: "The actual profit, market cap, and shareholder thresholds for U.S. and Hong Kong markets. No vague \"it depends.\"",
  },
  {
    title: "REAL COSTS",
    description: "What going public actually costs: US$1.5M–$3M+ broken down by where the money goes.",
  },
  {
    title: "CARVE-OUT & ROLL-UP STRATEGIES",
    description: "Two structuring approaches most founders have never heard of — and how they change who qualifies.",
  },
  {
    title: "READINESS CHECKLIST",
    description: "A practical self-assessment to see if a strategy call makes sense for your situation.",
  },
]

function DesktopView({ firstName, setFirstName, email, setEmail, onSubmit, isSubmitting, success, error }: FormProps) {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 min-h-0">
        {/* Left Panel - Warm White / Form Side */}
        <div
          className="w-1/2 flex flex-col justify-center items-center px-14 py-8"
          style={{ backgroundColor: "#FAF7F3" }}
        >
          <div className="max-w-lg w-full">
            <div className="mb-4 text-center flex justify-center items-center">
              <div
                className="flex-shrink-0"
                style={{
                  width: 320,
                  height: 106,
                  background: "linear-gradient(to right, #c9a227, #d4b84a, #1a2a3a)",
                  WebkitMaskImage: "url(/Logo%202%20black.png)",
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskImage: "url(/Logo%202%20black.png)",
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                }}
                role="img"
                aria-label="MandyC."
              />
            </div>

            <p
              className="text-center text-[#1A2A3A] text-base tracking-wide mb-4 font-medium"
              style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
            >
              For founders exploring whether listing is right for them.
            </p>

            <h1 className="text-center mb-4">
              <span
                className="block text-3xl md:text-4xl font-bold text-[#1A2A3A] leading-tight tracking-tight mb-1"
                style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
              >
                SHOULD YOU TAKE
              </span>
              <span
                className="block text-3xl md:text-4xl font-bold text-[#1A2A3A] leading-tight mb-1"
                style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
              >
                YOUR COMPANY
              </span>
              <span
                className="block text-5xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent"
                style={{
                  fontFamily: "var(--font-cormorant-garamond), serif",
                  backgroundImage: "linear-gradient(to right, #8B6914, #B8860B, #D4AF37, #C9A227, #D4AF37, #B8860B, #8B6914)",
                }}
              >
                PUBLIC?
              </span>
            </h1>

            <p
              className="text-center text-[#1A2A3A] mb-5 leading-relaxed text-lg"
              style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
            >
              The real listing requirements for U.S. and Hong Kong markets. What it actually costs. And two structuring strategies — carve-outs and roll-ups — that most founders have never heard of.
            </p>

            <form onSubmit={onSubmit} className="space-y-3 mb-3">
              <input
                type="text"
                placeholder="First Name (optional)"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-5 py-4 border border-stone-300 bg-white text-[#1A2A3A] placeholder-stone-500 focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]/50 transition-all text-base"
                style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-5 py-4 border border-stone-300 bg-white text-[#1A2A3A] placeholder-stone-500 focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]/50 transition-all text-base"
                style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
              />
              {error && (
                <p className="text-center text-red-600 text-sm" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                  {error}
                </p>
              )}
              {success && (
                <p className="text-center text-[#1A2A3A] font-medium text-sm" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                  Check your email — the guide is on its way.
                </p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-sm bg-[#C9A227] text-white font-medium text-base hover:shadow-[0_0_24px_rgba(201,162,39,0.3)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed uppercase"
                style={{ fontFamily: "var(--font-poppins), sans-serif", letterSpacing: "0.15em" }}
              >
                {isSubmitting ? "Sending…" : "GET THE FREE GUIDE"}
              </button>
            </form>

            <p
              className="text-center text-[#1A2A3A]/50 text-xs leading-relaxed"
              style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
            >
              Instant access. Occasional insights on capital markets and founder readiness. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Right Panel - Navy / Content Side */}
        <div
          className="w-1/2 relative flex flex-col items-center justify-center px-12 py-8 min-h-0 overflow-y-auto"
          style={{
            background: "linear-gradient(135deg, #1A2A3A 0%, #0F1A24 50%, #1A2A3A 100%)",
          }}
        >
          <div className="max-w-xl w-full flex flex-col justify-center">
            {/* WHAT'S INSIDE Section */}
            <h2
              className="text-3xl font-medium tracking-[0.15em] mb-7 text-center bg-clip-text text-transparent"
              style={{
                fontFamily: "var(--font-cormorant-garamond), serif",
                backgroundImage: "linear-gradient(to right, #C9A227, #F5E6B3, #C9A227)",
              }}
            >
              WHAT&apos;S INSIDE
            </h2>

            <div className="space-y-5 mb-8">
              {whatsInsideItems.map((item) => (
                <div key={item.title} className="flex items-start gap-2.5">
                  <span className="text-[#C9A227] mt-0.5 flex-shrink-0 text-base">✦</span>
                  <div>
                    <p
                      className="text-white text-[1.1875rem] leading-snug uppercase"
                      style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="text-[1.0625rem] leading-relaxed mt-1"
                      style={{ fontFamily: "var(--font-cormorant-garamond), serif", color: "rgba(255,255,255,0.75)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="w-28 h-px bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto mb-8" />

            {/* ABOUT MANDY Section */}
            <div className="flex items-start gap-7 mb-8">
              <div
                className="flex-shrink-0 w-32 h-32 rounded-full overflow-hidden border-2 shadow-xl relative"
                style={{ borderColor: "rgba(201,162,39,0.5)" }}
              >
                <Image
                  src="/mandyc.jpg"
                  alt="Mandy Cheung"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "30% 48%" }}
                  sizes="128px"
                />
              </div>

              <div className="flex-1 min-w-0 pt-1">
                <h3
                  className="text-xl font-semibold tracking-[0.1em] mb-4 bg-clip-text text-transparent"
                  style={{
                    fontFamily: "var(--font-cormorant-garamond), serif",
                    backgroundImage: "linear-gradient(to right, #C9A227, #F5E6B3, #C9A227)",
                  }}
                >
                  ABOUT MANDY
                </h3>

                <p
                  className="text-white text-lg leading-relaxed"
                  style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
                >
                  10+ years in corporate finance. 60+ transactions across Hong Kong, U.S. markets, and global markets — working with founders through IPO, capital raises, and the defining moments of their business.
                </p>
                <p
                  className="text-white text-lg leading-relaxed mt-3"
                  style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
                >
                  On{" "}
                  <a
                    href="https://www.youtube.com/@MandyC852"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F5E6B3] font-bold underline decoration-[#C9A227] hover:text-[#C9A227] hover:decoration-[#F5E6B3] transition-colors"
                  >
                    MandyC.
                  </a>
                  , I share what most IPO guides leave out: the real requirements, the real costs, and the structuring strategies that change who qualifies.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* CTA Bridge */}
      <div className="w-full bg-[#0F1A24] border-t border-[#C9A227]/20 py-6">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <h3
            className="text-white text-xl md:text-2xl text-center md:text-left"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Ready to have the conversation?
          </h3>
          <a
            href="https://tidycal.com/mandyc852/30-minute-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#C9A227] text-[#0F1A24] text-sm font-medium tracking-[0.12em] uppercase hover:bg-[#d4b84a] transition-all duration-300 whitespace-nowrap"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Book a Free Strategy Call
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="w-full py-4 border-t"
        style={{ backgroundColor: "#0a0a0a", borderColor: "rgba(201,162,39,0.2)" }}
        aria-label="Site footer"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p
            className="text-white/70 text-xs md:text-sm"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            © 2026 MandyC.{" "}
            <a href="/terms" className="hover:text-[#C9A227] transition-colors mx-1">Terms</a>
            {" · "}
            <a href="/privacy" className="hover:text-[#C9A227] transition-colors mx-1">Privacy</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

function MobileView({ firstName, setFirstName, email, setEmail, onSubmit, isSubmitting, success, error }: FormProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF7F3" }}>
      <div className="px-6 pt-8 pb-10">
        <div className="max-w-sm mx-auto">
          <div className="mb-6 text-center flex justify-center items-center">
            <div
              className="flex-shrink-0"
              style={{
                width: 280,
                height: 93,
                background: "linear-gradient(to right, #c9a227, #d4b84a, #1a2a3a)",
                WebkitMaskImage: "url(/Logo%202%20black.png)",
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskImage: "url(/Logo%202%20black.png)",
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
              }}
              role="img"
              aria-label="MandyC."
            />
          </div>

          <p
            className="text-center text-[#1A2A3A] text-base tracking-wide mb-6 font-medium leading-relaxed"
            style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
          >
            For founders exploring whether listing is right for them.
          </p>

          <h1 className="text-center mb-6">
            <span
              className="block text-4xl font-bold text-[#1A2A3A] leading-tight tracking-tight mb-1.5"
              style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
            >
              SHOULD YOU TAKE
            </span>
            <span
              className="block text-4xl font-bold text-[#1A2A3A] leading-tight mb-1.5"
              style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
            >
              YOUR COMPANY
            </span>
              <span
                className="block text-5xl font-bold leading-tight tracking-tight bg-clip-text text-transparent"
                style={{
                  fontFamily: "var(--font-cormorant-garamond), serif",
                  backgroundImage: "linear-gradient(to right, #8B6914, #B8860B, #D4AF37, #C9A227, #D4AF37, #B8860B, #8B6914)",
                }}
              >
                PUBLIC?
              </span>
          </h1>

          <p
            className="text-center text-[#1A2A3A] mb-8 leading-relaxed text-base"
            style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
          >
            The real listing requirements for U.S. and Hong Kong markets. What it actually costs. And two structuring strategies — carve-outs and roll-ups — that most founders have never heard of.
          </p>

          <form onSubmit={onSubmit} className="space-y-3.5 mb-2">
            <input
              type="text"
              placeholder="First Name (optional)"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-5 py-4 border border-stone-300 bg-white text-[#1A2A3A] placeholder-stone-500 focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]/50 transition-all text-base"
              style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-4 border border-stone-300 bg-white text-[#1A2A3A] placeholder-stone-500 focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]/50 transition-all text-base"
              style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
            />
            {error && (
              <p className="text-center text-red-600 text-sm px-2" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                {error}
              </p>
            )}
            {success && (
              <p className="text-center text-[#1A2A3A] font-medium text-sm px-2" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                Check your email — the guide is on its way.
              </p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-sm bg-[#C9A227] text-white font-medium text-base hover:shadow-[0_0_24px_rgba(201,162,39,0.3)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed uppercase"
              style={{ fontFamily: "var(--font-poppins), sans-serif", letterSpacing: "0.15em" }}
            >
              {isSubmitting ? "Sending…" : "GET THE FREE GUIDE"}
            </button>
          </form>

          <p
            className="text-center text-[#1A2A3A]/50 text-xs leading-relaxed"
            style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
          >
            Instant access. Occasional insights on capital markets and founder readiness. Unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* What's Inside — dark navy */}
      <div
        className="px-6 py-12"
        style={{
          background: "linear-gradient(135deg, #1A2A3A 0%, #0F1A24 100%)",
        }}
      >
        <div className="max-w-sm mx-auto">
          <h2
            className="text-3xl font-medium tracking-[0.15em] mb-8 text-center bg-clip-text text-transparent"
            style={{
              fontFamily: "var(--font-cormorant-garamond), serif",
              backgroundImage: "linear-gradient(to right, #C9A227, #F5E6B3, #C9A227)",
            }}
          >
            WHAT&apos;S INSIDE
          </h2>

          <div className="space-y-4 w-full">
            {whatsInsideItems.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="text-[#C9A227] mt-0.5 flex-shrink-0 text-lg">✦</span>
                <div>
                  <p
                    className="text-white text-[1.1875rem] leading-snug uppercase mb-1"
                    style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-white/80 text-[1.0625rem] leading-relaxed"
                    style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Mandy — warm white, centered */}
      <div className="px-6 py-12" style={{ backgroundColor: "#FAF7F3" }}>
        <div className="max-w-sm mx-auto text-center">
          <h3
            className="text-2xl font-semibold tracking-[0.1em] mb-4 bg-clip-text text-transparent"
            style={{
              fontFamily: "var(--font-cormorant-garamond), serif",
              backgroundImage: "linear-gradient(to right, #8B6914, #C9A227, #8B6914)",
            }}
          >
            ABOUT MANDY
          </h3>

          <div
            className="w-40 h-40 mx-auto rounded-full overflow-hidden border-2 shadow-lg mb-4 relative"
            style={{ borderColor: "rgba(201,162,39,0.5)" }}
          >
            <Image
              src="/mandyc.jpg"
              alt="Mandy Cheung"
              fill
              className="object-cover"
              style={{ objectPosition: "30% 48%" }}
              sizes="160px"
            />
          </div>

          <p
            className="text-[#1A2A3A] text-[1.0625rem] leading-relaxed"
            style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
          >
            10+ years in corporate finance. 60+ transactions across Hong Kong, U.S. markets, and global markets — working with founders through IPO, capital raises, and the defining moments of their business.
          </p>
          <p
            className="text-[#1A2A3A] text-[1.0625rem] leading-relaxed mt-4"
            style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
          >
            On{" "}
            <a
              href="https://www.youtube.com/@MandyC852"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A227] font-bold underline decoration-[#C9A227] hover:text-[#a68a1f] transition-colors"
            >
              MandyC.
            </a>
            , I share what most IPO guides leave out: the real requirements, the real costs, and the structuring strategies that change who qualifies.
          </p>
        </div>
      </div>

      {/* CTA Bridge (mobile) */}
      <div className="w-full bg-[#0F1A24] py-8 px-6">
        <div className="max-w-sm mx-auto text-center">
          <h3
            className="text-white text-xl mb-4"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Ready to have the conversation?
          </h3>
          <a
            href="https://tidycal.com/mandyc852/30-minute-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-6 py-3 rounded-sm bg-[#C9A227] text-[#0F1A24] text-sm font-medium tracking-[0.12em] uppercase hover:bg-[#d4b84a] transition-all duration-300"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Book a Free Strategy Call
          </a>
        </div>
      </div>

      <footer
        className="w-full py-5 border-t"
        style={{ backgroundColor: "#0a0a0a", borderColor: "rgba(201,162,39,0.2)" }}
        aria-label="Site footer"
      >
        <div className="max-w-sm mx-auto px-6 text-center">
          <p
            className="text-white/70 text-sm leading-relaxed mb-2"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            © 2026 MandyC.
          </p>
          <div
            className="text-white/70 text-sm"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            <a href="/terms" className="hover:text-[#C9A227] transition-colors">Terms</a>
            <span className="mx-2 text-white/50">·</span>
            <a href="/privacy" className="hover:text-[#C9A227] transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function GuidePage() {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
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
          sourcePage: "guide",
          sourcePlacement: "hero",
        }),
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.")
      }
      setSuccess(true)
      setFirstName("")
      setEmail("")
      // Redirect to thank-you page after brief delay
      const redirectUrl = data.redirect || "/guide/thank-you"
      setTimeout(() => {
        window.location.href = redirectUrl
      }, 1500)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative">
      <div className="hidden xl:block">
        <DesktopView
          firstName={firstName}
          setFirstName={setFirstName}
          email={email}
          setEmail={setEmail}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          success={success}
          error={error}
        />
      </div>
      <div className="block xl:hidden">
        <MobileView
          firstName={firstName}
          setFirstName={setFirstName}
          email={email}
          setEmail={setEmail}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          success={success}
          error={error}
        />
      </div>
    </div>
  )
}
