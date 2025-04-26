import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  useEffect(() => {
    // Typewriter effect cleanup
    const typewriterElement = document.querySelector(".typewriter");
    const timer = setTimeout(() => {
      if (typewriterElement) {
        typewriterElement.style.animation = "none";
        typewriterElement.style.borderRight = "none";
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden mt-16">
      <div
        className="parallax-bg absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542038787116-30a21f0e6c8e?w=1800&auto=format')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="relative z-20 text-center px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 typewriter">
          Africa's Living Canvas
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          Discover. Share. Protect. Join the movement documenting Africa's
          breathtaking biodiversity.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 rounded-full bg-white text-amber-700 font-bold hover:bg-amber-50 transition-all transform hover:scale-105 shadow-lg">
            Start Exploring
          </button>
          <button className="px-8 py-3 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-all transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <FontAwesomeIcon icon={faChevronDown} className="text-2xl text-white" />
      </div>
    </header>
  );
}
