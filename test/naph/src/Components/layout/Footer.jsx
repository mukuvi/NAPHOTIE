import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-6">
      <div className="max-w-7xl mx-auto text-center">
        <p>© 2025 Naphotie. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-slate-400 hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="text-slate-400 hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="text-slate-400 hover:text-white">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
