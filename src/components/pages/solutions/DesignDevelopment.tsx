import { Link } from "react-router-dom";
import SEOHead from "../../seo/SEOHead";
import { createServiceSchema, createBreadcrumbSchema } from "../../seo/schemas";

const DesignDevelopment = () => {
  const serviceSchema = createServiceSchema(
    "Design & Development Services",
    "Custom software development and UI/UX design services by Zivara. Build modern, scalable applications with expert design and development teams.",
    "https://zivara.io/solutions/design-development"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://zivara.io" },
    { name: "Solutions", url: "https://zivara.io/solutions" },
    { name: "Design & Development", url: "https://zivara.io/solutions/design-development" }
  ]);

  return (
    <>
      <SEOHead
        title="Design & Development Services"
        description="Custom software development and UI/UX design services by Zivara. Build modern, scalable applications with expert design and development teams."
        keywords="software development, UI/UX design, custom applications, web development, mobile development, design services, development consulting"
        canonical="https://zivara.io/solutions/design-development"
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
              🎨 Creative Excellence
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#e7e7e7] mb-3 sm:mb-4 leading-tight">
              We Design & Build 
              <span className="relative block mt-1 sm:mt-2">
                <span className="bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                  Websites and Web Apps
                </span>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#3b82f6] to-[#8B5CF6] rounded-full opacity-60"></div>
              </span>
            </h1>
            
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              From simple websites to powerful web applications, we turn your ideas into digital solutions that work. Whatever you need online, we’re here to create it for you.
            </p>
            
            
            <div className="flex justify-center mt-8 sm:mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-[#e7e7e7] bg-[#3B82F6] border border-[#3B82F6] rounded-xl transition-all duration-300 hover:bg-[#2563eb] hover:border-[#2563eb] hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Free Demo and Consultation
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

            {/* Our Services Section */}
            <section className="py-16 sm:py-20 md:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-6 sm:mb-8 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3B82F6] rounded-full mr-2 animate-pulse"></span>
                Services
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#e7e7e7] mb-4 sm:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                  Your Development Team, When You Need It
                </span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              We provide skilled back-end, front-end developers to support and grow your projects. Our team builds strong infrastructures, 
              creates user-friendly interfaces, and streamlines workflows, working as an extension of your business. With us, 
              you’re not just outsourcing; you’re gaining partners dedicated to turning your ideas into reliable digital solutions.              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "Back-end",
                  emoji: "⚙️",
                  description: "Gentle server-side magic",
                  technologies: ".NET, PHP Laravel, PHP Generic, Python, Java, NodeJS"
                },
                {
                  title: "FullStack Developers",
                  emoji: "🚀",
                  description: "Complete digital harmony",
                  technologies: "PHP Laravel + VueJS, NodeJS + React, NodeJS + Angular, .NET + Angular, .NET + React, .NET WPF (Window Application), .NET MAUI, .NET MVC, and Others"
                },
                {
                  title: "DevOps",
                  emoji: "☁️",
                  description: "Peaceful deployment flow",
                  technologies: "AWS, Azure, Google Cloud, Gitlab, and Others"
                },
                {
                  title: "Scrum Master",
                  emoji: "📋",
                  description: "Loving project guidance",
                  technologies: "Jira, Azure DevOps, MS Project, and Others"
                },
                {
                  title: "AI Developers",
                  emoji: "🤖",
                  description: "Gentle intelligence",
                  technologies: "NLP, Image Processing, Machine Learning, and Others"
                },
                {
                  title: "Front-end Web",
                  emoji: "🎨",
                  description: "Beautiful user experiences",
                  technologies: "Angular, React, VueJS, Blazor, and Others"
                },
                {
                  title: "Mobile",
                  emoji: "📱",
                  description: "Loving mobile solutions",
                  technologies: "Native iOS, Native Android Kotlin, Native Android Java, Flutter, .NET Maui, React Native, and Others"
                },
                {
                  title: "QA Engineer",
                  emoji: "🔍",
                  description: "Gentle quality assurance",
                  technologies: "Cypress, Selenium, Playwright, and Others"
                },
                {
                  title: "UI / UX",
                  emoji: "✨",
                  description: "Beautiful design magic",
                  technologies: "Figma, Adobe XD, Sketch, and Others"
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-[#1A1A1A] rounded-3xl p-6 sm:p-8 border border-[#1A1A1A] hover:border-[#3b82f6]/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3b82f6]/10"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-[#3b82f6] to-[#8B5CF6] rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {service.emoji}
                  </div>
                  
                  {/* Header */}
                  <div className="text-center mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#e7e7e7] mb-2 group-hover:text-[#3b82f6] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#e7e7e7]/70 mb-3 sm:mb-4">
                      {service.description}
                    </p>
                    <div className="w-12 h-1 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] rounded-full"></div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="space-y-3">
                    <p className="text-[#e7e7e7] text-xs sm:text-sm leading-relaxed opacity-90">
                      {service.technologies}
                    </p>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


            {/* Process Section */}
            <section className="py-16 sm:py-20 md:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-6 sm:mb-8 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3B82F6] rounded-full mr-2 animate-pulse"></span>
                🔄 Our Gentle Process
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#e7e7e7] mb-4 sm:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                  Our Development Process
                </span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
          We follow a clear and proven approach that turns your ideas into reality. Every step is handled with care and attention to detail, making sure your vision comes to life the right way              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {[
                  {
                    title: "Discovery",
                    description: "Understanding your vision and requirements with gentle care",
                    icon: "🔍"
                  },
                  {
                    title: "Design",
                    description: "Creating beautiful, user-centered interfaces with loving attention",
                    icon: "🎨"
                  },
                  {
                    title: "Development",
                    description: "Building robust, scalable applications with peaceful precision",
                    icon: "⚡"
                  },
                  {
                    title: "Deployment",
                    description: "Launching and maintaining your solution with gentle support",
                    icon: "🚀"
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
      </section>


    </main>
    </>
  );
};

export default DesignDevelopment;