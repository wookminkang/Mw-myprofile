import { notFound } from 'next/navigation';
import { PROJECTS_DATA } from '@/constants';
import ProjectDetail from '@/components/ProjectDetail';
import WorkList from '@/components/WorkList';

interface WorkDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { id } = await params;
  const project = PROJECTS_DATA.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="flex flex-col lg:flex-row lg:h-screen lg:overflow-hidden">
        {/* 왼쪽: 프로젝트 목록 (데스크톱만 표시) */}
        <div className="hidden lg:block lg:w-1/2 lg:overflow-y-auto lg:border-r lg:border-white/10">
          <WorkList projects={PROJECTS_DATA} selectedId={id} />
        </div>

        {/* 오른쪽: 프로젝트 상세 */}
        <div className="w-full lg:w-1/2 lg:overflow-y-auto">
          <ProjectDetail project={project} />
        </div>
      </div>
    </div>
  );
}
