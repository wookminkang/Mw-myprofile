import React from 'react';
import { SKILLS_DATA } from '@/constants';

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-[#1A1A1A] text-[#F3F4F1] rounded-t-[3rem] -mt-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Technical Specs</h2>
            <p className="text-gray-400 text-xl">System capabilities and frameworks.</p>
          </div>
          <div className="mt-8 md:mt-0 text-right hidden md:block">
             <div className="text-6xl font-mono opacity-20">v24.0</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS_DATA.map((group, idx) => (
            <div key={idx} className="border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-colors duration-300">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-4 py-2 bg-white/5 rounded-lg text-sm font-mono text-gray-300 border border-transparent hover:border-white/20 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Decorative graphic element */}
        <div className="mt-20 border-t border-white/10 pt-10 flex justify-between items-center text-xs font-mono text-gray-500 uppercase tracking-widest">
           <span>System Status: Online</span>
           <span>Optimized for Performance</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;