import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function GET(request: NextRequest) {
  // Vercel cron sends an Authorization header with CRON_SECRET
  const authHeader = request.headers.get("authorization")
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    // Lightweight query — just enough to keep Supabase from pausing
    await supabase.from("subscribers").select("count").limit(1)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Ping error:", err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
