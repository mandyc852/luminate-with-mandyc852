import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IPO Insights & Resources | MandyC.",
  description:
    "Articles on Nasdaq IPO preparation, costs, tax strategies, and scaling — updated for 2026 regulations.",
  openGraph: {
    title: "IPO Insights & Resources | MandyC.",
    description:
      "Articles on Nasdaq IPO preparation, costs, tax strategies, and scaling — updated for 2026 regulations.",
  },
}

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
