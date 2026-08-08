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
  "A working relationship with a licensed capital markets advisor, for founder-led companies going public for the first time — mostly on Nasdaq. Long enough to close the venue question, name what is actually blocking you, and get the order of operations right."

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
