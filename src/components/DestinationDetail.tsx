import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Users, DollarSign, MessageSquare, ArrowLeft, MapPin, Clock, CheckCircle } from 'lucide-react';
import { destinations } from '../data/destinations';
import DestinationGallery from './destination/DestinationGallery';
import DestinationItinerary from './destination/DestinationItinerary';

const DestinationDetail = () => {
  const { id } = useParams();
  const destination = destinations.find(d => d.id === Number(id));

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Destino não encontrado</h2>
          <Link to="/destinos" className="btn btn-primary inline-flex items-center">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar para Destinos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/destinos" 
          className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-8 group transition-all duration-200"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Voltar para Destinos
        </Link>

        <div className="relative h-[60vh] rounded-xl overflow-hidden mb-12">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          {destination.availability === 0 ? (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="text-white font-bold text-3xl">ESGOTADO</span>
            </div>
          ) : (
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-lg font-medium text-teal-600">
                {destination.availability} vagas disponíveis
              </span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{destination.name}</h1>
            
            <div className="space-y-8">
              <p className="text-lg text-gray-600">{destination.description}</p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2 text-teal-600" />
                  <span>{destination.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2 text-teal-600" />
                  <span>{destination.location}</span>
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

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">O que está incluído</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {destination.included.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Roteiro da Viagem</h2>
                <DestinationItinerary itinerary={destination.itinerary} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Galeria</h2>
                <DestinationGallery images={destination.gallery} name={destination.name} />
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="card p-6">
                <div className="text-3xl font-bold text-gray-900 mb-4">
                  R$ {destination.price}
                  <span className="text-lg font-normal text-gray-600">/pessoa</span>
                </div>

                <div className="space-y-4 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Formas de Pagamento</h3>
                  <ul className="space-y-2">
                    {destination.paymentMethods.map((method, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <DollarSign className="w-5 h-5 mr-2 text-teal-600" />
                        {method}
                      </li>
                    ))}
                  </ul>
                </div>

                {destination.availability > 0 && (
                  <a
                    href={destination.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn btn-primary justify-center hover:scale-105 transform transition-transform duration-200"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Reservar via WhatsApp
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;