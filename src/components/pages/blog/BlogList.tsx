import BlogCardV1 from "./BlogCardV1";
import { articles } from "./blogModel";
import { Link } from "react-router-dom";
import BlogCategoryFilter from "./BlogCategoryFilter";
import { useState, useMemo } from "react";

interface BlogListProps {
  slice?: number;
  isSeeMore?: boolean;
  path?: string;
  displayClass?: string;
  showCategories?: boolean;
}

function BlogList({ slice, isSeeMore, path = "", displayClass = "", showCategories = false }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories from articles
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(articles.map(article => article.category))];
    return uniqueCategories.filter(category => category) as string[];
  }, []);

  // Filter articles based on selected category
  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'All') {
      return articles;
    }
    return articles.filter(article => article.category === selectedCategory);
  }, [selectedCategory]);

  // Apply slice if specified
  const displayArticles = slice ? filteredArticles.slice(0, slice) : filteredArticles;
  return (
    <>
      {showCategories && (
        <BlogCategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      )}

      <div className={`grid ${displayClass || 'lg:grid-cols-3 md:grid-cols-2 gap-8'}`}>
        {displayArticles?.map((data, index) => (
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
    </>
  );
}

export default BlogList;
