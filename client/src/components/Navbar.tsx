import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import Logo from "@/components/ui/logo";
import { Menu, X, Phone, Clock, MapPin } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  
  // Social media links
  const socialLinks = {
    whatsapp: "https://wa.me/7264072630",
    instagram: "https://instagram.com/sustenance_wellness", // Replace with actual Instagram URL
    linkedin: "https://linkedin.com/in/sustenance-wellness" // Replace with actual LinkedIn URL
  };
  
  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation styles
  const navAnimation = `
    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    .fade-in-down {
      animation: fadeInDown 0.5s ease forwards;
    }
    
    .nav-item {
      position: relative;
    }
    
    .nav-item::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -4px;
      left: 0;
      background-color: #8B4513;
      transition: width 0.3s ease;
    }
    
    .nav-item:hover::after {
      width: 100%;
    }
    
    .active-nav-item::after {
      width: 100%;
    }
    
    .social-icon {
      transition: transform 0.3s ease;
    }
    
    .social-icon:hover {
      transform: translateY(-3px);
    }
    
    .top-bar-anim {
      animation: fadeInDown 0.5s ease forwards;
    }
    
    .logo-anim {
      animation: fadeInDown 0.5s ease forwards;
      animation-delay: 0.1s;
      opacity: 0;
      animation-fill-mode: forwards;
    }
    
    .mobile-menu-anim {
      animation: slideIn 0.3s ease forwards;
    }
  `;

  useEffect(() => {
    // Add the animation styles to the document
    const styleElement = document.createElement('style');
    styleElement.innerHTML = navAnimation;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <>
      {/* Top Info Bar with contact details */}
      <div className="bg-primary text-white py-3 hidden md:block top-bar-anim">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <a href="tel:7264072630" className="text-sm hover:text-[#D2B48C] transition">7264072630</a>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span className="text-sm">Mon-Sat: 9:00 AM - 7:00 PM</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">AP Pinnacle, Lonikand, Pune</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href={socialLinks.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 social-icon"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            
            <a 
              href={socialLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 social-icon"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 social-icon"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    
      <header className={`fixed top-0 md:top-[50px] left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'md:top-0 shadow-lg bg-white/95 backdrop-blur-sm' : 'bg-white'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center logo-anim">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-primary rounded-full opacity-30 group-hover:opacity-100 blur transition duration-300"></div>
                <div className="relative h-14 w-14 bg-white rounded-full flex items-center justify-center">
                  <Logo className="h-10 w-10" />
                </div>
              </div>
              <div className="ml-3 flex flex-col">
                <span className="font-heading font-bold text-xl text-primary hidden md:block">Sustenance Wellness</span>
                <span className="text-xs text-gray-500 hidden md:block">Nutrition & Fitness</span>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className={`nav-item ${location === "/" ? "text-primary font-medium active-nav-item" : "text-gray-600"} hover:text-primary transition duration-300`}>
                Home
              </Link>
              <Link href="/about" className={`nav-item ${location === "/about" ? "text-primary font-medium active-nav-item" : "text-gray-600"} hover:text-primary transition duration-300`}>
                About
              </Link>
              <Link href="#zumba" className={`nav-item text-gray-600 hover:text-primary transition duration-300`}>
                Zumba
              </Link>
              <Link href="#diet-consultation" className={`nav-item text-gray-600 hover:text-primary transition duration-300`}>
                Diet Plans
              </Link>
              <Link href="/programs" className={`nav-item ${location === "/programs" ? "text-primary font-medium active-nav-item" : "text-gray-600"} hover:text-primary transition duration-300`}>
                Programs
              </Link>
              <Link href="/pricing" className={`nav-item ${location === "/pricing" ? "text-primary font-medium active-nav-item" : "text-gray-600"} hover:text-primary transition duration-300`}>
                Pricing
              </Link>
              <Link href="/testimonials" className={`nav-item ${location === "/testimonials" ? "text-primary font-medium active-nav-item" : "text-gray-600"} hover:text-primary transition duration-300`}>
                Success Stories
              </Link>
              <Link href="/contact" className={`nav-item ${location === "/contact" ? "text-primary font-medium active-nav-item" : "text-gray-600"} hover:text-primary transition duration-300`}>
                Contact
              </Link>
              
              <a 
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/90 transition duration-300 flex items-center shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                <span>Let's Talk</span>
              </a>
            </nav>
            
            {/* Mobile Navigation Toggle */}
            <div className="flex items-center md:hidden">
              <button 
                className="text-primary focus:outline-none p-2 rounded-full bg-primary/10"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-b-xl overflow-hidden mobile-menu-anim">
            <div className="container mx-auto px-4 py-4 flex flex-col">
              <div className="space-y-1 mb-4">
                <Link href="/" 
                  className={`block px-4 py-3 rounded-lg ${location === "/" ? "bg-primary/10 text-primary" : "text-gray-700"} hover:bg-primary/5 hover:text-primary transition-all duration-300`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <i className="fas fa-home mr-3 w-5 text-center"></i>
                    <span>Home</span>
                  </div>
                </Link>
                
                <Link href="/about" 
                  className={`block px-4 py-3 rounded-lg ${location === "/about" ? "bg-primary/10 text-primary" : "text-gray-700"} hover:bg-primary/5 hover:text-primary transition-all duration-300`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <i className="fas fa-user mr-3 w-5 text-center"></i>
                    <span>About</span>
                  </div>
                </Link>
                
                <Link href="#zumba" 
                  className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-primary/5 hover:text-primary transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <i className="fas fa-music mr-3 w-5 text-center"></i>
                    <span>Zumba</span>
                  </div>
                </Link>
                
                <Link href="#diet-consultation" 
                  className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-primary/5 hover:text-primary transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <i className="fas fa-utensils mr-3 w-5 text-center"></i>
                    <span>Diet Plans</span>
                  </div>
                </Link>
                
                <Link href="/programs" 
                  className={`block px-4 py-3 rounded-lg ${location === "/programs" ? "bg-primary/10 text-primary" : "text-gray-700"} hover:bg-primary/5 hover:text-primary transition-all duration-300`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <i className="fas fa-clipboard-list mr-3 w-5 text-center"></i>
                    <span>Programs</span>
                  </div>
                </Link>
                
                <Link href="/pricing" 
                  className={`block px-4 py-3 rounded-lg ${location === "/pricing" ? "bg-primary/10 text-primary" : "text-gray-700"} hover:bg-primary/5 hover:text-primary transition-all duration-300`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <i className="fas fa-tags mr-3 w-5 text-center"></i>
                    <span>Pricing</span>
                  </div>
                </Link>
                
                <Link href="/testimonials" 
                  className={`block px-4 py-3 rounded-lg ${location === "/testimonials" ? "bg-primary/10 text-primary" : "text-gray-700"} hover:bg-primary/5 hover:text-primary transition-all duration-300`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <i className="fas fa-star mr-3 w-5 text-center"></i>
                    <span>Success Stories</span>
                  </div>
                </Link>
                
                <Link href="/contact" 
                  className={`block px-4 py-3 rounded-lg ${location === "/contact" ? "bg-primary/10 text-primary" : "text-gray-700"} hover:bg-primary/5 hover:text-primary transition-all duration-300`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <i className="fas fa-envelope mr-3 w-5 text-center"></i>
                    <span>Contact</span>
                  </div>
                </Link>
              </div>
              
              {/* Social Media & Contact in Mobile Menu */}
              <div className="border-t border-gray-100 pt-4">
                <p className="text-xs text-gray-500 mb-3 px-4">Connect with us</p>
                <div className="flex space-x-2 px-4">
                  <a 
                    href={socialLinks.whatsapp} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-all duration-300"
                    aria-label="WhatsApp"
                  >
                    <i className="fab fa-whatsapp text-sm"></i>
                  </a>
                  
                  <a 
                    href={socialLinks.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram text-sm"></i>
                  </a>
                  
                  <a 
                    href={socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in text-sm"></i>
                  </a>
                  
                  <a 
                    href="tel:7264072630" 
                    className="bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-all duration-300 ml-auto"
                    aria-label="Call us"
                  >
                    <i className="fas fa-phone-alt text-sm"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
