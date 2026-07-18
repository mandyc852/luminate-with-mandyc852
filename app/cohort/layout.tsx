import type { Metadata } from "next"

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
const baseUrl = siteUrl
  ? /^https?:\/\//i.test(siteUrl)
    ? siteUrl
    : `https://${siteUrl}`
  : "https://mandyc.me"

const title = "The Inner Game Cohort | MandyC."
const description =
  "6 weeks. 8–12 seats. A live cohort for high performers who’ve noticed the constraint isn’t strategy — it’s internal. September 2026."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${baseUrl}/cohort`,
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/cohort`,
    title,
    description,
    siteName: "MandyC.",
    images: [
      {
        url: "/Wallstreet.jpg",
        width: 1200,
        height: 630,
        alt: "The Inner Game Cohort — MandyC.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/Wallstreet.jpg"],
  },
}

export default function CohortLayout({ children }: { children: React.ReactNode }) {
  return children
}
