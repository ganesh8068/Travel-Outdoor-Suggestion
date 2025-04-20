export interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  activities: string[];
  imageUrl: string;
  rating: number;
  reviewCount: number;
  weather?: Weather;
  isFeatured?: boolean;
  reviews?: Review[];
}

export interface Weather {
  temperature: number;
  condition: string;
  icon: string;
}

export interface SearchFilters {
  location?: string;
  activities?: string[];
}

export interface Review {
  id: string;
  userId: string;
  rating: number;
  comment: string;
  date: string;
}

export interface VisitPlan {
  destinationId: string;
  date: string;
  notes?: string;
}

export interface Activity {
  id: string;
  name: string;
  activities: string[];
}

export interface ActivityPlan {
  destinationId: string;
  activityName: string;
  date: string;
  participants: number;
}