import React from "react";

const Virtualization: React.FC = () => {
  return (
    <div>
      {/* Hero Section - Full width below header */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900">
              Virtualization for the
              <span className="block text-blue-600">Modern Enterprise</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto mb-12 leading-relaxed">
              Maximize resources, reduce costs, and scale on demand. With Angurs, you gain access to the industry's 
              leading virtualization platforms — designed for performance, flexibility, and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
              >
                Get Started
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white border-2 border-blue-600 rounded-full hover:bg-blue-50 transition-colors"
              >
                View Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">

      {/* Why Virtualization Matters */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Virtualization Matters</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto text-center">
          Virtualization is the foundation of modern IT. It allows you to run multiple operating systems and 
          applications on the same hardware, cutting costs and boosting efficiency. With Angurs, you get:
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="text-center p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-2">Optimized Infrastructure</h3>
            <p className="text-gray-600">Do more with less hardware.</p>
          </div>
          <div className="text-center p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-2">High Availability</h3>
            <p className="text-gray-600">Built-in failover and disaster recovery.</p>
          </div>
          <div className="text-center p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-2">Flexibility</h3>
            <p className="text-gray-600">Scale up or down as your business needs change.</p>
          </div>
          <div className="text-center p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-2">Cost Efficiency</h3>
            <p className="text-gray-600">Reduce capital expenses with better resource utilization.</p>
          </div>
        </div>
      </section>

      {/* Our Virtualization Solutions */}
      <section id="solutions" className="mb-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Virtualization Solutions</h2>
        
        <div className="space-y-12">
          {/* VMware Partner */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">🏢 VMware Partner</h3>
            <p className="text-lg text-gray-600 mb-6">Enterprise-grade virtualization trusted by businesses worldwide.</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Robust Workload Management</h4>
                <p className="text-gray-600 text-sm">Advanced VM orchestration and resource allocation.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Advanced Security Features</h4>
                <p className="text-gray-600 text-sm">Built-in security controls and compliance tools.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Proven Reliability</h4>
                <p className="text-gray-600 text-sm">Enterprise-class scalability and uptime.</p>
              </div>
            </div>
          </div>

          {/* Hyper-V Expert */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">💻 Hyper-V Expert</h3>
            <p className="text-lg text-gray-600 mb-6">Seamless Microsoft-based virtualization.</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Windows Integration</h4>
                <p className="text-gray-600 text-sm">Native Windows-integrated solution</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Easy VM Management</h4>
                <p className="text-gray-600 text-sm">Simple VM creation and management tools</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Hybrid Environments</h4>
                <p className="text-gray-600 text-sm">Ideal for hybrid cloud strategies</p>
              </div>
            </div>
          </div>

          {/* Proxmox */}
          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">🔓 Proxmox</h3>
            <p className="text-lg text-gray-600 mb-6">Open-source virtualization with enterprise power.</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Cluster Management</h4>
                <p className="text-gray-600 text-sm">Live migration and high availability</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Integrated Backup</h4>
                <p className="text-gray-600 text-sm">Built-in backup and restore solutions</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Cost-Effective Scale</h4>
                <p className="text-gray-600 text-sm">Affordable scalability for growing businesses</p>
              </div>
            </div>
          </div>

          {/* Red Hat OpenStack */}
          <div className="bg-red-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">🌐 Red Hat OpenStack</h3>
            <p className="text-lg text-gray-600 mb-6">Build private clouds with open-source flexibility.</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Full Infrastructure Control</h4>
                <p className="text-gray-600 text-sm">Complete control over your infrastructure</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Massive Scalability</h4>
                <p className="text-gray-600 text-sm">Scale to thousands of nodes</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Enterprise Support</h4>
                <p className="text-gray-600 text-sm">Enterprise-class support and services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Benefits of Virtualization with Angurs</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg border text-center">
            <h3 className="text-xl font-semibold mb-2">Simplified IT Management</h3>
            <p className="text-gray-600">Centralized control and monitoring of virtual infrastructure.</p>
          </div>
          <div className="p-6 rounded-lg border text-center">
            <h3 className="text-xl font-semibold mb-2">Reduced Costs</h3>
            <p className="text-gray-600">Lower capital expenses and smaller physical footprint.</p>
          </div>
          <div className="p-6 rounded-lg border text-center">
            <h3 className="text-xl font-semibold mb-2">Enhanced Disaster Recovery</h3>
            <p className="text-gray-600">Built-in backup and recovery capabilities.</p>
          </div>
          <div className="p-6 rounded-lg border text-center">
            <h3 className="text-xl font-semibold mb-2">Hybrid Cloud Flexibility</h3>
            <p className="text-gray-600">Seamless integration with cloud strategies.</p>
          </div>
          <div className="p-6 rounded-lg border text-center">
            <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
            <p className="text-gray-600">Guidance across all major virtualization platforms.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-blue-50 p-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Modernize your infrastructure with virtualization solutions designed for growth.</h2>
        <p className="text-xl text-gray-600 mb-8">
          Let Angurs help you build a robust, scalable virtualization foundation.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
        >
          Contact Us Today
        </a>
      </section>
      </div>
    </div>
  );
};

export default Virtualization;

