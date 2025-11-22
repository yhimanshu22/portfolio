import React, { useEffect, useRef } from 'react';

// --- Icon SVGs ---

const ReactIcon = () => (
  <svg viewBox="-10.5 -9.45 21 18.9" className="w-full h-full text-[#61DAFB] fill-current">
    <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="10" ry="4.5"></ellipse>
      <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
      <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
    </g>
  </svg>
);

const TSIcon = () => (
  <svg viewBox="0 0 128 128" className="w-full h-full">
    <path fill="#007ACC" d="M0 0h128v128H0z"/>
    <path fill="#FFF" d="M71.4 78.2c-6.1-.5-10.4 3.8-10.4 3.8l-5.2-6.1s6.2-6.9 16.6-6.9c12.1 0 19.3 8.6 19.3 19.6v29.6h-11v-5.9s-3.7 7.1-13.2 7.1c-10.6 0-16-8.6-16-17.6 0-15.1 13.1-20.6 23.8-21 6.1-.2 6.3 1.3 6.3 1.3v-1.1c0-5.2-3-7.6-10.2-2.9zm6.6 20.7c-3.5.2-8.5 1.8-8.5 8.9 0 5.8 3.4 8.7 8.5 8.7 5.8 0 8.9-3.8 8.9-8.7l-8.9-8.9zM22.7 56.3h33.2v10.5H39.7v51.4H28.2V66.8H16.2V56.3z"/>
  </svg>
);

const JSIcon = () => (
  <svg viewBox="0 0 128 128" className="w-full h-full">
    <path fill="#F7DF1E" d="M0 0h128v128H0z"/>
    <path fill="#000" d="M86.6 40.3c-13 0-22.6 6.1-22.6 6.1l4.8 8.5s6.8-4.6 14.4-4.6c4.4 0 7.6 2.2 7.6 5.7 0 3.1-1.8 5.5-8.9 8.3-12.2 4.8-17.1 11.5-17.1 19.8 0 13.5 11.6 22.2 28 22.2 16 0 26.4-8.3 26.4-8.3l-5-8.7s-8.1 6.1-18.8 6.1c-6.4 0-10.4-3.2-10.4-7.9 0-5.5 4.8-7.3 15.7-11.2 12.7-4.5 17.3-11.6 17.3-20.4 0-14.5-12.5-20.2-29.3-20.2zM30 41.3h14.3v64H30v-64z"/>
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 128 128" className="w-full h-full">
    <defs>
      <linearGradient id="py-a" x1="19.4" y1="17.2" x2="83.3" y2="80.1" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#387eb8"/>
        <stop offset="1" stopColor="#366994"/>
      </linearGradient>
      <linearGradient id="py-b" x1="86.7" y1="63.2" x2="43.3" y2="108.3" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#ffe052"/>
        <stop offset="1" stopColor="#ffc331"/>
      </linearGradient>
    </defs>
    <path fill="url(#py-a)" d="M63.9 10.8c-16.1 0-15.2 7-15.2 7l.1 16.1h31.6v4.5H34s-15.7-1.9-15.7 24.9c0 12.9 7.5 23 20.3 23h3.7v-13s-.7-15.2 15.1-15.2h24.9v-27c0-13.3-10.2-20.2-18.4-20.3zm-7.3 10.6a4.3 4.3 0 1 1-4.3 4.3 4.3 4.3 0 0 1 4.3-4.3z"/>
    <path fill="url(#py-b)" d="M64.3 117.4c16.1 0 15.2-7 15.2-7l-.1-16.1H47.8V89.8h46.4s15.7 1.9 15.7-24.9c0-12.9-7.5-23-20.3-23h-3.7v13s.7 15.2-15.1 15.2H45.9v27c0 13.3 10.2 20.2 18.4 20.3zm7.3-10.6a4.3 4.3 0 1 1 4.3-4.3 4.3 4.3 0 0 1-4.3 4.3z"/>
  </svg>
);

// --- Background Component ---

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 12000);
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.2 + 0.2,
          speedX: (Math.random() - 0.5) * 0.15,
          speedY: (Math.random() - 0.5) * 0.15,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        ctx.fillStyle = `rgba(147, 197, 253, ${p.opacity})`; // Slightly blue tint
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Move particles
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around screen
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        
        // Twinkle effect
        if (Math.random() > 0.995) {
           p.opacity = Math.random() * 0.5 + 0.1;
        }
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 bg-[#030712]">
      
      {/* --- Canvas Starfield --- */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-50 pointer-events-none"
      />

      {/* --- Central Glow / Blackhole Effects --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-indigo-950/50 rounded-full blur-[60px]"></div>
      
      {/* Crosshairs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-indigo-900/20 to-transparent opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-900/20 to-transparent opacity-30"></div>

      {/* --- Orbit Container --- */}
      {/* Using explicit centering to avoid layout issues with absolute children in flex containers across different browsers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 flex items-center justify-center">
        
        {/* --- Orbit 1: JavaScript (Inner) --- */}
        <div className="absolute w-[300px] h-[300px] rounded-full border border-indigo-500/10 animate-[spin_15s_linear_infinite]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 p-2 bg-slate-900/80 rounded-lg border border-indigo-500/30 backdrop-blur-md shadow-lg shadow-indigo-500/20 animate-[spin_15s_linear_infinite_reverse]">
            <JSIcon />
          </div>
        </div>

        {/* --- Orbit 2: Python & TypeScript (Middle) --- */}
        <div className="absolute w-[500px] h-[500px] rounded-full border border-indigo-500/10 animate-[spin_25s_linear_infinite_reverse]">
          {/* Item 1: Python */}
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-12 h-12 p-2 bg-slate-900/80 rounded-xl border border-blue-500/30 backdrop-blur-md shadow-lg shadow-blue-500/20 animate-[spin_25s_linear_infinite]">
             <PythonIcon />
          </div>
          {/* Item 2: TS (Opposite side) */}
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-10 h-10 p-1.5 bg-slate-900/80 rounded-lg border border-blue-400/30 backdrop-blur-md shadow-lg shadow-blue-400/20 animate-[spin_25s_linear_infinite]">
             <TSIcon />
          </div>
        </div>

        {/* --- Orbit 3: React (Outer) --- */}
        <div className="absolute w-[750px] h-[750px] rounded-full border border-indigo-500/10 animate-[spin_40s_linear_infinite]">
          <div className="absolute bottom-[15%] right-[15%] w-14 h-14 p-2 bg-slate-900/80 rounded-full border border-cyan-500/30 backdrop-blur-md shadow-lg shadow-cyan-500/20 animate-[spin_40s_linear_infinite_reverse]">
            <ReactIcon />
          </div>
        </div>

        {/* --- Decorative Outer Ring (Static) --- */}
        <div className="absolute w-[900px] h-[900px] rounded-full border border-dashed border-indigo-500/5 opacity-50"></div>
        
      </div>

    </div>
  );
};

export default Background;