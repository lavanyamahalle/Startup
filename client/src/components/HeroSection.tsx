import { Link } from "wouter";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="animated-gradient">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div 
            className={`md:w-1/2 mb-10 md:mb-0 transition-all duration-700 transform ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary mb-4 leading-tight">
              Transform Your Health <span className="text-[#4CAF50]">Naturally</span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-6">
              <span className="font-bold">Dt. Sakshi Mahalle</span> – MSc in Nutritional Studies and Dietetics
            </h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Clinical Nutritionist", "Gut Health Expert", "Diabetes Educator", "Lifestyle Coach", "Zumba & Yoga Instructor", "Dietary Supplements Advisor"]
                .map((tag, index) => (
                  <span 
                    key={index}
                    className={`bg-[#D2B48C]/30 text-primary px-3 py-1 rounded-full text-sm transition-all duration-500 transform hover:scale-105 hover:shadow-md hover:bg-primary hover:text-white`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {tag}
                  </span>
                ))
              }
            </div>
            <p className="text-lg mb-8">
              Has helped <span className="font-bold text-primary relative">
                <span className="relative z-10">5000+ people</span>
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#D2B48C]/50 z-0"></span>
              </span> sustain wellness and transform their lives.
            </p>
            <p className="text-lg italic mb-8 border-l-4 border-[#D2B48C] pl-4 py-2">
              "Transforming health and managing weight naturally through the power of food as medicine."
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary no-hover-effect">
                Contact Us
              </Link>
              <Link href="/programs" className="btn-secondary no-hover-effect">
                Our Programs
              </Link>
            </div>
          </div>
          <div 
            className={`md:w-5/12 transition-all duration-700 transform ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#D2B48C]/40 rounded-full z-0 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full z-0 animate-pulse" style={{ animationDelay: "1s" }}></div>
              <div className="fancy-image-frame relative z-10 bg-gray-200 overflow-hidden h-96 w-full shadow-2xl">
                <div className="h-full w-full flex items-center justify-center">
                  <span className="text-gray-500">
                    <i className="fas fa-user-md text-6xl"></i>
                    <p className="text-center mt-4">Dietitian's Professional Photo</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
