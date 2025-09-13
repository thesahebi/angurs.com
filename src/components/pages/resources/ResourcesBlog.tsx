import React from "react";
import BlogList from "../blog/BlogList";

const ResourcesBlog: React.FC = () => {

  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Hero Section */}
      <section className="bg-[#121212] pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-12 text-[#F1F5F9]">
              Technology
              <span className="block text-[#3B82F6]">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#E2E8F0] mb-10 md:mb-16 leading-relaxed">
              Stay ahead with the latest insights, trends, and best practices in technology, 
              infrastructure, and digital transformation from our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#latest-posts"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#3B82F6] rounded-full hover:bg-[#2563EB] transition-colors shadow-lg"
              >
                Read Latest Posts
              </a>
              <a
                href="#categories"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#3B82F6] bg-[#121212] border-2 border-[#3B82F6] rounded-full hover:bg-[#1E293B] transition-colors"
              >
                Browse Categories
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Blog Content */}
      <section className="py-16 bg-[#121212]">
        <div className="container mx-auto px-4">
          <BlogList path="/blogs" displayClass="lg:grid-cols-3 md:grid-cols-2 gap-8" showCategories={true} />
        </div>
      </section>


    </div>
  );
};

export default ResourcesBlog;
