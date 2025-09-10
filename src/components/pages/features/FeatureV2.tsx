import React from "react";
import { brandinfData, programmingData } from "./feature-data";
import FeatureCardV2 from "./FeatureCardV2";
import ProgramCard from "./ProgramCard";
interface FeatureV2Mode {
  isTitle: boolean;
  isContent: boolean;
  isLeft?: boolean;
  isBoth?: boolean;
  cardClass?: string;
  titleClass?: string;
}

const FeatureV2: React.FC<FeatureV2Mode> = ({
  isTitle,
  isContent,
  isLeft,
  cardClass,
  titleClass,
  isBoth
}) => {
  return (
    <section className="  dark:bg-black py-12" id="solutions">
      {/* bg-blue-100 */}
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="lg:my-12 text-center">
          {isTitle && (
            <div className={`${titleClass}`}>
              <p className="text-base font-semibold tracking-wider ubun-text uppercase">
                Future-ready solutions
              </p>
              <h2 className="text-3xl font-bold text-[#1f2937] sm:text-4xl xl:text-5xl dark:text-white ">
                 Built to scale with your business.
              </h2>
            </div>
          )}

          {isContent && (
            <p className="text-xl text-[#6b7280] py-3 lg:px-36 ">
              We deliver seamless digital solutions that connect, protect, and scale with your business. From cloud and development to design and hosting, everything works together to help your brand grow confidently
            </p>
          )}
        </div>

        <div className="grid lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-1 gap-5 ">
          {isBoth ? (
            <div className=" grid ">
              {brandinfData.map((data) => {
                return (
                  <FeatureCardV2
                    key={data.id}
                    {...data}
                    cardClass={`text-start ${cardClass}`}
                  />
                );
              })}
            </div>
          ) : (
            <>
              {brandinfData.map((data) => {
                return (
                  <FeatureCardV2
                    key={data.id}
                    {...data}
                    cardClass={`text-start ${cardClass}`}
                  />
                );
              })}
            </>
          )}

          {/* {isLeft ? <AnimatedListDemo1 /> : ""} */}
          {isLeft ? (<div className="py-5">

{/* <h1>Technology</h1> */}
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-3 gap-2 text-center">
            {programmingData.map((data) => {
                return (
                  <ProgramCard
                    key={data.id}
                    {...data}
                    cardClass={`text-center ${cardClass}`}
                  />
                );
              })}
          </div>
          </div>) : ""}
        </div>
      </div>
    </section>
  );
};

export default FeatureV2;
