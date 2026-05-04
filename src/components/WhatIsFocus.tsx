'use client';

import { useEffect, useRef } from 'react';

const researchData = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>
      </svg>
    ),
    title: 'Scientific Foundation',
    description: 'Built on Temporal Motivation Theory (TMT) and Just-in-Time Adaptive Intervention (JITAI) frameworks.',
    points: [
      'Temporal Motivation Theory',
      'Just-in-Time Interventions',
      'LinUCB Contextual Bandit',
      'Zero-shot NLI Classification',
      'SBERT Semantic Embeddings'
    ]
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
      </svg>
    ),
    title: 'Research Gap',
    description: 'Addressing the limitations of static productivity tools that lack behavioral insights and adaptive learning.',
    points: [
      'Static vs. Adaptive Learning',
      'Notification Fatigue',
      'Multi-layer Monitoring Gap',
      'Absence of Closed-loop Feedback',
      'Manual Productivity Tagging'
    ]
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>
      </svg>
    ),
    title: 'Research Problem',
    description: 'Academic procrastination in digital environments remains inadequately addressed by reactive, static tools.',
    points: [
      'Digital Distraction Modeling',
      'Self-Regulation Failure',
      'Impulsivity & Delay Discounting',
      'Task Aversiveness Impact',
      'Static Intervention Limitations'
    ]
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/>
      </svg>
    ),
    title: 'Research Objectives',
    description: 'Engineering a closed-loop system to monitor, recognize, and mitigate procrastination in real-time.',
    points: [
      'Dual-layer Activity Monitoring',
      'Hybrid AI Pattern Recognition',
      'Adaptive Task Scheduling',
      'Smart Intervention Selection',
      'Behavioral Feedback Integration'
    ]
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/>
      </svg>
    ),
    title: 'Methodology',
    description: 'A sequential data pipeline integrating machine learning models with behavioral theory constructs.',
    points: [
      'Progressive 3-Layer Classification',
      'Hybrid AI (XGBoost, HMM, LSTM)',
      'SBERT & k-NN Time Prediction',
      'TMT Context Vector Mapping',
      'Discounted LinUCB Algorithm'
    ]
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/>
      </svg>
    ),
    title: 'Key Results',
    description: 'Validated through a 6-week deployment with 50 university students in naturalistic settings.',
    points: [
      '78.4% Classification Accuracy',
      '67.9% Scheduling MAE Reduction',
      '39.4% Intervention Acceptance',
      '76.9% Learned System Silence',
      'Significant Adaptive Learning'
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
      className="py-24 px-4 md:px-8 lg:px-16 bg-white relative overflow-hidden"
    >
      {/* Dynamic background elements for more purple */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-100 rounded-full blur-[120px] opacity-40 animate-pulse-slow" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-100 rounded-full blur-[120px] opacity-40 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-slide-up">
          <p className="text-primary-purple text-xs font-black uppercase tracking-[0.3em] mb-4">The Methodology</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Scientific <span className="text-primary-purple">Foundation</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary-purple mx-auto rounded-full opacity-20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchData.map((item, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group p-8 bg-purple-50/30 rounded-2xl border border-purple-100 shadow-sm hover:shadow-2xl hover:shadow-purple-900/5 hover:bg-white hover:-translate-y-2 transition-all duration-500 opacity-0 translate-y-12"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-white text-primary-purple rounded-xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary-purple group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-purple transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed text-sm mb-8 font-medium">
                {item.description}
              </p>

              <ul className="space-y-4">
                {item.points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 text-xs font-bold uppercase tracking-tight">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-purple opacity-40" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


