import Navbar from '@/components/Navbar';
import Work from '@/components/Work';
import Footer from '@/components/Footer';
import CultureFit from '@/components/CultureFit';
import { Interview } from '@/components/Interview';
import { Experience } from '@/components/Experience';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F3F4F1] overflow-x-hidden selection:bg-black selection:text-white">
      <Navbar />

      <main>
        {/* <Hero /> */}
        {/* <HeroTwo /> */}
        <Experience />
        <Work />
        <CultureFit />
        <Interview />

        {/* Profile Section Wrapper
        <div id="profile" className="relative bg-white pt-20 rounded-t-[3rem] shadow-xl z-10">
          <About />
          <Experience />
          <Skills />
        </div> */}
      </main>

      <Footer />
    </div>
  );
}
