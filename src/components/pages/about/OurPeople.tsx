import React from "react";

const OurPeople: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Our People</h1>
        <p className="text-gray-600 mt-3 max-w-2xl">
          A team of engineers, designers, and operators dedicated to your success.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold">Experience</h2>
          <p className="text-gray-600 mt-2">Enterprise backgrounds across multiple industries and domains.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold">Culture</h2>
          <p className="text-gray-600 mt-2">Continuous learning, knowledge sharing, and mentorship.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold">Community</h2>
          <p className="text-gray-600 mt-2">Open-source contributions and local tech engagement.</p>
        </div>
      </div>
    </section>
  );
};

export default OurPeople;


