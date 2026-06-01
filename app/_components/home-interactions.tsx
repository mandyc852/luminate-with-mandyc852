"use client"

import React, { useState, useEffect } from "react"
import { createPortal } from "react-dom"

const TIDYCAL_URL = "https://tidycal.com/mandyc852/30-minute-meeting"

/* ============================================================
   LEAD MAGNET FORM
   Captures name + email for the free download.
   Writes to Supabase `subscribers` via /api/waitlist
   (source_page: "home"). Shows inline success.
   NOTE: actual delivery of the freebie is handled by the
   email automation on the `subscribers` table, not here.
   ============================================================ */
export function LeadMagnetForm() {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [consent, setConsent] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName: firstName || "",
          sourcePage: "home",
          sourcePlacement: consent ? "lead-magnet-optin" : "lead-magnet",
        }),
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.")
      }
      setSuccess(true)
      setFirstName("")
      setEmail("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className="rounded-none bg-white border border-[#c9a227]/40 p-8 text-center shadow-sm">
        <p className="text-[#1a2a3a] text-lg font-normal mb-1" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
          Check your inbox.
        </p>
        <p className="text-slate-600 font-light text-sm">
          Your copy is on the way. If it doesn&apos;t arrive in a few minutes, check your spam folder.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        placeholder="First name (optional)"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="w-full px-5 py-3.5 rounded-none border border-slate-300 bg-white text-[#1a2a3a] placeholder-slate-400 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]/40 transition-all text-sm"
      />
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-5 py-3.5 rounded-none border border-slate-300 bg-white text-[#1a2a3a] placeholder-slate-400 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]/40 transition-all text-sm"
      />
      <label className="flex items-start gap-2.5 text-left text-xs text-slate-500 font-light leading-relaxed cursor-pointer">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 accent-[#c9a227] w-4 h-4 flex-shrink-0"
        />
        <span>Send me occasional insights from Mandy on capital markets and building at scale. Unsubscribe anytime.</span>
      </label>
      {error && <p className="text-red-600 text-sm text-center">{error}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 rounded-none uppercase tracking-wide text-sm btn-gold-home disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending…" : "Send me the download"}
      </button>
    </form>
  )
}

/* ============================================================
   BOOK A CALL — capture-then-redirect
   Opens a modal collecting name + email + email consent,
   writes to Supabase (source_page: "call") so the email is
   kept even if the booking is abandoned, THEN redirects to
   TidyCal. Booking is never blocked by a capture failure.
   ============================================================ */
export function BookCallButton({
  label = "Book a call",
  className = "",
}: {
  label?: string
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [consent, setConsent] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => setMounted(true), [])

  const proceed = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName: firstName || "",
          sourcePage: "call",
          sourcePlacement: consent ? "call-email-optin" : "call-no-optin",
        }),
      })
    } catch {
      // Never block the booking on a capture error.
    } finally {
      window.location.href = TIDYCAL_URL
    }
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {label}
      </button>

      {open && mounted && createPortal(
        <div
          className="fixed inset-0 z-[1100] flex items-center justify-center px-4 bg-[#0f1a24]/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-none bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-4 right-4 text-slate-400 hover:text-[#1a2a3a] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-2xl font-normal text-[#1a2a3a] mb-2" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>
              Let&apos;s find a time
            </h3>
            <p className="text-slate-600 font-light text-sm mb-5">
              A few details, then I&apos;ll take you to my calendar.
            </p>

            <form onSubmit={proceed} className="space-y-3">
              <input
                type="text"
                placeholder="First name (optional)"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-5 py-3.5 rounded-none border border-slate-300 bg-white text-[#1a2a3a] placeholder-slate-400 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]/40 transition-all text-sm"
              />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-5 py-3.5 rounded-none border border-slate-300 bg-white text-[#1a2a3a] placeholder-slate-400 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]/40 transition-all text-sm"
              />
              <label className="flex items-start gap-2.5 text-left text-xs text-slate-500 font-light leading-relaxed cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 accent-[#c9a227] w-4 h-4 flex-shrink-0"
                />
                <span>I&apos;m happy to receive occasional emails from Mandy. Unsubscribe anytime.</span>
              </label>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-none uppercase tracking-wide text-sm btn-gold-home disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "One moment…" : "Continue to calendar"}
              </button>
            </form>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
