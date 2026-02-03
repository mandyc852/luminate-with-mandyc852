import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Founder's Identity Reset | Luminate with Mandy C",
  description:
    "A 5-minute daily audio practice for founders and leaders. Calibrate your nervous system and reset before high-stakes decisions — free audio from Luminate with Mandy C.",
}

export default function LeapLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
