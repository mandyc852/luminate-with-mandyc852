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
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1 min-h-0">
      {/* Left Panel - Cream/Form Side */}
      <div className="w-1/2 bg-gradient-to-br from-stone-50 via-white to-stone-50/80 flex flex-col justify-center items-center px-16 py-12">
        <div className="max-w-lg w-full">
          <div className="mb-6 text-center flex justify-center items-center">
            <div
              className="flex-shrink-0"
              style={{
                width: 360,
                height: 120,
                background:
                  "linear-gradient(to right, #b45309, #d97706, #f59e0b, #d97706, #b45309)",
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
              aria-label="Luminate with Mandy C"
            />
          </div>

          <p
            className="text-center text-stone-700 text-lg tracking-wide mb-6 font-medium"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            The 5-minute practice for high-stakes leadership.
          </p>

          <h1 className="text-center mb-6">
            <span
              className="block text-4xl md:text-5xl font-light text-stone-900 leading-tight tracking-tight mb-1.5"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              THE FOUNDER&apos;S
            </span>
            <span
              className="block text-5xl md:text-7xl font-bold text-neutral-900 leading-tight mb-1.5"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              IDENTITY
            </span>
            <span
              className="block text-5xl md:text-7xl font-bold text-neutral-900 leading-tight"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              RESET
            </span>
          </h1>

          <p
            className="text-center text-stone-700 mb-6 leading-relaxed text-xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Scaling a company requires you to become someone new — someone who can hold more capital, more visibility, more responsibility.
          </p>
          <p
            className="text-center text-stone-700 mb-6 leading-relaxed text-xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            But your nervous system doesn&apos;t automatically upgrade when your business does.
          </p>
          <p
            className="text-center text-stone-700 mb-6 leading-relaxed text-xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            This daily audio practice closes that gap.
          </p>

          <form onSubmit={onSubmit} className="space-y-4 mb-4">
            <input
              type="text"
              placeholder="First Name (optional)"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-6 py-5 border border-stone-300 bg-white text-stone-800 placeholder-stone-500 focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-600/30 transition-all text-lg"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-6 py-5 border border-stone-300 bg-white text-stone-800 placeholder-stone-500 focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-600/30 transition-all text-lg"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            />
            {error && (
              <p className="text-center text-red-600 text-sm" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                {error}
              </p>
            )}
            {success && (
              <p className="text-center text-amber-700 font-medium text-sm" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                Thank you! Check your email for the audio.
              </p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-white font-medium tracking-[0.15em] text-base hover:from-amber-500 hover:via-yellow-500 hover:to-amber-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/50 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending…" : "GET THE AUDIO"}
            </button>
          </form>

          <p
            className="text-center text-stone-600 text-sm leading-relaxed"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            You&apos;ll receive the audio immediately, plus occasional insights on the inner game of scaling.
            <br />
            No hype. <span className="whitespace-nowrap">Unsubscribe anytime.</span>
          </p>
        </div>
      </div>

      {/* Right Panel - Rich Dark/Content Side */}
      <div className="w-1/2 relative bg-gradient-to-br from-stone-800 via-stone-900 to-stone-950 flex flex-col justify-center items-center px-16 py-12">
        <div className="max-w-xl w-full pb-4">
          <h2
            className="text-3xl md:text-4xl font-medium tracking-[0.15em] mb-8 text-center bg-clip-text text-transparent"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              backgroundImage:
                "linear-gradient(to right, #f59e0b, #fbbf24, #f59e0b)",
            }}
          >
            WHAT YOU&apos;LL RECEIVE
          </h2>

          <div className="flex items-start gap-8 mb-10">
            <div className="flex-shrink-0 flex flex-col items-center" style={{ minWidth: 200, minHeight: 200 }}>
              <div
                className="relative flex items-center justify-center"
                style={{ width: 200, height: 200, minWidth: 200, minHeight: 200 }}
              >
                <svg
                  className="absolute inset-0"
                  viewBox="0 0 200 200"
                  width={200}
                  height={200}
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
                    fill="rgba(253, 230, 138, 0.75)"
                    textLength={398}
                    lengthAdjust="spacing"
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    <textPath href="#circlePathDesktop" startOffset="2.5%">
                      5-MIN · FOUNDER&apos;S · IDENTITY · RESET ·
                    </textPath>
                  </text>
                </svg>
                <div
                  className="relative rounded-full bg-gradient-to-br from-amber-900/60 to-amber-800 border-2 border-amber-500/40 flex items-center justify-center shadow-xl"
                  style={{
                    width: 110,
                    height: 110,
                    minWidth: 110,
                    minHeight: 110,
                    boxShadow:
                      "0 25px 50px -12px rgba(120, 53, 15, 0.5), 0 0 0 1px rgba(245, 158, 11, 0.1)",
                  }}
                >
                  <svg
                    className="w-12 h-12 text-amber-500 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-2 flex-1">
              <div className="flex items-start gap-3">
                <span className="text-amber-500 mt-1 flex-shrink-0 text-lg">✦</span>
                <div>
                  <p
                    className="text-stone-200 text-xl leading-relaxed font-bold"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    5-Minute Daily Audio Practice
                  </p>
                  <p
                    className="text-stone-300 text-[1.0625rem] leading-relaxed mt-1"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    Binaural beats (7.83 Hz) combined with whispered affirmations — designed to shift your identity at the subconscious level before the day takes over.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 mt-1 flex-shrink-0 text-lg">✦</span>
                <div>
                  <p
                    className="text-stone-200 text-xl leading-relaxed font-bold"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    Nervous System Calibration
                  </p>
                  <p
                    className="text-stone-300 text-[1.0625rem] leading-relaxed mt-1"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    Your nervous system was calibrated for your current level. This practice trains it to feel safe holding bigger outcomes — more capital, more visibility, more stakes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 mt-1 flex-shrink-0 text-lg">✦</span>
                <div>
                  <p
                    className="text-stone-200 text-xl leading-relaxed font-bold"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    Pre-Meeting Reset Protocol
                  </p>
                  <p
                    className="text-stone-300 text-[1.0625rem] leading-relaxed mt-1"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    Use it before investor calls, board meetings, or any high-stakes moment. Show up as the version of you who already succeeded.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-8" />

          <h2
            className="text-2xl md:text-3xl font-medium tracking-[0.12em] mb-6 text-center bg-clip-text text-transparent"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              backgroundImage:
                "linear-gradient(to right, #f59e0b, #fbbf24, #f59e0b)",
            }}
          >
            WHEN TO USE THIS
          </h2>
          <ul className="space-y-3 mb-10 text-stone-300" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 flex-shrink-0 mt-0.5">→</span>
              <span className="text-[1.0625rem] leading-relaxed">First thing in the morning — before email, before Slack, before your old patterns activate</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 flex-shrink-0 mt-0.5">→</span>
              <span className="text-[1.0625rem] leading-relaxed">Before investor meetings — to access clarity and groundedness under pressure</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 flex-shrink-0 mt-0.5">→</span>
              <span className="text-[1.0625rem] leading-relaxed">Before difficult conversations — when you need to lead from your next-level identity</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 flex-shrink-0 mt-0.5">→</span>
              <span className="text-[1.0625rem] leading-relaxed">When you&apos;re about to make a decision that scares you — and you need to trust yourself anyway</span>
            </li>
          </ul>

          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-8" />

          <div className="flex items-start gap-8">
            <div className="flex-shrink-0 w-48 h-48 rounded-full overflow-hidden border-2 border-amber-500/30 shadow-xl relative">
              <Image
                src="/mandyc.jpg"
                alt="Mandy Cheung"
                fill
                className="object-cover"
                style={{ objectPosition: "30% 48%" }}
                sizes="192px"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3
                className="text-xl tracking-[0.1em] mb-5 bg-clip-text text-transparent"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  backgroundImage:
                    "linear-gradient(to right, #f59e0b, #fbbf24, #f59e0b)",
                }}
              >
                ABOUT MANDY
              </h3>

              <p
                className="text-stone-300 text-[1.1875rem] leading-relaxed"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                I&apos;ve spent 10 years advising companies through NASDAQ IPOs — high-stakes environments where clarity, presence, and decision-making under pressure aren&apos;t optional.
              </p>
              <p
                className="text-stone-300 text-[1.1875rem] leading-relaxed mt-3"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                But here&apos;s what I&apos;ve learned: the founders who scale successfully aren&apos;t just strategically sharp. They&apos;ve done the inner work to hold that level of success.
              </p>
              <p
                className="text-stone-300 text-[1.1875rem] leading-relaxed mt-3"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                This audio is the practice I wish I could give every founder I work with. The strategy matters. But who you&apos;re BEING while you execute the strategy matters more.
              </p>
              <p className="mt-4">
                <a
                  href="https://www.youtube.com/@MandyC852"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[1.0625rem] text-amber-300 font-bold underline decoration-amber-400/80 hover:text-amber-200 hover:decoration-amber-300 transition-colors"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Watch more on YouTube: Luminate with MandyC
                </a>
              </p>
            </div>
          </div>

          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto my-8" />

          <h2
            className="text-2xl md:text-3xl font-medium tracking-[0.12em] mb-6 text-center bg-clip-text text-transparent"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              backgroundImage:
                "linear-gradient(to right, #f59e0b, #fbbf24, #f59e0b)",
            }}
          >
            HOW IT WORKS
          </h2>
          <div className="space-y-4 mb-10">
            <p className="text-stone-300 text-[1.0625rem] leading-relaxed" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              <span className="text-amber-400 font-bold">01 — PUT ON HEADPHONES</span>
              {" "}The binaural beats require stereo headphones to create the 7.83 Hz frequency that activates subconscious receptivity.
            </p>
            <p className="text-stone-300 text-[1.0625rem] leading-relaxed" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              <span className="text-amber-400 font-bold">02 — LISTEN BEFORE YOUR DAY STARTS</span>
              {" "}This works best before you check email, before meetings, before your environment activates your default patterns.
            </p>
            <p className="text-stone-300 text-[1.0625rem] leading-relaxed" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              <span className="text-amber-400 font-bold">03 — EMBODY, DON&apos;T JUST LISTEN</span>
              {" "}As you listen, feel yourself AS the founder who already scaled. Let your nervous system learn what that identity feels like.
            </p>
          </div>

          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-6" />

          <h2
            className="text-2xl md:text-3xl font-medium tracking-[0.12em] mb-4 text-center bg-clip-text text-transparent"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              backgroundImage:
                "linear-gradient(to right, #f59e0b, #fbbf24, #f59e0b)",
            }}
          >
            WHAT YOU&apos;LL HEAR
          </h2>
          <p className="text-stone-400 text-[1rem] leading-relaxed mb-4 text-center" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            The audio includes whispered affirmations like:
          </p>
          <ul className="space-y-2 text-stone-300 text-[1.0625rem] leading-relaxed list-none" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            <li>• &quot;I lead with clarity under pressure&quot;</li>
            <li>• &quot;My nervous system is calibrated for the next level&quot;</li>
            <li>• &quot;I make decisions from certainty, not anxiety&quot;</li>
            <li>• &quot;I am the founder who already built what I&apos;m building&quot;</li>
            <li>• &quot;High stakes feel like home&quot;</li>
          </ul>
        </div>

      </div>
      </div>

      {/* Desktop footer */}
      <footer
        className="footer-desktop w-full bg-stone-950 border-t border-stone-900 py-6"
        aria-label="Site footer"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p
            className="text-stone-400 text-sm md:text-base"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            © 2026 Luminate with Mandy C. | All Rights Reserved |{" "}
            <a href="/terms" className="hover:text-amber-300 transition-colors mx-1">Terms &amp; Conditions</a>{" "}
            |{" "}
            <a href="/privacy" className="hover:text-amber-300 transition-colors mx-1">Privacy Policy</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

function MobileView({ firstName, setFirstName, email, setEmail, onSubmit, isSubmitting, success, error }: FormProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-50/80">
      <div className="px-6 pt-8 pb-10">
        <div className="max-w-sm mx-auto">
          <div className="mb-6 text-center flex justify-center items-center">
            <div
              className="flex-shrink-0"
              style={{
                width: 280,
                height: 93,
                background:
                  "linear-gradient(to right, #b45309, #d97706, #f59e0b, #d97706, #b45309)",
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
              aria-label="Luminate with Mandy C"
            />
          </div>

          <p
            className="text-center text-stone-700 text-base tracking-wide mb-6 font-medium leading-relaxed"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            The 5-minute practice for high-stakes leadership.
          </p>

          <h1 className="text-center mb-6">
            <span
              className="block text-4xl font-light text-stone-900 leading-tight tracking-tight mb-1.5"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              THE FOUNDER&apos;S
            </span>
            <span
              className="block text-6xl font-bold text-neutral-900 leading-tight tracking-tight"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              IDENTITY RESET
            </span>
          </h1>

          <p
            className="text-center text-stone-700 mb-4 leading-relaxed text-base"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Scaling a company requires you to become someone new — someone who can hold more capital, more visibility, more responsibility.
          </p>
          <p
            className="text-center text-stone-700 mb-4 leading-relaxed text-base"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            But your nervous system doesn&apos;t automatically upgrade when your business does.
          </p>
          <p
            className="text-center text-stone-700 mb-8 leading-relaxed text-base"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            This daily audio practice closes that gap.
          </p>

          <form onSubmit={onSubmit} className="space-y-3.5 mb-2">
            <input
              type="text"
              placeholder="First Name (optional)"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-5 py-4 border border-stone-300 bg-white text-stone-800 placeholder-stone-500 focus:outline-none focus:border-amber-600/50 text-base"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-4 border border-stone-300 bg-white text-stone-800 placeholder-stone-500 focus:outline-none focus:border-amber-600/50 text-base"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            />
            {error && (
              <p className="text-center text-red-600 text-sm px-2" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                {error}
              </p>
            )}
            {success && (
              <p className="text-center text-amber-700 font-medium text-sm px-2" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                Thank you! Check your email for the audio.
              </p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-white font-medium tracking-[0.15em] text-base hover:from-amber-500 hover:via-yellow-500 hover:to-amber-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/50 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending…" : "GET THE AUDIO"}
            </button>
          </form>

          <p
            className="text-center text-stone-600 text-sm leading-relaxed"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Instant access. Occasional insights on scaling. No hype.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-stone-800 via-stone-900 to-stone-950 px-6 py-12">
        <div className="max-w-sm mx-auto">
          <h2
            className="text-3xl font-medium tracking-[0.15em] mb-8 text-center bg-clip-text text-transparent"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              backgroundImage:
                "linear-gradient(to right, #f59e0b, #fbbf24, #f59e0b)",
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
                {/* Static rotating image of circular text - 2x/3x for sharp on retina */}
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

                {/* Play button in center */}
                <div
                  className="relative rounded-full bg-gradient-to-br from-amber-900/60 to-amber-800 border-2 border-amber-500/40 flex items-center justify-center shadow-xl z-10"
                  style={{
                    width: 110,
                    height: 110,
                    minWidth: 110,
                    minHeight: 110,
                    boxShadow:
                      "0 25px 50px -12px rgba(120, 53, 15, 0.5), 0 0 0 1px rgba(245, 158, 11, 0.1)",
                  }}
                >
                  <svg
                    className="w-12 h-12 text-amber-500 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
          </div>

          <div className="space-y-6 w-full">
            <div className="flex items-start gap-3">
              <span className="text-amber-500 mt-0.5 flex-shrink-0 text-base">✦</span>
              <div>
                <p className="text-stone-200 text-lg leading-relaxed font-bold" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  5-Minute Daily Audio Practice
                </p>
                <p className="text-stone-300 text-[0.9375rem] leading-relaxed mt-1" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  Binaural beats (7.83 Hz) combined with whispered affirmations — designed to shift your identity at the subconscious level before the day takes over.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-500 mt-0.5 flex-shrink-0 text-base">✦</span>
              <div>
                <p className="text-stone-200 text-lg leading-relaxed font-bold" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  Nervous System Calibration
                </p>
                <p className="text-stone-300 text-[0.9375rem] leading-relaxed mt-1" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  Your nervous system was calibrated for your current level. This practice trains it to feel safe holding bigger outcomes — more capital, more visibility, more stakes.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-500 mt-0.5 flex-shrink-0 text-base">✦</span>
              <div>
                <p className="text-stone-200 text-lg leading-relaxed font-bold" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  Pre-Meeting Reset Protocol
                </p>
                <p className="text-stone-300 text-[0.9375rem] leading-relaxed mt-1" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  Use it before investor calls, board meetings, or any high-stakes moment. Show up as the version of you who already succeeded.
                </p>
              </div>
            </div>
          </div>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto my-8" />

          <h2
            className="text-2xl font-medium tracking-[0.12em] mb-5 text-center bg-clip-text text-transparent"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              backgroundImage:
                "linear-gradient(to right, #f59e0b, #fbbf24, #f59e0b)",
            }}
          >
            WHEN TO USE THIS
          </h2>
          <ul className="space-y-3 mb-8 text-stone-300 text-[0.9375rem] leading-relaxed" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 flex-shrink-0 mt-0.5">→</span>
              <span>First thing in the morning — before email, before Slack, before your old patterns activate</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 flex-shrink-0 mt-0.5">→</span>
              <span>Before investor meetings — to access clarity and groundedness under pressure</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 flex-shrink-0 mt-0.5">→</span>
              <span>Before difficult conversations — when you need to lead from your next-level identity</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 flex-shrink-0 mt-0.5">→</span>
              <span>When you&apos;re about to make a decision that scares you — and you need to trust yourself anyway</span>
            </li>
          </ul>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-8" />

          <h2
            className="text-2xl font-medium tracking-[0.12em] mb-4 text-center bg-clip-text text-transparent"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              backgroundImage:
                "linear-gradient(to right, #f59e0b, #fbbf24, #f59e0b)",
            }}
          >
            HOW IT WORKS
          </h2>
          <div className="space-y-4 mb-8 text-stone-300 text-[0.9375rem] leading-relaxed" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            <p><span className="text-amber-400 font-bold">01 — PUT ON HEADPHONES</span> The binaural beats require stereo headphones to create the 7.83 Hz frequency that activates subconscious receptivity.</p>
            <p><span className="text-amber-400 font-bold">02 — LISTEN BEFORE YOUR DAY STARTS</span> This works best before you check email, before meetings, before your environment activates your default patterns.</p>
            <p><span className="text-amber-400 font-bold">03 — EMBODY, DON&apos;T JUST LISTEN</span> As you listen, feel yourself AS the founder who already scaled. Let your nervous system learn what that identity feels like.</p>
          </div>

          <h2
            className="text-2xl font-medium tracking-[0.12em] mb-3 text-center bg-clip-text text-transparent"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              backgroundImage:
                "linear-gradient(to right, #f59e0b, #fbbf24, #f59e0b)",
            }}
          >
            WHAT YOU&apos;LL HEAR
          </h2>
          <p className="text-stone-400 text-[0.9375rem] leading-relaxed mb-3 text-center" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            The audio includes whispered affirmations like:
          </p>
          <ul className="space-y-1.5 text-stone-300 text-[0.9375rem] leading-relaxed list-none mb-8" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            <li>• &quot;I lead with clarity under pressure&quot;</li>
            <li>• &quot;My nervous system is calibrated for the next level&quot;</li>
            <li>• &quot;I make decisions from certainty, not anxiety&quot;</li>
            <li>• &quot;I am the founder who already built what I&apos;m building&quot;</li>
            <li>• &quot;High stakes feel like home&quot;</li>
          </ul>
        </div>
      </div>

      <div className="px-6 py-12 bg-gradient-to-b from-stone-100 to-stone-50 relative">
        <div className="max-w-sm mx-auto text-center">
          <h3
            className="text-2xl tracking-[0.1em] mb-4 bg-clip-text text-transparent"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              backgroundImage:
                "linear-gradient(to right, #d97706, #f59e0b, #d97706)",
            }}
          >
            ABOUT MANDY
          </h3>

          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-2 border-amber-500/30 shadow-lg mb-4 relative">
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
            className="text-stone-600 text-base leading-relaxed"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            I&apos;ve spent 10 years advising companies through NASDAQ IPOs — high-stakes environments where clarity, presence, and decision-making under pressure aren&apos;t optional.
          </p>
          <p
            className="text-stone-600 text-base leading-relaxed mt-4"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            But here&apos;s what I&apos;ve learned: the founders who scale successfully aren&apos;t just strategically sharp. They&apos;ve done the inner work to hold that level of success.
          </p>
          <p
            className="text-stone-600 text-base leading-relaxed mt-4"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            This audio is the practice I wish I could give every founder I work with. The strategy matters. But who you&apos;re BEING while you execute the strategy matters more.
          </p>
          <p className="mt-4">
            <a
              href="https://www.youtube.com/@MandyC852"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-amber-500 font-bold underline decoration-amber-500/80 hover:text-amber-600 hover:decoration-amber-600 transition-colors"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Watch more on YouTube: Luminate with MandyC
            </a>
          </p>
        </div>
      </div>

      {/* Mobile footer - FIXED: Removed fixed positioning */}
      <footer
        className="w-full bg-stone-950 border-t border-stone-900 py-5"
        aria-label="Site footer"
      >
        <div className="max-w-sm mx-auto px-6 text-center">
          <p
            className="text-stone-400 text-sm leading-relaxed mb-2"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            © 2026 Luminate with Mandy C. | All Rights Reserved
          </p>
          <div
            className="text-stone-400 text-sm"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            <a
              href="/terms"
              className="hover:text-amber-300 transition-colors"
            >
              Terms &amp; Conditions
            </a>
            <span className="mx-2 text-stone-500">|</span>
            <a
              href="/privacy"
              className="hover:text-amber-300 transition-colors"
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
