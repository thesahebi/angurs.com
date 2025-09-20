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
    <main className="min-h-screen bg-[#0A0A0A] text-[#e7e7e7]">
      {/* Technologies Section - Moved to Top */}
      <section id="technologies" className="py-24 md:py-32 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-surface border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                Design & Development
              </div>
              <h1 className="hero-title">
                <span className="bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
                  Our Technology Stack
                </span>
              </h1>
              <p className="hero-description text-secondary max-w-3xl mx-auto">
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
                      ? "bg-primary text-[#e7e7e7] shadow-lg"
                      : "bg-surface text-secondary hover:bg-surface-light"
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
                  className="group bg-surface rounded-xl p-6 border border-surface hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
                  role="article"
                  aria-label={`${tech.name} - ${tech.description}`}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {tech.name}
                  </h3>
                  <p className="text-tertiary text-sm">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Our Development Process
                </span>
              </h2>
              <p className="text-secondary text-lg">
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
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                      {process.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-surface border-2 border-primary rounded-full flex items-center justify-center text-sm font-bold text-primary">
                      {process.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {process.title}
                  </h3>
                  <p className="text-tertiary">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="hero-title">
              <span className="bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
                Ready to Build Something Amazing?
              </span>
            </h2>
            <p className="hero-description text-secondary max-w-2xl mx-auto">
              Let's discuss your project and bring your ideas to life with cutting-edge technology and beautiful design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary inline-flex items-center px-8 py-4 text-[#e7e7e7] font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Project
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/solutions"
                className="btn-secondary inline-flex items-center px-8 py-4 text-[#e7e7e7] font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                View All Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default DesignDevelopment;