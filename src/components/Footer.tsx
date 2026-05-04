import Link from 'next/link';
import Logo from './Logo';


export default function Footer() {
  return (
    <footer className="bg-[#5B21B6] text-white py-24 px-4 md:px-8 lg:px-16 overflow-hidden relative">
      {/* Decorative circle */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-8 group block">
              <Logo variant="white" size="xl" iconOnly={true} className="group-hover:scale-105 transition-transform duration-300" />
            </Link>
            <p className="text-purple-100/70 text-sm leading-relaxed font-medium max-w-xs">
              Empowering individuals to reclaim their time through cognitive science and adaptive AI interventions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Navigation</h4>
            <div className="flex flex-col gap-4">
              <Link href="#hero" className="text-purple-100/60 text-sm hover:text-white transition-colors">Home</Link>
              <Link href="#what-is-focus" className="text-purple-100/60 text-sm hover:text-white transition-colors">Features</Link>
              <Link href="#milestones" className="text-purple-100/60 text-sm hover:text-white transition-colors">Timeline</Link>
              <Link href="#downloads" className="text-purple-100/60 text-sm hover:text-white transition-colors">Resources</Link>
              <Link href="#testimonials" className="text-purple-100/60 text-sm hover:text-white transition-colors">Testimonials</Link>
            </div>
          </div>

          {/* Research */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Research</h4>
            <div className="flex flex-col gap-4">
              <Link href="#about" className="text-purple-100/60 text-sm hover:text-white transition-colors">Our Team</Link>
              <Link href="#" className="text-purple-100/60 text-sm hover:text-white transition-colors">Publications</Link>
              <Link href="#" className="text-purple-100/60 text-sm hover:text-white transition-colors">Case Studies</Link>
              <Link href="#" className="text-purple-100/60 text-sm hover:text-white transition-colors">Whitepaper</Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Connect</h4>
            <div className="flex flex-col gap-4">
              <Link href="#contact" className="text-purple-100/60 text-sm hover:text-white transition-colors">Contact Us</Link>
              <Link href="#" className="text-purple-100/60 text-sm hover:text-white transition-colors">Twitter</Link>
              <Link href="#" className="text-purple-100/60 text-sm hover:text-white transition-colors">LinkedIn</Link>
              <Link href="#" className="text-purple-100/60 text-sm hover:text-white transition-colors">GitHub</Link>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-purple-100/40 text-xs font-bold uppercase tracking-widest">
            &copy; 2026 Focus Project. SLIIT Faculty of Computing.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-purple-100/30 text-xs font-bold hover:text-white transition-colors uppercase tracking-tighter">Privacy Policy</Link>
            <Link href="#" className="text-purple-100/30 text-xs font-bold hover:text-white transition-colors uppercase tracking-tighter">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


