import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WhatIsFocus from '@/components/WhatIsFocus';
import Milestones from '@/components/Milestones';
import Downloads from '@/components/Downloads';
import AboutUs from '@/components/AboutUs';
import Achievements from '@/components/Achievements';
import DownloadCTA from '@/components/DownloadCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';

export default function Home() {
  return (
    <>
      <Preloader />
      <Navigation />
      <main>
        <HeroSection />
        <WhatIsFocus />
        <Milestones />
        <Downloads />
        <AboutUs />
        <Achievements />
        <DownloadCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
