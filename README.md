# Minwook Kang - Portfolio

프론트엔드 엔지니어 강민욱의 포트폴리오 웹사이트입니다.

## 🚀 프로젝트 소개

이 포트폴리오는 Next.js 16과 React 19를 기반으로 제작된 개인 포트폴리오 웹사이트입니다. 제가 참여한 프로젝트들과 경력, 그리고 개발 철학을 소개합니다.

## ✨ 주요 기능

- **프로젝트 갤러리**: 참여한 프로젝트들을 시각적으로 소개
- **프로젝트 상세 페이지**: 각 프로젝트의 상세 정보 및 기술 스택
- **경력 소개**: 회사별 경력 및 주요 성과
- **문화 적합도**: 가치관 및 협업 방식 소개
- **인터뷰 Q&A**: 자주 받는 질문에 대한 답변

## 🛠️ 기술 스택

### Core
- **Next.js** 16.1.1 (App Router)
- **React** 19.2.3
- **TypeScript** 5
- **Tailwind CSS** 4

### 주요 라이브러리
- **Lucide React**: 아이콘
- **Next.js Image**: 이미지 최적화

## 📁 프로젝트 구조

```
my-portfolio/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # 루트 레이아웃
│   │   ├── page.tsx      # 메인 페이지
│   │   ├── work/         # 프로젝트 목록/상세 페이지
│   │   └── globals.css   # 전역 스타일
│   ├── components/       # React 컴포넌트
│   │   ├── Navbar.tsx    # 네비게이션 바
│   │   ├── Work.tsx      # 프로젝트 섹션
│   │   ├── Experience.tsx # 경력 섹션
│   │   ├── CultureFit.tsx # 문화 적합도 섹션
│   │   ├── Interview.tsx  # 인터뷰 섹션
│   │   ├── WorkList.tsx   # 프로젝트 목록 컴포넌트
│   │   └── ProjectDetail.tsx # 프로젝트 상세 컴포넌트
│   ├── hooks/            # 커스텀 훅
│   │   ├── useScroll.ts  # 스크롤 감지 훅
│   │   └── useBodyLock.ts # Body scroll lock 훅
│   ├── lib/              # 유틸리티 함수
│   │   └── scroll.ts     # 스크롤 유틸리티
│   ├── types.ts          # TypeScript 타입 정의
│   └── constants.ts      # 상수 데이터
└── public/               # 정적 자산
    ├── erp/              # ERP 프로젝트 이미지
    ├── platform/          # Platform 프로젝트 이미지
    ├── erpapp/            # ERP App 이미지
    ├── erphome/           # ERP Homepage 이미지
    └── kumsol/            # 금솔커뮤니케이션 프로젝트 이미지
```

## 🚦 시작하기

### 필수 요구사항

- Node.js 18 이상
- pnpm (권장) 또는 npm, yarn

### 설치 및 실행

1. 저장소 클론
```bash
git clone <repository-url>
cd my-portfolio
```

2. 의존성 설치
```bash
pnpm install
```

3. 개발 서버 실행
```bash
pnpm dev
```

4. 브라우저에서 확인
```
http://localhost:3000
```

### 빌드

프로덕션 빌드를 생성하려면:

```bash
pnpm build
pnpm start
```

## 📝 주요 섹션

### Experience
회사별 경력 및 주요 성과를 소개합니다.

### Work
참여한 프로젝트들을 카드 형태로 보여주며, 클릭 시 상세 페이지로 이동합니다.

### Culture Fit
개발 철학, 가치관, 협업 방식을 소개합니다.

### Interview
자주 받는 질문에 대한 답변을 제공합니다.

## 🎨 디자인 시스템

### 컬러 팔레트
- 배경: `#F3F4F1` (라이트), `#0a0a0a` (다크)
- 액센트: `#FF4500` (오렌지)
- 텍스트: `#1b1b1b` (다크), `white` (라이트)

### 타이포그래피
- 폰트: Geist Sans, Geist Mono
- 헤딩: 대형 볼드 스타일
- 본문: 가독성 중심의 레이아웃

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.

## 📧 연락처

- 이메일: kangmu238@gmail.com
- 블로그: https://orange-dol.com

---

Made with ❤️ by Minwook Kang
