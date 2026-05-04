'use client';

import { useEffect, useRef } from 'react';

const documents = [
  { title: 'Topic Assessment', date: 'SUBMITTED 2024/02/25', type: 'GROUP', available: true, link: 'https://drive.google.com/file/d/1Ta4IN3q2WC2XGmXXVqdTLwrZU6iG4gzA/view?usp=sharing' },
  { title: 'Project Charter', date: 'SUBMITTED 2024/02/25', type: 'GROUP', available: false, link: '#' },
  { title: 'Project Proposal', date: 'SUBMITTED 2025/09/19', type: 'INDIVIDUAL', available: true, link: 'https://drive.google.com/drive/folders/19zwyuay4gDheqXUd6rE1NejwWJDSO0u3?usp=sharing' },
  { title: 'Checklist I', date: 'SUBMITTED 2026/01/11', type: 'GROUP', available: true, link: 'https://drive.google.com/file/d/1TbmGSMY9oTM0cj34fJYvF1AfDjgyWbXR/view?usp=sharing' },
  { title: 'Checklist II', date: 'SUBMITTED 2026/04/19', type: 'INDIVIDUAL', available: true, link: 'https://mysliit.sharepoint.com/:v:/s/CDAPSubmissionCloud/IQC9EJQITSZjRJLFFojqLokQAd2u1rh-W4EljlViVbV4Ewc?e=YQjc9R' },
  { title: 'Checklist III', date: 'SUBMITTED 2026/04/20', type: 'INDIVIDUAL', available: true, link: 'https://drive.google.com/file/d/1geMOjnqKBC0mWjudY5-U4cXE1h9MCSbl/view?usp=sharing' },
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
      className="bg-white rounded-2xl p-8 flex flex-col justify-between transition-all duration-700 ease-out opacity-0 translate-y-8 shadow-xl shadow-purple-900/5 border border-white hover:border-purple-100 hover:shadow-purple-900/10 hover:-translate-y-1"
      style={{ transitionDelay: `${(index % 8) * 100}ms` }}
    >
      <div>
        {/* Date Badge */}
        <div className={`inline-block px-3 py-1 text-[10px] font-black rounded-lg mb-6 tracking-widest uppercase ${item.date === 'LINK COMING SOON' ? 'bg-gray-50 text-gray-400' : 'bg-purple-50 text-primary-purple'
          }`}>
          {item.date}
        </div>

        {/* Title */}
        <h4 className="font-bold text-lg text-gray-900 mb-8 leading-tight">
          {item.title}
        </h4>
      </div>

      {/* Footer Area */}
      <div className="mt-auto w-full">
        {item.isMultiple ? (
          <div className="flex flex-col gap-3 w-full">
            {item.types.map((type: string, i: number) => (
              <div key={i} className="flex justify-between items-center w-full">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">
                  {type}
                </span>
                <span className="text-[10px] font-bold text-gray-300 uppercase">
                  Coming Soon
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-between items-center w-full">
            {/* Type Badge */}
            <span className="px-2 py-1 bg-purple-50/50 text-primary-purple/60 text-[10px] font-bold rounded-md uppercase tracking-tighter">
              {item.type}
            </span>

            {/* Button */}
            {item.available ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center gap-2 text-primary-purple font-bold text-xs uppercase tracking-wider hover:text-primary-light transition-colors"
              >
                Download
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            ) : (
              <span className="text-[10px] font-bold text-gray-300 uppercase">
                Soon
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section id="downloads" className="py-24 px-4 md:px-8 lg:px-16 bg-[#F5F3FF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Research <span className="text-primary-purple">Resources</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            A transparent look at our development process and academic findings.
          </p>
        </div>

        <div className="space-y-24">


          {/* Documents Section */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary-purple shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Technical Documents</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {documents.map((item, index) => renderCard(item, index))}
            </div>
          </div>

          {/* Presentations Section */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary-purple shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Presentations</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {presentations.map((item, index) => renderCard(item, index + documents.length))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


