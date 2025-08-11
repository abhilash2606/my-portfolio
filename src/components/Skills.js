import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">Technical Skills</h2>
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-800/50 text-gray-200 py-2 px-5 rounded-lg shadow-md hover:bg-indigo-500/30 transition-colors duration-300">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;