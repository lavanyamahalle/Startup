import { useState } from "react";

interface ProgramCardProps {
  title: string;
  icon: string;
  description: string;
}

export default function ProgramCard({ title, icon, description }: ProgramCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleWhatsAppClick = () => {
    // Create a WhatsApp message specific to this program
    const encodedMessage = encodeURIComponent(`Hi Sustenance Wellness! I'm interested in your ${title} program. Can you provide more details?`);
    window.open(`https://wa.me/7264072630?text=${encodedMessage}`, '_blank');
  };
  
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-md hover-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 bg-[#D2B48C]/20 flex items-center justify-center relative overflow-hidden">
        <div 
          className={`absolute inset-0 bg-primary/10 transform transition-transform duration-700 ${
            isHovered ? "scale-100" : "scale-0"
          }`} 
          style={{ 
            transformOrigin: "center", 
            borderRadius: "50%"
          }}
        ></div>
        <i className={`${icon} text-primary text-6xl transition-all duration-500 ${
          isHovered ? "scale-110" : "scale-100"
        }`}></i>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-3 section-title">{title}</h3>
        <p className="mb-4 text-gray-700">{description}</p>
        
        <div className="flex items-center justify-between mt-5">
          <button 
            onClick={handleWhatsAppClick}
            className="btn-primary no-hover-effect py-2 px-4 text-sm"
          >
            <i className="fab fa-whatsapp mr-2"></i>
            <span>Inquire Now</span>
          </button>
          
          <div 
            className="text-primary font-medium flex items-center group cursor-pointer"
            onClick={handleWhatsAppClick}
          >
            <span>Learn More</span> 
            <i className={`fas fa-arrow-right transition-all duration-500 ml-2 group-hover:ml-3`}></i>
          </div>
        </div>
      </div>
    </div>
  );
}
