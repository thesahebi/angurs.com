import React from 'react';
import PageHero from '../../reusable/PageHero';

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <PageHero
        title="Cookie Policy"
        subtitle="How we use cookies"
        description="Learn about how we use cookies and similar technologies to enhance your browsing experience and provide personalized content."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Privacy Policy"
        secondaryButtonLink="/privacy"
        accentColor="#3B82F6"
        backgroundPattern="waves"
        showGraph={true}
        graphType="line"
        isHomepage={false}
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-[#121212]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Last Updated */}
            <div className="bg-[#1E293B] rounded-2xl p-6 mb-10 md:mb-16 border border-[#1E293B]">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#3B82F6] rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#F1F5F9]">Last Updated</h3>
                  <p className="text-[#E2E8F0]">December 2024</p>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div className="mb-10 md:mb-16">
              <h2 className="text-3xl font-bold text-[#F1F5F9] mb-6">What Are Cookies?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-[#E2E8F0] leading-relaxed mb-4">
                  Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and analyzing how you use our site.
                </p>
                <p className="text-[#E2E8F0] leading-relaxed">
                  This Cookie Policy explains how Zivara Solutions LLC uses cookies and similar technologies on our website.
                </p>
              </div>
            </div>

            {/* Types of Cookies */}
            <div className="mb-10 md:mb-16">
              <h2 className="text-3xl font-bold text-[#F1F5F9] mb-6">Types of Cookies We Use</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8 md:mb-12">
                <div className="bg-[#1E293B] rounded-2xl p-6 border border-[#1E293B]">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-[#F1F5F9]">Essential Cookies</h3>
                  </div>
                  <p className="text-[#E2E8F0] mb-3">These cookies are necessary for the website to function properly.</p>
                  <ul className="space-y-1 text-sm text-[#E2E8F0]">
                    <li>• Session management</li>
                    <li>• Security features</li>
                    <li>• Form submissions</li>
                    <li>• User authentication</li>
                  </ul>
                </div>

                <div className="bg-[#1E293B] rounded-2xl p-6 border border-[#1E293B]">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-[#3B82F6] rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-[#F1F5F9]">Analytics Cookies</h3>
                  </div>
                  <p className="text-[#E2E8F0] mb-3">These cookies help us understand how visitors use our website.</p>
                  <ul className="space-y-1 text-sm text-[#E2E8F0]">
                    <li>• Page views and traffic</li>
                    <li>• User behavior patterns</li>
                    <li>• Performance metrics</li>
                    <li>• Popular content</li>
                  </ul>
                </div>

                <div className="bg-[#1E293B] rounded-2xl p-6 border border-[#1E293B]">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-[#F1F5F9]">Preference Cookies</h3>
                  </div>
                  <p className="text-[#E2E8F0] mb-3">These cookies remember your preferences and settings.</p>
                  <ul className="space-y-1 text-sm text-[#E2E8F0]">
                    <li>• Language preferences</li>
                    <li>• Theme settings</li>
                    <li>• Location settings</li>
                    <li>• Customized content</li>
                  </ul>
                </div>

                <div className="bg-[#1E293B] rounded-2xl p-6 border border-[#1E293B]">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-[#F1F5F9]">Marketing Cookies</h3>
                  </div>
                  <p className="text-[#E2E8F0] mb-3">These cookies are used to deliver relevant advertisements.</p>
                  <ul className="space-y-1 text-sm text-[#E2E8F0]">
                    <li>• Ad targeting</li>
                    <li>• Campaign tracking</li>
                    <li>• Conversion measurement</li>
                    <li>• Retargeting</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cookie Duration */}
            <div className="mb-10 md:mb-16">
              <h2 className="text-3xl font-bold text-[#F1F5F9] mb-6">Cookie Duration</h2>
              <div className="bg-[#1E293B] rounded-2xl p-8 border border-[#1E293B]">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#3B82F6] rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-[#F1F5F9] mb-2">Session Cookies</h3>
                    <p className="text-[#E2E8F0] text-sm">Temporary cookies that expire when you close your browser</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-[#F1F5F9] mb-2">Persistent Cookies</h3>
                    <p className="text-[#E2E8F0] text-sm">Cookies that remain on your device for a set period</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-[#F1F5F9] mb-2">Third-Party Cookies</h3>
                    <p className="text-[#E2E8F0] text-sm">Cookies set by external services we use</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Third-Party Services */}
            <div className="mb-10 md:mb-16">
              <h2 className="text-3xl font-bold text-[#F1F5F9] mb-6">Third-Party Services</h2>
              <div className="bg-[#1E293B] rounded-2xl p-8 border border-[#1E293B]">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-[#F1F5F9] mb-4">Analytics Services</h3>
                    <ul className="space-y-2 text-[#E2E8F0]">
                      <li>• Google Analytics - Website traffic analysis</li>
                      <li>• Google Tag Manager - Tag management</li>
                      <li>• Hotjar - User behavior analysis</li>
                      <li>• Microsoft Clarity - User session recordings</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#F1F5F9] mb-4">Marketing Services</h3>
                    <ul className="space-y-2 text-[#E2E8F0]">
                      <li>• Google Ads - Advertising campaigns</li>
                      <li>• Facebook Pixel - Social media advertising</li>
                      <li>• LinkedIn Insight Tag - Professional networking</li>
                      <li>• HubSpot - Marketing automation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Managing Cookies */}
            <div className="mb-10 md:mb-16">
              <h2 className="text-3xl font-bold text-[#F1F5F9] mb-6">Managing Your Cookie Preferences</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#121212] rounded-2xl p-6 border border-[#1E293B] shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-[#3B82F6] rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-[#F1F5F9]">Browser Settings</h3>
                  </div>
                  <p className="text-[#E2E8F0] text-sm mb-3">
                    You can control cookies through your browser settings:
                  </p>
                    <ul className="space-y-1 text-sm text-[#E2E8F0]">
                      <li>• Chrome: Settings → Privacy and Security → Cookies</li>
                      <li>• Firefox: Options → Privacy & Security → Cookies</li>
                      <li>• Safari: Preferences → Privacy → Cookies</li>
                      <li>• Edge: Settings → Cookies and Site Permissions</li>
                    </ul>
                </div>

                <div className="bg-[#121212] rounded-2xl p-6 border border-[#1E293B] shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-[#F1F5F9]">Cookie Consent</h3>
                  </div>
                  <p className="text-[#E2E8F0] text-sm mb-3">
                    We provide cookie consent options:
                  </p>
                  <ul className="space-y-1 text-sm text-[#E2E8F0]">
                    <li>• Accept all cookies</li>
                    <li>• Reject non-essential cookies</li>
                    <li>• Customize cookie preferences</li>
                    <li>• Change preferences anytime</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Impact of Disabling Cookies */}
            <div className="mb-10 md:mb-16">
              <h2 className="text-3xl font-bold text-[#F1F5F9] mb-6">Impact of Disabling Cookies</h2>
              <div className="bg-[#1E293B] rounded-2xl p-8 border border-[#1E293B]">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#F1F5F9] mb-3">Important Notice</h3>
                    <p className="text-[#E2E8F0] leading-relaxed mb-4">
                      Disabling certain cookies may affect your experience on our website:
                    </p>
                    <ul className="space-y-2 text-[#E2E8F0]">
                      <li>• Some features may not work properly</li>
                      <li>• You may need to re-enter information</li>
                      <li>• Personalized content may not be available</li>
                      <li>• Website performance may be affected</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-10 md:mb-16">
              <h2 className="text-3xl font-bold text-[#F1F5F9] mb-6">Contact Us</h2>
              <div className="bg-[#1E293B] rounded-2xl p-8 border border-[#1E293B]">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-[#F1F5F9] mb-4">Questions About Our Cookie Policy?</h3>
                  <p className="text-[#E2E8F0] mb-6">
                    If you have any questions about how we use cookies or this Cookie Policy, please contact us:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:support@Zivara.com"
                      className="inline-flex items-center justify-center px-6 py-3 text-white border border-white/20 rounded-xl transition-colors hover:bg-[#e95420]"
                      style={{ backgroundColor: '#ff6b35' }}
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      support@Zivara.com
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 bg-[#121212] text-[#F1F5F9] border-2 border-[#3B82F6] rounded-xl hover:bg-[#2563EB] transition-colors"
                    >
                      Contact Form
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Updates to Policy */}
            <div className="mb-10 md:mb-16">
              <h2 className="text-3xl font-bold text-[#F1F5F9] mb-6">Updates to This Policy</h2>
              <div className="bg-[#1E293B] rounded-2xl p-6 border border-[#1E293B]">
                <p className="text-[#E2E8F0] leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
