'use client';

import { useEffect, useRef } from 'react';

const downloads = [
  {
    icon: '📋',
    title: 'Project Proposal',
    description: 'Complete project proposal with research objectives and methodology',
    buttonText: 'Download PDF',
    link: '#'
  },
  {
    icon: '📊',
    title: 'Progress Reports',
    description: 'Milestone reports and presentation slides',
    buttonText: 'Download ZIP',
    link: '#'
  },
  {
    icon: '📄',
    title: 'Research Paper',
    description: 'Published research findings and analysis',
    buttonText: 'Download PDF',
    link: '#'
  },
  {
    icon: '📱',
    title: 'App Demo',
    description: 'Interactive prototype demonstration',
    buttonText: 'View Demo',
    link: '#'
  }
];

export default function Downloads() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="downloads" className="py-24 px-4 md:px-8 lg:px-16 bg-white">
      <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl text-[#4A2C7A] text-center mb-6">
        Downloads
      </h2>
      <p className="text-center text-[#E91E8C] text-lg uppercase tracking-[2px] mb-20 px-4">
        Access Our Research Documents
      </p>

      <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
        {downloads.map((item, index) => (
          <div
            key={index}
            ref={(el) => { cardsRef.current[index] = el; }}
            className="w-64 rounded-3xl p-8 text-center transition-all duration-700 ease-out opacity-0 translate-y-8 hover:-translate-y-4 hover:border-[#E91E8C] hover:shadow-2xl hover:shadow-[#E91E8C]/20 border-2 border-transparent"
            style={{
              background: 'linear-gradient(135deg, #F5F0FA, #E8E0F0)',
              transitionDelay: `${index * 100}ms`
            }}
          >
            <div 
              className="w-24 h-24 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6"
              style={{
                background: 'linear-gradient(135deg, #E91E8C, #4A2C7A)'
              }}
            >
              {item.icon}
            </div>

            <h3 className="font-bebas text-2xl text-[#4A2C7A] mb-3">
              {item.title}
            </h3>
            
            <p className="text-[#6B4E9B] text-sm mb-8 leading-relaxed">
              {item.description}
            </p>

            <a 
              href={item.link}
              className="inline-block px-6 py-3 bg-[#E91E8C] text-white rounded-full font-semibold hover:bg-[#4A2C7A] transition-all hover:scale-105"
            >
              {item.buttonText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
