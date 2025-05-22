import FeatureCardV1 from "./FeatureCardV1";
import { featureData } from "./feature-data";





const FeatureV1 = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-main-bg" id="features">
      
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

       
      <div className="lg:my-12 text-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl xl:text-5xl ">
            Our Unique Features
          </h2>
        </div>

        <p className="text-xl pt-3 text-black dark:text-white">
          Fueling Growth for Small Businesses Through Expert Web Design and
          Development
        </p>
      </div>

      <div className=" grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-5 ">
        {featureData.map((data) => {
          return (
            <FeatureCardV1 key={data.id} {...data} cardClass="text-center rounded-2xl p-5 transition-all duration-300 hover:shadow-lg" />
          );
        })}
      </div>
      </div>
    </section>
  );
};

export default FeatureV1;




