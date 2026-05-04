'use client';

import { useState, useEffect, useRef } from 'react';

const milestones = [
  { date: 'September 2025', title: 'Project Proposal', status: 'Completed', marks: '12%' },
  { date: 'January 2026', title: 'Progress Presentation I', status: 'Completed', marks: '15%' },
  { date: 'March 2026', title: 'Progress Presentation II', status: 'Completed', marks: '18%' },
  { date: 'April 2026', title: 'Research Paper Submission', status: 'In Progress', marks: '10%' },
  { date: 'April 2026', title: 'Final Assessment & Viva', status: 'Upcoming', marks: '20%' },
  { date: 'May 2026', title: 'Final Report Submission', status: 'Upcoming', marks: '19%' }
];

const progressMarkers = [
  { label: 'Proposal', short: 'Sep \'25' },
  { label: 'PP I', short: 'Jan \'26' },
  { label: 'PP II', short: 'Mar \'26' },
  { label: 'Paper', short: 'Apr \'26' },
  { label: 'Viva', short: 'May \'04' },
  { label: 'Report', short: 'May \'13' }
];

export default function Milestones() {
  const [isExpanded, setIsExpanded] = useState(false);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const visibleMilestones = isExpanded ? milestones : milestones.slice(0, 3);

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

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, [visibleMilestones]);

  return (
    <section
      id="milestones"
      className="py-16 px-4 md:px-8 lg:px-16 bg-[#F5F3FF]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Research <span className="text-primary-purple">Timeline</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Our journey from a concept to a fully realized cognitive science application.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative px-4">
          {/* Center Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-purple-200 rounded-full hidden md:block" />
          <div className="absolute left-8 w-0.5 h-full bg-purple-200 rounded-full md:hidden" />

          {visibleMilestones.map((milestone, index) => (
            <div
              key={index}
              ref={(el) => { itemsRef.current[index] = el; }}
              className={`flex items-center mb-8 relative opacity-0 translate-y-8 transition-all duration-700 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Content */}
              <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                <div className={`bg-white px-5 py-4 rounded-xl border border-white shadow-xl shadow-purple-900/5 hover:shadow-purple-900/10 transition-all duration-300 inline-block text-left ${index % 2 !== 0 ? 'md:text-right' : ''} max-w-sm w-full`}>
                  <div className={`flex items-center gap-3 mb-2 ${index % 2 !== 0 ? 'md:justify-end' : ''} flex-wrap`}>
                    <span className="text-[10px] font-bold text-primary-purple uppercase tracking-widest">
                      {milestone.date}
                    </span>
                    <span className={`px-2 py-0.5 text-[8px] font-black rounded uppercase tracking-tighter ${milestone.status === 'Completed' ? 'bg-green-50 text-green-600' :
                      milestone.status === 'In Progress' ? 'bg-blue-50 text-blue-600' :
                        'bg-gray-50 text-gray-400'
                      }`}>
                      {milestone.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    {milestone.title}
                  </h3>
                </div>
              </div>

              {/* Dot */}
              <div className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full z-10 border-4 border-white shadow-lg ${milestone.status === 'Completed' ? 'bg-primary-purple' : 'bg-white'
                }`} />
            </div>
          ))}

          <div className="flex justify-center mt-12 relative z-10">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-8 py-3 bg-white border border-purple-100 rounded-full text-primary-purple font-bold text-sm shadow-xl shadow-purple-900/5 hover:bg-primary-purple hover:text-white transition-all duration-300"
            >
              {isExpanded ? 'Show Less' : 'See Full Timeline'}
            </button>
          </div>
        </div>

        {/* Overall Progress Container */}
        <div className="max-w-4xl mx-auto mt-24 bg-white p-12 rounded-3xl shadow-2xl shadow-purple-900/5 border border-white">
          <div className="flex justify-between items-end mb-8">
            <div>
              <p className="text-primary-purple text-xs font-black uppercase tracking-[0.2em] mb-2">Development Phase</p>
              <h4 className="text-3xl font-bold text-gray-900">Project Velocity</h4>
            </div>
            <div className="text-right">
              <span className="block text-4xl font-black text-primary-purple">90%</span>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Completed</span>
            </div>
          </div>

          <div className="h-4 bg-purple-50 rounded-full relative overflow-hidden mb-12 border border-purple-100">
            <div
              className="h-full bg-gradient-to-r from-primary-purple to-primary-light rounded-full"
              style={{
                width: '65%'
              }}
            />
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {progressMarkers.map((marker, index) => (
              <div key={index} className="text-center group">
                <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 group-hover:text-primary-purple transition-colors">{marker.label}</span>
                <div className="w-1.5 h-1.5 bg-purple-100 rounded-full mx-auto mb-2" />
                <span className="block text-xs text-gray-600 font-bold">{marker.short}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



