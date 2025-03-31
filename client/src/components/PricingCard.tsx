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
  
  const handleWhatsAppClick = () => {
    // Create a WhatsApp message specific to this pricing plan
    const encodedMessage = encodeURIComponent(
      `Hi Sustenance Wellness! I'm interested in your ${title} plan priced at ${price}. I'd like to get started with this package.`
    );
    window.open(`https://wa.me/7264072630?text=${encodedMessage}`, '_blank');
  };
  
  return (
    <div 
      className={`${
        popular 
          ? 'bg-white rounded-xl shadow-xl transform scale-105 border-2 border-[#4CAF50] relative z-10' 
          : 'bg-white rounded-xl shadow-md hover-card'
      } overflow-hidden transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {popular && (
        <div className="absolute -top-3 -right-3 bg-[#4CAF50] text-white font-bold px-4 py-2 rounded-full shadow-lg transform rotate-12">
          POPULAR
        </div>
      )}
      
      <div className={`${popular ? 'bg-[#4CAF50]' : 'bg-primary'} text-white p-6 text-center transition-all duration-300`}>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      <div className="p-6">
        <div className="text-center mb-6 relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center">
            <span className="text-2xl font-bold text-primary">₹</span>
          </div>
          <span className="text-4xl font-bold text-primary relative inline-block mt-2">
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
            <li key={index} className={`flex items-start transition-all duration-300 transform`}
             style={{ transitionDelay: `${index * 50}ms` }}>
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4CAF50]/20 flex items-center justify-center mr-3">
                <i className="fas fa-check text-[#4CAF50] text-sm"></i>
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <button
          onClick={handleWhatsAppClick}
          className={`w-full flex items-center justify-center no-hover-effect ${
            popular ? 'bg-[#4CAF50]' : 'bg-primary'
          } hover:bg-[#4CAF50] text-white font-medium py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
        >
          <i className="fab fa-whatsapp mr-2 text-lg"></i>
          <span>Get Started Now</span>
        </button>
        
        <p className="text-xs text-center text-gray-500 mt-3">
          Click to connect via WhatsApp
        </p>
      </div>
    </div>
  );
}
