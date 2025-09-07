import React from "react";

const Backup: React.FC = () => {
  return (
    <div>
      {/* Hero Section - Clean design with website colors */}
      <section className="bg-gradient-to-br from-gray-50 to-white pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900">
              Protect What
              <span className="block text-[#e95420]">Matters Most</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              Your data is the lifeline of your business. Angurs delivers enterprise-grade backup and replication 
              — on-premises and in the cloud — to keep you secure, compliant, and resilient.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#e95420] rounded-full hover:bg-orange-600 transition-colors shadow-lg"
              >
                Get Protected Now
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#e95420] bg-white border-2 border-[#e95420] rounded-full hover:bg-orange-50 transition-colors"
              >
                View Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">

      {/* Why Backup & Replication Matters */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Why Backup & Replication Matters</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Disruptions happen. Without reliable backup and recovery, businesses face data loss, 
            downtime, and compliance risks. Our solutions ensure you:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Stay Protected</h3>
            <p className="text-gray-600">Against data loss and corruption</p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Recover Instantly</h3>
            <p className="text-gray-600">With near-zero downtime</p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Remain Compliant</h3>
            <p className="text-gray-600">With industry regulations</p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Gain Peace of Mind</h3>
            <p className="text-gray-600">Knowing your data is always secure</p>
          </div>
        </div>
      </section>

      {/* Our Backup & Replication Solutions */}
      <section id="solutions" className="mb-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Our Backup & Replication Solutions</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* On-Prem Backup & Replication */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">💽</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">On-Prem Backup & Replication</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#e95420] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-600">High-performance local backups</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#e95420] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-600">Disaster recovery for critical workloads</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#e95420] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-600">Data redundancy built into your infrastructure</p>
              </div>
            </div>
          </div>

          {/* Cloud Backup & Replication */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Cloud Backup & Replication</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-600">Secure, scalable storage in the cloud</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-600">Instant failover in case of outages</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-600">Accessible anywhere, anytime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Benefits of Backup with Angurs</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Business Continuity</h3>
            <p className="text-gray-600">During disasters and disruptions</p>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Faster Recovery</h3>
            <p className="text-gray-600">And minimal downtime</p>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Flexible Storage</h3>
            <p className="text-gray-600">Options for every need</p>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Cost-Efficient</h3>
            <p className="text-gray-600">Protection that fits your budget</p>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Expert Setup</h3>
            <p className="text-gray-600">And ongoing monitoring</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-gradient-to-r from-gray-50 to-white p-16 rounded-2xl border border-gray-100">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          Keep your business running — no matter what happens.
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Talk to our backup specialists and get enterprise-grade protection for your critical data.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-[#e95420] rounded-full hover:bg-orange-600 transition-colors shadow-lg"
        >
          👉 Talk to Our Backup Specialists
        </a>
      </section>
      </div>
    </div>
  );
};
export default Backup;