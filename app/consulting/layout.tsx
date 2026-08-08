import type { Metadata } from "next"

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
const baseUrl = siteUrl
  ? /^https?:\/\//i.test(siteUrl)
    ? siteUrl
    : `https://${siteUrl}`
  : "https://mandyc.me"

const title = "The 90-Day Listing Decision | MandyC."
const description =
  "Not a readiness report. Not a mandate. A standing working relationship with a licensed capital markets advisor who has no economic interest in you doing the deal — long enough to get the venue question closed, the blockers named, and the sequence right."

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
        alt: "The 90-Day Listing Decision — MandyC.",
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
