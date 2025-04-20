import React from 'react';
import { MapPin, Star, Calendar, Users, ArrowLeft, Bookmark, Share2 } from 'lucide-react';
import { Destination } from '../types';
import WeatherDisplay from './WeatherDisplay';

interface DestinationDetailProps {
  destination: Destination;
  onBack: () => void;
}

const DestinationDetail: React.FC<DestinationDetailProps> = ({ destination, onBack }) => {
  const { name, location, description, activities, imageUrl, rating, reviewCount, weather } = destination;

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen pt-16">
      {/* Back button */}
      <button 
        onClick={onBack}
        className="absolute top-20 left-4 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors"
      >
        <ArrowLeft className="h-5 w-5 text-gray-700 dark:text-gray-200" />
      </button>

      {/* Hero image */}
      <div className="relative h-96 w-full">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Hero content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="container mx-auto flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{name}</h1>
              <div className="flex items-center mb-2">
                <MapPin className="h-5 w-5 mr-1" />
                <span>{location}</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
                <span className="ml-1 font-medium">{rating}</span>
                <span className="text-gray-300 ml-1">({reviewCount} reviews)</span>
              </div>
            </div>
            
            {weather && (
              <div className="mt-4 md:mt-0">
                <WeatherDisplay weather={weather} size="lg" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        {/* Action buttons */}
        <div className="flex justify-center mb-8 gap-4">
          <button className="flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg shadow-sm transition-colors">
            <Calendar className="h-5 w-5 mr-2" />
            Plan Visit
          </button>
          <button className="flex items-center bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-lg shadow-sm transition-colors">
            <Bookmark className="h-5 w-5 mr-2" />
            Save
          </button>
          <button className="flex items-center bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-lg shadow-sm transition-colors">
            <Share2 className="h-5 w-5 mr-2" />
            Share
          </button>
        </div>

        {/* Description */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">About</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{description}</p>
        </div>

        {/* Activities */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Activities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {activities.map((activity, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <h3 className="font-medium text-gray-800 dark:text-white">{activity}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Popular activity</p>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested group size */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-8">
          <div className="flex items-start">
            <Users className="h-10 w-10 text-blue-600 dark:text-blue-400 mr-4 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Suggested Group Size</h3>
              <p className="text-gray-700 dark:text-gray-300">
                This destination is perfect for groups of 2-6 people. Larger groups may need special permits for certain activities.
              </p>
            </div>
          </div>
        </div>

        {/* Reviews section placeholder */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Reviews</h2>
            <button className="text-emerald-600 dark:text-emerald-500 hover:underline">See all</button>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
            <p className="text-gray-500 dark:text-gray-400">Reviews will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;