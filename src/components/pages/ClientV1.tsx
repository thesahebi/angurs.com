import Marquee from "../ui/marquee";

import clientLogo1 from "../../assets/imgs/clients/client1.webp";
import clientLogo2 from "../../assets/imgs/clients/client2.webp";
import clientLogo3 from "../../assets/imgs/clients/client3.webp";
export const clientData: any[] = [
  {
    id: 1,
    imgUrl: clientLogo1,
    name: "Client 1"
  },
  {
    id: 2,
    imgUrl: clientLogo2,
    name: "Client 2"
  },
  {
    id: 3,
    imgUrl: clientLogo3,
    name: "Client 3"
  },
  {
    id: 4,
    imgUrl: clientLogo1,
    name: "Client 1"
  },
  {
    id: 5,
    imgUrl: clientLogo2,
    name: "Client 2"
  },
  {
    id: 6,
    imgUrl: clientLogo3,
    name: "Client 3"
  }
];
const ClientV1Card = ({ imgUrl, name }: any) => {
  return (
    <figure className="relative mx-6 sm:mx-8 flex items-center justify-center">
      <div className="flex items-center justify-center p-4 sm:p-6 rounded-xl hover:bg-[#1E293B]/30 transition-all duration-300 hover:scale-105">
        <img 
          className="h-12 sm:h-16 w-auto max-w-[100px] sm:max-w-[120px] object-contain filter-none transition-all duration-300" 
          alt={`${name} logo`}
          src={imgUrl} 
        />
      </div>
    </figure>
  );
};

export function ClientV1() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#0A0A0A] relative overflow-hidden" aria-label="Client logos">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-[#3b82f6]/10 to-[#8B5CF6]/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-br from-[#8B5CF6]/8 to-[#3b82f6]/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#3b82f6]/40 rounded-full animate-ping delay-300"></div>
        <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#8B5CF6]/50 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#3b82f6]/30 rounded-full animate-ping delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-6 sm:mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3B82F6] rounded-full mr-2 animate-pulse"></span>
            🏢 Trusted Partners
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#e7e7e7] mb-3 sm:mb-4">
            Trusted by
            <span className="relative block mt-1 sm:mt-2">
              <span className="bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                Leading Companies
              </span>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#3b82f6] to-[#8B5CF6] rounded-full opacity-60"></div>
            </span>
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-[#e7e7e7]/70 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Join the ranks of industry leaders who trust us with their digital transformation journey
          </p>
        </div>
        
        <div className="relative" role="img" aria-label="Client company logos">
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
