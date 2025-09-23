import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 md:pt-40 lg:pt-[210px] pb-16 sm:pb-20 md:pb-24 lg:pb-32 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[70px] font-bold mb-4 sm:mb-6 lg:leading-[90px]" style={{ color: '#3b82f6' }}>
              About Zivara
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#e7e7e7] max-w-2xl mx-auto leading-relaxed">
              We are a team of passionate technology experts dedicated to transforming businesses through innovative infrastructure solutions and digital excellence.
            </p>
            <div className="flex justify-center mt-6 sm:mt-8">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-sm sm:text-base md:text-lg text-[#e7e7e7] font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl min-h-[48px]"
                style={{ backgroundColor: '#1e40af' }}
              >
                Work With Us
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8" style={{ color: '#3b82f6' }}>Our Story</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#e7e7e7] leading-relaxed mb-4 sm:mb-6 md:mb-8">
              Founded with a vision to bridge the gap between complex technology and business success, 
              Zivara has grown from a small team of engineers to a trusted partner for organizations 
              seeking to modernize their infrastructure and embrace digital transformation.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#e7e7e7] leading-relaxed">
              Our journey began with a simple belief: technology should empower businesses, not complicate them. 
              Today, we continue to deliver on that promise through innovative solutions, expert guidance, 
              and unwavering commitment to our clients' success.
            </p>
          </div>
        </div>
      </section>

      {/* Unified About Card */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 max-w-7xl mx-auto">
            
            {/* Our Foundation */}
            <div className="mb-12 sm:mb-16">
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#e7e7e7] mb-3 sm:mb-4">Our Foundation</h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-2xl mx-auto">
                  The principles that guide everything we do
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {/* Mission */}
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#3B82F6] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#e7e7e7] mb-3 sm:mb-4">Our Mission</h3>
                  <p className="text-xs sm:text-sm md:text-base text-[#e7e7e7] leading-relaxed">
                    To empower organizations with cutting-edge infrastructure solutions that drive 
                    innovation, enhance security, and accelerate digital transformation.
                  </p>
                </div>

                {/* Vision */}
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#3B82F6] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#e7e7e7] mb-3 sm:mb-4">Our Vision</h3>
                  <p className="text-xs sm:text-sm md:text-base text-[#e7e7e7] leading-relaxed">
                    To be the leading partner for organizations seeking to build resilient, 
                    scalable, and secure digital infrastructure that enables sustainable growth.
                  </p>
                </div>

                {/* Values */}
                <div className="text-center sm:col-span-2 lg:col-span-1">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#3B82F6] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#e7e7e7] mb-3 sm:mb-4">Our Values</h3>
                  <p className="text-xs sm:text-sm md:text-base text-[#e7e7e7] leading-relaxed">
                    Integrity, innovation, and excellence guide our approach. We believe in 
                    transparent communication, continuous learning, and delivering measurable results.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Capabilities */}
            <div className="mb-12 sm:mb-16">
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#e7e7e7] mb-3 sm:mb-4">Our Capabilities</h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-3xl mx-auto">
                  End-to-end technology solutions designed to meet your business objectives
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                {/* Cloud & Platform */}
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#3B82F6] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#e7e7e7] mb-3 sm:mb-4">Cloud & Platform</h3>
                  <p className="text-xs sm:text-sm md:text-base text-[#e7e7e7] leading-relaxed mb-4 sm:mb-6">
                    Comprehensive cloud migration, Kubernetes orchestration, and platform engineering 
                    to modernize your infrastructure.
                  </p>
                  <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-[#e7e7e7] text-left">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-[#3B82F6] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      AWS, Azure, GCP Migration
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-[#3B82F6] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Kubernetes & Containerization
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-[#3B82F6] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Virtualization & Storage
                    </li>
                  </ul>
                </div>

                {/* Security */}
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#3B82F6] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#e7e7e7] mb-3 sm:mb-4">Security & Compliance</h3>
                  <p className="text-xs sm:text-sm md:text-base text-[#e7e7e7] leading-relaxed mb-4 sm:mb-6">
                    Zero Trust architecture, compliance frameworks, and security-first design 
                    to protect your digital assets.
                  </p>
                  <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-[#e7e7e7] text-left">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-[#3B82F6] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Zero Trust Implementation
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-[#3B82F6] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Compliance & Auditing
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-[#3B82F6] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Identity & Access Management
                    </li>
                  </ul>
                </div>

                {/* Automation */}
                <div className="text-center lg:col-span-2 xl:col-span-1">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#3B82F6] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#e7e7e7] mb-3 sm:mb-4">Automation & DevOps</h3>
                  <p className="text-xs sm:text-sm md:text-base text-[#e7e7e7] leading-relaxed mb-4 sm:mb-6">
                    CI/CD pipelines, Infrastructure as Code, and observability solutions 
                    to accelerate delivery and improve reliability.
                  </p>
                  <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-[#e7e7e7] text-left">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-[#3B82F6] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      CI/CD & Pipeline Automation
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-[#3B82F6] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Infrastructure as Code
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-[#3B82F6] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Monitoring & Observability
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Our People */}
            <div>
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#e7e7e7] mb-3 sm:mb-4">Our People</h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-3xl mx-auto">
                  Meet the passionate experts behind Zivara - a diverse team of engineers, architects, and innovators
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#e7e7e7] mb-2 sm:mb-3">Innovation</h3>
                  <p className="text-xs sm:text-sm md:text-base text-[#e7e7e7]">Continuously pushing boundaries and exploring new technologies to deliver cutting-edge solutions.</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#e7e7e7] mb-2 sm:mb-3">Collaboration</h3>
                  <p className="text-xs sm:text-sm md:text-base text-[#e7e7e7]">Working together as one team, sharing knowledge, and supporting each other's growth.</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#e7e7e7] mb-2 sm:mb-3">Excellence</h3>
                  <p className="text-xs sm:text-sm md:text-base text-[#e7e7e7]">Committed to delivering the highest quality solutions and exceeding client expectations.</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#e7e7e7] mb-2 sm:mb-3">Learning</h3>
                  <p className="text-xs sm:text-sm md:text-base text-[#e7e7e7]">Embracing continuous learning and staying at the forefront of technology trends.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#e7e7e7] mb-3 sm:mb-4">Why Choose Zivara</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#e7e7e7] max-w-3xl mx-auto">
              What sets us apart in the technology landscape
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
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

export default AboutUs;
