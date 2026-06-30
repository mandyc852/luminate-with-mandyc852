"use client"

import { Cormorant_Garamond, Poppins } from "next/font/google"
import { SiteHeader } from "../../_components/site-header"

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant-garamond",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
})

const EXITPRO_URL = "https://exitproai.vercel.app/join?beta=EXITPRO2026"
const TIDYCAL_URL = "https://tidycal.com/mandyc852/30-minute-meeting"

export default function ThankYouPage() {
  return (
    <div className={`${cormorantGaramond.variable} ${poppins.variable} min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50/80`}>
      <style jsx global>{`
        :root {
          --navy-deep: #1a2a3a;
          --gold-primary: #c9a227;
          --gold-dark: #a68a1f;
        }
        body { padding-top: 80px; }
        h1, h2, h3 {
          font-family: var(--font-cormorant-garamond), serif;
          font-weight: 400;
          color: var(--navy-deep);
        }
        p, label, input, button { font-family: var(--font-poppins), sans-serif; }
        .btn-gold-animated {
          position: relative;
          background: linear-gradient(135deg, #a68a1f 0%, #c9a227 25%, #d4b84a 50%, #c9a227 75%, #a68a1f 100%);
          background-size: 200% 200%;
          color: #1a2a3a;
          box-shadow: 0 4px 14px rgba(26, 42, 58, 0.25), 0 2px 8px rgba(201, 162, 39, 0.2);
          font-weight: 500;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
        }
        .btn-gold-animated:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(26, 42, 58, 0.35), 0 4px 15px rgba(201, 162, 39, 0.3);
          animation: shimmerGold 1.5s ease infinite;
        }
        @keyframes shimmerGold {
          0% { background-position: 200% 0%; }
          100% { background-position: -200% 0%; }
        }
      `}</style>

      <SiteHeader bookHref={TIDYCAL_URL} />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full border-2 border-[#c9a227] flex items-center justify-center mx-auto mb-8">
            <svg className="w-8 h-8 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl md:text-5xl font-normal mb-6 leading-[1.15]">
            You&apos;re booked.
          </h1>

          <p className="text-slate-600 font-light text-lg leading-[1.7] mb-12 max-w-xl mx-auto">
            A confirmation email is on its way with your ExitPro access and next steps. Check your inbox (and spam, just in case).
          </p>

          <div className="bg-[#f8f7f4] border border-slate-200 p-8 md:p-10 text-left max-w-lg mx-auto mb-12">
            <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase mb-5">
              Your next two steps
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <span
                  className="flex-shrink-0 w-9 h-9 rounded-full border-2 border-[#c9a227] flex items-center justify-center text-[#a68a1f] text-sm font-medium"
                  style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
                >
                  1
                </span>
                <div>
                  <h3 className="text-lg font-normal text-[#1a2a3a] mb-1">Complete the ExitPro intake</h3>
                  <p className="text-slate-600 font-light text-sm leading-[1.7]">
                    Upload your financials and cap table. The structured intake takes 15–20 minutes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span
                  className="flex-shrink-0 w-9 h-9 rounded-full border-2 border-[#c9a227] flex items-center justify-center text-[#a68a1f] text-sm font-medium"
                  style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
                >
                  2
                </span>
                <div>
                  <h3 className="text-lg font-normal text-[#1a2a3a] mb-1">Book the 90-minute working call</h3>
                  <p className="text-slate-600 font-light text-sm leading-[1.7]">
                    Pick a time that works for you. CFO or co-founder welcome in the room.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <a
              href={EXITPRO_URL}
              className="w-full md:w-[520px] inline-flex items-center justify-center whitespace-nowrap px-8 py-4 rounded-none shadow-lg uppercase tracking-wide text-sm btn-gold-animated"
            >
              Open ExitPro — Start Intake
            </a>
            <a
              href={TIDYCAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a2a3a] hover:text-[#c9a227] text-sm font-light underline decoration-slate-300 hover:decoration-[#c9a227] underline-offset-4 transition-colors"
            >
              Book the 90-minute call →
            </a>
          </div>
        </div>
      </section>

      <footer className="w-full bg-[#0f1a24] border-t border-[#1a2a3a] py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-1 text-center" style={{ fontFamily: "var(--font-poppins)" }}>
              <p className="text-slate-500 text-xs leading-relaxed mb-2 md:mb-0">
                &copy; 2026 Lumina Consulting Limited
              </p>
              <span className="hidden md:inline text-slate-600 text-xs"> | </span>
              <div className="text-slate-500 text-xs flex items-center justify-center gap-2 md:gap-1">
                <a href="/terms" className="hover:text-[#c9a227] transition-colors">Terms &amp; Conditions</a>
                <span className="text-slate-600">|</span>
                <a href="/privacy" className="hover:text-[#c9a227] transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
