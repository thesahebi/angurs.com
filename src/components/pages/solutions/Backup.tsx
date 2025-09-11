import React from "react";

const Backup: React.FC = () => {
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
              💾 Backup Solutions
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F1F5F9] mb-6 leading-tight">
              Protect What{' '}
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] bg-clip-text text-transparent">
                Matters Most
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#E2E8F0] max-w-3xl mx-auto leading-relaxed mb-8">
              Your data is the lifeline of your business. Angurs delivers enterprise-grade backup and replication solutions, on-premises and in the cloud, to keep you secure, compliant, and resilient.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-[#F1F5F9] bg-[#3B82F6] hover:bg-[#2563EB] rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Protected Now
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

      {/* Why Backup & Replication Matters */}
      <section className="mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-[#F1F5F9]">Why Backup & Replication Matters</h2>
          <p className="text-xl text-[#E2E8F0] max-w-3xl mx-auto">
            Disruptions happen. Without reliable backup and recovery, businesses face data loss, 
            downtime, and compliance risks. Our solutions ensure you:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-[#1E293B] rounded-xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-[#1E293B] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#F1F5F9]">Stay Protected</h3>
            <p className="text-[#E2E8F0]">Against data loss and corruption</p>
          </div>
          
          <div className="text-center p-8 bg-[#1E293B] rounded-xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-[#1E293B] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#F1F5F9]">Recover Instantly</h3>
            <p className="text-[#E2E8F0]">With near-zero downtime</p>
          </div>
          
          <div className="text-center p-8 bg-[#1E293B] rounded-xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-[#1E293B] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#F1F5F9]">Remain Compliant</h3>
            <p className="text-[#E2E8F0]">With industry regulations</p>
          </div>
          
          <div className="text-center p-8 bg-[#1E293B] rounded-xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-[#1E293B] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#F1F5F9]">Gain Peace of Mind</h3>
            <p className="text-[#E2E8F0]">Knowing your data is always secure</p>
          </div>
        </div>
      </section>

      {/* Our Backup & Replication Solutions */}
      <section id="solutions" className="mb-20">
        <h2 className="text-4xl font-bold mb-16 text-center text-[#F1F5F9]">Our Backup & Replication Solutions</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* On-Prem Backup & Replication */}
          <div className="bg-[#1E293B] p-10 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#1E293B] rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">💽</span>
              </div>
              <h3 className="text-2xl font-bold text-[#F1F5F9]">On-Prem Backup & Replication</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-[#E2E8F0]">High-performance local backups 0 downtime</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-[#E2E8F0]">Disaster recovery for critical workloads</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-[#E2E8F0]">Data redundancy built into your infrastructure</p>
              </div>
            </div>
          </div>

          {/* Cloud Backup & Replication */}
          <div className="bg-[#1E293B] p-10 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#1E293B] rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="text-2xl font-bold text-[#F1F5F9]">Cloud Backup & Replication</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-[#E2E8F0]">Secure, scalable storage in the cloud</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-[#E2E8F0]">Instant failover in case of outages</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-[#E2E8F0]">Accessible anywhere, anytime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-24">
        <h2 className="text-4xl font-bold mb-16 text-center text-[#F1F5F9]">Benefits of Backup with Angurs</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-[#1E293B] rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3 text-[#F1F5F9]">Business Continuity</h3>
            <p className="text-[#E2E8F0]">During disasters and disruptions</p>
          </div>
          <div className="text-center p-8 bg-[#1E293B] rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3 text-[#F1F5F9]">Faster Recovery</h3>
            <p className="text-[#E2E8F0]">And minimal downtime</p>
          </div>
          <div className="text-center p-8 bg-[#1E293B] rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3 text-[#F1F5F9]">Flexible Storage</h3>
            <p className="text-[#E2E8F0]">Options for every need</p>
          </div>
          <div className="text-center p-8 bg-[#1E293B] rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3 text-[#F1F5F9]">Cost-Efficient</h3>
            <p className="text-[#E2E8F0]">Protection that fits your budget</p>
          </div>
          <div className="text-center p-8 bg-[#1E293B] rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3 text-[#F1F5F9]">Expert Setup</h3>
            <p className="text-[#E2E8F0]">And ongoing monitoring</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-[#1E293B] p-16 rounded-2xl border border-[#1E293B]">
        <h2 className="text-4xl font-bold mb-6 text-[#F1F5F9]">
          Keep your business running — no matter what happens.
        </h2>
        <p className="text-xl text-[#E2E8F0] mb-10 max-w-2xl mx-auto">
          Talk to our backup specialists and get enterprise-grade protection for your critical data.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-[#3B82F6] rounded-full hover:bg-orange-600 transition-colors shadow-lg"
        >
          👉 Talk to Our Backup Specialists
        </a>
      </section>
      </div>
    </div>
  );
};
export default Backup;