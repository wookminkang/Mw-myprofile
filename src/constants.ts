import { ExperienceItem, SkillCategory, Project } from './types';

export const INTRO_TEXT = {
  greeting: "Hello, I'm Minwook.",
  title: "Creative Technologist.",
  subtitle: "Turning complex logic into seamless user experiences. I view technology not just as code, but as a tool to solve problems and save users' time.",
  email: "kangmu238@gmail.com",
  blog: "https://orange-dol.com"
};

// Added 'span' property to control grid sizing (col-span-1 vs col-span-2)
export const PROJECTS_DATA: (Project & { span: string, aspectRatio: string })[] = [
  {
    id: 'p1',
    title: 'SmartScore Admin',
    category: 'Enterprise Architecture',
    year: '2024',
    // Using a sleek UI dashboard mockup image
    image: 'https://images.unsplash.com/photo-1481487484168-9b995ecc1679?q=80&w=2400&auto=format&fit=crop',
    description: '기존의 노후화된 골프장 관리 시스템을 현대적인 웹 기술로 재설계했습니다. 복잡한 예약 및 결제 로직을 직관적인 UI로 풀어내어 업무 효율을 40% 이상 증대시켰습니다. Adapter 패턴을 도입하여 결제 모듈의 유지보수성을 극대화했습니다.',
    role: 'Lead Frontend Engineer',
    techStack: ['React', 'TypeScript', 'TanStack Query', 'Figma Token'],
    detailImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop'
    ],
    span: 'md:col-span-2', // Wide item
    aspectRatio: 'aspect-[16/9]'
  },
  {
    id: 'p2',
    title: 'Recruit Platform',
    category: 'Mobile Experience',
    year: '2022',
    // Abstract mobile UI vibe
    image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2000&auto=format&fit=crop',
    description: '2030 세대를 타겟으로 한 직관적인 채용 플랫폼입니다. 모바일 퍼스트 디자인을 적용하여 접근성을 높였으며, 지원 절차를 간소화하여 지원율을 기존 대비 2배 이상 끌어올렸습니다.',
    role: 'Frontend Developer & UI Designer',
    techStack: ['Vue.js', 'SCSS', 'AWS S3'],
    link: 'https://example.com',
    span: 'md:col-span-1', // Tall item
    aspectRatio: 'aspect-[3/4]'
  },
  {
    id: 'p3',
    title: 'Identity v1',
    category: 'Interactive 3D',
    year: '2023',
    // 3D abstract shape
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    description: 'WebGL과 3D 요소를 활용하여 개인의 아이덴티티를 표현한 포트폴리오 사이트입니다. 성능 최적화를 위해 텍스처 압축 및 레이지 로딩 기법을 적극 활용했습니다.',
    role: 'Solo Developer',
    techStack: ['Three.js', 'React', 'GSAP'],
    span: 'md:col-span-1',
    aspectRatio: 'aspect-[3/4]'
  },
  {
    id: 'p4',
    title: 'League Dashboard',
    category: 'Data Visualization',
    year: '2023',
    // Dark data viz vibe
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    description: '실시간 골프 경기 데이터를 시각화하여 보여주는 대시보드입니다. 대량의 데이터를 효과적으로 렌더링하기 위해 가상화 리스트(Virtualization) 기술을 적용했습니다.',
    role: 'Frontend Engineer',
    techStack: ['Next.js', 'D3.js', 'Socket.io'],
    span: 'md:col-span-2',
    aspectRatio: 'aspect-[21/9]'
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: "SmartScore",
    role: "Frontend Engineer",
    period: "2023.03 – 현재",
    description: "서비스 효율성과 자동화에 중점을 둔 리드 프론트엔드 아키텍트.",
    achievements: [
      "S3 + CloudFront 런타임 페칭을 사용하여 빌드 시스템 재설계, 번역 리소스 분리.",
      "Google Sheets & GitHub Actions 연동 i18n 파이프라인 구축 (배포 시간 단축).",
      "Adapter 패턴 적용 결제 모듈 리팩토링 (유지보수성 개선).",
      "MSW 활용 에러 처리 및 하드웨어 가상화 표준화.",
      "Figma Token 동기화 파이프라인 구현."
    ]
  },
  {
    company: "Kumsol Communication",
    role: "Web Operation Support Team",
    period: "2020.09 – 2022.04",
    description: "디지털 광고 플랫폼 및 성과 솔루션 제공 기업.",
    achievements: [
      "클라이언트 웹사이트 개발 및 유지보수, UI 커스터마이징.",
      "2030 타겟 웹/모바일 채용 사이트 기획 및 구축.",
      "내부 웹 템플릿 제작 및 생산성 향상."
    ]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Core Stack",
    items: ["TypeScript", "React", "Next.js", "Vue.js"]
  },
  {
    category: "Architecture",
    items: ["TanStack Query", "Recoil", "Zustand"]
  },
  {
    category: "DevOps & Tools",
    items: ["GitHub Actions", "AWS S3", "Figma", "MSW"]
  }
];

export const OTHER_EXPERIENCE = [
  {
    title: "Golf League Service",
    desc: "복잡한 폼 처리를 위한 Funnel 패턴 설계 및 랭킹 데이터 렌더링 최적화."
  },
  {
    title: "Class & Certifications",
    desc: "Adobe Certified Associate, SBS 아카데미 웹 인터페이스 과정."
  }
];