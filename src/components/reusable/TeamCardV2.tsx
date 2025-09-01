import React from "react";

import ImageFull from "./ImageFull";
import { BorderBeam } from "../ui/border-beam";

export interface TeamCardV2Props {
  profile: string;
  className?: string;
  name: string;
  job: string;
  experience: number;
  imgClass?: string;
  footerClass?: string;
}

const TeamCardV2: React.FC<TeamCardV2Props> = ({
  profile,
  className = "",
  name,
  job,
  imgClass = "",
  footerClass = ""
}) => {
  return (
    <>
     <div className={`${className} relative  ...`}>
      <div className="relative">
         <ImageFull className={` ${imgClass} ...`} src={profile} />
       <BorderBeam  duration={2} borderWidth={3} className="rounded-lg"/>
      </div>
     
      <div className={` ${footerClass}`}>
        <div className="font-bold ...">{name}</div>
        <div className="">
          {job} 
          {/* ({experience} years) */}
        </div>
      </div>
    </div>
    </>
   
  );
};

export default TeamCardV2;
