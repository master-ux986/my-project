import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - Build Demand",
  description: "Build Demand's cookie policy for website visitors and users.",
};

export default function CookiePolicy() {
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
            Cookie Policy
          </h1>

          <p className="text-lg text-slate-300 mb-8">
            Last updated: January 2025
          </p>

          <div className="prose prose-invert max-w-none space-y-6 text-slate-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies?</h2>
              <p className="text-slate-300">
                Cookies are small text files that are stored on your device when you visit websites. They help us provide you with a better experience by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                <li>Remembering your preferences and settings</li>
                <li>Keeping you logged in during your visit</li>
                <li>Understanding how you use our website</li>
                <li>Improving website performance and functionality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Cookies</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">2.1. Essential Cookies</h3>
                <p className="text-slate-300">
                  These cookies are necessary for our website to function properly. They enable:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Authentication and maintaining your login session</li>
                  <li>Security and fraud prevention measures</li>
                  <li>Remembering your preferences and settings</li>
                </ul>
                <p className="text-sm text-slate-400 mt-2">
                  <strong>Note:</strong> These cookies cannot be disabled without affecting core website functionality.
                </p>

                <h3 className="text-lg font-semibold text-emerald-400 mb-2">2.2. Analytics and Performance Cookies</h3>
                <p className="text-slate-300">
                  We use these cookies to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Track website traffic and visitor patterns</li>
                  <li>Measure page performance and load times</li>
                  <li>Identify popular pages and user journeys</li>
                  <li>Detect and fix technical issues</li>
                </ul>

                <h3 className="text-lg font-semibold text-emerald-400 mb-2">2.3. Functionality Cookies</h3>
                <p className="text-slate-300">
                  These cookies enhance your experience by:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Remembering your language preferences</li>
                  <li>Saving form data to reduce typing</li>
                  <li>Displaying relevant content based on your interests</li>
                </ul>

                <h3 className="text-lg font-semibold text-emerald-400 mb-2">2.4. Third-Party Cookies</h3>
                <p className="text-slate-300">
                  We may use third-party services that set cookies through our website, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li><strong>Google Analytics:</strong> For website analytics</li>
                  <li><strong>Vercel Analytics:</strong> For performance monitoring</li>
                  <li><strong>Calendly:</strong> For booking functionality</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Types of Cookies We Use</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">3.1. Session Cookies</h3>
                <p className="text-slate-300">
                  Temporary cookies that expire when you close your browser. Used for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Maintaining login state during your visit</li>
                  <li>Tracking multi-page sessions</li>
                </ul>

                <h3 className="text-lg font-semibold text-emerald-400 mb-2">3.2. Persistent Cookies</h3>
                <p className="text-slate-300">
                  Cookies that remain on your device for a set period or until you delete them. Used for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Remembering your login details for future visits</li>
                  <li>Storing your preferences and settings</li>
                  <li>Analytics tracking across multiple sessions</li>
                </ul>

                <h3 className="text-lg font-semibold text-emerald-400 mb-2">3.3. Secure Cookies</h3>
                <p className="text-slate-300">
                  Cookies with security flags that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Can only be transmitted over encrypted connections</li>
                  <li>Cannot be accessed by JavaScript on our site</li>
                  <li>Help prevent cross-site scripting (XSS) attacks</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Managing Your Cookie Preferences</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">4.1. Browser Settings</h3>
                <p className="text-slate-300">
                  Most web browsers allow you to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>View what cookies are stored</li>
                  <li>Delete existing cookies</li>
                  <li>Block third-party cookies</li>
                  <li>Set cookie preferences and notifications</li>
                </ul>

                <h3 className="text-lg font-semibold text-emerald-400 mb-2">4.2. Browser-Specific Instructions</h3>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-6 mt-4 space-y-4">
                  <div>
                    <strong className="text-white mb-2">Chrome/Edge:</strong>
                    <p className="text-sm text-slate-400">
                      Settings → Privacy and security → Cookies and other site data
                    </p>
                  </div>
                  <div>
                    <strong className="text-white mb-2">Firefox:</strong>
                    <p className="text-sm text-slate-400">
                      Settings → Privacy & Security → Cookies and Site Data → Manage Data
                    </p>
                  </div>
                  <div>
                    <strong className="text-white mb-2">Safari:</strong>
                    <p className="text-sm text-slate-400">
                      Safari → Preferences → Privacy → Manage Website Data
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Collected Through Cookies</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">5.1. Information We Track</h3>
                <p className="text-slate-300">
                  Through cookies, we may collect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>IP address and approximate location</li>
                  <li>Browser type and version</li>
                  <li>Device type (mobile, desktop, tablet)</li>
                  <li>Referring website</li>
                  <li>Pages visited and time spent</li>
                  <li>Clicks and navigation patterns</li>
                </ul>

                <h3 className="text-lg font-semibold text-emerald-400 mb-2">5.2. Information We Don't Track</h3>
                <p className="text-slate-300">
                  We do NOT use cookies to collect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Personal identification information (name, email, phone)</li>
                  <li>Payment or financial information</li>
                  <li>Passwords or sensitive credentials</li>
                  <li>Private messages or communication content</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Third-Party Services</h2>
              <p className="text-slate-300">
                We may embed third-party services that use their own cookies:
              </p>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">6.1. Google Analytics</h3>
                <p className="text-slate-300">
                  We use Google Analytics to understand how visitors use our website. Google Analytics may collect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Anonymous usage statistics</li>
                  <li>Demographic data (location, language)</li>
                  <li>Device and browser information</li>
                </ul>
                <p className="text-sm text-slate-400 mt-2">
                  You can opt out of Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 underline">https://tools.google.com/dlpage/gaoptout</a>
                </p>

                <h3 className="text-lg font-semibold text-emerald-400 mb-2">6.2. Calendly</h3>
                <p className="text-slate-300">
                  Our booking system uses Calendly, which may set cookies for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Booking preferences and timezone settings</li>
                  <li>Calendar integration settings</li>
                  <li>Event history and reminders</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Your Choices and Consent</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">7.1. Essential Cookies</h3>
                <p className="text-slate-300">
                  You cannot opt out of essential cookies as they are required for the website to function. By using our website, you consent to their use.
                </p>

                <h3 className="text-lg font-semibold text-emerald-400 mb-2">7.2. Optional Cookies</h3>
                <p className="text-slate-300">
                  You may accept or reject optional cookies through your browser settings. However, disabling certain cookies may affect website functionality and your user experience.
                </p>

                <h3 className="text-lg font-semibold text-emerald-400 mb-2">7.3. Cookie Consent Banner</h3>
                <p className="text-slate-300">
                  We may display a cookie consent banner on your first visit to give you clear information about the cookies we use and obtain your consent before setting non-essential cookies.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Cookie Updates and Changes</h2>
              <div className="space-y-3">
                <p className="text-slate-300">
                  We may update this Cookie Policy from time to time to reflect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Changes in our cookie practices</li>
                  <li>New types of cookies we introduce</li>
                  <li>Updates to third-party services we use</li>
                </ul>
                <p className="text-slate-300">
                  We will notify you of significant changes by:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Updating the "Last updated" date on this page</li>
                  <li>Posting a notice on our website</li>
                </ul>
                <p className="text-slate-300">
                  We encourage you to review this Cookie Policy periodically to stay informed of how we use cookies.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
              <p className="text-slate-300">
                If you have questions about our use of cookies or this Cookie Policy, please contact us:
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
