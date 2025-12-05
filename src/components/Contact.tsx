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
    <section id="contact" className="py-24 px-4 md:px-8 lg:px-16 bg-[#F5F0FA]">
      <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl text-[#4A2C7A] text-center mb-6">
        Contact Us
      </h2>
      <p className="text-center text-[#E91E8C] text-lg uppercase tracking-[2px] mb-20 px-4">
        Get in Touch
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Contact Info */}
        <div>
          <h3 className="font-bebas text-3xl text-[#4A2C7A] mb-6">
            Let&apos;s Connect
          </h3>
          <p className="text-[#6B4E9B] leading-relaxed mb-10">
            Have questions about our research or interested in collaboration? We&apos;d love to hear from you. 
            Reach out to our team for inquiries, feedback, or partnership opportunities.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                style={{
                  background: 'linear-gradient(135deg, #FF6BB3, #E91E8C)'
                }}
              >
                📧
              </div>
              <span className="text-[#6B4E9B]">focus.research@sliit.lk</span>
            </div>
            <div className="flex items-center gap-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                style={{
                  background: 'linear-gradient(135deg, #FF6BB3, #E91E8C)'
                }}
              >
                📍
              </div>
              <span className="text-[#6B4E9B]">SLIIT, Malabe, Sri Lanka</span>
            </div>
            <div className="flex items-center gap-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                style={{
                  background: 'linear-gradient(135deg, #FF6BB3, #E91E8C)'
                }}
              >
                📱
              </div>
              <span className="text-[#6B4E9B]">+94 11 754 4801</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form 
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-10 shadow-xl shadow-[#6B4E9B]/10"
        >
          <div className="mb-8">
            <label className="block text-[#4A2C7A] font-medium mb-2">Your Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your name"
              required
              className="w-full px-5 py-4 border-2 border-[#E8E0F0] rounded-xl font-poppins text-base transition-all focus:outline-none focus:border-[#E91E8C] focus:shadow-lg focus:shadow-[#E91E8C]/10"
            />
          </div>
          <div className="mb-8">
            <label className="block text-[#4A2C7A] font-medium mb-2">Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter your email"
              required
              className="w-full px-5 py-4 border-2 border-[#E8E0F0] rounded-xl font-poppins text-base transition-all focus:outline-none focus:border-[#E91E8C] focus:shadow-lg focus:shadow-[#E91E8C]/10"
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#4A2C7A] font-medium mb-2">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Write your message..."
              rows={4}
              className="w-full px-5 py-4 border-2 border-[#E8E0F0] rounded-xl font-poppins text-base transition-all resize-none focus:outline-none focus:border-[#E91E8C] focus:shadow-lg focus:shadow-[#E91E8C]/10"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 rounded-xl font-bebas text-xl tracking-wider text-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#E91E8C]/30"
            style={{
              background: 'linear-gradient(135deg, #E91E8C, #4A2C7A)'
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
