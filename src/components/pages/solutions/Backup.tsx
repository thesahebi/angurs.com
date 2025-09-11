import React from "react";
import PageHero from "../../reusable/PageHero";

const Backup: React.FC = () => {
  return (
    <div>
      <PageHero
        title="Protect What Matters Most"
        subtitle="Enterprise-grade data protection"
        description="Your data is the lifeline of your business. Angurs delivers enterprise-grade backup and replication solutions, on-premises and in the cloud, to keep you secure, compliant, and resilient."
        primaryButtonText="Get Protected Now"
        primaryButtonLink="/contact"
        secondaryButtonText="View Solutions"
        secondaryButtonLink="#solutions"
        accentColor="#3B82F6"
        backgroundPattern="grid"
        showGraph={true}
        graphType="bar"
        isHomepage={false}
      />

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
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#F1F5F9]">Stay Protected</h3>
            <p className="text-[#E2E8F0]">Against data loss and corruption</p>
          </div>
          
          <div className="text-center p-8 bg-[#1E293B] rounded-xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#F1F5F9]">Recover Instantly</h3>
            <p className="text-[#E2E8F0]">With near-zero downtime</p>
          </div>
          
          <div className="text-center p-8 bg-[#1E293B] rounded-xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#F1F5F9]">Remain Compliant</h3>
            <p className="text-[#E2E8F0]">With industry regulations</p>
          </div>
          
          <div className="text-center p-8 bg-[#1E293B] rounded-xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
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
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
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
      <section className="text-center bg-gradient-to-r from-gray-50 to-white p-16 rounded-2xl border border-gray-100">
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