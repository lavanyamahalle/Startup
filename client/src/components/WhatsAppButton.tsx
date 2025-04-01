import { useState, useEffect } from 'react';

// Define CSS animation for the bounce effect
const bounceAnimation = `
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}

.bounce {
  animation: bounce 2s infinite;
}

@keyframes pulse-ring {
  0% {
    transform: scale(0.8);
    opacity: 0.8;
  }
  70% {
    transform: scale(1.2);
    opacity: 0;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}

.pulse-ring::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgba(37, 211, 102, 0.6);
  animation: pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
  z-index: -1;
}
`;

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [bounce, setBounce] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device on component mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Check initially
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Show button after scrolling down a bit
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
        // Trigger bounce animation every 5 seconds
        if (!bounce) {
          setBounce(true);
          setTimeout(() => setBounce(false), 2000);
        }
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Start interval for bounce animation every 5 seconds
    const bounceInterval = setInterval(() => {
      if (isVisible && !bounce) {
        setBounce(true);
        setTimeout(() => setBounce(false), 2000);
      }
    }, 5000);
    
    // Clean up event listeners
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      clearInterval(bounceInterval);
    };
  }, [isVisible, bounce]);

  const handleWhatsAppClick = () => {
    // Don't trigger WhatsApp on tooltip display for mobile
    if (isMobile && isHovered) {
      setIsHovered(false);
      return;
    }
    
    // The WhatsApp number is from the user requirements
    window.open('https://wa.me/7264072630?text=Hi%20Sustenance%20Wellness!%20I%27m%20interested%20in%20your%20services.', '_blank');
  };
  
  // For mobile, show tooltip on first click, open WhatsApp on second click
  const handleTouchStart = () => {
    if (isMobile && !isHovered) {
      setIsHovered(true);
      // Auto-hide tooltip after 3 seconds
      setTimeout(() => setIsHovered(false), 3000);
    }
  };

  // Add the animation styles to the document
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = bounceAnimation;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <button
      onClick={handleWhatsAppClick}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onTouchStart={handleTouchStart}
      className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 bg-green-500 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } ${bounce ? 'bounce' : ''} ${isHovered ? 'scale-110' : 'scale-100'} pulse-ring`}
      aria-label="Contact on WhatsApp"
    >
      <div className="relative">
        <i className="fab fa-whatsapp text-2xl sm:text-3xl"></i>
        
        {/* Desktop tooltip */}
        {isHovered && (
          <div className="hidden sm:block absolute left-full ml-4 top-1/2 transform -translate-y-1/2 bg-white text-green-600 rounded-lg shadow-lg py-2 px-4 whitespace-nowrap">
            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45"></div>
            <span className="font-semibold">Chat with us now!</span>
          </div>
        )}
        
        {/* Mobile tooltip - shows above the button */}
        {isHovered && (
          <div className="sm:hidden absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 bg-white text-green-600 rounded-lg shadow-lg py-2 px-4 whitespace-nowrap">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-white rotate-45"></div>
            <span className="font-semibold text-sm">Tap again to chat</span>
          </div>
        )}
      </div>
    </button>
  );
}
