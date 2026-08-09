"use client"

/* ────────────────────────────────────────────────────────────────────────────
   "Common questions" — one collapsed accordion group, seven questions.

   v3's five-panel drawer is gone. Four of its panels were removed outright
   rather than relocated — everything in them is call material.

   Native <details>/<summary>, collapsed by default. Deliberately NOT conditional
   rendering ({open && …}): that pattern keeps panel content out of the server
   HTML entirely.
   ──────────────────────────────────────────────────────────────────────────── */

function Q({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="group border-b border-slate-200 last:border-b-0">
      <summary className="flex items-start justify-between gap-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <h3
          className="text-base md:text-lg text-[#1a2a3a] font-normal"
          style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
        >
          {q}
        </h3>
        <svg
          className="flex-shrink-0 w-4 h-4 mt-1.5 text-[#a68a1f] transition-transform group-open:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="pb-7 pr-2 md:pr-8 text-slate-600 font-light leading-[1.8] text-[15px]">
        {children}
      </div>
    </details>
  )
}

export function DetailsDrawer() {
  return (
    <div className="bg-white border border-slate-200 px-6 md:px-10">
      <Q q="What does it cost?">
        <p>
          A fixed fee, agreed in writing before anything starts, staged so that payments fall due as
          work is delivered rather than in advance. I will give you the figure on the call once I
          know what your structure actually requires — quoting it blind would be guessing, and you
          would be right not to trust the number.
        </p>
      </Q>

      <Q q="Isn't a US listing an enormous compliance burden?">
        <p>
          Lighter than most boards assume. A foreign private issuer files an annual report and
          material-event updates — not the quarterly cycle US domestic companies run — and can keep
          many home-country governance practices. It is a real obligation, but it is rarely the
          reason not to list.
        </p>
      </Q>

      <Q q="Are you an underwriter or a broker?">
        <p>
          No. I do not underwrite, place shares or sell securities. I advise the company, which means
          I have no economic interest in whether you list — only in whether you are ready. When you
          need underwriters, I help you choose them and manage them.
        </p>
      </Q>

      <Q q="Who am I actually working with?">
        <p>
          Me. Every call, every email. No associate, no handoff. It is also why I take a small number
          of these at once.
        </p>
      </Q>

      <Q q="Does the fee include lawyers and auditors?">
        <p>
          No. It covers my work only. You appoint and pay those firms directly, and their fees
          together are substantially larger than mine — which is exactly why the sequence matters,
          and why I do not receive referral fees from, or mark up the fees of, anyone I introduce you
          to.
        </p>
      </Q>

      <Q q="What if the answer is that we should not list?">
        <p>
          Then you have saved a great deal of money and a year of your life. It happens, I will say
          so plainly, and I would rather say it in week two than have you find out in month nine with
          a professional fee bill already run up.
        </p>
      </Q>

      <Q q="Do you sign an NDA?">
        <p>
          Yes, mutual, before you send me anything. Nothing about your business, your numbers or your
          intentions appears anywhere.
        </p>
      </Q>
    </div>
  )
}
