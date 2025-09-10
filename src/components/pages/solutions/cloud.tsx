import React from "react";
import PageHero from "../../reusable/PageHero";

const Cloud: React.FC = () => {
  return (
    <div>
      <PageHero
        title="Cloud Migration Made Simple"
        subtitle="Transform your infrastructure"
        description="Move your business to the cloud with confidence. At Angurs, we help you modernize applications, migrate workloads, and transform operations — with minimal downtime and maximum security."
        primaryButtonText="Start Your Migration"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="#services"
        accentColor="#e95420"
        backgroundPattern="waves"
        showGraph={true}
        graphType="cloud"
      />

      {/* Why Cloud Migration Matters */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
            <defs>
              <pattern id="cloud-dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="#1f2937"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#cloud-dots)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex px-4 py-2 text-sm font-medium text-[#e95420] bg-[#e95420]/10 rounded-full mb-6">
              ☁️ Cloud Solutions
            </div>
            <h2 className="text-4xl font-bold text-[#1f2937] sm:text-5xl xl:text-6xl mb-6">
              Why Cloud Migration{' '}
              <span className="bg-gradient-to-r from-[#e95420] to-[#d1451a] bg-clip-text text-transparent">
                Matters
              </span>
            </h2>
            <p className="text-xl text-[#6b7280] max-w-3xl mx-auto leading-relaxed">
              The cloud is no longer optional — it's essential. Businesses today need agility, security, and global reach. 
              By moving to the cloud, you unlock unlimited potential.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#e95420] to-[#d1451a] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1f2937] mb-3">Scalability</h3>
              <p className="text-[#6b7280]">Resources that grow as your business grows.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1f2937] mb-3">Resilience</h3>
              <p className="text-[#6b7280]">Built-in redundancy for continuous availability.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1f2937] mb-3">Security</h3>
              <p className="text-[#6b7280]">Enterprise-grade protection for your data and systems.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1f2937] mb-3">Efficiency</h3>
              <p className="text-[#6b7280]">Reduced costs and optimized operations.</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-xl text-[#6b7280] max-w-3xl mx-auto leading-relaxed">
              We make this transformation seamless — from planning and execution to ongoing optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Our Cloud Migration Services */}
      <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
            <defs>
              <pattern id="cloud-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1f2937" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#cloud-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex px-4 py-2 text-sm font-medium text-[#e95420] bg-[#e95420]/10 rounded-full mb-6">
              🚀 Our Services
            </div>
            <h2 className="text-4xl font-bold text-[#1f2937] sm:text-5xl xl:text-6xl mb-6">
              Cloud Migration{' '}
              <span className="bg-gradient-to-r from-[#e95420] to-[#d1451a] bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-[#6b7280] max-w-3xl mx-auto leading-relaxed">
              Choose from our comprehensive suite of cloud migration services designed to meet your specific business needs.
            </p>
          </div>
          
          <div className="space-y-16">
            {/* AWS Cloud Migration */}
            <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ff9900] to-[#ff6600] rounded-2xl flex items-center justify-center mr-6">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#1f2937] mb-2">AWS Cloud Migration</h3>
                  <p className="text-lg text-[#6b7280]">Unlock the power of Amazon Web Services with our expert guidance.</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <h4 className="text-lg font-semibold text-[#1f2937] mb-3">Amazon EC2</h4>
                  <p className="text-[#6b7280]">Flexible, scalable compute power for any workload.</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <h4 className="text-lg font-semibold text-[#1f2937] mb-3">Amazon RDS</h4>
                  <p className="text-[#6b7280]">Fully managed relational databases with automatic backup.</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <h4 className="text-lg font-semibold text-[#1f2937] mb-3">Amazon S3</h4>
                  <p className="text-[#6b7280]">Secure, durable object storage built for scale.</p>
                </div>
              </div>
              
              <p className="text-lg text-[#6b7280] leading-relaxed">
                Our AWS-certified experts help you design, migrate, and manage AWS environments with confidence and minimal downtime.
              </p>
            </div>

            {/* Azure Cloud Migration */}
            <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0078d4] to-[#106ebe] rounded-2xl flex items-center justify-center mr-6">
                  <span className="text-2xl">💡</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#1f2937] mb-2">Azure Cloud Migration</h3>
                  <p className="text-lg text-[#6b7280]">Empower your enterprise with Microsoft Azure's comprehensive cloud platform.</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <h4 className="text-lg font-semibold text-[#1f2937] mb-3">Azure VM</h4>
                  <p className="text-[#6b7280]">On-demand computing resources with enterprise-grade performance.</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <h4 className="text-lg font-semibold text-[#1f2937] mb-3">Azure SQL</h4>
                  <p className="text-[#6b7280]">Cloud-based database services for mission-critical workloads.</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <h4 className="text-lg font-semibold text-[#1f2937] mb-3">Azure Blob Storage</h4>
                  <p className="text-[#6b7280]">Unstructured storage built for scale and accessibility.</p>
                </div>
              </div>
              
              <p className="text-lg text-[#6b7280] leading-relaxed">
                We help you modernize applications and migrate seamlessly into Azure's ecosystem with our expert guidance.
              </p>
            </div>

            {/* Microsoft 365 Migration */}
            <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-2xl flex items-center justify-center mr-6">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#1f2937] mb-2">Microsoft 365 Migration</h3>
                  <p className="text-lg text-[#6b7280]">Transform collaboration and productivity with Microsoft's comprehensive suite.</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <h4 className="text-lg font-semibold text-[#1f2937] mb-3">Email Migration</h4>
                  <p className="text-[#6b7280]">Seamless migration to Exchange Online with zero downtime.</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <h4 className="text-lg font-semibold text-[#1f2937] mb-3">File Migration</h4>
                  <p className="text-[#6b7280]">Secure migration to OneDrive & SharePoint with full metadata preservation.</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <h4 className="text-lg font-semibold text-[#1f2937] mb-3">Teams Setup</h4>
                  <p className="text-[#6b7280]">Modern collaboration platform with advanced security features.</p>
                </div>
              </div>
              
              <p className="text-lg text-[#6b7280] leading-relaxed">
                Whether you're migrating from legacy systems or another cloud provider, we ensure a smooth transition with zero data loss and maximum productivity.
              </p>
            </div>

            {/* Microsoft Entra ID */}
            <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] rounded-2xl flex items-center justify-center mr-6">
                  <span className="text-2xl">🔐</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#1f2937] mb-2">Microsoft Entra ID (Azure AD)</h3>
                  <p className="text-lg text-[#6b7280]">Reimagine identity and access management with enterprise-grade security.</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <h4 className="text-lg font-semibold text-[#1f2937] mb-3">Single Sign-On</h4>
                  <p className="text-[#6b7280]">Seamless SSO across all applications and services.</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <h4 className="text-lg font-semibold text-[#1f2937] mb-3">Multi-Factor Auth</h4>
                  <p className="text-[#6b7280]">Enhanced security with advanced MFA capabilities.</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <h4 className="text-lg font-semibold text-[#1f2937] mb-3">Role-Based Access</h4>
                  <p className="text-[#6b7280]">Granular access control with comprehensive RBAC policies.</p>
                </div>
              </div>
              
              <p className="text-lg text-[#6b7280] leading-relaxed">
                We secure your organization with Entra ID while enabling seamless user experiences and maintaining the highest security standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#1f2937] to-[#374151] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
            <defs>
              <pattern id="cloud-waves" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 20 Q10 0 20 20 T40 20" stroke="white" strokeWidth="0.5" fill="none"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#cloud-waves)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let our cloud experts help you migrate to the cloud with confidence. Get started with a free consultation and discover how cloud migration can transform your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch w-full max-w-md mx-auto sm:max-w-none">
              <div className="relative inline-flex group w-full sm:w-auto">
                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#e95420] via-[#d1451a] to-[#e95420] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                <a
                  href="tel:+16309234653"
                  className="relative inline-flex items-center justify-center w-full px-8 py-4 text-lg font-semibold text-white bg-[#e95420] hover:bg-[#d1451a] rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get a Demo Consultant Call
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center justify-center w-full px-8 py-4 text-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-[#1f2937] rounded-xl transition-all duration-200"
              >
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Cloud;


