import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Should You Take Your Company Public? | MandyC.",
  description:
    "Most companies assume listing is not for them. The real requirements, real costs, and structuring strategies that change who qualifies. Capital markets advisory from Hong Kong to NASDAQ and HKEX.",
}

export default function IPOLayout({ children }: { children: React.ReactNode }) {
  return children
}
