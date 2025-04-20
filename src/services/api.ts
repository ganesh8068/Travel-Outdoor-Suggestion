import { Destination, SearchFilters, Weather, Review, Activity } from '../types';

const MOCK_DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: 'Yosemite National Park',
    location: 'California, USA',
    description: 'Yosemite National Park is in California\'s Sierra Nevada mountains. It\'s famed for its giant, ancient sequoia trees, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.',
    activities: ['Hiking', 'Camping', 'Rock Climbing', 'Photography'],
    imageUrl: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg',
    rating: 4.8,
    reviewCount: 1243,
    isFeatured: true,
    reviews: [
      { id: '1', userId: 'user1', rating: 5, comment: 'Breathtaking views!', date: '2024-03-15' },
      { id: '2', userId: 'user2', rating: 4, comment: 'Great hiking trails', date: '2024-03-14' }
    ]
  },
  {
    id: '2',
    name: 'Valley of Flowers',
    location: 'Uttarakhand, India',
    description: 'The Valley of Flowers National Park is an Indian national park renowned for its meadows of endemic alpine flowers and outstanding natural beauty. It\'s located in the Chamoli district of Uttarakhand.',
    activities: ['Trekking', 'Photography', 'Nature Walks', 'Camping'],
    imageUrl: 'https://images.pexels.com/photos/7919/pexels-photo.jpg',
    rating: 4.9,
    reviewCount: 856,
    isFeatured: true,
    reviews: [
      { id: '3', userId: 'user3', rating: 5, comment: 'Paradise on Earth!', date: '2024-03-13' }
    ]
  },
  {
    id: '3',
    name: 'Ranthambore National Park',
    location: 'Rajasthan, India',
    description: 'Ranthambore National Park is one of India\'s largest national parks, famous for its Bengal tigers, leopards and diverse wildlife. The park features ancient ruins and a majestic fort overlooking the wilderness.',
    activities: ['Safari', 'Wildlife Photography', 'Bird Watching', 'Heritage Tours'],
    imageUrl: 'https://images.pexels.com/photos/39857/leopard-leopard-spots-animal-wild-39857.jpeg',
    rating: 4.7,
    reviewCount: 1122,
    isFeatured: true,
    reviews: [
      { id: '4', userId: 'user4', rating: 5, comment: 'Saw three tigers!', date: '2024-03-12' }
    ]
  },
  {
    id: '4',
    name: 'Goa Beaches',
    location: 'Goa, India',
    description: 'Goa\'s beautiful beaches stretch along the Arabian Sea, offering a perfect blend of relaxation and adventure. From serene shores to vibrant beach parties, there\'s something for everyone.',
    activities: ['Water Sports', 'Beach Yoga', 'Parasailing', 'Scuba Diving'],
    imageUrl: 'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg',
    rating: 4.6,
    reviewCount: 2341,
    isFeatured: true,
    reviews: [
      { id: '5', userId: 'user5', rating: 4, comment: 'Perfect beach vacation!', date: '2024-03-11' }
    ]
  },
  {
    id: '5',
    name: 'Ladakh',
    location: 'Ladakh, India',
    description: 'Ladakh, known as "Little Tibet", is a high-altitude desert featuring dramatic landscapes, Buddhist monasteries, and pristine lakes. It\'s a paradise for adventure seekers and cultural enthusiasts.',
    activities: ['Motorcycle Tours', 'Mountain Climbing', 'Monastery Visits', 'Camping'],
    imageUrl: 'https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg',
    rating: 4.8,
    reviewCount: 987,
    reviews: [
      { id: '6', userId: 'user6', rating: 5, comment: 'Unforgettable experience!', date: '2024-03-10' }
    ]
  },
  {
    id: '6',
    name: 'Kerala Backwaters',
    location: 'Kerala, India',
    description: 'The Kerala backwaters are a network of interconnected canals, rivers, lakes, and inlets formed by more than 900 km of waterways. Experience traditional houseboat cruises and serene village life.',
    activities: ['Houseboat Cruise', 'Ayurveda', 'Village Tours', 'Kayaking'],
    imageUrl: 'https://images.pexels.com/photos/5087165/pexels-photo-5087165.jpeg',
    rating: 4.9,
    reviewCount: 1456,
    reviews: [
      { id: '7', userId: 'user7', rating: 5, comment: 'Most relaxing vacation ever!', date: '2024-03-09' }
    ]
  },
  {
    id: '7',
    name: 'Taj Mahal',
    location: 'Agra, Uttar Pradesh, India',
    description: 'The iconic Taj Mahal, a UNESCO World Heritage site, is a stunning monument of love built in white marble. This architectural marvel attracts millions of visitors with its intricate designs and beautiful gardens.',
    activities: ['Heritage Tours', 'Photography', 'Cultural Experiences'],
    imageUrl: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg',
    rating: 4.9,
    reviewCount: 3245,
    reviews: []
  },
  {
    id: '8',
    name: 'Varanasi Ghats',
    location: 'Varanasi, Uttar Pradesh, India',
    description: 'Experience the spiritual heart of India along the sacred Ganges River. The ghats of Varanasi offer a unique glimpse into ancient Hindu traditions and rituals.',
    activities: ['Spiritual Tours', 'Boat Rides', 'Photography', 'Cultural Experiences'],
    imageUrl: 'https://images.pexels.com/photos/13401769/pexels-photo-13401769.jpeg',
    rating: 4.7,
    reviewCount: 1876,
    reviews: []
  },
  {
    id: '9',
    name: 'Hampi',
    location: 'Karnataka, India',
    description: 'Ancient ruins of the Vijayanagara Empire set among stunning boulder-strewn landscapes. This UNESCO site offers a perfect blend of history, architecture, and natural beauty.',
    activities: ['Rock Climbing', 'Heritage Tours', 'Photography', 'Cycling'],
    imageUrl: 'https://images.pexels.com/photos/19561345/pexels-photo-19561345.jpeg',
    rating: 4.8,
    reviewCount: 945,
    reviews: []
  },
  {
    id: '10',
    name: 'Sundarbans',
    location: 'West Bengal, India',
    description: 'The world\'s largest mangrove forest and home to the Bengal tiger. Experience unique wildlife and ecosystem in this UNESCO World Heritage site.',
    activities: ['Wildlife Safari', 'Bird Watching', 'Boat Tours', 'Nature Photography'],
    imageUrl: 'https://images.pexels.com/photos/7263/garden-flowers-tiger-animal.jpg',
    rating: 4.6,
    reviewCount: 687,
    reviews: []
  },
  {
    id: '11',
    name: 'Andaman Islands',
    location: 'Andaman and Nicobar Islands, India',
    description: 'Crystal clear waters, pristine beaches, and rich marine life make the Andaman Islands a paradise for beach lovers and water sports enthusiasts.',
    activities: ['Snorkeling', 'Scuba Diving', 'Beach Activities', 'Island Hopping'],
    imageUrl: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg',
    rating: 4.9,
    reviewCount: 2134,
    reviews: []
  }
];

const ACTIVITY_CATEGORIES: Activity[] = [
  {
    id: 'adventure',
    name: 'Adventure',
    activities: ['Trekking', 'Rock Climbing', 'Rafting', 'Paragliding']
  },
  {
    id: 'culture',
    name: 'Culture & Heritage',
    activities: ['Heritage Tours', 'Cultural Experiences', 'Temple Visits', 'Art Workshops']
  },
  {
    id: 'nature',
    name: 'Nature & Wildlife',
    activities: ['Wildlife Safari', 'Bird Watching', 'Nature Walks', 'Photography']
  },
  {
    id: 'water',
    name: 'Water Activities',
    activities: ['Snorkeling', 'Scuba Diving', 'Kayaking', 'River Rafting']
  }
];

const getRandomWeather = (): Weather => {
  const conditions = ['Sunny', 'Partly Cloudy', 'Cloudy', 'Rainy', 'Snowy'];
  const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
  const randomTemp = Math.floor(Math.random() * 35) + 40; // Random temp between 40-75°F
  
  return {
    temperature: randomTemp,
    condition: randomCondition,
    icon: getWeatherIcon(randomCondition),
  };
};

const getWeatherIcon = (condition: string): string => {
  switch (condition.toLowerCase()) {
    case 'sunny': return 'sun';
    case 'partly cloudy': return 'cloud-sun';
    case 'cloudy': return 'cloud';
    case 'rainy': return 'cloud-rain';
    case 'snowy': return 'cloud-snow';
    default: return 'sun';
  }
};

export const getDestinations = async (filters?: SearchFilters): Promise<Destination[]> => {
  await new Promise(resolve => setTimeout(resolve, 800));
  
  let filteredDestinations = [...MOCK_DESTINATIONS];
  
  if (filters) {
    if (filters.location) {
      const locationLower = filters.location.toLowerCase();
      filteredDestinations = filteredDestinations.filter(
        dest => dest.name.toLowerCase().includes(locationLower) || 
                dest.location.toLowerCase().includes(locationLower)
      );
    }
    
    if (filters.activities && filters.activities.length > 0) {
      filteredDestinations = filteredDestinations.filter(
        dest => filters.activities!.some(activity => 
          dest.activities.includes(activity)
        )
      );
    }
  }
  
  return filteredDestinations.map(dest => ({
    ...dest,
    weather: getRandomWeather()
  }));
};

export const getActivityCategories = async (): Promise<Activity[]> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return ACTIVITY_CATEGORIES;
};

export const getFeaturedDestinations = async (): Promise<Destination[]> => {
  const destinations = await getDestinations();
  return destinations.filter(dest => dest.isFeatured);
};

export const getDestinationById = async (id: string): Promise<Destination | undefined> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const destination = MOCK_DESTINATIONS.find(dest => dest.id === id);
  
  if (destination) {
    return {
      ...destination,
      weather: getRandomWeather()
    };
  }
  
  return undefined;
};

export const getAllActivities = async (): Promise<string[]> => {
  const allActivities = MOCK_DESTINATIONS.flatMap(dest => dest.activities);
  return [...new Set(allActivities)].sort();
};

export const saveDestination = async (destinationId: string): Promise<boolean> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return true;
};

export const addReview = async (destinationId: string, review: Review): Promise<boolean> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return true;
};

export const planVisit = async (destinationId: string, date: string): Promise<boolean> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return true;
};

export const planActivity = async (
  destinationId: string,
  activityName: string,
  date: string,
  participants: number
): Promise<boolean> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return true;
};

export const getSavedDestinations = async (): Promise<string[]> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return ['1', '3', '5'];
};