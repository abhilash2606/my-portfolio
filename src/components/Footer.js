import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Footer = ({ name, contact }) => {
  return (
    <footer className="bg-gray-900/80 border-t border-gray-800 mt-20">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <a href={`mailto:${contact.email}`} className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
            <Mail className="h-6 w-6" />
          </a>
          <a href={contact.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
            <Github className="h-6 w-6" />
          </a>
          <a href={contact.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;