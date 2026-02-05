import { MapPin, Ruler, Zap, Award } from 'lucide-react';

const differentials = [
  {
    icon: MapPin,
    title: 'Produção Local',
    description: 'Atendimento próximo e personalizado para você'
  },
  {
    icon: Ruler,
    title: 'Peças Sob Medida',
    description: 'Cada projeto é único e feito especialmente para você'
  },
  {
    icon: Zap,
    title: 'Entrega Rápida',
    description: 'Produção ágil sem comprometer a qualidade'
  },
  {
    icon: Award,
    title: 'Acabamento Profissional',
    description: 'Qualidade superior em cada detalhe'
  }
];

export default function Differentials() {
  return (
    <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-600 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            O que nos torna a escolha ideal para seus projetos em impressão 3D
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="group relative glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-red-600 rounded-2xl mb-6 group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-purple-500/30">
                  <item.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-red-500 group-hover:bg-clip-text transition-all duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {item.description}
                </p>

                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-purple-500 to-red-500 group-hover:w-8 transition-all duration-500 mx-auto"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
