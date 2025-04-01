import PricingCard from "@/components/PricingCard";

export default function PricingSection() {
  const plans = [
    {
      title: "1 Month Plan",
      price: "₹1999",
      savings: "",
      popular: false,
      features: [
        "Personalized diet plan",
        "Weekly check-ins",
        "Zumba & Yoga sessions",
        "Daily progress tracking",
        "WhatsApp support"
      ]
    },
    {
      title: "3 Months Plan",
      price: "₹4499",
      savings: "Save ₹1501",
      popular: false,
      features: [
        "Personalized diet plan",
        "Weekly check-ins",
        "Zumba & Yoga sessions",
        "Daily progress tracking",
        "Priority support"
      ]
    },
    {
      title: "6 Months Plan",
      price: "₹5999",
      savings: "Save ₹6001",
      popular: true,
      features: [
        "Personalized diet plan",
        "Weekly check-ins",
        "Zumba & Yoga sessions",
        "Daily progress tracking",
        "Priority support"
      ]
    },
    {
      title: "1 Year Plan",
      price: "₹9999",
      savings: "Save ₹14001",
      popular: false,
      features: [
        "Personalized diet plan",
        "Weekly check-ins",
        "Zumba & Yoga sessions",
        "Daily progress tracking",
        "Premium support"
      ]
    }
  ];

  return (
    <section id="join" className="py-16 bg-gradient-to-b from-[#F9F5F0] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Plans & Pricing</h2>
          <div className="w-20 h-1 bg-[#D2B48C] mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto">Affordable, comprehensive nutrition plans to help you achieve your health goals.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <PricingCard 
              key={index}
              title={plan.title}
              price={plan.price}
              savings={plan.savings}
              features={plan.features}
              popular={plan.popular}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="https://wa.me/7264072630" className="inline-block bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white font-cta font-semibold py-4 px-8 rounded-lg shadow-lg transition text-lg">
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
