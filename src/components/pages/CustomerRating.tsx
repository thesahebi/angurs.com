import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, index) => {
        const isFullStar = index < Math.floor(rating);
        const isHalfStar = index === Math.floor(rating) && rating % 1 !== 0;
        
        return (
          <svg
            key={index}
            className={cn(
              "w-4 h-4",
              isFullStar ? "text-[#3B82F6] fill-current" : 
              isHalfStar ? "text-[#3B82F6] fill-current" : 
              "text-[#1E293B]"
            )}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            {isHalfStar ? (
              <defs>
                <linearGradient id={`half-${index}`}>
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="50%" stopColor="#1E293B" />
                </linearGradient>
              </defs>
            ) : null}
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      })}
      <span className="ml-2 text-sm font-medium text-[#3B82F6]">{rating}</span>
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
    <section className="py-16 sm:py-20 md:py-24 bg-[#0A0A0A] relative overflow-hidden" aria-label="Customer testimonials">
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
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-6 sm:mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3B82F6] rounded-full mr-2 animate-pulse"></span>
            ⭐ Customer Stories
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#e7e7e7] mb-3 sm:mb-4">
            What Our Clients
            <span className="relative block mt-1 sm:mt-2">
              <span className="bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                Say About Us
              </span>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#3b82f6] to-[#8B5CF6] rounded-full opacity-60"></div>
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#e7e7e7]/70 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Real feedback from real clients who've transformed their businesses with our solutions
          </p>
        </div>

        {/* Customer Testimonials */}
        <div className="relative">
          <Marquee pauseOnHover className="[--duration:25s] [--direction:reverse]">
            {/* Testimonial 1 */}
            <div className="bg-[#1A1A1A] rounded-3xl p-6 sm:p-8 border border-[#1A1A1A] hover:border-[#3b82f6]/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3b82f6]/10 mr-6 w-80 sm:w-96 flex-shrink-0">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#3b82f6] to-[#8B5CF6] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">SJ</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#e7e7e7] text-base">Sarah Johnson</h4>
                  <p className="text-sm text-[#e7e7e7]/70">CTO | TechCorp</p>
                </div>
              </div>
              
              <blockquote className="text-[#e7e7e7] text-sm sm:text-base leading-relaxed mb-6">
                "Zivara transformed our infrastructure completely. The automation tools saved us months of manual work and the support team is exceptional."
              </blockquote>
              
              <div className="mb-6">
                <StarRating rating={4.8} />
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#e7e7e7]/70">Infrastructure efficiency:</span>
                  <span className="font-bold text-[#3B82F6] text-sm">+85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#e7e7e7]/70">Cost reduction:</span>
                  <span className="font-bold text-[#3B82F6] text-sm">-60%</span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#1A1A1A] rounded-3xl p-6 sm:p-8 border border-[#1A1A1A] hover:border-[#3b82f6]/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3b82f6]/10 mr-6 w-80 sm:w-96 flex-shrink-0">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#3b82f6] to-[#8B5CF6] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">MC</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#e7e7e7] text-base">Michael Chen</h4>
                  <p className="text-sm text-[#e7e7e7]/70">IT Director | Global Ent.</p>
                </div>
              </div>
              
              <blockquote className="text-[#e7e7e7] text-sm sm:text-base leading-relaxed mb-6">
                "The migration was seamless and the ongoing support has been outstanding. Our team productivity increased significantly."
              </blockquote>
              
              <div className="mb-6">
                <StarRating rating={4.5} />
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#e7e7e7]/70">Migration time:</span>
                  <span className="font-bold text-[#3B82F6] text-sm">2 months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#e7e7e7]/70">Productivity boost:</span>
                  <span className="font-bold text-[#3B82F6] text-sm">+40%</span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#1A1A1A] rounded-3xl p-6 sm:p-8 border border-[#1A1A1A] hover:border-[#3b82f6]/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3b82f6]/10 mr-6 w-80 sm:w-96 flex-shrink-0">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#3b82f6] to-[#8B5CF6] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">ER</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#e7e7e7] text-base">Emily Rodriguez</h4>
                  <p className="text-sm text-[#e7e7e7]/70">Ops Manager | InnovateTech</p>
                </div>
              </div>
              
              <blockquote className="text-[#e7e7e7] text-sm sm:text-base leading-relaxed mb-6">
                "Zivara's automation capabilities are game-changing. We've reduced deployment time from hours to minutes."
              </blockquote>
              
              <div className="mb-6">
                <StarRating rating={4.7} />
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#e7e7e7]/70">Deployment speed:</span>
                  <span className="font-bold text-[#3B82F6] text-sm">95% faster</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#e7e7e7]/70">Error reduction:</span>
                  <span className="font-bold text-[#3B82F6] text-sm">-80%</span>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-[#1A1A1A] rounded-3xl p-6 sm:p-8 border border-[#1A1A1A] hover:border-[#3b82f6]/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3b82f6]/10 mr-6 w-80 sm:w-96 flex-shrink-0">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#3b82f6] to-[#8B5CF6] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">DT</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#e7e7e7] text-base">David Thompson</h4>
                  <p className="text-sm text-[#e7e7e7]/70">CEO | StartupHub</p>
                </div>
              </div>
              
              <blockquote className="text-[#e7e7e7] text-sm sm:text-base leading-relaxed mb-6">
                "Excellent service and support. The team helped us scale our infrastructure as we grew from startup to enterprise."
              </blockquote>
              
              <div className="mb-6">
                <StarRating rating={4.3} />
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#e7e7e7]/70">Scalability:</span>
                  <span className="font-bold text-[#3B82F6] text-sm">10x growth</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#e7e7e7]/70">Uptime:</span>
                  <span className="font-bold text-[#3B82F6] text-sm">99.9%</span>
                </div>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-[#1A1A1A] rounded-3xl p-6 sm:p-8 border border-[#1A1A1A] hover:border-[#3b82f6]/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3b82f6]/10 mr-6 w-80 sm:w-96 flex-shrink-0">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#3b82f6] to-[#8B5CF6] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">AL</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#e7e7e7] text-base">Alex Liu</h4>
                  <p className="text-sm text-[#e7e7e7]/70">DevOps Lead | CloudFirst</p>
                </div>
              </div>
              
              <blockquote className="text-[#e7e7e7] text-sm sm:text-base leading-relaxed mb-6">
                "The security features and compliance tools are top-notch. We feel confident with our data protection."
              </blockquote>
              
              <div className="mb-6">
                <StarRating rating={4.6} />
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#e7e7e7]/70">Security score:</span>
                  <span className="font-bold text-[#3B82F6] text-sm">A+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#e7e7e7]/70">Compliance:</span>
                  <span className="font-bold text-[#3B82F6] text-sm">100%</span>
                </div>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
