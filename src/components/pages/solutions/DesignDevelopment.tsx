import React, { useState, useEffect } from "react";

const DesignDevelopment = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const technologies = {
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
    <div className="min-h-screen bg-[#0F172A] text-white">
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
              {technologies[activeTab].map((tech, index) => (
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
    </div>
  );
};

export default DesignDevelopment;