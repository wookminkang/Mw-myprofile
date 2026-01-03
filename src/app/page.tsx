import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import CultureFit from '@/components/CultureFit';
import { HeroTwo } from '@/components/HeroTwo';
import { Interview } from '@/components/Interview';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F3F4F1] overflow-x-hidden selection:bg-black selection:text-white">
      <Navbar />

      <main>
        {/* <Hero /> */}
        {/* <HeroTwo /> */}
        <Work />
        <CultureFit />
        <Interview />

        {/* Profile Section Wrapper */}
        <div id="profile" className="relative bg-white pt-20 rounded-t-[3rem] shadow-xl z-10">
          <About />
          <Experience />
          <Skills />
        </div>
      </main>

      <Footer />
    </div>
  );
}
