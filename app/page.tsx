"use client"

import { useState, useEffect, useRef } from "react"
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
  // Main form state
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [error, setError] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  // Hero form state
  const [heroEmail, setHeroEmail] = useState("")
  const [heroSubmitting, setHeroSubmitting] = useState(false)
  const [heroSuccess, setHeroSuccess] = useState(false)
  const [heroError, setHeroError] = useState("")

  // Mid-page form state
  const [midEmail, setMidEmail] = useState("")
  const [midSubmitting, setMidSubmitting] = useState(false)
  const [midSuccess, setMidSuccess] = useState(false)
  const [midError, setMidError] = useState("")

  // Floating button state
  const [showFloatingButton, setShowFloatingButton] = useState(false)
  
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Scroll position for parallax effect
  const [scrollY, setScrollY] = useState(0)

  // Enhanced Intersection Observer for all animation types
  useEffect(() => {
    const observerOptions = {
      threshold: [0, 0.1, 0.2], // Multiple thresholds for better detection
      rootMargin: "50px 0px 100px 0px", // More generous margins
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
          // Don't unobserve immediately - keep observing in case element scrolls back up
          // observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Function to observe elements
    const observeElements = () => {
      const selectors = [
        ".fade-in",
        ".slide-up",
        ".slide-in-left",
        ".slide-in-right",
        ".text-reveal",
        ".stagger-parent",
      ]
      
      selectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector)
        elements.forEach((el) => {
          // Check if element is already in viewport on mount
          const rect = el.getBoundingClientRect()
          const isInViewport = rect.top < window.innerHeight + 200 && rect.bottom > -200
          
          if (isInViewport && !el.classList.contains("animate-in")) {
            // Immediately animate elements already visible
            el.classList.add("animate-in")
          } else {
            // Only observe if not already animated
            if (!el.classList.contains("animate-in")) {
              observer.observe(el)
            }
          }
        })
      })
    }

    // Function to force visibility for any missed elements
    const forceVisibility = () => {
      const selectors = [
        ".fade-in",
        ".slide-up",
        ".slide-in-left",
        ".slide-in-right",
        ".text-reveal",
        ".stagger-parent",
      ]
      
      selectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector)
        elements.forEach((el) => {
          const rect = el.getBoundingClientRect()
          const isVisible = rect.top < window.innerHeight + 300 && rect.bottom > -300
          
          if (isVisible && !el.classList.contains("animate-in")) {
            el.classList.add("animate-in")
          }
        })
      })
    }

    // Initial observation
    observeElements()

    // Re-observe multiple times to catch dynamically rendered elements
    const timeoutIds = [
      setTimeout(observeElements, 100),
      setTimeout(observeElements, 300),
      setTimeout(observeElements, 600),
    ]

    // Fallback: ensure all elements are visible after delays
    const fallbackTimeouts = [
      setTimeout(forceVisibility, 1000),
      setTimeout(forceVisibility, 2000),
    ]

    // Also check on scroll events as additional fallback (throttled)
    let scrollTimeout: NodeJS.Timeout | null = null
    const handleScroll = () => {
      if (scrollTimeout) return
      scrollTimeout = setTimeout(() => {
        forceVisibility()
        scrollTimeout = null
      }, 100)
    }
    
    // More frequent checks on scroll
    const handleScrollImmediate = () => {
      forceVisibility()
    }
    
    window.addEventListener("scroll", handleScrollImmediate, { passive: true })
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", forceVisibility, { passive: true })
    
    // Also check on load and after a delay
    window.addEventListener("load", () => {
      setTimeout(forceVisibility, 500)
      setTimeout(forceVisibility, 1000)
    })

    return () => {
      timeoutIds.forEach(id => clearTimeout(id))
      fallbackTimeouts.forEach(id => clearTimeout(id))
      if (scrollTimeout) clearTimeout(scrollTimeout)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("scroll", handleScrollImmediate)
      window.removeEventListener("resize", forceVisibility)
      window.removeEventListener("load", forceVisibility)
      observer.disconnect()
    }
  }, [])

  // Scroll listener for parallax and floating button
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      
      const heroSection = document.querySelector("section")
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        setShowFloatingButton(window.scrollY > heroBottom - 100)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth scroll for anchor links with header offset
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const href = target.getAttribute("href")
        if (href) {
          const element = document.querySelector(href)
          if (element) {
            // Account for fixed header height
            const headerOffset = 80
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.scrollY - headerOffset

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            })
          }
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  // Floating button scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector("section")
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        setShowFloatingButton(window.scrollY > heroBottom - 100)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Helper function for smooth scroll with header offset
  const scrollToSection = (selector: string) => {
    const element = document.querySelector(selector)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  // Handler to close mobile menu
  const handleMobileMenuClick = () => {
    setMobileMenuOpen(false)
  }

  // Reusable form submission handler
  const createSubmitHandler = (
    formEmail: string,
    formFirstName: string,
    placement: string,
    setSubmitting: (val: boolean) => void,
    setSuccess: (val: boolean) => void,
    setFormError: (val: string) => void,
    resetForm: () => void
  ) => {
    return async (e: React.FormEvent) => {
      e.preventDefault()
      setFormError("")
      setSubmitting(true)

      try {
        const response = await fetch("/api/waitlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formEmail,
            firstName: formFirstName || "",
            sourcePage: "luminate",
            sourcePlacement: placement,
          }),
        })

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || "Something went wrong. Please try again.")
        }

        setSuccess(true)
        resetForm()
      } catch (err) {
        setFormError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
      } finally {
        setSubmitting(false)
      }
    }
  }

  // Form handlers
  const handleSubmit = createSubmitHandler(
    email,
    firstName,
    "opt-in-form",
    setIsSubmitting,
    setShowSuccess,
    setError,
    () => {
      setFirstName("")
      setEmail("")
      if (formRef.current) {
        formRef.current.style.display = "none"
      }
    }
  )

  const handleHeroSubmit = createSubmitHandler(
    heroEmail,
    "",
    "hero-form",
    setHeroSubmitting,
    setHeroSuccess,
    setHeroError,
    () => setHeroEmail("")
  )

  const handleMidSubmit = createSubmitHandler(
    midEmail,
    "",
    "mid-page-form",
    setMidSubmitting,
    setMidSuccess,
    setMidError,
    () => setMidEmail("")
  )

  return (
    <div className={`${cormorantGaramond.variable} ${poppins.variable} min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-50/80`}>
      <style jsx global>{`
        /* 
        ============================================
        COLOR GUIDE (from /leap) - Golden/Amber theme only
        ============================================
        Light backgrounds: stone-50 (#fafaf9), white, stone-50/80
        Dark backgrounds: stone-800 → stone-950 (#292524 → #0c0a09)
        Logo gradient: #b45309 → #d97706 → #f59e0b → #d97706 → #b45309
        Headings on light: text-stone-900 (#1c1917), text-stone-700 (#44403c)
        Accent/highlights: amber-600 (#d97706), amber-700 (#b45309)
        Gold gradient text: #f59e0b, #fbbf24, #f59e0b
        Buttons: from-amber-700 via-amber-600 to-amber-700; hover amber-500/yellow-500
        Inputs: border-stone-300, bg-white, focus: border-amber-600/50
        Footer: bg-stone-950, text-stone-400, hover text-amber-300
        Icons/bullets on dark: text-amber-500
        No rose, pink, or purple - amber/stone only.
        ============================================
        FONT SPECIFICATION GUIDE - UPDATED
        ============================================

        PRIMARY FONTS:
        - Cormorant Garamond: Elegant serif for headings, quotes, affirmations
          Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold)

        - Poppins: Modern sans-serif for body text, buttons, labels
          Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold)

        USAGE MAP:

        H1 (Hero Headlines):
        - Font: Cormorant Garamond
        - Weight: 600 (Semi-Bold)
        - Size: 3xl-7xl (responsive)
        - Line height: 1.05-1.1

        H2 (Section Titles):
        - Font: Cormorant Garamond
        - Weight: 500 (Medium)
        - Size: 3xl-4xl (responsive)
        - Line height: 1.2

        H3 (Card Titles):
        - Font: Cormorant Garamond
        - Weight: 400 (Regular)
        - Size: lg-xl
        - Line height: 1.3

        Body Text (Paragraphs):
        - Font: Poppins
        - Weight: 300 (Light)
        - Size: sm-base (was base-lg) ← REDUCED
        - Line height: 1.7-1.8 (was relaxed/1.625)

        Quotes/Affirmations:
        - Font: Cormorant Garamond
        - Weight: 400 (Regular)
        - Style: italic
        - Size: lg-xl (was lg-2xl) ← REDUCED
        - Line height: 1.7-1.8

        Buttons/CTAs:
        - Font: Poppins
        - Weight: 500 (Medium)
        - Size: sm (was sm-base)
        - Style: uppercase, tracking-wide

        Labels/Small Text:
        - Font: Poppins
        - Weight: 400 (Regular)
        - Size: xs-sm
        */

        :root {
          /* Leap-aligned palette - amber/stone only */
          --cream: #fafaf9;
          --sand: #e7e5e4;
          --charcoal: #1c1917;
          --amber-accent: #d97706;
          --amber-dark: #b45309;
          --gold: #f59e0b;
          --gold-light: #fbbf24;
          --text-primary: #44403c;
          --text-secondary: #57534e;
        }

        body {
          background: linear-gradient(180deg, #fafaf9 0%, #ffffff 50%, rgba(250, 250, 249, 0.8) 100%);
          color: var(--text-primary);
          position: relative;
          overflow-x: hidden;
          padding-top: 80px; /* Height of header */
        }

        /* Ensure header is always visible */
        header {
          opacity: 1 !important;
          visibility: visible !important;
        }

        body::before {
          content: '';
          position: fixed;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at 20% 50%, rgba(217, 119, 6, 0.06) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(245, 158, 11, 0.06) 0%, transparent 50%),
                      radial-gradient(circle at 50% 20%, rgba(251, 191, 36, 0.04) 0%, transparent 50%);
          animation: backgroundGlow 20s ease-in-out infinite;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes backgroundGlow {
          0%, 100% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
          33% {
            opacity: 0.8;
            transform: translate(2%, 3%) scale(1.05);
          }
          66% {
            opacity: 0.9;
            transform: translate(-2%, -2%) scale(0.98);
          }
        }

        h1, h2, h3 {
          font-family: var(--font-cormorant-garamond), serif;
          font-weight: 400;
          color: var(--charcoal);
          letter-spacing: -0.02em;
        }

        p {
          font-family: var(--font-poppins), sans-serif;
          font-weight: 300; /* Light for readability */
        }

        label, .label-text {
          font-family: var(--font-poppins), sans-serif;
          font-weight: 400; /* Regular for labels */
        }

        input {
          font-family: var(--font-poppins), sans-serif;
        }

        button, .btn-text {
          font-family: var(--font-poppins), sans-serif;
          font-weight: 500; /* Medium for buttons */
        }

        /* Affirmations styling - now using serif italic */
        .affirmation-text {
          font-family: var(--font-cormorant-garamond), serif;
          font-style: italic;
          font-weight: 400;
          line-height: 1.8;
        }

        /* ============================================
           SCROLL-TRIGGERED ANIMATIONS
           ============================================ */
        
        /* Base animation keyframes */
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

        @keyframes textReveal {
          from {
            clip-path: inset(0 100% 0 0);
            opacity: 0;
          }
          to {
            clip-path: inset(0 0% 0 0);
            opacity: 1;
          }
        }

        /* Animation classes - start hidden */
        .fade-in,
        .slide-up,
        .slide-in-left,
        .slide-in-right,
        .text-reveal {
          opacity: 0;
          visibility: hidden;
          will-change: transform, opacity;
        }

        /* Fallback: ensure elements become visible after 1 second if observer fails */
        @media (prefers-reduced-motion: no-preference) {
          .fade-in:not(.animate-in),
          .slide-up:not(.animate-in),
          .slide-in-left:not(.animate-in),
          .slide-in-right:not(.animate-in),
          .text-reveal:not(.animate-in) {
            animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            animation-delay: 1s;
            visibility: visible !important;
          }
        }
        
        /* Ultimate CSS fallback: force visibility after 2 seconds if JS fails */
        @media (prefers-reduced-motion: no-preference) {
          .fade-in:not(.animate-in),
          .slide-up:not(.animate-in),
          .slide-in-left:not(.animate-in),
          .slide-in-right:not(.animate-in),
          .text-reveal:not(.animate-in) {
            animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            animation-delay: 2s;
            animation-fill-mode: both;
            visibility: visible !important;
          }
        }

        /* When Intersection Observer triggers */
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

        .text-reveal.animate-in {
          animation: textReveal 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          visibility: visible !important;
        }

        /* Stagger animation for child elements */
        .stagger-parent.animate-in .stagger-item:nth-child(1) {
          animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0s;
        }
        .stagger-parent.animate-in .stagger-item:nth-child(2) {
          animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.1s;
          opacity: 1 !important;
        }
        .stagger-parent.animate-in .stagger-item:nth-child(3) {
          animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.2s;
        }
        .stagger-parent.animate-in .stagger-item:nth-child(4) {
          animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.3s;
        }
        .stagger-parent.animate-in .stagger-item:nth-child(5) {
          animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.4s;
        }

        .stagger-item {
          opacity: 0;
          visibility: hidden;
        }

        /* Fallback: ensure stagger items become visible even if animation fails */
        @media (prefers-reduced-motion: no-preference) {
          .stagger-parent.animate-in .stagger-item {
            opacity: 1 !important;
            visibility: visible !important;
          }
        }
        
        /* Additional fallback: force visibility for all stagger items */
        .stagger-parent.animate-in .stagger-item {
          visibility: visible !important;
          opacity: 1 !important;
        }
        
        /* Ensure all animated elements are visible */
        .animate-in {
          visibility: visible !important;
        }
        
        /* Ultimate fallback for stagger items - only if parent is animated */
        @media (prefers-reduced-motion: no-preference) {
          .stagger-parent.animate-in .stagger-item {
            animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            animation-fill-mode: both;
            visibility: visible !important;
            opacity: 1 !important;
          }
        }
        
        /* Fallback: if stagger parent gets animated but items don't */
        @media (prefers-reduced-motion: no-preference) {
          .stagger-parent.animate-in .stagger-item:not([style*="opacity: 1"]) {
            opacity: 1 !important;
            visibility: visible !important;
          }
        }

        /* ============================================
           BUTTON & INTERACTIVE ELEMENTS
           ============================================ */

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 
              0 0 20px rgba(217, 119, 6, 0.4), 
              0 0 40px rgba(245, 158, 11, 0.3),
              0 4px 20px rgba(0, 0, 0, 0.1);
          }
          50% {
            box-shadow: 
              0 0 30px rgba(217, 119, 6, 0.6), 
              0 0 60px rgba(245, 158, 11, 0.4),
              0 6px 30px rgba(0, 0, 0, 0.15);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        /* Premium button styles */
        .btn-premium {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                      box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-premium:hover {
          transform: translateY(-2px);
          box-shadow: 
            0 10px 40px rgba(217, 119, 6, 0.4),
            0 0 60px rgba(245, 158, 11, 0.3),
            0 4px 20px rgba(0, 0, 0, 0.1);
        }

        /* CTA button with shimmer effect */
        .btn-cta-shimmer {
          background: linear-gradient(135deg, #b45309 0%, #f59e0b 50%, #d97706 100%);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }

        /* Elegant shimmer effect for hero buttons */
        .btn-elegant-shimmer {
          background: linear-gradient(
            135deg,
            #b45309 0%,
            #f59e0b 50%,
            #d97706 100%
          );
          background-size: 200% auto;
          transition: background-position 0.8s ease;
        }

        .btn-elegant-shimmer:hover {
          background-position: right center;
        }

        /* Floating CTA button with glow */
        .floating-cta {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 1000;
          animation: pulseGlow 2.5s ease-in-out infinite;
        }

        /* ============================================
           FORM ENHANCEMENTS
           ============================================ */

        .form-glow {
          position: relative;
        }

        .form-glow::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: inherit;
          background: linear-gradient(135deg, 
            rgba(217, 119, 6, 0.4), 
            rgba(245, 158, 11, 0.4), 
            rgba(251, 191, 36, 0.3)
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .form-glow:hover::before,
        .form-glow:focus-within::before {
          opacity: 1;
        }

        /* Premium input focus states */
        .input-premium:focus {
          outline: none;
          border-color: #d97706;
          background: white;
          box-shadow: 
            0 0 0 3px rgba(217, 119, 6, 0.15),
            0 4px 20px rgba(217, 119, 6, 0.1);
        }

        @media (max-width: 768px) {
          .hero-section {
            height: 450px !important;  /* Shorter on mobile */
          }
          
          .floating-cta {
            bottom: 16px;
            right: 16px;
          }
          
          /* Hide desktop nav, show hamburger on mobile */
          .desktop-nav { 
            display: none; 
          }
          .mobile-menu-button { 
            display: block; 
          }
          
          /* Hero section mobile adjustments */
          .hero-heading {
            font-size: 2rem;  /* Slightly smaller on mobile */
            line-height: 1.1;
          }
          
          .hero-cta-buttons {
            flex-direction: column;
          }
        }

        /* Gradient text effect - golden theme */
        .gradient-text {
          background: linear-gradient(135deg, #FFFFFF 0%, #fef3c7 40%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Section Title Gradient - amber/gold */
        .section-title-gradient {
          background: linear-gradient(135deg, #b45309 0%, #f59e0b 50%, #fbbf24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Italic quote text with Cormorant Garamond */
        .quote-text {
          font-family: var(--font-cormorant-garamond);
          font-style: italic;
        }

        /* ============================================
           PREMIUM PHOTO TREATMENTS
           ============================================ */

        /* Warm, premium photo filter */
        .premium-photo {
          position: relative;
          overflow: hidden;
          border-radius: 4px;
        }

        .premium-photo img {
          filter: 
            brightness(1.02) 
            contrast(1.03) 
            saturate(1.05)
            sepia(0.03);
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .premium-photo:hover img {
          transform: scale(1.02);
        }

        /* Soft vignette overlay */
        .premium-photo::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at center,
            transparent 40%,
            rgba(0, 0, 0, 0.08) 100%
          );
          pointer-events: none;
        }

        /* Elegant photo frame */
        .photo-frame-elegant {
          border: 6px solid #fafaf9;
          box-shadow: 
            0 10px 40px rgba(0, 0, 0, 0.08),
            0 2px 8px rgba(0, 0, 0, 0.04),
            0 0 0 1px rgba(217, 119, 6, 0.1);
          border-radius: 4px;
        }

        /* Authority section circular photo enhancement */
        .circular-photo-premium {
          position: relative;
          box-shadow: 
            0 15px 50px rgba(0, 0, 0, 0.12),
            0 5px 15px rgba(0, 0, 0, 0.08),
            0 0 0 8px #fafaf9,
            0 0 0 10px rgba(217, 119, 6, 0.15);
        }

        /* ============================================
           ELEGANT MICRO-INTERACTIONS
           ============================================ */

        /* Elegant link underline animation */
        .elegant-link {
          position: relative;
          transition: color 0.3s ease;
          text-decoration: none;
        }

        .elegant-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(to right, #d97706, #f59e0b);
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .elegant-link:hover::after {
          width: 100%;
        }

        /* Smooth card lift on hover */
        .card-elegant-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-elegant-hover:hover {
          transform: translateY(-8px);
          box-shadow: 
            0 20px 60px rgba(217, 119, 6, 0.12),
            0 8px 20px rgba(0, 0, 0, 0.08);
        }

        /* Icon gentle scale on card hover */
        .icon-parent:hover .icon-scale {
          transform: scale(1.15) rotate(5deg);
          transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .icon-scale {
          transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

      `}</style>

      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo - same gradient as /leap */}
            <a href="/" className="hover:opacity-90 transition-opacity flex items-center">
              <div
                className="flex-shrink-0"
                style={{
                  width: 240,
                  height: 80,
                  background:
                    "linear-gradient(to right, #b45309, #d97706, #f59e0b, #d97706, #b45309)",
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

            {/* Desktop Navigation */}
            <nav className="desktop-nav hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sm font-medium text-stone-600 hover:text-amber-600 transition-colors relative group uppercase font-[family-name:var(--font-poppins)]">
                About
                <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#work-with-me" className="text-sm font-medium text-stone-600 hover:text-amber-600 transition-colors relative group uppercase font-[family-name:var(--font-poppins)]">
                Work With Me
                <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="https://www.youtube.com/@MandyC852" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-stone-600 hover:text-amber-600 transition-colors relative group uppercase font-[family-name:var(--font-poppins)]">
                YouTube
                <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#identity-reset"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("#identity-reset")
                }}
                className="px-6 py-2 border-2 border-transparent bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-amber-500 text-sm font-medium rounded-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 uppercase font-[family-name:var(--font-poppins)] btn-elegant-shimmer"
                style={{
                  borderImage: 'linear-gradient(to right, #d97706, #f59e0b) 1',
                  WebkitTextFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text'
                }}
              >
                Get The Audio
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-button md:hidden p-2 hover:bg-stone-100 rounded transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="menuGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#b45309" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="url(#menuGradient)" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="url(#menuGradient)" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200 shadow-lg">
            <nav className="px-6 py-4 space-y-3">
              <a 
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  handleMobileMenuClick()
                  scrollToSection("#about")
                }}
                className="block text-base text-stone-600 hover:text-amber-600 py-2 transition-colors"
              >
                About
              </a>
              <a 
                href="#work-with-me"
                onClick={(e) => {
                  e.preventDefault()
                  handleMobileMenuClick()
                  scrollToSection("#work-with-me")
                }}
                className="block text-base text-stone-600 hover:text-amber-600 py-2 transition-colors"
              >
                Work With Me
              </a>
              <a 
                href="https://www.youtube.com/@MandyC852" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleMobileMenuClick}
                className="block text-base text-stone-600 hover:text-amber-600 py-2 transition-colors"
              >
                YouTube
              </a>
              <a 
                href="#identity-reset"
                onClick={(e) => {
                  e.preventDefault()
                  handleMobileMenuClick()
                  scrollToSection("#identity-reset")
                }}
                className="block text-center px-6 py-3 bg-gradient-to-br from-amber-700 to-amber-500 text-white text-sm font-medium rounded-sm mt-4 transition-all duration-300 hover:shadow-lg uppercase font-[family-name:var(--font-poppins)] btn-elegant-shimmer"
              >
                Get The Audio
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section - horizontal gradient so overlay matches seam (same structure as before color change) */}
      <section className="hero-section relative w-full h-[550px] md:h-[600px] flex items-center overflow-hidden bg-gradient-to-r from-stone-950 via-stone-800 to-stone-700">
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-[50%] z-0">
          <Image
            src="/mandyc.jpg"
            alt="Mandy Cheung"
            fill
            className="object-cover"
            style={{ objectPosition: '35% 45%' }}
            priority
            quality={100}
            unoptimized={false}
          />
          {/* Gradient overlay to blend with dark background - matches section via at seam */}
          <div className="absolute left-0 top-0 bottom-0 w-[120px] md:w-[180px] bg-gradient-to-r from-stone-800 via-stone-700 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 w-full">
          <div className="max-w-lg">
            <h1 className="hero-heading gradient-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-normal mb-4">
              The Inner Game of Scaling
            </h1>

            <p className="text-base md:text-lg text-white/95 font-light leading-relaxed mb-5 max-w-md drop-shadow-xl">
              Where IPO-level strategy meets identity-level transformation.
            </p>

            <p className="text-base md:text-lg text-white/90 font-light leading-relaxed mb-7 max-w-md drop-shadow-xl">
              I&apos;ve spent 10 years advising companies through NASDAQ listings. Here&apos;s what I&apos;ve learned: the founders who scale successfully aren&apos;t just strategically sharp — they&apos;ve done the inner work to hold that level of success.
              <br /><br />
              This is where both sides meet.
            </p>

            <div className="hero-cta-buttons flex flex-col sm:flex-row gap-3">
              <a 
                href="#identity-reset" 
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("#identity-reset")
                }}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-br from-amber-700 to-amber-500 text-white text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl shadow-xl uppercase font-[family-name:var(--font-poppins)] btn-elegant-shimmer"
              >
                Start With The Inner Work
              </a>
              <a 
                href="#work-with-me"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("#work-with-me")
                }}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border-2 border-white text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-white/15 backdrop-blur-sm uppercase font-[family-name:var(--font-poppins)]"
              >
                Explore IPO Advisory
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For Section - CREAM BACKGROUND WITH TEXTURE */}
      <section id="about" className="relative pt-12 pb-12 md:pt-16 md:pb-16 px-6 bg-stone-50 slide-up overflow-hidden">
        {/* Subtle Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1920&q=80")',
            backgroundSize: '400px',
            backgroundRepeat: 'repeat',
          }}
        />
        <div className="relative max-w-3xl mx-auto z-10">
          <h2 className="text-3xl md:text-4xl mb-8 text-center font-normal slide-up section-title-gradient">
            Who This Is For
          </h2>
          <div className="space-y-6 mb-8 stagger-parent">
            <p className="stagger-item text-base leading-[1.8] text-stone-600 font-light relative pl-8">
              <span className="absolute left-0 text-amber-600 text-2xl">→</span>
              Founders building companies worth $10M+ who sense there&apos;s a next level they can&apos;t quite access yet
            </p>
            <p className="stagger-item text-base leading-[1.8] text-stone-600 font-light relative pl-8">
              <span className="absolute left-0 text-amber-600 text-2xl">→</span>
              Entrepreneurs who are successful by external measures but feel their internal operating system needs an upgrade to match their ambition
            </p>
            <p className="stagger-item text-base leading-[1.8] text-stone-600 font-light relative pl-8">
              <span className="absolute left-0 text-amber-600 text-2xl">→</span>
              Leaders preparing for a major transition — Series A, acquisition, or IPO — who want both the strategy AND the identity work
            </p>
            <p className="stagger-item text-base leading-[1.8] text-stone-600 font-light relative pl-8">
              <span className="absolute left-0 text-amber-600 text-2xl">→</span>
              Anyone who&apos;s realized that scaling a company requires becoming someone new — someone who can hold more capital, more visibility, more responsibility
            </p>
          </div>
          <p className="quote-text text-stone-700 text-center text-xl md:text-2xl font-semibold fade-in">
            You don&apos;t need more tactics. You need your identity to catch up to your vision.
          </p>
        </div>
      </section>


      {/* Two Ways to Begin - Lead Magnets */}
      <section id="two-ways" className="pt-12 pb-12 md:pt-16 md:pb-16 px-6 bg-white slide-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-10 text-center font-normal slide-up section-title-gradient">
            Two Ways to Begin
          </h2>
          <div className="grid md:grid-cols-2 gap-8 stagger-parent">
            {/* Path 1: The Founder's Identity Reset */}
            <div className="stagger-item bg-white p-8 rounded-sm shadow-sm border border-stone-200 card-elegant-hover">
              <p className="text-sm font-medium text-amber-600 uppercase tracking-wider mb-2">The inner work</p>
              <h3 className="text-2xl font-normal text-stone-900 mb-4">The Founder&apos;s Identity Reset</h3>
              <p className="text-[15px] text-stone-600 font-light leading-[1.7] mb-4">
                A 5-minute daily audio practice designed for founders and CEOs. Use it before high-stakes meetings, investor calls, or any moment that requires you to show up as your next-level self.
              </p>
              <p className="text-[15px] text-stone-600 font-light leading-[1.7] mb-6">
                Binaural beats + whispered affirmations to help your nervous system hold bigger outcomes.
              </p>
              <a 
                href="/leap"
                className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-gradient-to-br from-amber-600 to-amber-500 text-white text-sm font-medium tracking-wide rounded-sm shadow-lg hover:-translate-y-0.5 transition-all duration-300 uppercase font-[family-name:var(--font-poppins)] btn-elegant-shimmer"
              >
                Get The Audio
              </a>
            </div>

            {/* Path 2: IPO Readiness Assessment */}
            <div className="stagger-item bg-white p-8 rounded-sm shadow-sm border border-stone-200 card-elegant-hover">
              <p className="text-sm font-medium text-amber-600 uppercase tracking-wider mb-2">The strategic work</p>
              <h3 className="text-2xl font-normal text-stone-900 mb-4">IPO Readiness Assessment</h3>
              <p className="text-[15px] text-stone-600 font-light leading-[1.7] mb-4">
                Are you 18 months from being NASDAQ-ready, or 5 years? This assessment helps founders understand where they stand on the path to going public — and what gaps to close first.
              </p>
              <p className="text-[15px] text-stone-600 font-light leading-[1.7] mb-6">
                Built from 10 years of advising companies through successful listings.
              </p>
              <a 
                href="/ipo-ready"
                className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-transparent border-2 border-amber-600 text-amber-700 text-sm font-medium tracking-wide rounded-sm hover:bg-amber-50 transition-all duration-300 uppercase font-[family-name:var(--font-poppins)]"
              >
                Assess Your Readiness
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Work With Me Section */}
      <section id="work-with-me" className="pt-12 pb-12 md:pt-16 md:pb-16 px-6 bg-stone-50 slide-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-10 text-center font-normal slide-up section-title-gradient">
            Work With Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 stagger-parent">
            {/* Service 1: IPO & Capital Markets Advisory */}
            <div className="stagger-item bg-white p-8 rounded-sm shadow-sm border border-stone-200 card-elegant-hover">
              <h3 className="text-2xl font-normal text-stone-900 mb-4">IPO &amp; Capital Markets Advisory</h3>
              <p className="text-[15px] text-stone-600 font-light leading-[1.7] mb-4">
                For companies preparing for NASDAQ listing. I serve as a strategic advisor from pre-IPO preparation through successful listing — handling everything from regulatory positioning to investor narrative.
              </p>
              <p className="text-[15px] text-stone-600 font-light leading-[1.7] mb-6">
                This is for companies with $20M+ revenue ready to access public markets.
              </p>
              <a 
                href="mailto:hello@mandyc.me"
                className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-gradient-to-br from-amber-600 to-amber-500 text-white text-sm font-medium tracking-wide rounded-sm shadow-lg hover:-translate-y-0.5 transition-all duration-300 uppercase font-[family-name:var(--font-poppins)] btn-elegant-shimmer"
              >
                Inquire About Advisory
              </a>
            </div>

            {/* Service 2: Scaling Strategy for Founders */}
            <div className="stagger-item bg-white p-8 rounded-sm shadow-sm border border-stone-200 card-elegant-hover">
              <h3 className="text-2xl font-normal text-stone-900 mb-4">Scaling Strategy for Founders</h3>
              <p className="text-[15px] text-stone-600 font-light leading-[1.7] mb-4">
                For founders building toward a significant exit — whether that&apos;s IPO, acquisition, or major fundraise. This combines business strategy with the identity work required to lead at the next level.
              </p>
              <p className="text-[15px] text-stone-600 font-light leading-[1.7] mb-6">
                Not just what to do, but who to become while doing it.
              </p>
              <a 
                href="mailto:hello@mandyc.me"
                className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-transparent border-2 border-amber-600 text-amber-700 text-sm font-medium tracking-wide rounded-sm hover:bg-amber-50 transition-all duration-300 uppercase font-[family-name:var(--font-poppins)]"
              >
                Apply to Work Together
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* The Founder's Identity Reset - Detailed Section (id for anchor) */}
      <section id="identity-reset" className="relative pt-12 pb-12 md:pt-16 md:pb-16 px-6 bg-white slide-up overflow-hidden">
        {/* Peony Background Image - subdued; overlay matches leap stone */}
        <div 
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: 'url("/peony-background-2.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto z-10">
          <h2 className="text-3xl md:text-4xl mb-4 text-center font-normal slide-up section-title-gradient">
            The Founder&apos;s Identity Reset
          </h2>
          <p className="text-xl text-stone-600 text-center font-light mb-8">
            The 5-minute practice I use before high-stakes moments.
          </p>
          <div className="bg-white border border-stone-200 rounded-sm px-8 pt-8 pb-10 md:px-12 md:pt-12 md:pb-12 shadow-sm">
            <div className="space-y-6">
              <p className="text-base leading-[1.8] text-stone-600 font-light">
                Scaling a company requires you to become someone new — someone who can hold more capital, more visibility, more responsibility. But your nervous system doesn&apos;t automatically upgrade when your business does.
              </p>
              <p className="text-base leading-[1.8] text-stone-600 font-light">
                This audio is designed to close that gap.
              </p>
              <p className="text-base leading-[1.8] text-stone-600 font-light">
                Every morning, you&apos;ll spend 5 minutes embodying the version of you who already scaled beyond your current level — before checking email, before the meetings start, before your old patterns take over.
              </p>
              <p className="text-base leading-[1.8] text-stone-600 font-light">
                The audio combines:
              </p>
              <ul className="space-y-2 ml-4 list-disc text-stone-600 font-light text-[15px] leading-[1.7]">
                <li>7.83 Hz binaural beats (Schumann Resonance) for subconscious receptivity</li>
                <li>Whispered affirmations designed for identity-level shifts</li>
                <li>Nervous system regulation to feel safe holding bigger outcomes</li>
              </ul>
              <p className="text-base leading-[1.8] text-stone-600 font-light">
                You&apos;ll hear affirmations like:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="affirmation-text text-lg text-stone-700 font-semibold">
                  &quot;I lead with clarity and hold space for high-stakes decisions&quot;
                </li>
                <li className="affirmation-text text-lg text-stone-700 font-semibold">
                  &quot;My nervous system is calibrated for the next level of success&quot;
                </li>
                <li className="affirmation-text text-lg text-stone-700 font-semibold">
                  &quot;I am the founder who already built what I&apos;m building&quot;
                </li>
              </ul>
              <p className="text-base leading-[1.8] text-stone-600 font-light font-medium mt-6">
                How to Use:
              </p>
              <ol className="space-y-2 ml-4 list-decimal text-stone-600 font-light text-[15px] leading-[1.7]">
                <li>First thing in the morning — before you check your phone or react to your environment</li>
                <li>Use headphones — the binaural beats require stereo to work</li>
                <li>Embody, don&apos;t just listen — feel yourself AS the version who already succeeded</li>
              </ol>
            </div>
          </div>
        </div>
      </section>


      {/* How It Works Section - WHITE */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 px-6 bg-white slide-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-center font-normal slide-up section-title-gradient">
            How to Use This Practice
          </h2>
          <div className="grid md:grid-cols-3 gap-8 stagger-parent">
            {/* Step 1 */}
            <div className="stagger-item text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-amber-600 to-amber-500 flex items-center justify-center text-white font-medium text-lg">
                1
              </div>
              <h3 className="text-xl font-normal text-stone-900">First Thing in the Morning</h3>
              <p className="text-[15px] text-stone-600 font-light leading-[1.7]">
                Listen before you check your phone, before you react to your environment. This is when your subconscious is most receptive to identity-level shifts.
              </p>
            </div>

            {/* Step 2 */}
            <div className="stagger-item text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-amber-600 to-amber-500 flex items-center justify-center text-white font-medium text-lg">
                2
              </div>
              <h3 className="text-xl font-normal text-stone-900">Use Headphones</h3>
              <p className="text-[15px] text-stone-600 font-light leading-[1.7]">
                The binaural beats require stereo headphones to create the 7.83 Hz frequency that activates quantum awareness and identity shifting.
              </p>
            </div>

            {/* Step 3 */}
            <div className="stagger-item text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-amber-600 to-amber-500 flex items-center justify-center text-white font-medium text-lg">
                3
              </div>
              <h3 className="text-xl font-normal text-stone-900">Embody, Don't Just Listen</h3>
              <p className="text-[15px] text-stone-600 font-light leading-[1.7]">
                This isn't passive. As you listen, feel yourself AS the version who already succeeded. Let your body learn what that identity feels like.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Authority Section with Photo - CREAM BACKGROUND */}
      <section className="relative pt-12 pb-12 md:pt-16 md:pb-16 px-6 bg-stone-50 slide-up overflow-hidden">
        {/* Subtle Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1920&q=80")',
            backgroundSize: '400px',
            backgroundRepeat: 'repeat',
          }}
        />
        <div className="relative max-w-4xl mx-auto z-10">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            {/* Photo */}
            <div className="md:col-span-1 slide-in-left">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden circular-photo-premium">
                <Image
                  src="/IMG_2269.JPG"
                  alt="Mandy Cheung"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-2 space-y-6 slide-in-right">
              <p className="text-base leading-[1.8] text-stone-600 font-light">
                I&apos;ve spent 10 years in corporate finance, advising companies through NASDAQ IPOs. I hold a Responsible Officer license in Hong Kong and am building my advisory practice from Dubai.
              </p>
              <p className="text-base leading-[1.8] text-stone-600 font-light">
                But here&apos;s what most advisors won&apos;t tell you: the companies that scale successfully aren&apos;t just financially ready — their founders have done the identity work to hold that level of success. The ones who struggle? They hit their own internal ceiling before they hit a market ceiling.
              </p>
              <p className="text-base leading-[1.8] text-stone-600 font-light">
                That&apos;s why I created Luminate — to bridge the gap between IPO-level strategy and the inner game most founders ignore.
              </p>
              <p className="text-base leading-[1.8] text-stone-600 font-light">
                When I&apos;m not advising on listings, you&apos;ll find me creating content on the intersection of business performance and personal transformation.
              </p>
              <p className="text-base leading-[1.8] text-stone-600 font-light">
                <a
                  href="https://www.youtube.com/@MandyC852"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline text-amber-600 decoration-amber-500/80 hover:text-amber-700 hover:decoration-amber-600 transition-colors"
                >
                  YouTube: Luminate with MandyC
                </a>
                {" · "}
                <a
                  href="https://www.linkedin.com/in/mandyc852/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline text-amber-600 decoration-amber-500/80 hover:text-amber-700 hover:decoration-amber-600 transition-colors"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section - WHITE */}
      <section id="contact" className="pt-12 pb-6 md:pt-16 md:pb-8 px-6 bg-white slide-up">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-center font-normal slide-up section-title-gradient">
            Common Questions
          </h2>
          <div className="space-y-8 stagger-parent">
            <div className="stagger-item border-b border-stone-200 pb-8">
              <h3 className="text-xl font-normal text-stone-900 mb-3">
                Is this just mindset content, or is there real business strategy?
              </h3>
              <p className="text-[15px] text-stone-600 font-light leading-[1.7]">
                Both. I&apos;ve spent 10 years in corporate finance advising on NASDAQ IPOs — the strategy side is my foundation. But I&apos;ve seen too many founders hit internal ceilings that no amount of strategy can break through. This work addresses both.
              </p>
            </div>

            <div className="stagger-item border-b border-stone-200 pb-8">
              <h3 className="text-xl font-normal text-stone-900 mb-3">
                I&apos;m not thinking about an IPO. Is this still for me?
              </h3>
              <p className="text-[15px] text-stone-600 font-light leading-[1.7]">
                Yes. The identity work applies to any significant scaling — whether you&apos;re going from $1M to $10M, raising your first round, or preparing for acquisition. IPO is just the most extreme version of the same transition.
              </p>
            </div>

            <div className="stagger-item border-b border-stone-200 pb-8">
              <h3 className="text-xl font-normal text-stone-900 mb-3">
                How is the Identity Reset different from regular meditation?
              </h3>
              <p className="text-[15px] text-stone-600 font-light leading-[1.7]">
                This isn&apos;t meditation — it&apos;s identity work. Regular meditation calms your mind. This practice actively rewires your subconscious identity and trains your nervous system to hold bigger outcomes. It&apos;s designed specifically for founders facing high-stakes growth.
              </p>
            </div>

            <div className="stagger-item pb-8">
              <h3 className="text-xl font-normal text-stone-900 mb-3">
                Do you work with companies outside of IPO advisory?
              </h3>
              <p className="text-[15px] text-stone-600 font-light leading-[1.7]">
                Yes. I work with founders on scaling strategy even if IPO isn&apos;t the immediate goal. The path to any significant exit — acquisition, major fundraise, or eventual IPO — requires similar preparation.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Opt-In Form Section - CREAM BACKGROUND WITH TEXTURE */}
      <section id="opt-in" className="relative pt-12 pb-12 md:pt-16 md:pb-16 px-6 bg-stone-50 slide-up overflow-hidden">
        {/* Ethereal Background Image - subdued; overlay matches leap stone */}
        <div 
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: 'url("/ethereal-background-2.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Gradient Overlay - strong stone/cream (leap color guide) */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50/90 via-stone-50/85 to-stone-50/90 pointer-events-none" />
        <div className="relative max-w-2xl mx-auto z-10">
          <h2 className="text-3xl md:text-4xl mb-8 text-center font-normal slide-up section-title-gradient">
            Get The Founder&apos;s Identity Reset
          </h2>

          <div className="bg-white rounded-lg px-6 pt-6 pb-8 md:px-10 md:pt-8 md:pb-10 relative form-glow" style={{
            boxShadow: '0 10px 40px rgba(217, 119, 6, 0.15), 0 0 60px rgba(245, 158, 11, 0.1), 0 4px 20px rgba(0, 0, 0, 0.05)'
          }}>
            {/* Animated gradient accent */}
            <div 
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-700 via-amber-500 via-amber-400 to-amber-700"
              style={{
                backgroundSize: '200% 100%',
                animation: 'shimmer 3s linear infinite'
              }}
            ></div>
            <form ref={formRef} onSubmit={handleSubmit} id="emailForm" className="space-y-5">
              <div>
                <label htmlFor="firstName" className="block text-sm font-normal text-stone-600 mb-2 tracking-wide">
                  First Name (optional)
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Your first name"
                  className="input-premium w-full px-5 py-4 text-base font-sans border-2 border-stone-200 rounded-sm bg-stone-50 text-stone-700 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-normal text-stone-600 mb-2 tracking-wide">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="input-premium w-full px-5 py-4 text-base font-sans border-2 border-stone-200 rounded-sm bg-stone-50 text-stone-700 transition-all duration-300"
                />
              </div>

              {error && (
                <div className="p-4 bg-red-50 border-2 border-red-200 rounded-sm text-red-700 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-premium w-full mt-6 px-8 py-4 bg-gradient-to-br from-amber-600 to-amber-500 text-white text-base font-medium tracking-wide rounded-sm shadow-lg disabled:opacity-50 disabled:cursor-not-allowed uppercase font-[family-name:var(--font-poppins)] btn-elegant-shimmer"
              >
                {isSubmitting ? "SENDING..." : "GET THE AUDIO"}
              </button>

              <p className="text-sm text-stone-600 mt-4 leading-relaxed text-center font-light">
                You&apos;ll receive the audio immediately, plus occasional insights on the inner game of scaling.<br />
                <br />
                No hype. Unsubscribe anytime.
              </p>
            </form>

            {/* Success Message */}
            {showSuccess && (
              <div className="p-10 bg-gradient-to-br from-amber-100/90 to-amber-50/90 rounded-lg text-center" style={{
                boxShadow: '0 4px 20px rgba(217, 119, 6, 0.1)'
              }}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-600 to-amber-500 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl text-stone-900 mb-3 font-normal">Thank You</h3>
                <p className="text-stone-600 mb-0 text-lg font-light">
                  The audio is on its way to your inbox. Check your email in the next few minutes.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 px-6 bg-stone-50 slide-up">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-normal mb-6 text-stone-800 section-title-gradient">
            Ready to scale from the inside out?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#identity-reset"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("#identity-reset")
              }}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-br from-amber-600 to-amber-500 text-white text-sm font-medium tracking-wide rounded-sm shadow-lg hover:-translate-y-0.5 transition-all duration-300 uppercase font-[family-name:var(--font-poppins)] btn-elegant-shimmer"
            >
              Get The Identity Reset
            </a>
            <a 
              href="#work-with-me"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("#work-with-me")
              }}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border-2 border-amber-600 text-amber-700 text-sm font-medium tracking-wide rounded-sm hover:bg-amber-50 transition-all duration-300 uppercase font-[family-name:var(--font-poppins)]"
            >
              Explore Advisory Services
            </a>
          </div>
        </div>
      </section>

      {/* Floating CTA Button */}
      {showFloatingButton && (
        <button
          onClick={() => {
            scrollToSection("#identity-reset")
          }}
          className="floating-cta btn-premium px-6 py-4 bg-gradient-to-br from-amber-600 to-amber-500 text-white text-sm font-medium tracking-wide rounded-full flex items-center gap-2 uppercase font-[family-name:var(--font-poppins)] btn-elegant-shimmer"
          aria-label="Get the audio"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="hidden sm:inline">GET THE AUDIO</span>
        </button>
      )}

      {/* Footer - same style as /leap: dark bar, Terms, Privacy */}
      <footer
        className="w-full bg-stone-950 border-t border-stone-900 py-6"
        aria-label="Site footer"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://www.youtube.com/@MandyC852"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-amber-300 transition-colors duration-300"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/mandyc852/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-amber-300 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* Copyright + Terms & Privacy - mobile: two lines (like /leap); desktop: single line */}
            <div
              className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-1 text-center"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              <p className="text-stone-400 text-sm leading-relaxed mb-2 md:mb-0">
                © 2026 Luminate with Mandy C. | All Rights Reserved
              </p>
              <span className="hidden md:inline text-stone-400 text-sm md:text-base">{" "}|{" "}</span>
              <div className="text-stone-400 text-sm md:text-base flex items-center justify-center gap-2 md:gap-1">
                <a href="/terms" className="hover:text-amber-300 transition-colors">
                  Terms &amp; Conditions
                </a>
                <span className="text-stone-500">|</span>
                <a href="/privacy" className="hover:text-amber-300 transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
