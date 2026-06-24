import type { Metadata } from "next"
import Image from "next/image"
import { Cormorant_Garamond, Poppins } from "next/font/google"
import { SiteHeader } from "../_components/site-header"
import BeehiivSubscribe from "@/components/BeehiivSubscribe"

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

export const metadata: Metadata = {
  title: "Subscribe | MandyC.",
  description:
    "The fortnightly operator brief — one question to sit with, capital markets signal, no fluff.",
}

export default function SubscribePage() {
  return (
    <div className={`${cormorantGaramond.variable} ${poppins.variable} min-h-screen`}>
      <style>{`
        html { scroll-behavior: smooth; }
        body {
          color: #3d4f5f;
          padding-top: 80px;
        }
        h1, h2, h3 {
          font-family: var(--font-cormorant-garamond), serif;
          font-weight: 400;
          color: #1a2a3a;
          letter-spacing: -0.02em;
        }
        p, a, button, label, input { font-family: var(--font-poppins), sans-serif; }
        .gradient-text-hero {
          background: linear-gradient(135deg, #FFFFFF 0%, #f5e6b3 40%, #c9a227 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <SiteHeader
        links={[
          { label: "About", href: "/#about" },
          { label: "Track Record", href: "/#track-record" },
        ]}
      />

      {/* HERO */}
      <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-20 overflow-hidden bg-[#1a2a3a]">
        <Image
          src="/Hong Kong 1.jpg"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2a3a]/90 via-[#1a2a3a]/85 to-[#1a2a3a]/92 pointer-events-none" />

        <div className="relative z-10 max-w-2xl md:max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-5">
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-2 ring-[#c9a227]/70 ring-offset-4 ring-offset-[#1a2a3a]/80">
              <Image
                src="/IMG_2269.JPG"
                alt="Mandy Cheung"
                fill
                priority
                className="object-cover"
                sizes="96px"
              />
            </div>
          </div>

          <p className="text-[#f5e6b3] text-[11px] font-medium tracking-[0.32em] uppercase mb-6" style={{ textShadow: "0 1px 12px rgba(0,0,0,0.6)" }}>
            <span className="inline-block w-8 h-px bg-[#f5e6b3]/60 align-middle mr-3" />
            MandyC.
            <span className="inline-block w-8 h-px bg-[#f5e6b3]/60 align-middle ml-3" />
          </p>

          <h1 className="gradient-text-hero text-3xl sm:text-4xl md:text-5xl leading-[1.1] font-normal mb-4 tracking-tight" style={{ filter: "drop-shadow(0 2px 18px rgba(0,0,0,0.5))" }}>
            <span className="md:hidden">The Fortnightly<br />Operator Brief.</span>
            <span className="hidden md:inline">The Fortnightly Operator Brief.</span>
          </h1>

          <p className="text-sm md:text-base text-white/90 font-light leading-[1.55] mb-8 max-w-xl mx-auto" style={{ textShadow: "0 1px 16px rgba(0,0,0,0.6)" }}>
            One question, every two weeks. For people who do serious work and want to show up better at it.
          </p>

          <div className="max-w-md md:max-w-[520px] mx-auto">
            <BeehiivSubscribe
              variant="hero"
              buttonText="Subscribe"
              utmCampaign="subscribe_page"
            />
          </div>

          <p className="text-[#f5e6b3]/70 text-[11px] font-medium tracking-[0.22em] uppercase mt-3" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
            Free · Fortnightly · Unsubscribe Anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#0f1a24] border-t border-[#1a2a3a] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-5">
            <div className="flex items-center justify-center gap-6">
              <a href="https://www.youtube.com/@MandyC852" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#c9a227] transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/mandyc852/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#c9a227] transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-1 text-center" style={{ fontFamily: "var(--font-poppins)" }}>
              <p className="text-slate-500 text-xs leading-relaxed mb-2 md:mb-0">© 2026 MandyC. | All Rights Reserved</p>
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
