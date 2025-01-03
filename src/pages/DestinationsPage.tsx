import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Destinations from '../components/Destinations';

const DestinationsPage = () => {
  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/"
          className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-8 group transition-all duration-200"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Voltar para Home
        </Link>
      </div>
      <Destinations showAllByDefault={true} />
    </div>
  );
};

export default DestinationsPage;