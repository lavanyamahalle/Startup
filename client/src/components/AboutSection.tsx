export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">About Sustenance Wellness</h2>
          <div className="w-20 h-1 bg-[#D2B48C] mx-auto mb-8"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#D2B48C]/40 rounded-full z-0"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
                <div className="bg-gray-200 h-80 w-full flex items-center justify-center">
                  <span className="text-gray-500">
                    <i className="fas fa-clinic-medical text-6xl"></i>
                    <p className="text-center mt-4">Wellness Clinic Photo</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-lg mb-6">
              At Sustenance Wellness, we help individuals overcome health challenges and adopt a sustainable healthy lifestyle. We believe in the power of nutrition and personalized care to transform lives naturally.
            </p>
            
            <div className="bg-[#F9F5F0] p-6 rounded-lg mb-8">
              <h4 className="font-bold text-xl mb-4">Contact Information</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-phone-alt text-primary mr-3"></i>
                  <a href="tel:7264072630" className="hover:text-primary transition">7264072630</a>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope text-primary mr-3"></i>
                  <a href="mailto:dt.sakshimahalle@gmail.com" className="hover:text-primary transition">dt.sakshimahalle@gmail.com</a>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt text-primary mr-3 mt-1"></i>
                  <span>AP Pinnacle, Lonikand, Pune</span>
                </li>
              </ul>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-[#D2B48C] transition" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-[#D2B48C] transition" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-[#D2B48C] transition" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
