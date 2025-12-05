'use client';

export default function DownloadCTA() {
  return (
    <section 
      className="py-32 px-4 md:px-8 lg:px-16 text-white text-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #E91E8C 0%, #6B4E9B 100%)'
      }}
    >
      {/* Decorative circles */}
      <div className="absolute w-96 h-96 bg-white/10 rounded-full -top-24 -right-24" />
      <div className="absolute w-72 h-72 bg-white/5 rounded-full -bottom-12 -left-12" />

      <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl text-white mb-6 relative z-10">
        Download Now
      </h2>
      <p className="text-lg max-w-2xl mx-auto opacity-90 mb-12 relative z-10 px-6 leading-relaxed">
        Start your journey to peak productivity. Available on iOS, Android, and Web.
      </p>

      <div className="flex flex-wrap gap-6 justify-center relative z-10">
        <a 
          href="#"
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#E91E8C] rounded-full font-bold text-lg transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30"
        >
          <span className="text-2xl">🍎</span> App Store
        </a>
        <a 
          href="#"
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#E91E8C] rounded-full font-bold text-lg transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30"
        >
          <span className="text-2xl">🤖</span> Google Play
        </a>
        <a 
          href="#"
          className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg transition-all hover:-translate-y-2 hover:bg-white hover:text-[#E91E8C]"
        >
          <span className="text-2xl">🌐</span> Web App
        </a>
      </div>
    </section>
  );
}
