"use client"

import { Cormorant_Garamond, Poppins } from "next/font/google"
import { SiteHeader } from "../../_components/site-header"

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant-garamond",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
})

export function ArticleShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${cormorantGaramond.variable} ${poppins.variable} min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50/80`}
    >
      <style jsx global>{`
        :root {
          --navy-deep: #1a2a3a;
          --gold-primary: #c9a227;
          --text-primary: #3d4f5f;
        }
        body {
          color: var(--text-primary);
          padding-top: 80px;
        }
        h1, h2, h3 {
          font-family: var(--font-cormorant-garamond), serif;
          font-weight: 400;
          color: var(--navy-deep);
          letter-spacing: -0.02em;
        }
        p, li, label, input, button {
          font-family: var(--font-poppins), sans-serif;
        }

        /* Article prose styles */
        .prose-article h2 {
          font-size: 1.75rem;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .prose-article h3 {
          font-size: 1.25rem;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }
        .prose-article p {
          font-size: 0.9375rem;
          line-height: 1.8;
          color: #475569;
          font-weight: 300;
          margin-bottom: 1.25rem;
        }
        .prose-article strong {
          color: #1a2a3a;
          font-weight: 500;
        }
        .prose-article em {
          color: #64748b;
        }
        .prose-article ul, .prose-article ol {
          margin: 1rem 0 1.5rem 0;
          padding-left: 1.5rem;
        }
        .prose-article li {
          font-size: 0.9375rem;
          line-height: 1.8;
          color: #475569;
          font-weight: 300;
          margin-bottom: 0.5rem;
        }
        .prose-article a {
          color: #a68a1f;
          text-decoration: underline;
          text-underline-offset: 2px;
          transition: color 0.2s;
        }
        .prose-article a:hover {
          color: #1a2a3a;
        }
        .prose-article hr {
          border: none;
          border-top: 1px solid #e2e8f0;
          margin: 2.5rem 0;
        }
        .prose-article blockquote {
          border-left: 3px solid #c9a227;
          padding-left: 1.25rem;
          margin: 1.5rem 0;
          color: #64748b;
          font-style: italic;
        }
      `}</style>

      <SiteHeader
        bookHref="https://tidycal.com/mandyc852/30-minute-meeting"
      />

      {children}
    </div>
  )
}
