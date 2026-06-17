import type { Metadata } from "next"
import { Cormorant_Garamond, Poppins } from "next/font/google"
import "./globals.css"

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-cormorant-garamond",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-poppins",
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
const baseUrl = siteUrl
  ? /^https?:\/\//i.test(siteUrl)
    ? siteUrl
    : `https://${siteUrl}`
  : "http://localhost:3001"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "MandyC. | Capital Markets Advisory",
  description:
    "Mandy Cheung. Hong Kong SFC Type 6 licensed capital markets advisor. 60+ transactions, US$200M+ in deal value across HKEX and NASDAQ.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    url: baseUrl,
    siteName: "MandyC.",
    title: "MandyC. | Capital Markets Advisory",
    description:
      "Mandy Cheung. Hong Kong SFC Type 6 licensed capital markets advisor. 60+ transactions, US$200M+ in deal value across HKEX and NASDAQ.",
    images: [
      {
        url: "/Wallstreet.jpg",
        width: 1200,
        height: 630,
        alt: "MandyC. Capital Markets Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MandyC. | Capital Markets Advisory",
    description:
      "Mandy Cheung. Hong Kong SFC Type 6 licensed capital markets advisor. 60+ transactions, US$200M+ in deal value across HKEX and NASDAQ.",
    images: ["/Wallstreet.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "96x96" },
    ],
    apple: "/apple-icon.png",
    other: [
      { rel: "manifest", url: "/favicon/site.webmanifest" },
    ],
  },
  appleWebApp: {
    title: "MandyC.",
  },
  other: {
    "apple-mobile-web-app-title": "MandyC.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${poppins.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
