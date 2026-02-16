import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, sourcePage, sourcePlacement } = await request.json()

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

    return NextResponse.json({
      message: "Success!",
      success: true,
      redirect: sourcePage === "guide" ? "/guide/thank-you" : "/leap/thank-you",
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
