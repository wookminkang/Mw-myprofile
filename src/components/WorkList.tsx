'use client';

import { useRouter } from 'next/navigation';
import { ProjectWithLayout } from '@/types';
import Image from 'next/image';

interface WorkListProps {
  projects: ProjectWithLayout[];
  selectedId?: string;
}

export default function WorkList({ projects, selectedId }: WorkListProps) {
  const router = useRouter();

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Projects</h1>
        <p className="text-gray-400">프로젝트를 선택하여 상세 정보를 확인하세요</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {projects.map((project) => {
          const isSelected = selectedId === project.id;

          return (
            <div
              key={project.id}
              onClick={() => router.push(`/work/${project.id}`)}
              className={`
                group relative cursor-pointer rounded-xl p-4 border transition-all duration-300
                ${
                  isSelected
                    ? 'border-green-500 bg-green-500/10 shadow-lg shadow-green-500/20'
                    : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
                }
              `}
            >
              <div className="flex items-start gap-4">
                {/* 프로젝트 아이콘/이미지 */}
                <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-800 flex-shrink-0">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  )}
                </div>

                {/* 프로젝트 정보 */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h3>
                    <span
                      className={`
                        text-xs px-2 py-1 rounded-full font-medium flex-shrink-0
                        ${
                          isSelected
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-white/10 text-gray-400'
                        }
                      `}
                    >
                      {project.kind}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 line-clamp-2">{project.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
