// import HeroV1 from "./hero/HeroV1";
import FeatureV2 from "./features/FeatureV2";
import FeatureV1 from "./features/FeatureV1";
// import { Testimonial } from "../reusable/Testimonial";
import { ClientV1 } from "./ClientV1";
import { CustomerRating } from "./CustomerRating";

import { VelocityScroll } from "../ui/scroll-based-velocity";
import WorkTogether from "./WorkTogether";
import HeroV2 from "./hero/HeroV2";

const LandingPage = () => {
  return (
    <>
      {/* <HeroV1 /> */}
      <HeroV2 />
  
 
      <VelocityScroll
        default_velocity={2} 
        text="Beautiful Web Design • Smart Software Development • Seamless Server Migration • Scalable Microservices • Cloud Solutions That Grow • "
        className="text-white text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide"
      />

      <FeatureV1 />

      <WorkTogether />
      <FeatureV2 isContent isTitle isBoth isLeft />
      {/* <Testimonial /> */}
      <CustomerRating />
      <ClientV1 />
    </>
  );
};

export default LandingPage;
