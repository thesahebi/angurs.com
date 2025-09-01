import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";

import clientLogo1 from "../../assets/imgs/clients/client1.webp";
import clientLogo2 from "../../assets/imgs/clients/client2.webp";
import clientLogo3 from "../../assets/imgs/clients/client3.webp";
export const clientData: any[] = [
  {
    id: 1,
    imgUrl: clientLogo1
  },
  {
    id: 2,
    imgUrl: clientLogo2
  },
  {
    id: 3,
    imgUrl: clientLogo3
  },
  {
    id: 4,
    imgUrl: clientLogo1
  },
  {
    id: 5,
    imgUrl: clientLogo2
  },
  {
    id: 6,
    imgUrl: clientLogo3
  }
];
const ClientV1Card = ({ imgUrl }: any) => {
  return (
    <figure
      className={cn(
        "relative lg:w-52 cursor-pointer overflow-hidden  bg-transparent  p-5"
      )}
    >
      <div className="flex flex-row items-center gap-6">
        <img className=" h-24 w-24" alt="" src={imgUrl} />
      </div>
    </figure>
  );
};

export function ClientV1() {
  return (
    <div className="relative  flex h-[150px] w-full flex-col items-center justify-center overflow-hidden bg-ubun  ">
      <Marquee pauseOnHover className="[--duration:10s]">
        {clientData.map((data) => (
          <ClientV1Card key={data.id} {...data} />
        ))}
      </Marquee>

     
    </div>
  );
}
