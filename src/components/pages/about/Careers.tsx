import React from "react";

const Careers: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Careers</h1>
        <p className="text-gray-600 mt-3 max-w-2xl">
          Join a team that values curiosity, ownership, and impact.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold">Why Us</h2>
          <p className="text-gray-600 mt-2">Growth paths, mentorship, and meaningful work.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold">Benefits</h2>
          <p className="text-gray-600 mt-2">Competitive compensation and flexible work.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold">Open Roles</h2>
          <p className="text-gray-600 mt-2">Send your resume; we’ll reach out.</p>
        </div>
      </div>
    </section>
  );
};

export default Careers;


