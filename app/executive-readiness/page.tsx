import type { Metadata } from "next"
import { SiteHeader } from "../_components/site-header"
import { DiagnosticClient } from "./_components/diagnostic-client"

export const metadata: Metadata = {
  title: "The Executive Readiness Diagnostic | MandyC.",
  description:
    "A 10-minute self-assessment for executives whose companies are preparing to raise, restructure, or list. Five dimensions, five questions — measuring whether the person in the chair is ready to lead a capital event.",
  robots: { index: false, follow: false },
}

export default function ExecutiveReadinessPage() {
  return (
    <div className="bg-[#1a2a3a]">
      <style>{`
        body { padding-top: 80px; background: #ffffff; color: #3d4f5f; }
        h1, h2, h3 {
          font-family: var(--font-cormorant-garamond), serif;
          font-weight: 400;
          color: #1a2a3a;
          letter-spacing: -0.02em;
        }
        p, a, button, label, input { font-family: var(--font-poppins), sans-serif; }
      `}</style>

      <SiteHeader
        links={[
          { label: "Home", href: "/" },
        ]}
      />

      <main>
        <DiagnosticClient />
      </main>
    </div>
  )
}
