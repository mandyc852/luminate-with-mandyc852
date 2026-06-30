import type { Metadata } from "next"

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
const baseUrl = siteUrl
  ? /^https?:\/\//i.test(siteUrl)
    ? siteUrl
    : `https://${siteUrl}`
  : "https://mandyc.me"

const title = "Should You Take Your Company Public? | MandyC."
const description =
  "Most companies assume listing is not for them. The real requirements, real costs, and structuring strategies that change who qualifies. Capital markets advisory from Hong Kong to NASDAQ and HKEX."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${baseUrl}/ipo`,
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/ipo`,
    title,
    description,
    siteName: "MandyC.",
    images: [
      {
        url: "/Wallstreet.jpg",
        width: 1200,
        height: 630,
        alt: "Should you take your company public? — MandyC.",
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

export default function IPOLayout({ children }: { children: React.ReactNode }) {
  return children
}
