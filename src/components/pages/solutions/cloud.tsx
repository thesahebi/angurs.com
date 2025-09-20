import React from "react";

const Cloud: React.FC = () => {
  return (
    <main className="min-h-screen bg-surface-dark">
      {/* Header */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-24 bg-surface-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex px-4 py-2 text-sm font-medium text-primary bg-primary/20 border border-primary/30 rounded-full mb-6 backdrop-blur-sm">
              ☁️ Cloud Solutions
            </div>
            
            <h1 className="hero-title text-primary">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Cloud Power
              </span>
            </h1>
            
            <p className="hero-description text-secondary max-w-2xl mx-auto">
              Scale infinitely, secure everything, and innovate faster with our comprehensive cloud migration and management services.
            </p>
            
            <div className="flex justify-center">
              <a
                href="/contact"
                className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white border border-white/20 rounded-xl transition-all duration-200"
              >
                Start Your Migration
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 md:py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 md:mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-4">
              Why Choose Our{' '}
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#d1451a] bg-clip-text text-transparent">
                Cloud Solutions
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: "📈", title: "Infinite Scalability", items: ["Auto-scaling", "Pay-as-you-grow", "Global zones"] },
              { icon: "🔒", title: "Enterprise Security", items: ["End-to-end encryption", "Multi-factor auth", "Compliance"] },
              { icon: "💰", title: "Cost Optimization", items: ["Resource right-sizing", "Reserved instances", "Cost monitoring"] },
              { icon: "⚡", title: "Zero Downtime", items: ["Blue-green deployments", "Real-time sync", "Rollback"] },
              { icon: "📊", title: "24/7 Monitoring", items: ["Proactive detection", "Performance analytics", "Automated alerts"] },
              { icon: "👥", title: "Expert Support", items: ["Certified architects", "Account managers", "Training"] }
            ].map((feature, index) => (
              <div key={index} className="bg-[#1E293B] rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-[#F1F5F9] mb-3">{feature.title}</h3>
                <ul className="space-y-1 text-sm text-[#E2E8F0]">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code & Setup Section */}
      <section className="py-16 md:py-16 md:py-24 bg-[#1E293B]">
        <div className="container mx-auto px-4">
          {/* Code & Setup Section */}
          <div>
            <div className="text-center mb-8 md:mb-12 md:mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-4">
                Secure Cloud{' '}
                <span className="bg-gradient-to-r from-[#3B82F6] to-[#d1451a] bg-clip-text text-transparent">
                  Implementation
                </span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Code Snippet */}
              <div className="bg-[#0f172a] rounded-xl p-4 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-[#94A3B8]">api_setup.py</span>
                </div>
                
                <div className="bg-[#0a0e1a] rounded-lg p-4 overflow-x-auto">
                  <pre className="text-xs text-[#E2E8F0] leading-relaxed">
                    <code>
{`from cloud_gateway import Gateway

# Initialize gateway
gateway = Gateway()

# Import API spec
gateway.import_spec("api.yaml")

# Add security rules
gateway.add_auth("jwt")
gateway.add_rate_limit("1000/hour")

# Deploy to edge
gateway.deploy()

print("API live in 30 seconds!")`}
                    </code>
                  </pre>
                </div>
              </div>

              {/* Setup Steps */}
              <div className="space-y-6">
                <div className="bg-[#1E293B] rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#d1451a] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#F1F5F9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#F1F5F9] mb-2">Set up In Minutes</h3>
                      <p className="text-[#E2E8F0] leading-relaxed">
                        Import your API spec—or start from scratch in minutes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1E293B] rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#F1F5F9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#F1F5F9] mb-2">Define your rules</h3>
                      <p className="text-[#E2E8F0] leading-relaxed">
                        Add auth, rate limiting, logging, and more—code or no-code.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1E293B] rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#F1F5F9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#F1F5F9] mb-2">Deploy to the Edge</h3>
                      <p className="text-[#E2E8F0] leading-relaxed">
                        Go live instantly, with global scale by default.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Cloud;


