import FeatureCardV1 from "./FeatureCardV1";
import { featureData } from "./feature-data";





const FeatureV1 = () => {
  return (
    <section className="py-16 bg-[#121212] relative overflow-hidden" id="features">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#1f2937"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#dots)" />
        </svg>
      </div>

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex px-4 py-2 text-sm font-medium text-[#3B82F6] bg-[#1E293B] rounded-full mb-6 border border-[#1E293B]">
            🚀 Our Solutions
          </div>
          <h2 className="text-4xl font-bold text-[#F1F5F9] sm:text-5xl xl:text-6xl mb-6">
            Empowering Your Business with{' '}
            <span className="text-[#3B82F6]">
              Smart Technology
            </span>
          </h2>
          <p className="text-xl text-[#F1F5F9] max-w-3xl mx-auto leading-relaxed">
            Fueling growth for businesses with intelligent, scalable technology solutions that adapt to your needs and drive success.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 md:gap-8">
          {featureData.map((data, index) => {
            return (
              <div key={data.id} className="group">
                <FeatureCardV1 
                  {...data} 
                  cardClass="text-center rounded-3xl p-6 md:p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-[#1E293B] border border-[#1E293B] group-hover:border-[#3B82F6]/30 group-hover:bg-[#1E293B]/80 backdrop-blur-sm" 
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#1f2937] to-[#374151] rounded-3xl p-12 text-[#F1F5F9]">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto">
              Let's discuss how our solutions can help you achieve your goals and scale your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch w-full max-w-2xl mx-auto">
              <a
                href="tel:+16309234653"
                className="inline-flex items-center justify-center w-full sm:w-1/2 px-8 py-4 text-lg font-semibold text-[#F1F5F9] bg-[#3B82F6] hover:bg-[#2563EB] rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get a Demo Consultant Call
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center w-full sm:w-1/2 px-8 py-4 text-lg font-semibold text-[#F1F5F9] border-2 border-[#1E293B] hover:bg-[#1E293B] hover:text-[#F1F5F9] rounded-xl transition-all duration-200"
              >
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureV1;




