
import TeamCardV2 from "../reusable/TeamCardV2";
import { teamMember } from "@/utils/teamData";

const TeamsV2 = () => {
  return (
    <section className=" dark:bg-black">
      
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

     
      <div className="lg:py-12 md:py-8 text-center">
        <div className="text-center">
          <h2 className="hero-title text-[#e7e7e7]">
            Meet the brain
          </h2>
        </div>

        <p className="text-xl text-[#e7e7e7] py-3">
          Clarity gives you the blocks & components you need to create a truly
          professional website,
          <br /> landing page or admin panel for your SaaS.
        </p>
      </div>
      

      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 lg:gap-5  md:gap-5 gap-3   ">
        {teamMember.map((data) => {
          return (
            <TeamCardV2
              key={data.id}
              profile={data.imgUrl}
              job={data.job}
              name={data.name}
              experience={data.expir}
              className="h-100 border-0"
              imgClass="h-96 lg:w-72 md:w-72 w-full rounded-lg shadow-sm"
              footerClass=" relative text-center text-white rounded-lg w-100 -top-16 pb-4  team-f-v1 "
            />
          );
        })}
      </div>
      </div>
    </section>
  );
};

export default TeamsV2;
