'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, MoveRight } from 'lucide-react';

const HeroTwo: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-[#f0f0f0]"
    >
      {/* Dynamic Background Text (The "Kangminwook") */}
      <div
        className="absolute top-1/2 left-1/2 w-full text-center pointer-events-none select-none z-0"
        style={{
          transform: `translate(calc(-50% + ${mousePos.x * -20}px), calc(-50% + ${
            mousePos.y * -20
          }px))`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <h1 className="text-[13vw] leading-none font-black font-display whitespace-nowrap animate-hero-text opacity-0 bg-gradient-to-b from-[#FF4500] to-[#ff9100] bg-clip-text text-transparent drop-shadow-[0_10px_35px_rgba(255,69,0,0.4)]">
          Kangminwook
        </h1>
      </div>

      {/* Background Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#f0f0f0] via-transparent to-[#f0f0f0]/50 z-0 pointer-events-none"></div>

      {/* Main Content Card / Floating Elements */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto mt-12 md:mt-0">
        {/* Badge */}
        <div
          className="animate-fade-in-up mb-6 inline-flex items-center px-3 py-1 rounded-full bg-white/60 backdrop-blur-md border border-neutral-200 shadow-sm"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
          <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-neutral-600">
            Portfolio Beta
          </span>
        </div>

        {/* Hello Text */}
        <h2
          className="animate-fade-in-up text-5xl md:text-7xl font-bold text-neutral-900 tracking-tight mb-6 drop-shadow-sm"
          style={{ animationDelay: '0.2s' }}
        >
          Hello!
        </h2>

        {/* Subtitle / Description */}
        <p
          className="animate-fade-in-up text-lg md:text-xl text-neutral-600 max-w-lg mx-auto leading-relaxed mb-10"
          style={{ animationDelay: '0.3s' }}
        >
          I'm a Creative Frontend Engineer designed to give you back what matters most —{' '}
          <span className="text-neutral-900 font-semibold">exceptional digital experiences.</span>
        </p>

        {/* Call to Actions */}
        <div
          className="animate-fade-in-up flex flex-col sm:flex-row items-center gap-4"
          style={{ animationDelay: '0.4s' }}
        >
          <button className="group relative px-8 py-4 bg-neutral-900 text-white rounded-full font-medium text-sm transition-all duration-300 hover:bg-[#FF4500] hover:shadow-lg hover:shadow-orange-500/30 active:scale-95 flex items-center">
            <span>Explore My Work</span>
            <MoveRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button className="px-8 py-4 bg-white/50 backdrop-blur-sm border border-neutral-200 text-neutral-900 rounded-full font-medium text-sm transition-all duration-300 hover:bg-white hover:shadow-md active:scale-95">
            Contact Me
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10 text-neutral-400">
        <ArrowDown className="w-6 h-6" />
      </div>

      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        @keyframes cinematic-reveal {
          0% { 
            opacity: 0; 
            transform: scale(0.95) translateY(40px);
            filter: blur(20px);
            letter-spacing: 0.05em;
          }
          100% { 
            opacity: 1; 
            transform: scale(1) translateY(0);
            filter: blur(0px);
            letter-spacing: -0.05em;
          }
        }
        .animate-hero-text {
          animation: cinematic-reveal 1.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export { HeroTwo };
