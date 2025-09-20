import React, { useState, useEffect } from "react";

const Virtualization: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="pt-[210px] pb-32 md:pb-40 lg:pb-48 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold lg:font-semibold mb-6 lg:leading-[90px]" style={{ color: '#3b82f6' }}>
              Transform Your IT Infrastructure with Expert Virtualization Solutions
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-xl font-semibold mb-6 text-[#e7e7e7]">
              Unlock efficiency, scalability, and security by building robust VMs, vSphere clusters, and vCenter environments tailored to your business needs. Reduce costs by up to 50% while accelerating your digital transformation.
            </h2>
            <div className="flex justify-center items-center mb-6">
              <a
                href="/contact"
                className="btn-primary inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-[#e7e7e7] rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#3b82f6' }}
              >
                Get Your Free Consultation
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
            <div className="text-xs sm:text-sm text-[#e7e7e7] opacity-60">
              VMware Certified Partner | 500+ Successful Deployments
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services" className="py-24 md:py-40 lg:py-48 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#e7e7e7] mb-6">
              Comprehensive Virtualization Services Built for Your Success
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#e7e7e7] opacity-80 max-w-4xl mx-auto mb-12">
              We specialize in end-to-end virtualization solutions using VMware's industry-leading technologies. Whether you're migrating to the cloud, optimizing on-premises setups, or scaling hybrid environments, our services deliver measurable ROI through streamlined operations and enhanced performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Service 1 - VM Building & Deployment */}
            <div className="group relative bg-[#1E293B] rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#3b82f6]/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#3b82f6]/10">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#e7e7e7]">
                  Virtual Machine (VM) Building & Deployment
                </h3>
                <p className="text-sm sm:text-base text-[#e7e7e7] opacity-80 mb-4">
                  Custom VM creation optimized for your workloads—from Windows/Linux servers to high-performance applications.
                </p>
                <div className="text-xs sm:text-sm text-[#3b82f6] font-semibold mb-4">
                  Benefits: Faster deployment (under 24 hours), 30% reduced hardware costs, easy scalability.
                </div>
              </div>
            </div>

            {/* Service 2 - vSphere Cluster Implementation */}
            <div className="group relative bg-[#1E293B] rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#3b82f6]/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#3b82f6]/10">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#e7e7e7]">
                  vSphere Cluster Implementation
                </h3>
                <p className="text-sm sm:text-base text-[#e7e7e7] opacity-80 mb-4">
                  Design and deploy resilient vSphere clusters for high availability, load balancing, and resource pooling across your data centers.
                </p>
                <div className="text-xs sm:text-sm text-[#3b82f6] font-semibold mb-4">
                  Benefits: 99.99% uptime, simplified management of multiple hosts, seamless disaster recovery.
                </div>
              </div>
            </div>

            {/* Service 3 - vCenter Server Management */}
            <div className="group relative bg-[#1E293B] rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#3b82f6]/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#3b82f6]/10">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#e7e7e7]">
                  vCenter Server Management & Optimization
                </h3>
                <p className="text-sm sm:text-base text-[#e7e7e7] opacity-80 mb-4">
                  Full vCenter setup, configuration, and ongoing administration, including monitoring, updates, and integration with your existing tools.
                </p>
                <div className="text-xs sm:text-sm text-[#3b82f6] font-semibold mb-4">
                  Benefits: Centralized control for 100+ VMs, automated compliance reporting, reduced admin overhead by 40%.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>




    </main>
  );
};

export default Virtualization;

