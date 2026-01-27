import { KeyRound, Frame, Cake, Box } from 'lucide-react';

const services = [
  {
    icon: KeyRound,
    title: 'Chaveiros Personalizados',
    description: 'Chaveiros únicos com seu nome, logo ou design exclusivo. Perfeitos para presentes e brindes.'
  },
  {
    icon: Frame,
    title: 'Placas Decorativas',
    description: 'Placas personalizadas para decoração, sinalização e eventos especiais.'
  },
  {
    icon: Cake,
    title: 'Topo de Bolo',
    description: 'Topos de bolo customizados para tornar sua festa ainda mais especial e memorável.'
  },
  {
    icon: Box,
    title: 'Peças Sob Medida',
    description: 'Qualquer peça que você imaginar, criamos com precisão e qualidade em impressão 3D.'
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transformamos suas ideias em produtos reais com tecnologia de ponta
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300 border border-gray-700 hover:border-purple-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-red-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
