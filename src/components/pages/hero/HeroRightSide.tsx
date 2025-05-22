import { BorderBeam } from "@/components/ui/border-beam";

function HeroRightSide({ heroImg }: any) {
  return (
    // <div className="">
      <div className="relative p-3 rounded-lg">
        <img className="w-full" src={heroImg} alt="Hero" />
        <BorderBeam  duration={7}/>
      </div>
    // </div>
  );
}

export default HeroRightSide;
