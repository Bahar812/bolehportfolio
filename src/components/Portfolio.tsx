import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import type { Project } from '../types';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ui/ux' | 'web' | 'app'>('all');

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' ? true : project.category === activeFilter
  );

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'ui/ux', label: 'UI/UX' },
    { id: 'web', label: 'Web' },
    { id: 'app', label: 'App' },
  ] as const;

  return (
    <section id="portfolio" className="py-20 bg-gray-950 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-purple-500">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a different challenge and learning experience.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {categories.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveFilter(id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-purple-600/20'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;