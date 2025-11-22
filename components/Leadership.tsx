import React from 'react';
import { LEADERSHIP, ACHIEVEMENTS } from '../constants';
import { RevealOnScroll } from './ui/RevealOnScroll';
import { Users, Award, Star, Building2 } from 'lucide-react';

const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-20 relative">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            Leadership & <span className="text-primary-400">Honors</span>
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* --- Leadership Column --- */}
          <div>
            <RevealOnScroll>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-primary-500/20 text-primary-400">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Leadership Experience</h3>
              </div>
            </RevealOnScroll>

            <div className="space-y-6">
              {LEADERSHIP.map((item, index) => (
                <RevealOnScroll key={index} delay={index * 100}>
                  <div className="group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 overflow-hidden hover:-translate-y-1">
                    
                    {/* Subtle Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="mb-4">
                        <h4 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors mb-2">
                          {item.role}
                        </h4>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-medium text-primary-300 group-hover:border-primary-500/30 transition-colors">
                          <Building2 size={14} />
                          {item.org}
                        </div>
                      </div>
                      
                      <div className="pl-4 border-l-2 border-slate-700 group-hover:border-primary-500/50 transition-colors">
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* --- Achievements Column --- */}
          <div>
            <RevealOnScroll delay={200}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-yellow-500/20 text-yellow-400">
                  <Award size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Awards & Achievements</h3>
              </div>
            </RevealOnScroll>

            <div className="space-y-4">
              {ACHIEVEMENTS.map((achievement, index) => (
                <RevealOnScroll key={index} delay={200 + (index * 50)}>
                  <div className="flex gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-yellow-500/30 transition-all group hover:bg-slate-800/50">
                    <div className="mt-1 min-w-[20px] text-yellow-500/50 group-hover:text-yellow-400 transition-colors transform group-hover:scale-110 duration-300">
                      <Star size={20} />
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200">
                      {achievement}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;