"use client"

import Link from "next/link"

export default function FiveQuestionsThankYou() {
  return (
    <div className="min-h-screen bg-[#0F1A24] flex flex-col">
      {/* Main content */}
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
            Your PDF is ready.
          </h1>

          <p
            className="text-white/70 text-lg mb-8 leading-relaxed"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            The Executive Readiness Diagnostic. Five questions, the scoring framework, and what
            each readiness band means. Print it, annotate it, bring it to your next board meeting.
          </p>

          <a
            href="/downloads/executive-readiness-diagnostic.pdf"
            download
            className="inline-flex items-center justify-center w-full max-w-sm px-8 py-4 rounded-none bg-[#C9A227] text-[#0F1A24] font-medium tracking-[0.12em] uppercase text-base hover:bg-[#d4b84a] transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Download the PDF
          </a>

          <p
            className="text-white/40 text-xs mt-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Also sent to your inbox. Check spam if you don&apos;t see it.
          </p>
        </div>
      </div>

      {/* Upsell to diagnostic */}
      <div className="w-full bg-[#1A2A3A] border-t-2 border-[#C9A227] py-14 px-6">
        <div className="max-w-lg mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl text-white mb-3"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Want to see where you actually stand?
          </h2>
          <p
            className="text-white/70 text-base mb-6 leading-relaxed"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Take the scored version of these same questions. 10 minutes. Get your band placement
            and dimension-by-dimension insight on where the work is.
          </p>
          <a
            href="/executive-readiness"
            className="inline-flex items-center justify-center rounded-none bg-[#0F1A24] text-white text-base tracking-[0.1em] uppercase px-10 py-4 hover:bg-[#1A2A3A] transition-all duration-300 shadow-lg border border-[#C9A227]/40"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Take the Executive Readiness Diagnostic →
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
