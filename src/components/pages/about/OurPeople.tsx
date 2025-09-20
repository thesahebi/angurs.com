import React from "react";
import PageHero from "../../reusable/PageHero";

const OurPeople: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <PageHero
        title="Our People"
        subtitle="Meet the passionate experts"
        description="Meet the passionate experts behind Zivara - a diverse team of engineers, architects, and innovators dedicated to your success."
        primaryButtonText="Meet Our Team"
        primaryButtonLink="/contact"
        secondaryButtonText="Our Culture"
        secondaryButtonLink="#culture"
        accentColor="#10b981"
        backgroundPattern="waves"
        showGraph={true}
        graphType="network"
        isHomepage={false}
        isAboutUs={true}
      />

      {/* Team Values */}
      <section id="culture" className="py-16 md:py-24 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 md:mb-20">
            <h2 className="text-2xl font-bold text-[#e7e7e7] mb-4">What Drives Us</h2>
            <p className="text-xl text-[#e7e7e7] max-w-3xl mx-auto">
              The values and principles that unite our team and guide our work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#e7e7e7] mb-3">Innovation</h3>
              <p className="text-[#e7e7e7]">Continuously pushing boundaries and exploring new technologies to deliver cutting-edge solutions.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#e7e7e7] mb-3">Collaboration</h3>
              <p className="text-[#e7e7e7]">Working together as one team, sharing knowledge, and supporting each other's growth.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#e7e7e7] mb-3">Excellence</h3>
              <p className="text-[#e7e7e7]">Committed to delivering the highest quality solutions and exceeding client expectations.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#e7e7e7] mb-3">Learning</h3>
              <p className="text-[#e7e7e7]">Embracing continuous learning and staying at the forefront of technology trends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-16 md:py-24 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#e7e7e7] mb-4">Our Expertise</h2>
            <p className="text-xl text-[#e7e7e7] max-w-3xl mx-auto">
              A diverse team with deep expertise across multiple technology domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#1A1A1A] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#e7e7e7] mb-4">Cloud Architects</h3>
              <p className="text-[#e7e7e7] leading-relaxed">
                Certified experts in AWS, Azure, and GCP with years of experience designing 
                and implementing scalable cloud solutions.
              </p>
            </div>

            <div className="bg-[#1A1A1A] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#e7e7e7] mb-4">DevOps Engineers</h3>
              <p className="text-[#e7e7e7] leading-relaxed">
                Automation specialists skilled in CI/CD, Infrastructure as Code, and 
                modern deployment practices to accelerate delivery.
              </p>
            </div>

            <div className="bg-[#1A1A1A] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#e7e7e7] mb-4">Security Specialists</h3>
              <p className="text-[#e7e7e7] leading-relaxed">
                Cybersecurity experts focused on Zero Trust architecture, compliance, 
                and protecting your digital assets from evolving threats.
              </p>
            </div>

            <div className="bg-[#1A1A1A] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#e7e7e7] mb-4">Network Engineers</h3>
              <p className="text-[#e7e7e7] leading-relaxed">
                Infrastructure specialists with expertise in enterprise networking, 
                SD-WAN, and modern connectivity solutions.
              </p>
            </div>

            <div className="bg-[#1A1A1A] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#e7e7e7] mb-4">Data Protection Experts</h3>
              <p className="text-[#e7e7e7] leading-relaxed">
                Backup and recovery specialists ensuring your critical data is protected 
                and your business can recover from any disruption.
              </p>
            </div>

            <div className="bg-[#1A1A1A] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#e7e7e7] mb-4">Solution Architects</h3>
              <p className="text-[#e7e7e7] leading-relaxed">
                Strategic thinkers who design comprehensive technology solutions that 
                align with your business objectives and growth plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-16 md:py-24 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#e7e7e7] mb-4">Our Culture</h2>
            <p className="text-xl text-[#e7e7e7] max-w-3xl mx-auto">
              What makes working at Zivara special and how we foster growth and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#e7e7e7] mb-2">Continuous Learning</h3>
                  <p className="text-[#e7e7e7]">We invest in our team's growth through training, certifications, and conference attendance.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#e7e7e7] mb-2">Knowledge Sharing</h3>
                  <p className="text-[#e7e7e7]">Regular tech talks, documentation, and peer mentoring to share expertise across the team.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#e7e7e7] mb-2">Quality Focus</h3>
                  <p className="text-[#e7e7e7]">We take pride in delivering high-quality solutions and maintaining the highest standards.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#e7e7e7] mb-2">Innovation Time</h3>
                  <p className="text-[#e7e7e7]">Dedicated time for exploring new technologies and working on passion projects.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#e7e7e7] mb-2">Work-Life Balance</h3>
                  <p className="text-[#e7e7e7]">Flexible working arrangements and support for maintaining a healthy work-life balance.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#e7e7e7] mb-2">Community Impact</h3>
                  <p className="text-[#e7e7e7]">Contributing to open-source projects and engaging with the broader technology community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#10B981] to-[#059669]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#e7e7e7] mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-[#e7e7e7]/90 mb-8 md:mb-12 max-w-3xl mx-auto">
            Ready to work with passionate experts and make a real impact? 
            Explore career opportunities at Zivara and be part of our innovative team.
          </p>
          <a
            href="/about/careers"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#10B981] bg-[#1A1A1A] rounded-full hover:bg-[#0A0A0A] transition-colors shadow-lg"
          >
            View Open Positions
          </a>
        </div>
      </section>
    </div>
  );
};

export default OurPeople;