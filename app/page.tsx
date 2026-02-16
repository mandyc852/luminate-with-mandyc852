"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Cormorant_Garamond, Poppins } from "next/font/google"

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

export default function LuminatePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showFloatingButton, setShowFloatingButton] = useState(false)

  // Scroll listener for floating button
  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingButton(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: [0, 0.15, 0.3],
      rootMargin: "0px 0px -60px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    const observeElements = () => {
      const selectors = [".fade-in", ".slide-up", ".slide-in-left", ".slide-in-right", ".stagger-parent"]
      selectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector)
        elements.forEach((el) => {
          const rect = el.getBoundingClientRect()
          const isInViewport = rect.top < window.innerHeight + 200 && rect.bottom > -200
          if (isInViewport && !el.classList.contains("animate-in")) {
            el.classList.add("animate-in")
          } else if (!el.classList.contains("animate-in")) {
            observer.observe(el)
          }
        })
      })
    }

    observeElements()
    const raf = requestAnimationFrame(() => {
      observeElements()
    })

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [])

  // Smooth scroll helper
  const scrollToSection = (selector: string) => {
    const element = document.querySelector(selector)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className={`${cormorantGaramond.variable} ${poppins.variable} min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50/80`}>
      <style jsx global>{`
        :root {
          /* Professional Navy + Gold Palette */
          --navy-deep: #1a2a3a;
          --navy-medium: #2d4156;
          --navy-light: #3d5a73;
          --gold-primary: #c9a227;
          --gold-light: #d4b84a;
          --gold-dark: #a68a1f;
          --cream: #fafaf9;
          --charcoal: #1c1917;
          --text-primary: #3d4f5f;
          --text-secondary: #5a6d7d;
        }

        body {
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, rgba(248, 250, 252, 0.8) 100%);
          color: var(--text-primary);
          padding-top: 80px;
        }

        h1, h2, h3 {
          font-family: var(--font-cormorant-garamond), serif;
          font-weight: 400;
          color: var(--navy-deep);
          letter-spacing: -0.02em;
        }

        p, label, input, button {
          font-family: var(--font-poppins), sans-serif;
        }

        /* Hero gradient text - Gold on dark */
        .gradient-text-hero {
          background: linear-gradient(135deg, #FFFFFF 0%, #f5e6b3 40%, #c9a227 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* CTA title gradient - Gold on dark background */
        .cta-title-gradient {
          background: linear-gradient(135deg, #d4b84a 0%, #c9a227 50%, #f5e6b3 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ============================================
           ANIMATED GRADIENT BUTTONS
           ============================================ */

        /* Gold button with animated shimmer */
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

        /* Navy button with gradient + animated shimmer */
        .btn-navy-animated {
          position: relative;
          background: linear-gradient(135deg, #1a2a3a 0%, #2d4156 25%, #3d5a73 50%, #2d4156 75%, #1a2a3a 100%);
          background-size: 200% 200%;
          color: #ffffff;
          font-weight: 500;
          box-shadow: 
            0 4px 14px rgba(26, 42, 58, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
        }
        .btn-navy-animated:hover {
          transform: translateY(-2px);
          box-shadow: 
            0 8px 25px rgba(26, 42, 58, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          animation: shimmerNavy 1.5s ease infinite;
        }

        @keyframes shimmerNavy {
          0% { background-position: 200% 0%; }
          100% { background-position: -200% 0%; }
        }

        /* Animation Keyframes */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Animation Classes */
        .fade-in,
        .slide-up,
        .slide-in-left,
        .slide-in-right {
          opacity: 0;
          visibility: hidden;
          will-change: transform, opacity;
        }

        .fade-in.animate-in {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          visibility: visible !important;
        }

        .slide-up.animate-in {
          animation: slideUp 0.9s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          visibility: visible !important;
        }

        .slide-in-left.animate-in {
          animation: slideInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          visibility: visible !important;
        }

        .slide-in-right.animate-in {
          animation: slideInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          visibility: visible !important;
        }

        /* Stagger animations for children */
        .stagger-parent.animate-in .stagger-item:nth-child(1) {
          animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.1s;
        }
        .stagger-parent.animate-in .stagger-item:nth-child(2) {
          animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.25s;
        }
        .stagger-parent.animate-in .stagger-item:nth-child(3) {
          animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.4s;
        }
        .stagger-parent.animate-in .stagger-item:nth-child(4) {
          animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.55s;
        }
        .stagger-parent.animate-in .stagger-item:nth-child(5) {
          animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.7s;
        }
        .stagger-parent.animate-in .stagger-item:nth-child(6) {
          animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.85s;
        }

        .stagger-item {
          opacity: 0;
          visibility: hidden;
          will-change: transform, opacity;
        }

        .stagger-parent.animate-in .stagger-item {
          visibility: visible !important;
          opacity: 1 !important;
        }

        /* Card with GOLD theme on hover */
        .card-hover-gold {
          position: relative;
          background: #ffffff;
          border: 2px solid #e2e8f0;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1),
                      background 0.35s ease,
                      border-color 0.35s ease;
          cursor: pointer;
        }

        .card-hover-gold:hover {
          transform: translateY(-14px) scale(1.02);
          background: linear-gradient(135deg, #fdfcf7 0%, #f8f4e8 100%);
          border-color: #c9a227;
          box-shadow:
            0 24px 48px rgba(201, 162, 39, 0.2),
            0 12px 24px rgba(26, 42, 58, 0.1);
        }

        /* Card with NAVY theme on hover */
        .card-hover-navy {
          position: relative;
          background: #ffffff;
          border: 2px solid #e2e8f0;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1),
                      background 0.35s ease,
                      border-color 0.35s ease;
          cursor: pointer;
        }

        .card-hover-navy:hover {
          transform: translateY(-14px) scale(1.02);
          background: linear-gradient(135deg, #f5f7f9 0%, #eef2f5 100%);
          border-color: #1a2a3a;
          box-shadow:
            0 24px 48px rgba(26, 42, 58, 0.2),
            0 12px 24px rgba(26, 42, 58, 0.12);
        }

        /* Circular photo — About section gold ring */
        .circular-photo-premium {
          position: relative;
          box-shadow:
            0 20px 60px rgba(26, 42, 58, 0.2),
            0 8px 20px rgba(26, 42, 58, 0.15),
            0 0 0 6px #ffffff,
            0 0 0 8px rgba(201, 162, 39, 0.4);
        }

        /* Floating CTA */
        .floating-cta {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 1000;
          animation: pulseGlow 2.5s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(201, 162, 39, 0.4), 0 0 40px rgba(201, 162, 39, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(201, 162, 39, 0.6), 0 0 60px rgba(201, 162, 39, 0.3);
          }
        }

        @media (max-width: 768px) {
          .floating-cta { bottom: 16px; right: 16px; }
          .desktop-nav { display: none; }
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="hover:opacity-90 transition-opacity">
              <div
                className="flex-shrink-0"
                style={{
                  width: 240,
                  height: 80,
                  background: "linear-gradient(to right, #c9a227, #d4b84a, #1a2a3a)",
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
            </a>

            {/* Desktop Nav */}
            <nav className="desktop-nav hidden md:flex items-center space-x-8">
              <a href="#what-i-do" onClick={(e) => { e.preventDefault(); scrollToSection("#what-i-do") }} className="text-sm font-medium text-slate-600 hover:text-[#1a2a3a] transition-colors uppercase tracking-wide">
                What I Do
              </a>
              <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollToSection("#how-it-works") }} className="text-sm font-medium text-slate-600 hover:text-[#1a2a3a] transition-colors uppercase tracking-wide">
                How It Works
              </a>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("#about") }} className="text-sm font-medium text-slate-600 hover:text-[#1a2a3a] transition-colors uppercase tracking-wide">
                About
              </a>
              <a href="https://www.youtube.com/@MandyC852" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-600 hover:text-[#1a2a3a] transition-colors uppercase tracking-wide">
                YouTube
              </a>
              <a 
                href="https://tidycal.com/mandyc852/30-minute-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-sm uppercase tracking-wide text-sm btn-gold-animated"
              >
                Book a Call
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-slate-100 rounded transition-colors"
            >
              <svg className="w-6 h-6 text-[#1a2a3a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
            <nav className="px-6 py-4 space-y-3">
              <a href="#what-i-do" onClick={(e) => { e.preventDefault(); scrollToSection("#what-i-do") }} className="block text-base text-slate-600 hover:text-[#1a2a3a] py-2">What I Do</a>
              <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollToSection("#how-it-works") }} className="block text-base text-slate-600 hover:text-[#1a2a3a] py-2">How It Works</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("#about") }} className="block text-base text-slate-600 hover:text-[#1a2a3a] py-2">About</a>
              <a href="https://www.youtube.com/@MandyC852" target="_blank" rel="noopener noreferrer" className="block text-base text-slate-600 hover:text-[#1a2a3a] py-2">YouTube</a>
              <a href="https://tidycal.com/mandyc852/30-minute-meeting" target="_blank" rel="noopener noreferrer" className="block text-center px-6 py-3 rounded-sm mt-4 uppercase btn-gold-animated">
                Book a Call
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative w-full min-h-[540px] md:min-h-[620px] flex items-center overflow-hidden bg-[#1a2a3a]">
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-[47%] z-0">
          <Image
            src="/mandyc.jpg"
            alt="Mandy Cheung"
            fill
            className="object-cover"
            style={{ objectPosition: '38% 52%' }}
            priority
            quality={100}
          />
          {/* Desktop: left-edge gradient for text/image split */}
          <div className="absolute left-0 top-0 bottom-0 w-[120px] md:w-[200px] bg-gradient-to-r from-[#1a2a3a] via-[#1a2a3a]/60 to-transparent pointer-events-none" />
          {/* Mobile only: full dark overlay for text legibility */}
          <div className="absolute inset-0 bg-[#1a2a3a]/60 md:hidden pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 w-full py-12">
          <div className="max-w-xl">
            <p className="text-[#c9a227] text-sm font-medium tracking-wider uppercase mb-4">
              Capital Markets Advisory · 10+ Years
              <br />
              60+ Transactions · Hong Kong Type 6 Licensed
            </p>
            
            <h1 className="gradient-text-hero text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-[1.15] font-normal mb-5">
              Should You Take Your Company Public?
            </h1>

            <p className="text-base md:text-xl text-white/90 font-light leading-relaxed mb-6 max-w-lg">
              Most founders assume listing isn&apos;t for them. They&apos;re often wrong. I help you find out if it&apos;s right for where your business is now — and walk with you from restructuring to listing day.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="https://tidycal.com/mandyc852/30-minute-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-sm shadow-lg uppercase tracking-wide text-sm btn-gold-animated"
              >
                Book Your Strategy Call
              </a>
              <a 
                href="/guide"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border-2 border-white/80 text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-white/10 rounded-sm uppercase"
              >
                Get the Free Guide
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS BAR - Gold */}
      <section className="bg-gradient-to-r from-[#c9a227] via-[#d4b84a] to-[#c9a227] py-3 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[#1a2a3a] text-sm font-medium tracking-wide">
            Cross-border expertise across Hong Kong, NASDAQ &amp; global markets · Specialist in growth-stage companies &amp; self-made founders
          </p>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="slide-up text-3xl md:text-4xl mb-10 text-center font-normal" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
            Most Founders Who Dismiss Going Public Are Making That Decision Based on Assumptions That Aren&apos;t Accurate
          </h2>

          <div className="slide-up space-y-5 text-slate-600 text-[15px] leading-[1.8] font-light">
            <p>
              They assume their company is too small. They assume it costs more than it does. They assume the whole company has to be listed. Most of the time, they&apos;re wrong on all three counts.
            </p>
            <p>
              The US and Hong Kong are the world&apos;s top two IPO markets — and the entry points are more accessible than most founders realize. NASDAQ&apos;s Capital Market tier requires approximately US$750K in net income. That&apos;s a single profitable business unit, not a billion-dollar enterprise.
            </p>
            <p>
              What most founders don&apos;t know: you don&apos;t have to list your entire company. A carve-out takes one business unit and structures it as a standalone listing vehicle. A roll-up consolidates multiple smaller businesses into one. Both strategies change who qualifies — and how.
            </p>
            <p className="text-[#1a2a3a] font-normal">
              The question isn&apos;t whether listing is good or bad. It&apos;s whether it&apos;s right for where your business is now and where you want it to go. That&apos;s what the strategy call is for.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section id="what-i-do" className="py-20 md:py-28 px-6 bg-[#f8f7f4]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase text-center mb-3">
            Advisory Services
          </p>
          <h2 className="text-3xl md:text-4xl mb-4 text-center font-normal" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
            End-to-End IPO Advisory
          </h2>
          <p className="text-center text-slate-600 font-light mb-12 max-w-3xl mx-auto">
            From corporate restructuring through to listing day. One advisor. Full scope. Milestone-based fees aligned with your success.
          </p>

          <div className="grid md:grid-cols-3 gap-6 stagger-parent">
            <div className="stagger-item p-8 rounded-sm card-hover-navy flex flex-col">
              <div className="w-11 h-11 mx-auto rounded-full bg-gradient-to-br from-[#2d4156] to-[#1a2a3a] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-normal text-[#1a2a3a] mb-3 text-center">Listing Strategy</h3>
              <p className="text-slate-600 font-light text-sm text-center flex-grow">
                Full listing, carve-out, or roll-up — identifying the right path based on your business structure, financials, and goals.
              </p>
            </div>

            <div className="stagger-item p-8 rounded-sm card-hover-navy flex flex-col">
              <div className="w-11 h-11 mx-auto rounded-full bg-gradient-to-br from-[#2d4156] to-[#1a2a3a] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-normal text-[#1a2a3a] mb-3 text-center">Corporate Restructuring</h3>
              <p className="text-slate-600 font-light text-sm text-center flex-grow">
                Building the shareholding structure, deciding what stays in the parent vs. the listing vehicle, and ensuring regulatory compliance across jurisdictions.
              </p>
            </div>

            <div className="stagger-item p-8 rounded-sm card-hover-navy flex flex-col">
              <div className="w-11 h-11 mx-auto rounded-full bg-gradient-to-br from-[#2d4156] to-[#1a2a3a] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-normal text-[#1a2a3a] mb-3 text-center">Financial Engineering</h3>
              <p className="text-slate-600 font-light text-sm text-center flex-grow">
                Ensuring the carved-out or consolidated entity meets target exchange financial thresholds — audit-ready, compliant, and positioned for approval.
              </p>
            </div>

            <div className="stagger-item p-8 rounded-sm card-hover-navy flex flex-col">
              <div className="w-11 h-11 mx-auto rounded-full bg-gradient-to-br from-[#2d4156] to-[#1a2a3a] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-lg font-normal text-[#1a2a3a] mb-3 text-center">Investable Narrative</h3>
              <p className="text-slate-600 font-light text-sm text-center flex-grow">
                Making the business story compelling to public market investors. The &quot;sexy factor&quot; that goes beyond meeting minimum requirements.
              </p>
            </div>

            <div className="stagger-item p-8 rounded-sm card-hover-navy flex flex-col">
              <div className="w-11 h-11 mx-auto rounded-full bg-gradient-to-br from-[#2d4156] to-[#1a2a3a] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-normal text-[#1a2a3a] mb-3 text-center">Investor Sourcing</h3>
              <p className="text-slate-600 font-light text-sm text-center flex-grow">
                For founders who need it: sourcing pre-IPO and listing investors through relationships built over a decade of cross-border deal work.
              </p>
            </div>

            <div className="stagger-item p-8 rounded-sm card-hover-navy flex flex-col">
              <div className="w-11 h-11 mx-auto rounded-full bg-gradient-to-br from-[#2d4156] to-[#1a2a3a] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-normal text-[#1a2a3a] mb-3 text-center">Professional Party Coordination</h3>
              <p className="text-slate-600 font-light text-sm text-center flex-grow">
                Sourcing and managing the full team: lawyers, auditors, sponsors, underwriters. One point of coordination through to listing.
              </p>
            </div>
          </div>

          <div className="mt-10 bg-[#1a2a3a] rounded-sm p-6 md:p-7">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#c9a227] mb-2">Signing</p>
                <p className="text-white/90 font-light">$50K</p>
                <p className="text-white/70 text-xs font-light mt-1">Upon signing the advisory mandate</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#c9a227] mb-2">Post-Restructuring</p>
                <p className="text-white/90 font-light">$50K</p>
                <p className="text-white/70 text-xs font-light mt-1">After corporate restructuring is complete</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#c9a227] mb-2">Further Milestones</p>
                <p className="text-white/90 font-light">Based on scope</p>
                <p className="text-white/70 text-xs font-light mt-1">Tied to filing and listing milestones + equity</p>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <a
              href="https://tidycal.com/mandyc852/30-minute-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-3.5 rounded-sm shadow-lg uppercase tracking-wide text-sm btn-gold-animated"
            >
              Book Your Strategy Call
            </a>
            <p className="text-slate-500 font-light text-sm mt-4 text-center">
              A 30-minute conversation to discuss your business, your numbers, and whether a listing path makes sense. No pitch. No pressure. Just clarity.
            </p>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-10 text-center font-normal" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
            Who This Is For
          </h2>
          <div className="space-y-5 stagger-parent">
            <p className="stagger-item text-base leading-[1.8] text-slate-600 font-light relative pl-8">
              <span className="absolute left-0 text-[#c9a227] text-xl font-bold">→</span>
              <strong className="text-[#1a2a3a] font-medium">Founder-operators with profitable businesses ($2M+ net profit)</strong> — You built this yourself. No silver spoon, no corporate backing. Capital markets might feel far from where you started, but the ambition is there — and the numbers might be closer to qualifying than you think.
            </p>
            <p className="stagger-item text-base leading-[1.8] text-slate-600 font-light relative pl-8">
              <span className="absolute left-0 text-[#c9a227] text-xl font-bold">→</span>
              <strong className="text-[#1a2a3a] font-medium">Self-made founders exploring whether listing is right</strong> — You haven&apos;t decided yet. You&apos;re exploring. You want an honest conversation about what&apos;s possible, not a sales pitch from someone who needs your mandate fee.
            </p>
            <p className="stagger-item text-base leading-[1.8] text-slate-600 font-light relative pl-8">
              <span className="absolute left-0 text-[#c9a227] text-xl font-bold">→</span>
              <strong className="text-[#1a2a3a] font-medium">Companies considering NASDAQ or HKEX listing in the next 12–36 months</strong> — You&apos;re thinking ahead, not scrambling. The founders who engage an advisor early — before they think they&apos;re ready — almost always have a smoother, faster, and less expensive process.
            </p>
            <p className="stagger-item text-base leading-[1.8] text-slate-600 font-light relative pl-8">
              <span className="absolute left-0 text-[#c9a227] text-xl font-bold">→</span>
              <strong className="text-[#1a2a3a] font-medium">Businesses that may qualify through a carve-out or roll-up</strong> — Your parent company might seem too small for an IPO. But a single profitable business unit generating $750K+ in net income could qualify on its own. That&apos;s the conversation most founders have never had.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 md:py-28 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="fade-in">
            <h2 className="text-3xl md:text-4xl mb-3 text-center font-normal">
              How It Works
            </h2>
            <p className="text-center text-slate-500 font-light mb-10 max-w-2xl mx-auto">
              Two conversations. Then a decision. No elaborate funnel. No paid diagnostic step.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 stagger-parent">
            <div className="stagger-item bg-[#f8f7f4] rounded-sm p-8 border border-slate-200/60 hover:border-[#a68a1f]/40 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 flex flex-col">
              <p className="text-[#a68a1f] text-xs font-medium tracking-[0.2em] uppercase mb-3">Step 01</p>
              <h3 className="text-2xl font-normal text-[#1a2a3a] mb-4" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                Strategy Call
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light mb-6 flex-grow">
                A 30-minute conversation. You talk about your business. I listen, ask questions, and give you an honest initial read on whether there&apos;s a listing opportunity — and which structuring approach might work. If the carve-out concept is relevant, this is usually where the &quot;aha moment&quot; happens. Free. No obligation.
              </p>
              <p className="text-slate-400 text-xs font-light italic">
                Outcome: Clarity on whether it&apos;s worth exploring further.
              </p>
            </div>

            <div className="stagger-item bg-[#f8f7f4] rounded-sm p-8 border border-slate-200/60 hover:border-[#a68a1f]/40 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 flex flex-col">
              <p className="text-[#a68a1f] text-xs font-medium tracking-[0.2em] uppercase mb-3">Step 02</p>
              <h3 className="text-2xl font-normal text-[#1a2a3a] mb-4" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                Assessment Call
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light mb-6 flex-grow">
                A deeper conversation about your business structure, financials, and potential listing candidates. I lay out the full cost — my fees plus lawyers, auditors, and sponsors — so you know exactly what you&apos;re signing up for. By the end, both sides know whether this is a real engagement.
              </p>
              <p className="text-slate-400 text-xs font-light italic">
                Outcome: A clear-eyed view of what&apos;s possible and what needs to happen first.
              </p>
            </div>

            <div className="stagger-item bg-[#f8f7f4] rounded-sm p-8 border border-slate-200/60 hover:border-[#a68a1f]/40 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 flex flex-col">
              <p className="text-[#a68a1f] text-xs font-medium tracking-[0.2em] uppercase mb-3">Step 03</p>
              <h3 className="text-2xl font-normal text-[#1a2a3a] mb-4" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                Advisory Mandate
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light mb-6 flex-grow">
                If we&apos;re both aligned, we move forward together. Fees are structured around milestones — you pay as the deal progresses, not all upfront. This means we&apos;re financially aligned: I succeed when you succeed. We&apos;ll agree on scope and terms before anything begins, so there are no surprises.
              </p>
              <p className="text-slate-400 text-xs font-light italic">
                Outcome: Your company on the path to public markets.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <a
              href="https://tidycal.com/mandyc852/30-minute-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-3.5 rounded-sm shadow-lg uppercase tracking-wide text-sm btn-gold-animated"
            >
              Book Your Strategy Call
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION — editorial layout */}
      <section id="about" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-12 md:gap-16 items-center">
            {/* Photo — editorial size */}
            <div className="slide-in-left relative aspect-[4/5] rounded-sm overflow-hidden shadow-lg max-w-[280px] md:max-w-none mx-auto md:mx-0">
              <Image
                src="/IMG_2269.JPG"
                alt="Mandy Cheung"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div className="slide-in-right">
              <h2 className="text-3xl md:text-4xl font-normal text-[#1a2a3a] mb-8" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                About Mandy
              </h2>
              <div className="space-y-5 text-slate-600 text-base leading-relaxed font-light">
                <p>
                  I&apos;m a Hong Kong Type 6 licensed corporate finance advisor. My practice spans HKEX, NASDAQ, and global markets — the kind of cross-border work where regulatory complexity is the norm, not the exception.
                </p>
                <p>
                  Most capital markets advisors serve companies that are already there. The founders who are still building — who started with no financial backing and figured it out as they went — get overlooked. I work with precisely those founders, because I&apos;m one of them.
                </p>
                <p>
                  Over the years, I noticed something the textbooks don&apos;t cover: the founders who stumbled before IPO usually had fine financials. What they didn&apos;t have was the leadership capacity for what came next. That observation changed how I work. I bring deep technical expertise alongside something most advisors don&apos;t — a practitioner&apos;s understanding of what happens to a founder under pressure.
                </p>
                <p className="text-[#1a2a3a] font-normal">
                  Integrity is my core value. I&apos;m in a service industry, and I act like it. The client&apos;s success is the only metric that matters.
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <a
                  href="https://www.youtube.com/@MandyC852"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a2a3a] hover:text-[#c9a227] font-medium text-sm underline decoration-slate-300 hover:decoration-[#c9a227] transition-colors"
                >
                  YouTube
                </a>
                <span className="text-slate-300">·</span>
                <a
                  href="https://www.linkedin.com/in/mandyc852/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a2a3a] hover:text-[#c9a227] font-medium text-sm underline decoration-slate-300 hover:decoration-[#c9a227] transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREE RESOURCES — 3-card row */}
      <section className="py-16 md:py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase text-center mb-3">
            Free Resources
          </p>
          <h2 className="text-3xl md:text-4xl mb-4 text-center font-normal" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
            Tools &amp; Guides for Founders
          </h2>
          <p className="text-center text-slate-600 font-light mb-12 max-w-2xl mx-auto">
            Whether you&apos;re exploring or ready to move — these are built for where you are right now.
          </p>
          <div className="grid md:grid-cols-3 gap-5 stagger-parent">

            {/* Card 1: Guide */}
            <div className="stagger-item p-6 rounded-sm card-hover-gold flex flex-col">
              <div className="w-11 h-11 mx-auto rounded-full bg-gradient-to-br from-[#2d4156] to-[#1a2a3a] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-normal text-[#1a2a3a] mb-2 text-center">Should You Take Your Company Public?</h3>
              <p className="text-sm text-slate-600 font-light mb-5 text-center flex-grow">
                The real listing requirements, what it actually costs, and two structuring strategies most founders have never heard of.
              </p>
              <a
                href="/guide"
                className="inline-flex items-center justify-center w-full px-5 py-3 rounded-sm uppercase tracking-wide text-sm btn-gold-animated"
              >
                Get the Free Guide
              </a>
            </div>

            {/* Card 2: ExitPro */}
            <div className="stagger-item p-6 rounded-sm card-hover-navy flex flex-col">
              <div className="w-11 h-11 mx-auto rounded-full bg-gradient-to-br from-[#2d4156] to-[#1a2a3a] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-normal text-[#1a2a3a] mb-2 text-center">ExitPro — IPO Benchmarking</h3>
              <p className="text-sm text-slate-600 font-light mb-5 text-center flex-grow">
                See how your company compares against successful IPOs. Research benchmarks, explore comparable listings, and assess your readiness.
              </p>
              <a
                href="https://exitproai.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-5 py-3 rounded-sm uppercase tracking-wide text-sm btn-navy-animated"
              >
                Try ExitPro Free
              </a>
            </div>

            {/* Card 3: Founder's Reset */}
            <div className="stagger-item p-6 rounded-sm card-hover-gold flex flex-col">
              <div className="w-11 h-11 mx-auto rounded-full bg-gradient-to-br from-[#c9a227] to-[#a68a1f] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-normal text-[#1a2a3a] mb-2 text-center">The 5-Minute Founder&apos;s Reset</h3>
              <p className="text-sm text-slate-600 font-light mb-5 text-center flex-grow">
                A daily 5-minute audio practice for founders who know that how you show up matters as much as what you do.
              </p>
              <a
                href="/leap"
                className="inline-flex items-center justify-center w-full px-5 py-3 rounded-sm uppercase tracking-wide text-sm btn-gold-animated"
              >
                Get the Free Audio
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-20 px-6 bg-[#1a2a3a]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-normal mb-3 cta-title-gradient">
            Ready to Have the Conversation?
          </h2>
          <p className="text-slate-300 font-light mb-6 text-base">
            A 30-minute strategy call to discuss your business, your numbers, and whether a listing path makes sense for where you are now. No pitch. No pressure. Just clarity.
          </p>
          <a 
            href="https://tidycal.com/mandyc852/30-minute-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="flex md:inline-flex items-center justify-center w-full md:w-auto px-8 py-3.5 rounded-sm shadow-lg uppercase tracking-wide text-sm btn-gold-animated"
          >
            Book Your Strategy Call
          </a>
          <p className="text-slate-400 text-xs mt-5 font-light tracking-wide">
            Type 6 Licensed · Hong Kong · Cross-Border Expertise
          </p>
        </div>
      </section>

      {/* Floating CTA */}
      {showFloatingButton && (
        <a
          href="https://tidycal.com/mandyc852/30-minute-meeting"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-cta px-5 py-3.5 bg-gradient-to-br from-[#c9a227] to-[#a68a1f] text-[#1a2a3a] text-sm font-semibold tracking-wide rounded-full flex items-center gap-2 uppercase"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="hidden sm:inline">Book a Call</span>
        </a>
      )}

      {/* Footer */}
      <footer className="w-full bg-[#0f1a24] border-t border-[#1a2a3a] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-5">
            {/* Social Links */}
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

            {/* Copyright + Links */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-1 text-center" style={{ fontFamily: "var(--font-poppins)" }}>
              <p className="text-slate-500 text-xs leading-relaxed mb-2 md:mb-0">
                © 2026 MandyC. | All Rights Reserved
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
