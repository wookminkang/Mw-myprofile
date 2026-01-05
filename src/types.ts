export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface ExperienceCompany {
  company: string;
  role: string;
  period: string;
  companyUrl?: string;
  responsibilities: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string; // URL for the thumbnail/cover
  description: string;
  techStack: string[];
  link?: string;
  role: string;
  detailImages?: string[]; // Optional additional images for detail view
  detailSubImges?: string[];
  // 상세 페이지용 필드
  detailTitle?: string; // 상세 페이지 제목 (예: "골프장 키오스크 기기관리 및 광고솔루션 신규개발")
  period?: string; // 프로젝트 기간 (예: "2023.08 - 2024.02 (7개월)")
  team?: string; // 팀 구성 (예: "Windows 2명, 백엔드 4명, MQTT Broker 1명")
  features?: string[]; // 주요 기술/기능 체크리스트
}

export interface ProjectWithLayout extends Project {
  kind: 'prod' | '개인';
  span: string;
  aspectRatio: string;
}

export interface OtherProject {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  year: string;
}
