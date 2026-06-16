import type { Metadata } from "next"

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
const baseUrl = siteUrl
  ? /^https?:\/\//i.test(siteUrl)
    ? siteUrl
    : `https://${siteUrl}`
  : "https://mandyc.me"

const title = "The IPO Path Assessment | MandyC."
const description =
  "A 30-day sprint that delivers a written verdict on whether your company is ready to list — with the next move spelled out. US$2,500, fully creditable toward continuation. SFC Type 6 Licensed. 60+ transactions across HKEX and NASDAQ."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${baseUrl}/ipo-path`,
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/ipo-path`,
    title,
    description,
    siteName: "MandyC.",
    images: [
      {
        url: "/Wallstreet.jpg",
        width: 1200,
        height: 630,
        alt: "The IPO Path Assessment — MandyC.",
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

export default function IPOPathLayout({ children }: { children: React.ReactNode }) {
  return children
}
