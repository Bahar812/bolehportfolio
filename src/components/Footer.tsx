import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-950 py-8 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Bahar Al Hamid. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a
              href="#home"
              className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
            >
              About
            </a>
            <a
              href="#portfolio"
              className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;