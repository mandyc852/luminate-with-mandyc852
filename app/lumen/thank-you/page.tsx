"use client"

import Link from "next/link"

export default function LumenThankYou() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(135deg, #1A2A3A 0%, #0F1A24 100%)" }}>
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        <div className="max-w-lg w-full text-center">
          {/* Lumen icon */}
          <div className="flex justify-center mb-8">
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
              <defs>
                <radialGradient id="th" cx="50%" cy="46%" r="50%">
                  <stop offset="0%" stopColor="#FFF6DC" />
                  <stop offset="30%" stopColor="#D8B84A" />
                  <stop offset="100%" stopColor="#C9A227" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="1024" height="1024" rx="232" fill="#1A2A3A" />
              <circle cx="512" cy="468" r="390" fill="url(#th)" opacity="0.62" />
              <circle cx="512" cy="468" r="94" fill="#FFF6DC" />
            </svg>
          </div>

          <h1
            className="text-white mb-4 leading-snug"
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 600 }}
          >
            Lumen is on its way.
          </h1>

          <p
            className="mb-10 leading-relaxed"
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 18, color: "rgba(255,255,255,0.7)" }}
          >
            Check your inbox for install instructions. Open the link in Safari on iPhone (or Chrome on Android), tap Share → Add to Home Screen, and Lumen lives on your home screen like an app.
          </p>

          {/* Install steps */}
          <div
            className="text-left rounded-xl p-6 mb-10"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,162,39,0.2)" }}
          >
            <p
              className="mb-4"
              style={{ fontFamily: "var(--font-poppins), sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C9A227" }}
            >
              How to install
            </p>
            {[
              "Open the link in your email in Safari (iPhone) or Chrome (Android)",
              "Tap the Share icon at the bottom of the screen",
              'Tap "Add to Home Screen"',
              "That's it — Lumen is on your home screen",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3 mb-3 last:mb-0">
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[#C9A227] text-sm font-semibold mt-0.5"
                  style={{ background: "rgba(201,162,39,0.12)", fontFamily: "Cormorant Garamond, serif" }}
                >
                  {i + 1}
                </span>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 16, color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategy call */}
      <div className="w-full py-12 px-6 border-t-2" style={{ background: "#1A2A3A", borderColor: "#C9A227" }}>
        <div className="max-w-lg mx-auto text-center">
          <h2
            className="text-white mb-3"
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(22px, 4vw, 30px)", fontWeight: 500 }}
          >
            Want help building your season?
          </h2>
          <p
            className="mb-6 leading-relaxed"
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 17, color: "rgba(255,255,255,0.65)" }}
          >
            A 30-minute call to set your 12-week anchor, map your practices, and design a weekly rhythm that actually holds. Free. No pitch.
          </p>
          <a
            href="https://tidycal.com/mandyc852/30-minute-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 bg-[#C9A227] text-[#0F1A24] text-sm font-medium tracking-[0.12em] uppercase hover:bg-[#D8B84A] transition-all"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Book a Free Strategy Call
          </a>
        </div>
      </div>

      <div className="w-full bg-black py-4 px-6 text-center">
        <Link
          href="/"
          className="text-white/30 hover:text-white/50 text-xs transition-colors"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          ← Back to mandyc.me
        </Link>
      </div>
    </div>
  )
}
