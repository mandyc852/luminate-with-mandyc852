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
                background:
                  "linear-gradient(to right, #a68a1f, #C9A227, #F5E6B3, #C9A227, #a68a1f)",
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
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            For founders who are building something great.
          </p>

          <h1 className="text-center mb-4">
            <span
              className="block text-3xl md:text-4xl font-bold text-[#1A2A3A] leading-tight tracking-tight mb-1"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              THE FOUNDER&apos;S
            </span>
            <span
              className="block text-5xl md:text-6xl font-bold leading-tight mb-1 bg-clip-text text-transparent"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                backgroundImage: "linear-gradient(to right, #8B6914, #B8860B, #D4AF37, #C9A227, #D4AF37, #B8860B, #8B6914)",
              }}
            >
              IDENTITY
            </span>
            <span
              className="block text-5xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                backgroundImage: "linear-gradient(to right, #8B6914, #B8860B, #D4AF37, #C9A227, #D4AF37, #B8860B, #8B6914)",
              }}
            >
              RESET
            </span>
          </h1>

          <p
            className="text-center text-[#1A2A3A] mb-4 leading-relaxed text-lg"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            The version of you that built this isn&apos;t the same one who takes it to the next level.
          </p>
          <p
            className="text-center text-[#1A2A3A] mb-4 leading-relaxed text-lg"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Scaling demands a different kind of leader — one who holds clarity, composure, and conviction when the stakes keep rising.
          </p>
          <p
            className="text-center text-[#1A2A3A] mb-5 leading-relaxed text-lg"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            This 5-minute daily audio closes the gap.
          </p>

          <form onSubmit={onSubmit} className="space-y-3 mb-3">
            <input
              type="text"
              placeholder="First Name (optional)"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-5 py-4 border border-stone-300 bg-white text-[#1A2A3A] placeholder-stone-500 focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]/50 transition-all text-base"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-4 border border-stone-300 bg-white text-[#1A2A3A] placeholder-stone-500 focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]/50 transition-all text-base"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            />
            {error && (
              <p className="text-center text-red-600 text-sm" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                {error}
              </p>
            )}
            {success && (
              <p className="text-center text-[#1A2A3A] font-medium text-sm" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                You&apos;re in. Check your email for the audio — and your first insight on the inner game of building at the next level.
              </p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-sm bg-[#C9A227] text-white font-medium tracking-[0.15em] text-base hover:shadow-[0_0_24px_rgba(201,162,39,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed uppercase"
            >
              {isSubmitting ? "Sending…" : "GET THE FREE AUDIO"}
            </button>
          </form>

          <p
            className="text-center text-[#1A2A3A]/60 text-xs leading-relaxed"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Instant access. You&apos;ll also receive occasional insights on the inner game of building something that lasts. Unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* Right Panel - Navy / Content Side */}
      <div
        className="w-1/2 relative flex flex-col items-center px-12 py-8 min-h-0"
        style={{
          background: "linear-gradient(135deg, #1A2A3A 0%, #0F1A24 50%, #1A2A3A 100%)",
        }}
      >
        <div className="max-w-xl w-full flex-1 flex flex-col min-h-0">
          {/* WHAT YOU'LL RECEIVE Section — top half, content at bottom */}
          <div className="flex-1 flex flex-col justify-end min-h-0">
            <h2
              className="text-3xl font-medium tracking-[0.15em] mb-7 text-center bg-clip-text text-transparent"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                backgroundImage:
                  "linear-gradient(to right, #C9A227, #F5E6B3, #C9A227)",
              }}
            >
              WHAT YOU&apos;LL RECEIVE
            </h2>

            <div className="flex items-start gap-8 mb-8">
              <div className="flex-shrink-0 flex flex-col items-center" style={{ minWidth: 180, minHeight: 180 }}>
                <div
                  className="relative flex items-center justify-center"
                  style={{ width: 180, height: 180, minWidth: 180, minHeight: 180 }}
                >
                  <svg
                    className="absolute inset-0"
                    viewBox="0 0 200 200"
                    width={180}
                    height={180}
                    style={{ animation: "rotate-slow 25s linear infinite", flexShrink: 0 }}
                    aria-hidden="true"
                  >
                    <defs>
                      <path
                        id="circlePathDesktop"
                        d="M 100 35 A 65 65 0 1 1 99.99 35"
                        fill="none"
                      />
                    </defs>
                    <text
                      fill="rgba(245, 230, 179, 0.75)"
                      textLength={398}
                      lengthAdjust="spacing"
                      style={{
                        fontFamily: "Cormorant Garamond, serif",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      <textPath href="#circlePathDesktop" startOffset="2.5%">
                        5-MIN · FOUNDER&apos;S · IDENTITY · RESET ·
                      </textPath>
                    </text>
                  </svg>
                  <div
                    className="relative rounded-full flex items-center justify-center shadow-xl"
                    style={{
                      width: 100,
                      height: 100,
                      minWidth: 100,
                      minHeight: 100,
                      background: "linear-gradient(135deg, rgba(201,162,39,0.6) 0%, rgba(166,138,31,0.8) 100%)",
                      border: "2px solid rgba(201,162,39,0.4)",
                      boxShadow:
                        "0 25px 50px -12px rgba(26,42,58,0.5), 0 0 0 1px rgba(201,162,39,0.1)",
                    }}
                  >
                    <svg
                      className="w-11 h-11 text-[#F5E6B3] ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-1 flex-1">
                <div className="flex items-start gap-2.5">
                  <span className="text-[#C9A227] mt-0.5 flex-shrink-0 text-base">✦</span>
                  <div>
                    <p
                      className="text-white text-[1.1875rem] leading-snug uppercase"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      5-MINUTE AUDIO PRACTICE
                    </p>
                    <p
                      className="text-white/80 text-[1.0625rem] leading-relaxed mt-1"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      Binaural beats + layered affirmations designed for high-stakes founders.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[#C9A227] mt-0.5 flex-shrink-0 text-base">✦</span>
                  <div>
                    <p
                      className="text-white text-[1.1875rem] leading-snug uppercase"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      FOUNDER IDENTITY SHIFT
                    </p>
                    <p
                      className="text-white/80 text-[1.0625rem] leading-relaxed mt-1"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      Rewire your nervous system for the composure and clarity your next chapter demands.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[#C9A227] mt-0.5 flex-shrink-0 text-base">✦</span>
                  <div>
                    <p
                      className="text-white text-[1.1875rem] leading-snug uppercase"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      PRE-MEETING RESET
                    </p>
                    <p
                      className="text-white/80 text-[1.0625rem] leading-relaxed mt-1"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      Use before any conversation where your presence matters more than your preparation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider — centered between the two sections */}
          <div className="flex-shrink-0 w-28 h-px bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto my-4" />

          {/* ABOUT MANDY Section — bottom half, more space above so divider sits between sections */}
          <div className="flex-1 flex flex-col justify-start min-h-0 pt-10">
            <div className="flex items-start gap-7">
              <div
                className="flex-shrink-0 w-40 h-40 rounded-full overflow-hidden border-2 shadow-xl relative"
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

              <div className="flex-1 min-w-0 pt-1">
                <h3
                  className="text-xl font-semibold tracking-[0.1em] mb-4 bg-clip-text text-transparent"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    backgroundImage:
                      "linear-gradient(to right, #C9A227, #F5E6B3, #C9A227)",
                  }}
                >
                  ABOUT MANDY
                </h3>

                <p
                  className="text-white text-lg leading-relaxed"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  10+ years in corporate finance. 60+ transactions across Hong Kong, U.S. markets, and global markets — working alongside founders through the highest-stakes moments of their business.
                </p>
                <p
                  className="text-white text-lg leading-relaxed mt-3"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  What I&apos;ve learned: the founders who scale aren&apos;t just strategically sharp — they&apos;ve done the inner work. On{" "}
                  <a
                    href="https://www.youtube.com/@MandyC852"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F5E6B3] font-bold underline decoration-[#C9A227] hover:text-[#C9A227] hover:decoration-[#F5E6B3] transition-colors"
                  >
                    MandyC.
                  </a>
                  , I share the identity shifts and leadership transformation most business advice leaves out.
                </p>
                <p
                  className="text-white text-lg leading-relaxed mt-3"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Strategy matters — but who you&apos;re BEING while you execute it matters more.
                </p>
              </div>
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

      {/* Desktop footer */}
      <footer
        className="footer-desktop w-full py-4 border-t"
        style={{ backgroundColor: "#0a0a0a", borderColor: "rgba(201,162,39,0.2)" }}
        aria-label="Site footer"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p
            className="text-white/70 text-xs md:text-sm"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            © 2026 MandyC. | All Rights Reserved |{" "}
            <a href="/terms" className="hover:text-[#C9A227] transition-colors mx-1">Terms &amp; Conditions</a>{" "}
            |{" "}
            <a href="/privacy" className="hover:text-[#C9A227] transition-colors mx-1">Privacy Policy</a>
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
                background:
                  "linear-gradient(to right, #a68a1f, #C9A227, #F5E6B3, #C9A227, #a68a1f)",
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
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            For founders who are building something great.
          </p>

          <h1 className="text-center mb-6">
            <span
              className="block text-4xl font-bold text-[#1A2A3A] leading-tight tracking-tight mb-1.5"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              THE FOUNDER&apos;S
            </span>
            <span
              className="block text-6xl font-bold leading-tight tracking-tight bg-clip-text text-transparent"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                backgroundImage: "linear-gradient(to right, #8B6914, #B8860B, #D4AF37, #C9A227, #D4AF37, #B8860B, #8B6914)",
              }}
            >
              IDENTITY RESET
            </span>
          </h1>

          <p
            className="text-center text-[#1A2A3A] mb-4 leading-relaxed text-base"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            The version of you that built this isn&apos;t the same one who takes it to the next level.
          </p>
          <p
            className="text-center text-[#1A2A3A] mb-4 leading-relaxed text-base"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Scaling demands a different kind of leader — one who holds clarity, composure, and conviction when the stakes keep rising.
          </p>
          <p
            className="text-center text-[#1A2A3A] mb-8 leading-relaxed text-base"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            This 5-minute daily audio closes the gap.
          </p>

          <form onSubmit={onSubmit} className="space-y-3.5 mb-2">
            <input
              type="text"
              placeholder="First Name (optional)"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-5 py-4 border border-stone-300 bg-white text-[#1A2A3A] placeholder-stone-500 focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]/50 text-base"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-4 border border-stone-300 bg-white text-[#1A2A3A] placeholder-stone-500 focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]/50 text-base"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            />
            {error && (
              <p className="text-center text-red-600 text-sm px-2" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                {error}
              </p>
            )}
            {success && (
              <p className="text-center text-[#1A2A3A] font-medium text-sm px-2" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                You&apos;re in. Check your email for the audio — and your first insight on the inner game of building at the next level.
              </p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#C9A227] text-white font-medium tracking-[0.15em] text-base hover:shadow-[0_0_24px_rgba(201,162,39,0.3)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed uppercase"
            >
              {isSubmitting ? "Sending…" : "GET THE FREE AUDIO"}
            </button>
          </form>

          <p
            className="text-center text-[#1A2A3A]/60 text-sm leading-relaxed"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Instant access. You&apos;ll also receive occasional insights on the inner game of building something that lasts. Unsubscribe anytime.
          </p>
        </div>
      </div>

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
              fontFamily: "Cormorant Garamond, serif",
              backgroundImage:
                "linear-gradient(to right, #C9A227, #F5E6B3, #C9A227)",
            }}
          >
            WHAT YOU&apos;LL RECEIVE
          </h2>

          <div className="flex-shrink-0 flex flex-col items-center mb-6" style={{ minWidth: 200, minHeight: 200 }}>
              <div
                className="relative flex items-center justify-center"
                style={{
                  width: 200,
                  height: 200,
                  minWidth: 200,
                  minHeight: 200,
                }}
              >
                <Image
                  src="/circular-text.png"
                  alt=""
                  width={600}
                  height={600}
                  quality={100}
                  className="absolute inset-0 w-full h-full object-contain"
                  style={{
                    animation: "rotate-slow 25s linear infinite",
                  }}
                  priority
                />

                <div
                  className="relative rounded-full flex items-center justify-center shadow-xl z-10"
                  style={{
                    width: 110,
                    height: 110,
                    minWidth: 110,
                    minHeight: 110,
                    background: "linear-gradient(135deg, rgba(201,162,39,0.6) 0%, rgba(166,138,31,0.8) 100%)",
                    border: "2px solid rgba(201,162,39,0.4)",
                    boxShadow:
                      "0 25px 50px -12px rgba(26,42,58,0.5), 0 0 0 1px rgba(201,162,39,0.1)",
                  }}
                >
                  <svg
                    className="w-12 h-12 text-[#F5E6B3] ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
          </div>

          {/* What you'll receive — bullet points on mobile */}
          <div className="space-y-6 w-full">
            <div className="flex items-start gap-3">
              <span className="text-[#C9A227] mt-0.5 flex-shrink-0 text-lg">✦</span>
              <div>
                <p className="text-white text-xl leading-relaxed uppercase mb-1.5" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  5-MINUTE AUDIO PRACTICE
                </p>
                <p className="text-white/80 text-[1.0625rem] leading-relaxed" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  Binaural beats + layered affirmations designed for high-stakes founders.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#C9A227] mt-0.5 flex-shrink-0 text-lg">✦</span>
              <div>
                <p className="text-white text-xl leading-relaxed uppercase mb-1.5" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  FOUNDER IDENTITY SHIFT
                </p>
                <p className="text-white/80 text-[1.0625rem] leading-relaxed" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  Rewire your nervous system for the composure and clarity your next chapter demands.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#C9A227] mt-0.5 flex-shrink-0 text-lg">✦</span>
              <div>
                <p className="text-white text-xl leading-relaxed uppercase mb-1.5" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  PRE-MEETING RESET
                </p>
                <p className="text-white/80 text-[1.0625rem] leading-relaxed" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  Use before any conversation where your presence matters more than your preparation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-12 relative" style={{ backgroundColor: "#FAF7F3" }}>
        <div className="max-w-sm mx-auto text-center">
          <h3
            className="text-2xl font-semibold tracking-[0.1em] mb-4 bg-clip-text text-transparent"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              backgroundImage:
                "linear-gradient(to right, #8B6914, #C9A227, #8B6914)",
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
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            10+ years in corporate finance. 60+ transactions across Hong Kong, U.S. markets, and global markets — working alongside founders through the highest-stakes moments of their business.
          </p>
          <p
            className="text-[#1A2A3A] text-[1.0625rem] leading-relaxed mt-4"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            What I&apos;ve learned: the founders who scale aren&apos;t just strategically sharp — they&apos;ve done the inner work. On{" "}
            <a
              href="https://www.youtube.com/@MandyC852"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A227] font-bold underline decoration-[#C9A227] hover:text-[#a68a1f] transition-colors"
            >
              MandyC.
            </a>
            , I share the identity shifts and leadership transformation most business advice leaves out.
          </p>
          <p
            className="text-[#1A2A3A] text-[1.0625rem] leading-relaxed mt-4"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Strategy matters — but who you&apos;re BEING while you execute it matters more.
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
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            © 2026 MandyC. | All Rights Reserved
          </p>
          <div
            className="text-white/70 text-sm"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            <a
              href="/terms"
              className="hover:text-[#C9A227] transition-colors"
            >
              Terms &amp; Conditions
            </a>
            <span className="mx-2 text-white/50">|</span>
            <a
              href="/privacy"
              className="hover:text-[#C9A227] transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function LeapPage() {
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
          sourcePage: "leap",
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
      const redirectUrl = data.redirect || "/leap/thank-you"
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
      {/* Desktop view - only on extra large screens (1280px+) */}
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
      {/* Mobile/Tablet view - up to 1279px */}
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
