'use client';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  variant?: 'white' | 'purple';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
}

const sizes = {
  sm: { width: 32, height: 32 },
  md: { width: 40, height: 40 },
  lg: { width: 64, height: 64 },
  xl: { width: 96, height: 96 },
  '2xl': { width: 128, height: 128 },
  '3xl': { width: 192, height: 192 },
  '4xl': { width: 256, height: 256 },
  '5xl': { width: 384, height: 384 }
};

const textSizes = {
  sm: 'text-xl',
  md: 'text-2xl',
  lg: 'text-5xl md:text-7xl',
  xl: 'text-7xl md:text-9xl',
  '2xl': 'text-8xl md:text-10xl',
  '3xl': 'text-9xl md:text-12xl',
  '4xl': 'text-10xl md:text-14xl',
  '5xl': 'text-12xl md:text-16xl'
};

export default function Logo({ 
  className = '', 
  iconOnly = false, 
  variant = 'purple', 
  size = 'md' 
}: LogoProps) {
  const logoSrc = variant === 'white' ? '/focus-white.png' : '/focus-purple.png';
  const textColor = variant === 'white' ? 'white' : '#7C3AED';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`relative flex items-center justify-center`}>
        <Image
          src={logoSrc}
          alt="Focus Logo"
          width={sizes[size].width}
          height={sizes[size].height}
          className="object-contain"
          priority
        />
      </div>
      {!iconOnly && (
        <span className={`font-bold tracking-tight ${textSizes[size]}`} style={{ color: textColor }}>
          Focus
        </span>
      )}
    </div>
  );
}
