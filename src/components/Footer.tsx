import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2D1B4E] text-white py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2 mb-6">
            <span className="text-2xl">🧠</span>
            <span className="font-bebas text-xl">FOCUS</span>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed">
            A cognitive science-backed productivity application designed to help you overcome procrastination 
            and achieve peak mental performance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bebas text-lg text-[#FF6BB3] mb-6">Quick Links</h4>
          <div className="flex flex-col gap-3">
            <Link href="#what-is-focus" className="text-white/60 text-sm hover:text-[#E91E8C] transition-colors">
              About Focus
            </Link>
            <Link href="#milestones" className="text-white/60 text-sm hover:text-[#E91E8C] transition-colors">
              Milestones
            </Link>
            <Link href="#downloads" className="text-white/60 text-sm hover:text-[#E91E8C] transition-colors">
              Downloads
            </Link>
            <Link href="#contact" className="text-white/60 text-sm hover:text-[#E91E8C] transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Research */}
        <div>
          <h4 className="font-bebas text-lg text-[#FF6BB3] mb-6">Research</h4>
          <div className="flex flex-col gap-3">
            <Link href="#" className="text-white/60 text-sm hover:text-[#E91E8C] transition-colors">
              Publications
            </Link>
            <Link href="#" className="text-white/60 text-sm hover:text-[#E91E8C] transition-colors">
              Methodology
            </Link>
            <Link href="#about" className="text-white/60 text-sm hover:text-[#E91E8C] transition-colors">
              Team
            </Link>
            <Link href="#" className="text-white/60 text-sm hover:text-[#E91E8C] transition-colors">
              Supervisor
            </Link>
          </div>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-bebas text-lg text-[#FF6BB3] mb-6">Connect</h4>
          <div className="flex flex-col gap-3">
            <Link href="#" className="text-white/60 text-sm hover:text-[#E91E8C] transition-colors">
              GitHub
            </Link>
            <Link href="#" className="text-white/60 text-sm hover:text-[#E91E8C] transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="text-white/60 text-sm hover:text-[#E91E8C] transition-colors">
              Twitter
            </Link>
            <Link href="#" className="text-white/60 text-sm hover:text-[#E91E8C] transition-colors">
              YouTube
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-10 border-t border-white/10 text-center">
        <p className="text-white/50 text-sm">
          &copy; 2024 Focus Research Project. Sri Lanka Institute of Information Technology. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
