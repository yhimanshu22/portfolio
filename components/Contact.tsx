import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { RevealOnScroll } from './ui/RevealOnScroll';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Build Something <span className="text-primary-400">Amazing</span>
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              I'm currently looking for full-time opportunities in Software Development, AI Engineering, or Quantitative Analysis. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-bold transition-all shadow-lg shadow-primary-500/25 mb-12 transform hover:-translate-y-1"
            >
              <Mail size={20} />
              Say Hello
            </a>

            <div className="grid md:grid-cols-3 gap-6 text-center border-t border-slate-700/50 pt-8">
                <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary-400 mb-3">
                        <Mail size={18} />
                    </div>
                    <p className="text-slate-400 text-sm">{PERSONAL_INFO.email}</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary-400 mb-3">
                        <Phone size={18} />
                    </div>
                    <p className="text-slate-400 text-sm">{PERSONAL_INFO.phone}</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary-400 mb-3">
                        <MapPin size={18} />
                    </div>
                    <p className="text-slate-400 text-sm">{PERSONAL_INFO.location}</p>
                </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <footer className="mt-20 text-center text-slate-600 text-sm pb-8">
        <p>© {new Date().getFullYear()} Himanshu Yadav. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;