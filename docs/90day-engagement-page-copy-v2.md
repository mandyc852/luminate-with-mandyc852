> **Superseded by consulting-page-v3-copy.md (8 August 2026). Retained for its §0 change log.**

# /consulting — The 90-Day Listing Decision
## Page copy v2 — 7 Aug 2026

> ### ⚠️ v3 pricing and scope amendment — supersedes the price and scope stated below
>
> The engagement is now **US$15,000, paid across three milestones**, typically ninety days,
> with **two named written deliverables** — the Venue Decision and the Remediation Plan —
> each of which triggers a payment. The name is unchanged.
>
> **The §2 page copy below has been updated in full and matches the live page.** The
> historical sections have deliberately *not* been rewritten, because they are a record of
> a past decision rather than current copy. Specifically, these are now superseded and
> should be read as history only:
> - the "Same price (US$5,000 / 90 days), same scope" line immediately below
> - §0 row 6 and the "Mandy — one call to make" note, which name **the Decision Note** as
>   the single artifact. That artifact no longer exists; it was replaced by the two
>   deliverables above.
>
> §4's ladder table *has* been updated, because it is a factual price table rather than a
> narrative record.

> ### ⚠️ v4 amendment — figures withdrawn from the page; Section 4 corrected
>
> **The fee figures no longer appear on the page.** The milestone *structure* stays fully
> visible; the amount is confirmed on the discovery call and in the engagement letter. The
> §2 copy below reflects this — every dollar amount for the engagement has been removed,
> including from the JSON-LD offer block (the `price` property was deleted outright rather
> than zeroed). The v3 figures above are retained as history only.
>
> **The referral-fee line is confirmed true and now publishes** as ordinary body copy at
> the end of Section 9. The amber CONFIRM callout is gone.
>
> **Section 4 has been replaced** with the verified copy from `Section4-verification-report.md`,
> which corrects "LSE premium" to the LSE Main Market, restates the Criteria A limbs, and
> re-sources the 18C investor test to HKEX guidance rather than the rulebook. Its dated line
> now reads 8 August 2026, which resolves the `[DATE]` placeholder on `/consulting`. The
> `[DATE]` on `/terms` is untouched and still needs your date.
>
> **New:** an eligibility checker is embedded at the end of Section 4. Its copy is recorded
> below under "SECTION 4a".

> ### ⚠️ v5 amendment — Corridor Deal Book added
>
> A filterable, client-side table of six verified corridor listings now sits at the end of
> the Section 4 band, after the eligibility checker. Its copy is recorded below under
> "SECTION 4b".
>
> **The dataset is fixed.** Every value records a fact settled at pricing or debut — nothing
> that goes stale, and nothing to refresh. No current prices, no valuation multiples, no
> performance-since-listing, no projections. It grows only by approved batches; do not add
> deals to it.
>
> **Correction to the brief:** the brief stated that filtering to an empty set is impossible
> with these two dimensions. It is not. Five venue/year combinations return zero from this
> dataset — HKEX+2024, HKEX+2023, ADX+2025, DFM+2025 and DFM+2023 — so the empty state is
> reachable in normal use, not just theoretically. It is implemented, and the filter chips
> carry cross-filtered counts so a zero result is visible before it is clicked.

> ### ⚠️ v6 amendment — Section 4 rewritten for first-time listers; checker removed
>
> **Section 4 is replaced and is now roughly half its previous length.** The audience is
> companies that have never listed anywhere, so the secondary-listing material is gone:
> the Gulf/Criteria A–B routing paragraph and the Chapter 18C investor-history paragraph
> are both cut. The three points are now venue-as-investor-access, the overestimated
> burden of a US listing, and blockers discovered in the listing year. The dated line
> reads 8 August 2026. **Do not pad it back out.**
>
> **The eligibility checker is deleted** — component, data and imports. It was built
> entirely around Hong Kong secondary-listing routes (Criteria A/B, WVR, Qualifying
> Exchange), which is the material this rewrite removes. "SECTION 4a" is struck from this
> doc accordingly.
>
> **Deal Book copy changes:** heading is now "What the market actually did."; the CTA line
> is "It is what your numbers support."; the WeRide note becomes "A US listing first, Hong
> Kong added when the time was right."; the Alef note drops "Gulf". The dataset itself is
> unchanged and still must not be added to or refreshed.
>
> **Outstanding:** Section 2 card 01 still reads "Chapter 18C, a secondary listing under
> 19C" — approved copy from v2 that this round did not supply a replacement for. It is the
> only remaining rules-jargon string on the page and sits oddly beside the new
> first-time-lister framing. Flagged, not edited. **Resolved in v7 below.**

> ### ⚠️ v7 amendment — Nasdaq-first positioning stated explicitly
>
> The buyer is a first-time lister, usually a smaller founder-led company, and mostly
> heading for the US markets. This pass removes the remaining Hong-Kong-advisor
> assumptions and says the positioning out loud:
>
> - **Section 1**'s conflicted-sources list is in US terms — investment bankers and
>   securities counsel, not sponsors and lawyers.
> - **Section 2 card 01** drops GEM / Chapter 18C / 19C and now reads "Hong Kong, Nasdaq,
>   NYSE American — or not yet." This closes the v6 outstanding item above.
> - **Section 4's coda** is replaced. The non-public-filing point is gone; the closing
>   point is now the aftermarket — listing without research coverage, investor access and
>   a story institutions can keep buying leaves a smaller company public and orphaned.
> - **Section 5** and the **FAQ** reframe the conflict disclosure around underwriting
>   rather than sponsorship: no underwriting, no placing, no selling securities, with the
>   Hong Kong sponsor point kept as a subordinate clause.
> - **Section 11** leads with Nasdaq, states that most listings advised on are US ones for
>   first-time founder-led companies, and that Hong Kong enters only when the investor base
>   fits.
>
> Also in this commit: the hero gains the Nasdaq MarketSite photograph as a background,
> behind the same navy scrim `/ipo-path` uses. `Section4-verification-report.md` moves into
> `docs/`.

**Supersedes v1.** Same price (US$5,000 / 90 days), same scope (weekly call + email). What changed is the *frame*: v1 sold thirteen hours, v2 sells a decision. Full change log at §4.

---

## §0 — What changed from v1, and why

| # | v1 flaw | Fix in v2 |
|---|---|---|
| 1 | Sold **time** — "13 weekly hours" invites hourly-rate math (US$385/hr) and caps value at what a buyer thinks an hour is worth | Reframed around the **decision**. The hours are the delivery mechanism, mentioned once, subordinate. Named the thing she owns: a venue decision the buyer can defend to their board |
| 2 | **Zero proof.** "60+ transactions" is a claim, not evidence | New Section 4 — proof by demonstration. Three specific, current, counterintuitive things about HK listing eligibility. Judgment shown, not asserted |
| 3 | **Scarcity was a bluff.** "Six at a time" when the real number of active engagements is zero | Replaced with an honest construction that says the same thing without the claim |
| 4 | **Two-path close was filler** — imported from the reference funnel, generic even de-emoji'd | Cut entirely |
| 5 | **Fee section undercut the price** — "US$5,000 is small next to millions" is the same anchoring move as the value stack, and positions her as a small line item | Exclusion list kept and strengthened. Anchoring argument removed. Reframed as budget honesty |
| 6 | **Nothing named** — no mechanism, no artifact, nothing referable to a peer | Named method (Route → Blockers → Sequence) and one named artifact: **the Decision Note** |
| 7 | **FAQ buried at position 11** — the strongest writing on the page | Moved to position 7, ahead of the timeline and terms |

**Mandy — one call to make:** fix #6 adds a single one-page **Decision Note** emailed at day 90. It is the only thing added back after your scope cut. It exists because without a named artifact this engagement is unreferable — nobody can describe it to a peer. One page, written once, at the end. If you want it gone, strike it from Section 5 and the FAQ and the page still stands.

---

## §1 — Accuracy gate (do not skip)

**Section 4 is the highest-value and highest-risk section on the page.** It cites live HKEX eligibility rules from the July 2026 Competitiveness Review conclusions. A wrong threshold in a public page that a CFO repeats to their board is not a typo — it is reputational damage.

Before publishing, verify every figure in Section 4 word-for-word against source, the same way you verify CPT lecture content:

- [ ] Criteria B threshold (HK$6bn, 2 full FYs) and the Qualifying Exchange restriction — Rule 19C.05A
- [ ] Criteria A threshold (HK$3bn, 5 full FYs) and the "not centred on Greater China" limb — Rule 19C.05A
- [ ] ADX and DFM are Recognised Stock Exchanges but NOT Qualifying Exchanges
- [ ] 18C Sophisticated Independent Investor pathfinder test — 12 months pre-application, aggregate ≥10% or ≥HK$1.5bn, ≥2 holding ≥3% each
- [ ] Southbound Stock Connect excludes secondary listings; primary/dual-primary in HSCI only
- [ ] Enhanced return mechanism — HKEX publishes names and roles of professional parties "involved" plus the reason for return

Source PDFs are already in `CPT Academy/reference-data/hkex/`. Add a visible "Rules stated as at [date]" line to the section — see the copy below.

**Also check before publishing:** whether a public page mapping listing eligibility for non-HK issuers sits cleanly inside your Type 6 perimeter, or needs a "this is a rules summary, not advice, and creates no advisory relationship" line. I'm flagging it, not resolving it.

---

## §2 — Page copy

---

### HERO

**Eyebrow:** 90-Day Engagement

# Ninety days to a listing decision you can defend to your board.

**Subhead:**
Not a readiness report. Not a mandate. A standing working relationship with a licensed capital markets advisor who has no economic interest in you doing the deal — long enough to get the venue question closed, the blockers named, and the sequence right.

**Price line:** Paid in three milestones, each on delivery · typically 90 days · contracted with the company

**[Book a Confidential Call]** — 30 minutes, no charge

---

### SECTION 1 — The position you're probably in

You are somewhere between "we should think about listing" and "we have a banker." That gap is where companies lose eighteen months.

The problem is not that you lack information. It is that every source of it is conflicted:

- Your investment bankers want the mandate, so everything is feasible.
- Your auditor answers the question you asked, not the one you should have asked.
- Your securities counsel will tell you whether it is legal, never whether it is a good idea.
- Your board has opinions but not reps.
- Everyone who has actually done this is on the sell side, and is not spending an hour a week with you for free.

What is missing is not a document. It is someone who has sat on the other side of the table sixty-plus times and is not trying to win anything from you.

---

### SECTION 2 — What you have at the end

Three things. Nothing else is promised.

**01 · A venue decision, closed**
Hong Kong, Nasdaq, NYSE American — or not yet. Not a list of options: a decision, with the reasoning written down, and a clear statement of what specifically rules out the routes you did not take.

**02 · Your blockers, named and sequenced**
Not everything that could ever matter. The three or four things that will actually stop your deal — structure, cap table, related-party exposure, track record, jurisdictional centre of gravity — in the order they must be fixed, with a realistic view of who fixes them and how long it takes.

**03 · An instruction sequence**
Who you appoint, in what order, and what you should be paying them for. The largest avoidable cost in a pre-IPO process is professional fees burned educating advisors about a decision you had not made yet.

---

### SECTION 3 — How it works

**One 60-minute working call each week, direct with me.** Same slot, thirteen weeks. No associate, no team, no handoff. You set the agenda — you bring what is live that week.

**Email between calls.** Send the document, the term sheet, the question at 11pm. Response within 48 hours, Monday to Friday. No volume cap, no ticketing system.

**A short written recap after each call.** Sent by email — what was decided, what you are doing before next week, what I am checking. Forwardable to your board without translation.

**The Venue Decision.** Typically week four or five. Written, board-ready: which route your numbers actually support, the reasoning behind it, and exactly what disqualifies you from the routes you are not taking. This is the document that closes the venue question.

**The Remediation Plan.** Typically week twelve. The three or four things standing between you and a viable filing, in the order they must be fixed, with who fixes each one and roughly how long it takes — followed by your instruction sequence for the next twelve months.

That is the engagement. There is deliberately nothing else in it.

---

### SECTION 4 — Three things first-time listers get wrong

*Stated as at 8 August 2026. Rules and market practice move; this section moves with them.*

**They pick the exchange by prestige. It is an investor-access decision.**
The venue question is not "Hong Kong or Nasdaq" as brands — it is who actually buys your story, and at what multiple. US sector-specialist capital lives on Nasdaq; Greater China and pan-Asian money trades in Hong Kong. Pick the wrong room and you get the worst outcome in this business: listed, and ignored.

**They overestimate the burden of a US listing.**
Boards regularly rule out Nasdaq on compliance fear. A foreign private issuer files an annual report and material-event updates — not the quarterly cycle US domestic companies run — and can keep many home-country governance practices. The US route is often lighter than the board assumed, and the decision deserves real numbers, not folklore.

**They discover their real blockers in the listing year — the most expensive year to fix them.**
Cap table, group structure, related-party exposure, the state of the audit trail: these are set years before an IPO, and they decide which routes are open long before any banker is hired. Fixed early, they are housekeeping. Fixed under a filing deadline, they are seven figures and a delay. Naming them now is most of what these ninety days are for.

**And one thing the banks will not lead with:** the listing is the start, not the finish. A smaller company that lists without an aftermarket plan — research coverage, investor access, a story institutions can keep buying — ends up public and orphaned. Venue, structure and timing decide that outcome long before the bell-ringing photo.

---

### SECTION 4b — Corridor Deal Book

Filterable client-side table at the end of the Section 4 band, after the eligibility checker.

**Heading:** What the market actually did.
**Subhead:** Verified at pricing and debut — no projections, and deliberately no cherry-picking. The ones that fell on debut are in here too.

**Context line, above the table:** For scale: Hong Kong raised HK$286.8bn in IPO funds in 2025, per HKEX's official funds-raised statistics.

**Filters:** chip toggles with cross-filtered counts — Venue (All / HKEX / ADX / DFM) and Year (All / 2025 / 2024 / 2023). Empty state: "No deals match — clear filters."

**The six deals** (facts, then the italic note beneath):

| Company | Venue | Type | Date | Size |
|---|---|---|---|---|
| WeRide | HKEX | Dual-primary (Ch. 18C) | Nov 2025 | HK$2.39bn (~US$306M) |
| CATL | HKEX | Listing | May 2025 | ~US$4.6bn |
| Talabat | DFM | IPO | Dec 2024 | US$2.0bn |
| Lulu Retail | ADX | IPO | Nov 2024 | ~US$1.72bn |
| Alef Education | ADX | IPO | Jun 2024 | AED 1.89bn (~US$515M) |
| Presight AI | ADX | IPO | Mar 2023 | US$496M |

- **WeRide** — Priced at HK$27.10. First Chapter 18C dual-primary with a WVR structure — a Nasdaq-listed company adding a Hong Kong primary listing. *A US listing first, Hong Kong added when the time was right.*
- **CATL** — The world's largest listing of 2025 at pricing; rose over 16% on debut. *The proof of Hong Kong's depth.*
- **Talabat** — Largest global tech IPO of 2024; priced at the top of the range; fell around 7% on debut. *Priced for the issuer, not the aftermarket — the tension every IPO has to resolve.*
- **Lulu Retail** — The UAE's biggest IPO of 2024; the 100th company listed on ADX; closed flat on debut. *Size alone does not price a deal.*
- **Alef Education** — Around 39× oversubscribed, drawing roughly US$20bn in orders. *Demand for a technology story, measured in orders.*
- **Presight AI** — Around 136× oversubscribed — nearly US$25.8bn in orders for a US$496M offering. *The most oversubscribed deal in this table.*

**Footer:** Facts as recorded at pricing and debut; sourced from exchange and press coverage, verified 8 August 2026. This table is a record, not a recommendation — and no two deals price alike.

**CTA line:** The question is not what these companies did. It is what your numbers support.
**[Bring this to the call]**

---

### SECTION 5 — What this is not

**Not a document service.** Beyond the two deliverables above, nothing is produced for you — no prospectus drafting, no model build, no board deck production, no data room. Those belong to a mandate.

**Not an underwriting.** I do not underwrite, place or sell securities — I advise the company, which is exactly why the advice is clean. And if your route is Hong Kong, this is not sponsor work under the Listing Rules either; the sponsor is a separate appointment I help you make.

**Not on-demand.** One hour a week is one hour a week. If your deal needs someone on it daily, this is the wrong product and I will say so on the call rather than sell it to you.

**Not inclusive of anyone else's fees.** See Section 9.

---

### SECTION 6 — Who this is for

**This works if:**

- You are 6 to 36 months from a listing decision, or deciding whether to make one
- The business generates real profit — roughly US$750K+ net, though shape matters more than the number
- Someone senior can hold an hour a week and act between calls
- You want a second opinion from someone not trying to win a mandate from you

**This does not work if:**

- You need capital in the next ninety days — different problem, this will not solve it
- You want documents built rather than directed
- Nobody on your side can decide between calls
- You are looking for assurance that you will list

---

### SECTION 7 — Questions

**What does it cost?**
A fixed fee, paid in three equal milestones — one to start, one when the Venue Decision is delivered, one when the Remediation Plan is. I confirm the figure on the discovery call and in the engagement letter before you commit to anything, and it does not move mid-engagement. It is priced as the narrow version of what I do: a full advisory mandate costs many times more, because a mandate means I am running your process.

**Why not just publish the number?**
Because the right conversation starts with your situation, not with a price tag — and because the structure matters more than the figure. You pay each third on delivery of a named document. If the first document does not tell you something you did not know, you stop, and most of the fee stays in your pocket. That allocation of risk is the honest signal; a number on a webpage is not.

**Who am I actually working with?**
Me. Every call, every email. No associate, no handoff. It is also why I take a small number of these at once.

**Are you an underwriter or a broker?**
No. I do not underwrite, place shares or sell securities. I advise the company — which means I have no economic interest in whether you do the deal, only in whether it is the right one. When you need underwriters, I help you choose them, negotiate them, and manage them. (And if your route is Hong Kong, this is not sponsor work under the Listing Rules — that is a separate appointment I help you make.)

**Does the fee include lawyers, auditors or sponsor fees?**
No. It covers my time only. Third parties bill you directly and those fees are substantially larger than this one. Section 9 sets out what to budget for.

**Can this be billed to the company?**
It has to be. The engagement is contracted with the company entity, not an individual. This is corporate advisory work and belongs on the company's books.

**How is this different from the IPO Path Assessment?**
The Assessment is a single document — thirty days, one deep call, an 8-12 page Listing Path Memo for your board. This is a working relationship — thirteen weeks through a live decision, with the Venue Decision and the Remediation Plan produced along the way. Buy the Assessment if you want an answer. Buy this if you want someone alongside you while you reach one and then act on it. Plenty of people do the Assessment first, and part of it credits toward your first milestone here.

**What if we decide not to list?**
Then it worked. Roughly a third of these end in "not yet, and here is precisely what changes that" — which is worth considerably more than the fee, because the alternative is finding out in month nine with a professional fee bill already run up.

**What if we miss a week?**
Calls can move within the same fortnight. They do not bank indefinitely — the value is in the rhythm. If your side goes quiet for a month, the engagement still ends on day ninety.

**What happens if we want to go further?**
We talk about a mandate. Everything you have paid credits against one booked within sixty days of the engagement ending. No obligation either way — if I do not think your deal is one I should be on, I will tell you.

**Do you sign an NDA?**
Yes, mutual, before intake. Nothing about your business, numbers or intentions appears anywhere.

**Do you work outside Hong Kong?**
Yes, and most of what is interesting right now is cross-border — mainland China, the Gulf, Southeast Asia. Calls run on your time zone within reason.

**What if we need someone on this daily?**
Then this is the wrong product and I will say so on the discovery call rather than sell you ninety days you will resent. That is what the free call is for.

---

### SECTION 8 — How the ninety days run

**Before we start — Intake**
Financials, cap table, structure chart, and a short note on what you think the deal is. I read it before call one. Call one is not spent on background.

**Weeks 1–4 · Route**
Where you can list, where you cannot, and what the gap is. Ends with the Venue Decision in your hands — the venue question closed, in writing. The second milestone falls due here.

**Weeks 5–9 · Blockers**
The specific things standing between you and a viable filing, in priority order. This is where the value lands and it is usually less comfortable than weeks one to four.

**Weeks 10–13 · Sequence**
Who you instruct, in what order, and what you should be paying them for. Ends with the Remediation Plan and a clear next twelve months.

---

### SECTION 9 — What the fee covers, and what it does not

**One fee. But it is not the only fee in a listing.**

A listing is a multi-party process and every other party bills you directly. Budget separately for:

- Legal counsel — HK, US, PRC or offshore, depending on structure
- Reporting accountants and auditors
- Sponsor and underwriter fees
- Valuers, tax advisers, IP counsel
- Company secretarial, share registrar, printing, translation
- Exchange listing fees and regulatory filing fees
- Roadshow and travel

You engage and pay those parties directly. I do not sit between you and them, and I do not take a position in their fees.

**I do not receive referral fees from, and do not mark up the fees of, any professional I introduce you to.**

Knowing this structure before you commit is part of the point. Most companies underestimate the total by an order of magnitude, and they discover it after they have already instructed someone.

---

### SECTION 10 — Terms

**Paid in three milestones. Each falls due on delivery, not in advance.**

- First milestone on engagement — contract signed, intake received, first working call held
- Second on delivery of the Venue Decision — typically week four or five
- Third on delivery of the Remediation Plan — typically week twelve, or day 120, whichever comes first

You do not pay a milestone until the document that triggers it is in your hands. If the first stage does not earn the second, you do not buy the second.

The figure is fixed and confirmed on the discovery call — before you commit to anything, in writing, with no negotiation theatre. It does not change mid-engagement.

- **Contracted with and billed to the company. Not to individuals.**
- Typically ninety days. The milestones govern, not the calendar
- Mutual NDA signed before intake, as standard
- An IPO Path Assessment booked in the last 60 days credits toward your first milestone
- Everything you have paid credits toward an advisory mandate booked within 60 days of the engagement ending
- Third-party professional fees are not included — see the section above

**On availability:** I run a small number of these at once, because every call and every email is mine. I will tell you on the discovery call exactly where that stands and give you a real start date rather than a waitlist.

**What is guaranteed, and what is not:** the milestone structure is the guarantee — you pay on delivery, not in advance. If I miss a scheduled call and cannot offer a replacement slot within seven days, that week is credited and the engagement extends by a week. There is no guarantee about your outcome, and you should be wary of anyone in this market who offers one.

---

### SECTION 11 — About Mandy

Ten-plus years across Nasdaq, HKEX and global markets. Sixty-plus transactions in IPOs, M&A and cross-border deals. SFC Type 6 licensed (advising on corporate finance).

Most of the listings I work on are US ones — Nasdaq and NYSE American — for founder-led companies listing for the first time. Hong Kong enters the conversation when the investor base genuinely fits, not as a default. I have sat on the sell side; I know what your bankers are optimising for, what your auditor will and will not sign, and which of the things you are currently worried about actually matter. Section 4 is a fair sample of how I think.

---

### SECTION 12 — What happens next

1. **Book a confidential call.** Thirty minutes, no charge, no deck. You describe the business and the timeline.
2. **I tell you which of my offers fits** — or that none of them do. That happens and it is fine.
3. **If it is this one:** contract and NDA, intake pack, first call within ten working days.

**[Book a Confidential Call]**

---

## §3 — Build notes

- Voice check passed. No instance of: sacred, quantum, high vibe, manifest, abundance, alignment, energy, permission to, you've got this, hustle, grind, journey.
- No scarcity claim, no countdown, no launch pricing, no value stack, no anchor price, no outcome language anywhere.
- Third-party fee exclusion appears in Section 5, Section 9 and the FAQ. Intentional. Keep the repetition.
- Section 4 is the conversion engine. If anything gets cut for length, it is not this.
- Two unresolved items before publishing: the accuracy gate at §1, and the referral-fee line in Section 9.

---

## §4 — Ladder (unchanged from v1)

| Rung | Offer | Price | Credit |
|---|---|---|---|
| 1 | IPO Path Assessment | US$2,500 / 30 days | US$1,000 → first milestone of the 90-Day Listing Decision; 100% → Advisory Mandate |
| 2 | 90-Day Listing Decision | US$15,000 / 3 milestones / typically 90 days | Everything paid → Advisory Mandate (booked within 60 days) |
| 3 | Advisory Mandate | Milestone-based | — |
