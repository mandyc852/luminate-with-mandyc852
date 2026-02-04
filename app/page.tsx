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
              <a href="#the-program" onClick={(e) => { e.preventDefault(); scrollToSection("#the-program") }} className="text-sm font-medium text-slate-600 hover:text-[#1a2a3a] transition-colors uppercase tracking-wide">
                The Program
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
              <a href="#the-program" onClick={(e) => { e.preventDefault(); scrollToSection("#the-program") }} className="block text-base text-slate-600 hover:text-[#1a2a3a] py-2">The Program</a>
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
          <div className="absolute left-0 top-0 bottom-0 w-[120px] md:w-[200px] bg-gradient-to-r from-[#1a2a3a] via-[#1a2a3a]/60 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 w-full py-12">
          <div className="max-w-xl">
            <p className="text-[#c9a227] text-sm font-medium tracking-wider uppercase mb-4">
              IPO Advisory · 10+ Years · 60+ Transactions · HK Type 6 Licensed
            </p>
            
            <h1 className="gradient-text-hero text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-[1.15] font-normal mb-5">
              Get Your Company — and Yourself — Ready to Go Public
            </h1>

            <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed mb-6 max-w-lg">
              The 90-Day IPO Readiness Intensive for founders who are done preparing in isolation and ready to move with a trusted advisor who&apos;s guided 60+ transactions to completion.
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
                href="#the-program"
                onClick={(e) => { e.preventDefault(); scrollToSection("#the-program") }}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border-2 border-white/80 text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-white/10 rounded-sm uppercase"
              >
                See What&apos;s Inside
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
            Most Founders Who Stumble Before IPO Don&apos;t Have a Business Problem
          </h2>

          <div className="slide-up space-y-5 text-slate-600 text-[15px] leading-[1.8] font-light">
            <p>
              After 10 years and 60+ transactions, I&apos;ve watched it happen again and again. A founder builds a strong business — the revenue is there, the market is there, the opportunity is real. But when the pressure of going public hits, something breaks.
            </p>
            <p>
              Reactive decisions under pressure. Self-sabotage at the worst possible moment. A nervous system overwhelmed by complexity that no financial model accounts for.
            </p>
            <p>
              The founders who succeeded? They didn&apos;t just have the right numbers. They had grown into the leader the process demanded. They could hold the complexity. They made clean, confident decisions when everything was on the line.
            </p>
            <p className="text-[#1a2a3a] font-normal">
              That&apos;s why I built a program that prepares both the business and the founder — because that&apos;s what actually determines the outcome.
            </p>
          </div>
        </div>
      </section>

      {/* THE PROGRAM */}
      <section id="the-program" className="py-20 md:py-28 px-6 bg-[#f8f7f4]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase text-center mb-3">
            The Flagship Program
          </p>
          <h2 className="text-3xl md:text-4xl mb-4 text-center font-normal" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
            The 90-Day IPO Readiness Intensive
          </h2>
          <p className="text-center text-slate-600 font-light mb-12 max-w-3xl mx-auto">
            In 90 days, you&apos;ll know exactly where your company stands, what needs to happen before you list, and whether you&apos;re ready to lead through it. No guesswork. No wasted time.
          </p>

          <div className="grid md:grid-cols-2 gap-8 stagger-parent">
            <div className="stagger-item p-8 rounded-sm card-hover-navy flex flex-col">
              <div className="w-11 h-11 mx-auto rounded-full bg-gradient-to-br from-[#2d4156] to-[#1a2a3a] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18M7 13v4m4-10v10m4-6v6" />
                </svg>
              </div>
              <h3 className="text-xl font-normal text-[#1a2a3a] mb-4 text-center">The Business Readiness Work</h3>
              <ul className="space-y-3 text-slate-600 font-light text-sm">
                <li className="flex gap-3"><span className="text-[#c9a227] font-medium shrink-0">→</span> Corporate structure and compliance audit</li>
                <li className="flex gap-3"><span className="text-[#c9a227] font-medium shrink-0">→</span> Financial readiness assessment</li>
                <li className="flex gap-3"><span className="text-[#c9a227] font-medium shrink-0">→</span> Market and exchange strategy (NASDAQ, HKEX, or both)</li>
                <li className="flex gap-3"><span className="text-[#c9a227] font-medium shrink-0">→</span> Regulatory pathway and timeline</li>
                <li className="flex gap-3"><span className="text-[#c9a227] font-medium shrink-0">→</span> Investor story development</li>
                <li className="flex gap-3"><span className="text-[#c9a227] font-medium shrink-0">→</span> Gap analysis with clear action steps</li>
              </ul>
            </div>

            <div className="stagger-item p-8 rounded-sm card-hover-gold flex flex-col">
              <div className="w-11 h-11 mx-auto rounded-full bg-gradient-to-br from-[#c9a227] to-[#a68a1f] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-normal text-[#1a2a3a] mb-4 text-center">The Leadership Transformation Work</h3>
              <ul className="space-y-3 text-slate-600 font-light text-sm">
                <li className="flex gap-3"><span className="text-[#c9a227] font-medium shrink-0">→</span> Founder-to-CEO identity shift</li>
                <li className="flex gap-3"><span className="text-[#c9a227] font-medium shrink-0">→</span> Decision-making under high-stakes pressure</li>
                <li className="flex gap-3"><span className="text-[#c9a227] font-medium shrink-0">→</span> Nervous system regulation for complexity</li>
                <li className="flex gap-3"><span className="text-[#c9a227] font-medium shrink-0">→</span> Identifying self-sabotage patterns before they surface</li>
                <li className="flex gap-3"><span className="text-[#c9a227] font-medium shrink-0">→</span> Embodying the leader your company needs for the next stage</li>
                <li className="flex gap-3"><span className="text-[#c9a227] font-medium shrink-0">→</span> Vision alignment — so the IPO serves your life, not the other way around</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 bg-[#1a2a3a] rounded-sm p-6 md:p-7">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#c9a227] mb-2">Duration</p>
                <p className="text-white/90 font-light">90 Days</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#c9a227] mb-2">Investment</p>
                <p className="text-white/90 font-light">$25K–$50K</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#c9a227] mb-2">Includes</p>
                <p className="text-white/90 font-light">6× private sessions + ongoing support</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#c9a227] mb-2">Proceed to IPO?</p>
                <p className="text-white/90 font-light">Fee credited toward mandate</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="https://tidycal.com/mandyc852/30-minute-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-3.5 rounded-sm shadow-lg uppercase tracking-wide text-sm btn-gold-animated"
            >
              Book Your Strategy Call
            </a>
            <p className="text-slate-500 font-light text-sm mt-4 text-center">
              A 30-minute conversation to explore where your company stands and what the path forward looks like. No pressure, no pitch.
            </p>
          </div>

          {/* Fee credit + standalone value messaging */}
          <div className="mt-6 bg-[#f8f7f4] border border-slate-200/60 rounded-sm p-6 md:p-7">
            <p className="text-slate-600 text-sm leading-relaxed font-light">
              <strong className="text-[#1a2a3a] font-medium">If you proceed to a full IPO mandate,</strong> your Intensive fee is credited toward professional fees — including legal, audit, and sponsor coordination led by our team. You&apos;re not paying twice; you&apos;re starting the journey and having it count.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed font-light mt-3">
              And if you decide not to list? The corporate structure, compliance framework, and financial architecture we build together is directly valuable for M&amp;A, strategic fundraising, or simply running a better-governed company. Nothing is wasted.
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
              <strong className="text-[#1a2a3a] font-medium">Founders preparing for NASDAQ or HKEX listing in the next 12–36 months</strong> — who want a clear, honest assessment of what needs to happen before they file, not a sales pitch from someone trying to win the mandate.
            </p>
            <p className="stagger-item text-base leading-[1.8] text-slate-600 font-light relative pl-8">
              <span className="absolute left-0 text-[#c9a227] text-xl font-bold">→</span>
              <strong className="text-[#1a2a3a] font-medium">Self-made founders who built something real from scratch</strong> — and know the next stage demands more of them as a leader, not just better financials. Capital markets might feel far from where you started, but the ambition is there.
            </p>
            <p className="stagger-item text-base leading-[1.8] text-slate-600 font-light relative pl-8">
              <span className="absolute left-0 text-[#c9a227] text-xl font-bold">→</span>
              <strong className="text-[#1a2a3a] font-medium">Companies with $5M+ revenue considering a capital markets milestone</strong> — restructuring, strategic raise, or IPO — who need a cross-border advisor with deep experience in Greater China, Southeast Asia, and the Middle East.
            </p>
            <p className="stagger-item text-base leading-[1.8] text-slate-600 font-light relative pl-8">
              <span className="absolute left-0 text-[#c9a227] text-xl font-bold">→</span>
              <strong className="text-[#1a2a3a] font-medium">Founders who want to test the water before committing to a full mandate</strong> — the Intensive gives you a clear-eyed assessment and a ready-to-execute plan. If you move forward to listing, your fee is credited toward the professional costs. If you don&apos;t, you still walk away with a structure that serves you.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — 3 Phases */}
      <section id="how-it-works" className="py-20 md:py-28 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="fade-in">
            <h2 className="text-3xl md:text-4xl mb-3 text-center font-normal">
              How the 90 Days Work
            </h2>
            <p className="text-center text-slate-500 font-light mb-10 max-w-2xl mx-auto">
              Three phases. Clear milestones. You&apos;ll know exactly where you are at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 stagger-parent">
            <div className="stagger-item bg-[#f8f7f4] rounded-sm p-8 border border-slate-200/60 hover:border-[#a68a1f]/40 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 flex flex-col">
              <p className="text-[#a68a1f] text-xs font-medium tracking-[0.2em] uppercase mb-3">Days 1–30</p>
              <h3 className="text-2xl font-normal text-[#1a2a3a] mb-4" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                Diagnose
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light mb-6 flex-grow">
                Full business readiness audit. Corporate structure, financials, compliance, governance — everything gets assessed against the listing requirements for your target exchange. At the same time, we identify where you as a leader are strong and where the gaps are.
              </p>
              <p className="text-slate-400 text-xs font-light italic">
                Deliverable: A clear picture of where your company stands and an honest assessment of what needs to change.
              </p>
            </div>

            <div className="stagger-item bg-[#f8f7f4] rounded-sm p-8 border border-slate-200/60 hover:border-[#a68a1f]/40 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 flex flex-col">
              <p className="text-[#a68a1f] text-xs font-medium tracking-[0.2em] uppercase mb-3">Days 31–60</p>
              <h3 className="text-2xl font-normal text-[#1a2a3a] mb-4" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                Build
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light mb-6 flex-grow">
                Strategic roadmap development. Regulatory pathway, investor narrative, financial restructuring plan, and timeline. We also work on the leadership capacity you need — how you make decisions under pressure, how you hold complexity, how you show up in the room.
              </p>
              <p className="text-slate-400 text-xs font-light italic">
                Deliverable: A 12–24 month execution plan and the confidence to lead it.
              </p>
            </div>

            <div className="stagger-item bg-[#f8f7f4] rounded-sm p-8 border border-slate-200/60 hover:border-[#a68a1f]/40 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 flex flex-col">
              <p className="text-[#a68a1f] text-xs font-medium tracking-[0.2em] uppercase mb-3">Days 61–90</p>
              <h3 className="text-2xl font-normal text-[#1a2a3a] mb-4" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                Activate
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light mb-6 flex-grow">
                Put it into motion. Refine your investor story, pressure-test your readiness, prepare for the conversations that matter — with banks, sponsors, regulators. This is where preparation meets execution.
              </p>
              <p className="text-slate-400 text-xs font-light italic">
                Deliverable: A company and a founder ready to begin the IPO process with clarity and conviction.
              </p>
            </div>
          </div>

          <div className="mt-12">
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
                  I&apos;m a corporate finance advisor with 10+ years of experience and 60+ completed transactions across Hong Kong, NASDAQ, and global markets. I hold a Type 6 Responsible Officer license in Hong Kong.
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

      {/* TOOLS — 2-card row */}
      <section className="py-16 md:py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-5 stagger-parent">

            {/* Card 1: ExitPro */}
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

            {/* Card 2: Free Audio */}
            <div className="stagger-item p-6 rounded-sm card-hover-gold flex flex-col">
              <div className="w-11 h-11 mx-auto rounded-full bg-gradient-to-br from-[#c9a227] to-[#a68a1f] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-normal text-[#1a2a3a] mb-2 text-center">The 5-Minute Founder&apos;s Reset</h3>
              <p className="text-sm text-slate-600 font-light mb-5 text-center flex-grow">
                A neuroscience-backed daily audio for founders who operate under pressure. Reset your nervous system before high-stakes decisions.
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
            Ready to Get IPO-Ready in 90 Days?
          </h2>
          <p className="text-slate-300 font-light mb-6 text-base">
            A 30-minute strategy call to discuss where your company stands, what needs to happen, and whether the IPO Readiness Intensive is the right next step for you.
          </p>
          <a 
            href="https://tidycal.com/mandyc852/30-minute-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-sm shadow-lg uppercase tracking-wide text-sm btn-gold-animated"
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
