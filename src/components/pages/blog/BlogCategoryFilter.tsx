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
      <h3 className="text-2xl font-bold text-[#1f2937] mb-6 text-center">
        Blog Categories
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => onCategoryChange('All')}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
            selectedCategory === 'All'
              ? 'bg-[#e95420] text-white shadow-lg'
              : 'bg-white text-[#6b7280] border border-gray-200 hover:border-[#e95420] hover:text-[#e95420]'
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
                ? 'bg-[#e95420] text-white shadow-lg'
                : 'bg-white text-[#6b7280] border border-gray-200 hover:border-[#e95420] hover:text-[#e95420]'
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
