import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <div className="relative h-screen">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Discover Your Next Outdoor Adventure
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-100">
          Explore breathtaking destinations, find exciting activities, and create unforgettable memories in the great outdoors.
        </p>
        <button
          onClick={onExploreClick}
          className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-8 rounded-full transition-colors duration-300 flex items-center font-medium text-lg shadow-lg hover:shadow-xl"
        >
          Start Exploring
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;