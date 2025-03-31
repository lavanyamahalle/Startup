interface TestimonialCardProps {
  name: string;
  achievement: string;
  rating: number;
  content: string;
}

export default function TestimonialCard({ name, achievement, rating, content }: TestimonialCardProps) {
  // Convert rating to array of stars
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <i 
          key={`full-${i}`} 
          className="fas fa-star transform transition-transform hover:scale-110 hover:text-yellow-500"
          style={{ transitionDelay: `${i * 50}ms` }}
        ></i>
      );
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <i 
          key="half" 
          className="fas fa-star-half-alt transform transition-transform hover:scale-110 hover:text-yellow-500"
          style={{ transitionDelay: `${fullStars * 50}ms` }}
        ></i>
      );
    }
    
    // Add empty stars to reach 5
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i 
          key={`empty-${i}`} 
          className="far fa-star transform transition-transform hover:scale-110 hover:text-yellow-500"
          style={{ transitionDelay: `${(fullStars + (hasHalfStar ? 1 : 0) + i) * 50}ms` }}
        ></i>
      );
    }
    
    return stars;
  };

  return (
    <div className="bg-[#F9F5F0] p-8 rounded-lg shadow-md hover-card relative">
      <div className="absolute -top-3 -right-3 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center z-10">
        <span className="text-primary font-bold">{rating.toFixed(1)}</span>
      </div>
      
      <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#D2B48C]/40 rounded-full z-0"></div>
      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary/20 rounded-full z-0"></div>
      
      <div className="mb-2 flex text-yellow-400 justify-end space-x-1">
        {renderStars()}
      </div>
      
      <div className="relative bg-white p-4 rounded-lg mb-8 shadow-sm">
        <div className="absolute -bottom-4 left-8 w-8 h-8 bg-white transform rotate-45"></div>
        <p className="italic text-gray-700 relative z-10">{content}</p>
      </div>
      
      <div className="flex items-center">
        <div className="w-16 h-16 overflow-hidden rounded-full border-2 border-[#D2B48C] fancy-image-frame flex items-center justify-center mr-4">
          <i className="fas fa-user text-primary text-xl"></i>
        </div>
        <div>
          <h4 className="font-bold text-lg text-primary">{name}</h4>
          <p className="text-gray-600">{achievement}</p>
        </div>
      </div>
    </div>
  );
}
