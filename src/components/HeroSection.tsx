'use client';

import BrainCharacter from './BrainCharacter';

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center relative px-4 md:px-8 pt-24 pb-8 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #F5F0FA 0%, #E8E0F0 100%)'
      }}
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-24 h-24 rounded-full bg-[#FF6BB3] opacity-30 top-[10%] left-[10%] animate-float"
        />
        <div 
          className="absolute w-16 h-16 rounded-full bg-[#6B4E9B] opacity-30 top-[20%] right-[15%] animate-float"
          style={{ animationDelay: '1s' }}
        />
        <div 
          className="absolute w-20 h-20 rounded-full bg-[#D4A5C9] opacity-30 bottom-[15%] left-[20%] animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div 
          className="absolute w-12 h-12 rounded-full bg-[#4A2C7A] opacity-30 bottom-[25%] right-[10%] animate-float"
          style={{ animationDelay: '3s' }}
        />
      </div>

      {/* Brain Character */}
      <BrainCharacter />

      {/* Hero Content */}
      <div className="text-center relative z-10 max-w-5xl mx-auto px-4">
        <h1 
          className="font-bebas text-[6rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] leading-[0.85] text-[#4A2C7A] tracking-tight animate-title-float mb-6"
        >
          FOCUS
        </h1>
        <p className="text-lg md:text-xl text-[#E91E8C] uppercase tracking-[3px] mt-8 font-medium mb-6">
          Overcome Procrastination with Cognitive Science
        </p>
        <p className="text-sm md:text-base text-[#6B4E9B] mt-4 max-w-2xl mx-auto leading-relaxed px-6">
          A research-backed productivity app designed to rewire your brain for peak performance and sustained concentration
        </p>
        
        <div className="flex gap-6 justify-center mt-10 flex-wrap px-4">
          <a 
            href="#what-is-focus"
            className="px-8 py-3 bg-[#E91E8C] text-white rounded-full font-semibold hover:bg-[#4A2C7A] transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#E91E8C]/30"
          >
            Learn More
          </a>
          <a 
            href="#downloads"
            className="px-8 py-3 bg-transparent border-2 border-[#4A2C7A] text-[#4A2C7A] rounded-full font-semibold hover:bg-[#4A2C7A] hover:text-white transition-all hover:-translate-y-1"
          >
            Download
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-[#6B4E9B] uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-[#6B4E9B] rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#6B4E9B] rounded-full" />
        </div>
      </div>
    </section>
  );
}
