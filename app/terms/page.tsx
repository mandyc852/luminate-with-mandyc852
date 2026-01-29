import Link from "next/link"

export const metadata = {
  title: "Terms & Conditions | Luminate with Mandy C",
  description:
    "Terms and Conditions for Luminate with Mandy C. Please read these terms before using our services.",
}

const sectionTitle =
  "font-medium text-stone-900 text-xl mt-10 mb-3 first:mt-0"
const bodyClass =
  "text-stone-600 leading-relaxed mb-4"
const subsectionTitle =
  "font-medium text-stone-800 text-lg mt-6 mb-2"

export default function TermsPage() {
  return (
    <div
      className="min-h-screen bg-stone-50"
      style={{ fontFamily: "Cormorant Garamond, serif" }}
    >
      <div className="max-w-2xl mx-auto px-6 py-12 md:py-16">
        <Link
          href="/leap"
          className="inline-block text-amber-700 hover:text-amber-600 text-base md:text-lg font-medium mb-10 transition-colors"
        >
          ← Back
        </Link>

        <h1 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-2">
          TERMS &amp; CONDITIONS
        </h1>
        <p className="text-stone-500 text-sm mb-12">Last Updated: January 29, 2026</p>

        <section>
          <h2 className={sectionTitle}>1. Acceptance of Terms</h2>
          <p className={bodyClass}>
            By accessing our website and signing up for the 5-Minute Quantum
            Identity Reset audio practice, you agree to be bound by these Terms
            and Conditions. If you do not agree with any part of these terms,
            please do not use our services.
          </p>
        </section>

        <section>
          <h2 className={sectionTitle}>2. Description of Service</h2>
          <p className={bodyClass}>
            Luminate with Mandy C. provides:
          </p>
          <ul className="list-disc list-outside space-y-1 text-stone-600 leading-relaxed mb-4 pl-5">
            <li>
              A free 5-minute audio practice for subconscious identity shifts
              and nervous system regulation
            </li>
            <li>
              Educational content about quantum identity work, subconscious
              reprogramming, and conscious entrepreneurship
            </li>
            <li>
              Occasional email communications with insights and updates
            </li>
          </ul>
        </section>

        <section>
          <h2 className={sectionTitle}>3. Disclaimer of Medical/Therapeutic Advice</h2>
          <p className={`${bodyClass} font-medium text-stone-800`}>
            IMPORTANT: The audio practice and content provided by Luminate with
            Mandy C. are for educational and informational purposes only.
          </p>
          <ul className="list-disc list-outside space-y-1 text-stone-600 leading-relaxed mb-4 pl-5">
            <li>This is not medical advice, therapy, or psychological treatment</li>
            <li>
              The audio practice is not intended to diagnose, treat, cure, or
              prevent any medical or psychological condition
            </li>
            <li>We are not licensed healthcare providers or therapists</li>
            <li>
              This content should not replace professional medical or mental
              health care
            </li>
          </ul>
          <p className={bodyClass}>
            If you are experiencing mental health issues, trauma, or medical
            conditions, please consult with a qualified healthcare professional
            before using this audio practice.
          </p>
        </section>

        <section>
          <h2 className={sectionTitle}>4. Disclaimer of Financial Advice</h2>
          <p className={bodyClass}>
            While Mandy C. is a corporate finance and IPO advisor in her
            professional capacity, the content provided through Luminate with
            Mandy C. is:
          </p>
          <ul className="list-disc list-outside space-y-1 text-stone-600 leading-relaxed mb-4 pl-5">
            <li>Not financial advice or investment recommendations</li>
            <li>For educational and personal development purposes only</li>
            <li>Not a substitute for professional financial advice</li>
          </ul>
          <p className={bodyClass}>
            For financial decisions, please consult with a qualified financial
            advisor.
          </p>
        </section>

        <section>
          <h2 className={sectionTitle}>5. Results Disclaimer</h2>
          <p className={bodyClass}>
            Results from using the audio practice vary from person to person. We
            make no guarantees or promises about:
          </p>
          <ul className="list-disc list-outside space-y-1 text-stone-600 leading-relaxed mb-4 pl-5">
            <li>Specific outcomes or results</li>
            <li>Business success or income generation</li>
            <li>Timeline for seeing changes</li>
            <li>Effectiveness for any particular individual</li>
          </ul>
          <p className={bodyClass}>
            Your results depend on many factors including your commitment,
            consistency, current circumstances, and individual differences.
          </p>
        </section>

        <section>
          <h2 className={sectionTitle}>6. Intellectual Property Rights</h2>
          <p className={bodyClass}>
            All content provided by Luminate with Mandy C., including the audio
            practice, text, graphics, logos, and materials, are owned by or
            licensed to us and are protected by copyright and intellectual
            property laws.
          </p>
          <h3 className={subsectionTitle}>You may:</h3>
          <ul className="list-disc list-outside space-y-1 text-stone-600 leading-relaxed mb-4 pl-5">
            <li>Download the audio for your personal, non-commercial use</li>
            <li>Listen to the audio as often as you like</li>
          </ul>
          <h3 className={subsectionTitle}>You may NOT:</h3>
          <ul className="list-disc list-outside space-y-1 text-stone-600 leading-relaxed mb-4 pl-5">
            <li>Resell, redistribute, or share the audio file with others</li>
            <li>Use the content for commercial purposes</li>
            <li>Modify, reproduce, or create derivative works</li>
            <li>Remove any copyright or proprietary notices</li>
            <li>Claim the content as your own</li>
          </ul>
        </section>

        <section>
          <h2 className={sectionTitle}>7. User Conduct</h2>
          <p className={bodyClass}>
            By using our services, you agree to:
          </p>
          <ul className="list-disc list-outside space-y-1 text-stone-600 leading-relaxed mb-4 pl-5">
            <li>Provide accurate information when signing up</li>
            <li>Use the content for lawful purposes only</li>
            <li>Not violate any intellectual property rights</li>
            <li>
              Not use the content to harm others or engage in illegal activities
            </li>
          </ul>
        </section>

        <section>
          <h2 className={sectionTitle}>8. Email Communications</h2>
          <p className={bodyClass}>
            By providing your email address, you consent to receive:
          </p>
          <ul className="list-disc list-outside space-y-1 text-stone-600 leading-relaxed mb-4 pl-5">
            <li>Immediate delivery of your free audio practice</li>
            <li>
              Occasional emails with insights, updates, and relevant content
            </li>
            <li>No spam or excessive emails</li>
          </ul>
          <p className={bodyClass}>
            You can unsubscribe at any time using the link in any email.
          </p>
        </section>

        <section>
          <h2 className={sectionTitle}>9. Limitation of Liability</h2>
          <p className={bodyClass}>
            To the fullest extent permitted by law:
          </p>
          <ul className="list-disc list-outside space-y-1 text-stone-600 leading-relaxed mb-4 pl-5">
            <li>
              Luminate with Mandy C. is provided &quot;as is&quot; without warranties
              of any kind
            </li>
            <li>
              We are not liable for any direct, indirect, incidental,
              consequential, or punitive damages arising from your use of our
              services
            </li>
            <li>
              We are not responsible for any decisions you make based on our
              content
            </li>
            <li>
              Your use of the audio practice and content is at your own risk
            </li>
          </ul>
        </section>

        <section>
          <h2 className={sectionTitle}>10. Indemnification</h2>
          <p className={bodyClass}>
            You agree to indemnify and hold harmless Luminate with Mandy C. and
            Mandy Cheung from any claims, damages, losses, liabilities, and
            expenses (including legal fees) arising from:
          </p>
          <ul className="list-disc list-outside space-y-1 text-stone-600 leading-relaxed mb-4 pl-5">
            <li>Your use of our services</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any rights of another party</li>
          </ul>
        </section>

        <section>
          <h2 className={sectionTitle}>11. Third-Party Links</h2>
          <p className={bodyClass}>
            Our website or emails may contain links to third-party websites. We
            are not responsible for the content, privacy practices, or terms of
            these external sites.
          </p>
        </section>

        <section>
          <h2 className={sectionTitle}>12. Modifications to Service</h2>
          <p className={bodyClass}>
            We reserve the right to:
          </p>
          <ul className="list-disc list-outside space-y-1 text-stone-600 leading-relaxed mb-4 pl-5">
            <li>Modify or discontinue the service at any time</li>
            <li>Change these Terms and Conditions</li>
            <li>Update the content or format of our offerings</li>
          </ul>
          <p className={bodyClass}>
            We will notify you of material changes by posting updates on our
            website or via email.
          </p>
        </section>

        <section>
          <h2 className={sectionTitle}>13. Termination</h2>
          <p className={bodyClass}>
            We reserve the right to:
          </p>
          <ul className="list-disc list-outside space-y-1 text-stone-600 leading-relaxed mb-4 pl-5">
            <li>Terminate or suspend your access to our services</li>
            <li>Remove you from our email list</li>
            <li>Discontinue providing the audio practice</li>
          </ul>
          <p className={bodyClass}>
            You may terminate your use of our services at any time by
            unsubscribing from our email list.
          </p>
        </section>

        <section>
          <h2 className={sectionTitle}>14. Governing Law</h2>
          <p className={bodyClass}>
            These Terms shall be governed by and construed in accordance with
            the laws of Hong Kong Special Administrative Region, without regard
            to conflict of law principles.
          </p>
        </section>

        <section>
          <h2 className={sectionTitle}>15. Dispute Resolution</h2>
          <p className={bodyClass}>
            Any disputes arising from these Terms shall be resolved through:
          </p>
          <ul className="list-disc list-outside space-y-1 text-stone-600 leading-relaxed mb-4 pl-5">
            <li>
              <strong className="text-stone-800">Informal Resolution:</strong>{" "}
              First, contact us to resolve the matter informally
            </li>
            <li>
              <strong className="text-stone-800">Mediation:</strong> If informal
              resolution fails, disputes will be resolved through mediation
            </li>
            <li>
              <strong className="text-stone-800">Arbitration:</strong> If
              mediation fails, disputes will be resolved through binding
              arbitration in Hong Kong Special Administrative Region.
            </li>
          </ul>
        </section>

        <section>
          <h2 className={sectionTitle}>16. Severability</h2>
          <p className={bodyClass}>
            If any provision of these Terms is found to be unenforceable or
            invalid, the remaining provisions will remain in full force and
            effect.
          </p>
        </section>

        <section>
          <h2 className={sectionTitle}>17. Entire Agreement</h2>
          <p className={bodyClass}>
            These Terms, along with our{" "}
            <Link
              href="/privacy"
              className="text-amber-700 hover:text-amber-600 underline transition-colors"
            >
              Privacy Policy
            </Link>
            , constitute the entire agreement between you and Luminate with
            Mandy C. regarding the use of our services.
          </p>
        </section>

        <section>
          <h2 className={sectionTitle}>18. Contact Information</h2>
          <p className={bodyClass}>
            If you have questions about these Terms and Conditions, please
            contact us at:
          </p>
          <p className={bodyClass}>
            Email:{" "}
            <a
              href="mailto:hey@mandyc852.com"
              className="text-amber-700 hover:text-amber-600 underline transition-colors"
            >
              hey@mandyc852.com
            </a>
            <br />
            Website:{" "}
            <a
              href="https://mandyc.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-700 hover:text-amber-600 underline transition-colors"
            >
              https://mandyc.me/
            </a>
          </p>
        </section>

        <footer className="mt-16 pt-8 border-t border-stone-200 text-center">
          <Link
            href="/leap"
            className="text-amber-700 hover:text-amber-600 text-base md:text-lg font-medium transition-colors"
          >
            ← Back
          </Link>
        </footer>
      </div>
    </div>
  )
}
