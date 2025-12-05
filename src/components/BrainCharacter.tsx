'use client';

import { useEffect, useRef } from 'react';

export default function BrainCharacter() {
  const leftPupilRef = useRef<HTMLDivElement>(null);
  const rightPupilRef = useRef<HTMLDivElement>(null);
  const brainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!brainRef.current) return;
      
      const rect = brainRef.current.getBoundingClientRect();
      const brainCenterX = rect.left + rect.width / 2;
      const brainCenterY = rect.top + rect.height / 2;
      
      const angle = Math.atan2(e.clientY - brainCenterY, e.clientX - brainCenterX);
      const distance = Math.min(8, Math.hypot(e.clientX - brainCenterX, e.clientY - brainCenterY) / 30);
      
      const translateX = Math.cos(angle) * distance;
      const translateY = Math.sin(angle) * distance;
      
      if (leftPupilRef.current) {
        leftPupilRef.current.style.transform = `translate(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px))`;
      }
      if (rightPupilRef.current) {
        rightPupilRef.current.style.transform = `translate(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px))`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-5">
      <div 
        ref={brainRef}
        className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] relative animate-brain-bounce"
      >
        {/* Crosshair Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border-[3px] border-[#6B4E9B]/20 rounded-full" />
          <div className="absolute w-full h-[3px] bg-[#6B4E9B]/30 top-1/2 left-0 -translate-y-1/2" />
          <div className="absolute w-[3px] h-full bg-[#6B4E9B]/30 left-1/2 top-0 -translate-x-1/2" />
        </div>

        {/* Main Brain Body */}
        <div 
          className="w-full h-full relative"
          style={{
            background: 'linear-gradient(135deg, #F0C0D8 0%, #E8B4D8 20%, #D4A5C9 40%, #C490B8 70%, #B080A8 100%)',
            borderRadius: '45% 52% 48% 55% / 55% 48% 52% 45%',
            boxShadow: `
              inset -25px -25px 50px rgba(150, 100, 130, 0.4),
              inset 25px 25px 50px rgba(255, 220, 240, 0.5),
              0 40px 80px rgba(107, 78, 155, 0.35)
            `
          }}
        >
          {/* Brain Gyri - Curly Folds Pattern - Left Hemisphere */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" style={{ opacity: 0.7 }}>
            {/* Top Left Gyri Cluster */}
            <path 
              d="M30 40 Q40 30, 50 40 Q60 50, 50 60 Q40 70, 30 60 Q20 50, 30 40" 
              fill="none" 
              stroke="#B080A8" 
              strokeWidth="3"
              strokeLinecap="round"
              className="animate-gyri-pulse"
            />
            <path 
              d="M45 25 Q55 15, 65 25 Q75 35, 65 45 Q55 55, 45 45 Q35 35, 45 25" 
              fill="none" 
              stroke="#A070A0" 
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ animationDelay: '0.5s' }}
              className="animate-gyri-pulse"
            />
            <path 
              d="M25 55 Q35 45, 45 55 Q55 65, 45 75 Q35 85, 25 75 Q15 65, 25 55" 
              fill="none" 
              stroke="#C090B0" 
              strokeWidth="2"
              strokeLinecap="round"
              style={{ animationDelay: '1s' }}
              className="animate-gyri-pulse"
            />
            
            {/* Upper Middle Gyri */}
            <path 
              d="M70 20 Q85 10, 100 20 Q115 30, 100 40 Q85 50, 70 40 Q55 30, 70 20" 
              fill="none" 
              stroke="#A878A0" 
              strokeWidth="3"
              strokeLinecap="round"
              style={{ animationDelay: '0.3s' }}
              className="animate-gyri-pulse"
            />
            <path 
              d="M90 35 Q100 25, 115 35 Q130 45, 115 55 Q100 65, 90 55 Q75 45, 90 35" 
              fill="none" 
              stroke="#B585A8" 
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ animationDelay: '0.7s' }}
              className="animate-gyri-pulse"
            />
            
            {/* Top Right Gyri Cluster */}
            <path 
              d="M130 25 Q145 15, 160 25 Q175 35, 160 50 Q145 60, 130 50 Q115 40, 130 25" 
              fill="none" 
              stroke="#A070A0" 
              strokeWidth="3"
              strokeLinecap="round"
              style={{ animationDelay: '0.2s' }}
              className="animate-gyri-pulse"
            />
            <path 
              d="M150 40 Q165 30, 175 45 Q185 60, 170 70 Q155 80, 145 65 Q135 50, 150 40" 
              fill="none" 
              stroke="#B585A8" 
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ animationDelay: '0.8s' }}
              className="animate-gyri-pulse"
            />
            
            {/* Middle Left Gyri */}
            <path 
              d="M20 80 Q35 70, 50 80 Q65 90, 50 105 Q35 115, 20 105 Q5 95, 20 80" 
              fill="none" 
              stroke="#C090B0" 
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ animationDelay: '1.2s' }}
              className="animate-gyri-pulse"
            />
            <path 
              d="M40 95 Q55 85, 70 95 Q85 105, 70 120 Q55 130, 40 120 Q25 110, 40 95" 
              fill="none" 
              stroke="#A878A0" 
              strokeWidth="2"
              strokeLinecap="round"
              style={{ animationDelay: '0.4s' }}
              className="animate-gyri-pulse"
            />
            
            {/* Center Gyri */}
            <path 
              d="M75 70 Q90 55, 110 70 Q125 85, 110 100 Q90 115, 75 100 Q60 85, 75 70" 
              fill="none" 
              stroke="#9868A0" 
              strokeWidth="3"
              strokeLinecap="round"
              style={{ animationDelay: '0.6s' }}
              className="animate-gyri-pulse"
            />
            
            {/* Middle Right Gyri */}
            <path 
              d="M140 75 Q155 65, 170 80 Q185 95, 170 110 Q155 120, 140 110 Q125 100, 140 75" 
              fill="none" 
              stroke="#B080A8" 
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ animationDelay: '1.1s' }}
              className="animate-gyri-pulse"
            />
            
            {/* Lower Left Gyri */}
            <path 
              d="M25 125 Q40 115, 55 130 Q70 145, 55 160 Q40 170, 25 155 Q10 140, 25 125" 
              fill="none" 
              stroke="#A070A0" 
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ animationDelay: '0.9s' }}
              className="animate-gyri-pulse"
            />
            <path 
              d="M50 140 Q65 130, 80 145 Q95 160, 80 175 Q65 185, 50 170 Q35 155, 50 140" 
              fill="none" 
              stroke="#B585A8" 
              strokeWidth="2"
              strokeLinecap="round"
              style={{ animationDelay: '1.4s' }}
              className="animate-gyri-pulse"
            />
            
            {/* Lower Middle Gyri */}
            <path 
              d="M90 130 Q105 120, 120 135 Q135 150, 120 165 Q105 175, 90 160 Q75 145, 90 130" 
              fill="none" 
              stroke="#C090B0" 
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ animationDelay: '0.5s' }}
              className="animate-gyri-pulse"
            />
            
            {/* Lower Right Gyri */}
            <path 
              d="M130 135 Q145 125, 160 140 Q175 155, 160 170 Q145 180, 130 165 Q115 150, 130 135" 
              fill="none" 
              stroke="#A878A0" 
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ animationDelay: '1.3s' }}
              className="animate-gyri-pulse"
            />
            <path 
              d="M155 120 Q170 110, 180 125 Q190 140, 175 150 Q160 160, 150 145 Q140 130, 155 120" 
              fill="none" 
              stroke="#B080A8" 
              strokeWidth="2"
              strokeLinecap="round"
              style={{ animationDelay: '0.7s' }}
              className="animate-gyri-pulse"
            />

            {/* Additional small curly details */}
            <path d="M35 75 Q42 68, 48 75 Q54 82, 48 88" fill="none" stroke="#9868A0" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M145 60 Q152 53, 158 60 Q164 67, 158 73" fill="none" stroke="#A070A0" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M105 50 Q112 43, 118 50 Q124 57, 118 63" fill="none" stroke="#B585A8" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M65 110 Q72 103, 78 110 Q84 117, 78 123" fill="none" stroke="#C090B0" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M120 155 Q127 148, 133 155 Q139 162, 133 168" fill="none" stroke="#A878A0" strokeWidth="1.5" strokeLinecap="round" />
          </svg>

          {/* Additional 3D depth shadows for gyri */}
          <div 
            className="absolute inset-0 rounded-[45%_52%_48%_55%/55%_48%_52%_45%]"
            style={{
              background: `
                radial-gradient(ellipse 30% 20% at 25% 30%, rgba(160, 112, 160, 0.3) 0%, transparent 70%),
                radial-gradient(ellipse 25% 18% at 70% 25%, rgba(160, 112, 160, 0.25) 0%, transparent 70%),
                radial-gradient(ellipse 28% 22% at 40% 60%, rgba(160, 112, 160, 0.2) 0%, transparent 70%),
                radial-gradient(ellipse 22% 16% at 75% 65%, rgba(160, 112, 160, 0.25) 0%, transparent 70%)
              `
            }}
          />

          {/* Highlight on top */}
          <div 
            className="absolute top-[5%] left-[15%] w-[30%] h-[20%] rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 70%)',
              filter: 'blur(10px)'
            }}
          />

          {/* Eyes Container */}
          <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2 flex gap-4 md:gap-6 lg:gap-8">
            {/* Left Eye */}
            <div 
              className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white rounded-full relative"
              style={{
                boxShadow: 'inset 0 -5px 15px rgba(0,0,0,0.1), 0 4px 10px rgba(0,0,0,0.1)'
              }}
            >
              <div 
                ref={leftPupilRef}
                className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, #4A3A3A, #1A1A1A)'
                }}
              >
                <div className="absolute top-1 left-1 md:top-1.5 md:left-1.5 w-2 h-2 md:w-3 md:h-3 bg-white/80 rounded-full" />
              </div>
            </div>
            
            {/* Right Eye */}
            <div 
              className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white rounded-full relative"
              style={{
                boxShadow: 'inset 0 -5px 15px rgba(0,0,0,0.1), 0 4px 10px rgba(0,0,0,0.1)'
              }}
            >
              <div 
                ref={rightPupilRef}
                className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, #4A3A3A, #1A1A1A)'
                }}
              >
                <div className="absolute top-1 left-1 md:top-1.5 md:left-1.5 w-2 h-2 md:w-3 md:h-3 bg-white/80 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Legs */}
        <div className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 flex gap-12 md:gap-16 lg:gap-20">
          <div 
            className="w-2.5 h-10 md:w-3 md:h-12 lg:w-3.5 lg:h-14 rounded-b-lg animate-leg-walk"
            style={{
              background: 'linear-gradient(180deg, #E8A0B0, #D080A0)'
            }}
          />
          <div 
            className="w-2.5 h-10 md:w-3 md:h-12 lg:w-3.5 lg:h-14 rounded-b-lg animate-leg-walk"
            style={{
              background: 'linear-gradient(180deg, #E8A0B0, #D080A0)',
              animationDelay: '0.5s'
            }}
          />
        </div>
      </div>
    </div>
  );
}
