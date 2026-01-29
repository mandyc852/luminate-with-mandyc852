"use client"

import React, { useState } from "react"
import Image from "next/image"

export default function LeapPage() {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")

  const DesktopView = () => (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1 min-h-0">
      {/* Left Panel - Cream/Form Side */}
      <div className="w-1/2 bg-gradient-to-br from-stone-50 via-white to-stone-50/80 flex flex-col justify-center items-center px-16 py-20">
        <div className="max-w-lg w-full">
          <div className="mb-10 text-center flex justify-center items-center">
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
            className="text-center text-stone-700 text-lg tracking-wide mb-8 font-medium"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            The 5-Minute Quantum Identity Reset
          </p>

          <h1 className="text-center mb-10">
            <span
              className="block text-5xl md:text-6xl font-light text-stone-900 leading-tight tracking-tight mb-2"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              EMBODY YOUR
            </span>
            <span
              className="block text-5xl md:text-7xl font-bold text-neutral-900 leading-tight"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              NEXT-LEVEL IDENTITY
            </span>
          </h1>

          <p
            className="text-center text-stone-700 mb-10 leading-loose text-xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Use this daily audio practice to shift your{" "}
            <span className="text-amber-600 font-bold">subconscious identity</span>,
            expand your nervous system&apos;s capacity for success, and build your
            business from{" "}
            <span className="text-amber-600 font-bold">alignment — not exhaustion</span>.
          </p>

          <div className="space-y-5 mb-8">
            <input
              type="text"
              placeholder="First Name"
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
              className="w-full px-6 py-5 border border-stone-300 bg-white text-stone-800 placeholder-stone-500 focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-600/30 transition-all text-lg"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            />
          </div>

          <button className="w-full py-5 mb-10 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-white font-medium tracking-[0.15em] text-base hover:from-amber-500 hover:via-yellow-500 hover:to-amber-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/50 transform hover:-translate-y-0.5">
            QUANTUM LEAP NOW
          </button>

          <p
            className="text-center text-stone-600 text-sm leading-relaxed"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            You&apos;ll receive the audio immediately, plus occasional insights on
            quantum identity work.
            <br />
            No hype. <span className="whitespace-nowrap">Unsubscribe anytime.</span>
          </p>
        </div>
      </div>

      {/* Right Panel - Rich Dark/Content Side */}
      <div className="w-1/2 relative bg-gradient-to-br from-stone-800 via-stone-900 to-stone-950 flex flex-col justify-center items-center px-16 py-20">
        <div className="max-w-xl w-full pb-8">
          <h2
            className="text-3xl md:text-4xl font-medium tracking-[0.15em] mb-16 text-center bg-clip-text text-transparent"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              backgroundImage:
                "linear-gradient(to right, #f59e0b, #fbbf24, #f59e0b)",
            }}
          >
            WHAT YOU&apos;LL RECEIVE:
          </h2>

          <div className="flex items-start gap-12 mb-20">
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
                      5-MIN · QUANTUM · IDENTITY · RESET ·
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

            <div className="space-y-8 pt-2">
              <div className="flex items-start gap-4">
                <span className="text-amber-500 mt-1 flex-shrink-0 text-lg">
                  ✦
                </span>
                <p
                  className="text-stone-200 text-xl leading-relaxed"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  <span className="font-bold">Daily audio practice with 7.83 Hz</span>{" "}
                  binaural beats for subconscious identity shifts.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-amber-500 mt-1 flex-shrink-0 text-lg">
                  ✦
                </span>
                <p
                  className="text-stone-200 text-xl leading-relaxed"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  <span className="font-bold">Whispered affirmations</span>{" "}
                  that bypass conscious resistance.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-amber-500 mt-1 flex-shrink-0 text-lg">
                  ✦
                </span>
                <p
                  className="text-stone-200 text-xl leading-relaxed"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  <span className="font-bold">Nervous system expansion</span>{" "}
                  for holding your next level of success.
                </p>
              </div>
            </div>
          </div>

          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-20" />

          <div className="flex items-start gap-12">
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
                className="text-xl tracking-[0.1em] mb-6 bg-clip-text text-transparent"
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
                Mandy is a corporate finance and IPO advisor — which means she
                lives in a world where outcomes are measured, pressure is
                normal, and clarity matters.{" "}
                On{" "}
                <a
                  href="https://www.youtube.com/@MandyC852"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 font-bold underline decoration-amber-400/80 hover:text-amber-200 hover:decoration-amber-300 transition-colors"
                >
                  Luminate with MandyC
                </a>
                , she brings the other half of performance:{" "}
                <span className="text-amber-400 font-medium">identity and nervous system regulation</span>.
                Because{" "}
                <span className="text-amber-400 font-medium">success happens in your mind first</span>{" "}
                — and when your internal state doesn&apos;t match your vision,
                no amount of pushing will make it sustainable.
              </p>
            </div>
          </div>
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

  const MobileView = () => (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-50/80">
      <div className="px-6 pt-10 pb-12">
        <div className="max-w-sm mx-auto">
          <div className="mb-8 text-center flex justify-center items-center">
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
            className="text-center text-stone-700 text-lg tracking-wide mb-5 font-medium"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            The 5-Minute Quantum Identity Reset
          </p>

          <h1 className="text-center mb-8">
            <span
              className="block text-5xl font-light text-stone-900 leading-tight tracking-tight"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              EMBODY YOUR
            </span>
            <span
              className="block text-5xl font-bold text-neutral-900 leading-tight"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              NEXT-LEVEL IDENTITY
            </span>
          </h1>

          <p
            className="text-center text-stone-700 mb-10 leading-loose text-xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Use this daily audio practice to shift your{" "}
            <span className="text-amber-600 font-bold">subconscious identity</span>{" "}
            and build your business from{" "}
            <span className="text-amber-600 font-bold">alignment</span>.
          </p>

          <div className="space-y-4 mb-7">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-5 py-4 border border-stone-300 bg-white text-stone-800 placeholder-stone-500 focus:outline-none focus:border-amber-600/50 text-lg"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 border border-stone-300 bg-white text-stone-800 placeholder-stone-500 focus:outline-none focus:border-amber-600/50 text-lg"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            />
          </div>

          <button className="w-full py-4 mb-8 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-white font-medium tracking-[0.15em] text-base hover:from-amber-500 hover:via-yellow-500 hover:to-amber-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/50">
            QUANTUM LEAP NOW
          </button>

          <p
            className="text-center text-stone-600 text-sm leading-relaxed px-2"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            You&apos;ll receive the audio immediately.
            <br />
            No hype. <span className="whitespace-nowrap">Unsubscribe anytime.</span>
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-stone-800 via-stone-900 to-stone-950 px-6 py-14">
        <div className="max-w-sm mx-auto">
          <h2
            className="text-3xl font-medium tracking-[0.15em] mb-10 text-center bg-clip-text text-transparent"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              backgroundImage:
                "linear-gradient(to right, #f59e0b, #fbbf24, #f59e0b)",
            }}
          >
            WHAT YOU&apos;LL RECEIVE:
          </h2>

          <div className="flex flex-col items-center mb-0">
            <div className="flex-shrink-0 flex flex-col items-center mb-8" style={{ minWidth: 200, minHeight: 200 }}>
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
                      id="circlePathMobile"
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
                    <textPath href="#circlePathMobile" startOffset="2.5%">
                      5-MIN · QUANTUM · IDENTITY · RESET ·
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

            <div className="space-y-8 w-full">
              <div className="flex items-start gap-4">
              <span className="text-amber-500 mt-0.5 flex-shrink-0 text-base">
                ✦
              </span>
              <p
                className="text-stone-200 text-xl leading-relaxed"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                <span className="font-bold">Daily audio practice with 7.83 Hz</span>{" "}
                binaural beats for subconscious identity shifts.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-amber-500 mt-0.5 flex-shrink-0 text-base">
                ✦
              </span>
              <p
                className="text-stone-200 text-xl leading-relaxed"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                <span className="font-bold">Whispered affirmations</span>{" "}
                that bypass conscious resistance.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-amber-500 mt-0.5 flex-shrink-0 text-base">
                ✦
              </span>
              <p
                className="text-stone-200 text-xl leading-relaxed"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  <span className="font-bold">Nervous system expansion</span>{" "}
                  for holding your next level of success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-14 bg-gradient-to-b from-stone-100 to-stone-50 relative">
        <div className="max-w-sm mx-auto text-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-8" />
          <h3
            className="text-2xl tracking-[0.1em] mb-8 bg-clip-text text-transparent"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              backgroundImage:
                "linear-gradient(to right, #d97706, #f59e0b, #d97706)",
            }}
          >
            ABOUT MANDY
          </h3>

          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-2 border-amber-500/30 shadow-lg mb-8 relative">
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
            Mandy is a corporate finance and IPO advisor — which means she
            lives in a world where outcomes are measured, pressure is normal,
            and clarity matters.{" "}
            On{" "}
            <a
              href="https://www.youtube.com/@MandyC852"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 font-bold underline decoration-amber-500/80 hover:text-amber-600 hover:decoration-amber-600 transition-colors"
            >
              Luminate with MandyC
            </a>
            , she brings the other half of performance:{" "}
            <span className="text-amber-600 font-medium">identity and nervous system regulation</span>.
            Because{" "}
            <span className="text-amber-600 font-medium">success happens in your mind first</span>{" "}
            — and when your internal state doesn&apos;t match your vision,
            no amount of pushing will make it sustainable.
          </p>
        </div>
      </div>

      {/* Mobile/Tablet footer - compact 2-line design */}
      <footer
        className="w-full bg-stone-950 border-t border-stone-900 py-6"
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

  return (
    <div className="relative">
      <div className="hidden lg:block">
        <DesktopView />
      </div>
      <div className="block lg:hidden">
        <MobileView />
      </div>
    </div>
  )
}
