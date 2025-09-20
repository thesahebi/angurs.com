import React, { useState, useEffect } from "react";
import { featureData } from "./feature-data";

interface FeatureV2Mode {
  isTitle: boolean;
  isContent: boolean;
  isLeft?: boolean;
  isBoth?: boolean;
  cardClass?: string;
  titleClass?: string;
}

const FeatureV2: React.FC<FeatureV2Mode> = ({
  isTitle,
  isContent,
  titleClass
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden" id="solutions">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#ff6b35]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#3B82F6]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-[#10B981]/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-[#8B5CF6]/10 rounded-full blur-2xl animate-pulse delay-3000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          {isTitle && (
            <div className={`${titleClass} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="inline-flex items-center px-4 py-2 bg-[#1E293B] border border-[#ff6b35]/20 rounded-full text-[#ff6b35] text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-[#ff6b35] rounded-full mr-2 animate-pulse"></span>
                Future-ready solutions
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-[#E2E8F0] to-[#94A3B8] bg-clip-text text-transparent">
                  Built to scale
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#ff6b35] to-[#F59E0B] bg-clip-text text-transparent">
                  with your business
                </span>
              </h2>
            </div>
          )}

          {isContent && (
            <p className="text-lg md:text-xl text-[#e7e7e7] max-w-4xl mx-auto leading-relaxed">
              We deliver comprehensive technology services that connect, protect, and scale with your business. From cloud infrastructure to expert staffing, everything works together to help your brand grow confidently.
            </p>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {featureData.map((service, index) => {
            return (
              <div
                key={service.id}
                className={`group relative bg-[#1E293B]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#334155]/50 hover:border-[#ff6b35]/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#ff6b35]/10 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#ff6b35] to-[#F59E0B] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {typeof service.icon === "function" ? (
                        <service.icon className="w-8 h-8 text-[#e7e7e7]" />
                      ) : (
                        service.icon
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#e7e7e7] group-hover:text-[#ff6b35] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#e7e7e7] leading-relaxed group-hover:text-[#e7e7e7] transition-colors duration-300">
                    {service.content}
                  </p>

                  {/* Learn More Link */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href="/solutions/design-development"
                      className="inline-flex items-center text-[#ff6b35] font-semibold hover:text-[#F59E0B] transition-colors duration-300"
                    >
                      Learn More
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#ff6b35] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-[#3B82F6] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 md:mt-20">
          <div className="inline-flex items-center px-8 py-4 bg-[#ff6b35] hover:bg-[#e55a2b] text-[#e7e7e7] font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <span>Explore All Solutions</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureV2;
