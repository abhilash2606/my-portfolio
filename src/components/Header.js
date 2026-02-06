import React from 'react';
import scrollToSection from '../utils/scrollToSection';

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

const Header = ({ name }) => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
      <nav
        className="container mx-auto px-6 py-4 flex justify-between items-center"
        aria-label="Primary Navigation"
      >
        <button
          onClick={(e) => scrollToSection(e, 'hero')}
          className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors duration-300"
        >
          {name}
        </button>

        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
