import React from 'react';
import { Link } from 'wouter';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', showText = true }) => {
  return (
    <Link href="/">
      <a className={`flex items-center ${className}`}>
        <div className="h-14 w-14 bg-[hsl(var(--color-primary))] rounded-full flex items-center justify-center text-white mr-3">
          <span className="font-heading font-bold text-xl">SW</span>
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
