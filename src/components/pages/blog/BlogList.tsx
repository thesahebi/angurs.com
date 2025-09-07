import BlogCardV1 from "./BlogCardV1";
import { articles } from "./blogModel";
import { Link } from "react-router-dom";

function BlogList({ slice, isSeeMore, path = "" , displayClass =""}: any) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights from our team
          </p>
        </div>

        <div className={`grid ${displayClass || 'lg:grid-cols-3 md:grid-cols-2 gap-8'}`}>
          {articles?.slice(0, slice).map((data, index) => (
            <BlogCardV1 key={index} {...data} blogLink={`${path}/${data.id}`} />
          ))}
        </div>

        {isSeeMore && (
          <div className="text-center mt-12">
            <Link
              to="/blogs"
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-[#e95420] rounded-full hover:bg-orange-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              View All Articles
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default BlogList;
