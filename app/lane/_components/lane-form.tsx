"use client"

import React, { useState } from "react"

export function LaneForm() {
  const [email, setEmail] = useState("")
  const [consent, setConsent] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
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
          firstName: "",
          sourcePage: "lane",
          sourcePlacement: consent ? "lane-optin" : "lane",
        }),
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.")
      }
      window.location.href = data.redirect || "/lane/thank-you"
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-5 py-3.5 rounded-none border border-white/30 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]/40 transition-all text-sm backdrop-blur-sm"
      />
      <label className="flex items-start gap-2.5 text-left text-xs text-white/60 font-light leading-relaxed cursor-pointer">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 accent-[#C9A227] w-4 h-4 flex-shrink-0"
        />
        <span>
          Send me one operator brief every other week, same register as the PDF. Unsubscribe
          anytime.
        </span>
      </label>
      {error && <p className="text-red-300 text-sm text-center">{error}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 rounded-none uppercase tracking-[0.18em] text-sm btn-gold-animated disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending…" : "Get on the LANE"}
      </button>
      <p className="text-white/40 text-xs text-center pt-1">
        Free. PDF plus phone and desktop wallpapers.
      </p>
    </form>
  )
}
