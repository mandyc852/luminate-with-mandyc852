import type { Metadata } from "next"
import Image from "next/image"
import { Cormorant_Garamond, Poppins } from "next/font/google"
import { SiteHeader } from "../_components/site-header"
import BeehiivSubscribe from "@/components/BeehiivSubscribe"

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

export const metadata: Metadata = {
  title: "Subscribe | MandyC.",
  description:
    "The fortnightly operator brief — one question to sit with, capital markets signal, no fluff.",
}

export default function SubscribePage() {
  return (
    <div className={`${cormorantGaramond.variable} ${poppins.variable} min-h-screen`}>
      <style>{`
        html, body { overflow: hidden; height: 100%; }
        body {
          color: #3d4f5f;
          padding-top: 80px;
        }
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

      <SiteHeader
        links={[
          { label: "About", href: "/#about" },
          { label: "Track Record", href: "/#track-record" },
        ]}
      />

      {/* HERO */}
      <section className="relative w-full h-[calc(100vh-80px)] flex items-center justify-center px-6 overflow-hidden bg-[#1a2a3a]">
        <Image
          src="/Hong Kong 1.jpg"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2a3a]/90 via-[#1a2a3a]/85 to-[#1a2a3a]/92 pointer-events-none" />

        <div className="relative z-10 max-w-2xl md:max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-5">
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-2 ring-[#c9a227]/70 ring-offset-4 ring-offset-[#1a2a3a]/80">
              <Image
                src="/IMG_2269.JPG"
                alt="Mandy Cheung"
                fill
                priority
                className="object-cover"
                sizes="96px"
              />
            </div>
          </div>

          <p className="text-[#f5e6b3] text-[11px] font-medium tracking-[0.32em] uppercase mb-6" style={{ textShadow: "0 1px 12px rgba(0,0,0,0.6)" }}>
            <span className="inline-block w-8 h-px bg-[#f5e6b3]/60 align-middle mr-3" />
            MandyC.
            <span className="inline-block w-8 h-px bg-[#f5e6b3]/60 align-middle ml-3" />
          </p>

          <h1 className="gradient-text-hero text-3xl sm:text-4xl md:text-5xl leading-[1.1] font-normal mb-4 tracking-tight" style={{ filter: "drop-shadow(0 2px 18px rgba(0,0,0,0.5))" }}>
            <span className="md:hidden">The Fortnightly<br />Operator Brief.</span>
            <span className="hidden md:inline">The Fortnightly Operator Brief.</span>
          </h1>

          <p className="text-sm md:text-base text-white/90 font-light leading-[1.55] mb-8 max-w-xl mx-auto" style={{ textShadow: "0 1px 16px rgba(0,0,0,0.6)" }}>
            One question, every two weeks. For people who do serious work and want to show up better at it.
          </p>

          <div className="max-w-md md:max-w-[520px] mx-auto">
            <BeehiivSubscribe
              variant="hero"
              buttonText="Subscribe"
              utmCampaign="subscribe_page"
            />
          </div>

          <p className="text-[#f5e6b3]/70 text-[11px] font-medium tracking-[0.22em] uppercase mt-3" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
            Free · Fortnightly · Unsubscribe Anytime
          </p>
        </div>
      </section>

    </div>
  )
}
