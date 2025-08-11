import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800/50 rounded-xl p-6 transition-transform duration-300 hover:-translate-y-2 flex flex-col">
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-indigo-500/20 text-indigo-300 text-sm font-medium px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 mt-4 inline-flex items-center self-start">
              View Project <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;