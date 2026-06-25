import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Fortnightly Operator Brief | MandyC.",
  description:
    "One question, every two weeks. For people who do serious work and want to show up better at it. No frameworks. No productivity hacks.",
}

export default function SubscribeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
