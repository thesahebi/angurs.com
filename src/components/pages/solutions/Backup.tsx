import React from "react";

const Backup: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] via-[#121212] to-[#0F172A]"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#3B82F6]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#3B82F6]/15 rounded-full blur-2xl animate-pulse delay-500"></div>
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
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#F1F5F9] mb-6 md:mb-8 leading-tight">
              Protect What{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent">
                  Matters Most
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded-full opacity-60"></div>
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-sm md:text-base lg:text-lg text-[#E2E8F0] max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10">
              Your data is the lifeline of your business. Zivara delivers enterprise-grade backup and replication solutions, 
              on-premises and in the cloud, to keep you secure, compliant, and resilient.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch w-full max-w-2xl mx-auto mb-8 md:mb-12 md:mb-20">
              <a
                href="/contact"
                className="inline-flex items-center justify-center w-full sm:w-1/2 px-8 py-4 text-lg font-semibold text-white border border-white/20 rounded-xl transition-all duration-200 hover:bg-[#e95420]"
                style={{ backgroundColor: '#ff6b35' }}
              >
                Get Protected Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center w-full sm:w-1/2 px-8 py-4 text-lg font-semibold text-[#F1F5F9] border-2 border-[#1E293B] hover:border-[#3B82F6] rounded-xl transition-all duration-200 hover:text-[#3B82F6]"
              >
                View Solutions
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#3B82F6] mb-2">99.9%</div>
                <div className="text-sm text-[#94A3B8]">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#3B82F6] mb-2">&lt;1min</div>
                <div className="text-sm text-[#94A3B8]">Recovery Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#3B82F6] mb-2">24/7</div>
                <div className="text-sm text-[#94A3B8]">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#3B82F6] mb-2">100%</div>
                <div className="text-sm text-[#94A3B8]">Secure</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Backup Matters */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F1F5F9]">
              Why Backup & Replication{' '}
              <span className="text-[#3B82F6]">Matters</span>
            </h2>
            <p className="text-xl text-[#E2E8F0] max-w-3xl mx-auto">
            Disruptions happen. Without reliable backup and recovery, businesses face data loss, 
            downtime, and compliance risks. Our solutions ensure you:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-4 bg-[#1E293B] rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#F1F5F9] text-center">{item.title}</h3>
                  <p className="text-[#E2E8F0] text-center">{item.description}</p>
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
            Our Backup & Replication{' '}
            <span className="text-[#3B82F6]">Solutions</span>
          </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
            {/* On-Prem Backup */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-6 bg-[#1E293B] rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500">
                <div className="flex items-center mb-8 md:mb-12">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">💽</span>
              </div>
                  <h3 className="text-2xl font-bold text-[#F1F5F9]">On-Prem Backup & Replication</h3>
            </div>
            
                <div className="space-y-6">
                  {[
                    "High-performance local backups with zero downtime",
                    "Disaster recovery for critical workloads",
                    "Data redundancy built into your infrastructure",
                    "Advanced encryption and security protocols"
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

            {/* Cloud Backup */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-6 bg-[#1E293B] rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500">
                <div className="flex items-center mb-8 md:mb-12">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">☁️</span>
              </div>
                  <h3 className="text-2xl font-bold text-[#F1F5F9]">Cloud Backup & Replication</h3>
            </div>
            
                <div className="space-y-6">
                  {[
                    "Secure, scalable storage in the cloud",
                    "Instant failover in case of outages",
                    "Accessible anywhere, anytime",
                    "Automated backup scheduling and management"
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

      {/* Benefits Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 md:mb-20 text-center text-[#F1F5F9]">
            Benefits of Backup with{' '}
            <span className="text-[#3B82F6]">Zivara</span>
          </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Business Continuity", desc: "During disasters and disruptions", icon: "🛡️" },
              { title: "Faster Recovery", desc: "And minimal downtime", icon: "⚡" },
              { title: "Flexible Storage", desc: "Options for every need", icon: "💾" },
              { title: "Cost-Efficient", desc: "Protection that fits your budget", icon: "💰" },
              { title: "Expert Setup", desc: "And ongoing monitoring", icon: "👨‍💻" },
              { title: "24/7 Support", desc: "Always here when you need us", icon: "🔄" }
            ].map((benefit, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-4 bg-[#1E293B] rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 text-center">
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
            <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/10 to-[#2563EB]/10"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-32 h-32 bg-[#3B82F6]/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#2563EB]/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="relative z-10 text-center p-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F1F5F9]">
                Keep your business running —{' '}
                <span className="text-[#3B82F6]">no matter what happens</span>
        </h2>
              <p className="text-xl text-[#E2E8F0] mb-10 max-w-3xl mx-auto">
          Talk to our backup specialists and get enterprise-grade protection for your critical data.
        </p>
        <a
          href="/contact"
                className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white border border-white/20 rounded-2xl transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#ff6b35' }}
              >
                <span className="mr-3">💬</span>
                Talk to Our Backup Specialists
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

export default Backup;