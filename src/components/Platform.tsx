import { ArrowUpRight, X, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function Platform ({onClick}: {onClick:() => void}) {
  return (
    <div className="h-full w-full overflow-y-auto hide-scrollbar text-white">
            {/* Modal Header/Nav */}
            <div className="fixed top-0 left-0 right-0 p-6 md:p-10 flex justify-between items-center z-50 pointer-events-none">
              <span className="text-xl font-bold uppercase tracking-wider mix-blend-difference">SmartScore ERP</span>
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
                <h1 className="text-5xl md:text-9xl font-bold mb-8 leading-[0.9]">SmartScore ERP</h1>
                <div className="flex flex-wrap gap-4">                  
                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-mono text-gray-300">
                      Vue3
                    </span>
                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-mono text-gray-300">
                      TypeScript
                    </span>
                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-mono text-gray-300">
                      TanStack Query
                    </span>
                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-mono text-gray-300">
                    웹프론트 5명, 백엔드 6명
                    </span>
                </div>
              </div>

              {/* Grid Layout for Detail */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                 
                 {/* [위치 변경됨] Right -> Left: Images (lg:col-span-8) */}
                 <div className="lg:col-span-8 space-y-8">
                        <div className="w-full overflow-hidden rounded-lg bg-gray-900">
                           <Image 
                             src="/erp/erp_img_01.png"
                             className="w-full h-full object-cover"
                             alt="Detail view"
                             width={800}
                             height={500}
                             style={{
                              width: '100%',
                              height: 'auto'
                             }}
                            />
                        </div>

                        <div className="w-full overflow-hidden rounded-lg bg-gray-900">
                           <Image 
                             src="/erp/erp_img_02.png"
                             className="w-full h-full object-cover"
                             alt="Detail view"
                             width={1400}
                             height={800}
                             style={{
                              width: '100%',
                              height: 'auto'
                             }}
                            />
                        </div>
                 </div>

                 {/* [위치 변경됨] Left -> Right: Info (lg:col-span-4) */}
                 <div className="lg:col-span-4 space-y-12">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Role</h4>
                      <p className="text-2xl font-light">Frontend Engineer</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Year</h4>
                      <p className="text-2xl font-light">2023 ~ 현재</p>
                    </div> 
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Description</h4>
                      <p className="text-lg text-gray-400 leading-relaxed">
                        골프장 운영관리의 근간으로 활용되고 있는 스마트스코어의 골프장 ERP 솔루션입니다. 골프장의 소중한 업무 정보를 안전하게 백업하고 하루 동안 쌓인 DB 정보를 최적화하며, 골프테크 솔루션 기능 연동으로 골프장에서 필요로 하는 모든 기능을 하나의 서비스로 해결할 수 있습니다.
                      </p>
                    </div>

                      <a 
                         href="https://smartscore-erp.smartscore.global/ko" 
                         target="_blank" 
                         rel="noopener"
                         className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-200 transition-colors mt-8"
                       >
                         Visit Site
                         <ArrowRight className="w-5 h-5" />
                       </a>
                 </div>
                    
                    
                <div className='lg:col-span-12 space-y-12'>
                    <div className="w-full overflow-hidden rounded-lg bg-gray-900">
                        <Image 
                        src="/erp/erp_img_03.png"
                        className="w-full h-full object-cover"
                        alt="Detail view"
                        width={1500}
                        height={700}
                        style={{
                            width: '100%',
                            height: 'auto'
                        }} 
                        />
                    </div>
                </div>

                <div className='lg:col-span-6 space-y-6'>
                    <div className="w-full overflow-hidden rounded-lg bg-gray-900">
                    
                        <Image 
                        src="/erp/erp_img_04.png"
                        className="w-full h-full object-cover"
                        alt="Detail view"
                        width={800}
                        height={500}
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                        />
                    
                    </div>
                </div>

                <div className='lg:col-span-6 space-y-6'>
                    <div className="w-full overflow-hidden rounded-lg bg-gray-900">
                    
                        <Image 
                        src="/erp/erp_img_05.png"
                        className="w-full h-full object-cover"
                        alt="Detail view"
                        width={800}
                        height={500}
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                        />
                    </div>
                </div>
                <div className='lg:col-span-12 space-y-12'>
                    <div className="w-full overflow-hidden rounded-lg bg-gray-900">
                        <Image 
                        src="/erp/erp_img_06.png"
                        className="w-full h-full object-cover"
                        alt="Detail view"
                        width={1500}
                        height={700}
                        style={{
                            width: '100%',
                            height: 'auto'
                        }} 
                        />
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
  )
}