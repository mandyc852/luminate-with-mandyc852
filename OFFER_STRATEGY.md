# MandyC. — Offer Strategy

A reference doc for the funnels, lead magnets, voice, and outstanding work on the MandyC. site. Updated June 2026.

---

## 1. Positioning

**B2B corporate consulting** — Hong Kong capital markets advisor to builders and operators. Cross-border (HKEX + NASDAQ + global). Companies, not founders, in primary marketing copy. The shift away from "founders" was deliberate: the actual buyer is the executive running a company that's preparing for a capital event.

**Two lenses, one practice:**
1. **Capital markets advisor** — SFC Type 6 licensed, 60+ transactions, US$200M+ in deal value
2. **Joe Dispenza practitioner** — inner game, nervous system, state control under pressure

These lenses are the moat. Capital markets advisors don't write about the leader's operating system. Mindset practitioners don't sit in deal rooms. The overlap is what makes the MandyC. brand distinct.

**The thesis** (from the diagnostic): *"Most companies don't fail at the capital event itself. They fail in the 6 to 18 months leading up to it. Lawyers catch structural gaps. Auditors catch financial ones. The gaps that actually kill the raise or the listing live somewhere else: in the leader."*

---

## 2. The funnel architecture

Four lead-capture doors. All write to the same Supabase `subscribers` table with a `source_page` tag that determines what gets delivered.

| URL | Audience | Commitment | source_page | Artifact delivered | Homepage promo |
|---|---|---|---|---|---|
| **`/executive-readiness`** | Executives 6–18 months from a capital event | High — 10-minute scored diagnostic | `executive-readiness` | `executive-readiness-diagnostic.pdf` (11 pages, scored, band-segmented) | Primary CTA in hero + lead-magnet banner |
| **`/lane`** | Operators wanting a weekly practice (broader appeal) | Low — email only | `lane` | `lane.pdf` (one-page landscape) + 2 wallpapers | Secondary link in lead-magnet banner |
| **`/the-five-questions`** | Backward-compat for shared URLs | Low — email only | `five-questions` | Same as diagnostic PDF | None (page exists but unlinked from homepage) |
| **`/guide`** | IPO-specific interest | Low — email only | `guide` | `Should-you-go-public-guide.pdf` | None (separate funnel, paid traffic / SEO target) |

### Value hierarchy

```
HIGH SIGNAL ────────────────────────────────────────► LOW COMMITMENT
                                                     
/executive-readiness (scored)  →  /lane (weekly practice)
       │                                │
       └────► band placement             └────► wallpapers + 2 PDFs
              dimension insights                 (print + interactive)
              email + PDF + call CTA             call CTA + biweekly brief
```

The scored diagnostic is the **high-signal qualifier**. LANE is the **broad-appeal practice**. The IPO Guide is the **niche conversion tool** for paid traffic on specific keywords.

### Conversion logic

- The diagnostic is for visitors with the patience to self-assess. They become warm leads with behavioral data (their band + scores).
- LANE is for visitors who'd never do a 10-minute self-assessment but will type an email for something interesting. They become brand-aware leads.
- Both nurture toward the same outcome: a strategy call.

---

## 3. The artifacts

### Print PDFs (`public/lead-magnet/` and `public/downloads/`)

| File | Pages | Purpose | Delivered to |
|---|---|---|---|
| `executive-readiness-diagnostic.pdf` | 11 | The full Executive Readiness Diagnostic with scored questions, insights, bands | `/executive-readiness`, `/the-five-questions` |
| `lane.pdf` | 1 | LANE weekly inquiry, one-page landscape A4. Mandala on the left, 2×2 question grid on the right, tagline footer. Pen and paper. | `/lane` |
| `Should-you-go-public-guide.pdf` | — | IPO Readiness Guide (pre-existing) | `/guide` |

### Wallpapers (`public/lead-magnet/`)

| File | Dimensions | Purpose |
|---|---|---|
| `wallpaper-phone.png` | 1170 × 2532 | iPhone lock screen. Shows "Am I working on the lever or the noise?" | `/lane` |
| `wallpaper-desktop.png` | 2560 × 1440 | Desktop wallpaper. Same question, centered. | `/lane` |

### Source files

| File | What |
|---|---|
| `public/lead-magnet/lane-framework.png` | The AI-generated LANE mandala (Ideogram/Midjourney output), transparent background |
| `build-scripts/lane-pdf.html` | Print PDF template |
| `build-scripts/lane-fillable.html` | Interactive PDF template |
| `build-scripts/build-pdf.js` | Puppeteer-driven HTML→PDF generator |
| `build-scripts/build-wallpapers.js` | Wallpaper renderer |
| `app/executive-readiness/print/page.tsx` | Source for executive-readiness-diagnostic.pdf (regenerated via Chrome headless) |

To rebuild LANE assets after edits: `npm run build:lead-magnet`.

---

## 4. Voice and design system

### Voice rules

- **No em-dashes.** Use periods or commas.
- **Sentence case for headings**, not Title Case.
- **18-word sentence ceiling** in body copy.
- **"Companies" not "founders"** in primary positioning (founders is acceptable inside the diagnostic content, but homepage and meta read "companies").
- **No hype.** Confident, restrained, lived-in.
- **Voice references:** Cal Newport's bluntness, Joe Dispenza's interiority, the steadiness of a senior advisor who's seen 60+ transactions.

### Design system

- **Colors:**
  - Navy: `#1A2A3A` (primary), `#0F1A24` (deeper variant for dark sections), `#020302` (LANE cover, matches mandala image)
  - Gold: `#C9A227`, `#D4B84A` (lighter), `#A68A1F` (darker)
  - Cream: `#FAF9F7`
  - Slate: `#3D4F5F` (body text on light), `#B8B5A8` (secondary text on dark)
- **Fonts:**
  - Cormorant Garamond (headings, italic accents)
  - Poppins (body, UI, small caps labels)
- **No rounded corners** anywhere on UI (`rounded-none`). Exception: 4px on PDF diagram boxes.
- **Sharp, premium, restrained.** Gold accents are punctuation, not background.

---

## 5. Email automation — outstanding work

**Current state:** All four funnels capture emails to Supabase. **No automation is wired yet.** The thank-you pages say "sent to your inbox" — that's aspirational until automation lands.

### What needs to happen

1. **Pick a transactional email tool.** Welcome emails are drafted for Beehiiv but Resend, MailerLite, or ConvertKit would also work.
2. **Set up Supabase Database Webhook** on `subscribers` table → triggers email tool on insert.
3. **Branch by `source_page`** to attach the right files and send the right sequence.

### Sequences

**LANE** (`source_page = "lane"`) — fully drafted in `build-scripts/welcome-emails.md`:
- **Email 1 (immediate):** Delivers `lane.pdf` + both wallpapers
- **Email 2 (day 3):** "The question I ask most" — focuses on *Am I working on the lever or the noise?*
- **Email 3 (day 7):** "Most operators sit on this one for years" — focuses on *Who would I have to become to make that real?*

**Executive Readiness Diagnostic** (`source_page = "executive-readiness"`) — **not yet drafted**:
- Email 1 (immediate): Delivers `executive-readiness-diagnostic.pdf` with band-appropriate framing
- Could include band-specific Email 2 sequences (Foundation/Quarterly/Sharpening/Mandate)

**5 Questions** (`source_page = "five-questions"`) — **not yet drafted**:
- Same artifact as diagnostic; could share Email 1 with executive-readiness sequence

**IPO Guide** (`source_page = "guide"`) — **status unknown**:
- Existing funnel; check whether automation already exists from prior setup

### Ongoing cadence

After welcome sequence completes, all subscribers fold into the **biweekly operator brief** (one email every other week, same register as the artifacts). Not yet drafted.

---

## 6. Things that should be true but aren't yet

| Item | Why it matters | Effort |
|---|---|---|
| **Email automation wired** | Thank-you pages currently lie about delivery | ~2 hours setup + branching |
| **Diagnostic + 5Q welcome emails** | These funnels capture emails but no email goes out | ~30 min drafting + paste into automation |
| **`/terms` page references "5-Minute Founder's Reset"** | Old product, no longer offered. Should remove/update lines 84 and 153 of `app/terms/page.tsx`. | 5 min |
| **The 4 unused old logo PNGs** | `mandyc-logo.png`, `mandyc-header-logo.png`, etc. — not referenced anywhere. Safe to delete (deferred per earlier decision). | 1 min |
| **The 8.8MB unused profile photo** | `public/mandy-profile-new.JPG` — never linked. Slows clones. (Deferred.) | 1 min |
| **Inner-game essay (the "lens collision" piece)** | The single highest-positioning artifact you could write. Defers Joe Dispenza × capital markets into a flagship essay. Deferred per your call. | ~2 hours writing |

---

## 7. Decisions made, locked in

- **Lead magnet consolidation:** Both `/executive-readiness` and `/the-five-questions` deliver the same Executive Readiness Diagnostic PDF. LANE is the second distinct artifact.
- **Homepage promotion:** Diagnostic primary, LANE secondary, IPO Guide and 5 Questions unpromoted (URL traffic only).
- **DIAGNOSTIC nav link:** Currently top-level in homepage header. Audit flagged it as insider jargon; final call deferred.
- **No paid PDFs anywhere on the site.** All artifacts are free for email exchange.
- **LANE pen-and-paper framing is the recommended path.** The interactive PDF exists as an accommodation, not a replacement.
- **`/the-five-questions` stays alive** for any URLs already shared, but homepage points to LANE.
- **The Executive Readiness Diagnostic interactive flow is the high-signal funnel.** It does the scoring work; the PDF is the artifact, not the conversion point.

---

## 8. Files in this repo worth knowing about

| Path | Purpose |
|---|---|
| `OFFER_STRATEGY.md` | This document |
| `build-scripts/welcome-emails.md` | LANE welcome email sequence (paste into automation) |
| `build-scripts/lane-pdf.html` | LANE one-pager template |
| `build-scripts/build-pdf.js` | PDF generator (Puppeteer + system Chrome) |
| `build-scripts/build-wallpapers.js` | Wallpaper renderer |
| `app/_components/site-header.tsx` | Shared nav |
| `app/_components/home-interactions.tsx` | `BookCallButton` + `LeadMagnetForm` |
| `app/executive-readiness/` | Diagnostic route + lib + print page |
| `app/lane/` | LANE landing + form + thank-you |
| `app/the-five-questions/` | Backward-compat landing |
| `app/api/waitlist/route.ts` | Single API endpoint, routes by `source_page` |
| `lib/supabase.ts` | Supabase client |

Obsolete docs that can be deleted when convenient (no current use):
- `CLAUDE_DESIGN_QUESTION.md`
- `CLAUDE_UX_UI_QUESTION.md`
- `SETUP_CONVERTKIT.md` (you migrated to Supabase)
- `scripts/generate-circular-text-png.mjs` (references nonexistent assets)
