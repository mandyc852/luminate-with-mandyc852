"use client"

import React, { useState } from "react"
import Image from "next/image"

export default function LeapPage() {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop")

  const DesktopView = () => (
    <div className="min-h-screen flex">
      {/* Left Panel - Cream/Form Side */}
      <div className="w-1/2 bg-gradient-to-br from-stone-50 via-amber-50/30 to-rose-50/20 flex flex-col justify-center items-center p-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(212,175,55,0.3) 0%, transparent 50%),
                            radial-gradient(circle at 80% 70%, rgba(199,169,186,0.3) 0%, transparent 50%)`,
          }}
        />

        <div className="relative z-10 max-w-lg w-full">
          <div className="mb-10 text-center">
            <span className="text-base tracking-[0.3em] text-stone-400 font-light">
              LUMINATE WITH
            </span>
            <h3
              className="text-3xl tracking-wider text-stone-700 mt-1"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Mandy C.
            </h3>
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
            Use this daily audio practice to shift your subconscious identity,
            expand your nervous system&apos;s capacity for success, and build your
            business from alignment — not exhaustion.
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
            You&apos;ll receive the audio immediately, plus occasional insights on
            quantum identity work. No hype. Unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* Right Panel - Rich Dark/Content Side */}
      <div className="w-1/2 bg-gradient-to-br from-stone-800 via-stone-900 to-stone-950 flex flex-col justify-center items-center p-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 20%, rgba(212,175,55,0.4) 0%, transparent 40%),
                            radial-gradient(circle at 30% 80%, rgba(199,169,186,0.3) 0%, transparent 40%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(1px 1px at 20px 30px, rgba(255,255,255,0.4), transparent),
                            radial-gradient(1px 1px at 40px 70px, rgba(255,255,255,0.3), transparent),
                            radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.2), transparent),
                            radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.3), transparent),
                            radial-gradient(1px 1px at 160px 30px, rgba(255,255,255,0.2), transparent)`,
            backgroundSize: "200px 100px",
          }}
        />

        <div className="relative z-10 max-w-xl w-full">
          <h2
            className="text-3xl md:text-4xl text-amber-200/90 font-light tracking-[0.15em] mb-12 text-center"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            WHAT YOU&apos;LL RECEIVE:
          </h2>

          <div className="flex items-start gap-10 mb-14">
            <div className="flex-shrink-0 w-44 h-56 bg-gradient-to-br from-amber-900/40 to-stone-900 border border-amber-500/30 rounded-sm flex flex-col items-center justify-center p-5 shadow-2xl">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span
                className="text-amber-200/80 text-sm tracking-wider text-center"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                5-MINUTE
              </span>
              <span
                className="text-white text-base tracking-wider text-center font-medium mt-1"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                QUANTUM
              </span>
              <span
                className="text-white text-base tracking-wider text-center font-medium"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                IDENTITY
              </span>
              <span
                className="text-white text-base tracking-wider text-center font-medium"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                RESET
              </span>
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

          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-12" />

          <div className="flex items-center gap-8">
            <div className="flex-shrink-0 w-32 h-32 rounded-full overflow-hidden border-2 border-amber-500/30 shadow-xl relative">
              <Image
                src="/mandyc.jpg"
                alt="Mandy Cheung"
                fill
                className="object-cover object-top"
                sizes="128px"
              />
            </div>

            <div className="flex-1">
              <h3
                className="text-xl text-amber-200/90 tracking-[0.1em] mb-4"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                ABOUT MANDY
              </h3>

              <p
                className="text-stone-300 text-base leading-relaxed"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Mandy is a corporate finance and IPO advisor who bridges
                boardrooms and meditation rooms. She helps conscious
                entrepreneurs rewire their subconscious, align their energy, and
                build wealth-led businesses without sacrificing inner peace.
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
      <div className="px-6 pt-12 pb-14 relative">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 20%, rgba(212,175,55,0.4) 0%, transparent 50%)`,
          }}
        />

        <div className="relative z-10 max-w-sm mx-auto">
          <div className="mb-10 text-center">
            <span className="text-sm tracking-[0.3em] text-stone-400 font-light">
              LUMINATE WITH
            </span>
            <h3
              className="text-2xl tracking-wider text-stone-700 mt-1"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Mandy C.
            </h3>
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
            Use this daily audio practice to shift your subconscious identity and
            build your business from alignment.
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
            You&apos;ll receive the audio immediately. No hype. Unsubscribe
            anytime.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-stone-800 via-stone-900 to-stone-950 px-6 py-14 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 20%, rgba(212,175,55,0.4) 0%, transparent 40%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(1px 1px at 20px 30px, rgba(255,255,255,0.4), transparent),
                            radial-gradient(1px 1px at 60px 70px, rgba(255,255,255,0.3), transparent),
                            radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.2), transparent)`,
            backgroundSize: "120px 100px",
          }}
        />

        <div className="relative z-10 max-w-sm mx-auto">
          <h2
            className="text-2xl text-amber-200/90 font-light tracking-[0.15em] mb-10 text-center"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            WHAT YOU&apos;LL RECEIVE:
          </h2>

          <div className="flex justify-center mb-10">
            <div className="w-36 h-44 bg-gradient-to-br from-amber-900/40 to-stone-900 border border-amber-500/30 rounded-sm flex flex-col items-center justify-center p-4 shadow-2xl">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-3">
                <svg
                  className="w-6 h-6 text-white ml-0.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span
                className="text-amber-200/80 text-sm tracking-wider text-center"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                5-MINUTE
              </span>
              <span
                className="text-white text-sm tracking-wider text-center font-medium mt-1"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                QUANTUM
              </span>
              <span
                className="text-white text-sm tracking-wider text-center font-medium"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                IDENTITY RESET
              </span>
            </div>
          </div>

          <div className="space-y-6">
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

      <div className="px-6 py-14 bg-gradient-to-b from-stone-100 to-stone-50 relative">
        <div className="max-w-sm mx-auto text-center">
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-10" />

          <h3
            className="text-xl text-stone-700 tracking-[0.1em] mb-6"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            ABOUT MANDY
          </h3>

          <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-amber-500/30 shadow-lg mb-6 relative">
            <Image
              src="/mandyc.jpg"
              alt="Mandy Cheung"
              fill
              className="object-cover object-top"
              sizes="112px"
            />
          </div>

          <p
            className="text-stone-600 text-base leading-relaxed"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Mandy is a corporate finance and IPO advisor who bridges boardrooms
            and meditation rooms. She helps conscious entrepreneurs rewire their
            subconscious, align their energy, and build wealth-led businesses
            without sacrificing inner peace.
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
      <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow-lg border border-stone-200">
        <button
          type="button"
          onClick={() => setViewMode("desktop")}
          className={`px-5 py-2.5 text-sm tracking-wide rounded-full transition-all ${
            viewMode === "desktop"
              ? "bg-stone-800 text-white"
              : "text-stone-600 hover:bg-stone-100"
          }`}
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Desktop
        </button>
        <button
          type="button"
          onClick={() => setViewMode("mobile")}
          className={`px-5 py-2.5 text-sm tracking-wide rounded-full transition-all ${
            viewMode === "mobile"
              ? "bg-stone-800 text-white"
              : "text-stone-600 hover:bg-stone-100"
          }`}
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Mobile
        </button>
      </div>

      {viewMode === "desktop" ? (
        <DesktopView />
      ) : (
        <div className="flex justify-center items-start min-h-screen bg-stone-300 py-8 px-4">
          <div className="w-[390px] shadow-2xl rounded-3xl overflow-hidden bg-white">
            <MobileView />
          </div>
        </div>
      )}
    </div>
  )
}
