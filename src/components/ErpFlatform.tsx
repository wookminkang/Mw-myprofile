import { ArrowUpRight, X, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function ErpFlatform({ onClick }: { onClick: () => void }) {
  return (
    <div className="h-full w-full overflow-y-auto hide-scrollbar text-white">
      {/* Modal Header/Nav */}
      <div className="fixed top-0 left-0 right-0 p-6 md:p-10 flex justify-between items-center z-50 pointer-events-none">
        <span className="text-xl font-bold uppercase tracking-wider mix-blend-difference">
          ERP App
        </span>
        <button
          onClick={onClick}
          className="bg-white/10 backdrop-blur-md p-4 rounded-full hover:bg-white/20 transition pointer-events-auto border border-white/10 group"
        >
          <X className="w-6 h-6 text-white transition-transform group-hover:rotate-90" />
        </button>
      </div>

      {/* Content Container */}
      <div className="pt-32 pb-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        {/* Title Section */}
        <div className="mb-20 border-b border-white/10 pb-12">
          <h1 className="text-5xl md:text-9xl font-bold mb-8 leading-[0.9]">ERP App</h1>
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-mono text-gray-300">
              React
            </span>
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-mono text-gray-300">
              TansTack Query
            </span>
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-mono text-gray-300">
              TypeScript
            </span>
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-mono text-gray-300">
              웹프론트 3명, 백엔드 6명
            </span>
          </div>
        </div>

        {/* Grid Layout for Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* [위치 변경됨] Right -> Left: Images (lg:col-span-8) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="w-full overflow-hidden rounded-lg bg-gray-900">
              <Image
                src="/erpapp/erpapp_img_01.png"
                className="w-full h-full object-cover"
                alt="Detail view"
                width={800}
                height={500}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>

            <div className="w-full overflow-hidden rounded-lg bg-gray-900">
              <Image
                src="/erpapp/erpapp_img_03.png"
                className="w-full h-full object-cover"
                alt="Detail view"
                width={1400}
                height={800}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </div>

          {/* [위치 변경됨] Left -> Right: Info (lg:col-span-4) */}
          <div className="lg:col-span-6 space-y-12">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                Role
              </h4>
              <p className="text-2xl font-light">Frontend Engineer</p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                Year
              </h4>
              <p className="text-2xl font-light">2023 ~ 현재</p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                Description
              </h4>
              <p className="text-lg text-gray-400 leading-relaxed">
                골프장 통합관리 시스템으로 골프장 운영 전반을 아우르고, 업무 표준화 달성과
                사용자들에게 골프 운영 및 라운딩 모든 것을 제공하고, 축적된 데이터를 분석하여 다양한
                마케팅 전략을 수립할 수 있게 지원하는 통합관리 솔루션입니다. ERP 시스템 연동을 통한
                장소와 시간에 구애 받지 않는 업무를 간편하게 처리를 할 수 있습니다.
                <br />
                <br />
                골프장 운영에 필수적인 ERP 시스템 모바일 환경에서도 사용할 수 있도록 하이브리드
                웹뷰를 활용하여 개발하였으며, 모바일 환경에 맞추어 디자인 시스템을 재구성하였습니다.
              </p>
            </div>
            <div>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-2">
                  <span data-icon="check">
                    <svg
                      className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-gray-300 text-base">
                    글로벌 서비스 진출을 위한 다국어(i18n) 시스템 구축
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <span data-icon="check">
                    <svg
                      className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-gray-300 text-base">
                    Lighthouse기준 초기 렌더링 화면 LCP 70% 축소
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span data-icon="check">
                    <svg
                      className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-gray-300 text-base">
                    기존 데스크톱 중심 UI의 모바일 사용성 문제를 분석하여 UX개편
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span data-icon="check">
                    <svg
                      className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-gray-300 text-base">
                    i18n 다국어 Git Actions, AWS(S3) 자동화, 버전관리 구축
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation within Modal */}
      <div className="fixed bottom-0 left-0 w-full p-6 text-center pointer-events-none">
        <div
          className="inline-block bg-white/10 backdrop-blur-md px-6 py-2 rounded-full cursor-pointer pointer-events-auto hover:bg-white/20 transition border border-white/10"
          // Note: setSelectedProject is not defined in scope, assuming user handles this or wants onClick prop
          onClick={onClick}
        >
          <span className="text-sm font-bold text-white uppercase tracking-widest">Close</span>
        </div>
      </div>
    </div>
  );
}
