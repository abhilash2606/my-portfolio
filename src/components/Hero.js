import React from 'react';

const Hero = ({ title }) => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-[calc(100vh-68px)] flex items-center">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          I design and build beautiful and responsive web applications.
        </p>
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, 'contact')}
          className="bg-indigo-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-600 transition-all duration-300 transform hover:scale-105"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;