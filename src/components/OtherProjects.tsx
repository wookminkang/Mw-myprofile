'use client';

import { OtherProject } from '@/types';
import { ExternalLink, Github } from 'lucide-react';

interface OtherProjectsProps {
  projects: OtherProject[];
}

export default function OtherProjects({ projects }: OtherProjectsProps) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="mt-24 pt-24 border-t border-white/10">
      <div className="mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">기타 프로젝트</h3>
        <p className="text-gray-400 text-lg">
          그 외 참여했던 프로젝트들을 간단히 소개합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative p-6 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <h4 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors">
                {project.title}
              </h4>
              <div className="flex items-center gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-3">
              {project.techStack.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 rounded-md bg-white/5 text-gray-400 text-xs border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="text-gray-500 text-xs">{project.year}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

