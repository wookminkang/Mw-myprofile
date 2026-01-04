'use client';

import { useRouter } from 'next/navigation';
import { ProjectWithLayout } from '@/types';
import Image from 'next/image';
import { X, Check } from 'lucide-react';

interface ProjectDetailProps {
  project: ProjectWithLayout;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const router = useRouter();

  const handleClose = () => {
    router.push('/work');
  };

  return (
    <div className="min-h-screen lg:h-full bg-[#0a0a0a] relative">
      {/* 닫기 버튼 */}
      <button
        onClick={handleClose}
        className="fixed lg:absolute top-4 right-4 lg:top-6 lg:right-6 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 lg:bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 transition-all duration-300"
        aria-label="닫기"
      >
        <X className="w-5 h-5 text-white" />
      </button>

      <div className="px-4 py-6 sm:px-6 sm:py-8 lg:p-12 pb-20 lg:pb-12">
        {/* 프로젝트 이미지 */}
        {project.detailImages && project.detailImages.length > 0 && (
          <div className="relative mb-8 w-full aspect-video rounded-xl overflow-hidden bg-gray-900">
            <Image
              src={project.detailImages[0]}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        )}

        {/* 프로젝트 제목 */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 pr-12 lg:pr-0">
          {project.detailTitle || project.title}
        </h1>

        {/* 프로젝트 메타 정보 */}
        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          {project.period && (
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="text-gray-400 text-sm">기간:</span>
              <span className="text-white font-medium text-sm sm:text-base break-words">
                {project.period}
              </span>
            </div>
          )}

          {project.team && (
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="text-gray-400 text-sm">팀 구성:</span>
              <span className="text-white font-medium text-sm sm:text-base break-words">
                {project.team}
              </span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <span className="text-gray-400 text-sm">역할:</span>
            <span className="text-white font-medium text-sm sm:text-base">{project.role}</span>
          </div>
        </div>

        {/* 프로젝트 설명 */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
            프로젝트 소개
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            {project.description}
          </p>
        </div>

        {/* 주요 기술/기능 */}
        {project.features && project.features.length > 0 && (
          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
              주요 기술/기능
            </h2>
            <ul className="space-y-2 sm:space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5 sm:mt-0.5" />
                  <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 기술 스택 */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">기술 스택</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/10 text-gray-300 text-xs sm:text-sm border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 추가 이미지 */}
        {project.detailSubImges && project.detailSubImges.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {project.detailSubImges.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-900"
              >
                <Image
                  src={image}
                  alt={`${project.title} - ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
