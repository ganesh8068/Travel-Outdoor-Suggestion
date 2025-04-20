import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { SearchFilters } from '../types';

interface SearchBarProps {
  onSearch: (filters: SearchFilters) => void;
  activities: string[];
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, activities }) => {
  const [location, setLocation] = useState('');
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      location: location || undefined,
      activities: selectedActivities.length > 0 ? selectedActivities : undefined
    });
  };

  const toggleActivity = (activity: string) => {
    if (selectedActivities.includes(activity)) {
      setSelectedActivities(selectedActivities.filter(a => a !== activity));
    } else {
      setSelectedActivities([...selectedActivities, activity]);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md transition-all duration-300 overflow-hidden">
      <form onSubmit={handleSearch} className="p-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search destinations or locations..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="flex-shrink-0 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-6 rounded-lg transition-colors duration-200 shadow-sm font-medium"
          >
            Search
          </button>
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="md:hidden flex-shrink-0 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors duration-200"
          >
            {isExpanded ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        <div className={`mt-4 ${isExpanded ? 'block' : 'hidden md:block'}`}>
          <h3 className="font-medium text-gray-700 mb-2">Activities</h3>
          <div className="flex flex-wrap gap-2">
            {activities.map((activity) => (
              <button
                key={activity}
                type="button"
                onClick={() => toggleActivity(activity)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedActivities.includes(activity)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {activity}
              </button>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;