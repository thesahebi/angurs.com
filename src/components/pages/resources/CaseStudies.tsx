import React from "react";
import PageHero from "../../reusable/PageHero";

const CaseStudies: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface-dark">
      <PageHero
        title="Success Stories"
        subtitle="Discover our proven results"
        description="Discover how we've helped organizations transform their technology infrastructure, improve efficiency, and achieve their digital transformation goals."
        primaryButtonText="View Case Studies"
        primaryButtonLink="#case-studies"
        secondaryButtonText="Start Your Project"
        secondaryButtonLink="/contact"
        accentColor="var(--color-accent)"
        backgroundPattern="dots"
        showGraph={true}
        graphType="pie"
        isHomepage={false}
      />

      {/* Case Studies Grid */}
      <section id="case-studies" className="py-16 md:py-24 bg-[#121212]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1f2937] mb-4">Featured Case Studies</h2>
            <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
              Real-world examples of how we've delivered exceptional results for our clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Case Study 1 */}
            <div className="group bg-[#121212] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#1E293B] overflow-hidden hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                <div className="text-center text-white relative z-10">
                  <div className="w-20 h-20 bg-[#121212] bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Financial Services</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">Cloud Migration</span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium border border-green-200">Security</span>
                </div>
                <h3 className="text-xl font-bold text-[#1f2937] mb-3 group-hover:text-blue-600 transition-colors">
                  Multi-Cloud Migration for Regional Bank
                </h3>
                <p className="text-[#6b7280] mb-4 text-sm leading-relaxed">
                  Successfully migrated a regional bank's entire infrastructure to a multi-cloud environment, 
                  improving scalability and enhancing security compliance.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-3 bg-[#121212] rounded-xl">
                    <div className="text-2xl font-bold text-[#10b981]">40%</div>
                    <div className="text-xs text-[#9ca3af]">Cost Reduction</div>
                  </div>
                  <div className="text-center p-3 bg-[#121212] rounded-xl">
                    <div className="text-2xl font-bold text-[#10b981]">99.9%</div>
                    <div className="text-xs text-[#9ca3af]">Uptime</div>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-[#3b82f6] hover:text-blue-700 font-semibold text-sm group-hover:underline"
                >
                  Read Full Case Study
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="group bg-[#121212] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#1E293B] overflow-hidden hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                <div className="text-center text-white relative z-10">
                  <div className="w-20 h-20 bg-[#121212] bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Manufacturing</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium border border-green-200">DevOps</span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium border border-purple-200">Automation</span>
                </div>
                <h3 className="text-xl font-bold text-[#1f2937] mb-3 group-hover:text-green-600 transition-colors">
                  DevOps Transformation for Manufacturing Giant
                </h3>
                <p className="text-[#6b7280] mb-4 text-sm leading-relaxed">
                  Implemented comprehensive DevOps practices and automation for a global manufacturing company, 
                  reducing deployment time and improving system reliability.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-3 bg-[#121212] rounded-xl">
                    <div className="text-2xl font-bold text-[#10b981]">80%</div>
                    <div className="text-xs text-[#9ca3af]">Faster Deployments</div>
                  </div>
                  <div className="text-center p-3 bg-[#121212] rounded-xl">
                    <div className="text-2xl font-bold text-[#10b981]">95%</div>
                    <div className="text-xs text-[#9ca3af]">Error Reduction</div>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-[#3b82f6] hover:text-blue-700 font-semibold text-sm group-hover:underline"
                >
                  Read Full Case Study
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="group bg-[#121212] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#1E293B] overflow-hidden hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                <div className="text-center text-white relative z-10">
                  <div className="w-20 h-20 bg-[#121212] bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Healthcare</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-xs font-medium border border-red-200">Security</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">Compliance</span>
                </div>
                <h3 className="text-xl font-bold text-[#1f2937] mb-3 group-hover:text-purple-600 transition-colors">
                  HIPAA-Compliant Infrastructure for Healthcare Provider
                </h3>
                <p className="text-[#6b7280] mb-4 text-sm leading-relaxed">
                  Designed and implemented a secure, HIPAA-compliant infrastructure for a regional healthcare provider, 
                  ensuring patient data protection while improving system performance.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-3 bg-[#121212] rounded-xl">
                    <div className="text-2xl font-bold text-[#10b981]">100%</div>
                    <div className="text-xs text-[#9ca3af]">HIPAA Compliance</div>
                  </div>
                  <div className="text-center p-3 bg-[#121212] rounded-xl">
                    <div className="text-2xl font-bold text-[#10b981]">60%</div>
                    <div className="text-xs text-[#9ca3af]">Performance Boost</div>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-[#3b82f6] hover:text-blue-700 font-semibold text-sm group-hover:underline"
                >
                  Read Full Case Study
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Case Study 4 */}
            <div className="group bg-[#121212] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#1E293B] overflow-hidden hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                <div className="text-center text-white relative z-10">
                  <div className="w-20 h-20 bg-[#121212] bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">E-commerce</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-medium border border-orange-200">Backup</span>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium border border-indigo-200">Disaster Recovery</span>
                </div>
                <h3 className="text-xl font-bold text-[#1f2937] mb-3 group-hover:text-orange-600 transition-colors">
                  Disaster Recovery Solution for E-commerce Platform
                </h3>
                <p className="text-[#6b7280] mb-4 text-sm leading-relaxed">
                  Implemented a comprehensive backup and disaster recovery solution for a high-traffic e-commerce platform, 
                  ensuring business continuity and data protection.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-3 bg-[#121212] rounded-xl">
                    <div className="text-2xl font-bold text-[#10b981]">4hrs</div>
                    <div className="text-xs text-[#9ca3af]">Recovery Time</div>
                  </div>
                  <div className="text-center p-3 bg-[#121212] rounded-xl">
                    <div className="text-2xl font-bold text-[#10b981]">99.99%</div>
                    <div className="text-xs text-[#9ca3af]">Data Protection</div>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-[#3b82f6] hover:text-blue-700 font-semibold text-sm group-hover:underline"
                >
                  Read Full Case Study
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Case Study 5 */}
            <div className="group bg-[#121212] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#1E293B] overflow-hidden hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-indigo-500 via-blue-600 to-cyan-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                <div className="text-center text-white relative z-10">
                  <div className="w-20 h-20 bg-[#121212] bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Government</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium border border-indigo-200">Security</span>
                  <span className="px-3 py-1 bg-[#121212] text-gray-700 rounded-full text-xs font-medium border border-gray-200">Compliance</span>
                </div>
                <h3 className="text-xl font-bold text-[#1f2937] mb-3 group-hover:text-indigo-600 transition-colors">
                  Secure Government Infrastructure Modernization
                </h3>
                <p className="text-[#6b7280] mb-4 text-sm leading-relaxed">
                  Modernized critical government infrastructure with enhanced security protocols, 
                  ensuring compliance with federal regulations and improving citizen services.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-3 bg-[#121212] rounded-xl">
                    <div className="text-2xl font-bold text-[#10b981]">100%</div>
                    <div className="text-xs text-[#9ca3af]">Compliance</div>
                  </div>
                  <div className="text-center p-3 bg-[#121212] rounded-xl">
                    <div className="text-2xl font-bold text-[#10b981]">75%</div>
                    <div className="text-xs text-[#9ca3af]">Efficiency Gain</div>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-[#3b82f6] hover:text-blue-700 font-semibold text-sm group-hover:underline"
                >
                  Read Full Case Study
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Case Study 6 */}
            <div className="group bg-[#121212] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#1E293B] overflow-hidden hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                <div className="text-center text-white relative z-10">
                  <div className="w-20 h-20 bg-[#121212] bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Education</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-medium border border-teal-200">Cloud</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">Data Management</span>
                </div>
                <h3 className="text-xl font-bold text-[#1f2937] mb-3 group-hover:text-teal-600 transition-colors">
                  Educational Institution Digital Transformation
                </h3>
                <p className="text-[#6b7280] mb-4 text-sm leading-relaxed">
                  Transformed a university's IT infrastructure to support remote learning, 
                  improving student experience and reducing operational costs significantly.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-3 bg-[#121212] rounded-xl">
                    <div className="text-2xl font-bold text-[#10b981]">50%</div>
                    <div className="text-xs text-[#9ca3af]">Cost Savings</div>
                  </div>
                  <div className="text-center p-3 bg-[#121212] rounded-xl">
                    <div className="text-2xl font-bold text-[#10b981]">90%</div>
                    <div className="text-xs text-[#9ca3af]">Student Satisfaction</div>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-[#3b82f6] hover:text-blue-700 font-semibold text-sm group-hover:underline"
                >
                  Read Full Case Study
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-16 md:py-24 bg-[#121212]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1f2937] mb-4">Proven Results</h2>
            <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
              Our track record speaks for itself - delivering measurable value across diverse industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">500+</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1f2937] mb-2">Projects Completed</h3>
              <p className="text-[#6b7280]">Successfully delivered across various industries</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">98%</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1f2937] mb-2">Client Satisfaction</h3>
              <p className="text-[#6b7280]">Consistently exceeding client expectations</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#8B5CF6] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">50%</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1f2937] mb-2">Average Cost Savings</h3>
              <p className="text-[#6b7280]">Typical operational cost reduction achieved</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">24/7</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1f2937] mb-2">Support Available</h3>
              <p className="text-[#6b7280]">Round-the-clock assistance and monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 md:py-24 bg-[#121212]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1f2937] mb-4">Industries We Serve</h2>
            <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
              Our expertise spans across multiple industries, delivering tailored solutions for unique challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 rounded-2xl hover:bg-[#121212] transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1f2937] mb-2">Financial Services</h3>
              <p className="text-[#6b7280]">Banking, insurance, and fintech solutions</p>
            </div>

            <div className="text-center p-6 rounded-2xl hover:bg-[#121212] transition-colors">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1f2937] mb-2">Manufacturing</h3>
              <p className="text-[#6b7280]">Industrial automation and IoT solutions</p>
            </div>

            <div className="text-center p-6 rounded-2xl hover:bg-[#121212] transition-colors">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1f2937] mb-2">Healthcare</h3>
              <p className="text-[#6b7280]">HIPAA-compliant infrastructure and security</p>
            </div>

            <div className="text-center p-6 rounded-2xl hover:bg-[#121212] transition-colors">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1f2937] mb-2">E-commerce</h3>
              <p className="text-[#6b7280]">Scalable platforms and payment security</p>
            </div>

            <div className="text-center p-6 rounded-2xl hover:bg-[#121212] transition-colors">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1f2937] mb-2">Education</h3>
              <p className="text-[#6b7280]">Learning management and student data systems</p>
            </div>

            <div className="text-center p-6 rounded-2xl hover:bg-[#121212] transition-colors">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1f2937] mb-2">Government</h3>
              <p className="text-[#6b7280]">Secure, compliant public sector solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#10b981] to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 md:mb-12 max-w-3xl mx-auto">
            Join the ranks of successful organizations that have transformed their technology 
            infrastructure with Zivara. Let's discuss how we can help you achieve similar results.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#10b981] bg-[#121212] rounded-full hover:bg-[#121212] transition-colors shadow-lg"
          >
            Start Your Success Story
          </a>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
