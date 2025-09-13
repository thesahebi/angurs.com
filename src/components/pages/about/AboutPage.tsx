// import TeamsV3 from "../TeamsV3";
// import Teams from "../Teams";
import StatusCardV1 from "@/components/reusable/StatusCardV1";
import FAQ from "../FAQ";
import AboutTop from "./AboutTop";
// import FeatureV2 from "../features/FeatureV2";
// import { TbExclamationMark } from "react-icons/tb";
// import TeamsV3 from "../TeamsV3";
import Teams from "../Teams";

const AboutPage = () => {
  return (
    <>
    <StatusCardV1/>
    <AboutTop />
    {/* <FeatureV2 isContent={false} isTitle cardClass="border" titleClass="lg:pb-3 md:pb-10 mb-10 md:mb-16"/> */}
      <Teams />
    <FAQ/>
      

    </>
  );
};

export default AboutPage;
