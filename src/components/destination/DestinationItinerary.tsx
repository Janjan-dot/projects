import React from 'react';
import { ItineraryDay } from '../../types/destinations';

interface DestinationItineraryProps {
  itinerary: ItineraryDay[];
}

const DestinationItinerary: React.FC<DestinationItineraryProps> = ({ itinerary }) => {
  return (
    <div className="space-y-6">
      {itinerary.map((day) => (
        <div key={day.day} className="border-l-4 border-teal-600 pl-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Dia {day.day} - {day.title}
          </h3>
          <ul className="space-y-2">
            {day.activities.map((activity, index) => (
              <li key={index} className="text-gray-600 flex items-center">
                <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                {activity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DestinationItinerary;