import { Link } from "wouter";
import Logo from "@/components/ui/logo";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-primary mr-3">
                <Logo className="h-8 w-8" />
              </div>
              <span className="font-heading font-bold text-xl">Sustenance Wellness</span>
            </div>
            <p className="mb-6">Transforming health and managing weight naturally through the power of food as medicine.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#D2B48C] transition" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-[#D2B48C] transition" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-[#D2B48C] transition" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-white hover:text-[#D2B48C] transition" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-[#D2B48C] transition">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D2B48C] transition">About Dt. Sakshi</Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#D2B48C] transition">Programs</Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-[#D2B48C] transition">Success Stories</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D2B48C] transition">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Programs</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/programs" className="hover:text-[#D2B48C] transition">Weight Loss</Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#D2B48C] transition">Weight Gain</Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#D2B48C] transition">Therapeutic Diets</Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#D2B48C] transition">Pregnancy Diets</Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#D2B48C] transition">Child Nutrition</Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#D2B48C] transition">Fitness Diets</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3"></i>
                <a href="tel:7264072630" className="hover:text-[#D2B48C] transition">7264072630</a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3"></i>
                <a href="mailto:dt.sakshimahalle@gmail.com" className="hover:text-[#D2B48C] transition">dt.sakshimahalle@gmail.com</a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                <span>AP Pinnacle, Lonikand, Pune</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Sustenance Wellness. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
