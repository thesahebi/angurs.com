import React from "react";

const Backup: React.FC = () => {
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
              💾 Peace of Mind Protection
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#e7e7e7] mb-3 sm:mb-4 leading-tight">
              Your Data's Gentle
              <span className="relative block mt-1 sm:mt-2">
                <span className="bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                  Guardian Angel
                </span>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#3b82f6] to-[#8B5CF6] rounded-full opacity-60"></div>
              </span>
            </h1>
            
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              Like a caring friend who never forgets, we watch over your precious data with gentle vigilance. 
              Rest easy knowing your digital memories and business treasures are always safe and sound.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#e7e7e7]/70 px-2 sm:px-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3b82f6] rounded-full animate-pulse"></div>
                <span>Always Protected</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#8B5CF6] rounded-full animate-pulse delay-300"></div>
                <span>Gentle Recovery</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3b82f6] rounded-full animate-pulse delay-700"></div>
                <span>Peaceful Sleep</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Backup Matters */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3B82F6] rounded-full mr-2 animate-pulse"></span>
              ✨ Gentle Care & Protection
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#e7e7e7] mb-3 sm:mb-4">
              Why Your Data Deserves
              <span className="block bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                Loving Protection
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              Like a warm embrace for your digital world, our backup solutions provide the comfort and security your precious data deserves. 
              Sleep peacefully knowing we're watching over everything that matters to you.
            </p>
          </div>
        
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                emoji: "🛡️",
                title: "Gentle Protection",
                description: "Like a warm blanket for your data",
                color: "from-[#3B82F6] to-[#2563EB]"
              },
              {
                emoji: "⚡",
                title: "Soft Recovery",
                description: "Gentle restoration when you need it",
                color: "from-[#10B981] to-[#059669]"
              },
              {
                emoji: "🔒",
                title: "Peaceful Compliance",
                description: "Rest easy with gentle security",
                color: "from-[#F59E0B] to-[#D97706]"
              },
              {
                emoji: "💙",
                title: "Loving Care",
                description: "Your data feels safe and cherished",
                color: "from-[#8B5CF6] to-[#7C3AED]"
              }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-4 sm:p-6 md:p-8 bg-[#1A1A1A] rounded-2xl sm:rounded-3xl border border-[#1E293B] hover:border-[#3B82F6]/30 transition-all duration-300 text-center">
                  <div className={`w-[40px] h-[40px] bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-xl sm:text-2xl">{item.emoji}</span>
                  </div>
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

          {/* Our Caring Solutions */}
          <div className="mt-8 sm:mt-12 md:mt-16">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#e7e7e7] mb-3 sm:mb-4">
                Our Gentle
                <span className="block bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                  Care Solutions
                </span>
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-[#e7e7e7]/80 max-w-xl mx-auto leading-relaxed">
                Choose the perfect embrace for your data - whether it prefers the comfort of home or the freedom of the cloud.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
              {/* Home Comfort */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-6 sm:p-8 md:p-10 bg-[#1A1A1A] rounded-2xl sm:rounded-3xl border border-[#1E293B] hover:border-[#3B82F6]/30 transition-all duration-500">
                  <div className="flex flex-col sm:flex-row items-center mb-6 sm:mb-8">
                    <div className="w-[40px] h-[40px] bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-2xl flex items-center justify-center mr-0 sm:mr-6 mb-4 sm:mb-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl sm:text-2xl">🏠</span>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#e7e7e7] text-center sm:text-left">Home Comfort Backup</h3>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-5">
                    {[
                      "Gentle local protection with zero stress",
                      "Warm disaster recovery for your peace of mind",
                      "Cozy data redundancy in your own space",
                      "Loving encryption that hugs your data tight"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start group/item">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-0.5 group-hover/item:scale-110 transition-transform duration-200">
                          <svg className="w-2 h-2 sm:w-3 sm:h-3 text-[#e7e7e7]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-xs sm:text-sm md:text-base text-[#e7e7e7]/90 leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Cloud Freedom */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-6 sm:p-8 md:p-10 bg-[#1A1A1A] rounded-2xl sm:rounded-3xl border border-[#1E293B] hover:border-[#8B5CF6]/30 transition-all duration-500">
                  <div className="flex flex-col sm:flex-row items-center mb-6 sm:mb-8">
                    <div className="w-[40px] h-[40px] bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-2xl flex items-center justify-center mr-0 sm:mr-6 mb-4 sm:mb-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl sm:text-2xl">☁️</span>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#e7e7e7] text-center sm:text-left">Cloud Freedom Backup</h3>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-5">
                    {[
                      "Soft, scalable cloud storage that grows with you",
                      "Gentle failover that catches you when you fall",
                      "Accessible anywhere, like a warm hug from afar",
                      "Automated care that never forgets to protect you"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start group/item">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-0.5 group-hover/item:scale-110 transition-transform duration-200">
                          <svg className="w-2 h-2 sm:w-3 sm:h-3 text-[#e7e7e7]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-xs sm:text-sm md:text-base text-[#e7e7e7]/90 leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Peace Section */}
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
              Like a gentle lullaby for your digital world, our backup solutions sing you to sleep with the sweet melody of security and peace.
            </p>
          </div>
        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { title: "Peaceful Continuity", desc: "Gentle protection through life's storms", icon: "🕊️" },
              { title: "Soft Recovery", desc: "Like a warm hug when you need it most", icon: "🤗" },
              { title: "Flexible Comfort", desc: "Solutions that adapt to your needs", icon: "🌙" },
              { title: "Gentle Investment", desc: "Protection that loves your budget", icon: "💝" },
              { title: "Caring Setup", desc: "Expert hands that treat you kindly", icon: "👼" },
              { title: "Always Here", desc: "A friend who never leaves your side", icon: "💫" }
            ].map((benefit, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-4 sm:p-6 md:p-8 bg-[#1A1A1A] rounded-2xl sm:rounded-3xl border border-[#1E293B] hover:border-[#3B82F6]/30 transition-all duration-300 text-center">
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

    </main>
  );
};

export default Backup;