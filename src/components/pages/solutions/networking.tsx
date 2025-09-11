import React from "react";
import PageHero from "../../reusable/PageHero";

const Networking: React.FC = () => {
  return (
    <div>
      <PageHero
        title="Smarter Networks, Stronger Connections"
        subtitle="Enterprise networking solutions"
        description="From branch offices to entire campuses, Angurs designs and deploys networks that are fast, secure, and built for growth."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="View Solutions"
        secondaryButtonLink="#solutions"
        accentColor="#3B82F6"
        backgroundPattern="circuits"
        showGraph={true}
        graphType="network"
        isHomepage={false}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">

      {/* Why Networking Matters */}
      <section className="mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-[#F1F5F9]">Why Networking Matters</h2>
          <p className="text-xl text-[#E2E8F0] max-w-3xl mx-auto">
            A strong network is the backbone of every modern business. With the rise of cloud, 
            remote work, and IoT, your network must deliver speed, security, and reliability. Angurs helps you:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-[#1E293B] rounded-xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#F1F5F9]">Seamless Connectivity</h3>
            <p className="text-[#E2E8F0]">Across all sites and locations</p>
          </div>
          
          <div className="text-center p-8 bg-[#1E293B] rounded-xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#F1F5F9]">Secure Architecture</h3>
            <p className="text-[#E2E8F0]">Protect data with robust security</p>
          </div>
          
          <div className="text-center p-8 bg-[#1E293B] rounded-xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#F1F5F9]">Optimized Performance</h3>
            <p className="text-[#E2E8F0]">For collaboration and mobility</p>
          </div>
          
          <div className="text-center p-8 bg-[#1E293B] rounded-xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#F1F5F9]">Scalable Growth</h3>
            <p className="text-[#E2E8F0]">Networks that grow with your business</p>
          </div>
        </div>
      </section>

      {/* Our Networking Solutions */}
      <section id="solutions" className="mb-20">
        <h2 className="text-4xl font-bold mb-16 text-center text-[#F1F5F9]">Our Networking Solutions</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Branch Networks */}
          <div className="bg-[#1E293B] p-10 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-2xl font-bold text-[#F1F5F9]">Branch Networks</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-[#E2E8F0]">Secure branch-to-HQ connectivity</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-[#E2E8F0]">Optimized SD-WAN deployment</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-[#E2E8F0]">Centralized management for distributed sites</p>
              </div>
            </div>
          </div>

          {/* Campus Networks */}
          <div className="bg-[#1E293B] p-10 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-2xl font-bold text-[#F1F5F9]">Campus Networks</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-[#E2E8F0]">High-performance LAN and Wi-Fi</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-[#E2E8F0]">Scalable infrastructure for thousands of users</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-[#E2E8F0]">Secure access for staff, students, and devices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-24">
        <h2 className="text-4xl font-bold mb-16 text-center text-[#F1F5F9]">Benefits of Networking with Angurs</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-[#1E293B] rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3 text-[#F1F5F9]">Faster Connectivity</h3>
            <p className="text-[#E2E8F0]">More reliable network performance</p>
          </div>
          <div className="text-center p-8 bg-[#1E293B] rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3 text-[#F1F5F9]">Improved Collaboration</h3>
            <p className="text-[#E2E8F0]">Across all locations</p>
          </div>
          <div className="text-center p-8 bg-[#1E293B] rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3 text-[#F1F5F9]">Scalable Architecture</h3>
            <p className="text-[#E2E8F0]">For future growth</p>
          </div>
          <div className="text-center p-8 bg-[#1E293B] rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3 text-[#F1F5F9]">Stronger Security</h3>
            <p className="text-[#E2E8F0]">At every level</p>
          </div>
          <div className="text-center p-8 bg-[#1E293B] rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3 text-[#F1F5F9]">Expert Support</h3>
            <p className="text-[#E2E8F0]">Design, deployment, and ongoing support</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-gradient-to-r from-gray-50 to-white p-16 rounded-2xl border border-gray-100">
        <h2 className="text-4xl font-bold mb-6 text-[#F1F5F9]">
          Transform your network into a driver of business success.
        </h2>
        <p className="text-xl text-[#E2E8F0] mb-10 max-w-2xl mx-auto">
          Start your networking project today and build the foundation for digital transformation.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-[#3B82F6] rounded-full hover:bg-orange-600 transition-colors shadow-lg"
        >
          👉 Start Your Networking Project Today
        </a>
      </section>
      </div>
    </div>
  );
};

export default Networking;

