// import HeroV1 from "./hero/HeroV1";
import FeatureV1 from "./features/FeatureV1";
// import { Testimonial } from "../reusable/Testimonial";
import { ClientV1 } from "./ClientV1";
import { CustomerRating } from "./CustomerRating";

import WorkTogether from "./WorkTogether";
import HeroV2 from "./hero/HeroV2";

const LandingPage = () => {
  return (
    <main>
      {/* <HeroV1 /> */}
      <HeroV2 />
      <FeatureV1 />

      <WorkTogether />
      {/* <Testimonial /> */}
      <CustomerRating />
      <ClientV1 />
    </main>
  );
};

export default LandingPage;
