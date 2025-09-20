import React, { useState } from 'react';
import PageHero from '../../../reusable/PageHero';
import JobApplicationForm from '../../../reusable/JobApplicationForm';

const UIUXDesigner: React.FC = () => {
  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(false);

  return (
    <div>
      <PageHero
        title="UI/UX Designer"
        subtitle="Design the Future of Technology"
        description="Join our team to create intuitive, user-friendly interfaces for our cloud infrastructure and automation solutions."
        accentColor="#3B82F6"
        backgroundPattern="dots"
        showGraph={true}
        graphType="pie"
        isHomepage={false}
        isAboutUs={true}
      />

      {/* Job Details */}
      <section className="py-16 md:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Job Header */}
            <div className="bg-[#0A0A0A] rounded-3xl shadow-lg border border-gray-100 overflow-hidden mb-10 md:mb-16">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#d1451a] rounded-2xl flex items-center justify-center mr-4">
                        <svg className="w-8 h-8 text-[#e7e7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                        </svg>
                      </div>
                      <div>
                        <h1 className="text-3xl font-bold text-[#1f2937] mb-2">UI/UX Designer</h1>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-sm font-medium border border-[#3B82F6]/20">
                            Full-time
                          </span>
                          <span className="px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] rounded-full text-sm font-medium border border-[#3b82f6]/20">
                            Remote
                          </span>
                          <span className="px-3 py-1 bg-[#10b981]/10 text-[#10b981] rounded-full text-sm font-medium border border-[#10b981]/20">
                            Design
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-[#6b7280] text-lg leading-relaxed mb-6">
                      We're looking for a creative UI/UX Designer to join our team and help design intuitive, 
                      user-friendly interfaces for our cloud infrastructure and automation solutions.
                    </p>
                  </div>
                  <div className="lg:ml-8 lg:flex-shrink-0">
                    <button 
                      onClick={() => setIsApplicationFormOpen(true)}
                      className="w-full lg:w-auto px-8 py-3 text-[#e7e7e7] border border-white/20 font-semibold rounded-xl transition-colors duration-200 flex items-center justify-center hover:bg-[#e95420]"
                      style={{ backgroundColor: '#ff6b35' }}
                    >
                      Apply Now
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Requirements */}
                  <div>
                    <h4 className="text-lg font-semibold text-[#1f2937] mb-4 flex items-center">
                      <svg className="w-5 h-5 text-[#3B82F6] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Requirements
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-[#10b981] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#6b7280]">3+ years of UI/UX design experience</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-[#10b981] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#6b7280]">Proficiency in Figma, Sketch, or Adobe XD</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-[#10b981] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#6b7280]">Experience with design systems</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-[#10b981] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#6b7280]">Strong portfolio showcasing UX process</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-[#10b981] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#6b7280]">Knowledge of HTML/CSS is a plus</span>
                      </li>
                    </ul>
                  </div>

                  {/* What You'll Do */}
                  <div>
                    <h4 className="text-lg font-semibold text-[#1f2937] mb-4 flex items-center">
                      <svg className="w-5 h-5 text-[#3b82f6] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      What You'll Do
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-[#3b82f6] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-[#6b7280]">Design intuitive user interfaces for web applications</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-[#3b82f6] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-[#6b7280]">Conduct user research and usability testing</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-[#3b82f6] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-[#6b7280]">Create wireframes, prototypes, and design systems</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-[#3b82f6] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-[#6b7280]">Collaborate with developers and product managers</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-[#3b82f6] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-[#6b7280]">Ensure consistent design across all platforms</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-[#9ca3af] text-sm mb-4 sm:mb-0">
                      <span className="font-medium">Posted:</span> December 2024 • 
                      <span className="font-medium ml-1">Location:</span> Remote • 
                      <span className="font-medium ml-1">Type:</span> Full-time
                    </div>
                    <div className="flex space-x-3">
                      <button className="px-4 py-2 text-[#6b7280] hover:text-[#1f2937] border border-gray-200 hover:border-gray-300 rounded-lg transition-colors duration-200">
                        Save Job
                      </button>
                      <button className="px-4 py-2 text-[#6b7280] hover:text-[#1f2937] border border-gray-200 hover:border-gray-300 rounded-lg transition-colors duration-200">
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Application Form Modal */}
      <JobApplicationForm
        isOpen={isApplicationFormOpen}
        onClose={() => setIsApplicationFormOpen(false)}
        jobTitle="UI/UX Designer"
        jobId="ui-ux-designer"
      />
    </div>
  );
};

export default UIUXDesigner;
