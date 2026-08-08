"use client"

import { useState } from "react"

/* ────────────────────────────────────────────────────────────────────────────
   Eligibility checker — "Where could you list?"

   Runs entirely in the browser. No network calls, no analytics, no storage of
   any kind. State lives in React memory and dies on refresh.

   The rule logic below is exhaustive by design. Any combination it does not
   cover falls through to the fallback card — it never infers a verdict.
   Rule references: Main Board Listing Rules 19C.04, 19C.05, 19C.05A.
   ──────────────────────────────────────────────────────────────────────────── */

type Listing = "QE" | "RSE" | "OTHER" | "NOT_LISTED"
type Wvr = "NO_WVR" | "WVR"
type Mcap = "U3" | "M3_6" | "M6_20" | "O20"
type Gc = "NO" | "YES"
type Years = "U2" | "Y2_5" | "Y5P"

type Answers = {
  listing?: Listing
  wvr?: Wvr
  mcap?: Mcap
  gc?: Gc
  years?: Years
}

type QuestionId = keyof Answers

type Question = {
  id: QuestionId
  legend: string
  options: { value: string; label: string }[]
}

const QUESTIONS: Question[] = [
  {
    id: "listing",
    legend: "Where is the company listed today?",
    options: [
      { value: "QE", label: "NYSE, Nasdaq, or the Main Market of the LSE" },
      { value: "RSE", label: "ADX, DFM, Tadawul, or another HKEX-Recognised exchange" },
      { value: "OTHER", label: "Somewhere else / not sure" },
      { value: "NOT_LISTED", label: "Not listed yet" },
    ],
  },
  {
    id: "wvr",
    legend: "Weighted voting rights?",
    options: [
      { value: "NO_WVR", label: "One share, one vote" },
      { value: "WVR", label: "WVR structure" },
    ],
  },
  {
    id: "mcap",
    legend: "Market capitalisation (HK$)",
    options: [
      { value: "U3", label: "Under 3bn" },
      { value: "M3_6", label: "3bn – 6bn" },
      { value: "M6_20", label: "6bn – 20bn" },
      { value: "O20", label: "Over 20bn" },
    ],
  },
  {
    id: "gc",
    legend: "Is the business centred on Greater China?",
    options: [
      { value: "NO", label: "No — centre of gravity elsewhere" },
      { value: "YES", label: "Yes / substantially" },
    ],
  },
  {
    id: "years",
    legend: "Years of good compliance history on your exchange",
    options: [
      { value: "U2", label: "Under 2" },
      { value: "Y2_5", label: "2 – 5" },
      { value: "Y5P", label: "5 or more" },
    ],
  },
]

type Status = "OPEN" | "CLOSED" | "DISCRETIONARY"

type Card = {
  key: string
  title: string
  rule: string
  status: Status
  /* Every failed condition is listed, not just the first. */
  reasons: string[]
  /* Set when the card's sole failure was a track-record condition. */
  trackRecordOnlyFailure?: boolean
}

const CLOSED_BY_WVR = "Criteria A and B apply to issuers without a WVR structure."

function buildCards(a: Answers): { cards: Card[]; waiver: boolean } {
  const QE = a.listing === "QE"
  const RSE_only = a.listing === "RSE"

  const mcapGte3 = a.mcap === "M3_6" || a.mcap === "M6_20" || a.mcap === "O20"
  const mcapGte6 = a.mcap === "M6_20" || a.mcap === "O20"
  const mcapGte20 = a.mcap === "O20"
  const yearsGte2 = a.years === "Y2_5" || a.years === "Y5P"
  const yearsGte5 = a.years === "Y5P"

  const hasWvr = a.wvr === "WVR"
  const cards: Card[] = []

  /* ── Criteria B — secondary listing, no WVR (Rule 19C.05A(3)–(4)) ── */
  const bCard: Card = {
    key: "criteria-b",
    title: "Criteria B — secondary listing, no WVR",
    rule: "Rule 19C.05A",
    status: "CLOSED",
    reasons: [],
  }
  if (hasWvr) {
    bCard.reasons.push(CLOSED_BY_WVR)
  } else if (QE && mcapGte6 && yearsGte2) {
    bCard.status = "OPEN"
  } else {
    if (RSE_only) {
      bCard.reasons.push(
        "Criteria B is available only to issuers on a Qualifying Exchange — NYSE, Nasdaq, or the LSE Main Market. Your exchange is on the Recognised list, which is broader but does not unlock this route."
      )
    }
    if (!mcapGte6) bCard.reasons.push("Market capitalisation below HK$6bn.")
    if (!yearsGte2) {
      bCard.reasons.push("Fewer than two full financial years of compliance history.")
      if (bCard.reasons.length === 1) bCard.trackRecordOnlyFailure = true
    }
  }
  cards.push(bCard)

  /* ── Criteria A — secondary listing, no WVR (Rule 19C.05A(1)–(2)) ── */
  const aCard: Card = {
    key: "criteria-a",
    title: "Criteria A — secondary listing, no WVR",
    rule: "Rule 19C.05A",
    status: "CLOSED",
    reasons: [],
  }
  if (hasWvr) {
    aCard.reasons.push(CLOSED_BY_WVR)
  } else if (mcapGte3 && yearsGte5 && (QE || (RSE_only && a.gc === "NO"))) {
    aCard.status = "OPEN"
  } else if (RSE_only && a.gc === "YES") {
    aCard.status = "DISCRETIONARY"
    aCard.reasons.push(
      "With a centre of gravity in Greater China and a Recognised-but-not-Qualifying home exchange, the Exchange will consider an application only in exceptional circumstances."
    )
  } else {
    if (!mcapGte3) aCard.reasons.push("Market capitalisation below HK$3bn.")
    if (!yearsGte5) {
      aCard.reasons.push("Fewer than five full financial years of compliance history.")
      if (aCard.reasons.length === 1) aCard.trackRecordOnlyFailure = true
    }
  }
  cards.push(aCard)

  /* ── WVR secondary listing (Rules 19C.04–19C.05) — rendered only for WVR ── */
  if (hasWvr) {
    const wCard: Card = {
      key: "wvr",
      title: "WVR secondary listing",
      rule: "Rules 19C.04–19C.05",
      status: "CLOSED",
      reasons: [],
    }
    if (QE && yearsGte2 && mcapGte20) {
      wCard.status = "OPEN"
    } else if (QE && yearsGte2 && a.mcap === "M6_20") {
      wCard.status = "DISCRETIONARY"
      wCard.reasons.push(
        "At HK$6bn–20bn the WVR route also requires revenue of at least HK$600m in the most recent audited financial year — that figure decides it."
      )
    } else {
      if (RSE_only) {
        wCard.reasons.push("A WVR secondary listing requires a Qualifying Exchange track record.")
      }
      if (!mcapGte6) wCard.reasons.push("Market capitalisation below HK$6bn.")
      if (!yearsGte2) {
        wCard.reasons.push("Fewer than two full financial years of compliance history.")
        if (wCard.reasons.length === 1) wCard.trackRecordOnlyFailure = true
      }
    }
    cards.push(wCard)
  }

  /* Waiver flag: a track-record condition was the only failure on some route,
     and the issuer sits in the 6–20bn or over-20bn band. */
  const waiver =
    (a.mcap === "M6_20" || a.mcap === "O20") &&
    cards.some((c) => c.status === "CLOSED" && c.trackRecordOnlyFailure === true)

  return { cards, waiver }
}

/* ─────────────────────────── presentation ─────────────────────────── */

const STATUS_STYLES: Record<Status, { border: string; label: string; labelColor: string }> = {
  OPEN: { border: "border-[#f5e6b3]", label: "Open", labelColor: "text-[#f5e6b3]" },
  DISCRETIONARY: { border: "border-[#c9a227]", label: "Discretionary", labelColor: "text-[#c9a227]" },
  CLOSED: { border: "border-white/20", label: "Closed", labelColor: "text-slate-400" },
}

function VerdictCard({ card }: { card: Card }) {
  const st = STATUS_STYLES[card.status]
  return (
    <div className={`border-l-2 ${st.border} bg-white/[0.04] pl-5 pr-4 py-5`}>
      <p className={`text-[10px] font-semibold tracking-[0.25em] uppercase mb-2 ${st.labelColor}`}>
        {st.label}
      </p>
      <h4 className="text-white text-[17px] md:text-[18px] font-normal leading-snug mb-1.5">
        {card.title}
      </h4>
      <p className="text-slate-400 text-[11px] tracking-[0.08em] uppercase mb-3">{card.rule}</p>
      {card.reasons.length > 0 && (
        <ul className="space-y-2">
          {card.reasons.map((r) => (
            <li key={r} className="text-slate-300 text-[14.5px] leading-[1.7] font-light">
              {r}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function InfoCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-[#c9a227] bg-white/[0.04] pl-5 pr-4 py-5">
      <p className="text-slate-200 text-[15px] md:text-[15.5px] leading-[1.8] font-light">{children}</p>
    </div>
  )
}

export function EligibilityChecker({ bookingUrl }: { bookingUrl: string }) {
  const [answers, setAnswers] = useState<Answers>({})

  /* Q1 = "Not listed yet" or "Somewhere else / not sure" short-circuits the flow. */
  const shortCircuit = answers.listing === "NOT_LISTED" || answers.listing === "OTHER"
  const sequence: Question[] = shortCircuit ? QUESTIONS.slice(0, 1) : QUESTIONS

  const answeredCount = sequence.filter((q) => answers[q.id] !== undefined).length
  const resolved = answeredCount === sequence.length
  const currentQuestion = resolved ? null : sequence[answeredCount]

  const select = (id: QuestionId, value: string) => {
    setAnswers((prev) => {
      const next = { ...prev, [id]: value } as Answers
      /* Re-answering Q1 invalidates everything downstream. */
      if (id === "listing") return { listing: value as Listing }
      return next
    })
  }

  const edit = (id: QuestionId) => {
    setAnswers((prev) => {
      const next: Answers = { ...prev }
      const idx = QUESTIONS.findIndex((q) => q.id === id)
      QUESTIONS.slice(idx).forEach((q) => delete next[q.id])
      return next
    })
  }

  const reset = () => setAnswers({})

  const labelFor = (q: Question) => q.options.find((o) => o.value === answers[q.id])?.label ?? ""

  let body: React.ReactNode = null
  let announcement = ""

  if (resolved) {
    if (answers.listing === "NOT_LISTED") {
      announcement = "Result ready. Secondary-listing routes do not apply yet."
      body = (
        <InfoCard>
          Secondary-listing routes compare where you are listed with where you want to be — they do not
          apply yet. A first listing in Hong Kong runs through different chapters of the Rules entirely,
          including the specialist technology route for deep-tech companies. That is a call, not a form.
        </InfoCard>
      )
    } else if (answers.listing === "OTHER") {
      announcement = "Result ready. Your situation does not map onto the standard routes."
      body = (
        <InfoCard>
          Your situation does not map cleanly onto the standard routes — which usually makes the
          conversation more interesting, not less. Bring the specifics to the call.
        </InfoCard>
      )
    } else {
      const { cards, waiver } = buildCards(answers)
      announcement =
        "Results ready. " +
        cards.map((c) => `${c.title}: ${STATUS_STYLES[c.status].label}.`).join(" ")
      body = (
        <div className="space-y-4">
          {cards.map((c) => (
            <VerdictCard key={c.key} card={c} />
          ))}
          {waiver && (
            <div className="border-t border-white/20 pt-5 mt-6">
              <p className="text-slate-300 text-[14.5px] md:text-[15px] leading-[1.8] font-light">
                <strong className="font-medium text-white">One thing worth knowing:</strong> the Rules
                allow a waiver of the track-record requirement for a well-established issuer listing
                significantly above HK$6bn. Most people quoting the headline thresholds miss it. If that
                is your situation, it is exactly what the call is for.
              </p>
            </div>
          )}
        </div>
      )
    }
  }

  return (
    <section
      aria-labelledby="checker-heading"
      className="mt-16 md:mt-20 pt-12 md:pt-14 border-t border-white/20"
    >
      <h3
        id="checker-heading"
        className="text-[24px] md:text-[30px] font-normal leading-[1.25] mb-3"
        style={{ color: "#ffffff" }}
      >
        Run your own numbers against the routes.
      </h3>
      <p className="text-slate-300 text-[15px] md:text-[16px] leading-[1.8] font-light mb-8">
        Five questions, thirty seconds, nothing leaves your browser.
      </p>

      <p className="text-slate-400 text-[13px] md:text-[13.5px] leading-[1.7] mb-7">
        Runs entirely in your browser. Nothing you select is sent or stored anywhere.
      </p>

      {/* Answered questions collapse to a single editable line. */}
      {sequence.filter((q) => answers[q.id] !== undefined).length > 0 && (
        <ul className="space-y-2.5 mb-7">
          {sequence
            .filter((q) => answers[q.id] !== undefined)
            .map((q, i) => (
              <li
                key={q.id}
                className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-white/10 pb-2.5"
              >
                <span className="text-slate-400 text-[13px] font-light">{i + 1}.</span>
                <span className="text-slate-400 text-[13px] font-light">{q.legend}</span>
                <span className="text-[#f5e6b3] text-[14px]">{labelFor(q)}</span>
                <button
                  type="button"
                  onClick={() => edit(q.id)}
                  className="text-slate-300 hover:text-white text-[12px] underline underline-offset-4 decoration-white/30 hover:decoration-white ml-auto"
                >
                  Change<span className="sr-only"> answer to: {q.legend}</span>
                </button>
              </li>
            ))}
        </ul>
      )}

      {currentQuestion && (
        <fieldset className="mb-2">
          <legend className="text-white text-[17px] md:text-[19px] font-normal leading-snug mb-4">
            {answeredCount + 1}. {currentQuestion.legend}
          </legend>
          <div className="space-y-2.5">
            {currentQuestion.options.map((o) => (
              <label
                key={o.value}
                className="flex items-start gap-3 cursor-pointer group border border-white/15 hover:border-[#f5e6b3]/50 focus-within:border-[#f5e6b3] px-4 py-3 transition-colors"
              >
                <input
                  type="radio"
                  name={currentQuestion.id}
                  value={o.value}
                  checked={answers[currentQuestion.id] === o.value}
                  onChange={() => select(currentQuestion.id, o.value)}
                  className="mt-1 accent-[#c9a227] w-4 h-4 flex-shrink-0"
                />
                <span className="text-slate-200 text-[15px] leading-[1.6] font-light">{o.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {/* Verdicts are announced politely once they resolve. */}
      <div aria-live="polite" className="sr-only">
        {announcement}
      </div>

      {resolved && (
        <div className="mt-8">
          {body}

          <p className="text-slate-400 text-[13px] md:text-[13.5px] leading-[1.7] mt-7">
            A summary of published HKEX rules as at 8 August 2026 — not advice, and no advisory
            relationship is created by using it. Rules change; your facts decide the outcome.
          </p>

          <div className="mt-9 text-center">
            <p className="text-slate-200 text-[15px] md:text-[16px] leading-[1.8] font-light mb-5 max-w-[54ch] mx-auto">
              Whatever the cards say, the verdict that matters is the one with your actual numbers
              behind it.
            </p>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap w-full sm:w-[420px] px-8 py-4 rounded-none uppercase tracking-[0.12em] text-sm font-semibold shadow-[0_4px_24px_rgba(201,162,39,0.45)] btn-gold-animated"
              style={{ minHeight: 48 }}
            >
              Bring this to the call
            </a>
          </div>
        </div>
      )}

      {answeredCount > 0 && (
        <div className="mt-7">
          <button
            type="button"
            onClick={reset}
            className="text-slate-300 hover:text-white text-[13px] underline underline-offset-4 decoration-white/30 hover:decoration-white"
          >
            Start over
          </button>
        </div>
      )}
    </section>
  )
}
