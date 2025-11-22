import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Background from './components/Background';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg text-slate-300 font-sans selection:bg-primary-500/30 selection:text-white overflow-x-hidden relative">
      
      {/* Blackhole Particle Background */}
      <Background />

      {/* Navbar */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-dark-bg/80 backdrop-blur-lg border-b border-white/10 py-4 shadow-lg' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button 
            onClick={() => scrollTo('home')}
            className="text-2xl font-bold text-slate-100 tracking-tighter hover:text-primary-400 transition-colors"
          >
            HY<span className="text-primary-500">.</span>
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['About', 'Skills', 'Experience', 'Projects', 'Leadership', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-sm font-medium text-slate-300 hover:text-primary-400 transition-colors uppercase tracking-wide relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-100 p-2 hover:bg-white/10 rounded-lg transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-dark-bg/95 backdrop-blur-xl transition-transform duration-300 md:hidden z-40 flex items-center justify-center ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
           <div className="flex flex-col gap-8 text-center">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Leadership', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-2xl font-bold text-slate-100 hover:text-primary-400 transition-colors"
              >
                {item}
              </button>
            ))}
           </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Leadership />
        <Contact />
      </main>

    </div>
  );
}