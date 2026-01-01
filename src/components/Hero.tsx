'use client'
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden bg-[#EAEBE8]">
      {/* 3D Spline Embed */}
      <div className="absolute inset-0 w-full h-full z-0">
        <iframe 
          src='https://my.spline.design/nexbotrobotcharacterconcept-h13aoOswmvEo6Oh62Ryj3IOk/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
          title="3D Robot Concept"
        ></iframe>
      </div>

      {/* Overlay Text */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-end pb-32 md:pb-24 bg-gradient-to-t from-stone-50/20 via-transparent to-transparent">
        <div className="text-center space-y-6 max-w-2xl px-6 animate-fade-in-up">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur border border-stone-200 shadow-sm pointer-events-auto">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wide uppercase text-stone-600">
              Portfolio Beta
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-stone-900 drop-shadow-sm text-white">
            Hello!
          </h1>
          <p className="text-lg md:text-xl text-stone-700 font-medium leading-relaxed drop-shadow-sm">
            The helpful home robot designed to give you back what matters most—your time.
          </p>
           <div className="flex items-center justify-center gap-4 pt-4 pointer-events-auto">
            <button className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl">
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ArrowDown className="text-[#1A1A1A] w-8 h-8 opacity-60" />
      </div>
    </section>
  );
};

export default Hero;