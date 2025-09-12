import React from "react";
import { useNavigate } from "react-router-dom";
import PageHero from "../../reusable/PageHero";

const Careers: React.FC = () => {
  const navigate = useNavigate();

  const handleJobClick = (jobPath: string) => {
    navigate(jobPath);
  };

  return (
    <div className="min-h-screen bg-[#121212]">
      <PageHero
        title="Join Our Team"
        subtitle="Build the future of technology"
        description="Build the future of technology with us. Join a team that values innovation, growth, and making a real impact in the world of infrastructure and cloud solutions."
        primaryButtonText="View Open Positions"
        primaryButtonLink="#open-positions"
        secondaryButtonText="Our Benefits"
        secondaryButtonLink="#benefits"
        accentColor="#8b5cf6"
        backgroundPattern="circuits"
        showGraph={true}
        graphType="line"
        isHomepage={false}
        isAboutUs={true}
      />

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#F1F5F9] mb-4">Open Positions</h2>
            <p className="text-xl text-[#E2E8F0] max-w-3xl mx-auto">
              Join our team and help shape the future of technology infrastructure
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* UI/UX Designer Job */}
              <div 
                className="bg-[#121212] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer group"
                onClick={() => handleJobClick('/about/careers/ui-ux-designer')}
              >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#d1451a] rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#3B82F6] transition-colors">UI/UX Designer</h3>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-xs font-medium">
                        Full-time
                      </span>
                      <span className="px-2 py-1 bg-[#3b82f6]/10 text-[#3b82f6] rounded-full text-xs font-medium">
                        Remote
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4">
                  Design intuitive, user-friendly interfaces for our cloud infrastructure and automation solutions.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[#9ca3af] text-xs">Posted: Dec 2024</span>
                  <div className="flex items-center text-[#3B82F6] group-hover:text-[#d1451a] transition-colors">
                    <span className="text-sm font-medium mr-1">View Details</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

              </div>
            </div>

              {/* AI Agent Developer Job */}
              <div 
                className="bg-[#121212] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer group"
                onClick={() => handleJobClick('/about/careers/ai-agent-developer')}
              >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#3b82f6] transition-colors">AI Agent Developer</h3>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-[#3b82f6]/10 text-[#3b82f6] rounded-full text-xs font-medium">
                        Full-time
                      </span>
                      <span className="px-2 py-1 bg-[#10b981]/10 text-[#10b981] rounded-full text-xs font-medium">
                        Remote
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4">
                  Develop intelligent AI agents that automate complex business processes and enhance our cloud infrastructure solutions.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[#9ca3af] text-xs">Posted: Dec 2024</span>
                  <div className="flex items-center text-[#3b82f6] group-hover:text-[#2563eb] transition-colors">
                    <span className="text-sm font-medium mr-1">View Details</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

              </div>
            </div>

              {/* Backend Developer Job */}
              <div 
                className="bg-[#121212] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer group"
                onClick={() => handleJobClick('/about/careers/backend-developer')}
              >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#10b981] transition-colors">Backend Developer</h3>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-[#10b981]/10 text-[#10b981] rounded-full text-xs font-medium">
                        Full-time
                      </span>
                      <span className="px-2 py-1 bg-[#3b82f6]/10 text-[#3b82f6] rounded-full text-xs font-medium">
                        Remote
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4">
                  Build robust, scalable backend systems that power our cloud infrastructure solutions with high-performance APIs and microservices.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[#9ca3af] text-xs">Posted: Dec 2024</span>
                  <div className="flex items-center text-[#10b981] group-hover:text-[#059669] transition-colors">
                    <span className="text-sm font-medium mr-1">View Details</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#F1F5F9] mb-4">Why Choose Angurs?</h2>
            <p className="text-xl text-[#E2E8F0] max-w-3xl mx-auto">
              Discover what makes Angurs a great place to grow your career and make an impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#F1F5F9] mb-3">Cutting-Edge Projects</h3>
              <p className="text-[#E2E8F0]">Work on innovative solutions using the latest technologies and best practices.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#F1F5F9] mb-3">Continuous Learning</h3>
              <p className="text-[#E2E8F0]">Access to training, certifications, and conferences to advance your skills.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#F1F5F9] mb-3">Collaborative Culture</h3>
              <p className="text-[#E2E8F0]">Work with talented, supportive colleagues who share your passion for technology.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#F1F5F9] mb-3">Impact & Growth</h3>
              <p className="text-[#E2E8F0]">Make a real difference while advancing your career with clear growth paths.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#F1F5F9] mb-3">Flexible Work</h3>
              <p className="text-[#E2E8F0]">Remote-friendly environment with flexible hours and work-life balance.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#F1F5F9] mb-3">Competitive Benefits</h3>
              <p className="text-[#E2E8F0]">Comprehensive benefits package including health, dental, and retirement plans.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Careers;


