import { EXPERIENCE_DATA, OTHER_EXPERIENCE } from '@/constants';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-white rounded-t-[3rem] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-4">경력 기술서</h2>
          <p className="text-xl text-gray-500">다양한 환경에서의 솔루션 배포 및 운영 경험.</p>
        </div>

        <div className="space-y-20">
          {EXPERIENCE_DATA.map((exp, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-gray-100 pt-12">
              {/* Left Column: Metadata */}
              <div className="lg:col-span-4">
                <h3 className="text-3xl font-bold text-[#1A1A1A] mb-2">{exp.company}</h3>
                <div className="text-lg font-medium text-gray-600 mb-4">{exp.role}</div>
                <div className="inline-block px-3 py-1 bg-[#F3F4F1] rounded-full text-sm font-mono text-gray-800">
                  {exp.period}
                </div>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  {exp.description}
                </p>
              </div>

              {/* Right Column: Achievements */}
              <div className="lg:col-span-8">
                <div className="bg-[#F9F9F7] rounded-3xl p-8 md:p-10">
                  <h4 className="text-lg font-bold uppercase tracking-wider text-gray-400 mb-6">주요 성과 및 업무</h4>
                  <div className="space-y-8">
                    {exp.achievements.map((item, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row gap-4">
                         <div className="min-w-[40px] h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 font-mono text-sm">
                            {idx + 1}
                         </div>
                         <div>
                           <p className="text-[#1A1A1A] text-lg leading-relaxed font-medium">
                             {item}
                           </p>
                         </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Experience Grid */}
        <div className="mt-24">
           <h3 className="text-3xl font-bold mb-8 text-[#1A1A1A]">기타 활동 및 이력</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {OTHER_EXPERIENCE.map((item, idx) => (
                <div key={idx} className="bg-[#F3F4F1] p-8 rounded-2xl hover:bg-[#EAEBE8] transition-colors">
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;