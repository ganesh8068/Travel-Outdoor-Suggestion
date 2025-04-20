import React from 'react';
import { Heart, MapPin, Star } from 'lucide-react';
import { Destination } from '../types';
import WeatherDisplay from './WeatherDisplay';

interface DestinationCardProps {
  destination: Destination;
  onClick: (id: string) => void;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, onClick }) => {
  const { id, name, location, imageUrl, rating, reviewCount, activities, weather } = destination;

  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
      onClick={() => onClick(id)}
    >
      <div className="relative h-48">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <button 
          className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            // Handle favorite toggle logic
          }}
        >
          <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg text-gray-800 line-clamp-1">{name}</h3>
            <div className="flex items-center text-gray-500 mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{location}</span>
            </div>
          </div>
          
          {weather && (
            <WeatherDisplay weather={weather} />
          )}
        </div>
        
        <div className="mt-3 flex items-center">
          <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
          <span className="ml-1 font-medium">{rating}</span>
          <span className="text-gray-500 text-sm ml-1">({reviewCount} reviews)</span>
        </div>
        
        <div className="mt-3">
          <div className="flex flex-wrap gap-1">
            {activities.slice(0, 3).map((activity, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
              >
                {activity}
              </span>
            ))}
            {activities.length > 3 && (
              <span className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded-full">
                +{activities.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;