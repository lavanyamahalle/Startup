import AboutSection from "@/components/AboutSection";
import sakpic from "./imagess/sakpic.jpg"
export default function AboutPage() {
  return (
    <div className="pt-8">
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-heading text-4xl font-bold text-primary text-center mb-12">About Dt. Sakshi</h1>
      </div>
      <AboutSection />
      
      <div className="py-16 bg-[#F9F5F0]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 ">
              
                    
                    <img src={sakpic} alt="Clinic" className="w-100 h-500" />
                      
                    
                  
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-bold text-primary mb-4">Education & Experience</h3>
              <p className="text-lg mb-6">
                Dt. Sakshi Mahalle holds an MSc in Nutritional Sciences and Dietetics with extensive experience in clinical nutrition and lifestyle coaching. She has successfully helped over 5000+ clients worldwide achieve their health and wellness goals through personalized nutrition plans.
              </p>
              
              <h4 className="font-bold text-xl mb-4">Specializations</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mr-3 mt-1"></i>
                  <span>Clinical Nutrition & Medical Diet Plans</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mr-3 mt-1"></i>
                  <span>Weight Management (Loss & Gain)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mr-3 mt-1"></i>
                  <span>Gut Health & Digestive Disorders</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mr-3 mt-1"></i>
                  <span>Diabetes & Metabolic Disorders</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mr-3 mt-1"></i>
                  <span>Zumba & Yoga Instructor</span>
                </li>
              </ul>
              
              <p className="text-lg italic">
                "My approach to nutrition combines scientific knowledge with practical, sustainable lifestyle changes that work for real people in their everyday lives."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
