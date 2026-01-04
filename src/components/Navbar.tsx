'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
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
            onClick={() => scrollToSection('hero')}
          >
            KMW<span className="text-[#FF4500]">.</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 text-sm font-medium">
            <button
              onClick={() => scrollToSection('Experience')}
              className="hover:opacity-60 transition-opacity font-semibold tracking-widest cursor-pointer"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="hover:opacity-60 transition-opacity font-semibold tracking-widest cursor-pointer"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('Cultuer Fit')}
              className="hover:opacity-60 transition-opacity font-semibold tracking-widest cursor-pointer"
            >
              Cultuer Fit
            </button>
            <button
              onClick={() => scrollToSection('Inter View')}
              className="hover:opacity-60 transition-opacity font-semibold tracking-widest cursor-pointer"
            >
              Inter View
            </button>
            <button
              onClick={() => scrollToSection('contact')}
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
          onClick={() => scrollToSection('work')}
          className="text-3xl font-bold text-white hover:opacity-60 cursor-pointer"
        >
          WORK
        </button>
        <button
          onClick={() => scrollToSection('profile')}
          className="text-3xl font-bold text-white hover:opacity-60 cursor-pointer"
        >
          PROFILE
        </button>
      </div>
    </>
  );
};

export default Navbar;
