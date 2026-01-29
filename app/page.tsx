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
    <div className={`${cormorantGaramond.variable} ${poppins.variable} min-h-screen bg-white`}>
      <style jsx global>{`
        /* 
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
          --cream: #FAF8F5;
          --sand: #E8DFD8;
          --charcoal: #2C2C2C;
          --rose-quartz: #B85D6A;
          --gold: #D4A574;
          --purple-accent: #9D8FC0;
          --text-primary: #3A3A3A;
          --text-secondary: #4A4A4A;  /* Changed from #4A4A4A for better contrast */
        }

        body {
          background: linear-gradient(135deg, #F8F5F2 0%, #FDFBF9 50%, #F5F2EF 100%);
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
          background: radial-gradient(circle at 20% 50%, rgba(184, 93, 106, 0.06) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(212, 165, 116, 0.06) 0%, transparent 50%),
                      radial-gradient(circle at 50% 20%, rgba(157, 143, 192, 0.04) 0%, transparent 50%);
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
              0 0 20px rgba(184, 93, 106, 0.4), 
              0 0 40px rgba(212, 165, 116, 0.3),
              0 4px 20px rgba(0, 0, 0, 0.1);
          }
          50% {
            box-shadow: 
              0 0 30px rgba(184, 93, 106, 0.6), 
              0 0 60px rgba(212, 165, 116, 0.4),
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
            0 10px 40px rgba(184, 93, 106, 0.4),
            0 0 60px rgba(212, 165, 116, 0.3),
            0 4px 20px rgba(0, 0, 0, 0.1);
        }

        /* CTA button with shimmer effect */
        .btn-cta-shimmer {
          background: linear-gradient(135deg, #B85D6A 0%, #D4A574 50%, #9D8FC0 100%);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }

        /* Elegant shimmer effect for hero buttons */
        .btn-elegant-shimmer {
          background: linear-gradient(
            135deg,
            #B85D6A 0%,
            #D4A574 50%,
            #B85D6A 100%
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
            rgba(184, 93, 106, 0.4), 
            rgba(212, 165, 116, 0.4), 
            rgba(157, 143, 192, 0.3)
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
          border-color: #B85D6A;
          background: white;
          box-shadow: 
            0 0 0 3px rgba(184, 93, 106, 0.15),
            0 4px 20px rgba(184, 93, 106, 0.1);
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

        /* Gradient text effect */
        .gradient-text {
          background: linear-gradient(135deg, #FFFFFF 0%, #F5E6D3 40%, #D4A574 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Section Title Gradient - Deep Rose to Rich Gold */
        .section-title-gradient {
          background: linear-gradient(135deg, #8E2C42 0%, #B8883E 100%);
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
          border: 6px solid #FAF8F5;
          box-shadow: 
            0 10px 40px rgba(0, 0, 0, 0.08),
            0 2px 8px rgba(0, 0, 0, 0.04),
            0 0 0 1px rgba(184, 93, 106, 0.1);
          border-radius: 4px;
        }

        /* Authority section circular photo enhancement */
        .circular-photo-premium {
          position: relative;
          box-shadow: 
            0 15px 50px rgba(0, 0, 0, 0.12),
            0 5px 15px rgba(0, 0, 0, 0.08),
            0 0 0 8px #FAF8F5,
            0 0 0 10px rgba(184, 93, 106, 0.15);
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
          background: linear-gradient(to right, #B85D6A, #D4A574);
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
            0 20px 60px rgba(184, 93, 106, 0.12),
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E8DFD8] shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="hover:opacity-80 transition-opacity flex items-center">
              <Image
                src="/Logo 2 black.png"
                alt="Mandy C"
                width={240}
                height={80}
                className="object-contain logo-tinted"
                style={{ 
                  backgroundColor: 'transparent',
                  filter: 'brightness(0) saturate(100%) invert(46%) sepia(22%) saturate(890%) hue-rotate(308deg) brightness(92%) contrast(86%)',
                  fontWeight: 'bold'
                }}
                unoptimized
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="desktop-nav hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sm font-medium text-[#4A4A4A] hover:text-[#B85D6A] transition-colors relative group uppercase font-[family-name:var(--font-poppins)]">
                About
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#B85D6A] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="https://www.youtube.com/@MandyC852" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#4A4A4A] hover:text-[#B85D6A] transition-colors relative group uppercase font-[family-name:var(--font-poppins)]">
                YouTube
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#B85D6A] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#opt-in"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("#opt-in")
                }}
                className="px-6 py-2 border-2 border-transparent bg-clip-text text-transparent bg-gradient-to-r from-[#B85D6A] to-[#D4A574] text-sm font-medium rounded-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 uppercase font-[family-name:var(--font-poppins)] btn-elegant-shimmer"
                style={{
                  borderImage: 'linear-gradient(to right, #B85D6A, #D4A574) 1',
                  WebkitTextFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text'
                }}
              >
                Quantum Leap Now
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-button md:hidden p-2 hover:bg-[#FAF8F5] rounded transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="menuGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8E2C42" />
                    <stop offset="100%" stopColor="#B8883E" />
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
          <div className="md:hidden bg-white border-t border-[#E8DFD8] shadow-lg">
            <nav className="px-6 py-4 space-y-3">
              <a 
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  handleMobileMenuClick()
                  scrollToSection("#about")
                }}
                className="block text-base text-[#4A4A4A] hover:text-[#B85D6A] py-2 transition-colors"
              >
                About
              </a>
              <a 
                href="https://www.youtube.com/@MandyC852" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleMobileMenuClick}
                className="block text-base text-[#4A4A4A] hover:text-[#B85D6A] py-2 transition-colors"
              >
                YouTube
              </a>
              <a 
                href="#opt-in"
                onClick={(e) => {
                  e.preventDefault()
                  handleMobileMenuClick()
                  scrollToSection("#opt-in")
                }}
                className="block text-center px-6 py-3 bg-gradient-to-br from-[#B85D6A] to-[#D4A574] text-white text-sm font-medium rounded-sm mt-4 transition-all duration-300 hover:shadow-lg uppercase font-[family-name:var(--font-poppins)] btn-elegant-shimmer"
              >
                Quantum Leap Now
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero-section relative w-full h-[550px] md:h-[600px] flex items-center overflow-hidden bg-gradient-to-r from-[#1A1A1A] via-[#2A2A2A] to-[#4A4A4A]">
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
          {/* Gradient overlay to blend with dark background */}
          <div className="absolute left-0 top-0 bottom-0 w-[120px] md:w-[180px] bg-gradient-to-r from-[#2A2A2A] via-[#3A3A3A] to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 w-full">
          <div className="max-w-lg">
            <p className="text-white text-xs md:text-sm font-light tracking-[0.25em] uppercase mb-4">
              Quantum Leap for Entrepreneurs
            </p>

            <h1 className="hero-heading gradient-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-normal mb-5">
              <span className="block">Embody Your</span>
              <span className="block font-medium">Next-Level Identity.</span>
              <span className="block">Build From There.</span>
            </h1>

            <p className="text-base md:text-lg text-white/95 font-light leading-relaxed mb-7 max-w-md drop-shadow-xl">
              Five minutes. One identity shift.<br />
              A different way of building.
            </p>

            <div className="hero-cta-buttons flex flex-col sm:flex-row gap-3">
              <a 
                href="#opt-in" 
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("#opt-in")
                }}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-br from-[#B85D6A] to-[#D4A574] text-white text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl shadow-xl uppercase font-[family-name:var(--font-poppins)] btn-elegant-shimmer"
              >
                Become Your Next Level
              </a>
              <a 
                href="https://www.youtube.com/@MandyC852"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border-2 border-white text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-white/15 backdrop-blur-sm uppercase font-[family-name:var(--font-poppins)]"
              >
                My YouTube Channel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For Section - CREAM BACKGROUND WITH TEXTURE */}
      <section id="about" className="relative pt-12 pb-12 md:pt-16 md:pb-16 px-6 bg-[#FAF8F5] slide-up overflow-hidden">
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
            <p className="stagger-item text-base leading-[1.8] text-[#4A4A4A] font-light relative pl-8">
              <span className="absolute left-0 text-[#B85D6A] text-2xl">—</span>
              This work is for you if you've already built something real — but you sense there's a next level you can't quite access yet.
            </p>
            <p className="stagger-item text-base leading-[1.8] text-[#4A4A4A] font-light relative pl-8">
              <span className="absolute left-0 text-[#B85D6A] text-2xl">—</span>
              You're not struggling to survive. You're ready to expand. But something at the identity level is keeping you playing at your current capacity.
            </p>
            <p className="stagger-item text-base leading-[1.8] text-[#4A4A4A] font-light relative pl-8">
              <span className="absolute left-0 text-[#B85D6A] text-2xl">—</span>
              You're ready to embody the version of you who already scaled beyond this level. And lead from there.
            </p>
          </div>
          <p className="quote-text text-[#3A3A3A] text-center text-xl md:text-2xl font-semibold fade-in">
            Your next level isn't something you achieve.<br />
            It's someone you become.
          </p>
        </div>
      </section>


      {/* What You'll Receive Section - WHITE */}
      <section id="services" className="pt-12 pb-12 md:pt-16 md:pb-16 px-6 bg-white slide-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-center font-normal slide-up section-title-gradient">
            What You'll Get
          </h2>
          <div className="grid md:grid-cols-3 gap-8 stagger-parent">
            {/* Benefit 1 */}
            <div className="stagger-item text-center space-y-4 bg-white p-6 rounded-sm shadow-sm border border-[#E8DFD8] card-elegant-hover icon-parent">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#B85D6A]/10 to-[#D4A574]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#B85D6A] icon-scale" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-normal text-[#2C2C2C]">5-Minute Quantum Identity Reset</h3>
              <p className="text-[15px] text-[#4A4A4A] font-light leading-[1.7]">
                A daily audio practice to embody the identity of your next-level self before the evidence shows up. Binaural beats + whispered affirmations designed for subconscious identity shifts.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="stagger-item text-center space-y-4 bg-white p-6 rounded-sm shadow-sm border border-[#E8DFD8] card-elegant-hover icon-parent">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#B85D6A]/10 to-[#D4A574]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#B85D6A] icon-scale" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-normal text-[#2C2C2C]">Nervous System Expansion</h3>
              <p className="text-[15px] text-[#4A4A4A] font-light leading-[1.7]">
                Affirmations specifically designed to help your nervous system feel safe holding your next level of success, wealth, and visibility.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="stagger-item text-center space-y-4 bg-white p-6 rounded-sm shadow-sm border border-[#E8DFD8] card-elegant-hover icon-parent">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#B85D6A]/10 to-[#D4A574]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#B85D6A] icon-scale" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-normal text-[#2C2C2C]">Occasional Transmissions</h3>
              <p className="text-[15px] text-[#4A4A4A] font-light leading-[1.7]">
                Insights on quantum identity work, subconscious reprogramming, and building businesses from alignment — not exhaustion.
              </p>
            </div>
          </div>

          {/* Mid-Page Form Placement */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-white border border-[#E8DFD8] rounded-lg px-8 pt-8 pb-16 md:px-8 md:pt-8 md:pb-20 shadow-lg">
              <h3 className="text-2xl md:text-2xl font-normal mb-3 text-center section-title-gradient">Ready to Embody Your Next Level?</h3>
              <p className="text-sm text-[#4A4A4A] mb-6 text-center font-light">Get the 5-minute Quantum Identity Reset</p>
              {midSuccess ? (
                <div className="p-6 bg-gradient-to-br from-[rgba(201,122,122,0.1)] to-[rgba(184,148,95,0.1)] rounded-sm border border-[#E8DFD8] text-center">
                  <p className="text-base text-[#2C2C2C] font-light">✓ Check your email for the audio!</p>
                </div>
              ) : (
                <form onSubmit={handleMidSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={midEmail}
                    onChange={(e) => setMidEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="input-premium w-full px-5 py-4 text-base font-sans border-2 border-[#E8DFD8] rounded-sm bg-[#FAF8F5] text-[#3A3A3A] transition-all duration-300"
                  />
                  {midError && (
                    <p className="text-sm text-red-600">{midError}</p>
                  )}
                  <button
                    type="submit"
                    disabled={midSubmitting}
                    className="btn-premium w-full px-8 py-4 bg-gradient-to-br from-[#B85D6A] to-[#D4A574] text-white text-base font-medium tracking-wide rounded-sm shadow-lg disabled:opacity-50 disabled:cursor-not-allowed uppercase font-[family-name:var(--font-poppins)] btn-elegant-shimmer"
                  >
                    {midSubmitting ? "SENDING..." : "QUANTUM LEAP NOW"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>


      {/* The Audio Section - PEONY BACKGROUND WITH GRADIENT */}
      <section className="relative pt-12 pb-12 md:pt-16 md:pb-16 px-6 bg-[#FAF8F5] slide-up overflow-hidden">
        {/* Peony Background Image */}
        <div 
          className="absolute inset-0 opacity-70 pointer-events-none"
          style={{
            backgroundImage: 'url("/peony-background-2.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Gradient Overlay - Lighter to show background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/40 via-[#FAF8F5]/30 to-[#FAF8F5]/50 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto z-10">
          <h2 className="text-3xl md:text-4xl mb-8 text-center font-normal slide-up section-title-gradient">
            The 5-Minute Quantum Identity Reset
          </h2>
          <div className="bg-white border border-[#E8DFD8] rounded-sm px-8 pt-8 pb-10 md:px-12 md:pt-12 md:pb-12 shadow-sm">
            <div className="space-y-6">
              <p className="text-base leading-[1.8] text-[#4A4A4A] font-light">
                This isn't a meditation. It's an identity practice.
              </p>
              <p className="text-base leading-[1.8] text-[#4A4A4A] font-light">
                Every morning, you'll spend 5 minutes embodying the version of you who already scaled beyond your current level — before checking email, before reacting to your environment, before your old patterns take over.
              </p>
              <p className="text-base leading-[1.8] text-[#4A4A4A] font-light">
                The audio combines 7.83 Hz binaural beats (Schumann Resonance) with whispered affirmations designed to shift your identity at the subconscious level.
              </p>
              <p className="text-base leading-[1.8] text-[#4A4A4A] font-light">
                You'll hear affirmations like:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="affirmation-text text-xl md:text-xl text-[#3A3A3A] font-semibold">
                  "I embody the version of me who expanded with ease and alignment"
                </li>
                <li className="affirmation-text text-xl md:text-xl text-[#3A3A3A] font-semibold">
                  "My certainty creates evidence, not the other way around"
                </li>
                <li className="affirmation-text text-xl md:text-xl text-[#3A3A3A] font-semibold">
                  "My nervous system is safe to hold my next level of success"
                </li>
              </ul>
              <p className="text-base leading-[1.8] text-[#4A4A4A] font-light">
                This is quantum identity work — collapsing time between who you are now and who you're becoming.
              </p>
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
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-[#B85D6A] to-[#D4A574] flex items-center justify-center text-white font-medium text-lg">
                1
              </div>
              <h3 className="text-xl font-normal text-[#2C2C2C]">First Thing in the Morning</h3>
              <p className="text-[15px] text-[#4A4A4A] font-light leading-[1.7]">
                Listen before you check your phone, before you react to your environment. This is when your subconscious is most receptive to identity-level shifts.
              </p>
            </div>

            {/* Step 2 */}
            <div className="stagger-item text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-[#B85D6A] to-[#D4A574] flex items-center justify-center text-white font-medium text-lg">
                2
              </div>
              <h3 className="text-xl font-normal text-[#2C2C2C]">Use Headphones</h3>
              <p className="text-[15px] text-[#4A4A4A] font-light leading-[1.7]">
                The binaural beats require stereo headphones to create the 7.83 Hz frequency that activates quantum awareness and identity shifting.
              </p>
            </div>

            {/* Step 3 */}
            <div className="stagger-item text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-[#B85D6A] to-[#D4A574] flex items-center justify-center text-white font-medium text-lg">
                3
              </div>
              <h3 className="text-xl font-normal text-[#2C2C2C]">Embody, Don't Just Listen</h3>
              <p className="text-[15px] text-[#4A4A4A] font-light leading-[1.7]">
                This isn't passive. As you listen, feel yourself AS the version who already succeeded. Let your body learn what that identity feels like.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Authority Section with Photo - CREAM BACKGROUND */}
      <section className="relative pt-12 pb-12 md:pt-16 md:pb-16 px-6 bg-[#FAF8F5] slide-up overflow-hidden">
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
              <p className="text-base leading-[1.8] text-[#4A4A4A] font-light">
                Mandy is a corporate finance and IPO advisor — which means she lives in a world where outcomes are measured, pressure is normal, and clarity matters.{" "}
                On{" "}
                <a
                  href="https://www.youtube.com/@MandyC852"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline text-amber-600 decoration-amber-500/80 hover:text-amber-700 hover:decoration-amber-600 transition-colors"
                >
                  Luminate with MandyC
                </a>
                , she brings the other half of performance: identity and nervous system regulation. Because success happens in your mind first — and when your internal state doesn&apos;t match your vision, no amount of pushing will make it sustainable.
              </p>
              <p className="quote-text text-xl md:text-2xl leading-[1.8] text-[#3A3A3A] font-semibold">
                This is for entrepreneurs who are ready to take the leap, again.
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
            {/* Question 1 */}
            <div className="stagger-item border-b border-[#E8DFD8] pb-8">
              <h3 className="text-xl font-normal text-[#2C2C2C] mb-3">
                Do I need headphones to listen?
              </h3>
              <p className="text-[15px] text-[#4A4A4A] font-light leading-[1.7]">
                Yes. The binaural beats require stereo headphones to work properly. Without them, you'll miss the 7.83 Hz frequency that activates the quantum awareness state.
              </p>
            </div>

            {/* Question 2 */}
            <div className="stagger-item border-b border-[#E8DFD8] pb-8">
              <h3 className="text-xl font-normal text-[#2C2C2C] mb-3">
                How is this different from regular affirmations or meditation?
              </h3>
              <p className="text-[15px] text-[#4A4A4A] font-light leading-[1.7]">
                This is identity work, not motivation. Regular affirmations try to convince your conscious mind. This audio works at the subconscious level — where your actual identity and beliefs live. The binaural beats put your brain in a receptive state, and the whispered affirmations bypass conscious resistance to create real identity shifts.
              </p>
            </div>

            {/* Question 3 */}
            <div className="stagger-item border-b border-[#E8DFD8] pb-8">
              <h3 className="text-xl font-normal text-[#2C2C2C] mb-3">
                Is this just manifestation or "woo-woo" content?
              </h3>
              <p className="text-[15px] text-[#4A4A4A] font-light leading-[1.7]">
                No. This is grounded in how the subconscious mind actually works. The approach is inspired by neuroscience and quantum physics principles — specifically the idea that your identity (who you're BEING) creates your reality before your actions do. If you've already built success through strategy and hard work, this adds the identity layer most entrepreneurs miss.
              </p>
            </div>

            {/* Question 4 */}
            <div className="stagger-item border-b border-[#E8DFD8] pb-8">
              <h3 className="text-xl font-normal text-[#2C2C2C] mb-3">
                When will I see results?
              </h3>
              <p className="text-[15px] text-[#4A4A4A] font-light leading-[1.7]">
                Many people feel a shift in their state immediately — more grounded, more certain, more "locked in" to their next-level identity. The deeper identity shifts happen over time with consistent daily use. This isn't about instant transformation — it's about becoming the person who naturally creates your next level of results.
              </p>
            </div>

            {/* Question 5 */}
            <div className="stagger-item pb-8">
              <h3 className="text-xl font-normal text-[#2C2C2C] mb-3">
                I'm already successful. Is this for me?
              </h3>
              <p className="text-[15px] text-[#4A4A4A] font-light leading-[1.7]">
                This is specifically designed for you. If you're a beginner trying to "make it," this might feel too advanced. But if you've already proven you can build something and you're ready to quantum leap to your next level — this is exactly the tool for that expansion.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Opt-In Form Section - CREAM BACKGROUND WITH TEXTURE */}
      <section id="opt-in" className="relative pt-12 pb-12 md:pt-16 md:pb-16 px-6 bg-[#FAF8F5] slide-up overflow-hidden">
        {/* Ethereal Background Image */}
        <div 
          className="absolute inset-0 opacity-70 pointer-events-none"
          style={{
            backgroundImage: 'url("/ethereal-background-2.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/40 via-[#FAF8F5]/30 to-[#FAF8F5]/50 pointer-events-none" />
        <div className="relative max-w-2xl mx-auto z-10">
          <h2 className="text-3xl md:text-4xl mb-8 text-center font-normal slide-up section-title-gradient">
            Get the 5-Minute Quantum Identity Reset
          </h2>

          <div className="bg-white rounded-lg px-6 pt-6 pb-8 md:px-10 md:pt-8 md:pb-10 relative form-glow" style={{
            boxShadow: '0 10px 40px rgba(184, 93, 106, 0.15), 0 0 60px rgba(212, 165, 116, 0.1), 0 4px 20px rgba(0, 0, 0, 0.05)'
          }}>
            {/* Animated gradient accent */}
            <div 
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B85D6A] via-[#D4A574] via-[#9D8FC0] to-[#B85D6A]"
              style={{
                backgroundSize: '200% 100%',
                animation: 'shimmer 3s linear infinite'
              }}
            ></div>
            <form ref={formRef} onSubmit={handleSubmit} id="emailForm" className="space-y-5">
              <div>
                <label htmlFor="firstName" className="block text-sm font-normal text-[#4A4A4A] mb-2 tracking-wide">
                  First Name (optional)
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Your first name"
                  className="input-premium w-full px-5 py-4 text-base font-sans border-2 border-[#E8DFD8] rounded-sm bg-[#FAF8F5] text-[#3A3A3A] transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-normal text-[#4A4A4A] mb-2 tracking-wide">
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
                  className="input-premium w-full px-5 py-4 text-base font-sans border-2 border-[#E8DFD8] rounded-sm bg-[#FAF8F5] text-[#3A3A3A] transition-all duration-300"
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
                className="btn-premium w-full mt-6 px-8 py-4 bg-gradient-to-br from-[#B85D6A] to-[#D4A574] text-white text-base font-medium tracking-wide rounded-sm shadow-lg disabled:opacity-50 disabled:cursor-not-allowed uppercase font-[family-name:var(--font-poppins)] btn-elegant-shimmer"
              >
                {isSubmitting ? "SENDING..." : "QUANTUM LEAP NOW"}
              </button>

              <p className="text-sm text-[#4A4A4A] mt-4 leading-relaxed text-center font-light">
                You'll receive the audio immediately, plus occasional insights on quantum identity work and building businesses from alignment.<br />
                <br />
                No hype. Unsubscribe anytime.
              </p>
            </form>

            {/* Success Message */}
            {showSuccess && (
              <div className="p-10 bg-gradient-to-br from-[rgba(184,93,106,0.15)] to-[rgba(212,165,116,0.15)] rounded-lg text-center" style={{
                boxShadow: '0 4px 20px rgba(184, 93, 106, 0.1)'
              }}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#B85D6A] to-[#D4A574] flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl text-[#2C2C2C] mb-3 font-normal">Thank You</h3>
                <p className="text-[#4A4A4A] mb-0 text-lg font-light">
                  The audio is on its way to your inbox. Check your email in the next few minutes.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Floating CTA Button */}
      {showFloatingButton && (
        <button
          onClick={() => {
            scrollToSection("#opt-in")
          }}
          className="floating-cta btn-premium px-6 py-4 bg-gradient-to-br from-[#B85D6A] to-[#D4A574] text-white text-sm font-medium tracking-wide rounded-full flex items-center gap-2 uppercase font-[family-name:var(--font-poppins)] btn-elegant-shimmer"
          aria-label="Get the audio"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="hidden sm:inline">QUANTUM LEAP</span>
        </button>
      )}

      {/* Footer with Social Links - WHITE */}
      <footer className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://www.youtube.com/@MandyC852"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4A4A4A] hover:text-[#B85D6A] transition-colors duration-300"
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
                className="text-[#4A4A4A] hover:text-[#B85D6A] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* Brand */}
            <div className="text-center">
              <p className="text-sm text-[#4A4A4A] font-light">
                © 2026 Luminate with Mandy C.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
