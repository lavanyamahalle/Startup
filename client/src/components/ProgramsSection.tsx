import ProgramCard from "@/components/ProgramCard";
import { Link } from "wouter";

export default function ProgramsSection() {
  const programs = [
    {
      title: "Weight Loss & Obesity Management",
      icon: "fas fa-weight",
      description: "Customized weight loss plans focusing on sustainable habits, not crash diets. Achieve healthy weight loss while maintaining energy levels."
    },
    {
      title: "Weight Gain",
      icon: "fas fa-apple-alt",
      description: "Healthy weight gain programs designed to build muscle mass and increase body weight in a balanced, nutrient-rich way."
    },
    {
      title: "Therapeutic Diets",
      icon: "fas fa-heartbeat",
      description: "Specialized nutrition plans for managing health conditions like Diabetes, Thyroid disorders, IBS, and PCOS."
    },
    {
      title: "Pregnancy & Post-Pregnancy Diets",
      icon: "fas fa-baby",
      description: "Nutritional support for expectant and new mothers, focusing on maternal and infant health through optimal nutrition."
    },
    {
      title: "Child Nutrition",
      icon: "fas fa-child",
      description: "Age-appropriate nutrition plans for children to support healthy growth, development, and establishing good eating habits."
    },
    {
      title: "Fitness & Gym Diets",
      icon: "fas fa-dumbbell",
      description: "Performance-focused nutrition plans for athletes and fitness enthusiasts to maximize workout results and recovery."
    }
  ];

  return (
    <section id="programs" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Programs Offered</h2>
          <div className="w-20 h-1 bg-[#D2B48C] mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto">Our specialized programs focus on nourishment rather than calorie-cutting, integrating diet, fitness, and lifestyle changes.</p>
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
          <Link href="/programs">
            <a className="inline-block bg-primary hover:bg-primary/90 text-white font-cta font-semibold py-3 px-6 rounded-lg shadow transition">
              View All Programs
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
