import Link from "next/link"

export const metadata = {
  title: "Terms & Conditions | MandyC.",
  description:
    "Terms and Conditions for MandyC. Please read these terms before using our services.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4] flex flex-col">
      {/* Header bar */}
      <div className="w-full border-b border-slate-200 bg-white/90 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-[#1a2a3a] font-medium tracking-wide"
            style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
          >
            MandyC.
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-600 text-sm font-medium underline underline-offset-4 transition-colors"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            <span aria-hidden>←</span> Back to Home
          </Link>
        </div>
      </div>

      {/* Body */}
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-6 py-10 md:py-14">
          <h1
            className="text-3xl md:text-4xl font-normal text-[#1a2a3a] mb-2"
            style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
          >
            Terms &amp; Conditions
          </h1>
          <p
            className="text-stone-400 text-sm mb-10"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Last Updated: February 4, 2026
          </p>

          <div
            className="space-y-10 text-stone-700"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            <section>
              <h2 className="text-lg md:text-xl font-medium text-[#1a2a3a] mb-3">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing or using the website at mandyc.me (the &ldquo;Site&rdquo;), booking a consultation, engaging our advisory services, or downloading any materials we provide, you agree to be bound by these Terms and Conditions (&ldquo;Terms&rdquo;). If you do not agree with any part of these Terms, please do not use our services.
              </p>
              <p className="leading-relaxed mt-4">
                These Terms apply to all visitors, users, and clients of the Site and our services, including individuals who download free resources and those who engage our paid consulting services.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-medium text-[#1a2a3a] mb-3">2. About Us</h2>
              <p className="leading-relaxed">
                MandyC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is an IPO advisory and corporate finance consulting practice operated by Mandy Cheung. Our principal operations are based in Hong Kong. Mandy Cheung holds a Type 6 (Advising on Corporate Finance) Responsible Officer license issued by the Securities and Futures Commission (&ldquo;SFC&rdquo;) of Hong Kong.
              </p>
              <p className="leading-relaxed mt-4">
                Our services are provided through Topleap Financial Group Limited, a company licensed and regulated by the SFC.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-medium text-[#1a2a3a] mb-3">3. Description of Services</h2>

              <p className="leading-relaxed mb-4">We provide the following through the Site:</p>

              <h3 className="font-semibold text-[#1a2a3a] mb-2">a) IPO Advisory &amp; Consulting Services</h3>
              <p className="leading-relaxed">
                Our flagship offering is the 90-Day IPO Readiness Intensive, a consulting engagement that includes corporate finance advisory, business readiness assessment, regulatory pathway analysis, and leadership development for founders preparing for a public listing. Engagement terms, deliverables, fees, and timelines are set out in a separate written engagement letter or service agreement executed between MandyC (or Topleap Financial Group Limited) and the client prior to the commencement of services.
              </p>

              <h3 className="font-semibold text-[#1a2a3a] mt-6 mb-2">b) Free Resources &amp; Content</h3>
              <p className="leading-relaxed">
                We offer free educational content, including a neuroscience-backed audio resource (The 5-Minute Founder&apos;s Reset), articles, videos, and other materials relating to IPO readiness, corporate finance, and founder leadership. These resources are provided for general informational and educational purposes only.
              </p>

              <h3 className="font-semibold text-[#1a2a3a] mt-6 mb-2">c) ExitPro Tool</h3>
              <p className="leading-relaxed">
                We provide access to ExitPro, an IPO benchmarking and research tool. Use of ExitPro is subject to any additional terms displayed within the tool itself. ExitPro outputs are for informational purposes only and do not constitute financial or investment advice.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-medium text-[#1a2a3a] mb-3">4. Important Disclaimers</h2>

              <h3 className="font-semibold text-[#1a2a3a] mb-2">a) Not Investment Advice</h3>
              <p className="leading-relaxed">
                Nothing on the Site, in our free resources, or in any general communication from MandyC constitutes investment advice, a solicitation to buy or sell securities, or a recommendation regarding any financial product or transaction. General content and resources on the Site are informational only and are not tailored to any individual&apos;s circumstances.
              </p>
              <p className="leading-relaxed mt-4">
                Personalised corporate finance advisory is provided only under a formal, written engagement with Topleap Financial Group Limited and is subject to the terms of that engagement. Such advisory is regulated by the SFC and is subject to applicable Hong Kong securities laws.
              </p>

              <h3 className="font-semibold text-[#1a2a3a] mt-6 mb-2">b) Not Medical or Therapeutic Advice</h3>
              <p className="leading-relaxed">
                The audio resources, leadership development content, and any material relating to nervous system regulation, identity work, or personal development are for educational and informational purposes only. They are not medical advice, therapy, psychological treatment, or a substitute for professional mental health care. If you are experiencing mental health issues, please consult a qualified healthcare professional.
              </p>

              <h3 className="font-semibold text-[#1a2a3a] mt-6 mb-2">c) No Guarantee of Outcomes</h3>
              <p className="leading-relaxed">
                We make no guarantees regarding the outcome of any IPO process, listing application, regulatory approval, or business result. Past transaction experience is not indicative of future results. Every company&apos;s circumstances are unique, and outcomes depend on factors beyond our control, including market conditions, regulatory decisions, and client actions.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-medium text-[#1a2a3a] mb-3">5. Confidentiality</h2>
              <p className="leading-relaxed">
                We treat all client information with strict confidentiality. As an SFC-licensed practice, we are bound by regulatory obligations regarding the handling of client information and material non-public information. We do not disclose client names, transaction details, or any confidential information without prior written consent from the client, except as required by law or regulation.
              </p>
              <p className="leading-relaxed mt-4">
                Clients engaging our paid advisory services will be subject to additional confidentiality provisions set out in the relevant engagement letter.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-medium text-[#1a2a3a] mb-3">6. Intellectual Property</h2>
              <p className="leading-relaxed">
                All content on the Site, including text, graphics, logos, audio, video, tools, templates, and frameworks, is the property of MandyC or its licensors and is protected by applicable intellectual property laws.
              </p>
              <p className="leading-relaxed mt-4">
                You may download and use our free resources for your personal, non-commercial use. You may not reproduce, distribute, modify, create derivative works from, publicly display, or commercially exploit any of our materials without prior written permission.
              </p>
              <p className="leading-relaxed mt-4">
                Work product created specifically for a client under a paid engagement is subject to the intellectual property terms set out in the relevant engagement letter.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-medium text-[#1a2a3a] mb-3">7. Use of the Site</h2>
              <p className="leading-relaxed mb-4">You agree not to:</p>
              <ul className="list-disc list-outside pl-5 space-y-2">
                <li>Use the Site for any unlawful purpose or in violation of any applicable laws</li>
                <li>Attempt to gain unauthorised access to any part of the Site or our systems</li>
                <li>Scrape, harvest, or collect information from the Site without permission</li>
                <li>Misrepresent your identity, qualifications, or company information when engaging our services</li>
                <li>Use information obtained through our services to engage in insider trading or any form of market manipulation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-medium text-[#1a2a3a] mb-3">8. Email Communications</h2>
              <p className="leading-relaxed">
                By providing your email address through the Site (e.g., to download The 5-Minute Founder&apos;s Reset or book a consultation), you consent to receiving email communications from us, including educational content, updates, and information about our services. You may unsubscribe at any time by clicking the unsubscribe link in any email. We will not sell, rent, or share your email address with third parties for their marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-medium text-[#1a2a3a] mb-3">9. Booking &amp; Consultations</h2>
              <p className="leading-relaxed">
                Initial strategy calls booked through the Site are complimentary and intended as a preliminary discussion to explore whether our services may be suitable for your situation. These calls do not constitute the provision of regulated advisory services.
              </p>
              <p className="leading-relaxed mt-4">
                No advisory relationship is formed until a formal engagement letter has been executed by both parties and any required regulatory procedures have been completed.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-medium text-[#1a2a3a] mb-3">10. Fees &amp; Payment</h2>
              <p className="leading-relaxed">
                Fees for our consulting services are set out in the engagement letter agreed between the parties. The Site may reference indicative fee ranges, but the actual fee for any engagement is determined on a case-by-case basis and confirmed in writing. Payment terms, schedules, and refund policies (if applicable) are governed by the engagement letter.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-medium text-[#1a2a3a] mb-3">11. Limitation of Liability</h2>
              <p className="leading-relaxed mb-4">To the fullest extent permitted by law:</p>
              <ul className="list-disc list-outside pl-5 space-y-2">
                <li>The Site and all free resources are provided &ldquo;as is&rdquo; without warranties of any kind, whether express or implied</li>
                <li>We are not liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the Site or free resources</li>
                <li>We are not responsible for any decisions you make based on general content on the Site</li>
                <li>Your use of the audio resources and any free materials is at your own risk</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Liability in connection with paid advisory services is governed by the terms of the relevant engagement letter and applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-medium text-[#1a2a3a] mb-3">12. Indemnification</h2>
              <p className="leading-relaxed">
                You agree to indemnify and hold harmless MandyC, Mandy Cheung, and Topleap Financial Group Limited from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the Site, your violation of these Terms, or your violation of any rights of another party.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-medium text-[#1a2a3a] mb-3">13. Third-Party Links &amp; Tools</h2>
              <p className="leading-relaxed">
                The Site may contain links to third-party websites and tools (including TidyCal for booking, YouTube for content, and external research resources). We are not responsible for the content, privacy practices, or terms of these external sites and services. Your interaction with any third-party service is governed by that service&apos;s own terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-medium text-[#1a2a3a] mb-3">14. Modifications</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms at any time. Material changes will be reflected by updating the &ldquo;Last Updated&rdquo; date at the top of this page. Your continued use of the Site after any changes constitutes acceptance of the revised Terms. We encourage you to review these Terms periodically.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-medium text-[#1a2a3a] mb-3">15. Governing Law &amp; Jurisdiction</h2>
              <p className="leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the Hong Kong Special Administrative Region. Any disputes arising from or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Hong Kong.
              </p>
              <p className="leading-relaxed mt-4">
                For clients engaging advisory services through Topleap Financial Group Limited, the governing law and dispute resolution provisions of the engagement letter shall prevail to the extent of any inconsistency with these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-medium text-[#1a2a3a] mb-3">16. Severability</h2>
              <p className="leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid by a court of competent jurisdiction, the remaining provisions will continue in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-medium text-[#1a2a3a] mb-3">17. Entire Agreement</h2>
              <p className="leading-relaxed">
                These Terms, together with our{" "}
                <Link href="/privacy" className="text-amber-700 hover:text-amber-600 underline underline-offset-4 transition-colors">
                  Privacy Policy
                </Link>
                , constitute the entire agreement between you and MandyC regarding the use of the Site and free resources. For paid advisory engagements, the engagement letter between the parties shall govern and shall prevail over these Terms to the extent of any inconsistency.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-medium text-[#1a2a3a] mb-3">18. Contact Information</h2>
              <p className="leading-relaxed">
                If you have questions about these Terms, please contact us at:
              </p>
              <p className="leading-relaxed mt-4">
                <strong className="text-[#1a2a3a]">Email:</strong>{" "}
                <a href="mailto:hey@mandyc852.com" className="text-amber-700 hover:text-amber-600 underline underline-offset-4 transition-colors">
                  hey@mandyc852.com
                </a>
                <br />
                <strong className="text-[#1a2a3a]">Website:</strong>{" "}
                <a href="https://mandyc.me" className="text-amber-700 hover:text-amber-600 underline underline-offset-4 transition-colors">
                  mandyc.me
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#1a2a3a] border-t border-[#0f1a24] py-6">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-center md:text-left">
            <p className="text-stone-400 text-xs" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
              © 2026 MandyC.
            </p>
            <div className="text-stone-400 text-xs flex items-center justify-center md:justify-end gap-2" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
              <Link href="/terms" className="hover:text-amber-300 transition-colors underline underline-offset-4">
                Terms &amp; Conditions
              </Link>
              <span className="text-stone-500">|</span>
              <Link href="/privacy" className="hover:text-amber-300 transition-colors underline underline-offset-4">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
