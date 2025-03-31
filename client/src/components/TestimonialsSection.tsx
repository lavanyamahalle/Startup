import { useState } from "react";
import TestimonialCard from "@/components/TestimonialCard";

export default function TestimonialsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      name: "Priya Sharma",
      category: "weight-loss",
      achievement: "Lost 15 kg in 6 months",
      rating: 5,
      content: "Dt. Sakshi's approach to weight loss transformed my relationship with food. No crash diets, just sustainable habits that helped me lose 15kg and keep it off. The weekly check-ins kept me accountable and motivated."
    },
    {
      name: "Rajesh Patel",
      category: "diabetes",
      achievement: "Diabetes Management",
      rating: 5,
      content: "After being diagnosed with Type 2 diabetes, I was overwhelmed. Dt. Sakshi provided a clear plan that has helped me manage my blood sugar levels naturally. My doctor is impressed with my progress, and I've reduced my medication."
    },
    {
      name: "Aditya Verma",
      category: "weight-gain",
      achievement: "Gained 8 kg of muscle",
      rating: 4.5,
      content: "Always struggled to gain weight despite heavy gym routines. Dt. Sakshi's customized nutrition plan helped me put on 8kg of quality muscle mass in 4 months. The meal timing and macronutrient distribution made all the difference."
    },
    {
      name: "Neha Gupta",
      category: "therapeutic",
      achievement: "PCOS Management",
      rating: 5,
      content: "Living with PCOS was affecting every aspect of my life. After following Dt. Sakshi's therapeutic diet for 6 months, my symptoms have dramatically improved. My hormones are more balanced, and I've lost weight that was impossible to shed before."
    }
  ];
  
  // Filter testimonials based on active category
  const filteredTestimonials = activeCategory === "all" 
    ? testimonials 
    : testimonials.filter(t => t.category === activeCategory);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredTestimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  return (
    <section id="success" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Success Stories</h2>
          <div className="w-20 h-1 bg-[#D2B48C] mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto">See how Sustenance Wellness has transformed lives through personalized nutrition and lifestyle guidance.</p>
        </div>
        
        {/* Testimonial Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              className={`${activeCategory === "all" ? "bg-primary text-white" : "bg-white border border-primary text-primary"} py-2 px-6 rounded-full`}
              onClick={() => {
                setActiveCategory("all");
                setCurrentSlide(0);
              }}
            >
              All Stories
            </button>
            <button 
              className={`${activeCategory === "weight-loss" ? "bg-primary text-white" : "bg-white border border-primary text-primary"} py-2 px-6 rounded-full`}
              onClick={() => {
                setActiveCategory("weight-loss");
                setCurrentSlide(0);
              }}
            >
              Weight Loss
            </button>
            <button 
              className={`${activeCategory === "weight-gain" ? "bg-primary text-white" : "bg-white border border-primary text-primary"} py-2 px-6 rounded-full`}
              onClick={() => {
                setActiveCategory("weight-gain");
                setCurrentSlide(0);
              }}
            >
              Weight Gain
            </button>
            <button 
              className={`${activeCategory === "therapeutic" ? "bg-primary text-white" : "bg-white border border-primary text-primary"} py-2 px-6 rounded-full`}
              onClick={() => {
                setActiveCategory("therapeutic");
                setCurrentSlide(0);
              }}
            >
              Therapeutic Diets
            </button>
            <button 
              className={`${activeCategory === "diabetes" ? "bg-primary text-white" : "bg-white border border-primary text-primary"} py-2 px-6 rounded-full`}
              onClick={() => {
                setActiveCategory("diabetes");
                setCurrentSlide(0);
              }}
            >
              Diabetes Management
            </button>
          </div>
        </div>
        
        {/* Testimonial Slider */}
        <div className="testimonial-slider">
          {filteredTestimonials.length > 0 ? (
            <TestimonialCard
              name={filteredTestimonials[currentSlide].name}
              achievement={filteredTestimonials[currentSlide].achievement}
              rating={filteredTestimonials[currentSlide].rating}
              content={filteredTestimonials[currentSlide].content}
            />
          ) : (
            <div className="text-center py-8">
              <p>No testimonials found for this category.</p>
            </div>
          )}
        </div>
        
        {filteredTestimonials.length > 1 && (
          <div className="flex justify-center mt-8">
            <button 
              onClick={prevSlide}
              className="mx-2 bg-white border border-primary text-primary w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button 
              onClick={nextSlide}
              className="mx-2 bg-white border border-primary text-primary w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
