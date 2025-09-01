import React from "react";

import ImageFull from "./ImageFull";

export interface TeamCardV3Props {
  profile: string;
  className?: string;
  name: string;
  job: string;
  details?: string;
  experience: number;
  imgClass?: string;
  footerClass?: string;
}

const TeamCardV3: React.FC<TeamCardV3Props> = ({
  profile,
  className = "",
  name,
  job,
  imgClass = "",
  details
}) => {
  return (
    <div className={`flex  gap-6 ${className} ...`}>
      <ImageFull className={`  ${imgClass} ...`} src={profile} />
      <div className="">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-xl pb-3">{job}</p>
        <p className="pe-32">{details}</p>
      </div>
    </div>
  );
};

export default TeamCardV3;
