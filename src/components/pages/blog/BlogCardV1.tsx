import React from "react";
import { Article } from "./blogModel"; // Assuming `blogModel.ts` defines the Article type
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const BlogCardV1: React.FC<Article> = ({
  category,
  title,
  image,
  blogLink
}) => {
  return (
    <article className="bg-[#1A1A1A] rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group border border-[#1E293B]/50 hover:border-[#3B82F6]/30">
      <div className="relative overflow-hidden">
        <img
          src={`${image}?w=1200&h=300&quality=30`}
          alt={title}
          className="w-full h-32 sm:h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4">
          <span className="inline-block px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium text-[#e7e7e7] bg-[#3B82F6] rounded-full shadow-sm">
            {category}
          </span>
        </div>
      </div>

      <div className="p-3 sm:p-4 md:p-6">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#e7e7e7] mb-2 sm:mb-3 md:mb-4 line-clamp-2 group-hover:text-[#3B82F6] transition-colors leading-tight">
          {title}
        </h3>
        
        <Link 
          to={`${blogLink}`} 
          className="inline-flex items-center text-[#3B82F6] font-medium hover:text-[#2563EB] transition-colors text-xs sm:text-sm md:text-base"
        >
          Read Article
          <FaArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCardV1;
