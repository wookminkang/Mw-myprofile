'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SECTION_IDS } from '@/constants';
import { useScroll } from '@/hooks/useScroll';
import { scrollToSection } from '@/lib/scroll';

const Navbar = () => {
  const isScrolled = useScroll(50);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToSection = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 mix-blend-difference text-white ${
          isScrolled ? 'py-4' : 'py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div
            className="text-xl font-bold tracking-tighter uppercase cursor-pointer z-50 not-[mix-blend-difference]"
            onClick={() => handleScrollToSection(SECTION_IDS.EXPERIENCE)}
          >
            KMW<span className="text-[#FF4500]">.</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 text-sm font-medium">
            <button
              onClick={() => handleScrollToSection(SECTION_IDS.EXPERIENCE)}
              className="hover:opacity-60 transition-opacity font-semibold tracking-widest cursor-pointer"
            >
              Experience
            </button>
            <button
              onClick={() => handleScrollToSection(SECTION_IDS.WORK)}
              className="hover:opacity-60 transition-opacity font-semibold tracking-widest cursor-pointer"
            >
              Work
            </button>
            <button
              onClick={() => handleScrollToSection(SECTION_IDS.CULTURE_FIT)}
              className="hover:opacity-60 transition-opacity font-semibold tracking-widest cursor-pointer"
            >
              Culture Fit
            </button>
            <button
              onClick={() => handleScrollToSection(SECTION_IDS.INTERVIEW)}
              className="hover:opacity-60 transition-opacity font-semibold tracking-widest cursor-pointer"
            >
              Interview
            </button>
            <button
              onClick={() => handleScrollToSection(SECTION_IDS.CONTACT)}
              className="hover:opacity-60 transition-opacity font-semibold tracking-widest cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden z-50">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <button
          onClick={() => handleScrollToSection(SECTION_IDS.EXPERIENCE)}
          className="text-3xl font-bold text-white hover:opacity-60 cursor-pointer"
        >
          EXPERIENCE
        </button>
        <button
          onClick={() => handleScrollToSection(SECTION_IDS.WORK)}
          className="text-3xl font-bold text-white hover:opacity-60 cursor-pointer"
        >
          WORK
        </button>
        <button
          onClick={() => handleScrollToSection(SECTION_IDS.CULTURE_FIT)}
          className="text-3xl font-bold text-white hover:opacity-60 cursor-pointer"
        >
          CULTURE FIT
        </button>
        <button
          onClick={() => handleScrollToSection(SECTION_IDS.INTERVIEW)}
          className="text-3xl font-bold text-white hover:opacity-60 cursor-pointer"
        >
          INTERVIEW
        </button>
        <button
          onClick={() => handleScrollToSection(SECTION_IDS.CONTACT)}
          className="text-3xl font-bold text-white hover:opacity-60 cursor-pointer"
        >
          CONTACT
        </button>
      </div>
    </>
  );
};

export default Navbar;
