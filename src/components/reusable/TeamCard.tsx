import React from "react";
import ImageFull from "./ImageFull";
import { TeamCardV2Props } from "./TeamCardV2";
// eslint-disable-next-line react/prop-types

const TeamCard: React.FC<TeamCardV2Props> = ({
  profile,
  className = "",
  name,
  job,
  experience,
  imgClass = ""
}) => {
  return (
    <>
      <div className={` border   ${className} dark:bg-gray-800`}>
        
        <ImageFull src={profile} className={imgClass} />
        <div className=" pt-2 pb-3">
          <div className="font-bold  text-xl">{name}</div>
          <div className=" tex-16 text mb-0">{job}</div>
          <div className=" text-14 mb-0"> Experience {experience} Years +</div>
  
        </div>
      </div>
    </>
  );
};

export default TeamCard;
