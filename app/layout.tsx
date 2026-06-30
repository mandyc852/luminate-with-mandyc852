import type { Metadata } from "next"
import { Cormorant_Garamond, Playfair_Display, Poppins } from "next/font/google"
import "./globals.css"

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-cormorant-garamond",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair-display",
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
  title: "MandyC. | IPO & Capital Markets Advisory | Hong Kong",
  description:
    "Strategic IPO and capital markets advisory for founders preparing to raise, restructure, or list on HKEX or Nasdaq. SFC Type 6 licensed. 60+ transactions.",
  alternates: {
    canonical: baseUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    url: baseUrl,
    siteName: "MandyC.",
    locale: "en_US",
    title: "MandyC. | IPO & Capital Markets Advisory | Hong Kong",
    description:
      "Strategic IPO and capital markets advisory for founders preparing to raise, restructure, or list on HKEX or Nasdaq. SFC Type 6 licensed. 60+ transactions.",
    images: [
      {
        url: "/Wallstreet.jpg",
        width: 1200,
        height: 630,
        alt: "MandyC. IPO & Capital Markets Advisory — Hong Kong",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MandyC. | IPO & Capital Markets Advisory | Hong Kong",
    description:
      "Strategic IPO and capital markets advisory for founders preparing to raise, restructure, or list on HKEX or Nasdaq. SFC Type 6 licensed. 60+ transactions.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "MandyC.",
    url: baseUrl,
    logo: `${baseUrl}/Logo%202%20black.png`,
    image: `${baseUrl}/Wallstreet.jpg`,
    description:
      "Strategic IPO and capital markets advisory for founders preparing to raise, restructure, or list on HKEX or Nasdaq. SFC Type 6 licensed. 60+ transactions.",
    founder: {
      "@type": "Person",
      name: "Mandy Cheung",
      jobTitle: "Capital Markets Advisor",
      url: baseUrl,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hong Kong",
      addressCountry: "HK",
    },
    areaServed: ["Hong Kong", "United States"],
    knowsAbout: [
      "IPO advisory",
      "Capital markets",
      "HKEX listing",
      "NASDAQ listing",
      "Corporate finance",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional License",
      name: "SFC Type 6 License — Advising on Corporate Finance",
    },
    sameAs: [
      "https://www.linkedin.com/in/mandycheung852/",
    ],
  }

  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${playfairDisplay.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
