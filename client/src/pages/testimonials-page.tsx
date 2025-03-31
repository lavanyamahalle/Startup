import { useState } from "react";
import TestimonialsSection from "@/components/TestimonialsSection";
import TestimonialCard from "@/components/TestimonialCard";

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const allTestimonials = [
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
    },
    {
      name: "Sanjay Kapoor",
      category: "weight-loss",
      achievement: "Lost 22 kg in 8 months",
      rating: 5,
      content: "At 52, I thought it was too late to get in shape. Dt. Sakshi proved me wrong! Her personalized approach helped me lose 22kg, reduce my blood pressure, and feel more energetic than I have in decades."
    },
    {
      name: "Meera Desai",
      category: "therapeutic",
      achievement: "Thyroid Management",
      rating: 4.5,
      content: "Managing hypothyroidism was a constant struggle until I met Dt. Sakshi. Her nutritional guidance and lifestyle recommendations have helped stabilize my hormone levels and significantly reduce my symptoms."
    },
    {
      name: "Arjun Singh",
      category: "diabetes",
      achievement: "Reversed pre-diabetes",
      rating: 5,
      content: "When my doctor warned me about pre-diabetes, I knew I needed to make changes. With Dt. Sakshi's nutrition plan, I've reversed my pre-diabetic condition and improved all my health markers within 6 months."
    },
    {
      name: "Kavita Sharma",
      category: "weight-gain",
      achievement: "Healthy pregnancy weight gain",
      rating: 5,
      content: "As an underweight mother-to-be, I was concerned about healthy weight gain during pregnancy. Dt. Sakshi's pregnancy nutrition plan helped me gain appropriate weight while ensuring my baby received optimal nutrition."
    }
  ];
  
  const filteredTestimonials = activeCategory === "all" 
    ? allTestimonials 
    : allTestimonials.filter(t => t.category === activeCategory);

  return (
    <div className="pt-8">
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-heading text-4xl font-bold text-primary text-center mb-12">Success Stories</h1>
      </div>
      
      <TestimonialsSection />
      
      <div className="py-16 bg-[#F9F5F0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">More Success Stories</h2>
            <div className="w-20 h-1 bg-[#D2B48C] mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">Real transformations from real people who have experienced the Sustenance Wellness difference.</p>
          </div>
          
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                className={`${activeCategory === "all" ? "bg-primary text-white" : "bg-white border border-primary text-primary"} py-2 px-6 rounded-full`}
                onClick={() => setActiveCategory("all")}
              >
                All Stories
              </button>
              <button 
                className={`${activeCategory === "weight-loss" ? "bg-primary text-white" : "bg-white border border-primary text-primary"} py-2 px-6 rounded-full`}
                onClick={() => setActiveCategory("weight-loss")}
              >
                Weight Loss
              </button>
              <button 
                className={`${activeCategory === "weight-gain" ? "bg-primary text-white" : "bg-white border border-primary text-primary"} py-2 px-6 rounded-full`}
                onClick={() => setActiveCategory("weight-gain")}
              >
                Weight Gain
              </button>
              <button 
                className={`${activeCategory === "therapeutic" ? "bg-primary text-white" : "bg-white border border-primary text-primary"} py-2 px-6 rounded-full`}
                onClick={() => setActiveCategory("therapeutic")}
              >
                Therapeutic Diets
              </button>
              <button 
                className={`${activeCategory === "diabetes" ? "bg-primary text-white" : "bg-white border border-primary text-primary"} py-2 px-6 rounded-full`}
                onClick={() => setActiveCategory("diabetes")}
              >
                Diabetes Management
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                achievement={testimonial.achievement}
                rating={testimonial.rating}
                content={testimonial.content}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary mb-6">Share Your Success Story</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Have you achieved your health and wellness goals with Sustenance Wellness? We'd love to hear about your transformation journey!
          </p>
          <button className="bg-primary hover:bg-primary/90 text-white font-cta font-semibold py-3 px-8 rounded-lg shadow transition">
            Submit Your Story
          </button>
        </div>
      </div>
    </div>
  );
}
