import FeatureCardV1 from "./FeatureCardV1";
import { featureData } from "./feature-data";





const FeatureV1 = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="features">
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
        <div className="text-center mb-20">
          <div className="inline-flex px-4 py-2 text-sm font-medium text-[#e95420] bg-[#e95420]/10 rounded-full mb-6">
            🚀 Our Solutions
          </div>
          <h2 className="text-4xl font-bold text-[#1f2937] sm:text-5xl xl:text-6xl mb-6">
            Empowering Your Business with{' '}
            <span className="bg-gradient-to-r from-[#e95420] to-[#d1451a] bg-clip-text text-transparent">
              Smart Technology
            </span>
          </h2>
          <p className="text-xl text-[#6b7280] max-w-3xl mx-auto leading-relaxed">
            Fueling growth for businesses with intelligent, scalable technology solutions that adapt to your needs and drive success.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {featureData.map((data, index) => {
            return (
              <div key={data.id} className="group">
                <FeatureCardV1 
                  {...data} 
                  cardClass="text-center rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white border border-gray-100 group-hover:border-[#e95420]/20" 
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#1f2937] to-[#374151] rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our solutions can help you achieve your goals and scale your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch w-full max-w-md mx-auto sm:max-w-none">
              <div className="relative inline-flex group w-full sm:w-auto">
                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-white via-gray-100 to-white rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                <a
                  href="tel:+16309234653"
                  className="relative inline-flex items-center justify-center w-full px-8 py-4 text-lg font-semibold text-[#1f2937] bg-white hover:bg-gray-100 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get a Demo Consultant Call
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center justify-center w-full px-8 py-4 text-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-[#1f2937] rounded-xl transition-all duration-200"
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




