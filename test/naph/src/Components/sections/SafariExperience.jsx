import React from "react";

const SafariExperience = () => {
  return (
    <section
      id="safari"
      className="py-20 bg-gradient-to-b from-gray-100 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Safari Experience
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Embark on an unforgettable safari adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://1.bp.blogspot.com/-fdtFVvfGjSU/TykMmJqf9SI/AAAAAAAAJ9c/vhjYzVpzYEQ/s1600/Lion+7.jpeg"
              alt="Safari adventure"
              className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div className="md:pl-6">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Explore Africa like Never Before
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Immerse yourself in the heart of the wild. From majestic elephants
              to breathtaking sunsets, experience the beauty of Africa up close
              and personal. Every moment is a story waiting to be told.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafariExperience;
