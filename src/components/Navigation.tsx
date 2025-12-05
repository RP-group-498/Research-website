'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[1000] px-4 md:px-8 lg:px-16 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled 
          ? 'bg-[#F5F0FA]/98 shadow-lg shadow-[#6B4E9B]/10' 
          : 'bg-[#F5F0FA]/90'
      } backdrop-blur-md`}
    >
      <Link href="/" className="flex items-center gap-2 no-underline">
        <div className="relative w-11 h-11">
          <span className="text-3xl">🧠</span>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-[#4A2C7A]">⊕</span>
        </div>
        <span className="font-bebas text-2xl text-[#E91E8C]">FOCUS</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-2 items-center">
        <Link href="#what-is-focus" className="px-5 py-2 text-[#E91E8C] font-medium text-sm uppercase tracking-wide hover:text-[#4A2C7A] transition-colors">
          What is Focus
        </Link>
        <Link href="#milestones" className="px-5 py-2 text-[#E91E8C] font-medium text-sm uppercase tracking-wide hover:text-[#4A2C7A] transition-colors">
          Milestones
        </Link>
        <Link href="#about" className="px-5 py-2 text-[#E91E8C] font-medium text-sm uppercase tracking-wide hover:text-[#4A2C7A] transition-colors">
          About Us
        </Link>
        <Link 
          href="#downloads" 
          className="px-7 py-3 bg-white border-2 border-[#E91E8C] rounded-full text-[#E91E8C] font-semibold hover:bg-[#E91E8C] hover:text-white transition-all ml-2"
        >
          Downloads
        </Link>
        <Link 
          href="#contact" 
          className="px-7 py-3 bg-[#E91E8C] border-2 border-[#E91E8C] rounded-full text-white font-semibold hover:bg-[#4A2C7A] hover:border-[#4A2C7A] transition-all"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
      >
        <span className={`w-6 h-0.5 bg-[#E91E8C] transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-6 h-0.5 bg-[#E91E8C] transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
        <span className={`w-6 h-0.5 bg-[#E91E8C] transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#F5F0FA]/98 backdrop-blur-md p-8 flex flex-col gap-2 lg:hidden shadow-lg">
          <Link href="#what-is-focus" onClick={() => setMobileMenuOpen(false)} className="py-3 text-[#E91E8C] font-medium uppercase tracking-wide">
            What is Focus
          </Link>
          <Link href="#milestones" onClick={() => setMobileMenuOpen(false)} className="py-3 text-[#E91E8C] font-medium uppercase tracking-wide">
            Milestones
          </Link>
          <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="py-3 text-[#E91E8C] font-medium uppercase tracking-wide">
            About Us
          </Link>
          <Link href="#downloads" onClick={() => setMobileMenuOpen(false)} className="py-3 text-[#E91E8C] font-medium uppercase tracking-wide">
            Downloads
          </Link>
          <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-3 text-[#E91E8C] font-medium uppercase tracking-wide">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
