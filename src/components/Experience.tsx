const Experience = () => {
  return (
    <section id="Experience" className="py-24 px-6 bg-white rounded-t-[3rem] min-h-screen">
      <div className="max-w-[1600px] mx-auto">
        {/* 헤더 */}
        <div className="mb-16 text-left">
          <h2 className="text-6xl md:text-[10rem] font-bold tracking-tighter leading-[0.85] text-black">
            Experience
          </h2>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
          {/* <!-- 스마트스코어 --> */}
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-5 border border-gray-700 hover:border-blue-500 transition-all">
            <div className="mb-3">
              <h3 className="text-xl font-bold text-orange-400 mb-1">
                <span className="inline-flex items-center gap-2">
                  <a
                    href="https://www.smartscore.global/kr/tech"
                    target="_blank"
                    className="hover:underline"
                  >
                    스마트스코어
                  </a>
                </span>
              </h3>
              <p className="text-lg text-gray-300 font-semibold">프론트팀 매니저</p>
              <div className="text-gray-400 text-sm mt-1">2023.03 ~ 재직중</div>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
              <li>플랫폼 앱내 신규기능 개발</li>
              <li>Web/Mobile 골프 사용자용 하이브리드 웹앱 개발</li>
              <li>ERP, Back Office 개발</li>
            </ul>
          </div>
          {/* 금솔커뮤니케이션 */}
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-5 border border-gray-700 hover:border-blue-500 transition-all">
            <div className="mb-3">
              <h3 className="text-xl font-bold text-orange-400 mb-1">
                <span className="inline-flex items-center gap-2">
                  <a
                    href="https://www.smartscore.global/kr/tech"
                    target="_blank"
                    className="hover:underline"
                  >
                    금솔커뮤니케이션
                  </a>
                </span>
              </h3>
              <p className="text-lg text-gray-300 font-semibold">웹지원팀 대리</p>
              <div className="text-gray-400 text-sm mt-1">2020.09 ~ 2022.04</div>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
              <li>사내 CRM, CMS, 채용사이트 신규 개발</li>
              <li>Web/Mobile 맞춤형 사이트 템플릿 개발</li>
              <li>30여개 이상 사이트 제작</li>
            </ul>
          </div>
          {/* 솔루션뱅크 */}
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-5 border border-gray-700 hover:border-blue-500 transition-all">
            <div className="mb-3">
              <h3 className="text-xl font-bold text-orange-400 mb-1">
                <span className="inline-flex items-center gap-2">
                  <a
                    href="https://www.smartscore.global/kr/tech"
                    target="_blank"
                    className="hover:underline"
                  >
                    솔루션뱅크
                  </a>
                </span>
              </h3>
              <p className="text-lg text-gray-300 font-semibold">기술연구소 대리</p>
              <div className="text-gray-400 text-sm mt-1">2017.07 ~ 2020.04</div>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
              <li>CRM 고객 관리 고도화 </li>
              <li>키오스크 출입 시스템 개발(바코드)</li>
              <li>각 지점별 운영 사이트 개발</li>
            </ul>
          </div>
          {/* 프리랜서 */}
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-5 border border-gray-700 hover:border-blue-500 transition-all">
            <div className="mb-3">
              <h3 className="text-xl font-bold text-orange-400 mb-1">
                <span className="inline-flex items-center gap-2">
                  <a
                    href="https://www.smartscore.global/kr/tech"
                    target="_blank"
                    className="hover:underline"
                  >
                    프리랜서
                  </a>
                </span>
              </h3>
              <p className="text-lg text-gray-300 font-semibold"></p>
              <div className="text-gray-400 text-sm mt-1">2022.05 ~ 2023.02</div>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
              <li>서민금흉진흥원 사이트 개발 참여</li>
              <li>BizKt 사이트 개발 참여</li>
              <li>그외 사이트 유지보수 및 신규 개발</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Experience };
