'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PROJECTS_DATA, OTHER_PROJECTS, SECTION_IDS } from '@/constants';
import { ProjectWithLayout } from '@/types';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Erp } from './Erp';
import { Platform } from './Platform';
import { ErpFlatform } from './ErpFlatform';
import { ErpHome } from './ErpHome';
import { useBodyLock } from '@/hooks/useBodyLock';
import OtherProjects from './OtherProjects';

const Work = () => {
  const router = useRouter();
  const [selectedProject, setSelectedProject] = useState<ProjectWithLayout | null>(null);

  useBodyLock(selectedProject !== null);

  const handleSetProject = () => {
    setSelectedProject(null);
  };

  const handleViewMore = () => {
    router.push('/work');
  };

  return (
    <section id={SECTION_IDS.WORK} className="py-24 bg-[#0a0a0a] text-white relative min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-12">
          <h2 className="text-6xl md:text-[10rem] font-bold tracking-tighter leading-[0.85] text-white">
            SELECTED <br /> <span className="text-gray-500">WORKS</span>
          </h2>
        </div>

        {/* Masonry-ish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {PROJECTS_DATA.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer relative ${project.span} ${
                index % 2 === 1 ? 'md:mt-24' : ''
              }`}
              onClick={() => router.push(`/work/${project.id}`)}
            >
              {/* Image Container */}
              <div
                className={`relative w-full ${project.aspectRatio} overflow-hidden rounded-xl bg-gray-900`}
              >
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>

                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Text info below image */}
              <div className="mt-6 flex justify-between items-start group-hover:translate-x-2 transition-transform duration-500">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <span className="text-sm font-mono border border-gray-700 rounded-full px-3 py-1">
                      {project.year}
                    </span>
                    {/* <span className="text-base font-light">{project.category}</span> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 더보기 버튼 */}
        <div className="mt-24 flex justify-center">
          <button
            onClick={handleViewMore}
            className="group flex items-center gap-4 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 rounded-full text-white font-semibold transition-all duration-300 hover:translate-x-2"
          >
            <span>더보기</span>
            <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* 기타 프로젝트 섹션 */}
        {OTHER_PROJECTS.length > 0 && <OtherProjects projects={OTHER_PROJECTS} />}
      </div>

      {/* Detail Overlay (Modal) */}
      <div
        className={`fixed inset-0 z-[60] bg-[#0a0a0a] transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          selectedProject ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {selectedProject?.id === 'p1' && <Erp modalHide={handleSetProject} />}

        {selectedProject?.id === 'p2' && <Platform modalHide={handleSetProject} />}

        {selectedProject?.id === 'p3' && <ErpFlatform modalHide={handleSetProject} />}

        {selectedProject?.id === 'p4' && <ErpHome modalHide={handleSetProject} />}
      </div>
    </section>
  );
};

export default Work;
