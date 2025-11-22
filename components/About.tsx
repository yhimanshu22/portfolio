import React from 'react';
import { User, Award, BookOpen, Code } from 'lucide-react';
import { RevealOnScroll } from './ui/RevealOnScroll';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            About <span className="text-primary-400">Me</span>
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <RevealOnScroll className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a <span className="text-primary-400 font-semibold">Final Year Undergraduate at IIT Kanpur</span> blending
              civil engineering precision with cutting-edge software development. My passion lies in creating systems
              that sit at the intersection of efficient code and intelligent AI algorithms.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              From optimizing inventory for major retail brands like <span className="text-white font-semibold">GIVA</span> to building
              autonomous financial agents, I thrive on solving high-impact problems.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h3 className="text-3xl font-bold text-white mb-1">5+</h3>
                <p className="text-sm text-slate-400">Major Projects</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h3 className="text-3xl font-bold text-white mb-1">Top 0.5%</h3>
                <p className="text-sm text-slate-400">JEE Main Rank</p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="grid gap-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 hover:border-primary-500/50 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary-500/20 text-primary-400 group-hover:scale-110 transition-transform">
                    <User size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Education</h3>
                    <p className="text-slate-300">B.Tech, IIT Kanpur</p>
                    <p className="text-sm text-slate-500">2022 - Present | CPI: 7.7/10</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                    <Code size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Focus Areas</h3>
                    <p className="text-slate-300">Full Stack Dev & AI Engineering</p>
                    <p className="text-sm text-slate-500">React, Node, LLMs, Agents</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 hover:border-pink-500/50 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-pink-500/20 text-pink-400 group-hover:scale-110 transition-transform">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Achievements</h3>
                    <p className="text-slate-300">Reliance Foundation Scholar</p>
                    <p className="text-sm text-slate-500">Gold Medalist WorldQuant</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;