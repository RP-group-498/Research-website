'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';


export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] px-4 md:px-8 lg:px-16 py-4 flex justify-between items-center transition-all duration-300 ${scrolled
        ? 'bg-white/80 backdrop-blur-lg border-b border-purple-100 shadow-sm py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <Link href="/" className="group">
        <Logo
          variant={scrolled ? 'purple' : 'white'}
          iconOnly={true}
          size="xl"
          className="group-hover:scale-105 transition-transform duration-300"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-4 items-center">
        <Link href="#milestones" className={`px-3 py-2 font-medium text-sm transition-colors ${scrolled ? 'text-gray-600 hover:text-primary-purple' : 'text-white/80 hover:text-white'}`}>
          Timeline
        </Link>
        <Link href="#downloads" className={`px-3 py-2 font-medium text-sm transition-colors ${scrolled ? 'text-gray-600 hover:text-primary-purple' : 'text-white/80 hover:text-white'}`}>
          Download
        </Link>
        <Link href="#testimonials" className={`px-3 py-2 font-medium text-sm transition-colors ${scrolled ? 'text-gray-600 hover:text-primary-purple' : 'text-white/80 hover:text-white'}`}>
          Testimonials
        </Link>
        <Link href="#about" className={`px-3 py-2 font-medium text-sm transition-colors ${scrolled ? 'text-gray-600 hover:text-primary-purple' : 'text-white/80 hover:text-white'}`}>
          About
        </Link>
        <Link
          href="#contact"
          className={`ml-4 px-6 py-2.5 font-semibold rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 ${scrolled ? 'bg-primary-purple text-white hover:bg-primary-light' : 'bg-white text-primary-purple hover:bg-purple-50'}`}
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
      >
        <span className={`w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-gray-800' : 'bg-white'} ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-gray-800' : 'bg-white'} ${mobileMenuOpen ? 'opacity-0' : ''}`} />
        <span className={`w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-gray-800' : 'bg-white'} ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-8 flex flex-col gap-2 lg:hidden shadow-xl transition-all duration-300 origin-top ${mobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
        <Link href="#what-is-focus" onClick={() => setMobileMenuOpen(false)} className="py-3 text-gray-600 font-medium hover:text-primary-purple border-b border-gray-50">
          Features
        </Link>
        <Link href="#milestones" onClick={() => setMobileMenuOpen(false)} className="py-3 text-gray-600 font-medium hover:text-primary-purple border-b border-gray-50">
          Timeline
        </Link>
        <Link href="#downloads" onClick={() => setMobileMenuOpen(false)} className="py-3 text-gray-600 font-medium hover:text-primary-purple border-b border-gray-50">
          Download
        </Link>
        <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="py-3 text-gray-600 font-medium hover:text-primary-purple border-b border-gray-50">
          About
        </Link>
        <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="mt-4 py-4 bg-primary-purple text-white text-center font-bold rounded-lg">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}


