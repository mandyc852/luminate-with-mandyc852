import type { Metadata } from "next"
import BeehiivSubscribe from "@/components/BeehiivSubscribe"

export const metadata: Metadata = {
  title: "Subscribe | MandyC.",
  description:
    "The fortnightly operator brief — one question to sit with, capital markets signal, no fluff.",
}

export default function SubscribePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a2a3a] px-6 py-20">
      <div className="w-full max-w-lg text-center">
        <p className="text-[#c9a227] text-xs font-medium tracking-[0.3em] uppercase mb-6">
          Mandy Cheung
        </p>
        <BeehiivSubscribe
          variant="hero"
          heading="The fortnightly operator brief"
          subheading="One question to sit with. Capital markets signal. No fluff."
          buttonText="Join"
          utmCampaign="subscribe_page"
        />
        <p className="text-slate-500 text-xs mt-8 font-light">
          <a href="/" className="hover:text-[#c9a227] transition-colors">
            ← mandyc.me
          </a>
        </p>
      </div>
    </div>
  )
}
