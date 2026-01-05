import { EXPERIENCE_COMPANIES_DATA, SECTION_IDS } from '@/constants';

const Experience = () => {
  return (
    <section
      id={SECTION_IDS.EXPERIENCE}
      className="py-24 px-6 bg-white rounded-t-[3rem] min-h-screen"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* 헤더 */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-black/10 pb-12">
          <h2 className="text-6xl md:text-[10rem] font-bold tracking-tighter leading-[0.85] text-black">
            Experience
          </h2>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
          {EXPERIENCE_COMPANIES_DATA.map((company, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-5 border border-gray-700 hover:border-blue-500 transition-all"
            >
              <div className="mb-3">
                <h3 className="text-2xl font-bold text-orange-400 mb-1">
                  <span className="inline-flex items-center gap-2">
                    {company.companyUrl ? (
                      <a
                        href={company.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {company.company}
                      </a>
                    ) : (
                      <span>{company.company}</span>
                    )}
                  </span>
                </h3>
                {company.role && (
                  <p className="text-lg text-gray-300 font-semibold">{company.role}</p>
                )}
                <div className="text-gray-400 text-md mt-1">{company.period}</div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-300 text-md">
                {company.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Experience };
