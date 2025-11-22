import React from 'react';
import { SKILLS } from '../constants';
import { RevealOnScroll } from './ui/RevealOnScroll';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            Technical <span className="text-primary-400">Arsenal</span>
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skill, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="h-full p-6 rounded-2xl bg-slate-800/40 border border-slate-700 hover:bg-slate-800/60 hover:border-primary-500/30 transition-all duration-300 group">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-500/10 text-primary-400 group-hover:scale-110 group-hover:bg-primary-500/20 transition-all duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 text-sm font-medium text-slate-300 bg-slate-900/50 rounded-lg border border-slate-700 group-hover:border-primary-500/20 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;