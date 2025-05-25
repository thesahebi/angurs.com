// import HeroV1 from "./hero/HeroV1";
import FeatureV2 from "./features/FeatureV2";
import FeatureV1 from "./features/FeatureV1";
// import { Testimonial } from "../reusable/Testimonial";
import { ClientV1 } from "./ClientV1";

import { VelocityScroll } from "../ui/scroll-based-velocity";
import WorkTogether from "./WorkTogether";
import BlogList from "./blog/BlogList";
import HeroV2 from "./hero/HeroV2";

const LandingPage = () => {
  return (
    <>
      {/* <HeroV1 /> */}
      <HeroV2 />
  

      <VelocityScroll
        default_velocity={3}
        text="Creative Design, Development, Cloud, Security"
        className="bg-ubun py-2  font-mono  text-white text-5xl  uppercase  "
      />

      <FeatureV1 />

      <WorkTogether />
      <FeatureV2 isContent isTitle isBoth isLeft />
      {/* <Testimonial /> */}
      <ClientV1 />
      <BlogList
        slice={3}
        isSeeMore
        path="/blogs"
        displayClass="lg:grid-cols-3 md:grid-cols-2 gap-12"
      />
    </>
  );
};

export default LandingPage;
