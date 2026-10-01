"use client"

import Link from "next/link"
import Image from "next/image"

const VOID = "#07080F"
const MIDNIGHT = "#0E1224"
const PEARL = "#EAF2F8"
const AQUA = "#8FE3E0"
const SHEEN =
  "linear-gradient(90deg, #EAF2F8, #8FE3E0, #B9A7F2, #F1D9A6, #EAF2F8)"

const montserrat = "var(--font-montserrat), sans-serif"

export default function LeapThankYou() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: `radial-gradient(ellipse 70% 45% at 50% 0%, rgba(143,227,224,0.08), transparent 60%), linear-gradient(160deg, ${MIDNIGHT} 0%, ${VOID} 60%, ${MIDNIGHT} 100%)`,
      }}
    >
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-lg w-full text-center">
          <div className="mb-8 flex justify-center" role="img" aria-label="MandyC signature">
            <Image
              src="/mandycsub-signature.png"
              alt=""
              width={280}
              height={93}
              quality={100}
              priority
            />
          </div>

          <h1
            className="text-3xl md:text-4xl mb-4"
            style={{ fontFamily: "var(--font-cormorant-garamond), serif", color: PEARL }}
          >
            Your audio is ready.
          </h1>

          <p
            className="text-base mb-8 leading-relaxed"
            style={{
              fontFamily: montserrat,
              fontWeight: 300,
              color: "rgba(234,242,248,0.7)",
            }}
          >
            The 5-Minute Identity Reset. Use it before a high-stakes meeting, at
            the start of your day, or whenever you need to come back to centre.
          </p>

          <a
            href="/downloads/identity-reset.mp3"
            download
            className="inline-flex items-center justify-center w-full max-w-sm px-8 py-4 text-sm font-medium tracking-[0.12em] uppercase transition-all duration-300"
            style={{
              fontFamily: montserrat,
              background: SHEEN,
              backgroundSize: "200% 100%",
              color: VOID,
              boxShadow:
                "0 4px 14px rgba(7,8,15,0.5), 0 0 24px rgba(143,227,224,0.2)",
            }}
          >
            Download the Audio
          </a>
        </div>
      </div>

      {/* Cross-promote the channel */}
      <div
        className="w-full py-14 px-6"
        style={{ borderTop: "1px solid rgba(143,227,224,0.15)" }}
      >
        <div className="max-w-lg mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl mb-3"
            style={{
              fontFamily: "var(--font-cormorant-garamond), serif",
              color: PEARL,
            }}
          >
            While it downloads — subscribe.
          </h2>
          <p
            className="text-sm mb-6 leading-relaxed"
            style={{
              fontFamily: montserrat,
              fontWeight: 300,
              color: "rgba(234,242,248,0.6)",
            }}
          >
            New subliminals, affirmations and focus audio every week — free on
            YouTube.
          </p>
          <a
            href="https://www.youtube.com/@mandycsub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-[14px] text-sm font-medium tracking-[0.12em] uppercase transition-all duration-300"
            style={{
              fontFamily: montserrat,
              border: `1px solid rgba(143,227,224,0.4)`,
              color: AQUA,
            }}
          >
            Subscribe to @mandycsub
          </a>
        </div>
      </div>

      <div className="w-full py-4 px-6 text-center" style={{ backgroundColor: "#04050a" }}>
        <Link
          href="/"
          className="text-xs transition-colors hover:text-[#8FE3E0]"
          style={{
            fontFamily: montserrat,
            fontWeight: 300,
            color: "rgba(234,242,248,0.3)",
          }}
        >
          ← Back to mandyc.me
        </Link>
      </div>
    </div>
  )
}
