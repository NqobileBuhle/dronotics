
import React, { useState } from 'react';

export const ToggleMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`flex items-center justify-between py-5 px-6 ${isMenuOpen ? 'bg-gray-100' : ''}`}>
      {/* Menu Button */}
      {/* <div className="cursor-pointer" onClick={toggleMenu}>
        <div className="w-8 h-1 bg-black mb-1"></div>
        <div className="w-8 h-1 bg-black mb-1"></div>
        <div className="w-8 h-1 bg-black"></div>
      </div> */}

      {/* Logo */}
      <div className="text-4xl font-light">
        <span className="text-black">D</span>
        <span className="text-[#cbdeec]">Z</span>
      </div>

      {/* Menu Links */}
      <div className={`flex space-x-10 transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0`}>
        <a href="#about" className="text-black hover:text-gray-700">ABOUT</a>
        <a href="#articles" className="text-black hover:text-gray-700">ARTICLES</a>
      </div>

      {/* Subscribe Link */}
      <div className="hidden md:block">
        <a href="#subscribe" className="border border-black px-5 py-2 text-black hover:bg-[#cbdeec] hover:text-white transition-colors">
          SUBSCRIBE
        </a>
      </div>
    </div>
  );
};

