import React, { useState } from 'react';
import PageHero from '../../../reusable/PageHero';
import JobApplicationForm from '../../../reusable/JobApplicationForm';

const AIAgentDeveloper: React.FC = () => {
  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(false);

  return (
    <div>
      <PageHero
        title="AI Agent Developer"
        subtitle="Build the Future of Automation"
        description="Join our cutting-edge team to develop intelligent AI agents that automate complex business processes and enhance our cloud infrastructure solutions."
        accentColor="#3b82f6"
        backgroundPattern="circuits"
        showGraph={true}
        graphType="network"
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
                      <div className="w-16 h-16 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-2xl flex items-center justify-center mr-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h1 className="text-3xl font-bold text-[#1f2937] mb-2">AI Agent Developer</h1>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] rounded-full text-sm font-medium border border-[#3b82f6]/20">
                            Full-time
                          </span>
                          <span className="px-3 py-1 bg-[#10b981]/10 text-[#10b981] rounded-full text-sm font-medium border border-[#10b981]/20">
                            Remote
                          </span>
                          <span className="px-3 py-1 bg-[#8b5cf6]/10 text-[#8b5cf6] rounded-full text-sm font-medium border border-[#8b5cf6]/20">
                            AI/ML
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-[#6b7280] text-lg leading-relaxed mb-6">
                      Join our cutting-edge team to develop intelligent AI agents that automate complex business processes 
                      and enhance our cloud infrastructure solutions with advanced machine learning capabilities.
                    </p>
                  </div>
                  <div className="lg:ml-8 lg:flex-shrink-0">
                    <button 
                      onClick={() => setIsApplicationFormOpen(true)}
                      className="w-full lg:w-auto px-8 py-3 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold rounded-xl transition-colors duration-200 flex items-center justify-center"
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
                      <svg className="w-5 h-5 text-[#3b82f6] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Requirements
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-[#10b981] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#6b7280]">2+ years of AI/ML development experience</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-[#10b981] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#6b7280]">Proficiency in Python, TensorFlow, or PyTorch</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-[#10b981] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#6b7280]">Experience with LLMs and AI agent frameworks</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-[#10b981] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#6b7280]">Knowledge of cloud platforms (AWS, Azure, GCP)</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-[#10b981] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#6b7280]">Strong problem-solving and analytical skills</span>
                      </li>
                    </ul>
                  </div>

                  {/* What You'll Do */}
                  <div>
                    <h4 className="text-lg font-semibold text-[#1f2937] mb-4 flex items-center">
                      <svg className="w-5 h-5 text-[#8b5cf6] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      What You'll Do
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-[#8b5cf6] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-[#6b7280]">Develop intelligent AI agents for automation</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-[#8b5cf6] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-[#6b7280]">Integrate AI capabilities into existing systems</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-[#8b5cf6] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-[#6b7280]">Optimize AI models for production environments</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-[#8b5cf6] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-[#6b7280]">Collaborate with DevOps and infrastructure teams</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-[#8b5cf6] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-[#6b7280]">Research and implement cutting-edge AI technologies</span>
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
        jobTitle="AI Agent Developer"
        jobId="ai-agent-developer"
      />
    </div>
  );
};

export default AIAgentDeveloper;
