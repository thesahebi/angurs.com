import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "../../seo/SEOHead";
import { createServiceSchema, createBreadcrumbSchema } from "../../seo/schemas";

const Cloud: React.FC = () => {
  const serviceSchema = createServiceSchema(
    "Cloud Migration Services",
    "Migrate to the cloud securely with Zivara Solutions. We provide Azure and hybrid-cloud expertise to ensure performance, security, and scalability.",
    "https://zivara.io/solutions/cloud"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://zivara.io" },
    { name: "Solutions", url: "https://zivara.io/solutions" },
    { name: "Cloud Migration", url: "https://zivara.io/solutions/cloud" }
  ]);

  return (
    <>
      <SEOHead
        title="Cloud Migration Services"
        description="Migrate to the cloud securely with Zivara Solutions. We provide Azure and hybrid-cloud expertise to ensure performance, security, and scalability."
        keywords="cloud migration, Azure migration, hybrid cloud, cloud services, IT infrastructure, cloud consulting"
        schema={[serviceSchema, breadcrumbSchema]}
      />
      <main className="min-h-screen bg-[#0A0A0A] text-[#e7e7e7]">
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
              ☁️ Cloud Excellence
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#e7e7e7] mb-3 sm:mb-4 leading-tight">
              Seamless Cloud 
              <span className="relative block mt-1 sm:mt-2">
                <span className="bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                  Transformation
                </span>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#3b82f6] to-[#8B5CF6] rounded-full opacity-60"></div>
              </span>
            </h1>
            
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              From discovery and design to building cloud architecture, we help you set up, migrate, and manage on Azure or AWS with security and scalability at every step </p>
            {/* Trust Indicators */}
            {/* <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#e7e7e7]/70 px-2 sm:px-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3b82f6] rounded-full animate-pulse"></div>
                <span>Always Secure</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#8B5CF6] rounded-full animate-pulse delay-300"></div>
                <span>Loving Support</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3b82f6] rounded-full animate-pulse delay-700"></div>
                <span>Gentle Innovation</span>
              </div>
            </div> */}
            
            <div className="flex justify-center mt-8 sm:mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-[#e7e7e7] bg-[#3B82F6] border border-[#3B82F6] rounded-xl transition-all duration-300 hover:bg-[#2563eb] hover:border-[#2563eb] hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Learn about moving to cloud
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

            {/* Key Features */}
            <section className="py-16 sm:py-20 md:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-6 sm:mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3B82F6] rounded-full mr-2 animate-pulse"></span>
              ☁️ Our Cloud Benefits
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#e7e7e7] mb-4 sm:mb-6 leading-tight">
              Why Choose Our{' '}
              <span className="bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                Cloud Solutions
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              { icon: "📈", title: "Infinite Scalability", items: ["Auto-scaling", "Pay-as-you-grow", "Global zones"] },
              { icon: "🔒", title: "Enterprise Security", items: ["End-to-end encryption", "Multi-factor auth", "Compliance"] },
              { icon: "💰", title: "Cost Optimization", items: ["Resource right-sizing", "Reserved instances", "Cost monitoring"] },
              { icon: "⚡", title: "Zero Downtime", items: ["Blue-green deployments", "Real-time sync", "Rollback"] },
              { icon: "📊", title: "24/7 Monitoring", items: ["Proactive detection", "Performance analytics", "Automated alerts"] },
              { icon: "👥", title: "Expert Support", items: ["Certified architects", "Account managers", "Training"] }
            ].map((feature, index) => (
              <div key={index} className="group relative bg-[#1A1A1A] rounded-3xl p-6 sm:p-8 border border-[#1A1A1A] hover:border-[#3b82f6]/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3b82f6]/10">
                {/* Icon */}
                <div className="w-10 h-10 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-[#3b82f6] to-[#8B5CF6] rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                {/* Header */}
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#e7e7e7] mb-2 group-hover:text-[#3b82f6] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] rounded-full mx-auto"></div>
                </div>
                
                {/* Items */}
                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-[#e7e7e7]/70">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3B82F6] rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Code & Setup Section */}
            <section className="py-16 sm:py-20 md:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Code & Setup Section */}
          <div>
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-6 sm:mb-8 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3B82F6] rounded-full mr-2 animate-pulse"></span>
                🔒 Our Implementation Process
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#e7e7e7] mb-4 sm:mb-6 leading-tight">
                Secure Cloud{' '}
                <span className="bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                  Implementation
                </span>
              </h2>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    title: "Discovery & Assessment",
                    description: "Understanding your current infrastructure and cloud requirements",
                    icon: "🔍"
                  },
                  {
                    title: "Migration & Modernization",
                    description: "Seamlessly moving your applications to the cloud",
                    icon: "🎨"
                  },
                  {
                    title: "Operational Optimization",
                    description: "Maximizing performance and minimizing costs",
                    icon: "⚡"
                  }
                ].map((process, index) => (
                  <div
                    key={index}
                    className="text-center group relative bg-[#1A1A1A] rounded-3xl p-6 sm:p-8 border border-[#1A1A1A] hover:border-[#3b82f6]/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3b82f6]/10"
                  >
                    <div className="relative mb-6">
                      <div className="w-10 h-10 mx-auto bg-gradient-to-br from-[#3b82f6] to-[#8B5CF6] rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        {process.icon}
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-[#e7e7e7] group-hover:text-[#3b82f6] transition-colors duration-300">
                      {process.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#e7e7e7]/70 leading-relaxed">
                      {process.description}
                    </p>
                    <div className="w-12 h-1 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] rounded-full mx-auto mt-4 sm:mt-6"></div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
    </>
  );
};

export default Cloud;


