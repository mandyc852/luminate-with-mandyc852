import type { Metadata } from "next"

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
const baseUrl = siteUrl
  ? /^https?:\/\//i.test(siteUrl)
    ? siteUrl
    : `https://${siteUrl}`
  : "https://mandyc.me"

const title = "The Fortnightly Operator Brief | MandyC."
const description =
  "One question, every two weeks. For people who do serious work and want to show up better at it. No frameworks. No productivity hacks."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${baseUrl}/subscribe`,
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/subscribe`,
    title,
    description,
    siteName: "MandyC.",
    images: [
      {
        url: "/Wallstreet.jpg",
        width: 1200,
        height: 630,
        alt: "The Fortnightly Operator Brief — MandyC.",
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

export default function SubscribeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
