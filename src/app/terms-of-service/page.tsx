import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Build Demand",
  description: "Build Demand's terms of service for AI automation and web development services.",
};

export default function TermsOfService() {
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
            Terms of Service
          </h1>

          <p className="text-lg text-slate-300 mb-8">
            Last updated: January 2025
          </p>

          <div className="prose prose-invert max-w-none space-y-6 text-slate-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-300">
                By accessing or using Build Demand's services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Services</h2>
              <p className="text-slate-300">
                Build Demand provides the following services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                <li><strong>Web Development:</strong> Custom website design, development, and maintenance</li>
                <li><strong>AI Automation:</strong> WhatsApp automation, call handling, and intelligent chat systems</li>
                <li><strong>Booking Systems:</strong> Calendly integration and appointment scheduling</li>
                <li><strong>Consulting:</strong> Strategy calls and technical consultation</li>
                <li><strong>Support:</strong> Customer support and troubleshooting services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">3.1. Account Security</h3>
                <p className="text-slate-300">
                  You are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>Notifying us immediately of unauthorized access</li>
                  <li>Ensuring your account information is accurate and up-to-date</li>
                </ul>

                <h3 className="text-lg font-semibold text-emerald-400 mb-2">3.2. Acceptable Use</h3>
                <p className="text-slate-300">
                  You agree to use our services only for lawful purposes and in accordance with these Terms. You may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Use our services for any illegal or unauthorized purpose</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon intellectual property rights</li>
                  <li>Transmit viruses or malicious code</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt our services or servers</li>
                </ul>

                <h3 className="text-lg font-semibold text-emerald-400 mb-2">3.3. Content Responsibility</h3>
                <p className="text-slate-300">
                  You are solely responsible for any content you provide to us or upload through our services. You represent and warrant that you own all rights to such content.
              </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Service Availability</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">4.1. No Warranty of Uptime</h3>
                <p className="text-slate-300">
                  While we strive to maintain 99.9% uptime, we do not guarantee uninterrupted access to our services. Temporary interruptions may occur for maintenance or technical reasons.
                </p>

                <h3 className="text-lg font-semibold text-emerald-400 mb-2">4.2. Service Modifications</h3>
                <p className="text-slate-300">
                  Build Demand reserves the right to modify, suspend, or discontinue any service at any time with or without notice. We are not liable for any modification, suspension, or discontinuation of any service.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Payment Terms</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">5.1. Pricing and Payment</h3>
                <p className="text-slate-300">
                  All fees are quoted in South African Rand (ZAR) and are payable as specified on our pricing page. We reserve the right to change pricing at any time with 30 days notice.
                </p>

                <h3 className="text-lg font-semibold text-emerald-400 mb-2">5.2. Refund Policy</h3>
                <p className="text-slate-300">
                  Refunds are handled on a case-by-case basis:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li><strong>Within 48 hours:</strong> Full refund if service is not delivered</li>
                  <li><strong>Within 7 days:</strong> Full refund if unsatisfied with work quality</li>
                  <li><strong>After 7 days:</strong> No refunds unless required by law</li>
                  <li><strong>Project cancellation:</strong> Prorated refund based on work completed</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">6.1. Build Demand Ownership</h3>
                <p className="text-slate-300">
                  Build Demand owns all intellectual property rights in our services, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Website code, designs, and templates</li>
                  <li>AI automation systems and algorithms</li>
                  <li>Documentation and training materials</li>
                  <li>Brand names, logos, and trademarks</li>
                </ul>

                <h3 className="text-lg font-semibold text-emerald-400 mb-2">6.2. Client Ownership</h3>
                <p className="text-slate-300">
                  You retain ownership of:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Your business data and customer information</li>
                  <li>Custom content you provide for your website</li>
                  <li>Your brand assets and intellectual property</li>
                </ul>

                <h3 className="text-lg font-semibold text-emerald-400 mb-2">6.3. License Grant</h3>
                <p className="text-slate-300">
                  Upon full payment, you are granted a non-exclusive, non-transferable license to use the deliverables for your business purposes.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">7.1. No Warranties</h3>
                <p className="text-slate-300">
                  Our services are provided "as is" and "as available" without warranties of any kind, either express or implied.
                </p>

                <h3 className="text-lg font-semibold text-emerald-400 mb-2">7.2. Cap on Damages</h3>
                <p className="text-slate-300">
                  Build Demand shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Loss of profits or business revenue</li>
                  <li>Loss of data or business opportunities</li>
                  <li>Third-party service disruptions</li>
                </ul>

                <h3 className="text-lg font-semibold text-emerald-400 mb-2">7.3. Maximum Liability</h3>
                <p className="text-slate-300">
                  Our total liability to you for all claims shall not exceed the amount you have paid to us for the specific service giving rise to the claim.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Termination</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">8.1. Termination by You</h3>
                <p className="text-slate-300">
                  You may terminate your account at any time by:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Providing written notice to khensani@builddemandmarketing.com</li>
                  <li>Settling any outstanding payments</li>
                  <li>Deleting your account from our systems</li>
                </ul>

                <h3 className="text-lg font-semibold text-emerald-400 mb-2">8.2. Termination by Build Demand</h3>
                <p className="text-slate-300">
                  We may terminate or suspend your access if:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>You breach these Terms of Service</li>
                  <li>You fail to make payments when due</li>
                  <li>Your account remains inactive for more than 180 days</li>
                  <li>We reasonably believe you are using our services fraudulently</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Indemnification</h2>
              <p className="text-slate-300">
                You agree to indemnify and hold Build Demand, our officers, directors, employees, and agents harmless from any claims, damages, or expenses arising from your use of our services or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Dispute Resolution</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">10.1. Good Faith Negotiation</h3>
                <p className="text-slate-300">
                  If any dispute arises, we commit to negotiating in good faith to resolve the issue promptly and fairly.
                </p>

                <h3 className="text-lg font-semibold text-emerald-400 mb-2">10.2. Governing Law</h3>
                <p className="text-slate-300">
                  These Terms shall be governed by the laws of South Africa. Any legal action must be brought in South African courts.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Changes to Terms</h2>
              <p className="text-slate-300">
                Build Demand reserves the right to modify these Terms at any time. We will notify you of significant changes by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                <li>Emailing the address associated with your account</li>
                <li>Posting a notice on our website</li>
                <li>Updating the "Last updated" date on this page</li>
              </ul>
              <p className="text-slate-300">
                Your continued use of our services after changes constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Contact Information</h2>
              <p className="text-slate-300">
                If you have questions about these Terms of Service, please contact us:
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
