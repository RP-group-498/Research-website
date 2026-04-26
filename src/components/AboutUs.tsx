'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    image: '/team/amaratunge.jpg',
    name: 'Amaratunge A.',
    role: 'Automated Behavior Monitoring & Data Classification',
    bio: 'This component focuses on dual-source tracking (browser and desktop) and the three-layer activity classification pipeline.',
    email: 'amaratunge.a@outlook.com'
  },
  {
    image: '/team/vilochana.jpeg',
    name: 'Vilochana A.G.B',
    role: 'Procrastination Pattern Recognition Engine',
    bio: 'This module uses hybrid AI models (XGBoost, HMM, Isolation Forest, and LSTM) to detect behavioral patterns and generate risk scores.',
    email: 'agbvilochana@gmail.com'
  },
  {
    image: '/team/jayasundara.jpeg',
    name: 'Jayasundara S.M.A.V',
    role: 'Dynamic Task Prioritization & Scheduling Module',
    bio: 'This section involves LLM-based task decomposition and adaptive duration prediction using Sentence-BERT similarity.',
    email: 'it22352576@my.sliit.lk'
  },
  {
    image: '/team/jayasinghe.jpeg',
    name: 'Jayasinghe N.P.',
    role: 'Smart Intervention & Adaptive Learning Engine',
    bio: 'This component manages the contextual bandit system that selects and refines personalized psychological interventions.',
    email: 'nipunprjay@gmail.com'
  }
];

export default function AboutUs() {
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
    <section
      id="about"
      className="py-24 px-4 md:px-8 lg:px-16 bg-gray-50"
    >
      <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-[#1E293B] text-center mb-4">
        About Us
      </h2>
      <p className="text-center text-[#E91E8C] text-lg font-semibold tracking-tight mb-16 px-4">
        Meet Our Team
      </p>

      {/* Supervisors */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-20 px-4">
        {/* Supervisor */}
        <div className="bg-white border-4 border-black brutal-shadow px-8 py-8 text-center flex-1 max-w-sm w-full">
          <div className="w-28 h-28 mx-auto mb-6 relative z-10 border-4 border-black bg-[#FFD700] overflow-hidden">
            <Image src="/team/supervisor.jpg" alt="Supervisor" fill className="object-cover" />
          </div>
          <h3 className="font-bebas text-2xl text-[#1E293B] mb-3 uppercase">
            Supervisor
          </h3>
          <p className="text-[#1E293B] mb-2 font-bold">Dr. Kalpani Manathunga</p>
          <p className="text-[#E91E8C] text-sm font-bold uppercase mb-4">Faculty of Computing, SLIIT</p>
          <a href="mailto:kalpani.m@sliit.lk" className="inline-flex items-center gap-2 text-[#1E293B] font-bold hover:text-[#E91E8C] transition-colors">
            <span>✉️</span>
            <span className="text-sm underline decoration-2 underline-offset-4">Email</span>
          </a>
        </div>

        {/* Co-Supervisor */}
        <div className="bg-white border-4 border-black brutal-shadow px-8 py-8 text-center flex-1 max-w-sm w-full">
          <div className="w-28 h-28 mx-auto mb-6 relative z-10 border-4 border-black bg-[#FFD700] overflow-hidden">
            <Image src="/team/co-supervisor.jpeg" alt="Co-Supervisor" fill className="object-cover" />
          </div>
          <h3 className="font-bebas text-2xl text-[#1E293B] mb-3 uppercase">
            Co-Supervisor
          </h3>
          <p className="text-[#1E293B] mb-2 font-bold">Ms. Aruni Premarathne</p>
          <p className="text-[#E91E8C] text-sm font-bold uppercase mb-4">Faculty of Computing, SLIIT</p>
          <a href="mailto:aruni.p@sliit.lk" className="inline-flex items-center gap-2 text-[#1E293B] font-bold hover:text-[#E91E8C] transition-colors">
            <span>✉️</span>
            <span className="text-sm underline decoration-2 underline-offset-4">Email</span>
          </a>
        </div>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            ref={(el) => { cardsRef.current[index] = el; }}
            className="bg-white border-4 border-black p-8 text-center transition-all duration-700 ease-out opacity-0 translate-y-8 brutal-shadow hover:brutal-shadow-hover hover:-translate-x-1 hover:-translate-y-1 relative overflow-hidden"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {/* Top bar */}
            <div className="absolute top-0 left-0 right-0 h-3 bg-[#E91E8C]" />

            {/* Avatar */}
            <div
              className="w-28 h-28 mx-auto mb-6 flex items-center justify-center relative z-10 border-4 border-black bg-[#FFD700] overflow-hidden"
            >
              <Image src={member.image} alt={member.name} fill className="object-cover" />
            </div>

            <h3 className="font-bebas text-xl text-[#1E293B] mb-2 uppercase">
              {member.name}
            </h3>

            <p className="text-[#E91E8C] text-sm font-bold mb-5 uppercase">
              {member.role}
            </p>

            <p className="text-[#64748B] text-sm leading-relaxed font-medium mb-4">
              {member.bio}
            </p>

            <a href={`mailto:${member.email}`} className="inline-flex items-center gap-2 text-[#1E293B] font-bold hover:text-[#E91E8C] transition-colors">
              <span>✉️</span>
              <span className="text-sm underline decoration-2 underline-offset-4">Email</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
