import React from 'react';
import PageHero from '../../reusable/PageHero';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <PageHero
        title="Terms of Service"
        subtitle="Our terms and conditions"
        description="Please read these terms and conditions carefully before using our website and services. By accessing our services, you agree to be bound by these terms."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Privacy Policy"
        secondaryButtonLink="/privacy"
        accentColor="#3B82F6"
        backgroundPattern="grid"
        showGraph={true}
        graphType="bar"
        isHomepage={false}
      />

      {/* Main Content */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Last Updated */}
            <div className="bg-[#1E293B] rounded-2xl p-6 mb-12 border border-[#1E293B]">
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
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#F1F5F9] mb-6">Agreement to Terms</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-[#E2E8F0] leading-relaxed mb-4">
                  These Terms of Service ("Terms") govern your use of the Angurs Solutions LLC website and services. By accessing or using our services, you agree to be bound by these Terms.
                </p>
                <p className="text-[#E2E8F0] leading-relaxed">
                  If you do not agree to these Terms, please do not use our website or services.
                </p>
              </div>
            </div>

            {/* Services Description */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#F1F5F9] mb-6">Our Services</h2>
              <div className="bg-[#1E293B] rounded-2xl p-8 border border-[#1E293B]">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-[#F1F5F9] mb-4">Technology Solutions</h3>
                    <ul className="space-y-2 text-[#E2E8F0]">
                      <li>• Cloud migration and management</li>
                      <li>• Virtualization services</li>
                      <li>• Backup and recovery solutions</li>
                      <li>• Network infrastructure design</li>
                      <li>• IT automation and DevOps</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#F1F5F9] mb-4">Consulting Services</h3>
                    <ul className="space-y-2 text-[#E2E8F0]">
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
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#F1F5F9] mb-6">User Responsibilities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#121212] rounded-2xl p-6 border border-[#1E293B] shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-[#3B82F6] rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-[#F1F5F9]">Accurate Information</h3>
                  </div>
                  <p className="text-[#E2E8F0] text-sm">
                    Provide accurate and complete information when using our services or contacting us.
                  </p>
                </div>

                <div className="bg-[#121212] rounded-2xl p-6 border border-[#1E293B] shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-[#F1F5F9]">Security</h3>
                  </div>
                  <p className="text-[#E2E8F0] text-sm">
                    Maintain the security of any credentials or access information we provide.
                  </p>
                </div>

                <div className="bg-[#121212] rounded-2xl p-6 border border-[#1E293B] shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-[#F1F5F9]">Compliance</h3>
                  </div>
                  <p className="text-[#E2E8F0] text-sm">
                    Comply with all applicable laws and regulations when using our services.
                  </p>
                </div>

                <div className="bg-[#121212] rounded-2xl p-6 border border-[#1E293B] shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-[#F1F5F9]">Prohibited Uses</h3>
                  </div>
                  <p className="text-[#E2E8F0] text-sm">
                    Do not use our services for illegal, harmful, or unauthorized purposes.
                  </p>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#F1F5F9] mb-6">Intellectual Property</h2>
              <div className="bg-[#1E293B] rounded-2xl p-8 border border-[#1E293B]">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#F1F5F9] mb-3">Ownership Rights</h3>
                    <p className="text-[#E2E8F0] leading-relaxed mb-4">
                      All content, trademarks, and intellectual property on our website and in our services are owned by Angurs Solutions LLC or our licensors.
                    </p>
                    <ul className="space-y-2 text-[#E2E8F0]">
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
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#F1F5F9] mb-6">Limitation of Liability</h2>
              <div className="bg-[#1E293B] rounded-2xl p-8 border border-[#1E293B]">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#F1F5F9] mb-3">Disclaimer</h3>
                    <p className="text-[#E2E8F0] leading-relaxed mb-4">
                      Our services are provided "as is" without warranties of any kind. We shall not be liable for any indirect, incidental, special, or consequential damages.
                    </p>
                    <p className="text-[#E2E8F0] leading-relaxed">
                      Our total liability shall not exceed the amount paid for our services in the 12 months preceding the claim.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#F1F5F9] mb-6">Payment Terms</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#121212] rounded-2xl p-6 border border-[#1E293B] shadow-sm">
                  <h3 className="text-lg font-semibold text-[#F1F5F9] mb-4">Payment Schedule</h3>
                  <ul className="space-y-2 text-[#E2E8F0]">
                    <li>• Payment terms will be specified in individual service agreements</li>
                    <li>• Invoices are typically due within 30 days</li>
                    <li>• Late payments may incur additional fees</li>
                    <li>• Services may be suspended for overdue accounts</li>
                  </ul>
                </div>
                <div className="bg-[#121212] rounded-2xl p-6 border border-[#1E293B] shadow-sm">
                  <h3 className="text-lg font-semibold text-[#F1F5F9] mb-4">Refund Policy</h3>
                  <ul className="space-y-2 text-[#E2E8F0]">
                    <li>• Refunds are handled on a case-by-case basis</li>
                    <li>• No refunds for completed services</li>
                    <li>• Partial refunds may be available for cancelled projects</li>
                    <li>• Refund requests must be submitted in writing</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#F1F5F9] mb-6">Termination</h2>
              <div className="bg-[#1E293B] rounded-2xl p-8 border border-[#1E293B]">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-[#F1F5F9] mb-4">By You</h3>
                    <p className="text-[#E2E8F0] leading-relaxed mb-4">
                      You may terminate your use of our services at any time by providing written notice.
                    </p>
                    <ul className="space-y-2 text-[#E2E8F0]">
                      <li>• 30-day notice period for ongoing services</li>
                      <li>• Outstanding payments remain due</li>
                      <li>• Data return procedures apply</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#F1F5F9] mb-4">By Us</h3>
                    <p className="text-[#E2E8F0] leading-relaxed mb-4">
                      We may terminate services for breach of these terms or non-payment.
                    </p>
                    <ul className="space-y-2 text-[#E2E8F0]">
                      <li>• Immediate termination for serious breaches</li>
                      <li>• 30-day notice for payment issues</li>
                      <li>• Data backup and transfer assistance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#F1F5F9] mb-6">Governing Law</h2>
              <div className="bg-[#1E293B] rounded-2xl p-6 border border-[#1E293B]">
                <p className="text-[#E2E8F0] leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Illinois, United States. Any disputes arising from these Terms or our services shall be resolved in the courts of Cook County, Illinois.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#F1F5F9] mb-6">Contact Information</h2>
              <div className="bg-[#1E293B] rounded-2xl p-8 border border-[#1E293B]">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-[#F1F5F9] mb-4">Questions About These Terms?</h3>
                  <p className="text-[#E2E8F0] mb-6">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:support@angurs.com"
                      className="inline-flex items-center justify-center px-6 py-3 bg-[#3B82F6] text-white rounded-xl hover:bg-[#2563EB] transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      support@angurs.com
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

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#F1F5F9] mb-6">Changes to Terms</h2>
              <div className="bg-[#1E293B] rounded-2xl p-6 border border-[#1E293B]">
                <p className="text-[#E2E8F0] leading-relaxed">
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
