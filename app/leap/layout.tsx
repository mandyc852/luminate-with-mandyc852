import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Founder's Identity Reset | Free Audio for Founders | MandyC.",
  description:
    "A free 5-minute daily audio practice for founders building something great. Rewire how you think, decide, and lead under pressure — from MandyC.",
}

export default function LeapLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
