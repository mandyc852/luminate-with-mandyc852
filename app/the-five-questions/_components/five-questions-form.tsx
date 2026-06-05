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
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-5 py-3.5 rounded-none border border-white/40 bg-white/15 text-white placeholder-white/60 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/40 transition-all text-sm backdrop-blur-sm"
      />
      <label className="flex items-start gap-2.5 text-left text-xs text-white/70 font-light leading-relaxed cursor-pointer">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 accent-[#1a2a3a] w-4 h-4 flex-shrink-0"
        />
        <span>
          Send me occasional insights from Mandy on capital markets and capital readiness.
          Unsubscribe anytime.
        </span>
      </label>
      {error && <p className="text-red-200 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 rounded-none uppercase tracking-[0.15em] text-sm bg-[#1a2a3a] text-white font-medium shadow-lg hover:bg-[#0F1A24] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending…" : "Send me the PDF"}
      </button>
    </form>
  )
}
