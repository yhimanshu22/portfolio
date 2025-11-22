import React from 'react';
import { PROJECTS } from '../constants';
import { RevealOnScroll } from './ui/RevealOnScroll';
import { ExternalLink, Folder } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            Featured <span className="text-primary-400">Projects</span>
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="group h-full rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-primary-500/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 flex flex-col">
                
                {/* Header with abstract pattern */}
                <div className="h-40 bg-gradient-to-br from-slate-800 to-slate-900 p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:bg-primary-500/20"></div>
                  <div className="relative z-10 flex justify-between items-start">
                    <div className="p-3 bg-slate-950/50 rounded-xl text-primary-400 border border-slate-700 backdrop-blur-md group-hover:scale-110 transition-transform">
                       <Folder size={24} />
                    </div>
                    <a href={project.link} className="p-2 text-slate-400 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs font-mono font-medium text-primary-300 bg-primary-900/30 px-2.5 py-1 rounded-md border border-primary-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;