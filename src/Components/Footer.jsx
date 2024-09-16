import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer className="bg-white text-black py-6">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
        {/* Social Icons */}
        <div className="flex space-x-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="text-black hover:text-blue-400 text-2xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-black hover:text-blue-600 text-2xl" />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faPinterest} className="text-black hover:text-red-600 text-2xl" />
          </a>
        </div>

        {/* Links and Button */}
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex space-x-6 text-center md:text-left">
            <a href="about-us" className="hover:underline">ABOUT US</a>
            <a href="articles" className="hover:underline">ARTICLES</a>
          </div>

          <button className="border border-black px-5 py-2 text-black hover:bg-[#cbdeec] hover:text-white transition-colors">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </footer>
  );
};
