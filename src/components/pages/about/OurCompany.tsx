import React from "react";
import PageHero from "../../reusable/PageHero";

const OurCompany: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <PageHero
        title="About Zivara"
        subtitle="Passionate technology experts"
        description="We are a team of passionate technology experts dedicated to transforming businesses through innovative infrastructure solutions and digital excellence."
        primaryButtonText="Work With Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Our Story"
        secondaryButtonLink="#story"
        accentColor="var(--color-primary)"
        backgroundPattern="dots"
        showGraph={true}
        graphType="pie"
        isHomepage={false}
        isAboutUs={true}
      />

      {/* Our Story Section */}
      <section id="story" className="py-16 md:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary mb-6 md:mb-8">Our Story</h2>
            <p className="text-xl text-secondary leading-relaxed mb-6 md:mb-8">
              Founded with a vision to bridge the gap between complex technology and business success, 
              Zivara has grown from a small team of engineers to a trusted partner for organizations 
              seeking to modernize their infrastructure and embrace digital transformation.
            </p>
            <p className="text-xl text-secondary leading-relaxed">
              Our journey began with a simple belief: technology should empower businesses, not complicate them. 
              Today, we continue to deliver on that promise through innovative solutions, expert guidance, 
              and unwavering commitment to our clients' success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 md:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#e7e7e7] mb-4">Our Foundation</h2>
            <p className="text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="bg-[#0A0A0A] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#3B82F6] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#e7e7e7] mb-4">Our Mission</h3>
              <p className="text-[#e7e7e7] leading-relaxed">
                To empower organizations with cutting-edge infrastructure solutions that drive 
                innovation, enhance security, and accelerate digital transformation.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[#0A0A0A] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#e7e7e7] mb-4">Our Vision</h3>
              <p className="text-[#e7e7e7] leading-relaxed">
                To be the leading partner for organizations seeking to build resilient, 
                scalable, and secure digital infrastructure that enables sustainable growth.
              </p>
            </div>

            {/* Values */}
            <div className="bg-[#0A0A0A] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#e7e7e7] mb-4">Our Values</h3>
              <p className="text-[#e7e7e7] leading-relaxed">
                Integrity, innovation, and excellence guide our approach. We believe in 
                transparent communication, continuous learning, and delivering measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#e7e7e7] mb-4">Why Choose Zivara</h2>
            <p className="text-xl text-[#e7e7e7] max-w-3xl mx-auto">
              What sets us apart in the technology landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {/* Years Experience */}
            <div className="group relative">
              <div className="relative bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#1E293B] hover:border-[#3B82F6]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#3B82F6]/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-2xl sm:text-3xl font-bold text-white">10+</span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#e7e7e7] mb-2 sm:mb-3 group-hover:text-[#3B82F6] transition-colors duration-300">Years Experience</h3>
                  <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">Proven track record in enterprise infrastructure</p>
                </div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#3B82F6] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Projects Delivered */}
            <div className="group relative">
              <div className="relative bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#1E293B] hover:border-[#3B82F6]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#3B82F6]/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-2xl sm:text-3xl font-bold text-white">500+</span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#e7e7e7] mb-2 sm:mb-3 group-hover:text-[#3B82F6] transition-colors duration-300">Projects Delivered</h3>
                  <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">Successful implementations across industries</p>
                </div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#3B82F6] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* 24/7 Support */}
            <div className="group relative">
              <div className="relative bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#1E293B] hover:border-[#3B82F6]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#3B82F6]/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-2xl sm:text-3xl font-bold text-white">24/7</span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#e7e7e7] mb-2 sm:mb-3 group-hover:text-[#3B82F6] transition-colors duration-300">Support</h3>
                  <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">Round-the-clock assistance and monitoring</p>
                </div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#3B82F6] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Client Satisfaction */}
            <div className="group relative">
              <div className="relative bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#1E293B] hover:border-[#3B82F6]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#3B82F6]/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-2xl sm:text-3xl font-bold text-white">100%</span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#e7e7e7] mb-2 sm:mb-3 group-hover:text-[#3B82F6] transition-colors duration-300">Client Satisfaction</h3>
                  <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">Dedicated to exceeding expectations</p>
                </div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#3B82F6] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OurCompany;


