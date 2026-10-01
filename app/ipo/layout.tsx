import type { Metadata } from "next"

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
const baseUrl = siteUrl
  ? /^https?:\/\//i.test(siteUrl)
    ? siteUrl
    : `https://${siteUrl}`
  : "https://mandyc.me"

const title =
  "IPO Advisory — The 90-Day Readiness Engagement | MandyC. | Hong Kong"
const description =
  "Ninety-day IPO readiness engagement for founders preparing to list on NASDAQ or HKEX. Group restructuring, financial record repair, filing-ready in 90 days. Fixed fee US$15,000. SFC Type 6 licensed."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${baseUrl}/ipo`,
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/ipo`,
    siteName: "MandyC.",
    locale: "en_US",
    title,
    description,
    images: [
      {
        url: "/Wallstreet.jpg",
        width: 1200,
        height: 630,
        alt: "IPO Advisory — The 90-Day Readiness Engagement | MandyC.",
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

/* FAQPage markup — questions and answers verbatim from the on-page FAQ.
   Eligible for Google's FAQ rich results. */
const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does it cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 90-Day Readiness Engagement is a fixed fee of US$15,000, agreed in writing before anything starts, staged so that payments fall due as work is delivered rather than in advance. If your structure turns out to need something different, I will tell you on the call — quoting blind would be guessing, and you would be right not to trust the number.",
      },
    },
    {
      "@type": "Question",
      name: "Isn't a US listing an enormous compliance burden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lighter than most boards assume. A foreign private issuer files an annual report and material-event updates — not the quarterly cycle US domestic companies run — and can keep many home-country governance practices. It is a real obligation, but it is rarely the reason not to list.",
      },
    },
    {
      "@type": "Question",
      name: "Are you an underwriter or a broker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. I do not underwrite, place shares or sell securities. I advise the company, which means I have no economic interest in whether you list — only in whether you are ready. When you need underwriters, I help you choose them and manage them.",
      },
    },
    {
      "@type": "Question",
      name: "Who am I actually working with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Me. Every call, every email. No associate, no handoff. It is also why I take a small number of these at once.",
      },
    },
    {
      "@type": "Question",
      name: "Does the fee include lawyers and auditors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. It covers my work only. You appoint and pay those firms directly, and their fees together are substantially larger than mine — which is exactly why the sequence matters, and why I do not receive referral fees from, or mark up the fees of, anyone I introduce you to.",
      },
    },
    {
      "@type": "Question",
      name: "What if the answer is that we should not list?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Then you have saved a great deal of money and a year of your life. It happens, I will say so plainly, and I would rather say it in week two than have you find out in month nine with a professional fee bill already run up.",
      },
    },
    {
      "@type": "Question",
      name: "Do you sign an NDA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, mutual, before you send me anything. Nothing about your business, your numbers or your intentions appears anywhere.",
      },
    },
  ],
}

export default function IPOLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
      {children}
    </>
  )
}
