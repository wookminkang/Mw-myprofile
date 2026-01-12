'use client';

import { useRouter } from 'next/navigation';
import { PROJECTS_DATA } from '@/constants';
import WorkList from '@/components/WorkList';
import { ArrowLeft } from 'lucide-react';

export default function WorkPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* 뒤로가기 버튼 */}
      {/* <div className="sticky top-0 z-10 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 py-4">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">뒤로가기</span>
          </button>
        </div>
      </div> */}

      <WorkList projects={PROJECTS_DATA} />
    </div>
  );
}
