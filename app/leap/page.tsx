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

// @mandycsub — "Charged Holographic Night" brand tokens
const VOID = "#07080F"
const MIDNIGHT = "#0E1224"
const PEARL = "#EAF2F8"
const AQUA = "#8FE3E0"
const CHAMPAGNE = "#F1D9A6"
const SHEEN =
  "linear-gradient(90deg, #EAF2F8, #8FE3E0, #B9A7F2, #F1D9A6, #EAF2F8)"

const cormorant = "var(--font-cormorant-garamond), serif"
const montserrat = "var(--font-montserrat), sans-serif"

const receiveItems = [
  {
    title: "5-MINUTE DAILY PRACTICE",
    description:
      "Binaural beats + layered affirmations. Headphones on, press play — no setup, nothing to learn.",
  },
  {
    title: "IDENTITY-LEVEL RESET",
    description:
      "Built for the moments that ask more of you — composed, clear, and unhurried under pressure.",
  },
  {
    title: "LISTEN ANYWHERE",
    description:
      "One track for any moment: before a big meeting, at the start of the day, or coming back to centre.",
  },
]

function Signature({ width, height }: { width: number; height: number }) {
  return (
    <div className="flex justify-center" role="img" aria-label="MandyC signature">
      <Image
        src="/mandycsub-signature.png"
        alt=""
        width={width}
        height={height}
        quality={100}
        priority
      />
    </div>
  )
}

function CircularPlayer({ size }: { size: number }) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size, minWidth: size, minHeight: size }}
    >
      <svg
        className="absolute inset-0"
        viewBox="0 0 200 200"
        width={size}
        height={size}
        style={{ animation: "rotate-slow 25s linear infinite", flexShrink: 0 }}
        aria-hidden="true"
      >
        <defs>
          <path
            id="circlePathLeap"
            d="M 100 35 A 65 65 0 1 1 99.99 35"
            fill="none"
          />
        </defs>
        <text
          fill="rgba(234, 242, 248, 0.55)"
          textLength={398}
          lengthAdjust="spacing"
          style={{
            fontFamily: montserrat,
            fontSize: "11.5px",
            fontWeight: 500,
            letterSpacing: "0.35em",
          }}
        >
          <textPath href="#circlePathLeap" startOffset="2.5%">
            5-MIN · DAILY · IDENTITY · RESET ·
          </textPath>
        </text>
      </svg>
      <div
        className="relative rounded-full flex items-center justify-center z-10"
        style={{
          width: size * 0.56,
          height: size * 0.56,
          background: SHEEN,
          boxShadow: `0 25px 50px -12px rgba(7,8,15,0.8), 0 0 40px rgba(143,227,224,0.25), 0 0 0 1px rgba(234,242,248,0.15)`,
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill={VOID}
          style={{
            width: size * 0.22,
            height: size * 0.22,
            marginLeft: size * 0.02,
          }}
          aria-hidden="true"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  )
}

function DesktopView({ firstName, setFirstName, email, setEmail, onSubmit, isSubmitting, success, error }: FormProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1 min-h-0">
        {/* Left Panel - Midnight / Form Side */}
        <div
          className="w-1/2 flex flex-col justify-center items-center px-14 py-6 overflow-y-auto"
          style={{
            background: `radial-gradient(ellipse 70% 55% at 85% 8%, rgba(143,227,224,0.07), transparent 60%), radial-gradient(ellipse 60% 50% at 10% 95%, rgba(185,167,242,0.06), transparent 55%), ${MIDNIGHT}`,
          }}
        >
          <div className="max-w-lg w-full">
            <div className="mb-5 flex justify-center">
              <Signature width={240} height={80} />
            </div>

            <p
              className="text-center text-[13px] mb-5 font-medium"
              style={{
                fontFamily: montserrat,
                letterSpacing: "0.3em",
                color: CHAMPAGNE,
              }}
            >
              A FREE AUDIO FROM MANDYC SUBLIMINAL
            </p>

            <h1 className="text-center mb-4">
              <span
                className="block text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-1"
                style={{ fontFamily: cormorant, color: PEARL }}
              >
                THE 5-MINUTE
              </span>
              <span
                className="block text-5xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent"
                style={{
                  fontFamily: cormorant,
                  backgroundImage: SHEEN,
                }}
              >
                IDENTITY RESET
              </span>
            </h1>

            <p
              className="text-center mb-4 leading-relaxed text-[15px]"
              style={{ fontFamily: montserrat, fontWeight: 300, color: "rgba(234,242,248,0.78)" }}
            >
              The version of you that got you here isn&apos;t the one who takes you further. This 5-minute daily audio — binaural beats layered under calm affirmations — is how you close that gap.
            </p>
            <p
              className="text-center mb-5 leading-relaxed text-[15px]"
              style={{ fontFamily: montserrat, fontWeight: 300, color: "rgba(234,242,248,0.78)" }}
            >
              Use it before a big meeting, at the start of your day, or any time you need to come back to centre.
            </p>

            <form onSubmit={onSubmit} className="space-y-3 mb-3">
              <input
                type="text"
                placeholder="First Name (optional)"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-5 py-3.5 border text-[15px] transition-all focus:outline-none"
                style={{
                  fontFamily: montserrat,
                  fontWeight: 300,
                  backgroundColor: "rgba(234,242,248,0.05)",
                  borderColor: "rgba(234,242,248,0.18)",
                  color: PEARL,
                }}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-5 py-3.5 border text-[15px] transition-all focus:outline-none"
                style={{
                  fontFamily: montserrat,
                  fontWeight: 300,
                  backgroundColor: "rgba(234,242,248,0.05)",
                  borderColor: "rgba(234,242,248,0.18)",
                  color: PEARL,
                }}
              />
              {error && (
                <p className="text-center text-sm" style={{ fontFamily: montserrat, color: "#f2a0a0" }}>
                  {error}
                </p>
              )}
              {success && (
                <p className="text-center font-medium text-sm" style={{ fontFamily: montserrat, color: AQUA }}>
                  You&apos;re in. Taking you to your audio…
                </p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 text-sm font-medium uppercase transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  fontFamily: montserrat,
                  letterSpacing: "0.15em",
                  background: SHEEN,
                  backgroundSize: "200% 100%",
                  color: VOID,
                  boxShadow: "0 4px 14px rgba(7,8,15,0.5), 0 0 20px rgba(143,227,224,0.15)",
                }}
              >
                {isSubmitting ? "Sending…" : "GET THE FREE AUDIO"}
              </button>
            </form>

            <p
              className="text-center text-xs leading-relaxed"
              style={{ fontFamily: montserrat, fontWeight: 300, color: "rgba(234,242,248,0.45)" }}
            >
              Instant access. Occasional notes on new tracks — subliminals, affirmations, focus audio. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Right Panel - Void / Content Side */}
        <div
          className="w-1/2 relative flex flex-col items-center justify-center px-12 py-6 min-h-0 overflow-y-auto"
          style={{
            background: `radial-gradient(ellipse 65% 45% at 50% 0%, rgba(143,227,224,0.08), transparent 60%), linear-gradient(160deg, ${MIDNIGHT} 0%, ${VOID} 60%, ${MIDNIGHT} 100%)`,
          }}
        >
          <div className="max-w-xl w-full flex flex-col justify-center">
            {/* WHAT YOU'LL RECEIVE Section */}
            <h2
              className="text-3xl font-semibold tracking-[0.15em] mb-5 text-center bg-clip-text text-transparent"
              style={{
                fontFamily: cormorant,
                backgroundImage: SHEEN,
              }}
            >
              WHAT YOU&apos;LL RECEIVE
            </h2>

            <div className="flex items-center gap-7 mb-6">
              <div className="flex-shrink-0" style={{ minWidth: 160, minHeight: 160 }}>
                <CircularPlayer size={160} />
              </div>

              <div className="space-y-4 flex-1">
                {receiveItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-2.5">
                    <span
                      className="mt-0.5 flex-shrink-0 text-base"
                      style={{ color: AQUA }}
                    >
                      ✦
                    </span>
                    <div>
                      <p
                        className="text-[1.0625rem] leading-snug font-semibold"
                        style={{ fontFamily: cormorant, color: PEARL, letterSpacing: "0.06em" }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="text-sm leading-relaxed mt-1"
                        style={{ fontFamily: montserrat, fontWeight: 300, color: "rgba(234,242,248,0.65)" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div
              className="w-28 h-px mx-auto mb-6"
              style={{
                background: `linear-gradient(to right, transparent, ${AQUA}, transparent)`,
              }}
            />

            {/* ABOUT MANDY Section */}
            <div className="flex items-start gap-6">
              <div
                className="flex-shrink-0 rounded-full p-[2px] shadow-xl"
                style={{ background: SHEEN }}
              >
                <div
                  className="w-28 h-28 rounded-full overflow-hidden relative"
                  style={{ border: `2px solid ${VOID}` }}
                >
                  <Image
                    src="/mandycsub-profile.jpg"
                    alt="Mandy Cheung"
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>
              </div>

              <div className="flex-1 min-w-0 pt-1">
                <h3
                  className="text-xl font-semibold tracking-[0.1em] mb-3 bg-clip-text text-transparent"
                  style={{
                    fontFamily: cormorant,
                    backgroundImage: SHEEN,
                  }}
                >
                  ABOUT MANDY
                </h3>

                <p
                  className="text-[15px] leading-relaxed"
                  style={{ fontFamily: montserrat, fontWeight: 300, color: "rgba(234,242,248,0.85)" }}
                >
                  I&apos;m Mandy — corporate finance advisor by day, subliminal audio maker by night. 10+ years, 60+ transactions across HKEX and NASDAQ, and one consistent finding: the people who keep rising have done the inner work.
                </p>
                <p
                  className="text-[15px] leading-relaxed mt-2.5"
                  style={{ fontFamily: montserrat, fontWeight: 300, color: "rgba(234,242,248,0.85)" }}
                >
                  On{" "}
                  <a
                    href="https://www.youtube.com/@mandycsub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline transition-colors"
                    style={{ color: AQUA, textDecorationColor: "rgba(143,227,224,0.4)" }}
                  >
                    @mandycsub
                  </a>
                  {" "}I make subliminals, affirmations and focus audio for exactly that — the thinking, composure, and identity that strategy alone doesn&apos;t build.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Bridge */}
      <div
        className="w-full py-10 px-6"
        style={{ background: VOID, borderTop: "1px solid rgba(143,227,224,0.15)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h3
            className="text-2xl md:text-3xl mb-2 leading-[1.15]"
            style={{ fontFamily: cormorant, color: PEARL }}
          >
            New tracks every week.
          </h3>
          <p
            className="text-sm mb-5"
            style={{ fontFamily: montserrat, fontWeight: 300, color: "rgba(234,242,248,0.6)" }}
          >
            Subliminals, affirmations and focus audio — on the channel.
          </p>
          <a
            href="https://www.youtube.com/@mandycsub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-3.5 text-sm font-medium tracking-[0.12em] uppercase whitespace-nowrap transition-all duration-300"
            style={{
              fontFamily: montserrat,
              background: SHEEN,
              backgroundSize: "200% 100%",
              color: VOID,
              boxShadow: "0 4px 14px rgba(7,8,15,0.5), 0 0 20px rgba(185,167,242,0.15)",
            }}
          >
            Subscribe on YouTube
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="w-full py-4 border-t"
        style={{ backgroundColor: "#04050a", borderColor: "rgba(143,227,224,0.12)" }}
        aria-label="Site footer"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p
            className="text-xs md:text-sm"
            style={{ fontFamily: montserrat, fontWeight: 300, color: "rgba(234,242,248,0.45)" }}
          >
            © 2026 Lumina Consulting Limited{" "}
            <a href="/terms" className="mx-1 transition-colors hover:text-[#8FE3E0]">Terms</a>
            {" · "}
            <a href="/privacy" className="mx-1 transition-colors hover:text-[#8FE3E0]">Privacy</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

function MobileView({ firstName, setFirstName, email, setEmail, onSubmit, isSubmitting, success, error }: FormProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: MIDNIGHT }}>
      <div className="px-6 pt-10 pb-10">
        <div className="max-w-sm mx-auto">
          <div className="mb-6 flex justify-center">
            <Signature width={240} height={80} />
          </div>

          <p
            className="text-center text-[11px] mb-6 font-medium leading-relaxed"
            style={{
              fontFamily: montserrat,
              letterSpacing: "0.3em",
              color: CHAMPAGNE,
            }}
          >
            A FREE AUDIO FROM MANDYC SUBLIMINAL
          </p>

          <h1 className="text-center mb-6">
            <span
              className="block text-3xl font-bold leading-tight tracking-tight mb-1.5"
              style={{ fontFamily: cormorant, color: PEARL }}
            >
              THE 5-MINUTE
            </span>
            <span
              className="block text-5xl font-bold leading-tight tracking-tight bg-clip-text text-transparent"
              style={{
                fontFamily: cormorant,
                backgroundImage: SHEEN,
              }}
            >
              IDENTITY RESET
            </span>
          </h1>

          <p
            className="text-center mb-4 leading-relaxed text-sm"
            style={{ fontFamily: montserrat, fontWeight: 300, color: "rgba(234,242,248,0.78)" }}
          >
            The version of you that got you here isn&apos;t the one who takes you further. This 5-minute daily audio — binaural beats layered under calm affirmations — is how you close that gap.
          </p>
          <p
            className="text-center mb-8 leading-relaxed text-sm"
            style={{ fontFamily: montserrat, fontWeight: 300, color: "rgba(234,242,248,0.78)" }}
          >
            Use it before a big meeting, at the start of your day, or any time you need to come back to centre.
          </p>

          <form onSubmit={onSubmit} className="space-y-3.5 mb-2">
            <input
              type="text"
              placeholder="First Name (optional)"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-5 py-4 border text-base transition-all focus:outline-none"
              style={{
                fontFamily: montserrat,
                fontWeight: 300,
                backgroundColor: "rgba(234,242,248,0.05)",
                borderColor: "rgba(234,242,248,0.18)",
                color: PEARL,
              }}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-4 border text-base transition-all focus:outline-none"
              style={{
                fontFamily: montserrat,
                fontWeight: 300,
                backgroundColor: "rgba(234,242,248,0.05)",
                borderColor: "rgba(234,242,248,0.18)",
                color: PEARL,
              }}
            />
            {error && (
              <p className="text-center text-sm px-2" style={{ fontFamily: montserrat, color: "#f2a0a0" }}>
                {error}
              </p>
            )}
            {success && (
              <p className="text-center font-medium text-sm px-2" style={{ fontFamily: montserrat, color: AQUA }}>
                You&apos;re in. Taking you to your audio…
              </p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-[14px] text-sm font-medium uppercase transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              style={{
                fontFamily: montserrat,
                letterSpacing: "0.15em",
                background: SHEEN,
                backgroundSize: "200% 100%",
                color: VOID,
              }}
            >
              {isSubmitting ? "Sending…" : "GET THE FREE AUDIO"}
            </button>
          </form>

          <p
            className="text-center text-xs leading-relaxed"
            style={{ fontFamily: montserrat, fontWeight: 300, color: "rgba(234,242,248,0.45)" }}
          >
            Instant access. Occasional notes on new tracks — subliminals, affirmations, focus audio. Unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* What you'll receive — void gradient */}
      <div
        className="px-6 py-12"
        style={{
          background: `radial-gradient(ellipse 70% 40% at 50% 0%, rgba(143,227,224,0.08), transparent 60%), linear-gradient(160deg, ${MIDNIGHT} 0%, ${VOID} 60%, ${MIDNIGHT} 100%)`,
        }}
      >
        <div className="max-w-sm mx-auto">
          <h2
            className="text-3xl font-semibold tracking-[0.15em] mb-8 text-center bg-clip-text text-transparent"
            style={{
              fontFamily: cormorant,
              backgroundImage: SHEEN,
            }}
          >
            WHAT YOU&apos;LL RECEIVE
          </h2>

          <div className="flex justify-center mb-8">
            <CircularPlayer size={200} />
          </div>

          <div className="space-y-6 w-full">
            {receiveItems.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 text-lg" style={{ color: AQUA }}>
                  ✦
                </span>
                <div>
                  <p
                    className="text-lg leading-snug font-semibold mb-1"
                    style={{ fontFamily: cormorant, color: PEARL, letterSpacing: "0.06em" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: montserrat, fontWeight: 300, color: "rgba(234,242,248,0.65)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Mandy — midnight, centered */}
      <div className="px-6 py-12" style={{ backgroundColor: MIDNIGHT }}>
        <div className="max-w-sm mx-auto text-center">
          <h3
            className="text-2xl font-semibold tracking-[0.1em] mb-5 bg-clip-text text-transparent"
            style={{
              fontFamily: cormorant,
              backgroundImage: SHEEN,
            }}
          >
            ABOUT MANDY
          </h3>

          <div
            className="w-36 h-36 mx-auto rounded-full p-[2px] shadow-lg mb-5"
            style={{ background: SHEEN }}
          >
            <div
              className="w-full h-full rounded-full overflow-hidden relative"
              style={{ border: `2px solid ${MIDNIGHT}` }}
            >
              <Image
                src="/mandycsub-profile.jpg"
                alt="Mandy Cheung"
                fill
                className="object-cover"
                sizes="144px"
              />
            </div>
          </div>

          <p
            className="text-sm leading-relaxed"
            style={{ fontFamily: montserrat, fontWeight: 300, color: "rgba(234,242,248,0.78)" }}
          >
            I&apos;m Mandy — corporate finance advisor by day, subliminal audio maker by night. 10+ years, 60+ transactions across HKEX and NASDAQ, and one consistent finding: the people who keep rising have done the inner work.
          </p>
          <p
            className="text-sm leading-relaxed mt-4"
            style={{ fontFamily: montserrat, fontWeight: 300, color: "rgba(234,242,248,0.78)" }}
          >
            On{" "}
            <a
              href="https://www.youtube.com/@mandycsub"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline transition-colors"
              style={{ color: AQUA, textDecorationColor: "rgba(143,227,224,0.4)" }}
            >
              @mandycsub
            </a>
            {" "}I make subliminals, affirmations and focus audio for exactly that — the thinking, composure, and identity that strategy alone doesn&apos;t build.
          </p>
        </div>
      </div>

      {/* CTA Bridge (mobile) */}
      <div className="w-full py-14 px-6" style={{ background: VOID, borderTop: "1px solid rgba(143,227,224,0.15)" }}>
        <div className="max-w-sm mx-auto text-center">
          <h3
            className="text-2xl mb-2 leading-[1.15]"
            style={{ fontFamily: cormorant, color: PEARL }}
          >
            New tracks every week.
          </h3>
          <p
            className="text-sm mb-6"
            style={{ fontFamily: montserrat, fontWeight: 300, color: "rgba(234,242,248,0.6)" }}
          >
            Subliminals, affirmations and focus audio — on the channel.
          </p>
          <a
            href="https://www.youtube.com/@mandycsub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-6 py-[14px] text-sm font-medium tracking-[0.12em] uppercase transition-all duration-300"
            style={{
              fontFamily: montserrat,
              background: SHEEN,
              backgroundSize: "200% 100%",
              color: VOID,
            }}
          >
            Subscribe on YouTube
          </a>
        </div>
      </div>

      <footer
        className="w-full py-5 border-t"
        style={{ backgroundColor: "#04050a", borderColor: "rgba(143,227,224,0.12)" }}
        aria-label="Site footer"
      >
        <div className="max-w-sm mx-auto px-6 text-center">
          <p
            className="text-xs leading-relaxed mb-2"
            style={{ fontFamily: montserrat, fontWeight: 300, color: "rgba(234,242,248,0.45)" }}
          >
            © 2026 Lumina Consulting Limited
          </p>
          <div style={{ fontFamily: montserrat, fontWeight: 300, color: "rgba(234,242,248,0.45)" }}>
            <a href="/terms" className="transition-colors hover:text-[#8FE3E0]">Terms</a>
            <span className="mx-2" style={{ color: "rgba(234,242,248,0.25)" }}>·</span>
            <a href="/privacy" className="transition-colors hover:text-[#8FE3E0]">Privacy</a>
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
      }, 1200)
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

      <style jsx global>{`
        ::placeholder {
          color: rgba(234, 242, 248, 0.35);
        }
      `}</style>
    </div>
  )
}
