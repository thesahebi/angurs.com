import { useParams, Link } from "react-router-dom";
import { articles } from "./blogModel";
import { FaArrowLeft, FaCalendarAlt, FaTag, FaShareAlt, FaBookmark } from "react-icons/fa";

function BlogDetails() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#F1F5F9] mb-4">Article Not Found</h1>
          <p className="text-[#E2E8F0] mb-8">The article you're looking for doesn't exist.</p>
          <Link
            to="/resources/blog"
            className="inline-flex items-center px-6 py-3 bg-[#3B82F6] text-white rounded-lg hover:bg-[#2563EB] transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E293B] to-[#121212] pt-24 pb-16">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              to="/resources/blog"
              className="inline-flex items-center text-[#3B82F6] hover:text-[#2563EB] transition-colors mb-8 group"
            >
              <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-[#F59E0B] bg-[#1E293B] rounded-full border border-[#1E293B]">
                <FaTag className="mr-2 text-xs" />
                {article.category}
              </span>
              <span className="inline-flex items-center text-[#94A3B8] text-sm">
                <FaCalendarAlt className="mr-2 text-xs" />
                {article.date}
              </span>
            </div>

            {/* Article Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F1F5F9] mb-8 leading-tight">
              {article.title}
            </h1>

            {/* Article Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center px-4 py-2 text-[#3B82F6] bg-[#1E293B] rounded-lg hover:bg-[#3B82F6] hover:text-white transition-colors border border-[#1E293B]">
                <FaShareAlt className="mr-2" />
                Share
              </button>
              <button className="inline-flex items-center px-4 py-2 text-[#3B82F6] bg-[#1E293B] rounded-lg hover:bg-[#3B82F6] hover:text-white transition-colors border border-[#1E293B]">
                <FaBookmark className="mr-2" />
                Save
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="mb-12">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>

            {/* Article Content */}
            {article.details && (
              <article className="prose prose-lg max-w-none">
                <div className="bg-[#1E293B] rounded-2xl p-8 md:p-12 border border-[#1E293B]">
                  {article.details.content?.map((block, index) => {
                    switch (block.type) {
                      case "paragraph":
                        return (
                          <p key={index} className="text-[#E2E8F0] text-lg leading-relaxed mb-6">
                            {block.text}
                          </p>
                        );
                      case "list":
                        return (
                          <div key={index} className="my-8">
                            <ul className="space-y-3">
                              {block.items?.map((item, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="flex-shrink-0 w-2 h-2 bg-[#3B82F6] rounded-full mt-3 mr-4"></span>
                                  <span className="text-[#E2E8F0] text-lg leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      case "image":
                        return (
                          <div key={index} className="my-12">
                            <div className="relative group">
                              <img
                                src={block.url}
                                alt={block.caption || "Article Image"}
                                className="w-full rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                              />
                              {block.caption && (
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                                  <p className="text-white text-sm font-medium">{block.caption}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      default:
                        return null;
                    }
                  })}
                </div>
              </article>
            )}

            {/* Article Footer */}
            <div className="mt-16 pt-8 border-t border-[#1E293B]">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-[#94A3B8] text-sm">Share this article:</span>
                  <div className="flex gap-2">
                    <button className="p-2 text-[#3B82F6] bg-[#1E293B] rounded-lg hover:bg-[#3B82F6] hover:text-white transition-colors">
                      <FaShareAlt />
                    </button>
                    <button className="p-2 text-[#3B82F6] bg-[#1E293B] rounded-lg hover:bg-[#3B82F6] hover:text-white transition-colors">
                      <FaBookmark />
                    </button>
                  </div>
                </div>
                <Link
                  to="/resources/blog"
                  className="inline-flex items-center px-6 py-3 bg-[#3B82F6] text-white rounded-lg hover:bg-[#2563EB] transition-colors"
                >
                  <FaArrowLeft className="mr-2" />
                  Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogDetails;
