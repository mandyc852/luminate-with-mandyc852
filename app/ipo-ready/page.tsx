import Link from "next/link"

export default function IPOReadyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-50/80 flex flex-col items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <h1
          className="text-3xl md:text-4xl font-normal text-stone-900 mb-4"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          IPO Readiness Assessment
        </h1>
        <p className="text-stone-600 text-base leading-relaxed mb-8">
          Are you 18 months from being NASDAQ-ready, or 5 years? This assessment is coming soon — built from 10 years of advising companies through successful listings.
        </p>
        <p className="text-stone-600 text-sm leading-relaxed mb-8">
          In the meantime, reach out to discuss your path to going public.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@mandyc.me?subject=IPO%20Readiness%20Inquiry"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-gradient-to-br from-amber-600 to-amber-500 text-white text-sm font-medium tracking-wide rounded-sm hover:-translate-y-0.5 transition-all duration-300 uppercase"
          >
            Inquire About Advisory
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3.5 border-2 border-stone-300 text-stone-700 text-sm font-medium tracking-wide rounded-sm hover:bg-stone-50 transition-all duration-300 uppercase"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
