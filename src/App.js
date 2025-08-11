import React from 'react';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

// --- Mock Data (You can move this to its own file, e.g., data.js) ---
const portfolioData = {
  name: "Abhilash",
  title: "Frontend Developer & UI/UX Enthusiast",
  about: "I'm a passionate developer with a knack for creating beautiful, functional, and user-centered digital experiences. With a strong foundation in modern frontend technologies, I love turning complex problems into simple, elegant solutions. When I'm not coding, you can find me exploring the latest design trends or contributing to open-source projects.",
  projects: [
    {
      title: "E-commerce Platform",
      description: "A fully responsive e-commerce website built with React, featuring product filtering, a shopping cart, and a mock checkout process.",
      tags: ["React", "Tailwind CSS", "State Management"],
      link: "#",
    },
    {
      title: "Task Management App",
      description: "A sleek and intuitive task manager that helps users organize their daily tasks with features like drag-and-drop and progress tracking.",
      tags: ["React", "Firebase", "Auth"],
      link: "#",
    },
    {
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for visualizing complex datasets, built with D3.js and React, providing insightful charts and graphs.",
      tags: ["React", "D3.js", "API Integration"],
      link: "#",
    },
     {
      title: "Personal Blog",
      description: "A content-focused personal blog with a clean, readable layout, built using a static site generator for optimal performance.",
      tags: ["Next.js", "Markdown", "SEO"],
      link: "#",
    },
  ],
  skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Next.js", "Node.js", "Tailwind CSS", "Figma", "Git & GitHub", "REST APIs"],
  contact: {
    email: "abhilashpajarla@gmail.com",
    social: {
      github: "https://github.com/abhilash2606",
      linkedin: "https://www.linkedin.com/in/abhilash2606/",
    }
  }
};


function App() {
  return (
    <div>
      <Header name={portfolioData.name} />
      <main className="container mx-auto px-6">
        <Hero title={portfolioData.title} />
        <About about={portfolioData.about} />
        <Projects projects={portfolioData.projects} />
        <Skills skills={portfolioData.skills} />
        <Contact />
      </main>
      <Footer name={portfolioData.name} contact={portfolioData.contact} />
    </div>
  );
}

export default App;