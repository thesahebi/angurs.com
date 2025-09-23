import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Simple Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#3B82F6] rounded-full mr-2"></span>
              🍪 Cookie Policy
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e7e7e7] mb-4">
              Cookie Policy
            </h1>
            
            <p className="text-base sm:text-lg text-[#e7e7e7]/70 max-w-2xl mx-auto leading-relaxed">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#1A1A1A] rounded-2xl p-6 sm:p-8 md:p-10 border border-[#1E293B]">
              
              {/* What Are Cookies */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#e7e7e7] mb-4">What Are Cookies?</h2>
                <p className="text-[#e7e7e7]/80 leading-relaxed">
                  Cookies are small text files stored on your device when you visit our website. They help us provide a better browsing experience by remembering your preferences and analyzing site usage.
                </p>
              </div>

              {/* Types of Cookies */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#e7e7e7] mb-4">Types of Cookies We Use</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-[#e7e7e7] mb-1">Essential Cookies</h3>
                      <p className="text-[#e7e7e7]/70 text-sm">Necessary for website functionality - session management, security, and form submissions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-[#e7e7e7] mb-1">Analytics Cookies</h3>
                      <p className="text-[#e7e7e7]/70 text-sm">Help us understand website usage - page views, user behavior, and performance metrics</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-[#e7e7e7] mb-1">Preference Cookies</h3>
                      <p className="text-[#e7e7e7]/70 text-sm">Remember your settings - language, theme, location, and customized content</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-[#e7e7e7] mb-1">Marketing Cookies</h3>
                      <p className="text-[#e7e7e7]/70 text-sm">Used for advertising - ad targeting, campaign tracking, and retargeting</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookie Duration */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#e7e7e7] mb-4">Cookie Duration</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-[#1E293B]/50 rounded-xl">
                    <div className="w-8 h-8 bg-[#3B82F6] rounded-lg flex items-center justify-center mx-auto mb-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-[#e7e7e7] text-sm mb-1">Session</h3>
                    <p className="text-[#e7e7e7]/70 text-xs">Expire when browser closes</p>
                  </div>
                  <div className="text-center p-4 bg-[#1E293B]/50 rounded-xl">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-[#e7e7e7] text-sm mb-1">Persistent</h3>
                    <p className="text-[#e7e7e7]/70 text-xs">Remain for set period</p>
                  </div>
                  <div className="text-center p-4 bg-[#1E293B]/50 rounded-xl">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-[#e7e7e7] text-sm mb-1">Third-Party</h3>
                    <p className="text-[#e7e7e7]/70 text-xs">Set by external services</p>
                  </div>
                </div>
              </div>

              {/* Managing Cookies */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#e7e7e7] mb-4">Managing Your Cookie Preferences</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-[#e7e7e7] mb-1">Browser Settings</h3>
                      <p className="text-[#e7e7e7]/70 text-sm">Control cookies through your browser's privacy settings</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-[#e7e7e7] mb-1">Cookie Consent</h3>
                      <p className="text-[#e7e7e7]/70 text-sm">Accept all, reject non-essential, or customize your preferences</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact of Disabling Cookies */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#e7e7e7] mb-4">Impact of Disabling Cookies</h2>
                <p className="text-[#e7e7e7]/80 leading-relaxed mb-4">
                  Disabling certain cookies may affect your experience on our website. Some features may not work properly, and you may need to re-enter information.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"></div>
                    <span className="text-[#e7e7e7]/70 text-sm">Some features may not work properly</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"></div>
                    <span className="text-[#e7e7e7]/70 text-sm">You may need to re-enter information</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"></div>
                    <span className="text-[#e7e7e7]/70 text-sm">Personalized content may not be available</span>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#e7e7e7] mb-4">Contact Us</h2>
                <p className="text-[#e7e7e7]/80 leading-relaxed mb-4">
                  If you have any questions about how we use cookies or this Cookie Policy, please contact us:
                </p>
                <a
                  href="mailto:support@Zivara.io"
                  className="inline-flex items-center px-6 py-3 text-white border border-white/20 rounded-xl transition-colors hover:bg-[#2563eb]"
                  style={{ backgroundColor: '#1e40af' }}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  support@Zivara.io
                </a>
              </div>

              {/* Updates to Policy */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#e7e7e7] mb-4">Updates to This Policy</h2>
                <p className="text-[#e7e7e7]/80 leading-relaxed">
                  We may update this Cookie Policy from time to time. We will notify you of any material changes by posting the updated policy on our website.
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
