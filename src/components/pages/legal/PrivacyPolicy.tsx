import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#0A0A0A] to-[#1A1A1A]"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-[#3b82f6]/20 to-[#8B5CF6]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-[#8B5CF6]/15 to-[#3b82f6]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-[#3b82f6]/10 to-[#8B5CF6]/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3b82f6]/40 rounded-full animate-ping delay-300"></div>
          <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#8B5CF6]/50 rounded-full animate-ping delay-700"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#3b82f6]/30 rounded-full animate-ping delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-6 sm:mb-8 md:mb-10 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3B82F6] rounded-full mr-2 animate-pulse"></span>
              🔒 Privacy Protection
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#e7e7e7] mb-3 sm:mb-4 leading-tight">
              Your Privacy
              <span className="relative block mt-1 sm:mt-2">
                <span className="bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                  Matters to Us
                </span>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#3b82f6] to-[#8B5CF6] rounded-full opacity-60"></div>
              </span>
            </h1>
            
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              We are committed to protecting your privacy and ensuring the security of your personal information. Learn how we collect, use, and safeguard your data.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#e7e7e7]/70 px-2 sm:px-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3b82f6] rounded-full animate-pulse"></div>
                <span>Always Secure</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#8B5CF6] rounded-full animate-pulse delay-300"></div>
                <span>Transparent</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3b82f6] rounded-full animate-pulse delay-700"></div>
                <span>Your Control</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Last Updated */}
            <div className="bg-[#1E293B] rounded-2xl p-6 mb-10 md:mb-16 border border-[#1E293B]">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#3B82F6] rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#e7e7e7]">Last Updated</h3>
                  <p className="text-[#e7e7e7]">December 2024</p>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div className="mb-10 md:mb-16">
              <h2 className="text-3xl font-bold text-[#e7e7e7] mb-6">Introduction</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-[#e7e7e7] leading-relaxed mb-4">
                  Zivara Solutions LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p className="text-[#e7e7e7] leading-relaxed">
                  By using our website or services, you agree to the collection and use of information in accordance with this policy.
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="mb-10 md:mb-16">
              <h2 className="text-3xl font-bold text-[#e7e7e7] mb-6">Information We Collect</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8 md:mb-12">
                <div className="bg-[#1E293B] rounded-2xl p-6 border border-[#1E293B]">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-[#e7e7e7]">Personal Information</h3>
                  </div>
                  <ul className="space-y-2 text-[#e7e7e7]">
                    <li>• Name and contact information</li>
                    <li>• Email address</li>
                    <li>• Phone number</li>
                    <li>• Company information</li>
                    <li>• Project requirements</li>
                  </ul>
                </div>

                <div className="bg-[#1E293B] rounded-2xl p-6 border border-[#1E293B]">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-[#3B82F6] rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-[#e7e7e7]">Technical Information</h3>
                  </div>
                  <ul className="space-y-2 text-[#e7e7e7]">
                    <li>• IP address and location</li>
                    <li>• Browser type and version</li>
                    <li>• Device information</li>
                    <li>• Website usage analytics</li>
                    <li>• Cookies and tracking data</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-10 md:mb-16">
              <h2 className="text-3xl font-bold text-[#e7e7e7] mb-6">How We Use Your Information</h2>
              <div className="bg-[#1E293B] rounded-2xl p-8 border border-[#1E293B]">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-[#e7e7e7] mb-4">Service Delivery</h3>
                    <ul className="space-y-2 text-[#e7e7e7]">
                      <li>• Provide and maintain our services</li>
                      <li>• Process your requests and inquiries</li>
                      <li>• Deliver project solutions</li>
                      <li>• Provide customer support</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#e7e7e7] mb-4">Communication</h3>
                    <ul className="space-y-2 text-[#e7e7e7]">
                      <li>• Send important updates</li>
                      <li>• Respond to your inquiries</li>
                      <li>• Share relevant content</li>
                      <li>• Newsletter subscriptions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Protection */}
            <div className="mb-10 md:mb-16">
              <h2 className="text-3xl font-bold text-[#e7e7e7] mb-6">Data Protection & Security</h2>
              <div className="bg-[#1E293B] rounded-2xl p-8 border border-[#1E293B]">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#e7e7e7] mb-3">Security Measures</h3>
                    <p className="text-[#e7e7e7] leading-relaxed mb-4">
                      We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                    <ul className="space-y-2 text-[#e7e7e7]">
                      <li>• SSL encryption for data transmission</li>
                      <li>• Secure data storage and processing</li>
                      <li>• Regular security audits and updates</li>
                      <li>• Limited access to personal information</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-10 md:mb-16">
              <h2 className="text-3xl font-bold text-[#e7e7e7] mb-6">Your Rights</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[#1E293B] rounded-2xl p-6 border border-[#1E293B] shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#3B82F6] rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#e7e7e7] mb-2">Access</h3>
                  <p className="text-[#e7e7e7] text-sm">Request access to your personal data</p>
                </div>

                <div className="bg-[#1E293B] rounded-2xl p-6 border border-[#1E293B] shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#e7e7e7] mb-2">Correction</h3>
                  <p className="text-[#e7e7e7] text-sm">Request correction of inaccurate data</p>
                </div>

                <div className="bg-[#1E293B] rounded-2xl p-6 border border-[#1E293B] shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#e7e7e7] mb-2">Deletion</h3>
                  <p className="text-[#e7e7e7] text-sm">Request deletion of your data</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-10 md:mb-16">
              <h2 className="text-3xl font-bold text-[#e7e7e7] mb-6">Contact Us</h2>
              <div className="bg-[#1E293B] rounded-2xl p-8 border border-[#1E293B]">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-[#e7e7e7] mb-4">Questions About This Privacy Policy?</h3>
                  <p className="text-[#e7e7e7] mb-6">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:support@Zivara.io"
                      className="inline-flex items-center justify-center px-6 py-3 text-white border border-white/20 rounded-xl transition-colors hover:bg-[#2563eb]"
                      style={{ backgroundColor: '#1e40af' }}
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      support@Zivara.io
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 bg-[#1E293B] text-[#e7e7e7] border-2 border-[#3B82F6] rounded-xl hover:bg-[#2563EB] transition-colors"
                    >
                      Contact Form
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="mb-10 md:mb-16">
              <h2 className="text-3xl font-bold text-[#e7e7e7] mb-6">Changes to This Privacy Policy</h2>
              <div className="bg-[#1E293B] rounded-2xl p-6 border border-[#1E293B]">
                <p className="text-[#e7e7e7] leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
