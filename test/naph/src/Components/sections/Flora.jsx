import React from "react";
import FloraCard from "../ui/FloraCard";

const Flora = () => {
  const floraData = [
    {
      id: 1,
      name: "Baobab Tree",
      image: "https://source.unsplash.com/600x400/?baobab,tree",
    },
    {
      id: 2,
      name: "Acacia Tree",
      image: "https://source.unsplash.com/600x400/?acacia,africa",
    },
    {
      id: 3,
      name: "African Tulip",
      image: "https://source.unsplash.com/600x400/?african,flower",
    },
    {
      id: 4,
      name: "Fever Tree",
      image: "https://source.unsplash.com/600x400/?fever,tree",
    },
    {
      id: 5,
      name: "Sausage Tree",
      image: "https://source.unsplash.com/600x400/?sausage,tree",
    },
    {
      id: 6,
      name: "Wild Jasmine",
      image: "https://source.unsplash.com/600x400/?wild,jasmine",
    },
  ];

  return (
    <section id="flora" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-600 mb-4">
          Explore <span className="text-green-700">Flora</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the diverse flora that thrives in Africa’s ecosystems.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {floraData.map((item) => (
          <FloraCard key={item.id} name={item.name} image={item.image} />
        ))}
      </div>
    </section>
  );
};

export default Flora;
