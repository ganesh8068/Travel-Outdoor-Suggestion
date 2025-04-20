import React, { useState, useEffect } from 'react';
import { getDestinations, getFeaturedDestinations, getAllActivities, getDestinationById } from './services/api';
import { Destination, SearchFilters } from './types';

// Components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SearchBar from './components/SearchBar';
import FeaturedDestinations from './components/FeaturedDestinations';
import DestinationResults from './components/DestinationResults';
import DestinationDetail from './components/DestinationDetail';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [featuredDestinations, setFeaturedDestinations] = useState<Destination[]>([]);
  const [searchResults, setSearchResults] = useState<Destination[]>([]);
  const [activities, setActivities] = useState<string[]>([]);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);
        const [featuredDestinationsData, allActivities] = await Promise.all([
          getFeaturedDestinations(),
          getAllActivities()
        ]);
        
        setFeaturedDestinations(featuredDestinationsData);
        setActivities(allActivities);
      } catch (error) {
        console.error('Error fetching initial data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleSearch = async (filters: SearchFilters) => {
    try {
      setLoading(true);
      setIsSearching(true);
      setHasSearched(true);
      
      const results = await getDestinations(filters);
      setSearchResults(results);
      
      // Scroll to results
      const resultsElement = document.getElementById('search-results');
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Error searching destinations:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDestinationClick = async (id: string) => {
    try {
      const destination = await getDestinationById(id);
      if (destination) {
        setSelectedDestination(destination);
        window.scrollTo(0, 0);
      }
    } catch (error) {
      console.error('Error fetching destination details:', error);
    }
  };

  const handleBackToResults = () => {
    setSelectedDestination(null);
  };

  const handleExploreClick = () => {
    const searchElement = document.getElementById('search-section');
    if (searchElement) {
      searchElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header isDark={darkMode} toggleDarkMode={toggleDarkMode} />
        
        {selectedDestination ? (
          <DestinationDetail 
            destination={selectedDestination} 
            onBack={handleBackToResults} 
          />
        ) : (
          <>
            <HeroSection onExploreClick={handleExploreClick} />
            
            <section id="search-section" className="py-16 bg-white dark:bg-gray-900">
              <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Find Your Perfect Outdoor Adventure
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Search for destinations by location or activity type to discover your next outdoor adventure.
                  </p>
                </div>
                
                <SearchBar onSearch={handleSearch} activities={activities} />
              </div>
            </section>
            
            {hasSearched && (
              <section id="search-results" className="bg-white dark:bg-gray-900">
                <DestinationResults 
                  destinations={searchResults} 
                  onDestinationClick={handleDestinationClick}
                  isLoading={loading}
                />
              </section>
            )}
            
            {!isSearching && (
              <FeaturedDestinations 
                destinations={featuredDestinations} 
                onDestinationClick={handleDestinationClick} 
              />
            )}
          </>
        )}
        
        <Footer />
      </div>
    </div>
  );
}

export default App;