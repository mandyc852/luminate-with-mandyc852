"use client"

import React, { useState } from "react"

export function FiveQuestionsForm() {
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
          sourcePage: "five-questions",
          sourcePlacement: consent ? "five-questions-optin" : "five-questions",
        }),
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.")
      }
      // Redirect to thank-you page (which contains the download)
      window.location.href = data.redirect || "/the-five-questions/thank-you"
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <p
        className="text-white text-xl font-normal mb-1"
        style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
      >
        Send the 5 Questions to my inbox
      </p>
      <p className="text-white/60 font-light text-sm mb-4">
        One PDF. Instant. No follow-up sequence unless you ask for it.
      </p>
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-5 py-3.5 rounded-none border border-white/30 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]/40 transition-all text-sm"
      />
      <label className="flex items-start gap-2.5 text-left text-xs text-white/60 font-light leading-relaxed cursor-pointer">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 accent-[#c9a227] w-4 h-4 flex-shrink-0"
        />
        <span>
          Send me occasional insights from Mandy on capital markets and capital readiness.
          Unsubscribe anytime.
        </span>
      </label>
      {error && <p className="text-red-300 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 rounded-none uppercase tracking-[0.15em] text-sm btn-gold-animated disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending…" : "Send me the PDF"}
      </button>
    </form>
  )
}
