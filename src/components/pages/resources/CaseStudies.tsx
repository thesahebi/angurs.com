import React from "react";

const CaseStudies: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
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
              📈 Real Success Stories
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#e7e7e7] mb-3 sm:mb-4 leading-tight">
              Your Success is
              <span className="relative block mt-1 sm:mt-2">
                <span className="bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                  Our Inspiration
                </span>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#3b82f6] to-[#8B5CF6] rounded-full opacity-60"></div>
              </span>
            </h1>
            
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              Every challenge we solve becomes a stepping stone for your success. 
              Discover how we've transformed businesses and created lasting impact across diverse industries.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#e7e7e7]/70 px-2 sm:px-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3b82f6] rounded-full animate-pulse"></div>
                <span>Proven Results</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#8B5CF6] rounded-full animate-pulse delay-300"></div>
                <span>Real Impact</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3b82f6] rounded-full animate-pulse delay-700"></div>
                <span>Client Success</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section id="case-studies" className="py-12 sm:py-16 md:py-20 lg:py-24 relative bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3B82F6] rounded-full mr-2 animate-pulse"></span>
              ✨ Success Stories & Impact
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#e7e7e7] mb-3 sm:mb-4">
              Real Stories of
              <span className="block bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                Transformation
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              Every project tells a story of growth, innovation, and success. 
              Discover how we've helped organizations achieve their digital transformation goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {/* Case Study 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-4 sm:p-6 md:p-8 bg-[#1A1A1A] rounded-2xl sm:rounded-3xl border border-[#1E293B] hover:border-[#3B82F6]/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-6">
                  <div className="w-[40px] h-[40px] bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-2xl flex items-center justify-center mr-0 sm:mr-6 mb-4 sm:mb-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl sm:text-2xl">🏦</span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#e7e7e7] text-center sm:text-left">Financial Services</h3>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 sm:px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-xs font-medium border border-[#3B82F6]/30">Cloud Migration</span>
                    <span className="px-2 sm:px-3 py-1 bg-[#10B981]/10 text-[#10B981] rounded-full text-xs font-medium border border-[#10B981]/30">Security</span>
              </div>
                  
                  <h4 className="text-base sm:text-lg md:text-xl font-semibold text-[#e7e7e7] group-hover:text-[#3b82f6] transition-colors">
                  Multi-Cloud Migration for Regional Bank
                  </h4>
                  
                  <p className="text-xs sm:text-sm md:text-base text-[#e7e7e7]/90 leading-relaxed">
                  Successfully migrated a regional bank's entire infrastructure to a multi-cloud environment, 
                  improving scalability and enhancing security compliance.
                </p>
                  
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="text-center p-2 sm:p-3 bg-[#0A0A0A] rounded-xl border border-[#1E293B]">
                      <div className="text-lg sm:text-xl font-bold text-[#10b981]">40%</div>
                      <div className="text-xs text-[#e7e7e7]/70">Cost Reduction</div>
                    </div>
                    <div className="text-center p-2 sm:p-3 bg-[#0A0A0A] rounded-xl border border-[#1E293B]">
                      <div className="text-lg sm:text-xl font-bold text-[#10b981]">99.9%</div>
                      <div className="text-xs text-[#e7e7e7]/70">Uptime</div>
                  </div>
                  </div>
                  
                <a
                  href="#"
                    className="inline-flex items-center text-[#3b82f6] hover:text-[#60a5fa] font-semibold text-xs sm:text-sm group-hover:underline transition-colors"
                >
                  Read Full Case Study
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-4 sm:p-6 md:p-8 bg-[#1A1A1A] rounded-2xl sm:rounded-3xl border border-[#1E293B] hover:border-[#10B981]/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-6">
                  <div className="w-[40px] h-[40px] bg-gradient-to-br from-[#10B981] to-[#059669] rounded-2xl flex items-center justify-center mr-0 sm:mr-6 mb-4 sm:mb-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl sm:text-2xl">🏭</span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#e7e7e7] text-center sm:text-left">Manufacturing</h3>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 sm:px-3 py-1 bg-[#10B981]/10 text-[#10B981] rounded-full text-xs font-medium border border-[#10B981]/30">DevOps</span>
                    <span className="px-2 sm:px-3 py-1 bg-[#8B5CF6]/10 text-[#8B5CF6] rounded-full text-xs font-medium border border-[#8B5CF6]/30">Automation</span>
              </div>
                  
                  <h4 className="text-base sm:text-lg md:text-xl font-semibold text-[#e7e7e7] group-hover:text-[#10B981] transition-colors">
                  DevOps Transformation for Manufacturing Giant
                  </h4>
                  
                  <p className="text-xs sm:text-sm md:text-base text-[#e7e7e7]/90 leading-relaxed">
                  Implemented comprehensive DevOps practices and automation for a global manufacturing company, 
                  reducing deployment time and improving system reliability.
                </p>
                  
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="text-center p-2 sm:p-3 bg-[#0A0A0A] rounded-xl border border-[#1E293B]">
                      <div className="text-lg sm:text-xl font-bold text-[#10b981]">80%</div>
                      <div className="text-xs text-[#e7e7e7]/70">Faster Deployments</div>
                    </div>
                    <div className="text-center p-2 sm:p-3 bg-[#0A0A0A] rounded-xl border border-[#1E293B]">
                      <div className="text-lg sm:text-xl font-bold text-[#10b981]">95%</div>
                      <div className="text-xs text-[#e7e7e7]/70">Error Reduction</div>
                  </div>
                  </div>
                  
                <a
                  href="#"
                    className="inline-flex items-center text-[#3b82f6] hover:text-[#60a5fa] font-semibold text-xs sm:text-sm group-hover:underline transition-colors"
                >
                  Read Full Case Study
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-4 sm:p-6 md:p-8 bg-[#1A1A1A] rounded-2xl sm:rounded-3xl border border-[#1E293B] hover:border-[#8B5CF6]/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-6">
                  <div className="w-[40px] h-[40px] bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-2xl flex items-center justify-center mr-0 sm:mr-6 mb-4 sm:mb-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl sm:text-2xl">🏥</span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#e7e7e7] text-center sm:text-left">Healthcare</h3>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 sm:px-3 py-1 bg-[#EF4444]/10 text-[#EF4444] rounded-full text-xs font-medium border border-[#EF4444]/30">Security</span>
                    <span className="px-2 sm:px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-xs font-medium border border-[#3B82F6]/30">Compliance</span>
              </div>
                  
                  <h4 className="text-base sm:text-lg md:text-xl font-semibold text-[#e7e7e7] group-hover:text-[#8B5CF6] transition-colors">
                  HIPAA-Compliant Infrastructure for Healthcare Provider
                  </h4>
                  
                  <p className="text-xs sm:text-sm md:text-base text-[#e7e7e7]/90 leading-relaxed">
                  Designed and implemented a secure, HIPAA-compliant infrastructure for a regional healthcare provider, 
                  ensuring patient data protection while improving system performance.
                </p>
                  
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="text-center p-2 sm:p-3 bg-[#0A0A0A] rounded-xl border border-[#1E293B]">
                      <div className="text-lg sm:text-xl font-bold text-[#10b981]">100%</div>
                      <div className="text-xs text-[#e7e7e7]/70">HIPAA Compliance</div>
                    </div>
                    <div className="text-center p-2 sm:p-3 bg-[#0A0A0A] rounded-xl border border-[#1E293B]">
                      <div className="text-lg sm:text-xl font-bold text-[#10b981]">60%</div>
                      <div className="text-xs text-[#e7e7e7]/70">Performance Boost</div>
                  </div>
                  </div>
                  
                <a
                  href="#"
                    className="inline-flex items-center text-[#3b82f6] hover:text-[#60a5fa] font-semibold text-xs sm:text-sm group-hover:underline transition-colors"
                >
                  Read Full Case Study
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                </div>
              </div>
            </div>

            {/* Case Study 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-4 sm:p-6 md:p-8 bg-[#1A1A1A] rounded-2xl sm:rounded-3xl border border-[#1E293B] hover:border-[#F59E0B]/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-6">
                  <div className="w-[40px] h-[40px] bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-2xl flex items-center justify-center mr-0 sm:mr-6 mb-4 sm:mb-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl sm:text-2xl">🛒</span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#e7e7e7] text-center sm:text-left">E-commerce</h3>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 sm:px-3 py-1 bg-[#F59E0B]/10 text-[#F59E0B] rounded-full text-xs font-medium border border-[#F59E0B]/30">Backup</span>
                    <span className="px-2 sm:px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-xs font-medium border border-[#3B82F6]/30">Disaster Recovery</span>
              </div>
                  
                  <h4 className="text-base sm:text-lg md:text-xl font-semibold text-[#e7e7e7] group-hover:text-[#F59E0B] transition-colors">
                  Disaster Recovery Solution for E-commerce Platform
                  </h4>
                  
                  <p className="text-xs sm:text-sm md:text-base text-[#e7e7e7]/90 leading-relaxed">
                  Implemented a comprehensive backup and disaster recovery solution for a high-traffic e-commerce platform, 
                  ensuring business continuity and data protection.
                </p>
                  
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="text-center p-2 sm:p-3 bg-[#0A0A0A] rounded-xl border border-[#1E293B]">
                      <div className="text-lg sm:text-xl font-bold text-[#10b981]">4hrs</div>
                      <div className="text-xs text-[#e7e7e7]/70">Recovery Time</div>
                    </div>
                    <div className="text-center p-2 sm:p-3 bg-[#0A0A0A] rounded-xl border border-[#1E293B]">
                      <div className="text-lg sm:text-xl font-bold text-[#10b981]">99.99%</div>
                      <div className="text-xs text-[#e7e7e7]/70">Data Protection</div>
                  </div>
                  </div>
                  
                <a
                  href="#"
                    className="inline-flex items-center text-[#3b82f6] hover:text-[#60a5fa] font-semibold text-xs sm:text-sm group-hover:underline transition-colors"
                >
                  Read Full Case Study
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                </div>
              </div>
            </div>

            {/* Case Study 5 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-4 sm:p-6 md:p-8 bg-[#1A1A1A] rounded-2xl sm:rounded-3xl border border-[#1E293B] hover:border-[#3B82F6]/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-6">
                  <div className="w-[40px] h-[40px] bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-2xl flex items-center justify-center mr-0 sm:mr-6 mb-4 sm:mb-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl sm:text-2xl">🏛️</span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#e7e7e7] text-center sm:text-left">Government</h3>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 sm:px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-xs font-medium border border-[#3B82F6]/30">Security</span>
                    <span className="px-2 sm:px-3 py-1 bg-[#8B5CF6]/10 text-[#8B5CF6] rounded-full text-xs font-medium border border-[#8B5CF6]/30">Compliance</span>
              </div>
                  
                  <h4 className="text-base sm:text-lg md:text-xl font-semibold text-[#e7e7e7] group-hover:text-[#3B82F6] transition-colors">
                  Secure Government Infrastructure Modernization
                  </h4>
                  
                  <p className="text-xs sm:text-sm md:text-base text-[#e7e7e7]/90 leading-relaxed">
                  Modernized critical government infrastructure with enhanced security protocols, 
                  ensuring compliance with federal regulations and improving citizen services.
                </p>
                  
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="text-center p-2 sm:p-3 bg-[#0A0A0A] rounded-xl border border-[#1E293B]">
                      <div className="text-lg sm:text-xl font-bold text-[#10b981]">100%</div>
                      <div className="text-xs text-[#e7e7e7]/70">Compliance</div>
                    </div>
                    <div className="text-center p-2 sm:p-3 bg-[#0A0A0A] rounded-xl border border-[#1E293B]">
                      <div className="text-lg sm:text-xl font-bold text-[#10b981]">75%</div>
                      <div className="text-xs text-[#e7e7e7]/70">Efficiency Gain</div>
                  </div>
                  </div>
                  
                <a
                  href="#"
                    className="inline-flex items-center text-[#3b82f6] hover:text-[#60a5fa] font-semibold text-xs sm:text-sm group-hover:underline transition-colors"
                >
                  Read Full Case Study
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                </div>
              </div>
            </div>

            {/* Case Study 6 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-4 sm:p-6 md:p-8 bg-[#1A1A1A] rounded-2xl sm:rounded-3xl border border-[#1E293B] hover:border-[#10B981]/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-6">
                  <div className="w-[40px] h-[40px] bg-gradient-to-br from-[#10B981] to-[#059669] rounded-2xl flex items-center justify-center mr-0 sm:mr-6 mb-4 sm:mb-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl sm:text-2xl">🎓</span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#e7e7e7] text-center sm:text-left">Education</h3>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 sm:px-3 py-1 bg-[#10B981]/10 text-[#10B981] rounded-full text-xs font-medium border border-[#10B981]/30">Cloud</span>
                    <span className="px-2 sm:px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-xs font-medium border border-[#3B82F6]/30">Data Management</span>
              </div>
                  
                  <h4 className="text-base sm:text-lg md:text-xl font-semibold text-[#e7e7e7] group-hover:text-[#10B981] transition-colors">
                  Educational Institution Digital Transformation
                  </h4>
                  
                  <p className="text-xs sm:text-sm md:text-base text-[#e7e7e7]/90 leading-relaxed">
                  Transformed a university's IT infrastructure to support remote learning, 
                  improving student experience and reducing operational costs significantly.
                </p>
                  
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="text-center p-2 sm:p-3 bg-[#0A0A0A] rounded-xl border border-[#1E293B]">
                      <div className="text-lg sm:text-xl font-bold text-[#10b981]">50%</div>
                      <div className="text-xs text-[#e7e7e7]/70">Cost Savings</div>
                    </div>
                    <div className="text-center p-2 sm:p-3 bg-[#0A0A0A] rounded-xl border border-[#1E293B]">
                      <div className="text-lg sm:text-xl font-bold text-[#10b981]">90%</div>
                      <div className="text-xs text-[#e7e7e7]/70">Student Satisfaction</div>
                  </div>
                  </div>
                  
                <a
                  href="#"
                    className="inline-flex items-center text-[#3b82f6] hover:text-[#60a5fa] font-semibold text-xs sm:text-sm group-hover:underline transition-colors"
                >
                  Read Full Case Study
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3B82F6] rounded-full mr-2 animate-pulse"></span>
              📊 Proven Track Record
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#e7e7e7] mb-3 sm:mb-4">
              Numbers That
              <span className="block bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                Tell Our Story
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              Our success is measured not just in projects completed, but in the lasting impact we create for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                emoji: "🚀",
                title: "Projects Completed",
                description: "Successfully delivered across various industries",
                color: "from-[#10B981] to-[#059669]",
                value: "500+"
              },
              {
                emoji: "💙",
                title: "Client Satisfaction",
                description: "Consistently exceeding client expectations",
                color: "from-[#3B82F6] to-[#2563EB]",
                value: "98%"
              },
              {
                emoji: "💰",
                title: "Average Cost Savings",
                description: "Typical operational cost reduction achieved",
                color: "from-[#8B5CF6] to-[#7C3AED]",
                value: "50%"
              },
              {
                emoji: "🛡️",
                title: "Support Available",
                description: "Round-the-clock assistance and monitoring",
                color: "from-[#F59E0B] to-[#D97706]",
                value: "24/7"
              }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-4 sm:p-6 md:p-8 bg-[#1A1A1A] rounded-2xl sm:rounded-3xl border border-[#1E293B] hover:border-[#3B82F6]/30 transition-all duration-300 text-center">
                  <div className={`w-[40px] h-[40px] bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-xl sm:text-2xl">{item.emoji}</span>
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#e7e7e7] mb-2 sm:mb-3">{item.value}</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-[#e7e7e7]">{item.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-[#e7e7e7]/80 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gentle Divider */}
          <div className="flex justify-center mt-8 sm:mt-12 md:mt-16">
            <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent rounded-full opacity-60"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudies;

