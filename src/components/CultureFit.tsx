import React from 'react';
import {
  MessageSquareQuote,
  HeartHandshake,
  CheckCircle2,
  GitMerge,
  Layers,
  LucideIcon,
} from 'lucide-react';

// --- 타입 정의 ---
interface CardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  tags?: string[];
  className?: string; // col-span 처리를 위해 추가
}

// --- 카드 컴포넌트 ---
const CultureCard = ({ title, description, icon: Icon, tags, className = '' }: CardProps) => {
  return (
    <div
      className={`
        group relative overflow-hidden rounded-3xl border border-gray-200 bg-[#1b1b1b] p-8 
        transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-[#1a1a1a] hover:shadow-2xl hover:shadow-orange-900/20
        ${className} text-white
      `}
    >
      {/* 배경 데코레이션 (Hover 시 은은하게 퍼지는 빛) */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-500/10 blur-[50px] transition-all duration-500 group-hover:bg-orange-500/20" />

      <div className="relative z-10 flex h-full flex-col">
        {/* 아이콘 영역 */}
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-800 text-orange-500 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
          <Icon size={24} />
        </div>

        {/* 텍스트 영역 */}
        <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-white">
          {title}
        </h3>
        <div
          className="mb-8 flex-grow text-lg leading-relaxed text-gray-300 transition-colors group-hover:text-zinc-300"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};

// --- 메인 섹션 ---
export default function CultureFitSection() {
  return (
    <section className="w-full bg-white px-6 py-24 text-zinc-100" id="Cultuer Fit">
      <div className="mx-auto max-w-[1600px]">
        {/* 헤더 */}
        <div className="mb-16 text-left">
          <h2 className="text-6xl md:text-[10rem] font-bold tracking-tighter leading-[0.85] text-black">
            Culture
            <br /> <span className="text-gray-500">Fit</span>
          </h2>
        </div>

        {/* 그리드 레이아웃 */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 lg:grid-cols-12">
          {/* 1. 커뮤니케이션 (강조: 2칸 차지) */}
          <CultureCard
            className="md:col-span-12"
            title="가치관 및 성향"
            icon={MessageSquareQuote}
            description={`
            개발팀 간 소통이 필요할때는 전문분야의 언어가 아닌 중립의 언어 (다이어그램이나 아키텍처 도면)를 사용하여 모두가 이해할 수 있는 방향을 제시합니다. <br />
            기획, 디자이너와의 논의에서도 개발자의 언어가 아닌 비개발자의 언어를 사용하여 상대방을 이해시키고 최선의 선택을 할 수 있도록 리드합니다. <br />
            현장에서 고생하는 운영팀의 어려움을 이해하고 항상 고객을 대하는 마음으로 최대한 운영팀의 요구사항을 맞추기 위해 최선의 노력을 다합니다.
            `}
          />

          {/* 2. 프로젝트 관리 */}
          <CultureCard
            className="md:col-span-6"
            title="프로젝트 관리"
            icon={HeartHandshake}
            description={`
            • Jira 타임라인, 스프린트를 활용한 체계적인 일정 관리 <br />
            • Git Repository Fork, Pull Request 기반 코드 리뷰 프로세스 <br />
            `}
          />

          {/* 3. 개발 철학 */}
          <CultureCard
            className="md:col-span-6"
            title="개발 철학"
            icon={CheckCircle2}
            description={`
              • Figjam 다이어그램을 적극 활용하여 개발 시작 전 명확한 아키텍처 설계, <br />
              • Clean Architecture 기반 설계 선호 (프로젝트 규모에 맞춰), <br />
              • 모든 주변동료들에게 배우는 자세를 가지며 지속적인 기술을 학습하고 적용
            `}
          />
        </div>
      </div>
    </section>
  );
}
