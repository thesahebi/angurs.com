import React from "react";

const Cloud: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-24 bg-gradient-to-br from-[#1f2937] via-gray-800 to-[#111827] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex px-4 py-2 text-sm font-medium text-[#e95420] bg-[#e95420]/20 border border-[#e95420]/30 rounded-full mb-6 backdrop-blur-sm">
              ☁️ Cloud Solutions
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-[#e95420] to-[#d1451a] bg-clip-text text-transparent">
                Cloud Power
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Scale infinitely, secure everything, and innovate faster with our comprehensive cloud migration and management services.
            </p>
            
            <div className="flex justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-[#e95420] hover:bg-[#d1451a] rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
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
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-4">
              Why Choose Our{' '}
              <span className="bg-gradient-to-r from-[#e95420] to-[#d1451a] bg-clip-text text-transparent">
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
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-[#1f2937] mb-3">{feature.title}</h3>
                <ul className="space-y-1 text-sm text-[#6b7280]">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#e95420] rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-4">
              What Our{' '}
              <span className="bg-gradient-to-r from-[#e95420] to-[#d1451a] bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { name: "John Smith", role: "CTO, TechCorp", quote: "40% cost reduction with seamless migration and improved performance." },
              { name: "Maria Johnson", role: "IT Director, InnovateLabs", quote: "Zero downtime AWS migration with outstanding expertise and support." },
              { name: "David Rodriguez", role: "CEO, CloudFirst Solutions", quote: "Security-first Azure approach gave us complete confidence." }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#e95420] to-[#d1451a] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-[#1f2937] text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-[#6b7280]">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-[#6b7280] leading-relaxed">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA, Certificates & Code Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* CTA and Certificates */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-6">
              Scale your APIs with{' '}
              <span className="bg-gradient-to-r from-[#e95420] to-[#d1451a] bg-clip-text text-transparent">
                confidence.
              </span>
            </h2>
            <p className="text-lg text-[#6b7280] mb-8 max-w-2xl mx-auto">
              Start for free or book a demo with our team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#e95420] hover:bg-[#d1451a] rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Book a demo
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#e95420] border-2 border-[#e95420] hover:bg-[#e95420] hover:text-white rounded-xl transition-all duration-200"
              >
                Start for Free
              </a>
            </div>

            {/* Certificates */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* SOC 2 Certificate */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-green-800 mb-2">SOC 2 TYPE 2</h3>
                  <p className="text-sm text-green-700">Security & Compliance</p>
                </div>
              </div>

              {/* High Performer Certificate */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-blue-800 mb-2">High Performer</h3>
                  <p className="text-sm text-blue-700">Spring 2025</p>
                </div>
              </div>

              {/* Momentum Leader Certificate */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-purple-800 mb-2">Momentum Leader</h3>
                  <p className="text-sm text-purple-700">Spring 2025</p>
                </div>
              </div>

              {/* Best ROI Certificate */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-yellow-800 mb-2">Best Estimated ROI</h3>
                  <p className="text-sm text-yellow-700">Spring 2025</p>
                </div>
              </div>

              {/* Easiest To Use Certificate */}
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-2 border-indigo-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-indigo-800 mb-2">Easiest To Use</h3>
                  <p className="text-sm text-indigo-700">Spring 2025</p>
                </div>
              </div>

              {/* Fastest Implementation Certificate */}
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 border-2 border-pink-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-pink-800 mb-2">Fastest Implementation</h3>
                  <p className="text-sm text-pink-700">Spring 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Code & Setup Section */}
          <div>
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-4">
                Secure Cloud{' '}
                <span className="bg-gradient-to-r from-[#e95420] to-[#d1451a] bg-clip-text text-transparent">
                  Implementation
                </span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Code Snippet */}
              <div className="bg-[#0f172a] rounded-xl p-6 shadow-2xl border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-400">api_setup.py</span>
                </div>
                
                <div className="bg-[#0a0e1a] rounded-lg p-4 overflow-x-auto">
                  <pre className="text-xs text-gray-300 leading-relaxed">
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
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#e95420] to-[#d1451a] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1f2937] mb-2">Set up In Minutes</h3>
                      <p className="text-[#6b7280] leading-relaxed">
                        Import your API spec—or start from scratch in minutes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1f2937] mb-2">Define your rules</h3>
                      <p className="text-[#6b7280] leading-relaxed">
                        Add auth, rate limiting, logging, and more—code or no-code.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1f2937] mb-2">Deploy to the Edge</h3>
                      <p className="text-[#6b7280] leading-relaxed">
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

    </div>
  );
};

export default Cloud;


