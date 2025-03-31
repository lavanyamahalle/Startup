import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <div className="pt-8">
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-heading text-4xl font-bold text-primary text-center mb-12">Contact Us</h1>
      </div>
      
      <ContactSection />
      
      <div className="py-16 bg-[#F9F5F0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">Visit Our Clinic</h2>
            <div className="w-20 h-1 bg-[#D2B48C] mx-auto mb-8"></div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="h-96 w-full rounded-lg overflow-hidden mb-6">
              {/* Google Maps Iframe would go here */}
              <div className="bg-gray-200 h-full w-full flex items-center justify-center">
                <span className="text-gray-500">
                  <i className="fas fa-map-marked-alt text-4xl"></i>
                  <p className="text-center mt-4">Google Map Embed</p>
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#D2B48C]/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-map-marker-alt text-primary text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Address</h3>
                <p>AP Pinnacle, Lonikand, Pune</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#D2B48C]/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-clock text-primary text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Working Hours</h3>
                <p>Monday to Saturday: 10 AM - 7 PM</p>
                <p>Sunday: Closed</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#D2B48C]/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-phone-alt text-primary text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Contact</h3>
                <p><a href="tel:7264072630" className="hover:text-primary transition">7264072630</a></p>
                <p><a href="mailto:dt.sakshimahalle@gmail.com" className="hover:text-primary transition">dt.sakshimahalle@gmail.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
