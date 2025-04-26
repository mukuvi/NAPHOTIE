import React from "react";

const FloraCard = ({ name, image }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={name} className="w-full h-60 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-amber-700">{name}</h3>
      </div>
    </div>
  );
};

export default FloraCard;
