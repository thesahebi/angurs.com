import FeatureCardV1 from "./FeatureCardV1";
import { featureData } from "./feature-data";





const FeatureV1 = () => {
  return (
    <section className="py-20 md:py-32 bg-[#121212] relative overflow-hidden" id="features">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#3B82F6]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff6b35]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#8B5CF6]/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center px-6 py-3 text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-[#3B82F6] rounded-full mr-3 animate-pulse"></span>
            🚀 Our Solutions
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Empowering Your Business with{' '}
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#ff6b35] bg-clip-text text-transparent">
              Smart Technology
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-[#E2E8F0] max-w-3xl mx-auto leading-relaxed mb-12">
            Fueling growth for businesses with intelligent, scalable technology solutions that adapt to your needs and drive success.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#3B82F6] mb-2">500+</div>
              <div className="text-sm text-[#94A3B8]">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#ff6b35] mb-2">99.9%</div>
              <div className="text-sm text-[#94A3B8]">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#8B5CF6] mb-2">24/7</div>
              <div className="text-sm text-[#94A3B8]">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#10B981] mb-2">50+</div>
              <div className="text-sm text-[#94A3B8]">Expert Team</div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-20">
          {featureData.map((data, index) => {
            return (
              <div key={data.id} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-[#1E293B] rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#3B82F6]/10 group-hover:-translate-y-2">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {typeof data.icon === "function" ? (
                          <data.icon className="w-8 h-8 text-white" />
                        ) : (
                          data.icon
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#3B82F6] transition-colors duration-300">
                        {data.title}
                      </h3>
                      <p className="text-[#E2E8F0] leading-relaxed">
                        {data.content}
                      </p>
                      <div className="mt-4">
                        <span className="inline-flex items-center text-[#3B82F6] text-sm font-medium group-hover:text-[#ff6b35] transition-colors duration-300">
                          Learn More
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E293B] to-[#0F172A] rounded-3xl"></div>
          <div className="relative bg-gradient-to-r from-[#1E293B]/80 to-[#0F172A]/80 backdrop-blur-sm rounded-3xl p-12 md:p-16 border border-white/10">
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 text-sm font-medium text-[#ff6b35] bg-[#ff6b35]/10 border border-[#ff6b35]/20 rounded-full mb-8">
                <span className="w-2 h-2 bg-[#ff6b35] rounded-full mr-3 animate-pulse"></span>
                Ready to Get Started?
              </div>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your{' '}
                <span className="bg-gradient-to-r from-[#ff6b35] to-[#3B82F6] bg-clip-text text-transparent">
                  Business?
                </span>
              </h3>
              
              <p className="text-lg md:text-xl text-[#E2E8F0] mb-12 max-w-3xl mx-auto leading-relaxed">
                Let's discuss how our solutions can help you achieve your goals and scale your operations with cutting-edge technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch w-full max-w-2xl mx-auto">
                <a
                  href="tel:+16309234653"
                  className="group relative inline-flex items-center justify-center w-full sm:w-1/2 px-8 py-4 text-lg font-semibold text-white border border-white/20 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#ff6b35]/20"
                  style={{ backgroundColor: '#ff6b35' }}
                >
                  <span className="mr-3">📞</span>
                  Get a Demo Consultant Call
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="/contact"
                  className="group relative inline-flex items-center justify-center w-full sm:w-1/2 px-8 py-4 text-lg font-semibold text-white border-2 border-white/20 hover:border-white/30 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/10"
                >
                  <span className="mr-3">💬</span>
                  Learn More
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureV1;




