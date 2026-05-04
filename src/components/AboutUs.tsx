'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    image: '/team/amaratunge.jpg',
    name: 'Amaratunge A.',
    role: 'Behavioral Monitoring',
    bio: 'Dual-source tracking & three-layer activity classification pipeline.',
    email: 'it22351586@my.sliit.lk'
  },
  {
    image: '/team/vilochana.jpeg',
    name: 'Vilochana A.G.B',
    role: 'Pattern Recognition',
    bio: 'Hybrid AI models for behavioral pattern detection & risk scoring.',
    email: 'it22114808@my.sliit.lk'
  },
  {
    image: '/team/jayasundara.jpeg',
    name: 'Jayasundara S.M.A.V',
    role: 'Task Prioritization',
    bio: 'LLM-based task decomposition & adaptive duration prediction.',
    email: 'it22352576@my.sliit.lk'
  },
  {
    image: '/team/jayasinghe.jpeg',
    name: 'Jayasinghe N.P.',
    role: 'Smart Interventions',
    bio: 'Contextual bandit system for personalized interventions.',
    email: 'it22202468@my.sliit.lk'
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
      className="py-24 px-4 md:px-8 lg:px-16 bg-white relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-50/50 -z-10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-slide-up">
          <p className="text-primary-purple text-xs font-black uppercase tracking-[0.3em] mb-4">The Group</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Our <span className="text-primary-purple">Team</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary-purple mx-auto rounded-full opacity-20" />
        </div>

        {/* Supervisors */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-24 px-4">
          {/* Supervisor */}
          <div className="bg-purple-50/40 rounded-3xl p-12 text-center flex-1 max-w-sm w-full border border-purple-100 shadow-xl shadow-purple-900/5 hover:bg-white hover:shadow-2xl transition-all duration-500">
            <div className="w-32 h-32 mx-auto mb-8 relative rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image src="/team/supervisor.jpg" alt="Supervisor" fill className="object-cover" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Dr. Kalpani Manathunga
            </h3>
            <p className="text-primary-purple text-[10px] font-black uppercase tracking-[0.2em] mb-6">Supervisor</p>
            <p className="text-gray-500 text-sm font-medium mb-4 leading-relaxed">Faculty of Computing, SLIIT</p>
            <a href="mailto:kalpani.m@sliit.lk" className="text-primary-purple text-xs font-medium hover:underline break-all">kalpani.m@sliit.lk</a>
          </div>

          {/* Co-Supervisor */}
          <div className="bg-purple-50/40 rounded-3xl p-12 text-center flex-1 max-w-sm w-full border border-purple-100 shadow-xl shadow-purple-900/5 hover:bg-white hover:shadow-2xl transition-all duration-500">
            <div className="w-32 h-32 mx-auto mb-8 relative rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image src="/team/co-supervisor.jpeg" alt="Co-Supervisor" fill className="object-cover" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Ms. Aruni Premarathne
            </h3>
            <p className="text-primary-purple text-[10px] font-black uppercase tracking-[0.2em] mb-6">Co-Supervisor</p>
            <p className="text-gray-500 text-sm font-medium mb-4 leading-relaxed">Faculty of Computing, SLIIT</p>
            <a href="mailto:aruni.p@sliit.lk" className="text-primary-purple text-xs font-medium hover:underline break-all">aruni.p@sliit.lk</a>
          </div>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group bg-purple-50/30 rounded-2xl p-8 text-center transition-all duration-700 ease-out opacity-0 translate-y-8 border border-purple-50 shadow-sm hover:bg-white hover:shadow-2xl hover:shadow-purple-900/5 hover:-translate-y-2"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-24 h-24 mx-auto mb-6 relative rounded-full overflow-hidden border-2 border-white shadow-md">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {member.name}
              </h3>

              <p className="text-primary-purple text-[10px] font-black mb-6 uppercase tracking-widest">
                {member.role}
              </p>

              <p className="text-gray-500 text-xs leading-relaxed font-medium mb-4">
                {member.bio}
              </p>

              <a href={`mailto:${member.email}`} className="text-primary-purple text-xs font-medium hover:underline break-all">
                {member.email}
              </a>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
