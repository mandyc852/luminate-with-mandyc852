"use client"

import { useMemo, useState } from "react"
import { CORRIDOR_DEALS, VENUES, YEARS, type DealYear, type Venue } from "./corridor-deals"

/* ────────────────────────────────────────────────────────────────────────────
   Corridor Deal Book — filterable record of verified corridor listings.

   Renders facts fixed at pricing and debut only. No live prices, no multiples,
   no performance-since-listing, no forward-looking language. Filtering is
   client-side state; nothing is fetched, sent or stored.
   ──────────────────────────────────────────────────────────────────────────── */

type VenueFilter = Venue | "All"
type YearFilter = DealYear | "All"

function Chip({
  label,
  count,
  pressed,
  onClick,
}: {
  label: string
  count: number
  pressed: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`px-3.5 py-2 text-[13px] tracking-[0.04em] border transition-colors ${
        pressed
          ? "border-[#f5e6b3] text-[#1a2a3a] bg-[#f5e6b3] font-medium"
          : "border-white/25 text-slate-200 hover:border-[#f5e6b3]/60 hover:text-white font-light"
      }`}
    >
      {label} <span className={pressed ? "opacity-70" : "text-slate-400"}>({count})</span>
    </button>
  )
}

export function CorridorDealBook({ bookingUrl }: { bookingUrl: string }) {
  const [venue, setVenue] = useState<VenueFilter>("All")
  const [year, setYear] = useState<YearFilter>("All")

  const visible = useMemo(
    () =>
      CORRIDOR_DEALS.filter(
        (d) => (venue === "All" || d.venue === venue) && (year === "All" || d.year === year)
      ),
    [venue, year]
  )

  /* Counts are cross-filtered — a chip shows what you would actually get if you
     clicked it, given the other filter. Some combinations genuinely yield zero. */
  const venueCount = (v: VenueFilter) =>
    CORRIDOR_DEALS.filter(
      (d) => (v === "All" || d.venue === v) && (year === "All" || d.year === year)
    ).length
  const yearCount = (y: YearFilter) =>
    CORRIDOR_DEALS.filter(
      (d) => (y === "All" || d.year === y) && (venue === "All" || d.venue === venue)
    ).length

  const clear = () => {
    setVenue("All")
    setYear("All")
  }

  const filterDescription =
    venue === "All" && year === "All"
      ? "all venues, all years"
      : `${venue === "All" ? "all venues" : venue}, ${year === "All" ? "all years" : year}`

  return (
    <section
      aria-labelledby="dealbook-heading"
      className="mt-16 md:mt-20 pt-12 md:pt-14 border-t border-white/20"
    >
      <h3
        id="dealbook-heading"
        className="text-[24px] md:text-[30px] font-normal leading-[1.25] mb-3"
        style={{ color: "#ffffff" }}
      >
        What the corridor actually did.
      </h3>
      <p className="text-slate-300 text-[15px] md:text-[16px] leading-[1.8] font-light mb-8">
        Verified at pricing and debut — no projections, and deliberately no cherry-picking. The ones
        that fell on debut are in here too.
      </p>

      {/* Filters */}
      <div className="space-y-4 mb-6">
        <div>
          <p
            id="venue-filter-label"
            className="text-slate-400 text-[11px] font-medium tracking-[0.22em] uppercase mb-2.5"
          >
            Venue
          </p>
          <div className="flex flex-wrap gap-2" role="group" aria-labelledby="venue-filter-label">
            <Chip
              label="All"
              count={venueCount("All")}
              pressed={venue === "All"}
              onClick={() => setVenue("All")}
            />
            {VENUES.map((v) => (
              <Chip
                key={v}
                label={v}
                count={venueCount(v)}
                pressed={venue === v}
                onClick={() => setVenue(v)}
              />
            ))}
          </div>
        </div>

        <div>
          <p
            id="year-filter-label"
            className="text-slate-400 text-[11px] font-medium tracking-[0.22em] uppercase mb-2.5"
          >
            Year
          </p>
          <div className="flex flex-wrap gap-2" role="group" aria-labelledby="year-filter-label">
            <Chip
              label="All"
              count={yearCount("All")}
              pressed={year === "All"}
              onClick={() => setYear("All")}
            />
            {YEARS.map((y) => (
              <Chip
                key={y}
                label={String(y)}
                count={yearCount(y)}
                pressed={year === y}
                onClick={() => setYear(y)}
              />
            ))}
          </div>
        </div>
      </div>

      <p className="text-slate-400 text-[13px] md:text-[13.5px] leading-[1.7] mb-6">
        For scale: Hong Kong raised HK$286.8bn in IPO funds in 2025, per HKEX&apos;s official
        funds-raised statistics.
      </p>

      {/* Filter changes are announced politely. */}
      <div aria-live="polite" className="sr-only">
        {visible.length === 0
          ? `No deals match ${filterDescription}.`
          : `Showing ${visible.length} of ${CORRIDOR_DEALS.length} deals — ${filterDescription}.`}
      </div>

      {visible.length === 0 ? (
        <div className="border-l-2 border-white/20 bg-white/[0.04] pl-5 pr-4 py-5">
          <p className="text-slate-200 text-[15px] leading-[1.8] font-light">
            No deals match —{" "}
            <button
              type="button"
              onClick={clear}
              className="underline underline-offset-4 decoration-white/40 hover:decoration-white text-white"
            >
              clear filters
            </button>
            .
          </p>
        </div>
      ) : (
        <>
          {/* Desktop — real table semantics. */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Verified corridor listings, showing {visible.length} of {CORRIDOR_DEALS.length} deals
                — {filterDescription}. Facts recorded at pricing and debut.
              </caption>
              <thead>
                <tr className="border-b border-white/25">
                  {["Company", "Venue & type", "Date", "Size", "What happened"].map((h) => (
                    <th
                      key={h}
                      scope="col"
                      className="text-slate-400 text-[11px] font-medium tracking-[0.18em] uppercase pb-3 pr-5 align-bottom"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visible.map((d) => (
                  <tr key={d.id} className="border-b border-white/10 align-top">
                    <th
                      scope="row"
                      className="py-5 pr-5 text-white text-[16px] font-normal whitespace-nowrap"
                    >
                      {d.company}
                    </th>
                    <td className="py-5 pr-5 text-slate-300 text-[14px] font-light">
                      <span className="text-[#f5e6b3]">{d.venue}</span>
                      <br />
                      {d.type}
                    </td>
                    <td className="py-5 pr-5 text-slate-300 text-[14px] font-light whitespace-nowrap">
                      {d.date}
                    </td>
                    <td className="py-5 pr-5 text-slate-300 text-[14px] font-light">{d.size}</td>
                    <td className="py-5 text-slate-200 text-[14.5px] leading-[1.7] font-light">
                      {d.facts}
                      <span className="block mt-2 text-slate-400 italic">{d.note}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile — stacked cards. */}
          <ul className="md:hidden space-y-4">
            {visible.map((d) => (
              <li key={d.id} className="border-l-2 border-white/20 bg-white/[0.04] pl-4 pr-4 py-4">
                <div className="flex items-baseline justify-between gap-3 mb-1.5">
                  <p className="text-white text-[16px]">{d.company}</p>
                  <p className="text-[#f5e6b3] text-[12px] tracking-[0.1em] uppercase flex-shrink-0">
                    {d.venue}
                  </p>
                </div>
                <p className="text-slate-400 text-[12.5px] font-light mb-3">
                  {d.type} · {d.date} · {d.size}
                </p>
                <p className="text-slate-200 text-[14.5px] leading-[1.7] font-light">{d.facts}</p>
                <p className="text-slate-400 text-[14px] leading-[1.7] font-light italic mt-2">
                  {d.note}
                </p>
              </li>
            ))}
          </ul>
        </>
      )}

      <p className="text-slate-400 text-[13px] md:text-[13.5px] leading-[1.7] mt-7">
        Facts as recorded at pricing and debut; sourced from exchange and press coverage, verified
        8 August 2026. This table is a record, not a recommendation — and no two deals price alike.
      </p>

      <div className="mt-9 text-center">
        <p className="text-slate-200 text-[15px] md:text-[16px] leading-[1.8] font-light mb-5 max-w-[54ch] mx-auto">
          The question is not what these companies did. It is which of these paths your numbers
          support.
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
    </section>
  )
}
