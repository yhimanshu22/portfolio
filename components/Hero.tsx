import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background is handled by the global Background component. Removed local blobs. */}

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-primary-300 text-sm font-medium mb-6 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          Available for Hire
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="block text-slate-100 mb-2">Building Future</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400">
            Intelligent Systems
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {PERSONAL_INFO.tagline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-primary-500/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium transition-all backdrop-blur-sm hover:border-primary-500/50"
          >
            Contact Me
          </a>
        </div>

        <div className="flex justify-center gap-8 text-slate-400">
          <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all duration-300">
            <Github size={24} />
          </a>
          <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-400 hover:scale-110 transition-all duration-300">
            <Linkedin size={24} />
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-pink-400 hover:scale-110 transition-all duration-300">
            <Mail size={24} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;