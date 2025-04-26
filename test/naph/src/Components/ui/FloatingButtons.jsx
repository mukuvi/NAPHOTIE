import React from "react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 space-y-3 z-40">
      <button className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-green-600 text-white shadow-lg hover:shadow-xl transition-all">
        <i className="fas fa-camera text-xl"></i>
      </button>
      <button className="w-14 h-14 rounded-full bg-slate-800 text-white shadow-lg hover:shadow-xl transition-all">
        <i className="fas fa-comment-alt text-xl"></i>
      </button>
    </div>
  );
};

export default FloatingButtons;
