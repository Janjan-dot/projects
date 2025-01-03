export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
}

export interface DestinationType {
  id: number;
  name: string;
  image: string;
  price: number;
  groupSize: string;
  dates: string;
  whatsapp: string;
  availability: number;
  maxSpots: number;
  description: string;
  duration: string;
  location: string;
  included: string[];
  itinerary: ItineraryDay[];
  paymentMethods: string[];
  gallery: string[];
}