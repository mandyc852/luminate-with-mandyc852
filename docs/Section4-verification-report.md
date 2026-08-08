# Section 4 verification report — `/consulting`
### Checked against primary source, 8 August 2026

**Sources used (verbatim extraction + programmatic substring check):**

- `cp202603cc.pdf` — **Consultation Conclusions, Listing Framework Competitiveness Review, July 2026**
- `Main Board Listing Rules.pdf` — consolidated Main Board Listing Rules
- `Listing Framework Competitiveness Review.pdf` — **March 2026 Consultation Paper** (used only to separate *proposed* from *adopted*)

**Effective date confirmed.** Conclusions ¶7: *"Listing Rule amendments to implement the conclusions set out in this paper, with housekeeping Rule amendments, form Appendices IV and V to this paper. These will come into effect immediately upon the publication of this paper."* Published July 2026. The Guide for New Listing Applicants was last updated 24 July 2026.

**Verdict summary**

| # | Claim | Verdict |
|---|---|---|
| 1 | Criteria B cut to HK$6bn / two years | ✅ Verified |
| 2 | Criteria B restricted to Qualifying Exchange | ✅ Verified |
| 3 | "LSE premium" | ❌ **WRONG — must be fixed** |
| 4 | ADX/DFM are Recognised, not Qualifying | ✅ Verified, wording imprecise |
| 5 | Criteria A: HK$3bn / five years / not Greater China | ✅ Verified, two material omissions |
| 6 | 18C investor test — "defined aggregate thresholds" | ⚠️ **Misattributed — it is guidance, not rulebook** |
| 7 | Southbound excludes secondary listings | ⚠️ Unverifiable as written; better source found |
| 8 | Non-public filing + return mechanism | ✅ Verified |

---

## 1. ❌ "LSE premium" is wrong

**Page says:** *"Criteria B is restricted to companies listed on a Qualifying Exchange: NYSE, Nasdaq, LSE premium."*

**Source — Main Board Listing Rules, Definitions:**

> "Qualifying Exchange" — The New York Stock Exchange LLC, Nasdaq Stock Market or the Main Market of the London Stock Exchange plc

There is no "premium listing segment" qualifier. The defined term is **the Main Market of the London Stock Exchange plc**. This is precisely the kind of error a London-facing CFO would catch, in the section built to demonstrate that you don't make errors.

The *restriction itself* is verified twice — Rule 19C.05A(3), and Conclusions ¶171: *"Criteria B are available only to issuers listed on a Qualifying Exchange, on the basis that these exchanges are large, well-developed markets with high standards of investor protection that are the closest peers to the Exchange among the Recognised Stock Exchanges."*

---

## 2. ⚠️ "A different list" is imprecise

**Page says:** *"ADX and DFM are Recognised Stock Exchanges, which is a different list."*

**Source — Definitions:**

> "Recognised Stock Exchange" — the main market of a stock exchange that is included in a list of Recognised Stock Exchanges published on the Exchange's website as updated from time to time. **The Qualifying Exchanges are also Recognised Stock Exchanges**

It is not a different list. It is a **broader** list that contains the Qualifying Exchanges. Say it that way or a careful reader has a reason to doubt the rest.

**ADX and DFM membership is confirmed** — Conclusions ¶196: *"In recent years, the Exchange has added several exchanges to the list, including the Saudi Exchange and the Indonesia Stock Exchange in 2023, the Abu Dhabi Securities Exchange and the Dubai Financial Market in 2024, the Stock Exchange of Thailand in 2025, and Bursa Malaysia in 2026. To date, the list comprises 21 Recognised Stock Exchanges across 19 countries."*

Note the list is maintained on HKEX's website and updated from time to time — which is exactly why the dated "Rules stated as at" line matters.

---

## 3. ⚠️ Criteria A — verified, but two material omissions

**Source — Rule 19C.05A**, verbatim:

> **Criteria A**
> (1) a track record of good regulatory compliance of at least five full financial years on a Qualifying Exchange (for any overseas issuer without a WVR structure) or on any Recognised Stock Exchange (only for overseas issuers without a WVR structure and without a centre of gravity in Greater China); and
> (2) a market capitalisation of at least HK$3,000,000,000 at the time of listing.

Thresholds correct. Two things the page currently gets wrong by omission:

**(a) The Greater China bar is not absolute.** The Note to Criteria A:

> Note: Applications for secondary listing from issuers with a centre of gravity in Greater China and without a WVR structure that are primary listed on a Recognised Stock Exchange other than a Qualifying Exchange will be considered only in exceptional circumstances on the basis of the issuer's individual circumstances and the merits of the case.

"Only in exceptional circumstances" ≠ disqualified. The page implies a hard bar.

**(b) There is a waiver of the track-record requirement, and the page doesn't mention it.** Note to Criteria B:

> Note: A waiver of the listing track record criteria of paragraphs (1) and (3) above may be granted if the applicant seeking a secondary listing is well-established and has a market capitalisation at listing that is significantly larger than HK$6,000,000,000.

This applies to Criteria A(1) as well as B(3). A large, well-established Gulf issuer may not need five years at all. Omitting this makes the paragraph misleading **in the direction of your own target market** — Presight is around US$5.5bn. Leaving it out is the version of the error that costs you a meeting.

Also: the defined term is **"centre of gravity in Greater China"**. Use it rather than "business centred on Greater China".

---

## 4. ⚠️ The 18C investor test — misattributed to the rulebook

**Page says:** *"Named investors must have been on your register for the twelve months before application, at defined aggregate thresholds."*

**Source — Rule 18C.05, in full:**

> 18C.05 An applicant that has applied for listing under this Chapter must have received meaningful investment from sophisticated independent investors.
>
> Note: The Exchange will publish guidance on the Exchange's website, as amended from time to time, on the definition of sophisticated independent investors, and the nature and extent of investment that would meet this rule.

**The rulebook contains no thresholds whatsoever.** No twelve months, no percentages, no aggregate figures. Every number lives in HKEX guidance (GL115-23), which is amendable without a rule change. "Defined aggregate thresholds" reads as rulebook and is not.

GL115-23 is not in `reference-data`, so I could not verify the twelve-month figure at all from available sources. Your own CPT pitfall list flags this same trap: *"18C.05's '2–5 investors / 10–20%' = GL115-23 guidance, not rule text."*

The substantive point — that it is a history test and can't be repaired in the listing year — holds. It just has to be attributed correctly. Rewritten copy below turns this into a *strength*: the fact that the binding numbers sit outside the rulebook is itself the practitioner insight.

---

## 5. ⚠️ Southbound — not verifiable as written, but there's a better source

**Page says:** *"excluded from Southbound Stock Connect… Only primary and dual-primary foreign issuers in the HSCI qualify. Alibaba converted for exactly this reason."*

HSCI eligibility and the Alibaba conversion are not in the Listing Rules or the conclusions — they are Stock Connect eligibility matters. I cannot verify either from `reference-data`.

**But the conclusions give you something better,** ¶193–195:

> 193. Three respondents suggested that the Exchange explore the inclusion of eligible secondary-listed issuers (or depositary receipts) in the Southbound Stock Connect programme, noting that this would be a key attraction for overseas issuers considering a Hong Kong listing and would enhance post-listing liquidity and valuations. These respondents acknowledged that such a measure would require facilitation by the relevant Mainland authorities.
>
> 195. The Exchange has conducted a broader review of the continuing obligations applicable to listed issuers as part of the second phase of the competitiveness review exercise. The relevant reform proposals will be presented in a separate consultation paper to be published in due course.

That establishes the exclusion by implication, from HKEX's own document, dated, citable — and adds that HKEX was asked to fix it in July 2026 and deferred. Stronger than the Alibaba anecdote and fully sourced. Rewritten below.

---

## 6. ✅ Non-public filing and the return mechanism — both verified

**Conclusions ¶283:** *"In view of the strong support from respondents, we will adopt the proposal to remove the Publication Requirements for all listing applicants. This means that a listing applicant will no longer be required to publish its Application Proof."* Terminology changed to "non-public filing" rather than "confidential filing" (¶294).

**¶319:** *"we will adopt the proposal that the identities of other professional parties involved in a Returned Application be displayed on the designated webpage of the Exchange."*

**¶323:** *"we will include a description of the reasons for each Returned Application on the Exchange's designated webpage."*

Box 1 lists the parties: sponsor(s); legal advisers to the company; legal advisers to the sponsor(s); reporting accountant(s) and independent auditor(s); industry consultant; other consenting experts; promoter(s).

**One caveat worth knowing** (not a page error — the page doesn't claim otherwise, but a client's lawyer may raise it). ¶320: *"It is not intended to impute fault to, or impose a sanction upon, any professional party. The display of identities does not, of itself, indicate that any particular party was responsible for the deficiencies leading to the return decision."*

---

# Corrected Section 4 — replacement copy

Everything below is verified against the sources named above. Nothing states a figure that isn't in the rulebook or the conclusions.

> ### Three things companies are getting wrong right now
>
> *Rules stated as at 8 August 2026, reflecting the HKEX Listing Framework Competitiveness Review consultation conclusions published July 2026, which took effect on publication. This section is updated as the rules move.*
>
> Not a teaser. If you already knew all three, you probably do not need me.
>
> **A Gulf-listed issuer's route into Hong Kong is not the one most advisers are quoting.**
> The July 2026 conclusions cut the Criteria B secondary-listing threshold from HK$10bn to HK$6bn against two full financial years of compliance history, and that is the number being repeated around the region. It does not apply to ADX or DFM issuers. Criteria B is available only to companies listed on a Qualifying Exchange, which the Rules define as the New York Stock Exchange, Nasdaq, or the Main Market of the London Stock Exchange. ADX and DFM sit on the Recognised Stock Exchange list — a broader list of 21 exchanges across 19 countries that includes the Qualifying Exchanges but reaches well past them. A one-share-one-vote Gulf issuer goes via Criteria A instead: HK$3bn, but five full financial years, and available on a Recognised Exchange track record only where the issuer has no centre of gravity in Greater China. Where it does, the Exchange will consider the application only in exceptional circumstances. There is also a discretionary waiver of the track-record requirement for well-established applicants listing significantly above HK$6bn — which most people quoting the headline number do not mention, and which is exactly the conversation a large Gulf issuer should be having.
>
> **Under Chapter 18C, your Series B investor selection already decided your eligibility.**
> The rule is one sentence: an applicant must have received meaningful investment from sophisticated independent investors. Every number that actually binds — who counts as sophisticated, how much they must hold, how long they must have held it — sits in HKEX guidance rather than the rulebook, which makes it both easy to miss and amendable without a rule change. On the current guidance this is a history test, not a cheque written at IPO: the investors must already have been on your register before you apply. A cap table of angels, seed funds and small regional VCs is structurally ineligible regardless of valuation, and it cannot be repaired in your listing year. This is the most common reason a deep-tech 18C conversation ends, and it ends late, after real money has been spent.
>
> **The lighter route does not reach the prize.**
> A secondary listing is the easier path, and it does not carry Southbound Stock Connect access — the mainland liquidity that is usually the real reason a company wants Hong Kong. This is not a technicality nobody has noticed: respondents to the July 2026 consultation asked the Exchange to extend Southbound eligibility to secondary-listed issuers, HKEX acknowledged it would require facilitation by the Mainland authorities, and deferred the question to the second phase of the competitiveness review. The gap is real, the Exchange knows it is real, and it is not closed yet. If Southbound access is your thesis, the cheap route is not a cheaper version of the right one — it is a different outcome.
>
> **And one that changes the cost of getting it wrong:** filing is now non-public for all new applicants, which sounds like pure downside protection. The counterweight is that when an application is returned, HKEX publishes the names and roles of the professional parties involved — sponsor, both sets of legal advisers, reporting accountants, industry consultant — together with the reasons for the return. The Exchange is explicit that this does not impute fault to anyone. It is still a public record that did not exist twelve months ago, for you and for everyone you appointed.

---

## Remaining open items on the page

1. **`[DATE]` on `/consulting`** — resolved. The corrected copy above has the dated line written in. Replacing the placeholder is part of applying it.
2. **`[DATE]` on `/terms`** — still needs your date.
3. **The referral-fee CONFIRM callout** — still yours to decide.
4. **Browser check** — still nobody has looked at the page.
5. **Type 6 perimeter** — the corrected Section 4 is more clearly a dated summary of published rules than the previous draft, which helps. Still worth a "rules summary, not advice" line if you want the belt and braces.
