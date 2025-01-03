import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, DollarSign, MessageSquare } from 'lucide-react';
import { DestinationType } from '../../types/destinations';

interface DestinationCardProps {
  destination: DestinationType;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <div className="card">
      <div className="relative h-48">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover rounded-t-xl"
        />
        {destination.availability === 0 ? (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-t-xl">
            <span className="text-white font-bold text-xl">ESGOTADO</span>
          </div>
        ) : (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-sm font-medium text-teal-600">
              {destination.availability} vagas disponíveis
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{destination.name}</h3>
        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <DollarSign className="w-5 h-5 mr-2 text-teal-600" />
            <span>A partir de R$ {destination.price}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-5 h-5 mr-2 text-teal-600" />
            <span>{destination.groupSize} pessoas</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 text-teal-600" />
            <span>{destination.dates}</span>
          </div>
        </div>
        <div className="mt-6 space-y-3">
          <Link
            to={`/destino/${destination.id}`}
            className="w-full btn btn-primary justify-center"
          >
            Ver Detalhes
          </Link>
          {destination.availability > 0 && (
            <a
              href={destination.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn btn-outline justify-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Reservar via WhatsApp
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;