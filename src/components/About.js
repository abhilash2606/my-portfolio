import React from 'react';

const About = ({ about }) => {
  return (
    <section id="about" className="py-20 md:py-32">
      <h2 className="text-4xl font-bold text-white mb-4 text-center">About Me</h2>
      <div className="max-w-3xl mx-auto bg-gray-800/50 p-8 rounded-xl shadow-lg">
        <p className="text-gray-300 text-lg">
          {about}
        </p>
      </div>
    </section>
  );
};

export default About;