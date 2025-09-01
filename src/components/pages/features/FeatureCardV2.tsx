import React from "react";
import { FeatureModelProps } from "./feature-model";

const FeatureCardV2: React.FC<FeatureModelProps> = ({
  cardClass,
  icon: Icon,
  title,
  content,
  bgColor,
  iconColor,
  iconCradDIVClass =''
}) => {
  return (
    <div
      className={`${cardClass} lg:flex md:flex items-start gap-4 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg`}
    >
      <div
        className={`flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${iconCradDIVClass}`}
        style={{ backgroundColor: bgColor }}
      >
        {typeof Icon === "function" ? (
          <Icon size={24} style={{ color: iconColor }} />
        ) : (
          Icon
        )}
      </div>

      <div className="flex-grow mt-3 lg:mt-0 md:mt-0">
        <h3 className="text-xl font-bold text-gray-900 mb-2 dark:text-white">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{content}</p>
      </div>
    </div>
  );
};

export default FeatureCardV2;
