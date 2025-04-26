import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-green-600 flex items-center justify-center text-white">
              <i className="fas fa-leaf text-xl"></i>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-green-700 bg-clip-text text-transparent">
              NAPHOTIE
            </h1>
          </div>

          {/* Navigation Links for Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="relative group">
              <span className="text-gray-700 group-hover:text-amber-600 transition">
                Explore
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#wildlife" className="relative group">
              <span className="text-gray-700 group-hover:text-amber-600 transition">
                Wildlife
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#flora" className="relative group">
              <span className="text-gray-700 group-hover:text-amber-600 transition">
                Flora
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#conservation" className="relative group">
              <span className="text-gray-700 group-hover:text-amber-600 transition">
                Conservation
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Icons and Mobile Hamburger Button */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-amber-50 text-gray-600 hover:text-amber-600 transition">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <button className="hidden md:block px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-green-600 text-white hover:shadow-lg transition-all transform hover:-translate-y-0.5">
              Share Your Sighting
            </button>
            {/* Mobile Hamburger Menu */}
            <button
              className="md:hidden p-2 rounded-full bg-gray-100 hover:bg-amber-50 text-gray-600 hover:text-amber-600 transition"
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white/90 backdrop-blur-md p-4 space-y-4">
            <a
              href="#home"
              className="block text-gray-700 hover:text-amber-600 transition"
            >
              Explore
            </a>
            <a
              href="#wildlife"
              className="block text-gray-700 hover:text-amber-600 transition"
            >
              Wildlife
            </a>
            <a
              href="#flora"
              className="block text-gray-700 hover:text-amber-600 transition"
            >
              Flora
            </a>
            <a
              href="#conservation"
              className="block text-gray-700 hover:text-amber-600 transition"
            >
              Conservation
            </a>
            <a
              href="#share"
              className="block text-gray-700 hover:text-amber-600 transition"
            >
              Share Your Sighting
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
