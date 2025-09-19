// import HeroV1 from "./hero/HeroV1";
import FeatureV1 from "./features/FeatureV1";
// import { Testimonial } from "../reusable/Testimonial";
import { ClientV1 } from "./ClientV1";
import { CustomerRating } from "./CustomerRating";

import { VelocityScroll } from "../ui/scroll-based-velocity";
import WorkTogether from "./WorkTogether";
import HeroV2 from "./hero/HeroV2";

const LandingPage = () => {
  return (
    <main>
      {/* <HeroV1 /> */}
      <HeroV2 />
  

      <VelocityScroll
        default_velocity={2} 
        text="Beautiful Web Design • Smart Software Development • Seamless Server Migration • Scalable Microservices • Cloud Solutions That Grow • "
        className="text-white text-lg md:text-2xl lg:text-3xl xl:text-4xl font-medium tracking-wide"
      />

      <FeatureV1 />

      <WorkTogether />
      {/* <Testimonial /> */}
      <CustomerRating />
      <ClientV1 />
    </main>
  );
};

export default LandingPage;
