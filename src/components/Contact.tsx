'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 lg:px-16 bg-[#F5F3FF] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-white rounded-full blur-3xl -z-10 opacity-60" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-slide-up">
          <p className="text-primary-purple text-xs font-black uppercase tracking-[0.3em] mb-4">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Let&apos;s <span className="text-primary-purple">Connect</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary-purple mx-auto rounded-full opacity-20" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-16 rounded-3xl shadow-2xl shadow-purple-900/5 border border-white animate-slide-up">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Collaborate With Us
            </h3>
            <p className="text-gray-500 text-lg leading-relaxed mb-12 font-medium text-center">
              Reach out to our team for inquiries, feedback, or partnership opportunities. Click the email below to start a conversation.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-12 items-center">
              <a href="mailto:rpgroup498@gmail.com" className="flex items-center gap-6 group">
                <div className="w-20 h-20 rounded-2xl bg-purple-50 flex items-center justify-center text-primary-purple group-hover:bg-primary-purple group-hover:text-white transition-all duration-300 shadow-xl shadow-purple-900/5">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-primary-purple uppercase tracking-[0.2em] mb-1">Email Us</p>
                  <span className="text-xl font-bold text-gray-900 group-hover:text-primary-purple transition-colors">rpgroup498@gmail.com</span>
                </div>
              </a>
              
              <div className="flex items-center gap-6 group">
                <div className="w-20 h-20 rounded-2xl bg-purple-50 flex items-center justify-center text-primary-purple group-hover:bg-primary-purple group-hover:text-white transition-all duration-300 shadow-xl shadow-purple-900/5">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-primary-purple uppercase tracking-[0.2em] mb-1">Our Location</p>
                  <span className="text-xl font-bold text-gray-900">SLIIT, Malabe, Sri Lanka</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


