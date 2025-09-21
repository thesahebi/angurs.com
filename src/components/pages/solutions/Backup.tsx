import React from "react";

const Backup: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
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
              💾 Enterprise Backup Solutions
            </div>
            
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#e7e7e7] mb-4 sm:mb-6">
              Protect What{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-[#3b82f6] to-[#3b82f6] bg-clip-text text-transparent">
                  Matters Most
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#3b82f6] to-[#3b82f6] rounded-full opacity-60"></div>
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#e7e7e7] max-w-2xl mx-auto mb-6 sm:mb-8">
              Your data is the lifeline of your business. Zivara delivers enterprise-grade backup and replication solutions, 
              on-premises and in the cloud, to keep you secure, compliant, and resilient.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch w-full max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              <a
                href="/contact"
                className="inline-flex items-center justify-center w-full sm:w-1/2 px-6 sm:px-8 py-3 sm:py-4 text-base font-semibold text-[#e7e7e7] bg-[#3b82f6] border border-[#3b82f6] rounded-xl transition-all duration-200 hover:bg-[#2563eb] hover:border-[#2563eb]"
              >
                Get Protected Now
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center w-full sm:w-1/2 px-6 sm:px-8 py-3 sm:py-4 text-base font-semibold text-[#e7e7e7] border-2 border-[#1E293B] hover:border-[#3B82F6] rounded-xl transition-all duration-200 hover:text-[#3B82F6]"
              >
                View Solutions
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3B82F6] mb-1 sm:mb-2">99.9%</div>
                <div className="text-xs sm:text-sm text-[#e7e7e7]">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3B82F6] mb-1 sm:mb-2">&lt;1min</div>
                <div className="text-xs sm:text-sm text-[#e7e7e7]">Recovery Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3B82F6] mb-1 sm:mb-2">24/7</div>
                <div className="text-xs sm:text-sm text-[#e7e7e7]">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3B82F6] mb-1 sm:mb-2">100%</div>
                <div className="text-xs sm:text-sm text-[#e7e7e7]">Secure</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Backup Matters */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[#e7e7e7]">
              Why Backup & Replication{' '}
              <span className="text-[#3B82F6]">Matters</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#e7e7e7] max-w-3xl mx-auto">
            Disruptions happen. Without reliable backup and recovery, businesses face data loss, 
            downtime, and compliance risks. Our solutions ensure you:
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
                ),
                title: "Stay Protected",
                description: "Against data loss and corruption",
                color: "from-[#3B82F6] to-[#2563EB]"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
                ),
                title: "Recover Instantly",
                description: "With near-zero downtime",
                color: "from-[#10B981] to-[#059669]"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
                ),
                title: "Remain Compliant",
                description: "With industry regulations",
                color: "from-[#F59E0B] to-[#D97706]"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
                ),
                title: "Gain Peace of Mind",
                description: "Knowing your data is always secure",
                color: "from-[#8B5CF6] to-[#7C3AED]"
              }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-4 sm:p-6 bg-[#1E293B] rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className={`w-[40px] h-[40px] bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-[#e7e7e7] w-[40px] h-[40px]">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#e7e7e7] text-center">{item.title}</h3>
                  <p className="text-sm sm:text-base text-[#e7e7e7] text-center">{item.description}</p>
                </div>
            </div>
            ))}
          </div>
          
          {/* Enterprise Solutions Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mt-12 sm:mt-16">
            {/* On-Prem Backup */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-4 sm:p-6 bg-[#1E293B] rounded-2xl sm:rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500">
                <div className="flex flex-col sm:flex-row items-center mb-6 sm:mb-8 md:mb-12">
                  <div className="w-[40px] h-[40px] bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-2xl flex items-center justify-center mr-0 sm:mr-6 mb-4 sm:mb-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl sm:text-3xl">💽</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#e7e7e7] text-center sm:text-left">On-Prem Backup & Replication</h3>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  {[
                    "High-performance local backups with zero downtime",
                    "Disaster recovery for critical workloads",
                    "Data redundancy built into your infrastructure",
                    "Advanced encryption and security protocols"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start group/item">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-0.5 group-hover/item:scale-110 transition-transform duration-200">
                        <svg className="w-3 h-3 text-[#e7e7e7]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-sm sm:text-base lg:text-lg text-[#e7e7e7]">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cloud Backup */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-4 sm:p-6 bg-[#1E293B] rounded-2xl sm:rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500">
                <div className="flex flex-col sm:flex-row items-center mb-6 sm:mb-8 md:mb-12">
                  <div className="w-[40px] h-[40px] bg-gradient-to-br from-[#10B981] to-[#059669] rounded-2xl flex items-center justify-center mr-0 sm:mr-6 mb-4 sm:mb-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl sm:text-3xl">☁️</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#e7e7e7] text-center sm:text-left">Cloud Backup & Replication</h3>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  {[
                    "Secure, scalable storage in the cloud",
                    "Instant failover in case of outages",
                    "Accessible anywhere, anytime",
                    "Automated backup scheduling and management"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start group/item">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-0.5 group-hover/item:scale-110 transition-transform duration-200">
                        <svg className="w-3 h-3 text-[#e7e7e7]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-sm sm:text-base lg:text-lg text-[#e7e7e7]">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 lg:mb-16 text-center text-[#e7e7e7]">
            Benefits of Backup with{' '}
            <span className="text-[#3B82F6]">Zivara</span>
          </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Business Continuity", desc: "During disasters and disruptions", icon: "🛡️" },
              { title: "Faster Recovery", desc: "And minimal downtime", icon: "⚡" },
              { title: "Flexible Storage", desc: "Options for every need", icon: "💾" },
              { title: "Cost-Efficient", desc: "Protection that fits your budget", icon: "💰" },
              { title: "Expert Setup", desc: "And ongoing monitoring", icon: "👨‍💻" },
              { title: "24/7 Support", desc: "Always here when you need us", icon: "🔄" }
            ].map((benefit, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-4 sm:p-6 bg-[#1E293B] rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 text-center">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#e7e7e7]">{benefit.title}</h3>
                  <p className="text-sm sm:text-base text-[#e7e7e7]">{benefit.desc}</p>
          </div>
          </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default Backup;