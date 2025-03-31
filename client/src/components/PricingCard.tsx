import { Link } from "wouter";

interface PricingCardProps {
  title: string;
  price: string;
  savings?: string;
  features: string[];
  popular?: boolean;
}

export default function PricingCard({ title, price, savings, features, popular = false }: PricingCardProps) {
  return (
    <div className={`${popular ? 'bg-white rounded-lg shadow-xl transform scale-105 border-2 border-[#4CAF50] relative' : 'bg-white rounded-lg shadow-md hover:shadow-lg transition'} overflow-hidden`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-[#4CAF50] text-white text-xs font-bold px-3 py-1">
          POPULAR
        </div>
      )}
      
      <div className="bg-primary text-white p-6 text-center">
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      <div className="p-6">
        <div className="text-center mb-6">
          <span className="text-4xl font-bold text-primary">{price}</span>
          {savings && <p className="text-sm text-gray-500 mt-1">{savings}</p>}
        </div>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <i className="fas fa-check text-[#4CAF50] mt-1 mr-3"></i>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link href="/contact">
          <a className={`block text-center ${popular ? 'bg-[#4CAF50] hover:bg-[#4CAF50]/90' : 'bg-primary hover:bg-primary/90'} text-white font-cta font-semibold py-3 px-6 rounded-lg shadow transition`}>
            Get Started
          </a>
        </Link>
      </div>
    </div>
  );
}
