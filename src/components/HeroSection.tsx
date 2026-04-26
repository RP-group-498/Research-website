'use client';

import BrainCharacter from './BrainCharacter';

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center relative px-4 md:px-8 pt-24 pb-8 overflow-hidden bg-white"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #C490B8 1px, transparent 1px),
            linear-gradient(to bottom, #C490B8 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Brain Character (Left) */}
        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <BrainCharacter />
        </div>

        {/* Hero Content (Right) */}
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start group">
          <h1 
            className="font-bebas text-[5rem] md:text-[7rem] lg:text-[8.5rem] leading-[0.9] text-[#1E293B] tracking-tight mb-6"
          >
            FOCUS
          </h1>
          <p className="text-xl md:text-2xl text-[#E91E8C] font-bold tracking-tight mt-2 mb-4 drop-shadow-sm">
            Overcome Procrastination with Cognitive Science
          </p>
          <div className="relative inline-block">
            <p className="text-lg md:text-xl text-[#334155] font-medium mt-2 max-w-xl leading-relaxed lg:px-0 px-6 bg-white/80 backdrop-blur-sm py-3 lg:pr-8 rounded-lg transition-all duration-300 group-hover:bg-white/90">
              A research-backed productivity app designed to rewire your brain for peak performance and sustained concentration
            </p>
          </div>
          
          <div className="flex gap-4 justify-center lg:justify-start mt-8 flex-wrap">
            <a 
              href="#what-is-focus"
              className="px-8 py-3.5 bg-[#E91E8C] text-white font-semibold border-3 border-black brutal-shadow transition-all hover:brutal-shadow-hover hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-[#64748B] uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-6 h-10 border-2 border-[#CBD5E1] rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#64748B] rounded-full" />
        </div>
      </div>
    </section>
  );
}
