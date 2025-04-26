import React from "react";

const MapPoint = ({ position, region, icon }) => {
  return (
    <div className={`absolute ${position}`}>
      <button
        className="map-point bg-amber-500 animate-pulse"
        onClick={() =>
          alert(
            `Showing recent sightings from ${
              region.charAt(0).toUpperCase() + region.slice(1)
            } region`
          )
        }
      >
        <i className={`fas fa-${icon}`}></i>
      </button>
    </div>
  );
};

export default MapPoint;
