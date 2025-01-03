import React from 'react';
import { ArrowRight, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_960_720.jpg"
          alt="Praia paradisíaca"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="flex items-center mb-8">
          <Plane className="h-16 w-16 text-teal-400" />
          <span className="text-3xl font-bold ml-4">Maria Excursões e Turismo</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Descubra o Seu Próximo
          <br />
          <span className="text-teal-400">Destino dos Sonhos</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
        Te ajudamos a colecionar momentos!
        </p>
        <Link 
          to="/destinos"
          className="btn btn-primary group"
        >
          <span>Explorar Destinos</span>
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;  