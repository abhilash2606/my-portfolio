import React from 'react';

const Skills = ({ title = 'Technical Skills', skills }) => {
  return (
    <section
      id="skills"
      className="py-20 md:py-32"
      aria-labelledby="skills-heading"
    >
      <h2
        id="skills-heading"
        className="text-4xl font-bold text-white mb-12 text-center"
      >
        {title}
      </h2>

      <ul className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-gray-800/50 text-gray-200 py-2 px-5 rounded-lg shadow-md hover:bg-indigo-500/30 transition-colors duration-300"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
