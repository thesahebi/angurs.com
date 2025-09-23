import React from 'react';

const TermsOfService: React.FC = () => {
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
              📋 Terms & Conditions
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#e7e7e7] mb-3 sm:mb-4 leading-tight">
              Our Terms and
              <span className="relative block mt-1 sm:mt-2">
                <span className="bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                  Conditions
                </span>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#3b82f6] to-[#8B5CF6] rounded-full opacity-60"></div>
              </span>
            </h1>
            
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              Please read these terms and conditions carefully before using our website and services. By accessing our services, you agree to be bound by these terms.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#e7e7e7]/70 px-2 sm:px-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3b82f6] rounded-full animate-pulse"></div>
                <span>Fair & Clear</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#8B5CF6] rounded-full animate-pulse delay-300"></div>
                <span>Transparent</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3b82f6] rounded-full animate-pulse delay-700"></div>
                <span>Protective</span>
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
              <h2 className="text-3xl font-bold text-[#e7e7e7] mb-6">Agreement to Terms</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-[#e7e7e7] leading-relaxed mb-4">
                  These Terms of Service ("Terms") govern your use of the Zivara Solutions LLC website and services. By accessing or using our services, you agree to be bound by these Terms.
                </p>
                <p className="text-[#e7e7e7] leading-relaxed">
                  If you do not agree to these Terms, please do not use our website or services.
                </p>
              </div>
            </div>

            {/* Services Description */}
            <div className="mb-10 md:mb-16">
              <h2 className="text-3xl font-bold text-[#e7e7e7] mb-6">Our Services</h2>
              <div className="bg-[#1E293B] rounded-2xl p-8 border border-[#1E293B]">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-[#e7e7e7] mb-4">Technology Solutions</h3>
                    <ul className="space-y-2 text-[#e7e7e7]">
                      <li>• Cloud migration and management</li>
                      <li>• Virtualization services</li>
                      <li>• Backup and recovery solutions</li>
                      <li>• Network infrastructure design</li>
                      <li>• IT automation and DevOps</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#e7e7e7] mb-4">Consulting Services</h3>
                    <ul className="space-y-2 text-[#e7e7e7]">
                      <li>• Technology strategy consulting</li>
                      <li>• Infrastructure assessment</li>
                      <li>• Security audits and compliance</li>
                      <li>• Project management</li>
                      <li>• Training and support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="mb-10 md:mb-16">
              <h2 className="text-3xl font-bold text-[#e7e7e7] mb-6">User Responsibilities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#0A0A0A] rounded-2xl p-6 border border-[#1E293B] shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-[#3B82F6] rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-[#e7e7e7]">Accurate Information</h3>
                  </div>
                  <p className="text-[#e7e7e7] text-sm">
                    Provide accurate and complete information when using our services or contacting us.
                  </p>
                </div>

                <div className="bg-[#0A0A0A] rounded-2xl p-6 border border-[#1E293B] shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-[#e7e7e7]">Security</h3>
                  </div>
                  <p className="text-[#e7e7e7] text-sm">
                    Maintain the security of any credentials or access information we provide.
                  </p>
                </div>

                <div className="bg-[#0A0A0A] rounded-2xl p-6 border border-[#1E293B] shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-[#e7e7e7]">Compliance</h3>
                  </div>
                  <p className="text-[#e7e7e7] text-sm">
                    Comply with all applicable laws and regulations when using our services.
                  </p>
                </div>

                <div className="bg-[#0A0A0A] rounded-2xl p-6 border border-[#1E293B] shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-[#e7e7e7]">Prohibited Uses</h3>
                  </div>
                  <p className="text-[#e7e7e7] text-sm">
                    Do not use our services for illegal, harmful, or unauthorized purposes.
                  </p>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-10 md:mb-16">
              <h2 className="text-3xl font-bold text-[#e7e7e7] mb-6">Intellectual Property</h2>
              <div className="bg-[#1E293B] rounded-2xl p-8 border border-[#1E293B]">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#e7e7e7] mb-3">Ownership Rights</h3>
                    <p className="text-[#e7e7e7] leading-relaxed mb-4">
                      All content, trademarks, and intellectual property on our website and in our services are owned by Zivara Solutions LLC or our licensors.
                    </p>
                    <ul className="space-y-2 text-[#e7e7e7]">
                      <li>• Website content and design</li>
                      <li>• Software and technology solutions</li>
                      <li>• Documentation and materials</li>
                      <li>• Brand names and logos</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-10 md:mb-16">
              <h2 className="text-3xl font-bold text-[#e7e7e7] mb-6">Limitation of Liability</h2>
              <div className="bg-[#1E293B] rounded-2xl p-8 border border-[#1E293B]">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#e7e7e7] mb-3">Disclaimer</h3>
                    <p className="text-[#e7e7e7] leading-relaxed mb-4">
                      Our services are provided "as is" without warranties of any kind. We shall not be liable for any indirect, incidental, special, or consequential damages.
                    </p>
                    <p className="text-[#e7e7e7] leading-relaxed">
                      Our total liability shall not exceed the amount paid for our services in the 12 months preceding the claim.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="mb-10 md:mb-16">
              <h2 className="text-3xl font-bold text-[#e7e7e7] mb-6">Payment Terms</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#0A0A0A] rounded-2xl p-6 border border-[#1E293B] shadow-sm">
                  <h3 className="text-lg font-semibold text-[#e7e7e7] mb-4">Payment Schedule</h3>
                  <ul className="space-y-2 text-[#e7e7e7]">
                    <li>• Payment terms will be specified in individual service agreements</li>
                    <li>• Invoices are typically due within 30 days</li>
                    <li>• Late payments may incur additional fees</li>
                    <li>• Services may be suspended for overdue accounts</li>
                  </ul>
                </div>
                <div className="bg-[#0A0A0A] rounded-2xl p-6 border border-[#1E293B] shadow-sm">
                  <h3 className="text-lg font-semibold text-[#e7e7e7] mb-4">Refund Policy</h3>
                  <ul className="space-y-2 text-[#e7e7e7]">
                    <li>• Refunds are handled on a case-by-case basis</li>
                    <li>• No refunds for completed services</li>
                    <li>• Partial refunds may be available for cancelled projects</li>
                    <li>• Refund requests must be submitted in writing</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-10 md:mb-16">
              <h2 className="text-3xl font-bold text-[#e7e7e7] mb-6">Termination</h2>
              <div className="bg-[#1E293B] rounded-2xl p-8 border border-[#1E293B]">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-[#e7e7e7] mb-4">By You</h3>
                    <p className="text-[#e7e7e7] leading-relaxed mb-4">
                      You may terminate your use of our services at any time by providing written notice.
                    </p>
                    <ul className="space-y-2 text-[#e7e7e7]">
                      <li>• 30-day notice period for ongoing services</li>
                      <li>• Outstanding payments remain due</li>
                      <li>• Data return procedures apply</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#e7e7e7] mb-4">By Us</h3>
                    <p className="text-[#e7e7e7] leading-relaxed mb-4">
                      We may terminate services for breach of these terms or non-payment.
                    </p>
                    <ul className="space-y-2 text-[#e7e7e7]">
                      <li>• Immediate termination for serious breaches</li>
                      <li>• 30-day notice for payment issues</li>
                      <li>• Data backup and transfer assistance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-10 md:mb-16">
              <h2 className="text-3xl font-bold text-[#e7e7e7] mb-6">Governing Law</h2>
              <div className="bg-[#1E293B] rounded-2xl p-6 border border-[#1E293B]">
                <p className="text-[#e7e7e7] leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Illinois, United States. Any disputes arising from these Terms or our services shall be resolved in the courts of Cook County, Illinois.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-10 md:mb-16">
              <h2 className="text-3xl font-bold text-[#e7e7e7] mb-6">Contact Information</h2>
              <div className="bg-[#1E293B] rounded-2xl p-8 border border-[#1E293B]">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-[#e7e7e7] mb-4">Questions About These Terms?</h3>
                  <p className="text-[#e7e7e7] mb-6">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:support@Zivara.io"
                      className="inline-flex items-center justify-center px-6 py-3 text-white border border-white/20 rounded-xl transition-colors hover:bg-[#2563eb]"
                      style={{ backgroundColor: '#3B82F6' }}
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      support@Zivara.io
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 bg-[#0A0A0A] text-[#e7e7e7] border-2 border-[#3B82F6] rounded-xl hover:bg-[#2563EB] transition-colors"
                    >
                      Contact Form
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="mb-10 md:mb-16">
              <h2 className="text-3xl font-bold text-[#e7e7e7] mb-6">Changes to Terms</h2>
              <div className="bg-[#1E293B] rounded-2xl p-6 border border-[#1E293B]">
                <p className="text-[#e7e7e7] leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of significant changes via email or website notice. Continued use of our services after changes constitutes acceptance of the new Terms.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
