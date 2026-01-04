import { SECTION_IDS } from '@/constants';

export function Interview() {
  return (
    <section className="w-full bg-[#F3F4F1] px-6 py-24" id={SECTION_IDS.INTERVIEW}>
      <div className="mx-auto max-w-[1600px]">
        {/* 헤더 */}
        <div className="mb-20 text-left">
          <h2 className="text-6xl md:text-[10rem] font-bold tracking-tighter leading-[0.85] text-black">
            Inter
            <br /> <span className="text-zinc-400">View</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Q1. 직업 가치 */}
          <div className="group relative bg-white border border-white rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2">
            <span className="absolute top-8 right-10 text-6xl font-black text-zinc-50 group-hover:text-orange-100 transition-colors italic">
              01
            </span>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex gap-2 mb-6">
                <span className="text-[10px] px-3 py-1 rounded-full border border-zinc-100 text-zinc-500 font-bold bg-zinc-50 group-hover:text-orange-500 transition-colors">
                  #공동성장
                </span>
                <span className="text-[10px] px-3 py-1 rounded-full border border-zinc-100 text-zinc-500 font-bold bg-zinc-50 group-hover:text-orange-500 transition-colors">
                  #협업
                </span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-6 group-hover:text-orange-600 transition-colors leading-tight break-keep">
                가장 중요하게 생각하는 직업 가치는 무엇인가요?
              </h3>
              <div className="space-y-4 text-zinc-600 leading-relaxed text-[15px]">
                <p>
                  저는 <span className="text-orange-500 font-bold">"공동성장"</span>과{' '}
                  <span className="text-orange-500 font-bold">"협업"</span>을 가장 중요한 직업
                  가치로 생각합니다.
                </p>
                <p>
                  성장은 단순히 개인의 기술적 발전뿐만 아니라 팀과 회사가 함께 성장하는 것을
                  의미합니다. 끊임없이 새로운 기술을 학습하고 적용하며 나 자신을 성장시키며 회사의
                  비즈니스도 함께 발전시켜 나가는 것이 중요하다고 생각합니다.
                </p>
                <p>
                  협업은 제가{' '}
                  <span className="text-zinc-900 font-bold underline decoration-orange-200 underline-offset-4">
                    "중재자의 역할"
                  </span>
                  을 중요하게 생각하는 이유이기도 합니다. 다양한 이해관계자들과 원활하게 소통하며
                  최선의 결과물을 만들어내는 것이 좋은 회사 문화의 핵심이라고 믿습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Q2. 의견 충돌 해결 */}
          <div className="group relative bg-white border border-white rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2">
            <span className="absolute top-8 right-10 text-6xl font-black text-zinc-50 group-hover:text-orange-100 transition-colors italic">
              02
            </span>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex gap-2 mb-6">
                <span className="text-[10px] px-3 py-1 rounded-full border border-zinc-100 text-zinc-500 font-bold bg-zinc-50 group-hover:text-orange-500 transition-colors">
                  #커뮤니케이션
                </span>
                <span className="text-[10px] px-3 py-1 rounded-full border border-zinc-100 text-zinc-500 font-bold bg-zinc-50 group-hover:text-orange-500 transition-colors">
                  #중재자
                </span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-6 group-hover:text-orange-600 transition-colors leading-tight break-keep">
                팀 프로젝트에서 의견 충돌이 발생했을 때 어떻게 해결했나요?
              </h3>
              <div className="space-y-4 text-zinc-600 leading-relaxed text-[15px] mb-6">
                <p>
                  대부분의 의견충돌의 원인은{' '}
                  <span className="text-orange-500 font-bold text-lg">
                    커뮤니케이션 부재와 상대방의 이해 부족
                  </span>
                  에서 비롯된다고 생각합니다. 그래서 먼저 상대방의 의견을 명확히 이해하는 것부터
                  시작합니다.
                </p>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-r-2xl mt-auto">
                <p className="text-sm text-orange-600 font-bold mb-2 uppercase tracking-widest">
                  구체적인 사례
                </p>
                <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                  웹앱기반 안드로이드앱에 광고솔루션을 추가하는 과정에서 웹 프론트엔드팀, 네이티브팀
                  간에 광고 SDK 통합 방식에 대한 의견 충돌이 있었습니다. 2개의 팀이 개별로
                  커뮤니케이션을 시도하여 혼선이 발생했고, 결국 제가 중재자로 나서게 되었습니다.
                  광고솔루션의 작동 방식을 문서화하여 공유하였고 피그잼을 통해 다이어그램을 그려 각
                  팀의 역할을 명확히 공유하였으며 이를 통해 각 팀역할을 혼선과 오해를 먼저
                  해결하였으며 서로 협력하여 프로젝트가 빠르게 진행될 수 있도록 하였습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Q3. 어려운 업무 대처 (가로 긴 카드) */}
          <div className="md:col-span-2 group bg-white border border-white rounded-[2rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <span className="text-orange-500 font-black text-3xl mb-4 block tracking-tighter italic">
                  Q3.
                </span>
                <h3 className="text-2xl font-bold text-black leading-[1.2] break-keep">
                  어려운 업무를 맡게 되면
                  <br /> 어떻게 대처하나요?
                </h3>
                <p className="mt-4 text-zinc-500 text-md leading-relaxed">
                  업무는 명확한 요구사항 및{' '}
                  <span className="text-zinc-900 font-medium font-bold italic">
                    Todo 리스트 정리
                  </span>
                  부터 시작한다고 생각합니다.
                </p>
              </div>
              <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-zinc-100 pt-8 md:pt-0 md:pl-12">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                  <div className="flex flex-col">
                    <span className="text-orange-500 text-md font-black mb-2 uppercase tracking-tighter">
                      Step 01
                    </span>
                    <p className="text-zinc-900 font-bold text-xl mb-1">요구사항 정리</p>
                    <p className="text-zinc-400 text-md leading-relaxed">
                      요구사항이 정확히 무엇인지 먼저 문서로 정리합니다.
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-orange-500 text-sm font-black mb-2 uppercase tracking-tighter">
                      Step 02
                    </span>
                    <p className="text-zinc-900 font-bold text-xl mb-1">작은 단위로 분해</p>
                    <p className="text-zinc-400 text-md leading-relaxed">
                      별도의 TASK로 진행 가능한 단위로 분해합니다.
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-orange-500 text-sm font-black mb-2 uppercase tracking-tighter">
                      Step 03
                    </span>
                    <p className="text-zinc-900 font-bold text-xl mb-1">문서화와 공유</p>
                    <p className="text-zinc-400 text-md leading-relaxed">
                      Confluence 등에 모든 과정을 기록하여 팀과 공유합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
