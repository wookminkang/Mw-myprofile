import { X } from 'lucide-react';
import Image from 'next/image';

export function Platform({ onClick }: { onClick: () => void }) {
  return (
    <div className="h-full w-full overflow-y-auto hide-scrollbar text-white">
      {/* Modal Header/Nav */}
      <div className="fixed top-0 left-0 right-0 p-6 md:p-10 flex justify-between items-center z-50 pointer-events-none">
        <span className="text-xl font-bold uppercase tracking-wider mix-blend-difference">
          SmartScore Platform
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
          <h1 className="text-5xl md:text-9xl font-bold mb-8 leading-[0.9]">SmartScore Platform</h1>
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-mono text-gray-300">
              Vue2
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
                src="/platform/platform_img_01.png"
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
                360만명 이상의 골퍼들의 활동을 기반으로하여, 개인화형 맞춤 추천 서비스를 통해 `나를
                향한` 재미로 가득한 All-in-One 골프 플랫폼입니다. 방대한 유저 데이터를 분석하여
                단순한 기록 저장을 넘어, 체계적인 실력 관리와 네트워킹이 가능한 스마트한 솔루션을
                지원합니다.
                {/* <br />
                <br />
                <h3 className="text-xl text-white mb-2 font-semibold">담당 서비스</h3>
                [랭킹] <br />
                - 스마트스코어의 라운드 기반 랭킹 제공 <br />
                - 전국, 거주지별, 성별, 연령별, 비거리별 유저의 순위 제공
                <br />
                <br />
                [마켓/중고마켓]
                <br />- 클럽, 용품 등 골프 전문 온라인몰 <br />- 중고 거래 기능 제공
                <br />
                <br />
                [골프리그]
                <br />- 클럽, 용품 등 골프 전문 온라인몰 <br />- 중고 거래 기능 제공 */}
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
                  <span className="text-gray-300 text-base">[골프리그] 서비스 담당</span>
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
                  <span className="text-gray-300 text-base">[중고마켓] 서비스 담당</span>
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
                  <span className="text-gray-300 text-base">마켓 서비스 도메인 분리 및 모듈화</span>
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
                    [성능 최적화] 데이터 특성에 맞춘 캐싱 및 렌더링 전략
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
                    [비즈니스 로직/아키텍처] 골프리그 참가신청에 복잡한 비즈니스 로직을 Funnel
                    패턴과 zod Scheme 모듈화 다중 폼 설계
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 mt-10">
          <div className="w-full overflow-hidden rounded-lg bg-gray-900">
            <Image
              src="/platform/platform_img_02.png"
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
      </div>

      {/* Footer Navigation within Modal */}
      <div className="fixed bottom-0 left-0 w-full p-6 text-center pointer-events-none">
        <div
          className="inline-block bg-white/10 backdrop-blur-md px-6 py-2 rounded-full cursor-pointer pointer-events-auto hover:bg-white/20 transition border border-white/10"
          onClick={onClick}
        >
          <span className="text-sm font-bold text-white uppercase tracking-widest">Close</span>
        </div>
      </div>
    </div>
  );
}
