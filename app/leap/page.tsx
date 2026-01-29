"use client"

import React, { useState } from "react"
import Image from "next/image"

export default function LeapPage() {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")

  const DesktopView = () => (
    <div className="min-h-screen flex">
      {/* Left Panel - Cream/Form Side */}
      <div className="w-1/2 bg-gradient-to-br from-stone-50 via-amber-50/30 to-rose-50/20 flex flex-col justify-center items-center p-16">
        <div className="max-w-lg w-full">
          <div className="mb-10 text-center flex justify-center items-center">
            <div
              className="flex-shrink-0"
              style={{
                width: 300,
                height: 100,
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
            className="text-center text-stone-500 text-lg tracking-wide mb-5"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            The 5-Minute Quantum Identity Reset
          </p>

          <h1 className="text-center mb-8">
            <span
              className="block text-4xl md:text-5xl font-light text-stone-800 leading-tight tracking-tight"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              EMBODY YOUR
            </span>
            <span
              className="block text-4xl md:text-5xl font-semibold text-stone-900 leading-tight"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              NEXT-LEVEL IDENTITY
            </span>
          </h1>

          <p
            className="text-center text-stone-600 mb-12 leading-relaxed text-xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Use this daily audio practice to shift your{" "}
            <span className="text-amber-600 font-medium">subconscious identity</span>,
            expand your nervous system&apos;s capacity for success, and build your
            business from{" "}
            <span className="text-amber-600 font-medium">alignment — not exhaustion</span>.
          </p>

          <div className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-6 py-5 border border-stone-300 bg-white/80 text-stone-700 placeholder-stone-400 focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-600/30 transition-all text-lg"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-5 border border-stone-300 bg-white/80 text-stone-700 placeholder-stone-400 focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-600/30 transition-all text-lg"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            />
          </div>

          <button className="w-full py-5 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white font-medium tracking-[0.15em] text-base hover:from-amber-700 hover:via-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            QUANTUM LEAP NOW
          </button>

          <p
            className="text-center text-stone-400 text-sm mt-8 leading-relaxed"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            You&apos;ll receive the audio immediately, plus occasional insights on{" "}
            <span className="text-amber-600 font-medium">quantum identity work</span>.
            No hype. <span className="whitespace-nowrap">Unsubscribe anytime.</span>
          </p>
        </div>
      </div>

      {/* Right Panel - Rich Dark/Content Side */}
      <div className="w-1/2 relative bg-gradient-to-br from-stone-800 via-stone-900 to-stone-950 flex flex-col justify-center items-center p-16">
        <div className="max-w-xl w-full pb-8">
          <h2
            className="text-3xl md:text-4xl text-amber-200/90 font-light tracking-[0.15em] mb-12 text-center"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            WHAT YOU&apos;LL RECEIVE:
          </h2>

          <div className="flex items-start gap-10 mb-14">
            <div className="flex-shrink-0 flex flex-col items-center">
              <div
                className="w-[90px] h-[90px] rounded-full bg-gradient-to-br from-amber-900/60 to-amber-800 border-2 border-amber-500/40 flex items-center justify-center shadow-xl"
                style={{
                  boxShadow:
                    "0 25px 50px -12px rgba(120, 53, 15, 0.5), 0 0 0 1px rgba(245, 158, 11, 0.1)",
                }}
              >
                <svg
                  className="w-10 h-10 text-amber-400 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="mt-4 text-center">
                <p
                  className="text-amber-200/80 text-sm tracking-wider"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  5-MINUTE
                </p>
                <p
                  className="text-white text-base font-medium mt-1"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  QUANTUM
                </p>
                <p
                  className="text-white text-base font-medium"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  IDENTITY
                </p>
                <p
                  className="text-white text-base font-medium"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  RESET
                </p>
              </div>
            </div>

            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4">
                <span className="text-amber-400 mt-1 flex-shrink-0 text-lg">
                  ✦
                </span>
                <p
                  className="text-stone-200 text-lg leading-relaxed"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Daily audio practice with 7.83 Hz binaural beats for
                  subconscious identity shifts.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-amber-400 mt-1 flex-shrink-0 text-lg">
                  ✦
                </span>
                <p
                  className="text-stone-200 text-lg leading-relaxed"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Whispered affirmations that bypass conscious resistance.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-amber-400 mt-1 flex-shrink-0 text-lg">
                  ✦
                </span>
                <p
                  className="text-stone-200 text-lg leading-relaxed"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Nervous system expansion for holding your next level of
                  success.
                </p>
              </div>
            </div>
          </div>

          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-16" />

          <div className="flex items-start gap-10">
            <div className="flex-shrink-0 w-48 h-48 rounded-full overflow-hidden border-2 border-amber-500/30 shadow-xl relative">
              <Image
                src="/mandyc.jpg"
                alt="Mandy Cheung"
                fill
                className="object-cover"
                style={{ objectPosition: "36% 48%" }}
                sizes="192px"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3
                className="text-xl text-amber-200/90 tracking-[0.1em] mb-6"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                ABOUT MANDY
              </h3>

              <p
                className="text-stone-300 text-lg leading-relaxed"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Mandy is a corporate finance and IPO advisor who understands
                that at the highest levels, performance isn&apos;t about doing
                more — it&apos;s about{" "}
                <span className="text-amber-300 font-medium">becoming more</span>.
                She helps conscious entrepreneurs{" "}
                <span className="text-amber-300 font-medium">rewire their identity</span>,
                regulate their nervous system, and scale their businesses from{" "}
                <span className="text-amber-300 font-medium">alignment, not exhaustion</span>.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p
            className="text-stone-500 text-sm"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            © 2026 Luminate with Mandy C.
          </p>
        </div>
      </div>
    </div>
  )

  const MobileView = () => (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-amber-50/20 to-stone-50">
      <div className="px-6 pt-12 pb-14">
        <div className="max-w-sm mx-auto">
          <div className="mb-10 text-center flex justify-center items-center">
            <div
              className="flex-shrink-0"
              style={{
                width: 240,
                height: 80,
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
            className="text-center text-stone-500 text-base tracking-wide mb-4"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            The 5-Minute Quantum Identity Reset
          </p>

          <h1 className="text-center mb-6">
            <span
              className="block text-3xl font-light text-stone-800 leading-tight tracking-tight"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              EMBODY YOUR
            </span>
            <span
              className="block text-3xl font-semibold text-stone-900 leading-tight"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              NEXT-LEVEL IDENTITY
            </span>
          </h1>

          <p
            className="text-center text-stone-600 mb-10 leading-relaxed text-lg"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Use this daily audio practice to shift your{" "}
            <span className="text-amber-600 font-medium">subconscious identity</span>{" "}
            and build your business from{" "}
            <span className="text-amber-600 font-medium">alignment</span>.
          </p>

          <div className="space-y-4 mb-5">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-5 py-4 border border-stone-300 bg-white/80 text-stone-700 placeholder-stone-400 focus:outline-none focus:border-amber-600/50 text-base"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 border border-stone-300 bg-white/80 text-stone-700 placeholder-stone-400 focus:outline-none focus:border-amber-600/50 text-base"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            />
          </div>

          <button className="w-full py-4 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white font-medium tracking-[0.15em] text-sm hover:from-amber-700 hover:via-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg">
            QUANTUM LEAP NOW
          </button>

          <p
            className="text-center text-stone-400 text-sm mt-6 leading-relaxed px-2"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            You&apos;ll receive the audio immediately. No hype. <span className="whitespace-nowrap">Unsubscribe anytime.</span>
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-stone-800 via-stone-900 to-stone-950 px-6 py-14">
        <div className="max-w-sm mx-auto">
          <h2
            className="text-2xl text-amber-200/90 font-light tracking-[0.15em] mb-10 text-center"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            WHAT YOU&apos;LL RECEIVE:
          </h2>

          <div className="flex items-start gap-8 mb-10">
            <div className="flex-shrink-0 flex flex-col items-center">
              <div
                className="w-[70px] h-[70px] rounded-full bg-gradient-to-br from-amber-900/60 to-amber-800 border-2 border-amber-500/40 flex items-center justify-center shadow-xl"
                style={{
                  boxShadow:
                    "0 25px 50px -12px rgba(120, 53, 15, 0.5), 0 0 0 1px rgba(245, 158, 11, 0.1)",
                }}
              >
                <svg
                  className="w-8 h-8 text-amber-400 ml-0.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="mt-3 text-center">
                <p
                  className="text-amber-200/80 text-xs tracking-wider"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  5-MINUTE
                </p>
                <p
                  className="text-white text-sm font-medium mt-0.5"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  QUANTUM
                </p>
                <p
                  className="text-white text-sm font-medium"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  IDENTITY
                </p>
                <p
                  className="text-white text-sm font-medium"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  RESET
                </p>
              </div>
            </div>

            <div className="space-y-6 flex-1 min-w-0">
              <div className="flex items-start gap-4">
                <span className="text-amber-400 mt-0.5 flex-shrink-0 text-base">
                  ✦
                </span>
                <p
                  className="text-stone-200 text-base leading-relaxed"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Daily audio practice with 7.83 Hz binaural beats for
                  subconscious identity shifts.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-amber-400 mt-0.5 flex-shrink-0 text-base">
                  ✦
                </span>
                <p
                  className="text-stone-200 text-base leading-relaxed"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Whispered affirmations that bypass conscious resistance.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-amber-400 mt-0.5 flex-shrink-0 text-base">
                  ✦
                </span>
                <p
                  className="text-stone-200 text-base leading-relaxed"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Nervous system expansion for holding your next level of success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-14 bg-gradient-to-b from-stone-100 to-stone-50 relative">
        <div className="max-w-sm mx-auto text-center">
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-12" />

          <h3
            className="text-xl text-stone-700 tracking-[0.1em] mb-6"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            ABOUT MANDY
          </h3>

          <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-2 border-amber-500/30 shadow-lg mb-8 relative">
            <Image
              src="/mandyc.jpg"
              alt="Mandy Cheung"
              fill
              className="object-cover"
              style={{ objectPosition: "36% 48%" }}
              sizes="144px"
            />
          </div>

          <p
            className="text-stone-600 text-lg leading-relaxed"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Mandy is a corporate finance and IPO advisor who understands that
            at the highest levels, performance isn&apos;t about doing more —
            it&apos;s about{" "}
            <span className="text-amber-600 font-medium">becoming more</span>.
            She helps conscious entrepreneurs{" "}
            <span className="text-amber-600 font-medium">rewire their identity</span>,
            regulate their nervous system, and scale their businesses from{" "}
            <span className="text-amber-600 font-medium">alignment, not exhaustion</span>.
          </p>
        </div>
      </div>

      <div className="py-8 bg-stone-50">
        <p
          className="text-center text-stone-400 text-sm"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          © 2026 Luminate with Mandy C.
        </p>
      </div>
    </div>
  )

  return (
    <div className="relative">
      <div className="hidden md:block">
        <DesktopView />
      </div>
      <div className="block md:hidden">
        <MobileView />
      </div>
    </div>
  )
}
