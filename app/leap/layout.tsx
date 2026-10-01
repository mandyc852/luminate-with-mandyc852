import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The 5-Minute Identity Reset | Free Audio | MandyC subliminal",
  description:
    "A free 5-minute daily audio from MandyC subliminal — binaural beats layered with calm affirmations to reset how you think, decide, and carry yourself under pressure.",
  icons: {
    icon: [{ url: "/leap/icon.png", type: "image/png", sizes: "96x96" }],
    apple: "/leap/apple-icon.png",
  },
}

export default function LeapLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
