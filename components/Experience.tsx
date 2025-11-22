import React from 'react';
import { EXPERIENCE } from '../constants';
import { RevealOnScroll } from './ui/RevealOnScroll';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            Work <span className="text-primary-400">Experience</span>
          </h2>
        </RevealOnScroll>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/20 via-primary-500/50 to-primary-500/20 md:-translate-x-1/2"></div>

          {EXPERIENCE.map((exp, index) => (
            <RevealOnScroll key={index} className="relative z-10 mb-12">
              <div className="flex flex-col md:flex-row items-start">
                
                {/* Left Side (Date & Role for Desktop) */}
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 pl-8 md:pl-0">
                  <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                  <div className="text-primary-400 font-medium mb-1">{exp.role}</div>
                  <div className="text-sm text-slate-500 font-mono">{exp.period}</div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-0 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-3 h-3 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(14,165,233,0.5)] mt-2 ring-4 ring-slate-900"></div>

                {/* Right Side (Content) */}
                <div className="md:w-1/2 md:pl-12 pl-8">
                  <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700 hover:border-primary-500/30 transition-all backdrop-blur-sm">
                    <p className="text-slate-300 mb-4 italic">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className="text-primary-500 mt-1.5">›</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;