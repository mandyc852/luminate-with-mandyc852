import Link from "next/link"

export const metadata = {
  title: "Terms & Conditions | Luminate with Mandy C",
  description:
    "Terms and Conditions for Luminate with Mandy C. Please read these terms before using our services.",
}

export default function TermsPage() {
  return (
    <div
      className="fixed inset-0 bg-stone-50 flex flex-col overflow-hidden"
      style={{ fontFamily: "Cormorant Garamond, serif" }}
    >
      {/* Main content - scrollable on mobile/tablet, fixed on desktop */}
      <div className="flex-1 overflow-y-auto lg:overflow-hidden">
        <div className="h-full flex flex-col max-w-5xl mx-auto px-6 lg:px-12 py-6 lg:py-8">
          {/* Logo + Back button row */}
          <div className="flex items-center justify-between mb-6 flex-shrink-0">
            <Link
              href="/leap"
              className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-600 text-sm lg:text-base font-medium transition-colors"
            >
              <svg
                className="w-4 h-4 lg:w-5 lg:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back
            </Link>

            {/* Logo */}
            <div
              className="flex-shrink-0"
              style={{
                width: 160,
                height: 50,
                background:
                  "linear-gradient(to right, #b45309, #d97706, #f59e0b, #d97706, #b45309)",
                WebkitMaskImage: "url(/Logo%202%20black.png)",
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskImage: "url(/Logo%202%20black.png)",
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
              }}
              role="img"
              aria-label="Luminate with Mandy C"
            />
          </div>

          <div className="flex-shrink-0 mb-5">
            <h1 className="text-2xl lg:text-3xl font-semibold text-stone-900 mb-1">
              TERMS &amp; CONDITIONS
            </h1>
            <p className="text-stone-500 text-xs lg:text-sm">Last Updated: January 29, 2026</p>
          </div>

          {/* Two-column layout for desktop - scrollable content area on mobile */}
          <div className="flex-1 lg:overflow-y-auto lg:pr-2">
            <div className="grid lg:grid-cols-2 gap-x-10 gap-y-4 lg:gap-y-5 pb-4">
            <section>
              <h2 className="font-medium text-stone-900 text-base lg:text-lg mb-1.5">1. Acceptance of Terms</h2>
              <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-3">
                By accessing our website and signing up for the 5-Minute Quantum Identity Reset audio practice, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="font-medium text-stone-900 text-base lg:text-lg mb-1.5">2. Description of Service</h2>
              <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-2">Luminate with Mandy C. provides:</p>
              <ul className="list-disc list-outside space-y-1 text-stone-600 text-xs lg:text-sm leading-relaxed mb-3 pl-5">
                <li>A free 5-minute audio practice for subconscious identity shifts and nervous system regulation</li>
                <li>Educational content about quantum identity work, subconscious reprogramming, and conscious entrepreneurship</li>
                <li>Occasional email communications with insights and updates</li>
              </ul>
            </section>

            <section>
              <h2 className="font-medium text-stone-900 text-base lg:text-lg mb-1.5">3. Disclaimer of Medical/Therapeutic Advice</h2>
              <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-2 font-medium text-stone-800">
                IMPORTANT: The audio practice and content provided by Luminate with Mandy C. are for educational and informational purposes only.
              </p>
              <ul className="list-disc list-outside space-y-0.5 text-stone-600 text-xs lg:text-sm leading-relaxed mb-1.5 pl-5">
                <li>This is not medical advice, therapy, or psychological treatment</li>
                <li>The audio practice is not intended to diagnose, treat, cure, or prevent any medical or psychological condition</li>
                <li>We are not licensed healthcare providers or therapists</li>
                <li>This content should not replace professional medical or mental health care</li>
              </ul>
              <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-3">
                If you are experiencing mental health issues, trauma, or medical conditions, please consult with a qualified healthcare professional before using this audio practice.
              </p>
            </section>

            <section>
              <h2 className="font-medium text-stone-900 text-base lg:text-lg mb-1.5">4. Disclaimer of Financial Advice</h2>
              <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-2">
                While Mandy C. is a corporate finance and IPO advisor in her professional capacity, the content provided through Luminate with Mandy C. is:
              </p>
              <ul className="list-disc list-outside space-y-0.5 text-stone-600 text-xs lg:text-sm leading-relaxed mb-1.5 pl-5">
                <li>Not financial advice or investment recommendations</li>
                <li>For educational and personal development purposes only</li>
                <li>Not a substitute for professional financial advice</li>
              </ul>
              <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-3">
                For financial decisions, please consult with a qualified financial advisor.
              </p>
            </section>

            <section>
              <h2 className="font-medium text-stone-900 text-base lg:text-lg mb-1.5">5. Results Disclaimer</h2>
              <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-2">
                Results from using the audio practice vary from person to person. We make no guarantees or promises about:
              </p>
              <ul className="list-disc list-outside space-y-0.5 text-stone-600 text-xs lg:text-sm leading-relaxed mb-1.5 pl-5">
                <li>Specific outcomes or results</li>
                <li>Business success or income generation</li>
                <li>Timeline for seeing changes</li>
                <li>Effectiveness for any particular individual</li>
              </ul>
              <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-3">
                Your results depend on many factors including your commitment, consistency, current circumstances, and individual differences.
              </p>
            </section>

            <section>
              <h2 className="font-medium text-stone-900 text-base lg:text-lg mb-1.5">6. Intellectual Property Rights</h2>
              <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-2">
                All content provided by Luminate with Mandy C., including the audio practice, text, graphics, logos, and materials, are owned by or licensed to us and are protected by copyright and intellectual property laws.
              </p>
              <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-1 font-medium text-stone-800">You may:</p>
              <ul className="list-disc list-outside space-y-0.5 text-stone-600 text-xs lg:text-sm leading-relaxed mb-1.5 pl-5">
                <li>Download the audio for your personal, non-commercial use</li>
                <li>Listen to the audio as often as you like</li>
              </ul>
              <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-1 font-medium text-stone-800">You may NOT:</p>
              <ul className="list-disc list-outside space-y-1 text-stone-600 text-xs lg:text-sm leading-relaxed mb-3 pl-5">
                <li>Resell, redistribute, or share the audio file with others</li>
                <li>Use the content for commercial purposes</li>
                <li>Modify, reproduce, or create derivative works</li>
                <li>Remove any copyright or proprietary notices</li>
                <li>Claim the content as your own</li>
              </ul>
            </section>

            <section>
              <h2 className="font-medium text-stone-900 text-base lg:text-lg mb-1.5">7. User Conduct</h2>
              <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-2">By using our services, you agree to:</p>
              <ul className="list-disc list-outside space-y-1 text-stone-600 text-xs lg:text-sm leading-relaxed mb-3 pl-5">
                <li>Provide accurate information when signing up</li>
                <li>Use the content for lawful purposes only</li>
                <li>Not violate any intellectual property rights</li>
                <li>Not use the content to harm others or engage in illegal activities</li>
              </ul>
            </section>

            <section>
              <h2 className="font-medium text-stone-900 text-base lg:text-lg mb-1.5">8. Email Communications</h2>
              <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-2">By providing your email address, you consent to receive:</p>
              <ul className="list-disc list-outside space-y-0.5 text-stone-600 text-xs lg:text-sm leading-relaxed mb-1.5 pl-5">
                <li>Immediate delivery of your free audio practice</li>
                <li>Occasional emails with insights, updates, and relevant content</li>
                <li>No spam or excessive emails</li>
              </ul>
              <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-3">
                You can unsubscribe at any time using the link in any email.
              </p>
            </section>

            <section>
              <h2 className="font-medium text-stone-900 text-base lg:text-lg mb-1.5">9. Limitation of Liability</h2>
              <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-2">To the fullest extent permitted by law:</p>
              <ul className="list-disc list-outside space-y-1 text-stone-600 text-xs lg:text-sm leading-relaxed mb-3 pl-5">
                <li>Luminate with Mandy C. is provided &quot;as is&quot; without warranties of any kind</li>
                <li>We are not liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our services</li>
                <li>We are not responsible for any decisions you make based on our content</li>
                <li>Your use of the audio practice and content is at your own risk</li>
              </ul>
            </section>

            <section>
              <h2 className="font-medium text-stone-900 text-base lg:text-lg mb-1.5">10. Indemnification</h2>
              <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-2">
                You agree to indemnify and hold harmless Luminate with Mandy C. and Mandy Cheung from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
              </p>
              <ul className="list-disc list-outside space-y-1 text-stone-600 text-xs lg:text-sm leading-relaxed mb-3 pl-5">
                <li>Your use of our services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
              </ul>
            </section>

            <section>
              <h2 className="font-medium text-stone-900 text-base lg:text-lg mb-1.5">11. Third-Party Links</h2>
              <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-3">
                Our website or emails may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of these external sites.
              </p>
            </section>

            <section>
              <h2 className="font-medium text-stone-900 text-base lg:text-lg mb-1.5">12. Modifications to Service</h2>
              <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-2">We reserve the right to:</p>
              <ul className="list-disc list-outside space-y-0.5 text-stone-600 text-xs lg:text-sm leading-relaxed mb-1.5 pl-5">
                <li>Modify or discontinue the service at any time</li>
                <li>Change these Terms and Conditions</li>
                <li>Update the content or format of our offerings</li>
              </ul>
              <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-3">
                We will notify you of material changes by posting updates on our website or via email.
              </p>
            </section>

            <section>
              <h2 className="font-medium text-stone-900 text-base lg:text-lg mb-1.5">13. Termination</h2>
              <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-2">We reserve the right to:</p>
              <ul className="list-disc list-outside space-y-0.5 text-stone-600 text-xs lg:text-sm leading-relaxed mb-1.5 pl-5">
                <li>Terminate or suspend your access to our services</li>
                <li>Remove you from our email list</li>
                <li>Discontinue providing the audio practice</li>
              </ul>
              <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-3">
                You may terminate your use of our services at any time by unsubscribing from our email list.
              </p>
            </section>

            <section>
              <h2 className="font-medium text-stone-900 text-base lg:text-lg mb-1.5">14. Governing Law</h2>
              <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-3">
                These Terms shall be governed by and construed in accordance with the laws of Hong Kong Special Administrative Region, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="font-medium text-stone-900 text-base lg:text-lg mb-1.5">15. Dispute Resolution</h2>
              <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-2">Any disputes arising from these Terms shall be resolved through:</p>
              <ul className="list-disc list-outside space-y-1 text-stone-600 text-xs lg:text-sm leading-relaxed mb-3 pl-5">
                <li><strong className="text-stone-800">Informal Resolution:</strong> First, contact us to resolve the matter informally</li>
                <li><strong className="text-stone-800">Mediation:</strong> If informal resolution fails, disputes will be resolved through mediation</li>
                <li><strong className="text-stone-800">Arbitration:</strong> If mediation fails, disputes will be resolved through binding arbitration in Hong Kong Special Administrative Region.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-medium text-stone-900 text-base lg:text-lg mb-1.5">16. Severability</h2>
              <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-3">
                If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions will remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="font-medium text-stone-900 text-base lg:text-lg mb-1.5">17. Entire Agreement</h2>
              <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-3">
                These Terms, along with our{" "}
                <Link href="/privacy" className="text-amber-700 hover:text-amber-600 underline transition-colors">
                  Privacy Policy
                </Link>
                , constitute the entire agreement between you and Luminate with Mandy C. regarding the use of our services.
              </p>
            </section>

            <section className="lg:col-span-2">
              <h2 className="font-medium text-stone-900 text-base lg:text-lg mb-1.5">18. Contact Information</h2>
              <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-0">
                If you have questions about these Terms and Conditions, please contact us at:{" "}
                <a href="mailto:hey@mandyc852.com" className="text-amber-700 hover:text-amber-600 underline transition-colors">
                  hey@mandyc852.com
                </a>
                {" "}or visit{" "}
                <a href="https://mandyc.me/" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-600 underline transition-colors">
                  mandyc.me
                </a>
              </p>
            </section>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed footer at bottom */}
      <footer className="w-full bg-stone-950 border-t border-stone-900 py-3 lg:py-4 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p
            className="text-stone-400 text-xs"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            © 2026 Luminate with Mandy C. | All Rights Reserved |{" "}
            <Link href="/terms" className="hover:text-amber-300 transition-colors mx-1">
              Terms &amp; Conditions
            </Link>{" "}
            |{" "}
            <Link href="/privacy" className="hover:text-amber-300 transition-colors mx-1">
              Privacy Policy
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
