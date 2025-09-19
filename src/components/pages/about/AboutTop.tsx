import ImageFull from "@/components/reusable/ImageFull";
import aboutImg from "../../../assets/imgs/hero.webp";
function AboutTop() {
  return (
    <section className="dark:bg-black">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <ImageFull src={`${aboutImg}`} className="w-100 rounded-lg" alt="About Zivara team and company values" />
          </div>
          <div className="lg:p-5 px-3 ">
            <p className="text-base font-semibold tracking-wider ubun-text uppercase">
              Our values define who we are
            </p>
            <h2 className="text-3xl py-5">
            Focused on You
            </h2>
            <p className="text-[#E2E8F0]">
            Our goal is simple: we’re here to help you succeed. With a clear plan and a focus on results, we work to make your business thrive.
            </p>
            <h2 className="text-3xl py-5">
            Building Strong Relationships
            </h2>
            <p className="text-[#E2E8F0]">
            We believe in strong, lasting relationships. We invest in initiatives that help us connect with and support you every step of the way.
            </p>
            <h2 className="text-3xl py-5">
            Helping You Shape Your Future
            </h2>
            <p className="text-[#E2E8F0]">
            We guide you with education and clear insights, helping you create a path to success and growth when working with us.
            </p>

         
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTop;
