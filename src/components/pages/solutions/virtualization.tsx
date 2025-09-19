import React, { useState, useEffect } from "react";

const Virtualization: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-[#121212]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#ff6b35]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-[#3B82F6]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-[#10B981]/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-[#8B5CF6]/10 rounded-full blur-2xl animate-pulse delay-3000"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16 md:mb-20 pt-8 md:pt-12">
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="inline-flex items-center px-4 py-2 bg-[#1E293B] border border-[#ff6b35]/20 rounded-full text-[#ff6b35] text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-[#ff6b35] rounded-full mr-2 animate-pulse"></span>
                🖥️ Virtualization Solutions
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-[#E2E8F0] to-[#94A3B8] bg-clip-text text-transparent">
                  Self-Serve
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#ff6b35] to-[#F59E0B] bg-clip-text text-transparent">
                  Virtualization
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[#E2E8F0] max-w-4xl mx-auto leading-relaxed mb-12">
                Allow your teams to deploy, manage, and scale virtual infrastructure—all in one place. Zivara provides all the tools you need to build a VMware-like virtualization experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch w-full max-w-2xl mx-auto">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center w-full sm:w-2/5 px-8 py-4 text-lg font-semibold text-white border border-white/20 rounded-xl transition-all duration-200 hover:bg-[#e95420] focus:outline-none focus:ring-2 focus:ring-white/80"
                  style={{ backgroundColor: '#ff6b35' }}
                >
                  Read the Docs
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center w-full sm:w-2/5 px-8 py-4 text-lg font-semibold text-[#F1F5F9] border-2 border-[#1E293B] hover:border-[#ff6b35] rounded-xl transition-all duration-200 hover:text-[#ff6b35] focus:outline-none focus:ring-2 focus:ring-white/80"
                >
                  Start for Free
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#ff6b35]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-[#3B82F6]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-[#10B981]/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-[#8B5CF6]/10 rounded-full blur-2xl animate-pulse delay-3000"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="group relative bg-[#1E293B]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#334155]/50 hover:border-[#ff6b35]/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#ff6b35]/10">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#ff6b35] to-[#F59E0B] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-[#ff6b35] transition-colors duration-300">
                  Accurate & Reliable
                </h3>

                {/* Description */}
                <p className="text-[#E2E8F0] leading-relaxed group-hover:text-white transition-colors duration-300">
                  Kick outdated infrastructure management to the curb. Zivara is virtualization native, so your config isn't just making promises — it's creating your infrastructure, keeping it forever optimized and current.
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-[#ff6b35] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-[#3B82F6] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-[#1E293B]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#334155]/50 hover:border-[#ff6b35]/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#ff6b35]/10">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#ff6b35] to-[#F59E0B] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-[#ff6b35] transition-colors duration-300">
                  Optimize Onboarding
                </h3>

                {/* Description */}
                <p className="text-[#E2E8F0] leading-relaxed group-hover:text-white transition-colors duration-300">
                  Zivara integrates with your existing infrastructure to enable teams to instantly deploy, get access, and start managing virtual machines in minutes.
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-[#ff6b35] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-[#3B82F6] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-[#1E293B]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#334155]/50 hover:border-[#ff6b35]/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#ff6b35]/10">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#ff6b35] to-[#F59E0B] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-[#ff6b35] transition-colors duration-300">
                  Built-In Testing
                </h3>

                {/* Description */}
                <p className="text-[#E2E8F0] leading-relaxed group-hover:text-white transition-colors duration-300">
                  A full virtualization playground is integrated into your management console. Users can go from signing up, to deploying their first VM without ever leaving their browser tab.
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-[#ff6b35] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-[#3B82F6] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#ff6b35]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-[#3B82F6]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-[#10B981]/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-[#8B5CF6]/10 rounded-full blur-2xl animate-pulse delay-3000"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-[#1E293B] border border-[#ff6b35]/20 rounded-full text-[#ff6b35] text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#ff6b35] rounded-full mr-2 animate-pulse"></span>
              🎨 Advanced Management
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-[#E2E8F0] to-[#94A3B8] bg-clip-text text-transparent">
                Automatic, Beautiful
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#ff6b35] to-[#F59E0B] bg-clip-text text-transparent">
                Management
              </span>
            </h2>
            <p className="text-lg md:text-xl text-[#E2E8F0] max-w-4xl mx-auto leading-relaxed mb-12">
              Built directly from infrastructure specifications, Zivara ensures your virtualization management is not only automatic but aesthetically pleasing, catering to developers, IT teams, and partners alike.
            </p>
          </div>

          {/* Robust VM Management */}
          <div className="text-center mb-8 md:mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-6">
              Robust VM Management
            </h2>
            <p className="text-lg text-[#E2E8F0] leading-relaxed mb-8 md:mb-12 max-w-4xl mx-auto">
              Secure your infrastructure with Zivara's VM management. Authorized users can effortlessly view, create, and manage virtual machines right from the portal with enterprise-grade security and intuitive controls.
            </p>
            <div className="flex items-center justify-center text-[#ff6b35] font-semibold">
              <span>Enterprise-Grade Security</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Provide Usage Analytics */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-8 md:mb-12 md:mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-6">
                Provide Usage Analytics
              </h2>
              <p className="text-lg text-[#E2E8F0] leading-relaxed mb-8 md:mb-12">
                Allow teams to monitor their infrastructure usage in real-time, and debug any performance issues they encounter. Avoid support tickets about resource allocation errors.
              </p>
              <div className="flex items-center text-[#3b82f6] font-semibold">
                <span>See it in Action</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div className="bg-[#1E293B] rounded-2xl p-4 border border-white/10">
              <div className="rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-[#F1F5F9]">Resource Usage</h3>
                  <span className="text-sm text-[#10b981]">Live</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#E2E8F0]">CPU Usage</span>
                      <span className="text-[#E2E8F0]">65%</span>
                    </div>
                    <div className="w-full bg-[#1E293B] rounded-full h-2">
                      <div className="bg-[#3b82f6] h-2 rounded-full" style={{width: '65%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#E2E8F0]">Memory</span>
                      <span className="text-[#E2E8F0]">42%</span>
                    </div>
                    <div className="w-full bg-[#1E293B] rounded-full h-2">
                      <div className="bg-[#10b981] h-2 rounded-full" style={{width: '42%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#E2E8F0]">Storage</span>
                      <span className="text-[#E2E8F0]">78%</span>
                    </div>
                    <div className="w-full bg-[#1E293B] rounded-full h-2">
                      <div className="bg-[#f59e0b] h-2 rounded-full" style={{width: '78%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Maximize Your Infrastructure's Efficiency */}
          <div className="text-center mb-8 md:mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-6">
              Maximize Your Infrastructure's Efficiency
            </h2>
            <p className="text-lg text-[#E2E8F0] leading-relaxed mb-8 md:mb-12 max-w-4xl mx-auto">
              Ready to turn your infrastructure into a cost-effective powerhouse? Effortlessly create and manage diverse resource plans and limits, all while monitoring performance with comprehensive usage analytics.
            </p>
            <div className="flex items-center justify-center text-[#ff6b35] font-semibold">
              <span>Infrastructure Optimization</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Get Started - Zuplo Style */}
      <section className="py-16 md:py-16 md:py-24 bg-[#1E293B]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-6">
              Let's Get Started
            </h2>
            <p className="text-lg text-[#E2E8F0] mb-8 md:mb-12 max-w-3xl mx-auto">
              Start quickly with templates built for the most essential use cases. They're ready to go and help you get set up fast—no extra configuration needed.
            </p>
            <p className="text-base text-[#E2E8F0] mb-10 md:mb-16 max-w-4xl mx-auto">
              You can deploy directly in the browser or run everything locally. Check out the code in our GitHub repository to explore, customize, and build on top of it.
            </p>
            
          </div>

          {/* Final CTA Section - Split Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-8 md:mb-12 md:mb-20">
            {/* Left Side - CTA */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-6">
                Scale your infrastructure with{' '}
                <span className="bg-gradient-to-r from-[#3b82f6] to-[#2563eb] bg-clip-text text-transparent">
                  confidence.
                </span>
              </h2>
              <p className="text-lg text-[#E2E8F0] mb-8 md:mb-12">
                Start for free or book a demo with our team.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-stretch w-full max-w-2xl mx-auto lg:mx-0">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center w-full sm:w-2/5 px-8 py-4 text-lg font-semibold text-white border border-white/20 rounded-xl transition-all duration-200 hover:bg-[#e95420]"
                  style={{ backgroundColor: '#ff6b35' }}
                >
                  Book a demo
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center w-full sm:w-2/5 px-8 py-4 text-lg font-semibold text-[#F1F5F9] border-2 border-[#1E293B] hover:border-[#3B82F6] rounded-xl transition-all duration-200 hover:text-[#3B82F6]"
                >
                  Start for Free
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Side - Template Card */}
            <div className="bg-[#1E293B] rounded-2xl p-4 border border-white/10">
              <div>
                <h3 className="text-2xl font-bold text-[#F1F5F9] mb-4">
                  VM Portal with Self-Serve Management
                </h3>
                <p className="text-[#E2E8F0] mb-6">
                  An example of an Zivara VM Portal with support for self-serve virtual machine creation and management.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center text-[#3b82f6] font-semibold hover:text-[#2563eb] transition-colors mb-6"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="rounded-lg p-4">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-[#94A3B8] ml-4">vm-portal.html</span>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-[#3b82f6] rounded w-3/4"></div>
                  <div className="h-4 bg-[#1E293B] rounded w-1/2"></div>
                  <div className="h-4 bg-[#1E293B] rounded w-2/3"></div>
                  <div className="h-4 bg-[#10b981] rounded w-1/3"></div>
                  <div className="h-4 bg-[#1E293B] rounded w-4/5"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
};

export default Virtualization;

