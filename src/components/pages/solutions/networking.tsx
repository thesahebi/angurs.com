import React from "react";

const Networking: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] via-[#121212] to-[#0F172A]"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-20 right-10 w-80 h-80 bg-[#3B82F6]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#10B981]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-[#8B5CF6]/20 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-8 md:mb-12 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#3B82F6] rounded-full mr-3 animate-pulse"></span>
              🌐 Enterprise Networking Solutions
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F1F5F9] mb-8 md:mb-12 leading-tight">
              Smarter Networks,{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-[#3B82F6] via-[#10B981] to-[#8B5CF6] bg-clip-text text-transparent">
                  Stronger Connections
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-full opacity-60"></div>
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-[#E2E8F0] max-w-4xl mx-auto leading-relaxed mb-10 md:mb-16">
              From branch offices to entire campuses, Zivara designs and deploys networks that are fast, secure, 
              and built for growth. Connect your future today.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8 md:mb-12 md:mb-20">
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-[#3B82F6]/25 hover:scale-105"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#3B82F6] border-2 border-[#3B82F6] hover:bg-[#3B82F6] hover:text-white rounded-2xl transition-all duration-300 backdrop-blur-sm"
              >
                View Solutions
              </a>
        </div>
        
            {/* Network Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#3B82F6] mb-2">99.9%</div>
                <div className="text-sm text-[#94A3B8]">Network Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#10B981] mb-2">10Gbps</div>
                <div className="text-sm text-[#94A3B8]">Max Speed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#8B5CF6] mb-2">24/7</div>
                <div className="text-sm text-[#94A3B8]">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#F59E0B] mb-2">1000+</div>
                <div className="text-sm text-[#94A3B8]">Devices Supported</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Architecture Diagram */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F1F5F9]">
              Enterprise Network{' '}
              <span className="text-[#3B82F6]">Architecture</span>
            </h2>
            <p className="text-xl text-[#E2E8F0] max-w-3xl mx-auto">
              Our comprehensive network solutions include Active Directory, Domain Controllers, DNS, DHCP, and advanced security infrastructure.
            </p>
          </div>
          
          {/* Network Topology Diagram */}
          <div className="relative bg-[#1E293B] rounded-3xl p-12 border border-[#1E293B] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] to-[#0F172A] opacity-50"></div>
            
            {/* Network Diagram */}
            <div className="relative z-10">
              {/* Internet/Cloud Layer */}
              <div className="text-center mb-10 md:mb-16">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded-2xl text-white font-semibold">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Internet / Cloud Services
                </div>
              </div>

              {/* Firewall Layer */}
              <div className="flex justify-center mb-8 md:mb-12">
                <div className="bg-gradient-to-r from-[#EF4444] to-[#DC2626] rounded-2xl p-6 text-white">
                  <div className="flex items-center">
                    <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
                    <div>
                      <div className="font-bold text-lg">Enterprise Firewall</div>
                      <div className="text-sm opacity-90">Next-Gen Security</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Network Layer */}
              <div className="grid md:grid-cols-3 gap-8 mb-8 md:mb-12">
                {/* Domain Controller */}
                <div className="bg-gradient-to-br from-[#10B981] to-[#059669] rounded-2xl p-6 text-white">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="font-bold text-lg mb-2">Domain Controller</div>
                    <div className="text-sm opacity-90">Active Directory</div>
                    <div className="text-xs opacity-75 mt-2">• Authentication<br/>• Authorization<br/>• Group Policy</div>
                  </div>
                </div>

                {/* DNS Server */}
                <div className="bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-2xl p-6 text-white">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                      </svg>
                    </div>
                    <div className="font-bold text-lg mb-2">DNS Server</div>
                    <div className="text-sm opacity-90">Domain Name System</div>
                    <div className="text-xs opacity-75 mt-2">• Name Resolution<br/>• Load Balancing<br/>• Caching</div>
                  </div>
                </div>

                {/* DHCP Server */}
                <div className="bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-2xl p-6 text-white">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                      </svg>
                    </div>
                    <div className="font-bold text-lg mb-2">DHCP Server</div>
                    <div className="text-sm opacity-90">Dynamic Host Config</div>
                    <div className="text-xs opacity-75 mt-2">• IP Assignment<br/>• Lease Management<br/>• Reservations</div>
                  </div>
                </div>
              </div>

              {/* Access Layer */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Core Switch */}
                <div className="bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-2xl p-6 text-white">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                      </svg>
                    </div>
                    <div className="font-bold text-lg mb-2">Core Switch</div>
                    <div className="text-sm opacity-90">High-Performance Switching</div>
                    <div className="text-xs opacity-75 mt-2">• Layer 3 Routing<br/>• VLAN Management<br/>• QoS</div>
            </div>
          </div>
          
                {/* Access Points */}
                <div className="bg-gradient-to-br from-[#EC4899] to-[#DB2777] rounded-2xl p-6 text-white">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
                    </div>
                    <div className="font-bold text-lg mb-2">Wi-Fi Access Points</div>
                    <div className="text-sm opacity-90">Wireless Connectivity</div>
                    <div className="text-xs opacity-75 mt-2">• Wi-Fi 6E<br/>• Centralized Management<br/>• Security</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Services */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 md:mb-20 text-center text-[#F1F5F9]">
            Core Network{' '}
            <span className="text-[#3B82F6]">Services</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: "Active Directory",
                description: "Centralized user management and authentication",
                features: ["User Authentication", "Group Policy", "Single Sign-On", "Security Policies"],
                color: "from-[#10B981] to-[#059669]"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                ),
                title: "DNS Services",
                description: "Domain name resolution and management",
                features: ["Name Resolution", "Load Balancing", "Caching", "Security"],
                color: "from-[#8B5CF6] to-[#7C3AED]"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                ),
                title: "DHCP Services",
                description: "Automatic IP address management",
                features: ["IP Assignment", "Lease Management", "Reservations", "Options"],
                color: "from-[#F59E0B] to-[#D97706]"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
                ),
                title: "Network Security",
                description: "Advanced threat protection and monitoring",
                features: ["Firewall Rules", "Intrusion Detection", "VPN Access", "Monitoring"],
                color: "from-[#EF4444] to-[#DC2626]"
              }
            ].map((service, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-8 bg-[#1E293B] rounded-2xl border border-[#1E293B] hover:border-[#3B82F6]/30 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[#3B82F6]/10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#F1F5F9] text-center">{service.title}</h3>
                  <p className="text-[#E2E8F0] text-center mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-[#94A3B8]">
                        <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 md:mb-20 text-center text-[#F1F5F9]">
            Our Networking{' '}
            <span className="text-[#3B82F6]">Solutions</span>
          </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Branch Networks */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-10 bg-[#1E293B] rounded-3xl border border-[#1E293B] hover:border-[#3B82F6]/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#3B82F6]/10">
                <div className="flex items-center mb-8 md:mb-12">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🏢</span>
              </div>
                  <h3 className="text-2xl font-bold text-[#F1F5F9]">Branch Networks</h3>
            </div>
            
                <div className="space-y-6">
                  {[
                    "Secure branch-to-HQ connectivity with VPN tunnels",
                    "Optimized SD-WAN deployment for cost efficiency",
                    "Centralized management for distributed sites",
                    "Redundant connections for maximum uptime"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start group/item">
                      <div className="w-6 h-6 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover/item:scale-110 transition-transform duration-200">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
              </div>
                      <p className="text-[#E2E8F0] text-lg">{feature}</p>
              </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Campus Networks */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-10 bg-[#1E293B] rounded-3xl border border-[#1E293B] hover:border-[#3B82F6]/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#3B82F6]/10">
                <div className="flex items-center mb-8 md:mb-12">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🎓</span>
              </div>
                  <h3 className="text-2xl font-bold text-[#F1F5F9]">Campus Networks</h3>
            </div>
            
                <div className="space-y-6">
                  {[
                    "High-performance LAN and Wi-Fi infrastructure",
                    "Scalable architecture for thousands of users",
                    "Secure access for staff, students, and devices",
                    "Advanced network segmentation and security"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start group/item">
                      <div className="w-6 h-6 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover/item:scale-110 transition-transform duration-200">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-[#E2E8F0] text-lg">{feature}</p>
              </div>
                  ))}
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 md:mb-20 text-center text-[#F1F5F9]">
            Cutting-Edge{' '}
            <span className="text-[#3B82F6]">Technologies</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "SD-WAN", desc: "Software-defined wide area networking", icon: "🌐" },
              { name: "Wi-Fi 6E", desc: "Latest wireless technology", icon: "📶" },
              { name: "Network Security", desc: "Advanced threat protection", icon: "🔒" },
              { name: "Cloud Integration", desc: "Seamless cloud connectivity", icon: "☁️" }
            ].map((tech, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-8 bg-[#1E293B] rounded-2xl border border-[#1E293B] hover:border-[#3B82F6]/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#3B82F6]/10 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-[#F1F5F9]">{tech.name}</h3>
                  <p className="text-[#E2E8F0]">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 md:mb-20 text-center text-[#F1F5F9]">
            Benefits of Networking with{' '}
            <span className="text-[#3B82F6]">Zivara</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Faster Connectivity", desc: "More reliable network performance", icon: "⚡" },
              { title: "Improved Collaboration", desc: "Across all locations", icon: "🤝" },
              { title: "Scalable Architecture", desc: "For future growth", icon: "📈" },
              { title: "Stronger Security", desc: "At every level", icon: "🛡️" },
              { title: "Expert Support", desc: "Design, deployment, and ongoing support", icon: "👨‍💻" },
              { title: "Cost Optimization", desc: "Reduce operational expenses", icon: "💰" }
            ].map((benefit, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-8 bg-[#1E293B] rounded-2xl border border-[#1E293B] hover:border-[#3B82F6]/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#3B82F6]/10 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-[#F1F5F9]">{benefit.title}</h3>
                  <p className="text-[#E2E8F0]">{benefit.desc}</p>
          </div>
          </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E293B]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/10 to-[#10B981]/10"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 right-10 w-32 h-32 bg-[#3B82F6]/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#10B981]/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="relative z-10 text-center p-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F1F5F9]">
                Transform your network into a driver of{' '}
                <span className="text-[#3B82F6]">business success</span>
        </h2>
              <p className="text-xl text-[#E2E8F0] mb-10 max-w-3xl mx-auto">
          Start your networking project today and build the foundation for digital transformation.
        </p>
        <a
          href="/contact"
                className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-2xl hover:from-[#10B981] hover:to-[#059669] transition-all duration-300 shadow-2xl hover:shadow-[#3B82F6]/25 hover:scale-105"
              >
                <span className="mr-3">🚀</span>
                Start Your Networking Project Today
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Networking;