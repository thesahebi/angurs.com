// import HeroV1 from "./hero/HeroV1";
import FeatureV1 from "./features/FeatureV1";
// import { Testimonial } from "../reusable/Testimonial";
import { ClientV1 } from "./ClientV1";
import { CustomerRating } from "./CustomerRating";

import WorkTogether from "./WorkTogether";
import HeroV2 from "./hero/HeroV2";
import SEOHead from "../seo/SEOHead";
import { organizationSchema } from "../seo/schemas";

const LandingPage = () => {
  return (
    <>
      <SEOHead
        title="Zivara LLC - Expert IT Infrastructure & Cloud Services"
        description="Transform your business with Zivara's expert IT solutions. Cloud migration, virtualization, backup & recovery, networking, and automation services. Trusted by leading companies."
        keywords="IT services, cloud migration, virtualization, backup recovery, networking, automation, IT infrastructure, business technology solutions"
        schema={organizationSchema}
      />
      <main>
      {/* <HeroV1 /> */}
      <HeroV2 />
      <FeatureV1 />

      <WorkTogether />
      {/* <Testimonial /> */}
      <CustomerRating />
      <ClientV1 />
    </main>
    </>
  );
};

export default LandingPage;
