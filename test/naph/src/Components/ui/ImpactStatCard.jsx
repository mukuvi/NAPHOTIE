import React from "react";

const ImpactStatCard = ({ title, description }) => {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-green-50 rounded-2xl p-8 text-center shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ImpactStatCard;
