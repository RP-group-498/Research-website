'use client';

import { useEffect, useRef } from 'react';

const documents = [
  { title: 'Topic Assessment', date: 'SUBMITTED 2024/02/25', type: 'GROUP', available: true, link: 'https://drive.google.com/file/d/1Ta4IN3q2WC2XGmXXVqdTLwrZU6iG4gzA/view?usp=sharing' },
  { title: 'Project Charter', date: 'SUBMITTED 2024/02/25', type: 'GROUP', available: false, link: '#' },
  { title: 'Project Proposal', date: 'SUBMITTED 2025/09/19', type: 'INDIVIDUAL', available: true, link: 'https://drive.google.com/drive/folders/19zwyuay4gDheqXUd6rE1NejwWJDSO0u3?usp=sharing' },
  { title: 'Status Documents I', date: 'SUBMITTED 2026/01/11', type: 'GROUP', available: true, link: 'https://drive.google.com/file/d/1TbmGSMY9oTM0cj34fJYvF1AfDjgyWbXR/view?usp=sharing' },
  { title: 'Status Documents II', date: 'SUBMITTED 2026/04/19', type: 'INDIVIDUAL', available: true, link: '#' },
  { title: 'Status Documents III', date: 'SUBMITTED 2026/04/20', type: 'INDIVIDUAL', available: true, link: '#' },
  { title: 'Research Paper', date: 'SUBMITTED', type: 'GROUP', available: true, link: 'https://drive.google.com/file/d/1XxT3Lxg2D4xgd-yyNSylsH2sDccCeacF/view?usp=sharing' },
  { title: 'Final Report', date: 'LINK COMING SOON', isMultiple: true, types: ['GROUP', 'INDIVIDUAL'], available: false, link: '#' },
  { title: 'Poster', date: 'LINK COMING SOON', type: 'GROUP', available: false, link: '#' }
];

const presentations = [
  { title: 'Proposal Presentation', date: 'SUBMITTED 2026/03/01', type: 'GROUP', available: true, link: 'https://drive.google.com/drive/folders/1bZ5lfKVmiR5_GF02rhDEKSz2oVwRgLXL?usp=sharing' },
  { title: 'Progress Presentation I', date: 'SUBMITTED 2026/03/01', type: 'GROUP', available: true, link: 'https://drive.google.com/drive/folders/1cQTl7rLGSj-w7ySMxcFYBX5qybP8Z_Gt?usp=sharing' },
  { title: 'Progress Presentation II', date: 'SUBMITTED 2026/03/01', type: 'GROUP', available: true, link: 'https://drive.google.com/drive/folders/1wZMTZRMQC-GtP8_LlNpCTJ3uMXEgOnyR?usp=sharing' },
  { title: 'Final Presentation', date: 'LINK COMING SOON', type: 'GROUP', available: false, link: '#' }
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

  const renderCard = (item: any, index: number) => (
    <div
      key={index}
      ref={(el) => { cardsRef.current[index] = el; }}
      className="bg-white border-4 border-black p-6 flex flex-col justify-between transition-all duration-700 ease-out opacity-0 translate-y-8 brutal-shadow hover:brutal-shadow-hover hover:-translate-x-1 hover:-translate-y-1"
      style={{ transitionDelay: `${(index % 8) * 100}ms` }}
    >
      <div>
        {/* Date Badge */}
        <div className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-6 uppercase ${item.date === 'LINK COMING SOON' ? 'bg-gray-100 text-gray-500' : 'bg-[#E0F2FE] text-[#0284C7]'
          }`}>
          {item.date}
        </div>

        {/* Title */}
        <h4 className="font-bold text-xl text-[#1E293B] mb-8">
          {item.title}
        </h4>
      </div>

      {/* Footer Area */}
      <div className="flex justify-between items-center mt-auto w-full">
        {item.isMultiple ? (
          <div className="flex flex-col gap-3 w-full">
            {item.types.map((type: string, i: number) => (
              <div key={i} className="flex justify-between items-center w-full">
                <span className="px-2 py-1 bg-[#F1F5F9] text-[#64748B] text-xs font-bold rounded uppercase">
                  {type}
                </span>
                <span className="px-4 py-2 border-2 border-gray-200 text-gray-400 font-bold text-xs uppercase">
                  Soon
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-between items-center w-full">
            {/* Type Badge */}
            <span className="px-2 py-1 bg-[#F1F5F9] text-[#64748B] text-xs font-bold rounded uppercase">
              {item.type}
            </span>

            {/* Button */}
            {item.available ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white border-2 border-black text-black font-bold text-xs uppercase hover:bg-[#FFD700] transition-colors brutal-shadow-sm flex items-center gap-1"
              >
                Download <span className="text-sm">↗</span>
              </a>
            ) : (
              <span className="px-4 py-2 border-2 border-gray-200 text-gray-400 font-bold text-xs uppercase">
                Soon
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section id="downloads" className="py-24 px-4 md:px-8 lg:px-16 bg-gray-50">
      <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-[#1E293B] text-center mb-4">
        Downloads
      </h2>
      <p className="text-center text-[#E91E8C] text-lg font-semibold tracking-tight mb-20 px-4">
        Access Our Research Documents & Presentations
      </p>

      <div className="max-w-7xl mx-auto">
        {/* Documents Section */}
        <h3 className="font-bebas text-2xl text-[#1E293B] mb-8 flex items-center gap-3 uppercase tracking-wider">
          <span>📄</span> Documents
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {documents.map((item, index) => renderCard(item, index))}
        </div>

        {/* Separator */}
        <div className="w-full h-1 bg-gray-200 mb-16 rounded-full" />

        {/* Presentations Section */}
        <h3 className="font-bebas text-2xl text-[#1E293B] mb-8 flex items-center gap-3 uppercase tracking-wider">
          <span>🖥️</span> Presentations
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {presentations.map((item, index) => renderCard(item, index + documents.length))}
        </div>
      </div>
    </section>
  );
}
