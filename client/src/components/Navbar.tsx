import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import Logo from "@/components/ui/logo";
import { MenuIcon } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  
  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
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
            <Link href="/gallery" className={`${location === "/gallery" ? "text-primary" : "text-gray-800"} font-medium hover:text-primary transition`}>
              Gallery
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
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
  );
}
