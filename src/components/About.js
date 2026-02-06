import React from 'react';

const About = ({ title = 'About Me', about }) => {
  return (
    <section
      id="about"
      className="py-20 md:py-32"
      aria-labelledby="about-heading"
    >
      <h2
        id="about-heading"
        className="text-4xl font-bold text-white mb-4 text-center"
      >
        {title}
      </h2>

      <div className="max-w-3xl mx-auto bg-gray-800/50 p-8 rounded-xl shadow-lg">
        <p className="text-gray-300 text-lg">
          {about}
        </p>
      </div>
    </section>
  );
};

export default About;
