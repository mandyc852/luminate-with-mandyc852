// ============================================================
// FILE: app/api/subscribe/route.ts
// ============================================================
// Next.js API route — proxies form submissions to Beehiiv.
// Keeps your API key server-side (never exposed to the browser).
//
// ENV VARS REQUIRED (add to .env.local):
//   BEEHIIV_API_KEY=your_api_key_here
//   BEEHIIV_PUBLICATION_ID=pub_3f18f5c8-216d-45f6-8556-265477009844
// ============================================================

import { NextRequest, NextResponse } from "next/server";

const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY!;
const BEEHIIV_PUBLICATION_ID =
  process.env.BEEHIIV_PUBLICATION_ID ?? "pub_3f18f5c8-216d-45f6-8556-265477009844";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, utm_source, utm_medium, utm_campaign, referring_site } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email address required." },
        { status: 400 }
      );
    }

    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${BEEHIIV_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: utm_source ?? "mandyc.me",
          utm_medium: utm_medium ?? "website",
          utm_campaign: utm_campaign ?? "embed_form",
          referring_site: referring_site ?? "https://mandyc.me",
        }),
      }
    );

    if (!res.ok) {
      const errBody = await res.text();
      console.error("[Beehiiv subscribe] API error:", res.status, errBody);
      return NextResponse.json(
        { error: "Subscription failed. Please try again." },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json({ success: true, data: data.data });
  } catch (err) {
    console.error("[Beehiiv subscribe] Unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
