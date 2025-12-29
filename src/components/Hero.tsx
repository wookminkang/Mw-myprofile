import React from 'react';
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
      <div className="absolute inset-0 z-10 flex flex-col justify-end pb-24 px-6 md:px-12 pointer-events-none">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-[#1A1A1A] mb-4 drop-shadow-sm">
            Say hello to <br/> Minwook.
          </h1>
          <p className="text-lg md:text-xl text-[#4A4A4A] max-w-xl font-medium leading-relaxed drop-shadow-sm">
             Built for complex logic, optimized for human experience. 
             <br/>
             Your next Senior Frontend Engineer.
          </p>
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