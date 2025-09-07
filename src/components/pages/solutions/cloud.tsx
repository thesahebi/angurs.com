import React from "react";

const Cloud: React.FC = () => {
  return (
    <div>
      {/* Hero Section - Full width below header */}
      <section className="bg-gradient-to-r from-orange-50 to-blue-50 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900">
              Seamless, Secure, Scalable
              <span className="block text-orange-500">Cloud Migration</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto mb-12 leading-relaxed">
              Move your business to the cloud with confidence. At Angurs, we help you modernize applications, 
              migrate workloads, and transform operations — with minimal downtime and maximum security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors shadow-lg"
              >
                Start Your Migration
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-orange-500 bg-white border-2 border-orange-500 rounded-full hover:bg-orange-50 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">

      {/* Why Cloud Migration Matters */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Cloud Migration Matters</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto text-center">
          The cloud is no longer optional — it's essential. Businesses today need agility, security, and global reach. 
          By moving to the cloud, you unlock:
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="text-center p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-2">Scalability</h3>
            <p className="text-gray-600">Resources that grow as your business grows.</p>
          </div>
          <div className="text-center p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-2">Resilience</h3>
            <p className="text-gray-600">Built-in redundancy for continuous availability.</p>
          </div>
          <div className="text-center p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-2">Security</h3>
            <p className="text-gray-600">Enterprise-grade protection for your data and systems.</p>
          </div>
          <div className="text-center p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
            <p className="text-gray-600">Reduced costs and optimized operations.</p>
          </div>
        </div>
        
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
          We make this transformation seamless — from planning and execution to ongoing optimization.
        </p>
      </section>

      {/* Our Cloud Migration Services */}
      <section id="services" className="mb-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Cloud Migration Services</h2>
        
        <div className="space-y-12">
          {/* AWS Cloud Migration */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">🚀 AWS Cloud Migration</h3>
            <p className="text-lg text-gray-600 mb-6">Unlock the power of Amazon Web Services.</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Amazon EC2</h4>
                <p className="text-gray-600 text-sm">Flexible, scalable compute power for any workload.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Amazon RDS</h4>
                <p className="text-gray-600 text-sm">Fully managed relational databases with automatic backup.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Amazon S3</h4>
                <p className="text-gray-600 text-sm">Secure, durable object storage built for scale.</p>
              </div>
            </div>
            
            <p className="text-gray-600">
              Our AWS-certified experts help you design, migrate, and manage AWS environments with confidence.
            </p>
          </div>

          {/* Azure Cloud Migration */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">💡 Azure Cloud Migration</h3>
            <p className="text-lg text-gray-600 mb-6">Empower your enterprise with Microsoft Azure.</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Azure VM</h4>
                <p className="text-gray-600 text-sm">On-demand computing resources with enterprise-grade performance.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Azure SQL</h4>
                <p className="text-gray-600 text-sm">Cloud-based database services for mission-critical workloads.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Azure Blob Storage</h4>
                <p className="text-gray-600 text-sm">Unstructured storage built for scale and accessibility.</p>
              </div>
            </div>
            
            <p className="text-gray-600">
              We help you modernize applications and migrate seamlessly into Azure's ecosystem.
            </p>
          </div>

          {/* Microsoft 365 Migration */}
          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">📊 Microsoft 365 Migration</h3>
            <p className="text-lg text-gray-600 mb-6">Transform collaboration and productivity.</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Email Migration</h4>
                <p className="text-gray-600 text-sm">Migration to Exchange Online</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">File Migration</h4>
                <p className="text-gray-600 text-sm">Migration to OneDrive & SharePoint</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Teams Setup</h4>
                <p className="text-gray-600 text-sm">Modern collaboration platform</p>
              </div>
            </div>
            
            <p className="text-gray-600">
              Whether you're migrating from legacy systems or another cloud provider, we ensure a smooth transition with zero data loss.
            </p>
          </div>

          {/* Microsoft Entra ID */}
          <div className="bg-purple-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">🔐 Microsoft Entra ID (Azure AD)</h3>
            <p className="text-lg text-gray-600 mb-6">Reimagine identity and access management.</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Single Sign-On</h4>
                <p className="text-gray-600 text-sm">SSO across all applications</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Multi-Factor Auth</h4>
                <p className="text-gray-600 text-sm">Enhanced security with MFA</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Role-Based Access</h4>
                <p className="text-gray-600 text-sm">Granular access control with RBAC</p>
              </div>
            </div>
            
            <p className="text-gray-600">
              We secure your organization with Entra ID while enabling seamless user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Approach</h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          We follow a proven 4-step migration framework:
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-lg border">
            <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 className="text-xl font-semibold mb-2">Assess</h3>
            <p className="text-gray-600">Evaluate current infrastructure and define goals.</p>
          </div>
          <div className="text-center p-6 rounded-lg border">
            <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 className="text-xl font-semibold mb-2">Plan</h3>
            <p className="text-gray-600">Design a tailored migration roadmap.</p>
          </div>
          <div className="text-center p-6 rounded-lg border">
            <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 className="text-xl font-semibold mb-2">Migrate</h3>
            <p className="text-gray-600">Execute with precision, minimizing downtime.</p>
          </div>
          <div className="text-center p-6 rounded-lg border">
            <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
            <h3 className="text-xl font-semibold mb-2">Optimize</h3>
            <p className="text-gray-600">Continuously monitor, secure, and scale.</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Benefits of Migrating with Angurs</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg border text-center">
            <h3 className="text-xl font-semibold mb-2">Faster Time to Market</h3>
            <p className="text-gray-600">Accelerate your digital transformation journey.</p>
          </div>
          <div className="p-6 rounded-lg border text-center">
            <h3 className="text-xl font-semibold mb-2">Cost Savings</h3>
            <p className="text-gray-600">Optimized cloud usage reduces operational costs.</p>
          </div>
          <div className="p-6 rounded-lg border text-center">
            <h3 className="text-xl font-semibold mb-2">Enhanced Security</h3>
            <p className="text-gray-600">Stronger security & compliance posture.</p>
          </div>
          <div className="p-6 rounded-lg border text-center">
            <h3 className="text-xl font-semibold mb-2">Future Scalability</h3>
            <p className="text-gray-600">Built for growth and changing demands.</p>
          </div>
          <div className="p-6 rounded-lg border text-center">
            <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
            <p className="text-gray-600">Guidance every step of the way.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-orange-50 p-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to migrate with confidence?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Let Angurs be your trusted partner in cloud transformation.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors"
        >
          Contact Us Today
        </a>
      </section>
      </div>
    </div>
  );
};

export default Cloud;


