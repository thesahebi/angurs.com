import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";
import { customerRatingData, CustomerRatingModel } from "@/utils/customerRatingData";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={cn(
            "w-4 h-4",
            index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
          )}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const CustomerRatingCard = ({
  name,
  position,
  company,
  rating,
  content
}: CustomerRatingModel) => {
  return (
    <figure
      className={cn(
        "relative w-96 cursor-pointer overflow-hidden rounded-3xl bg-white shadow-2xl p-8 hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 group"
      )}
      role="article"
      aria-label={`Testimonial from ${name}, ${position} at ${company}`}
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity" aria-hidden="true">
        <svg className="w-12 h-12 text-[#e95420]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
        </svg>
      </div>

      <div className="flex flex-row items-center gap-4 mb-6">
        <div className="rounded-2xl h-16 w-16 bg-gradient-to-br from-[#e95420] to-[#d1451a] flex items-center justify-center shadow-lg">
          <svg
            className="w-8 h-8 text-[#e7e7e7]"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex flex-col flex-1">
          <figcaption className="text-lg font-semibold text-[#1f2937]">
            {name}
          </figcaption>
          <p className="text-sm font-medium text-[#6b7280]">
            {position}
          </p>
          <p className="text-xs text-[#9ca3af]">
            {company}
          </p>
        </div>
      </div>
      
      <div className="mb-6">
        <StarRating rating={rating} />
      </div>
      
      <blockquote className="text-[#6b7280] text-lg leading-relaxed relative">
        "{content}"
      </blockquote>
    </figure>
  );
};

export function CustomerRating() {
  return (
    <section className="py-16 md:py-16 md:py-24 bg-[#0A0A0A] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

        {/* Customer Testimonials - Moving to Left */}
        <div className="relative">
          <Marquee pauseOnHover className="[--duration:20s] [--direction:reverse]">
            {/* Testimonial 1 */}
            <div className="bg-[#1E293B] rounded-xl p-6 shadow-lg border border-[#1E293B] hover:shadow-xl transition-all duration-300 mr-6 w-80 flex-shrink-0">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#e7e7e7] font-bold text-xs">SJ</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-[#e7e7e7] text-sm">Sarah Johnson</h4>
                  <p className="text-xs text-[#e7e7e7]">CTO | TechCorp</p>
                </div>
              </div>
              
              <blockquote className="text-[#e7e7e7] text-sm leading-relaxed mb-4">
                "Zivara gives us the flexibility to scale efficiently, ensures security and compliance, and reduces operational complexity."
              </blockquote>
              
              <div className="mb-4">
                <StarRating rating={5} />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-[#e7e7e7]">Hardware nodes:</span>
                  <span className="font-bold text-[#e7e7e7]">90% fewer</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#e7e7e7]">Cost reduction:</span>
                  <span className="font-bold text-[#e7e7e7]">70%</span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#1E293B] rounded-xl p-6 shadow-lg border border-[#1E293B] hover:shadow-xl transition-all duration-300 mr-6 w-80 flex-shrink-0">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#e7e7e7] font-bold text-xs">MC</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-[#e7e7e7] text-sm">Michael Chen</h4>
                  <p className="text-xs text-[#e7e7e7]">IT Director | Global Ent.</p>
                </div>
              </div>
              
              <blockquote className="text-[#e7e7e7] text-sm leading-relaxed mb-4">
                "The move to Zivara was easy, taking just over 2 months to switch mission critical systems, and we're saving over 70% on costs."
              </blockquote>
              
              <div className="mb-4">
                <StarRating rating={5} />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-[#e7e7e7]">Time saved:</span>
                  <span className="font-bold text-[#e7e7e7]">2+ weeks</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#e7e7e7]">Deployments:</span>
                  <span className="font-bold text-[#e7e7e7]">Instant</span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#1E293B] rounded-xl p-6 shadow-lg border border-[#1E293B] hover:shadow-xl transition-all duration-300 mr-6 w-80 flex-shrink-0">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#e7e7e7] font-bold text-xs">ER</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-[#e7e7e7] text-sm">Emily Rodriguez</h4>
                  <p className="text-xs text-[#e7e7e7]">Ops Manager | InnovateTech</p>
                </div>
              </div>
              
              <blockquote className="text-[#e7e7e7] text-sm leading-relaxed mb-4">
                "Zivara is the ultimate one-stop shop for all your IT needs. With automation and infrastructure management, it saved us weeks of engineering time."
              </blockquote>
              
              <div className="mb-4">
                <StarRating rating={5} />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-[#e7e7e7]">Deployments:</span>
                  <span className="font-bold text-[#e7e7e7]">20 seconds</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#e7e7e7]">Innovation:</span>
                  <span className="font-bold text-[#e7e7e7]">Boosted</span>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-[#1E293B] rounded-xl p-6 shadow-lg border border-[#1E293B] hover:shadow-xl transition-all duration-300 mr-6 w-80 flex-shrink-0">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#e7e7e7] font-bold text-xs">DT</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-[#e7e7e7] text-sm">David Thompson</h4>
                  <p className="text-xs text-[#e7e7e7]">CEO | StartupHub</p>
                </div>
              </div>
              
              <blockquote className="text-[#e7e7e7] text-sm leading-relaxed mb-4">
                "Zivara' built-in policies, automation tools, and version control all make managing our backend infrastructure a breeze."
              </blockquote>
              
              <div className="mb-4">
                <StarRating rating={5} />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-[#e7e7e7]">Deployment:</span>
                  <span className="font-bold text-[#e7e7e7]">80% faster</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#e7e7e7]">Downtime:</span>
                  <span className="font-bold text-[#e7e7e7]">Zero</span>
                </div>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
