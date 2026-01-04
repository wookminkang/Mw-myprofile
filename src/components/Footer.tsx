import React from 'react';
import { Github, BookText } from 'lucide-react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#F3F4F1] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-medium">
          <div>&copy; 2025 Minwook Kang. All rights reserved.</div>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <div>
              <Link href="https://github.com/wookminkang" target="_blank">
                <Github />
              </Link>
            </div>
            <div>
              <Link href="https://orange-dol.com" target="_blank">
                <BookText />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
