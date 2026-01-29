import Link from "next/link"

export const metadata = {
  title: "Privacy Policy | Luminate with Mandy C",
  description:
    "Privacy Policy for Luminate with Mandy C. How we collect, use, and protect your information when you sign up for our free audio practice.",
}

export default function PrivacyPage() {
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
              PRIVACY POLICY
            </h1>
            <p className="text-stone-500 text-xs lg:text-sm">Last Updated: January 29, 2026</p>
          </div>

          {/* Two-column layout for desktop - scrollable content area on mobile */}
          <div className="flex-1 lg:overflow-y-auto lg:pr-2">
            <div className="grid lg:grid-cols-2 gap-x-10 gap-y-4 lg:gap-y-5 pb-4">
              <section>
                <h2 className="font-medium text-stone-900 text-base lg:text-lg mb-1.5">Introduction</h2>
                <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-3">
                  Luminate with Mandy C. (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
                  respects your privacy and is committed to protecting your personal
                  information. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your information when you visit our website
                  and sign up for our free audio practice.
                </p>
              </section>

              <section>
                <h2 className="font-medium text-stone-900 text-base lg:text-lg mb-1.5">Information We Collect</h2>
                <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-1.5">
                  When you sign up for our 5-Minute Quantum Identity Reset audio, we collect:
                </p>
                <ul className="list-disc list-outside space-y-0.5 text-stone-600 text-xs lg:text-sm leading-relaxed mb-3 pl-5">
                  <li><strong className="text-stone-800">Personal Information:</strong> Your first name and email address</li>
                  <li><strong className="text-stone-800">Usage Data:</strong> Information about how you interact with our emails</li>
                  <li><strong className="text-stone-800">Device Information:</strong> Browser type, IP address, and OS</li>
                </ul>
              </section>

              <section>
                <h2 className="font-medium text-stone-900 text-base lg:text-lg mb-1.5">How We Use Your Information</h2>
                <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-1.5">We use the information we collect to:</p>
                <ul className="list-disc list-outside space-y-0.5 text-stone-600 text-xs lg:text-sm leading-relaxed mb-3 pl-5">
                  <li>Deliver your free audio practice immediately upon signup</li>
                  <li>Send you the 5-Minute Quantum Identity Reset audio file</li>
                  <li>Provide occasional insights on quantum identity work</li>
                  <li>Communicate updates and new offerings</li>
                  <li>Improve our services and user experience</li>
                </ul>
              </section>

              <section>
                <h2 className="font-medium text-stone-900 text-base lg:text-lg mb-1.5">Email Communications</h2>
                <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-1.5">When you sign up, you&apos;ll receive:</p>
                <ul className="list-disc list-outside space-y-0.5 text-stone-600 text-xs lg:text-sm leading-relaxed mb-1.5 pl-5">
                  <li><strong className="text-stone-800">Immediate delivery:</strong> Your free audio practice</li>
                  <li><strong className="text-stone-800">Occasional emails:</strong> Insights on identity work</li>
                  <li><strong className="text-stone-800">No spam:</strong> We respect your inbox</li>
                </ul>
                <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-3">
                  You can unsubscribe at any time by clicking the &quot;unsubscribe&quot; link.
                </p>
              </section>

              <section>
                <h2 className="font-medium text-stone-900 text-base lg:text-lg mb-1.5">How We Share Your Information</h2>
                <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-1.5">
                  We do not sell, rent, or trade your personal information to third parties.
                </p>
                <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-1.5">We may share with:</p>
                <ul className="list-disc list-outside space-y-0.5 text-stone-600 text-xs lg:text-sm leading-relaxed mb-3 pl-5">
                  <li><strong className="text-stone-800">Email Service Provider:</strong> To manage our email list</li>
                  <li><strong className="text-stone-800">Analytics Services:</strong> To understand performance</li>
                  <li><strong className="text-stone-800">Legal Requirements:</strong> If required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="font-medium text-stone-900 text-base lg:text-lg mb-1.5">Data Security</h2>
                <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-3">
                  We implement appropriate security measures to protect your personal information from unauthorized access. However, no internet transmission method is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="font-medium text-stone-900 text-base lg:text-lg mb-1.5">Your Rights</h2>
                <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-1.5">You have the right to:</p>
                <ul className="list-disc list-outside space-y-0.5 text-stone-600 text-xs lg:text-sm leading-relaxed mb-1.5 pl-5">
                  <li><strong className="text-stone-800">Access:</strong> Request a copy of your information</li>
                  <li><strong className="text-stone-800">Correction:</strong> Request corrections</li>
                  <li><strong className="text-stone-800">Deletion:</strong> Request deletion</li>
                  <li><strong className="text-stone-800">Opt-out:</strong> Unsubscribe anytime</li>
                </ul>
                <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-3">
                  Contact us at{" "}
                  <a href="mailto:hey@mandyc852.com" className="text-amber-700 hover:text-amber-600 underline transition-colors">
                    hey@mandyc852.com
                  </a>
                </p>
              </section>

              <section>
                <h2 className="font-medium text-stone-900 text-base lg:text-lg mb-1.5">Additional Information</h2>
                <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-1">
                  <strong className="text-stone-800">Cookies:</strong> We may use cookies to enhance your experience.
                </p>
                <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-1">
                  <strong className="text-stone-800">Third-Party Links:</strong> We&apos;re not responsible for external sites.
                </p>
                <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-1">
                  <strong className="text-stone-800">Children&apos;s Privacy:</strong> Not intended for individuals under 18.
                </p>
                <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-3">
                  <strong className="text-stone-800">International Users:</strong> Data may be processed in the US.
                </p>
              </section>

              <section className="lg:col-span-2">
                <h2 className="font-medium text-stone-900 text-base lg:text-lg mb-1.5">Contact Us</h2>
                <p className="text-stone-600 text-xs lg:text-sm leading-relaxed">
                  Questions? Contact us at{" "}
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
