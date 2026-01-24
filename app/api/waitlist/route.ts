import { type NextRequest, NextResponse } from "next/server"

// ConvertKit API configuration
const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY || "pODPwFSIDilb7gBuh2wERA"
// Form ID from your ConvertKit script tag: data-uid="aed6248b3d"
const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_FORM_ID || "aed6248b3d"

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, sourcePage, sourcePlacement } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      )
    }

    // Form ID is set to "aed6248b3d" from your ConvertKit script tag

    // Subscribe to ConvertKit
    try {
      const convertkitResponse = await fetch(
        `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            api_key: CONVERTKIT_API_KEY,
            email: email,
            first_name: firstName || undefined,
            // Optional: Add tags or custom fields
            tags: [],
            fields: {
              source_page: sourcePage || "luminate",
              source_placement: sourcePlacement || "opt-in-form",
            },
          }),
        }
      )

      const convertkitData = await convertkitResponse.json()

      if (!convertkitResponse.ok) {
        console.error("ConvertKit error:", convertkitData)
        throw new Error(convertkitData.error || "Failed to subscribe")
      }

      console.log("ConvertKit subscription successful:", { email, firstName })

      return NextResponse.json({
        message: "Thank you! Check your email for the audio.",
        success: true,
      })
    } catch (convertkitError) {
      console.error("ConvertKit API error:", convertkitError)
      // Still return success to user, but log the error
      // You might want to change this behavior based on your needs
      return NextResponse.json({
        message: "Thank you! Check your email for the audio.",
        success: true,
        // In development, you might want to return the error
        // error: convertkitError instanceof Error ? convertkitError.message : "Subscription failed"
      })
    }
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
