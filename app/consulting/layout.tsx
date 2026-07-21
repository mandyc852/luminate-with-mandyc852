import type { Metadata } from "next"

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
const baseUrl = siteUrl
  ? /^https?:\/\//i.test(siteUrl)
    ? siteUrl
    : `https://${siteUrl}`
  : "https://mandyc.me"

const title = "Strategic Consulting — Mandy Cheung"
const description =
  "A raise. A restructuring. A listing timeline that won't wait. You need an advisor who's done this before — not a firm that assigns you to a junior."

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
        alt: "Strategic Consulting — Mandy Cheung",
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
