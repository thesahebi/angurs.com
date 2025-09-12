import React, { useState } from 'react';
import PageHero from '../../../reusable/PageHero';
import JobApplicationForm from '../../../reusable/JobApplicationForm';

const BackendDeveloper: React.FC = () => {
  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(false);

  return (
    <div>
      <PageHero
        title="Backend Developer"
        subtitle="Build Scalable Infrastructure"
        description="Build robust, scalable backend systems that power our cloud infrastructure solutions with high-performance APIs and microservices."
        accentColor="#10b981"
        backgroundPattern="grid"
        showGraph={true}
        graphType="bar"
        isHomepage={false}
        isAboutUs={true}
      />

      {/* Job Details */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Job Header */}
            <div className="bg-[#121212] rounded-3xl shadow-lg border border-gray-100 overflow-hidden mb-12">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-2xl flex items-center justify-center mr-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <div>
                        <h1 className="text-3xl font-bold text-[#1f2937] mb-2">Backend Developer</h1>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-[#10b981]/10 text-[#10b981] rounded-full text-sm font-medium border border-[#10b981]/20">
                            Full-time
                          </span>
                          <span className="px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] rounded-full text-sm font-medium border border-[#3b82f6]/20">
                            Remote
                          </span>
                          <span className="px-3 py-1 bg-[#f59e0b]/10 text-[#f59e0b] rounded-full text-sm font-medium border border-[#f59e0b]/20">
                            Backend
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-[#6b7280] text-lg leading-relaxed mb-6">
                      Build robust, scalable backend systems that power our cloud infrastructure solutions. 
                      Work with cutting-edge technologies to create high-performance APIs and microservices.
                    </p>
                  </div>
                  <div className="lg:ml-8 lg:flex-shrink-0">
                    <button 
                      onClick={() => setIsApplicationFormOpen(true)}
                      className="w-full lg:w-auto px-8 py-3 bg-[#10b981] hover:bg-[#059669] text-white font-semibold rounded-xl transition-colors duration-200 flex items-center justify-center"
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
                      <svg className="w-5 h-5 text-[#10b981] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Requirements
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-[#10b981] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#6b7280]">3+ years of backend development experience</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-[#10b981] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#6b7280]">Proficiency in Node.js, Python, or Go</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-[#10b981] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#6b7280]">Experience with databases (PostgreSQL, MongoDB)</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-[#10b981] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#6b7280]">Knowledge of microservices architecture</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-[#10b981] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#6b7280]">Experience with cloud platforms and DevOps</span>
                      </li>
                    </ul>
                  </div>

                  {/* What You'll Do */}
                  <div>
                    <h4 className="text-lg font-semibold text-[#1f2937] mb-4 flex items-center">
                      <svg className="w-5 h-5 text-[#f59e0b] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      What You'll Do
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-[#f59e0b] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-[#6b7280]">Design and develop scalable backend APIs</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-[#f59e0b] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-[#6b7280]">Build microservices for cloud infrastructure</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-[#f59e0b] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-[#6b7280]">Optimize database performance and queries</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-[#f59e0b] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-[#6b7280]">Implement security best practices</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-[#f59e0b] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-[#6b7280]">Collaborate with frontend and DevOps teams</span>
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
        jobTitle="Backend Developer"
        jobId="backend-developer"
      />
    </div>
  );
};

export default BackendDeveloper;
