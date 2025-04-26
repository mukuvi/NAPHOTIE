import React from "react";
import ImpactStatCard from "../ui/ImpactStatCard";

const ConservationImpact = () => {
  return (
    <section id="conservation" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Conservation Impact
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Every shared photo contributes to real-world conservation efforts.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ImpactStatCard title="12,456" description="Acacia Trees Planted" />
        <ImpactStatCard title="8,742" description="Animals Protected" />
        <ImpactStatCard title="42" description="Local Communities Supported" />
      </div>
    </section>
  );
};

export default ConservationImpact;
