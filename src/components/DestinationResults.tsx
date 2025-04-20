import React from 'react';
import DestinationCard from './DestinationCard';
import { Destination } from '../types';

interface DestinationResultsProps {
  destinations: Destination[];
  onDestinationClick: (id: string) => void;
  isLoading: boolean;
}

const DestinationResults: React.FC<DestinationResultsProps> = ({ 
  destinations, 
  onDestinationClick,
  isLoading
}) => {
  if (isLoading) {
    return (
      <div className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden h-72 animate-pulse">
                <div className="bg-gray-200 h-48"></div>
                <div className="p-4">
                  <div className="bg-gray-200 h-4 w-3/4 rounded mb-2"></div>
                  <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (destinations.length === 0) {
    return (
      <div className="py-10 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No destinations found</h2>
          <p className="text-gray-500 dark:text-gray-400">Try adjusting your search criteria</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
          {destinations.length} {destinations.length === 1 ? 'destination' : 'destinations'} found
        </h2>
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
    </div>
  );
};

export default DestinationResults;