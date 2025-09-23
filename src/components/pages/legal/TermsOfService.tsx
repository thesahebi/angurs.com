import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Simple Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#3B82F6] rounded-full mr-2"></span>
              📋 Terms of Service
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e7e7e7] mb-4">
              Terms of Service
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
              
              {/* Agreement to Terms */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#e7e7e7] mb-4">Agreement to Terms</h2>
                <p className="text-[#e7e7e7]/80 leading-relaxed">
                  These Terms of Service govern your use of the Zivara Solutions LLC website and services. By accessing or using our services, you agree to be bound by these Terms.
                </p>
              </div>

              {/* Our Services */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#e7e7e7] mb-4">Our Services</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-[#e7e7e7] mb-1">Technology Solutions</h3>
                      <p className="text-[#e7e7e7]/70 text-sm">Cloud migration, virtualization, backup & recovery, network infrastructure, and IT automation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-[#e7e7e7] mb-1">Consulting Services</h3>
                      <p className="text-[#e7e7e7]/70 text-sm">Technology strategy, infrastructure assessment, security audits, and project management</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* User Responsibilities */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#e7e7e7] mb-4">User Responsibilities</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-[#e7e7e7] mb-1">Accurate Information</h3>
                      <p className="text-[#e7e7e7]/70 text-sm">Provide accurate and complete information when using our services</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-[#e7e7e7] mb-1">Security</h3>
                      <p className="text-[#e7e7e7]/70 text-sm">Maintain the security of any credentials or access information we provide</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-[#e7e7e7] mb-1">Compliance</h3>
                      <p className="text-[#e7e7e7]/70 text-sm">Comply with all applicable laws and regulations when using our services</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#e7e7e7] mb-4">Intellectual Property</h2>
                <p className="text-[#e7e7e7]/80 leading-relaxed mb-4">
                  All content, trademarks, and intellectual property on our website and in our services are owned by Zivara Solutions LLC or our licensors.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"></div>
                    <span className="text-[#e7e7e7]/70 text-sm">Website content and design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"></div>
                    <span className="text-[#e7e7e7]/70 text-sm">Software and technology solutions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"></div>
                    <span className="text-[#e7e7e7]/70 text-sm">Documentation and materials</span>
                  </div>
                </div>
              </div>

              {/* Payment Terms */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#e7e7e7] mb-4">Payment Terms</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#1E293B]/50 rounded-xl">
                    <h3 className="font-semibold text-[#e7e7e7] text-sm mb-2">Payment Schedule</h3>
                    <p className="text-[#e7e7e7]/70 text-xs">Payment terms specified in service agreements, typically due within 30 days</p>
                  </div>
                  <div className="p-4 bg-[#1E293B]/50 rounded-xl">
                    <h3 className="font-semibold text-[#e7e7e7] text-sm mb-2">Refund Policy</h3>
                    <p className="text-[#e7e7e7]/70 text-xs">Handled case-by-case, no refunds for completed services</p>
                  </div>
                </div>
              </div>

              {/* Termination */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#e7e7e7] mb-4">Termination</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-[#e7e7e7] mb-1">By You</h3>
                      <p className="text-[#e7e7e7]/70 text-sm">Terminate services with 30-day written notice</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-[#e7e7e7] mb-1">By Us</h3>
                      <p className="text-[#e7e7e7]/70 text-sm">Terminate for breach of terms or non-payment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Governing Law */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#e7e7e7] mb-4">Governing Law</h2>
                <p className="text-[#e7e7e7]/80 leading-relaxed">
                  These Terms are governed by the laws of Illinois, United States. Disputes shall be resolved in Cook County, Illinois courts.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#e7e7e7] mb-4">Contact Us</h2>
                <p className="text-[#e7e7e7]/80 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
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

              {/* Changes to Terms */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#e7e7e7] mb-4">Changes to Terms</h2>
                <p className="text-[#e7e7e7]/80 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of significant changes via email or website notice.
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
