import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Simple Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#3B82F6] rounded-full mr-2"></span>
              🔒 Privacy Policy
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e7e7e7] mb-4">
              Privacy Policy
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
              
              {/* Introduction */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#e7e7e7] mb-4">Introduction</h2>
                <p className="text-[#e7e7e7]/80 leading-relaxed">
                  Zivara Solutions LLC is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#e7e7e7] mb-4">Information We Collect</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-[#e7e7e7] mb-1">Personal Information</h3>
                      <p className="text-[#e7e7e7]/70 text-sm">Name, email, phone number, company information, and project requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-[#e7e7e7] mb-1">Technical Information</h3>
                      <p className="text-[#e7e7e7]/70 text-sm">IP address, browser type, device information, and website usage analytics</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#e7e7e7] mb-4">How We Use Your Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-[#e7e7e7] mb-1">Service Delivery</h3>
                      <p className="text-[#e7e7e7]/70 text-sm">Provide and maintain our services, process requests, and deliver solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-[#e7e7e7] mb-1">Communication</h3>
                      <p className="text-[#e7e7e7]/70 text-sm">Send updates, respond to inquiries, and share relevant content</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Protection */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#e7e7e7] mb-4">Data Protection & Security</h2>
                <p className="text-[#e7e7e7]/80 leading-relaxed mb-4">
                  We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"></div>
                    <span className="text-[#e7e7e7]/70 text-sm">SSL encryption for data transmission</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"></div>
                    <span className="text-[#e7e7e7]/70 text-sm">Secure data storage and processing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"></div>
                    <span className="text-[#e7e7e7]/70 text-sm">Regular security audits and updates</span>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#e7e7e7] mb-4">Your Rights</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-[#1E293B]/50 rounded-xl">
                    <div className="w-8 h-8 bg-[#3B82F6] rounded-lg flex items-center justify-center mx-auto mb-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-[#e7e7e7] text-sm mb-1">Access</h3>
                    <p className="text-[#e7e7e7]/70 text-xs">Request access to your data</p>
                  </div>
                  <div className="text-center p-4 bg-[#1E293B]/50 rounded-xl">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-[#e7e7e7] text-sm mb-1">Correction</h3>
                    <p className="text-[#e7e7e7]/70 text-xs">Request data correction</p>
                  </div>
                  <div className="text-center p-4 bg-[#1E293B]/50 rounded-xl">
                    <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-[#e7e7e7] text-sm mb-1">Deletion</h3>
                    <p className="text-[#e7e7e7]/70 text-xs">Request data deletion</p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#e7e7e7] mb-4">Contact Us</h2>
                <p className="text-[#e7e7e7]/80 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
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

              {/* Changes to Policy */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#e7e7e7] mb-4">Changes to This Policy</h2>
                <p className="text-[#e7e7e7]/80 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
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
