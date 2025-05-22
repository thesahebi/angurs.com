import FrontendShowcase from "./FrontendShowcase";
import { showcaseData } from "./showcaseData";

const OurWorks = () => {
  return (
    <section className="py-32 dark:bg-main-bg">
      <div className=" w-full    max-w-7xl px-4 mx-auto sm:px-6 lg:px-8  p-12">

        {showcaseData.map((data) => {
          return <FrontendShowcase {...data}  />;
        })}
      </div>
    </section>
  );
};

export default OurWorks;
