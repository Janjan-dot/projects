import React from 'react';
import Destinations from '../components/Destinations';

const DestinationsPage = () => {
  return (
    <div className="pt-24">
      <Destinations showAllByDefault={true} />
    </div>
  );
};

export default DestinationsPage;