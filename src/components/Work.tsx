'use client'

import { useState, useEffect } from 'react';
import { PROJECTS_DATA } from '@/constants';
import { Project } from '@/types';
import { ArrowUpRight, X, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Erp } from './Erp';
import { Platform } from './Platform';
import { ErpFlatform } from './ErpFlatform';

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const handleSetProject = () => {
    console.log(`click`)
    setSelectedProject('')
  }

  return (
    <section id="work" className="py-24 bg-[#0a0a0a] text-white relative min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-12">
          <h2 className="text-6xl md:text-[10rem] font-bold tracking-tighter leading-[0.85] text-white">
            SELECTED <br/> <span className="text-gray-500">WORKS</span>
          </h2>
          <div className="mt-8 md:mt-0 text-right">
             <p className="text-gray-400 text-lg md:text-xl max-w-sm font-light leading-relaxed">
               Logic meets Aesthetics.<br/>
               A collection of digital products crafted with precision.
             </p>
             <div className="mt-4 text-sm font-mono text-gray-600">
               © {new Date().getFullYear()} KANG.DEV
             </div>
          </div>
        </div>

        {/* Masonry-ish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">                
          {PROJECTS_DATA.map((project, index) => (
            <div 
              key={project.id} 
              className={`group cursor-pointer relative ${project.span} ${index % 2 === 1 ? 'md:mt-24' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Container */}
              <div className={`relative w-full ${project.aspectRatio} overflow-hidden rounded-xl bg-gray-900`}>                
                {project.image && (
                  <Image 
                    src={project.image}
                    alt={project.title}  
                    width={2000}
                    height={900}
                    style={{
                      width: '100%',
                      height: 'auto', // 높이는 비율에 맞춰 자동 조절
                    }}
                    className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                )}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500">
                </div>
                
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
              </div>
              
              {/* Text info below image */}
              <div className="mt-6 flex justify-between items-start group-hover:translate-x-2 transition-transform duration-500">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <span className="text-sm font-mono border border-gray-700 rounded-full px-3 py-1">{project.year}</span>
                    {/* <span className="text-base font-light">{project.category}</span> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Overlay (Modal) */
      
      
      
      }
      <div 
        className={`fixed inset-0 z-[60] bg-[#0a0a0a] transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${selectedProject ? 'translate-y-0' : 'translate-y-full'}`}
      >
        {selectedProject?.id === 'p1' && (
          <Erp onClick={handleSetProject}/>
        )}

        {selectedProject?.id === 'p2' && (
         <Platform onClick={handleSetProject}/>
        )}

        {selectedProject?.id === 'p3' && (
         <ErpFlatform onClick={handleSetProject}/>
        )}
      </div>
    </section>
  );
};

export default Work;