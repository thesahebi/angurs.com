import React from "react";

const DevOps: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden">
        {/* Animated Background */}
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
            {/* Badge */}
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-6 sm:mb-8 md:mb-10 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3B82F6] rounded-full mr-2 animate-pulse"></span>
              ⚡ DevOps Excellence
            </div>
            
            {/* Main Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#e7e7e7] mb-3 sm:mb-4 leading-tight">
              Accelerate Your
              <span className="relative block mt-1 sm:mt-2">
                <span className="bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                  Development Lifecycle
                </span>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#3b82f6] to-[#8B5CF6] rounded-full opacity-60"></div>
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              From code commit to production deployment, we streamline every step of your software delivery pipeline. 
              Transform your development workflow with comprehensive DevOps automation.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#e7e7e7]/70 px-2 sm:px-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3b82f6] rounded-full animate-pulse"></div>
                <span>Always Fast</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#8B5CF6] rounded-full animate-pulse delay-300"></div>
                <span>Loving Support</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3b82f6] rounded-full animate-pulse delay-700"></div>
                <span>Gentle Innovation</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="flex justify-center mt-8 sm:mt-10">
              <a
                href="/contact"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-[#e7e7e7] bg-[#3B82F6] border border-[#3B82F6] rounded-xl transition-all duration-300 hover:bg-[#2563eb] hover:border-[#2563eb] hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Transform Your DevOps
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps Benefits */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#e7e7e7] mb-3 sm:mb-4">Why DevOps Automation?</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#e7e7e7] max-w-3xl mx-auto">
              DevOps automation transforms how teams build, test, and deploy software, delivering measurable business value
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
            <div className="text-center">
              <div className="w-[40px] h-[40px] bg-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#e7e7e7] mb-2 sm:mb-3">10x Faster Deployments</h3>
              <p className="text-sm sm:text-base text-[#e7e7e7]">Reduce deployment time from hours to minutes with automated CI/CD pipelines</p>
            </div>

            <div className="text-center">
              <div className="w-[40px] h-[40px] bg-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#e7e7e7] mb-3">99.9% Reliability</h3>
              <p className="text-[#e7e7e7]">Automated testing and quality gates ensure consistent, reliable releases</p>
            </div>

            <div className="text-center">
              <div className="w-[40px] h-[40px] bg-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#e7e7e7] mb-3">50% Cost Reduction</h3>
              <p className="text-[#e7e7e7]">Eliminate manual processes and reduce operational overhead significantly</p>
            </div>

            <div className="text-center">
              <div className="w-[40px] h-[40px] bg-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#e7e7e7] mb-3">Team Collaboration</h3>
              <p className="text-[#e7e7e7]">Break down silos and foster collaboration between development and operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps Services */}
      <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#e7e7e7] mb-3 sm:mb-4">DevOps Services</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#e7e7e7] max-w-3xl mx-auto">
              End-to-end DevOps automation solutions to accelerate your software delivery
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {/* CI/CD Pipeline Setup */}
            <div className="bg-[#1E293B] rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow border border-[#1E293B]">
              <div className="w-[40px] h-[40px] bg-[#2563EB] rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#e7e7e7] mb-3 sm:mb-4">CI/CD Pipeline Setup</h3>
              <p className="text-sm sm:text-base text-[#e7e7e7] leading-relaxed mb-4 sm:mb-6">
                Design and implement robust continuous integration and deployment pipelines 
                tailored to your development workflow and infrastructure.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#e7e7e7]">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#2563EB] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Jenkins, GitLab CI, GitHub Actions
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#2563EB] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Multi-stage Pipeline Design
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#2563EB] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Automated Testing Integration
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#2563EB] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Blue-Green Deployments
                </li>
              </ul>
            </div>

            {/* Infrastructure as Code */}
            <div className="bg-[#1E293B] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-[#1E293B]">
              <div className="w-[40px] h-[40px] bg-[#2563EB] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#e7e7e7] mb-4">Infrastructure as Code</h3>
              <p className="text-[#e7e7e7] leading-relaxed mb-6">
                Manage your infrastructure through code with version control, 
                automated provisioning, and consistent environments.
              </p>
              <ul className="space-y-2 text-[#e7e7e7]">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#2563EB] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Terraform & CloudFormation
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#2563EB] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Multi-Cloud Provisioning
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#2563EB] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Environment Management
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#2563EB] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  State Management
                </li>
              </ul>
            </div>

            {/* Container Orchestration */}
            <div className="bg-[#1E293B] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-[#1E293B]">
              <div className="w-[40px] h-[40px] bg-[#2563EB] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#e7e7e7] mb-4">Container Orchestration</h3>
              <p className="text-[#e7e7e7] leading-relaxed mb-6">
                Deploy and manage containerized applications at scale with 
                Kubernetes and Docker orchestration solutions.
              </p>
              <ul className="space-y-2 text-[#e7e7e7]">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#2563EB] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Kubernetes Deployment
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#2563EB] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Docker Containerization
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#2563EB] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Auto-scaling & Load Balancing
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#2563EB] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Service Mesh Implementation
                </li>
              </ul>
            </div>

            {/* Configuration Management */}
            <div className="bg-[#1E293B] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-[#1E293B]">
              <div className="w-[40px] h-[40px] bg-[#2563EB] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#e7e7e7] mb-4">Configuration Management</h3>
              <p className="text-[#e7e7e7] leading-relaxed mb-6">
                Automate server configuration and application deployment 
                with industry-standard configuration management tools.
              </p>
              <ul className="space-y-2 text-[#e7e7e7]">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#2563EB] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Ansible Playbooks
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#2563EB] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Puppet & Chef
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#2563EB] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Idempotent Deployments
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#2563EB] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Environment Consistency
                </li>
              </ul>
            </div>

            {/* Monitoring & Observability */}
            <div className="bg-[#1E293B] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-[#1E293B]">
              <div className="w-[40px] h-[40px] bg-[#2563EB] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#e7e7e7] mb-4">Monitoring & Observability</h3>
              <p className="text-[#e7e7e7] leading-relaxed mb-6">
                Implement comprehensive monitoring, logging, and alerting 
                to ensure optimal performance and rapid issue resolution.
              </p>
              <ul className="space-y-2 text-[#e7e7e7]">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#2563EB] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Prometheus & Grafana
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#2563EB] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  ELK Stack (Elasticsearch, Logstash, Kibana)
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#2563EB] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Distributed Tracing
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#2563EB] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Automated Alerting
                </li>
              </ul>
            </div>

            {/* Security Integration */}
            <div className="bg-[#1E293B] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-[#1E293B]">
              <div className="w-[40px] h-[40px] bg-[#2563EB] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#e7e7e7] mb-4">Security Integration</h3>
              <p className="text-[#e7e7e7] leading-relaxed mb-6">
                Integrate security practices into your DevOps pipeline with 
                automated security scanning and compliance checks.
              </p>
              <ul className="space-y-2 text-[#e7e7e7]">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#2563EB] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  SAST & DAST Integration
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#2563EB] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Container Security Scanning
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#2563EB] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Secrets Management
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#2563EB] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Compliance Automation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps Process */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#e7e7e7] mb-3 sm:mb-4">Our DevOps Process</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#e7e7e7] max-w-3xl mx-auto">
              A proven methodology to transform your development and operations workflow
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-[40px] h-[40px] bg-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl font-bold text-[#e7e7e7]">1</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-[#e7e7e7] mb-2">Assessment</h3>
              <p className="text-sm sm:text-base text-[#e7e7e7]">Analyze current processes, identify bottlenecks, and define automation goals</p>
            </div>

            <div className="text-center">
              <div className="w-[40px] h-[40px] bg-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#e7e7e7]">2</span>
              </div>
              <h3 className="text-lg font-semibold text-[#e7e7e7] mb-2">Design</h3>
              <p className="text-[#e7e7e7]">Create comprehensive DevOps architecture and automation strategy</p>
            </div>

            <div className="text-center">
              <div className="w-[40px] h-[40px] bg-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#e7e7e7]">3</span>
              </div>
              <h3 className="text-lg font-semibold text-[#e7e7e7] mb-2">Implementation</h3>
              <p className="text-[#e7e7e7]">Build and deploy CI/CD pipelines, infrastructure, and monitoring systems</p>
            </div>

            <div className="text-center">
              <div className="w-[40px] h-[40px] bg-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#e7e7e7]">4</span>
              </div>
              <h3 className="text-lg font-semibold text-[#e7e7e7] mb-2">Optimization</h3>
              <p className="text-[#e7e7e7]">Continuous improvement, training, and scaling of DevOps practices</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DevOps;
