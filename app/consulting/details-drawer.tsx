"use client"

/* ────────────────────────────────────────────────────────────────────────────
   "The details" drawer — five native <details>/<summary> accordions.

   Deliberately NOT conditional rendering ({open && …}): that pattern hides panel
   content from the server HTML entirely, so it never reaches crawlers and makes
   greps produce false negatives. Native <details> keeps the content in the DOM
   and gives correct disclosure semantics and keyboard behaviour for free.
   ──────────────────────────────────────────────────────────────────────────── */

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <details className="group border-b border-slate-200 last:border-b-0">
      <summary className="flex items-start justify-between gap-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <h3
          className="text-lg md:text-xl text-[#1a2a3a] font-normal"
          style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
        >
          {title}
        </h3>
        <svg
          className="flex-shrink-0 w-4 h-4 mt-2 text-[#a68a1f] transition-transform group-open:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="pb-7 pr-2 md:pr-8 space-y-5 text-slate-600 font-light leading-[1.8] text-[15px]">
        {children}
      </div>
    </details>
  )
}

function Lead({ children }: { children: React.ReactNode }) {
  return <strong className="text-[#1a2a3a] font-medium">{children}</strong>
}

const BULLET =
  "relative pl-6 text-slate-600 text-[15px] leading-[1.8] font-light before:absolute before:left-0 before:top-0 before:text-[#c9a227] before:content-['•']"

const FAQS: Array<[string, React.ReactNode]> = [
  [
    "What does it cost?",
    "A fixed fee, paid in three equal milestones — one to start, one when the Venue Decision is delivered, one when the Remediation Plan is. I confirm the figure on the discovery call and in the engagement letter before you commit to anything, and it does not move mid-engagement. It is priced as the narrow version of what I do: a full advisory mandate costs many times more, because a mandate means I am running your process.",
  ],
  [
    "Why not just publish the number?",
    "Because the right conversation starts with your situation, not with a price tag — and because the structure matters more than the figure. You pay each third on delivery of a named document. If the first document does not tell you something you did not know, you stop, and most of the fee stays in your pocket. That allocation of risk is the honest signal; a number on a webpage is not.",
  ],
  [
    "Do we have to commit to all ninety days?",
    "No. It is scoped as ninety days because that is how long the work takes, but each milestone falls due on delivery. If the first stage does not earn the second, you stop there.",
  ],
  [
    "Are you an underwriter or a broker?",
    "No. I do not underwrite, place shares or sell securities. I advise the company — which means I have no economic interest in whether you do the deal, only in whether it is the right one. When you need underwriters, I help you choose them, negotiate them and manage them.",
  ],
  [
    "Who am I actually working with?",
    "Me. Every call, every email. No associate, no handoff. It is also why I take a small number of these at once.",
  ],
  [
    "Does the fee include lawyers, auditors or underwriters?",
    "No. It covers my work and nothing else. Every other party bills you directly, and their fees together are substantially larger than mine. The fee section above sets out what to budget for.",
  ],
  [
    "Can this be billed to the company?",
    <>
      It has to be. The engagement is contracted with the company entity, not an individual. This is
      corporate advisory work and belongs on the company&apos;s books.
    </>,
  ],
  [
    "How is this different from the IPO Path Assessment?",
    "The Assessment is a single document — thirty days, one deep call, an 8-12 page Listing Path Memo for your board. This is a working relationship: thirteen weeks through a live decision, with the Venue Decision and the Remediation Plan produced along the way. Buy the Assessment if you want an answer. Buy this if you want someone alongside you while you reach one and then act on it. Part of it credits toward your first milestone here.",
  ],
  [
    "What if we decide not to list?",
    <>
      Then it worked. Roughly a third of these end in &quot;not yet, and here is precisely what
      changes that&quot; — which is worth considerably more than the fee, because the alternative is
      finding out in month nine with a professional fee bill already run up.
    </>,
  ],
  [
    "What if we miss a week?",
    "Calls can move within the same fortnight. They do not bank indefinitely — the value is in the rhythm. If your side goes quiet for a month, the engagement still ends on day ninety.",
  ],
  [
    "What happens if we want to go further?",
    "We talk about a mandate. Everything you have paid credits against one booked within sixty days of the engagement ending. No obligation either way — if I do not think your deal is one I should be on, I will tell you.",
  ],
  [
    "Do you sign an NDA?",
    "Yes, mutual, before intake. Nothing about your business, numbers or intentions appears anywhere.",
  ],
  [
    "Do you work outside the US?",
    "Yes. Most of what is interesting right now is cross-border — Greater China, the Gulf, Southeast Asia. Calls run on your time zone within reason.",
  ],
  [
    "What if we need someone on this daily?",
    "Then this is the wrong product and I will say so on the discovery call rather than sell you ninety days you will resent. That is what the free call is for.",
  ],
]

export function DetailsDrawer() {
  return (
    <div className="bg-white border border-slate-200 px-6 md:px-10">
      <Panel title="How the ninety days run">
        <p>
          <Lead>Before we start — intake.</Lead> Financials, cap table, structure chart, and a short
          note on what you think the deal is. I read it before call one; call one is not spent on
          background.
        </p>
        <p>
          <Lead>Weeks 1–4 · Route.</Lead> Where you can list, where you cannot, and what the gap is.
          Ends with the Venue Decision in your hands — the venue question closed, in writing.
        </p>
        <p>
          <Lead>Weeks 5–9 · Blockers.</Lead> The specific things standing between you and a viable
          filing, in priority order. This is where the value lands and it is usually less comfortable
          than weeks one to four.
        </p>
        <p>
          <Lead>Weeks 10–13 · Sequence.</Lead> Who you instruct, in what order, and what you should
          be paying them for. Ends with the Remediation Plan and a clear next twelve months.
        </p>
      </Panel>

      <Panel title="What this is not">
        <p>
          <Lead>Not an underwriting.</Lead> I do not underwrite, place or sell securities — I advise
          the company, which is exactly why the advice is clean. And if your route is Hong Kong, this
          is not sponsor work under the Listing Rules either; that is a separate appointment I help
          you make.
        </p>
        <p>
          <Lead>Not a document service.</Lead> Beyond the two deliverables, nothing is produced for
          you — no prospectus drafting, no model build, no board deck production, no data room. Those
          belong to a mandate.
        </p>
        <p>
          <Lead>Not on-demand.</Lead> One hour a week is one hour a week. If your deal needs someone
          on it daily, this is the wrong product and I will say so on the call.
        </p>
        <p>
          <Lead>Not inclusive of anyone else&apos;s fees.</Lead> See below.
        </p>
      </Panel>

      <Panel title="What the fee covers, and what it does not">
        <p className="text-[#1a2a3a] text-[16px] md:text-[17px] font-medium leading-[1.7]">
          One fee. But it is not the only fee in a listing.
        </p>
        <p>
          A listing is a multi-party process and every other party bills you directly. Budget
          separately for:
        </p>
        <ul className="space-y-3">
          {[
            "Securities counsel in the US, plus counsel in your home jurisdiction",
            "Auditors and, where required, reporting accountants",
            "Underwriters — and, if your route is Hong Kong, a sponsor",
            "Valuers, tax advisers, IP counsel",
            "Transfer agent or share registrar, company secretarial, printing, translation",
            "Exchange listing fees and regulatory filing fees",
            "Roadshow and travel",
          ].map((f) => (
            <li key={f} className={BULLET}>
              {f}
            </li>
          ))}
        </ul>
        <p>
          You engage and pay those parties directly. I do not sit between you and them, and I do not
          take a position in their fees.
        </p>
        <p className="text-[#1a2a3a] text-[15px] md:text-[16px] font-medium leading-[1.8]">
          I do not receive referral fees from, and do not mark up the fees of, any professional I
          introduce you to.
        </p>
        <p>
          Knowing this structure before you commit is part of the point. Most companies underestimate
          the total by an order of magnitude, and they discover it after they have already instructed
          someone.
        </p>
      </Panel>

      <Panel title="Terms and milestones">
        <p className="text-[#1a2a3a] text-[16px] md:text-[17px] font-medium leading-[1.7]">
          Paid in three milestones. Each falls due on delivery, not in advance.
        </p>
        <ul className="space-y-3">
          <li className={BULLET}>
            <Lead>First milestone on engagement</Lead> — contract signed, intake received, first
            working call held
          </li>
          <li className={BULLET}>
            <Lead>Second on delivery of the Venue Decision</Lead> — typically week four or five
          </li>
          <li className={BULLET}>
            <Lead>Third on delivery of the Remediation Plan</Lead> — typically week twelve, or day
            120, whichever comes first
          </li>
        </ul>
        <p>
          <Lead>
            You do not pay a milestone until the document that triggers it is in your hands.
          </Lead>{" "}
          If the first stage does not earn the second, you do not buy the second.
        </p>
        <p>
          The figure is fixed and confirmed on the discovery call — before you commit to anything, in
          writing, with no negotiation theatre. It does not change mid-engagement.
        </p>
        <ul className="space-y-3">
          {[
            "Contracted with and billed to the company. Not to individuals.",
            "Typically ninety days. The milestones govern, not the calendar.",
            "Mutual NDA signed before intake, as standard.",
            "An IPO Path Assessment booked in the last 60 days credits toward your first milestone.",
            "Everything you have paid credits toward an advisory mandate booked within 60 days of the engagement ending.",
          ].map((t) => (
            <li key={t} className={BULLET}>
              {t}
            </li>
          ))}
        </ul>
        <p>
          <Lead>On availability:</Lead> I run a small number of these at once, because every call and
          every email is mine. I will tell you on the discovery call exactly where that stands and
          give you a real start date rather than a waitlist.
        </p>
        <p>
          <Lead>What is guaranteed, and what is not:</Lead> the milestone structure is the guarantee
          — you pay on delivery, not in advance. If I miss a scheduled call and cannot offer a
          replacement slot within seven days, that week is credited and the engagement extends by a
          week. There is no guarantee about your outcome, and you should be wary of anyone in this
          market who offers one.
        </p>
      </Panel>

      {/* All fourteen questions live in this one panel — deliberately not nested accordions. */}
      <Panel title="Questions">
        {FAQS.map(([q, a]) => (
          <div key={q}>
            <h4 className="text-[#1a2a3a] text-[15px] md:text-[16px] font-medium leading-[1.65] mb-1.5">
              {q}
            </h4>
            <p>{a}</p>
          </div>
        ))}
      </Panel>
    </div>
  )
}
