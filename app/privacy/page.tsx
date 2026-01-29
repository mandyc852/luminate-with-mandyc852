import Link from "next/link"

export const metadata = {
  title: "Privacy Policy | Luminate with Mandy C",
  description:
    "Privacy Policy for Luminate with Mandy C. How we collect, use, and protect your information when you sign up for our free audio practice.",
}

const sectionTitle =
  "font-medium text-stone-900 text-xl mt-10 mb-3 first:mt-0"
const bodyClass =
  "text-stone-600 leading-relaxed mb-4"
export default function PrivacyPage() {
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
          PRIVACY POLICY
        </h1>
        <p className="text-stone-500 text-sm mb-12">Last Updated: January 29, 2026</p>

        <section>
          <h2 className={sectionTitle}>Introduction</h2>
          <p className={bodyClass}>
            Luminate with Mandy C. (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
            respects your privacy and is committed to protecting your personal
            information. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website
            and sign up for our free audio practice.
          </p>
        </section>

        <section>
          <h2 className={sectionTitle}>Information We Collect</h2>
          <p className={bodyClass}>
            When you sign up for our 5-Minute Quantum Identity Reset audio, we
            collect:
          </p>
          <ul className="list-disc list-outside space-y-1 text-stone-600 leading-relaxed mb-4 pl-5">
            <li>
              <strong className="text-stone-800">Personal Information:</strong>{" "}
              Your first name and email address
            </li>
            <li>
              <strong className="text-stone-800">Usage Data:</strong> Information
              about how you interact with our emails and content
            </li>
            <li>
              <strong className="text-stone-800">Device Information:</strong>{" "}
              Browser type, IP address, and operating system (collected
              automatically)
            </li>
          </ul>
        </section>

        <section>
          <h2 className={sectionTitle}>How We Use Your Information</h2>
          <p className={bodyClass}>We use the information we collect to:</p>
          <ul className="list-disc list-outside space-y-1 text-stone-600 leading-relaxed mb-4 pl-5">
            <li>Deliver your free audio practice immediately upon signup</li>
            <li>Send you the 5-Minute Quantum Identity Reset audio file</li>
            <li>
              Provide occasional insights on quantum identity work, subconscious
              reprogramming, and nervous system regulation
            </li>
            <li>
              Communicate with you about updates, new offerings, or relevant
              content from Luminate with Mandy C.
            </li>
            <li>Improve our services and user experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className={sectionTitle}>Email Communications</h2>
          <p className={bodyClass}>When you sign up, you&apos;ll receive:</p>
          <ul className="list-disc list-outside space-y-1 text-stone-600 leading-relaxed mb-4 pl-5">
            <li>
              <strong className="text-stone-800">Immediate delivery:</strong> Your
              free audio practice
            </li>
            <li>
              <strong className="text-stone-800">Occasional emails:</strong>{" "}
              Insights on identity work, nervous system regulation, and conscious
              entrepreneurship
            </li>
            <li>
              <strong className="text-stone-800">No spam:</strong> We respect your
              inbox and only send valuable content
            </li>
          </ul>
          <p className={bodyClass}>
            You can unsubscribe at any time by clicking the &quot;unsubscribe&quot;
            link at the bottom of any email.
          </p>
        </section>

        <section>
          <h2 className={sectionTitle}>How We Share Your Information</h2>
          <p className={bodyClass}>
            We do not sell, rent, or trade your personal information to third
            parties.
          </p>
          <p className={bodyClass}>We may share your information with:</p>
          <ul className="list-disc list-outside space-y-1 text-stone-600 leading-relaxed mb-4 pl-5">
            <li>
              <strong className="text-stone-800">Email Service Provider:</strong>{" "}
              We use an email service provider (such as ConvertKit, Mailchimp, or
              ActiveCampaign) to manage our email list and deliver content to you
            </li>
            <li>
              <strong className="text-stone-800">Analytics Services:</strong> We
              use analytics tools to understand how our content performs
            </li>
            <li>
              <strong className="text-stone-800">Legal Requirements:</strong> We
              may disclose your information if required by law or to protect our
              rights
            </li>
          </ul>
        </section>

        <section>
          <h2 className={sectionTitle}>Data Security</h2>
          <p className={bodyClass}>
            We implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, disclosure, or
            destruction. However, no method of transmission over the internet is
            100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className={sectionTitle}>Your Rights</h2>
          <p className={bodyClass}>You have the right to:</p>
          <ul className="list-disc list-outside space-y-1 text-stone-600 leading-relaxed mb-4 pl-5">
            <li>
              <strong className="text-stone-800">Access:</strong> Request a copy
              of the personal information we hold about you
            </li>
            <li>
              <strong className="text-stone-800">Correction:</strong> Request
              that we correct any inaccurate information
            </li>
            <li>
              <strong className="text-stone-800">Deletion:</strong> Request that
              we delete your personal information
            </li>
            <li>
              <strong className="text-stone-800">Opt-out:</strong> Unsubscribe
              from our email list at any time
            </li>
            <li>
              <strong className="text-stone-800">Portability:</strong> Request a
              copy of your data in a machine-readable format
            </li>
          </ul>
          <p className={bodyClass}>
            To exercise these rights, contact us at{" "}
            <a
              href="mailto:hey@mandyc852.com"
              className="text-amber-700 hover:text-amber-600 underline transition-colors"
            >
              hey@mandyc852.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className={sectionTitle}>Cookies and Tracking</h2>
          <p className={bodyClass}>
            Our website may use cookies to enhance your experience. You can set
            your browser to refuse cookies, though some features of our site may
            not function properly.
          </p>
        </section>

        <section>
          <h2 className={sectionTitle}>Third-Party Links</h2>
          <p className={bodyClass}>
            Our emails or website may contain links to third-party sites. We are
            not responsible for the privacy practices of these external sites.
          </p>
        </section>

        <section>
          <h2 className={sectionTitle}>Children&apos;s Privacy</h2>
          <p className={bodyClass}>
            Our services are not intended for individuals under the age of 18. We
            do not knowingly collect personal information from children.
          </p>
        </section>

        <section>
          <h2 className={sectionTitle}>International Users</h2>
          <p className={bodyClass}>
            If you are accessing our services from outside the United States,
            please note that your information may be transferred to, stored, and
            processed in the United States where our servers are located.
          </p>
        </section>

        <section>
          <h2 className={sectionTitle}>Changes to This Privacy Policy</h2>
          <p className={bodyClass}>
            We may update this Privacy Policy from time to time. We will notify
            you of any material changes by posting the new policy on this page
            and updating the &quot;Last Updated&quot; date.
          </p>
        </section>

        <section>
          <h2 className={sectionTitle}>Contact Us</h2>
          <p className={bodyClass}>
            If you have questions about this Privacy Policy, please contact us
            at:
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
