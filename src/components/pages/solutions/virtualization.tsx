import React from "react";

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
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F1F5F9] mb-6 leading-tight">
              Self-Serve{' '}
              <span className="bg-gradient-to-r from-[#3b82f6] to-[#2563eb] bg-clip-text text-transparent">
                Virtualization
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#E2E8F0] max-w-3xl mx-auto leading-relaxed mb-8">
              Allow your teams to deploy, manage, and scale virtual infrastructure—all in one place. Angurs provides all the tools you need to build a VMware-like virtualization experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-[#F1F5F9] bg-[#3b82f6] hover:bg-[#2563eb] rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Read the Docs
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-[#3b82f6] border-2 border-[#3b82f6] hover:bg-[#3b82f6] hover:text-[#F1F5F9] rounded-xl transition-all duration-200"
              >
                Start for Free
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Zuplo Style */}
      <section className="py-16 md:py-20 bg-[#1E293B]">
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
                Kick outdated infrastructure management to the curb. Angurs is virtualization native, so your config isn't just making promises — it's creating your infrastructure, keeping it forever optimized and current.
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
                Angurs integrates with your existing infrastructure to enable teams to instantly deploy, get access, and start managing virtual machines in minutes.
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
      <section className="py-16 md:py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          {/* Automatic, Beautiful Management */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-6">
                Automatic, Beautiful Management
              </h2>
              <p className="text-lg text-[#E2E8F0] leading-relaxed mb-8">
                Built directly from infrastructure specifications, Angurs ensures your virtualization management is not only automatic but aesthetically pleasing, catering to developers, IT teams, and partners alike.
              </p>
              <div className="flex items-center text-[#3b82f6] font-semibold">
                <span>Infrastructure Specifications</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div className="bg-[#1E293B] rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="bg-[#f8fafc] rounded-lg p-6">
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
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="bg-[#1E293B] rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="bg-[#f8fafc] rounded-lg p-6">
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
              <p className="text-lg text-[#E2E8F0] leading-relaxed mb-8">
                Secure your infrastructure with Angurs' VM management. Authorized users can effortlessly view, create, and manage virtual machines right from the portal.
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
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-6">
                Provide Usage Analytics
              </h2>
              <p className="text-lg text-[#E2E8F0] leading-relaxed mb-8">
                Allow teams to monitor their infrastructure usage in real-time, and debug any performance issues they encounter. Avoid support tickets about resource allocation errors.
              </p>
              <div className="flex items-center text-[#3b82f6] font-semibold">
                <span>See it in Action</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div className="bg-[#1E293B] rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="bg-[#f8fafc] rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-[#F1F5F9]">Resource Usage</h3>
                  <span className="text-sm text-[#10b981]">Live</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>CPU Usage</span>
                      <span>65%</span>
                    </div>
                    <div className="w-full bg-[#1E293B] rounded-full h-2">
                      <div className="bg-[#3b82f6] h-2 rounded-full" style={{width: '65%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Memory</span>
                      <span>42%</span>
                    </div>
                    <div className="w-full bg-[#1E293B] rounded-full h-2">
                      <div className="bg-[#10b981] h-2 rounded-full" style={{width: '42%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Storage</span>
                      <span>78%</span>
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
              <div className="bg-[#1E293B] rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="bg-[#f8fafc] rounded-lg p-6">
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
              <p className="text-lg text-[#E2E8F0] leading-relaxed mb-8">
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
      <section className="py-16 md:py-20 bg-[#1E293B]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-6">
              Let's Get Started
            </h2>
            <p className="text-lg text-[#E2E8F0] mb-8 max-w-3xl mx-auto">
              Start quickly with templates built for the most essential use cases. They're ready to go and help you get set up fast—no extra configuration needed.
            </p>
            <p className="text-base text-[#E2E8F0] mb-12 max-w-4xl mx-auto">
              You can deploy directly in the browser or run everything locally. Check out the code in our GitHub repository to explore, customize, and build on top of it.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#F1F5F9] bg-[#3b82f6] hover:bg-[#2563eb] rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Check other Templates
              </a>
            </div>
          </div>

          {/* Template Card */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-[#1E293B] rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-[#F1F5F9] mb-4">
                    VM Portal with Self-Serve Management
                  </h3>
                  <p className="text-[#E2E8F0] mb-6">
                    An example of an Angurs VM Portal with support for self-serve virtual machine creation and management.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center text-[#3b82f6] font-semibold hover:text-[#2563eb] transition-colors"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                <div className="bg-[#f8fafc] rounded-lg p-6">
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

          {/* Final CTA */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-6">
              Scale your infrastructure with{' '}
              <span className="bg-gradient-to-r from-[#3b82f6] to-[#2563eb] bg-clip-text text-transparent">
                confidence.
              </span>
            </h2>
            <p className="text-lg text-[#E2E8F0] mb-8 max-w-2xl mx-auto">
              Start for free or book a demo with our team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#F1F5F9] bg-[#3b82f6] hover:bg-[#2563eb] rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Book a demo
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#3b82f6] border-2 border-[#3b82f6] hover:bg-[#3b82f6] hover:text-[#F1F5F9] rounded-xl transition-all duration-200"
              >
                Start for Free
              </a>
            </div>

            {/* Certificates */}
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-[#E2E8F0]">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full font-medium">SOC 2 TYPE 2</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">High Performer Spring 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full font-medium">Momentum Leader Spring 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full font-medium">Best Estimated ROI Spring 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full font-medium">Easiest To Use Spring 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full font-medium">Fastest Implementation Spring 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Virtualization;

