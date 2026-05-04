'use client';

import { useState, useEffect } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-700 bg-white ${
        loading ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 bg-primary-purple rounded-xl animate-pulse-slow shadow-xl shadow-purple-200" />
        <div className="absolute inset-0 w-16 h-16 border-4 border-primary-purple rounded-xl animate-ping opacity-20" />
      </div>
    </div>
  );
}

