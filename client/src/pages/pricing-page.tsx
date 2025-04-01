import PricingSection from "@/components/PricingSection";
import CallToAction from "@/components/CallToAction";

export default function PricingPage() {
  return (
    <div className="pt-8">
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-heading text-4xl font-bold text-primary text-center mb-12">Our Plans & Pricing</h1>
      </div>
      
      <PricingSection />
      
      <div className="py-16 bg-[#F9F5F0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">What's Included</h2>
            <div className="w-20 h-1 bg-[#D2B48C] mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-[#D2B48C]/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-clipboard-list text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary text-center mb-3">Personalized Diet Plan</h3>
              <p className="text-center">Custom nutrition plan based on your lifestyle, food preferences, health conditions, and goals.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-[#D2B48C]/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-video text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary text-center mb-3">Weekly Check-ins</h3>
              <p className="text-center">Regular audio/video consultations to track progress, adjust plans, and provide ongoing support.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-[#D2B48C]/30 rounded-full flex items-center justify-center mb-4 mx-auto">
              <i className="fas fa-dumbbell text-primary text-2xl"></i>

              </div>
              <h3 className="text-xl font-bold text-primary text-center mb-3">Fitness Sessions</h3>
              <p className="text-center">Access to Zumba and Yoga sessions (5 days a week) to complement your nutrition program.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-[#D2B48C]/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-chart-line text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary text-center mb-3">Progress Tracking</h3>
              <p className="text-center">Daily tracking tools to monitor your nutrition, physical activities, and health metrics.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-[#D2B48C]/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-comments text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary text-center mb-3">Priority Support</h3>
              <p className="text-center">Direct access to Dt. Sakshi via WhatsApp, email, and text for questions and guidance.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-[#D2B48C]/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-book-open text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary text-center mb-3">Educational Resources</h3>
              <p className="text-center">Access to nutrition guides, recipes, meal planning tools, and wellness resources.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-[#F9F5F0] p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Frequently Asked Questions</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-2">Can I switch programs during my subscription period?</h4>
                <p>Yes, you can switch between programs if your health goals change. Your nutritionist will help you transition to a new program that aligns with your updated goals.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-2">Are the diet plans vegetarian-friendly?</h4>
                <p>Absolutely! We create personalized plans for all dietary preferences including vegetarian, vegan, and plant-based diets.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-2">How soon can I expect to see results?</h4>
                <p>Most clients begin to notice changes within 2-3 weeks of consistent adherence to their plan. Significant results typically appear within 1-3 months, depending on individual factors and goals.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-2">What happens if I need to pause my program?</h4>
                <p>We understand life happens. You can temporarily pause your program for up to 30 days once during your subscription period without losing any time on your plan.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-2">Can I get a refund if I'm not satisfied?</h4>
                <p>We offer a 7-day satisfaction guarantee for new clients. If you're not completely satisfied with your program within the first week, contact us to discuss refund options.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CallToAction />
    </div>
  );
}
