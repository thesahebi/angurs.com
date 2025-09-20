import TeamCard from "../reusable/TeamCard";

import { teamMember } from "@/utils/teamData";

const Teams = ({ teamClass }: any) => {
  return (
    <section className=" dark:bg-black">

      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">

     
      {/* <div className="container"> */}

      <div className="text-center my-6">
        <h1 className="hero-title text-[#e7e7e7]">Our  members</h1>
        <p className="text-xl text-[#e7e7e7]">
          Clarity gives you the blocks & components you need to create a truly
          professional website,
          <br /> landing page or admin panel for your SaaS.
        </p>
      </div>

      {teamClass ? (
        <div className="grid grid-cols-3">
          {teamMember.map((data) => {
            return (
              <TeamCard
                key={data.id}
                profile={data.imgUrl}
                job={data.job}
                name={data.name}
                experience={data.expir}
                className=""
                imgClass={`h-40 w-40  shadow-sm ${teamClass}`}
              />
            );
          })}
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 ">
          
          {teamMember.map((data) => {
            return (
              <TeamCard
                key={data.id}
                profile={data.imgUrl}
                job={data.job}
                name={data.name}
                experience={data.expir}
                className=" mb-5 p-5 rounded-lg "
                imgClass={`h-96 w-96 rounded-t-lg   ${teamClass}`}
              />
            );
          })}
        </div>
     )} 
      </div>
    </section>
  );
};

export default Teams;
