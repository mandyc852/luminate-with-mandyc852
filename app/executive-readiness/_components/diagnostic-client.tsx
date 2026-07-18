"use client"

import React, { useState, useEffect, useCallback } from "react"
import { DIMENSIONS } from "../lib/content"
import { bandFor, totalOf } from "../lib/scoring"
import { insightFor } from "../lib/insights"


type Stage = "landing" | "dimension" | "results"

export function DiagnosticClient() {
  const [stage, setStage] = useState<Stage>("landing")
  const [currentIdx, setCurrentIdx] = useState(0)
  const [scores, setScores] = useState<(number | null)[]>(() => DIMENSIONS.map(() => null))

  const restart = () => {
    setScores(DIMENSIONS.map(() => null))
    setCurrentIdx(0)
    setStage("landing")
  }

  if (stage === "landing") {
    return <LandingScreen onBegin={() => setStage("dimension")} />
  }

  if (stage === "dimension") {
    const dim = DIMENSIONS[currentIdx]
    const score = scores[currentIdx]
    const setScore = (s: number) => {
      const next = [...scores]
      next[currentIdx] = s
      setScores(next)
    }
    const onNext = () => {
      if (currentIdx === DIMENSIONS.length - 1) {
        setStage("results")
      } else {
        setCurrentIdx(currentIdx + 1)
      }
      window.scrollTo({ top: 0, behavior: "auto" })
    }
    const onBack = () => {
      if (currentIdx === 0) {
        setStage("landing")
      } else {
        setCurrentIdx(currentIdx - 1)
      }
      window.scrollTo({ top: 0, behavior: "auto" })
    }
    return (
      <DimensionScreen
        key={dim.id}
        dimension={dim}
        index={currentIdx}
        total={DIMENSIONS.length}
        score={score}
        setScore={setScore}
        onNext={onNext}
        onBack={onBack}
      />
    )
  }

  return <ResultsScreen scores={scores} onRestart={restart} />
}

/* ============================================================ */
/* LANDING — hero-style with background image + navy overlay     */
/* ============================================================ */
function LandingScreen({ onBegin }: { onBegin: () => void }) {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-[#1a2a3a]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Hong%20Kong%201.jpg"
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: "center" }}
        />
        {/* Navy overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a3a]/95 via-[#1a2a3a]/85 to-[#1a2a3a]/75" />
        <div className="absolute inset-0 bg-[#1a2a3a]/40" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 w-full py-16 md:py-24">
        <p className="text-[#c9a227] text-xs font-medium tracking-[0.25em] uppercase mb-4">
          Free diagnostic
        </p>
        <h1 className="gradient-text-hero text-4xl md:text-6xl font-normal leading-[1.05] mb-5">
          The Executive Readiness Diagnostic
        </h1>
        <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed mb-4 max-w-2xl">
          A 10-minute self-assessment for the person running the deal — not the company behind it.
        </p>
        <p className="text-white/50 text-xs font-medium tracking-[0.15em] uppercase mb-8">
          Built from patterns across IPOs, M&amp;As &amp; restructurings · HKEX &amp; NASDAQ
        </p>

        <div className="space-y-4 text-white/80 font-light leading-relaxed mb-10 max-w-2xl">
          <p>
            Most companies don&apos;t fail at the capital event itself. They fail in the 6 to 18
            months leading up to it. Lawyers catch structural gaps. Auditors catch financial ones.
            The gaps that actually kill the raise or the listing live somewhere else: in the leader.
          </p>
          <p>This diagnostic surfaces those gaps. Not in your cap table. In you.</p>
          <p className="text-white/90">
            5 dimensions. 5 scored questions. 5 reflection prompts. Honest scoring is the point.
          </p>
        </div>

        <button
          type="button"
          onClick={onBegin}
          className="w-full md:w-auto md:min-w-[420px] inline-flex items-center justify-center whitespace-nowrap px-10 py-4 rounded-none shadow-lg uppercase tracking-[0.15em] text-sm btn-gold-animated"
        >
          Begin Diagnostic →
        </button>

        <p className="text-white/50 text-xs font-light mt-5">
          Your answers stay in this browser. If you refresh, you restart.
        </p>
      </div>
    </section>
  )
}

/* ============================================================ */
/* DIMENSION SCREEN — tightened for single-viewport fit          */
/* ============================================================ */
type DimScreenProps = {
  dimension: (typeof DIMENSIONS)[number]
  index: number
  total: number
  score: number | null
  setScore: (s: number) => void
  onNext: () => void
  onBack: () => void
}

function DimensionScreen({ dimension, index, total, score, setScore, onNext, onBack }: DimScreenProps) {
  const answered = typeof score === "number"
  const percent = ((index + (answered ? 1 : 0)) / total) * 100

  // Enter to advance once answered
  const handleNext = useCallback(() => {
    if (answered) onNext()
  }, [answered, onNext])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault()
        handleNext()
      } else {
        // A/B/C/D keys select options (mapped to scores 0–3)
        const keyMap: Record<string, number> = { a: 0, b: 1, c: 2, d: 3 }
        const mapped = keyMap[e.key.toLowerCase()]
        if (typeof mapped === "number") setScore(mapped)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [handleNext, setScore])

  return (
    <section className="bg-white min-h-[calc(100vh-80px)]">
    <div className="max-w-3xl mx-auto px-6 py-6 md:py-8">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-slate-500 font-medium mb-2">
          <span>
            Dimension {index + 1} of {total}
          </span>
          <span className="text-[#a68a1f]">{Math.round(percent)}%</span>
        </div>
        <div className="h-[3px] w-full bg-slate-200 overflow-hidden">
          <div
            className="h-full transition-all duration-500"
            style={{
              width: `${percent}%`,
              background: "linear-gradient(90deg, #a68a1f 0%, #c9a227 50%, #d4b84a 100%)",
            }}
          />
        </div>
      </div>

      {/* Dimension header */}
      <p className="text-[#a68a1f] text-[10px] font-medium tracking-[0.25em] uppercase mb-2">
        Dimension {dimension.id}
      </p>
      <h2 className="text-2xl md:text-3xl font-normal text-[#1a2a3a] leading-[1.15] mb-3">
        {dimension.name}
      </h2>
      <p className="text-slate-600 font-light leading-relaxed text-sm md:text-base mb-6">
        {dimension.intro}
      </p>

      {/* Question */}
      <h3 className="text-base md:text-lg font-medium text-[#1a2a3a] mb-4 leading-snug">
        {dimension.question}
      </h3>

      {/* Options — letters A/B/C/D hide numeric bias; scores stay internal */}
      <div className="space-y-2 mb-5">
        {dimension.options.map((opt, i) => {
          const letter = String.fromCharCode(65 + i) // A, B, C, D
          const selected = score === opt.score
          return (
            <button
              key={opt.score}
              type="button"
              onClick={() => setScore(opt.score)}
              className={[
                "w-full text-left p-3 md:p-3.5 border rounded-none transition-all duration-150 flex gap-3 items-start",
                selected
                  ? "border-[#c9a227] bg-[#c9a227]/5 shadow-sm"
                  : "border-slate-200 bg-white hover:border-slate-400",
              ].join(" ")}
            >
              <span
                className={[
                  "flex-shrink-0 w-7 h-7 flex items-center justify-center font-medium text-xs border",
                  selected
                    ? "bg-[#c9a227] text-[#1a2a3a] border-[#c9a227]"
                    : "bg-slate-50 text-slate-500 border-slate-200",
                ].join(" ")}
              >
                {letter}
              </span>
              <span className="text-slate-700 font-light leading-snug text-sm pt-0.5">
                {opt.label}
              </span>
            </button>
          )
        })}
      </div>

      {/* Reflection — compact inline style */}
      {answered && (
        <p className="text-slate-500 font-light italic text-sm leading-relaxed border-l-2 border-[#c9a227] pl-4 mb-5">
          <span className="not-italic font-medium text-[#a68a1f] text-[10px] tracking-[0.25em] uppercase block mb-1">
            Reflect
          </span>
          {dimension.reflection}
        </p>
      )}

      {/* Nav */}
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onBack}
          className="text-slate-500 hover:text-[#1a2a3a] text-sm font-medium tracking-wide transition-colors"
        >
          ← Back
        </button>
        <div className="flex flex-col items-end gap-1">
          <button
            type="button"
            onClick={onNext}
            disabled={!answered}
            className={[
              "w-full md:w-auto inline-flex items-center justify-center whitespace-nowrap px-8 py-4 rounded-none shadow-lg uppercase tracking-[0.15em] text-xs",
              answered ? "btn-gold-animated" : "bg-slate-200 text-slate-400 cursor-not-allowed",
            ].join(" ")}
          >
            {index === total - 1 ? "See Results" : "Next →"}
          </button>
          {answered && (
            <span className="text-[10px] text-slate-400 tracking-wide">
              press Enter
            </span>
          )}
        </div>
      </div>
    </div>
    </section>
  )
}

/* ============================================================ */
/* RESULTS SCREEN                                                */
/* ============================================================ */
function ResultsScreen({ scores, onRestart }: { scores: (number | null)[]; onRestart: () => void }) {
  const total = totalOf(scores)
  const band = bandFor(total)
  const [copied, setCopied] = useState(false)

  // Find the lowest-scoring dimension index to auto-expand
  const lowestIdx = scores.reduce<number>(
    (minI, s, i) => ((s ?? 0) < (scores[minI] ?? 0) ? i : minI),
    0
  )

  const copyShareLink = () => {
    const url = window.location.origin + "/executive-readiness"
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  return (
    <section className="bg-white min-h-[calc(100vh-80px)]">
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
      <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase mb-3">
        Your results
      </p>
      <h1 className="text-4xl md:text-5xl font-normal text-[#1a2a3a] leading-[1.1] mb-3">
        You scored {total} / 15
      </h1>
      <p
        className="text-2xl md:text-3xl font-normal text-[#a68a1f] mb-8"
        style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
      >
        {band.name}
      </p>

      <p className="text-slate-600 font-light leading-relaxed mb-12">{band.paragraph}</p>

      {/* Per-dimension breakdown — lowest auto-expanded, rest collapsed */}
      <div className="border-t border-slate-200 pt-10 mb-12">
        <h2 className="text-2xl md:text-3xl font-normal text-[#1a2a3a] mb-6">By dimension</h2>
        <div className="space-y-3">
          {DIMENSIONS.map((dim, idx) => {
            const s = scores[idx] ?? 0
            return (
              <DimensionAccordion
                key={dim.id}
                dim={dim}
                score={s}
                defaultOpen={idx === lowestIdx}
                isLowest={idx === lowestIdx}
              />
            )
          })}
        </div>
      </div>

      <div className="border-t border-slate-200 pt-10 mb-12">
        <h2 className="text-2xl md:text-3xl font-normal text-[#1a2a3a] mb-4">
          What your pattern reveals
        </h2>
        <p className="text-slate-600 font-light leading-relaxed">
          Your total score tells you how far out you are. Your lowest dimension tells you what will
          be tested first. Look at where you scored lowest. That&apos;s the gap that surfaces under
          real deal pressure. Not because the other dimensions don&apos;t matter. Because this is
          the one your current system doesn&apos;t cover.
        </p>
      </div>

      {/* Email capture */}
      <div className="bg-white border border-slate-200 p-7 md:p-8 shadow-sm mb-6">
        <ResultsEmailForm total={total} bandName={band.name} scores={scores} />
      </div>

      {/* CTA — cohort next step */}
      <div className="bg-[#1a2a3a] text-white p-6 md:p-8 mb-8">
        <p
          className="text-xl md:text-2xl font-normal mb-2 text-white"
          style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
        >
          The score shows the gap. The cohort is where you close it.
        </p>
        <p className="text-white/70 font-light text-sm leading-relaxed mb-5">
          A six-week room for operators working the same internal problem. Cohort 1 opens September 2026.
        </p>
        <a
          href="/cohort"
          className="w-full inline-flex items-center justify-center whitespace-nowrap px-8 py-4 rounded-none shadow-lg uppercase tracking-wide text-sm btn-gold-animated"
        >
          See the Inner Game Cohort →
        </a>
      </div>

      {/* Share + retake */}
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onRestart}
          className="text-slate-500 hover:text-[#1a2a3a] text-sm font-medium tracking-wide transition-colors"
        >
          ← Retake
        </button>
        <button
          type="button"
          onClick={copyShareLink}
          className="text-slate-500 hover:text-[#1a2a3a] text-sm font-medium tracking-wide transition-colors flex items-center gap-1.5"
        >
          {copied ? (
            <>
              <svg className="w-4 h-4 text-[#c9a227]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Link copied
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
              Send to a colleague
            </>
          )}
        </button>
      </div>
    </div>
    </section>
  )
}

/* ============================================================ */
/* DIMENSION ACCORDION — collapsible insight per dimension       */
/* ============================================================ */
function DimensionAccordion({
  dim,
  score,
  defaultOpen,
  isLowest,
}: {
  dim: (typeof DIMENSIONS)[number]
  score: number
  defaultOpen: boolean
  isLowest: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className={`border ${open ? "border-slate-300" : "border-slate-200"} transition-colors`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-[#1a2a3a]">
            {dim.name}
          </span>
          {isLowest && (
            <span className="text-[9px] font-medium tracking-[0.15em] uppercase text-[#a68a1f] bg-[#c9a227]/10 px-2 py-0.5">
              Tested first
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#a68a1f] font-medium text-sm">{score} / 3</span>
          <svg
            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      {open && (
        <div className="px-4 pb-4 pt-0">
          <p className="text-slate-600 font-light leading-relaxed text-sm">
            {insightFor(dim.id, score)}
          </p>
        </div>
      )}
    </div>
  )
}

/* ============================================================ */
/* RESULTS EMAIL FORM                                            */
/* ============================================================ */
function ResultsEmailForm({
  total,
  bandName,
  scores,
}: {
  total: number
  bandName: string
  scores: (number | null)[]
}) {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [consent, setConsent] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const placement = `er-${bandName.toLowerCase().replace(/\s+/g, "-")}-${total}-${scores
    .map((s) => (s ?? 0).toString())
    .join("")}`

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
          sourcePage: "executive-readiness",
          sourcePlacement: consent ? `${placement}-optin` : placement,
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
      <div className="text-center py-2">
        <p
          className="text-[#1a2a3a] text-xl font-normal mb-2"
          style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
        >
          Your PDF is ready.
        </p>
        <p className="text-slate-600 font-light text-sm mb-5">
          A copy is on the way to your inbox. Or grab it now:
        </p>
        <a
          href="/lead-magnet/executive-readiness-diagnostic.pdf"
          download
          className="w-full inline-flex items-center justify-center py-4 rounded-none uppercase tracking-[0.15em] text-sm btn-gold-home mb-4"
        >
          Download the PDF
        </a>
        <p className="text-slate-500 font-light text-xs italic mt-3">
          Most people in {bandName} have 2–3 dimensions they want to work on.
          That&apos;s exactly what the cohort is built for.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="mb-2">
        <p
          className="text-[#1a2a3a] text-xl font-normal mb-1"
          style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
        >
          Email me a PDF of these results
        </p>
        <p className="text-slate-500 font-light text-sm">
          A PDF copy of your score, your band, and a more detailed write-up of what each dimension
          means for your capital event.
        </p>
      </div>
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
        <span>
          Send me occasional insights from Mandy on capital markets and capital readiness.
          Unsubscribe anytime.
        </span>
      </label>
      {error && <p className="text-red-600 text-sm text-center">{error}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 rounded-none uppercase tracking-wide text-sm btn-gold-home disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending…" : "Send me the PDF"}
      </button>
    </form>
  )
}
