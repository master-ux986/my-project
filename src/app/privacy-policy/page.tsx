import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Build Demand",
  description: "Build Demand's privacy policy for our AI automation and web development services.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-900/70 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-900/50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" className="h-5 w-5">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#059669', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <rect width="64" height="64" rx="12" fill="url(#grad1)"/>
                <path d="M32 16L40 32L32 48L24 32" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M32 28V36" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="32" cy="48" r="3" fill="white"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-white">Build Demand</span>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Home
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 container px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Privacy Policy
          </h1>

          <p className="text-lg text-slate-300 mb-8">
            Last updated: January 2025
          </p>

          <div className="prose prose-invert max-w-none space-y-6 text-slate-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-slate-300">
                Build Demand ("we," "us," or "our") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our AI automation and web development services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">2.1. Contact Information</h3>
                <p className="text-slate-300">
                  We collect information you provide directly, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Name, email address, and phone number</li>
                  <li>Company name and business details</li>
                  <li>Project requirements and preferences</li>
                  <li>Calendly booking information</li>
                </ul>

                <h3 className="text-lg font-semibold text-emerald-400 mb-2">2.2. Usage Data</h3>
                <p className="text-slate-300">
                  We automatically collect information about:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Website access and usage patterns</li>
                  <li>AI interaction history and conversations</li>
                  <li>Booking and appointment data</li>
                  <li>Technical logs and error reports</li>
                  <li>Device information and IP address</li>
                </ul>

                <h3 className="text-lg font-semibold text-emerald-400 mb-2">2.3. Communications</h3>
                <p className="text-slate-300">
                  We may record communications including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Email correspondence and chat history</li>
                  <li>WhatsApp message logs (with consent)</li>
                  <li>Phone call recordings (with consent)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">3.1. Service Delivery</h3>
                <p className="text-slate-300">
                  We use your information to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Develop and deploy your websites</li>
                  <li>Configure AI automation systems</li>
                  <li>Provide customer support and troubleshooting</li>
                  <li>Schedule and manage bookings</li>
                  <li>Send service updates and notifications</li>
                </ul>

                <h3 className="text-lg font-semibold text-emerald-400 mb-2">3.2. AI Training</h3>
                <p className="text-slate-300">
                  We may use anonymized data to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Improve AI response accuracy</li>
                  <li>Enhance automation features</li>
                  <li>Optimize conversation flows</li>
                </ul>

                <h3 className="text-lg font-semibold text-emerald-400 mb-2">3.3. Analytics and Improvement</h3>
                <p className="text-slate-300">
                  We analyze usage data to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Improve service performance</li>
                  <li>Identify and fix technical issues</li>
                  <li>Develop new features and services</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Sharing and Disclosure</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">4.1. We Do Not Sell Your Data</h3>
                <p className="text-slate-300">
                  Build Demand never sells, rents, or trades your personal information with third parties for marketing purposes.
                </p>

                <h3 className="text-lg font-semibold text-emerald-400 mb-2">4.2. Service Providers</h3>
                <p className="text-slate-300">
                  We may share data with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Calendly for booking services</li>
                  <li>WhatsApp Business API for messaging</li>
                  <li>Hosting providers for website deployment</li>
                  <li>Analytics services for performance tracking</li>
                </ul>

                <h3 className="text-lg font-semibold text-emerald-400 mb-2">4.3. Legal Requirements</h3>
                <p className="text-slate-300">
                  We may disclose information when required by law or to protect our rights, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>To comply with legal obligations</li>
                  <li>To protect against fraud or abuse</li>
                  <li>To enforce our Terms of Service</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
              <div className="space-y-3">
                <p className="text-slate-300">
                  We implement industry-standard security measures to protect your information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>SSL/TLS encryption for all data transfers</li>
                  <li>Secure data storage with access controls</li>
                  <li>Regular security audits and updates</li>
                  <li>Employee training on data protection</li>
                  <li>Compliance with South African data protection laws</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">6.1. Access and Control</h3>
                <p className="text-slate-300">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Request access to your personal data</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>

                <h3 className="text-lg font-semibold text-emerald-400 mb-2">6.2. Data Portability</h3>
                <p className="text-slate-300">
                  You can request a copy of your data in a commonly used format.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">7.1. Essential Cookies</h3>
                <p className="text-slate-300">
                  We use essential cookies for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Authentication and session management</li>
                  <li>Security and fraud prevention</li>
                  <li>Functionality and user preferences</li>
                </ul>

                <h3 className="text-lg font-semibold text-emerald-400 mb-2">7.2. Analytics Cookies</h3>
                <p className="text-slate-300">
                  We may use analytics cookies to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Understand how visitors use our website</li>
                  <li>Improve performance and user experience</li>
                  <li>Analyze traffic and engagement patterns</li>
                </ul>

                <h3 className="text-lg font-semibold text-emerald-400 mb-2">7.3. Managing Cookies</h3>
                <p className="text-slate-300">
                  You can control cookies through your browser settings. Disabling cookies may affect website functionality.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
              <p className="text-slate-300">
                Our services are not intended for children under 18. We do not knowingly collect personal information from minors. If we discover we have collected data from a child, we will take steps to delete it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Policy</h2>
              <p className="text-slate-300">
                We may update this Privacy Policy from time to time. We will notify you of significant changes by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                <li>Emailing the address associated with your account</li>
                <li>Posting a notice on our website</li>
                <li>Updating the "Last updated" date on this page</li>
              </ul>
              <p className="text-slate-300">
                Your continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
              <p className="text-slate-300">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-6 mt-4">
                <p className="text-slate-300 mb-2">
                  <strong>Email:</strong> khensani@builddemandmarketing.com
                </p>
                <p className="text-sm text-slate-400">
                  We will respond to your inquiry within 48 hours.
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
