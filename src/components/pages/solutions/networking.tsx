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
              Smart Networking
              <span className="relative block mt-1 sm:mt-2">
                <span className="bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                  Built Around You
                </span>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#3b82f6] to-[#8B5CF6] rounded-full opacity-60"></div>
              </span>
            </h1>
            
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              From software-defined networking to server setup and system tuning, we design and manage networks that keep your business connected, secure, and running at its best
            </p>
            
            {/* Trust Indicators */}
            {/* <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#e7e7e7]/70 px-2 sm:px-0">
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
            </div> */}
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
              Network Services
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#e7e7e7] mb-3 sm:mb-4">
              Comprehensive
              <span className="block bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                Network Solutions
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              We deliver end-to-end networking solutions to simplify and strengthen your IT infrastructure. Whether you need a complete network design, server management, or operating system deployment, our experts ensure your systems work seamlessly together
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                emoji: "🏠",
                title: "Software-Defined Networking (SDN)",
                description: "Centralized control for all your network equipment, giving you better visibility, efficiency, and scalability.",
                features: ["Cisco DNA Center, Aruba Central"],
                color: "from-[#10B981] to-[#059669]"
              },
              {
                emoji: "🌐",
                title: "Network Architecture & Design",
                description: "We plan and build secure, reliable networks tailored to your business—whether on-premises, cloud, or hybrid",
                features: ["Juniper Networks, Ubiquiti Networks"],
                color: "from-[#8B5CF6] to-[#7C3AED]"
              },
              {
                emoji: "🏡",
                title: "Server Setup & Management",
                description: "Install, configure, upgrade, or downgrade servers with ease. We make sure your systems are always optimized",
                features: ["Dell PowerEdge Servers, HPE ProLiant Servers"],
                color: "from-[#F59E0B] to-[#D97706]"
              },
              {
                emoji: "🛡️",
                title: "Operating System Deployment",
                description: "Windows, Linux, or other platforms—we install and configure the right OS for your servers and devices",
                features: ["Microsoft Windows Server, Enterprise Linux"],
                color: "from-[#EF4444] to-[#DC2626]"
              }
            ].map((service, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-6 sm:p-8 bg-[#1A1A1A] rounded-3xl border border-[#1A1A1A] hover:border-[#3b82f6]/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3b82f6]/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#3b82f6] to-[#8B5CF6] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{service.emoji}</span>
                  </div>
                  <div className="text-center mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#e7e7e7] mb-2 group-hover:text-[#3b82f6] transition-colors duration-300" style={{ fontSize: '24px' }}>
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#e7e7e7]/70 mb-3 sm:mb-4" style={{ fontSize: '20px' }}>
                      {service.description}
                    </p>
                    <div className="w-12 h-1 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] rounded-full"></div>
                  </div>
                  <ul className="space-y-1 sm:space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs sm:text-sm text-[#e7e7e7]/90">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#3B82F6] rounded-full mr-2 sm:mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
              Why Choose
              <span className="block bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                Zivara
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              Whether you’re building from scratch or improving what you already have, we create a reliable, scalable foundation for your digital operations
            </p>
          </div>
        
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-12">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-6 sm:p-8 md:p-10 bg-[#1A1A1A] rounded-2xl sm:rounded-3xl border border-[#1E293B] hover:border-[#3B82F6]/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#3B82F6]/5">
                <div className="space-y-4 sm:space-y-6">
                  {[
                    "Expertise across networking, servers, and operating systems",
                    "Tailored solutions that grow with your business",
                    "Proactive patching and tuning for security and performance",
                    "Centralized management for simplified IT operations"
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
          </div>
        </div>
      </section>


    </main>
  );
};

export default Networking;