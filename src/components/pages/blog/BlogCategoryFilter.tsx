import React from 'react';

interface BlogCategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const BlogCategoryFilter: React.FC<BlogCategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="mb-10 md:mb-16">
      <h3 className="text-2xl font-bold text-[#e7e7e7] mb-6 text-center">
        Blog Categories
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => onCategoryChange('All')}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
            selectedCategory === 'All'
              ? 'bg-[#3B82F6] text-[#e7e7e7] shadow-lg'
              : 'bg-[#1E293B] text-[#e7e7e7] border border-[#1E293B] hover:border-[#3B82F6] hover:text-[#3B82F6]'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-[#3B82F6] text-[#e7e7e7] shadow-lg'
                : 'bg-[#1E293B] text-[#e7e7e7] border border-[#1E293B] hover:border-[#3B82F6] hover:text-[#3B82F6]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogCategoryFilter;
