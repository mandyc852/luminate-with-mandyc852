# Beehiiv Subscribe Form — Integration Guide

## 1. Set up the env var

Add to `.env.local` in your Next.js project root:

```
BEEHIIV_API_KEY=your_api_key_here
BEEHIIV_PUBLICATION_ID=pub_3f18f5c8-216d-45f6-8556-265477009844
```

To get your API key: Beehiiv dashboard → Settings → Integrations → API → Create New Key. Grant `subscriptions:write` scope.

## 2. Copy the files

| Source file | Destination in your Next.js project |
|---|---|
| `api-route-subscribe.ts` | `app/api/subscribe/route.ts` |
| `BeehiivSubscribe.tsx` | `components/BeehiivSubscribe.tsx` |

## 3. Use the component

### Homepage hero (above the "Book a call" section, or replace the CTA area)

```tsx
<BeehiivSubscribe
  variant="hero"
  heading="The fortnightly operator brief"
  subheading="One question to sit with. Capital markets signal. No fluff."
  buttonText="Join"
  utmCampaign="homepage_hero"
/>
```

### /lane page (LANE bundle signup)

```tsx
<BeehiivSubscribe
  variant="hero"
  heading="Questions to Run On"
  subheading="A free one-page PDF built around the LANE cycle — plus phone and desktop wallpapers. Delivered instantly."
  buttonText="Send it to me"
  utmCampaign="lane_bundle"
/>
```

### Footer (site-wide)

```tsx
<BeehiivSubscribe
  variant="compact"
  heading="Get the operator brief"
  buttonText="Join"
  utmCampaign="footer"
/>
```

### /cohort waitlist page

```tsx
<BeehiivSubscribe
  variant="hero"
  heading="Inner Game — Cohort 1 waitlist"
  subheading="6 weeks. 8–12 seats. Sep–Oct 2026. Drop your email and you'll be first to hear."
  buttonText="Get on the list"
  utmCampaign="cohort_waitlist"
/>
```

## 4. How it works

```
Browser form → POST /api/subscribe → Beehiiv API (server-side)
```

- The API key never reaches the browser.
- CORS is not an issue because the call happens server-side.
- `send_welcome_email: true` triggers your Beehiiv welcome sequence.
- UTM params are passed through so you can track which form converts.

## 5. Customization notes

- **Dark theme**: the component uses `bg-neutral-800`, `border-neutral-700`, `text-white` — matching mandyc.me's palette.
- **Button**: white on dark (`bg-white text-black`), same style as the site's existing CTAs.
- **Responsive**: stacks vertically on mobile, inline on desktop.
- **Success state**: replaces the form with a confirmation message.

To change colours, edit the Tailwind classes in `BeehiivSubscribe.tsx`.
