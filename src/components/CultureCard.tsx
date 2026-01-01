'use client'

import React from "react";
import { 
  MessageSquareQuote, 
  HeartHandshake, 
  CheckCircle2, 
  GitMerge, 
  Layers, 
  LucideIcon 
} from "lucide-react";

// --- 타입 정의 ---
interface CardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  className?: string; // col-span 처리를 위해 추가
}

// --- 카드 컴포넌트 ---
const CultureCard = ({ title, description, icon: Icon, tags, className = "" }: CardProps) => {
  return (
    <div
      className={`
        group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/50 p-8 
        transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-zinc-900 hover:shadow-2xl hover:shadow-emerald-900/20
        ${className}
      `}
    >
      {/* 배경 데코레이션 (Hover 시 은은하게 퍼지는 빛) */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-[50px] transition-all duration-500 group-hover:bg-emerald-500/20" />

      <div className="relative z-10 flex h-full flex-col">
        {/* 아이콘 영역 */}
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-800 text-emerald-500 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white">
          <Icon size={24} />
        </div>

        {/* 텍스트 영역 */}
        <h3 className="mb-3 text-xl font-bold text-zinc-100 transition-colors group-hover:text-white">
          {title}
        </h3>
        <p className="mb-8 flex-grow text-sm leading-relaxed text-zinc-400 transition-colors group-hover:text-zinc-300">
          {description}
        </p>

        {/* 태그 영역 */}
        <div className="mt-auto flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-md bg-zinc-800/50 px-2.5 py-1 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-400/20 transition-colors group-hover:bg-emerald-500/10 group-hover:text-emerald-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 메인 섹션 ---
export default function CultureFitSection() {
  return (
    <section className="w-full bg-[#09090b] px-4 py-24 text-zinc-100">
      <div className="mx-auto max-w-6xl">
        
        {/* 헤더 */}
        <div className="mb-16 text-center">
          <span className="mb-2 inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
            Culture Fit
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Work Style & <span className="text-emerald-500">Philosophy</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
            비즈니스 임팩트를 만드는 커뮤니케이션과 견고한 엔지니어링을 지향합니다.
          </p>
        </div>

        {/* 그리드 레이아웃 */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          {/* 1. 커뮤니케이션 (강조: 2칸 차지) */}
          <CultureCard
            className="md:col-span-2"
            title="Bridge Builder: 모호함을 없애는 소통"
            icon={MessageSquareQuote}
            description="개발팀 간에는 시퀀스 다이어그램과 아키텍처 도면 등 '중립의 언어'로 소통하여 오해를 없앱니다. 비개발자와의 논의에서는 기술 용어를 비즈니스 언어로 번역하여, 모두가 이해하고 최선의 의사결정을 내릴 수 있도록 리드합니다."
            tags={["Neutral Language", "Visual Communication", "Technical Translation"]}
          />

          {/* 2. 고객 중심 */}
          <CultureCard
            className=""
            title="Customer-Centric Mindset"
            icon={HeartHandshake}
            description="현장의 목소리는 제품 품질의 바로미터입니다. 운영팀의 고충을 깊이 이해하고, '고객을 대하는 마음'으로 요구사항을 기술적으로 해결하기 위해 치열하게 고민합니다."
            tags={["Empathy", "User Focus"]}
          />

          {/* 3. 프로젝트 관리 */}
          <CultureCard
            className=""
            title="Systematic Management"
            icon={CheckCircle2}
            description="Jira 스프린트를 통한 예측 가능한 일정 관리와 Confluence를 활용한 꼼꼼한 문서화(설계~체크리스트)를 통해 프로젝트 히스토리를 자산화합니다."
            tags={["Jira", "Confluence", "Sprint"]}
          />

          {/* 4. 코드 리뷰 & 협업 */}
          <CultureCard
            className=""
            title="Healthy Code Culture"
            icon={GitMerge}
            description="Git Fork 및 Pull Request 프로세스를 준수합니다. 건설적인 코드 리뷰를 통해 코드 품질을 높이고 서로의 성장을 돕는 문화를 지향합니다."
            tags={["Git Flow", "Code Review", "Feedback"]}
          />

          {/* 5. 개발 철학 */}
          <CultureCard
            className=""
            title="Engineering Excellence"
            icon={Layers}
            description="코드 작성 전 UML을 통한 명확한 설계를 선호하며, 프로젝트 규모에 맞는 Clean Architecture를 적용합니다. 항상 배우는 자세로 최신 기술을 습득합니다."
            tags={["Clean Architecture", "UML", "Continuous Learning"]}
          />

        </div>
      </div>
    </section>
  );
}