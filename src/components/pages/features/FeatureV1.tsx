import { useState, useEffect } from "react";
import { featureData } from "./feature-data";

const FeatureV1 = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % featureData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 md:py-32 bg-surface-dark overflow-hidden" id="features">
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
              <span className="bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
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

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-3">500+</div>
                <div className="text-base text-tertiary font-medium">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-3">99.9%</div>
                <div className="text-base text-tertiary font-medium">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-warning mb-3">24/7</div>
                <div className="text-base text-tertiary font-medium">Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-3">50+</div>
                <div className="text-base text-tertiary font-medium">Expert Team</div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {featureData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`group relative bg-surface/50 backdrop-blur-sm rounded-2xl p-10 border border-surface hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveCard(index)}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-secondary leading-relaxed group-hover:text-primary transition-colors duration-300">
                    {service.content}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeatureV1;