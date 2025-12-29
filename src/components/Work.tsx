'use client'

import { useState, useEffect } from 'react';
import { PROJECTS_DATA } from '@/constants';
import { Project } from '@/types';
import { ArrowUpRight, X, ArrowRight } from 'lucide-react';
import Image from 'next/image';

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
                {/* <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 opacity-80 group-hover:opacity-100"
                /> */}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                
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
                    <span className="text-base font-light">{project.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Overlay (Modal) */}
      <div 
        className={`fixed inset-0 z-[60] bg-[#0a0a0a] transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${selectedProject ? 'translate-y-0' : 'translate-y-full'}`}
      >
        {selectedProject && (
          <div className="h-full w-full overflow-y-auto hide-scrollbar text-white">
            {/* Modal Header/Nav */}
            <div className="fixed top-0 left-0 right-0 p-6 md:p-10 flex justify-between items-center z-50 pointer-events-none">
              <span className="text-xl font-bold uppercase tracking-wider mix-blend-difference">{selectedProject.title}</span>
              <button 
                onClick={() => setSelectedProject(null)} 
                className="bg-white/10 backdrop-blur-md p-4 rounded-full hover:bg-white/20 transition pointer-events-auto border border-white/10 group"
              >
                <X className="w-6 h-6 text-white transition-transform group-hover:rotate-90" />
              </button>
            </div>

            {/* Content Container */}
            <div className="pt-32 pb-32 px-6 md:px-12 max-w-[1600px] mx-auto">
              
              {/* Title Section */}
              <div className="mb-20 border-b border-white/10 pb-12">
                <h1 className="text-5xl md:text-9xl font-bold mb-8 leading-[0.9]">{selectedProject.title}</h1>
                <div className="flex flex-wrap gap-4">
                  {selectedProject.techStack.map((tech: string) => (
                    <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-mono text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Grid Layout for Detail */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                 {/* Left: Info */}
                 <div className="lg:col-span-4 space-y-12">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Role</h4>
                      <p className="text-2xl font-light">{selectedProject.role}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Year</h4>
                      <p className="text-2xl font-light">{selectedProject.year}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Description</h4>
                      <p className="text-lg text-gray-400 leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    {selectedProject.link && (
                      <a 
                         href={selectedProject.link} 
                         target="_blank" 
                         rel="noopener"
                         className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-200 transition-colors mt-8"
                       >
                         Visit Site
                         <ArrowRight className="w-5 h-5" />
                       </a>
                    )}
                 </div>

                 {/* Right: Images */}
                 <div className="lg:col-span-8 space-y-8">
                    <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-900">
                      {/* <Image 
                        src={selectedProject.image} 
                        className="w-full h-full object-cover"
                        alt="Main view"
                        width={100}
                        height={100}
                      /> */}
                    </div>
                    {selectedProject.detailImages?.map((img: string, idx: number) => (
                      <div key={idx} className="aspect-video w-full overflow-hidden rounded-lg bg-gray-900">
                         {/* <Image 
                           src={img} 
                           className="w-full h-full object-cover"
                           alt="Detail view"
                         /> */}
                      </div>
                    ))}
                 </div>
              </div>

            </div>

             {/* Footer Navigation within Modal */}
            <div className="fixed bottom-0 left-0 w-full p-6 text-center pointer-events-none">
               <div 
                 className="inline-block bg-white/10 backdrop-blur-md px-6 py-2 rounded-full cursor-pointer pointer-events-auto hover:bg-white/20 transition border border-white/10"
                 onClick={() => setSelectedProject(null)}
               >
                 <span className="text-sm font-bold text-white uppercase tracking-widest">Close</span>
               </div>
            </div>

          </div>
        )}
      </div>
    </section>
  );
};

export default Work;