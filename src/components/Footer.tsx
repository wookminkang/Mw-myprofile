import React from 'react';
import { INTRO_TEXT } from '@/constants';
import { ArrowUpRight, Mail, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#F3F4F1] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#E5E6E1] rounded-[2rem] p-10 md:p-20 text-center">
          <h2 className="text-4xl md:text-7xl font-bold text-[#1A1A1A] mb-8 tracking-tight">
            Ready to collaborate?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Currently open to new opportunities to build scalable, high-performance web applications.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href={`mailto:${INTRO_TEXT.email}`} 
              className="group flex items-center bg-[#1A1A1A] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all"
            >
              <Mail className="w-5 h-5 mr-3" />
              Contact Email
              <ArrowUpRight className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 -translate-y-1" />
            </a>
            <a 
              href={INTRO_TEXT.blog}
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center bg-white border border-gray-200 text-[#1A1A1A] px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-all"
            >
              <BookOpen className="w-5 h-5 mr-3" />
              Visit Blog
              <ArrowUpRight className="w-5 h-5 ml-2 opacity-50 group-hover:opacity-100 transition-all" />
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-medium">
           <div>
             &copy; {new Date().getFullYear()} Minwook Kang. All rights reserved.
           </div>
           <div className="mt-4 md:mt-0 flex space-x-6">
             <span>South Korea</span>
             <span>Frontend Engineer</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;