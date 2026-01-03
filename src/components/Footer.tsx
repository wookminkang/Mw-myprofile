import React from 'react';
import { INTRO_TEXT } from '@/constants';
import { ArrowUpRight, Mail, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#F3F4F1] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-medium">
          <div>&copy; {new Date().getFullYear()} Minwook Kang. All rights reserved.</div>
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
