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
    <figure className="relative mx-8 flex items-center justify-center">
      <div className="flex items-center justify-center p-6 rounded-lg hover:bg-[#1E293B] transition-colors duration-200">
        <img 
          className="h-16 w-auto max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all duration-300" 
          alt="Client logo" 
          src={imgUrl} 
        />
      </div>
    </figure>
  );
};

export function ClientV1() {
  return (
    <section className="py-16 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-lg font-medium text-[#E2E8F0] mb-8">Trusted by leading companies</h3>
        </div>
        <div className="relative">
          <Marquee pauseOnHover className="[--duration:15s]">
            {clientData.map((data) => (
              <ClientV1Card key={data.id} {...data} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
