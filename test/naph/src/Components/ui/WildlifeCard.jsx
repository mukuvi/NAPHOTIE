import React from "react";

const WildlifeCard = ({ name, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold">{name}</h3>
      </div>
    </div>
  );
};

export default WildlifeCard;
