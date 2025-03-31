import AboutSection from "@/components/AboutSection";

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
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#D2B48C]/40 rounded-full z-0"></div>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
                  <div className="bg-gray-200 h-80 w-full flex items-center justify-center">
                    <span className="text-gray-500">
                      <i className="fas fa-user-md text-6xl"></i>
                      <p className="text-center mt-4">Professional Photo</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-bold text-primary mb-4">Education & Experience</h3>
              <p className="text-lg mb-6">
                Dt. Sakshi Mahalle holds an MSc in Nutritional Studies and Dietetics with extensive experience in clinical nutrition and lifestyle coaching. She has successfully helped over 5000 clients worldwide achieve their health and wellness goals through personalized nutrition plans.
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
                  <span>Zumba & Yoga Instruction</span>
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
