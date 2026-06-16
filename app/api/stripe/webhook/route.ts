import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"
import { Resend } from "resend"
import { supabase } from "@/lib/supabase"

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!)
}

function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

const EXITPRO_URL = "https://exitproai.vercel.app/join?beta=EXITPRO2026"
const TIDYCAL_URL = "https://tidycal.com/mandyc852/30-minute-meeting"
const ADMIN_EMAIL = "mandy@lumina-consults.com"

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get("stripe-signature")

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    event = getStripe().webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error("Stripe signature verification failed:", err)
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session

    const email = session.customer_details?.email ?? session.customer_email
    const name = session.customer_details?.name ?? ""
    const amount = session.amount_total ? session.amount_total / 100 : 0
    const currency = (session.currency ?? "usd").toUpperCase()

    // 1. Log to Supabase
    try {
      await supabase.from("ipo_path_bookings").insert({
        email: email?.toLowerCase().trim(),
        name: name || null,
        stripe_session_id: session.id,
        stripe_payment_intent: session.payment_intent as string | null,
        amount_paid: amount,
        currency,
      })
    } catch (dbErr) {
      console.error("Supabase insert error:", dbErr)
    }

    // 2. Send buyer welcome email
    if (email && process.env.RESEND_API_KEY) {
      const firstName = name.split(" ")[0] || ""
      const greeting = firstName ? `Hi ${firstName},` : "Hi there,"

      try {
        await getResend().emails.send({
          from: "Mandy Cheung <hey@mandyc.me>",
          replyTo: "hey@mandyc852.com",
          to: email,
          subject: "Your IPO Path Assessment — next steps",
          html: `
            <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px; color: #1a2a3a;">
              <p style="font-size: 16px; line-height: 1.6;">${greeting}</p>

              <p style="font-size: 16px; line-height: 1.6;">
                Thank you for booking The IPO Path Assessment. Here's everything you need to get started.
              </p>

              <h2 style="font-size: 18px; margin: 28px 0 12px; color: #1a2a3a;">1. ExitPro access</h2>
              <p style="font-size: 16px; line-height: 1.6;">
                Use the link below to access ExitPro, where you'll complete the structured intake and upload your financials and cap table:
              </p>
              <p style="margin: 16px 0;">
                <a href="${EXITPRO_URL}" style="display: inline-block; background: #c9a227; color: #1a2a3a; padding: 12px 28px; text-decoration: none; font-weight: 600; font-size: 14px; letter-spacing: 0.05em;">
                  Open ExitPro →
                </a>
              </p>

              <h2 style="font-size: 18px; margin: 28px 0 12px; color: #1a2a3a;">2. Schedule the 90-minute working call</h2>
              <p style="font-size: 16px; line-height: 1.6;">
                Once your intake is submitted, book the working call at a time that works for you (CFO or co-founder welcome):
              </p>
              <p style="margin: 16px 0;">
                <a href="${TIDYCAL_URL}" style="display: inline-block; border: 1px solid #c9a227; color: #1a2a3a; padding: 12px 28px; text-decoration: none; font-weight: 600; font-size: 14px; letter-spacing: 0.05em;">
                  Book the Call →
                </a>
              </p>

              <h2 style="font-size: 18px; margin: 28px 0 12px; color: #1a2a3a;">3. What happens next</h2>
              <ul style="font-size: 15px; line-height: 1.8; color: #3d4f5f; padding-left: 20px;">
                <li>You complete the ExitPro intake (Days 1–7)</li>
                <li>We hold the 90-minute working call (Day 7–14)</li>
                <li>Your Listing Path Memo is delivered within 14 days of the call</li>
                <li>Two 30-minute follow-up calls + direct email access for 30 days after delivery</li>
              </ul>

              <p style="font-size: 16px; line-height: 1.6; margin-top: 28px;">
                If you have any questions before the intake, just reply to this email.
              </p>

              <p style="font-size: 16px; line-height: 1.6; margin-top: 32px;">Mandy</p>

              <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 32px 0;" />
              <p style="font-size: 13px; color: #888; line-height: 1.5;">
                Mandy Cheung · <a href="https://mandyc.me" style="color: #888;">mandyc.me</a>
              </p>
            </div>
          `,
        })
      } catch (emailErr) {
        console.error("Buyer welcome email error:", emailErr)
      }

      // 3. Alert email to Mandy
      try {
        await getResend().emails.send({
          from: "MandyC. Site <hey@mandyc.me>",
          to: ADMIN_EMAIL,
          subject: `New IPO Path booking — ${name || email}`,
          html: `
            <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px; color: #1a2a3a;">
              <h2 style="font-size: 20px; margin-bottom: 16px;">New IPO Path Assessment Booking</h2>
              <table style="font-size: 15px; line-height: 1.8; color: #3d4f5f;">
                <tr><td style="padding-right: 16px; font-weight: 600;">Name</td><td>${name || "—"}</td></tr>
                <tr><td style="padding-right: 16px; font-weight: 600;">Email</td><td><a href="mailto:${email}" style="color: #c9a227;">${email}</a></td></tr>
                <tr><td style="padding-right: 16px; font-weight: 600;">Amount</td><td>${currency} ${amount.toLocaleString()}</td></tr>
                <tr><td style="padding-right: 16px; font-weight: 600;">Stripe session</td><td style="font-size: 12px; color: #888;">${session.id}</td></tr>
              </table>
              <p style="font-size: 14px; color: #888; margin-top: 24px;">
                Buyer has received the welcome email with ExitPro access and booking link.
              </p>
            </div>
          `,
        })
      } catch (alertErr) {
        console.error("Admin alert email error:", alertErr)
      }
    }
  }

  return NextResponse.json({ received: true })
}
