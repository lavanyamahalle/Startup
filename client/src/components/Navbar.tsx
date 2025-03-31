import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import Logo from "@/components/ui/logo";
import { MenuIcon } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  
  // Social media links
  const socialLinks = {
    whatsapp: "https://wa.me/7264072630",
    instagram: "https://instagram.com/sustenance_wellness", // Replace with your actual Instagram URL
    linkedin: "https://linkedin.com/in/sustenance-wellness" // Replace with your actual LinkedIn URL
  };
  
  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Social Media Bar */}
      <div className="bg-primary text-white py-1 hidden md:block">
        <div className="container mx-auto px-4 flex justify-end items-center space-x-4">
          <a 
            href={socialLinks.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#D2B48C] transition flex items-center"
          >
            <i className="fab fa-whatsapp mr-1"></i>
            <span className="text-sm">WhatsApp</span>
          </a>
          
          <a 
            href={socialLinks.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#D2B48C] transition flex items-center"
          >
            <i className="fab fa-instagram mr-1"></i>
            <span className="text-sm">Instagram</span>
          </a>
          
          <a 
            href={socialLinks.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#D2B48C] transition flex items-center"
          >
            <i className="fab fa-linkedin mr-1"></i>
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
      </div>
    
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md mt-5 md:mt-0">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Logo className="h-14 w-14 mr-3" />
              <span className="font-heading font-bold text-xl text-primary hidden md:block">Sustenance Wellness</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className={`${location === "/" ? "text-primary" : "text-gray-800"} font-medium hover:text-primary transition`}>
                Home
              </Link>
              <Link href="/about" className={`${location === "/about" ? "text-primary" : "text-gray-800"} font-medium hover:text-primary transition`}>
                About Dt. Sakshi
              </Link>
              <Link href="#zumba" className={`text-gray-800 font-medium hover:text-primary transition`}>
                Zumba
              </Link>
              <Link href="#diet-consultation" className={`text-gray-800 font-medium hover:text-primary transition`}>
                Diet Plans
              </Link>
              <Link href="/programs" className={`${location === "/programs" ? "text-primary" : "text-gray-800"} font-medium hover:text-primary transition`}>
                Programs
              </Link>
              <Link href="/pricing" className={`${location === "/pricing" ? "text-primary" : "text-gray-800"} font-medium hover:text-primary transition`}>
                How to Join
              </Link>
              <Link href="/testimonials" className={`${location === "/testimonials" ? "text-primary" : "text-gray-800"} font-medium hover:text-primary transition`}>
                Success Stories
              </Link>
              <Link href="/contact" className={`${location === "/contact" ? "text-primary" : "text-gray-800"} font-medium hover:text-primary transition`}>
                Contact Us
              </Link>
            </nav>
            
            {/* Social Media Icons (Mobile) */}
            <div className="flex items-center space-x-3 md:hidden">
              <a 
                href={socialLinks.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 transition"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp text-lg"></i>
              </a>
              
              <a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700 transition"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              
              {/* Mobile Menu Button */}
              <button 
                className="text-primary focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <MenuIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white w-full border-t border-gray-100">
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
              <Link href="/" className={`${location === "/" ? "text-primary" : "text-gray-800"} font-medium hover:text-primary transition py-2 border-b border-gray-100`}>
                Home
              </Link>
              <Link href="/about" className={`${location === "/about" ? "text-primary" : "text-gray-800"} font-medium hover:text-primary transition py-2 border-b border-gray-100`}>
                About Dt. Sakshi
              </Link>
              <Link href="#zumba" className={`text-gray-800 font-medium hover:text-primary transition py-2 border-b border-gray-100`}>
                Zumba
              </Link>
              <Link href="#diet-consultation" className={`text-gray-800 font-medium hover:text-primary transition py-2 border-b border-gray-100`}>
                Diet Plans
              </Link>
              <Link href="/programs" className={`${location === "/programs" ? "text-primary" : "text-gray-800"} font-medium hover:text-primary transition py-2 border-b border-gray-100`}>
                Programs
              </Link>
              <Link href="/pricing" className={`${location === "/pricing" ? "text-primary" : "text-gray-800"} font-medium hover:text-primary transition py-2 border-b border-gray-100`}>
                How to Join
              </Link>
              <Link href="/testimonials" className={`${location === "/testimonials" ? "text-primary" : "text-gray-800"} font-medium hover:text-primary transition py-2 border-b border-gray-100`}>
                Success Stories
              </Link>
              <Link href="/contact" className={`${location === "/contact" ? "text-primary" : "text-gray-800"} font-medium hover:text-primary transition py-2 border-b border-gray-100`}>
                Contact Us
              </Link>
              <Link href="/gallery" className={`${location === "/gallery" ? "text-primary" : "text-gray-800"} font-medium hover:text-primary transition py-2 border-b border-gray-100`}>
                Gallery
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
