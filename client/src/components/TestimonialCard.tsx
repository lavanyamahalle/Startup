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
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }
    
    // Add empty stars to reach 5
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }
    
    return stars;
  };

  return (
    <div className="bg-[#F9F5F0] p-8 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-[#D2B48C]/30 rounded-full flex items-center justify-center mr-4">
          <i className="fas fa-user text-primary"></i>
        </div>
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-gray-600">{achievement}</p>
        </div>
        <div className="ml-auto">
          <div className="flex text-yellow-400">
            {renderStars()}
          </div>
        </div>
      </div>
      <p className="italic">{content}</p>
    </div>
  );
}
