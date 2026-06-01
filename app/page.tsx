import type { Metadata } from "next"
import Image from "next/image"
import { Cormorant_Garamond, Poppins } from "next/font/google"
import { LeadMagnetForm, BookCallButton } from "./_components/home-interactions"
import { SiteHeader } from "./_components/site-header"

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

// NOTE: still noindex while copy is in review. Remove the `robots`
// block when you're ready to take the homepage live in search.
export const metadata: Metadata = {
  title: "MandyC. | Capital Markets Advisory",
  robots: { index: false, follow: false },
}

const REASONS = [
  {
    title: "Exploring a listing",
    body: "You're weighing whether NASDAQ or HKEX makes sense for where your business is now — and what it would actually take.",
    href: "/ipo",
    cta: "See the advisory →",
  },
  {
    title: "Scaling under pressure",
    body: "The business is working, but the decisions are getting heavier. You want a sharp, discreet second mind in the room.",
    href: null,
    cta: "Book a call →",
  },
  {
    title: "Just want to connect",
    body: "Comparing notes, a possible collaboration, or a conversation with no agenda. I keep room on the calendar for it.",
    href: null,
    cta: "Book a call →",
  },
]

// Deal sizes from CV. Curated to lead with the largest transactions.
const TRACK_RECORD = [
  { value: "US$125M", name: "NASDAQ IPO — US consumer company", detail: "Full advisory · approaching listing" },
  { value: "US$64M", name: "Sincere Co. (00244.HK)", detail: "Privatisation — voluntary general cash offer" },
  { value: "US$38M", name: "Century Sunshine (00509.HK)", detail: "Convertible bond + whitewash" },
  { value: "US$27M", name: "Alpha Professional (00948.HK)", detail: "Share acquisition → mandatory cash offer" },
  { value: "US$12M", name: "Alpha Professional (00948.HK)", detail: "Unwinding / disposal / off-market buy-backs" },
  { value: "3 listings", name: "HKEX IPOs (sponsor)", detail: "TL Natural Gas · Vision Int'l · Sunlight" },
]

export default function HomePage() {
  return (
    <div className={`${cormorantGaramond.variable} ${poppins.variable} min-h-screen`}>
      <style>{`
        html { scroll-behavior: smooth; }
        body {
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, rgba(248, 250, 252, 0.8) 100%);
          color: #3d4f5f;
          padding-top: 80px;
        }
        .scroll-anchor { scroll-margin-top: 96px; }
        h1, h2, h3 {
          font-family: var(--font-cormorant-garamond), serif;
          font-weight: 400;
          color: #1a2a3a;
          letter-spacing: -0.02em;
        }
        p, a, button, label, input { font-family: var(--font-poppins), sans-serif; }
        .gradient-text-hero {
          background: linear-gradient(135deg, #FFFFFF 0%, #f5e6b3 40%, #c9a227 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Header */}
      <SiteHeader
        links={[
          { label: "Talk to Me", href: "#work" },
          { label: "About", href: "#about" },
          { label: "Track Record", href: "#track-record" },
        ]}
      />

      {/* HERO */}
      <section className="relative w-full min-h-[540px] md:min-h-[620px] flex items-center overflow-hidden bg-[#1a2a3a]">
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-[47%] z-0">
          <Image
            src="/mandyc.jpg"
            alt="Mandy Cheung"
            fill
            className="object-cover"
            style={{ objectPosition: "38% 52%" }}
            priority
            quality={100}
          />
          <div className="absolute left-0 top-0 bottom-0 w-[120px] md:w-[200px] bg-gradient-to-r from-[#1a2a3a] via-[#1a2a3a]/60 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[#1a2a3a]/60 md:hidden pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 w-full py-12">
          <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">
            <p className="text-[#c9a227] text-sm font-medium tracking-wider uppercase mb-4">
              Capital Markets Advisory · HKEX + NASDAQ + Global Markets
            </p>
            <h1 className="gradient-text-hero text-3xl sm:text-4xl md:text-5xl leading-[1.15] font-normal mb-5">
              The hard part isn&apos;t strategy. It&apos;s what comes next.
            </h1>
            <p className="text-base md:text-xl text-white/90 font-light leading-relaxed mb-7 max-w-md mx-auto md:mx-0">
              I&apos;m Mandy Cheung — Hong Kong capital markets advisor to builders and operators.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <BookCallButton
                label="Book a call"
                className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap px-8 py-3.5 rounded-none shadow-lg uppercase tracking-wide text-sm btn-gold-animated"
              />
              <a
                href="#download"
                className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap px-8 py-3.5 bg-transparent border-2 border-white/80 text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-white/10 rounded-none uppercase"
              >
                Get the free download
              </a>
            </div>
          </div>
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

      {/* THREE REASONS */}
      <section id="work" className="scroll-anchor py-20 md:py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase text-center mb-3">
            Three reasons to reach out
          </p>
          <h2 className="text-3xl md:text-4xl mb-4 text-center font-normal">
            Most conversations start one of three ways
          </h2>
          <p className="text-center text-slate-600 font-light mb-12 max-w-2xl mx-auto">
            You don&apos;t need a polished agenda.
            <br />
            You just need to be building something worth the conversation.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {REASONS.map((r) => (
              <div key={r.title} className="p-8 rounded-none bg-[#f8f7f4] border border-slate-200/60 flex flex-col">
                <h3 className="text-xl font-normal text-[#1a2a3a] mb-3">{r.title}</h3>
                <p className="text-slate-600 font-light text-sm leading-relaxed flex-grow mb-6">{r.body}</p>
                {r.href ? (
                  <a href={r.href} className="text-[#a68a1f] hover:text-[#1a2a3a] text-sm font-medium tracking-wide transition-colors">
                    {r.cta}
                  </a>
                ) : (
                  <BookCallButton label={r.cta} className="text-left text-[#a68a1f] hover:text-[#1a2a3a] text-sm font-medium tracking-wide transition-colors" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section id="download" className="py-20 md:py-28 px-6 bg-slate-50 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase mb-3">Free download</p>
              <h2 className="text-3xl md:text-4xl mb-5 font-normal leading-[1.15]">
                The 3 assumptions that keep builders smaller than they should be
              </h2>
              <p className="text-slate-600 font-light leading-relaxed mb-4">
                A short, sharp read on the beliefs that quietly cap capable operators — about size, cost, and what&apos;s actually within reach — and what shifts the moment you stop accepting them.
              </p>
              <p className="text-slate-500 font-light text-sm">
                No fluff. One focused read, plus the occasional insight if you want it.
              </p>
            </div>
            <div className="bg-white rounded-none border border-slate-200 p-7 md:p-8 shadow-sm">
              <LeadMagnetForm />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-anchor py-20 md:py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-12 md:gap-16 items-center">
            <div className="relative aspect-[4/5] rounded-none overflow-hidden shadow-lg max-w-[280px] md:max-w-none mx-auto md:mx-0">
              <Image src="/IMG_2269.JPG" alt="Mandy Cheung" fill loading="eager" className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-normal text-[#1a2a3a] mb-8">About Mandy</h2>
              <div className="space-y-5 text-slate-600 text-base leading-relaxed font-light">
                <p>
                  I&apos;m a Hong Kong SFC Type 6 licensed corporate finance advisor with 10+ years and 60+ transactions across HKEX and NASDAQ — IPOs, general offers, convertible bonds, and restructurings. The kind of cross-border work where regulatory complexity is the norm, not the exception.
                </p>
                <p>
                  Most capital markets advisors serve businesses that have already arrived. The builders and operators still in the climb — the ones who started with no backing and figured it out as they went — get overlooked. I work with precisely those people, because I&apos;m one of them.
                </p>
                <p className="text-[#1a2a3a] font-normal">
                  Integrity is my core value.
                  <br />
                  I&apos;m in a service industry, and I act like it.
                  <br />
                  The client&apos;s success is the only metric that matters.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <a href="https://www.youtube.com/@MandyC852" target="_blank" rel="noopener noreferrer" className="text-[#1a2a3a] hover:text-[#c9a227] font-medium text-sm underline decoration-slate-300 hover:decoration-[#c9a227] transition-colors">
                  YouTube
                </a>
                <span className="text-slate-300">·</span>
                <a href="https://www.linkedin.com/in/mandyc852/" target="_blank" rel="noopener noreferrer" className="text-[#1a2a3a] hover:text-[#c9a227] font-medium text-sm underline decoration-slate-300 hover:decoration-[#c9a227] transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRACK RECORD */}
      <section id="track-record" className="scroll-anchor py-20 md:py-28 px-6 bg-[#f8f7f4]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#a68a1f] text-xs font-medium tracking-[0.25em] uppercase text-center mb-3">Track record</p>
          <h2 className="text-3xl md:text-4xl mb-4 text-center font-normal">60+ transactions · US$200M+ in deal value</h2>
          <p className="text-center text-slate-600 font-light mb-12 max-w-2xl mx-auto">
            A selection of the deals I&apos;ve advised across IPOs, privatisations, restructurings, and the Takeovers Code.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {TRACK_RECORD.map((t, i) => (
              <div key={i} className="bg-white border border-slate-200 p-4 sm:p-7 flex flex-col">
                <p className="text-xl sm:text-2xl md:text-3xl font-normal text-[#1a2a3a] mb-2 sm:mb-3" style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}>{t.value}</p>
                <p className="text-[#1a2a3a] font-medium text-xs sm:text-sm mb-1">{t.name}</p>
                <p className="text-slate-500 font-light text-xs sm:text-sm">{t.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-xs font-light text-center mt-8 max-w-2xl mx-auto">
            Selected transactions. Figures reflect total deal value advised across the engagement.
          </p>
        </div>
      </section>

      {/* FINAL INVITATION */}
      <section className="py-16 md:py-20 px-6 bg-[#1a2a3a]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-normal mb-3 cta-title-gradient">
            Open to a conversation
          </h2>
          <p className="text-slate-300 font-light mb-6 text-base">
            Strategy, collaboration, or just a conversation. No pitch, no pressure — book a slot and we&apos;ll take it from there.
          </p>
          <BookCallButton
            label="Book a call"
            className="flex md:inline-flex w-full md:w-auto md:min-w-[320px] items-center justify-center whitespace-nowrap px-8 py-3.5 rounded-none shadow-lg uppercase tracking-wide text-sm btn-gold-animated"
          />
          <p className="text-slate-400 text-xs mt-5 font-light tracking-wide">
            SFC Type 6 Licensed · For Builders &amp; Operators · Cross-Border Expertise
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#0f1a24] border-t border-[#1a2a3a] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-5">
            <div className="flex items-center justify-center gap-6">
              <a href="https://www.youtube.com/@MandyC852" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#c9a227] transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/mandyc852/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#c9a227] transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-1 text-center" style={{ fontFamily: "var(--font-poppins)" }}>
              <p className="text-slate-500 text-xs leading-relaxed mb-2 md:mb-0">© 2026 MandyC. | All Rights Reserved</p>
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
    </div>
  )
}
