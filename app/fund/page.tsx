import type { Metadata } from "next"
import Image from "next/image"
import { Cormorant_Garamond, Poppins } from "next/font/google"
import { SiteHeader } from "../_components/site-header"

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

// Intentionally kept out of search. This page is informational only,
// for professional investors, and is not an offer or solicitation.
export const metadata: Metadata = {
  title: "Lumina | By Invitation",
  robots: { index: false, follow: false },
}

const CONTACT_EMAIL = "hello@mandyc.me"

export default function FundPage() {
  return (
    <div className={`${cormorantGaramond.variable} ${poppins.variable} min-h-screen bg-white`}>
      <style>{`
        body {
          background: #ffffff;
          color: #3d4f5f;
          padding-top: 80px;
        }
        h1, h2, h3 {
          font-family: var(--font-cormorant-garamond), serif;
          font-weight: 400;
          color: #1a2a3a;
          letter-spacing: -0.02em;
        }
        p, a, button, span, li { font-family: var(--font-poppins), sans-serif; }
      `}</style>

      {/* Header */}
      <SiteHeader
        links={[
          { label: "Talk to Me", href: "/#work" },
          { label: "About", href: "/#about" },
          { label: "Track Record", href: "/#track-record" },
        ]}
        bookHref="https://tidycal.com/mandyc852/30-minute-meeting"
      />

      {/* HERO */}
      <section className="relative w-full bg-[#1a2a3a] py-16 md:py-24 px-6 overflow-hidden">
        <Image
          src="/Hong Kong 1.jpg"
          alt="Hong Kong skyline"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2a3a]/70 via-[#1a2a3a]/62 to-[#1a2a3a]/85 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-[#f5e6b3] text-xs font-medium tracking-[0.3em] uppercase mb-4" style={{ textShadow: "0 1px 12px rgba(0,0,0,0.6)" }}>
            Lumina Capital · Hong Kong
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl leading-[1.15] font-normal mb-5 !text-white" style={{ textShadow: "0 2px 24px rgba(0,0,0,0.7)" }}>
            Lumina Liquidity
            <br className="md:hidden" />
            {" "}Opportunities Fund I
          </h1>
          <p className="text-lg md:text-xl text-white font-light leading-relaxed mb-7 max-w-2xl mx-auto" style={{ textShadow: "0 1px 16px rgba(0,0,0,0.6)" }}>
            Structured access to Asia&apos;s pre-IPO liquidity window — built on the structuring and downside-protection mechanics behind 60+ capital markets transactions.
          </p>
          <p className="text-white/70 text-xs tracking-wide uppercase" style={{ textShadow: "0 1px 12px rgba(0,0,0,0.6)" }}>
            By invitation · Confidential
          </p>
        </div>
      </section>

      {/* CREDENTIALS BAR */}
      <section className="bg-gradient-to-r from-[#c9a227] via-[#d4b84a] to-[#c9a227] py-3 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[#1a2a3a] text-sm font-medium tracking-wide">
            SFC Type 6 Licensed · 60+ Transactions · US$200M+ in Deal Value · HKEX &amp; NASDAQ
          </p>
        </div>
      </section>

      {/* THESIS — high level, no economics */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase text-center mb-3">The opportunity</p>
          <h2 className="text-3xl md:text-4xl mb-8 text-center font-normal">A rare window for strategic liquidity</h2>
          <div className="space-y-5 text-slate-600 text-[15px] leading-[1.8] font-light">
            <p>
              A gap has opened between profitable private companies and the public-market exits they&apos;re working toward. Strong businesses increasingly need bridge capital to carry them through the 18–36 months while regulatory and market windows align — and the investors positioned at that window are rare.
            </p>
            <p>
              Lumina was built to sit precisely in that gap: an onshore Hong Kong Limited Partnership Fund providing structured, downside-protected access to pre-IPO opportunities sourced through more than a decade of cross-border deal work.
            </p>
            <p className="text-[#1a2a3a] font-normal">
              The detailed thesis, structure, terms, and pipeline are set out in the confidential investor materials, available on request.
            </p>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-20 md:py-28 px-6 bg-[#f8f7f4]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase text-center mb-3">Leadership</p>
          <h2 className="text-3xl md:text-4xl mb-12 text-center font-normal">Who runs the fund</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-none border border-slate-200 p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#a68a1f] mb-2">General Partner</p>
              <h3 className="text-2xl font-normal text-[#1a2a3a] mb-1">Mandy Cheung</h3>
              <p className="text-slate-500 text-sm font-light mb-4">Founder &amp; Director, Lumina Consulting Limited</p>
              <p className="text-slate-600 text-sm font-light leading-relaxed mb-4">
                Hong Kong SFC Type 6 (corporate finance) Responsible Officer with 10+ years and 60+ capital markets transactions across HKEX and NASDAQ. As financial adviser to listed-company boards and shareholders, she has completed general offers, whitewash waivers, convertible-bond subscriptions and restructurings — the structuring and downside-protection mechanics this fund is built on.
              </p>
              <ul className="space-y-1.5 text-slate-600 text-sm font-light">
                <li className="flex items-start gap-2"><span className="text-[#c9a227] mt-0.5">✦</span> SFC Type 6 Responsible Officer</li>
                <li className="flex items-start gap-2"><span className="text-[#c9a227] mt-0.5">✦</span> 60+ transactions: IPOs, general offers, convertible bonds, restructurings</li>
                <li className="flex items-start gap-2"><span className="text-[#c9a227] mt-0.5">✦</span> Active cross-border pipeline: Hong Kong · PRC · UAE</li>
              </ul>
            </div>

            <div className="bg-white rounded-none border border-slate-200 p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#a68a1f] mb-2">Investment Manager</p>
              <h3 className="text-2xl font-normal text-[#1a2a3a] mb-1">SFC Type 9 Asset Manager</h3>
              <p className="text-slate-500 text-sm font-light mb-4">Confirmed on engagement</p>
              <p className="text-slate-600 text-sm font-light leading-relaxed mb-4">
                The Fund will be managed by an SFC Type 9 (Asset Management) licensed firm acting as Investment Manager — responsible for portfolio management, trade execution, and AML oversight under Hong Kong&apos;s regulated framework. The appointed manager is confirmed with investors during the materials discussion.
              </p>
              <ul className="space-y-1.5 text-slate-600 text-sm font-light">
                <li className="flex items-start gap-2"><span className="text-[#c9a227] mt-0.5">✦</span> SFC Type 9 (Asset Management)</li>
                <li className="flex items-start gap-2"><span className="text-[#c9a227] mt-0.5">✦</span> Investment Manager of the LPF</li>
                <li className="flex items-start gap-2"><span className="text-[#c9a227] mt-0.5">✦</span> Portfolio management &amp; trade execution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 bg-[#1a2a3a]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-normal mb-3 cta-title-gradient">Request the confidential materials</h2>
          <p className="text-slate-300 font-light mb-6 text-base">
            The full investor presentation is shared under NDA. Get in touch and I&apos;ll send the details.
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center gap-3">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Lumina%20LPF%20%E2%80%94%20Investor%20Materials%20Request`}
              className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap px-8 py-3.5 rounded-none shadow-lg uppercase tracking-wide text-sm btn-gold-animated"
            >
              Request materials
            </a>
            <a
              href="https://tidycal.com/mandyc852/30-minute-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap px-8 py-3.5 bg-transparent border-2 border-white/70 text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-white/10 rounded-none uppercase"
            >
              Book an investor call
            </a>
          </div>
          <p className="text-slate-400 text-xs mt-5 font-light tracking-wide">
            By Invitation · Confidential · Lumina Consulting Limited
          </p>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="py-12 px-6 bg-[#0f1a24]">
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-500 text-xs font-light leading-relaxed text-center">
            This page is provided for information purposes only. It does not constitute an offer, solicitation, or invitation to subscribe for any interest in any fund, nor investment, legal, or tax advice. Any investment in the Fund involves significant risk, including possible loss of the entire investment. Past advisory transactions are not indicative of future fund results. Prospective investors should consult their own legal, tax, and financial advisers before making any investment decision.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#0f1a24] border-t border-[#1a2a3a] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-slate-500 text-xs leading-relaxed">
              Lumina Consulting Limited · Hong Kong · PRC · UAE
            </p>
            <div className="text-slate-500 text-xs flex items-center justify-center gap-2">
              <a href="/" className="hover:text-[#c9a227] transition-colors">MandyC.</a>
              <span className="text-slate-600">|</span>
              <a href="/terms" className="hover:text-[#c9a227] transition-colors">Terms</a>
              <span className="text-slate-600">|</span>
              <a href="/privacy" className="hover:text-[#c9a227] transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
