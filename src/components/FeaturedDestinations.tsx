import React from 'react';
import DestinationCard from './DestinationCard';
import { Destination } from '../types';

interface FeaturedDestinationsProps {
  destinations: Destination[];
  onDestinationClick: (id: string) => void;
}

const FeaturedDestinations: React.FC<FeaturedDestinationsProps> = ({ 
  destinations, 
  onDestinationClick 
}) => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800" id="destinations">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Destinations</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover these amazing outdoor destinations recommended by our nature enthusiasts and adventure seekers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard 
              key={destination.id}
              destination={destination}
              onClick={onDestinationClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;