import {
  ExperienceItem,
  ExperienceCompany,
  SkillCategory,
  Project,
  ProjectWithLayout,
  OtherProject,
} from './types';

export const INTRO_TEXT = {
  greeting: "Hello, I'm Minwook.",
  title: 'Creative Technologist.',
  subtitle:
    "Turning complex logic into seamless user experiences. I view technology not just as code, but as a tool to solve problems and save users' time.",
  email: 'kangmu238@gmail.com',
  blog: 'https://orange-dol.com',
};

// Added 'span' property to control grid sizing (col-span-1 vs col-span-2)
export const PROJECTS_DATA: ProjectWithLayout[] = [
  {
    id: 'p1',
    title: 'SmartScore ERP',
    category: 'Enterprise Architecture',
    year: '2023 ~ 현재',
    // Using a sleek UI dashboard mockup image
    image: '/erp/erp_img_01.png',
    description:
      ' 골프장 운영관리의 근간으로 활용되고 있는 스마트스코어의 골프장 ERP 솔루션입니다. 골프장의 소중한 업무 정보를 안전하게 백업하고 하루 동안 쌓인 DB 정보를 최적화하며, 골프테크 솔루션 기능 연동으로 골프장에서 필요로 하는 모든 기능을 하나의 서비스로 해결할 수 있습니다. ',
    role: 'Frontend Engineer',
    techStack: ['Vue3', 'TypeScript', 'TanStack Query', 'Pinia'],
    detailImages: ['/erp/erp_img_01.png', '/erp/erp_img_02.png'],
    detailSubImges: [
      '/erp/erp_img_03.png',
      '/erp/erp_img_04.png',
      '/erp/erp_img_05.png',
      '/erp/erp_img_06.png',
    ],
    span: 'md:col-span-2', // Wide item
    aspectRatio: 'aspect-[16/9]',
    link: 'https://smartscore-erp.smartscore.global/ko',
    detailTitle: '스마트스코어 골프장 ERP 솔루션 신규개발',
    period: '2023.03 - 현재',
    team: '프론트엔드 4명, 백엔드 5명, 디자이너 3명',
    features: [
      'i18n 다국어 지원 시스템 구축',
      'TanStack Query를 활용한 서버 상태 관리 및 캐싱 전략 수립',
      'Pinia를 이용한 전역 상태 관리 및 모듈화',
      'TypeScript strict mode 적용으로 타입 안정성 확보',
      'ERP 디자인 시스템 고도화 및 핵심 컴포넌트 재구축',
    ],
    kind: 'prod',
  },
  {
    id: 'p2',
    title: 'SmartScore Platform',
    category: 'Mobile Experience',
    year: '2023 ~ 현재',
    // Abstract mobile UI vibe
    image: '/platform/platform_img_01.png',
    description:
      '360만명 이상의 골퍼들의 활동을 기반으로하여, 개인화형 맞춤 추천 서비스를 통해 `나를 향한` 재미로 가득한 All-in-One 골프 플랫폼입니다.',
    role: 'Frontend Engineer',
    techStack: ['Vue2', 'JavaScript', 'AWS S3'],
    link: 'https://example.com',
    span: 'md:col-span-1', // Tall item
    aspectRatio: 'aspect-[4/4]',
    detailImages: ['/platform/platform_img_01.png'],
    detailSubImges: ['/platform/platform_img_02.png'],
    detailTitle: '스마트스코어 플랫폼 모바일 앱 고도화',
    period: '2023.01 - 현재',
    team: '프론트엔드 3명, 백엔드 5명, 디자이너 1명',
    features: [
      'Vue2 기반 하이브리드 웹앱 개발',
      '실시간 골프장 정보 및 예약 시스템 연동',
      '모바일 반응형 디자인 구현',
      '마켓/골프리그 서비스 담당',
      '골프리그 참가 신청 및 관리 시스템 개발',
    ],
    kind: 'prod',
  },
  {
    id: 'p3',
    title: 'ERP App',
    category: 'Interactive 3D',
    year: '2023 ~ 현재',
    // 3D abstract shape
    image: '/erpapp/erpapp_img_01.png',
    description: 'ERP웹과 연동하여 골프장 운영에 필요한 모든 기능을 제공하는 모바일 앱입니다.',
    role: 'Frontend Engineer',
    techStack: ['React', 'TypeScript'],
    span: 'md:col-span-1',
    aspectRatio: 'aspect-[4/4]',
    detailImages: ['/erpapp/erpapp_img_01.png'],
    detailSubImges: ['/erpapp/erpapp_img_02.png', '/erpapp/erpapp_img_03.png'],
    detailTitle: 'ERP 모바일 앱 개발',
    period: '2023.06 - 현재',
    team: '프론트엔드 2명, 백엔드 3명',
    features: [
      '웹앱 하이브리드 개발',
      '모바일 친화적 디자인 구현',
      'ERP 시스템과의 실시간 데이터 동기화',
    ],
    kind: 'prod',
  },
  {
    id: 'p4',
    title: 'SmartScore Design System',
    category: 'Design System',
    year: '2023 ~ 현재',
    image: '/ssds/sds_img_01.png',
    description:
      '스마트스코어 ERP를 위한 통합 디자인 시스템을 설계 및 구축했습니다. 디자인 토큰 기반의 테마 시스템으로 일관된 사용자 경험을 제공합니다. 재사용 가능한 UI 컴포넌트 아키텍처를 설계하고 문서화하여 팀 전체의 개발 효율성을 높였습니다.',
    role: 'Frontend Engineer & Design System Architect',
    techStack: ['Vue3', 'TypeScript', 'Storybook', 'Design Tokens'],
    span: 'md:col-span-1',
    aspectRatio: 'aspect-[4/4]',
    detailImages: ['/ssds/sds_img_01.png'],
    detailSubImges: [
      '/ssds/sds_img_02.png',
      '/ssds/sds_img_03.png',
      '/ssds/sds_img_04.png',
      '/ssds/sds_img_05.png',
      '/ssds/sds_img_06.png',
    ],
    detailTitle: 'SmartScore Design System (SDS) 구축',
    period: '2023.03 - 현재',
    team: '프론트엔드 2명, 디자이너 1명',
    features: [
      '디자인 토큰 기반 테마 시스템 구축 (색상, 타이포그래피, 간격, 그림자 등)',
      '재사용 가능한 UI 컴포넌트 개발 및 문서화',
      'Vue3 Composition API 기반 컴포넌트 아키텍처 설계',
      'TypeScript를 활용한 컴포넌트 타입 안정성 확보',
      '디자인 시스템 가이드라인 및 사용 가이드 작성',
      '팀 전체 개발 생산성 향상 및 디자인 일관성 확보',
    ],
    kind: 'prod',
  },
  {
    id: 'p5',
    title: 'ERP Global Homepage',
    category: 'Data Visualization',
    year: '2023',
    // Dark data viz vibe
    image: '/erphome/erphome_img_01.jpg',
    description:
      '골프장 운영관리의 맞춤형 전용 홈페이지 제공 ERP와 연동된 전용 홈페이지를 통해 실시간 예약, 공지 관리, 회원 관리를 한곳에서 볼 수 있는 사이트입니다.',
    role: 'Frontend Engineer',
    techStack: ['Nuxt.js', 'TypeScript'],
    span: 'md:col-span-2',
    aspectRatio: 'aspect-[16/9]',
    detailImages: ['/erphome/erphome_img_01.jpg'],
    detailSubImges: [
      '/erphome/erphome_img_02.jpg',
      '/erphome/erphome_img_03.jpg',
      '/erphome/erphome_img_04.jpg',
    ],
    detailTitle: 'ERP 글로벌 홈페이지 개발',
    period: '2023.08 - 현재',
    team: '프론트엔드 2명, 백엔드 4명, 디자이너 1명',
    features: [
      'Nuxt.js 기반 SSR/SSG 최적화',
      '다국어 지원 (i18n) 시스템 구축',
      'ERP 시스템과의 실시간 데이터 동기화',
      '모바일 친화적 디자인 구현',
    ],
    kind: 'prod',
  },
  {
    id: 'p6',
    title: '금솔커뮤니케이션 채용 사이트',
    category: 'Web Development',
    year: '2020 ~ 2022',
    image: '/kumsol/kumsol_img_01.png',
    description:
      '금솔커뮤니케이션의 채용 사이트를 별도로 개발했습니다. 지원서 작성 시 이메일과 알림톡으로 인사 담당자와 직무 팀장에게 자동 알림이 전송되며, 관리자 페이지를 통해 지원 내역을 확인할 수 있는 시스템을 구축했습니다.',
    role: 'Full Stack Developer',
    techStack: ['PHP', 'JavaScript', 'MySQL'],
    span: 'md:col-span-1',
    aspectRatio: 'aspect-[4/4]',
    detailImages: ['/kumsol/kumsol_img_01.png'],
    detailTitle: '금솔커뮤니케이션 채용 사이트 개발',
    period: '2020.09 - 2022.04',
    team: '풀스택 개발자 1명, 디자이너 2명, 기획자 1명',
    features: [
      'PHP 기반 채용 지원 시스템 개발',
      '지원서 작성 및 제출 기능 구현',
      '이메일 및 알림톡 자동 발송 시스템 구축',
      '관리자 페이지를 통한 지원 내역 관리',
      '인사 담당자 및 직무 팀장별 알림 분기 처리',
    ],
    kind: 'prod',
  },
  {
    id: 'p7',
    title: '솔루션뱅크 헬스장 앱',
    category: 'Mobile Web App',
    year: '2017 ~ 2020',
    image: '/solutionbank/spoq_shot_Banner.jpg',
    description:
      '헬스장에서 사용되는 웹앱 하이브리드 앱입니다. 회원 출입 관리, 수업 스케줄 조회 및 예약, PT 상품 결제 등 헬스장 운영에 필요한 모든 기능을 제공합니다.',
    role: 'Frontend Developer',
    techStack: ['PHP', 'Bootstrap', 'JavaScript', 'jQuery'],
    span: 'md:col-span-1',
    aspectRatio: 'aspect-[4/4]',
    detailImages: ['/solutionbank/spoq_shot_5.jpg'],
    detailSubImges: [
      '/solutionbank/spoq_shot_7.jpg',
      '/solutionbank/spoq_shot_4.jpg',
      '/solutionbank/spoq_shot_6.jpg',
    ],
    detailTitle: '솔루션뱅크 헬스장 웹앱 하이브리드 앱 개발',
    period: '2017.07 - 2020.04',
    team: '프론트엔드 1명, 백엔드 1명, 퍼블리셔 1명, 디자이너 3명',
    features: [
      'PHP 기반 웹앱 하이브리드 개발',
      'Bootstrap을 활용한 반응형 UI 구현',
      '회원 출입 관리 시스템 개발',
      '수업 스케줄 조회 및 예약 기능 구현',
      'PT 상품 결제 시스템 연동',
      '전반적인 UI/UX 설계 및 개발',
    ],
    kind: 'prod',
  },
  {
    id: 'p8',
    title: '기술 블로그',
    category: 'Personal Project',
    year: '2024 ~ 현재',
    image: '/blog/blog_img_01.png',
    description:
      '개발 지식과 경험을 공유하고 기록하기 위한 개인 기술 블로그를 구축했습니다. Next.js와 Supabase를 활용한 풀스택 개발을 진행했으며, Vercel을 통해 배포하여 운영 중입니다. shadcn UI를 이용한 모던한 디자인 시스템, Supabase Authentication 인증, 실시간 데이터베이스 연동, 마크다운 기반 콘텐츠 관리 등 다양한 기술 스택을 활용했습니다.',
    role: 'Full Stack Developer',
    techStack: ['Next.js', 'TypeScript', 'shadcn UI', 'Supabase'],
    span: 'md:col-span-1',
    aspectRatio: 'aspect-[4/4]',
    detailImages: ['/blog/blog_img_01.png'],
    detailTitle: '개인 기술 블로그 개발',
    period: '2024 - 현재',
    team: '개인 프로젝트',
    features: [
      'Next.js App Router 기반 SSR/SSG 최적화',
      'TypeScript를 활용한 타입 안정성 확보',
      'shadcn UI 컴포넌트를 활용한 모던한 디자인 시스템 구축',
      'Supabase를 통한 실시간 데이터베이스 연동',
      'Supabase Auth를 활용한 사용자 인증 시스템',
      '반응형 디자인 및 모바일 최적화',
      '마크다운 기반 블로그 포스트 작성 및 관리',
      'SEO 최적화 및 메타 태그 관리',
    ],
    kind: '개인',
  }
  // {
  //   id: 'p9',
  //   title: '입원닷컴',
  //   category: 'Web Development',
  //   year: '2020 ~ 2022',
  //   image: '/etc/etc_img_01.jpg',
  //   description:
  //     '전국에 있는 입원치료가 가능한 한방의료기관들이 모여있는 한방 입원치료 네트워크 플랫폼입니다. 지역별, 의료기관별 검색 기능을 제공하며, 사용자가 원하는 한방 입원치료 기관을 쉽게 찾을 수 있도록 구축했습니다.',
  //   role: 'Full Stack Developer',
  //   techStack: ['PHP', 'JavaScript', 'jQuery'],
  //   span: 'md:col-span-2',
  //   aspectRatio: 'aspect-[16/9]',
  //   detailImages: ['/etc/etc_img_01.jpg'],
  //   detailTitle: '입원닷컴 - 한방 입원치료 네트워크 플랫폼 개발',
  //   period: '2020.09 - 2022.04',
  //   team: '풀스택 개발자 3명, 디자이너 2명, 기획자 1명',
  //   features: [
  //     'PHP 기반 웹 플랫폼 개발',
  //     '전국 한방의료기관 데이터베이스 구축 및 관리',
  //     '지역별, 지하철역별, 랜드마크별 검색 기능 구현',
  //     'jQuery를 활용한 동적 UI 인터랙션 구현',
  //     '의료기관 지도 검색 및 위치 정보 제공',
  //     '반응형 웹 디자인 구현',
  //     '관리자 페이지를 통한 의료기관 정보 관리 시스템',
  //   ],
  //   kind: 'prod',
  // },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: 'SmartScore',
    role: 'Frontend Engineer',
    period: '2023.03 – 현재',
    description: '서비스 효율성과 자동화에 중점을 둔 리드 프론트엔드 아키텍트.',
    achievements: [
      'S3 + CloudFront 런타임 페칭을 사용하여 빌드 시스템 재설계, 번역 리소스 분리.',
      'Google Sheets & GitHub Actions 연동 i18n 파이프라인 구축 (배포 시간 단축).',
      'Adapter 패턴 적용 결제 모듈 리팩토링 (유지보수성 개선).',
      'MSW 활용 에러 처리 및 하드웨어 가상화 표준화.',
      'Figma Token 동기화 파이프라인 구현.',
    ],
  },
  {
    company: 'Kumsol Communication',
    role: 'Web Operation Support Team',
    period: '2020.09 – 2022.04',
    description: '디지털 광고 플랫폼 및 성과 솔루션 제공 기업.',
    achievements: [
      '클라이언트 웹사이트 개발 및 유지보수, UI 커스터마이징.',
      '2030 타겟 웹/모바일 채용 사이트 기획 및 구축.',
      '내부 웹 템플릿 제작 및 생산성 향상.',
    ],
  },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Core Stack',
    items: ['TypeScript', 'React', 'Next.js', 'Vue.js'],
  },
  {
    category: 'Architecture',
    items: ['TanStack Query', 'Recoil', 'Zustand'],
  },
  {
    category: 'DevOps & Tools',
    items: ['GitHub Actions', 'AWS S3', 'Figma', 'MSW'],
  },
];

export const OTHER_EXPERIENCE = [
  {
    title: 'Golf League Service',
    desc: '복잡한 폼 처리를 위한 Funnel 패턴 설계 및 랭킹 데이터 렌더링 최적화.',
  },
  {
    title: 'Class & Certifications',
    desc: 'Adobe Certified Associate, SBS 아카데미 웹 인터페이스 과정.',
  },
];

export const EXPERIENCE_COMPANIES_DATA: ExperienceCompany[] = [
  {
    company: '스마트스코어',
    role: '프론트팀 매니저',
    period: '2023.03 ~ 재직중',
    companyUrl: 'https://www.smartscore.global/kr/tech',
    responsibilities: [
      '플랫폼 앱내 신규기능 개발',
      'Web/Mobile 골프 사용자용 하이브리드 웹앱 개발',
      'ERP, Back Office 개발',
    ],
  },
  {
    company: '금솔커뮤니케이션',
    role: '웹지원팀 대리',
    period: '2020.09 ~ 2022.04',
    companyUrl: 'https://www.smartscore.global/kr/tech',
    responsibilities: [
      '사내 CRM, CMS, 채용사이트 신규 개발',
      'Web/Mobile 맞춤형 사이트 템플릿 개발',
      '30여개 이상 사이트 제작',
    ],
  },
  {
    company: '솔루션뱅크',
    role: '기술연구소 대리',
    period: '2017.07 ~ 2020.04',
    companyUrl: 'https://www.smartscore.global/kr/tech',
    responsibilities: [
      'CRM 고객 관리 고도화',
      '키오스크 출입 시스템 개발(바코드)',
      '각 지점별 운영 사이트 개발',
    ],
  },
  {
    company: '프리랜서',
    role: '',
    period: '2022.05 ~ 2023.02',
    responsibilities: [
      '서민금흉진흥원 사이트 개발 참여',
      'BizKt 사이트 개발 참여',
      '그외 사이트 유지보수 및 신규 개발',
    ],
  },
];

// 기타 프로젝트 (간단한 리스트 형태로 표시)
export const OTHER_PROJECTS: OtherProject[] = [
  // 여기에 추가 프로젝트들을 간단하게 추가하세요
  // 예시:
  // {
  //   title: '프로젝트 이름',
  //   description: '간단한 설명',
  //   techStack: ['React', 'TypeScript'],
  //   link: 'https://example.com',
  //   github: 'https://github.com/username/repo',
  //   year: '2024',
  // },
];

// 섹션 ID 상수 정의 (네비게이션과 일치하도록)
export const SECTION_IDS = {
  EXPERIENCE: 'experience',
  WORK: 'work',
  CULTURE_FIT: 'culture-fit',
  INTERVIEW: 'interview',
  CONTACT: 'contact',
} as const;
