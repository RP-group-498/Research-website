'use client';
import Image from 'next/image';
import Logo from './Logo';


export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center relative px-4 md:px-8 pt-24 pb-16 overflow-hidden bg-[#7C3AED]"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Abstract Star Shape (Left) */}
        <div className="absolute top-1/2 -left-48 -translate-y-1/2 w-[600px] h-[600px] opacity-10 animate-pulse-slow">
          <div className="absolute inset-0 rotate-0 bg-white/40 rounded-full blur-3xl scale-x-50" />
          <div className="absolute inset-0 rotate-45 bg-white/40 rounded-full blur-3xl scale-x-50" />
          <div className="absolute inset-0 rotate-90 bg-white/40 rounded-full blur-3xl scale-x-50" />
          <div className="absolute inset-0 rotate-135 bg-white/40 rounded-full blur-3xl scale-x-50" />
        </div>

        {/* Large Decorative Star shape (mimicking the image) */}
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] opacity-10 hidden lg:block">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-full bg-white rounded-full rotate-0" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-full bg-white rounded-full rotate-45" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-full bg-white rounded-full rotate-90" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-full bg-white rounded-full rotate-135" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

        {/* Left Side: Mock Image (Swapped) */}
        <div className="flex-1 w-full max-w-5xl animate-float lg:order-1 order-2">
          <Image
            src="/mock.png"
            alt="Focus App Mockup"
            width={1400}
            height={875}
            className="w-full h-auto object-contain rounded-xl"
            priority
          />
        </div>

        {/* Right Side: Brand Content (Swapped) */}
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start animate-slide-up lg:order-2 order-1">
          <Logo size="4xl" variant="white" iconOnly={true} className="mb-8" />

          <div className="space-y-6 mb-12">
            <p className="text-white/60 text-sm font-bold uppercase tracking-widest">Available on</p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="https://drive.google.com/drive/u/5/folders/1PvvGYYiugWbOuh0sJjrhpbr_S-7cmE_S" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-md transition-all group"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" /></svg>
                <span className="text-white font-bold text-sm">MacOS</span>
              </a>
              <a 
                href="https://drive.google.com/drive/u/5/folders/1PvvGYYiugWbOuh0sJjrhpbr_S-7cmE_S" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-md transition-all group"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M3,12V6.75L9,5.43V12H3M21,12V3L10,4.58V12H21M3,13V18.25L9,19.57V13H3M21,13V21L10,19.42V13H21Z" /></svg>
                <span className="text-white font-bold text-sm">Windows</span>
              </a>
              <a 
                href="https://drive.google.com/drive/u/5/folders/1PvvGYYiugWbOuh0sJjrhpbr_S-7cmE_S" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-md transition-all group"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14Z" /></svg>
                <span className="text-white font-bold text-sm">Extension</span>
              </a>
            </div>
          </div>

          <a href="https://www.thefocusapp.site" className="text-white/40 hover:text-white transition-colors font-medium tracking-wide">
            www.thefocusapp.site
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-30">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}


