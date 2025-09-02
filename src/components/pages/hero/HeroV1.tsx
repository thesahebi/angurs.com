// import WordRotate from "@/components/ui/word-rotate";
import heroImg from "../../../assets/imgs/hero-img.webp";
import HeroRightSide from "./HeroRightSide";
import GradualSpacing from "@/components/ui/gradual-spacing";

// import DockCom1 from "./DockCom1";
// import Safari from "@/components/ui/safari";

function HeroV1() {
  return (
    <section className="py-12 sm:py-16 lg:py-12  dark:bg-main-bg ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 items-center grid-cols-1 gap-12 ">
          <div>
            <GradualSpacing
              text="Cloud and Security"
              className="text-base  font-semibold tracking-wider ubun-text uppercase"
              classNameDIV="justify-start"
            />

            <h1 className="mt-4 text-4xl  font-bold text-black dark:text-white lg:mt-8 sm:text-6xl xl:text-8xl">
            </h1>
            <p className="mt-4  text-base text-black lg:mt-8 sm:text-xl dark:text-white flex ">
              Helping your business stay connected, secure, and supported.

              {/* {" "} */}
              {/* <WordRotate
                className="ubun-text ps-2 py-0"
                duration={1500}
                words={["Development", "Designing"]}
              /> */}
            </p>

            <a
              href="#"
              title=""
              className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-[#e95420] rounded-full lg:mt-16 hover:bg-black "
              role="button"
            >
              Let's Talk
              <svg
                className="w-6 h-6 ml-8 -mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>

            {/* <DockCom1/> */}

            {/* <p className="mt-5 text-gray-600">Already joined us? <a href="#" title="" className="text-black transition-all duration-200 hover:underline">Log in</a></p> */}
          </div>

          <HeroRightSide heroImg={heroImg} />
          {/* <Safari  src={heroImg}/> */}
        </div>
      </div>
    </section>
  );
}

export default HeroV1;
