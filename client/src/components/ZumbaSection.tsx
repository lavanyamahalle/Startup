export default function ZumbaSection() {
  // WhatsApp message functions
  const handleZumbaClassInquiry = () => {
    const message = encodeURIComponent("Hi Sustenance Wellness! I'm interested in joining your Zumba classes. Could you provide schedule details and pricing?");
    window.open(`https://wa.me/7264072630?text=${message}`, '_blank');
  };

  const handleEnergyBoostInquiry = () => {
    const message = encodeURIComponent("Hi Sustenance Wellness! I'm interested in your Zumba Energy Boost program. Can you tell me more about how it helps increase energy levels?");
    window.open(`https://wa.me/7264072630?text=${message}`, '_blank');
  };

  const handleWeightManagementInquiry = () => {
    const message = encodeURIComponent("Hi Sustenance Wellness! I'd like to know more about how your Zumba classes can help with weight management. Can you provide some details?");
    window.open(`https://wa.me/7264072630?text=${message}`, '_blank');
  };

  const handleStressReliefInquiry = () => {
    const message = encodeURIComponent("Hi Sustenance Wellness! I'm interested in how your Zumba classes help with stress relief. Can you provide more information?");
    window.open(`https://wa.me/7264072630?text=${message}`, '_blank');
  };

  return (
    <section id="zumba" className="relative py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500/90 to-purple-600/90"></div>
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJ3aGl0ZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjxwYXRoIGQ9Ik02MCAzMGMwIDE2LjU2OS0xMy40MzEgMzAtMzAgMzBTMCA0Ni41NjkgMCAzMCAxMy40MzEgMCAzMCAwczMwIDEzLjQzMSAzMCAzMHpNMzAgNGMxNC4zNiAwIDI2IDExLjY0IDI2IDI2UzQ0LjM2IDU2IDMwIDU2IDQgNDQuMzYgNCAzMCAxNS42NCA0IDMwIDR6Ii8+PC9nPjwvc3ZnPg==')] bg-repeat animate-slide-pattern"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 text-white">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              <span className="relative inline-block z-10">
                Zumba Dance Fitness
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400 transform -skew-x-12"></span>
              </span>
            </h2>
            
            <p className="text-lg mb-8 leading-relaxed">
              Experience the joy of fitness through dance! Our Zumba classes blend energetic music with fun, easy-to-follow movements that create a dynamic and effective workout.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400/30 flex items-center justify-center mr-4">
                  <i className="fas fa-music text-yellow-400"></i>
                </div>
                <p className="font-medium">High-energy Latin and international rhythms</p>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400/30 flex items-center justify-center mr-4">
                  <i className="fas fa-heart text-yellow-400"></i>
                </div>
                <p className="font-medium">Burn calories while having fun</p>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400/30 flex items-center justify-center mr-4">
                  <i className="fas fa-users text-yellow-400"></i>
                </div>
                <p className="font-medium">Suitable for all fitness levels</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleZumbaClassInquiry}
                className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-8 rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <i className="fas fa-music mr-2"></i>
                Join a Class
              </button>
              
              <button 
                onClick={handleZumbaClassInquiry}
                className="inline-flex items-center bg-white hover:bg-gray-100 text-green-600 font-medium py-3 px-8 rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <i className="fab fa-whatsapp mr-2 text-lg"></i>
                WhatsApp Inquiry
              </button>
            </div>
          </div>
          
          <div className="md:w-5/12 relative">
            {/* Decorative dance silhouettes */}
            <div className="absolute -left-16 -top-10 w-24 h-36 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci11c2VyIj48cGF0aCBkPSJNMjAgMjF2LTJhNCA0IDAgMCAwLTQtNEg4YTQgNCAwIDAgMC00IDR2MiI+PC9wYXRoPjxjaXJjbGUgY3g9IjEyIiBjeT0iNyIgcj0iNCI+PC9jaXJjbGU+PC9zdmc+')] bg-no-repeat opacity-25 animate-bounce-slow"></div>
            
            <div className="relative">
              <div className="w-full h-[450px] bg-gradient-to-b from-white/20 to-white/5 rounded-xl overflow-hidden shadow-2xl border border-white/20">
                <div className="absolute inset-0 flex items-center justify-center flex-col space-y-6">
                  <div className="relative w-24 h-24 bg-white/20 rounded-full animate-pulse flex items-center justify-center">
                    <i className="fas fa-play text-white text-2xl"></i>
                  </div>
                  
                  <button 
                    onClick={handleZumbaClassInquiry}
                    className="mt-4 bg-white hover:bg-gray-100 text-pink-500 font-medium py-2 px-6 rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center"
                  >
                    <i className="fab fa-whatsapp mr-2 text-green-600"></i>
                    <span>Request Schedule</span>
                  </button>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white font-bold text-xl">Zumba Class</p>
                  <p className="text-gray-200">Feel the energy and join us!</p>
                </div>
              </div>
              
              {/* Dancing figures decoration */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1tdXNpYyI+PHBhdGggZD0iTTkgMThWNWwxMi0ydjEzIj48L3BhdGg+PGNpcmNsZSBjeD0iNiIgY3k9IjE4IiByPSIzIj48L2NpcmNsZT48Y2lyY2xlIGN4PSIxOCIgY3k9IjE2IiByPSIzIj48L2NpcmNsZT48L3N2Zz4=')] bg-no-repeat opacity-40 animate-spin-slow"></div>
            </div>
            
            {/* Class schedule badge */}
            <div className="absolute -right-10 top-5 transform rotate-12 bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg shadow-lg">
              Mon/Wed/Fri 6PM
            </div>
          </div>
        </div>
        
        {/* Class highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <button 
            onClick={handleEnergyBoostInquiry}
            className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-white/20 text-left cursor-pointer"
          >
            <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-bolt text-yellow-400"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Boost Energy</h3>
            <p className="text-gray-100">Elevate your mood and increase energy levels with our dynamic dance workouts.</p>
            <div className="mt-4 inline-flex items-center text-yellow-400">
              <span className="text-sm">Contact on WhatsApp</span>
              <i className="fab fa-whatsapp ml-2"></i>
            </div>
          </button>
          
          <button 
            onClick={handleWeightManagementInquiry}
            className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-white/20 text-left cursor-pointer"
          >
            <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-weight text-yellow-400"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Weight Management</h3>
            <p className="text-gray-100">Burn up to 600 calories per class while enjoying the vibrant atmosphere.</p>
            <div className="mt-4 inline-flex items-center text-yellow-400">
              <span className="text-sm">Contact on WhatsApp</span>
              <i className="fab fa-whatsapp ml-2"></i>
            </div>
          </button>
          
          <button 
            onClick={handleStressReliefInquiry}
            className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-white/20 text-left cursor-pointer"
          >
            <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-smile-beam text-yellow-400"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Stress Relief</h3>
            <p className="text-gray-100">Relieve stress, improve coordination, and boost your confidence through dance.</p>
            <div className="mt-4 inline-flex items-center text-yellow-400">
              <span className="text-sm">Contact on WhatsApp</span>
              <i className="fab fa-whatsapp ml-2"></i>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}