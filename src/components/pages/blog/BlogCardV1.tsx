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
    <article className="bg-[#1E293B] rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={`${image}?w=1200&h=300&quality=30`}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-[#3B82F6] rounded-full">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#F1F5F9] mb-4 line-clamp-2 group-hover:text-[#3B82F6] transition-colors">
          {title}
        </h3>
        
        <Link 
          to={`${blogLink}`} 
          className="inline-flex items-center text-[#3B82F6] font-medium hover:text-[#2563EB] transition-colors"
        >
          Read Article
          <FaArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCardV1;
