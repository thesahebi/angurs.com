const DesignDevelopment = () => {

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#e7e7e7]">
      {/* Hero Section */}
      <section className="pt-[210px] pb-24 md:pb-32 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] font-bold mb-6 lg:leading-[90px]" style={{ color: '#3b82f6' }}>
              Trust our expert team to bring comfort, guidance, and confidence to your project
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-secondary max-w-2xl mx-auto">
              Let's discuss your project and bring your ideas to life with cutting-edge technology and beautiful design.
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

      {/* Our Services Section */}
      <section className="py-16 md:py-24 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-surface border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                Our Services
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#3b82f6' }}>
                Team as a Service
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#e7e7e7] max-w-3xl mx-auto">
                We provide expert teams of back-end, front-end, and DevOps developers as a service to drive your projects. Our specialists focus on crafting robust infrastructures, intuitive interfaces, and promoting efficient workflows, operating as an extension of your business. With us, you're not just outsourcing; you're gaining strategic partners dedicated to achieving your vision. Together, we'll transform your ideas into powerful digital solutions.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "Back-end",
                  technologies: ".NET, PHP Laravel, PHP Generic, Python, Java, NodeJS"
                },
                {
                  title: "FullStack Developers",
                  technologies: "PHP Laravel + VueJS, NodeJS + React, NodeJS + Angular, .NET + Angular, .NET + React, .NET WPF (Window Application), .NET MAUI, .NET MVC, and Others"
                },
                {
                  title: "DevOps",
                  technologies: "AWS, Azure, Google Cloud, Gitlab, and Others"
                },
                {
                  title: "Scrum Master",
                  technologies: "Jira, Azure DevOps, MS Project, and Others"
                },
                {
                  title: "AI Developers",
                  technologies: "NLP, Image Processing, Machine Learning, and Others"
                },
                {
                  title: "Front-end Web",
                  technologies: "Angular, React, VueJS, Blazor, and Others"
                },
                {
                  title: "Mobile",
                  technologies: "Native iOS, Native Android Kotlin, Native Android Java, Flutter, .NET Maui, React Native, and Others"
                },
                {
                  title: "QA Engineer",
                  technologies: "Cypress, Selenium, Playwright, and Others"
                },
                {
                  title: "UI / UX",
                  technologies: "Figma, Adobe XD, Sketch, and Others"
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-[#0A0A0A] rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#3b82f6]/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3b82f6]/10"
                >
                  {/* Header */}
                  <div className="mb-6">
                    <h3 
                      className="text-lg sm:text-xl font-bold mb-2"
                      style={{ color: '#3b82f6' }}
                    >
                      {service.title}
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] rounded-full"></div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="space-y-3">
                    <p className="text-[#e7e7e7] text-xs sm:text-sm leading-relaxed opacity-90">
                      {service.technologies}
                    </p>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
              <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#3b82f6' }}>
                Our Development Process
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#e7e7e7]">
                From concept to deployment, we follow a proven methodology
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
                    <div className="w-10 h-10 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                      {process.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-surface border-2 border-primary rounded-full flex items-center justify-center text-xs sm:text-sm font-bold text-primary">
                      {process.step}
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
      </section>


    </main>
  );
};

export default DesignDevelopment;