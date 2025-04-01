import ProgramsSection from "@/components/ProgramsSection";
import ProgramCard from "@/components/ProgramCard";
import skinHairCareImg from "./imagess/skin-hair-care.jpg";
import seniorNutritionImg from "./imagess/senior-nutrition.jpg";
import sportsNutritionImg from "./imagess/sports-nutrition.jpg";
import corporateWellnessImg from "./imagess/corporate-wellness.jpg";
import approach from "./imagess/approach.jpg"
export default function ProgramsPage() {
  const extraPrograms = [
    {
      title: "Skin & Hair Care",
      icon: skinHairCareImg,  // Updated to image
      description: "Nutritional approach to improving skin health and hair quality through targeted diet modifications and supplements recommendations."
    },
    {
      title: "Senior Nutrition",
      icon: seniorNutritionImg,  // Updated to image
      description: "Specialized nutrition plans for older adults focusing on maintaining muscle mass, bone density, and supporting overall health."
    },
    {
      title: "Sports Nutrition",
      icon: sportsNutritionImg,  // Updated to image
      description: "Performance-focused nutrition for athletes looking to optimize energy levels, recovery, and overall athletic performance."
    },
    {
      title: "Corporate Wellness",
      icon: corporateWellnessImg,  // Updated to image
      description: "Wellness programs for organizations aimed at improving employee health, reducing sick days, and boosting productivity."
    }
  ];
  

  return (
    <div className="pt-8">
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-heading text-4xl font-bold text-primary text-center mb-12">Our Programs</h1>
      </div>
      
      <ProgramsSection />
      
      <div className="py-16 bg-[#F9F5F0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">Additional Specialized Programs</h2>
            <div className="w-20 h-1 bg-[#D2B48C] mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Beyond our core offerings, we provide these specialized programs to address specific health and wellness needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {extraPrograms.map((program, index) => (
              <ProgramCard
                key={index}
                title={program.title}
                icon={program.icon}
                description={program.description}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">Our Approach</h2>
            <div className="w-20 h-1 bg-[#D2B48C] mx-auto mb-8"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h3 className="text-2xl font-bold text-primary mb-4">Food as Medicine</h3>
              <p className="text-lg mb-6">
                At Sustenance Wellness, we believe in the power of food as medicine. Our approach focuses on nourishment rather than restriction. We don't just count calories; we make every calorie count with nutrient-dense whole foods that support your body's natural healing processes.
              </p>
              
              <h3 className="text-2xl font-bold text-primary mb-4">Sustainable Lifestyle Changes</h3>
              <p className="text-lg mb-6">
                Our programs are designed to create lasting changes, not quick fixes. We work with you to develop sustainable habits that fit your lifestyle, preferences, and health goals for long-term success.
              </p>
              
              <h3 className="text-2xl font-bold text-primary mb-4">Holistic Wellness</h3>
              <p className="text-lg">
                We believe true wellness encompasses physical, mental, and emotional health. Our comprehensive approach includes nutrition, physical activity, stress management, and sufficient rest to achieve overall wellbeing.
              </p>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full z-0"></div>
                <div className="relative z-10 bg-gray-200 rounded-lg overflow-hidden h-96 w-full">
                  <div className="h-full w-full flex items-center justify-center">
                  <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
              <img src={approach} alt="Clinic" className="w-full h-full object-cover" />
              </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
