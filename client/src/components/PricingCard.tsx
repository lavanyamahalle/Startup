import { Link } from "wouter";
import { useState } from "react";

interface PricingCardProps {
  title: string;
  price: string;
  savings?: string;
  features: string[];
  popular?: boolean;
}

export default function PricingCard({ title, price, savings, features, popular = false }: PricingCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`${
        popular 
          ? 'bg-white rounded-lg shadow-xl transform scale-105 border-2 border-[#4CAF50] relative z-10' 
          : 'bg-white rounded-lg shadow-md hover-card'
      } overflow-hidden transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {popular && (
        <div className="absolute -top-3 -right-3 bg-[#4CAF50] text-white font-bold px-4 py-2 rounded-full shadow-lg transform rotate-12">
          POPULAR
        </div>
      )}
      
      <div className={`bg-primary text-white p-6 text-center transition-all duration-300 ${
        isHovered && !popular ? 'bg-[#4CAF50]' : ''
      }`}>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      <div className="p-6">
        <div className="text-center mb-6">
          <span className="text-4xl font-bold text-primary relative inline-block">
            {price}
            {isHovered && (
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#4CAF50] transform origin-left transition-transform duration-500" 
                style={{transform: isHovered ? 'scaleX(1)' : 'scaleX(0)'}}
              ></span>
            )}
          </span>
          {savings && (
            <p className="text-sm text-gray-500 mt-1 relative">
              <span className="line-through">{savings.split(' ')[0]}</span>
              <span className="ml-1">{savings.split(' ').slice(1).join(' ')}</span>
            </p>
          )}
        </div>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className={`flex items-start transition-all duration-300 transform ${
              isHovered ? `translate-x-${index % 2 === 0 ? '1' : '-1'}` : 'translate-x-0'
            }`}
             style={{ transitionDelay: `${index * 50}ms` }}>
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4CAF50]/20 flex items-center justify-center mr-3">
                <i className="fas fa-check text-[#4CAF50] text-sm"></i>
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link 
          href="/contact" 
          className={`block text-center no-hover-effect ${
            popular ? 'bg-[#4CAF50]' : 'bg-primary'
          } hover:bg-[#4CAF50] text-white font-cta font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
