import React from "react";
import { FrontendShowcaseProps } from "./showcaseData";

const FrontendShowcase: React.FC<FrontendShowcaseProps> = ({
  title = "Podcast - Podcast Mobile App Solution",
  description = "Implement UX design into live and user friendly",
  bgColor = "",
  category = ["UI/UX Design", "App Design", "Wireframe"],
  // tech = [],
  orderImg = 1,
  orderContent = 0,
  imgUrl = ""
}) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center p-12 shadow-ms bg-white dark:bg-black rounded-xl mb-10 md:mb-16 border">
      {/* Left Side Content */}

      <div className={`space-y-6 order-${orderContent} `}>
        <div className="space-y-4">
          <p className="text-gray-600 text-lg tracking-wide dark:text-gray-400">{title}</p>
          <h1 className="lg:text-4xl  md:text-3xl  text-2xl font-bold text-gray-900 leading-tight dark:text-white">
            {description}
          </h1>
        
        </div>
        <div className="flex flex-wrap w-auto gap-3 mb-6">
       
          {category?.map((tag) => (
            <span
              key={tag}
              className={`px-4 py-2 ${bgColor} text-white rounded-full text-sm`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* <div className="flex flex-wrap w-auto gap-3 mb-6">
          <div></div>
          {tech?.map((tag) => (
            <span
              key={tag}
              className={`px-4 py-2 ${bgColor} text-white rounded-full text-sm`}
            >
              {tag}
            </span>
          ))}
        </div> */}

        <div className="flex items-center text-gray-500 hover:text-gray-900 transition-colors cursor-pointer group dark:text-gray-400">
            <span className="mr-2">Learn more</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
      </div>

      {/* Right Side Preview */}
      <div
        className={`relative rounded-[32px] shadow-xl transform hover:scale-[1.02] transition-transform order-${orderImg}`}
      >
        <img src={imgUrl} className="rounded-xl " />
      </div>
    </div>
  );
};

export default FrontendShowcase;
