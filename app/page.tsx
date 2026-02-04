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
                aria-label="Luminate with Mandy C"
              />
            </a>

            {/* Desktop Nav */}
            <nav className="desktop-nav hidden md:flex items-center space-x-8">
              <a href="#how-i-work" onClick={(e) => { e.preventDefault(); scrollToSection("#how-i-work") }} className="text-sm font-medium text-slate-600 hover:text-[#1a2a3a] transition-colors uppercase tracking-wide">
                How I Work
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
              <a href="#how-i-work" onClick={(e) => { e.preventDefault(); scrollToSection("#how-i-work") }} className="block text-base text-slate-600 hover:text-[#1a2a3a] py-2">How I Work</a>
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
              Corporate Finance Advisor · 10+ Years · HK Type 6 Licensed
            </p>
            
            <h1 className="gradient-text-hero text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-[1.15] font-normal mb-5">
              For founders doing<br className="hidden sm:block" />
              <span className="italic">something bigger than them.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed mb-6 max-w-lg">
              Strategic advisory for founders preparing for capital markets — from business structuring to the leadership capacity it takes to get there.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="https://tidycal.com/mandyc852/30-minute-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-sm shadow-lg uppercase tracking-wide text-sm btn-gold-animated"
              >
                Book Advisory Call
              </a>
              <a 
                href="#how-i-work"
                onClick={(e) => { e.preventDefault(); scrollToSection("#how-i-work") }}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border-2 border-white/80 text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-white/10 rounded-sm uppercase"
              >
                Learn How I Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS BAR - Gold */}
      <section className="bg-gradient-to-r from-[#c9a227] via-[#d4b84a] to-[#c9a227] py-3 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[#1a2a3a] text-sm font-medium tracking-wide">
            60+ corporate finance transactions · Cross-border expertise across Hong Kong, NASDAQ &amp; global markets
          </p>
        </div>
      </section>

      {/* WHO I WORK WITH */}
      <section className="py-20 md:py-28 px-6 bg-white slide-up">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-center font-normal">
            Who I Work With
          </h2>
          <div className="space-y-4 stagger-parent">
            <p className="stagger-item text-base leading-[1.8] text-slate-600 font-light relative pl-8">
              <span className="absolute left-0 text-[#c9a227] text-xl font-bold">→</span>
              <strong className="text-[#1a2a3a] font-medium">Founders building toward something big</strong> — who want honest guidance on what it takes to get there, whether that&apos;s raising capital, restructuring, or eventually going public.
            </p>
            <p className="stagger-item text-base leading-[1.8] text-slate-600 font-light relative pl-8">
              <span className="absolute left-0 text-[#c9a227] text-xl font-bold">→</span>
              <strong className="text-[#1a2a3a] font-medium">Companies preparing for capital markets</strong> — who need a Financial Advisor with deep cross-border experience to guide them through the process.
            </p>
            <p className="stagger-item text-base leading-[1.8] text-slate-600 font-light relative pl-8">
              <span className="absolute left-0 text-[#c9a227] text-xl font-bold">→</span>
              <strong className="text-[#1a2a3a] font-medium">Leaders who understand</strong> that scaling a company to its next level isn&apos;t only a financial exercise — it requires becoming someone who can hold that level.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== WHAT I'VE LEARNED ==================== */}
      <section className="py-20 md:py-28 px-6 bg-[#f8f7f4]">
        <div className="max-w-3xl mx-auto">
          <h2 className="slide-up text-3xl md:text-4xl mb-10 text-center font-normal" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
            What I&apos;ve Learned in 10+ Years of<br className="hidden sm:block" /> Corporate Finance
          </h2>

          <div className="slide-up space-y-5 text-slate-600 text-[15px] leading-[1.8] font-light">
            <p>
              Every founder I&apos;ve worked with who successfully took their company through a major milestone — whether that was a restructuring, a capital raise, or a public listing — had one thing in common.
            </p>
            <p>
              It wasn&apos;t just that the numbers were right. It was that <em>they</em> were ready.
            </p>
            <p>
              The ones who stumbled? The financials were often fine. But the founder hadn&apos;t grown into the leader the next stage demanded. They made reactive decisions under pressure. They couldn&apos;t hold the complexity. They second-guessed themselves at the worst moments.
            </p>
            <p className="text-[#1a2a3a] font-normal">
              I don&apos;t just advise on the business. I work with the whole picture — because that&apos;s what actually determines the outcome.
            </p>
          </div>
        </div>
      </section>

      {/* HOW I WORK WITH CLIENTS — 3-tier offers */}
      <section id="how-i-work" className="py-20 md:py-28 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="fade-in">
            <h2 className="text-3xl md:text-4xl mb-3 text-center font-normal">
              How I Work With Clients
            </h2>
            <p className="text-center text-slate-500 font-light mb-10 max-w-2xl mx-auto">
              I meet you where you are. Whether you&apos;re laying the groundwork or ready to execute, here&apos;s how we can work together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 stagger-parent">

            {/* Tier 1: Founder Advisory */}
            <div className="stagger-item bg-[#f8f7f4] rounded-sm p-8 border border-slate-200/60 hover:border-[#a68a1f]/40 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 flex flex-col">
              <p className="text-[#a68a1f] text-xs font-medium tracking-[0.2em] uppercase mb-3">Foundation</p>
              <h3 className="text-2xl font-normal text-[#1a2a3a] mb-4" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                Founder Advisory
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light mb-6 flex-grow">
                I help you clarify your business structure, identify the gaps, and prepare as a leader for what&apos;s next — whether that&apos;s growth, capital, or a major transition.
              </p>
              <p className="text-slate-400 text-xs font-light italic mb-6">
                This is where the inner work meets business strategy.
              </p>
              <a
                href="https://tidycal.com/mandyc852/30-minute-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 rounded-sm uppercase tracking-wide text-sm btn-gold-animated"
              >
                Start Here
              </a>
            </div>

            {/* Tier 2: Strategic Advisory */}
            <div className="stagger-item bg-[#f8f7f4] rounded-sm p-8 border border-slate-200/60 hover:border-[#a68a1f]/40 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 flex flex-col">
              <p className="text-[#a68a1f] text-xs font-medium tracking-[0.2em] uppercase mb-3">Growth</p>
              <h3 className="text-2xl font-normal text-[#1a2a3a] mb-4" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                Strategic Advisory
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light mb-6 flex-grow">
                Business readiness for a capital markets milestone — market selection, financial structuring, regulatory pathway, and timeline. So you&apos;re executing with clarity, not guessing.
              </p>
              <p className="text-slate-400 text-xs font-light italic mb-6">
                Typically 12-24 months before a target milestone.
              </p>
              <a
                href="https://tidycal.com/mandyc852/30-minute-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 rounded-sm uppercase tracking-wide text-sm btn-navy-animated"
              >
                Inquire About Advisory
              </a>
            </div>

            {/* Tier 3: IPO & Capital Markets */}
            <div className="stagger-item bg-[#f8f7f4] rounded-sm p-8 border border-slate-200/60 hover:border-[#a68a1f]/40 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 flex flex-col">
              <p className="text-[#a68a1f] text-xs font-medium tracking-[0.2em] uppercase mb-3">Execution</p>
              <h3 className="text-2xl font-normal text-[#1a2a3a] mb-4" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                IPO &amp; Capital Markets
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light mb-6 flex-grow">
                Your Financial Advisor through the listing process — from preparation through successful IPO. Deep cross-border expertise across Hong Kong, Listing Rules, and NASDAQ.
              </p>
              <p className="text-slate-400 text-xs font-light italic mb-6">
                Full engagement as your appointed Financial Advisor.
              </p>
              <a
                href="https://tidycal.com/mandyc852/30-minute-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 rounded-sm uppercase tracking-wide text-sm btn-gold-animated"
              >
                Discuss Your IPO
              </a>
            </div>
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
                  I&apos;m a corporate finance advisor with 10+ years of experience in capital markets and cross-border transactions. I hold a Type 6 Responsible Officer license in Hong Kong, and I&apos;ve helped guide over 60 deals to completion.
                </p>
                <p>
                  That observation changed how I work. I still bring deep expertise in financial structuring, regulatory pathways, and market strategy. But I also bring an understanding of what it takes for a founder to grow into the leader their company needs — and I don&apos;t see any contradiction between the two.
                </p>
                <p className="text-[#1a2a3a] font-normal">
                  Integrity is my core value. I offer grounded expertise and honest guidance — nothing more, nothing less.
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

      {/* ==================== LEAD MAGNET — FREE AUDIO ==================== */}
      <section className="py-16 md:py-20 px-6 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #faf8f3 0%, #f5f0e6 50%, #faf8f3 100%)" }}>
        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/30 to-transparent" />

        <div className="max-w-2xl mx-auto fade-in">
          {/* Wrapper so gold corners sit outside the card; hover applies to whole area */}
          <div className="group relative p-3">
            {/* Gold corner accents — outside the box; visible by default; hide on hover so only full gold border shows */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#c9a227]/40 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" aria-hidden />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#c9a227]/40 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" aria-hidden />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#c9a227]/40 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" aria-hidden />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#c9a227]/40 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" aria-hidden />

            {/* Card — sharp corners, same shop-box style as Tools cards */}
            <div className="rounded-none card-hover-gold p-8 md:p-10 text-center">
            <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase mb-4">
              Free Audio Guide
            </p>

            <h2 className="text-2xl md:text-3xl font-normal text-[#1a2a3a] mb-4" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
              Before Your Next High-Stakes Decision
            </h2>

            <p className="text-slate-600 font-light text-base leading-relaxed mb-3 max-w-lg mx-auto">
              A 5-minute daily reset designed for founders who operate under pressure. Grounded in neuroscience. No fluff.
            </p>

            <p className="text-slate-400 text-sm font-light mb-8 max-w-md mx-auto">
              Used by founders preparing for capital raises, board presentations, and the moments that define their trajectory.
            </p>

            <a
              href="/leap"
              className="inline-flex items-center justify-center px-10 py-4 rounded-sm uppercase tracking-wide text-sm btn-gold-animated"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
              Get the Free Audio
            </a>
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
              <h3 className="text-lg font-normal text-[#1a2a3a] mb-2 text-center">ExitPro IPO Research</h3>
              <p className="text-sm text-slate-600 font-light mb-5 text-center flex-grow">
                Research IPO benchmarks and compare your metrics against successful listings.
              </p>
              <a
                href="https://exitproai.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-5 py-3 rounded-sm uppercase tracking-wide text-sm btn-navy-animated"
              >
                Try ExitPro
              </a>
            </div>

            {/* Card 2: Book a Call */}
            <div className="stagger-item p-6 rounded-sm card-hover-gold flex flex-col">
              <div className="w-11 h-11 mx-auto rounded-full bg-gradient-to-br from-[#c9a227] to-[#a68a1f] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-normal text-[#1a2a3a] mb-2 text-center">Book an Advisory Call</h3>
              <p className="text-sm text-slate-600 font-light mb-5 text-center flex-grow">
                30-minute conversation to discuss where you are and what you&apos;re working toward.
              </p>
              <a
                href="https://tidycal.com/mandyc852/30-minute-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-5 py-3 rounded-sm uppercase tracking-wide text-sm btn-gold-animated"
              >
                Schedule Call
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-20 px-6 bg-[#1a2a3a]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-normal mb-3 cta-title-gradient">
            Let&apos;s Talk About Where You&apos;re Heading
          </h2>
          <p className="text-slate-300 font-light mb-6 text-base">
            Whether you&apos;re building the foundation or preparing for a defining moment, I&apos;m here to give you honest guidance on what it takes.
          </p>
          <a 
            href="https://tidycal.com/mandyc852/30-minute-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-sm shadow-lg uppercase tracking-wide text-sm btn-gold-animated"
          >
            Book Your Advisory Call
          </a>
          <p className="text-slate-400 text-xs mt-5 font-light tracking-wide">
            Type 6 Licensed · Hong Kong
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
          <span className="hidden sm:inline">Book Call</span>
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
                © 2026 Luminate with Mandy C. | All Rights Reserved
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
