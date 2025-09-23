import { useState, useEffect } from "react";
import { featureData } from "./feature-data";

const FeatureV1 = () => {
  const [, setActiveCard] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % featureData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 md:py-32 bg-[#0A0A0A] overflow-hidden" id="features">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-warning/10 rounded-full blur-2xl animate-pulse delay-3000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 md:mb-24 pt-12 md:pt-16">
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-surface border border-primary/20 rounded-full text-primary text-sm font-medium mb-8 md:mb-12">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              🚀 Our Solutions
            </div>
            <h2 className="lg:text-6xl md:text-5xl text-4xl font-bold text-primary leading-tight mb-8 md:mb-12">
              <span className="bg-gradient-to-r from-[#3b82f6] to-[#3b82f6] bg-clip-text text-transparent">
                Empowering Your Business
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                with Smart Technology
              </span>
            </h2>
            <p className="text-xl text-secondary max-w-4xl mx-auto leading-relaxed mb-16 md:mb-20">
              Fueling growth for businesses with intelligent, scalable technology solutions that adapt to your needs and drive success.
            </p>

          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {featureData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`group relative bg-[#1A1A1A] rounded-3xl p-6 sm:p-8 border border-[#1A1A1A] hover:border-[#3b82f6]/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3b82f6]/10 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveCard(index)}
              >
                {/* Icon */}
                <div className="w-12 h-12 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-[#3b82f6] to-[#8B5CF6] rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {typeof IconComponent === 'function' ? <IconComponent className="w-8 h-8 text-[#e7e7e7]" /> : IconComponent}
                </div>
                
                {/* Header */}
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#e7e7e7] mb-2 group-hover:text-[#3b82f6] transition-colors duration-300" style={{ fontSize: '24px' }}>
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#e7e7e7]/70 mb-3 sm:mb-4" style={{ fontSize: '20px' }}>
                    {service.content}
                  </p>
                  <div className="w-12 h-1 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] rounded-full"></div>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeatureV1;