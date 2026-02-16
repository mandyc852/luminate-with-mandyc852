"use client"

import Link from "next/link"

export default function GuideThankYou() {
  return (
    <div className="min-h-screen bg-[#0F1A24] flex flex-col">
      {/* Main content — centered */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-lg w-full text-center">
          {/* Logo */}
          <div
            className="mx-auto mb-8"
            style={{
              width: 280,
              height: 93,
              background: "linear-gradient(to right, #C9A227, #F5E6B3, #C9A227)",
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

          <h1
            className="text-3xl md:text-4xl text-white mb-4"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Your guide is ready.
          </h1>

          <p
            className="text-white/70 text-lg mb-8 leading-relaxed"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Inside: the real listing requirements for U.S. and Hong Kong markets, what it actually costs, and the carve-out and roll-up strategies most founders have never heard of.
          </p>

          {/* Download button — large and prominent */}
          <a
            href="/downloads/Should-you-go-public-guide.pdf"
            download
            className="inline-flex items-center justify-center w-full max-w-sm px-8 py-4 rounded-sm bg-[#C9A227] text-[#0F1A24] font-medium tracking-[0.12em] uppercase text-base hover:bg-[#d4b84a] transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Download the Guide (PDF)
          </a>
        </div>
      </div>

      {/* Strategy call section — dark with gold accent */}
      <div className="w-full bg-[#1A2A3A] border-t-2 border-[#C9A227] py-14 px-6">
        <div className="max-w-lg mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl text-white mb-3"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Want to talk through what you read?
          </h2>
          <p
            className="text-white/70 text-base mb-6 leading-relaxed"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            A 30-minute strategy call to discuss your business, your numbers, and whether a carve-out, roll-up, or full listing makes sense for you. Free. No pitch.
          </p>
          <a
            href="https://tidycal.com/mandyc852/30-minute-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm bg-[#0F1A24] text-white text-base tracking-[0.1em] uppercase px-10 py-4 hover:bg-[#1A2A3A] transition-all duration-300 shadow-lg"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Book a Free Strategy Call
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-[#000000] py-4 px-6 text-center">
        <Link
          href="/"
          className="text-white/30 hover:text-white/50 text-xs transition-colors"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          ← Back to mandyc.me
        </Link>
      </div>
    </div>
  )
}
