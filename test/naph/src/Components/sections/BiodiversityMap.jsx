import React from "react";
import MapPoint from "../ui/MapPoint";

const BiodiversityMap = () => {
  return (
    <section id="map" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-800 leading-snug">
          Explore Africa's{" "}
          <span className="text-green-700">Biodiversity Hotspots</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Click on any region to view recent wildlife sightings and learn more
          about its ecosystem.
        </p>
      </div>

      <div className="relative h-[500px] md:h-[600px] lg:h-[700px] mx-4 md:mx-auto max-w-6xl rounded-2xl overflow-hidden shadow-xl border border-gray-200">
        <img
          src="https://1.bp.blogspot.com/-fdtFVvfGjSU/TykMmJqf9SI/AAAAAAAAJ9c/vhjYzVpzYEQ/s1600/Lion+7.jpeg"
          alt="Africa Biodiversity Map"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/20 pointer-events-none" />

        {/* Map Points */}
        <MapPoint
          position="top-[25%] left-[22%]"
          region="serengeti"
          icon="lion"
        />
        <MapPoint
          position="top-[33%] right-[22%]"
          region="okavango"
          icon="hippo"
        />
        <MapPoint
          position="bottom-[25%] left-[30%]"
          region="virunga"
          icon="gorilla"
        />
        <MapPoint
          position="bottom-[30%] right-[30%]"
          region="kruger"
          icon="elephant"
        />
      </div>
    </section>
  );
};

export default BiodiversityMap;
