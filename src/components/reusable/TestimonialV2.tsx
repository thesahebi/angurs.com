import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";

import { testimonalData, TestimonalDataModel } from "@/utils/testimonalData";

const TestimonialCard = ({
  imgUrl,
  name,
  position,
  content
}: TestimonalDataModel) => {
  return (
    <figure
      className={cn(
        "relative w-96 cursor-pointer overflow-hidden rounded-xl  bg-white dark:bg-gray-800 shadow-sm p-5"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img className="rounded-full  h-16 w-16" alt="" src={imgUrl} />
        <div className="flex flex-col">
          <figcaption className="text-md font-bold  dark:text-white">
            {name}
          </figcaption>
          {/* <p className="text-xs font-medium dark:text-white/40">{name}</p> */}
          <p className="text-xs font-medium dark:text-white/40">{position}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-md">{content}</blockquote>
    </figure>
  );
};

export function Testimonial() {
  return (
    <section className="py-12 dark:bg-main-bg">
      <div className=" relative py-12 flex h-w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent border-0 text-center">
        <div className="text-center">
          <h2 className="lg:text-3xl md:text-2xl text-2xl font-bold text-gray-900 dark:text-white sm:text-4xl xl:text-5xl font-pj">
            Client Reference and Testimonial
          </h2>
        </div>

        <p className="lg:text-xl md:text-xl pt-3">
          Clarity gives you the blocks & components you need to create a truly
          professional website,
          <br /> landing page or admin panel for your SaaS.
        </p>
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {testimonalData.map((data) => (
          <TestimonialCard key={data.id} {...data} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-white dark:from-background"></div>
    </section>
  );
}
