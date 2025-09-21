import React from "react";
import BlogList from "../blog/BlogList";

const ResourcesBlog: React.FC = () => {

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-18 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#0A0A0A] to-[#1A1A1A]"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-20 sm:opacity-30">
            <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-gradient-to-br from-[#3b82f6]/20 to-[#8B5CF6]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-br from-[#8B5CF6]/15 to-[#3b82f6]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 sm:w-56 md:w-64 h-40 sm:h-56 md:h-64 bg-gradient-to-br from-[#3b82f6]/10 to-[#8B5CF6]/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#3b82f6]/40 rounded-full animate-ping delay-300"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#8B5CF6]/50 rounded-full animate-ping delay-700"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-[#3b82f6]/30 rounded-full animate-ping delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-6 sm:mb-8 md:mb-12 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#3B82F6] rounded-full mr-3 animate-pulse"></span>
              ✨ Knowledge & Insights
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#e7e7e7] mb-3 sm:mb-4 md:mb-6 leading-tight">
              Your Journey to
              <span className="relative block mt-2">
                <span className="bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                  Digital Wisdom
                </span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#3b82f6] to-[#8B5CF6] rounded-full opacity-60"></div>
              </span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#e7e7e7] max-w-2xl sm:max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8 leading-relaxed px-2 sm:px-0">
              Discover stories, insights, and gentle guidance on your path through technology. 
              Like a trusted companion, we're here to help you navigate the digital world with confidence and clarity.
            </p>
            
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-[#e7e7e7]/70 px-2 sm:px-0">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#3b82f6] rounded-full animate-pulse"></div>
                <span>Expert Insights</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-pulse delay-300"></div>
                <span>Gentle Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#3b82f6] rounded-full animate-pulse delay-700"></div>
                <span>Trusted Knowledge</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Blog Content */}
      <section className="py-8 sm:py-12 md:py-16 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlogList path="/blogs" displayClass="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" showCategories={true} />
        </div>
      </section>


    </div>
  );
};

export default ResourcesBlog;
