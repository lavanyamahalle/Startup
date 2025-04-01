// src/components/ProgramCard.tsx
import { useState } from "react";


interface ProgramCardProps {
  title: string;
  icon: string; // image source
  description: string;
}

export default function ProgramCard({ title, icon, description }: ProgramCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-md hover-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 bg-[#D2B48C]/20 flex items-center justify-center relative overflow-hidden">
        <div 
          className={`absolute inset-0 bg-primary/10 transform transition-transform duration-700 ${isHovered ? "scale-100" : "scale-0"}`} 
          style={{ transformOrigin: "center", borderRadius: "50%" }}
        ></div>
        
        {/* Display image instead of icon */}
        <img 
          src={icon} 
          alt={title} 
          className={`transition-all duration-500 ${isHovered ? "scale-140" : "scale-110"} w-60 h-50 object-cover`} 
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-3 section-title">{title}</h3>
        <p className="mb-4 text-gray-700">{description}</p>
        
        <div className="flex items-center justify-between mt-5">
          <button className="btn-primary py-2 px-4 text-sm">
            Inquire Now
          </button>
          
          <div className="text-primary font-medium flex items-center group cursor-pointer">
            <span>Learn More</span> 
          </div>
        </div>
      </div>
    </div>
  );
}
