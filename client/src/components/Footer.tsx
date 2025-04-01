import { Link } from "wouter";
import Logo from "@/components/ui/logo";

export default function Footer() {
  // Social media links
  const socialLinks = {
    whatsapp: "https://wa.me/7264072630",
    instagram: "https://instagram.com/sustenance_wellness", // Replace with actual Instagram URL
    linkedin: "https://linkedin.com/in/sustenance-wellness", // Replace with actual LinkedIn URL
    youtube: "https://youtube.com/channel/sustenance-wellness" // Replace with actual YouTube URL
  };

  return (
    <footer className="bg-primary text-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        {/* Mobile Quick Contact - Only shows on smallest screens */}
        <div className="flex flex-col sm:hidden mb-8 items-center text-center">
          <div className="flex items-center space-x-3 mb-4">
            <a 
              href="tel:7264072630" 
              className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center text-white hover:text-[#D2B48C] transition-all duration-300" 
              aria-label="Call"
            >
              <i className="fas fa-phone-alt"></i>
            </a>
            <a 
              href="https://wa.me/7264072630" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center text-white hover:text-[#D2B48C] transition-all duration-300" 
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a 
              href="mailto:dt.sakshimahalle@gmail.com" 
              className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center text-white hover:text-[#D2B48C] transition-all duration-300" 
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <span className="text-sm">AP Pinnacle, Lonikand, Pune</span>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center justify-center sm:justify-start mb-6">
              <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-primary mr-3 hover-card">
                <Logo className="h-8 w-8" />
              </div>
              <span className="font-heading font-bold text-xl">Sustenance Wellness</span>
            </div>
            <p className="mb-6 text-sm sm:text-base text-center sm:text-left">Transforming health and managing weight naturally through the power of food as medicine and energizing physical activity.</p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a 
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white hover:text-[#D2B48C] transition-all duration-300 hover-card" 
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp text-lg"></i>
              </a>
              <a 
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white hover:text-[#D2B48C] transition-all duration-300 hover-card" 
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white hover:text-[#D2B48C] transition-all duration-300 hover-card" 
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
              <a 
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white hover:text-[#D2B48C] transition-all duration-300 hover-card" 
                aria-label="YouTube"
              >
                <i className="fab fa-youtube text-lg"></i>
              </a>
            </div>
          </div>
          
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-1/2 after:bg-[#D2B48C]">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/" className="hover:text-[#D2B48C] transition flex items-center justify-center sm:justify-start">
                  <i className="fas fa-chevron-right mr-2 text-xs text-[#D2B48C]"></i>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D2B48C] transition flex items-center justify-center sm:justify-start">
                  <i className="fas fa-chevron-right mr-2 text-xs text-[#D2B48C]"></i>
                  <span>About Dt. Sakshi</span>
                </Link>
              </li>
              <li>
                <Link href="#zumba" className="hover:text-[#D2B48C] transition flex items-center justify-center sm:justify-start">
                  <i className="fas fa-chevron-right mr-2 text-xs text-[#D2B48C]"></i>
                  <span>Zumba Classes</span>
                </Link>
              </li>
              <li>
                <Link href="#diet-consultation" className="hover:text-[#D2B48C] transition flex items-center justify-center sm:justify-start">
                  <i className="fas fa-chevron-right mr-2 text-xs text-[#D2B48C]"></i>
                  <span>Diet Consultation</span>
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#D2B48C] transition flex items-center justify-center sm:justify-start">
                  <i className="fas fa-chevron-right mr-2 text-xs text-[#D2B48C]"></i>
                  <span>Programs</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D2B48C] transition flex items-center justify-center sm:justify-start">
                  <i className="fas fa-chevron-right mr-2 text-xs text-[#D2B48C]"></i>
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-1/2 after:bg-[#D2B48C]">Programs</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/programs" className="hover:text-[#D2B48C] transition flex items-center justify-center sm:justify-start">
                  <i className="fas fa-chevron-right mr-2 text-xs text-[#D2B48C]"></i>
                  <span>Weight Loss</span>
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#D2B48C] transition flex items-center justify-center sm:justify-start">
                  <i className="fas fa-chevron-right mr-2 text-xs text-[#D2B48C]"></i>
                  <span>Weight Gain</span>
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#D2B48C] transition flex items-center justify-center sm:justify-start">
                  <i className="fas fa-chevron-right mr-2 text-xs text-[#D2B48C]"></i>
                  <span>Therapeutic Diets</span>
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#D2B48C] transition flex items-center justify-center sm:justify-start">
                  <i className="fas fa-chevron-right mr-2 text-xs text-[#D2B48C]"></i>
                  <span>Pregnancy Diets</span>
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#D2B48C] transition flex items-center justify-center sm:justify-start">
                  <i className="fas fa-chevron-right mr-2 text-xs text-[#D2B48C]"></i>
                  <span>Child Nutrition</span>
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#D2B48C] transition flex items-center justify-center sm:justify-start">
                  <i className="fas fa-chevron-right mr-2 text-xs text-[#D2B48C]"></i>
                  <span>Fitness Diets</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="hidden sm:block">
            <h4 className="text-lg font-bold mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-1/2 after:bg-[#D2B48C]">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-white/20 transition-all duration-300">
                  <i className="fas fa-phone-alt text-[#D2B48C] group-hover:text-white transition-colors duration-300"></i>
                </div>
                <div>
                  <p className="text-white/70 text-xs">Call Us</p>
                  <a href="tel:7264072630" className="hover:text-[#D2B48C] transition">7264072630</a>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-white/20 transition-all duration-300">
                  <i className="fas fa-envelope text-[#D2B48C] group-hover:text-white transition-colors duration-300"></i>
                </div>
                <div>
                  <p className="text-white/70 text-xs">Email</p>
                  <a href="mailto:dt.sakshimahalle@gmail.com" className="hover:text-[#D2B48C] transition">dt.sakshimahalle@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-white/20 transition-all duration-300">
                  <i className="fas fa-map-marker-alt text-[#D2B48C] group-hover:text-white transition-colors duration-300"></i>
                </div>
                <div>
                  <p className="text-white/70 text-xs">Location</p>
                  <span>AP Pinnacle, Lonikand, Pune</span>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-white/20 transition-all duration-300">
                  <i className="fas fa-clock text-[#D2B48C] group-hover:text-white transition-colors duration-300"></i>
                </div>
                <div>
                  <p className="text-white/70 text-xs">Working Hours</p>
                  <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 text-center">
          <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Sustenance Wellness. All Rights Reserved.</p>
          <div className="mt-2">
            <span className="text-xs sm:text-sm text-white/60">Developed with ❤️ for a healthier world</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
