import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToAction from "@/components/CallToAction";
import ContactSection from "@/components/ContactSection";
import ZumbaSection from "@/components/ZumbaSection";
import DietConsultationSection from "@/components/DietConsultationSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <div className="py-16 bg-[#F9F5F0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4 inline-block section-title after:left-1/4 after:right-1/4 after:w-1/2">Why Choose Sustenance Wellness?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover-card">
              <div className="w-16 h-16 bg-[#D2B48C]/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-user-check text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary text-center mb-3">Personalized Approach</h3>
              <p className="text-center">Custom diet and nutrition plans tailored to your unique body, lifestyle, and health goals.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover-card">
              <div className="w-16 h-16 bg-[#D2B48C]/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-users text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary text-center mb-3">5000+ Happy Clients</h3>
              <p className="text-center">Join our global community of satisfied clients who have successfully transformed their health.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover-card">
              <div className="w-16 h-16 bg-[#D2B48C]/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-balance-scale text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary text-center mb-3">Holistic Approach</h3>
              <p className="text-center">Comprehensive wellness programs that integrate diet, fitness, and lifestyle modifications.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover-card">
              <div className="w-16 h-16 bg-[#D2B48C]/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-graduation-cap text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary text-center mb-3">Expert Guidance</h3>
              <p className="text-center">Professional support from Dt. Sakshi Mahalle with advanced nutrition education and expertise.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our two main services */}
      <ZumbaSection />
      <DietConsultationSection />
      
      <ProgramsSection />
      <PricingSection />
      <TestimonialsSection />
      <CallToAction />
      <ContactSection />
    </div>
  );
}
