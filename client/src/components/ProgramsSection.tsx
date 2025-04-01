// src/components/ProgramsSection.tsx
import ProgramCard from "./ProgramCard";
import { Link } from "wouter";
import weightLossImg from "./images/wloss.jpg";
import weightGainImg from "./images/wgain.jpg";
import therapeuticDietsImg from "./images/the.jpg";
import pregnancyDietsImg from "./images/preg.jpg";
import childNutritionImg from "./images/child.jpg";
import fitnessDietsImg from "./images/fit.jpg";


  export default function ProgramsSection() {
    const programs = [
      {
        title: "Weight Loss & Obesity Management",
        icon: weightLossImg, // Pass image as a prop
        description: "Customized weight loss plans focusing on sustainable habits, not crash diets. Achieve healthy weight loss while maintaining energy levels."
      },
      {
        title: "Weight Gain",
        icon: weightGainImg, // Pass image as a prop
        description: "Healthy weight gain programs designed to build muscle mass and increase body weight in a balanced, nutrient-rich way."
      },
      {
        title: "Therapeutic Diets",
        icon: therapeuticDietsImg, // Pass image as a prop
        description: "Specialized nutrition plans for managing health conditions like Diabetes, Thyroid disorders, IBS, and PCOS."
      },
      {
        title: "Pregnancy & Post-Pregnancy Diets",
        icon: pregnancyDietsImg, // Pass image as a prop
        description: "Nutritional support for expectant and new mothers, focusing on maternal and infant health through optimal nutrition."
      },
      {
        title: "Child Nutrition",
        icon: childNutritionImg, // Pass image as a prop
        description: "Age-appropriate nutrition plans for children to support healthy growth, development, and establishing good eating habits."
      },
      {
        title: "Fitness & Gym Diets",
        icon: fitnessDietsImg, // Pass image as a prop
        description: "Performance-focused nutrition plans for athletes and fitness enthusiasts to maximize workout results and recovery."
      }
    
  ];
  
  return (
    <section id="programs" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4 inline-block section-title after:left-1/4 after:right-1/4 after:w-1/2">Programs Offered</h2>
          <p className="text-lg max-w-3xl mx-auto mt-8">Our specialized programs focus on nourishment rather than calorie-cutting, integrating diet, fitness, and lifestyle changes for sustainable results.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              icon={program.icon}
              description={program.description}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/programs" className="inline-block bg-primary hover:bg-primary/90 text-white font-cta font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 no-hover-effect">
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
