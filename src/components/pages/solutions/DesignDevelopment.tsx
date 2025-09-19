import { useState } from "react";

const DesignDevelopment = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const technologies: Record<string, Array<{ name: string; icon: string; description: string }>> = {
    frontend: [
      { name: "ReactJS", icon: "⚛️", description: "Component-based UI library" },
      { name: "Angular", icon: "🅰️", description: "Full-featured framework" },
      { name: "VueJS", icon: "💚", description: "Progressive framework" },
      { name: "HTML5", icon: "🌐", description: "Semantic markup" },
      { name: "CSS3", icon: "🎨", description: "Modern styling" },
      { name: "JavaScript", icon: "⚡", description: "Dynamic interactions" },
      { name: "TypeScript", icon: "📘", description: "Type-safe development" }
    ],
    backend: [
      { name: "NodeJS", icon: "🟢", description: "JavaScript runtime" },
      { name: "Python", icon: "🐍", description: "Versatile programming" },
      { name: "PHP", icon: "🐘", description: "Web development" },
      { name: "Java", icon: "☕", description: "Enterprise solutions" },
      { name: "C#", icon: "🔷", description: "Microsoft ecosystem" },
      { name: "Go", icon: "🐹", description: "High performance" },
      { name: "Ruby", icon: "💎", description: "Developer happiness" }
    ],
    mobile: [
      { name: "Swift", icon: "🍎", description: "iOS development" },
      { name: "React Native", icon: "📱", description: "Cross-platform mobile" },
      { name: "Flutter", icon: "🦋", description: "Google's UI toolkit" }
    ],
    design: [
      { name: "Figma", icon: "🎨", description: "Collaborative design" },
      { name: "Adobe XD", icon: "🎯", description: "UX/UI design" },
      { name: "Sketch", icon: "✏️", description: "Mac design tool" }
    ]
  };

  return (
    <main className="min-h-screen bg-[#0F172A] text-white">
      {/* Technologies Section - Moved to Top */}
      <section id="technologies" className="py-24 md:py-32 bg-[#0F172A]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-[#1E293B] border border-[#ff6b35]/20 rounded-full text-[#ff6b35] text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-[#ff6b35] rounded-full mr-2 animate-pulse"></span>
                Design & Development
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-[#E2E8F0] bg-clip-text text-transparent">
                  Our Technology Stack
                </span>
              </h1>
              <p className="text-[#E2E8F0] text-lg max-w-3xl mx-auto">
                We use the latest tools and frameworks to build scalable, maintainable, and beautiful applications.
              </p>
            </div>

            {/* Technology Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label="Technology categories">
              {Object.keys(technologies).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  role="tab"
                  aria-selected={activeTab === category}
                  aria-controls={`${category}-panel`}
                  aria-label={`View ${category} technologies`}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 capitalize ${
                    activeTab === category
                      ? "bg-[#ff6b35] text-white shadow-lg"
                      : "bg-[#1E293B] text-[#E2E8F0] hover:bg-[#334155]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Technology Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" role="tabpanel" id={`${activeTab}-panel`} aria-label={`${activeTab} technologies`}>
              {technologies[activeTab].map((tech: { name: string; icon: string; description: string }, index: number) => (
                <div
                  key={index}
                  className="group bg-[#1E293B] rounded-xl p-6 border border-[#334155] hover:border-[#ff6b35]/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6b35]/10"
                  role="article"
                  aria-label={`${tech.name} - ${tech.description}`}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {tech.name}
                  </h3>
                  <p className="text-[#94A3B8] text-sm">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-[#1E293B]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#ff6b35] to-[#F59E0B] bg-clip-text text-transparent">
                  Our Development Process
                </span>
              </h2>
              <p className="text-[#E2E8F0] text-lg">
                From concept to deployment, we follow a proven methodology
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "Understanding your vision and requirements",
                  icon: "🔍"
                },
                {
                  step: "02",
                  title: "Design",
                  description: "Creating beautiful, user-centered interfaces",
                  icon: "🎨"
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Building robust, scalable applications",
                  icon: "⚡"
                },
                {
                  step: "04",
                  title: "Deployment",
                  description: "Launching and maintaining your solution",
                  icon: "🚀"
                }
              ].map((process, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#ff6b35] to-[#F59E0B] rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                      {process.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#1E293B] border-2 border-[#ff6b35] rounded-full flex items-center justify-center text-sm font-bold text-[#ff6b35]">
                      {process.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {process.title}
                  </h3>
                  <p className="text-[#94A3B8]">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-[#E2E8F0] bg-clip-text text-transparent">
                Ready to Build Something Amazing?
              </span>
            </h2>
            <p className="text-xl text-[#E2E8F0] mb-8 max-w-2xl mx-auto">
              Let's discuss your project and bring your ideas to life with cutting-edge technology and beautiful design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#ff6b35] hover:bg-[#e55a2b] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Project
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/solutions"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/20 hover:border-[#ff6b35] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                View All Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#1E293B]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-6">
              Scale your APIs with{' '}
              <span className="bg-gradient-to-r from-[#ff6b35] to-[#e95420] bg-clip-text text-transparent">
                confidence.
              </span>
            </h2>
            <p className="text-lg text-[#E2E8F0] mb-8 md:mb-12 max-w-2xl mx-auto">
              Start for free or book a demo with our team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch w-full max-w-2xl mx-auto mb-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center w-full sm:w-2/5 px-8 py-4 text-lg font-semibold text-white border border-white/20 rounded-xl transition-all duration-200 hover:bg-[#e95420] focus:outline-none focus:ring-2 focus:ring-white/80"
                style={{ backgroundColor: '#ff6b35' }}
              >
                Book a demo
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center w-full sm:w-2/5 px-8 py-4 text-lg font-semibold text-[#F1F5F9] border-2 border-[#1E293B] hover:border-[#ff6b35] rounded-xl transition-all duration-200 hover:text-[#ff6b35] focus:outline-none focus:ring-2 focus:ring-white/80"
              >
                Start for Free
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Certificates */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
              {/* SOC 2 Certificate */}
              <div className="bg-[#1E293B] border border-white/10 rounded-xl p-3 text-center hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-[#ff6b35] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[#F1F5F9] mb-1">SOC 2 TYPE 2</h3>
                <p className="text-xs text-[#94A3B8]">Security</p>
              </div>

              {/* High Performer Certificate */}
              <div className="bg-[#1E293B] border border-white/10 rounded-xl p-3 text-center hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-[#10B981] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[#F1F5F9] mb-1">High Performer</h3>
                <p className="text-xs text-[#94A3B8]">Spring 2025</p>
              </div>

              {/* Momentum Leader Certificate */}
              <div className="bg-[#1E293B] border border-white/10 rounded-xl p-3 text-center hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-[#8B5CF6] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[#F1F5F9] mb-1">Momentum Leader</h3>
                <p className="text-xs text-[#94A3B8]">Spring 2025</p>
              </div>

              {/* Best ROI Certificate */}
              <div className="bg-[#1E293B] border border-white/10 rounded-xl p-3 text-center hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-[#F59E0B] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[#F1F5F9] mb-1">Best ROI</h3>
                <p className="text-xs text-[#94A3B8]">Spring 2025</p>
              </div>

              {/* Easiest To Use Certificate */}
              <div className="bg-[#1E293B] border border-white/10 rounded-xl p-3 text-center hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-[#EC4899] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[#F1F5F9] mb-1">Easiest To Use</h3>
                <p className="text-xs text-[#94A3B8]">Spring 2025</p>
              </div>

              {/* Fastest Implementation Certificate */}
              <div className="bg-[#1E293B] border border-white/10 rounded-xl p-3 text-center hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-[#EF4444] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[#F1F5F9] mb-1">Fastest Implementation</h3>
                <p className="text-xs text-[#94A3B8]">Spring 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DesignDevelopment;