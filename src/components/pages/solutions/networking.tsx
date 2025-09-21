import React from "react";

const Networking: React.FC = () => {
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
              🌐 Gentle Network Harmony
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#e7e7e7] mb-3 sm:mb-4 leading-tight">
              Your Digital World's
              <span className="relative block mt-1 sm:mt-2">
                <span className="bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                  Peaceful Bridge
                </span>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#3b82f6] to-[#8B5CF6] rounded-full opacity-60"></div>
              </span>
            </h1>
            
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              Like gentle streams connecting distant shores, our networks create peaceful pathways for your data to flow. 
              Experience the serenity of seamless connectivity that brings your digital world together in perfect harmony.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#e7e7e7]/70 px-2 sm:px-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3b82f6] rounded-full animate-pulse"></div>
                <span>Gentle Flow</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#8B5CF6] rounded-full animate-pulse delay-300"></div>
                <span>Peaceful Security</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3b82f6] rounded-full animate-pulse delay-700"></div>
                <span>Harmonious Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Architecture Diagram */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3B82F6] rounded-full mr-2 animate-pulse"></span>
              ✨ Gentle Network Design
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#e7e7e7] mb-3 sm:mb-4">
              Your Peaceful
              <span className="block bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                Digital Garden
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              Like a carefully tended garden where every plant has its place, our network architecture creates a peaceful ecosystem 
              where your data flows naturally and securely through gentle pathways.
            </p>
          </div>
          
          {/* Gentle Network Garden */}
          <div className="relative bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-[#1E293B] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] opacity-50"></div>
            
            {/* Network Garden Container */}
            <div className="relative z-10">
              {/* Cloud Sky Layer */}
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <div className="inline-flex items-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-[#1A1A1A] border border-[#3B82F6]/30 rounded-2xl sm:rounded-3xl text-[#e7e7e7] font-bold text-sm sm:text-base md:text-lg shadow-lg">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#3B82F6]/20 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-lg sm:text-xl">☁️</span>
                  </div>
                  Gentle Cloud Sky
                </div>
              </div>

              {/* Connection Line */}
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="w-1 h-8 sm:h-10 md:h-12 bg-gradient-to-b from-white/20 to-white/5 rounded-full"></div>
              </div>

              {/* Gentle Guardian Layer */}
              <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
                <div className="bg-[#1A1A1A] border border-[#3B82F6]/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-[#e7e7e7] shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#3B82F6]/20 rounded-2xl flex items-center justify-center mr-0 sm:mr-4 mb-3 sm:mb-0">
                      <span className="text-lg sm:text-xl">🛡️</span>
                    </div>
                    <div className="text-center sm:text-left">
                      <div className="font-bold text-lg sm:text-xl">Gentle Guardian</div>
                      <div className="text-xs sm:text-sm opacity-90">Peaceful Protection</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connection Lines to Core Services */}
              <div className="flex justify-center mb-8">
                <div className="flex space-x-8">
                  <div className="w-1 h-8 bg-gradient-to-b from-white/20 to-white/5 rounded-full"></div>
                  <div className="w-1 h-8 bg-gradient-to-b from-white/20 to-white/5 rounded-full"></div>
                  <div className="w-1 h-8 bg-gradient-to-b from-white/20 to-white/5 rounded-full"></div>
                </div>
              </div>

              {/* Garden Care Services */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
                {/* Identity Garden */}
                <div className="bg-[#1A1A1A] border border-[#3B82F6]/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-[#e7e7e7] shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-[40px] h-[40px] bg-[#3B82F6]/20 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg sm:text-xl">🏠</span>
                    </div>
                    <div className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Identity Garden</div>
                    <div className="text-xs sm:text-sm opacity-90 mb-2 sm:mb-3">Gentle Directory</div>
                    <div className="text-xs opacity-75 space-y-1">
                      <div>• Peaceful Authentication</div>
                      <div>• Gentle Authorization</div>
                      <div>• Loving Group Policy</div>
                    </div>
                  </div>
                </div>

                {/* Name Harmony */}
                <div className="bg-[#1A1A1A] border border-[#8B5CF6]/30 rounded-3xl p-6 text-[#e7e7e7] shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-[40px] h-[40px] bg-[#8B5CF6]/20 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg sm:text-xl">🌐</span>
                    </div>
                    <div className="font-bold text-lg mb-2">Name Harmony</div>
                    <div className="text-sm opacity-90 mb-3">Gentle Resolution</div>
                    <div className="text-xs opacity-75 space-y-1">
                      <div>• Soft Name Resolution</div>
                      <div>• Gentle Load Balancing</div>
                      <div>• Peaceful Caching</div>
                    </div>
                  </div>
                </div>

                {/* Address Care */}
                <div className="bg-[#1A1A1A] border border-[#10B981]/30 rounded-3xl p-6 text-[#e7e7e7] shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-[40px] h-[40px] bg-[#10B981]/20 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg sm:text-xl">🏡</span>
                    </div>
                    <div className="font-bold text-lg mb-2">Address Care</div>
                    <div className="text-sm opacity-90 mb-3">Gentle Host Care</div>
                    <div className="text-xs opacity-75 space-y-1">
                      <div>• Loving IP Assignment</div>
                      <div>• Gentle Lease Management</div>
                      <div>• Reservations</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connection Lines to Access Layer */}
              <div className="flex justify-center mb-8">
                <div className="flex space-x-16">
                  <div className="w-1 h-8 bg-gradient-to-b from-white/20 to-white/5 rounded-full"></div>
                  <div className="w-1 h-8 bg-gradient-to-b from-white/20 to-white/5 rounded-full"></div>
                </div>
              </div>

              {/* Access Layer */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Core Switch */}
                <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 text-[#e7e7e7] shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-[40px] h-[40px] bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                      </svg>
                    </div>
                    <div className="font-bold text-lg mb-2">Core Switch</div>
                    <div className="text-sm opacity-90 mb-3">High-Performance Switching</div>
                    <div className="text-xs opacity-75 space-y-1">
                      <div>• Layer 3 Routing</div>
                      <div>• VLAN Management</div>
                      <div>• QoS</div>
                    </div>
                  </div>
                </div>
                
                {/* Wi-Fi Access Points */}
                <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 text-[#e7e7e7] shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-[40px] h-[40px] bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                      </svg>
                    </div>
                    <div className="font-bold text-lg mb-2">Wi-Fi Access Points</div>
                    <div className="text-sm opacity-90 mb-3">Wireless Connectivity</div>
                    <div className="text-xs opacity-75 space-y-1">
                      <div>• Wi-Fi 6E</div>
                      <div>• Centralized Management</div>
                      <div>• Security</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Services */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3B82F6] rounded-full mr-2 animate-pulse"></span>
              ✨ Gentle Care Services
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#e7e7e7] mb-3 sm:mb-4">
              Your Network's
              <span className="block bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                Loving Caretakers
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              Like gentle gardeners tending to a beautiful garden, our network services nurture and care for your digital ecosystem 
              with love, attention, and peaceful expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                emoji: "🏠",
                title: "Identity Garden",
                description: "Gentle user care and peaceful authentication",
                features: ["Peaceful Authentication", "Loving Group Policy", "Gentle Single Sign-On"],
                color: "from-[#10B981] to-[#059669]"
              },
              {
                emoji: "🌐",
                title: "Name Harmony",
                description: "Soft domain resolution and gentle management",
                features: ["Gentle Name Resolution", "Peaceful Load Balancing", "Soft Caching"],
                color: "from-[#8B5CF6] to-[#7C3AED]"
              },
              {
                emoji: "🏡",
                title: "Address Care",
                description: "Loving IP management with gentle automation",
                features: ["Gentle IP Assignment", "Peaceful Lease Care", "Loving Reservations"],
                color: "from-[#F59E0B] to-[#D97706]"
              },
              {
                emoji: "🛡️",
                title: "Peaceful Security",
                description: "Gentle protection with loving monitoring",
                features: ["Soft Firewall Rules", "Gentle Intrusion Care", "Peaceful VPN Access"],
                color: "from-[#EF4444] to-[#DC2626]"
              }
            ].map((service, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-4 sm:p-6 md:p-8 bg-[#1A1A1A] rounded-2xl sm:rounded-3xl border border-[#1E293B] hover:border-[#3B82F6]/30 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[#3B82F6]/5">
                  <div className={`w-[40px] h-[40px] bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-xl sm:text-2xl">{service.emoji}</span>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-[#e7e7e7] text-center">{service.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-[#e7e7e7]/80 text-center mb-3 sm:mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-1 sm:space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs sm:text-sm text-[#e7e7e7]/90">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#3B82F6] rounded-full mr-2 sm:mr-3"></div>
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
      <section id="solutions" className="py-12 sm:py-16 md:py-20 lg:py-24 relative bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3B82F6] rounded-full mr-2 animate-pulse"></span>
              ✨ Gentle Network Solutions
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#e7e7e7] mb-3 sm:mb-4">
              Your Peaceful
              <span className="block bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                Network Gardens
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              Like creating beautiful gardens in different spaces, we design peaceful network environments that nurture growth, 
              connection, and harmony in every corner of your digital world.
            </p>
          </div>
        
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Branch Garden */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-6 sm:p-8 md:p-10 bg-[#1A1A1A] rounded-2xl sm:rounded-3xl border border-[#1E293B] hover:border-[#3B82F6]/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#3B82F6]/5">
                <div className="flex items-center mb-6 sm:mb-8 md:mb-12">
                  <div className="w-[40px] h-[40px] bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-2xl flex items-center justify-center mr-4 sm:mr-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl sm:text-2xl md:text-3xl">🏢</span>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#e7e7e7]">Branch Garden</h3>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  {[
                    "Gentle branch-to-HQ connections with peaceful VPN tunnels",
                    "Soft SD-WAN deployment for loving cost efficiency",
                    "Centralized care for distributed garden sites",
                    "Peaceful redundant connections for gentle uptime"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start group/item">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-0.5 group-hover/item:scale-110 transition-transform duration-200">
                        <svg className="w-2 h-2 sm:w-3 sm:h-3 text-[#e7e7e7]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7]/90 leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Campus Garden */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-6 sm:p-8 md:p-10 bg-[#1A1A1A] rounded-2xl sm:rounded-3xl border border-[#1E293B] hover:border-[#8B5CF6]/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#8B5CF6]/5">
                <div className="flex items-center mb-6 sm:mb-8 md:mb-12">
                  <div className="w-[40px] h-[40px] bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-2xl flex items-center justify-center mr-4 sm:mr-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl sm:text-2xl md:text-3xl">🎓</span>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#e7e7e7]">Campus Garden</h3>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  {[
                    "Peaceful LAN and Wi-Fi infrastructure that nurtures growth",
                    "Gentle architecture that scales with loving care",
                    "Soft access for staff, students, and cherished devices",
                    "Advanced network segmentation with peaceful security"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start group/item">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-0.5 group-hover/item:scale-110 transition-transform duration-200">
                        <svg className="w-2 h-2 sm:w-3 sm:h-3 text-[#e7e7e7]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7]/90 leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3B82F6] rounded-full mr-2 animate-pulse"></span>
              ✨ Gentle Technology Tools
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#e7e7e7] mb-3 sm:mb-4">
              Your Network's
              <span className="block bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                Peaceful Tools
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              Like gentle tools in a master gardener's hands, our technology stack nurtures your network with care, 
              precision, and loving attention to every detail.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { name: "Gentle SD-WAN", desc: "Soft software-defined networking", icon: "🌐" },
              { name: "Peaceful Wi-Fi 6E", desc: "Latest wireless harmony", icon: "📶" },
              { name: "Loving Security", desc: "Gentle threat protection", icon: "🔒" },
              { name: "Cloud Harmony", desc: "Seamless cloud connection", icon: "☁️" }
            ].map((tech, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-4 sm:p-6 md:p-8 bg-[#1A1A1A] rounded-2xl sm:rounded-3xl border border-[#1E293B] hover:border-[#3B82F6]/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#3B82F6]/5 text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-[#e7e7e7]">{tech.name}</h3>
                  <p className="text-[#e7e7e7]">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3B82F6] rounded-full mr-2 animate-pulse"></span>
              💙 Your Peaceful Journey
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#e7e7e7] mb-3 sm:mb-4">
              Rest Easy with
              <span className="block bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                Zivara's Care
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              Like a gentle lullaby for your digital world, our networking solutions sing you to sleep with the sweet melody of connectivity and peace.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { title: "Gentle Connectivity", desc: "Peaceful network performance", icon: "⚡" },
              { title: "Loving Collaboration", desc: "Harmony across all locations", icon: "🤝" },
              { title: "Peaceful Growth", desc: "Gentle architecture for the future", icon: "📈" },
              { title: "Soft Security", desc: "Loving protection at every level", icon: "🛡️" },
              { title: "Caring Support", desc: "Gentle design, deployment, and ongoing care", icon: "👼" },
              { title: "Gentle Investment", desc: "Peaceful cost optimization", icon: "💰" }
            ].map((benefit, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-4 sm:p-6 md:p-8 bg-[#1A1A1A] rounded-2xl sm:rounded-3xl border border-[#1E293B] hover:border-[#3B82F6]/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#3B82F6]/5 text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-[#e7e7e7]">{benefit.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-[#e7e7e7]/80 leading-relaxed">{benefit.desc}</p>
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

      {/* Final Peace Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#0A0A0A] to-[#1A1A1A]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/10 to-[#8B5CF6]/10"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 right-10 w-32 h-32 sm:w-48 sm:h-48 bg-[#3B82F6]/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 sm:w-64 sm:h-64 bg-[#8B5CF6]/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="relative z-10 text-center p-8 sm:p-12 md:p-16">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3B82F6] rounded-full mr-2 animate-pulse"></span>
                💙 Begin Your Peaceful Journey
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 text-[#e7e7e7]">
                Transform your network into a{' '}
                <span className="bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                  peaceful success story
                </span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
                Start your gentle networking journey today and build the peaceful foundation for your digital transformation.
              </p>
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-[#e7e7e7] bg-[#3B82F6] border border-[#3B82F6] rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-[#2563eb] hover:border-[#2563eb] hover:scale-105"
              >
                <span className="mr-2 sm:mr-3">🌱</span>
                Begin Your Peaceful Journey
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Networking;