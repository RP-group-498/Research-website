'use client';

import { useEffect, useRef } from 'react';

const researchData = [
  {
    icon: '📚',
    title: 'Literature Survey',
    description: 'Our extensive review of cognitive psychology and neuroscience research reveals the underlying mechanisms of procrastination and attention disorders.',
    points: [
      'Neuroplasticity & habit formation',
      'Dopamine-driven motivation systems',
      'Cognitive load theory applications',
      'Behavioral intervention strategies'
    ]
  },
  {
    icon: '🔍',
    title: 'Research Gap',
    description: 'Existing productivity apps lack scientific grounding and personalized cognitive interventions.',
    points: [
      'Generic one-size-fits-all approaches',
      'Missing real-time behavioral analysis',
      'Lack of adaptive learning systems',
      'No cognitive pattern recognition'
    ]
  },
  {
    icon: '💡',
    title: 'Research Problem & Solutions',
    description: 'How can we leverage machine learning and cognitive science to create personalized anti-procrastination interventions?',
    points: [
      'AI-driven behavior prediction',
      'Personalized intervention timing',
      'Gamified cognitive exercises',
      'Real-time attention monitoring'
    ]
  },
  {
    icon: '🎯',
    title: 'Research Objectives',
    description: 'Our primary goals focus on measurable improvements in user productivity and cognitive performance.',
    points: [
      'Reduce procrastination by 40%',
      'Improve sustained attention spans',
      'Build lasting productive habits',
      'Enhance cognitive flexibility'
    ]
  },
  {
    icon: '⚙️',
    title: 'Methodology',
    description: 'A multi-phase research approach combining qualitative and quantitative methods.',
    points: [
      'User behavior data collection',
      'A/B testing of interventions',
      'Longitudinal cognitive assessments',
      'Machine learning model training'
    ]
  },
  {
    icon: '🛠️',
    title: 'Technologies',
    description: 'Cutting-edge tech stack designed for scalability and real-time processing.',
    points: [
      'React Native / Flutter for mobile',
      'TensorFlow for ML models',
      'Python/FastAPI backend',
      'Firebase real-time database'
    ]
  }
];

export default function WhatIsFocus() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="what-is-focus" 
      className="py-24 px-4 md:px-8 lg:px-16"
      style={{
        background: 'linear-gradient(180deg, #E8E0F0 0%, #FFFFFF 50%, #E8E0F0 100%)'
      }}
    >
      <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl text-[#4A2C7A] text-center mb-6">
        What is Focus?
      </h2>
      <p className="text-center text-[#E91E8C] text-lg uppercase tracking-[2px] mb-20 px-4">
        Cognitive Science Meets Productivity
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {researchData.map((item, index) => (
          <div
            key={index}
            ref={(el) => { cardsRef.current[index] = el; }}
            className="bg-white rounded-3xl p-8 shadow-xl shadow-[#6B4E9B]/10 transition-all duration-700 ease-out opacity-0 translate-y-12 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#6B4E9B]/20 relative overflow-hidden group"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E91E8C] to-[#6B4E9B]" />
            
            {/* Icon */}
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform group-hover:scale-110"
              style={{
                background: 'linear-gradient(135deg, #FF6BB3, #E91E8C)'
              }}
            >
              {item.icon}
            </div>

            <h3 className="font-bebas text-2xl text-[#4A2C7A] mb-4 tracking-wide">
              {item.title}
            </h3>
            
            <p className="text-[#6B4E9B] leading-relaxed text-sm mb-6">
              {item.description}
            </p>

            <ul className="space-y-3">
              {item.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-[#6B4E9B] text-sm">
                  <span className="text-[#E91E8C] mt-0.5">◉</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
