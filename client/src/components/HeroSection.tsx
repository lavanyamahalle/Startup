import { Link } from "wouter";
import { useEffect, useState, useRef } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [countersStarted, setCountersStarted] = useState(false);
  
  // Define hero animation styles
  const heroAnimation = `
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
      100% { transform: translateY(0px); }
    }
    
    @keyframes pulse-ring {
      0% { transform: scale(0.95); opacity: 1; }
      50% { transform: scale(1); opacity: 0.8; }
      100% { transform: scale(0.95); opacity: 1; }
    }
    
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    @keyframes typewriter {
      from { width: 0; }
      to { width: 100%; }
    }
    
    @keyframes blink {
      from { border-right-color: transparent; }
      to { border-right-color: #8B4513; }
    }
    
    .text-gradient {
      background: linear-gradient(90deg, #8B4513, #D2B48C, #8B4513);
      background-size: 200% auto;
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      animation: gradientShift 3s linear infinite;
    }
    
    .floating {
      animation: float 6s ease-in-out infinite;
    }
    
    .floating-delay-1 {
      animation: float 6s ease-in-out infinite;
      animation-delay: 1s;
    }
    
    .floating-delay-2 {
      animation: float 6s ease-in-out infinite;
      animation-delay: 2s;
    }
    
    .typewriter {
      overflow: hidden;
      white-space: nowrap;
      border-right: 3px solid #8B4513;
      animation: 
        typewriter 3.5s steps(40, end) 1s 1 normal both,
        blink 0.75s step-end infinite;
    }
    
    .hero-bg-pattern {
      background-image: 
        radial-gradient(circle at 25px 25px, rgba(139, 69, 19, 0.1) 2%, transparent 0%),
        radial-gradient(circle at 75px 75px, rgba(210, 180, 140, 0.1) 2%, transparent 0%);
      background-size: 100px 100px;
    }
    
    .shimmer {
      position: relative;
      overflow: hidden;
    }
    
    .shimmer::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.3) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: rotate(30deg);
      animation: shimmer 3s infinite;
    }
    
    @keyframes shimmer {
      0% { transform: translateX(-100%) rotate(30deg); }
      100% { transform: translateX(100%) rotate(30deg); }
    }
    
    .count-up {
      transition: all 2s ease;
    }
  `;
  
  useEffect(() => {
    // Add the animation styles
    const styleElement = document.createElement('style');
    styleElement.innerHTML = heroAnimation;
    document.head.appendChild(styleElement);
    
    // Trigger visibility animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    // Observer for stats counter animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersStarted) {
            setCountersStarted(true);
          }
        });
      },
      { threshold: 0.5 }
    );
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => {
      document.head.removeChild(styleElement);
      clearTimeout(timer);
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [countersStarted]);

  return (
    <section id="home" className="pt-28 md:pt-36 pb-16 hero-bg-pattern relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-b from-[#D2B48C]/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className={`lg:w-1/2 mb-10 lg:mb-0 transition-all duration-1000 transform ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
          }`}>
            <div className="inline-block mb-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Welcome to Sustenance Wellness
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your Health{" "}
              <span className="text-gradient font-bold">Naturally</span>
            </h1>
            
            <div className="flex items-center mb-8">
              <div className="h-1 w-20 bg-primary rounded-full mr-4"></div>
              <h2 className="typewriter text-xl md:text-2xl text-gray-700 overflow-hidden whitespace-nowrap">
                <span className="font-medium">Dt. Sakshi Mahalle</span> — Nutritionist & Fitness Expert
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { text: "Clinical Nutritionist", icon: "fa-heartbeat" },
                { text: "Gut Health Expert", icon: "fa-seedling" },
                { text: "Diabetes Educator", icon: "fa-hospital" }, 
                { text: "Lifestyle Coach", icon: "fa-leaf" },
                { text: "Zumba Instructor", icon: "fa-music" },
                { text: "Diet Planner", icon: "fa-utensils" }
              ].map((tag, index) => (
                <span 
                  key={index}
                  className={`bg-white shadow-md text-primary px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform 
                    opacity-0 ${isVisible ? 'opacity-100' : ''}
                    hover:scale-105 hover:shadow-lg hover:bg-primary hover:text-white flex items-center`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <i className={`fas ${tag.icon} mr-2`}></i>
                  {tag.text}
                </span>
              ))}
            </div>
            
            <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {[
                { count: 5000, text: "Happy Clients", icon: "fa-smile" },
                { count: 8, text: "Years Experience", icon: "fa-calendar-alt" },
                { count: 50, text: "Special Programs", icon: "fa-clipboard-check" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className={`bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-lg border border-gray-100 
                  transition-all duration-500 transform 
                  opacity-0 ${isVisible ? 'opacity-100' : ''}
                  hover:-translate-y-1 hover:shadow-xl`}
                  style={{ transitionDelay: `${index * 200 + 600}ms` }}
                >
                  <div className="flex items-center justify-center text-primary mb-2">
                    <i className={`fas ${stat.icon} text-xl`}></i>
                  </div>
                  <p className="text-primary font-bold text-xl sm:text-2xl text-center count-up">
                    {countersStarted ? `${stat.count}+` : '0+'}
                  </p>
                  <p className="text-gray-600 text-center text-xs sm:text-sm">{stat.text}</p>
                </div>
              ))}
            </div>
            
            <p className={`text-lg mb-8 border-l-4 border-primary pl-4 py-2 bg-primary/5 rounded-r-lg
              transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '800ms' }}
            >
              <span className="italic">
                "Transforming health and managing weight naturally through the power of food as medicine and joyful movement."
              </span>
            </p>
            
            <div className={`flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 
              transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '900ms' }}
            >
              <a 
                href="https://wa.me/7264072630?text=Hi%20Sustenance%20Wellness!%20I%27m%20interested%20in%20a%20personalized%20diet%20consultation.%20Can%20you%20help%20me%20with%20that%3F" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-5 sm:px-6 py-3 rounded-full font-medium text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-primary/90 flex items-center justify-center"
              >
                <i className="fas fa-utensils mr-2"></i>
                Diet Consultation
              </a>
              
              <a 
                href="https://wa.me/7264072630?text=Hi%20Sustenance%20Wellness!%20I%27m%20interested%20in%20joining%20your%20Zumba%20classes.%20Could%20you%20provide%20more%20details%3F" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary border-2 border-primary px-5 sm:px-6 py-3 rounded-full font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-primary/5 flex items-center justify-center"
              >
                <i className="fas fa-music mr-2"></i>
                Zumba Classes
              </a>
              
              <a 
                href="https://wa.me/7264072630?text=Hi%20Sustenance%20Wellness!%20I%27d%20like%20to%20know%20more%20about%20your%20services%20and%20pricing.%20Can%20you%20help%3F" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-5 sm:px-6 py-3 rounded-full font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-green-600 flex items-center justify-center"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                Ask on WhatsApp
              </a>
            </div>
          </div>
          
          {/* Right Content - Image */}
          <div className={`lg:w-5/12 transition-all duration-1000 transform ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`} style={{ transitionDelay: "400ms" }}>
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-12 -left-12 w-36 h-36 bg-[#D2B48C]/30 rounded-full blur-xl floating-delay-1 z-0"></div>
              <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-primary/20 rounded-full blur-lg floating-delay-2 z-0"></div>
              
              <div className="absolute -top-6 left-0 transform -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-lg shadow-lg z-20 floating">
                <div className="flex items-center">
                  <i className="fas fa-certificate mr-2"></i>
                  <span>Certified Nutritionist</span>
                </div>
              </div>
              
              <div className="absolute top-1/4 -right-4 transform translate-x-1/2 bg-white text-primary px-4 py-2 rounded-lg shadow-lg z-20 floating-delay-1">
                <div className="flex items-center">
                  <i className="fas fa-star mr-2"></i>
                  <span>5-star rated</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 left-1/4 transform -translate-x-1/2 bg-[#D2B48C] text-white px-4 py-2 rounded-lg shadow-lg z-20 floating-delay-2">
                <div className="flex items-center">
                  <i className="fas fa-medal mr-2"></i>
                  <span>Premium Service</span>
                </div>
              </div>
              
              {/* Main Image Frame */}
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-[#D2B48C]/20 z-0"></div>
                <div className="absolute inset-0 backdrop-blur-sm z-1"></div>
                
                {/* Image Placeholder - Replace with actual image when available */}
                <div className="relative h-[350px] sm:h-[400px] md:h-[480px] w-full bg-white/90 shimmer flex items-center justify-center z-10">
                  <div className="text-center p-8">
                    <div className="h-24 w-24 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <i className="fas fa-user-md text-primary text-4xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">Dt. Sakshi Mahalle</h3>
                    <p className="text-gray-600 mb-4">MSc in Nutritional Studies and Dietetics</p>
                    <div className="flex justify-center space-x-2">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        Weight Management
                      </span>
                      <span className="bg-[#D2B48C]/20 text-[#8B4513] px-3 py-1 rounded-full text-sm">
                        Clinical Nutrition
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
