
import {  teamMemberV2 } from "@/utils/teamData";
import TeamCardV3 from "../reusable/TeamCardV3";

const TeamsV3 = () => {
  return (
    <section className=" dark:bg-black">

      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">

     
      <div className=" text-center">
        <div className="text-center">
          <h2 className="hero-title text-[#e7e7e7]">
            Meet the brain
          </h2>
        </div>

        <p className="text-xl text-[#e7e7e7] py-8">
          Clarity gives you the blocks & components you need to create a truly
          professional website,
          <br /> landing page or admin panel for your SaaS.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-1 ">
        {teamMemberV2.map((data) => {
          return (
            <TeamCardV3
              key={data.id}
              profile={data.imgUrl}
              job={data.job}
              name={data.name}
              details={data.details}
              experience={data.expir}
              className="h-100 border-0 mb-4"
              imgClass="h-96 w-72 rounded-lg shadow-sm"
              footerClass=" relative text-center text-white rounded-lg  -top-16 pb-4  team-f-v1 "
            />
          );
        })}
      </div>
      </div>
    </section>
  );
};

export default TeamsV3;
