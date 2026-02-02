import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Founder's Identity Reset | Luminate with MandyC",
  description:
    "A 5-minute daily audio practice for scaling founders and CEOs. Nervous system calibration and pre-meeting reset — for high-stakes leadership.",
}

export default function LeapLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
