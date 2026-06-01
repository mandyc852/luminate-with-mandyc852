"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Cormorant_Garamond, Poppins } from "next/font/google"
import { SiteHeader } from "../_components/site-header"

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

export default function IPOServicePage() {
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

        html { scroll-behavior: smooth; }
        body {
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, rgba(248, 250, 252, 0.8) 100%);
          color: var(--text-primary);
          padding-top: 80px;
        }
        .scroll-anchor { scroll-margin-top: 96px; }

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
      <SiteHeader
        links={[
          { label: "What I Do", href: "#what-i-do" },
          { label: "How It Works", href: "#how-it-works" },
          { label: "About", href: "/#about" },
          { label: "Track Record", href: "/#track-record" },
        ]}
        bookHref="https://tidycal.com/mandyc852/30-minute-meeting"
      />

      {/* HERO SECTION */}
      <section className="relative w-full py-16 md:py-24 px-6 overflow-hidden bg-[#1a2a3a]">
        <Image
          src="/Wallstreet.jpg"
          alt="New York Stock Exchange, Wall Street"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2a3a]/80 via-[#1a2a3a]/72 to-[#1a2a3a]/88 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-[#f5e6b3] text-sm font-medium tracking-wider uppercase mb-4" style={{ textShadow: "0 1px 12px rgba(0,0,0,0.6)" }}>
            Capital Markets Advisory · 10+ Years
            <br />
            NASDAQ + HKEX + Global Markets · Type 6 Licensed
          </p>

          <h1 className="gradient-text-hero text-3xl sm:text-4xl md:text-5xl leading-[1.15] font-normal mb-5" style={{ filter: "drop-shadow(0 2px 18px rgba(0,0,0,0.5))" }}>
            Should you take your company public?
          </h1>

          <p className="text-base md:text-xl text-white font-light leading-relaxed mb-7 max-w-2xl mx-auto" style={{ textShadow: "0 1px 16px rgba(0,0,0,0.6)" }}>
            Most founders assume listing isn&apos;t for them. They&apos;re often wrong. I help you find out if it&apos;s right for where your business is now — and walk with you from restructuring to listing day.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-center gap-3">
            <a
              href="https://tidycal.com/mandyc852/30-minute-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap px-8 py-3.5 rounded-none shadow-lg uppercase tracking-wide text-sm btn-gold-animated"
            >
              Book Your Strategy Call
            </a>
            <a
              href="/guide"
              className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap px-8 py-3.5 bg-transparent border-2 border-white/80 text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-white/10 rounded-none uppercase"
            >
              Get the Free Guide
            </a>
          </div>
        </div>
      </section>

      {/* CREDENTIALS BAR - Gold */}
      <section className="bg-gradient-to-r from-[#c9a227] via-[#d4b84a] to-[#c9a227] py-3 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[#1a2a3a] text-sm font-medium tracking-wide">
            SFC Type 6 Licensed · 60+ Transactions · US$200M+ in Deal Value · HKEX &amp; NASDAQ
          </p>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="slide-up text-3xl md:text-4xl mb-10 text-center font-normal" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
            Most founders who dismiss going public are making that decision based on assumptions that aren&apos;t accurate
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
      <section id="what-i-do" className="scroll-anchor py-20 md:py-28 px-6 bg-[#f8f7f4]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase text-center mb-3">
            Advisory Services
          </p>
          <h2 className="text-3xl md:text-4xl mb-4 text-center font-normal" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
            End-to-end IPO advisory
          </h2>
          <p className="text-center text-slate-600 font-light mb-12 max-w-3xl mx-auto">
            From corporate restructuring through to listing day. One advisor. Full scope.
            <br />
            Milestone-based fees aligned with your success.
          </p>

          <div className="grid md:grid-cols-3 gap-6 stagger-parent">
            <div className="stagger-item p-8 rounded-none bg-white border-2 border-slate-200 flex flex-col">
              <div className="w-11 h-11 mx-auto rounded-full bg-gradient-to-br from-[#2d4156] to-[#1a2a3a] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-normal text-[#1a2a3a] mb-3 text-center">Listing strategy</h3>
              <p className="text-slate-600 font-light text-sm text-center flex-grow">
                Full listing, carve-out, or roll-up — identifying the right path based on your business structure, financials, and goals.
              </p>
            </div>

            <div className="stagger-item p-8 rounded-none bg-white border-2 border-slate-200 flex flex-col">
              <div className="w-11 h-11 mx-auto rounded-full bg-gradient-to-br from-[#2d4156] to-[#1a2a3a] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-normal text-[#1a2a3a] mb-3 text-center">Corporate restructuring</h3>
              <p className="text-slate-600 font-light text-sm text-center flex-grow">
                Building the shareholding structure, deciding what stays in the parent vs. the listing vehicle, and ensuring regulatory compliance across jurisdictions.
              </p>
            </div>

            <div className="stagger-item p-8 rounded-none bg-white border-2 border-slate-200 flex flex-col">
              <div className="w-11 h-11 mx-auto rounded-full bg-gradient-to-br from-[#2d4156] to-[#1a2a3a] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-normal text-[#1a2a3a] mb-3 text-center">Financial engineering</h3>
              <p className="text-slate-600 font-light text-sm text-center flex-grow">
                Ensuring the carved-out or consolidated entity meets target exchange financial thresholds — audit-ready, compliant, and positioned for approval.
              </p>
            </div>

            <div className="stagger-item p-8 rounded-none bg-white border-2 border-slate-200 flex flex-col">
              <div className="w-11 h-11 mx-auto rounded-full bg-gradient-to-br from-[#2d4156] to-[#1a2a3a] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-lg font-normal text-[#1a2a3a] mb-3 text-center">Investable narrative</h3>
              <p className="text-slate-600 font-light text-sm text-center flex-grow">
                Making the business story compelling to public market investors. The &quot;sexy factor&quot; that goes beyond meeting minimum requirements.
              </p>
            </div>

            <div className="stagger-item p-8 rounded-none bg-white border-2 border-slate-200 flex flex-col">
              <div className="w-11 h-11 mx-auto rounded-full bg-gradient-to-br from-[#2d4156] to-[#1a2a3a] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-normal text-[#1a2a3a] mb-3 text-center">Investor sourcing</h3>
              <p className="text-slate-600 font-light text-sm text-center flex-grow">
                For founders who need it: sourcing pre-IPO and listing investors through relationships built over a decade of cross-border deal work.
              </p>
            </div>

            <div className="stagger-item p-8 rounded-none bg-white border-2 border-slate-200 flex flex-col">
              <div className="w-11 h-11 mx-auto rounded-full bg-gradient-to-br from-[#2d4156] to-[#1a2a3a] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-normal text-[#1a2a3a] mb-3 text-center">Professional party coordination</h3>
              <p className="text-slate-600 font-light text-sm text-center flex-grow">
                Sourcing and managing the full team: lawyers, auditors, sponsors, underwriters. One point of coordination through to listing.
              </p>
            </div>
          </div>

          <div className="mt-10 bg-[#1a2a3a] rounded-none p-6 md:p-7">
            <p className="text-center text-white/90 font-light max-w-3xl mx-auto">
              Milestone-based fees aligned with deal progression. You pay as the deal moves forward, not upfront. Specific terms discussed during the assessment call.
            </p>
          </div>

          <p className="text-slate-500 font-light text-sm mt-6 text-center max-w-2xl mx-auto">
            A 30-minute conversation to discuss your business, your numbers, and whether a listing path makes sense. No pitch. No pressure. Just clarity.
          </p>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-10 text-center font-normal" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
            Who this is for
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
      <section id="how-it-works" className="scroll-anchor py-20 md:py-28 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="fade-in">
            <h2 className="text-3xl md:text-4xl mb-3 text-center font-normal">
              How it works
            </h2>
            <p className="text-center text-slate-500 font-light mb-10 max-w-2xl mx-auto">
              Two conversations. Then a decision. No elaborate funnel. No paid diagnostic step.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 stagger-parent">
            <div className="stagger-item bg-[#f8f7f4] rounded-none p-8 border border-slate-200/60 flex flex-col">
              <p className="text-[#a68a1f] text-xs font-medium tracking-[0.2em] uppercase mb-3">Step 01</p>
              <h3 className="text-2xl font-normal text-[#1a2a3a] mb-4" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                Strategy call
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light mb-6 flex-grow">
                A 30-minute conversation. You talk about your business. I listen, ask questions, and give you an honest initial read on whether there&apos;s a listing opportunity — and which structuring approach might work. If the carve-out concept is relevant, this is usually where the &quot;aha moment&quot; happens. Free. No obligation.
              </p>
              <p className="text-slate-400 text-xs font-light italic">
                Outcome: Clarity on whether it&apos;s worth exploring further.
              </p>
            </div>

            <div className="stagger-item bg-[#f8f7f4] rounded-none p-8 border border-slate-200/60 flex flex-col">
              <p className="text-[#a68a1f] text-xs font-medium tracking-[0.2em] uppercase mb-3">Step 02</p>
              <h3 className="text-2xl font-normal text-[#1a2a3a] mb-4" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                Assessment call
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light mb-6 flex-grow">
                A deeper conversation about your business structure, financials, and potential listing candidates. I lay out the full cost — my fees plus lawyers, auditors, and sponsors — so you know exactly what you&apos;re signing up for. By the end, both sides know whether this is a real engagement.
              </p>
              <p className="text-slate-400 text-xs font-light italic">
                Outcome: A clear-eyed view of what&apos;s possible and what needs to happen first.
              </p>
            </div>

            <div className="stagger-item bg-[#f8f7f4] rounded-none p-8 border border-slate-200/60 flex flex-col">
              <p className="text-[#a68a1f] text-xs font-medium tracking-[0.2em] uppercase mb-3">Step 03</p>
              <h3 className="text-2xl font-normal text-[#1a2a3a] mb-4" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
                Advisory mandate
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light mb-6 flex-grow">
                If we&apos;re both aligned, we move forward together. Fees are structured around milestones — you pay as the deal progresses, not all upfront. This means we&apos;re financially aligned: I succeed when you succeed. We&apos;ll agree on scope and terms before anything begins, so there are no surprises.
              </p>
              <p className="text-slate-400 text-xs font-light italic">
                Outcome: Your company on the path to public markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-20 px-6 bg-[#1a2a3a]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-normal mb-3 cta-title-gradient">
            Ready to have the conversation?
          </h2>
          <p className="text-slate-300 font-light mb-6 text-base">
            A 30-minute strategy call to discuss your business, your numbers, and whether a listing path makes sense for where you are now. No pitch. No pressure. Just clarity.
          </p>
          <a 
            href="https://tidycal.com/mandyc852/30-minute-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="flex md:inline-flex items-center justify-center whitespace-nowrap w-full md:w-auto px-8 py-3.5 rounded-none shadow-lg uppercase tracking-wide text-sm btn-gold-animated"
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
          className="floating-cta px-5 py-3.5 bg-gradient-to-br from-[#c9a227] to-[#a68a1f] text-[#1a2a3a] text-sm font-semibold tracking-wide rounded-none flex items-center gap-2 uppercase"
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
