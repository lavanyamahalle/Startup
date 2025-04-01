import React from 'react';
import { Link } from 'wouter';
import logoImg from './logo.png';
interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', showText = true }) => {
  return (
    <Link href="/">
      <a className={`flex items-center ${className}`}>
      <div className="relative h-14 w-14 bg-white rounded-full flex items-center justify-center">
  <img src={logoImg} alt="Logo" className="h-10 w-10 object-cover" />
</div>
        {showText && (
          <span className="font-heading font-bold text-xl text-[hsl(var(--color-primary))] hidden md:block">
            Sustenance Wellness
          </span>
        )}
      </a>
    </Link>
  );
};

export default Logo;
