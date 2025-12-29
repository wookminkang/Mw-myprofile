import { INTRO_TEXT } from '@/constants';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#F3F4F1]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#666666] mb-2 block">
              Mission Statement
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-8 leading-tight">
              Complexity <br/>made simple.
            </h2>
            <p className="text-xl md:text-2xl text-[#1A1A1A] leading-relaxed font-light">
              {INTRO_TEXT.subtitle}
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Core Philosophy</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-black text-white flex items-center justify-center text-xs mr-4 mt-1">1</span>
                <div>
                  <h4 className="font-bold text-lg">Value Driven</h4>
                  <p className="text-gray-600 mt-1">Understanding the "Why" before writing the code to ensure real business value.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-black text-white flex items-center justify-center text-xs mr-4 mt-1">2</span>
                <div>
                  <h4 className="font-bold text-lg">Scalable Architecture</h4>
                  <p className="text-gray-600 mt-1">Designing systems that grow with the product, focusing on maintainability and separation of concerns.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-black text-white flex items-center justify-center text-xs mr-4 mt-1">3</span>
                <div>
                  <h4 className="font-bold text-lg">Efficiency Automation</h4>
                  <p className="text-gray-600 mt-1">Eliminating repetitive tasks (like manual deployments or token syncs) to let the team focus on innovation.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;