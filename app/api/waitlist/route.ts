import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import { Resend } from "resend"
import { readFile } from "fs/promises"
import path from "path"

const resend = new Resend(process.env.RESEND_API_KEY)

const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY
const BEEHIIV_PUBLICATION_ID = "3f18f5c8-216d-45f6-8556-265477009844"

async function addToBeehiiv(email: string, source?: string) {
  if (!BEEHIIV_API_KEY) return
  try {
    await fetch(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${BEEHIIV_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.toLowerCase().trim(),
          reactivate_existing: true,
          send_welcome_email: false,
          utm_source: source || "mandyc-website",
          utm_medium: "waitlist",
        }),
      }
    )
  } catch (err) {
    console.error("Beehiiv error:", err)
  }
}

const LEAD_MAGNETS: Record<
  string,
  { file: string; subject: string; heading: string; description: string }
> = {
  guide: {
    file: "Should-you-go-public-guide.pdf",
    subject: "Your IPO Readiness Guide is here",
    heading: "Your IPO Readiness Guide",
    description:
      "Here's the guide you requested — a practical framework for evaluating whether going public is right for your company, and what to prepare before you start the process.",
  },
  lane: {
    file: "lane.pdf",
    subject: "Your LANE Framework is here",
    heading: "The LANE Framework",
    description:
      "Here's the LANE Framework you requested — four questions designed to help you reflect on what's driving your next move as a founder.",
  },
  "five-questions": {
    file: "executive-readiness-diagnostic.pdf",
    subject: "Your Executive Readiness Diagnostic is here",
    heading: "Your Executive Readiness Diagnostic",
    description:
      "Here's the diagnostic you requested — a structured way to assess where you stand before your next leadership chapter.",
  },
}

const REDIRECT_MAP: Record<string, string> = {
  guide: "/guide/thank-you",
  "five-questions": "/the-five-questions/thank-you",
  lane: "/lane/thank-you",
}

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, sourcePage, sourcePlacement } =
      await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      )
    }

    const { error } = await supabase
      .from("subscribers")
      .upsert(
        {
          email: email.toLowerCase().trim(),
          first_name: firstName || null,
          source_page: sourcePage || "unknown",
          source_placement: sourcePlacement || "hero",
        },
        { onConflict: "email,source_page" }
      )

    if (error) {
      console.error("Supabase error:", error)
      const message =
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong. Please try again."
      return NextResponse.json({ error: message }, { status: 500 })
    }

    addToBeehiiv(email, sourcePage || "website")

    const magnet = LEAD_MAGNETS[sourcePage]
    if (magnet && process.env.RESEND_API_KEY) {
      try {
        const pdfPath = path.join(
          process.cwd(),
          "public",
          "lead-magnet",
          magnet.file
        )
        const pdfBuffer = await readFile(pdfPath)

        const name = firstName || ""
        const greeting = name ? `Hi ${name},` : "Hi there,"

        await resend.emails.send({
          from: "Mandy Cheung <hey@mandyc.me>",
          replyTo: "hey@mandyc852.com",
          to: email.toLowerCase().trim(),
          subject: magnet.subject,
          html: `
            <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px; color: #1a2a3a;">
              <p style="font-size: 16px; line-height: 1.6;">${greeting}</p>
              <p style="font-size: 16px; line-height: 1.6;">${magnet.description}</p>
              <p style="font-size: 16px; line-height: 1.6;">The PDF is attached to this email — save it somewhere you'll find it again.</p>
              <p style="font-size: 16px; line-height: 1.6;">If you'd like to talk through any of it, you can <a href="https://tidycal.com/mandyc852/30-minute-meeting" style="color: #c9a227;">book a 30-minute call</a> anytime.</p>
              <p style="font-size: 16px; line-height: 1.6; margin-top: 32px;">Mandy</p>
              <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 32px 0;" />
              <p style="font-size: 13px; color: #888; line-height: 1.5;">Mandy Cheung · <a href="https://mandyc.me" style="color: #888;">mandyc.me</a></p>
            </div>
          `,
          attachments: [
            {
              filename: magnet.file,
              content: pdfBuffer,
            },
          ],
        })
      } catch (emailError) {
        console.error("Resend email error:", emailError)
      }
    }

    return NextResponse.json({
      message: "Success!",
      success: true,
      redirect: REDIRECT_MAP[sourcePage] || null,
    })
  } catch (error) {
    console.error("API error:", error)
    const message =
      process.env.NODE_ENV === "development" && error instanceof Error
        ? error.message
        : "Something went wrong. Please try again."
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
