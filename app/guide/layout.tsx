import type { Metadata } from "next"

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
const baseUrl = siteUrl
  ? /^https?:\/\//i.test(siteUrl)
    ? siteUrl
    : `https://${siteUrl}`
  : "https://mandyc.me"

const title = "Should You Take Your Company Public? | Free Guide | MandyC."
const description =
  "The real requirements, real costs, and structuring strategies most founders have never heard of. A free guide from MandyC."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${baseUrl}/guide`,
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/guide`,
    title,
    description,
    siteName: "MandyC.",
    images: [
      {
        url: "/Wallstreet.jpg",
        width: 1200,
        height: 630,
        alt: "Free IPO guide — MandyC.",
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

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
