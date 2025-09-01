import React from "react";

import { ProgramModelProps } from "./feature-model";
const ProgramCard: React.FC<ProgramModelProps> = ({
  cardClass,
  icon: Icon,
  name,
  iconCradDIVClass
}) => {
  return (
    <div className={`${cardClass} border rounded-lg m-auto p-5 text-center `}>
      <div className={`p-3 ${iconCradDIVClass}`}>
        {typeof Icon === "function" ? <Icon size={40} /> : Icon}
      </div>

      <p className="text-gray-600 dark:text-white leading-relaxed">{name}</p>
    </div>
  );
};

export default ProgramCard;
