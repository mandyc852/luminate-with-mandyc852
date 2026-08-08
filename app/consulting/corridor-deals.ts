/* ────────────────────────────────────────────────────────────────────────────
   Corridor Deal Book — verified dataset.

   Every value here records a fact fixed at PRICING or DEBUT. Nothing in this
   file goes stale, and nothing in it may be "refreshed": no current share
   prices, no valuation multiples, no performance-since-listing, no projections.

   The dataset grows only by approved batches. Do not add deals.

   `source` is for maintenance only and is never rendered.
   Facts verified 8 August 2026.
   ──────────────────────────────────────────────────────────────────────────── */

export type Venue = "HKEX" | "ADX" | "DFM"
export type DealYear = 2025 | 2024 | 2023

export type CorridorDeal = {
  id: string
  company: string
  venue: Venue
  type: string
  /** Display form, e.g. "Nov 2025". */
  date: string
  year: DealYear
  size: string
  /** Rendered as the main cell. */
  facts: string
  /** Rendered beneath the facts, italic and muted. */
  note: string
  /** Maintenance only — never rendered. */
  source: string[]
}

export const CORRIDOR_DEALS: CorridorDeal[] = [
  {
    id: "weride",
    company: "WeRide",
    venue: "HKEX",
    type: "Dual-primary (Ch. 18C)",
    date: "Nov 2025",
    year: 2025,
    size: "HK$2.39bn (~US$306M)",
    facts:
      "Priced at HK$27.10. First Chapter 18C dual-primary with a WVR structure — a Nasdaq-listed company adding a Hong Kong primary listing.",
    note: "A US listing first, Hong Kong added when the time was right.",
    source: ["Cooley", "WeRide IR", "Investing.com"],
  },
  {
    id: "catl",
    company: "CATL",
    venue: "HKEX",
    type: "Listing",
    date: "May 2025",
    year: 2025,
    size: "~US$4.6bn",
    facts: "The world's largest listing of 2025 at pricing; rose over 16% on debut.",
    note: "The proof of Hong Kong's depth.",
    source: ["CNBC", "Benchmark Source"],
  },
  {
    id: "talabat",
    company: "Talabat",
    venue: "DFM",
    type: "IPO",
    date: "Dec 2024",
    year: 2024,
    size: "US$2.0bn",
    facts:
      "Largest global tech IPO of 2024; priced at the top of the range; fell around 7% on debut.",
    note: "Priced for the issuer, not the aftermarket — the tension every IPO has to resolve.",
    source: ["Talabat corporate", "The National"],
  },
  {
    id: "lulu",
    company: "Lulu Retail",
    venue: "ADX",
    type: "IPO",
    date: "Nov 2024",
    year: 2024,
    size: "~US$1.72bn",
    facts:
      "The UAE's biggest IPO of 2024; the 100th company listed on ADX; closed flat on debut.",
    note: "Size alone does not price a deal.",
    source: ["ADX", "The National"],
  },
  {
    id: "alef",
    company: "Alef Education",
    venue: "ADX",
    type: "IPO",
    date: "Jun 2024",
    year: 2024,
    size: "AED 1.89bn (~US$515M)",
    facts: "Around 39× oversubscribed, drawing roughly US$20bn in orders.",
    note: "Demand for a technology story, measured in orders.",
    source: ["Zawya", "AGBI"],
  },
  {
    id: "presight",
    company: "Presight AI",
    venue: "ADX",
    type: "IPO",
    date: "Mar 2023",
    year: 2023,
    size: "US$496M",
    facts:
      "Around 136× oversubscribed — nearly US$25.8bn in orders for a US$496M offering.",
    note: "The most oversubscribed deal in this table.",
    source: ["The National", "WAM"],
  },
]

export const VENUES: Venue[] = ["HKEX", "ADX", "DFM"]
export const YEARS: DealYear[] = [2025, 2024, 2023]
