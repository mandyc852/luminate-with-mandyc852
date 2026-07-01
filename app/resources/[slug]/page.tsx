import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import Markdown from "react-markdown"
import { getAllArticles, getArticleBySlug } from "@/lib/articles"
import { ArticleShell } from "./article-shell"

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: `${article.title} | MandyC.`,
    description: article.description,
    openGraph: {
      title: `${article.title} | MandyC.`,
      description: article.description,
    },
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const categoryLabel = article.category === "ipo" ? "IPO" : "Strategy"

  return (
    <ArticleShell>
      {/* Hero */}
      <section className="py-12 md:py-20 px-6 bg-[#1a2a3a]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/resources"
            className="inline-flex items-center text-slate-400 hover:text-[#c9a227] text-sm font-light tracking-wide transition-colors mb-8"
          >
            ← Back to Resources
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block text-[10px] font-medium tracking-[0.2em] uppercase px-2.5 py-1 bg-[#c9a227]/20 text-[#f5e6b3] border border-[#c9a227]/30">
              {categoryLabel}
            </span>
            {article.updatedAt && (
              <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-slate-400">
                Updated {formatDate(article.updatedAt)}
              </span>
            )}
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.15] font-normal mb-5"
            style={{
              fontFamily: "var(--font-cormorant-garamond), serif",
              background:
                "linear-gradient(135deg, #FFFFFF 0%, #f5e6b3 40%, #c9a227 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {article.title}
          </h1>

          <p
            className="text-slate-400 text-sm font-light"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Published {formatDate(article.publishedAt)}
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <article className="max-w-3xl mx-auto prose-article">
          <Markdown>{article.content}</Markdown>
        </article>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 bg-[#1a2a3a]">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl font-normal mb-3"
            style={{
              fontFamily: "var(--font-cormorant-garamond), serif",
              background:
                "linear-gradient(135deg, #d4b84a 0%, #c9a227 50%, #f5e6b3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Looking for hands-on IPO guidance?
          </h2>
          <p
            className="text-slate-300 font-light mb-6 text-base"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Book a strategy call to discuss your situation — whether you&apos;re
            exploring a listing, preparing your financials, or ready to
            assemble your IPO team.
          </p>
          <a
            href="https://tidycal.com/mandyc852/30-minute-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-[520px] mx-auto flex items-center justify-center whitespace-nowrap px-10 py-4 rounded-none shadow-lg uppercase tracking-[0.15em] text-sm btn-gold-animated"
          >
            Book Your Strategy Call
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#0f1a24] border-t border-[#1a2a3a] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-5">
            <div className="flex items-center justify-center gap-6">
              <a href="https://www.youtube.com/@MandyC852" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#c9a227] transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/mandyc852/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#c9a227] transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-1 text-center" style={{ fontFamily: "var(--font-poppins)" }}>
              <p className="text-slate-500 text-xs leading-relaxed mb-2 md:mb-0">© 2026 Lumina Consulting Limited</p>
              <span className="hidden md:inline text-slate-600 text-xs"> | </span>
              <div className="text-slate-500 text-xs flex items-center justify-center gap-2 md:gap-1">
                <a href="/terms" className="hover:text-[#c9a227] transition-colors">Terms &amp; Conditions</a>
                <span className="text-slate-600">|</span>
                <a href="/privacy" className="hover:text-[#c9a227] transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </ArticleShell>
  )
}
