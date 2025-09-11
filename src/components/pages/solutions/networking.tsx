import React from "react";

const Networking: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Header */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-24 bg-[#121212] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex px-4 py-2 text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/20 border border-[#3B82F6]/30 rounded-full mb-6 backdrop-blur-sm">
              🌐 Networking Solutions
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F1F5F9] mb-6 leading-tight">
              Smarter Networks,{' '}
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] bg-clip-text text-transparent">
                Stronger Connections
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#E2E8F0] max-w-3xl mx-auto leading-relaxed mb-8">
              From branch offices to entire campuses, Angurs designs and deploys networks that are fast, secure, and built for growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-[#F1F5F9] bg-[#3B82F6] hover:bg-[#2563EB] rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-[#3B82F6] border-2 border-[#3B82F6] hover:bg-[#3B82F6] hover:text-[#F1F5F9] rounded-xl transition-all duration-200"
              >
                View Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 bg-[#121212]">

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
            <div className="w-16 h-16 bg-[#1E293B] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#F1F5F9]">Seamless Connectivity</h3>
            <p className="text-[#E2E8F0]">Across all sites and locations</p>
          </div>
          
          <div className="text-center p-8 bg-[#1E293B] rounded-xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-[#1E293B] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#F1F5F9]">Secure Architecture</h3>
            <p className="text-[#E2E8F0]">Protect data with robust security</p>
          </div>
          
          <div className="text-center p-8 bg-[#1E293B] rounded-xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-[#1E293B] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#F1F5F9]">Optimized Performance</h3>
            <p className="text-[#E2E8F0]">For collaboration and mobility</p>
          </div>
          
          <div className="text-center p-8 bg-[#1E293B] rounded-xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-[#1E293B] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="w-12 h-12 bg-[#1E293B] rounded-lg flex items-center justify-center mr-4">
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
              <div className="w-12 h-12 bg-[#1E293B] rounded-lg flex items-center justify-center mr-4">
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

