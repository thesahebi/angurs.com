import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "../../seo/SEOHead";
import { createServiceSchema, createBreadcrumbSchema } from "../../seo/schemas";

const ITAutomation: React.FC = () => {
  const serviceSchema = createServiceSchema(
    "IT Automation Services",
    "Streamline your IT operations with Zivara's IT automation solutions. Server management, monitoring automation, and intelligent IT infrastructure management.",
    "https://zivara.io/automation/it"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://zivara.io" },
    { name: "Automation", url: "https://zivara.io/automation" },
    { name: "IT Automation", url: "https://zivara.io/automation/it" }
  ]);

  return (
    <>
      <SEOHead
        title="IT Automation Services"
        description="Streamline your IT operations with Zivara's IT automation solutions. Server management, monitoring automation, and intelligent IT infrastructure management."
        keywords="IT automation, server automation, infrastructure automation, IT operations, monitoring automation, IT management, automation consulting"
        canonical="https://zivara.io/automation/it"
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
              🤖 IT Excellence
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#e7e7e7] mb-3 sm:mb-4 leading-tight">
              
              <span className="relative block mt-1 sm:mt-2">
                <span className="bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                  Effortless IT Automation
                </span>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#3b82f6] to-[#8B5CF6] rounded-full opacity-60"></div>
              </span>
            </h1>
            
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              Trust our experts to simplify and optimize your IT operations. We help you streamline workflows, cut costs, and boost reliability with automation solutions designed to fit your business.
            </p>
            
            {/* Trust Indicators */}
            {/* <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#e7e7e7]/70 px-2 sm:px-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3b82f6] rounded-full animate-pulse"></div>
                <span>Always Efficient</span>
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
                Book an Appointment
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
              🤖 Our IT Benefits
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#e7e7e7] mb-4 sm:mb-6 leading-tight">
              Why Choose Our{' '}
              <span className="bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                IT Solutions
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              { icon: "⏰", title: "24/7 Operations", items: ["Continuous monitoring", "Automated responses", "Always available"] },
              { icon: "✅", title: "Error Reduction", items: ["Consistent processes", "Repeatable tasks", "Quality assurance"] },
              { icon: "💰", title: "Cost Optimization", items: ["Resource efficiency", "Reduced overhead", "ROI improvement"] },
              { icon: "⚡", title: "Rapid Response", items: ["Instant alerts", "Self-healing systems", "Minimal downtime"] },
              { icon: "📊", title: "Performance Analytics", items: ["Real-time insights", "Trend analysis", "Optimization"] },
              { icon: "🔒", title: "Enhanced Security", items: ["Automated patching", "Threat detection", "Compliance"] }
            ].map((feature, index) => (
              <div key={index} className="group relative bg-[#1A1A1A] rounded-3xl p-6 sm:p-8 border border-[#1A1A1A] hover:border-[#3b82f6]/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3b82f6]/10">
                {/* Icon */}
                <div className="w-10 h-10 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-[#3b82f6] to-[#8B5CF6] rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                {/* Header */}
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#e7e7e7] mb-2 sm:mb-3 group-hover:text-[#3b82f6] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] rounded-full mx-auto"></div>
                </div>
                
                {/* Features List */}
                <ul className="space-y-2 sm:space-y-3">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3B82F6] rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Implementation Process */}
            <section className="py-16 sm:py-20 md:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-6 sm:mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3B82F6] rounded-full mr-2 animate-pulse"></span>
              🔧 Our Implementation Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#e7e7e7] mb-4 sm:mb-6 leading-tight">
              How We{' '}
              <span className="bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                Automate Your IT
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              Our proven methodology ensures seamless automation implementation with minimal disruption to your operations.
            </p>
          </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  { icon: "🏗️", title: "Assessment & Planning", description: "Comprehensive analysis of your current IT infrastructure and automation opportunities" },
                  { icon: "⚙️", title: "Design & Configuration", description: "Custom automation workflows tailored to your specific business requirements" },
                  { icon: "🚀", title: "Implementation", description: "Seamless deployment with minimal disruption to your ongoing operations" },
                  { icon: "📊", title: "Testing & Validation", description: "Thorough testing to ensure all automation processes work flawlessly" },
                  { icon: "📈", title: "Monitoring & Optimization", description: "Continuous monitoring and performance optimization for maximum efficiency" },
                  { icon: "🎓", title: "Training & Support", description: "Complete training for your team and ongoing support for smooth operations" }
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
                    <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                      {process.description}
                    </p>
                    <div className="w-12 h-1 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] rounded-full mx-auto mt-4 sm:mt-6"></div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  </div>
                ))}
              </div>
            </div>

        </div>
      </section>
    </main>
    </>
  );
};

export default ITAutomation;
