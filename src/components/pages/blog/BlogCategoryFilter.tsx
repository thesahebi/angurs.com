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
    <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
      {/* Section Header */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2 sm:px-0">
        <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-3 sm:mb-4 md:mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 bg-[#3B82F6] rounded-full mr-2 animate-pulse"></span>
          ✨ Explore Topics
        </div>
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#e7e7e7] mb-2 sm:mb-3 md:mb-4">
          Choose Your Path to
          <span className="block bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
            Knowledge
          </span>
        </h3>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
          Each category is a gentle doorway to understanding. Find the topics that speak to your curiosity and growth.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 px-2 sm:px-0">
        <button
          onClick={() => onCategoryChange('All')}
          className={`group relative px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl font-medium transition-all duration-300 hover:scale-105 text-xs sm:text-sm md:text-base ${
            selectedCategory === 'All'
              ? 'bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-[#e7e7e7] shadow-lg shadow-[#3B82F6]/25'
              : 'bg-[#1A1A1A] text-[#e7e7e7] border border-[#1E293B] hover:border-[#3B82F6] hover:text-[#3B82F6] hover:bg-[#1E293B]/50'
          }`}
        >
          <span className="relative z-10 flex items-center gap-2">
            <span className="text-lg">🌟</span>
            <span>All Topics</span>
          </span>
          {selectedCategory === 'All' && (
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          )}
        </button>
        {categories.map((category, index) => {
          const categoryEmojis = {
            'Technology': '💻',
            'Cloud': '☁️',
            'DevOps': '⚙️',
            'Security': '🔒',
            'Infrastructure': '🏗️',
            'Automation': '🤖',
            'Networking': '🌐',
            'Development': '💡',
            'AI/ML': '🧠',
            'Best Practices': '✨',
            'Tutorials': '📚',
            'Case Studies': '📊'
          };
          
          const emoji = categoryEmojis[category] || '📖';
          
          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`group relative px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl font-medium transition-all duration-300 hover:scale-105 text-xs sm:text-sm md:text-base ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-[#e7e7e7] shadow-lg shadow-[#3B82F6]/25'
                  : 'bg-[#1A1A1A] text-[#e7e7e7] border border-[#1E293B] hover:border-[#3B82F6] hover:text-[#3B82F6] hover:bg-[#1E293B]/50'
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-lg">{emoji}</span>
                <span>{category}</span>
              </span>
              {selectedCategory === category && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </button>
          );
        })}
      </div>

      {/* Gentle Divider */}
      <div className="flex justify-center mt-6 sm:mt-8 md:mt-10 lg:mt-12">
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent rounded-full opacity-60"></div>
      </div>
    </div>
  );
};

export default BlogCategoryFilter;
