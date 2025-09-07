import React from "react";

const OurCompany: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Our Company</h1>
        <p className="text-gray-600 mt-3 max-w-2xl">
          We help organizations modernize infrastructure and deliver secure, resilient
          digital experiences.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold">Mission</h2>
          <p className="text-gray-600 mt-2">Customer outcomes first, with craftsmanship and accountability.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold">Values</h2>
          <p className="text-gray-600 mt-2">Transparency, empathy, and relentless improvement.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold">Approach</h2>
          <p className="text-gray-600 mt-2">Collaborative delivery with measurable milestones.</p>
        </div>
      </div>
    </section>
  );
};

export default OurCompany;


