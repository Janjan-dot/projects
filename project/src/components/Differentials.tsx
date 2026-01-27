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
    <section className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            O que nos torna a escolha ideal para seus projetos em impressão 3D
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-red-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <item.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
