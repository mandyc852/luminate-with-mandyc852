"use client"

import { useState } from "react"
import { BookCallButton } from "./home-interactions"

const TIDYCAL_URL = "https://tidycal.com/mandyc852/30-minute-meeting"
const YOUTUBE_URL = "https://www.youtube.com/@MandyC852"
const LINKEDIN_URL = "https://www.linkedin.com/in/mandyc852/"

const WORK_LINKS = [
  { label: "IPO Advisory", href: "/ipo" },
  { label: "LPF", href: "/fund" },
]

type NavLink = { label: string; href: string }

const logoStyle: React.CSSProperties = {
  width: 220,
  height: 72,
  background: "linear-gradient(to right, #c9a227, #d4b84a, #1a2a3a)",
  WebkitMaskImage: "url(/Logo%202%20black.png)",
  WebkitMaskSize: "contain",
  WebkitMaskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskImage: "url(/Logo%202%20black.png)",
  maskSize: "contain",
  maskRepeat: "no-repeat",
  maskPosition: "center",
}

function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-[#c9a227] hover:text-[#a68a1f] transition-colors">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      </a>
      <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#c9a227] hover:text-[#a68a1f] transition-colors">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
    </div>
  )
}

export function SiteHeader({
  links = [],
  bookHref,
}: {
  links?: NavLink[]
  bookHref?: string
}) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [workOpen, setWorkOpen] = useState(false)

  const bookClasses = "px-6 py-2.5 rounded-none uppercase tracking-wide text-sm btn-gold-animated"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="hover:opacity-90 transition-opacity">
            <div className="flex-shrink-0" style={logoStyle} role="img" aria-label="MandyC." />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-normal text-slate-600 hover:text-[#1a2a3a] transition-colors uppercase tracking-wide">
                {l.label}
              </a>
            ))}

            {/* Work With Me dropdown */}
            <div className="relative" onMouseLeave={() => setWorkOpen(false)}>
              <button
                type="button"
                onClick={() => setWorkOpen((v) => !v)}
                onMouseEnter={() => setWorkOpen(true)}
                className="flex items-center gap-1 text-sm font-normal text-slate-600 hover:text-[#1a2a3a] transition-colors uppercase tracking-wide"
              >
                Work With Me
                <svg className={`w-3.5 h-3.5 transition-transform ${workOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {workOpen && (
                <div className="absolute left-0 top-full pt-3 w-52">
                  <div className="bg-white border border-slate-200 shadow-lg">
                    {WORK_LINKS.map((w) => (
                      <a key={w.href} href={w.href} className="block px-5 py-3 text-sm font-normal text-slate-600 hover:text-[#1a2a3a] hover:bg-slate-50 transition-colors uppercase tracking-wide">
                        {w.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <SocialIcons />
            {bookHref ? (
              <a href={bookHref} target="_blank" rel="noopener noreferrer" className={bookClasses}>
                Book a Call
              </a>
            ) : (
              <BookCallButton className={bookClasses} />
            )}
          </nav>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 hover:bg-slate-100 rounded-none transition-colors"
            aria-label="Menu"
          >
            <svg className="w-6 h-6 text-[#1a2a3a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <nav className="px-6 py-5 flex flex-col items-center gap-3 text-center">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block text-base text-slate-600 hover:text-[#1a2a3a] py-1 uppercase tracking-wide">
                {l.label}
              </a>
            ))}
            <div className="w-full border-t border-slate-100 my-1" />
            <p className="text-xs uppercase tracking-[0.2em] text-[#a68a1f]">Work With Me</p>
            {WORK_LINKS.map((w) => (
              <a key={w.href} href={w.href} onClick={() => setMobileOpen(false)} className="block text-base text-slate-600 hover:text-[#1a2a3a] py-1 uppercase tracking-wide">
                {w.label}
              </a>
            ))}
            <div className="w-full border-t border-slate-100 my-1" />
            <SocialIcons className="justify-center" />
            <div className="w-full max-w-xs">
              {bookHref ? (
                <a href={bookHref} target="_blank" rel="noopener noreferrer" className={`block text-center w-full ${bookClasses}`}>
                  Book a Call
                </a>
              ) : (
                <BookCallButton className={`w-full ${bookClasses}`} />
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
