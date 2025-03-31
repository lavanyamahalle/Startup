import { useState } from "react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  // For the gallery, we would normally use real images, but as per instructions
  // we're using placeholders and would use actual CDN images in production
  const galleryItems = [
    { category: "clinic", title: "Our Clinic", description: "Our wellness facility in Pune" },
    { category: "clinic", title: "Consultation Room", description: "Where personalized nutrition plans are created" },
    { category: "events", title: "Nutrition Workshop", description: "Community workshop on healthy eating" },
    { category: "events", title: "Wellness Seminar", description: "Educational event for local healthcare professionals" },
    { category: "transformations", title: "Weight Loss Journey", description: "Client transformation over 6 months" },
    { category: "transformations", title: "Fitness Transformation", description: "Before and after with our nutrition program" },
    { category: "sessions", title: "Group Yoga Session", description: "Weekly yoga classes for clients" },
    { category: "sessions", title: "Zumba Classes", description: "Fun fitness sessions with Dt. Sakshi" },
    { category: "food", title: "Healthy Meal Prep", description: "Nutritious meal preparation demonstration" },
    { category: "food", title: "Recipe Workshop", description: "Learning to prepare balanced meals" },
    { category: "team", title: "Our Team", description: "Sustenance Wellness professional staff" },
    { category: "certifications", title: "Professional Certifications", description: "Dt. Sakshi's qualifications and achievements" }
  ];
  
  const filteredGallery = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-8">
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-heading text-4xl font-bold text-primary text-center mb-12">Gallery</h1>
        
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              className={`${activeCategory === "all" ? "bg-primary text-white" : "bg-white border border-primary text-primary"} py-2 px-6 rounded-full`}
              onClick={() => setActiveCategory("all")}
            >
              All Photos
            </button>
            <button 
              className={`${activeCategory === "clinic" ? "bg-primary text-white" : "bg-white border border-primary text-primary"} py-2 px-6 rounded-full`}
              onClick={() => setActiveCategory("clinic")}
            >
              Our Clinic
            </button>
            <button 
              className={`${activeCategory === "events" ? "bg-primary text-white" : "bg-white border border-primary text-primary"} py-2 px-6 rounded-full`}
              onClick={() => setActiveCategory("events")}
            >
              Events
            </button>
            <button 
              className={`${activeCategory === "transformations" ? "bg-primary text-white" : "bg-white border border-primary text-primary"} py-2 px-6 rounded-full`}
              onClick={() => setActiveCategory("transformations")}
            >
              Transformations
            </button>
            <button 
              className={`${activeCategory === "sessions" ? "bg-primary text-white" : "bg-white border border-primary text-primary"} py-2 px-6 rounded-full`}
              onClick={() => setActiveCategory("sessions")}
            >
              Sessions
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item, index) => (
            <div key={index} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="relative h-64 bg-gray-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className={`fas fa-${item.category === 'clinic' ? 'building' : 
                                        item.category === 'events' ? 'calendar-day' : 
                                        item.category === 'transformations' ? 'exchange-alt' : 
                                        item.category === 'sessions' ? 'users' : 
                                        item.category === 'food' ? 'utensils' : 
                                        item.category === 'team' ? 'user-friends' : 'certificate'} text-5xl text-gray-400`}></i>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-primary mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
