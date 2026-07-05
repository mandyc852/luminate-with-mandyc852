import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import { Resend } from "resend"
import { readFile } from "fs/promises"
import path from "path"

const resend = new Resend(process.env.RESEND_API_KEY)

// Fire-and-forget — failures here never block the user
async function saveToSupabase(email: string, firstName: string | null, sourcePage: string, sourcePlacement: string) {
  try {
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
    if (error) console.error("Supabase error:", error)
  } catch (err) {
    console.error("Supabase error:", err)
  }
}

async function addToBeehiiv(email: string, sourcePage?: string) {
  try {
    await fetch(
      "https://vrdeizaaunxbmbmcgtzr.supabase.co/functions/v1/beehiiv-subscribe",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.toLowerCase().trim(),
          utm_source: sourcePage === "cohort" ? "cohort-waitlist" : (sourcePage || "mandyc.me"),
        }),
      }
    )
  } catch (err) {
    console.error("Beehiiv error:", err)
  }
}

const LEAD_MAGNETS: Record<
  string,
  { file: string; subject: string; description: string }
> = {
  guide: {
    file: "Should-you-go-public-guide.pdf",
    subject: "Your IPO Readiness Guide is here",
    description:
      "Here's the guide you requested — a practical framework for evaluating whether going public is right for your company, and what to prepare before you start the process.",
  },
  "five-questions": {
    file: "executive-readiness-diagnostic.pdf",
    subject: "Your Executive Readiness Diagnostic is here",
    description:
      "Here's the diagnostic you requested — a structured way to assess where you stand before your next leadership chapter.",
  },
}

const REDIRECT_MAP: Record<string, string> = {
  guide: "/guide/thank-you",
  "five-questions": "/the-five-questions/thank-you",
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

    const cleanEmail = email.toLowerCase().trim()
    const name = firstName || ""
    const greeting = name ? `Hi ${name},` : "Hi there,"

    // Send email first — Supabase being paused must never block delivery
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

        await resend.emails.send({
          from: "Mandy Cheung <hey@mandyc.me>",
          replyTo: "hey@mandyc852.com",
          to: cleanEmail,
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
          attachments: [{ filename: magnet.file, content: pdfBuffer }],
        })
      } catch (emailError) {
        console.error("Resend email error:", emailError)
      }
    }

    // Non-blocking background tasks — failures are logged but never returned to the user
    saveToSupabase(cleanEmail, firstName || null, sourcePage, sourcePlacement)
    addToBeehiiv(cleanEmail, sourcePage)

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
