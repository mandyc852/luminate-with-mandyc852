import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Should You Take Your Company Public? | Free Guide | MandyC.",
  description:
    "The real requirements, real costs, and structuring strategies most founders have never heard of. A free guide from MandyC.",
}

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
