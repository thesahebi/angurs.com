import React from "react";
import { FeatureModelProps } from "./feature-model";

const FeatureCardV1: React.FC<FeatureModelProps> = ({
  cardClass,
  icon: Icon,
  title,
  content,
  bgColor,
  iconColor
}) => {
  return (
    <div className={`${cardClass}   ...`}>
      <div className="flex  justify-center">
        <div
          className="h-32 w-32 rounded-full "
          style={{ backgroundColor: bgColor }}
        >
          {typeof Icon === "function" ? (
            <Icon
              className="relative top-12 left-12 h-8 w-8"
              style={{ color: iconColor }}
            />
          ) : (
            Icon
          )}
        </div>
      </div>
      <p className="text-xl font-bold  py-3">{title}</p>
      <p className="px-5 dark:text-white">{content}</p>
    </div>
  );
};

export default FeatureCardV1;
