import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";
import { customerRatingData, CustomerRatingModel } from "@/utils/customerRatingData";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={cn(
            "w-4 h-4",
            index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
          )}
          viewBox="0 0 20 20"
          fill="currentColor"
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
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
        <svg className="w-12 h-12 text-[#e95420]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
        </svg>
      </div>

      <div className="flex flex-row items-center gap-4 mb-6">
        <div className="rounded-2xl h-16 w-16 bg-gradient-to-br from-[#e95420] to-[#d1451a] flex items-center justify-center shadow-lg">
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
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
    <section className="py-16 bg-white relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex px-4 py-2 text-sm font-medium text-[#e95420] bg-[#e95420]/10 rounded-full mb-6">
            ⭐ Customer Stories
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1f2937] mb-6">
            What Our Customers{' '}
            <span className="bg-gradient-to-r from-[#e95420] to-[#d1451a] bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <p className="text-xl text-[#6b7280] max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services and the impact we've made on their businesses.
          </p>
        </div>

        <div className="relative">
          <Marquee pauseOnHover className="[--duration:30s]">
            {customerRatingData.map((data) => (
              <CustomerRatingCard key={data.id} {...data} />
            ))}
          </Marquee>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-24">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-[#1f2937] mb-4">Trusted by Businesses Worldwide</h3>
              <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
                Our commitment to excellence is reflected in the numbers and the satisfaction of our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#e95420] to-[#d1451a] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-[#1f2937] mb-2">4.9/5</div>
                <div className="text-lg font-semibold text-[#1f2937] mb-1">Average Rating</div>
                <div className="text-sm text-[#6b7280]">Based on 500+ reviews</div>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-[#1f2937] mb-2">98%</div>
                <div className="text-lg font-semibold text-[#1f2937] mb-1">Customer Satisfaction</div>
                <div className="text-sm text-[#6b7280]">Happy clients worldwide</div>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-[#1f2937] mb-2">24/7</div>
                <div className="text-lg font-semibold text-[#1f2937] mb-1">Support Available</div>
                <div className="text-sm text-[#6b7280]">Round-the-clock assistance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
