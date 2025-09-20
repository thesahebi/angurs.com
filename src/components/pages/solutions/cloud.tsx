import React from "react";

const Cloud: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#e7e7e7]">
      {/* Hero Section */}
      <section className="pt-[210px] pb-24 md:pb-32 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] font-bold mb-6 lg:leading-[90px]" style={{ color: '#3b82f6' }}>
              Trust our expert team to bring comfort, guidance, and confidence to your cloud transformation
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-secondary max-w-2xl mx-auto">
              Scale infinitely, secure everything, and innovate faster with our comprehensive cloud migration and management services.
            </p>
            <div className="flex justify-center mt-8">
              <a
                href="/contact"
                className="btn-primary inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base text-[#e7e7e7] font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Book an Appointment
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

            {/* Key Features */}
            <section className="py-12 md:py-16 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 md:mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#e7e7e7] mb-4">
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
                <h3 className="text-lg font-bold text-[#e7e7e7] mb-3">{feature.title}</h3>
                <ul className="space-y-1 text-sm text-[#e7e7e7]">
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
            <section className="py-16 md:py-16 md:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          {/* Code & Setup Section */}
          <div>
            <div className="text-center mb-8 md:mb-12 md:mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#e7e7e7] mb-4">
                Secure Cloud{' '}
                <span className="bg-gradient-to-r from-[#3B82F6] to-[#d1451a] bg-clip-text text-transparent">
                  Implementation
                </span>
              </h2>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    className="text-center group"
                  >
                    <div className="relative mb-6">
                      <div className="w-10 h-10 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                        {process.icon}
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-primary">
                      {process.title}
                    </h3>
                    <p className="text-sm sm:text-base text-tertiary">
                      {process.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Cloud;


