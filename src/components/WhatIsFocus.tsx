'use client';

import { useEffect, useRef } from 'react';

const researchData = [
  {
    icon: '📚',
    title: 'Literature Survey',
    description: 'Our research builds on five key pillars spanning behavioral psychology, NLP, and adaptive AI — laying the scientific foundation for FOCUS.',
    points: [
      'TimeAware: Usage tracking across productivity levels (lacks ML classification)',
      'Zero-shot NLI: Generalizes to unseen activity classes without retraining',
      'Temporal Motivation Theory (TMT): Predictors — task aversiveness, delay, impulsiveness',
      'JITAI Framework: "Just-in-Time Adaptive Interventions" conceptual base',
      'LinUCB Algorithm: Contextual bandit for personalized recommendations'
    ]
  },
  {
    icon: '🔍',
    title: 'Research Gap',
    description: 'Existing productivity tools leave critical blind spots that FOCUS is specifically engineered to close.',
    points: [
      'Behavioral Insight Gap: Static reminders ignore individual behavioral patterns',
      'Monitoring Gaps: No browser-level enrichment or automated academic classification',
      'No Adaptive Learning: JITAI systems lack contextual bandits for procrastination',
      'High-Friction Feedback: Questionnaires vs. low-friction behavioral signals'
    ]
  },
  {
    icon: '💡',
    title: 'Research Problem',
    description: 'Academic procrastination is a complex self-regulation failure linked to lower performance and chronic stress.',
    points: [
      'Procrastination is a multi-dimensional self-regulation failure',
      'Current apps are reactive — not iteratively adaptive to user behavior',
      'No system jointly models detection, prediction, and intervention selection',
      'Theory-grounded context representations are absent from existing tools'
    ]
  },
  {
    icon: '🎯',
    title: 'Research Objectives',
    description: 'Four measurable goals that drive the design and evaluation of every module in FOCUS.',
    points: [
      'Three-layer classification pipeline: rule-based → zero-shot NLI → LLM',
      'Hybrid AI detection engine: Isolation Forest + HMM + XGBoost + LSTM',
      'Adaptive task duration prediction via SBERT similarity & k-NN regression',
      'Improve intervention acceptance using discounted LinUCB + TMT context vector'
    ]
  },
  {
    icon: '⚙️',
    title: 'Methodology',
    description: 'A four-module system architecture where each layer feeds intelligence into the next.',
    points: [
      'Module 1 — Behavior Monitoring: Electron tracker + Chrome extension + 3-layer pipeline',
      'Module 2 — Pattern Recognition: 4 ML models → continuous procrastination risk score',
      'Module 3 — Task Scheduling: LLM decomposition + semantic duration prediction',
      'Module 4 — Smart Interventions: Contextual bandit selects Pomodoro, Reframe, or None'
    ]
  },
  {
    icon: '🛠️',
    title: 'Technologies Used',
    description: 'A carefully curated stack — from edge data collection to cloud-scale AI inference.',
    points: [
      'Frameworks: Electron (desktop tracker), Chrome Extension (browser data)',
      'Databases: SQLite (local cache) + MongoDB Atlas (cloud sync)',
      'NLP/ML: bart-large-mnli, Sentence-BERT, XGBoost, LSTM, Isolation Forest, HMM',
      'AI APIs: Google Gemini 2.5 Flash (LLM fallback & task decomposition)'
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
      className="py-24 px-4 md:px-8 lg:px-16 bg-gray-50"
    >
      <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-[#1E293B] text-center mb-4">
        What is Focus?
      </h2>
      <p className="text-center text-[#E91E8C] text-lg font-semibold tracking-tight mb-20 px-4">
        Cognitive Science Meets Productivity
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {researchData.map((item, index) => (
          <div
            key={index}
            ref={(el) => { cardsRef.current[index] = el; }}
            className="bg-white p-8 border-4 border-black brutal-shadow transition-all duration-700 ease-out opacity-0 translate-y-12 hover:brutal-shadow-hover hover:translate-x-[-2px] hover:translate-y-[-2px] relative overflow-hidden group"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-[#E91E8C]" />
            
            {/* Icon */}
            <div 
              className="w-14 h-14 flex items-center justify-center text-2xl mb-6 bg-[#FFD700] border-3 border-black"
            >
              {item.icon}
            </div>

            <h3 className="font-bold text-xl text-[#1E293B] mb-4 tracking-tight uppercase">
              {item.title}
            </h3>
            
            <p className="text-[#64748B] leading-relaxed text-sm mb-6 font-medium">
              {item.description}
            </p>

            <ul className="space-y-3">
              {item.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-[#1E293B] text-sm font-medium">
                  <span className="text-[#E91E8C] mt-0.5 text-lg font-bold">■</span>
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
