"use client"

import Link from "next/link"

export default function LaneThankYou() {
  return (
    <div className="min-h-screen bg-[#0F1A24] flex flex-col">
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
            LANE is on its way.
          </h1>

          <p
            className="text-white/70 text-lg mb-10 leading-relaxed"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Print the PDF. Set the wallpaper. Sunday evening, forty-five minutes, pen and paper.
            The loop runs whether you watch it or not.
          </p>

          {/* Primary: PDF (print, pen and paper) */}
          <a
            href="/lead-magnet/lane.pdf"
            download
            className="inline-flex items-center justify-center w-full max-w-sm px-8 py-4 rounded-none bg-[#C9A227] text-[#0F1A24] font-medium tracking-[0.12em] uppercase text-base hover:bg-[#D4B84A] transition-all duration-300 shadow-lg hover:shadow-xl mb-2"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Download the LANE PDF
          </a>
          <p
            className="text-white/45 text-xs mb-5 max-w-sm mx-auto"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Pen-and-paper version. For Sunday evenings.
          </p>

          {/* Secondary: Interactive PDF */}
          <a
            href="/lead-magnet/lane-fillable.pdf"
            download
            className="inline-flex items-center justify-center w-full max-w-sm px-8 py-3.5 rounded-none border border-[#C9A227]/50 text-[#C9A227] font-medium tracking-[0.12em] uppercase text-sm hover:bg-[#C9A227]/10 transition-all duration-300 mb-2"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Or the interactive version →
          </a>
          <p
            className="text-white/45 text-xs mb-7 max-w-sm mx-auto"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Fillable PDF. Type your answers. Save and reopen weekly.
          </p>

          {/* Tertiary: wallpapers */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
            <a
              href="/lead-magnet/wallpaper-phone.png"
              download
              className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-none border border-[#C9A227]/30 text-[#C9A227]/80 font-medium tracking-[0.12em] uppercase text-xs hover:bg-[#C9A227]/5 transition-all duration-300"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Phone wallpaper
            </a>
            <a
              href="/lead-magnet/wallpaper-desktop.png"
              download
              className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-none border border-[#C9A227]/30 text-[#C9A227]/80 font-medium tracking-[0.12em] uppercase text-xs hover:bg-[#C9A227]/5 transition-all duration-300"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Desktop wallpaper
            </a>
          </div>

          <p
            className="text-white/40 text-xs mt-8"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            All four files sent to your inbox. Check spam if you don&apos;t see it.
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
            Preparing for a capital event?
          </h2>
          <p
            className="text-white/70 text-base mb-6 leading-relaxed"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            LANE is the weekly practice. The Executive Readiness Diagnostic is the assessment for
            executives whose companies are 6 to 18 months from a raise, restructure, or listing.
            Ten minutes, scored, band placement, dimension-by-dimension insight.
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
