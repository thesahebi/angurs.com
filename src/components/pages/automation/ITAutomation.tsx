import React from "react";

const ITAutomation: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A]"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-hover/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/15 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-8 md:mb-12 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#3B82F6] rounded-full mr-3 animate-pulse"></span>
              🤖 IT Automation
            </div>
            
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#e7e7e7] mb-4 sm:mb-6">
              Streamline Your{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-[#3b82f6] to-[#3b82f6] bg-clip-text text-transparent">
                  IT Operations
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#3b82f6] to-[#3b82f6] rounded-full opacity-60"></div>
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#e7e7e7] max-w-2xl mx-auto mb-6 sm:mb-8">
              From infrastructure management to service delivery, we automate the complex to maximize efficiency and reliability. 
              Transform your IT operations with intelligent automation solutions.
            </p>
            
            {/* CTA Button */}
            <div className="flex justify-center w-full max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base font-semibold text-[#e7e7e7] bg-[#3b82f6] border border-[#3b82f6] rounded-xl transition-all duration-200 hover:bg-[#2563eb] hover:border-[#2563eb]"
              >
                Automate IT Operations
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* IT Automation Benefits */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#e7e7e7] mb-3 sm:mb-4">Why IT Automation?</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#e7e7e7] max-w-3xl mx-auto">
              IT automation transforms how organizations manage infrastructure, reducing costs and improving service delivery
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
            <div className="text-center">
              <div className="w-[40px] h-[40px] bg-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#e7e7e7] mb-2 sm:mb-3">24/7 Operations</h3>
              <p className="text-sm sm:text-base text-[#e7e7e7]">Automated systems run continuously, ensuring services are always available</p>
            </div>

            <div className="text-center">
              <div className="w-[40px] h-[40px] bg-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#e7e7e7] mb-3">Error Reduction</h3>
              <p className="text-[#e7e7e7]">Eliminate human error with consistent, repeatable automated processes</p>
            </div>

            <div className="text-center">
              <div className="w-[40px] h-[40px] bg-[#10B981] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#e7e7e7] mb-3">Cost Optimization</h3>
              <p className="text-[#e7e7e7]">Reduce operational costs by automating routine tasks and optimizing resource usage</p>
            </div>

            <div className="text-center">
              <div className="w-[40px] h-[40px] bg-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#e7e7e7] mb-3">Rapid Response</h3>
              <p className="text-[#e7e7e7]">Automated incident response and self-healing systems minimize downtime</p>
            </div>
          </div>
        </div>
      </section>

      {/* IT Automation Solutions */}
      <section id="solutions" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#e7e7e7] mb-3 sm:mb-4">IT Automation Solutions</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#e7e7e7] max-w-3xl mx-auto">
              Comprehensive automation services to streamline your IT infrastructure and operations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {/* Infrastructure Automation */}
            <div className="bg-[#0A0A0A] rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow border border-[#1E293B]">
              <div className="w-[40px] h-[40px] bg-[#3B82F6] rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#e7e7e7] mb-3 sm:mb-4">Infrastructure Automation</h3>
              <p className="text-sm sm:text-base text-[#e7e7e7] leading-relaxed mb-4 sm:mb-6">
                Automate server provisioning, configuration, and management across 
                physical, virtual, and cloud environments.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#e7e7e7]">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#3b82f6] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Server Provisioning
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#3b82f6] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Configuration Management
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#3b82f6] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Patch Management
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#3b82f6] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Resource Optimization
                </li>
              </ul>
            </div>

            {/* Network Automation */}
            <div className="bg-[#0A0A0A] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-[#1E293B]">
              <div className="w-[40px] h-[40px] bg-[#10B981] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#e7e7e7] mb-4">Network Automation</h3>
              <p className="text-[#e7e7e7] leading-relaxed mb-6">
                Automate network configuration, monitoring, and management 
                to ensure optimal performance and security.
              </p>
              <ul className="space-y-2 text-[#e7e7e7]">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Network Configuration
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  VLAN Management
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Security Policy Management
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Performance Monitoring
                </li>
              </ul>
            </div>

            {/* Service Desk Automation */}
            <div className="bg-[#0A0A0A] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-[#1E293B]">
              <div className="w-[40px] h-[40px] bg-[#8B5CF6] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#e7e7e7] mb-4">Service Desk Automation</h3>
              <p className="text-[#e7e7e7] leading-relaxed mb-6">
                Automate IT service management processes to improve response times 
                and enhance user experience.
              </p>
              <ul className="space-y-2 text-[#e7e7e7]">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Ticket Routing & Assignment
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Self-Service Portals
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Automated Workflows
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Knowledge Base Integration
                </li>
              </ul>
            </div>

            {/* Backup & Recovery Automation */}
            <div className="bg-[#0A0A0A] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-[#1E293B]">
              <div className="w-[40px] h-[40px] bg-[#F59E0B] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#e7e7e7] mb-4">Backup & Recovery Automation</h3>
              <p className="text-[#e7e7e7] leading-relaxed mb-6">
                Automate backup processes and disaster recovery procedures 
                to ensure data protection and business continuity.
              </p>
              <ul className="space-y-2 text-[#e7e7e7]">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-orange-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Scheduled Backups
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-orange-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Disaster Recovery Testing
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-orange-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Data Replication
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-orange-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Recovery Automation
                </li>
              </ul>
            </div>

            {/* Security Automation */}
            <div className="bg-[#0A0A0A] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-[#1E293B]">
              <div className="w-[40px] h-[40px] bg-[#EF4444] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#e7e7e7] mb-4">Security Automation</h3>
              <p className="text-[#e7e7e7] leading-relaxed mb-6">
                Automate security processes, threat detection, and incident response 
                to protect your IT infrastructure continuously.
              </p>
              <ul className="space-y-2 text-[#e7e7e7]">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Threat Detection
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Vulnerability Scanning
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Incident Response
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Compliance Monitoring
                </li>
              </ul>
            </div>

            {/* Cloud Operations Automation */}
            <div className="bg-[#0A0A0A] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-[#1E293B]">
              <div className="w-[40px] h-[40px] bg-[#6366F1] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#e7e7e7] mb-4">Cloud Operations Automation</h3>
              <p className="text-[#e7e7e7] leading-relaxed mb-6">
                Automate cloud resource management, scaling, and optimization 
                across multi-cloud environments.
              </p>
              <ul className="space-y-2 text-[#e7e7e7]">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Auto-scaling
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Cost Optimization
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Resource Management
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Multi-cloud Orchestration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Tools */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#e7e7e7] mb-3 sm:mb-4">Automation Tools & Platforms</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#e7e7e7] max-w-3xl mx-auto">
              We work with industry-leading automation tools to deliver robust and scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
            <div className="bg-[#1A1A1A] rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#3b82f6]/20 group">
              <div className="w-[40px] h-[40px] bg-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#e7e7e7] mb-2 sm:mb-3 group-hover:text-[#2563EB] transition-colors">Ansible</h3>
              <p className="text-sm sm:text-base text-[#e7e7e7] leading-relaxed">Configuration management and application deployment automation</p>
            </div>

            <div className="bg-[#1A1A1A] rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#3b82f6]/20 group">
              <div className="w-[40px] h-[40px] bg-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#e7e7e7] mb-2 sm:mb-3 group-hover:text-[#2563EB] transition-colors">Puppet</h3>
              <p className="text-sm sm:text-base text-[#e7e7e7] leading-relaxed">Infrastructure automation and configuration management</p>
            </div>

            <div className="bg-[#1A1A1A] rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#3b82f6]/20 group">
              <div className="w-[40px] h-[40px] bg-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#e7e7e7] mb-2 sm:mb-3 group-hover:text-[#2563EB] transition-colors">Chef</h3>
              <p className="text-sm sm:text-base text-[#e7e7e7] leading-relaxed">System management and infrastructure automation</p>
            </div>

            <div className="bg-[#1A1A1A] rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#3b82f6]/20 group">
              <div className="w-[40px] h-[40px] bg-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#e7e7e7] mb-2 sm:mb-3 group-hover:text-[#2563EB] transition-colors">PowerShell</h3>
              <p className="text-sm sm:text-base text-[#e7e7e7] leading-relaxed">Windows automation and scripting solutions</p>
            </div>

            <div className="bg-[#1A1A1A] rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#3b82f6]/20 group">
              <div className="w-[40px] h-[40px] bg-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#e7e7e7] mb-2 sm:mb-3 group-hover:text-[#2563EB] transition-colors">Python</h3>
              <p className="text-sm sm:text-base text-[#e7e7e7] leading-relaxed">Custom scripting and automation development</p>
            </div>

            <div className="bg-[#1A1A1A] rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#3b82f6]/20 group">
              <div className="w-[40px] h-[40px] bg-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#e7e7e7] mb-2 sm:mb-3 group-hover:text-[#2563EB] transition-colors">ServiceNow</h3>
              <p className="text-sm sm:text-base text-[#e7e7e7] leading-relaxed">ITSM automation and workflow management</p>
            </div>

            <div className="bg-[#1A1A1A] rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#3b82f6]/20 group">
              <div className="w-[40px] h-[40px] bg-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#e7e7e7] mb-2 sm:mb-3 group-hover:text-[#2563EB] transition-colors">Zabbix</h3>
              <p className="text-sm sm:text-base text-[#e7e7e7] leading-relaxed">Monitoring automation and alerting systems</p>
            </div>

            <div className="bg-[#1A1A1A] rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#3b82f6]/20 group">
              <div className="w-[40px] h-[40px] bg-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#e7e7e7] mb-2 sm:mb-3 group-hover:text-[#2563EB] transition-colors">Jenkins</h3>
              <p className="text-sm sm:text-base text-[#e7e7e7] leading-relaxed">CI/CD automation and continuous integration</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ITAutomation;
