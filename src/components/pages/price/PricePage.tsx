import PricingCard from "./PriceV1";

import StatusCardV1 from "@/components/reusable/StatusCardV1";

const PricePage = () => {
  return (
    <section className="dark:bg-black " >
      <StatusCardV1 />
      <PricingCard />
    </section>
  );
};

export default PricePage;
