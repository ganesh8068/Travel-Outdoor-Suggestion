import React from 'react';
import { Sun, Cloud, CloudSun, CloudRain, CloudSnow } from 'lucide-react';
import { Weather } from '../types';

interface WeatherDisplayProps {
  weather: Weather;
  size?: 'sm' | 'md' | 'lg';
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather, size = 'sm' }) => {
  const getWeatherIcon = () => {
    switch (weather.icon) {
      case 'sun':
        return <Sun className={iconClass} />;
      case 'cloud':
        return <Cloud className={iconClass} />;
      case 'cloud-sun':
        return <CloudSun className={iconClass} />;
      case 'cloud-rain':
        return <CloudRain className={iconClass} />;
      case 'cloud-snow':
        return <CloudSnow className={iconClass} />;
      default:
        return <Sun className={iconClass} />;
    }
  };

  const sizeClasses = {
    sm: {
      container: 'p-1.5 text-xs',
      icon: 'h-4 w-4',
      temp: 'text-xs'
    },
    md: {
      container: 'p-2 text-sm',
      icon: 'h-5 w-5',
      temp: 'text-sm'
    },
    lg: {
      container: 'p-3 text-base',
      icon: 'h-6 w-6',
      temp: 'text-base'
    }
  };

  const { container, icon, temp } = sizeClasses[size];
  const iconClass = `${icon} ${getWeatherColor(weather.condition)}`;

  return (
    <div className={`flex items-center bg-gray-50 rounded-full ${container}`}>
      {getWeatherIcon()}
      <span className={`ml-1 font-medium ${temp}`}>{weather.temperature}°F</span>
    </div>
  );
};

const getWeatherColor = (condition: string): string => {
  switch (condition.toLowerCase()) {
    case 'sunny':
      return 'text-amber-500';
    case 'partly cloudy':
      return 'text-blue-400';
    case 'cloudy':
      return 'text-gray-500';
    case 'rainy':
      return 'text-blue-600';
    case 'snowy':
      return 'text-blue-300';
    default:
      return 'text-gray-500';
  }
};

export default WeatherDisplay;