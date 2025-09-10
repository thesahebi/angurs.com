import React from "react";
import BlogList from "../blog/BlogList";

const ResourcesBlog: React.FC = () => {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-white pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900">
              Technology
              <span className="block text-indigo-600">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              Stay ahead with the latest insights, trends, and best practices in technology, 
              infrastructure, and digital transformation from our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#latest-posts"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors shadow-lg"
              >
                Read Latest Posts
              </a>
              <a
                href="#categories"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-indigo-600 bg-white border-2 border-indigo-600 rounded-full hover:bg-indigo-50 transition-colors"
              >
                Browse Categories
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Blog Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <BlogList path="/blogs" displayClass="lg:grid-cols-3 md:grid-cols-2 gap-8" showCategories={true} />
        </div>
      </section>


    </div>
  );
};

export default ResourcesBlog;
