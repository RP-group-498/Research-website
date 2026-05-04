'use client';

import { useEffect, useRef } from 'react';

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-12');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="testimonials" 
      className="py-24 px-4 md:px-8 lg:px-16 bg-purple-50/30 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary-purple text-xs font-black uppercase tracking-[0.3em] mb-4">Feedback</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            What Our <span className="text-primary-purple">Users Say</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary-purple mx-auto rounded-full opacity-20" />
        </div>

        <div 
          ref={sectionRef}
          className="max-w-4xl mx-auto transition-all duration-1000 opacity-0 translate-y-12"
        >
          <div className="relative group cursor-pointer rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/10 border border-white">
            <a 
              href="https://youtu.be/SXUh6BJqt-U" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block relative aspect-video"
            >
              {/* YouTube Thumbnail */}
              <img 
                src="https://img.youtube.com/vi/SXUh6BJqt-U/hqdefault.jpg" 
                alt="User Testimonial" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-primary-dark/10 transition-colors duration-300 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-primary-purple translate-x-0.5"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
                  </svg>
                </div>
              </div>

              {/* Video Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white font-bold text-xl md:text-2xl">Watch how FOCUS changed student productivity</p>
                <p className="text-white/80 text-sm font-medium">Video Testimonial • 2024 Deployment</p>
              </div>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-50">
              <div className="text-primary-purple mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56929 13 6.017 13H5.017V21H6.017Z"/></svg>
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "The adaptive notifications are a game changer. Unlike other apps, it actually learns when I'm most likely to procrastinate."
              </p>
              <div>
                <p className="font-bold text-gray-900">Engineering Student</p>
                <p className="text-xs text-primary-purple font-bold uppercase tracking-wider">SLIIT Participant</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-50">
              <div className="text-primary-purple mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56929 13 6.017 13H5.017V21H6.017Z"/></svg>
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "Seeing my TMT scores in real-time helped me understand my own patterns. The 'Reframe' interventions were my favorite."
              </p>
              <div>
                <p className="font-bold text-gray-900">Computing Undergraduate</p>
                <p className="text-xs text-primary-purple font-bold uppercase tracking-wider">6-Week Study User</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-50">
              <div className="text-primary-purple mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56929 13 6.017 13H5.017V21H6.017Z"/></svg>
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "The task decomposition actually makes big projects feel manageable. It's like having a productivity coach built-in."
              </p>
              <div>
                <p className="font-bold text-gray-900">Researcher</p>
                <p className="text-xs text-primary-purple font-bold uppercase tracking-wider">Alpha Tester</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary-purple/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
