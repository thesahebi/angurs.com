import React from "react";

const OurCapabilities: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Our Capabilities</h1>
        <p className="text-gray-600 mt-3 max-w-2xl">
          From architecture and automation to security and operations, we deliver
          end‑to‑end solutions.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold">Cloud & Platform</h2>
          <p className="text-gray-600 mt-2">Kubernetes, virtualization, storage, and networking.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold">Automation</h2>
          <p className="text-gray-600 mt-2">CI/CD, Infrastructure as Code, and observability.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold">Security</h2>
          <p className="text-gray-600 mt-2">Zero Trust, compliance, and secure-by-default designs.</p>
        </div>
      </div>
    </section>
  );
};

export default OurCapabilities;


