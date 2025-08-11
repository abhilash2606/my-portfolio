import React from 'react';

const Header = ({ name }) => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors duration-300">
          {name}
        </a>
        <div className="hidden md:flex space-x-6">
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-indigo-400 transition-colors duration-300">About</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-indigo-400 transition-colors duration-300">Projects</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="hover:text-indigo-400 transition-colors duration-300">Skills</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-indigo-400 transition-colors duration-300">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;