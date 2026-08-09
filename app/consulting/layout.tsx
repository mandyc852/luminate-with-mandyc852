import type { Metadata } from "next"

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
const baseUrl = siteUrl
  ? /^https?:\/\//i.test(siteUrl)
    ? siteUrl
    : `https://${siteUrl}`
  : "https://mandyc.me"

const title = "The 90-Day Readiness Engagement | MandyC."
const description =
  "You have decided to list. What stands between you and a filing is rarely the decision — it is how your group is owned and what your financial records will survive. I spend ninety days fixing both."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${baseUrl}/consulting`,
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/consulting`,
    title,
    description,
    siteName: "MandyC.",
    images: [
      {
        url: "/Wallstreet.jpg",
        width: 1200,
        height: 630,
        alt: "The 90-Day Readiness Engagement — MandyC.",
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

export default function ConsultingLayout({ children }: { children: React.ReactNode }) {
  return children
}
