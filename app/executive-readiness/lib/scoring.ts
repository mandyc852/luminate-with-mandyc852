// Scoring + readiness bands for the Executive Readiness Diagnostic.

export type Band = {
  key: "foundation" | "quarterly" | "sharpening" | "mandate"
  name: string
  range: string
  paragraph: string
}

export const BANDS: Band[] = [
  {
    key: "foundation",
    name: "Foundation Phase",
    range: "0–4",
    paragraph:
      "You're not ready to lead a capital event yet. The gaps are foundational. Pushing forward now risks the company and the deal. The work isn't structural company work. It's leader work. Look at your lowest-scoring dimension. Then read that reflection prompt again. What you noticed there is the entry point.",
  },
  {
    key: "quarterly",
    name: "Quarterly Engagement Territory",
    range: "5–8",
    paragraph:
      "You're roughly 12 months out. The foundation is there. Specific gaps remain: a narrative not yet pressure-tested, a decision pattern that needs sharpening, an operating system that bends too much under compression. One quarter of focused work compresses the timeline meaningfully. This is the band where most leaders sit before a serious capital event.",
  },
  {
    key: "sharpening",
    name: "Sharpening Territory",
    range: "9–12",
    paragraph:
      "You're close. The remaining gaps are tactical, not foundational. One dimension probably scored lower than the others. The work is targeted: tighten the weak link before it shows up in a deal room.",
  },
  {
    key: "mandate",
    name: "Mandate Territory",
    range: "13–15",
    paragraph:
      "You're ready to execute. The conversation isn't about readiness. It's about the deal itself: structure, timing, counterparties, terms.",
  },
]

export function bandFor(total: number): Band {
  if (total <= 4) return BANDS[0]
  if (total <= 8) return BANDS[1]
  if (total <= 12) return BANDS[2]
  return BANDS[3]
}

export function totalOf(scores: (number | null)[]): number {
  return scores.reduce<number>((acc, s) => acc + (typeof s === "number" ? s : 0), 0)
}
