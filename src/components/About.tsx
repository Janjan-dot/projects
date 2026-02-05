import React from 'react';
import { Heart, Globe, Shield } from 'lucide-react';

const About = () => {
  return (
    <div id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Sobre a Maria Excursões e Turismo</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Criando experiências de viagem inesquecíveis desde 2014. Acreditamos em turismo sustentável
            e intercâmbios culturais autênticos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Heart,
              title: 'Nossa Missão',
              description: 'Criar conexões significativas através de experiências de viagem que inspiram e transformam.',
            },
            {
              icon: Globe,
              title: 'Sustentabilidade',
              description: 'Comprometidos com práticas ecológicas e apoio às comunidades locais em todo o mundo.',
            },
            {
              icon: Shield,
              title: 'Confiança & Segurança',
              description: 'Sua segurança é nossa prioridade. Garantimos os mais altos padrões em todas as nossas operações.',
            },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal-600 mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa História</h3>
              <p className="text-gray-600">
                Há mais de uma década, começamos com um sonho de mostrar as maravilhas do Brasil
                para o mundo. Hoje, somos especialistas em criar roteiros únicos que combinam
                aventura, cultura e conforto, sempre respeitando as comunidades locais e o meio ambiente.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Mais de 10.000 viajantes satisfeitos
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Presença em mais de 50 destinos
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Parceiros certificados em todo o Brasil
                </li>
              </ul>
            </div>
            <div className="relative h-64 md:h-auto">
              <img
                src="https://cdn.pixabay.com/photo/2021/08/01/12/58/beach-6514331_1280.jpg"
                alt="Nossa história"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;