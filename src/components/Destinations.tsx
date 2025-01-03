import React from 'react';
import { ArrowRight } from 'lucide-react';
import { destinations } from '../data/destinations';
import DestinationCard from './destination/DestinationCard';

interface DestinationsProps {
  showAllByDefault?: boolean;
}

const Destinations: React.FC<DestinationsProps> = ({ showAllByDefault = false }) => {
  const [visibleCount, setVisibleCount] = React.useState(3);
  const displayedDestinations = destinations.slice(0, visibleCount);
  const hasMore = visibleCount < destinations.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, destinations.length));
  };

  return (
    <div id="destinations" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Viagens Disponíveis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={handleLoadMore}
              className="btn btn-outline group"
            >
              <span>Ver Mais Destinos</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;