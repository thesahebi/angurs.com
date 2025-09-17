import React from "react";
import { Link } from "react-router-dom";

const Virtualization: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Header */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-24 bg-[#121212] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex px-4 py-2 text-sm font-medium text-[#3b82f6] bg-[#3b82f6]/20 border border-[#3b82f6]/30 rounded-full mb-6 backdrop-blur-sm">
              🖥️ VIRTUALIZATION
            </div>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#F1F5F9] mb-4 leading-tight">
              Self-Serve{' '}
              <span className="bg-gradient-to-r from-[#3b82f6] to-[#2563eb] bg-clip-text text-transparent">
                Virtualization
              </span>
            </h1>
            
            <p className="text-sm md:text-base lg:text-lg text-[#E2E8F0] max-w-2xl mx-auto leading-relaxed mb-6 md:mb-8">
              Allow your teams to deploy, manage, and scale virtual infrastructure—all in one place. Zivara provides all the tools you need to build a VMware-like virtualization experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch w-full max-w-2xl mx-auto">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full sm:w-2/5 px-8 py-4 text-lg font-semibold text-white border border-white/20 rounded-xl transition-all duration-200 hover:bg-[#e95420]"
                style={{ backgroundColor: '#ff6b35' }}
              >
                Read the Docs
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full sm:w-2/5 px-8 py-4 text-lg font-semibold text-[#F1F5F9] border-2 border-[#1E293B] hover:border-[#3B82F6] rounded-xl transition-all duration-200 hover:text-[#3B82F6]"
              >
                Start for Free
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Zuplo Style */}
      <section className="py-16 md:py-16 md:py-24 bg-[#1E293B]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#F1F5F9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#F1F5F9] mb-4">Accurate & Reliable</h3>
              <p className="text-lg text-[#E2E8F0] leading-relaxed">
                Kick outdated infrastructure management to the curb. Zivara is virtualization native, so your config isn't just making promises — it's creating your infrastructure, keeping it forever optimized and current.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#F1F5F9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#F1F5F9] mb-4">Optimize Onboarding</h3>
              <p className="text-lg text-[#E2E8F0] leading-relaxed">
                Zivara integrates with your existing infrastructure to enable teams to instantly deploy, get access, and start managing virtual machines in minutes.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#F1F5F9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#F1F5F9] mb-4">Built-In Testing</h3>
              <p className="text-lg text-[#E2E8F0] leading-relaxed">
                A full virtualization playground is integrated into your management console. Users can go from signing up, to deploying their first VM without ever leaving their browser tab.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections - Zuplo Style */}
      <section className="py-16 md:py-16 md:py-24 bg-[#121212]">
        <div className="container mx-auto px-4">
          {/* Automatic, Beautiful Management */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-8 md:mb-12 md:mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-6">
                Automatic, Beautiful Management
              </h2>
              <p className="text-lg text-[#E2E8F0] leading-relaxed mb-8 md:mb-12">
                Built directly from infrastructure specifications, Zivara ensures your virtualization management is not only automatic but aesthetically pleasing, catering to developers, IT teams, and partners alike.
              </p>
              <div className="flex items-center text-[#3b82f6] font-semibold">
                <span>Infrastructure Specifications</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div className="bg-[#1E293B] rounded-2xl p-4 border border-white/10">
              <div className="rounded-lg p-4">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-[#94A3B8] ml-4">vm-dashboard.html</span>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-[#3b82f6] rounded w-3/4"></div>
                  <div className="h-4 bg-[#1E293B] rounded w-1/2"></div>
                  <div className="h-4 bg-[#1E293B] rounded w-2/3"></div>
                  <div className="h-4 bg-[#10b981] rounded w-1/3"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Robust VM Management */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-8 md:mb-12 md:mb-20">
            <div className="order-2 lg:order-1">
              <div className="bg-[#1E293B] rounded-2xl p-4 border border-white/10">
                <div className="rounded-lg p-4">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm text-[#94A3B8] ml-4">vm-manager.py</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="text-[#3b82f6]">vm = create_vm(&#123;</div>
                    <div className="ml-4 text-[#E2E8F0]">name: "web-server",</div>
                    <div className="ml-4 text-[#E2E8F0]">cpu: 4,</div>
                    <div className="ml-4 text-[#E2E8F0]">memory: "8GB"</div>
                    <div className="text-[#3b82f6]">&#125;)</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-6">
                Robust VM Management
              </h2>
              <p className="text-lg text-[#E2E8F0] leading-relaxed mb-8 md:mb-12">
                Secure your infrastructure with Zivara' VM management. Authorized users can effortlessly view, create, and manage virtual machines right from the portal.
              </p>
              <div className="flex items-center text-[#3b82f6] font-semibold">
                <span>VM Management</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-[#1E293B] rounded-2xl p-4 border border-white/10">
                <div className="rounded-lg p-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-[#F1F5F9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-[#F1F5F9] mb-2">Cost Optimization</h3>
                    <p className="text-sm text-[#E2E8F0]">60% reduction in infrastructure costs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-6">
                Maximize Your Infrastructure's Efficiency
              </h2>
              <p className="text-lg text-[#E2E8F0] leading-relaxed mb-8 md:mb-12">
                Ready to turn your infrastructure into a cost-effective powerhouse? Effortlessly create and manage diverse resource plans and limits, all while monitoring performance with comprehensive usage analytics.
              </p>
              <div className="flex items-center text-[#3b82f6] font-semibold">
                <span>Check out Infrastructure Optimization</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
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
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full sm:w-2/5 px-8 py-4 text-lg font-semibold text-white border border-white/20 rounded-xl transition-all duration-200 hover:bg-[#e95420]"
                  style={{ backgroundColor: '#ff6b35' }}
                >
                  Book a demo
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full sm:w-2/5 px-8 py-4 text-lg font-semibold text-[#F1F5F9] border-2 border-[#1E293B] hover:border-[#3B82F6] rounded-xl transition-all duration-200 hover:text-[#3B82F6]"
                >
                  Start for Free
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
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
                <Link
                  to="/contact"
                  className="inline-flex items-center text-[#3b82f6] font-semibold hover:text-[#2563eb] transition-colors mb-6"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
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

          {/* Certificates */}
          <div className="text-center">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
              <div className="bg-[#1E293B] border border-white/10 rounded-xl p-3 text-center hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-[#3B82F6] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[#F1F5F9] mb-1">SOC 2 TYPE 2</h3>
                <p className="text-xs text-[#94A3B8]">Security</p>
              </div>
              <div className="bg-[#1E293B] border border-white/10 rounded-xl p-3 text-center hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-[#10B981] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[#F1F5F9] mb-1">High Performer</h3>
                <p className="text-xs text-[#94A3B8]">Spring 2025</p>
              </div>
              <div className="bg-[#1E293B] border border-white/10 rounded-xl p-3 text-center hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-[#8B5CF6] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[#F1F5F9] mb-1">Momentum Leader</h3>
                <p className="text-xs text-[#94A3B8]">Spring 2025</p>
              </div>
              <div className="bg-[#1E293B] border border-white/10 rounded-xl p-3 text-center hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-[#F59E0B] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[#F1F5F9] mb-1">Best ROI</h3>
                <p className="text-xs text-[#94A3B8]">Spring 2025</p>
              </div>
              <div className="bg-[#1E293B] border border-white/10 rounded-xl p-3 text-center hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-[#EC4899] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[#F1F5F9] mb-1">Easiest To Use</h3>
                <p className="text-xs text-[#94A3B8]">Spring 2025</p>
              </div>
              <div className="bg-[#1E293B] border border-white/10 rounded-xl p-3 text-center hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-[#EF4444] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[#F1F5F9] mb-1">Fastest Implementation</h3>
                <p className="text-xs text-[#94A3B8]">Spring 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Virtualization;

