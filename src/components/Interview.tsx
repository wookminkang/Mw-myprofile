export function Interview() {
  return (
    <section className="h-screen flex items-center justify-center bg-black py-24" id="Inter View">
      <div className="container mx-auto max-w-[1600px] px-6 max-h-screen overflow-y-auto py-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="qa-card rounded-xl p-6">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-orange-400 font-bold text-xl flex-shrink-0">Q1.</span>
              <h3 className="text-xl font-semibold text-orange-400">
                가장 중요하게 생각하는 직업 가치는 무엇인가요?
              </h3>
            </div>
            <div className="pl-9">
              <p className="text-gray-300 leading-relaxed mb-3">
                저는 <span className="text-orange-400 font-semibold">"공동성장"</span>과{' '}
                <span className="text-orange-400 font-semibold">"협업"</span>을 가장 중요한 직업
                가치로 생각합니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                성장은 단순히 개인의 기술적 발전뿐만 아니라 팀과 회사가 함께 성장하는 것을
                의미합니다. 끊임없이 새로운 기술을 학습하고 적용하며 나자신을 성장시키며 회사의
                비지니스도 함께 발전시켜 나가는 것이 중요하다고 생각합니다.
              </p>
              <p className="text-gray-300 leading-relaxed">
                협업은 제가 "중재자의 역할"을 중요하게 생각하는 이유이기도 합니다. 개발팀, 기획팀,
                디자인팀, 운영팀 등 다양한 이해관계자들과 원활하게 소통하며 최선의 결과물을
                만들어내는 것이 좋은 회사 문화의 핵심이라고 믿습니다.
              </p>
            </div>
          </div>

          <div className="qa-card rounded-xl p-6">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-orange-400 font-bold text-xl flex-shrink-0">Q2.</span>
              <h3 className="text-xl font-semibold text-orange-400">
                팀 프로젝트에서 의견 충돌이 발생했을 때 어떻게 해결했나요?
              </h3>
            </div>
            <div className="pl-9">
              <p className="text-gray-300 leading-relaxed mb-3">
                대부분의 의견충돌의 원인은{' '}
                <span className="text-orange-400 font-semibold">
                  커뮤니케이션 부재와 상대방의 이해 부족
                </span>
                에서 비롯된다고 생각합니다. 그래서 의견 충돌이 발생하면 먼저 상대방의 의견을 명확히
                이해하는 것부터 시작합니다.
              </p>
              <span className="text-orange-400 font-semibold">구체적인 사례</span>
              <p className="text-gray-300 leading-relaxed text-sm">
                웹앱기반 안드로이드앱에 광고솔루션을 추가하는 과정에서 웹 프론트엔드팀, 웹
                공통모듈팀과 네이티브팀 간에 광고 SDK 통합 방식에 대한 의견 충돌이 있었습니다. 3개의
                팀이 개별로 커뮤니케이션을 시도하여 혼선이 발생했고, 결국 제가 중재자로 나서게
                되었습니다. 광고솔루션의 작동방식을 문서화하여 공유하였고 시퀀스 다이어그램을 그려
                각 팀의 역할을 명확히 공유하였으며 이를 통해 각 팀역할을 혼선과 오해를 먼저
                해결하였으며 서로 협력하여 프로젝트가 빠르게 진행될 수 있도록 하였습니다.
              </p>
            </div>
          </div>

          <div className="qa-card rounded-xl p-6">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-orange-400 font-bold text-xl flex-shrink-0">Q3.</span>
              <h3 className="text-xl font-semibold text-orange-400">
                어려운 업무를 맡게 되면 어떻게 대처하나요?
              </h3>
            </div>
            <div className="pl-9">
              <p className="text-gray-300 leading-relaxed mb-3">
                업무는 명확한 요구사항및 Todo리스트 정리부터 시작한다고 생각합니다.
              </p>
              <div className="space-y-1">
                <div className="flex items-cneter gap-2">
                  <span className="text-orange-400 font-semibold">1. 요구사항 정리</span>
                  <span className="text-gray-300">
                    요구사항이 정확인 무엇인지 먼저 정리합니다. (문서작성)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-orange-400 font-semibold">2. 작은 단위로 분해</p>
                  <p className="text-gray-300">별도의 TASK로 진행가능한 단위로 분해합니다.</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-orange-400 font-semibold">3. 문서화와 공유</p>
                  <p className="text-gray-300">Confluence에 모든과정을 기록하여 팀과 공유합니다.</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mt-4">
                <span className="text-orange-400 font-semibold">구체적인 사례</span>
              </p>
              <p className="text-gray-300 leading-relaxed text-sm mt-1">
                윈도우 OS기반 키오스크 관리앱 개발 프로젝트에서 처음 접하는 기술스택과 프레임워크로
                인해 어려움이 있었습니다. 요구사항을 명확히 정리하고, WPF, 동영상재생, 화면공유,
                기기간통신으로 TASK를 분해한 후, 각 TASK별로 리서치와 실험을 통해 문제를 해결해
                나갔습니다.
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
